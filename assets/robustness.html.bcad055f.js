import{_ as n,e as s}from"./app.d39319ce.js";const a={},t=s(`<h1 id="\u5065\u72B6\u6027" tabindex="-1"><a class="header-anchor" href="#\u5065\u72B6\u6027" aria-hidden="true">#</a> \u5065\u72B6\u6027</h1><h2 id="\u9700\u8981\u5B89\u5168\u53D6\u51FA\u503C-\u907F\u514D\u5F71\u54CD\u4E3B\u8981\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u9700\u8981\u5B89\u5168\u53D6\u51FA\u503C-\u907F\u514D\u5F71\u54CD\u4E3B\u8981\u529F\u80FD" aria-hidden="true">#</a> \u9700\u8981\u5B89\u5168\u53D6\u51FA\u503C\uFF0C\u907F\u514D\u5F71\u54CD\u4E3B\u8981\u529F\u80FD</h2><p>\u6BD4\u5982\uFF0C\u63A5\u53E3 getConfig \u8FD4\u56DE</p><div class="language-text ext-text"><pre class="language-text"><code>{
  code: 0,
  data: {
    ids: []
}
</code></pre></div><p>\u7236\u7EC4\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// child(:config=&quot;config&quot;)</span>

<span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p>\u5B50\u7EC4\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// props config</span>

<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">hasId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> ids <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config <span class="token comment">// \u5982\u679C\u63A5\u53E3\u83B7\u53D6\u5931\u8D25\uFF0Cconfig \u9ED8\u8BA4\u4E3A {}\uFF0Cids \u4E3A undefined</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>ids <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token keyword">return</span> ids<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8);function p(e,o){return t}var i=n(a,[["render",p],["__file","robustness.html.vue"]]);export{i as default};