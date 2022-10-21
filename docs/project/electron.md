# electron

Electron == CEF + Node.js

CEF： Chromium 嵌入式框架

## 进程

主进程和渲染器进程
web页面运行在渲染进程
与浏览器区别，页面可访问底层（通过主进程）
GUI 操作，必须与主进程通讯

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

- 推荐使用 preload按
[安全性，原生能力和你的责任 | Electron ](https://electronjs.org/docs/tutorial/security#2-do-not-enable-nodejs-integration-for-remote-content)
[Electron 深度实践总结 | 欧长坤的博客](https://changkun.us/archives/2017/03/217/)

## 进程通信 IPC

send 不需要回复，场景：计数、数据更新

invoke 执行方法（便利），promise 场景：获取 electron 设置

postMessage 消息通道，与 Web 中的等价
场景：消息保证、即使监听器还未注册，主进程作为中间人、连接两个渲染进程

webview document.title/executeJavaScript 

remote 模块，模拟本地调用，废弃，推荐 invoke

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

## 热更新

方案：asar（主进程） + update.zip(渲染进程)

需要拆项目

- 降低迭代成本（分发带宽？）
- 提升

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

## 参考
[javascript - how to open new window in place of current window in Electron - Stack Overflow](https://stackoverflow.com/questions/36072035/how-to-open-new-window-in-place-of-current-window-in-electron/38043021)
[Electron简单笔记 - 小翼的前端天地](https://www.my-fe.pub/post/electron-note.html)
[electron.WebContents.on JavaScript and Node.js code examples | Codota](https://www.codota.com/code/javascript/functions/electron/WebContents/on)
[node.js - Remove menubar from Electron app - Stack Overflow](https://stackoverflow.com/questions/39091964/remove-menubar-from-electron-app)
[Atom Electron - Close the window with javascript - Stack Overflow](https://stackoverflow.com/questions/31171597/atom-electron-close-the-window-with-javascript)