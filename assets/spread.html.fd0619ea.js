import{_ as n,e as s}from"./app.818741d3.js";const a={},e=s(`<h1 id="\u6269\u5C55\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55\u7B26" aria-hidden="true">#</a> \u6269\u5C55\u7B26</h1><ul><li>\u6570\u636E\u7C7B\u578B\u4E0D\u4E00\u5B9A\u6709\u6548\uFF0C\u4F7F\u7528\u903B\u8F91\u5224\u65AD\uFF0C\u5426\u5219\u4F1A\u62A5\u9519</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6570\u7EC4\u4E0D\u4E00\u5B9A\u6709\u6548</span>

<span class="token keyword">let</span> b
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>b <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment">// \u5BF9\u8C61\u4E0D\u4E00\u5B9A\u6709\u6548</span>
<span class="token comment">// \`{...false}\` (and undefined/null/etc) is just \`{}\`.</span>
<span class="token keyword">const</span> shipping <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>defaultAddress<span class="token punctuation">,</span>
  <span class="token operator">...</span>person <span class="token operator">&amp;&amp;</span> person<span class="token punctuation">.</span>address <span class="token comment">// { ...false } == {}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,3);function p(t,o){return e}var l=n(a,[["render",p],["__file","spread.html.vue"]]);export{l as default};
