---
title: 循环依赖
---

Spring 的循环依赖

## 什么是循环依赖 ？

循环依赖（Circular Dependency）指的是两个或多个模块或组件相互依赖，导致无法确定加载或初始化的顺序。

**场景：**

- 类之间的循环依赖：类 A 依赖类 B，类 B 又依赖类 A，导致无法实例化。
- Spring Bean 之间的循环依赖：Bean A 依赖 Bean B，Bean B 又依赖 Bean A，导致 Spring 容器无法初始化。
- 模块之间的循环依赖：模块 A 依赖模块 B，模块 B 又依赖模块 A，导致编译或加载失败。

**解决方法：**

- 依赖倒置：引入抽象层（如接口或抽象类），让模块依赖抽象而非具体实现。
- 依赖注入：通过外部容器管理依赖，避免直接依赖。
- 重构代码：将共享功能提取到独立模块中，打破循环依赖。

## Spring 如何解决循环依赖 ？

Spring 通过 **三级缓存** 和 **提前暴露 Bean** 的机制，解决了单例 Bean 属性注入的循环依赖问题。其核心思想是：

- 在 Bean 未完全初始化时，提前暴露其引用。
- 通过缓存机制，确保依赖注入的正确性和顺序。

Spring 通过 **三级缓存** 来管理 Bean 的创建过程，从而解决循环依赖问题。三级缓存分别是：

- 一级缓存（Singleton Objects）：存放完全初始化好的 Bean。
- 二级缓存（Early Singleton Objects）：存放提前暴露的 Bean（尚未完成属性注入和初始化）。
- 三级缓存（Singleton Factories）：存放 Bean 的工厂对象，用于生成提前暴露的 Bean。

::: details Spring&nbsp;中的三级缓存本质上是三个&nbsp;Map：
``` java
// 一级缓存
/** Cache of singleton objects: bean name to bean instance. */
private final Map<String, Object> singletonObjects = new ConcurrentHashMap<>(256);

// 二级缓存
/** Cache of early singleton objects: bean name to bean instance. */
private final Map<String, Object> earlySingletonObjects = new HashMap<>(16);

// 三级缓存
/** Cache of singleton factories: bean name to ObjectFactory. */
private final Map<String, ObjectFactory<?>> singletonFactories = new HashMap<>(16);
```
:::

::: warning 注意

Spring 解决循环依赖的条件是：

1. 依赖的 Bean 必须都是单例。
2. 依赖注入的方式，必须**不全是**构造器注入，且 beanName 字母序在前的不能是构造器注入。

只有同时满足以上两点才能解决循环依赖的问题。

:::

### 1. 为什么必须都是单例 ？

`#TODO Bean 的作用域有哪些?`

原型（Prototype）Bean：每次请求都会创建一个新的实例，Spring 无法提前暴露未完全初始化的 Bean。

### 2. 为什么不能全是构造器注入 ？

`#TODO 注入 Bean（依赖注入）的方式有哪些？`

在 Spring 中，**依赖注入的方式** 对解决循环依赖有重要影响。如果依赖注入的方式 **不全是构造器注入**，且 **beanName 字母序在前的 Bean 不能是构造器注入**，Spring 才能通过提前暴露引用的机制解决循环依赖问题。以下是详细解释：

**① 依赖注入的方式**  

Spring 支持以下两种依赖注入方式：

1. **构造器注入（Constructor Injection）**：
   - 通过构造器注入依赖。
   - 在 Bean 实例化时就必须完成依赖注入。
   - 无法提前暴露引用，因此无法解决循环依赖。

2. **属性注入（Setter Injection 或 Field Injection）**：
   - 通过 `@Autowired` 注解注入属性。
   - 在 Bean 实例化后完成依赖注入。
   - 可以提前暴露引用，因此可以解决循环依赖。





**②  解决循环依赖的条件**

Spring 解决循环依赖的条件是：

1. **依赖注入方式不能全是构造器注入**：
   - 如果所有依赖都通过构造器注入，Spring 无法提前暴露引用，无法解决循环依赖。
   - 必须至少有一个依赖是通过属性注入（Setter 或 Field）完成的。

2. **beanName 字母序在前的 Bean 不能是构造器注入**：
   - Spring 在解决循环依赖时，会按照 beanName 的字母顺序处理 Bean。
   - 如果字母序在前的 Bean 是通过构造器注入的，Spring 无法提前暴露其引用，导致循环依赖无法解决。

**③ 为什么需要这些条件？**

- **提前暴露引用**：Spring 通过提前暴露未完全初始化的 Bean 引用来解决循环依赖。如果依赖是通过构造器注入的，Bean 在实例化时就必须完成依赖注入，无法提前暴露引用。
- **字母序的影响**：Spring 按照 beanName 的字母顺序处理 Bean。如果字母序在前的 Bean 是通过构造器注入的，Spring 会尝试先初始化它，但由于它依赖的 Bean 还未初始化，会导致循环依赖无法解决。

**④ 代码示例**

**示例 1：可以解决循环依赖**

::: details
```java
@Component
public class A {
    private B b;

    @Autowired
    public void setB(B b) {
        this.b = b;
    }
}

@Component
public class B {
    private A a;

    @Autowired
    public B(A a) {
        this.a = a;
    }
}
```
:::

- A 使用属性注入，B 使用构造器注入。
- Spring 可以提前暴露 A 的引用，解决循环依赖。

**示例 2：无法解决循环依赖**

::: details
```java
@Component
public class A {
    private B b;

    @Autowired
    public A(B b) {
        this.b = b;
    }
}

@Component
public class B {
    private A a;

    @Autowired
    public void setA(A a) {
        this.a = a;
    }
}
```
:::

- A 使用构造器注入，B 使用属性注入。
- 由于 A 的 beanName 字母序在 B 之前，且 A 是构造器注入，Spring 无法提前暴露 A 的引用，导致循环依赖无法解决。

**⑤ 总结**
- Spring 解决循环依赖的条件是：
  1. 依赖注入方式不能全是构造器注入。
  2. beanName 字母序在前的 Bean 不能是构造器注入。
- 如果满足以上条件，Spring 可以通过提前暴露引用的机制解决循环依赖问题。
- 如果无法满足条件，建议通过 **重构代码** 或 **使用 `@Lazy` 注解** 来避免循环依赖。

---

**⑥ 额外建议**
- 尽量避免循环依赖，因为它会增加代码的复杂性和维护成本。
- 如果必须使用循环依赖，优先使用属性注入（Setter 或 Field Injection），并确保字母序在前的 Bean 不是构造器注入。
- 使用 `@Lazy` 注解可以延迟加载依赖，从而解决部分循环依赖问题。

## 参考资料

org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory#doCreateBean

org.springframework.beans.factory.support.DefaultSingletonBeanRegistry

[JavaGuide：Spring常见面试题总结](https://javaguide.cn/system-design/framework/spring/spring-knowledge-and-questions-summary.html)