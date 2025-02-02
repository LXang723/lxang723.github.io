---
title: 使用 Reco 的一些技巧与心得
date: 2025-02-02
tags:
 - Reco
 - Blog
categories:
 - Blog
---

## 1. 技巧

### 1.1. 内置页面

Reco 主题内置了以下页面：

- `/categories/xxx/1.html`：Categories（分类）默认页。
- `/tags/xxx/1.html`：Tags（标签）默认页。
- `/timeline.html`：归档、时间轴页面。
- `/posts.html`：博客列表页面。
- `/friendship-link.html`：友情链接。

::: warning 注意
categories 和 tags 的路径需要根据 build 后的文件确定，尽量设定一个固定的。  
中文的分类和标签会转换为拼音。  
categories 和 tags 的顺序会根据 sticky 进行排序，拥有 sticky 属性的 md 文件会排在靠前的位置。
:::

导航栏空间有限，需避免内容过于拥挤。

可以将所有的内置功能，添加到一个集合里面。

``` ts
{
    text: 'Reco', // In-Reco Reco 内置
    // icon: 'IconClipboard',
    children: [
        // Categories 分类
        { text: '分类', link: '/categories/Blog/1', icon: 'IconCategory' },
        // Tags 标签
        { text: '标签', link: '/tags/Blog/1', icon: 'IconTag' },
        // Timeline 归档
        { text: '归档', link: '/timeline', icon: 'IconTimeline' },
        // Blogs 博客
        { text: '博客', link: '/posts', icon: 'IconBlog' },
        // Links 链接
        { text: '链接', link: '/friendship-link', icon: 'IconLink' },
        { text: '留言板', link: '/docs/other/message-board', icon: 'IconMessageBoard' }
    ]
}
```

### 1.2. 文件夹说明

blogs 文件夹下的 md 文件会生成相应的 `tags` 和 `categories` 导航页内容。  
而 docs 和 series 文件夹不会（截至 v2.0.0-rc.26）。

所以 docs 和 series 文件夹下的 md 文件，尽量不要添加 `tags` 与 `categories` 。  
否则在点击文章内容页中标题下方的 `标签` 与 `分类` 时，会出现 404 的情况。

**官方约束**：

参见：[文件夹规范](https://theme-reco.vuejs.press/docs/guide/folder-specification.html)

- blogs 文件夹（强制）：博客文章。
- series 文件夹（强制）：文档系列，存放文章合集。
- docs 文件夹（不强制）：普通文档，例如可以将留言板页面放入此文件夹中。

官方对 series 文件夹进行强制约束，可能计划了一些功能但暂未完全实现。

### 1.3. 系列

文章合集可以整理成一个系列，按照主题、时间顺序或技术类别进行分类。

每个系列可以包含多篇文章，逐步深入探讨某个话题。

### 1.4. 配置拆分

可以将 config.ts 拆分为多个文件，方便快速配置。

可参考：

- theme.ts：reco 主题配置。
- navbar.ts：导航配置。
- series.ts：系列配置。
- links.ts：友链配置。

在 config.ts 文件中引入 theme.ts：

``` ts
import theme from './theme.js';
```

在 theme.ts 文件中引入 - navbar.ts、series.ts 和 links.ts：

``` ts
import recoTheme from 'vuepress-theme-reco';
import navbar from './navbar.js';
import series from './series.js';
import links from './links.js';
```

### 1.5. 索引页

可以在分类文件夹下添加一个 `index.md`（索引页），添加文章合集（系列）的索引，或内容概览。

在 `navbar.ts` 内将 `link` 配置为系列对应的文件夹即可。

``` ts
{
  text: '笔记',
  children: [
    { text: '学习笔记', link: '/series/learning-notes/', icon: 'IconEdit' },
    { text: '阅读笔记', link: '/blogs/reading/', icon: 'IconEdit' },
    { text: '技术笔记', link: '/series/tech/', icon: 'IconEdit' }
  ]
}
```

## 2. 心得

### 2.1. 专注内容

尽量不去修改 Reco 的样式，专注与写博客文章。

### 2.2. 画脑图

写文章之前，可以先尝试着画脑图。这样做的好处包括：

1. **理清思路**：通过脑图可以将文章的主题、子主题和关键点可视化，帮助你更清晰地组织思路。
2. **提高效率**：脑图能够快速梳理文章结构，避免写作过程中思路混乱或遗漏重要内容。
3. **激发灵感**：在绘制脑图的过程中，可能会发现新的关联点或创意，丰富文章内容。
4. **逻辑更清晰**：脑图有助于构建文章的逻辑框架，使文章层次分明，读者更容易理解。
5. **节省时间**：<u>提前规划好文章结构，可以减少写作时的修改和调整时间</u>。

导出 `drawio` 文件或 `XMind` 文件时，可根据情况（线条颜色）勾选 `透明背景` 选项，会影响深色、浅色主题显示效果。
有黑色线条时，不勾选 `透明背景` 选项。  
尽量导出 `svg` 格式，放大缩小不失真。  
