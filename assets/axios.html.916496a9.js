import{_ as a,e as s}from"./app.c609db3d.js";const n={},e=s(`<h1 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> Axios</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span><span class="token function-variable function">validateStatus</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// console.log(&#39;store&#39;, status)</span>
  <span class="token keyword">return</span> status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> status <span class="token operator">&lt;</span> <span class="token number">600</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801" aria-hidden="true">#</a> \u6E90\u7801</h2><p>\u5982\u4F55\u517C\u5BB9 node browser? \u4F7F\u7528\u9002\u914D\u5668\u6A21\u5F0F\uFF0Cbrowser \u4F7F\u7528 xhr\uFF08\u5B58\u5728 xhr\uFF09\uFF0Cnode \u4F7F\u7528 http \u6A21\u5757</p><p>\u6D3E\u53D1\u8BF7\u6C42</p><p>lib/core/dispatchRequest.js</p>`,6);function t(p,o){return e}var c=a(n,[["render",t],["__file","axios.html.vue"]]);export{c as default};