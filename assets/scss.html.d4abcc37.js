import{_ as c,r as o,o as p,c as l,a as s,b as e,F as r,d as n,e as t}from"./app.0fa1b285.js";const i={},u=s("h1",{id:"scss",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#scss","aria-hidden":"true"},"#"),n(" SCSS")],-1),d={href:"https://codepen.io/cyio/pen/KrzwYv",target:"_blank",rel:"noopener noreferrer"},k=n("scss play"),h=t(`<h2 id="\u5173\u952E\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5173\u952E\u70B9" aria-hidden="true">#</a> \u5173\u952E\u70B9</h2><ul><li>vue scoped \u4E0D\u80FD\u4F7F\u7528\u5168\u5C40 mixin ?</li></ul><h2 id="extend" tabindex="-1"><a class="header-anchor" href="#extend" aria-hidden="true">#</a> extend</h2><ul><li>\u5B9E\u73B0 DRY</li></ul><div class="language-scss ext-scss"><pre class="language-scss"><code><span class="token comment">// css \u65B9\u5F0F\uFF0C\u9700\u8981\u65B0\u5EFA\u7C7B</span>
.message-shared

<span class="token comment">// \u907F\u514D\u521B\u5EFA\u591A\u4E2A\u7C7B</span>
<span class="token selector"><span class="token placeholder">%message-shared</span> </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.message </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> .message-<span class="token punctuation">;</span>
  <span class="token keyword">@extend</span> <span class="token placeholder selector">%message-shared</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="mixin" tabindex="-1"><a class="header-anchor" href="#mixin" aria-hidden="true">#</a> mixin</h2><p>\u5C5E\u6027\u540D\u8868\u8FBE\uFF1A<code>#{$name}</code></p><div class="language-scss ext-scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">color</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">#{$name}</span></span><span class="token punctuation">:</span> <span class="token variable">$value</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h1 </span><span class="token punctuation">{</span>
  <span class="token comment">// @extend .red;</span>
  <span class="token keyword">@include</span> <span class="token function">color</span><span class="token punctuation">(</span>color<span class="token punctuation">,</span> blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.red </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8),_={href:"http://athena0304.cn/element-analysis/packages/theme-chalk/src/mixins/mixins.html#mixin-scss",target:"_blank",rel:"noopener noreferrer"},m=n("mixins | Element \u6E90\u7801\u5206\u6790"),x={href:"https://www.w3cplus.com/preprocessor/sass-mixins-function-placeholder.html",target:"_blank",rel:"noopener noreferrer"},f=n("sass \u63ED\u79D8\u4E4B@mixin\uFF0C%\uFF0C@function_Preprocessor, Sass, SCSS, sass \u63ED\u79D8 \u6559\u7A0B_w3cplus"),g=s("h2",{id:"\u53D8\u91CF",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u53D8\u91CF","aria-hidden":"true"},"#"),n(" \u53D8\u91CF")],-1),v=t(`calc \u4E2D\u4F7F\u7528<div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">height: calc(100vh - #</span><span class="token punctuation">{</span>$--header-h<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,2),b={href:"https://stackoverflow.com/questions/17982111/sass-variable-in-css-calc-function",target:"_blank",rel:"noopener noreferrer"},w=n("css3 - Sass Variable in CSS calc() function - Stack Overflow");function y(S,$){const a=o("ExternalLinkIcon");return p(),l(r,null,[u,s("p",null,[s("a",d,[k,e(a)])]),h,s("p",null,[s("a",_,[m,e(a)]),s("a",x,[f,e(a)])]),g,s("ul",null,[s("li",null,[v,s("a",b,[w,e(a)])])])],64)}var C=c(i,[["render",y],["__file","scss.html.vue"]]);export{C as default};
