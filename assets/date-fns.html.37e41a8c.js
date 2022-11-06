import{_ as n,e as s}from"./app.c1b26eca.js";const a={},t=s(`<h1 id="date-fns" tabindex="-1"><a class="header-anchor" href="#date-fns" aria-hidden="true">#</a> date-fns</h1><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> format <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;date-fns&#39;</span>
<span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;date-fns/locale/zh_cn&#39;</span>

<span class="token function">format</span><span class="token punctuation">(</span>ms<span class="token punctuation">,</span> <span class="token string">&#39;YYYY\u5E74MM\u6708DD\u65E5&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u661F\u671F\u51E0</span>
<span class="token function">format</span><span class="token punctuation">(</span>ms<span class="token punctuation">,</span> <span class="token string">&#39;dddd&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">locale</span><span class="token operator">:</span> zhCn <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">format</span><span class="token punctuation">(</span>ms<span class="token punctuation">,</span> <span class="token string">&#39;hh:mm&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">&#39;dayjs&#39;</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>dayjs <span class="token operator">=</span> dayjs
</code></pre></div>`,2);function p(o,e){return t}var r=n(a,[["render",p],["__file","date-fns.html.vue"]]);export{r as default};
