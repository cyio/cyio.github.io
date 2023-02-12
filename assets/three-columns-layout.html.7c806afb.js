import{_ as t,r as e,o as p,c as o,a as n,b as c,F as l,e as r,d as s}from"./app.aa72308f.js";const u={},i=r(`<h1 id="\u4E09\u5217\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u4E09\u5217\u5E03\u5C40" aria-hidden="true">#</a> \u4E09\u5217\u5E03\u5C40</h1><div class="language-pug ext-pug"><pre class="language-pug"><code><span class="token tag"><span class="token attr-class">.main</span></span>
	<span class="token tag"><span class="token attr-class">.left</span></span> <span class="token plain-text">left</span>
	<span class="token tag"><span class="token attr-class">.center</span></span> <span class="token plain-text">center</span>
	<span class="token tag"><span class="token attr-class">.right</span></span> <span class="token plain-text">right</span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.main</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
	<span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span> // notice 2
<span class="token punctuation">}</span>
<span class="token selector">.left, .right</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span> gray<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.center</span> <span class="token punctuation">{</span>
	<span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> // notice 1
<span class="token punctuation">}</span>
</code></pre></div>`,3),k={href:"https://codepen.io/cyio/pen/wvzzzdQ",target:"_blank",rel:"noopener noreferrer"},d=s("three column layout - flex"),h=n("p",null,[n("code",null,"flex: 1"),s("\u662F\u7F29\u5199\uFF0C\u76F8\u5F53\u4E8E flex-grow")],-1),_=n("p",null,"3 \u4E2A\u503C\u7F29\u5199\uFF0C\u7B2C\u4E00\u4E2A\u503C\u56FA\u5B9A\u4E3A grow",-1),g=n("p",null,"\u7B2C\u4E8C\u4E2A\u503C\uFF0C\u65E0\u5355\u4F4D\u4E3A shrink\uFF0C\u6709\u5355\u4F4D\u4E3A basis",-1);function f(x,m){const a=e("ExternalLinkIcon");return p(),o(l,null,[i,n("p",null,[n("a",k,[d,c(a)])]),h,_,g],64)}var v=t(u,[["render",f],["__file","three-columns-layout.html.vue"]]);export{v as default};
