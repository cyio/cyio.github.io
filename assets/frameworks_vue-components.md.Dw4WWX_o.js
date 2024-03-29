import{_ as s,c as n,o as a,a4 as e}from"./chunks/framework.4aTu-Nia.js";const v=JSON.parse('{"title":"vue-components","description":"","frontmatter":{},"headers":[],"relativePath":"frameworks/vue-components.md","filePath":"frameworks/vue-components.md"}'),p={name:"frameworks/vue-components.md"},l=e(`<h1 id="vue-components" tabindex="-1">vue-components <a class="header-anchor" href="#vue-components" aria-label="Permalink to &quot;vue-components&quot;">​</a></h1><ul><li>目录结构</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;/examples/qiyun-el-ui/</span></span>
<span class="line"><span>▸ lib/</span></span>
<span class="line"><span>▸ node_modules/</span></span>
<span class="line"><span>▾ packages/</span></span>
<span class="line"><span>  ▾ qe-modal/ -- 组件</span></span>
<span class="line"><span>    ▾ src/</span></span>
<span class="line"><span>        qe-modal.vue</span></span>
<span class="line"><span>      index.js</span></span>
<span class="line"><span>    index.js</span></span>
<span class="line"><span>▸ public/</span></span>
<span class="line"><span>▾ src/ -- 用于调试</span></span>
<span class="line"><span>  ▸ assets/</span></span>
<span class="line"><span>  ▸ components/</span></span>
<span class="line"><span>  ▾ plugins/ -- 自动安装</span></span>
<span class="line"><span>      element.js</span></span>
<span class="line"><span>    App.vue</span></span>
<span class="line"><span>    main.js</span></span>
<span class="line"><span>  babel.config.js</span></span>
<span class="line"><span>  LICENSE</span></span>
<span class="line"><span>  package.json</span></span>
<span class="line"><span>  README.md</span></span>
<span class="line"><span>  vue.config.js</span></span>
<span class="line"><span>  yarn.lock</span></span></code></pre></div><ul><li>element 引用配置在 babel.config.js</li><li>在 App.vue 中引入测试</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import QeModal from &#39;../packages/qe-modal/src/qe-modal.vue&#39;</span></span></code></pre></div><ul><li>在 main.js 中引入</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &#39;./plugins/element.js&#39;</span></span>
<span class="line"><span>import &#39;element-ui/lib/theme-chalk/button.css&#39;</span></span>
<span class="line"><span>import &#39;element-ui/lib/theme-chalk/dialog.css&#39;</span></span></code></pre></div><p><a href="https://github.com/athena0304/qiyun-el-ui" target="_blank" rel="noreferrer">athena0304/qiyun-el-ui: based on element-ui</a></p>`,8),i=[l];function t(c,o,u,r,d,m){return a(),n("div",null,i)}const g=s(p,[["render",t]]);export{v as __pageData,g as default};
