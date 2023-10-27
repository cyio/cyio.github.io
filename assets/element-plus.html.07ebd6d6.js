import{_ as n,e as t}from"./app.099721c4.js";const a={},e=t(`<h2 id="\u7236\u7EC4\u4EF6\u5982\u4F55\u4F7F\u7528-defineexpose-\u66B4\u9732\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EC4\u4EF6\u5982\u4F55\u4F7F\u7528-defineexpose-\u66B4\u9732\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u7236\u7EC4\u4EF6\u5982\u4F55\u4F7F\u7528 defineExpose \u66B4\u9732\u7684\u5C5E\u6027</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">changeButtonClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4FEE\u6539\u5B50\u7EC4\u4EF6\u66B4\u9732\u7684\u5C5E\u6027</span>
  buttonRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>buttonClass <span class="token operator">=</span> <span class="token string">&#39;new-class&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6E32\u67D3\u6027\u80FD\uFF0C\u4E3B\u8981\u53D1\u751F\u5728 mount -&gt; patch\uFF0C\u4EE5 slide \u4E3A\u4F8B\uFF0C\u7528\u4E86\u5F88\u591A computed\uFF0C\u81EA\u5DF1\u5B9E\u73B0\u53EA\u7528 1 \u4E2A</p><p>\u9875\u9762\u7528\u4E86\u51E0\u5341\u4E2A\u7EC4\u4EF6</p><div class="language-text ext-text"><pre class="language-text"><code>\u5B9E\u4F8B\u5316\u7EC4\u4EF6
	Render \u51FD\u6570\u6267\u884C
		\u521B\u5EFA\u865A\u62DF DOM
			\u66F4\u65B0\u865A\u62DF DOM
				Patch\uFF08\u8865\u4E01\uFF09\u6BD4\u8F83\uFF0C\u627E\u51FA\u53D8\u66F4
					\u6302\u8F7D\u5230 DOM
						\u751F\u547D\u5468\u671F\u94A9\u5B50\u6267\u884C mounted
</code></pre></div>`,5);function s(c,p){return e}var l=n(a,[["render",s],["__file","element-plus.html.vue"]]);export{l as default};
