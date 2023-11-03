import{_ as n,e as s}from"./app.bacf2a9d.js";const a={},p=s(`<h1 id="\u8F93\u5165\u6570\u5B57-\u627E\u5BF9\u5E94\u5B57\u6BCD" tabindex="-1"><a class="header-anchor" href="#\u8F93\u5165\u6570\u5B57-\u627E\u5BF9\u5E94\u5B57\u6BCD" aria-hidden="true">#</a> \u8F93\u5165\u6570\u5B57\uFF0C\u627E\u5BF9\u5E94\u5B57\u6BCD</h1><p>\u5982: 1 a 2 b 26 z 27 aa</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>  <span class="token comment">// \u6BCF 26 \u8FDB\u4E00\u4F4D\uFF0C\u4E3A a</span>
  <span class="token keyword">function</span> <span class="token function">mapNumToLetters</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">let</span> remainder <span class="token operator">=</span> num <span class="token operator">%</span> <span class="token number">26</span>
    <span class="token keyword">let</span> shang <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>num <span class="token operator">/</span> <span class="token number">26</span><span class="token punctuation">)</span> <span class="token comment">// \u5546\u6216\u4F4D\u6570</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>remainder <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      remainder <span class="token operator">=</span> <span class="token number">26</span>
      shang <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>shang <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      str <span class="token operator">+=</span> <span class="token string">&#39;a&#39;</span>
      shang <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    str <span class="token operator">+=</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>remainder <span class="token operator">+</span> <span class="token number">96</span><span class="token punctuation">)</span> <span class="token comment">// unicode \u67E5\u627E</span>

    <span class="token keyword">return</span> str
  <span class="token punctuation">}</span>
</code></pre></div>`,3);function t(e,o){return p}var r=n(a,[["render",t],["__file","map-num-to-letters.html.vue"]]);export{r as default};
