import recoTheme from 'vuepress-theme-reco';
import navbar from './navbar.js';
import series from './series.js';
import links from './links.js';

export default recoTheme({
    // primaryColor: '#3aa675', // 自定义主题的基础色  #3aa675 #727cf5
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
    colorMode: 'dark',
    logo: '/images/head.png',
    author: 'LXang723',
    authorAvatar: '/images/head.png',
    // https://theme-reco.vuejs.press/docs/theme/git.html
    // docsRepo 配置完，会在导航栏自动生成 GitHub 图标，而且会影响 编辑当前页面
    docsRepo: 'https://github.com/LXang723/lxang723.github.io', // 文档源文件的仓库 URL
    docsBranch: 'main', // 文档源文件的仓库分支。它将会用于生成 编辑此页 的链接。
    docsDir: '', // 文档项目存放在工程的子目录。
    // lastUpdatedText: '最后更新时间',
    friendshipLinks: links,
    // 自动设置系列（bug）https://github.com/vuepress-reco/vuepress-theme-reco/issues/278
    // autoSetSeries: true,
    // https://theme-reco.vuejs.press/docs/theme/series.html
    series: series,
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
    // 导航栏
    navbar: navbar,
    socialLinks: [
        { icon: 'IconSocialInstagram', link: 'https://www.instagram.com/723xangl' },
        { icon: 'IconSocialTwitter', link: 'https://x.com/723XangL' },
    ],
    // 公告
    // https://theme-reco.vuejs.press/docs/theme/bulletin-popover.html
    bulletin: {
        title: '柒月廿三，浅笔流年',
        body: [
            {
                type: 'text',
                content: `如果你对我的博客内容有任何问题或建议，欢迎联系我。`,
                style: 'font-size: 16px;',
            },
            {
                type: 'hr',
            },
            {
                type: 'title',
                content: '我的邮箱',
            },
            {
                type: 'text',
                content: `
                <ul>
                    <li>lxang723@163.com</li>
                    <li>lxang723@gmail.com</li>
                </ul>`,
                style: 'font-size: 16px;',
            },
            {
                type: 'hr',
            },
            {
                type: 'text',
                content: `期待与你一起探索更多的技术与生活乐趣。`,
                style: 'font-size: 16px;',
            },
        ],
    },
    commentConfig: {
        type: 'valine',
        // options 与 1.x 的 valineConfig 配置一致
        options: {
            appId: 'ztoy6xA3gZuTlhxGenF4gHnd-gzGzoHsz',
            appKey: 'D9mThbNY0o39co9ovORBGG8x',
            placeholder: '填写邮箱可以收到回复提醒哦！',
            // verify: true, // 验证码服务
            // notify: true,
            recordIP: true,
            hideComments: true // 隐藏评论
        },
    },
})