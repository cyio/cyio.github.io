import{_ as n,e as s}from"./app.818741d3.js";const a={},p=s(`<h1 id="express" tabindex="-1"><a class="header-anchor" href="#express" aria-hidden="true">#</a> express</h1><ul><li>\u4E24\u79CD\u63D0\u4F9B html \u6587\u4EF6\u8BBF\u95EE\u7684\u65B9\u5F0F</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  
  <span class="token comment">// response.send(&#39;Hello from Express!&#39;)</span>
  res<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&#39;/index.html&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,3);function e(t,c){return p}var l=n(a,[["render",e],["__file","express.html.vue"]]);export{l as default};
