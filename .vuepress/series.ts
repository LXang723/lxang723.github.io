const series = {
    // '/blogs/middleware/': [
    //     {
    //         text: 'RabbitMQ',
    //         children: ['rabbitmq/rabbitmq'],
    //     },
    //     {
    //         text: 'Elasticsearch',
    //         children: ['elasticsearch/elastic'],
    //     },
    // ],
    // '/blogs/spring-boot/': [
    //     {
    //         text: 'Spring Boot',
    //         children: ['auto-configuration', 'ioc'],
    //     }
    // ],
    '/series/learning-notes/': [
        {
            text: '英语',
            children: ['eng']
        },
        {
            text: '日语',
            children: []
        },
        {
            text: '韩语',
            children: []
        }
    ],
    '/series/tech/': [
        {
            text: 'Java',
            children: [
                {
                    text: 'Java 基础',
                    children: [
                        'java/basic/serialization',
                        'java/basic/java-basic-datatype',
                        'java/basic/java-exception'
                    ],
                },
                {
                    text: 'Java 集合',
                    children: ['java/java-collection-overview'],
                },
                {
                    text: 'Java 并发',
                    children: ['java/java-concurrent-overview'],
                },
            ]
        },
        {
            text: 'Spring & SpringBoot',
            children: ['framework/spring/spring-overview'],
        },
    ],
    // 博客搭建
    '/series/blog/': ['build', 'vuepress-reco', 'namesilo', 'cloudflare', 'test'],
}

export default series;