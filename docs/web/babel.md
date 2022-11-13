# babel

## polyfill

- .browserlistrc vue-cli 3 自动 polyfill src 中的代码
- browserlist default 包括 IE11

  `npx browserslist "> 1% cn"`

[ECMAScript 6 compatibility table](http://kangax.github.io/compat-table/es6/)
[Better polyfill default setting for @vue/babel-preset-app · Issue #1248 · vuejs/vue-cli](https://github.com/vuejs/vue-cli/issues/1248#issuecomment-388117018)
[@babel/polyfill · Babel](https://babeljs.io/docs/en/next/babel-polyfill.html)

> 然后我发现所有的前端编译工具都是 parse、transform、generate 这三个阶段，都是基于 AST 做分析和转换。
> 其实我就是研究 Babel 的时候，发现它的静态分析和 ESLint、TSC 一样都是基于 AST 做的，它的代码转换和 Terser 又有重叠部分，然后发现 postcss 也是差不多的，从而发现前端编译工具原理都类似，完全可以统一，再就是编译和打包是两个维度的事情。
> 网页和 Node.js 的调试都可以用 Chrome DevTools 和 VSCode Debugger 调试，了解了下它们的原理都是基于 CDP，而且小程序调试工具、跨端引擎调试工具等可以用 Chrome DevTools 来调试也都是因为对接了 CDP。自己试了下实现 CDP backend 和 frontend，然后了解到 Puppeteer 和 LightHouse CLI 也都是基于 CDP 实现的

[当你有了技术深度，很可能也同时有了技术广度 - 知乎](https://zhuanlan.zhihu.com/p/581987972)

