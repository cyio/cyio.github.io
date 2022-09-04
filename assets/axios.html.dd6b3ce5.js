import{_ as t,r as o,o as e,c as p,a as n,b as c,F as l,e as r,d as s}from"./app.f848f717.js";const u={},i=r(`<h1 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> Axios</h1><div class="language-javascript ext-js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span><span class="token function-variable function">validateStatus</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// console.log(&#39;store&#39;, status)</span>
  <span class="token keyword">return</span> status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> status <span class="token operator">&lt;</span> <span class="token number">600</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801" aria-hidden="true">#</a> \u6E90\u7801</h2><p>\u6838\u5FC3\u4F7F\u7528 promise \u5C01\u88C5</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    url <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    method <span class="token operator">=</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> config

  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// \u7B2C\u4E09\u4E2A\u53C2\u6570\u8868\u793A\u662F\u5426\u5F02\u6B65\uFF0C\u9ED8\u8BA4 true</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// request({ url: &#39;/&#39;}).then(r =&gt; console.log(r))</span>
</code></pre></div><h3 id="\u5982\u4F55\u517C\u5BB9-node-browser" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u517C\u5BB9-node-browser" aria-hidden="true">#</a> \u5982\u4F55\u517C\u5BB9 node browser?</h3><p>\u4F7F\u7528\u9002\u914D\u5668\u6A21\u5F0F\uFF0Cbrowser \u4F7F\u7528 xhr\uFF08\u5224\u65AD\u662F\u5426\u5B58\u5728 xhr\uFF09\uFF0Cnode \u4F7F\u7528 http \u6A21\u5757</p><p>\u6D3E\u53D1\u8BF7\u6C42<code>lib/core/dispatchRequest.js</code></p>`,8),k={href:"https://lxchuan12.gitee.io/axios/#%25E6%258E%25A8%25E8%258D%2590%25E9%2598%2585%25E8%25AF%25BB",target:"_blank",rel:"noopener noreferrer"},d=s("\u5B66\u4E60 axios \u6E90\u7801\u6574\u4F53\u67B6\u6784\uFF0C\u6253\u9020\u5C5E\u4E8E\u81EA\u5DF1\u7684\u8BF7\u6C42\u5E93 | \u82E5\u5DDD\u7684\u535A\u5BA2"),h=n("h2",{id:"\u5982\u4F55\u6269\u5C55\u5B9E\u4F8B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5982\u4F55\u6269\u5C55\u5B9E\u4F8B","aria-hidden":"true"},"#"),s(" \u5982\u4F55\u6269\u5C55\u5B9E\u4F8B")],-1),_=n("p",null,"\u6BD4\u5982\u7528\u4E8E\u5C40\u90E8\u8BF7\u6C42\u62E6\u622A\uFF0C\u4E0D\u5F71\u54CD\u5168\u5C40",-1),x=n("ol",null,[n("li",null,"\u4F7F\u7528 defaults")],-1),m=n("p",null,"https://stackoverflow.com/a/54659796",-1),f=n("ol",{start:"2"},[n("li",null,"\u4F7F\u7528 JS \u7EE7\u627F")],-1),g=n("p",null,"https://stackoverflow.com/a/60946721",-1),v=n("p",null,"axios \u81EA\u8EAB\u4E0D\u652F\u6301 https://github.com/axios/axios/issues/320",-1);function b(w,y){const a=o("ExternalLinkIcon");return e(),p(l,null,[i,n("p",null,[n("a",k,[d,c(a)])]),h,_,x,m,f,g,v],64)}var j=t(u,[["render",b],["__file","axios.html.vue"]]);export{j as default};