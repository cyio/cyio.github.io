import{_ as o,r as n,o as l,c as s,a as e,b as i,F as c,e as r,d as t}from"./app.818741d3.js";const h={},d=r(`<h1 id="web-\u524D\u7AEF\u5B89\u5168" tabindex="-1"><a class="header-anchor" href="#web-\u524D\u7AEF\u5B89\u5168" aria-hidden="true">#</a> Web \u524D\u7AEF\u5B89\u5168</h1><p>[toc]</p><p>crypto, TSL/SSL HTTPS XSS</p><h2 id="xss-\u8DE8\u7AD9\u811A\u672C\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#xss-\u8DE8\u7AD9\u811A\u672C\u653B\u51FB" aria-hidden="true">#</a> XSS \u8DE8\u7AD9\u811A\u672C\u653B\u51FB</h2><p>\u5728\u7F51\u9875\u4E2D\u690D\u5165\u6076\u610F\u811A\u672C</p><p>\u5371\u5BB3\uFF1A\u83B7\u53D6\u7528\u6237 cookie</p><p>\u89E3\u51B3\u65B9\u5F0F\uFF1A</p><ul><li>HttpOnly</li><li>\u5185\u5BB9\u5B89\u5168\u7B56\u7565</li></ul><p>\u8BBE\u7F6E header\uFF0C\u505A\u54C8\u5E0C\u9A8C\u8BC1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>content-security-policy: script-src &#39;sha256-wxWy1+9LmiuOeDwtQyZNmWpT0jqCUikqaqVlJdtdh/0=&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u907F\u514D\u4F7F\u7528<code>eval</code></p><p>Self-XSS \u6B3A\u9A97\u7528\u6237\u5728\u63A7\u5236\u53F0\u8FD0\u884C\u6076\u610F\u4EE3\u7801</p><p>\u8C37\u6B4C\u7FFB\u8BD1\u7684\u505A\u6CD5\uFF0C\u5728\u63A7\u5236\u53F0\u663E\u793A\u4FE1\u606F\u8B66\u544A\u7528\u6237</p><p>\u8F6C\u4E49\u4E3A\u5B9E\u4F53\u5B57\u7B26\uFF0C\u6B63\u5219\u66FF\u6362</p><h2 id="csrf-\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020" tabindex="-1"><a class="header-anchor" href="#csrf-\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020" aria-hidden="true">#</a> CSRF \u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020</h2><ul><li>\u4E3E\u4F8B\uFF0C\u5408\u6CD5\u8C03\u7528\u63A5\u53E3\u8BBE\u7F6E Gmail \u8F6C\u53D1\uFF0C\u83B7\u53D6\u9690\u79C1\u90AE\u4EF6</li><li>\u7B2C\u4E09\u65B9\u57DF\u540D\u9875\u9762\uFF0C\u53D1\u8D77\u5408\u6CD5\u8BF7\u6C42</li></ul><p>\u89E3\u51B3\uFF1A</p><ul><li>\u540C\u6E90\u68C0\u67E5 origin/referer</li><li>CSRF Token\uFF0C\u5982\u8868\u5355\u63D0\u4EA4\u5FC5\u987B\u5E26\u4E0A token\u3002\u539F\u7406\u662F\u653B\u51FB\u8005\u53EA\u5E26 cookie \u65E0\u6CD5\u8BF7\u6C42\u6210\u529F</li></ul>`,18),p={href:"https://tech.meituan.com/2018/10/11/fe-security-csrf.html",target:"_blank",rel:"noopener noreferrer"},_=t("\u524D\u7AEF\u5B89\u5168\u7CFB\u5217\uFF08\u4E8C\uFF09\uFF1A\u5982\u4F55\u9632\u6B62CSRF\u653B\u51FB\uFF1F - \u7F8E\u56E2\u6280\u672F\u56E2\u961F"),u=e("h2",{id:"\u70B9\u51FB\u52AB\u6301-clickjacking",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u70B9\u51FB\u52AB\u6301-clickjacking","aria-hidden":"true"},"#"),t(" \u70B9\u51FB\u52AB\u6301\uFF08ClickJacking\uFF09")],-1),f=e("p",null,"X-Frame-Options \u9632\u6B62\u9875\u9762\u88AB\u5D4C\u5165\u6076\u610F\u5229\u7528",-1),m={href:"https://segmentfault.com/a/1190000037657222",target:"_blank",rel:"noopener noreferrer"},k=t("\u524D\u7AEF\u5B89\u5168\u7F16\u7801\u89C4\u8303 - SegmentFault \u601D\u5426"),x=e("h2",{id:"\u6DF7\u5408\u5185\u5BB9-http-https",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6DF7\u5408\u5185\u5BB9-http-https","aria-hidden":"true"},"#"),t(" \u6DF7\u5408\u5185\u5BB9\uFF08http + https\uFF09")],-1),S=e("ul",null,[e("li",null,"\u88AB\u52A8 image/media \u5A01\u80C1\u6027\u4F4E\uFF0C\u53EF\u8BBF\u95EE\uFF0C\u4F46\u9501\u3001\u63A7\u5236\u53F0\u4F1A\u63D0\u793A"),e("li",null,"\u4E3B\u52A8 script style iframe flash \u62E6\u622A")],-1),b={href:"https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content",target:"_blank",rel:"noopener noreferrer"},g=t("\u4EC0\u4E48\u662F\u6DF7\u5408\u5185\u5BB9\uFF1F \xA0|\xA0 Web \xA0|\xA0 Google Developers"),y=r('<h2 id="cookie-\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#cookie-\u76F8\u5173" aria-hidden="true">#</a> cookie \u76F8\u5173</h2><ul><li>HttpOnly \u9650\u5236 cookie \u53EA\u80FD\u53D1\u8BF7\u6C42\u643A\u5E26\uFF0C\u7981\u7528 JS \u8BFB\u53D6\u3002\u670D\u52A1\u7AEF\u8BBE\u7F6E<code>Set-Cookie</code>\uFF0C\u51CF\u8F7B XSS \u653B\u51FB</li><li>SameSite \u51CF\u8F7B CSRF \u653B\u51FB</li><li>\u4F1A\u8BDD cookie\uFF08\u9ED8\u8BA4\uFF09\uFF0C\u9875\u9762\u5173\u95ED\u65F6\u79FB\u9664</li><li>\u5E38\u9A7B cookie</li></ul><h2 id="crypto" tabindex="-1"><a class="header-anchor" href="#crypto" aria-hidden="true">#</a> Crypto</h2><p>\u654F\u611F\u6570\u636E\u52A0\u5BC6\u4FDD\u5B58</p><h2 id="\u4E2D\u95F4\u4EBA\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u4EBA\u653B\u51FB" aria-hidden="true">#</a> \u4E2D\u95F4\u4EBA\u653B\u51FB</h2>',5),v={href:"https://zh.wikipedia.org/wiki/%25E4%25B8%25AD%25E9%2597%25B4%25E4%25BA%25BA%25E6%2594%25BB%25E5%2587%25BB",target:"_blank",rel:"noopener noreferrer"},B=t("\u4E2D\u95F4\u4EBA\u653B\u51FB - \u7EF4\u57FA\u767E\u79D1\uFF0C\u81EA\u7531\u7684\u767E\u79D1\u5168\u4E66"),C=e("p",null,"\u8BC1\u4E66\u6821\u9A8C",-1);function w(E,F){const a=n("ExternalLinkIcon");return l(),s(c,null,[d,e("p",null,[e("a",p,[_,i(a)])]),u,f,e("p",null,[e("a",m,[k,i(a)])]),x,S,e("p",null,[e("a",b,[g,i(a)])]),y,e("p",null,[e("a",v,[B,i(a)])]),C],64)}var L=o(h,[["render",w],["__file","security.html.vue"]]);export{L as default};
