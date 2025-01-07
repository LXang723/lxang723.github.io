import recoTheme from "vuepress-theme-reco";

export default recoTheme({
    style: "@vuepress-reco/style-default",
    // primaryColor: '#3aa675', // 自定义主题的基础色  #3aa675
    locales: {
        '/': {
            selectLanguageName: '简体中文',
            lastUpdatedText: '最后更新时间',
            catalogTitle: '页面导航',
            tip: '提示',
            info: '信息',
            warning: '警告',
            danger: '危险',
            details: '详情',
            editLinkText: '编辑当前页面',
            notFound: '哇哦，没有发现这个页面！',
            backToHome: '返回首页'
        }
    },
    colorMode: 'light',
    logo: "/images/head/square.png",
    author: "LXang723",
    authorAvatar: "/images/head/square.png",
    // https://theme-reco.vuejs.press/docs/theme/git.html
    // docsRepo 配置完，会在导航栏自动生成 GitHub 图标，而且会影响 编辑当前页面
    docsRepo: "https://github.com/LXang723/lxang723.github.io", // 文档源文件的仓库 URL
    docsBranch: "main", // 文档源文件的仓库分支。它将会用于生成 编辑此页 的链接。
    docsDir: "", // 文档项目存放在工程的子目录。
    // lastUpdatedText: "最后更新时间",
    friendshipLinks: [
        {
            title: 'vuepress-reco',
            logo: 'https://avatars.githubusercontent.com/u/54167020?s=200&v=4',
            link: 'https://theme-reco.vuejs.press/'
        },
        {
            title: 'vuepress',
            logo: 'https://avatars.githubusercontent.com/u/48539483?s=200&v=4',
            link: 'https://v2.vuepress.vuejs.org/zh/'
        },
        {
            title: 'spring-boot-2.7.18',
            logo: 'https://avatars.githubusercontent.com/u/317776?s=200&v=4',
            link: 'https://docs.spring.io/spring-boot/docs/2.7.18/reference/html/'
        },
        {
            title: 'spring-5.3.39',
            logo: 'https://avatars.githubusercontent.com/u/317776?s=200&v=4',
            link: 'https://docs.spring.io/spring-framework/docs/5.3.39/reference/html/'
        },
    ],
    // 自动设置系列（bug）https://github.com/vuepress-reco/vuepress-theme-reco/issues/278
    // autoSetSeries: true,
    // https://theme-reco.vuejs.press/docs/theme/series.html
    series: {
        "/blogs/middleware/": [
            {
            text: "RabbitMQ",
            children: ["rabbitmq/rabbitmq"],
            },
            {
            text: "Elasticsearch",
            children: ["elasticsearch/elastic"],
            },
        ],
        "/blogs/tools/": [
            {
            text: "Git",
            children: ["git/git", "git/git-cheat-sheet"],
            },
            {
            text: "Docker",
            children: ["docker/docker"],
            },
        ],
        "/series/java/": [
            {
            text: "JavaSE",
            children: ["javase/javase"],
            },
            {
            text: "JavaWeb",
            children: ["javaweb/javaweb"],
            },
        ],
    },
    // 自动设置分类（注意文件夹结构，只能使用一层文件夹）
    // autoSetBlogCategories: true,
    // autoAddCategoryToNavbar API 后期会做调整，但不会废弃，请谨慎使用。
    // 自动将分类和标签添加至头部导航条
    // autoAddCategoryToNavbar: {
    //   location: 1, // 插入位置，默认 0
    //   showIcon: true, // 展示图标，默认 false
    // },
    // 当 autoAddCategoryToNavbar 为 true 时，则全部取默认值
    // autoAddCategoryToNavbar: true,
    // 图标 https://www.xicons.org/#/zh-CN
    // 导航栏
    navbar: [
        { text: "首页", link: "/", icon: 'IconHome' }, // Home
        // categories 和 tags 的路径需要根据 build 后的文件确定，设定一个不会变的
        { text: "分类", link: "/categories/Overview/1.html", icon: 'IconCategory' }, // Categories
        { text: "标签", link: "/tags/Overview/1.html", icon: 'IconTag' }, // Tags
        // 内置页面： /timeline.html（归档、时间轴页面） 、/posts.html（博客列表页面） 、/friendship-link.html（友情链接）
        // { text: "归档", link: "/timeline.html", icon: 'IconTimeline' },
        { text: "博客", link: "/posts.html", icon: 'IconBlog' }, // Blogs
        // { text: "链接", link: "/friendship-link.html", icon: 'IconLink' }, // Links
        { text: "Java", link: "/series/java/javase/javase", icon: 'IconJava' },
        // {
        //   text: "Java",
        //   icon: 'IconJava',
        //   children: [
        //     { text: "JavaSE", link: "/series/java/javase/javase", icon: 'IconJava' },
        //     { text: "JavaWeb", link: "/series/java/javaweb/javaweb", icon: 'IconJava' }
        //   ]
        // },
        {
            text: "中间件", // Middleware
            icon: 'IconMiddle',
            children: [
                { text: "RabbitMQ", link: "/blogs/middleware/rabbitmq/rabbitmq", icon: 'IconRabbitMQ' },
                { text: "Elasticsearch", link: "/blogs/middleware/elasticsearch/elastic", icon: 'IconElasticsearch' }
            ]
        },
    ],
    // socialLinks 和 docsRepo 同时配置，切换导航时会重复生成 IconGithub
    // socialLinks: [
    //   { icon: 'IconTag', link: 'https://twitter.com/yourname' },
    //   { icon: 'IconHome', link: 'https://linkedin.com/in/yourname' },
    // ],
    // 公告
    // https://theme-reco.vuejs.press/docs/theme/bulletin-popover.html
    bulletin: {
        title: '柒月廿三，浅笔流年',
        body: [
            {
                type: "text",
                content: `如果你对我的博客内容有任何问题或建议，欢迎联系我。`,
                style: "font-size: 16px;",
            },
            {
                type: "hr",
            },
            {
                type: "title",
                content: "我的邮箱",
            },
            {
                type: "text",
                content: `
                <ul>
                    <li><a href="https://www.cnblogs.com/july23">lxang723@163.com<a/></li>
                    <li><a href="https://blog.csdn.net/LXang723">lxang723@gmail.com<a/></li>
                </ul>`,
                style: "font-size: 16px;",
            },
            {
                type: "hr",
            },
            {
                type: "text",
                content: `期待与你一起探索更多的技术与生活乐趣。`,
                style: "font-size: 16px;",
            },
        ],
    },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
})