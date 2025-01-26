---
title: Java 序列化
date: 2025/01/20
---

## 对象序列化（Object Serialization）

::: info 《码出高效：Java&nbsp;开发手册》P64：2.3.7&nbsp;序列化
内存中的数据对象只有转换为二进制流才可以进行数据持久化和网络传输。
**将数据对象转换为二进制流的过程称为对象的序列化（Serialization）。
反之，将二进制流恢复为数据对象的过程称为反序列化（Deserialization）。**
:::


**序列化**（Serialization）是将对象或数据结构转换为一系列字节的过程，以便将其存储或通过网络传输。这一过程在不同的编程语言中有不同的实现和用途，但基本的理念都是一致的。序列化后，数据被“扁平化”成可以流传输或持久化的格式，这个格式通常是标准的二进制流、JSON、XML等。

在大多数编程语言中，序列化是为了实现以下目的：

1. **持久化**：将内存中的数据结构（如对象）存储到磁盘或数据库中。
2. **网络通信**：通过网络传输对象，将对象的字节流作为网络数据发送。
3. **缓存**：在缓存系统中以序列化形式存储对象，方便后续快速读取。

## Java 中的序列化

在 Java 中，序列化是一个非常常见且重要的概念，尤其是在网络编程和持久化存储中。Java 提供了内置的支持，通过 `java.io.Serializable` 接口和相关的类（如 `ObjectOutputStream` 和 `ObjectInputStream`）来进行序列化和反序列化。

### 1. **Serializable 接口**

Java 提供了一个标记接口 `Serializable`，它指示一个类的对象可以被序列化。如果一个类的对象需要被序列化，它必须实现 `Serializable` 接口。这个接口本身不包含任何方法，它的存在是为了让 Java 的序列化机制知道该类的对象是可以序列化的。

```java
import java.io.Serializable;

public class Person implements Serializable {
    private String name;
    private int age;

    // Constructor, Getters and Setters
}
```

### 2. **ObjectOutputStream 和 ObjectInputStream**

在 Java 中，序列化的过程通常通过 `ObjectOutputStream` 类来实现，该类将对象写入输出流；反序列化的过程则是通过 `ObjectInputStream` 类实现，从输入流中读取对象。

- **序列化**：使用 `ObjectOutputStream` 将对象写入流。
- **反序列化**：使用 `ObjectInputStream` 从流中读取对象。

**序列化示例：**

```java
import java.io.*;

public class SerializationExample {
    public static void main(String[] args) {
        Person person = new Person("John", 30);

        // 序列化对象
        try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("person.ser"))) {
            out.writeObject(person);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

**反序列化示例：**

```java
import java.io.*;

public class DeserializationExample {
    public static void main(String[] args) {
        Person person = null;

        // 反序列化对象
        try (ObjectInputStream in = new ObjectInputStream(new FileInputStream("person.ser"))) {
            person = (Person) in.readObject();
            System.out.println(person.getName() + " - " + person.getAge());
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```

### 3. **序列化的细节与特性**

- **`serialVersionUID`**：为了确保反序列化时的兼容性，Java 提供了一个 `serialVersionUID` 静态变量。这个值用于验证序列化和反序列化时版本的兼容性。如果类的结构发生变化（例如字段的增加或删除），则反序列化时可以通过 `serialVersionUID` 来检查是否兼容，避免反序列化错误。

```java
private static final long serialVersionUID = 1L;
```

- **瞬态字段 (`transient`)**：如果类中的某个字段不希望被序列化，可以使用 `transient` 关键字标记该字段。在序列化过程中，带有 `transient` 关键字的字段会被忽略，反序列化时这些字段会被恢复为默认值。

```java
private transient String password;
```

- **自定义序列化方法**：Java 允许类实现 `writeObject()` 和 `readObject()` 方法，来控制序列化和反序列化的过程。例如，你可以在 `writeObject()` 中处理字段的序列化，或在 `readObject()` 中进行数据恢复操作。

```java
private void writeObject(ObjectOutputStream out) throws IOException {
    out.defaultWriteObject();
    // 自定义序列化过程
}

private void readObject(ObjectInputStream in) throws IOException, ClassNotFoundException {
    in.defaultReadObject();
    // 自定义反序列化过程
}
```

### 4. **序列化的用途**

- **分布式应用**：在分布式系统中，通过序列化对象，可以将对象在不同的节点之间传输。例如，RMI（远程方法调用）和 Java EE 的 EJB（企业 Java Beans）中，都广泛使用了序列化。
- **持久化存储**：Java 序列化提供了一种简便的方式来将对象存储在磁盘上。通过文件流，你可以将对象序列化存储，并在以后加载时反序列化。
- **缓存**：将序列化的对象存入内存中，作为缓存进行加速访问。

### 5. **序列化的缺点**

虽然序列化非常方便，但也有一些缺点：

- **性能问题**：序列化和反序列化的过程需要消耗时间和内存，特别是对于复杂对象。大量数据序列化会影响性能。
- **不适用所有对象**：并不是所有对象都能被序列化。例如，`Thread`、`Socket` 等类不能被序列化，因为它们包含与操作系统相关的资源。
- **版本兼容性问题**：当对象的类结构发生变化时，旧版本的对象可能无法反序列化为新版本的类，尤其是当字段变化时。

## 总结

Java 中的序列化是将对象转化为字节流的过程，广泛应用于对象的持久化存储、网络传输和缓存等场景。虽然 Java 提供了简便的序列化机制，但也需要注意其性能影响和版本兼容性问题。理解如何在 Java 中使用序列化及反序列化，能够帮助我们更好地处理对象存储和传输的需求。


应用场景：包括网络传输、远程调用、持久化存储（如保存到文件或数据库）、以及分布式系统中数据交换。  
Java 序列化关键类和接口：ObjectOutputStream 用于序列化，ObjectInputStream 用于反序列化。类必须实现 Serializable 接口才能被序列化。  
transient 关键字：在序列化过程中，有些字段不需要被序列化，例如敏感数据，可以使用 transient 关键字标记不需要序列化的字段。  
serialVersionUID：每个 Serializable 类都应该定义一个 serialVersionUID，用于在反序列化时验证版本一致性。
如果没有明确指定，Java 会根据类的定义自动生成一个 UID，版本不匹配可能导致反序列化失败。  
序列化性能问题：Java 的默认序列化机制可能比较慢，尤其是对于大规模分布式系统，可能会选择更加高效的序列化框架（如 Protobuf、Kryo）。  
安全性：反序列化是一个潜在的安全风险，因为通过恶意构造的字节流，可能会加载不安全的类或执行不期望的代码。因此，反序列化过程需要进行输入验证，避免反序列化漏洞。  

## 参考

- 《Effective Java（原书第3版）》P239：第12章 序列化
- 《Java 核心技术 卷 Ⅱ 高级特性（原书第12版）》P70：2.3 对象输入/输出流与序列化
- 《码出高效：Java 开发手册》P64：2.3.7 序列化
- [带你了解Java的序列化（Serializable）与反序列化](https://cloud.tencent.com/developer/article/1655892)