import{_ as n,e as s}from"./app.818741d3.js";const a={},p=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> iconv <span class="token keyword">from</span> <span class="token string">&#39;iconv-lite&#39;</span>

axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> ctype <span class="token operator">=</span> response<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	response<span class="token punctuation">.</span>data <span class="token operator">=</span> ctype<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;charset=GB2312&quot;</span><span class="token punctuation">)</span> <span class="token operator">?</span>
	  <span class="token comment">// TODO: need buffer</span>
		iconv<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">,</span> <span class="token string">&#39;gb2312&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span>
		iconv<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">url</span><span class="token operator">:</span> site<span class="token punctuation">.</span>url<span class="token punctuation">,</span>
	<span class="token literal-property property">contentType</span><span class="token operator">:</span> <span class="token string">&#39;text/html; charset=UTF-8&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajaxSetup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">beforeSend</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">xhr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    xhr<span class="token punctuation">.</span><span class="token function">overrideMimeType</span><span class="token punctuation">(</span><span class="token string">&#39;text/html; charset=UTF-8&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,3);function t(e,o){return p}var u=n(a,[["render",t],["__file","charset.html.vue"]]);export{u as default};
