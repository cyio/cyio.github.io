import{_ as a,r as e,o as t,c as p,a as n,b as c,F as l,e as o,d as r}from"./app.65749045.js";const i={},u=o(`<h1 id="\u4E09\u5217\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u4E09\u5217\u5E03\u5C40" aria-hidden="true">#</a> \u4E09\u5217\u5E03\u5C40</h1><div class="language-pug ext-pug line-numbers-mode"><pre class="language-pug"><code><span class="token tag"><span class="token attr-class">.main</span></span>
	<span class="token tag"><span class="token attr-class">.left</span></span> <span class="token plain-text">left</span>
	<span class="token tag"><span class="token attr-class">.center</span></span> <span class="token plain-text">center</span>
	<span class="token tag"><span class="token attr-class">.right</span></span> <span class="token plain-text">right</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.main</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,3),k={href:"https://codepen.io/cyio/pen/wvzzzdQ",target:"_blank",rel:"noopener noreferrer"},d=r("three column layout - flex");function b(m,h){const s=e("ExternalLinkIcon");return t(),p(l,null,[u,n("p",null,[n("a",k,[d,c(s)])])],64)}var _=a(i,[["render",b],["__file","three-columns-layout.html.vue"]]);export{_ as default};
