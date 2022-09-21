import{_ as n,e as s}from"./app.d39319ce.js";const a={},t=s(`<h1 id="indexof" tabindex="-1"><a class="header-anchor" href="#indexof" aria-hidden="true">#</a> indexOf</h1><p>\u67E5\u627E\u5B57\u7B26\u4E32\uFF0C\u4E0D\u662F\u67E5\u5355\u4E2A\u5B57\u6BCD</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>  <span class="token comment">// &#39;abbbc&#39; &#39;bc&#39;</span>
  <span class="token comment">// str.match(regexp) return [] with property: index/input</span>
  <span class="token class-name">String</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myIndexOf</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span>
    <span class="token keyword">return</span> result <span class="token operator">?</span> result<span class="token punctuation">.</span>index <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;abbbc&#39;</span><span class="token punctuation">.</span><span class="token function">myIndexOf</span><span class="token punctuation">(</span><span class="token string">&#39;bc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div>`,3);function p(e,o){return t}var r=n(a,[["render",p],["__file","index-of.html.vue"]]);export{r as default};