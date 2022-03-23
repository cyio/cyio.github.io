import{r as n,o as a,c as e,a as s,F as p,d as r,b as l}from"./app.31fc93bc.js";const t={},o=r('<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h1><p>一站式解决了所有资源的依赖问题</p><h2 id="why" tabindex="-1"><a class="header-anchor" href="#why" aria-hidden="true">#</a> why</h2><ul><li><p>传统 script 引入缺点</p><ul><li>全局污染</li><li>顺序难保证</li></ul></li><li><p>在大型 SPA 里面，如果全部打包成一个文件会导致文件过大，首屏加载速度受影响（code splitting）</p></li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> webpack-dev-server -g\nwebpack-dev-server --progress --colors\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>http://localhost:8080/webpack-dev-server/bundle</code></p><p>配置文件是 node.js(CommonJS)模块，使用 JavaScript 编写</p><h2 id="工具要解决的三个问题" tabindex="-1"><a class="header-anchor" href="#工具要解决的三个问题" aria-hidden="true">#</a> 工具要解决的三个问题</h2><pre><code>- 打包分拆\n- 异步加载\n- 处理静态资源如CSS/images\n</code></pre><h2 id="流程" tabindex="-1"><a class="header-anchor" href="#流程" aria-hidden="true">#</a> 流程</h2><p>流程 <code>code -&gt; loaders -&gt; plugins -&gt; output</code><strong>loaders</strong> 相当于其它工具中的 <strong>tasks</strong></p><p>entry 从哪开始打包</p><p>output 输出到哪</p><p>loader 如何转换资源</p><p>plugin 如何打包</p><p>resolve 如何解析包</p>',17),c={href:"https://presentations.survivejs.com/advanced-webpack/#/?k=edjsgp&_k=esekxp",target:"_blank",rel:"noopener noreferrer"},i=l("Advanced Webpack"),u=s("h3",{id:"loader-vs-plugin",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#loader-vs-plugin","aria-hidden":"true"},"#"),l(" loader vs plugin")],-1),d=s("p",null,"loader 转换器，预处理源码",-1),b=s("p",null,"plugin 处理 loader 处理不了的任何事",-1),h=s("h2",{id:"上手参考",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#上手参考","aria-hidden":"true"},"#"),l(" 上手参考")],-1),k={href:"https://github.com/petehunt/webpack-howto",target:"_blank",rel:"noopener noreferrer"},m=l("petehunt/webpack-howto"),g={href:"http://www.slideshare.net/ssuser0e4922/webpack-slides-51907869",target:"_blank",rel:"noopener noreferrer"},f=l("Webpack slides"),w={href:"http://www.ido321.com/1646.html",target:"_blank",rel:"noopener noreferrer"},v=l("详解前端模块化工具-Webpack | 淡忘~浅思"),x={href:"https://skryvets.com/blog/2018/03/25/webpack-configuration-for-multi-page-application/",target:"_blank",rel:"noopener noreferrer"},y=l("Webpack configuration for Multi Page Application. All you need to start your project | Sergey Kryvets Blog"),j=r('<ul><li>publicPath 用于发布时文件路径的设置，是绝对路径 本地测试，要开服务，然后把服务地址加上</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>webpack main.js bundle.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token operator">:</span> <span class="token string">&#39;./main.js&#39;</span><span class="token punctuation">,</span>\n  output<span class="token operator">:</span> <span class="token punctuation">{</span>\n    filename<span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>调用：</p><ul><li><code>webpack</code> 开发环境下编译</li><li><code>webpack -p</code> 产品编译及压缩</li><li><code>webpack --watch</code> 开发环境下持续的监听文件变动来进行编译(非常快!)</li><li><code>webpack -d</code> 引入 source maps</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>resolve<span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 现在你require文件的时候可以直接使用require(&#39;file&#39;)，不用使用require(&#39;file.coffee&#39;)</span>\n  extensions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.coffee&#39;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="webpack-3-x-升级" tabindex="-1"><a class="header-anchor" href="#webpack-3-x-升级" aria-hidden="true">#</a> webpack 3.x 升级</h2><ul><li>不再支持自动导入<code>web_modules</code>目录下文件 需要在文件 <code>webpack.base.conf.js</code> 中添加 alias</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>resolve<span class="token operator">:</span> <span class="token punctuation">{</span>\n\talias<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t  <span class="token comment">// ...</span>\n\t\t<span class="token string">&#39;web_modules&#39;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;web_modules&#39;</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n<span class="token comment">// 引入</span>\n<span class="token keyword">import</span> <span class="token string">&#39;web_modules/modernizr&#39;</span>  <span class="token comment">// must import first</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',9),_=l("参考："),S={href:"https://webpack.js.org/configuration/resolve/#resolve-alias",target:"_blank",rel:"noopener noreferrer"},E=l("Resolve"),C=r('<h2 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> loader</h2><ul><li>file-loader 将资源复制过去，然后返回资源路径，一般是图片文件，那别的格式如 mp3 文件怎么办？加到正则即可</li><li>url-loader 小于多少字节时，转换为 base64 内联，支持回退到 file-loader，场景如 icon</li></ul><h2 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h2><ul><li>自带分析<code>webpack --profile --json &gt; stats.json</code></li></ul><p>vendor 第三方库 common 共用</p><blockquote><p>With this bundle configuration, you would load your third party libraries, then your common application code, then your page-specific application code.</p></blockquote>',6),P={href:"https://www.jenniferbland.com/how-to-reduce-your-vue-js-bundle-size-with-webpack/",target:"_blank",rel:"noopener noreferrer"},W=l("How to Reduce Your Vue.JS Bundle Size With Webpack"),B=s("h2",{id:"分包-提取公共模块",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#分包-提取公共模块","aria-hidden":"true"},"#"),l(" 分包 - 提取公共模块")],-1),A=r("<li><p>why:</p><ul><li>分离业务代码和第三方库（ vendor ）</li><li>按需加载（利用 import() 语法）</li></ul></li><li><p>4.x 内置 SplitChunks</p></li><li><p>chunks 类别？async</p></li><li><p>默认规则</p></li><li><p>chunks: all, async, and initial 指定哪类包可以优化，initial 同步，all 可用于同步和异步</p></li><li><p>观察下 vendors hash 是否变化，应该保持不变</p></li>",6),D=s("p",null,"样式如何拆包 scss，官方插件仅把 css 从 js 中提取，多页存在冗余",-1),q={href:"https://cli.vuejs.org/guide/css.html#automatic-imports",target:"_blank",rel:"noopener noreferrer"},O=l("Working with CSS | Vue CLI 3"),z=s("ul",null,[s("li",null,"按上面链接处理不行，打成了 scoped 样式，文件更大了")],-1),L=r('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token operator">:</span> <span class="token punctuation">{</span>\n    splitChunks<span class="token operator">:</span> <span class="token punctuation">{</span>\n      cacheGroups<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 拆取规则</span>\n        vendors<span class="token operator">:</span> <span class="token punctuation">{</span>\n          test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\\\/]node_modules[\\\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// node_modules 下引入的包归类为 vendors</span>\n          priority<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span> <span class="token comment">// 优先级</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          minChunks<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 默认被引用 2 次及以上时拆包</span>\n          priority<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">,</span>\n          reuseExistingChunk<span class="token operator">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>',1),J={href:"https://webpack.js.org/plugins/split-chunks-plugin/#optimization-splitchunks",target:"_blank",rel:"noopener noreferrer"},V=l("SplitChunksPlugin - 默认设置"),I=s("h2",{id:"构建性能",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#构建性能","aria-hidden":"true"},"#"),l(" 构建性能")],-1),N=s("p",null,"方法论：",-1),U=s("ul",null,[s("li",null,"多线程 thread-loader 请仅在耗时的 loader 上使用"),s("li",null,"缓存 构建"),s("li",null,"移除无用代码 tree-shaking 移除未引用代码，依赖 ES6 模块语法"),s("li",null,"并行压缩")],-1),Z=l("loader、plugin 耗时分析 SpeedMeasurePlugin "),F={href:"https://juejin.cn/post/6844904084781154318",target:"_blank",rel:"noopener noreferrer"},H=l("探索webpack构建速度提升方法和优化策略"),M=s("h3",{id:"noparse",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#noparse","aria-hidden":"true"},"#"),l(" noParse")],-1),R=s("ul",null,[s("li",null,[l("含有 p"),s("wbr"),l("rocess.env.NODE_ENV 的文件也不要让 webpack noParse。")])],-1),T={href:"https://samsaccone.com/posts/why-is-my-webpack-build-slow.html",target:"_blank",rel:"noopener noreferrer"},G=l("Why is my webpack build slow?"),K=s("h2",{id:"webpack-cdn-plugin",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#webpack-cdn-plugin","aria-hidden":"true"},"#"),l(" webpack-cdn-plugin")],-1),Y={href:"https://www.jianshu.com/p/86602494dbb7",target:"_blank",rel:"noopener noreferrer"},$=l("webpack 打包优化 - 简书"),Q=s("p",null,"异步 import 默认会单独打包",-1),X=s("h2",{id:"chunks-含义是什么",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#chunks-含义是什么","aria-hidden":"true"},"#"),l(" chunks 含义是什么")],-1),nn={href:"https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkschunks",target:"_blank",rel:"noopener noreferrer"},an=l("SplitChunksPlugin | webpack"),en={href:"https://stackoverflow.com/questions/52104217/vuejs-webpack-lazyload-modules-from-elementui",target:"_blank",rel:"noopener noreferrer"},sn=l("vue.js - VueJs + Webpack lazyload modules from ElementUI - Stack Overflow"),pn=s("h2",{id:"runtime",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#runtime","aria-hidden":"true"},"#"),l(" runtime")],-1),rn={href:"https://symfonycasts.com/screencast/webpack-encore/single-runtime-chunk",target:"_blank",rel:"noopener noreferrer"},ln=l("The Single Runtime Chunk > Webpack Encore: Frontend like a Pro! | SymfonyCasts"),tn=s("h2",{id:"hash-策略",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#hash-策略","aria-hidden":"true"},"#"),l(" hash 策略")],-1),on={href:"https://jkfhto.github.io/2019-10-18/webpack/webpack-%E6%96%87%E4%BB%B6%E6%8C%87%E7%BA%B9%E7%AD%96%E7%95%A5%EF%BC%9Achunkhash%E3%80%81contenthash%E5%92%8Chash/",target:"_blank",rel:"noopener noreferrer"},cn=l("webpack-文件指纹策略：chunkhash、contenthash 和 hash | 个人博客"),un=r('<h2 id="应用代码注入环境变量" tabindex="-1"><a class="header-anchor" href="#应用代码注入环境变量" aria-hidden="true">#</a> 应用代码注入环境变量</h2><p>DefinePlugin</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// 应用中需要的p<wbr>rocess.env变量，在此注入才能使用。</span>\n    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token constant">BUILD_ENV</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BUILD_ENV</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// 编译环境（development/test/production）</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',3),dn=l("import 大小写 path 不一致警告 "),bn={href:"https://stackoverflow.com/questions/47534267/webpack-there-are-multiple-modules-with-names-that-only-differ-in-casing-but",target:"_blank",rel:"noopener noreferrer"},hn=l('Webpack: "there are multiple modules with names that only differ in casing" but modules referenced are identical - Stack Overflow'),kn={href:"https://www.npmjs.com/package/case-sensitive-paths-webpack-plugin",target:"_blank",rel:"noopener noreferrer"},mn=l("case-sensitive-paths-webpack-plugin - npm"),gn=r('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import PureStyleLib from &#39;@/paper/components/Content/panel/StyleLib/PureStyleLib&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>原因是 path 中的 Content 写错大小写。需要检查整个路径</p><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2><p>cache-loader 读写磁盘开销、副作用，仓库已废弃、建议升 v5，默认开启</p><p>尽量用 include 显示指定，按需添加</p>',5),fn={href:"https://github.com/HolyZheng/holyZheng-blog/issues/48",target:"_blank",rel:"noopener noreferrer"},wn=l("webpack5新特性一览 · Issue #48 · HolyZheng/holyZheng-blog"),vn=r('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n  test: /\\.less$/,\n  use: [\n    &#39;style-loader&#39;,\n    &#39;css-loader&#39;,\n    &#39;less-loader&#39;\n  ]\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>use 下面的先执行，使用了 compose</p><h2 id="node-进程-cpu-持续较高" tabindex="-1"><a class="header-anchor" href="#node-进程-cpu-持续较高" aria-hidden="true">#</a> node 进程 CPU 持续较高</h2>',3),xn=l("watchOptions: { poll: 5000, ignored: ['node_modules'] } "),yn={href:"https://www.typescriptlang.org/docs/handbook/configuring-watch.html",target:"_blank",rel:"noopener noreferrer"},jn=l("TypeScript: Documentation - Configuring Watch"),_n={href:"https://stackoverflow.com/questions/62422627/error-unknown-type-name-uint64-t-on-macos-while-installing-libraries",target:"_blank",rel:"noopener noreferrer"},Sn=l("xcode - error: unknown type name 'uint64_t' on MacOS while installing libraries - Stack Overflow"),En=s("p",null,"原因：fsevents 本地编译失败，可能是升级过系统，编译依赖的某些库是旧的。表现很明显，但被忽略了，因为 webpack/ts-loader 会回退用轮询方式 watch files",-1),Cn=s("h2",{id:"按需加载",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#按需加载","aria-hidden":"true"},"#"),l(" 按需加载")],-1),Pn=s("p",null,[s("code",null,"import { xx } from yy"),l(" 这么写，理论上会全局引入 yy")],-1),Wn=s("p",null,"tree-shaking 依赖 ES6 导入导出以精确分析，但有些老库是 ES5 写的",-1),Bn=s("p",null,"用 babel 转换插件，写法不变，插件进行替换",-1),An=s("p",null,"lodash 支持按方法手动按需引入，但导入比较多时，要写很多行，繁琐",-1),Dn=s("p",null,"antd 默认对 JS 部分，用 babel plugin 转换成按需引入写法。如果全局引入，会在控制台给出警告。",-1),qn={href:"https://3x.ant.design/docs/react/getting-started-cn#%25E6%258C%2589%25E9%259C%2580%25E5%258A%25A0%25E8%25BD%25BD",target:"_blank",rel:"noopener noreferrer"},On=l("快速上手 - Ant Design");t.render=function(r,l){const t=n("OutboundLink");return a(),e(p,null,[o,s("p",null,[s("a",c,[i,s(t)])]),u,d,b,h,s("p",null,[s("a",k,[m,s(t)]),s("a",g,[f,s(t)]),s("a",w,[v,s(t)]),s("a",x,[y,s(t)])]),j,s("p",null,[_,s("a",S,[E,s(t)])]),C,s("p",null,[s("a",P,[W,s(t)])]),B,s("ul",null,[A,s("li",null,[D,s("p",null,[s("a",q,[O,s(t)])]),z])]),L,s("p",null,[s("a",J,[V,s(t)])]),I,N,U,s("p",null,[Z,s("a",F,[H,s(t)])]),M,R,s("p",null,[s("a",T,[G,s(t)])]),K,s("p",null,[s("a",Y,[$,s(t)])]),Q,X,s("p",null,[s("a",nn,[an,s(t)]),s("a",en,[sn,s(t)])]),pn,s("p",null,[s("a",rn,[ln,s(t)])]),tn,s("p",null,[s("a",on,[cn,s(t)])]),un,s("p",null,[dn,s("a",bn,[hn,s(t)]),s("a",kn,[mn,s(t)])]),gn,s("p",null,[s("a",fn,[wn,s(t)])]),vn,s("p",null,[xn,s("a",yn,[jn,s(t)])]),s("p",null,[s("a",_n,[Sn,s(t)])]),En,Cn,Pn,Wn,Bn,An,Dn,s("p",null,[s("a",qn,[On,s(t)])])],64)};export default t;
