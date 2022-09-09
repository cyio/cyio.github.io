import{_ as n,e as s}from"./app.fcfcaf2d.js";const a={},p=s(`<h1 id="\u547D\u540D\u98CE\u683C\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u98CE\u683C\u8F6C\u6362" aria-hidden="true">#</a> \u547D\u540D\u98CE\u683C\u8F6C\u6362</h1><p>\u5B9E\u73B0\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5C06\u4F20\u5165\u5BF9\u8C61\u7684\u4E0B\u5212\u7EBF\u547D\u540D\u65B9\u5F0F\u5168\u90E8\u6362\u4E3A\u9A7C\u5CF0\u5F0F(\u8003\u8651\u9012\u5F52\u7684\u573A\u666F)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token comment">// before</span>
  <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">first_name</span><span class="token operator">:</span> <span class="token string">&#39;chen&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// after</span>
  <span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;chen&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u9012\u5F52</span>
  <span class="token comment">// for of</span>
  <span class="token comment">// key replace /_([a-z])/</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">convert</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> newKey <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">_([a-z])</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">p1<span class="token punctuation">,</span> p2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span>
        <span class="token keyword">return</span> p2<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> Object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">[</span>newKey<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">convert</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">[</span>newKey<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token function">convert</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,3);function e(t,o){return p}var l=n(a,[["render",e],["__file","object-key-to-camel-case.html.vue"]]);export{l as default};
