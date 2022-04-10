import{_ as a,r as e,o as t,c as o,a as n,b as p,F as c,e as l,d as r}from"./app.c609db3d.js";const u={},i=l(`<h1 id="count-dom-nodes" tabindex="-1"><a class="header-anchor" href="#count-dom-nodes" aria-hidden="true">#</a> count dom nodes</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5305\u62EC\u6587\u672C\u8282\u70B9</span>
<span class="token keyword">function</span> <span class="token function">countNodes</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//  \u8BA1\u7B97\u81EA\u8EAB</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token comment">//  \u5224\u65AD\u662F\u5426\u5B58\u5728\u5B50\u8282\u70B9</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">hasChildNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//  \u5BF9\u5B50\u8282\u70B9\u8FDB\u884C\u9012\u5F52\u7EDF\u8BA1</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>child <span class="token keyword">of</span> node<span class="token punctuation">.</span>childNodes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count <span class="token operator">+=</span> <span class="token function">countNodes</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> count
<span class="token punctuation">}</span>

<span class="token function">countNodes</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,2),d={href:"https://blog.csdn.net/yiifaa/article/details/70048860",target:"_blank",rel:"noopener noreferrer"},k=r("\u600E\u6837\u83B7\u53D6\u9875\u9762\u7684DOM\u8282\u70B9\u6570\u91CF_\u7518\u7115\u7684\u535A\u5BA2-CSDN\u535A\u5BA2");function m(b,_){const s=e("ExternalLinkIcon");return t(),o(c,null,[i,n("p",null,[n("a",d,[k,p(s)])])],64)}var f=a(u,[["render",m],["__file","count-dom-nodes.html.vue"]]);export{f as default};