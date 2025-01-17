---
title: Windows 环境下多版本 JDK 配置指南
date: 2025-01-13
categories:
 - Tools
tags:
 - JDK
---

像 Maven 或 Gradle 这样的构建工具可能要求特定版本的 JDK。例如，Maven 在一些情况下可能需要 JDK 8，而 Gradle 可能要求更高版本的 JDK。

## 1. 使用 JVMS

🔗  [JDK Version Manager (JVMS) for Windows（Windows JDK 版本管理器 ）](https://github.com/ystyle/jvms)

类似于 NVM 。

### 使用方法 Usage


## 2. GUI

文件路径示例：  
``` bash
└─ D:\Program Files\Java
   ├─ jdk-1.8
   └─ jdk-17
```

使用 **jdk1.8**，把 `JAVA_HOME` 改为 `%JAVA_HOME_8%` 。使用 **jdk17** ，把 `JAVA_HOME` 改为 `%JAVA_HOME_17%` 即可。

在搜索栏（Win + S）中搜索 **编辑系统环境变量**。

### 配置 JAVA_HOME

默认指向 JDK 17。

| 变量名        | 变量值                         |
|---------------|--------------------------------|
| JAVA_HOME_8   | D:\Program Files\Java\jdk-1.8 |
| JAVA_HOME_17  | D:\Program Files\Java\jdk-17  |
| JAVA_HOME     | %JAVA_HOME_17%                |


### 配置 Path

追加 `%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;` 。

- %JAVA_HOME%\bin
- %JAVA_HOME%\jre\bin

### 配置 CLASSPATH

以分号 `;` 分隔路径，包含 `.`（当前目录）：`.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;`

``` powershell
.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;
```

最后运行 `java -version` 。

## 3. 命令行

### setx 命令介绍

setx 是 Windows 下的一个命令行工具，用于设置用户级或系统级环境变量。它与 set 命令不同，setx 创建的环境变量是永久性的，即使重新启动计算机也会保留。

setx 的变量值长度限制为 1024 个字符。如果 Path 太长，可能需要通过 GUI 手动编辑。

``` powershell
setx [变量名] [变量值] [/M]
```

- **变量名**：你想设置的环境变量的名称。
- **变量值**：环境变量的值（例如路径或配置字符串）。
- **/M**：将环境变量设置为系统级变量。如果省略此选项，则仅设置为当前用户的变量。

#### 查看环境变量值

setx 不支持直接查看环境变量值，可以使用以下命令查看：**echo %变量名%**，例如：`echo %JAVA_HOME%` 。

### 设置 JAVA_HOME

#### JAVA_HOME_8

``` powershell
setx JAVA_HOME_8 "D:\Program Files\Java\jdk-1.8" /M
```

#### JAVA_HOME_17

``` powershell
setx JAVA_HOME_17 "D:\Program Files\Java\jdk-17" /M
```

#### JAVA_HOME  

默认指向 JDK 17。

``` powershell
setx JAVA_HOME "%JAVA_HOME_17%" /M
```

``` powershell
echo %JAVA_HOME%
```

### 更新 Path

#### 获取当前 Path 值

``` powershell
echo %Path%
```

在更新 Path 之前，先获取当前的 Path 值，将输出的内容复制并保存，作为备份。

#### 追加路径

使用 %Path% 引用现有值，并将新路径 `%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;` 追加到末尾：

``` powershell
setx Path "%Path%;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;" /M
```

重新打开一个命令提示符窗口，运行 `echo %Path%` 命令验证更新是否成功。


### 设置 CLASSPATH

``` powershell
setx CLASSPATH ".;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar" /M
```

``` powershell
echo %CLASSPATH%
```

## 4. 问题排查

如切换未生效，尝试以下操作：

1. 删除 **C:\Windows\System32** 目录下的 `java.exe`、`javax.exe` 或 `javac.exe` 。

2. 删除 **C:\Program Files (x86)\Common Files\Oracle\Java\javapath** 和 **C:\ProgramData\Oracle\Java\javapath** 。
   - 搜索 `javapath` 删除相关文件夹。
   - 删除带 `javapath` 的 Path 环境变量。

3. 从注册表中（windows +R 输入 regedit）删除在 **HKEY_LOCAL_MACHINE\SOFTWARE\JavaSoft** 下的： 
   - `Java Development Kit` 的 `CurrentVersion` 项的值，
   - 和 `Java Runtime Environment` 的 `CurrentVersion` 项的值。
