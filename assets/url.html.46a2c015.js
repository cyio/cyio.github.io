import{_ as n,o as s,c as a,e as t}from"./app.9f2decfc.js";const p={},o={class:"language-javascript ext-js"},c=t(`<pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">getUrlRelativePath</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arrUrl <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;//&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> start <span class="token operator">=</span> arrUrl<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> relUrl <span class="token operator">=</span> arrUrl<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// stop\u7701\u7565\uFF0C\u622A\u53D6\u4ECEstart\u5F00\u59CB\u5230\u7ED3\u5C3E\u7684\u6240\u6709\u5B57\u7B26</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>relUrl<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// eslint-disable-next-line prefer-destructuring</span>
    relUrl <span class="token operator">=</span> relUrl<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> relUrl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>`,1),e=[c];function l(u,r){return s(),a("div",o,e)}var i=n(p,[["render",l],["__file","url.html.vue"]]);export{i as default};