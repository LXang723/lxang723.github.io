---
title: BeanFactory
---

spring-framework- <Badge type="tip" text="v6.2.1" vertical="middle" />

## org.springframework.beans.factory.BeanFactory

[Github: spring-projects/spring-framework](https://github.com/spring-projects/spring-framework)

The root interface for accessing a Spring bean container.  
This is the basic client view of a bean container; 
further interfaces such as `ListableBeanFactory` and 
`org. springframework. beans. factory. config. ConfigurableBeanFactory` are available for specific purposes.

This interface is implemented by objects that hold a number of bean definitions, each uniquely identified by a String name.   
Depending on the bean definition, the factory will return either an independent instance of a contained object (the Prototype design pattern), 
or a single shared instance (a superior alternative to the Singleton design pattern, in which the instance is a singleton in the scope of the factory). 
Which type of instance will be returned depends on the bean factory configuration: the API is the same.   

Since Spring 2.0, further scopes are available depending on the concrete application context (for example, "request" and "session" scopes in a web environment).

The point of this approach is that the BeanFactory is a central registry of application components, 
and centralizes configuration of application components (no more do individual objects need to read properties files, for example). 
See chapters 4 and 11 of "Expert One-on-One J2EE Design and Development" for a discussion of the benefits of this approach.

Note that it is generally better to rely on Dependency Injection ("push" configuration) to configure application objects through setters or constructors, rather than use any form of "pull" configuration like a BeanFactory lookup. Spring's Dependency Injection functionality is implemented using this BeanFactory interface and its subinterfaces.

Normally a BeanFactory will load bean definitions stored in a configuration source (such as an XML document), 
and use the `org. springframework. beans` package to configure the beans. 
However, an implementation could simply return Java objects it creates as necessary directly in Java code. 
There are no constraints on how the definitions could be stored: LDAP, RDBMS, XML, properties file, etc. 
Implementations are encouraged to support references amongst beans (Dependency Injection).

In contrast to the methods in ListableBeanFactory, 
all of the operations in this interface will also check parent factories if this is a HierarchicalBeanFactory. 
If a bean is not found in this factory instance, the immediate parent factory will be asked. 
Beans in this factory instance are supposed to override beans of the same name in any parent factory.

Bean factory implementations should support the standard bean lifecycle interfaces as far as possible. 
The full set of initialization methods and their standard order is:

1. BeanNameAware's `setBeanName`
2. BeanClassLoaderAware's `setBeanClassLoader`
3. BeanFactoryAware's `setBeanFactory`
4. EnvironmentAware's `setEnvironment`
5. EmbeddedValueResolverAware's `setEmbeddedValueResolver`
6. ResourceLoaderAware's `setResourceLoader` (only applicable when running in an application context)
7. ApplicationEventPublisherAware's `setApplicationEventPublisher` (only applicable when running in an application context)
8. MessageSourceAware's `setMessageSource` (only applicable when running in an application context)
9. ApplicationContextAware's `setApplicationContext` (only applicable when running in an application context)
10. ServletContextAware's `setServletContext` (only applicable when running in a web application context)
11. `postProcessBeforeInitialization` methods of BeanPostProcessors
12. InitializingBean's `afterPropertiesSet`
13. a custom `init-method` definition
14. `postProcessAfterInitialization` methods of BeanPostProcessors

On shutdown of a bean factory, the following lifecycle methods apply:

1. `postProcessBeforeDestruction` methods of DestructionAwareBeanPostProcessors
2. DisposableBean's `destroy`
3. a custom `destroy-method` definition

Since:  
13 April 2001  
**See Also**:  
- ⭐ `BeanNameAware.` setBeanName,   
- `BeanClassLoaderAware.` setBeanClassLoader,   
- ⭐ `BeanFactoryAware.` setBeanFactory,   
- `org. springframework. context. EnvironmentAware.` setEnvironment,   
- `org. springframework. context. EmbeddedValueResolverAware.` setEmbeddedValueResolver,   
- `org. springframework. context. ResourceLoaderAware.` setResourceLoader,   
- `org. springframework. context. ApplicationEventPublisherAware.` setApplicationEventPublisher,   
- `org. springframework. context. MessageSourceAware.` setMessageSource,   
- ⭐ `org. springframework. context. ApplicationContextAware.` setApplicationContext,   
- `org. springframework. web. context. ServletContextAware.` setServletContext,   
- ⭐ `org. springframework. beans. factory. config. BeanPostProcessor.` postProcessBeforeInitialization,   
- ⭐ `InitializingBean.` afterPropertiesSet,   
- `org. springframework. beans. factory. support. RootBeanDefinition.` getInitMethodName,   
- ⭐ `org. springframework. beans. factory. config. BeanPostProcessor.` postProcessAfterInitialization,   
- `org. springframework. beans. factory. config. DestructionAwareBeanPostProcessor.` postProcessBeforeDestruction,   
- ⭐ `DisposableBean.` destroy,   
- `org. springframework. beans. factory. support. RootBeanDefinition.` getDestroyMethodName  