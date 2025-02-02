const series = {
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
    '/series/tech/java/': [
        {
            text: 'Java 基础',
            children: [
                'basic/serialization',
                'basic/java-basic-datatype',
                'basic/java-exception',
                'basic/java-reflection'
            ],
        },
        {
            text: 'Java 集合',
            children: [],
        },
        {
            text: 'Java 并发',
            children: [],
        },
    ],
    '/series/tech/framework/spring/': [
        {
            text: 'Spring 基础',
            children: [
                'spring-n-springboot-annotation'
            ],
        },
        {
            text: 'Spring IoC',
            children: [
                'spring-bean-lifecycle',
            ],
        },
        {
            text: 'Spring 循环依赖',
            children: [
                'spring-circular-dependency',
            ],
        },
    ],
    // 博客搭建
    '/blogs/reco/': [
        'setting-up-a-personal-blog.md',
        'record-of-using-vuepress-reco',
        'tips-for-using-reco',
        'record-of-using-namesilo',
        'record-of-using-cloudflare',
        'some-features-in-the-blog'
    ],
}

export default series;