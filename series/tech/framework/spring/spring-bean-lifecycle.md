---
title: Bean 的生命周期
---

Spring Bean 的生命周期涵盖了从实例化到销毁的完整过程，并提供了多个扩展点供开发者自定义逻辑。理解这些阶段和扩展点有助于更好地掌握 Spring 框架的核心机制。

Spring Bean 生命周期的主要阶段：

**org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory**.`doCreateBean`

- **实例化**：`createBeanInstance`
- **属性赋值/填充**：`populateBean`
- **初始化**：`initializeBean`
  - Aware 接口回调：`invokeAwareMethods`
  - BeanPostProcessor 前置处理：`applyBeanPostProcessorsBeforeInitialization`
  - 初始化：`invokeInitMethods`
  - BeanPostProcessor 后置处理：`applyBeanPostProcessorsAfterInitialization`
- **使用**
- **销毁**：`registerDisposableBeanIfNecessary`

![Bean 的生命周期](./assets/bean-lifecycle.svg/)

## 1. 实例化（Instantiation）

Spring 容器根据 Bean 的定义（如 XML 配置、注解或 Java 配置）创建 Bean 的实例。

如果 Bean 是通过构造函数注入依赖的，Spring 会解析并注入所需的依赖。

在 Spring 源码中，Bean 的实例化主要由 `AbstractAutowireCapableBeanFactory` 类的 `createBeanInstance` 方法实现。

## 2. 属性赋值（Populate Properties）

Spring 容器将配置的属性值或依赖注入到 Bean 中。

如果使用了自动装配（@Autowired 或 @Resource），Spring 会自动解析并注入依赖。

## 3. 初始化（Initialization）

`org.springframework.beans.factory.BeanFactory` 的类注释中，描述了完整的初始化方法及其标准顺序。

