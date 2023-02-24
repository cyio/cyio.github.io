import{_ as s,e as n}from"./app.fe82fd74.js";const a={},t=n(`<h2 id="query" tabindex="-1"><a class="header-anchor" href="#query" aria-hidden="true">#</a> query</h2><p>URLSearchParams IE \u4E0D\u652F\u6301</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token string">&#39;?id=1&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// var params = new URLSearchParams(window.location.search);</span>

d<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="hash-query" tabindex="-1"><a class="header-anchor" href="#hash-query" aria-hidden="true">#</a> hash query</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">#new-hash?id=1</span><span class="token template-punctuation string">\`</span></span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\?.*</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">let</span> res <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>hash<span class="token punctuation">)</span>
res <span class="token operator">=</span> res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token comment">// &#39;?id=1&#39;</span>

<span class="token comment">// split</span>
<span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">#new-hash?id=1</span><span class="token template-punctuation string">\`</span></span>
<span class="token keyword">const</span> query <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> queryParams <span class="token operator">=</span> qs<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>queryParams<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="qs" tabindex="-1"><a class="header-anchor" href="#qs" aria-hidden="true">#</a> qs</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> queryParams <span class="token operator">=</span> qs<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>queryParams<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,7);function p(e,o){return t}var r=s(a,[["render",p],["__file","url-parse.html.vue"]]);export{r as default};
