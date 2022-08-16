import{_ as n,e as a}from"./app.9f2decfc.js";const s={},t=a(`<h1 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceOf</h1><p>\u5224\u65AD\u5B9E\u4F8B\u6D3E\u751F\u5173\u7CFB</p><p>\u8BED\u6CD5\uFF1Aobj instanceof constructor</p><p>\u539F\u7406\uFF1Aobj \u7684\u539F\u578B\u94FE\u4E0A\uFF0C\u662F\u5426\u5B58\u5728 constructor \u7684 prototype</p><p>\u6CE8\u610F\u70B9\uFF1A\u4E0D\u60F3\u6C61\u67D3 obj\uFF0C\u7528 Object.create</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>  <span class="token comment">// walk obj __proto__ </span>
  <span class="token keyword">function</span> <span class="token function">instanceOf</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> _obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>_obj<span class="token punctuation">.</span>__proto__ <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>_obj<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> fn<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
      _obj <span class="token operator">=</span> _obj<span class="token punctuation">.</span>__proto__
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
</code></pre></div>`,6);function o(p,e){return t}var u=n(s,[["render",o],["__file","instance-of.html.vue"]]);export{u as default};
