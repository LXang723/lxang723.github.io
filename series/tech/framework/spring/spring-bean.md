---
title: Spring Bean
---

## Bean 的概念

在 Spring 中，<u>被 IoC 容器管理的对象称为 Bean</u>。  
Bean 是 Spring 应用的基本组成单元，Spring 容器负责创建、配置和管理这些 Bean。

## 将类声明为 Bean 的注解

以下是常用的将类声明为 Bean 的注解：

1. **通用注解**：`@Component`
2. **分层架构专用注解**：`@Service`、`@Repository`、`@Controller`
3. **Java 配置类注解**：`@Bean`、`@Configuration`
4. **其他相关注解**：`@Scope`

选择合适的注解可以提高代码的可读性，并明确类的职责和层次。例如，`@Service` 用于服务层，`@Repository` 用于数据访问层，`@Controller` 用于控制器层，而 `@Component` 用于通用组件。

### 1. **通用注解**

- **`@Component`**  
  通用的注解，用于标记一个类为 Spring 管理的 Bean。通常用于普通的组件类。

  ```java
  @Component
  public class MyComponent {
      // class body
  }
  ```

### 2. **分层架构中的专用注解**

Spring 提供了更细化的注解，用于区分不同层次的组件，这些注解本质上是 `@Component` 的特殊化形式：

- **`@Service`**  
  用于标记服务层（Service Layer）的类，表示业务逻辑组件。

  ```java
  @Service
  public class MyService {
      // class body
  }
  ```

- **`@Repository`**  
  用于标记数据访问层（DAO 层）的类，通常与数据库操作相关。Spring 会为 `@Repository` 注解的类提供额外的异常转换支持（将数据库异常转换为 Spring 的统一异常）。

  ```java
  @Repository
  public class MyRepository {
      // class body
  }
  ```

- **`@Controller`**  
  用于标记控制器层（Controller Layer）的类，通常用于处理 HTTP 请求（如 Spring MVC 中的控制器）。

  ```java
  @Controller
  public class MyController {
      // class body
  }
  ```

### 3. **Java 配置类中的注解**

- **`@Bean`**  
  用于在 Java 配置类中声明一个 Bean。通常用于配置类中定义第三方库的类或需要自定义初始化的 Bean。

- **`@Configuration`**  
  用于标记一个类为配置类，通常与 `@Bean` 注解一起使用，定义多个 Bean。

  ```java
  @Configuration
  public class AppConfig {
      @Bean
      public MyBean myBean() {
          return new MyBean();
      }
  }
  ```

### 4. **其他相关注解**

- **`@Scope`**  
  用于指定 Bean 的作用域（如单例、原型等），可以与上述任何注解一起使用。

  ```java
  @Component
  @Scope("prototype")
  public class MyComponent {
      // class body
  }
  ```

## 相关面试题

### @Component 和 @Bean 的区别是什么？

- 如果是自己编写的类，优先使用 `@Component` 或其派生注解（如 `@Service`、`@Repository`、`@Controller`）。
- 如果需要将第三方库的类或需要自定义初始化的对象注册为 Bean，使用 `@Bean`。

### 注入 Bean 的注解有哪些？

### @Autowired 和 @Resource 的区别是什么？