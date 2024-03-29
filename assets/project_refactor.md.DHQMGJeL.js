import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.DzOtv0XR.js";const m=JSON.parse('{"title":"重构","description":"","frontmatter":{},"headers":[],"relativePath":"project/refactor.md","filePath":"project/refactor.md"}'),e={name:"project/refactor.md"},t=p(`<h1 id="重构" tabindex="-1">重构 <a class="header-anchor" href="#重构" aria-label="Permalink to &quot;重构&quot;">​</a></h1><ul><li>嵌套的条件分支难以阅读和维护，解决方法是：外层 if 表达示反转，进入条件分支后立即 return 退出</li></ul><h2 id="重复代码" tabindex="-1">重复代码 <a class="header-anchor" href="#重复代码" aria-label="Permalink to &quot;重复代码&quot;">​</a></h2><p>使用 jscpd 检测</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    &quot;duplication-check&quot;: &quot;jscpd --config .cpd.yaml&quot;,</span></span></code></pre></div><p><code>.cpd.yaml</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>languages:</span></span>
<span class="line"><span>  - javascript</span></span>
<span class="line"><span>  - jsx</span></span>
<span class="line"><span>  - css</span></span>
<span class="line"><span>  - less</span></span>
<span class="line"><span>  - htmlmixed</span></span>
<span class="line"><span>  - vue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exclude:</span></span>
<span class="line"><span>  - &quot;src/assets/lib/*.js&quot;</span></span>
<span class="line"><span>  - &quot;src/mock/**/*.js&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>files:</span></span>
<span class="line"><span>  - &quot;src/**/*&quot;</span></span>
<span class="line"><span>reporter: json</span></span></code></pre></div>`,7),c=[t];function l(o,i,r,d,u,h){return n(),a("div",null,c)}const f=s(e,[["render",l]]);export{m as __pageData,f as default};
