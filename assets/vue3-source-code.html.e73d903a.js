import{_ as s,r as c,o as p,c as i,a as e,b as a,w as r,F as l,d as t,e as d}from"./app.ca3e1119.js";const u={},h=e("h1",{id:"vue-3-\u6E90\u7801\u5B66\u4E60",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-3-\u6E90\u7801\u5B66\u4E60","aria-hidden":"true"},"#"),t(" Vue 3 \u6E90\u7801\u5B66\u4E60")],-1),f={class:"table-of-contents"},v=t("\u8C03\u8BD5"),g=t("\u76EE\u5F55\u7ED3\u6784"),m=t("\u6A21\u5757\u5173\u7CFB"),_=t("createApp"),x=t("core api - runtime"),k=t("reactive"),b=t("\u8BA8\u8BBA\u70B9"),y=t("\u53C2\u8003"),A=d(`<h2 id="\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u8C03\u8BD5" aria-hidden="true">#</a> \u8C03\u8BD5</h2><p>git clone git@github.com:vuejs/core.git vue3-core</p><h2 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u76EE\u5F55\u7ED3\u6784</h2><p>packages</p><div class="language-text ext-text"><pre class="language-text"><code>.
\u251C\u2500\u2500 compiler-core // \u7F16\u8BD1\u6838\u5FC3\uFF0C\u62BD\u8C61\u8BED\u6CD5\u6811\u548C\u6E32\u67D3\u6865\u63A5\u5B9E\u73B0
\u251C\u2500\u2500 compiler-dom // Dom \u5B9E\u73B0
\u251C\u2500\u2500 compiler-sfc // SFC \u5355\u6587\u4EF6\u7EC4\u4EF6(.vue)\u7684\u5B9E\u73B0
\u251C\u2500\u2500 compiler-ssr
\u251C\u2500\u2500 global.d.ts
\u251C\u2500\u2500 reactivity // \u54CD\u5E94\u5F0F
\u251C\u2500\u2500 runtime-core
\u251C\u2500\u2500 runtime-dom
\u251C\u2500\u2500 runtime-test
\u251C\u2500\u2500 server-renderer // \u670D\u52A1\u7AEF\u6E32\u67D3\u5B9E\u73B0
\u251C\u2500\u2500 shared  // package \u4E4B\u95F4\u5171\u4EAB\u7684\u5DE5\u5177\u5E93
\u251C\u2500\u2500 size-check
\u251C\u2500\u2500 template-explorer
\u2514\u2500\u2500 vue // \u5165\u53E3\uFF1F
</code></pre></div><p>compiler\u3001runtime \u6982\u5FF5\u533A\u522B compiler \u6E90\u7801\u5230\u53EF\u6267\u884C\u4EE3\u7801\uFF0Cruntime \u7A0B\u5E8F\u8FD0\u884C\u65F6</p><h2 id="\u6A21\u5757\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u5173\u7CFB" aria-hidden="true">#</a> \u6A21\u5757\u5173\u7CFB</h2><div class="language-text ext-text"><pre class="language-text"><code>vue - packages/vue/src/index.ts
    @vue/compiler-dom
        @vue/compiler-core
    @vue/runtime-dom
        @vue/runtime-core
</code></pre></div><h2 id="createapp" tabindex="-1"><a class="header-anchor" href="#createapp" aria-hidden="true">#</a> createApp</h2><p>\u65B9\u6CD5\u5173\u7CFB\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>createRenderer
 baseCreateRenderer
   createAppAPI
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>// packages/runtime-core/src/renderer.ts
function baseCreateRenderer
  ...
  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  }
</code></pre></div><p>createAppAPI</p><div class="language-text ext-text"><pre class="language-text"><code>app
  use(plugin: Plugin, ...options: any[]) {
  mixin(mixin: ComponentOptions) {
  component(name: string, component?: Component): any {
  directive(name: string, directive?: Directive) {

  mount(
  unmount() {
  provide(key, value) {
</code></pre></div><pre><code>propsCache: new WeakMap(),
</code></pre><h2 id="core-api-runtime" tabindex="-1"><a class="header-anchor" href="#core-api-runtime" aria-hidden="true">#</a> core api - runtime</h2><p><code>packages/runtime-core/src/index.ts</code>\u8D1F\u8D23\u5C06\u6700\u5E38\u7528\u65B9\u6CD5\u3001API \u5BFC\u51FA</p><p>defineComponent \u7C7B\u578B util</p><p>h - Hyperscript \u53C2\u6570\u5224\u65AD\uFF0C\u5B9E\u9645\u8C03\u7528 createVNode</p><p>v-if/v-for \u89C6\u4E3A block\uFF0C\u53EF\u80FD\u52A8\u6001\u53D8\u66F4</p><h2 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive" aria-hidden="true">#</a> reactive</h2><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c884b48e88a643e2b695b3587224b51d~tplv-k3u1fbpfcp-watermark.awebp" alt="reactive \u5DE5\u4F5C\u6D41\u7A0B"></p><p>\u6587\u4EF6\u7ED3\u6784</p><div class="language-text ext-text"><pre class="language-text"><code>\u2514\u2500\u2500 src
    \u251C\u2500\u2500 baseHandlers.ts // \u57FA\u672C\u7C7B\u578B\u7684\u5904\u7406\u5668
    \u251C\u2500\u2500 collectionHandlers.ts  // Set Map WeakSet WeckMap\u7684\u5904\u7406\u5668
    \u251C\u2500\u2500 computed.ts // \u8BA1\u7B97\u5C5E\u6027\uFF0C\u540CVue2
    \u251C\u2500\u2500 deferredComputed.ts // \u8BA1\u7B97\u5C5E\u6027
    \u251C\u2500\u2500 dep.ts // 
    \u251C\u2500\u2500 effect.ts // reactive \u6838\u5FC3\uFF0C\u5904\u7406\u4F9D\u8D56\u6536\u96C6\uFF0C\u4F9D\u8D56\u66F4\u65B0
    \u251C\u2500\u2500 effectScope.ts // 
    \u251C\u2500\u2500 index.ts
    \u251C\u2500\u2500 operations.ts // \u5B9A\u4E49\u4F9D\u8D56\u6536\u96C6\uFF0C\u4F9D\u8D56\u66F4\u65B0\u7684\u7C7B\u578B
    \u251C\u2500\u2500 reactive.ts // reactive \u5165\u53E3\uFF0C\u5185\u90E8\u4E3B\u8981\u4EE5 Proxy \u5B9E\u73B0
    \u2514\u2500\u2500 ref.ts // Proxy \u5904\u7406\u4E0D\u4E86\u503C\u7C7B\u578B\u7684\u54CD\u5E94\uFF0CRef \u6765\u5904\u7406
</code></pre></div><p>ref \u5B9E\u73B0</p><div class="language-text ext-text"><pre class="language-text"><code>ref( \u9ED8\u8BA4\u6DF1\u62F7\u8D1D
  createRef(
    RefImpl(
      toReactive \u5BF9\u8C61\u8C03\u7528 reactive\uFF0C\u975E\u5BF9\u8C61\u76F4\u63A5\u8FD4\u56DE
         sObject(value) ? reactive(value) : value
            createReactiveObject(mutableHandlers
                new Proxy
      get \u65F6\uFF0C\u89E6\u53D1\u4F9D\u8D56\u6536\u96C6\u3001\u8FFD\u8E2A
        trackEffects
      set \u65F6\uFF0C\u89E6\u53D1\u4F9D\u8D56\u66F4\u65B0
        triggerEffects
</code></pre></div><blockquote><p>\u5B98\u65B9\u6587\u6863\uFF1A\u5982\u679C\u4F20\u5165 ref \u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C06\u8C03\u7528 reactive \u65B9\u6CD5\u8FDB\u884C\u6DF1\u5C42\u54CD\u5E94\u8F6C\u6362\u3002</p></blockquote><p>effect \u4F5C\u4E3A reactive \u7684\u6838\u5FC3\uFF0C\u4E3B\u8981\u8D1F\u8D23\u76D1\u542C\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u53D8\u5316\uFF0C\u89E6\u53D1\u76D1\u542C\u51FD\u6570\u7684\u6267\u884C\u903B\u8F91</p><blockquote><p>Vue \u6700\u72EC\u7279\u7684\u7279\u6027\u4E4B\u4E00\uFF0C\u662F\u5176\u975E\u4FB5\u5165\u6027\u7684\u54CD\u5E94\u6027\u7CFB\u7EDF\u3002\u6570\u636E\u6A21\u578B\u662F\u88AB\u4EE3\u7406\u7684 JavaScript \u5BF9\u8C61\u3002</p></blockquote><p>\u539F\u59CB\u7C7B\u578B\u54CD\u5E94\u5F0F\u89E3\u51B3\u65B9\u6848\uFF0C\u8F6C\u6362\u6210\u5BF9\u8C61\uFF0C\u589E\u52A0<code>.value</code>\uFF0C\u6A21\u677F\u8BBF\u95EE\u65F6\u81EA\u52A8\u89E3\u5957</p><p>targetMap \u8BB0\u5F55 target object/property \u548C effect \u5173\u7CFB\uFF0C\u4E8C\u5C42\u6570\u636E\u7ED3\u6784\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>weakmap <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">targetObject</span><span class="token operator">:</span> map <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">targetProperty</span><span class="token operator">:</span> dep<span class="token operator">&lt;</span>effect array<span class="token operator">&gt;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>effectStack <code>push -&gt; run -&gt; pop</code></p><p>activeEffect \u5F53\u524D\u8FD0\u884C\u7684 effect</p><p>\u8BB0\u5F55\u4F9D\u8D56\u5173\u7CFB\u65F6\uFF0C\u67E5\u8BE2 activeEffect</p><p>setupResult \u662F setup return \u7684\u5BF9\u8C61</p><h2 id="\u8BA8\u8BBA\u70B9" tabindex="-1"><a class="header-anchor" href="#\u8BA8\u8BBA\u70B9" aria-hidden="true">#</a> \u8BA8\u8BBA\u70B9</h2><p>\u6570\u636E\u548C\u903B\u8F91\u805A\u5408</p><p>\u4EE5\u529F\u80FD\u6216\u8005\u804C\u8D23\u6765\u7EC4\u7EC7\u6587\u4EF6</p><p>\u65B0\u7684 API \u7406\u8BBA\u4E0A\u4F1A\u964D\u4F4E\u4EE3\u7801\u8D28\u91CF\u7684\u6700\u4F4E\u95E8\u69DB</p><p>setup \u4F5C\u7528\u662F\u4E3A\u4E86\u5408\u6210\u751F\u6210\u7269\uFF0C\u4F9B\u5916\u90E8\u8BBF\u95EE</p>`,41),j={href:"https://stackoverflow.com/a/58500917",target:"_blank",rel:"noopener noreferrer"},E=t("vue.js - When to use setup() hook of Vue Composition API - Stack Overflow"),C=e("h2",{id:"\u53C2\u8003",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53C2\u8003","aria-hidden":"true"},"#"),t(" \u53C2\u8003")],-1),V={href:"https://v3.cn.vuejs.org/guide/reactivity.html#%25E4%25BB%2580%25E4%25B9%2588%25E6%2598%25AF%25E5%2593%258D%25E5%25BA%2594%25E6%2580%25A7",target:"_blank",rel:"noopener noreferrer"},P=t("\u6DF1\u5165\u54CD\u5E94\u6027\u539F\u7406 | Vue.js"),R={href:"https://segmentfault.com/a/1190000039691166",target:"_blank",rel:"noopener noreferrer"},S=t("\u63A8\u8350 7 \u4E2A Vue2\u3001Vue3 \u6E90\u7801\u89E3\u5BC6\u5206\u6790\u7684\u91CD\u78C5\u5F00\u6E90\u9879\u76EE \u{1F44D} - SegmentFault \u601D\u5426");function w(I,B){const n=c("RouterLink"),o=c("ExternalLinkIcon");return p(),i(l,null,[h,e("nav",f,[e("ul",null,[e("li",null,[a(n,{to:"#\u8C03\u8BD5"},{default:r(()=>[v]),_:1})]),e("li",null,[a(n,{to:"#\u76EE\u5F55\u7ED3\u6784"},{default:r(()=>[g]),_:1})]),e("li",null,[a(n,{to:"#\u6A21\u5757\u5173\u7CFB"},{default:r(()=>[m]),_:1})]),e("li",null,[a(n,{to:"#createapp"},{default:r(()=>[_]),_:1})]),e("li",null,[a(n,{to:"#core-api-runtime"},{default:r(()=>[x]),_:1})]),e("li",null,[a(n,{to:"#reactive"},{default:r(()=>[k]),_:1})]),e("li",null,[a(n,{to:"#\u8BA8\u8BBA\u70B9"},{default:r(()=>[b]),_:1})]),e("li",null,[a(n,{to:"#\u53C2\u8003"},{default:r(()=>[y]),_:1})])])]),A,e("p",null,[e("a",j,[E,a(o)])]),C,e("p",null,[e("a",V,[P,a(o)]),e("a",R,[S,a(o)])])],64)}var N=s(u,[["render",w],["__file","vue3-source-code.html.vue"]]);export{N as default};
