import{_ as s,r as a,o as l,c as i,a as e,b as n,F as c,e as r,d as o}from"./app.d3f3c66e.js";const d={},h=r('<h1 id="electron" tabindex="-1"><a class="header-anchor" href="#electron" aria-hidden="true">#</a> electron</h1><p>Electron == CEF + Node.js</p><p>CEF\uFF1A Chromium \u5D4C\u5165\u5F0F\u6846\u67B6</p><p><img src="https://pic3.zhimg.com/v2-f85361afb9a037b24b279c9a87d6635e_r.jpg" alt="v2-f85361afb9a037b24b279c9a87d6635e_r.jpg (490\xD7454)"></p><h2 id="cef-chromium-\u5D4C\u5165\u5F0F\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#cef-chromium-\u5D4C\u5165\u5F0F\u6846\u67B6" aria-hidden="true">#</a> CEF\uFF1A Chromium \u5D4C\u5165\u5F0F\u6846\u67B6</h2><p>CEF\u4E13\u6CE8\u4E8E\u4FC3\u8FDB\u7B2C\u4E09\u65B9\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u5D4C\u5165\u5F0F\u6D4F\u89C8\u5668\u7528\u4F8B</p><p>C++ \u5B9E\u73B0</p><blockquote><p>CEF\u652F\u6301\u5E7F\u6CDB\u7684\u7F16\u7A0B\u8BED\u8A00\u548C\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u96C6\u6210\u5230\u65B0\u7684\u548C\u73B0\u6709\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u3002\u5B83\u7684\u8BBE\u8BA1\u4ECE\u5934\u5230\u5C3E\u517C\u987E\u4E86\u6027\u80FD\u548C\u6613\u7528\u6027\u3002\u57FA\u672C\u6846\u67B6\u5305\u62EC\u901A\u8FC7\u672C\u673A\u5E93\u516C\u5F00\u7684C\u548Cc++\u7F16\u7A0B\u63A5\u53E3\uFF0C\u672C\u673A\u5E93\u5C06\u4E3B\u673A\u5E94\u7528\u7A0B\u5E8F\u4E0EChromium\u548CBlink\u5B9E\u73B0\u7EC6\u8282\u9694\u79BB\u5F00\u6765\u3002\u5B83\u63D0\u4F9B\u4E86\u6D4F\u89C8\u5668\u548C\u4E3B\u673A\u5E94\u7528\u7A0B\u5E8F\u4E4B\u95F4\u7684\u7D27\u5BC6\u96C6\u6210\uFF0C\u5305\u62EC\u5BF9\u81EA\u5B9A\u4E49\u63D2\u4EF6\u3001\u534F\u8BAE\u3001JavaScript\u5BF9\u8C61\u548CJavaScript\u6269\u5C55\u7684\u652F\u6301\u3002\u4E3B\u673A\u5E94\u7528\u7A0B\u5E8F\u53EF\u4EE5\u9009\u62E9\u6027\u5730\u63A7\u5236\u8D44\u6E90\u52A0\u8F7D\u3001\u5BFC\u822A\u3001\u4E0A\u4E0B\u6587\u83DC\u5355\u3001\u6253\u5370\u7B49\uFF0C\u540C\u65F6\u5229\u7528\u8C37\u6B4CChrome Web\u6D4F\u89C8\u5668\u4E2D\u63D0\u4F9B\u7684\u76F8\u540C\u6027\u80FD\u548CHTML5\u6280\u672F\u3002</p></blockquote><p>\u5E95\u5C42\u662F Google \u516C\u53F8\u5E26\u5934\u7684\u5F00\u6E90\u793E\u533A</p><p>https://github.com/chromiumembedded/cef</p><p>\u7EC4\u4EF6\uFF1A</p><ul><li>\u52A8\u6001\u5E93\uFF08\u5404\u5E73\u53F0\uFF09</li><li>\u652F\u6301\u6587\u4EF6</li><li>\u8D44\u6E90</li><li>\u53EF\u6267\u884C client</li></ul><p>\u67B6\u6784</p><ul><li>CEF\u4F7F\u7528\u591A\u4E2A\u8FDB\u7A0B\u3002\u4E3B\u8981\u7684\u5E94\u7528\u7A0B\u5E8F\u8FDB\u7A0B\u79F0\u4E3A\u201C\u6D4F\u89C8\u5668\u201D\u8FDB\u7A0B\u3002\u5C06\u4E3A\u6E32\u67D3\u5668\u3001\u63D2\u4EF6\u3001GPU\u7B49\u521B\u5EFA\u5B50\u8FDB\u7A0B\u3002</li><li>\u5728Windows\u548CLinux\u4E0A\uFF0C\u76F8\u540C\u7684\u53EF\u6267\u884C\u6587\u4EF6\u53EF\u4EE5\u7528\u4E8E\u4E3B\u8FDB\u7A0B\u548C\u5B50\u8FDB\u7A0B\u3002\u5728OS X\u4E0A\uFF0C\u4F60\u9700\u8981\u4E3A\u5B50\u8FDB\u7A0B\u521B\u5EFA\u4E00\u4E2A\u5355\u72EC\u7684\u53EF\u6267\u884C\u6587\u4EF6\u548C\u5E94\u7528\u7A0B\u5E8F\u5305\u3002</li><li>CEF\u4E2D\u7684\u5927\u591A\u6570\u8FDB\u7A0B\u90FD\u6709\u591A\u4E2A\u7EBF\u7A0B\u3002CEF\u4E3A\u5728\u8FD9\u4E9B\u4E0D\u540C\u7684\u7EBF\u7A0B\u4E4B\u95F4\u63D0\u4EA4\u4EFB\u52A1\u63D0\u4F9B\u4E86\u51FD\u6570\u548C\u63A5\u53E3\u3002</li><li>\u4E00\u4E9B\u56DE\u8C03\u548C\u51FD\u6570\u53EA\u80FD\u5728\u7279\u5B9A\u8FDB\u7A0B\u6216\u7279\u5B9A\u7EBF\u7A0B\u4E0A\u4F7F\u7528\u3002\u5728\u7B2C\u4E00\u6B21\u5F00\u59CB\u4F7F\u7528\u65B0\u7684\u56DE\u8C03\u51FD\u6570\u6216\u51FD\u6570\u4E4B\u524D\uFF0C\u8BF7\u786E\u4FDD\u9605\u8BFBAPI\u5934\u4E2D\u7684\u6E90\u4EE3\u7801\u6CE8\u91CA\u3002</li></ul><p>https://blog.scottlogic.com/2023/02/01/webview2-electron-challengers-and-slightly-lighter-desktop-web-applications.html</p><h2 id="\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B" aria-hidden="true">#</a> \u8FDB\u7A0B</h2>',16),p=e("li",null,"2 \u4E2A\u8FDB\u7A0B\uFF1A\u4E3B\u8FDB\u7A0B\u548C\u6E32\u67D3\u5668\u8FDB\u7A0B",-1),_=e("li",null,"web\u9875\u9762\u8FD0\u884C\u5728\u6E32\u67D3\u8FDB\u7A0B",-1),u=e("li",null,"\u4E0E\u6D4F\u89C8\u5668\u533A\u522B\uFF0C\u9875\u9762\u53EF\u8BBF\u95EE\u5E95\u5C42\uFF08\u901A\u8FC7\u4E3B\u8FDB\u7A0B\uFF09",-1),f=e("li",null,"GUI \u64CD\u4F5C\uFF0C\u5FC5\u987B\u4E0E\u4E3B\u8FDB\u7A0B\u901A\u8BAF",-1),w=o("require \u65F6\u9700\u8981\u5F15 remote "),b={href:"https://stackoverflow.com/questions/45639628/how-to-fix-browserwindow-is-not-a-constructor-error-when-creating-child-window-i",target:"_blank",rel:"noopener noreferrer"},m=o("javascript - How to fix BrowserWindow is not a constructor error when creating child window in Electron renderer process - Stack Overflow"),g=e("li",null,"nodeIntegration 5.0 \u8D77\u9ED8\u8BA4\u4E3A false",-1),k={href:"https://jlongster.com/secret-of-good-electron-apps",target:"_blank",rel:"noopener noreferrer"},E=o("The Secret of Good Electron Apps"),v=r(`<h2 id="\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u8C03\u8BD5" aria-hidden="true">#</a> \u8C03\u8BD5</h2><p>\u6700\u597D\u6253\u5F00\u5F00\u53D1\u5DE5\u5177\uFF0C<code>CTRL-ALT-T</code> \u65B0\u5F00\u9875\u65E0\u6CD5\u4F7F\u7528\u5F00\u53D1\u5DE5\u5177\uFF1F</p><h2 id="\u7A97\u53E3\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u7A97\u53E3\u7BA1\u7406" aria-hidden="true">#</a> \u7A97\u53E3\u7BA1\u7406</h2><p>\u4E0D\u7528<code>window.open</code>\uFF0C<code>a target=_blank</code>\u5F00\u65B0\u7A97\u53E3\u5C31\u53EF\u7528<code>window.close</code>\u5173\u6389 \u8FDB\u9636\uFF0C\u53EF\u4EE5\u7528</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> remote <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;electron&#39;</span>
<span class="token keyword">var</span> win <span class="token operator">=</span> remote<span class="token punctuation">.</span><span class="token function">getCurrentWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
win<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,5),j={href:"https://codepen.io/cyio/pen/QZPLaV",target:"_blank",rel:"noopener noreferrer"},B=o("electron test close window"),x={href:"https://electronjs.org/docs/tutorial/application-architecture#%25E9%25A2%2598%25E5%25A4%2596%25E8%25AF%259D%25EF%25BC%259A%25E8%25BF%259B%25E7%25A8%258B%25E9%2597%25B4%25E9%2580%259A%25E8%25AE%25AF",target:"_blank",rel:"noopener noreferrer"},C=o("Electron \u5E94\u7528\u67B6\u6784 | Electron \u8FDB\u7A0B\u901A\u8BAF"),A={href:"https://electronjs.org/docs/faq#%25E5%25A6%2582%25E4%25BD%2595%25E5%259C%25A8%25E4%25B8%25A4%25E4%25B8%25AA%25E7%25BD%2591%25E9%25A1%25B5%25E9%2597%25B4%25E5%2585%25B1%25E4%25BA%25AB%25E6%2595%25B0%25E6%258D%25AE%25EF%25BC%259F",target:"_blank",rel:"noopener noreferrer"},S=o("Electron \u5E38\u89C1\u95EE\u9898 (FAQ) | Electron \u5982\u4F55\u5728\u4E24\u4E2A\u7F51\u9875\u95F4\u5171\u4EAB\u6570\u636E"),y=o("\u63A8\u8350\u4F7F\u7528 preload "),F={href:"https://electronjs.org/docs/tutorial/security#2-do-not-enable-nodejs-integration-for-remote-content",target:"_blank",rel:"noopener noreferrer"},N=o("\u5B89\u5168\u6027\uFF0C\u539F\u751F\u80FD\u529B\u548C\u4F60\u7684\u8D23\u4EFB | Electron "),I={href:"https://changkun.us/archives/2017/03/217/",target:"_blank",rel:"noopener noreferrer"},q=o("Electron \u6DF1\u5EA6\u5B9E\u8DF5\u603B\u7ED3 | \u6B27\u957F\u5764\u7684\u535A\u5BA2"),W=r('<h2 id="\u8FDB\u7A0B\u901A\u4FE1-ipc" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B\u901A\u4FE1-ipc" aria-hidden="true">#</a> \u8FDB\u7A0B\u901A\u4FE1 IPC</h2><p>\u4E3B\u8FDB\u7A0B\u4E0E\u6E32\u67D3\u8FDB\u7A0B</p><p>\u6E32\u67D3\u8FDB\u7A0B\u4E4B\u95F4</p><ul><li>\u672C\u5730\u5B58\u50A8</li><li>\u4E3B\u8FDB\u7A0B\u4E2D\u8F6C\uFF08\u56E0\u4E3A\u4E24\u4E2A\u8FDB\u7A0B\u5E73\u884C\uFF0C\u53EA\u80FD\u901A\u8FC7\u7236\u7EA7\u901A\u4FE1\uFF09</li></ul><p>send \u4E0D\u9700\u8981\u56DE\u590D\u3002\u573A\u666F\uFF1A\u8BA1\u6570\u3001\u6570\u636E\u66F4\u65B0</p><p>invoke \u6267\u884C\u65B9\u6CD5\uFF08\u4FBF\u5229\uFF09\uFF0Cpromise \u3002\u573A\u666F\uFF1A\u83B7\u53D6 electron \u8BBE\u7F6E</p><p>postMessage \u6D88\u606F\u901A\u9053\uFF0C\u4E0E Web \u4E2D\u7684\u7B49\u4EF7\u3002\u573A\u666F\uFF1A\u6D88\u606F\u4FDD\u8BC1\u3001\u5373\u4F7F\u76D1\u542C\u5668\u8FD8\u672A\u6CE8\u518C\uFF0C\u4E3B\u8FDB\u7A0B\u4F5C\u4E3A\u4E2D\u95F4\u4EBA\u3001\u8FDE\u63A5\u4E24\u4E2A\u6E32\u67D3\u8FDB\u7A0B</p><p>webview document.title/executeJavaScript</p><p>remote \u6A21\u5757\uFF0C\u6A21\u62DF\u672C\u5730\u8C03\u7528\uFF0C\u5E9F\u5F03\uFF0C\u63A8\u8350 invoke</p><p>electron \u7684 IPC \u57FA\u4E8E chromium \u7684 IPC\uFF1F</p><p>MessagePort\u5BF9\u8C61\u53EF\u4EE5\u5728\u6E32\u67D3\u5668\u6216\u4E3B\u8FDB\u7A0B\u4E2D\u521B\u5EFA\uFF0C\u5E76\u4F7F\u7528ipcRenderer.postMessage\u548CWebContents.postMessage\u65B9\u6CD5\u6765\u56DE\u4F20\u9012\u3002\u8BF7\u6CE8\u610F\uFF0C\u901A\u5E38\u7684IPC\u65B9\u6CD5\uFF08\u5982send\u548Cinvoke\uFF09\u4E0D\u80FD\u7528\u4E8E\u4F20\u8F93MessagePorts\uFF0C\u53EA\u6709postMessage\u65B9\u6CD5\u53EF\u4EE5\u4F20\u8F93MessagePorts\u3002</p><p>https://www.electronjs.org/docs/latest/tutorial/message-ports/</p>',12),P={href:"https://zhuanlan.zhihu.com/p/453287153",target:"_blank",rel:"noopener noreferrer"},D=o("Electron\u8FDB\u7A0B\u901A\u4FE1 - \u77E5\u4E4E"),M={href:"https://juejin.cn/post/6988484297485189127",target:"_blank",rel:"noopener noreferrer"},L=o("\u524D\u7AEF\u4E0D\u61C2\u8FDB\u7A0B\u901A\u4FE1\uFF1F\u770B\u5B8C\u8FD9\u7BC7\u5C31\u61C2\u4E86 - \u6398\u91D1"),O=e("h2",{id:"asar-\u5F52\u6863",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#asar-\u5F52\u6863","aria-hidden":"true"},"#"),o(" asar \u5F52\u6863")],-1),T=e("ul",null,[e("li",null,"\u53EA\u8BFB\u3001\u968F\u673A\u8BBF\u95EE\uFF08\u865A\u62DF\u6587\u4EF6\u5939\uFF09"),e("li",null,"\u7528 JSON \u5B58\u50A8\u4FE1\u606F\uFF0C\u6613\u4E8E\u5B9E\u73B0\u89E3\u6790\u5668"),e("li",null,"\u89C4\u907F\u6587\u4EF6\u8DEF\u5F84\u592A\u957F\uFF08win\uFF09"),e("li",null,"\u51CF\u5C11\u6587\u4EF6\u6570\uFF0C\u52A0\u5FEB\u5B89\u88C5")],-1),J={href:"https://quickapp.vivo.com.cn/quickapp-ide-asar/",target:"_blank",rel:"noopener noreferrer"},V=o("\u5FEB\u5E94\u7528\u5F00\u53D1\u5DE5\u5177\u4E4B asar"),z=e("h2",{id:"\u62D6\u62FD\u4E0B\u8F7D",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u62D6\u62FD\u4E0B\u8F7D","aria-hidden":"true"},"#"),o(" \u62D6\u62FD\u4E0B\u8F7D")],-1),R=e("p",null,"event.sender.startDrag https://www.electronjs.org/zh/docs/latest/api/web-contents#contentsstartdragitem https://www.electronjs.org/zh/docs/latest/tutorial/native-file-drag-drop",-1),U=e("p",null,"\u4E0D\u80FD\u76D1\u542C\u7CFB\u7EDF\u4E8B\u4EF6\uFF0C\u53EA\u9002\u5408\u672C\u5730\u6587\u4EF6\u62D6\u62FD",-1),G=e("p",null,"\u539F\u56E0\uFF1A",-1),H=e("ol",null,[e("li",null,"\u65E0\u6CD5\u62FF\u5230\u76EE\u6807\u8DEF\u5F84"),e("li",null,"\u62D6\u62FD\u5230\u7CFB\u7EDF\u672C\u5730\uFF0C\u8D70\u4E86\u7CFB\u7EDF\u884C\u4E3A\uFF08\u4E0B\u8F7D\u6587\u4EF6 URL \u5230\u4E34\u65F6\u76EE\u5F55\uFF0C\u518D\u62F7\u8D1D\u5230\u76EE\u6807\u6587\u4EF6\u5939\uFF09"),e("li",null,"\u6587\u4EF6\u5939\u6CA1\u6709 URL\uFF0C\u65E0\u6CD5\u4E0B\u8F7D https://github.com/liupan1890/aliyunpan/issues/576 \u53C2\u8003 vscode\uFF0C\u53EA\u652F\u6301\u5355\u6587\u4EF6\uFF0C\u4F46\u8FD9\u53EA\u662F\u672C\u5730\u95F4 https://github.com/electron/electron/issues/7118#issuecomment-483681104 https://cloud.tencent.com/developer/article/1562722")],-1),Q={href:"https://github.com/ascoders/weekly/blob/master/%25E5%2589%258D%25E6%25B2%25BF%25E6%258A%2580%25E6%259C%25AF/59.%25E7%25B2%25BE%25E8%25AF%25BB%25E3%2580%258A%25E5%25A6%2582%25E4%25BD%2595%25E5%2588%25A9%25E7%2594%25A8%2520Nodejs%2520%25E7%259B%2591%25E5%2590%25AC%25E6%2596%2587%25E4%25BB%25B6%25E5%25A4%25B9%25E3%2580%258B.md",target:"_blank",rel:"noopener noreferrer"},X=o("weekly/59.\u7CBE\u8BFB\u300A\u5982\u4F55\u5229\u7528 Nodejs \u76D1\u542C\u6587\u4EF6\u5939\u300B.md at master \xB7 ascoders/weekly"),Y={href:"https://juejin.cn/post/7095557874658574373#heading-1",target:"_blank",rel:"noopener noreferrer"},Z=o("electron \u62D6\u62FD\u672A\u4E0B\u8F7D\u6587\u4EF6\u5230\u672C\u5730\u529F\u80FD\u5B9E\u73B0 - \u6398\u91D1"),K={href:"https://pinkcle.com/electron/dragdrop.html",target:"_blank",rel:"noopener noreferrer"},$=o("Electron\u684C\u9762\u7AEF\u62D6\u62FD\u4E0B\u8F7D\u7684\u5B9E\u73B0 | \u65B0\u65F6\u4EE3\u519C\u6C11\u5DE5\u7684\u65E5\u5E38"),ee=e("p",null,"\u66FF\u4EE3\u65B9\u6848\uFF1A\u76D1\u542C\u7CFB\u7EDF\u6587\u4EF6\u5939\u53D8\u5316\uFF0C\u5C40\u9650\u662F\u9002\u5408\u6709\u9650\u76D1\u542C\u7684\u6587\u4EF6\u5939 \u4E3B\u8981\u98CE\u9669\uFF1A\u6743\u9650\u3001\u517C\u5BB9\u6027",-1),oe=e("p",null,"vscode \u7A97\u53E3\u5185\u90E8\u62D6\u62FD\u5B9E\u73B0\uFF0C\u7531\u4E8E startDrag \u4E0D\u652F\u6301\u5185\u90E8\uFF0C\u6539\u7528 e.dataTransfer.setData https://github.com/electron/electron/issues/7118#issuecomment-483681104",-1),te={href:"https://www.mo4tech.com/simple-drag-and-drop-function-in-electron.html",target:"_blank",rel:"noopener noreferrer"},ne=o("Simple drag and drop function in Electron - Moment For Technology"),re=r('<h2 id="\u751F\u4EA7\u5305\u70ED\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u751F\u4EA7\u5305\u70ED\u66F4\u65B0" aria-hidden="true">#</a> \u751F\u4EA7\u5305\u70ED\u66F4\u65B0</h2><p>\u65B9\u6848\uFF1Aasar\uFF08\u4E3B\u8FDB\u7A0B\uFF09 + update.zip(\u6E32\u67D3\u8FDB\u7A0B)</p><p>\u9700\u8981\u62C6\u9879\u76EE</p><ul><li>\u964D\u4F4E\u8FED\u4EE3\u6210\u672C\uFF08\u5206\u53D1\u5E26\u5BBD\uFF1F\uFF09</li><li>\u63D0\u5347</li></ul><h2 id="webview-vs-browserview" tabindex="-1"><a class="header-anchor" href="#webview-vs-browserview" aria-hidden="true">#</a> webview vs browserview</h2><p>\u6700\u5927\u7684\u533A\u522B\u5728\u4E8E browserview \u6258\u7BA1\u4E8E main process \u800C\u4E0D\u662F renderer\u3002\u8FD9\u975E\u5E38\u7C7B\u4F3C\u4E8E Chrome \u4E2D\u5BF9\u9875\u9762\u7684\u5904\u7406\u65B9\u5F0F\uFF0C\u56E0\u6B64\u53EF\u4EE5\u83B7\u5F97\u5F88\u9AD8\u7684\u9875\u9762\u54CD\u5E94\u901F\u5EA6\u3002</p><h2 id="issues" tabindex="-1"><a class="header-anchor" href="#issues" aria-hidden="true">#</a> issues</h2><ul><li>\u7CFB\u7EDF\u5DEE\u5F02\uFF0Cwindows \u65E0\u6CD5 open\uFF1F</li></ul><h3 id="\u767D\u5C4F" tabindex="-1"><a class="header-anchor" href="#\u767D\u5C4F" aria-hidden="true">#</a> \u767D\u5C4F</h3><p>windows \u517C\u5BB9\u6027\uFF0C\u5982 windows server\u3002\u89E3\u51B3\uFF1A\u8FFD\u52A0\xA0--no-sandbox \u6216 \u6253\u5305 32 \u4F4D\u7248\u672C</p><p>Win7+\uFF0C\u4E0D\u652F\u6301 arm</p><p>MacOS 10.10+</p>',12),se={href:"https://stackoverflow.com/questions/36306450/what-is-minimum-system-requirements-to-run-electron-apps",target:"_blank",rel:"noopener noreferrer"},ae=o("javascript - What is minimum system requirements to run electron apps? - Stack Overflow"),le=o(" \u4E8B\u4EF6: 'render-process-gone\u2019 \xA0\u5224\u65AD reason"),ie={href:"https://www.electronjs.org/zh/docs/latest/api/app#%E4%BA%8B%E4%BB%B6-render-process-gone",target:"_blank",rel:"noopener noreferrer"},ce=o("https://www.electronjs.org/zh/docs/latest/api/app#%E4%BA%8B%E4%BB%B6-render-process-gone"),de=e("p",null,"\u589E\u52A0\u6D88\u606F\u63D0\u793A\uFF0C\u8BA9\u7528\u6237\u91CD\u65B0\u6253\u5F00",-1),he=e("p",null,[e("a",{href:"%5Bhttps://juejin.cn/post/7136124646079856671%5D(https://juejin.cn/post/7136124646079856671)"},"\u3010Electron\u3011vue+electron\u767D\u5C4F\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6848 - \u6398\u91D1")],-1),pe=e("h3",{id:"webview-\u7A97\u53E3\u6253\u5F00\u6162",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webview-\u7A97\u53E3\u6253\u5F00\u6162","aria-hidden":"true"},"#"),o(" webview \u7A97\u53E3\u6253\u5F00\u6162")],-1),_e=e("ol",null,[e("li",null,"\u540E\u53F0\u9884\u70ED\uFF0C\u9690\u85CF\u7A97\u53E3\uFF0C\u5B9A\u4F4D\u5230\u5C4F\u5E55\u4E4B\u5916 + skipTaskBar\u4EFB\u52A1\u680F\u4E0D\u53EF\u89C1"),e("li",null,"\u7A97\u53E3\u6C60\uFF0C\u590D\u7528"),e("li",null,"\u5E38\u9A7B\uFF0C\u901A\u7528\u7C7B\u7A97\u53E3\uFF0C\u5982\u901A\u77E5\u3001\u56FE\u7247\u67E5\u770B\u5668")],-1),ue=o("\u5206\u4EAB\u8FD9\u534A\u5E74\u7684 Electron \u5E94\u7528\u5F00\u53D1\u548C\u4F18\u5316\u7ECF\u9A8C - \u6398\u91D1 "),fe={href:"https://juejin.cn/post/6844904029231775758",target:"_blank",rel:"noopener noreferrer"},we=o("https://juejin.cn/post/6844904029231775758"),be=e("h2",{id:"\u5F02\u5E38\u6355\u83B7\u5C01\u88C5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5F02\u5E38\u6355\u83B7\u5C01\u88C5","aria-hidden":"true"},"#"),o(" \u5F02\u5E38\u6355\u83B7\u5C01\u88C5")],-1),me=e("ol",null,[e("li",null,"render"),e("li",null,"main")],-1),ge=e("p",null,"https://github.dev/sindresorhus/electron-unhandled/blob/a302ae5367af900872d889cdb47fe26907fa47fe/index.js#L123",-1),ke=e("h2",{id:"\u6253\u5305",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6253\u5305","aria-hidden":"true"},"#"),o(" \u6253\u5305")],-1),Ee=e("p",null,"https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging",-1),ve=e("p",null,"\u6D4B\u8BD5 electron v21 \u7A7A\u9879\u76EE dmg 220Mb",-1),je={href:"https://sysin.org/blog/macos-if-crashes-when-opening/",target:"_blank",rel:"noopener noreferrer"},Be=o("macOS \u63D0\u793A\uFF1A\u201C\u5E94\u7528\u7A0B\u5E8F\u201D \u5DF2\u635F\u574F\uFF0C\u65E0\u6CD5\u6253\u5F00\u7684\u89E3\u51B3\u65B9\u6CD5\u603B\u7ED3 - sysin | SYStem INside | \u8F6F\u4EF6\u4E0E\u6280\u672F\u5206\u4EAB"),xe=e("h2",{id:"electron-forge-cli",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#electron-forge-cli","aria-hidden":"true"},"#"),o(" electron-forge cli")],-1),Ce=e("h2",{id:"webview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webview","aria-hidden":"true"},"#"),o(" webview")],-1),Ae=e("p",null,"Preload scripts \u7C7B\u4F3C chrome \u6269\u5C55\u7684 content scripts",-1),Se=e("p",null,"\u4E3B\u8FDB\u7A0B\u662F nodejs \u73AF\u5883\uFF0C\u6709\u5B8C\u5168\u7CFB\u7EDF\u8BBF\u95EE\u6743",-1),ye=e("p",null,"\u6E32\u67D3\u8FDB\u7A0B\u8FD0\u884C\u9875\u9762\uFF0C\u5B89\u5168\u539F\u56E0\u9ED8\u8BA4\u4E0D\u80FD\u8FD0\u884C nodejs",-1),Fe=e("p",null,"\u5B98\u65B9 contextBridge\uFF0C\u663E\u5F0F\u58F0\u660E\u66B4\u9732\u7684\u80FD\u529B",-1),Ne=e("p",null,"\u4F7F\u7528executeJavaScript\u65B9\u6CD5\u53EF\u4EE5\u5728\u4E3B\u8FDB\u7A0B\u4E2D\u5411webview\u6CE8\u5165\u65B9\u6CD5\uFF0C\u4F7F\u7528preload\u811A\u672C\u53EF\u4EE5\u5728\u6E32\u67D3\u8FDB\u7A0B\u4E2D\u5411webview\u6CE8\u5165\u65B9\u6CD5\u3002",-1),Ie=o("\u8FDB\u7A0B\u95F4\u901A\u4FE1\uFF1A"),qe={href:"https://www.electronjs.org/docs/latest/tutorial/tutorial-preload#communicating-between-processes",target:"_blank",rel:"noopener noreferrer"},We=o("Using Preload Scripts | Electron"),Pe={href:"https://stackoverflow.com/questions/71791530/electron-preload-vs-electron-main",target:"_blank",rel:"noopener noreferrer"},De=o("node.js - Electron Preload vs Electron Main - Stack Overflow"),Me=e("p",null,"\u7B2C\u4E09\u65B9\u4F9D\u8D56 bug https://github.com/electron/forge/issues/2931#issuecomment-1306377240",-1),Le={href:"https://blog.csdn.net/a0405221/article/details/120928463",target:"_blank",rel:"noopener noreferrer"},Oe=o("\u89E3\u51B3electron\u5D4C\u5165webview\u663E\u793A\u7A7A\u767D\u65E0\u6CD5\u4F7F\u7528_electron webview \u4E0D\u663E\u793A_\u8C22\u6CFD\u7684\u7F51\u7EDC\u65E5\u5FD7\u7684\u535A\u5BA2-CSDN\u535A\u5BA2"),Te={href:"https://www.w3cways.com/2459.html",target:"_blank",rel:"noopener noreferrer"},Je=o("electron\u4E2D\u4E0Ewebview\u7684\u901A\u8BAF-Web\u524D\u7AEF(W3Cways.com) - Web\u524D\u7AEF\u5B66\u4E60\u4E4B\u8DEF"),Ve=o("\u4E3A webview \u6CE8\u5165\u65B9\u6CD5\uFF0C\u539F\u7406\uFF1A "),ze={href:"https://www.electronjs.org/docs/latest/tutorial/context-isolation#before-context-isolation-disabled",target:"_blank",rel:"noopener noreferrer"},Re=o("Context Isolation | Electron"),Ue=e("p",null,[o("\u5982\u679CcontextIsolation\u4E3Afalse\uFF0C\u90A3\u4E48web\u9875\u9762\u4E2D\u7684JS\u53EF\u4EE5\u5F71\u54CDElectron\u5185\u90E8\u6E32\u67D3\u65F6\u7684JS\u4EE3\u7801\u548C\u9884\u52A0\u8F7D\u811A\u672C\u6267\u884C\u3002\u6BD4\u5982\u5148\u5165\u4FB5 web \u52A0\u5165\u6076\u610F\u811A\u672C\uFF0C\u518D\u4F20\u9012\u5230 preload node \u73AF\u5883\u3002"),e("strong",null,"\u8FDC\u7A0B\u4EE3\u7801\u6267\u884C\u6F0F\u6D1E\uFF08RCE\uFF09")],-1),Ge=e("p",null,"contextIsolation \u73AF\u5883\u4E0A\u4E0B\u6587\u9694\u79BB\u5F00\u5173\uFF0C\u662F\u5728 Electron 5.0 \u7248\u672C\u4E2D\u5F15\u5165\u7684\uFF0C\u9ED8\u8BA4\u503C\u662F false\u3002\u4ECE 12.0 \u7248\u672C\u5F00\u59CB\uFF0C\u9ED8\u8BA4\u503C\u53D8\u4E3A true",-1),He={href:"https://www.freebuf.com/articles/web/252806.html",target:"_blank",rel:"noopener noreferrer"},Qe=o("\u6316\u6D1E\u7ECF\u9A8C | \u7EFC\u5408\u4E09\u4E2ABug\u5B9E\u73B0Discord\u684C\u9762\u5E94\u7528RCE\u6F0F\u6D1E - FreeBuf\u7F51\u7EDC\u5B89\u5168\u884C\u4E1A\u95E8\u6237"),Xe=r('<h2 id="\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C" aria-hidden="true">#</a> \u7248\u672C</h2><p>Electron 22, which contains Chromium 108, will thus be the last supported version.</p><p>In line with Chromium&#39;s deprecation policy,\xA0<em>Electron</em>\xA0will end support of\xA0<em>Windows 7</em>, Windows 8 and Windows 8.1 beginning in\xA0<em>Electron</em>\xA023.</p><p>\u4E0D\u518D\u6536\u5230\u66F4\u65B0\u652F\u6301\uFF0C\u6709\u53EF\u80FD\u80FD\u8FD0\u884C\uFF1F</p><h2 id="\u5B89\u5168" tabindex="-1"><a class="header-anchor" href="#\u5B89\u5168" aria-hidden="true">#</a> \u5B89\u5168</h2><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>',6),Ye={href:"https://stackoverflow.com/questions/36072035/how-to-open-new-window-in-place-of-current-window-in-electron/38043021",target:"_blank",rel:"noopener noreferrer"},Ze=o("javascript - how to open new window in place of current window in Electron - Stack Overflow"),Ke={href:"https://www.my-fe.pub/post/electron-note.html",target:"_blank",rel:"noopener noreferrer"},$e=o("Electron\u7B80\u5355\u7B14\u8BB0 - \u5C0F\u7FFC\u7684\u524D\u7AEF\u5929\u5730"),eo={href:"https://www.codota.com/code/javascript/functions/electron/WebContents/on",target:"_blank",rel:"noopener noreferrer"},oo=o("electron.WebContents.on JavaScript and Node.js code examples | Codota"),to={href:"https://stackoverflow.com/questions/39091964/remove-menubar-from-electron-app",target:"_blank",rel:"noopener noreferrer"},no=o("node.js - Remove menubar from Electron app - Stack Overflow"),ro={href:"https://stackoverflow.com/questions/31171597/atom-electron-close-the-window-with-javascript",target:"_blank",rel:"noopener noreferrer"},so=o("Atom Electron - Close the window with javascript - Stack Overflow"),ao={href:"https://github.com/cawa-93/vite-electron-builder",target:"_blank",rel:"noopener noreferrer"},lo=o("cawa-93/vite-electron-builder: Secure boilerplate for Electron app based on Vite. TypeScript + Vue/React/Angular/Svelte/Vanilla"),io={href:"https://juejin.cn/post/6999257401522126856",target:"_blank",rel:"noopener noreferrer"},co=o("electron\u591A\u8FDB\u7A0B\u65B9\u6848\u89E3\u51B3\u754C\u9762\u5361\u987F - \u6398\u91D1"),ho=e("p",null,"https://blackglory.me/notes/electron",-1),po=e("h2",{id:"\u6027\u80FD",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6027\u80FD","aria-hidden":"true"},"#"),o(" \u6027\u80FD")],-1),_o=e("li",null,"\u5EF6\u8FDF require\uFF08IO\u3001\u9012\u5F52\u5F15\u7528\uFF09",-1),uo=o("V8 Snapshot\uFF0C\u9884\u5904\u7406 JS "),fo={href:"https://blog.inkdrop.app/how-to-make-your-electron-app-launch-1000ms-faster-32ce1e0bb52c",target:"_blank",rel:"noopener noreferrer"},wo=o("How to make your Electron app launch 1,000ms faster | by Takuya Matsuyama | Dev as Life"),bo=e("h2",{id:"node-ffi-napi",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#node-ffi-napi","aria-hidden":"true"},"#"),o(" node-ffi & napi")],-1),mo=e("blockquote",null,[e("p",null,"\u5916\u90E8\u51FD\u6570\u63A5\u53E3")],-1),go=e("p",null,"node-ffi \u548C napi \u90FD\u662F Node.js \u4E2D\u7528\u4E8E\u8BBF\u95EE\u672C\u5730\u4EE3\u7801\u7684\u5DE5\u5177\uFF0C\u4F46\u5B83\u4EEC\u6709\u4E0D\u540C\u7684\u8BBE\u8BA1\u76EE\u7684\u548C\u4F7F\u7528\u573A\u666F\u3002",-1),ko=e("p",null,"node-ffi \u662F\u4E00\u4E2A Node.js \u6A21\u5757\uFF0C\u5B83\u5141\u8BB8\u4F60\u8C03\u7528\u672C\u5730\u52A8\u6001\u94FE\u63A5\u5E93\u4E2D\u7684\u51FD\u6570\uFF0C\u800C\u65E0\u9700\u7F16\u5199 C++ \u7ED1\u5B9A\u4EE3\u7801\u3002node-ffi \u7684\u4E3B\u8981\u8BBE\u8BA1\u76EE\u7684\u662F\u4E3A\u4E86\u8BA9 Node.js \u5F00\u53D1\u8005\u80FD\u591F\u65B9\u4FBF\u5730\u8BBF\u95EE\u672C\u5730\u7CFB\u7EDF\u529F\u80FD\uFF0C\u4F8B\u5982\u64CD\u4F5C\u7CFB\u7EDF API\u3001\u786C\u4EF6\u9A71\u52A8\u7A0B\u5E8F\u7B49\u3002\u4F7F\u7528 node-ffi\uFF0C\u4F60\u53EF\u4EE5\u5728 Node.js \u4E2D\u8F7B\u677E\u5730\u8C03\u7528 C \u8BED\u8A00\u7F16\u5199\u7684\u52A8\u6001\u94FE\u63A5\u5E93\uFF0C\u800C\u65E0\u9700\u7F16\u5199\u4EFB\u4F55 C++ \u7ED1\u5B9A\u4EE3\u7801\u3002",-1),Eo=e("p",null,"\u800C napi \u662F Node.js \u63D0\u4F9B\u7684\u4E00\u7EC4 API\uFF0C\u5B83\u5141\u8BB8\u5F00\u53D1\u8005\u7F16\u5199\u53EF\u8DE8\u5E73\u53F0\u3001\u53EF\u79FB\u690D\u7684 C++ \u6269\u5C55\uFF0C\u5E76\u4E14\u8FD9\u4E9B\u6269\u5C55\u53EF\u4EE5\u5728\u4E0D\u540C\u7248\u672C\u7684 Node.js \u4E0A\u8FD0\u884C\u3002napi \u7684\u4E3B\u8981\u8BBE\u8BA1\u76EE\u7684\u662F\u4E3A\u4E86\u8BA9\u5F00\u53D1\u8005\u80FD\u591F\u7F16\u5199\u9AD8\u6548\u3001\u53EF\u9760\u7684 Node.js \u6269\u5C55\uFF0C\u800C\u4E0D\u5FC5\u8003\u8651\u4E0D\u540C\u7248\u672C\u7684 Node.js \u4E4B\u95F4\u7684\u5DEE\u5F02\u3002\u4F7F\u7528 napi\uFF0C\u4F60\u53EF\u4EE5\u66F4\u8F7B\u677E\u5730\u7F16\u5199\u8DE8\u5E73\u53F0\u7684 Node.js \u6269\u5C55\uFF0C\u5E76\u4E14\u8FD9\u4E9B\u6269\u5C55\u53EF\u4EE5\u5728\u591A\u4E2A\u7248\u672C\u7684 Node.js \u4E0A\u8FD0\u884C\u3002",-1),vo=e("p",null,"\u56E0\u6B64\uFF0Cnode-ffi \u548C napi \u5728\u8BBE\u8BA1\u76EE\u7684\u548C\u4F7F\u7528\u573A\u666F\u4E0A\u5B58\u5728\u5DEE\u5F02\u3002\u5982\u679C\u4F60\u9700\u8981\u5FEB\u901F\u8BBF\u95EE\u672C\u5730\u7CFB\u7EDF\u529F\u80FD\uFF0C\u90A3\u4E48 node-ffi \u662F\u4E00\u4E2A\u5F88\u597D\u7684\u9009\u62E9\uFF1B\u5982\u679C\u4F60\u9700\u8981\u7F16\u5199\u53EF\u8DE8\u5E73\u53F0\u7684\u9AD8\u6548 Node.js \u6269\u5C55\uFF0C\u90A3\u4E48 napi \u662F\u66F4\u597D\u7684\u9009\u62E9\u3002",-1),jo=e("p",null,"https://nodejs.org/api/n-api.html#node-api",-1);function Bo(xo,Co){const t=a("ExternalLinkIcon");return l(),i(c,null,[h,e("ul",null,[p,_,u,f,e("li",null,[w,e("a",b,[m,n(t)])]),g]),e("p",null,[e("a",k,[E,n(t)])]),v,e("p",null,[e("a",j,[B,n(t)]),e("a",x,[C,n(t)]),e("a",A,[S,n(t)])]),e("ul",null,[e("li",null,[y,e("a",F,[N,n(t)]),e("a",I,[q,n(t)])])]),W,e("p",null,[e("a",P,[D,n(t)]),e("a",M,[L,n(t)])]),O,T,e("p",null,[e("a",J,[V,n(t)])]),z,R,U,G,H,e("p",null,[e("a",Q,[X,n(t)])]),e("p",null,[e("a",Y,[Z,n(t)]),e("a",K,[$,n(t)])]),ee,oe,e("p",null,[e("a",te,[ne,n(t)])]),re,e("p",null,[e("a",se,[ae,n(t)]),le]),e("p",null,[e("a",ie,[ce,n(t)])]),de,he,pe,_e,e("p",null,[ue,e("a",fe,[we,n(t)])]),be,me,ge,ke,Ee,ve,e("p",null,[e("a",je,[Be,n(t)])]),xe,Ce,Ae,Se,ye,Fe,Ne,e("p",null,[Ie,e("a",qe,[We,n(t)])]),e("p",null,[e("a",Pe,[De,n(t)])]),Me,e("p",null,[e("a",Le,[Oe,n(t)])]),e("p",null,[e("a",Te,[Je,n(t)])]),e("p",null,[Ve,e("a",ze,[Re,n(t)])]),Ue,Ge,e("p",null,[e("a",He,[Qe,n(t)])]),Xe,e("p",null,[e("a",Ye,[Ze,n(t)]),e("a",Ke,[$e,n(t)]),e("a",eo,[oo,n(t)]),e("a",to,[no,n(t)]),e("a",ro,[so,n(t)])]),e("p",null,[e("a",ao,[lo,n(t)])]),e("p",null,[e("a",io,[co,n(t)])]),ho,po,e("ol",null,[_o,e("li",null,[uo,e("a",fo,[wo,n(t)])])]),bo,mo,go,ko,Eo,vo,jo],64)}var So=s(d,[["render",Bo],["__file","electron.html.vue"]]);export{So as default};
