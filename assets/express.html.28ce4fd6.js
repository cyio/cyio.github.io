import{_ as n,e as s}from"./app.9f2decfc.js";const a={},t=s(`<h1 id="express" tabindex="-1"><a class="header-anchor" href="#express" aria-hidden="true">#</a> express</h1><ul><li>\u4E24\u79CD\u63D0\u4F9B html \u6587\u4EF6\u8BBF\u95EE\u7684\u65B9\u5F0F</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  
  <span class="token comment">// response.send(&#39;Hello from Express!&#39;)</span>
  res<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&#39;/index.html&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,3);function p(e,o){return t}var u=n(a,[["render",p],["__file","express.html.vue"]]);export{u as default};