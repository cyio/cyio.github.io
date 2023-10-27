# electron

Electron == CEF + Node.js

CEF： Chromium 嵌入式框架

![v2-f85361afb9a037b24b279c9a87d6635e_r.jpg (490×454)](https://pic3.zhimg.com/v2-f85361afb9a037b24b279c9a87d6635e_r.jpg)

## CEF： Chromium 嵌入式框架

CEF专注于促进第三方应用程序中的嵌入式浏览器用例

C++ 实现

> CEF支持广泛的编程语言和操作系统，可以轻松地集成到新的和现有的应用程序中。它的设计从头到尾兼顾了性能和易用性。基本框架包括通过本机库公开的C和c++编程接口，本机库将主机应用程序与Chromium和Blink实现细节隔离开来。它提供了浏览器和主机应用程序之间的紧密集成，包括对自定义插件、协议、JavaScript对象和JavaScript扩展的支持。主机应用程序可以选择性地控制资源加载、导航、上下文菜单、打印等，同时利用谷歌Chrome Web浏览器中提供的相同性能和HTML5技术。

底层是 Google 公司带头的开源社区

https://github.com/chromiumembedded/cef

组件：
- 动态库（各平台）
- 支持文件
- 资源
- 可执行 client

架构
- CEF使用多个进程。主要的应用程序进程称为“浏览器”进程。将为渲染器、插件、GPU等创建子进程。
- 在Windows和Linux上，相同的可执行文件可以用于主进程和子进程。在OS X上，你需要为子进程创建一个单独的可执行文件和应用程序包。
- CEF中的大多数进程都有多个线程。CEF为在这些不同的线程之间提交任务提供了函数和接口。
- 一些回调和函数只能在特定进程或特定线程上使用。在第一次开始使用新的回调函数或函数之前，请确保阅读API头中的源代码注释。

https://blog.scottlogic.com/2023/02/01/webview2-electron-challengers-and-slightly-lighter-desktop-web-applications.html

## 进程

- 2 个进程：主进程和渲染器进程
- web页面运行在渲染进程
- 与浏览器区别，页面可访问底层（通过主进程）
- GUI 操作，必须与主进程通讯
- require 时需要引 remote [javascript - How to fix BrowserWindow is not a constructor error when creating child window in Electron renderer process - Stack Overflow](https://stackoverflow.com/questions/45639628/how-to-fix-browserwindow-is-not-a-constructor-error-when-creating-child-window-i)
- nodeIntegration 5.0 起默认为 false

[The Secret of Good Electron Apps](https://jlongster.com/secret-of-good-electron-apps)


## 调试
最好打开开发工具，`CTRL-ALT-T`
新开页无法使用开发工具？

## 窗口管理
不用`window.open`，`a target=_blank`开新窗口就可用`window.close`关掉
进阶，可以用
```js
import { remote } from 'electron'
var win = remote.getCurrentWindow()
win.close()
```
[electron test close window](https://codepen.io/cyio/pen/QZPLaV)
[Electron 应用架构 | Electron 进程通讯](https://electronjs.org/docs/tutorial/application-architecture#%25E9%25A2%2598%25E5%25A4%2596%25E8%25AF%259D%25EF%25BC%259A%25E8%25BF%259B%25E7%25A8%258B%25E9%2597%25B4%25E9%2580%259A%25E8%25AE%25AF)
[Electron 常见问题 (FAQ) | Electron 如何在两个网页间共享数据](https://electronjs.org/docs/faq#%25E5%25A6%2582%25E4%25BD%2595%25E5%259C%25A8%25E4%25B8%25A4%25E4%25B8%25AA%25E7%25BD%2591%25E9%25A1%25B5%25E9%2597%25B4%25E5%2585%25B1%25E4%25BA%25AB%25E6%2595%25B0%25E6%258D%25AE%25EF%25BC%259F)

- 推荐使用 preload
[安全性，原生能力和你的责任 | Electron ](https://electronjs.org/docs/tutorial/security#2-do-not-enable-nodejs-integration-for-remote-content)
[Electron 深度实践总结 | 欧长坤的博客](https://changkun.us/archives/2017/03/217/)

## 进程通信 IPC

主进程与渲染进程

渲染进程之间
- 本地存储
- 主进程中转（因为两个进程平行，只能通过父级通信）

send 不需要回复。场景：计数、数据更新

invoke 执行方法（便利），promise 。场景：获取 electron 设置

postMessage 消息通道，与 Web 中的等价。场景：消息保证、即使监听器还未注册，主进程作为中间人、连接两个渲染进程

webview document.title/executeJavaScript 

remote 模块，模拟本地调用，废弃，推荐 invoke

electron 的 IPC 基于 chromium 的 IPC？

MessagePort对象可以在渲染器或主进程中创建，并使用ipcRenderer.postMessage和WebContents.postMessage方法来回传递。请注意，通常的IPC方法（如send和invoke）不能用于传输MessagePorts，只有postMessage方法可以传输MessagePorts。

https://www.electronjs.org/docs/latest/tutorial/message-ports/

[Electron进程通信 - 知乎](https://zhuanlan.zhihu.com/p/453287153)
[前端不懂进程通信？看完这篇就懂了 - 掘金](https://juejin.cn/post/6988484297485189127)

## asar 归档

- 只读、随机访问（虚拟文件夹）
- 用 JSON 存储信息，易于实现解析器
- 规避文件路径太长（win）
- 减少文件数，加快安装

[快应用开发工具之 asar](https://quickapp.vivo.com.cn/quickapp-ide-asar/)

## 拖拽下载

event.sender.startDrag
https://www.electronjs.org/zh/docs/latest/api/web-contents#contentsstartdragitem
https://www.electronjs.org/zh/docs/latest/tutorial/native-file-drag-drop

不能监听系统事件，只适合本地文件拖拽

原因：
1. 无法拿到目标路径
2. 拖拽到系统本地，走了系统行为（下载文件 URL 到临时目录，再拷贝到目标文件夹）
3. 文件夹没有 URL，无法下载
https://github.com/liupan1890/aliyunpan/issues/576
参考 vscode，只支持单文件，但这只是本地间
https://github.com/electron/electron/issues/7118#issuecomment-483681104
https://cloud.tencent.com/developer/article/1562722

[weekly/59.精读《如何利用 Nodejs 监听文件夹》.md at master · ascoders/weekly](https://github.com/ascoders/weekly/blob/master/%25E5%2589%258D%25E6%25B2%25BF%25E6%258A%2580%25E6%259C%25AF/59.%25E7%25B2%25BE%25E8%25AF%25BB%25E3%2580%258A%25E5%25A6%2582%25E4%25BD%2595%25E5%2588%25A9%25E7%2594%25A8%2520Nodejs%2520%25E7%259B%2591%25E5%2590%25AC%25E6%2596%2587%25E4%25BB%25B6%25E5%25A4%25B9%25E3%2580%258B.md)

[electron 拖拽未下载文件到本地功能实现 - 掘金](https://juejin.cn/post/7095557874658574373#heading-1)
[Electron桌面端拖拽下载的实现 | 新时代农民工的日常](https://pinkcle.com/electron/dragdrop.html)

替代方案：监听系统文件夹变化，局限是适合有限监听的文件夹
主要风险：权限、兼容性

vscode 窗口内部拖拽实现，由于 startDrag 不支持内部，改用 e.dataTransfer.setData
https://github.com/electron/electron/issues/7118#issuecomment-483681104

[Simple drag and drop function in Electron - Moment For Technology](https://www.mo4tech.com/simple-drag-and-drop-function-in-electron.html)

## 生产包热更新

方案：asar（主进程） + update.zip(渲染进程)

需要拆项目

- 降低迭代成本（分发带宽？）
- 提升

## webview 

默认没有网络缓存？

## webview vs browserview

最大的区别在于 browserview 托管于 main process 而不是 renderer。这非常类似于 Chrome 中对页面的处理方式，因此可以获得很高的页面响应速度。

## issues

- 系统差异，windows 无法 open？

###  白屏

windows 兼容性，如 windows server。解决：追加 --no-sandbox 或 打包 32 位版本

Win7+，不支持 arm

MacOS 10.10+

[javascript - What is minimum system requirements to run electron apps? - Stack Overflow](https://stackoverflow.com/questions/36306450/what-is-minimum-system-requirements-to-run-electron-apps)
事件: 'render-process-gone’  判断 reason

[https://www.electronjs.org/zh/docs/latest/api/app#%E4%BA%8B%E4%BB%B6-render-process-gone](https://www.electronjs.org/zh/docs/latest/api/app#%E4%BA%8B%E4%BB%B6-render-process-gone)

增加消息提示，让用户重新打开

[【Electron】vue+electron白屏问题的解决方案 - 掘金]([https://juejin.cn/post/7136124646079856671](https://juejin.cn/post/7136124646079856671))

### webview 窗口打开慢

1. 后台预热，隐藏窗口，定位到屏幕之外 + skipTaskBar任务栏不可见
2. 窗口池，复用
3. 常驻，通用类窗口，如通知、图片查看器

分享这半年的 Electron 应用开发和优化经验 - 掘金 [https://juejin.cn/post/6844904029231775758](https://juejin.cn/post/6844904029231775758)

## 异常捕获

### 渲染进程

表现：白屏、黑屏，窗口在但没有内容

- JavaScript 错误，未捕获的异常或死循环，可能会导致进程被终止
- 手动终止
- 内存耗尽

事件：render-process-gone，处理参考 白屏部分

> Sentry 主要用于捕获 JavaScript 异常和错误以及 Electron 主进程中的问题，包括`process.on('uncaughtException'`

### 主进程


封装参考
https://github.dev/sindresorhus/electron-unhandled/blob/a302ae5367af900872d889cdb47fe26907fa47fe/index.js#L123

### crashReporter

electron 的一个模块，收集主进程崩溃信息，支持设置上报地址，可配置 sentry 使用

crash free sessions 免于崩溃、即正常的会话数，用 100 减去即崩溃的会话数

存储用户目录：Crashpad

https://www.electronjs.org/docs/latest/api/crash-reporter

## 打包

https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging

测试 electron v21 空项目 dmg 220Mb

[macOS 提示：“应用程序” 已损坏，无法打开的解决方法总结 - sysin | SYStem INside | 软件与技术分享](https://sysin.org/blog/macos-if-crashes-when-opening/)

## electron-forge cli


## webview


Preload scripts 类似 chrome 扩展的 content scripts

主进程是 nodejs 环境，有完全系统访问权

渲染进程运行页面，安全原因默认不能运行 nodejs

官方 contextBridge，显式声明暴露的能力 

使用executeJavaScript方法可以在主进程中向webview注入方法，使用preload脚本可以在渲染进程中向webview注入方法。

进程间通信：[Using Preload Scripts | Electron](https://www.electronjs.org/docs/latest/tutorial/tutorial-preload#communicating-between-processes)

[node.js - Electron Preload vs Electron Main - Stack Overflow](https://stackoverflow.com/questions/71791530/electron-preload-vs-electron-main)

第三方依赖 bug https://github.com/electron/forge/issues/2931#issuecomment-1306377240

[解决electron嵌入webview显示空白无法使用_electron webview 不显示_谢泽的网络日志的博客-CSDN博客](https://blog.csdn.net/a0405221/article/details/120928463)

[electron中与webview的通讯-Web前端(W3Cways.com) - Web前端学习之路](https://www.w3cways.com/2459.html)

为 webview 注入方法，原理：
[Context Isolation | Electron](https://www.electronjs.org/docs/latest/tutorial/context-isolation#before-context-isolation-disabled)

如果contextIsolation为false，那么web页面中的JS可以影响Electron内部渲染时的JS代码和预加载脚本执行。比如先入侵 web 加入恶意脚本，再传递到 preload node 环境。**远程代码执行漏洞（RCE）**

contextIsolation 环境上下文隔离开关，是在 Electron 5.0 版本中引入的，默认值是 false。从 12.0 版本开始，默认值变为 true

[挖洞经验 | 综合三个Bug实现Discord桌面应用RCE漏洞 - FreeBuf网络安全行业门户](https://www.freebuf.com/articles/web/252806.html)

## 版本

Electron 22, which contains Chromium 108, will thus be the last supported version.

In line with Chromium's deprecation policy, _Electron_ will end support of _Windows 7_, Windows 8 and Windows 8.1 beginning in _Electron_ 23.

不再收到更新支持，有可能能运行？

## 安全


## 参考
[javascript - how to open new window in place of current window in Electron - Stack Overflow](https://stackoverflow.com/questions/36072035/how-to-open-new-window-in-place-of-current-window-in-electron/38043021)
[Electron简单笔记 - 小翼的前端天地](https://www.my-fe.pub/post/electron-note.html)
[electron.WebContents.on JavaScript and Node.js code examples | Codota](https://www.codota.com/code/javascript/functions/electron/WebContents/on)
[node.js - Remove menubar from Electron app - Stack Overflow](https://stackoverflow.com/questions/39091964/remove-menubar-from-electron-app)
[Atom Electron - Close the window with javascript - Stack Overflow](https://stackoverflow.com/questions/31171597/atom-electron-close-the-window-with-javascript)

[cawa-93/vite-electron-builder: Secure boilerplate for Electron app based on Vite. TypeScript + Vue/React/Angular/Svelte/Vanilla](https://github.com/cawa-93/vite-electron-builder)

[electron多进程方案解决界面卡顿 - 掘金](https://juejin.cn/post/6999257401522126856)

https://blackglory.me/notes/electron


## 性能

1. 延迟 require（IO、递归引用）
2. V8 Snapshot，预处理 JS
[How to make your Electron app launch 1,000ms faster | by Takuya Matsuyama | Dev as Life](https://blog.inkdrop.app/how-to-make-your-electron-app-launch-1000ms-faster-32ce1e0bb52c)


## node-ffi & napi

> 外部函数接口

node-ffi 和 napi 都是 Node.js 中用于访问本地代码的工具，但它们有不同的设计目的和使用场景。

node-ffi 是一个 Node.js 模块，它允许你调用本地动态链接库中的函数，而无需编写 C++ 绑定代码。node-ffi 的主要设计目的是为了让 Node.js 开发者能够方便地访问本地系统功能，例如操作系统 API、硬件驱动程序等。使用 node-ffi，你可以在 Node.js 中轻松地调用 C 语言编写的动态链接库，而无需编写任何 C++ 绑定代码。

而 napi 是 Node.js 提供的一组 API，它允许开发者编写可跨平台、可移植的 C++ 扩展，并且这些扩展可以在不同版本的 Node.js 上运行。napi 的主要设计目的是为了让开发者能够编写高效、可靠的 Node.js 扩展，而不必考虑不同版本的 Node.js 之间的差异。使用 napi，你可以更轻松地编写跨平台的 Node.js 扩展，并且这些扩展可以在多个版本的 Node.js 上运行。

因此，node-ffi 和 napi 在设计目的和使用场景上存在差异。如果你需要快速访问本地系统功能，那么 node-ffi 是一个很好的选择；如果你需要编写可跨平台的高效 Node.js 扩展，那么 napi 是更好的选择。

https://nodejs.org/api/n-api.html#node-api

## koffi

在Koffi中，指针是一个变量，它保存了另一个变量或对象的内存地址。"koffi.decode()"函数允许你访问特定内存地址上存储的数据，并将其解释为JS函数。

如果您要在JS环境中使用"koffi.decode()"函数来获取JS函数，可能是为了与Koffi代码进行交互，或者将Koffi代码嵌入到现有的JS应用程序中。这样可以利用Koffi的特性和功能，并与现有的JS代码进行集成。

https://koffi.dev/functions?highlight=decode

## QT

Qt是一个跨平台的C++应用程序开发框架，它提供了丰富的功能和高性能。Qt应用程序通常被编译为本地机器码，因此在性能方面表现较好。Qt还有一个轻量级的版本Qt Quick，它使用QML语言来构建用户界面，可以实现更快的渲染和动画效果。

由于 Chromium 需要同时运行JavaScript和渲染网页，Electron应用程序的性能可能相对较低，尤其是在处理大量数据或运行复杂计算时。

## worker

在 Electron 中，你可以直接使用 Node.js 的多线程模块 `worker_threads` 来实现多线程任务，而无需使用 Web Worker。
