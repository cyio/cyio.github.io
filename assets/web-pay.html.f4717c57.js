import{_ as t,r as p,o,c as r,a as n,b as a,F as c,d as e,e as l}from"./app.818741d3.js";const i={},u={href:"https://blog.csdn.net/chi1130/article/details/99479309",target:"_blank",rel:"noopener noreferrer"},k=e("\u5FAE\u4FE1\u652F\u4ED8\u5F53\u524D\u9875\u9762\u7684URL\u672A\u6CE8\u518C\u95EE\u9898[\u5355\u9875\u9762]_\u7F51\u7EDC_chi1130\u7684\u535A\u5BA2-CSDN\u535A\u5BA2"),d={href:"https://deskid.github.io/2018/02/02/2018-02-02-1/",target:"_blank",rel:"noopener noreferrer"},_=e("vue router \u4E0E\u5FAE\u4FE1\u5206\u4EAB\u5931\u8D25 - Deskid's Blog"),b=l(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> window<span class="token punctuation">.</span>config<span class="token punctuation">.</span>api_url <span class="token operator">+</span> <span class="token string">&#39;/v1/default/weixinjs&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/x-www-form-urlencoded&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,1),h={href:"https://stackoverflow.com/questions/332872/encode-url-in-javascript",target:"_blank",rel:"noopener noreferrer"},f=e("Encode URL in JavaScript? - Stack Overflow"),m={href:"https://www.jianshu.com/p/a1e8c7cf8821",target:"_blank",rel:"noopener noreferrer"},g=e("\u4F60\u8FC7\u6765\uFF0C\u6084\u6084\u544A\u8BC9\u4F60\u600E\u6837\u9002\u914DiPhone X\uFF1F - \u7B80\u4E66"),v={href:"https://juejin.im/post/5c4bd0b7518825254b5a4daf",target:"_blank",rel:"noopener noreferrer"},y=e("JavaScript \u5224\u65AD iPhone X Series \u673A\u578B - \u6398\u91D1");function w(x,j){const s=p("ExternalLinkIcon");return o(),r(c,null,[n("p",null,[n("a",u,[k,a(s)]),n("a",d,[_,a(s)])]),b,n("p",null,[n("a",h,[f,a(s)]),n("a",m,[g,a(s)]),n("a",v,[y,a(s)])])],64)}var N=t(i,[["render",w],["__file","web-pay.html.vue"]]);export{N as default};
