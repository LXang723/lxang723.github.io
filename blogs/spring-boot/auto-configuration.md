---
title: Spring Boot 自动配置
date: 2024-04-09
categories:
 - SpringBoot
---

[Spring Boot自动配置原理浅析](https://blog.csdn.net/h2503652646/article/details/107912486)

Spring Boot 的自动配置是其核心特性之一，它大大**简化了 Spring 应用的配置过程**。通过自动配置，Spring Boot 能够根据项目的依赖和当前环境，自动配置 Spring 应用的各个组件，**使得开发者无需手动编写大量的配置文件**。

## 自动配置的工作原理

Spring Boot 的自动配置机制依赖于 `@EnableAutoConfiguration` 注解，通常是通过 `@SpringBootApplication` 注解来启用的。这个注解包括了 `@EnableAutoConfiguration`，意味着 Spring Boot 会自动配置应用所需的各个组件。

自动配置的核心思想是：Spring Boot 会根据项目的 classpath 中的内容、环境变量、配置文件等来判断需要配置哪些 Spring Bean。

## @SpringBootApplication 的作用
`@SpringBootApplication` 是一个组合注解，包含了以下三个注解：  
- `@SpringBootConfiguration`：标记当前类为配置类，等同于 `@Configuration`。  
- `@EnableAutoConfiguration`：启用自动配置。  
- `@ComponentScan`：启用组件扫描，Spring Boot 会扫描当前包及其子包中的组件。  

``` java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(excludeFilters = {
    @Filter(type = FilterType.CUSTOM, classes = TypeExcludeFilter.class),
	@Filter(type = FilterType.CUSTOM, classes = AutoConfigurationExcludeFilter.class)
})
public @interface SpringBootApplication {
}
``` 

## 自动配置的关键组成部分

### 1. @EnableAutoConfiguration 注解
`@EnableAutoConfiguration` 是 Spring Boot 的自动配置的核心注解，它会触发 Spring Boot 的自动配置机制。该注解背后实际上是通过 `@Import(AutoConfigurationImportSelector.class)` 引入了自动配置类。
### 2. spring.factories 文件
Spring Boot 的自动配置是基于 SPI（服务提供接口）机制的，配置类被定义在 `META-INF/spring.factories` 文件中。例如，Spring Boot 的一些自动配置类会在此文件中被声明，Spring Boot 在启动时会加载这些配置类。
### 3. @Configuration 注解的自动配置类
Spring Boot 的自动配置类通常都使用 `@Configuration` 注解，这意味着它们会作为 Spring 上下文的一部分被加载。自动配置类一般都是根据应用的依赖来选择性地配置相关的 Bean。
### 4. 条件注解（@Conditional）
Spring Boot 的自动配置类通常会使用 `@Conditional` 注解来决定某个配置是否生效。常见的条件注解有：
- `@ConditionalOnClass`：只有类路径中存在某个特定的类时才会进行配置。
- `@ConditionalOnMissingBean`：当容器中不存在某个特定的 Bean 时，才会进行配置。
- `@ConditionalOnProperty`：根据某个配置属性的值来决定是否启用该配置。
- `@ConditionalOnExpression`：根据 Spring EL 表达式的结果来决定是否启用配置。

## 常见的自动配置示例

### 1. 数据源配置

如果你的项目中引入了数据库相关的依赖（比如 H2、MySQL、PostgreSQL），Spring Boot 会自动配置数据源（`DataSource`）和相关的数据库连接池。

```java
@Configuration
@EnableAutoConfiguration
public class DataSourceConfig {
    // 根据 classpath 中的配置自动选择数据源
}
```

### 2. 视图解析器（Thymeleaf、Freemarker）

如果项目中引入了 `Thymeleaf` 或 `Freemarker` 相关的依赖，Spring Boot 会自动配置视图解析器，且不需要手动配置。

### 3. Web 配置

如果项目包含了 `spring-boot-starter-web` 依赖，Spring Boot 会自动配置嵌入式的 Tomcat 或 Jetty 等 Web 容器，且可以根据项目中的配置自动设置静态资源、Servlet 等。

### 4. Spring Security 配置

如果引入了 `spring-boot-starter-security` 依赖，Spring Boot 会自动配置基本的安全机制，如基于表单的登录、HTTP Basic 验证等。

## 自定义和禁用自动配置

Spring Boot 提供了灵活的方式让开发者根据需求自定义自动配置，或者禁用一些自动配置。

### 1. 禁用自动配置

如果某个自动配置不适合你的应用，或者你想自己配置某个 Bean，你可以使用 `@EnableAutoConfiguration` 注解的 `exclude` 属性来禁用自动配置：

```java
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

### 2. 自定义配置

你可以创建一个配置类，手动配置 Bean，覆盖掉 Spring Boot 的自动配置。Spring Boot 会首先尝试自动配置，如果某些自动配置的 Bean 不存在，它会让你自己定义。

```java
@Configuration
public class CustomDataSourceConfig {

    @Bean
    public DataSource dataSource() {
        // 自定义数据源配置
        return new HikariDataSource();
    }
}
```

### 3. 使用 `@Conditional` 注解自定义条件

你可以根据不同的条件来自定义自动配置。例如，可以通过配置属性、类路径中的类、环境变量等来选择是否启用某个 Bean 的配置。

```java
@Configuration
@ConditionalOnProperty(name = "custom.feature.enabled", havingValue = "true")
public class CustomFeatureConfig {
    @Bean
    public CustomFeature customFeature() {
        return new CustomFeature();
    }
}
```

## 总结

Spring Boot 的自动配置大大简化了应用配置过程，通过分析项目的依赖关系和环境变量，自动配置所需的 Bean 和组件。通过 `@EnableAutoConfiguration`、`spring.factories` 和条件注解，Spring Boot 实现了灵活且可定制的自动配置机制，极大地提高了开发效率。同时，Spring Boot 也允许开发者禁用某些自动配置或进行自定义配置，满足不同的需求。