import{_ as n,e as s}from"./app.51f45081.js";const a={},p=s(`<h1 id="\u76F8\u90BB\u5143\u7D20\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u76F8\u90BB\u5143\u7D20\u53BB\u91CD" aria-hidden="true">#</a> \u76F8\u90BB\u5143\u7D20\u53BB\u91CD</h1><ul><li>\u4E0D\u76F8\u90BB\u7684\u8981\u4FDD\u7559</li><li>\u501F\u52A9\u4E2D\u95F4\u6570\u7EC4</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>  <span class="token comment">// [2, 6, 6, 3, 6, 7]</span>
  <span class="token comment">// 2 6 x 3</span>

  <span class="token keyword">function</span> <span class="token function">uniqAdjoin</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> res<span class="token punctuation">[</span>res<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      i <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>

  <span class="token function">uniqAdjoin</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div>`,3);function t(o,e){return p}var u=n(a,[["render",t],["__file","uniq-adjoin.html.vue"]]);export{u as default};
