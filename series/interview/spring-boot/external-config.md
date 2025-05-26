---
title: Spring Boot 配置文件加载优先级
---

## 简单优先级

**命令行参数** > **Java 系统属性** > **操作系统环境变量** > **配置数据文件** 。

**外部 profile 文件** > **内部 profile 文件** > **外部通用文件** > **内部通用文件**。

**总结**：

- 动态参数 > 静态文件：命令行参数、系统属性和环境变量的优先级高于配置数据文件
- JAR 外部（项目根路径） > JAR 内部（类路径）
- 同级目录的 `/config` 子目录下的 > 同级目录下的
- profile 文件（被激活时） > 通用文件

**项目根路径（outside of packaged jar）**: 

- file:/config/application-{profile}.yml `active`
- file:/config/application.yml
- file:application-{profile}.yml `active`
- file:application.yml

**类路径（packaged inside jar）**: 

- classpath:/config/application-{profile}.yml `active`
- classpath:/config/application.yml
- classpath:/application-{profile}.yml `active`
- classpath:/application.yml

Spring Boot Reference Documentation：[External Application Properties](https://docs.spring.io/spring-boot/docs/2.7.18/reference/html/features.html#features.external-config.files)

## 完整优先级

Spring Boot Reference Documentation：[Externalized Configuration（外部化配置）](https://docs.spring.io/spring-boot/docs/2.7.18/reference/html/features.html#features.external-config)

::: info 外部化配置
Spring Boot 允许您将配置外部化，以便您可以在不同的环境中使用相同的应用程序代码。您可以使用多种外部配置源，包括 Java 属性文件、YAML 文件、环境变量和命令行参数。

属性值可以通过使用 `@Value` 注解直接注入到您的 bean 中，通过 Spring 的 `Environment` 抽象访问，或者通过 `@ConfigurationProperties` 绑定到结构化对象。

Spring Boot 使用一种非常特定的 `PropertySource` 顺序，旨在允许合理地覆盖值。<u>后面的属性源可以覆盖前面定义的属性值。</u>属性源按以下顺序考虑：

1. 默认属性（通过 `SpringApplication.setDefaultProperties` 设置）。
2. `@Configuration` 类上的 `@PropertySource` 注解。请注意，这些属性源在应用程序上下文刷新之前不会添加到 `Environment` 中。这对于配置某些属性（如 `logging.*` 和 `spring.main.*`）来说为时已晚，因为这些属性在刷新开始之前就已经被读取。
3. 配置数据（如 `application.properties` 文件）。
4. `RandomValuePropertySource`，仅在 `random.*` 中具有属性。
5. 操作系统环境变量。
6. Java 系统属性（`System.getProperties()`）。
7. 来自 `java:comp/env` 的 JNDI 属性。
8. `ServletContext` 初始化参数。
9. `ServletConfig` 初始化参数。
10. 来自 `SPRING_APPLICATION_JSON` 的属性（嵌入在环境变量或系统属性中的内联 JSON）。
11. 命令行参数。
12. 测试中的 `properties` 属性。可用于 `@SpringBootTest` 和测试特定应用程序切片的测试注解。
13. 测试中的 `@DynamicPropertySource` 注解。
14. 测试中的 `@TestPropertySource` 注解。
15. 当 devtools 激活时，`$HOME/.config/spring-boot` 目录中的 Devtools 全局设置属性。

配置数据文件按以下顺序考虑：

1. 打包在您的 jar 中的应用程序属性（`application.properties` 和 YAML 变体）。
2. 打包在您的 jar 中的特定于配置文件的应用程序属性（`application-{profile}.properties` 和 YAML 变体）。
3. 打包在您的 jar 之外的应用程序属性（`application.properties` 和 YAML 变体）。
4. 打包在您的 jar 之外的特定于配置文件的应用程序属性（`application-{profile}.properties` 和 YAML 变体）。
:::

::: warning Note
It is recommended to stick with one format for your entire application. 
If you have configuration files with both `.properties` and YAML format in the same location, 
`.properties` takes precedence. 

建议在整个应用程序中坚持使用一种格式。
如果在同一位置同时存在 `.properties` 和 YAML 格式的配置文件，
`.properties` 文件将优先被使用。
:::

当 `application.properties` 和 `application.yml` 同时存在，同样的参数，最终生效的是 `application.properties` 中的配置。

## bootstrap

bootstrap 配置文件是 Spring Cloud 项目中的特殊配置文件，用于在应用程序启动的早期阶段加载配置。它通常用于从外部配置源（如 Spring Cloud Config Server）获取配置。

bootstrap.yml > application.yml