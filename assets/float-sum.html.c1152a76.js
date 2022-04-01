import{_ as n,e as s}from"./app.818741d3.js";const a={},p=s(`<h1 id="\u5199\u4E00\u4E2A\u5904\u7406\u52A0\u6CD5\u53EF\u80FD\u4EA7\u751F\u7CBE\u5EA6\u7684\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5199\u4E00\u4E2A\u5904\u7406\u52A0\u6CD5\u53EF\u80FD\u4EA7\u751F\u7CBE\u5EA6\u7684\u51FD\u6570" aria-hidden="true">#</a> \u5199\u4E00\u4E2A\u5904\u7406\u52A0\u6CD5\u53EF\u80FD\u4EA7\u751F\u7CBE\u5EA6\u7684\u51FD\u6570</h1><ul><li>\u5206\u522B\u4E58\u4EE5\u4E00\u5B9A\u500D\u6570\u76F8\u52A0\uFF0C\u518D\u4EE5\u500D\u6570\u9664\u6389</li><li>\u8BA1\u7B97\u500D\u6570\uFF0C\u5C0F\u6570\u70B9\u540E\u7684\u4F4D\u6570</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token comment">// 0.1 + 0.2 = 0.3</span>
  <span class="token keyword">function</span> <span class="token function">getTimes</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">?.</span>length <span class="token operator">||</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">floatSum</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> times <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">getTimes</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getTimes</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> by <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">**</span> times
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">*</span> by <span class="token operator">+</span> y <span class="token operator">*</span> by<span class="token punctuation">)</span> <span class="token operator">/</span> by
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>
    <span class="token keyword">return</span> sum
  <span class="token punctuation">}</span>

  <span class="token function">floatSum</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">)</span>
  <span class="token function">floatSum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0.12</span><span class="token punctuation">)</span>
  <span class="token comment">// 0.01 + 0.000000002</span>
  <span class="token comment">// output: 0.010000002000000001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,3);function t(e,o){return p}var l=n(a,[["render",t],["__file","float-sum.html.vue"]]);export{l as default};
