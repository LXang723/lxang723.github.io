---
title: 面试刷题之 Spring Boot 篇
---

在 **Spring Boot** 中，**"Boot"** 代表的是 **"Bootstrap"**（引导）的意思。这个词来源于计算机科学中的术语，通常表示启动或初始化一个系统或应用程序的过程。Spring Boot 的设计目标就是帮助开发者快速启动和运行 Spring 应用程序，因此它的名字中的 "Boot" 强调了其**快速启动**和**简化配置**的特性。

---

### Spring Boot 的核心目标
1. **简化 Spring 应用的初始搭建和开发**  
   Spring Boot 通过自动配置和默认值，减少了传统 Spring 应用中繁琐的 XML 配置和手动依赖管理。

2. **快速启动和运行**  
   Spring Boot 提供了内嵌的 Web 服务器（如 Tomcat、Jetty）和默认配置，使得开发者可以直接运行一个独立的、生产级别的应用程序，而无需额外部署到外部服务器。

3. **约定优于配置**  
   Spring Boot 遵循“约定优于配置”的原则，提供了合理的默认配置，开发者只需在需要时覆盖这些配置即可。

4. **降低开发门槛**  
   通过 Starter 依赖和自动配置，Spring Boot 使得开发者可以更专注于业务逻辑，而不需要过多关注底层框架的集成和配置。

---

### "Boot" 的具体体现
1. **内嵌服务器**  
   Spring Boot 应用可以直接打包成可执行的 JAR 文件，并内嵌了 Web 服务器（如 Tomcat），因此可以通过 `java -jar` 命令快速启动应用。

2. **自动配置**  
   Spring Boot 根据项目的依赖自动配置 Spring 框架和第三方库。例如，如果项目中引入了 `spring-boot-starter-web`，Spring Boot 会自动配置 Spring MVC 和相关的 Bean。

3. **Starter 依赖**  
   Spring Boot 提供了一系列 Starter 依赖（如 `spring-boot-starter-web`、`spring-boot-starter-data-jpa`），这些依赖封装了常见的库和配置，使得开发者可以快速引入所需功能。

4. **开发工具支持**  
   Spring Boot 提供了开发工具（如 `spring-boot-devtools`），支持热部署、自动重启等功能，进一步提升了开发效率。


目录：

- [Spring Boot 配置文件加载优先级](/series/interview/spring-boot/external-config.md)

Spring Boot Reference Documentation - <Badge type="tip" text="v2.7.18" vertical="middle" />

[Creating Your Own Auto-configuration](https://docs.spring.io/spring-boot/docs/2.7.18/reference/html/features.html#features.developing-auto-configuration)

Creating Your Own Starter



[Encrypting Properties](https://docs.spring.io/spring-boot/docs/2.7.18/reference/html/features.html#features.external-config.encrypting)

[Customize the Environment or ApplicationContext Before It Starts](https://docs.spring.io/spring-boot/docs/2.7.18/reference/html/howto.html#howto.application.customize-the-environment-or-application-context)