[BeanFactory (Spring Framework 5.3.39 API)](https://docs.spring.io/spring-framework/docs/5.3.39/javadoc-api/org/springframework/beans/factory/BeanFactory.html)

spring-framework-<Badge type="tip" text="v6.2.1" vertical="middle" />

::: info BeanFactory&nbsp;类的相关注释

Bean factory implementations should support the standard bean lifecycle interfaces as far as possible.   
Bean 工厂的实现应尽可能支持标准的 Bean 生命周期接口。

**The full set of initialization methods and their standard order is:**  
完整的初始化方法及其标准顺序如下：

1. ⭐ BeanNameAware's `setBeanName`
2. ⭐ BeanClassLoaderAware's `setBeanClassLoader`
3. ⭐ BeanFactoryAware's `setBeanFactory`
4. EnvironmentAware's `setEnvironment`
5. EmbeddedValueResolverAware's `setEmbeddedValueResolver`
6. ResourceLoaderAware's `setResourceLoader` (only applicable when running in an application context)
7. ApplicationEventPublisherAware's `setApplicationEventPublisher` (only applicable when running in an application context)
8. MessageSourceAware's `setMessageSource` (only applicable when running in an application context)
9. ApplicationContextAware's `setApplicationContext` (only applicable when running in an application context)
10. ServletContextAware's `setServletContext` (only applicable when running in an application context)
11. ⭐ `postProcessBeforeInitialization` methods of BeanPostProcessors
12. ⭐ InitializingBean's `afterPropertiesSet`
13. ⭐ a custom `init-method` definition
14. ⭐ `postProcessAfterInitialization` methods of BeanPostProcessors

**On shutdown of a bean factory, the following lifecycle methods apply:**

1. `postProcessBeforeDestruction` methods of DestructionAwareBeanPostProcessors
2. ⭐ DisposableBean's `destroy`
3. ⭐ a custom `destroy-method` definition

**See Also**:  
- ⭐ `BeanNameAware.` setBeanName,   
- ⭐ `BeanClassLoaderAware.` setBeanClassLoader,   
- ⭐ `BeanFactoryAware.` setBeanFactory,   
- `org. springframework. context. EnvironmentAware.` setEnvironment,   
- `org. springframework. context. EmbeddedValueResolverAware.` setEmbeddedValueResolver,   
- `org. springframework. context. ResourceLoaderAware.` setResourceLoader,   
- `org. springframework. context. ApplicationEventPublisherAware.` setApplicationEventPublisher,   
- `org. springframework. context. MessageSourceAware.` setMessageSource,   
-  `org. springframework. context. ApplicationContextAware.` setApplicationContext,   
- `org. springframework. web. context. ServletContextAware.` setServletContext,   
- ⭐ `org. springframework. beans. factory. config. BeanPostProcessor.` postProcessBeforeInitialization,   
- ⭐ `InitializingBean.` afterPropertiesSet,   
- `org. springframework. beans. factory. support. RootBeanDefinition.` getInitMethodName,   
- ⭐ `org. springframework. beans. factory. config. BeanPostProcessor.` postProcessAfterInitialization,   
- `org. springframework. beans. factory. config. DestructionAwareBeanPostProcessor.` postProcessBeforeDestruction,   
- ⭐ `DisposableBean.` destroy,   
- `org. springframework. beans. factory. support. RootBeanDefinition.` getDestroyMethodName  

:::

### 3.1. Aware 接口回调（Aware Interfaces）

若 Bean 实现了特定 Aware 接口，容器会回调相关方法。

常见接口：

BeanNameAware：设置 Bean 的名称。

BeanFactoryAware：设置 Bean 的工厂实例。

ApplicationContextAware：设置应用上下文（需注意耦合性）。

``` java
private void invokeAwareMethods(String beanName, Object bean) {
  if (bean instanceof Aware) {
    if (bean instanceof BeanNameAware beanNameAware) {
      beanNameAware.setBeanName(beanName);
    }
    if (bean instanceof BeanClassLoaderAware beanClassLoaderAware) {
      ClassLoader bcl = getBeanClassLoader();
      if (bcl != null) {
        beanClassLoaderAware.setBeanClassLoader(bcl);
      }
    }
    if (bean instanceof BeanFactoryAware beanFactoryAware) {
      beanFactoryAware.setBeanFactory(AbstractAutowireCapableBeanFactory.this);
    }
  }
}
```

### 3.2. BeanPostProcessor 前置处理

描述：调用 BeanPostProcessor.postProcessBeforeInitialization()。

如果容器中注册了 BeanPostProcessor，Spring 会调用其 postProcessBeforeInitialization 方法。

这是一个扩展点，允许在 Bean 初始化之前对 Bean 进行自定义处理。

典型应用：

修改 Bean 属性（如替换字符串占位符）。

生成代理对象（AOP 在此阶段介入）。

``` java
@Deprecated(since = "6.1")
@Override
public Object applyBeanPostProcessorsBeforeInitialization(Object existingBean, String beanName)
    throws BeansException {

  Object result = existingBean;
  for (BeanPostProcessor processor : getBeanPostProcessors()) {
    Object current = processor.postProcessBeforeInitialization(result, beanName);
    if (current == null) {
      return result;
    }
    result = current;
  }
  return result;
}
```

### 3.3. 初始化（Initialization）

InitializingBean 接口：如果 Bean 实现了 InitializingBean 接口，Spring 会调用其 afterPropertiesSet 方法。

自定义初始化方法：如果 Bean 定义了自定义的初始化方法（通过 @PostConstruct 注解或 XML 配置中的 init-method 属性），Spring 会调用该方法。

顺序：

@PostConstruct 注解方法：通过反射调用。

InitializingBean.afterPropertiesSet()：接口回调。

自定义 init-method：XML 或 @Bean(initMethod="...") 定义的方法。

目标：执行资源初始化（如数据库连接池、线程池）。

``` java
protected void invokeInitMethods(String beanName, Object bean, @Nullable RootBeanDefinition mbd)
    throws Throwable {

  boolean isInitializingBean = (bean instanceof InitializingBean);
  if (isInitializingBean && (mbd == null || !mbd.hasAnyExternallyManagedInitMethod("afterPropertiesSet"))) {
    if (logger.isTraceEnabled()) {
      logger.trace("Invoking afterPropertiesSet() on bean with name '" + beanName + "'");
    }
    ((InitializingBean) bean).afterPropertiesSet(); // [!code highlight]
  }

  if (mbd != null && bean.getClass() != NullBean.class) {
    String[] initMethodNames = mbd.getInitMethodNames();
    if (initMethodNames != null) {
      for (String initMethodName : initMethodNames) {
        if (StringUtils.hasLength(initMethodName) &&
            !(isInitializingBean && "afterPropertiesSet".equals(initMethodName)) &&
            !mbd.hasAnyExternallyManagedInitMethod(initMethodName)) {
          invokeCustomInitMethod(beanName, bean, mbd, initMethodName);
        }
      }
    }
  }
}
```

### 3.4. BeanPostProcessor 后置处理

描述：调用 BeanPostProcessor.postProcessAfterInitialization()。

Spring 调用 BeanPostProcessor 的 postProcessAfterInitialization 方法。

这是另一个扩展点，允许在 Bean 初始化之后对 Bean 进行自定义处理。

典型应用：

进一步包装 Bean（如生成最终代理对象）。

添加监控或日志逻辑。

``` java
@Deprecated(since = "6.1")
@Override
public Object applyBeanPostProcessorsAfterInitialization(Object existingBean, String beanName)
    throws BeansException {

  Object result = existingBean;
  for (BeanPostProcessor processor : getBeanPostProcessors()) {
    Object current = processor.postProcessAfterInitialization(result, beanName);
    if (current == null) {
      return result;
    }
    result = current;
  }
  return result;
}
```

## 4. Bean 就绪（Ready）

描述：Bean 进入可用状态，供其他对象使用。

Bean 的使用
此时 Bean 已经完全初始化，可以被应用程序使用。

Bean 会被缓存到 Spring 容器中，后续请求会直接返回缓存的实例（如果是单例作用域）。

## 5. 销毁（Destruction）

当 Spring 容器关闭时，Bean 会进入销毁阶段。

DisposableBean 接口：如果 Bean 实现了 DisposableBean 接口，Spring 会调用其 destroy 方法。

自定义销毁方法：如果 Bean 定义了自定义的销毁方法（通过 @PreDestroy 注解或 XML 配置中的 destroy-method 属性），Spring 会调用该方法。

触发条件：容器关闭（如调用 ApplicationContext.close()）。

顺序：

@PreDestroy 注解方法：通过反射调用。

DisposableBean.destroy()：接口回调。

自定义 destroy-method：XML 或 @Bean(destroyMethod="...") 定义的方法。

目标：释放资源（如关闭文件句柄、断开网络连接）。


## 6. 源码分析

`org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory` 实现了 Bean 的创建、依赖注入、初始化等核心功能。作为 `AbstractBeanFactory` 的子类，它扩展了 Bean 的创建和装配能力，并实现了 `AutowireCapableBeanFactory` 接口，支持自动装配功能。

::: info 类注释
Provides bean creation (with constructor resolution), property population, wiring (including autowiring), and initialization. Handles runtime bean references, resolves managed collections, calls initialization methods, etc. Supports autowiring constructors, properties by name, and properties by type.

该抽象类提供了Bean的创建（包括构造函数解析）、属性填充、依赖注入（包括自动装配）以及初始化等功能。它能够处理运行时Bean引用、解析托管集合、调用初始化方法等。此外，它还支持通过构造函数、按名称和按类型进行自动装配。
:::

### 6.1. 类的作用

`AbstractAutowireCapableBeanFactory` 是 Spring 容器中用于创建和管理 Bean 的核心类之一。它提供了以下功能：

- **Bean 的实例化**：通过构造函数或工厂方法创建 Bean 实例。
- **属性注入**：支持通过 setter 方法或字段注入依赖。
- **自动装配**：支持按名称、类型或构造函数自动装配依赖。
- **初始化回调**：支持 `InitializingBean`、`@PostConstruct` 和自定义初始化方法。
- **销毁回调**：支持 `DisposableBean`、`@PreDestroy` 和自定义销毁方法。

### 6.2. 核心方法分析

以下是核心方法的简化逻辑：

#### (1) `createBean` 方法

这是创建 Bean 的核心方法，负责 Bean 的实例化、属性填充、初始化等操作。

```java
@Override
protected Object createBean(String beanName, RootBeanDefinition mbd, @Nullable Object[] args)
    throws BeanCreationException {
    // 1. 解析 Bean 的 Class 类型
    Class<?> resolvedClass = resolveBeanClass(mbd, beanName);
    if (resolvedClass != null && !mbd.hasBeanClass()) {
        mbd.setBeanClass(resolvedClass);
    }

    // 2. 处理 Bean 的覆盖定义（如 lookup-method 和 replace-method）
    try {
        mbd.prepareMethodOverrides();
    } catch (BeanDefinitionValidationException ex) {
        throw new BeanDefinitionStoreException(...);
    }

    // 3. 调用 BeanPostProcessor 的前置处理方法
    try {
        Object bean = resolveBeforeInstantiation(beanName, mbd);
        if (bean != null) {
            return bean;
        }
    } catch (Throwable ex) {
        throw new BeanCreationException(...);
    }

    // 4. 真正创建 Bean 的实例
    Object beanInstance = doCreateBean(beanName, mbd, args);
    return beanInstance;
}
```

#### (2) **`doCreateBean` 方法**

这是实际创建 Bean 实例的方法，包括实例化、属性填充、初始化等步骤。

```java
protected Object doCreateBean(String beanName, RootBeanDefinition mbd, @Nullable Object[] args)
    throws BeanCreationException {

    // 1. 实例化 Bean
    BeanWrapper instanceWrapper = createBeanInstance(beanName, mbd, args);
    Object bean = instanceWrapper.getWrappedInstance();

    // 2. 属性填充
    populateBean(beanName, mbd, instanceWrapper);

    // 3. 初始化 Bean
    bean = initializeBean(beanName, bean, mbd);

    // 4. 注册销毁回调
    registerDisposableBeanIfNecessary(beanName, bean, mbd);

    return bean;
}
```

#### (3) `createBeanInstance` 方法

负责创建 Bean 的实例，支持通过构造函数、工厂方法等方式实例化 Bean。

```java
protected BeanWrapper createBeanInstance(String beanName, RootBeanDefinition mbd, @Nullable Object[] args) {
    // 1. 解析 Bean 的 Class 类型
    Class<?> beanClass = resolveBeanClass(mbd, beanName);

    // 2. 使用工厂方法创建 Bean
    if (mbd.getFactoryMethodName() != null) {
        return instantiateUsingFactoryMethod(beanName, mbd, args);
    }

    // 3. 使用构造函数创建 Bean
    Constructor<?>[] ctors = determineConstructorsFromBeanPostProcessors(beanClass, beanName);
    if (ctors != null || mbd.getResolvedAutowireMode() == AUTOWIRE_CONSTRUCTOR) {
        return autowireConstructor(beanName, mbd, ctors, args);
    }

    // 4. 使用默认构造函数创建 Bean
    return instantiateBean(beanName, mbd);
}
```

#### (4) **`populateBean` 方法**

负责填充 Bean 的属性，支持自动装配和手动注入。

```java
protected void populateBean(String beanName, RootBeanDefinition mbd, BeanWrapper bw) {
    // 1. 获取 Bean 的属性值
    PropertyValues pvs = (mbd.hasPropertyValues() ? mbd.getPropertyValues() : null);

    // 2. 自动装配属性
    if (mbd.getResolvedAutowireMode() == AUTOWIRE_BY_NAME || mbd.getResolvedAutowireMode() == AUTOWIRE_BY_TYPE) {
        MutablePropertyValues newPvs = new MutablePropertyValues(pvs);
        if (mbd.getResolvedAutowireMode() == AUTOWIRE_BY_NAME) {
            autowireByName(beanName, mbd, bw, newPvs);
        }
        if (mbd.getResolvedAutowireMode() == AUTOWIRE_BY_TYPE) {
            autowireByType(beanName, mbd, bw, newPvs);
        }
        pvs = newPvs;
    }

    // 3. 应用属性值
    if (pvs != null) {
        applyPropertyValues(beanName, mbd, bw, pvs);
    }
}
```

#### (5) **`initializeBean` 方法**

负责 Bean 的初始化，包括调用 `BeanPostProcessor`、`InitializingBean` 和自定义初始化方法。

```java
protected Object initializeBean(String beanName, Object bean, RootBeanDefinition mbd) {
    // 1. 调用 Aware 方法（如 BeanNameAware、BeanFactoryAware）
    invokeAwareMethods(beanName, bean);

    // 2. 调用 BeanPostProcessor 的前置处理方法
    Object wrappedBean = bean;
    if (mbd == null || !mbd.isSynthetic()) {
        wrappedBean = applyBeanPostProcessorsBeforeInitialization(wrappedBean, beanName);
    }

    // 3. 调用初始化方法
    try {
        invokeInitMethods(beanName, wrappedBean, mbd);
    } catch (Throwable ex) {
        throw new BeanCreationException(...);
    }

    // 4. 调用 BeanPostProcessor 的后置处理方法
    if (mbd == null || !mbd.isSynthetic()) {
        wrappedBean = applyBeanPostProcessorsAfterInitialization(wrappedBean, beanName);
    }

    return wrappedBean;
}
```
关键扩展点

- `BeanPostProcessor`：允许在 Bean 初始化前后插入自定义逻辑。常用于修改 Bean 的属性或代理 Bean。
- `InitializingBean` 和 `DisposableBean`：提供初始化和销毁的回调方法。
- `@PostConstruct` 和 `@PreDestroy`：注解方式的初始化和销毁回调。
- **Aware 接口**：如 `BeanNameAware`、`ApplicationContextAware` 等，允许 Bean 获取 Spring 容器中的相关信息。

其他相关类：

- org.springframework.beans.factory.config.BeanPostProcessor
- org.springframework.beans.factory.InitializingBean
- org.springframework.beans.factory.DisposableBean
- org.springframework.context.ApplicationContextAware
- org.springframework.context.support.ApplicationContextAwareProcessor
- 循环依赖：org.springframework.beans.factory.support.DefaultSingletonBeanRegistry



## 参考

[如何记忆Spring Bean的生命周期](https://chaycao.github.io/2020/02/15/%E5%A6%82%E4%BD%95%E8%AE%B0%E5%BF%86Spring-Bean%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html)

[Spring 为何需要三级缓存解决循环依赖，而不是二级缓存](https://www.cnblogs.com/semi-sub/p/13548479.html)
