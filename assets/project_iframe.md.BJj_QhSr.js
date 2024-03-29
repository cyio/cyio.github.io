import{_ as a,c as e,o as r,a4 as o}from"./chunks/framework.DzOtv0XR.js";const u=JSON.parse('{"title":"iframe","description":"","frontmatter":{},"headers":[],"relativePath":"project/iframe.md","filePath":"project/iframe.md"}'),t={name:"project/iframe.md"},i=o(`<h1 id="iframe" tabindex="-1">iframe <a class="header-anchor" href="#iframe" aria-label="Permalink to &quot;iframe&quot;">​</a></h1><ul><li>协议必须相同：父为 HTTPS，子必须为 HTTPS</li><li>iframe 可能设置防盗链，访问报 403，需要添加泛域名</li></ul><h2 id="iframe-全屏" tabindex="-1">iframe 全屏 <a class="header-anchor" href="#iframe-全屏" aria-label="Permalink to &quot;iframe 全屏&quot;">​</a></h2><ul><li>嵌套内容需要指定设置允许全屏</li><li>如果有多层嵌套，都需要设置</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>iframe(:src=&quot;url&quot; width=&quot;100%&quot; height=&quot;100%&quot; allowfullscreen=&quot;allowfullscreen&quot; webkitallowfullscreen=&quot;true&quot; mozallowfullscreen=&quot;true&quot; frameborder=&quot;0&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>iframe {</span></span>
<span class="line"><span>  border-width: 0;</span></span>
<span class="line"><span>  vertical-align: bottom;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><a href="https://dzone.com/articles/fallback-for-blocked-iframes-a-crude-solution-with" target="_blank" rel="noreferrer">Fallback for Blocked iframes: A (Crude) Solution With Vue.js - DZone Web Dev</a></p><h2 id="判断当前页是否是iframe" tabindex="-1">判断当前页是否是iframe <a class="header-anchor" href="#判断当前页是否是iframe" aria-label="Permalink to &quot;判断当前页是否是iframe&quot;">​</a></h2><pre><code>\`\`\`js
// 判断当前页是否是iframe
self == window.top
// 判断父窗口是否是iframe
parent==top
// similar behavior as an HTTP redirect
window.location.replace(&quot;http://stackoverflow.com&quot;);

// similar behavior as clicking on a link
window.location.href = &quot;http://stackoverflow.com&quot;;
\`\`\`
</code></pre><p><a href="https://www.jianshu.com/p/b09333442ded" target="_blank" rel="noreferrer">iframe 错误检测及优化方案 - 简书</a></p><h2 id="iframe-异常检测" tabindex="-1">iframe 异常检测 <a class="header-anchor" href="#iframe-异常检测" aria-label="Permalink to &quot;iframe 异常检测&quot;">​</a></h2><p>跨域时，父页面无法监听</p><h2 id="iframe-是否加载完成" tabindex="-1">iframe 是否加载完成 <a class="header-anchor" href="#iframe-是否加载完成" aria-label="Permalink to &quot;iframe 是否加载完成&quot;">​</a></h2><p><code>iframe.contentDocument</code>从开始到页面载入，会变化，需要监听<code>onload</code>，跨域 iframe 没有<code>DOMContentLoaded</code>，同域通过轮询可尽快查到<code>contentDocument</code>出现</p><h2 id="调试" tabindex="-1">调试 <a class="header-anchor" href="#调试" aria-label="Permalink to &quot;调试&quot;">​</a></h2><p>嵌套第三方页面时简便测试，在现成页面插入 DOM</p>`,15),n=[i];function l(s,c,p,d,f,m){return r(),e("div",null,n)}const q=a(t,[["render",l]]);export{u as __pageData,q as default};
