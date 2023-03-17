import{_ as o,r as e,o as p,c,a as n,b as t,F as r,d as s,e as l}from"./app.de511a45.js";const i={},u=n("h1",{id:"mqtt",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mqtt","aria-hidden":"true"},"#"),s(" MQTT")],-1),k=n("p",null,"\u6D4F\u89C8\u5668\u4E0D\u80FD\u7528\u9ED8\u8BA4\u7684 1883",-1),m=n("p",null,"http \u53EF\u4EE5\u7528 ws/wss",-1),d=n("p",null,"https \u53EA\u80FD\u7528 wss 443",-1),_=s("\u5BA2\u6237\u7AEF\u786E\u4FDD\u81EA\u5DF1\u7684 Client ID \u5168\u5C40\u552F\u4E00\uFF0C\u4E0D\u8981\u91CD\u590D\u8FDE\u63A5\uFF0C\u540C\u65F6\u505A\u597D\u65AD\u7EBF\u91CD\u8FDE\u7684\u903B\u8F91\u3002\u6709\u683C\u5F0F\u8981\u6C42\u3002 "),h={href:"https://help.aliyun.com/document_detail/42420.html?spm=a2c4g.11186623.2.11.7bbf4967RXsZHo",target:"_blank",rel:"noopener noreferrer"},f=s("\u540D\u8BCD\u89E3\u91CA"),g=n("em",null,"\u4EA7\u54C1\u7B80\u4ECB",-1),b=s("\u5FAE\u6D88\u606F\u961F\u5217 MQTT-\u963F\u91CC\u4E91"),y=n("p",null,"cleanSession \u6807\u5FD7\u662F MQTT \u534F\u8BAE\u4E2D\u5BF9\u4E00\u4E2A\u5BA2\u6237\u7AEF\u5EFA\u7ACB TCP \u8FDE\u63A5\u540E\u662F\u5426\u5173\u5FC3\u4E4B\u524D\u72B6\u6001\u7684\u5B9A\u4E49",-1),q={href:"https://github.com/AliwareMQ/lmq-demo/blob/master/lmq-js-demo/lmqdemo.html",target:"_blank",rel:"noopener noreferrer"},w=s("\u963F\u91CC demo lmq-demo/lmqdemo.html at master \xB7 AliwareMQ/lmq-demo"),T=l(`<h2 id="\u4E24\u79CD\u8FDE\u63A5\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E24\u79CD\u8FDE\u63A5\u65B9\u5F0F" aria-hidden="true">#</a> \u4E24\u79CD\u8FDE\u63A5\u65B9\u5F0F</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 1.</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// host: config.host,</span>
  <span class="token comment">// port: config.port,</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> config<span class="token punctuation">.</span>username<span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> config<span class="token punctuation">.</span>password<span class="token punctuation">,</span>
  <span class="token literal-property property">keepalive</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
  <span class="token literal-property property">clientId</span><span class="token operator">:</span> config<span class="token punctuation">.</span>clientId<span class="token punctuation">,</span>
  <span class="token literal-property property">protocolId</span><span class="token operator">:</span> <span class="token string">&#39;MQTT&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">protocolVersion</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">reconnectPeriod</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">connectTimeout</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token operator">*</span> <span class="token number">1000</span>
<span class="token punctuation">}</span>
client <span class="token operator">=</span> mqtt<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>

<span class="token comment">// 2. \u9700\u8981\u6307\u5B9A\u534F\u8BAE\u65F6\uFF0C\u9700\u8981\u5728 url \u524D\u9762\u6307\u5B9A</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">wss://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>config<span class="token punctuation">.</span>host<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>config<span class="token punctuation">.</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
client <span class="token operator">=</span> mqtt<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
</code></pre></div>`,2),x={href:"https://codepen.io/cyio/pen/jJaQqX",target:"_blank",rel:"noopener noreferrer"},v=s("mqtt \u7F51\u9875\u7248\u5BA2\u6237\u7AEF\u8C03\u8BD5\u5DE5\u5177"),Q={href:"http://www.tongxinmao.com/txm/webmqtt.php",target:"_blank",rel:"noopener noreferrer"},M=s("\u901A\u4FE1\u732B MQTT \u5728\u7EBF\u5BA2\u6237\u7AEF \u5171\u4EAB\u670D\u52A1\u5668"),I={href:"https://github.com/mqtt/mqtt.github.io/wiki",target:"_blank",rel:"noopener noreferrer"},j=s("\u793E\u533A\u6587\u6863 Home \xB7 mqtt/mqtt.github.io Wiki");function V(N,B){const a=e("ExternalLinkIcon");return p(),c(r,null,[u,k,m,d,n("p",null,[_,n("a",h,[f,g,b,t(a)])]),y,n("p",null,[n("a",q,[w,t(a)])]),T,n("p",null,[n("a",x,[v,t(a)])]),n("p",null,[n("a",Q,[M,t(a)])]),n("p",null,[n("a",I,[j,t(a)])])],64)}var E=o(i,[["render",V],["__file","mqtt.html.vue"]]);export{E as default};