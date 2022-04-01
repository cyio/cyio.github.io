import{_ as p,r as o,o as c,c as r,a as n,b as e,F as l,e as t,d as s}from"./app.818741d3.js";const i={},u=t(`<h1 id="ios" tabindex="-1"><a class="header-anchor" href="#ios" aria-hidden="true">#</a> iOS</h1><h2 id="ios\u8C03\u8BD5\u79FB\u52A8\u7AEF\u5F39\u7A97\u906E\u7F69input\u6846focus\u548Cclick\u4E8B\u4EF6\u5931\u6548" tabindex="-1"><a class="header-anchor" href="#ios\u8C03\u8BD5\u79FB\u52A8\u7AEF\u5F39\u7A97\u906E\u7F69input\u6846focus\u548Cclick\u4E8B\u4EF6\u5931\u6548" aria-hidden="true">#</a> IOS\u8C03\u8BD5\u79FB\u52A8\u7AEF\u5F39\u7A97\u906E\u7F69input\u6846focus\u548Cclick\u4E8B\u4EF6\u5931\u6548</h2><p>\u79FB\u52A8\u7AEF\u7684\u767B\u5F55\u7A97\u53E3\u7EDD\u5927\u591A\u6570\u7684\u505A\u6CD5\u662F\u70B9\u51FB\u767B\u5F55\uFF0C\u7136\u540E\u5F39\u51FA\u56FA\u5B9A\u5B9A\u4F4D\u7684\u906E\u7F69\u7A97\u53E3\uFF0C\u8F93\u5165\u7528\u6237\u540D\u3001\u5BC6\u7801\u7B49\u4FE1\u606F\u8FDB\u884C\u767B\u5F55\u3002 \u5728IOS\u7CFB\u7EDF\u4E0B\uFF0C\u5F53input\u5524\u8D77\u952E\u76D8\u65F6\uFF0C\u4F1A\u5BFC\u81F4\u906E\u7F69\u4E0B\u5C42\u7684\u9875\u9762\u51FA\u73B0\u6EDA\u52A8\u548C\u5E95\u90E8\u7A7A\u767D\uFF0C\u8FD9\u65F6\u5C31\u4F1A\u5F71\u54CD\u5230\u906E\u7F69\u56FA\u5B9A\u5B9A\u4F4D\u7684\u9875\u9762\u663E\u793A\u53CA\u4EA4\u4E92\u4E8B\u4EF6\u3002 \u89E3\u51B3\u529E\u6CD5\uFF1A\u5E95\u5C42\u9875\u9762\u5728\u4E00\u52A0\u8F7D\u8FDB\u5165\u7684\u65F6\u5019\u5C31\u8BB0\u5F55scrollTop\uFF0C\u5F53\u906E\u7F69\u5F39\u51FA\u7684input\u5931\u53BB\u7126\u70B9\u65F6\uFF0C\u8981\u89E6\u53D1\u5E95\u5C42\u9875\u9762\u7684\u6EDA\u52A8\u4E8B\u4EF6\uFF0C\u8BA9\u5B83\u6EDA\u52A8\u5230\u906E\u7F69\u672A\u5F39\u51FA\u65F6\u7684\u4F4D\u7F6E\uFF0C\u5C31\u53EF\u4EE5\u4FEE\u590Dinput\u5931\u6548\u7684bug\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> isIOS <span class="token operator">=</span>
  <span class="token operator">!</span><span class="token operator">!</span>navigator<span class="token punctuation">.</span>platform <span class="token operator">&amp;&amp;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">iPad|iPhone|iPod</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>platform<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// fix IOS\u624B\u673A\u5524\u8D77\u952E\u76D8\uFF0C\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u540E\u9875\u9762\u5143\u7D20\u70B9\u51FB\u4E8B\u4EF6\u4F4D\u7F6E\u504F\u79FB</span>
<span class="token keyword">function</span> <span class="token function">fixIOSInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isIOS<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  window<span class="token punctuation">.</span><span class="token function">scroll</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>input(@blur=&quot;fixIOSInput&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u6A61\u76AE\u7B4B\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u6A61\u76AE\u7B4B\u6548\u679C" aria-hidden="true">#</a> \u6A61\u76AE\u7B4B\u6548\u679C</h2>`,7),d=s("\u5982\u679C\u5F39\u7A97\u4E0D\u6EDA\u52A8\uFF0C\u6CA1\u95EE\u9898\uFF0C\u5982\u679C\u9700\u8981\u6EDA\u52A8\uFF0C\u53EA\u80FD\u628A\u9732\u51FA\u7684\u5185\u5BB9\u9690\u85CF "),k={href:"https://github.com/zipeijun/vue-bounce",target:"_blank",rel:"noopener noreferrer"},b=s("zipeijun/vue-bounce: \u7981\u7528 iOS \u5E73\u53F0\u6A61\u76AE\u7B4B\u6548\u679C\u7684 Vue \u63D2\u4EF6"),h=t(`<div class="language-pug ext-pug line-numbers-mode"><pre class="language-pug"><code>    <span class="token tag">toolbar<span class="token attributes"><span class="token punctuation">(</span><span class="token attr-name">v-show</span><span class="token punctuation">=</span><span class="token attr-value"><span class="token string">&quot;!showFullscreenModal&quot;</span></span><span class="token punctuation">)</span></span></span> <span class="token plain-text">// \u89C4\u907F ios \u4E0B modal \u6EDA\u52A8\u5230\u5E95\u9732\u51FA fixed \u5728\u5E95\u90E8\u7684 toolbar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5F39\u51FA\u5C42\u4E0E\u7236\u9875\u9762\u90FD\u80FD\u6EDA\u52A8\u65F6\uFF0C\u4E92\u76F8\u5F71\u54CD\uFF0C\u9700\u8981\u5904\u7406\u6EDA\u52A8\u4F4D\u7F6E\u6062\u590D</p>`,2),m={href:"https://codepen.io/cyio/pen/rNOdEQx",target:"_blank",rel:"noopener noreferrer"},g=s("\u5168\u5C4F\u5F39\u5C42\uFF08\u6EDA\u52A8\u573A\u666F\uFF09"),_=n("h2",{id:"x-\u7CFB\u5217-\u9875\u9762\u5E95\u90E8\u5143\u7D20\u88AB\u865A\u62DF\u952E\u906E\u6321",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#x-\u7CFB\u5217-\u9875\u9762\u5E95\u90E8\u5143\u7D20\u88AB\u865A\u62DF\u952E\u906E\u6321","aria-hidden":"true"},"#"),s(" x \u7CFB\u5217 \u9875\u9762\u5E95\u90E8\u5143\u7D20\u88AB\u865A\u62DF\u952E\u906E\u6321")],-1),f={href:"https://codepen.io/cyio/pen/yvbVjz",target:"_blank",rel:"noopener noreferrer"},x=s("is iphonex"),v=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Iphone X \u7CFB\u5217\uFF0C\u7279\u5F81\u662F ios + \u957F\u8138</span>
<span class="token comment">// \u5FAE\u4FE1\u5185\u7F6E\u6D4F\u89C8\u5668\uFF0C\u9700\u8981\u52A0\u4E0B innerHeight \u7684\u5224\u65AD\uFF1F</span>
<span class="token keyword">const</span> <span class="token function-variable function">isIphoneXSeries</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">iphone</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height <span class="token operator">&gt;=</span> <span class="token number">812</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,1),w={href:"https://webkit.org/blog/7929/designing-websites-for-iphone-x/",target:"_blank",rel:"noopener noreferrer"},y=s("Designing Websites for iPhone X | WebKit"),I=n("p",null,"\u5B98\u65B9\u6587\u6863",-1),j=n("p",null,"safari \u81EA\u52A8\u5904\u7406\uFF0C\u4F1A\u907F\u5F00\u5218\u6D77\u548C\u5706\u89D2\u533A\u57DF\uFF0C\u8FD9\u4E9B\u533A\u57DF\u4F1A\u586B\u5145\u9875\u9762\u80CC\u666F\u8272\u3002\u5927\u90E8\u5206\u7F51\u7AD9\u6CA1\u6709\u95EE\u9898",-1),S=n("p",null,"\u5176\u5B83\u7F51\u7AD9\uFF0C\u5982\u6709\u5168\u5BBD\u5EA6\u7684\u6C34\u5E73\u5BFC\u822A\u680F\uFF0C\u4F1A\u88AB\u865A\u62DF\u6307\u793A\u6761\u906E\u6321",-1),O=n("p",null,[s("\u8BBE\u7F6E"),n("code",null,"viewport-fit=cover"),s("\uFF0C\u4F7F\u7528\u6574\u4E2A\u5C4F\u5E55\uFF0C\u81EA\u5DF1\u5904\u7406\u3002\u7F3A\u70B9\u662F\uFF0C\u8981\u5904\u7406\u5404\u4E2A\u65B9\u5411\u95F4\u8DDD\uFF0C\u4EE5\u53CA\u65CB\u8F6C\u540E\u5404\u4E2A\u65B9\u5411\u95F4\u8DDD \u53D8\u5316")],-1),V={href:"https://juejin.im/post/5be95fbef265da61327ed8e0",target:"_blank",rel:"noopener noreferrer"},N=s("\u517C\u5BB9iphone x\u5218\u6D77\u7684\u6B63\u786E\u59FF\u52BF - \u6398\u91D1"),q={href:"https://codepen.io/cyio/pen/xxwjKyv",target:"_blank",rel:"noopener noreferrer"},E=s("iphone x \u7CFB\u5217 \u5B89\u5168\u533A\u57DF"),P=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  safari \u6709\u5DE5\u5177\u680F\uFF0C\u5411\u4E0B\u6EDA\u52A8\u65F6\uFF0C\u9690\u85CF\uFF0C\u5411\u4E0A\u65F6\uFF0C\u51FA\u73B0

  wechat \u6A2A \u5FAE\u4FE1\u680F\u5360\u7528\u4E24\u500D\u8C03\u8BD5\uFF0C\u906E\u6321\u5185\u5BB9\uFF0C\u65E0\u6CD5\u901A\u8FC7 cover + padding-top \u89E3\u51B3

  when use cover
    safari \u4E0A\u65B9\u65E0\u95EE\u9898 \u7AD6 \u5730\u5740\u680F/\u7F51\u5740\u680F \u6A2A \u65E0

    toolbar \u6A2A \u5411\u4E0B\u6EDA \u4EC5\u5C55\u793A\u4E00\u534A\uFF0C\u4E14\u906E\u6321

  safari wechat \u6D4B\u8BD5\u4E2D\u8868\u73B0\u6709\u65F6\u4E0D\u4E00\u81F4\uFF0C\u50CF\u662F\u7F13\u5B58\u4E86\uFF1F
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u7ED3\u8BBA\uFF1A\u5982\u679C\u4F7F\u7528 cover\uFF0C\u9700\u8981</p><ol><li>\u5DE6\u53F3\u4E0B \u8BBE\u7F6E padding</li><li>toolbar \u8BBE\u7F6E bottom padding</li></ol>`,3);function z(B,F){const a=o("ExternalLinkIcon");return c(),r(l,null,[u,n("p",null,[d,n("a",k,[b,e(a)])]),h,n("p",null,[n("a",m,[g,e(a)])]),_,n("p",null,[n("a",f,[x,e(a)])]),v,n("p",null,[n("a",w,[y,e(a)])]),I,j,S,O,n("p",null,[n("a",V,[N,e(a)]),n("a",q,[E,e(a)])]),P],64)}var K=p(i,[["render",z],["__file","ios.html.vue"]]);export{K as default};
