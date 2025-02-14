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
                'spring-ioc',
                'spring-bean',
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
        'setting-up-a-personal-blog',
        'record-of-using-vuepress-reco',
        'tips-for-using-reco',
        'record-of-using-namesilo',
        'record-of-using-cloudflare',
        'some-features-in-the-blog'
    ],
    // 面试突击
    '/series/interview-preparation/': [
        {
            text: 'Java',
            children: []
        }
    ],
    // 设计模式
    '/series/design-patterns/': [
        {
            text: '创建型模式',
            children: []
        },
        {
            text: '结构型模式',
            children: ['proxy']
        },
        {
            text: '行为模式',
            children: []
        }
    ],
    // MySQL
    '/series/tech/database/mysql/': [
        {
            text: 'MySQL 基础',
            children: []
        },
        {
            text: 'MySQL 存储引擎',
            children: []
        },
        {
            text: 'MySQL 索引',
            children: ['clustered_index']
        },
        {
            text: 'MySQL 事务',
            children: []
        },
        {
            text: 'MySQL 日志',
            children: []
        },
        {
            text: 'MySQL 优化',
            children: []
        }
    ],
    // 项目经验
    '/series/project-experience/': [
        {
            text: 'ZSecurity',
            children: [
                'cybersecurity-compliance-management-platform',
                'software-license-management-platform',
                'automated-metrics-collection-platform',
                'evaluation-report-analysis-platform'
            ]
        },
    ],
}

export default series;