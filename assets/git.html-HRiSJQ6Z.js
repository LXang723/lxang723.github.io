import{_ as l,c as g,a as i,b as e,f as n,d as s,e as p,r as o,o as d}from"./app-BLuAdOCx.js";const h="/assets/Git-CheatSheet-DIIL5Ij9.png",b={},m={href:"https://ndpsoftware.com/git-cheatsheet.html",target:"_blank",rel:"noopener noreferrer"},c={href:"https://github.com/ndp/git-cheatsheet",target:"_blank",rel:"noopener noreferrer"};function u(f,t){const r=o("ExternalLinkIcon"),a=o("RouteLink");return d(),g("div",null,[t[8]||(t[8]=i('<h2 id="git-介绍" tabindex="-1"><a class="header-anchor" href="#git-介绍"><span>Git 介绍</span></a></h2><p><strong>Git</strong> 是一个免费的开源分布式版本控制系统（Distributed Version Control System，简称 DVCS），旨在以快速和高效的方式处理从小型到超大型项目的所有内容。</p><p><strong>分布式版本控制系统</strong>：客户端并不只提取最新版本的文件快照， 而是把代码仓库完整地镜像下来，包括完整的历史记录。 这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。 因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份。</p><p><strong>直接记录快照，而非差异比较</strong><br> Git 和其它版本控制系统（包括 Subversion 和近似工具）的主要差别在于 Git 对待数据的方式。 从概念上来说，其它大部分系统以文件变更列表的方式存储信息，这类系统（CVS、Subversion、Perforce 等等） 将它们存储的信息看作是一组基本文件和每个文件随时间逐步累积的差异 （它们通常称作 基于差异（delta-based） 的版本控制）。</p><h2 id="git-cheatsheet" tabindex="-1"><a class="header-anchor" href="#git-cheatsheet"><span>Git CheatSheet</span></a></h2><p><img src="'+h+'" alt="Visual Git Cheat Sheet"></p>',6)),e("p",null,[t[2]||(t[2]=n("Git CheatSheet：可视化 Git 参考页，便于更加直观的了解 Git 命令。")),t[3]||(t[3]=e("br",null,null,-1)),t[4]||(t[4]=n(" 网址：")),e("a",m,[t[0]||(t[0]=n("NDP Software::Git CheatSheet")),s(r)]),t[5]||(t[5]=e("br",null,null,-1)),t[6]||(t[6]=n(" GitHub：")),e("a",c,[t[1]||(t[1]=n("ndp / git-cheatsheet")),s(r)])]),t[9]||(t[9]=i(`<p>Docker 镜像：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> pull lxang723/lxang723_repo:git-cheatsheet</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="三种状态" tabindex="-1"><a class="header-anchor" href="#三种状态"><span>三种状态</span></a></h2><p><strong>已修改（Modified）</strong>：修改了但是没有保存到暂存区的文件。<br><strong>已暂存（Staged）</strong>：修改后已经保存到暂存区的文件。<br><strong>已提交（Committed）</strong>：把暂存区的文件提交到本地仓库后的状态。</p><p>Git 有三种状态，你的文件可能处于其中之一： 已提交（committed）、已修改（modified） 和 已暂存（staged）。</p><p>已修改：表示修改了文件，但还没保存到数据库中。</p><p>已暂存：表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。</p><p>已提交：表示数据已经安全地保存在本地数据库中。</p><h2 id="四个区域" tabindex="-1"><a class="header-anchor" href="#四个区域"><span>四个区域</span></a></h2><p><strong>工作区（Working Directory）</strong>：就是你在电脑里能实际看到的目录。<br><strong>暂存区（Stage/Index）</strong>：暂存区也叫索引， 用来临时存放未提交的内容， 一般在.git目录下的index中。<br><strong>本地仓库（Repository）</strong>：Git在本地的版本库， 仓库信息存储在.git这个隐藏目录中。<br><strong>远程仓库（Remote Repository）</strong>：托管在远程服务器上的仓库。 常用的有GitHub、 GitLab、 Gitee。</p><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h2><p><strong>main/master</strong>：默认主分支<br><strong>origin</strong>：默认远程仓库<br><strong>HEAD</strong>：指向当前分支的指针<br><strong>HEAD^</strong>：上一个版本<br><strong>HEAD~4</strong>：上四个版本</p><h2 id="特殊文件" tabindex="-1"><a class="header-anchor" href="#特殊文件"><span>特殊文件</span></a></h2><p><strong>.git</strong> Git仓库的元数据和对象数据库<br><strong>.gitignore</strong> 忽略文件，不需要提交到仓库的文件<br><strong>.gitattributes</strong> 指向当前分支的指针<br><strong>.gitkeep</strong> 使空目录被提交到仓库<br><strong>.gitmodules</strong> 记录子模块的信息<br><strong>.gitconfig</strong> 记录仓库的配置信息</p>`,14)),e("p",null,[s(a,{to:"/blogs/tools/git/git-cheat-sheet.html"},{default:p(()=>t[7]||(t[7]=[n("Git 命令备忘单")])),_:1})])])}const x=l(b,[["render",u],["__file","git.html.vue"]]),k=JSON.parse('{"path":"/blogs/tools/git/git.html","title":"Git 入门","lang":"en-US","frontmatter":{"title":"Git 入门","date":"2019-04-09T00:00:00.000Z","pageClass":"img-max-height","tags":["Git"],"categories":["Tools"]},"headers":[{"level":2,"title":"Git 介绍","slug":"git-介绍","link":"#git-介绍","children":[]},{"level":2,"title":"Git CheatSheet","slug":"git-cheatsheet","link":"#git-cheatsheet","children":[]},{"level":2,"title":"三种状态","slug":"三种状态","link":"#三种状态","children":[]},{"level":2,"title":"四个区域","slug":"四个区域","link":"#四个区域","children":[]},{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":2,"title":"特殊文件","slug":"特殊文件","link":"#特殊文件","children":[]}],"git":{"createdTime":1736081154000,"updatedTime":1737085347000,"contributors":[{"name":"柒月廿三","email":"lxang723@163.com","commits":3}]},"filePathRelative":"blogs/tools/git/git.md"}');export{x as comp,k as data};