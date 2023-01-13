import{_ as s,r as a,o as c,c as i,a as e,b as n,F as l,e as r,d as t}from"./app.f211ee81.js";const h={},d=r('<h1 id="electron" tabindex="-1"><a class="header-anchor" href="#electron" aria-hidden="true">#</a> electron</h1><p>Electron == CEF + Node.js</p><p>CEF\uFF1A Chromium \u5D4C\u5165\u5F0F\u6846\u67B6</p><p><img src="https://pic3.zhimg.com/v2-f85361afb9a037b24b279c9a87d6635e_r.jpg" alt="v2-f85361afb9a037b24b279c9a87d6635e_r.jpg (490\xD7454)"></p><h2 id="\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B" aria-hidden="true">#</a> \u8FDB\u7A0B</h2>',5),p=e("li",null,"2 \u4E2A\u8FDB\u7A0B\uFF1A\u4E3B\u8FDB\u7A0B\u548C\u6E32\u67D3\u5668\u8FDB\u7A0B",-1),_=e("li",null,"web\u9875\u9762\u8FD0\u884C\u5728\u6E32\u67D3\u8FDB\u7A0B",-1),u=e("li",null,"\u4E0E\u6D4F\u89C8\u5668\u533A\u522B\uFF0C\u9875\u9762\u53EF\u8BBF\u95EE\u5E95\u5C42\uFF08\u901A\u8FC7\u4E3B\u8FDB\u7A0B\uFF09",-1),w=e("li",null,"GUI \u64CD\u4F5C\uFF0C\u5FC5\u987B\u4E0E\u4E3B\u8FDB\u7A0B\u901A\u8BAF",-1),f=t("require \u65F6\u9700\u8981\u5F15 remote "),b={href:"https://stackoverflow.com/questions/45639628/how-to-fix-browserwindow-is-not-a-constructor-error-when-creating-child-window-i",target:"_blank",rel:"noopener noreferrer"},m=t("javascript - How to fix BrowserWindow is not a constructor error when creating child window in Electron renderer process - Stack Overflow"),g=e("li",null,"nodeIntegration 5.0 \u8D77\u9ED8\u8BA4\u4E3A false",-1),E={href:"https://jlongster.com/secret-of-good-electron-apps",target:"_blank",rel:"noopener noreferrer"},k=t("The Secret of Good Electron Apps"),v=r(`<h2 id="\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u8C03\u8BD5" aria-hidden="true">#</a> \u8C03\u8BD5</h2><p>\u6700\u597D\u6253\u5F00\u5F00\u53D1\u5DE5\u5177\uFF0C<code>CTRL-ALT-T</code> \u65B0\u5F00\u9875\u65E0\u6CD5\u4F7F\u7528\u5F00\u53D1\u5DE5\u5177\uFF1F</p><h2 id="\u7A97\u53E3\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u7A97\u53E3\u7BA1\u7406" aria-hidden="true">#</a> \u7A97\u53E3\u7BA1\u7406</h2><p>\u4E0D\u7528<code>window.open</code>\uFF0C<code>a target=_blank</code>\u5F00\u65B0\u7A97\u53E3\u5C31\u53EF\u7528<code>window.close</code>\u5173\u6389 \u8FDB\u9636\uFF0C\u53EF\u4EE5\u7528</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> remote <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;electron&#39;</span>
<span class="token keyword">var</span> win <span class="token operator">=</span> remote<span class="token punctuation">.</span><span class="token function">getCurrentWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
win<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,5),B={href:"https://codepen.io/cyio/pen/QZPLaV",target:"_blank",rel:"noopener noreferrer"},j=t("electron test close window"),A={href:"https://electronjs.org/docs/tutorial/application-architecture#%25E9%25A2%2598%25E5%25A4%2596%25E8%25AF%259D%25EF%25BC%259A%25E8%25BF%259B%25E7%25A8%258B%25E9%2597%25B4%25E9%2580%259A%25E8%25AE%25AF",target:"_blank",rel:"noopener noreferrer"},x=t("Electron \u5E94\u7528\u67B6\u6784 | Electron \u8FDB\u7A0B\u901A\u8BAF"),C={href:"https://electronjs.org/docs/faq#%25E5%25A6%2582%25E4%25BD%2595%25E5%259C%25A8%25E4%25B8%25A4%25E4%25B8%25AA%25E7%25BD%2591%25E9%25A1%25B5%25E9%2597%25B4%25E5%2585%25B1%25E4%25BA%25AB%25E6%2595%25B0%25E6%258D%25AE%25EF%25BC%259F",target:"_blank",rel:"noopener noreferrer"},F=t("Electron \u5E38\u89C1\u95EE\u9898 (FAQ) | Electron \u5982\u4F55\u5728\u4E24\u4E2A\u7F51\u9875\u95F4\u5171\u4EAB\u6570\u636E"),S=t("\u63A8\u8350\u4F7F\u7528 preload\u6309 "),y={href:"https://electronjs.org/docs/tutorial/security#2-do-not-enable-nodejs-integration-for-remote-content",target:"_blank",rel:"noopener noreferrer"},q=t("\u5B89\u5168\u6027\uFF0C\u539F\u751F\u80FD\u529B\u548C\u4F60\u7684\u8D23\u4EFB | Electron "),D={href:"https://changkun.us/archives/2017/03/217/",target:"_blank",rel:"noopener noreferrer"},N=t("Electron \u6DF1\u5EA6\u5B9E\u8DF5\u603B\u7ED3 | \u6B27\u957F\u5764\u7684\u535A\u5BA2"),T=r('<h2 id="\u8FDB\u7A0B\u901A\u4FE1-ipc" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B\u901A\u4FE1-ipc" aria-hidden="true">#</a> \u8FDB\u7A0B\u901A\u4FE1 IPC</h2><p>\u4E3B\u8FDB\u7A0B\u4E0E\u6E32\u67D3\u8FDB\u7A0B</p><p>\u6E32\u67D3\u8FDB\u7A0B\u4E4B\u95F4</p><ul><li>\u672C\u5730\u5B58\u50A8</li><li>\u4E3B\u8FDB\u7A0B\u4E2D\u8F6C\uFF08\u56E0\u4E3A\u4E24\u4E2A\u8FDB\u7A0B\u5E73\u884C\uFF0C\u53EA\u80FD\u901A\u8FC7\u7236\u7EA7\u901A\u4FE1\uFF09</li></ul><p>send \u4E0D\u9700\u8981\u56DE\u590D\u3002\u573A\u666F\uFF1A\u8BA1\u6570\u3001\u6570\u636E\u66F4\u65B0</p><p>invoke \u6267\u884C\u65B9\u6CD5\uFF08\u4FBF\u5229\uFF09\uFF0Cpromise \u3002\u573A\u666F\uFF1A\u83B7\u53D6 electron \u8BBE\u7F6E</p><p>postMessage \u6D88\u606F\u901A\u9053\uFF0C\u4E0E Web \u4E2D\u7684\u7B49\u4EF7\u3002\u573A\u666F\uFF1A\u6D88\u606F\u4FDD\u8BC1\u3001\u5373\u4F7F\u76D1\u542C\u5668\u8FD8\u672A\u6CE8\u518C\uFF0C\u4E3B\u8FDB\u7A0B\u4F5C\u4E3A\u4E2D\u95F4\u4EBA\u3001\u8FDE\u63A5\u4E24\u4E2A\u6E32\u67D3\u8FDB\u7A0B</p><p>webview document.title/executeJavaScript</p><p>remote \u6A21\u5757\uFF0C\u6A21\u62DF\u672C\u5730\u8C03\u7528\uFF0C\u5E9F\u5F03\uFF0C\u63A8\u8350 invoke</p>',9),z={href:"https://zhuanlan.zhihu.com/p/453287153",target:"_blank",rel:"noopener noreferrer"},L=t("Electron\u8FDB\u7A0B\u901A\u4FE1 - \u77E5\u4E4E"),V={href:"https://juejin.cn/post/6988484297485189127",target:"_blank",rel:"noopener noreferrer"},O=t("\u524D\u7AEF\u4E0D\u61C2\u8FDB\u7A0B\u901A\u4FE1\uFF1F\u770B\u5B8C\u8FD9\u7BC7\u5C31\u61C2\u4E86 - \u6398\u91D1"),W=e("h2",{id:"asar-\u5F52\u6863",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#asar-\u5F52\u6863","aria-hidden":"true"},"#"),t(" asar \u5F52\u6863")],-1),I=e("ul",null,[e("li",null,"\u53EA\u8BFB\u3001\u968F\u673A\u8BBF\u95EE\uFF08\u865A\u62DF\u6587\u4EF6\u5939\uFF09"),e("li",null,"\u7528 JSON \u5B58\u50A8\u4FE1\u606F\uFF0C\u6613\u4E8E\u5B9E\u73B0\u89E3\u6790\u5668"),e("li",null,"\u89C4\u907F\u6587\u4EF6\u8DEF\u5F84\u592A\u957F\uFF08win\uFF09"),e("li",null,"\u51CF\u5C11\u6587\u4EF6\u6570\uFF0C\u52A0\u5FEB\u5B89\u88C5")],-1),R={href:"https://quickapp.vivo.com.cn/quickapp-ide-asar/",target:"_blank",rel:"noopener noreferrer"},M=t("\u5FEB\u5E94\u7528\u5F00\u53D1\u5DE5\u5177\u4E4B asar"),J=e("h2",{id:"\u62D6\u62FD\u4E0B\u8F7D",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u62D6\u62FD\u4E0B\u8F7D","aria-hidden":"true"},"#"),t(" \u62D6\u62FD\u4E0B\u8F7D")],-1),U=e("p",null,"event.sender.startDrag https://www.electronjs.org/zh/docs/latest/api/web-contents#contentsstartdragitem https://www.electronjs.org/zh/docs/latest/tutorial/native-file-drag-drop",-1),G=e("p",null,"\u4E0D\u80FD\u76D1\u542C\u7CFB\u7EDF\u4E8B\u4EF6\uFF0C\u53EA\u9002\u5408\u672C\u5730\u6587\u4EF6\u62D6\u62FD",-1),P=e("p",null,"\u539F\u56E0\uFF1A",-1),Q=e("ol",null,[e("li",null,"\u65E0\u6CD5\u62FF\u5230\u76EE\u6807\u8DEF\u5F84"),e("li",null,"\u62D6\u62FD\u5230\u7CFB\u7EDF\u672C\u5730\uFF0C\u8D70\u4E86\u7CFB\u7EDF\u884C\u4E3A\uFF08\u4E0B\u8F7D\u6587\u4EF6 URL \u5230\u4E34\u65F6\u76EE\u5F55\uFF0C\u518D\u62F7\u8D1D\u5230\u76EE\u6807\u6587\u4EF6\u5939\uFF09"),e("li",null,"\u6587\u4EF6\u5939\u6CA1\u6709 URL\uFF0C\u65E0\u6CD5\u4E0B\u8F7D https://github.com/liupan1890/aliyunpan/issues/576 \u53C2\u8003 vscode\uFF0C\u53EA\u652F\u6301\u5355\u6587\u4EF6\uFF0C\u4F46\u8FD9\u53EA\u662F\u672C\u5730\u95F4 https://github.com/electron/electron/issues/7118#issuecomment-483681104 https://cloud.tencent.com/developer/article/1562722")],-1),H={href:"https://github.com/ascoders/weekly/blob/master/%25E5%2589%258D%25E6%25B2%25BF%25E6%258A%2580%25E6%259C%25AF/59.%25E7%25B2%25BE%25E8%25AF%25BB%25E3%2580%258A%25E5%25A6%2582%25E4%25BD%2595%25E5%2588%25A9%25E7%2594%25A8%2520Nodejs%2520%25E7%259B%2591%25E5%2590%25AC%25E6%2596%2587%25E4%25BB%25B6%25E5%25A4%25B9%25E3%2580%258B.md",target:"_blank",rel:"noopener noreferrer"},Z=t("weekly/59.\u7CBE\u8BFB\u300A\u5982\u4F55\u5229\u7528 Nodejs \u76D1\u542C\u6587\u4EF6\u5939\u300B.md at master \xB7 ascoders/weekly"),K={href:"https://juejin.cn/post/7095557874658574373#heading-1",target:"_blank",rel:"noopener noreferrer"},X=t("electron \u62D6\u62FD\u672A\u4E0B\u8F7D\u6587\u4EF6\u5230\u672C\u5730\u529F\u80FD\u5B9E\u73B0 - \u6398\u91D1"),Y={href:"https://pinkcle.com/electron/dragdrop.html",target:"_blank",rel:"noopener noreferrer"},$=t("Electron\u684C\u9762\u7AEF\u62D6\u62FD\u4E0B\u8F7D\u7684\u5B9E\u73B0 | \u65B0\u65F6\u4EE3\u519C\u6C11\u5DE5\u7684\u65E5\u5E38"),ee=e("p",null,"\u66FF\u4EE3\u65B9\u6848\uFF1A\u76D1\u542C\u7CFB\u7EDF\u6587\u4EF6\u5939\u53D8\u5316\uFF0C\u5C40\u9650\u662F\u9002\u5408\u6709\u9650\u76D1\u542C\u7684\u6587\u4EF6\u5939 \u4E3B\u8981\u98CE\u9669\uFF1A\u6743\u9650\u3001\u517C\u5BB9\u6027",-1),te=e("p",null,"vscode \u7A97\u53E3\u5185\u90E8\u62D6\u62FD\u5B9E\u73B0\uFF0C\u7531\u4E8E startDrag \u4E0D\u652F\u6301\u5185\u90E8\uFF0C\u6539\u7528 e.dataTransfer.setData https://github.com/electron/electron/issues/7118#issuecomment-483681104",-1),oe={href:"https://www.mo4tech.com/simple-drag-and-drop-function-in-electron.html",target:"_blank",rel:"noopener noreferrer"},ne=t("Simple drag and drop function in Electron - Moment For Technology"),re=r('<h2 id="\u70ED\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u70ED\u66F4\u65B0" aria-hidden="true">#</a> \u70ED\u66F4\u65B0</h2><p>\u65B9\u6848\uFF1Aasar\uFF08\u4E3B\u8FDB\u7A0B\uFF09 + update.zip(\u6E32\u67D3\u8FDB\u7A0B)</p><p>\u9700\u8981\u62C6\u9879\u76EE</p><ul><li>\u964D\u4F4E\u8FED\u4EE3\u6210\u672C\uFF08\u5206\u53D1\u5E26\u5BBD\uFF1F\uFF09</li><li>\u63D0\u5347</li></ul><h2 id="webview-vs-browserview" tabindex="-1"><a class="header-anchor" href="#webview-vs-browserview" aria-hidden="true">#</a> webview vs browserview</h2><p>\u6700\u5927\u7684\u533A\u522B\u5728\u4E8E browserview \u6258\u7BA1\u4E8E main process \u800C\u4E0D\u662F renderer\u3002\u8FD9\u975E\u5E38\u7C7B\u4F3C\u4E8E Chrome \u4E2D\u5BF9\u9875\u9762\u7684\u5904\u7406\u65B9\u5F0F\uFF0C\u56E0\u6B64\u53EF\u4EE5\u83B7\u5F97\u5F88\u9AD8\u7684\u9875\u9762\u54CD\u5E94\u901F\u5EA6\u3002</p><h2 id="issues" tabindex="-1"><a class="header-anchor" href="#issues" aria-hidden="true">#</a> issues</h2><ul><li>\u7CFB\u7EDF\u5DEE\u5F02\uFF0Cwindows \u65E0\u6CD5 open\uFF1F</li></ul><h3 id="\u767D\u5C4F" tabindex="-1"><a class="header-anchor" href="#\u767D\u5C4F" aria-hidden="true">#</a> \u767D\u5C4F</h3><p>windows \u517C\u5BB9\u6027\uFF0C\u5982 windows server\u3002\u89E3\u51B3\uFF1A\u8FFD\u52A0\xA0--no-sandbox \u6216 \u6253\u5305 32 \u4F4D\u7248\u672C</p><p>Win7+\uFF0C\u4E0D\u652F\u6301 arm</p><p>MacOS 10.10+</p>',12),se={href:"https://stackoverflow.com/questions/36306450/what-is-minimum-system-requirements-to-run-electron-apps",target:"_blank",rel:"noopener noreferrer"},ae=t("javascript - What is minimum system requirements to run electron apps? - Stack Overflow"),ce=t(" \u4E8B\u4EF6: 'render-process-gone\u2019 \xA0\u5224\u65AD reason"),ie={href:"https://www.electronjs.org/zh/docs/latest/api/app#%E4%BA%8B%E4%BB%B6-render-process-gone",target:"_blank",rel:"noopener noreferrer"},le=t("https://www.electronjs.org/zh/docs/latest/api/app#%E4%BA%8B%E4%BB%B6-render-process-gone"),he=e("p",null,"\u589E\u52A0\u6D88\u606F\u63D0\u793A\uFF0C\u8BA9\u7528\u6237\u91CD\u65B0\u6253\u5F00",-1),de=e("p",null,[e("a",{href:"%5Bhttps://juejin.cn/post/7136124646079856671%5D(https://juejin.cn/post/7136124646079856671)"},"\u3010Electron\u3011vue+electron\u767D\u5C4F\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6848 - \u6398\u91D1")],-1),pe=e("h3",{id:"webview-\u7A97\u53E3\u6253\u5F00\u6162",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webview-\u7A97\u53E3\u6253\u5F00\u6162","aria-hidden":"true"},"#"),t(" webview \u7A97\u53E3\u6253\u5F00\u6162")],-1),_e=e("ol",null,[e("li",null,"\u540E\u53F0\u9884\u70ED\uFF0C\u9690\u85CF\u7A97\u53E3\uFF0C\u5B9A\u4F4D\u5230\u5C4F\u5E55\u4E4B\u5916 + skipTaskBar\u4EFB\u52A1\u680F\u4E0D\u53EF\u89C1"),e("li",null,"\u7A97\u53E3\u6C60\uFF0C\u590D\u7528"),e("li",null,"\u5E38\u9A7B\uFF0C\u901A\u7528\u7C7B\u7A97\u53E3\uFF0C\u5982\u901A\u77E5\u3001\u56FE\u7247\u67E5\u770B\u5668")],-1),ue=t("\u5206\u4EAB\u8FD9\u534A\u5E74\u7684 Electron \u5E94\u7528\u5F00\u53D1\u548C\u4F18\u5316\u7ECF\u9A8C - \u6398\u91D1 "),we={href:"https://juejin.cn/post/6844904029231775758",target:"_blank",rel:"noopener noreferrer"},fe=t("https://juejin.cn/post/6844904029231775758"),be=r('<h2 id="\u5F02\u5E38\u6355\u83B7\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38\u6355\u83B7\u5C01\u88C5" aria-hidden="true">#</a> \u5F02\u5E38\u6355\u83B7\u5C01\u88C5</h2><ol><li>render</li><li>main</li></ol><p>https://github.dev/sindresorhus/electron-unhandled/blob/a302ae5367af900872d889cdb47fe26907fa47fe/index.js#L123</p><h2 id="\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305" aria-hidden="true">#</a> \u6253\u5305</h2><p>https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging</p><p>\u6D4B\u8BD5 electron v21 \u7A7A\u9879\u76EE dmg 220Mb</p><h2 id="electron-forge-cli" tabindex="-1"><a class="header-anchor" href="#electron-forge-cli" aria-hidden="true">#</a> electron-forge cli</h2><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>',8),me={href:"https://stackoverflow.com/questions/36072035/how-to-open-new-window-in-place-of-current-window-in-electron/38043021",target:"_blank",rel:"noopener noreferrer"},ge=t("javascript - how to open new window in place of current window in Electron - Stack Overflow"),Ee={href:"https://www.my-fe.pub/post/electron-note.html",target:"_blank",rel:"noopener noreferrer"},ke=t("Electron\u7B80\u5355\u7B14\u8BB0 - \u5C0F\u7FFC\u7684\u524D\u7AEF\u5929\u5730"),ve={href:"https://www.codota.com/code/javascript/functions/electron/WebContents/on",target:"_blank",rel:"noopener noreferrer"},Be=t("electron.WebContents.on JavaScript and Node.js code examples | Codota"),je={href:"https://stackoverflow.com/questions/39091964/remove-menubar-from-electron-app",target:"_blank",rel:"noopener noreferrer"},Ae=t("node.js - Remove menubar from Electron app - Stack Overflow"),xe={href:"https://stackoverflow.com/questions/31171597/atom-electron-close-the-window-with-javascript",target:"_blank",rel:"noopener noreferrer"},Ce=t("Atom Electron - Close the window with javascript - Stack Overflow"),Fe={href:"https://github.com/cawa-93/vite-electron-builder",target:"_blank",rel:"noopener noreferrer"},Se=t("cawa-93/vite-electron-builder: Secure boilerplate for Electron app based on Vite. TypeScript + Vue/React/Angular/Svelte/Vanilla");function ye(qe,De){const o=a("ExternalLinkIcon");return c(),i(l,null,[d,e("ul",null,[p,_,u,w,e("li",null,[f,e("a",b,[m,n(o)])]),g]),e("p",null,[e("a",E,[k,n(o)])]),v,e("p",null,[e("a",B,[j,n(o)]),e("a",A,[x,n(o)]),e("a",C,[F,n(o)])]),e("ul",null,[e("li",null,[S,e("a",y,[q,n(o)]),e("a",D,[N,n(o)])])]),T,e("p",null,[e("a",z,[L,n(o)]),e("a",V,[O,n(o)])]),W,I,e("p",null,[e("a",R,[M,n(o)])]),J,U,G,P,Q,e("p",null,[e("a",H,[Z,n(o)])]),e("p",null,[e("a",K,[X,n(o)]),e("a",Y,[$,n(o)])]),ee,te,e("p",null,[e("a",oe,[ne,n(o)])]),re,e("p",null,[e("a",se,[ae,n(o)]),ce]),e("p",null,[e("a",ie,[le,n(o)])]),he,de,pe,_e,e("p",null,[ue,e("a",we,[fe,n(o)])]),be,e("p",null,[e("a",me,[ge,n(o)]),e("a",Ee,[ke,n(o)]),e("a",ve,[Be,n(o)]),e("a",je,[Ae,n(o)]),e("a",xe,[Ce,n(o)])]),e("p",null,[e("a",Fe,[Se,n(o)])])],64)}var Te=s(h,[["render",ye],["__file","electron.html.vue"]]);export{Te as default};
