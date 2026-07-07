# electron

## 架构

主进程（Node.js 环境，完整系统权限）+ 渲染进程（页面，默认沙箱，无 Node.js）。

多进程模型继承自 Chromium：渲染、插件、GPU 各自独立进程。

[The Secret of Good Electron Apps](https://jlongster.com/secret-of-good-electron-apps)

## IPC 进程间通信

### 三种方式

| 方式 | 特点 | 适用场景 |
|---|---|---|
| `send` | 单向，无需回复 | 计数、数据更新 |
| `invoke` | Promise，双向 | 获取设置、查询数据 |
| `postMessage` | 消息通道，支持 MessagePort | 消息保证、连接两个渲染进程 |

渲染进程间通信需经主进程中转，或使用本地存储。

### MessagePort

比普通 IPC 更底层：支持二进制（ArrayBuffer）、零拷贝（共享内存）、数据流、双向通信。

普通 IPC 以字节流序列化/反序列化，有开销，不适合频繁或大体积数据传输。

> 必须指定 `transfer` 选项才能走零拷贝路径，否则仍会序列化。

[Message Ports | Electron](https://www.electronjs.org/docs/latest/tutorial/message-ports/)

### 安全与效率

- 渲染进程直接给 `fs` 能力有 RCE 风险，推荐通过主进程 IPC 代理文件操作
- IPC 使用安全序列化算法，可屏蔽大量安全问题，开销小但存在
- 大量数据传输推荐 MessagePort 或 SharedArrayBuffer

### 底层实现

Electron 的 `ipcMain` / `ipcRenderer` 基于 Chromium 的 **Mojo** 框架 + Node.js EventEmitter 封装。

[Electron进程通信 - 知乎](https://zhuanlan.zhihu.com/p/453287153)

## 安全

### Context Isolation（上下文隔离）

防止网页脚本访问 preload.js 内容，进而攻击主进程。

- Electron 5.0 引入，12.0 起默认开启
- 关闭后，恶意网页可污染 preload 的 Node 环境，造成 **RCE 漏洞**

通信必须通过 `contextBridge.exposeInMainWorld` + `ipcRenderer` 显式定义暴露的接口。

### contextBridge

属于渲染进程，位于隔离环境与页面之间，提供双向同步桥。

### Preload

类似 Chrome 扩展的 content scripts，在渲染进程加载页面前执行，可访问 Node.js API。

推荐将所有主进程能力通过 preload + contextBridge 显式暴露，而非开放 Node.js 集成。

[Context Isolation | Electron](https://www.electronjs.org/docs/latest/tutorial/context-isolation)
[挖洞经验 | Discord RCE 漏洞](https://www.freebuf.com/articles/web/252806.html)

## 窗口与显示

### 窗口管理

- `parent`：子窗口自动跟随父窗口
- `modal`：禁用父窗口交互
- 不用 `window.open` / `<a target="_blank">` 打开的窗口，可用 `window.close()` 关闭

### webview vs BrowserView

最大区别：BrowserView 托管于主进程（类似 Chrome 标签页实现），响应速度更高。

- `executeJavaScript`：主进程向 webview 注入方法
- preload 脚本：渲染进程向 webview 注入方法

[进程间通信 | Electron](https://www.electronjs.org/docs/latest/tutorial/tutorial-preload#communicating-between-processes)

### 高清屏幕

`getCurrentScaleFactor` 与 `window.devicePixelRatio` 可能不一致，计算坐标时注意：

```js
const offsetX = Math.round((clientX - rect.left) * screenScaleFactor);
```

## 原生能力

### FFI（外部功能接口）

在 Node.js 中调用本地动态库（DLL / dylib / .so）的方式对比：

| 库 | 依赖编译 | 性能 | 类型支持 | 推荐场景 |
|---|---|---|---|---|
| **node-ffi** | 是 | 高 | 弱 | 已废弃，不推荐 |
| **ffi-napi** | 是（native bindings） | 高 | 中 | 需高性能时 |
| **koffi** | 否（纯 JS） | 略低 | 强（结构体、指针、嵌套）| 优先选择 |
| **N-API** | 是（手写 C/C++） | 最高 | 完全自定义 | 复杂扩展 |

FFI 动态链接有少量调用开销，大部分场景可忽略。

[koffi 文档](https://koffi.dev/functions)
[Exposing a Rust Library to Node with Napi-rs](https://johns.codes/blog/exposing-a-rust-library-to-node-with-napirs)

### Worker 多线程

直接使用 Node.js 的 `worker_threads`，无需 Web Worker。

### 共享内存

`SharedArrayBuffer` 是跨进程/线程共享二进制数据的通用方案，免去复制开销。

需设置安全响应头（`Cross-Origin-Opener-Policy` / `Cross-Origin-Embedder-Policy`）。

### 剪贴板

```js
const { clipboard } = require('electron');
const text = clipboard.readText();
```

技术可行，安全责任在开发者。

### 快捷键

注意排除系统默认快捷键（缩放、刷新等）。

[electron-toolkit/utils](https://github.dev/alex8088/electron-toolkit/tree/master/packages/utils)

## 工程

### 打包与 asar

asar 是只读归档格式，随机访问，用 JSON 存储索引：
- 规避 Windows 路径过长问题
- 减少文件数，加快安装
- 主进程代码会编译进可执行文件

安全加固：
- 核心逻辑放主进程，严格控制 IPC
- asar 哈希完整性校验
- 重要资源单独保护（指定不打入 asar）
- 加密存储敏感数据

### 热更新

**方案一：asar + update.zip 拆分**
- 主进程走 asar 更新，渲染进程走 zip
- 优点：降低分发带宽；缺点：增加项目复杂度

**方案二：electron-updater**（推荐）
- 基于内容分块（CDC）+ range 请求，支持增量更新
- 官方支持，跨平台（Windows / macOS / Linux）

**BlockMap**：记录分块 hash，更新时比对新旧包，只下载差异部分。

更新策略：强制 vs 可选、静默 vs 交互、更新包签名验证 + HTTPS 传输。

### 签名与公证

- Windows：不签名会有安全警告，使用系统工具签名
- macOS：需 Apple 公证（`waitForNotarization`），依赖 Apple CDN，可能需要代理

解除隔离属性（本地测试用）：
```bash
sudo xattr -rd com.apple.quarantine /path/to/your.app
```

### DevTools 扩展

复用 Chrome 已安装插件（解决路径和配置问题）：

```js
// 手动加载
await session.defaultSession.loadExtension('/path/to/extension')
```

[DevTools Extension | Electron](https://www.electronjs.org/docs/latest/tutorial/devtools-extension)

> `electron-devtools-installer` 使用过时语法且从 Chrome Web Store 下载，不推荐。

## 性能优化

测量后再优化（参考 VSCode 经验）：

1. **延迟加载**：推迟 `require`（避免 IO 阻塞和递归引用）和 `new`
2. **V8 Snapshot**：预处理 JS，减少启动解析时间
3. **窗口预热**：后台隐藏窗口（定位到屏幕外 + `skipTaskBar`），或维护窗口池复用

[如何让 Electron 启动快 1000ms](https://blog.inkdrop.app/how-to-make-your-electron-app-launch-1000ms-faster-32ce1e0bb52c)
[简单有效的 Chromium 内存优化](https://zhuanlan.zhihu.com/p/700466961)

## 异常与崩溃

### 主进程

不捕获会导致应用退出：

```js
process.on('uncaughtException', (err) => { /* 日志 + 重启 */ })
```

[封装参考 electron-unhandled](https://github.dev/sindresorhus/electron-unhandled)

### 渲染进程

表现为白屏/黑屏，原因：JS 未捕获异常、内存耗尽、手动终止。

```js
window.onerror = (msg, src, line, col, err) => { /* 上报 */ }
```

监听 `render-process-gone` 事件（含 `reason` 字段），提示用户重新打开窗口。

### crashReporter

收集主进程崩溃信息，支持上报到 Sentry：

```js
crashReporter.start({ submitURL: 'https://your-sentry-dsn' })
```

崩溃文件存储于用户目录的 `Crashpad` 文件夹。

[crashReporter API](https://www.electronjs.org/docs/latest/api/crash-reporter)

## 常见问题

### 白屏

Windows 兼容性问题（如 Windows Server）：
- 追加启动参数 `--no-sandbox`
- 或打包 32 位版本

系统支持：Win7+（不支持 ARM）、macOS 10.10+。

### 拖拽下载

`event.sender.startDrag` 只支持本地文件，不支持：
- 获取目标路径
- 拖拽到系统时下载远程文件
- 文件夹（无 URL）

替代方案：监听系统文件夹变化（`fs.watch`），局限于有限目录。
窗口内部拖拽改用 `e.dataTransfer.setData`（参考 VSCode 实现）。

[electron 拖拽下载实现 - 掘金](https://juejin.cn/post/7095557874658574373)

### 原生渲染（WebGL / 视频）

IPC 不适合传大量像素数据，方案：
- 窗口背景透明 + 子窗口装载 SDL，原生渲染 OpenGL
- 交互事件需透传给原生模块
- 共享内存目前无有效方案

## 版本兼容

- Electron 22（Chromium 108）为最后支持 Windows 7/8/8.1 的版本
- Electron 23 起放弃上述 Windows 版本支持

## 参考

- [Electron 官方文档](https://www.electronjs.org/docs/latest)
- [Electron 深度实践总结 | 欧长坤](https://changkun.us/archives/2017/03/217/)
- [分享半年 Electron 开发和优化经验 - 掘金](https://juejin.cn/post/6844904029231775758)
- [electron 多进程方案解决界面卡顿 - 掘金](https://juejin.cn/post/6999257401522126856)
- [blackglory Electron 笔记](https://blackglory.me/notes/electron)
- [示例项目：TIMP 音乐聚合平台](https://github.com/H-Haynes/TIMP)
- [Vite + Electron 安全模板](https://github.com/cawa-93/vite-electron-builder)
