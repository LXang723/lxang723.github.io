const navbar = [
    // Home
    { text: "首页", link: "/", icon: 'IconHome' },
    // categories 和 tags 的路径需要根据 build 后的文件确定，设定一个不会变的，中文的分类和标签会转换为拼音
    // Categories
    { text: "分类", link: "/categories/Todo/1.html", icon: 'IconCategory' },
    // Tags
    { text: "标签", link: "/tags/Todo/1.html", icon: 'IconTag' },
    // 内置页面： /timeline.html（归档、时间轴页面） 、/posts.html（博客列表页面） 、/friendship-link.html（友情链接）
    // { text: "归档", link: "/timeline.html", icon: 'IconTimeline' },
    // Blogs
    { text: "博客", link: "/posts.html", icon: 'IconBlog' },
    // Links
    // { text: "链接", link: "/friendship-link.html", icon: 'IconLink' },
    // { text: "Java", link: "/series/java/javase/javase", icon: 'IconCoffee' },
    {
        text: "Java",
        icon: 'IconCoffee',
        children: [
            { text: "JavaSE", link: "/series/java/javase/javase", icon: 'IconJavaFilled' },
            { text: "JavaWeb", link: "/series/java/javaweb/javaweb", icon: 'IconJava' }
        ]
    },
    {
        text: "中间件", // Middleware
        icon: 'IconMiddle',
        children: [
            { text: "RabbitMQ", link: "/blogs/middleware/rabbitmq/rabbitmq", icon: 'IconRabbitMQ' },
            { text: "Elasticsearch", link: "/blogs/middleware/elasticsearch/elastic", icon: 'IconElasticsearch' }
        ]
    },
]

export default navbar;