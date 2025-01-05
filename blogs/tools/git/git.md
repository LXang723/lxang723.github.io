---
title: Git 入门
date: 2019-04-09
tags:
 - Git
categories:
 - Tools
---

**Git** 是一个免费的开源分布式版本控制系统（Distributed Version Control System，简称 DVCS），旨在以快速和高效的方式处理从小型到超大型项目的所有内容。   

**分布式版本控制系统**：客户端并不只提取最新版本的文件快照， 而是把代码仓库完整地镜像下来，包括完整的历史记录。 这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。 因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份。  

**直接记录快照，而非差异比较**  
Git 和其它版本控制系统（包括 Subversion 和近似工具）的主要差别在于 Git 对待数据的方式。 从概念上来说，其它大部分系统以文件变更列表的方式存储信息，这类系统（CVS、Subversion、Perforce 等等） 将它们存储的信息看作是一组基本文件和每个文件随时间逐步累积的差异 （它们通常称作 基于差异（delta-based） 的版本控制）。

## Git CheatSheet
<ImgWithSize src="./assets/Git-CheatSheet.png" alt="Visual Git Cheat Sheet" width="700"/>
Git CheatSheet：可视化 Git 参考页，便于更加直观的了解 Git 命令。  
网址：[NDP Software::Git CheatSheet](https://ndpsoftware.com/git-cheatsheet.html)  
GitHub：[ndp / git-cheatsheet](https://github.com/ndp/git-cheatsheet)

Docker 镜像：
``` bash
docker pull lxang723/lxang723_repo:git-cheatsheet
```

## 三种状态
**已修改（Modified）**：修改了但是没有保存到暂存区的文件。  
**已暂存（Staged）**：修改后已经保存到暂存区的文件。  
**已提交（Committed）**：把暂存区的文件提交到本地仓库后的状态。  

Git 有三种状态，你的文件可能处于其中之一： 已提交（committed）、已修改（modified） 和 已暂存（staged）。

已修改：表示修改了文件，但还没保存到数据库中。

已暂存：表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。

已提交：表示数据已经安全地保存在本地数据库中。

## 四个区域
**工作区（Working Directory）**：就是你在电脑里能实际看到的目录。  
**暂存区（Stage/Index）**：暂存区也叫索引， 用来临时存放未提交的内容， 一般在.git目录下的index中。  
**本地仓库（Repository）**：Git在本地的版本库， 仓库信息存储在.git这个隐藏目录中。  
**远程仓库（Remote Repository）**：托管在远程服务器上的仓库。 常用的有GitHub、 GitLab、 Gitee。  



## 基本概念
**main/master**：默认主分支  
**origin**：默认远程仓库  
**HEAD**：指向当前分支的指针  
**HEAD^**：上一个版本  
**HEAD~4**：上四个版本  

## 特殊文件
**.git** Git仓库的元数据和对象数据库  
**.gitignore** 忽略文件，不需要提交到仓库的文件  
**.gitattributes** 指向当前分支的指针  
**.gitkeep** 使空目录被提交到仓库  
**.gitmodules** 记录子模块的信息  
**.gitconfig** 记录仓库的配置信息  

[Git 命令备忘单](/blogs/tools/git/git-cheat-sheet.md)  