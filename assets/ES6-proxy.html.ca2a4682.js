import{_ as n,e as s}from"./app.1c7dcab3.js";const a={},t=s(`<h1 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> Proxy</h1><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">message1</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">message2</span><span class="token operator">:</span> <span class="token string">&quot;everyone&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> handler3 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prop <span class="token operator">===</span> <span class="token string">&quot;message2&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> proxy3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> handler3<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy3<span class="token punctuation">.</span>message1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// hello</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy3<span class="token punctuation">.</span>message2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// world</span>
</code></pre></div><p>\u4F7F\u7528\u573A\u666F\uFF1A</p><ul><li>\u6570\u636E\u6821\u9A8C set</li><li>key \u4E0D\u5B58\u5728\u65F6\uFF0C\u63D0\u4F9B\u9ED8\u8BA4\u503C</li></ul>`,4);function p(o,e){return t}var l=n(a,[["render",p],["__file","ES6-proxy.html.vue"]]);export{l as default};
