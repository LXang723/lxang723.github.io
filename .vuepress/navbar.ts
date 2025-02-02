const navbar = [
    // Home 首页
    { text: '首页', link: '/', icon: 'IconHome' },
    { text: '分类', link: '/categories/Blog/1.html', icon: 'IconCategory' },
    { text: '标签', link: '/tags/Blog/1.html', icon: 'IconTag' },
    {
        text: '技术笔记',
        icon: 'IconNote2',
        children: [
            {
                text: 'Java',
                children: [
                    { text: 'Java 基础', link: '/series/tech/java/basic/' },
                    { text: 'Java 集合', link: '/series/tech/java/collection/' },
                    { text: 'Java 并发', link: '/series/tech/java/concurrent/' },
                ],
            },
            {
                text: '常用框架',
                children: [
                    { text: 'Spring & SpringBoot', link: '/series/tech/framework/spring/' },
                    { text: 'MyBatis', link: '/series/tech/framework/mybatis/' },
                    { text: 'Netty', link: '/series/tech/framework/netty/' },
                ],
            },
            // { text: 'MySQL', link: '/series/java/javase/javase' },
            // { text: 'SpringBoot', link: '/series/java/javase/javase' },
            // { text: 'SpringCloud', link: '/series/java/javase/javase' },
            // {
            //     text: 'Java',
            //     icon: 'IconCoffee',
            //     children: [
            //         { text: 'JavaSE', link: '/series/java/javase/javase', icon: 'IconJavaFilled' },
            //         { text: 'JavaWeb', link: '/series/java/javaweb/javaweb', icon: 'IconJava' }
            //     ]
            // },
            // {
            //     text: '中间件', // Middleware
            //     icon: 'IconMiddle',
            //     children: [
            //         { text: 'RabbitMQ', link: '/blogs/middleware/rabbitmq/rabbitmq', icon: 'IconRabbitMQ' },
            //         { text: 'Elasticsearch', link: '/blogs/middleware/elasticsearch/elastic', icon: 'IconElasticsearch' }
            //     ]
            // },
        ]
    },
    // 其他
    {
        text: '其他',
        icon: 'IconNote',
        children: [
            // 内置页面
            // categories 和 tags 的路径需要根据 build 后的文件确定，设定一个不会变的，中文的分类和标签会转换为拼音
            // /timeline.html（归档、时间轴页面） 、/posts.html（博客列表页面） 、/friendship-link.html（友情链接）
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
                    { text: '留言板', link: '/docs/other/message-board', icon: 'IconMessageBoard' },
                ]
            },
            {
                text: '笔记',
                children: [
                    { text: '学习笔记', link: '/series/learning-notes/', icon: 'IconEdit' },
                    { text: '阅读笔记', link: '/blogs/reading/', icon: 'IconEdit' },
                    // { text: '技术笔记', link: '/series/tech/', icon: 'IconEdit' },
                ],
            },
            {
                text: '其他',
                // icon: 'IconCategory2',
                children: [
                    { text: '设计模式', link: '/series/design-pattern/', icon: 'IconDesignPattern' },
                    { text: '博客搭建', link: '/blogs/reco/setting-up-a-personal-blog', icon: 'IconBlog' },
                ],
            },
        ]
    },
]

export default navbar;