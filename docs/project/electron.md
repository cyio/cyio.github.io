# electron

主进程和渲染器进程
web页面运行在渲染进程
与浏览器区别，页面可访问底层
GUI 操作，必须与主进程通讯

- require 时需要引 remote [javascript - How to fix BrowserWindow is not a constructor error when creating child window in Electron renderer process - Stack Overflow](https://stackoverflow.com/questions/45639628/how-to-fix-browserwindow-is-not-a-constructor-error-when-creating-child-window-i)

- nodeIntegration 5.0 起默认为 false

[The Secret of Good Electron Apps](https://jlongster.com/secret-of-good-electron-apps)

## issues
系统差异，windows 无法 open？

[javascript - how to open new window in place of current window in Electron - Stack Overflow](https://stackoverflow.com/questions/36072035/how-to-open-new-window-in-place-of-current-window-in-electron/38043021)
[Electron简单笔记 - 小翼的前端天地](https://www.my-fe.pub/post/electron-note.html)
[electron.WebContents.on JavaScript and Node.js code examples | Codota](https://www.codota.com/code/javascript/functions/electron/WebContents/on)
[node.js - Remove menubar from Electron app - Stack Overflow](https://stackoverflow.com/questions/39091964/remove-menubar-from-electron-app)
[Atom Electron - Close the window with javascript - Stack Overflow](https://stackoverflow.com/questions/31171597/atom-electron-close-the-window-with-javascript)

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
