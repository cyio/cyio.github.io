import{_ as a,r as t,o,c as e,a as n,b as c,F as p,e as l,d as u}from"./app.db3d8f78.js";const r={},i=l(`<h1 id="\u8BA1\u7B97\u9875\u9762-dom-\u8282\u70B9\u6570\u91CF" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u9875\u9762-dom-\u8282\u70B9\u6570\u91CF" aria-hidden="true">#</a> \u8BA1\u7B97\u9875\u9762 DOM \u8282\u70B9\u6570\u91CF</h1><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5305\u62EC\u6587\u672C\u8282\u70B9</span>
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
</code></pre></div>`,2),k={href:"https://blog.csdn.net/yiifaa/article/details/70048860",target:"_blank",rel:"noopener noreferrer"},d=u("\u600E\u6837\u83B7\u53D6\u9875\u9762\u7684DOM\u8282\u70B9\u6570\u91CF_\u7518\u7115\u7684\u535A\u5BA2-CSDN\u535A\u5BA2");function m(_,f){const s=t("ExternalLinkIcon");return o(),e(p,null,[i,n("p",null,[n("a",k,[d,c(s)])])],64)}var N=a(r,[["render",m],["__file","count-dom-nodes.html.vue"]]);export{N as default};
