import{_ as n,e as s}from"./app.7ba70c05.js";const a={},t=s(`<h2 id="\u6700\u5927\u516C\u7EA6\u6570" tabindex="-1"><a class="header-anchor" href="#\u6700\u5927\u516C\u7EA6\u6570" aria-hidden="true">#</a> \u6700\u5927\u516C\u7EA6\u6570</h2><p>\u6B27\u51E0\u91CC\u5FB7\u7B97\u6CD5\uFF0C\u4E5F\u79F0\u4E3A\u8F97\u8F6C\u76F8\u9664\u6CD5\uFF0C\u9012\u5F52</p><ol><li><p>\u5982\u679C\u4E24\u4E2A\u6574\u6570 a \u548C b \u4E2D\u7684\u4E00\u4E2A\u4E3A0\uFF0C\u90A3\u4E48\u5B83\u4EEC\u7684\u6700\u5927\u516C\u7EA6\u6570\u662F\u53E6\u4E00\u4E2A\u975E\u96F6\u6574\u6570\u3002\u4F8B\u5982\uFF0CGCD(0, 8) = 8\u3002</p></li><li><p>\u5426\u5219\uFF0C\u4F7F\u7528\u8F97\u8F6C\u76F8\u9664\u6CD5\u3002\u5047\u8BBE a &gt; b\uFF0C\u53EF\u4EE5\u5C06 a \u9664\u4EE5 b \u5F97\u5230\u4F59\u6570 r\u3002\u7136\u540E\uFF0C\u5C06 b \u66FF\u6362\u4E3A\u539F\u6765\u7684 a\uFF0C\u5C06 r \u66FF\u6362\u4E3A\u539F\u6765\u7684 b\uFF0C\u5E76\u91CD\u590D\u6B65\u9AA4 1 \u76F4\u5230 r \u53D8\u4E3A0\u3002\u6B64\u65F6\uFF0Cb \u5C31\u662F\u6700\u5927\u516C\u7EA6\u6570\u3002</p></li></ol><div class="language-text ext-text"><pre class="language-text"><code>// 48 18

// 18 12

// 12 6

// 6 0

// 6
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">findGCD</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">findGCD</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> a <span class="token operator">%</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F8B\u5982\uFF0C\u8BA1\u7B97 48 \u548C 18 \u7684\u6700\u5927\u516C\u7EA6\u6570</span>
<span class="token keyword">const</span> gcd <span class="token operator">=</span> <span class="token function">findGCD</span><span class="token punctuation">(</span><span class="token number">48</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6700\u5927\u516C\u7EA6\u6570\u662F\uFF1A&quot;</span> <span class="token operator">+</span> gcd<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,5);function p(o,e){return t}var u=n(a,[["render",p],["__file","greatest-common-divisor.html.vue"]]);export{u as default};
