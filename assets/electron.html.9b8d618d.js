import{r as e,o as n,c as r,a as o,F as t,b as a,d as s}from"./app.31fc93bc.js";const l={},c=o("h1",{id:"electron",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#electron","aria-hidden":"true"},"#"),a(" electron")],-1),p=o("p",null,"主进程和渲染器进程 web页面运行在渲染进程 与浏览器区别，页面可访问底层 GUI 操作，必须与主进程通讯",-1),i=a("require 时需要引 remote "),d={href:"https://stackoverflow.com/questions/45639628/how-to-fix-browserwindow-is-not-a-constructor-error-when-creating-child-window-i",target:"_blank",rel:"noopener noreferrer"},u=a("javascript - How to fix BrowserWindow is not a constructor error when creating child window in Electron renderer process - Stack Overflow"),h=o("li",null,[o("p",null,"nodeIntegration 5.0 起默认为 false")],-1),w={href:"https://jlongster.com/secret-of-good-electron-apps",target:"_blank",rel:"noopener noreferrer"},f=a("The Secret of Good Electron Apps"),k=o("h2",{id:"issues",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#issues","aria-hidden":"true"},"#"),a(" issues")],-1),b=o("p",null,"系统差异，windows 无法 open？",-1),E={href:"https://stackoverflow.com/questions/36072035/how-to-open-new-window-in-place-of-current-window-in-electron/38043021",target:"_blank",rel:"noopener noreferrer"},m=a("javascript - how to open new window in place of current window in Electron - Stack Overflow"),g={href:"https://www.my-fe.pub/post/electron-note.html",target:"_blank",rel:"noopener noreferrer"},v=a("Electron简单笔记 - 小翼的前端天地"),A={href:"https://www.codota.com/code/javascript/functions/electron/WebContents/on",target:"_blank",rel:"noopener noreferrer"},B=a("electron.WebContents.on JavaScript and Node.js code examples | Codota"),j={href:"https://stackoverflow.com/questions/39091964/remove-menubar-from-electron-app",target:"_blank",rel:"noopener noreferrer"},_=a("node.js - Remove menubar from Electron app - Stack Overflow"),x={href:"https://stackoverflow.com/questions/31171597/atom-electron-close-the-window-with-javascript",target:"_blank",rel:"noopener noreferrer"},C=a("Atom Electron - Close the window with javascript - Stack Overflow"),F=s('<h2 id="调试" tabindex="-1"><a class="header-anchor" href="#调试" aria-hidden="true">#</a> 调试</h2><p>最好打开开发工具，<code>CTRL-ALT-T</code> 新开页无法使用开发工具？</p><h2 id="窗口管理" tabindex="-1"><a class="header-anchor" href="#窗口管理" aria-hidden="true">#</a> 窗口管理</h2><p>不用<code>window.open</code>，<code>a target=_blank</code>开新窗口就可用<code>window.close</code>关掉 进阶，可以用</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> remote <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;electron&#39;</span>\n<span class="token keyword">var</span> win <span class="token operator">=</span> remote<span class="token punctuation">.</span><span class="token function">getCurrentWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nwin<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',5),q={href:"https://codepen.io/cyio/pen/QZPLaV",target:"_blank",rel:"noopener noreferrer"},y=a("electron test close window"),S={href:"https://electronjs.org/docs/tutorial/application-architecture#%25E9%25A2%2598%25E5%25A4%2596%25E8%25AF%259D%25EF%25BC%259A%25E8%25BF%259B%25E7%25A8%258B%25E9%2597%25B4%25E9%2580%259A%25E8%25AE%25AF",target:"_blank",rel:"noopener noreferrer"},O=a("Electron 应用架构 | Electron 进程通讯"),D={href:"https://electronjs.org/docs/faq#%25E5%25A6%2582%25E4%25BD%2595%25E5%259C%25A8%25E4%25B8%25A4%25E4%25B8%25AA%25E7%25BD%2591%25E9%25A1%25B5%25E9%2597%25B4%25E5%2585%25B1%25E4%25BA%25AB%25E6%2595%25B0%25E6%258D%25AE%25EF%25BC%259F",target:"_blank",rel:"noopener noreferrer"},L=a("Electron 常见问题 (FAQ) | Electron 如何在两个网页间共享数据"),T=a("推荐使用 preload按 "),W={href:"https://electronjs.org/docs/tutorial/security#2-do-not-enable-nodejs-integration-for-remote-content",target:"_blank",rel:"noopener noreferrer"},G=a("安全性，原生能力和你的责任 | Electron "),I={href:"https://changkun.us/archives/2017/03/217/",target:"_blank",rel:"noopener noreferrer"},Q=a("Electron 深度实践总结 | 欧长坤的博客");l.render=function(a,s){const l=e("OutboundLink");return n(),r(t,null,[c,p,o("ul",null,[o("li",null,[o("p",null,[i,o("a",d,[u,o(l)])])]),h]),o("p",null,[o("a",w,[f,o(l)])]),k,b,o("p",null,[o("a",E,[m,o(l)]),o("a",g,[v,o(l)]),o("a",A,[B,o(l)]),o("a",j,[_,o(l)]),o("a",x,[C,o(l)])]),F,o("p",null,[o("a",q,[y,o(l)]),o("a",S,[O,o(l)]),o("a",D,[L,o(l)])]),o("ul",null,[o("li",null,[T,o("a",W,[G,o(l)]),o("a",I,[Q,o(l)])])])],64)};export default l;
