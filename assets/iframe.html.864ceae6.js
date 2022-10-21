import{_ as o,r as t,o as s,c,a,b as l,F as r,e,d as i}from"./app.1fa60dd9.js";const p={},u=e(`<h1 id="iframe" tabindex="-1"><a class="header-anchor" href="#iframe" aria-hidden="true">#</a> iframe</h1><ul><li>\u7236\u4E3A HTTPS\uFF0C\u5B50\u5FC5\u987B\u4E3A HTTPS</li><li>iframe \u53EF\u80FD\u8BBE\u7F6E\u9632\u76D7\u94FE\uFF0C\u8BBF\u95EE\u62A5 403\uFF0C\u9700\u8981\u6DFB\u52A0\u6CDB\u57DF\u540D</li><li>\u5D4C\u5957\u7B2C\u4E09\u65B9\u9875\u9762\u65F6\u7B80\u4FBF\u6D4B\u8BD5\uFF0C\u5728\u73B0\u6210\u9875\u9762\u63D2\u5165 DOM</li><li><code>iframe.contentDocument</code>\u4ECE\u5F00\u59CB\u5230\u9875\u9762\u8F7D\u5165\uFF0C\u4F1A\u53D8\u5316\uFF0C\u9700\u8981\u76D1\u542C<code>onload</code>\uFF0C\u8DE8\u57DF iframe \u6CA1\u6709<code>DOMContentLoaded</code>\uFF0C\u540C\u57DF\u901A\u8FC7\u8F6E\u8BE2\u53EF\u5C3D\u5FEB\u67E5\u5230<code>contentDocument</code>\u51FA\u73B0</li><li>iframe \u5168\u5C4F <ul><li>\u5D4C\u5957\u5185\u5BB9\u9700\u8981\u6307\u5B9A\u8BBE\u7F6E\u5141\u8BB8\u5168\u5C4F</li><li>\u5982\u679C\u6709\u591A\u5C42\u5D4C\u5957\uFF0C\u90FD\u9700\u8981\u8BBE\u7F6E</li></ul><div class="language-text ext-text"><pre class="language-text"><code>iframe(:src=&quot;url&quot; width=&quot;100%&quot; height=&quot;100%&quot; allowfullscreen=&quot;allowfullscreen&quot; webkitallowfullscreen=&quot;true&quot; mozallowfullscreen=&quot;true&quot; frameborder=&quot;0&quot;)

iframe {
  border-width: 0;
  vertical-align: bottom;
}
</code></pre></div></li></ul>`,2),d={href:"https://dzone.com/articles/fallback-for-blocked-iframes-a-crude-solution-with",target:"_blank",rel:"noopener noreferrer"},m=i("Fallback for Blocked iframes: A (Crude) Solution With Vue.js - DZone Web Dev"),f=e(`<ul><li>\u5224\u65AD\u5F53\u524D\u9875\u662F\u5426\u662Fiframe<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5224\u65AD\u5F53\u524D\u9875\u662F\u5426\u662Fiframe</span>
self <span class="token operator">==</span> window<span class="token punctuation">.</span>top
<span class="token comment">// \u5224\u65AD\u7236\u7A97\u53E3\u662F\u5426\u662Fiframe</span>
parent<span class="token operator">==</span>top
<span class="token comment">// similar behavior as an HTTP redirect</span>
window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;http://stackoverflow.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// similar behavior as clicking on a link</span>
window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&quot;http://stackoverflow.com&quot;</span><span class="token punctuation">;</span>
</code></pre></div></li></ul>`,1);function k(h,_){const n=t("ExternalLinkIcon");return s(),c(r,null,[u,a("p",null,[a("a",d,[m,l(n)])]),f],64)}var w=o(p,[["render",k],["__file","iframe.html.vue"]]);export{w as default};
