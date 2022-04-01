import{_ as p,r as o,o as c,c as r,a as n,b as e,F as l,d as s,e as t}from"./app.818741d3.js";const i={},u=n("ul",null,[n("li",null,[s("\u6D89\u53CA\u5FAE\u4FE1\u6388\u6743\u3001\u652F\u4ED8\u3001\u5206\u4EAB\uFF0C\u5747\u53EF\u5728\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u9A8C\u8BC1 \u5206\u4EAB\u5728 console \u9762\u677F\u770B\u5230 "),n("code",null,'{errMsg: "config:ok"'),s("\uFF0C\u5C31\u8BF4\u660E\u6CA1\u95EE\u9898")])],-1),d=n("p",null,"http://qydev.weixin.qq.com/wiki/index.php?title=%E9%A6%96%E9%A1%B5",-1),k=s("\u63A5\u53E3\u5B89\u5168\u57DF\u540D\uFF0C\u4E00\u7EA7\u4E8C\u7EA7\uFF0C\u540E\u9762\u4E0D\u9700\u8981\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u672C\u5730\u6D4B\u8BD5 IP \u6307\u5B9A\u5206\u4EAB\u8DEF\u5F84\uFF0C\u4E5F\u9700\u8981\u914D\u7F6E\uFF1F "),_=n("a",{href:"mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login"},"\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u6D4B\u8BD5\u53F7",-1),h={href:"https://www.jianshu.com/p/9f9fa12dd08a",target:"_blank",rel:"noopener noreferrer"},m=s("\u5FAE\u4FE1 JS-SDK\u201C\u5206\u4EAB\u4FE1\u606F\u8BBE\u7F6E\u201DAPI \u53CA\u6570\u5B57\u7B7E\u540D\u751F\u6210\u65B9\u6CD5 - \u7B80\u4E66"),b=n("h2",{id:"axios-\u63D0\u4EA4\u65F6\u7528-formdata-\u5F62\u5F0F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#axios-\u63D0\u4EA4\u65F6\u7528-formdata-\u5F62\u5F0F","aria-hidden":"true"},"#"),s(" axios \u63D0\u4EA4\u65F6\u7528 formdata \u5F62\u5F0F")],-1),f=s("\u5F53\u4F7F\u7528 vue-resource \u6216\u8005 axios \u8BF7\u6C42\u540E\u53F0\u6570\u636E\u65F6\uFF0Cvue-resource \u548C axios \u53D1\u9001\u8BF7\u6C42\u643A\u5E26\u7684\u6570\u636E\u9ED8\u8BA4\u4EE5 request payload \u7684\u5F62\u5F0F\u53D1\u9001\u7ED9\u540E\u53F0\uFF0C\u800C\u4E00\u822C\u6211\u4EEC\u4F7F\u7528\u7684\u90FD\u662F form data \u7684\u5F62\u5F0F\u3002 "),g={href:"http://www.onlyued.com/archives/344",target:"_blank",rel:"noopener noreferrer"},x=s("VUE \u5F00\u53D1\u4E2D\u8BF7\u6C42\u6570\u636E\u9047\u5230\u7684\u5751 \u2013 \u524D\u7AEF\u5C0F\u7B51"),w={href:"https://segmentfault.com/q/1010000009860888",target:"_blank",rel:"noopener noreferrer"},y=s("vue.js - vue \u4E2D\u4F7F\u7528 axios \u7684\u914D\u7F6E - SegmentFault \u601D\u5426"),v=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
  <span class="token function">appWeixin</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6211\u7684\u672C\u9999\u65E5\u8BB0\xB7\u56E2\u5706\u996D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5FEB\u6765\u770B\u6211\u4EEC\u5BB6\u7684\u56E2\u5706\u996D\u54E6&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u7528\u5F00\u53D1\u5DE5\u5177\u770B\uFF0C\u6700\u4E0B\u9762\u4F1A\u6709<code>FORMDATA</code></p>`,2),q=s("\u53C2\u8003\u8FD9\u4E2A\u914D\u7F6E\uFF0C\u628A axios \u5C01\u88C5\u4E0B\u518D\u8C03\u7528 "),A={href:"https://blog.ygxdxx.com/2017/01/29/Axios-Config/",target:"_blank",rel:"noopener noreferrer"},j=s("Axios \u7684\u914D\u7F6E | Hope's Blog"),E=t('<h2 id="\u5E38\u89C1\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u9519\u8BEF" aria-hidden="true">#</a> \u5E38\u89C1\u9519\u8BEF</h2><ol><li><p>param is empty:jsApiList \u4E2D\u6CA1\u6709\u53C2\u6570 \u6CE8\u610F\uFF1A\u4F60\u9700\u8981\u4F7F\u7528\u7684\u6240\u6709\u7684 API \u90FD\u9700\u8981\u5DF2\u6570\u7EC4\u5143\u7D20\u7684\u5F62\u5F0F\u5199\u5165\u8BE5\u53C2\u6570\u4E2D</p></li><li><p>invalid url domain\uFF1A\u65E0\u6548\u7684\u57DF\u540D \u6CE8\u610F\uFF1Aappid \u548C appsecret \u662F\u5426\u5199\u6B63\u786E\uFF0CJS \u63A5\u53E3\u5B89\u5168\u57DF\u540D\u662F\u5426\u6B63\u786E</p></li><li><p>require subscribe \u9519\u8BEF\u8BF4\u660E\u4F60\u6CA1\u6709\u8BA2\u9605\u8BE5\u6D4B\u8BD5\u53F7\uFF0C\u8BE5\u9519\u8BEF\u4EC5\u6D4B\u8BD5\u53F7\u4F1A\u51FA\u73B0</p></li><li><p>\u684C\u9762\u7AEF\u5148\u8C03\u8BD5\uFF0C\u540E\u79FB\u52A8\u7AEF</p></li><li><p>share config \u4E2D\u7684 link\uFF0C\u5FC5\u987B\u5E26\u6709 http \u534F\u8BAE\uFF0C\u907F\u514D\u624B\u5199\uFF0C\u7528<code>location.orgin</code></p></li></ol>',2);function S(B,I){const a=o("ExternalLinkIcon");return c(),r(l,null,[u,d,n("p",null,[k,_,n("a",h,[m,e(a)])]),b,n("p",null,[f,n("a",g,[x,e(a)]),n("a",w,[y,e(a)])]),v,n("p",null,[q,n("a",A,[j,e(a)])]),E],64)}var F=p(i,[["render",S],["__file","weixin-jssdk.html.vue"]]);export{F as default};
