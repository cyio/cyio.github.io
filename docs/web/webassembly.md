# WebAssembly

[Why using WebAssembly and Rust improves Node.js performance – IBM Developer](https://developer.ibm.com/technologies/web-development/articles/why-webassembly-and-rust-together-improve-nodejs-performance/)

> 只从 chrome 来说，因为 wasm 和 js 的字节码最后公用的 是同一个 优化编译器(turbo fan) 如果你的应用不是非常计算密集，加上js和 wasm 之间通信的额外消耗， 最后的性能可能和 js 写的应用差不多， 甚至比 js 版本还差

> 如果你只是写一个功能比较简单的应用练练手，直接用 rust-wasm 一整套工具链(wasm-pack, wasm-bindgen)应该可以比较快的完成目标，大概率你应该不会遇到 rust 语言的坑，所有权等。

[FFMPEG.WASM](https://ffmpegwasm.github.io/)
[谷歌：如何以最高效的方式加载 WebAssembly - 掘金](https://juejin.cn/post/6844903591279329294)