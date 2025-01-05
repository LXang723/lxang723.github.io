---
title: IoC
date: 2019-04-09
categories:
 - SpringBoot
---

![Spring Framework Documentation](https://img.shields.io/badge/Spring_Framework_Documentation-5.3.39-brightgreen.svg?style=for-the-badge)

[spring-framework 文档](https://docs.spring.io/spring-boot/docs/)

[spring-boot 文档](https://docs.spring.io/spring-boot/docs/)

This chapter covers Spring’s Inversion of Control (IoC) container.

``` java
DefaultListableBeanFactory factory = new DefaultListableBeanFactory();
XmlBeanDefinitionReader reader = new XmlBeanDefinitionReader(factory);
reader.loadBeanDefinitions(new FileSystemResource("beans.xml"));

// bring in some property values from a Properties file
PropertySourcesPlaceholderConfigurer cfg = new PropertySourcesPlaceholderConfigurer();
cfg.setLocation(new FileSystemResource("jdbc.properties"));

// now actually do the replacement
cfg.postProcessBeanFactory(factory);
```