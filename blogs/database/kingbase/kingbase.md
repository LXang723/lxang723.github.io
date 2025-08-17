---
title: Linux 服务器安装 KingbaseES V8R6
date: 2022-08-26
tags:
 - Kingbase
categories:
 - DB
---


![KingbaseES V8R6](https://img.shields.io/badge/KingbaseES-V8R6-brightgreen.svg?style=for-the-badge)

参考官方文档：[安装与升级]基于Linux系统的数据库软件安装指南.pdf

## 一、安装包准备

::: tip 官方文档要求
准备需要安装的金仓数据库管理系统 KingbaseES |version| 安装程序和 jdk1.8 及以上的 jdk 环境。
:::

 **说明：**
首先确认服务器的架构，根据架构准备相应的安装包文件。否则会在安装过程中出现 “无法执行二进制文件: 可执行文件格式错误” 的问题。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/d9452d80014e2e628a5375a7780386cc.png)

**查看系统配置： 查看CPU处理器信息：**
```powershell
lscpu
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/be80895be0bd6a43416afe0a58864972.png)
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/53febdeb098032aa15900f5e79106237.png)
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/88a10ded78b67e0f2d97fa9da6090726.png)
**不光是数据库，JDK也需要准备相应版本的安装包。**

准备好了安装包和授权文件，再进行以下操作。

## 二、预安装工作
### 1.创建安装用户
::: tip 官方文档要求
安装数据库时，安装用户对于安装路径需有“读”、“写”、“执行”的权限。  
在 Linux 系统中，要以非 root 用户执行安装程序，且该用户要有标准的 home 目录。
:::

``` powershell
groupadd kingbase
useradd kingbase -m -g kingbase
passwd kingbase
```
![创建 kingbase 用户](https://i-blog.csdnimg.cn/blog_migrate/b96224f2ec0046d1f5eaaee0819b55d7.png)
输入密码、确认密码
![输入密码、确认密码](https://i-blog.csdnimg.cn/blog_migrate/63d34564341c57d4d3e623b65c06de66.png)

新建用户后会在 home 文件夹下创建 kingbase 目录。
后续可将文件上传到此目录 /home/kingbase ,可以避免在安装过程中出现权限问题（例如证书文件的访问权限，反正安装完成后都是要删除的）。

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/28594f46742980378004f6df91d234af.png)
 ### 2. 安装目录
::: tip 官方文档要求
金仓数据库管理系统 KingbaseES 安装过程中有默认的安装目录 /opt/Kingbase/ES/V8，如果直接使用 kingbase 用户安装，安装过程中将会提示没有权限。
因此，建议在正式安装之前，将安装目录的权限赋予 kingbase 用户：
chown -R kingbase:kingbase /opt/Kingbase/ES/V8
:::
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/0683c6d8c2ce2ed53219fd546656521f.png)

``` powershell
mkdir -pv /opt/Kingbase/ES/V8
chown -R kingbase:kingbase /opt/Kingbase/ES/V8
```

### 3. 准备安装程序
::: tip 官方文档要求
iso 格式的安装程序包需要先挂载才能使用。挂载 iso 文件需要使用 root 用户。挂载后在目录下可以看到 setup 目录和 setup.sh 脚本。
:::

在 mnt 文件夹下创建挂载目录 kingbase

``` powershell
mkdir -pv /mnt/kingbase
```

使用 root 用户挂载 iso 格式安装包（安装包文件和目录以实际为准）
``` powershell
mount -o loop /home/kingbase/KingbaseES_V008R006C006B0013PS003_Lin64_install.iso /mnt/kingbase
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/a9050561cb88f87e9104daebd3822595.png)

## 三、安装
### 1. 控制台安装
切换 kingbase 用户安装
``` powershell
su kingbase
cd /mnt/kingbase
sh setup.sh -i console
```
### 2. 大小写敏感设置
在安装过程中大部分都可以直接 Enter ，但是在大小写敏感项的时候，需要设置为 No。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/fc149e29394e56dbe6d75b051dad3235.png)
### 3. 执行 root.sh
安装完成，但并没有真正完整结束
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/efd94670f4e4b9c9cd9a249ef49977cf.png)
根据提示将 Kingbase 注册为系统服务，执行 /opt/Kingbase/ES/V8/install/script/root.sh

::: tip 官方文档要求
对于 linux 系统，金仓数据库管理系统 KingbaseES V8R6 安装完成后，需执行 root.sh，具体步骤如下：
打开新终端；  
切换到 root 用户；  
运行 < 安装目录 >/install/script/root.sh 。  
**Note: linux 中执行 root.sh 成功后，安装过程才真正完整结束。**
:::

切换 root 用户，执行 root.sh
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/9754907de038d2e97cfc56dbe7f8059e.png)

```powershell
su root
sh /opt/Kingbase/ES/V8/install/script/root.sh
```
## 四、测试连接

```powershell
cd /opt/Kingbase/ES/V8/Server/bin
./ksql -U system -d test
\l
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/2f3fffceb830f8140d326be3d2e49e3d.png)
## 五、逻辑还原
### 1. 创建数据库

```sql
create database zasirmp_0824;
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/d60294cd4a9274203a88509e167bca3a.png)
**退出数据库**
```powershell
\q
```
## 2.  dmp 文件还原数据库
可在 bin 目录下执行 sys_restore --help ，查看 sys_restore 用法
```powershell
cd /opt/Kingbase/ES/V8/Server/bin
./sys_restore -U system -d zasirmp_0824 /home/kingbase/DB_2022-08-25_16_08_33.dmp
```
切换数据库，查看导入表表名
```powershell
./ksql -U system -d zasirmp_0824
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
```
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/45407eb8166dceed2d965b4d6968e90a.png)
## 六、其他
### 1. ora_input_emptystr_isnull
打开 /opt/Kingbase/ES/V8/data/kingbase.conf  文件
```powershell
vi /opt/Kingbase/ES/V8/data/kingbase.conf
```
拉到最最最下面，将参数
```powershell
ora_input_emptystr_isnull = on
```
改为
```powershell
ora_input_emptystr_isnull = off
```
改完之后保存，重启
### 2. 查看服务状态
```powershell
systemctl status kingbase8d.service
```
### 3. 重启服务
```powershell
service kingbase8d restart
```