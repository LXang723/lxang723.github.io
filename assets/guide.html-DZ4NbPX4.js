import{_ as i,c as r,b as n,f as e,d as a,e as c,a as o,r as l,o as u}from"./app-DQZvP9-W.js";const d={},m={href:"https://www.lxang723.blog",target:"_blank",rel:"noopener noreferrer"},k={href:"https://v2.vuepress.vuejs.org/zh/guide/introduction.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://marketplace.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://theme-reco.vuejs.press/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://docs.github.com/zh/pages",target:"_blank",rel:"noopener noreferrer"},h={class:"custom-container details"},y={href:"https://v2.vuepress.vuejs.org/zh/guide/deployment.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://docs.github.com/zh/actions",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.namesilo.com/",target:"_blank",rel:"noopener noreferrer"},H={href:"https://www.namesilo.com/free-logo-maker",target:"_blank",rel:"noopener noreferrer"},x={href:"https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site",target:"_blank",rel:"noopener noreferrer"},G={href:"https://dash.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://developers.cloudflare.com/learning-paths/get-started-free/?utm_medium=email&utm_source=transactional&utm_campaign=ca-confirmed-free",target:"_blank",rel:"noopener noreferrer"};function S(w,s){const t=l("ExternalLinkIcon"),p=l("RouteLink");return u(),r("div",null,[n("p",null,[s[1]||(s[1]=e("我的博客地址：")),n("a",m,[s[0]||(s[0]=e("www.lxang723.blog")),a(t)])]),s[22]||(s[22]=n("h2",{id:"总结",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#总结"},[n("span",null,"总结")])],-1)),s[23]||(s[23]=n("p",null,"使用 vuepress-reco 2.x 做为博客主题。",-1)),s[24]||(s[24]=n("h2",{id:"_1-vuepress-和-reco",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-vuepress-和-reco"},[n("span",null,"1. VuePress 和 Reco")])],-1)),n("p",null,[n("a",k,[s[2]||(s[2]=e("VuePress")),a(t)]),s[3]||(s[3]=e(" 是一个以 Markdown 为中心的静态网站生成器。"))]),s[25]||(s[25]=n("p",null,"VuePress 可以将 Markdown 文件编译为 HTML，并且根据 Markdown 文件的相对路径自动生成路由。",-1)),n("p",null,[n("a",b,[s[4]||(s[4]=e("VuePress 市场")),a(t)]),s[6]||(s[6]=e(" 中提供很多插件与主题，")),n("a",g,[s[5]||(s[5]=e("Reco")),a(t)]),s[7]||(s[7]=e(" 则是一款简洁的 vuepress 博客 & 文档 主题。"))]),n("p",null,[s[9]||(s[9]=e("Reco 主题的使用可参考：")),a(p,{to:"/blogs/other/vuepress-reco.html"},{default:c(()=>s[8]||(s[8]=[e("vuepress-reco 的使用")])),_:1}),s[10]||(s[10]=e(" 。"))]),s[26]||(s[26]=n("h2",{id:"_2-使用-github-pages-创建个人站点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-使用-github-pages-创建个人站点"},[n("span",null,"2. 使用 GitHub Pages 创建个人站点")])],-1)),s[27]||(s[27]=n("p",null,"GitHub Pages 是通过 GitHub 托管和发布的公共网页。 GitHub Pages 是一项静态站点托管服务，它直接从 GitHub 上的仓库获取 HTML、CSS 和 JavaScript 文件，（可选）通过构建过程运行文件，然后发布网站。",-1)),n("p",null,[n("a",v,[s[11]||(s[11]=e("GitHub Pages 文档")),a(t)])]),n("details",h,[s[15]||(s[15]=o('<summary class="custom-container-title">GitHub Pages 站点的类型</summary><p>GitHub Pages 站点共有三种类型：个人、组织和项目。</p><p><strong>个人站点（用户页面仓库）：</strong> 仓库名称为 <code>&lt;username&gt;.github.io</code> ，对应的访问地址为 <code>http(s)://&lt;username&gt;.github.io</code>。例如：仓库名称为 <code>lxang723.github.io</code> ，则访问地址为 <code>https://lxang723.github.io</code>。</p><p><strong>项目站点（项目页面仓库）：</strong> 仓库名称为 <code>&lt;repository&gt;</code> ，对应的访问地址为 <code>http(s)://&lt;username&gt;.github.io/&lt;repository&gt;</code>。 例如：仓库名称为 <code>blog</code> ，则访问地址为 <code>https://lxang723.github.io/blog</code>，会包含二级目录。</p><p>如果你有购买域名的打算，建议创建个人站点。</p>',5)),n("p",null,[s[13]||(s[13]=e("发布时，站点类型对 .vuepress\\config.ts 中的 base 也会有影响，可参考 ")),n("a",y,[s[12]||(s[12]=e("VuePress 部署")),a(t)]),s[14]||(s[14]=e(" 。"))])]),s[28]||(s[28]=o('<h3 id="_2-1-为站点创建仓库" tabindex="-1"><a class="header-anchor" href="#_2-1-为站点创建仓库"><span>2.1 为站点创建仓库</span></a></h3><p>① 在任何页面的右上角，点击 + 按钮，点击 <code>New repository</code>，新建仓库。<br> ② 在 Repository name 输入 <code>&lt;username&gt;.github.io</code>。<br> ③ 选择仓库可见性 <code>Public</code>。<br> ④ 勾选 <code>Add a README file</code>，GitHub Pages 将查找 index.html、index.md 或 README.md 文件，作为站点的入口文件。<br> ⑤ 点击 <code>Create repository</code>，创建仓库。</p><h3 id="_2-2-创建站点-配置站点的发布源" tabindex="-1"><a class="header-anchor" href="#_2-2-创建站点-配置站点的发布源"><span>2.2 创建站点（配置站点的发布源）</span></a></h3><p>必须先在 GitHub 上有站点的仓库，然后才可创建站点。</p><p>① 在 <code>&lt;username&gt;.github.io</code> 仓库中，点击 <code>Settings</code>，进入设置页面。<br> ② 点击侧边栏 Code and automation（代码和自动化）下的 <code>Pages</code>，进入 GitHub Pages 配置页面。<br> ③ Build and deployment（构建和部署）的 Source（源）下，选择 <code>Deploy from a branch</code> （从分支进行部署）。<br> ④ Build and deployment 的 Branch（分支） 选择 <code>main</code>，folder 选择 <code>/(root)</code>，点击 Save 。<br> ⑤ 点击 <code>Visit site</code>（访问网站）按钮，查看已发布的网站。</p><hr><p>经过 2.1 和 2.2 的操作，我们已经可以看到 GitHub Pages 站点的效果了。</p><p><strong>思考：</strong></p><p>假设你已经成功运行了 vuepress-reco 2.x ，现在想要把 vuepress-reco 部署到站点，我们先要执行 <code>npm run build</code> 在 <code>.vuepress/dist</code> 文件夹下生成静态文件， 然后将静态文件上传到站点仓库中。</p><p>同时，我们也想使用这个仓库管理文章和代码，也就是文章和静态文件在同一个仓库。 我们可以使用 <code>main</code> 分支管理文章和代码，再创建一个 <code>gh-pages</code> 分支来存放生成的静态文件，将 <code>gh-pages</code> 分支作为发布源。 这样一来我们每次发布文章时，需要上传到 <code>main</code> 分支，再将静态文件上传到 <code>gh-pages</code> 分支。</p><p>现在，我们需要简化部署流程，使用 GitHub Actions 工作流来构建和部署站点源文件，实现自动化部署。<br> 在对 <code>main</code> 分支进行推送后，自动触发部署任务： 对 <code>main</code> 分支的代码进行 <code>npm install &amp;&amp; npm run build</code>，然后将 <code>.vuepress/dist</code> 文件夹下生成静态文件推送到 <code>gh-pages</code> 分支，发布站点。</p><p>这样一来，每次发布文章时，只需要推送到 <code>main</code> 分支即可，无需手动构建和部署。</p><h2 id="_3-使用-github-actions-自动部署博客" tabindex="-1"><a class="header-anchor" href="#_3-使用-github-actions-自动部署博客"><span>3. 使用 GitHub Actions 自动部署博客</span></a></h2><p>GitHub Actions 是一种持续集成和持续交付 (CI/CD) 平台，可用于自动执行生成、测试和部署管道。 你可以创建工作流，以便在推送更改到存储库时运行测试，或将合并的拉取请求部署到生产环境。</p>',14)),n("p",null,[n("a",f,[s[16]||(s[16]=e("GitHub Actions 文档")),a(t)])]),s[29]||(s[29]=o(`<h3 id="_3-1-创建-personal-access-tokens" tabindex="-1"><a class="header-anchor" href="#_3-1-创建-personal-access-tokens"><span>3.1 创建 Personal access tokens</span></a></h3><p>① 进入 GitHub，点击右上角头像，选择 <code>Settings</code>。<br> ② 点击侧边栏最下面的 <strong>Developer Settings</strong>。<br> ③ 点击侧边栏 <strong>Personal access tokens</strong>，选择 <code>Tokens (classic)</code>。<br> ④ 点击 <code>Generate new token</code> 按钮，选择 <code>Generate new toke (classic)</code>。<br> ⑤ 填写 <strong>Note</strong> 备注，<strong>Expiration</strong> 选择 <code>No expiration</code>，<strong>Select scopes</strong>，勾选 <code>repo</code>权限，点击 <code>Generate token</code> 按钮。<br> ⑥ 复制 token。忘记了可以进入 Note（你备注的那个），点击 <code>Regenerate token</code> 按钮重新生成。</p><h3 id="_3-2-设置-repository-secrets" tabindex="-1"><a class="header-anchor" href="#_3-2-设置-repository-secrets"><span>3.2 设置 Repository secrets</span></a></h3><p>① 在 <code>&lt;username&gt;.github.io</code> 仓库中，点击 <code>Settings</code>，进入设置页面。<br> ② 点击侧边栏 <strong>Security</strong> 下的 <code>Secrets and variables</code>（秘钥和变量），选择 <code>Actions</code>，进入页面。<br> ③ 点击 <strong>Repository secrets</strong> 部分的 <code>New repository secret</code> 按钮，添加仓库秘钥。<br> ④ 填写 <strong>Name</strong> 名称为 <code>ACCESS_TOKEN</code>，填写 <strong>Secret</strong> 为复制的 token 。</p><h3 id="_3-2-编写工作流文件" tabindex="-1"><a class="header-anchor" href="#_3-2-编写工作流文件"><span>3.2 编写工作流文件</span></a></h3><p>在 vuepress-reco 项目根目录下，创建一个名为 <code>.github/workflows/deploy.yml</code> 的文件。 文件名没有强制要求，你可以自由选择文件名，例如 <code>deploy.yml</code>、<code>ci.yml</code> 或其他描述性名称。 关键点是确保文件放置在 <code>.github/workflows</code> 目录中，并遵循正确的 YAML 格式和 GitHub Actions 配置规则。</p><details class="custom-container details"><summary class="custom-container-title">deploy.yml</summary><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy VuePress Site</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 触发条件：在 push 到 main  分支后</span></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> main</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 任务</span></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 服务器环境：最新版 Ubuntu</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment"># 拉取代码</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout code</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment"># 设置 Node.js</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up Node.js</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">20</span></span>
<span class="line">          <span class="token comment"># 启用缓存，加速构建，提高效率</span></span>
<span class="line">          <span class="token key atrule">cache</span><span class="token punctuation">:</span> npm</span>
<span class="line">      </span>
<span class="line">      <span class="token comment"># 可以使用 npm install &amp;&amp; npm run build 将两步合并</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run build</span>
<span class="line"></span>
<span class="line">      <span class="token comment"># 部署到 GitHub Pages</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">ACCESS_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">BRANCH</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages</span>
<span class="line">          <span class="token key atrule">FOLDER</span><span class="token punctuation">:</span> .vuepress/dist</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>注意：<br><code>cache: npm</code>：启用缓存，可减少依赖安装时间。 缓存机制会根据锁定文件（ package-lock.json 或 yarn.lock ）等文件生成唯一的缓存键。 所以项目中的 package-lock.json 需提交到 Git 仓库中。</p><p>可以在仓库的 <code>Actions</code> 新建工作流文件和查看工作流程结果。</p>`,9)),n("p",null,[n("a",P,[s[17]||(s[17]=e("NameSilo")),a(t)])]),n("p",null,[n("a",H,[s[18]||(s[18]=e("Free Logo Maker | NameSilo")),a(t)])]),n("p",null,[n("a",x,[s[19]||(s[19]=e("管理 GitHub Pages 站点的自定义域")),a(t)])]),s[30]||(s[30]=n("p",null,"在 GitHub Pages 下，选择“强制实施 HTTPS”。",-1)),s[31]||(s[31]=n("p",null,"对您的 GitHub Pages 站点强制实施 HTTPS",-1)),n("p",null,[n("a",G,[s[20]||(s[20]=e("Cloudflare")),a(t)])]),n("p",null,[n("a",_,[s[21]||(s[21]=e("Cloudflare Docs")),a(t)])])])}const C=i(d,[["render",S],["__file","guide.html.vue"]]),A=JSON.parse('{"path":"/blogs/other/guide.html","title":"我的博客搭建之路","lang":"en-US","frontmatter":{"sticky":2,"title":"我的博客搭建之路","date":"2024-11-12T00:00:00.000Z","categories":["其他"],"tags":["博客"]},"headers":[{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"1. VuePress 和 Reco","slug":"_1-vuepress-和-reco","link":"#_1-vuepress-和-reco","children":[]},{"level":2,"title":"2. 使用 GitHub Pages 创建个人站点","slug":"_2-使用-github-pages-创建个人站点","link":"#_2-使用-github-pages-创建个人站点","children":[{"level":3,"title":"2.1 为站点创建仓库","slug":"_2-1-为站点创建仓库","link":"#_2-1-为站点创建仓库","children":[]},{"level":3,"title":"2.2 创建站点（配置站点的发布源）","slug":"_2-2-创建站点-配置站点的发布源","link":"#_2-2-创建站点-配置站点的发布源","children":[]}]},{"level":2,"title":"3. 使用 GitHub Actions 自动部署博客","slug":"_3-使用-github-actions-自动部署博客","link":"#_3-使用-github-actions-自动部署博客","children":[{"level":3,"title":"3.1 创建 Personal access tokens","slug":"_3-1-创建-personal-access-tokens","link":"#_3-1-创建-personal-access-tokens","children":[]},{"level":3,"title":"3.2 设置 Repository secrets","slug":"_3-2-设置-repository-secrets","link":"#_3-2-设置-repository-secrets","children":[]},{"level":3,"title":"3.2 编写工作流文件","slug":"_3-2-编写工作流文件","link":"#_3-2-编写工作流文件","children":[]}]}],"git":{"createdTime":1736081154000,"updatedTime":1736081154000,"contributors":[{"name":"柒月廿三","email":"lxang723@163.com","commits":1}]},"filePathRelative":"blogs/other/guide.md"}');export{C as comp,A as data};