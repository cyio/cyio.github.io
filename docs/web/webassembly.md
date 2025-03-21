# WebAssembly 

通用跨编程语言字节码技术

## 特点

**中间表示**：
**原生支持**：相通底层内存模型
**生态系统**：高度兼容

[Why using WebAssembly and Rust improves Node.js performance – IBM Developer](https://developer.ibm.com/technologies/web-development/articles/why-webassembly-and-rust-together-improve-nodejs-performance/)

> 只从 chrome 来说，因为 wasm 和 js 的字节码最后公用的 是同一个 优化编译器(turbo fan) 如果你的应用不是非常计算密集，加上js和 wasm 之间通信的额外消耗， 最后的性能可能和 js 写的应用差不多， 甚至比 js 版本还差

> 如果你只是写一个功能比较简单的应用练练手，直接用 rust-wasm 一整套工具链(wasm-pack, wasm-bindgen)应该可以比较快的完成目标，大概率你应该不会遇到 rust 语言的坑，所有权等。

[FFMPEG.WASM](https://ffmpegwasm.github.io/)

[WAMR - WebAssembly Micro Runtime](https://bytecodealliance.github.io/wamr.dev/)

## 性能

不一定更快，比如转图，用 rust 又通过 FFI 调用 c，需要额外的适配处理
> wasm版的webp转码速度比纯rust或纯c的版本，慢了8-10倍

## WasmEdge

体积、速度、安全优势，相比于 linux/Node
QuickJS 小型、可嵌入，几个 C 文件，在任何环境运行

[边缘云微服务——如何利用 WasmEdge 和 Rust 构建高性能和安全的应用程序](https://www.freecodecamp.com/chinese/news/edge-cloud-microservices-with-wasmedge-and-rust/)

## Rust 和 C

Rust 提供了更好的内存安全保证和现代化的语言特性，而 C 则有更成熟的生态系统和更广泛的使用基础。

## 内存

每个 Wasm 实例拥有自己的私有内存空间，它不是跨进程共享的。内存是局限于单个 JavaScript 上下文和 Wasm 模块实例的。

## 总结

WebAssembly 是一种通用的跨编程语言字节码技术，特点包括作为中间表示、原生支持和高度兼容的生态系统。虽然不一定总是更快，但在某些场景下，如边缘云微服务，结合 Rust 和 WasmEdge 可以构建高性能和安全的应用程序。Rust 和 C 各有优势，Rust 提供内存安全保证，C 生态成熟。每个 Wasm 实例有私有内存空间。