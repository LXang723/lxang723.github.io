---
title: Git 命令备忘单
date: 2019-04-09
tags:
 - Git
categories:
 - Tools
---

[Git 官方网站](https://git-scm.com/)  
- [Reference](https://git-scm.com/docs)  
快速参考指南：Quick reference guides: [GitHub Cheat Sheet](https://training.github.com/downloads/zh_CN/github-git-cheat-sheet/)  | [Visual Git Cheat Sheet](https://ndpsoftware.com/git-cheatsheet.html#loc=stash;)  
所有命令的完整列表：
[Complete list of all commands](https://git-scm.com/docs/git#_git_commands)
- [Book](https://git-scm.com/book/zh/v2)  
中文版下载：[Releases · progit/progit2-zh: Pro Git 2nd Edition](https://github.com/progit/progit2-zh/releases)   

[GitHub 文档](https://docs.github.com/zh/get-started/getting-started-with-git/set-up-git)  
[GeeksforGeeks Git Cheat Sheet](https://www.geeksforgeeks.org/git-cheat-sheet/)  




## 设置 Git
对所有本地仓库的用户信息进行配置。  
打开Git Bash：
### 设置用户名和邮件地址 Set your username globally.
``` bash
git config --global user.name "yourname"
git config --global user.email "youremail@example.com"
```
为一个仓库设置 Git 用户名

确认设置
``` bash
git config --global
```
### 启用彩色命令行输出
``` bash
git config --global color.ui auto
```

### 启用彩色命令行输出
``` bash
git help
```
### 存储配置
``` bash
git config --global credential.helper store
```

## 创建仓库
### 创建一个新的本地仓库
``` bash
git init <project-name>
```
省略 project-name 则在当前目录创建。
### 克隆一个远程仓库
``` bash
git clone <url>
```

修改 Git 远程仓库地址：

``` bash
git remote set-url origin <新的仓库地址>
```

例如：

``` bash
git remote set-url origin https://github.com/username/repository.git
```

这样就更新了远程仓库地址。如果你想查看修改后的地址，可以运行：

``` bash
git remote -v
```

## 个人常见问题

fatal: unable to access 'xxx': OpenSSL SSL_read: SSL_ERROR_SYSCALL, errno 0
``` bash
git config --global --unset http.proxy 
git config --global --unset https.proxy
```

fatal: unable to access 'xxx': Failed to connect to github.com port 443 after 21045 ms: Could not connect to server
``` bash
git config --global http.proxy 127.0.0.1:10088
git config --global https.proxy 127.0.0.1:10088
```
设置 -> 网络和Internet -> 代理

``` bash
docker pull lxang723/lxang723_repo:git-cheatsheet
```