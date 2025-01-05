---
sticky: 2
title: 我的博客搭建之路
date: 2024-11-12
categories:
 - 其他
tags:
 - 博客
---

我的博客地址：[www.lxang723.blog](https://www.lxang723.blog)  

## 总结
使用 vuepress-reco 2.x 做为博客主题。

## 1. VuePress 和 Reco

[VuePress](https://v2.vuepress.vuejs.org/zh/guide/introduction.html)  是一个以 Markdown 为中心的静态网站生成器。

VuePress 可以将 Markdown 文件编译为 HTML，并且根据 Markdown 文件的相对路径自动生成路由。

[VuePress 市场](https://marketplace.vuejs.press/zh/) 中提供很多插件与主题，[Reco](https://theme-reco.vuejs.press/) 则是一款简洁的 vuepress 博客 & 文档 主题。

Reco 主题的使用可参考：[vuepress-reco 的使用](vuepress-reco.md) 。

## 2. 使用 GitHub Pages 创建个人站点

GitHub Pages 是通过 GitHub 托管和发布的公共网页。
GitHub Pages 是一项静态站点托管服务，它直接从 GitHub 上的仓库获取 HTML、CSS 和 JavaScript 文件，（可选）通过构建过程运行文件，然后发布网站。

[GitHub Pages 文档](https://docs.github.com/zh/pages)  

::: details GitHub&nbsp;Pages&nbsp;站点的类型

GitHub Pages 站点共有三种类型：个人、组织和项目。

**个人站点（用户页面仓库）：** 仓库名称为 `<username>.github.io` ，对应的访问地址为 `http(s)://<username>.github.io`。例如：仓库名称为 `lxang723.github.io` ，则访问地址为 `https://lxang723.github.io`。  

**项目站点（项目页面仓库）：** 仓库名称为 `<repository>` ，对应的访问地址为 ``http(s)://<username>.github.io/<repository>``。
例如：仓库名称为 `blog` ，则访问地址为 `https://lxang723.github.io/blog`，会包含二级目录。

如果你有购买域名的打算，建议创建个人站点。

发布时，站点类型对 .vuepress\config.ts 中的 base 也会有影响，可参考 [VuePress 部署](https://v2.vuepress.vuejs.org/zh/guide/deployment.html) 。

:::

### 2.1 为站点创建仓库

① 在任何页面的右上角，点击 + 按钮，点击 `New repository`，新建仓库。  
② 在 Repository name 输入 `<username>.github.io`。  
③ 选择仓库可见性 `Public`。  
④ 勾选 `Add a README file`，GitHub Pages 将查找 index.html、index.md 或 README.md 文件，作为站点的入口文件。  
⑤ 点击 `Create repository`，创建仓库。

### 2.2 创建站点（配置站点的发布源）

必须先在 GitHub 上有站点的仓库，然后才可创建站点。

① 在 `<username>.github.io` 仓库中，点击 `Settings`，进入设置页面。  
② 点击侧边栏 Code and automation（代码和自动化）下的 `Pages`，进入 GitHub Pages 配置页面。  
③ Build and deployment（构建和部署）的 Source（源）下，选择 `Deploy from a branch` （从分支进行部署）。  
④ Build and deployment 的 Branch（分支） 选择 `main`，folder 选择 `/(root)`，点击 Save 。  
⑤ 点击 `Visit site`（访问网站）按钮，查看已发布的网站。

---

经过 2.1 和 2.2 的操作，我们已经可以看到 GitHub Pages 站点的效果了。

**思考：**  

假设你已经成功运行了 vuepress-reco 2.x ，现在想要把 vuepress-reco 部署到站点，我们先要执行 `npm run build` 在 `.vuepress/dist` 文件夹下生成静态文件，
然后将静态文件上传到站点仓库中。

同时，我们也想使用这个仓库管理文章和代码，也就是文章和静态文件在同一个仓库。
我们可以使用 `main` 分支管理文章和代码，再创建一个 `gh-pages` 分支来存放生成的静态文件，将 `gh-pages` 分支作为发布源。
这样一来我们每次发布文章时，需要上传到 `main` 分支，再将静态文件上传到 `gh-pages` 分支。

现在，我们需要简化部署流程，使用 GitHub Actions 工作流来构建和部署站点源文件，实现自动化部署。  
在对 `main` 分支进行推送后，自动触发部署任务：
对 `main` 分支的代码进行 `npm install && npm run build`，然后将 `.vuepress/dist` 文件夹下生成静态文件推送到 `gh-pages` 分支，发布站点。

这样一来，每次发布文章时，只需要推送到 `main` 分支即可，无需手动构建和部署。

## 3. 使用 GitHub Actions 自动部署博客

GitHub Actions 是一种持续集成和持续交付 (CI/CD) 平台，可用于自动执行生成、测试和部署管道。 你可以创建工作流，以便在推送更改到存储库时运行测试，或将合并的拉取请求部署到生产环境。

[GitHub Actions 文档](https://docs.github.com/zh/actions)

### 3.1 创建 Personal access tokens

① 进入 GitHub，点击右上角头像，选择 `Settings`。  
② 点击侧边栏最下面的 **Developer Settings**。  
③ 点击侧边栏 **Personal access tokens**，选择 `Tokens (classic)`。  
④ 点击 `Generate new token` 按钮，选择 `Generate new toke (classic)`。  
⑤ 填写 **Note** 备注，**Expiration** 选择 `No expiration`，**Select scopes**，勾选 `repo`权限，点击 `Generate token` 按钮。  
⑥ 复制 token。忘记了可以进入 Note（你备注的那个），点击 `Regenerate token` 按钮重新生成。

### 3.2 设置 Repository secrets

① 在 `<username>.github.io` 仓库中，点击 `Settings`，进入设置页面。  
② 点击侧边栏 **Security** 下的 `Secrets and variables`（秘钥和变量），选择 `Actions`，进入页面。  
③ 点击 **Repository secrets** 部分的  `New repository secret` 按钮，添加仓库秘钥。  
④ 填写 **Name** 名称为 `ACCESS_TOKEN`，填写 **Secret** 为复制的 token 。

### 3.2 编写工作流文件

在 vuepress-reco 项目根目录下，创建一个名为 `.github/workflows/deploy.yml` 的文件。
文件名没有强制要求，你可以自由选择文件名，例如 `deploy.yml`、`ci.yml` 或其他描述性名称。
关键点是确保文件放置在 `.github/workflows` 目录中，并遵循正确的 YAML 格式和 GitHub Actions 配置规则。

::: details deploy.yml

``` yaml
name: Deploy VuePress Site

# 触发条件：在 push 到 main  分支后
on:
  push:
    branches:
      - main

# 任务
jobs:
  build-and-deploy:
    # 服务器环境：最新版 Ubuntu
    runs-on: ubuntu-latest
    steps:

      # 拉取代码
      - name: Checkout code
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      
      # 设置 Node.js
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          # 启用缓存，加速构建，提高效率
          cache: npm
      
      # 可以使用 npm install && npm run build 将两步合并
      - name: Install dependencies
        run: npm install
      
      - name: Build VuePress site
        run: npm run build

      # 部署到 GitHub Pages
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: gh-pages
          FOLDER: .vuepress/dist
```
:::

注意：  
`cache: npm`：启用缓存，可减少依赖安装时间。
缓存机制会根据锁定文件（ package-lock.json 或 yarn.lock ）等文件生成唯一的缓存键。
所以项目中的 package-lock.json 需提交到 Git 仓库中。  

可以在仓库的 `Actions` 新建工作流文件和查看工作流程结果。



[NameSilo](https://www.namesilo.com/)

[Free Logo Maker | NameSilo](https://www.namesilo.com/free-logo-maker)

[管理 GitHub Pages 站点的自定义域](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

在 GitHub Pages 下，选择“强制实施 HTTPS”。

对您的 GitHub Pages 站点强制实施 HTTPS

[Cloudflare](https://dash.cloudflare.com/)

[Cloudflare Docs](https://developers.cloudflare.com/learning-paths/get-started-free/?utm_medium=email&utm_source=transactional&utm_campaign=ca-confirmed-free)


