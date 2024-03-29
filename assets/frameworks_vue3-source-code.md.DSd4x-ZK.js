import{_ as a,c as s,o as e,a4 as n}from"./chunks/framework.4aTu-Nia.js";const m=JSON.parse('{"title":"Vue 3 源码学习","description":"","frontmatter":{},"headers":[],"relativePath":"frameworks/vue3-source-code.md","filePath":"frameworks/vue3-source-code.md"}'),p={name:"frameworks/vue3-source-code.md"},t=n(`<h1 id="vue-3-源码学习" tabindex="-1">Vue 3 源码学习 <a class="header-anchor" href="#vue-3-源码学习" aria-label="Permalink to &quot;Vue 3 源码学习&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#调试">调试</a></li><li><a href="#目录结构">目录结构</a></li><li><a href="#模块关系">模块关系</a></li><li><a href="#createapp">createApp</a></li><li><a href="#core-api-runtime">core api - runtime</a></li><li><a href="#reactive">reactive</a></li><li><a href="#讨论点">讨论点</a></li><li><a href="#参考">参考</a></li><li><a href="#shapeflag">shapeFlag</a></li><li><a href="#h-render">h &amp; render</a></li><li><a href="#虚拟-dom-编译时优化">虚拟 DOM 编译时优化</a></li><li><a href="#fragments">Fragments</a></li><li><a href="#definecomponent">defineComponent</a></li></ul></nav><p>在线源码 <a href="https://vscode.dev/github/vuejs/core" target="_blank" rel="noreferrer">https://vscode.dev/github/vuejs/core</a></p><h2 id="调试" tabindex="-1">调试 <a class="header-anchor" href="#调试" aria-label="Permalink to &quot;调试&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git clone git@github.com:vuejs/core.git vue3-core</span></span></code></pre></div><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><p>packages</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── compiler-core // 编译核心，抽象语法树和渲染桥接实现</span></span>
<span class="line"><span>├── compiler-dom // Dom 实现</span></span>
<span class="line"><span>├── compiler-sfc // SFC 单文件组件(.vue)的实现</span></span>
<span class="line"><span>├── compiler-ssr</span></span>
<span class="line"><span>├── global.d.ts</span></span>
<span class="line"><span>├── reactivity // 响应式</span></span>
<span class="line"><span>├── runtime-core</span></span>
<span class="line"><span>├── runtime-dom</span></span>
<span class="line"><span>├── runtime-test</span></span>
<span class="line"><span>├── server-renderer // 服务端渲染实现</span></span>
<span class="line"><span>├── shared  // package 之间共享的工具库</span></span>
<span class="line"><span>├── size-check</span></span>
<span class="line"><span>├── template-explorer</span></span>
<span class="line"><span>└── vue // 入口？</span></span></code></pre></div><p>compiler、runtime 概念区别 compiler 源码到可执行代码，runtime 程序运行时</p><h2 id="模块关系" tabindex="-1">模块关系 <a class="header-anchor" href="#模块关系" aria-label="Permalink to &quot;模块关系&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vue - packages/vue/src/index.ts</span></span>
<span class="line"><span>    @vue/compiler-dom</span></span>
<span class="line"><span>        @vue/compiler-core</span></span>
<span class="line"><span>    @vue/runtime-dom</span></span>
<span class="line"><span>        @vue/runtime-core</span></span></code></pre></div><h2 id="createapp" tabindex="-1">createApp <a class="header-anchor" href="#createapp" aria-label="Permalink to &quot;createApp&quot;">​</a></h2><p>方法关系：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>createRenderer</span></span>
<span class="line"><span> baseCreateRenderer</span></span>
<span class="line"><span>   createAppAPI</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// packages/runtime-core/src/renderer.ts</span></span>
<span class="line"><span>function baseCreateRenderer</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    render,</span></span>
<span class="line"><span>    hydrate,</span></span>
<span class="line"><span>    createApp: createAppAPI(render, hydrate)</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>createAppAPI</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>app</span></span>
<span class="line"><span>  use(plugin: Plugin, ...options: any[]) {</span></span>
<span class="line"><span>  mixin(mixin: ComponentOptions) {</span></span>
<span class="line"><span>  component(name: string, component?: Component): any {</span></span>
<span class="line"><span>  directive(name: string, directive?: Directive) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  mount(</span></span>
<span class="line"><span>  unmount() {</span></span>
<span class="line"><span>  provide(key, value) {</span></span></code></pre></div><pre><code>propsCache: new WeakMap(),
</code></pre><h2 id="core-api-runtime" tabindex="-1">core api - runtime <a class="header-anchor" href="#core-api-runtime" aria-label="Permalink to &quot;core api - runtime&quot;">​</a></h2><p><code>packages/runtime-core/src/index.ts</code>负责将最常用方法、API 导出</p><p>defineComponent 类型 util</p><p>h - Hyperscript 参数判断，实际调用 createVNode</p><p>v-if/v-for 视为 block，可能动态变更</p><h2 id="reactive" tabindex="-1">reactive <a class="header-anchor" href="#reactive" aria-label="Permalink to &quot;reactive&quot;">​</a></h2><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c884b48e88a643e2b695b3587224b51d~tplv-k3u1fbpfcp-watermark.awebp" alt="reactive 工作流程"></p><p>文件结构</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>└── src</span></span>
<span class="line"><span>    ├── baseHandlers.ts // 基本类型的处理器</span></span>
<span class="line"><span>    ├── collectionHandlers.ts  // Set Map WeakSet WeckMap的处理器</span></span>
<span class="line"><span>    ├── computed.ts // 计算属性，同Vue2</span></span>
<span class="line"><span>    ├── deferredComputed.ts // 计算属性</span></span>
<span class="line"><span>    ├── dep.ts // </span></span>
<span class="line"><span>    ├── effect.ts // reactive 核心，处理依赖收集，依赖更新</span></span>
<span class="line"><span>    ├── effectScope.ts // </span></span>
<span class="line"><span>    ├── index.ts</span></span>
<span class="line"><span>    ├── operations.ts // 定义依赖收集，依赖更新的类型</span></span>
<span class="line"><span>    ├── reactive.ts // reactive 入口，内部主要以 Proxy 实现</span></span>
<span class="line"><span>    └── ref.ts // Proxy 处理不了值类型的响应，Ref 来处理</span></span></code></pre></div><p>ref 实现</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ref( 默认深拷贝</span></span>
<span class="line"><span>  createRef(</span></span>
<span class="line"><span>    RefImpl(</span></span>
<span class="line"><span>      toReactive 对象调用 reactive，非对象直接返回</span></span>
<span class="line"><span>         sObject(value) ? reactive(value) : value</span></span>
<span class="line"><span>            createReactiveObject(mutableHandlers</span></span>
<span class="line"><span>                new Proxy</span></span>
<span class="line"><span>      get 时，触发依赖收集、追踪</span></span>
<span class="line"><span>        trackEffects</span></span>
<span class="line"><span>      set 时，触发依赖更新</span></span>
<span class="line"><span>        triggerEffects</span></span></code></pre></div><blockquote><p>官方文档：如果传入 ref 的是一个对象，将调用 reactive 方法进行深层响应转换。</p></blockquote><p>effect 作为 reactive 的核心，主要负责监听响应式数据的变化，触发监听函数的执行逻辑</p><blockquote><p>Vue 最独特的特性之一，是其非侵入性的响应性系统。数据模型是被代理的 JavaScript 对象。</p></blockquote><p>原始类型响应式解决方案，转换成对象，增加<code>.value</code>，模板访问时自动解套</p><p>targetMap 记录 target object/property 和 effect 关系，二层数据结构：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">weakmap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    targetObject: map </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        targetProperty: dep</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">effect array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>effectStack <code>push -&gt; run -&gt; pop</code></p><p>activeEffect 当前运行的 effect</p><p>记录依赖关系时，查询 activeEffect</p><p>setupResult 是 setup return 的对象</p><h2 id="讨论点" tabindex="-1">讨论点 <a class="header-anchor" href="#讨论点" aria-label="Permalink to &quot;讨论点&quot;">​</a></h2><p>数据和逻辑聚合</p><p>以功能或者职责来组织文件</p><p>新的 API 理论上会降低代码质量的最低门槛</p><p>setup 作用是为了合成生成物，供外部访问</p><p><a href="https://stackoverflow.com/a/58500917" target="_blank" rel="noreferrer">vue.js - When to use setup() hook of Vue Composition API - Stack Overflow</a></p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><p><a href="https://v3.cn.vuejs.org/guide/reactivity.html#%25E4%25BB%2580%25E4%25B9%2588%25E6%2598%25AF%25E5%2593%258D%25E5%25BA%2594%25E6%2580%25A7" target="_blank" rel="noreferrer">深入响应性原理 | Vue.js</a><a href="https://segmentfault.com/a/1190000039691166" target="_blank" rel="noreferrer">推荐 7 个 Vue2、Vue3 源码解密分析的重磅开源项目 👍 - SegmentFault 思否</a></p><h2 id="shapeflag" tabindex="-1">shapeFlag <a class="header-anchor" href="#shapeflag" aria-label="Permalink to &quot;shapeFlag&quot;">​</a></h2><h2 id="h-render" tabindex="-1">h &amp; render <a class="header-anchor" href="#h-render" aria-label="Permalink to &quot;h &amp; render&quot;">​</a></h2><p>h 函数作用 createVNode</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>render(h(xx), container)</span></span></code></pre></div><p><a href="https://zhuanlan.zhihu.com/p/526776679" target="_blank" rel="noreferrer">vue3有了解过吗？能说说跟vue2的区别吗？vue3和vue2区别详解 - 知乎</a></p><h2 id="虚拟-dom-编译时优化" tabindex="-1">虚拟 DOM 编译时优化 <a class="header-anchor" href="#虚拟-dom-编译时优化" aria-label="Permalink to &quot;虚拟 DOM 编译时优化&quot;">​</a></h2><p>纯运行时 =&gt; 编译时</p><ul><li>静态提升</li><li>更新类型标记</li><li>树结构打平</li></ul><p><a href="https://cn.vuejs.org/guide/extras/rendering-mechanism.html#compiler-informed-virtual-dom" target="_blank" rel="noreferrer">https://cn.vuejs.org/guide/extras/rendering-mechanism.html#compiler-informed-virtual-dom</a></p><h2 id="fragments" tabindex="-1">Fragments <a class="header-anchor" href="#fragments" aria-label="Permalink to &quot;Fragments&quot;">​</a></h2><p>不占位置，只渲染 children</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> &lt;fragment &gt;</span></span>
<span class="line"><span>   &lt;ChildA / &gt;</span></span>
<span class="line"><span>   &lt;ChildB / &gt;</span></span>
<span class="line"><span>   &lt;ChildC / &gt;</span></span>
<span class="line"><span> &lt;/fragment&gt;</span></span></code></pre></div><p><a href="https://blog.logrocket.com/fragments-in-vue-js/" target="_blank" rel="noreferrer">Fragments in Vue.js - LogRocket Blog</a></p><h2 id="definecomponent" tabindex="-1">defineComponent <a class="header-anchor" href="#definecomponent" aria-label="Permalink to &quot;defineComponent&quot;">​</a></h2><p>defineComponent 本身的功能很简单，但是最主要的功能是为了 ts 下的类型推导。</p>`,62),i=[t];function l(r,c,o,h,d,u){return e(),s("div",null,i)}const v=a(p,[["render",l]]);export{m as __pageData,v as default};
