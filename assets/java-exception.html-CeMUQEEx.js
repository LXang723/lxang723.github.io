import{_ as c,c as a,a as n,b as o,d as l,e as i,f as t,r as s,o as p}from"./app-D3GZ-rTy.js";const d="/assets/exception-classification-ObhTPLiW.svg",h="/assets/throwable-D44vemyt.svg",u={},g={id:"throwable",tabindex:"-1"},x={class:"header-anchor",href:"#throwable"},E={id:"error",tabindex:"-1"},k={class:"header-anchor",href:"#error"},b={id:"exception",tabindex:"-1"},f={class:"header-anchor",href:"#exception"};function v(w,e){const r=s("font");return p(),a("div",null,[e[9]||(e[9]=n('<h2 id="异常分类" tabindex="-1"><a class="header-anchor" href="#异常分类"><span>异常分类</span></a></h2><p>Java 中的异常类继承自 <code>java.lang.Throwable</code> 类。 Throwable 有两个主要的子类：<code>Error</code> 和 <code>Exception</code> 。</p><p><strong>Error</strong>：表示系统级的错误，这些错误通常是致命的，应用程序通常无法恢复。</p><p><strong>Exception</strong>：表示应用程序级的异常，这些异常通常是可以被捕获并处理的。 Exception 类又进一步分为两类：<code>受检异常</code> 和 <code>非受检异常</code>。</p><p><strong>受检异常（Checked Exception）</strong>：在编译时就必须被处理的异常。 如果方法可能会抛出受检异常，那么该方法必须在方法签名中使用<code>throws</code>关键字声明这些异常。 调用该方法的代码必须捕获这些异常，或者将它们继续向上层抛出。</p><p><strong>非受检异常（Unchecked Exception）</strong>：包括运行时异常（<code>RuntimeException</code>及其子类）和错误（<code>Error</code>及其子类）。这些异常在编译时不需要被显式声明或捕获。</p>',6)),o("h3",g,[o("a",x,[o("span",null,[l(r,{color:"#5d67e8"},{default:i(()=>e[0]||(e[0]=[t("Throwable")])),_:1})])])]),e[10]||(e[10]=n("<p><strong>《核心技术·卷Ⅰ》中的描述</strong>：</p><blockquote><p><strong>P291</strong>：在 Java 程序设计语言中，异常对象都是派生于 <code>Throwable</code> 类的一个类的实例。 如果 Java 中内置的异常类不能满足需求，用户还可以创建自己的异常类。<br><strong>P292</strong>：所有的异常都是由 Throwable 继承而来，但在这个层次结构中。下一层立即分为两个分支：<code>Error</code> 和 <code>Exception</code> 。</p></blockquote><p><strong>《码出高效》中的描述</strong>：</p><blockquote><p><strong>P137</strong>：Java 中定义了一套完整的异常机制，所有异常都是 Throwable 的子类，为 <code>Error</code>（致命异常）和 <code>Exception</code>（非致命异常）。</p></blockquote>",4)),o("h3",E,[o("a",k,[o("span",null,[l(r,{color:"#5d67e8"},{default:i(()=>e[1]||(e[1]=[t("Error")])),_:1})])])]),e[11]||(e[11]=n("<p><strong>《核心技术·卷Ⅰ》中的描述</strong>：</p><blockquote><p><strong>P292</strong>：Error 类层次结构描述了 <strong>Java 运行时系统的内部错误和资源耗尽问题</strong>。你不应该抛出这种类型的对象。 如果出现了这样的内部错误，除了通知用户，并尽力妥善地终止程序之外，你几乎无能为力。这种情况很少出现。</p></blockquote><p><strong>《码出高效》中的描述</strong>：</p><blockquote><p><strong>P137</strong>：Error 是一种非常特殊的异常类型，它的出现标识着系统发生了不可控的错误，例如 <code>StackOverflowError</code> 和 <code>OutOfMemoryError</code> 。针对此类错误，程序无法处理，只能人工介入。</p></blockquote>",4)),o("h3",b,[o("a",f,[o("span",null,[l(r,{color:"#5d67e8"},{default:i(()=>e[2]||(e[2]=[t("Exception")])),_:1})])])]),e[12]||(e[12]=o("p",null,[o("strong",null,"《核心技术·卷Ⅰ》中的描述"),t("：")],-1)),o("blockquote",null,[o("p",null,[e[4]||(e[4]=o("strong",null,"P292",-1)),e[5]||(e[5]=t("：Exception 层次结构分为两个分支：继承自 RuntimeException 的异常、不继承自 RuntimeException 的异常。")),e[6]||(e[6]=o("br",null,null,-1)),e[7]||(e[7]=o("strong",null,"P293",-1)),e[8]||(e[8]=t("：")),l(r,{color:"#5d67e8"},{default:i(()=>e[3]||(e[3]=[t("Java 语言规范将派生于 Error 类或 RuntimeException 类的所有异常称为非检查型（unchecked）异常，所有其他异常称为检查型（checked）异常。")])),_:1})])]),e[13]||(e[13]=n('<p><strong>《码出高效》中的描述</strong>：</p><blockquote><p><strong>P137</strong>：Exception 又分为 <code>checked</code> 异常（受检异常）和 <code>unchecked</code> 异常（非受检异常）。<br><strong>checked 异常</strong>是需要在代码中显式处理的异常，否则会编译出错。<br> 如果能自行处理则可以在当前方法中捕获异常；如果无法处理，则继续向调用方抛出异常对象。<br> 常见的 checked 异常包括 JDK 中定义的 SQLException、ClassNotFoundException 等。<br><strong>unchecked 异常</strong>是运行时异常，他们都继承自 RuntimeException，不需要程序进行显式的捕捉和处理。</p></blockquote><blockquote><p><strong>P137</strong>：checked 异常可以进一步细分为两类：</p><ul><li>无能为力、<strong>引起注意型</strong>：针对此类异常，程序无法处理，如字段超长等导致的 SQLException，即使做再多的重试对解决异常也是没有任何帮助的，一般处理此类异常的做法是完整的保存异常现场，供开发工程师介入解决。</li><li>力所能及、<strong>坦然处置型</strong>：如发生未授权异常（UnAuthorizedException），程序可跳转至权限申请页面。</li></ul></blockquote><blockquote><p><strong>P137、P138</strong>：unchecked 异常可以进一步细分为3类：</p><ul><li><strong>可预测异常</strong>（Predicted Exception）：常见的可预测异常包括 IndexOutOfBoundsException、NullPointerException 等。基于对代码的性能和稳定性要求，此类异常不应该被产生或者抛出，而应该提前做好边界检查、空指针判断等处理。显式的声明或者捕获此类异常会对程序的可读性恶化运行效率产生很大影响。</li><li><strong>需捕捉异常</strong>（Caution Exception）：例如在使用 Dubbo 框架进行 RPC 调用时产生的远程服务超时异常 DubboTimeoutException。此类异常是客户端必须显示处理的异常，不能因服务端的异常导致客户端不可用，此时处理方案可以是重试或者降级处理等。</li><li><strong>可透出异常</strong>（Ignored Exception）：主要是指框架或系统产生的且会自行处理的异常，而程序无需关心。例如针对 Spring 框架中抛出的 NoSuchRequestHandingMethodException 异常，Spring 框架会自己完成异常的处理，默认将自身抛出的异常自动映射到合适的状态码，比如启动防护机制跳转到 404 页面。</li></ul></blockquote><p><img src="'+d+'" alt="异常分类结构"></p><p>《码出高效》P138：图 5-1 异常分类结构</p><h2 id="异常的处理方式" tabindex="-1"><a class="header-anchor" href="#异常的处理方式"><span>异常的处理方式</span></a></h2><h2 id="常见的异常" tabindex="-1"><a class="header-anchor" href="#常见的异常"><span>常见的异常</span></a></h2><p><img src="'+h+'" alt="常见的异常"></p><h3 id="error-1" tabindex="-1"><a class="header-anchor" href="#error-1"><span>Error</span></a></h3><ul><li><p><strong>OutOfMemoryError</strong>：表明 Java 堆内存不足，无法为对象分配内存空间。 这个错误通常发生在应用程序试图创建新的对象，但堆内存空间已经被完全占用时。 这可能是由于程序中存在内存泄漏、数据量超出了预期范围或 JVM 配置的内存参数不当等原因导致的。</p></li><li><p><strong>StackOverflowError</strong>：当线程的堆栈大小超过了 JVM 设置的限制时，会抛出此错误。 这通常是由于程序中存在无限制的递归调用或递归深度过大导致的。</p></li></ul><h3 id="运行时异常-unchecked-exception" tabindex="-1"><a class="header-anchor" href="#运行时异常-unchecked-exception"><span>运行时异常（Unchecked Exception）</span></a></h3><p>常见的运行时异常包括：</p><ol><li><strong>NullPointerException</strong>：当应用程序试图在需要对象的地方使用null时，会抛出此异常。例如，调用null对象的实例方法或访问null对象的字段时。</li><li><strong>ArithmeticException</strong>：当出现异常的运算条件时，会抛出此异常。例如，整数除以零时。</li><li><strong>ClassCastException</strong>：当试图将对象强制转换为不是实例的子类时，会抛出此异常。例如，将String类型的对象强制转换为Integer类型。</li><li><strong>ArrayIndexOutOfBoundsException</strong>：当尝试访问数组的非法索引时，会抛出此异常。索引值为负或大于等于数组大小时，即为非法索引。</li></ol><ul><li>NullPointerException(空指针异常)</li><li>IllegalArgumentException(参数异常，比如方法入参类型错误)</li><li>NumberFormatException（字符串转换为数字格式错误，IllegalArgumentException的子类）</li><li>ArrayIndexOutOfBoundsException（数组越界异常）</li><li>ClassCastException（类型转换异常）</li><li>ArithmeticException（算术异常）</li><li>SecurityException（安全异常，比如权限不够）</li><li>UnsupportedOperationException(不支持的操作异常，比如重复创建同一用户)</li></ul><h3 id="编译期异常-checked-exception" tabindex="-1"><a class="header-anchor" href="#编译期异常-checked-exception"><span>编译期异常（Checked Exception）</span></a></h3><p>常见的编译期异常包括：</p><ol><li><strong>FileNotFoundException</strong>：当试图打开指定路径名表示的文件失败时，会抛出此异常。</li><li><strong>ClassNotFoundException</strong>：当试图加载某个类但找不到该类的定义时，会抛出此异常。</li><li><strong>SQLException</strong>：当访问数据库时发生错误时，会抛出此异常。例如，SQL语句写错、访问的表不存在或连接数据库失败等。</li><li><strong>NoSuchFieldException</strong>：当试图访问某个类或接口的某个字段，但该字段不存在时，会抛出此异常。</li><li><strong>NoSuchMethodException</strong>：当试图调用某个类或接口的某个方法，但该方法不存在时，会抛出此异常。</li><li><strong>ParseException</strong>：当试图解析某个字符串为特定格式（如日期、时间等）但解析失败时，会抛出此异常。</li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li>《Java 核心技术 卷 Ⅰ 开发基础（原书第12版）》P290：第7章 异常、断言和日志</li><li>《Effective Java（原书第3版）》P208：第10章 异常</li><li>《码出高效：Java 开发手册》P136：第5章 异常与日志</li></ul><h2 id="相关面试题" tabindex="-1"><a class="header-anchor" href="#相关面试题"><span>相关面试题</span></a></h2><h3 id="exception-和-error-有什么区别" tabindex="-1"><a class="header-anchor" href="#exception-和-error-有什么区别"><span>Exception 和 Error 有什么区别？</span></a></h3><p>Exception 和 Error 都是 Throwable 类的子类。</p><p>Error 是指 Java 运行时系统的内部错误和资源耗尽问题。<br> Error 表示系统级的错误，这些错误通常是致命的，应用程序通常无法恢复。<br> 例如 <code>OutOfMemoryError</code>（内存溢出）和 <code>StackOverflowError</code>、<code>NoClassDefFoundError</code>（类定义找不到）等。</p><p>Exception 表示应用程序级的异常，这些异常通常是可以被捕获并处理的。</p><p>Exception 又分为 <code>受检异常</code>（编译期异常）和 <code>非受检异常</code>（运行时异常）。</p><hr><h3 id="checked-exception-和-unchecked-exception-有什么区别" tabindex="-1"><a class="header-anchor" href="#checked-exception-和-unchecked-exception-有什么区别"><span>Checked Exception 和 Unchecked Exception 有什么区别？</span></a></h3><p><code>checked</code> 异常（受检异常）是需要在代码中显式处理的异常，否则会编译出错。</p><p><code>unchecked</code> 异常（非受检异常）是运行时异常，不需要程序进行显式的捕获和处理。</p><p>运行时异常（RuntimeException 及其子类）和 错误（Error 及其子类）都属于 Unchecked Exception 。</p><hr><h3 id="运行时异常和编译时异常之间的区别是什么" tabindex="-1"><a class="header-anchor" href="#运行时异常和编译时异常之间的区别是什么"><span>运行时异常和编译时异常之间的区别是什么？</span></a></h3><p>运行时异常通常是由于程序员的逻辑错误导致的，而编译期异常则是由于外部条件或资源问题导致的。</p><p>运行时异常：发生在程序运行期间，编译器不会强制要求捕获或声明它们，可以不用显式处理，可以选择使用 try-catch 捕获处理。</p><p>编译期异常：发生在编译阶段，编译器会强制要求捕获或声明这些异常，必须在代码中显式处理，使用 try-catch 捕获或者 throws 关键字声明抛出，否则程序将无法通过编译。</p><hr><h3 id="throw-和-throws-有什么区别" tabindex="-1"><a class="header-anchor" href="#throw-和-throws-有什么区别"><span>throw 和 throws 有什么区别？</span></a></h3><blockquote><p><strong>《码出高效》P137、P138</strong>： throw 是方法内部抛出具体异常类对象的关键词，而 throws 则用在方法签名上，表示调用者可以通过此方法声明向上抛出异常对象。</p><p>如果异常在当前方法的处理能力范围之内且没有必要对外透出，那么就直接捕获异常并做相应处理； 否则向上抛出，由上层方法或者框架来处理。</p><p>如果在方法内部处理异常，需要根据不同的业务场景进行定制处理，如重试、回滚等操作。 如果向上抛出异常，需要再异常对象中添加上下文参数、局部变量、运行环境等信息，这样有利于排查问题。</p></blockquote><hr><h3 id="throwable-类常用方法有哪些" tabindex="-1"><a class="header-anchor" href="#throwable-类常用方法有哪些"><span>Throwable 类常用方法有哪些？</span></a></h3><h3 id="try-catch-finally-如何使用" tabindex="-1"><a class="header-anchor" href="#try-catch-finally-如何使用"><span>try-catch-finally 如何使用？</span></a></h3><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">注意</p><p>不要在 finally 语句块中使用 return! 当 try 语句和 finally 语句中都有 return 语句时，try 语句块中的 return 语句会被忽略。这是因为 try 语句中的 return 返回值会先被暂存在一个本地变量中，当执行到 finally 语句中的 return 之后，这个本地变量的值就变为了 finally 语句中的 return 返回值。</p></div><h3 id="finally-中的代码一定会执行吗" tabindex="-1"><a class="header-anchor" href="#finally-中的代码一定会执行吗"><span>finally 中的代码一定会执行吗？</span></a></h3><h3 id="如何使用-try-with-resources-代替-try-catch-finally" tabindex="-1"><a class="header-anchor" href="#如何使用-try-with-resources-代替-try-catch-finally"><span>如何使用 try-with-resources 代替 try-catch-finally？</span></a></h3><h3 id="异常使用有哪些需要注意的地方" tabindex="-1"><a class="header-anchor" href="#异常使用有哪些需要注意的地方"><span>异常使用有哪些需要注意的地方？</span></a></h3><p>《阿里巴巴 Java 开发手册》P56 2.1 异常处理</p>',47))])}const m=c(u,[["render",v],["__file","java-exception.html.vue"]]),P=JSON.parse('{"path":"/series/tech/java/basic/java-exception.html","title":"Java 异常","lang":"en-US","frontmatter":{"title":"Java 异常"},"headers":[{"level":2,"title":"异常分类","slug":"异常分类","link":"#异常分类","children":[{"level":3,"title":"Throwable","slug":"throwable","link":"#throwable","children":[]},{"level":3,"title":"Error","slug":"error","link":"#error","children":[]},{"level":3,"title":"Exception","slug":"exception","link":"#exception","children":[]}]},{"level":2,"title":"异常的处理方式","slug":"异常的处理方式","link":"#异常的处理方式","children":[]},{"level":2,"title":"常见的异常","slug":"常见的异常","link":"#常见的异常","children":[{"level":3,"title":"Error","slug":"error-1","link":"#error-1","children":[]},{"level":3,"title":"运行时异常（Unchecked Exception）","slug":"运行时异常-unchecked-exception","link":"#运行时异常-unchecked-exception","children":[]},{"level":3,"title":"编译期异常（Checked Exception）","slug":"编译期异常-checked-exception","link":"#编译期异常-checked-exception","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]},{"level":2,"title":"相关面试题","slug":"相关面试题","link":"#相关面试题","children":[{"level":3,"title":"Exception 和 Error 有什么区别？","slug":"exception-和-error-有什么区别","link":"#exception-和-error-有什么区别","children":[]},{"level":3,"title":"Checked Exception 和 Unchecked Exception 有什么区别？","slug":"checked-exception-和-unchecked-exception-有什么区别","link":"#checked-exception-和-unchecked-exception-有什么区别","children":[]},{"level":3,"title":"运行时异常和编译时异常之间的区别是什么？","slug":"运行时异常和编译时异常之间的区别是什么","link":"#运行时异常和编译时异常之间的区别是什么","children":[]},{"level":3,"title":"throw 和 throws 有什么区别？","slug":"throw-和-throws-有什么区别","link":"#throw-和-throws-有什么区别","children":[]},{"level":3,"title":"Throwable 类常用方法有哪些？","slug":"throwable-类常用方法有哪些","link":"#throwable-类常用方法有哪些","children":[]},{"level":3,"title":"try-catch-finally 如何使用？","slug":"try-catch-finally-如何使用","link":"#try-catch-finally-如何使用","children":[]},{"level":3,"title":"finally 中的代码一定会执行吗？","slug":"finally-中的代码一定会执行吗","link":"#finally-中的代码一定会执行吗","children":[]},{"level":3,"title":"如何使用 try-with-resources 代替 try-catch-finally？","slug":"如何使用-try-with-resources-代替-try-catch-finally","link":"#如何使用-try-with-resources-代替-try-catch-finally","children":[]},{"level":3,"title":"异常使用有哪些需要注意的地方？","slug":"异常使用有哪些需要注意的地方","link":"#异常使用有哪些需要注意的地方","children":[]}]}],"git":{"createdTime":1737884840000,"updatedTime":1737884840000,"contributors":[{"name":"柒月廿三","email":"lxang723@163.com","commits":1}]},"filePathRelative":"series/tech/java/basic/java-exception.md"}');export{m as comp,P as data};