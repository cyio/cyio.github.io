import{_ as a,c as s,o as n,a4 as p}from"./chunks/framework.DzOtv0XR.js";const u=JSON.parse('{"title":"微性能","description":"","frontmatter":{},"headers":[],"relativePath":"books/你不知道的JavsScrpit.md","filePath":"books/你不知道的JavsScrpit.md"}'),e={name:"books/你不知道的JavsScrpit.md"},t=p(`<h1 id="微性能" tabindex="-1">微性能 <a class="header-anchor" href="#微性能" aria-label="Permalink to &quot;微性能&quot;">​</a></h1><p>过早优化</p><p>优化是否值得、优化时机，判断代码是否在关键路径</p><p>非关键路径，几乎总是不值得</p><p>关键路径，不要吝啬</p><p>循环时缓存数组长度这种微优化，可能不合适，JS 引擎可能会处理</p><h1 id="尾调用优化" tabindex="-1">尾调用优化 <a class="header-anchor" href="#尾调用优化" aria-label="Permalink to &quot;尾调用优化&quot;">​</a></h1><p>尾调用，最后执行只是一个函数，ES6 对引擎有优化要求</p><p>写递归时，不用担心无限资源占用</p><h1 id="协作-竞态-多任务" tabindex="-1">协作&amp;竞态&amp;多任务 <a class="header-anchor" href="#协作-竞态-多任务" aria-label="Permalink to &quot;协作&amp;竞态&amp;多任务&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 依赖多个条件，gate</span></span>
<span class="line"><span>if (a &amp; b)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 仅第一个获胜，race</span></span>
<span class="line"><span>if (!a)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 协程</span></span>
<span class="line"><span>切分任务 splice &amp; settimeout</span></span></code></pre></div>`,11),i=[t];function o(c,l,r,_,d,h){return n(),s("div",null,i)}const b=a(e,[["render",o]]);export{u as __pageData,b as default};
