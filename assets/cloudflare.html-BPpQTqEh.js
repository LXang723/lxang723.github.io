import{_ as a,c as d,b as l,f as r,d as t,a as n,e as u,r as s,o as p}from"./app-D3GZ-rTy.js";const c="/assets/cloudflare-proxy-dns-quK_uKLM.png",f="/assets/cloudflare-dns-records-B9KIF4pC.png",g={},h={href:"https://dash.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.fujieace.com/web/safety/cloudflare-using-tutorials.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://developers.cloudflare.com/learning-paths/get-started-free/?utm_medium=email&utm_source=transactional&utm_campaign=ca-confirmed-free",target:"_blank",rel:"noopener noreferrer"},v={href:"https://developers.cloudflare.com/learning-paths/get-started-free/onboarding/add-and-activate/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.cloudflare.com/zh-cn/learning/ssl/what-is-ssl/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://developers.cloudflare.com/learning-paths/get-started-free/onboarding/check-ssl/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://developers.cloudflare.com/support/troubleshooting/cloudflare-errors/troubleshooting-cloudflare-5xx-errors/#error-526-invalid-ssl-certificate",target:"_blank",rel:"noopener noreferrer"},b={href:"https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages#https-errors",target:"_blank",rel:"noopener noreferrer"};function T(L,e){const o=s("ExternalLinkIcon"),i=s("RouteLink");return p(),d("div",null,[l("p",null,[l("a",h,[e[0]||(e[0]=r("Cloudflare")),t(o)]),e[1]||(e[1]=r(" ：是一个提供内容分发网络（CDN）、网络安全、域名解析（DNS）以及其他互联网基础设施服务的公司。它主要通过提升网站的加载速度、提供 DDoS 防护、增强安全性等功能来帮助网站更高效、更安全地运行。"))]),e[14]||(e[14]=l("h2",{id:"参考链接",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#参考链接"},[l("span",null,"参考链接")])],-1)),l("ul",null,[l("li",null,[l("a",S,[e[2]||(e[2]=r("Cloudflare使用教程（注册、添加站点、开启CDN、缓存优化设置等）")),t(o)])]),l("li",null,[l("a",m,[e[3]||(e[3]=r("Cloudflare Docs")),t(o)])])]),e[15]||(e[15]=n('<h2 id="cloudflare-的好处" tabindex="-1"><a class="header-anchor" href="#cloudflare-的好处"><span>Cloudflare 的好处</span></a></h2><p>免费计划（最重要的）：Cloudflare 提供免费计划，适用于小型网站或个人项目。在免费计划下，你仍然可以享受到 CDN 加速和一些基本的安全功能。</p><p>内容分发网络（CDN）：Cloudflare 拥有全球多个数据中心，能够缓存静态内容（如图像、JavaScript 和 CSS 文件）并将其分发到离用户最近的服务器，这大大减少了加载时间，提高了网站响应速度。</p><p>其他的我不关心。</p><h2 id="使用-cloudflare-代理" tabindex="-1"><a class="header-anchor" href="#使用-cloudflare-代理"><span>使用 Cloudflare 代理</span></a></h2><p><img src="'+c+'" alt="cloudflare-proxy-dns"></p><p>添加并激活域名，之后会分配一组名称服务器。</p>',7)),l("p",null,[l("a",v,[e[4]||(e[4]=r("Add and activate your domain")),t(o)])]),e[16]||(e[16]=l("p",null,"添加 DNS 记录（和 NameSilo 的 DNS 记录一样）：",-1)),e[17]||(e[17]=l("p",null,[l("img",{src:f,alt:"cloudflare-dns-records"})],-1)),e[18]||(e[18]=l("h2",{id:"更改域名服务器",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#更改域名服务器"},[l("span",null,"更改域名服务器")])],-1)),l("p",null,[e[6]||(e[6]=r("参考 ")),t(i,{to:"/series/blog/namesilo.html"},{default:u(()=>e[5]||(e[5]=[r("NameSilo 的使用")])),_:1}),e[7]||(e[7]=r(" 的 ")),e[8]||(e[8]=l("strong",null,"# 更改域名服务器",-1)),e[9]||(e[9]=r(" 部分。"))]),e[19]||(e[19]=n('<h2 id="cloudflare-设置" tabindex="-1"><a class="header-anchor" href="#cloudflare-设置"><span>Cloudflare 设置</span></a></h2><p>左侧栏选择 <strong>SSL/TLS -&gt; 概述</strong>：</p><ul><li>配置加密模式：SSL/TLS 加密部分，点击 <strong>配置</strong> 按钮。SSL 模式设置为：完全（严格） <code>Full (strict)</code>。</li></ul><p>左侧栏选择 <strong>SSL/TLS -&gt; 边缘证书</strong>：</p><ul><li>始终使用 HTTPS（Always Use HTTPS）：开启。</li><li>自动 HTTPS 重写（Automatic HTTPS Rewrites）：开启。</li></ul>',5)),l("p",null,[l("a",w,[e[10]||(e[10]=r("什么是 SSL？ | SSL 定义")),t(o)])]),e[20]||(e[20]=l("p",null,"SSL/TLS证书允许网站在URL开头使用https（而不是http），这是一种更安全的连接协议。HTTPS对网站安全、用户隐私、SEO等等都有好处。",-1)),e[21]||(e[21]=l("h2",{id:"遇到的问题",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#遇到的问题"},[l("span",null,"遇到的问题")])],-1)),e[22]||(e[22]=l("h3",{id:"invalid-ssl-certificate-error-code-526",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#invalid-ssl-certificate-error-code-526"},[l("span",null,"Invalid SSL certificate Error code 526")])],-1)),l("p",null,[l("a",k,[e[11]||(e[11]=r("Check domain SSL/TLS")),t(o)])]),l("p",null,[l("a",x,[e[12]||(e[12]=r("Error 526: invalid SSL certificate")),t(o)])]),e[23]||(e[23]=n('<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">Error 526</p><p>Error 526 occurs when these two conditions are true:</p><ol><li>Cloudflare cannot validate the SSL certificate at your origin web server, and</li><li>Full SSL (Strict) SSL is set in the Overview tab of your Cloudflare SSL/TLS app.</li></ol></div><p>可以理解为：</p><ol><li>源服务器的 SSL 证书有问题。</li><li>并且 SSL 模式设置的 <code>Full (strict)</code>。</li></ol><div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">Note</p><p>For a potential quick fix, set <strong>SSL</strong> to Full instead of Full (strict) in the <strong>Overview</strong> tab of your Cloudflare <strong>SSL/TLS</strong> app for the domain.</p></div><p>快速修复：将 SSL 模式从 <code>Full (strict)</code> 更改为 <code>Full</code>。<br> 的确改为 Full 后，问题解决。<br> 但是我们想要使用 Full (strict) ，我这里的原因是未勾选 Enforce HTTPS，因为无法勾选。</p><h3 id="enforce-https-无法勾选" tabindex="-1"><a class="header-anchor" href="#enforce-https-无法勾选"><span>Enforce HTTPS 无法勾选</span></a></h3>',6)),l("p",null,[l("a",b,[e[13]||(e[13]=r("自定义域和 GitHub Pages 疑难解答 > HTTPS 错误")),t(o)])]),e[24]||(e[24]=n('<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">HTTPS 错误</p><p>配置自定义域后，您的站点可能需要最多一个小时才能通过 HTTPS 访问。 更新现有 DNS 设置后，您可能需要删除自定义域并将其重新添加到站点仓库，以触发启用 HTTPS 的进程。</p></div><p>可以尝试配置 DNS 记录使用子域 （例如 www.lxang723.blog）指向 <code>&lt;username&gt;.github.io</code> ，触发启用 HTTPS 的进程。</p>',2))])}const N=a(g,[["render",T],["__file","cloudflare.html.vue"]]),P=JSON.parse('{"path":"/series/blog/cloudflare.html","title":"Cloudflare 的使用","lang":"en-US","frontmatter":{"title":"Cloudflare 的使用","date":"2025-01-09T00:00:00.000Z"},"headers":[{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]},{"level":2,"title":"Cloudflare 的好处","slug":"cloudflare-的好处","link":"#cloudflare-的好处","children":[]},{"level":2,"title":"使用 Cloudflare 代理","slug":"使用-cloudflare-代理","link":"#使用-cloudflare-代理","children":[]},{"level":2,"title":"更改域名服务器","slug":"更改域名服务器","link":"#更改域名服务器","children":[]},{"level":2,"title":"Cloudflare 设置","slug":"cloudflare-设置","link":"#cloudflare-设置","children":[]},{"level":2,"title":"遇到的问题","slug":"遇到的问题","link":"#遇到的问题","children":[{"level":3,"title":"Invalid SSL certificate Error code 526","slug":"invalid-ssl-certificate-error-code-526","link":"#invalid-ssl-certificate-error-code-526","children":[]},{"level":3,"title":"Enforce HTTPS 无法勾选","slug":"enforce-https-无法勾选","link":"#enforce-https-无法勾选","children":[]}]}],"git":{"createdTime":1737884840000,"updatedTime":1737884840000,"contributors":[{"name":"柒月廿三","email":"lxang723@163.com","commits":1}]},"filePathRelative":"series/blog/cloudflare.md"}');export{N as comp,P as data};