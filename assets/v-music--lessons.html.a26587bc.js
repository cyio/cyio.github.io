import{_ as n,e as s}from"./app.818741d3.js";const a={},p=s(`<ul><li>api \u5931\u6548\u5BFC\u81F4\u56F0\u6270</li><li>\u83B7\u53D6\u7F51\u7AD9 cookie</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u68C0\u6D4B\u662F\u5426\u767B\u9646</span>
chrome<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://music.163.com&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;MUSIC_U&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>c<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">// \u5DF2\u7ECF\u767B\u5F55</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u83B7\u53D6\u901A\u8BAFkey\uFF0C\u540E\u7AEF\u8981\u7528</span>
chrome<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">url</span><span class="token operator">:</span> netease<span class="token punctuation">.</span>domain<span class="token punctuation">,</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;__csrf&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">cookie</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>cookie <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		netease<span class="token punctuation">.</span>lckey <span class="token operator">=</span> cookie<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	Settings<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token string">&quot;lckey&quot;</span><span class="token punctuation">,</span>netease<span class="token punctuation">.</span>lckey<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,2);function t(e,o){return p}var l=n(a,[["render",t],["__file","v-music--lessons.html.vue"]]);export{l as default};
