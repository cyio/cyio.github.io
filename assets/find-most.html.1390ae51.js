import{_ as n,e as s}from"./app.ea0e2b7a.js";const a={},p=s(`<h1 id="\u627E\u51FA\u51FA\u73B0\u6B21\u6570\u6700\u591A\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u627E\u51FA\u51FA\u73B0\u6B21\u6570\u6700\u591A\u5143\u7D20" aria-hidden="true">#</a> \u627E\u51FA\u51FA\u73B0\u6B21\u6570\u6700\u591A\u5143\u7D20</h1><ol><li>\u6B21\u6570\uFF0C\u7528 map</li><li>\u53EF\u80FD\u6709\u591A\u4E2A\u5E76\u5217\uFF0C\u8F93\u51FA\u6570\u7EC4</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">findMost</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> count<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> maxCount <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> count<span class="token punctuation">]</span> <span class="token keyword">of</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> maxCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      maxCount <span class="token operator">=</span> count
      ans <span class="token operator">=</span> <span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token comment">// \u5B58\u5728\u65B0\u7684\u6700\u5927\u503C\uFF0C\u91CD\u5199\u7ED3\u679C\u6570\u7EC4</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> maxCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ans<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getMost</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,3);function t(o,e){return p}var l=n(a,[["render",t],["__file","find-most.html.vue"]]);export{l as default};