import{_ as t,r as o,o as c,c as l,a as n,b as s,F as r,e as i,d as e}from"./app.e2525c08.js";const p={},d=i(`<h1 id="\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a> \u5206\u6790</h1><h2 id="\u6570\u636E\u6536\u96C6" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6536\u96C6" aria-hidden="true">#</a> \u6570\u636E\u6536\u96C6</h2><ul><li><code>unload</code>\u4E2D\u7684\u5F02\u6B65\u8BF7\u6C42\u4F1A\u88AB\u5FFD\u7565\uFF0C\u540C\u6B65\u8BF7\u6C42\u53EF\u7528\u4F46\u9875\u9762<code>unload</code>\u5EF6\u8FDF\uFF0C\u51CF\u6162\u540E\u7EED\u5BFC\u822A\u3002\u62FF\u4E0D\u5230 response</li><li><code>sendBeacon</code><ul><li>post</li><li>\u4F1A\u81EA\u52A8\u5E26\u4E0A cookie</li><li>\u5F00\u53D1\u8005\u5DE5\u5177\uFF1A\u8BF7\u6C42\u4E0D\u5728 xhr \u4E2D</li><li>\u4E0D\u63D0\u4F9B response</li><li>\u53D1\u9001\u6570\u636E\u7C7B\u578B\u6709\u9650\u5236\uFF0C\u9700\u8981\u63A5\u53E3\u652F\u6301\u3002\u4E0D\u652F\u6301 JSON\uFF1F[1]</li></ul></li><li>fetch keepalive</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;unload&#39;</span><span class="token punctuation">,</span> logData<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">logData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  navigator<span class="token punctuation">.</span><span class="token function">sendBeacon</span><span class="token punctuation">(</span><span class="token string">&quot;/log&quot;</span><span class="token punctuation">,</span> analyticsData<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4),u={href:"https://w3c.github.io/beacon/",target:"_blank",rel:"noopener noreferrer"},h=e("Beacon"),_=e("[1]: "),k={href:"https://stackoverflow.com/questions/31355128/how-to-receive-data-posted-by-navigator-sendbeacon-on-node-js-server",target:"_blank",rel:"noopener noreferrer"},g=e('javascript - How to receive data posted by "navigator.sendbeacon" on node.js server? - Stack Overflow'),f={href:"https://golb.hplar.ch/2018/09/beacon-api.html",target:"_blank",rel:"noopener noreferrer"},b=e("A closer look at the Beacon API"),v=n("h2",{id:"\u6307\u6807",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6307\u6807","aria-hidden":"true"},"#"),e(" \u6307\u6807")],-1),m=n("li",null,"\u8DF3\u51FA\u7387 Bounce rate\uFF0C\u53EA\u6D4F\u89C8\u67D0\u4E2A\u9875\u9762\u5373\u79BB\u5F00\u7684\u4F1A\u8BDD / \u7531\u8BE5\u9875\u5F00\u59CB\u7684\u5168\u90E8\u4F1A\u8BDD",-1),x=e("\u9000\u51FA\u7387\uFF0C\u8FDB\u5165\u8FD9\u4E00\u9875\uFF0C\u7528\u6237\u79BB\u5F00 / \u5168\u90E8\u8BBF\u95EE "),y={href:"https://support.google.com/analytics/answer/2525491?hl=zh-Hans&ref_topic=6156780",target:"_blank",rel:"noopener noreferrer"},w=e("\u9000\u51FA\u7387\u4E0E\u8DF3\u51FA\u7387 - Google Analytics\uFF08\u5206\u6790\uFF09\u5E2E\u52A9"),B=n("h2",{id:"sendbeacon",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sendbeacon","aria-hidden":"true"},"#"),e(" sendbeacon")],-1),j=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`blob = new Blob([\`room_id=123\`], {type : 'application/x-www-form-urlencoded'});
navigator.sendBeacon("/cgi-bin/leave_room", blob);
`)])],-1),z=n("p",null,"(https://zhuanlan.zhihu.com/p/68838820)[https://zhuanlan.zhihu.com/p/68838820]",-1),N=e("sentry \u4E0D\u652F\u6301 "),E={href:"https://github.com/getsentry/sentry-javascript/issues/293#issuecomment-288626061",target:"_blank",rel:"noopener noreferrer"},I=e("navigator.sendBeacon() \xB7 Issue #293 \xB7 getsentry/sentry-javascript"),V=n("p",null,"\u540E\u53F0\u6709\u62A5\u8B66\uFF0C\u7B2C\u4E09\u65B9\u63A5\u53E3\u8C03\u7528\u6709\u76F2\u533A",-1);function q(A,D){const a=o("ExternalLinkIcon");return c(),l(r,null,[d,n("p",null,[n("a",u,[h,s(a)])]),n("p",null,[_,n("a",k,[g,s(a)])]),n("p",null,[n("a",f,[b,s(a)])]),v,n("ul",null,[m,n("li",null,[x,n("a",y,[w,s(a)])])]),B,j,z,n("p",null,[N,n("a",E,[I,s(a)])]),V],64)}var S=t(p,[["render",q],["__file","analytics.html.vue"]]);export{S as default};
