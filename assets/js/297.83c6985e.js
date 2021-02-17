(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{737:function(t,e,a){"use strict";a.r(e);var s=a(56),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[t._v("#")]),t._v(" Webpack")]),t._v(" "),a("p",[t._v("一站式解决了所有资源的依赖问题")]),t._v(" "),a("h2",{attrs:{id:"why"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[t._v("#")]),t._v(" why")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("传统 script 引入缺点")]),t._v(" "),a("ul",[a("li",[t._v("全局污染")]),t._v(" "),a("li",[t._v("顺序难保证")])])]),t._v(" "),a("li",[a("p",[t._v("在大型 SPA 里面，如果全部打包成一个文件会导致文件过大，首屏加载速度受影响（code splitting）")])])]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" webpack-dev-server -g\nwebpack-dev-server --progress --colors\n")])])]),a("p",[a("code",[t._v("http://localhost:8080/webpack-dev-server/bundle")])]),t._v(" "),a("p",[t._v("配置文件是 node.js(CommonJS)模块，使用 JavaScript 编写")]),t._v(" "),a("h2",{attrs:{id:"工具要解决的三个问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具要解决的三个问题"}},[t._v("#")]),t._v(" 工具要解决的三个问题")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("- 打包分拆\n- 异步加载\n- 处理静态资源如CSS/images\n")])])]),a("h2",{attrs:{id:"流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[t._v("#")]),t._v(" 流程")]),t._v(" "),a("p",[t._v("流程\n"),a("code",[t._v("code -> loaders -> plugins -> output")]),t._v(" "),a("strong",[t._v("loaders")]),t._v(" 相当于其它工具中的 "),a("strong",[t._v("tasks")])]),t._v(" "),a("p",[t._v("entry 从哪开始打包")]),t._v(" "),a("p",[t._v("output 输出到哪")]),t._v(" "),a("p",[t._v("loader 如何转换资源")]),t._v(" "),a("p",[t._v("plugin 如何打包")]),t._v(" "),a("p",[t._v("resolve 如何解析包")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://presentations.survivejs.com/advanced-webpack/#/?k=edjsgp&_k=esekxp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Advanced Webpack"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"loader-vs-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader-vs-plugin"}},[t._v("#")]),t._v(" loader vs plugin")]),t._v(" "),a("p",[t._v("loader 转换器，预处理源码")]),t._v(" "),a("p",[t._v("plugin 处理 loader 处理不了的任何事")]),t._v(" "),a("h2",{attrs:{id:"上手参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上手参考"}},[t._v("#")]),t._v(" 上手参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/petehunt/webpack-howto",target:"_blank",rel:"noopener noreferrer"}},[t._v("petehunt/webpack-howto"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"http://www.slideshare.net/ssuser0e4922/webpack-slides-51907869",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack slides"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"http://www.ido321.com/1646.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("详解前端模块化工具-Webpack | 淡忘~浅思"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://skryvets.com/blog/2018/03/25/webpack-configuration-for-multi-page-application/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack configuration for Multi Page Application. All you need to start your project | Sergey Kryvets Blog"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("publicPath\n用于发布时文件路径的设置，是绝对路径\n本地测试，要开服务，然后把服务地址加上")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("webpack main.js bundle.js\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack.config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bundle.js'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("调用：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("webpack")]),t._v(" 开发环境下编译")]),t._v(" "),a("li",[a("code",[t._v("webpack -p")]),t._v(" 产品编译及压缩")]),t._v(" "),a("li",[a("code",[t._v("webpack --watch")]),t._v(" 开发环境下持续的监听文件变动来进行编译(非常快!)")]),t._v(" "),a("li",[a("code",[t._v("webpack -d")]),t._v(" 引入 source maps")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 现在你require文件的时候可以直接使用require('file')，不用使用require('file.coffee')")]),t._v("\n  extensions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.coffee'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"webpack-3-x-升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-3-x-升级"}},[t._v("#")]),t._v(" webpack 3.x 升级")]),t._v(" "),a("ul",[a("li",[t._v("不再支持自动导入"),a("code",[t._v("web_modules")]),t._v("目录下文件\n需要在文件 "),a("code",[t._v("webpack.base.conf.js")]),t._v(" 中添加 alias")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\talias"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'web_modules'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'web_modules'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'web_modules/modernizr'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// must import first")]),t._v("\n")])])]),a("p",[t._v("参考："),a("a",{attrs:{href:"https://webpack.js.org/configuration/resolve/#resolve-alias",target:"_blank",rel:"noopener noreferrer"}},[t._v("Resolve"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[t._v("#")]),t._v(" loader")]),t._v(" "),a("ul",[a("li",[t._v("file-loader 将资源复制过去，然后返回资源路径，一般是图片文件，那别的格式如 mp3 文件怎么办？加到正则即可")]),t._v(" "),a("li",[t._v("url-loader 小于多少字节时，转换为 base64 内联，支持回退到 file-loader，场景如 icon")])]),t._v(" "),a("h2",{attrs:{id:"打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[t._v("#")]),t._v(" 打包")]),t._v(" "),a("ul",[a("li",[t._v("自带分析"),a("code",[t._v("webpack --profile --json > stats.json")])])]),t._v(" "),a("p",[t._v("vendor 第三方库\ncommon 共用")]),t._v(" "),a("blockquote",[a("p",[t._v("With this bundle configuration, you would load your third party libraries, then your common application code, then your page-specific application code.")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jenniferbland.com/how-to-reduce-your-vue-js-bundle-size-with-webpack/",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Reduce Your Vue.JS Bundle Size With Webpack"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"分包-提取公共模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分包-提取公共模块"}},[t._v("#")]),t._v(" 分包 - 提取公共模块")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("why:")]),t._v(" "),a("ul",[a("li",[t._v("分离业务代码和第三方库（ vendor ）")]),t._v(" "),a("li",[t._v("按需加载（利用 import() 语法）")])])]),t._v(" "),a("li",[a("p",[t._v("4.x 内置 SplitChunks")])]),t._v(" "),a("li",[a("p",[t._v("chunks 类别？async")])]),t._v(" "),a("li",[a("p",[t._v("默认规则")])]),t._v(" "),a("li",[a("p",[t._v("chunks: all, async, and initial 指定哪类包可以优化，initial 同步，all 可用于同步和异步")])]),t._v(" "),a("li",[a("p",[t._v("观察下 vendors hash 是否变化，应该保持不变")])]),t._v(" "),a("li",[a("p",[t._v("样式如何拆包 scss，官方插件仅把 css 从 js 中提取，多页存在冗余")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cli.vuejs.org/guide/css.html#automatic-imports",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with CSS | Vue CLI 3"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("按上面链接处理不行，打成了 scoped 样式，文件更大了")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  optimization"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    splitChunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      cacheGroups"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拆取规则")]),t._v("\n        vendors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("[\\\\/]node_modules[\\\\/]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// node_modules 下引入的包归类为 vendors")]),t._v("\n          priority"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 优先级")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          minChunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认被引用 2 次及以上时拆包")]),t._v("\n          priority"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          reuseExistingChunk"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://webpack.js.org/plugins/split-chunks-plugin/#optimization-splitchunks",target:"_blank",rel:"noopener noreferrer"}},[t._v("SplitChunksPlugin - 默认设置"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"构建性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建性能"}},[t._v("#")]),t._v(" 构建性能")]),t._v(" "),a("p",[t._v("方法论：")]),t._v(" "),a("ul",[a("li",[t._v("多线程 thread-loader 请仅在耗时的 loader 上使用")]),t._v(" "),a("li",[t._v("缓存 构建")]),t._v(" "),a("li",[t._v("移除无用代码 tree-shaking 移除未引用代码，依赖 ES6 模块语法")]),t._v(" "),a("li",[t._v("并行压缩")])]),t._v(" "),a("p",[t._v("loader、plugin 耗时分析 SpeedMeasurePlugin\n"),a("a",{attrs:{href:"https://juejin.cn/post/6844904084781154318",target:"_blank",rel:"noopener noreferrer"}},[t._v("探索webpack构建速度提升方法和优化策略"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"noparse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noparse"}},[t._v("#")]),t._v(" noParse")]),t._v(" "),a("ul",[a("li",[t._v("含有 process.env.NODE_ENV 的文件也不要让 webpack noParse。")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://samsaccone.com/posts/why-is-my-webpack-build-slow.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Why is my webpack build slow?"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"webpack-cdn-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-cdn-plugin"}},[t._v("#")]),t._v(" webpack-cdn-plugin")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/86602494dbb7",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack 打包优化 - 简书"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("异步 import 默认会单独打包")]),t._v(" "),a("h2",{attrs:{id:"chunks-含义是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chunks-含义是什么"}},[t._v("#")]),t._v(" chunks 含义是什么")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkschunks",target:"_blank",rel:"noopener noreferrer"}},[t._v("SplitChunksPlugin | webpack"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://stackoverflow.com/questions/52104217/vuejs-webpack-lazyload-modules-from-elementui",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue.js - VueJs + Webpack lazyload modules from ElementUI - Stack Overflow"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"runtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#runtime"}},[t._v("#")]),t._v(" runtime")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://symfonycasts.com/screencast/webpack-encore/single-runtime-chunk",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Single Runtime Chunk > Webpack Encore: Frontend like a Pro! | SymfonyCasts"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"hash-策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash-策略"}},[t._v("#")]),t._v(" hash 策略")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://jkfhto.github.io/2019-10-18/webpack/webpack-%E6%96%87%E4%BB%B6%E6%8C%87%E7%BA%B9%E7%AD%96%E7%95%A5%EF%BC%9Achunkhash%E3%80%81contenthash%E5%92%8Chash/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-文件指纹策略：chunkhash、contenthash 和 hash | 个人博客"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"应用代码注入环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用代码注入环境变量"}},[t._v("#")]),t._v(" 应用代码注入环境变量")]),t._v(" "),a("p",[t._v("DefinePlugin")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 应用中需要的process.env变量，在此注入才能使用。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefinePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BUILD_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BUILD_ENV")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编译环境（development/test/production）")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("import 大小写 path 不一致警告\n"),a("a",{attrs:{href:"https://stackoverflow.com/questions/47534267/webpack-there-are-multiple-modules-with-names-that-only-differ-in-casing-but",target:"_blank",rel:"noopener noreferrer"}},[t._v('Webpack: "there are multiple modules with names that only differ in casing" but modules referenced are identical - Stack Overflow'),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/case-sensitive-paths-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("case-sensitive-paths-webpack-plugin - npm"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import PureStyleLib from '@/paper/components/Content/panel/StyleLib/PureStyleLib'\n")])])]),a("p",[t._v("原因是 path 中的 Content 写错大小写。需要检查整个路径")]),t._v(" "),a("h2",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),a("p",[t._v("cache-loader 读写磁盘开销、副作用，仓库已废弃、建议升 v5，默认开启")]),t._v(" "),a("p",[t._v("尽量用 include 显示指定，按需添加")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/HolyZheng/holyZheng-blog/issues/48",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack5新特性一览 · Issue #48 · HolyZheng/holyZheng-blog"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("{\n  test: /\\.less$/,\n  use: [\n    'style-loader',\n    'css-loader',\n    'less-loader'\n  ]\n}\n")])])]),a("p",[t._v("use 下面的先执行，使用了 compose")]),t._v(" "),a("h2",{attrs:{id:"node-进程-cpu-持续较高"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-进程-cpu-持续较高"}},[t._v("#")]),t._v(" node 进程 CPU 持续较高")]),t._v(" "),a("p",[t._v("watchOptions: {\npoll: 5000,\nignored: ['node_modules']\n}\n"),a("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/configuring-watch.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript: Documentation - Configuring Watch"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/62422627/error-unknown-type-name-uint64-t-on-macos-while-installing-libraries",target:"_blank",rel:"noopener noreferrer"}},[t._v("xcode - error: unknown type name 'uint64_t' on MacOS while installing libraries - Stack Overflow"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("原因：fsevents 本地编译失败，可能是升级过系统，编译依赖的某些库是旧的。表现很明显，但被忽略了，因为 webpack/ts-loader 会回退用轮询方式 watch files")]),t._v(" "),a("h2",{attrs:{id:"按需加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按需加载"}},[t._v("#")]),t._v(" 按需加载")]),t._v(" "),a("p",[a("code",[t._v("import { xx } from yy")]),t._v("\n这么写，理论上会全局引入 yy")]),t._v(" "),a("p",[t._v("tree-shaking 依赖 ES6 导入导出以精确分析，但有些老库是 ES5 写的")]),t._v(" "),a("p",[t._v("用 babel 转换插件，写法不变，插件进行替换")]),t._v(" "),a("p",[t._v("lodash 支持按方法手动按需引入，但导入比较多时，要写很多行，繁琐")]),t._v(" "),a("p",[t._v("antd 默认对 JS 部分，用 babel plugin 转换成按需引入写法。如果全局引入，会在控制台给出警告。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://3x.ant.design/docs/react/getting-started-cn#%25E6%258C%2589%25E9%259C%2580%25E5%258A%25A0%25E8%25BD%25BD",target:"_blank",rel:"noopener noreferrer"}},[t._v("快速上手 - Ant Design"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);