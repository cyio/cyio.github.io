import{_ as n,r as i,o as l,c,a as e,b as o,F as d,e as t,d as a}from"./app.ade76af1.js";const s={},h=t(`<h1 id="iframe" tabindex="-1"><a class="header-anchor" href="#iframe" aria-hidden="true">#</a> iframe</h1><ul><li>\u534F\u8BAE\u5FC5\u987B\u76F8\u540C\uFF1A\u7236\u4E3A HTTPS\uFF0C\u5B50\u5FC5\u987B\u4E3A HTTPS</li><li>iframe \u53EF\u80FD\u8BBE\u7F6E\u9632\u76D7\u94FE\uFF0C\u8BBF\u95EE\u62A5 403\uFF0C\u9700\u8981\u6DFB\u52A0\u6CDB\u57DF\u540D</li></ul><h2 id="iframe-\u5168\u5C4F" tabindex="-1"><a class="header-anchor" href="#iframe-\u5168\u5C4F" aria-hidden="true">#</a> iframe \u5168\u5C4F</h2><ul><li>\u5D4C\u5957\u5185\u5BB9\u9700\u8981\u6307\u5B9A\u8BBE\u7F6E\u5141\u8BB8\u5168\u5C4F</li><li>\u5982\u679C\u6709\u591A\u5C42\u5D4C\u5957\uFF0C\u90FD\u9700\u8981\u8BBE\u7F6E</li></ul><div class="language-text ext-text"><pre class="language-text"><code>iframe(:src=&quot;url&quot; width=&quot;100%&quot; height=&quot;100%&quot; allowfullscreen=&quot;allowfullscreen&quot; webkitallowfullscreen=&quot;true&quot; mozallowfullscreen=&quot;true&quot; frameborder=&quot;0&quot;)

iframe {
  border-width: 0;
  vertical-align: bottom;
}
</code></pre></div>`,5),f={href:"https://dzone.com/articles/fallback-for-blocked-iframes-a-crude-solution-with",target:"_blank",rel:"noopener noreferrer"},u=a("Fallback for Blocked iframes: A (Crude) Solution With Vue.js - DZone Web Dev"),m=e("h2",{id:"\u5224\u65AD\u5F53\u524D\u9875\u662F\u5426\u662Fiframe",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5224\u65AD\u5F53\u524D\u9875\u662F\u5426\u662Fiframe","aria-hidden":"true"},"#"),a(" \u5224\u65AD\u5F53\u524D\u9875\u662F\u5426\u662Fiframe")],-1),_=e("pre",null,[e("code",null,`\`\`\`js
// \u5224\u65AD\u5F53\u524D\u9875\u662F\u5426\u662Fiframe
self == window.top
// \u5224\u65AD\u7236\u7A97\u53E3\u662F\u5426\u662Fiframe
parent==top
// similar behavior as an HTTP redirect
window.location.replace("http://stackoverflow.com");

// similar behavior as clicking on a link
window.location.href = "http://stackoverflow.com";
\`\`\`
`)],-1),p={href:"https://www.jianshu.com/p/b09333442ded",target:"_blank",rel:"noopener noreferrer"},b=a("iframe \u9519\u8BEF\u68C0\u6D4B\u53CA\u4F18\u5316\u65B9\u6848 - \u7B80\u4E66"),w=t('<h2 id="iframe-\u5F02\u5E38\u68C0\u6D4B" tabindex="-1"><a class="header-anchor" href="#iframe-\u5F02\u5E38\u68C0\u6D4B" aria-hidden="true">#</a> iframe \u5F02\u5E38\u68C0\u6D4B</h2><p>\u8DE8\u57DF\u65F6\uFF0C\u7236\u9875\u9762\u65E0\u6CD5\u76D1\u542C</p><h2 id="iframe-\u662F\u5426\u52A0\u8F7D\u5B8C\u6210" tabindex="-1"><a class="header-anchor" href="#iframe-\u662F\u5426\u52A0\u8F7D\u5B8C\u6210" aria-hidden="true">#</a> iframe \u662F\u5426\u52A0\u8F7D\u5B8C\u6210</h2><p><code>iframe.contentDocument</code>\u4ECE\u5F00\u59CB\u5230\u9875\u9762\u8F7D\u5165\uFF0C\u4F1A\u53D8\u5316\uFF0C\u9700\u8981\u76D1\u542C<code>onload</code>\uFF0C\u8DE8\u57DF iframe \u6CA1\u6709<code>DOMContentLoaded</code>\uFF0C\u540C\u57DF\u901A\u8FC7\u8F6E\u8BE2\u53EF\u5C3D\u5FEB\u67E5\u5230<code>contentDocument</code>\u51FA\u73B0</p><h2 id="\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u8C03\u8BD5" aria-hidden="true">#</a> \u8C03\u8BD5</h2><p>\u5D4C\u5957\u7B2C\u4E09\u65B9\u9875\u9762\u65F6\u7B80\u4FBF\u6D4B\u8BD5\uFF0C\u5728\u73B0\u6210\u9875\u9762\u63D2\u5165 DOM</p>',6);function x(k,q){const r=i("ExternalLinkIcon");return l(),c(d,null,[h,e("p",null,[e("a",f,[u,o(r)])]),m,_,e("p",null,[e("a",p,[b,o(r)])]),w],64)}var g=n(s,[["render",x],["__file","iframe.html.vue"]]);export{g as default};
