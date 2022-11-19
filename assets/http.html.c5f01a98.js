import{_ as r,r as i,o as c,c as h,a as e,b as o,w as a,F as d,d as t,e as l}from"./app.c5150327.js";const p={},_=e("h1",{id:"http",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#http","aria-hidden":"true"},"#"),t(" HTTP")],-1),u={class:"table-of-contents"},g=t("\u6D4F\u89C8\u5668\u7F13\u5B58"),f=t("\u7F13\u5B58\u6700\u4F73\u7B56\u7565"),x=t("\u7F13\u5B58\u6709\u6548\u671F\u8BA1\u7B97"),m=t("HTTPS"),b=t("CORS"),T=t("\u8FD4\u56DE\u72B6\u6001\u7801"),k=t("GET \u4E0E POST \u533A\u522B"),S=t("get url \u957F\u5EA6\u9650\u5236"),w=t("\u8BF7\u63CF\u8FF0 cookies\u3001sessionStorage \u548C localStorage \u7684\u533A\u522B?"),C=t("http \u4E0E tcp \u533A\u522B"),E=t("DNS"),P=t("TCP"),L=t("Etag \u548C Last-Modified \u533A\u522B\uFF0C\u4F7F\u7528\u573A\u666F"),v=t("Expires \u548C Cache-Control"),H=t("\u52A0\u5BC6"),N=t("\u5E42\u7B49\u6027"),M=t("\u5E38\u7528 code"),I={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Connection_management_in_HTTP_1.x",target:"_blank",rel:"noopener noreferrer"},O=t("Connection management in HTTP/1.x - HTTP | MDN"),D=l('<p>\u540D\u8BCD\uFF1A ETag \u6587\u4EF6\u6307\u7EB9\uFF0C\u5982 content hash</p><h2 id="\u6D4F\u89C8\u5668\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7F13\u5B58" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u7F13\u5B58</h2><p>http cache \u8BBE\u8BA1\u539F\u5219</p><p>\u9ED8\u8BA4\u9690\u5F0F\uFF0C\u663E\u5F0F\u7528 cache-control</p><p>\u8BF7\u6C42\u548C\u54CD\u5E94\uFF0C\u90FD\u80FD\u5E26\u6307\u4EE4\uFF0C\u6709\u51B2\u7A81\u65F6\uFF0C\u4EE5\u66F4\u4E25\u683C\u4E3A\u51C6</p><p>\u4E24\u79CD\u6A21\u578B\uFF1A</p><ol><li><p>\u8FC7\u671F\u6A21\u578B\uFF0C\u51CF\u5C11\u9891\u7E41\u8BF7\u6C42\u7F51\u7EDC\u5F80\u8FD4 Expires Cache-Control max-age \u4F18\u5148\u7EA7\u9AD8\u4E8E\u4E0A\u8005</p></li><li><p>\u9A8C\u8BC1\u6A21\u578B\uFF0C\u51CF\u5C11\u5E26\u5BBD\u5F00\u9500 \u6761\u4EF6\u8BF7\u6C42 Last-Modified \u9ED8\u8BA4\u5F31\u9A8C\u8BC1 Etag \u9ED8\u8BA4\u5F3A\u9A8C\u8BC1</p><p>\u5EFA\u8BAE\u540C\u65F6\u63D0\u4F9B Etag \u548C LM \u524D\u8005\u6587\u4EF6\u4E00\u53D8\u5C31\u53D8\uFF0C\u540E\u8005\u5728\u53D1\u751F\u6709\u610F\u4E49\u53D8\u5316\u65F6\u53D8</p></li></ol><p>\u542F\u53D1\u5F0F\u8FC7\u671F\uFF0C\u614E\u7528\uFF0C\u5EFA\u8BAE\u660E\u786E\u6307\u5B9A</p><p>\u5982\u4F55\u6BD4\u5BF9 ETag \u548C LM\uFF0C\u8BF7\u6C42\u65F6\u5E26\u4E0A\u4E4B\u524D\u7684\uFF0C\u5373 If-xxx</p><p>\u6D41\u7A0B\uFF1A\u662F\u5426\u547D\u4E2D\u5F3A\u7F13\u5B58 -&gt; \u662F\u5426\u547D\u4E2D\u534F\u5546\u7F13\u5B58</p>',10),R={href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html#sec13.1.5",target:"_blank",rel:"noopener noreferrer"},q=t("HTTP/1.1: Caching in HTTP"),y=l("<li><p>\u5F3A\u7F13\u5B58<code>header -&gt; max, cache</code>\u547D\u4E2D\u65F6\u4E0D\u53D1\u7F51\u7EDC\u8BF7\u6C42</p></li><li><p>\u534F\u5546\u7F13\u5B58<code>header -&gt; modifier</code>\u5148\u53D1\u8BF7\u6C42\uFF0C\u547D\u4E2D \u8FD4\u56DE 304</p><p><code>no-cache</code> = store + if change \u5982\u679C\u5B58\u5728\u5408\u9002\u7684\u9A8C\u8BC1\u4EE4\u724C(ETag)\uFF0C\u53D1\u8D77\u8BF7\u6C42\uFF0C\u5982\u679C\u8D44\u6E90\u65E0\u53D8\u5316\uFF0C304\uFF0C\u4E0D\u4E0B\u8F7D</p><p><code>no-store</code> \u5B8C\u5168\u4E0D\u5B58\u50A8\uFF0C\u5982\u79C1\u5BC6\u6587\u4EF6</p></li><li><p>\u5237\u65B0(F5)\uFF0C\u8DF3\u8FC7\u5F3A\u7F13\u5B58\uFF0C\u4F46\u662F\u4F1A\u68C0\u67E5\u534F\u5546\u7F13\u5B58\uFF08\u534F\u5546\u7F13\u5B58\u672C\u8EAB\u5DF2\u7ECF\u662F\u4E00\u79CD\u907F\u514D\u5185\u5BB9\u4E0D\u66F4\u65B0\u7684\u7B56\u7565\uFF0C\u6CA1\u5FC5\u8981\u8DF3\u8FC7\u5F3A\u5237\uFF09</p></li>",3),F=e("p",null,"\u5F3A\u5236\u5237\u65B0(Ctrl + F5)\uFF0C\u8DF3\u8FC7\u5F3A\u7F13\u5B58\u548C\u534F\u5546\u7F13\u5B58",-1),z={href:"https://www.cnblogs.com/lyzg/p/5125934.html",target:"_blank",rel:"noopener noreferrer"},A=t("\u6D4F\u89C8\u5668\u7F13\u5B58\u77E5\u8BC6\u5C0F\u7ED3\u53CA\u5E94\u7528 - \u6D41\u4E91\u8BF8\u845B - \u535A\u5BA2\u56ED"),G={href:"https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},K=t("HTTP \u7F13\u5B58 \xA0|\xA0 Web \xA0|\xA0 Google Developers"),U={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching",target:"_blank",rel:"noopener noreferrer"},V=t("HTTP caching - HTTP | MDN"),j=e("li",null,[e("p",null,"\u4E0D\u8BBE\u7F6E"),e("ul",null,[e("li",null,"\u8DF3\u8F6C\u8BBF\u95EE size \u5217 \u663E\u793A disk cache \u6216\u8BF7\u6C42\u8BE6\u60C5 General \u663E\u793A Status Code: 200 OK (from disk cache)"),e("li",null,[t("\u76F4\u63A5\u6253\u5F00\u8D44\u6E90\u94FE\u63A5\uFF0Cchrome \u4F1A\u5728\u8BF7\u6C42\u5934\u52A0\u4E0A"),e("code",null,"max-age=0"),t("\uFF0C\u8D70\u534F\u5546\u7F13\u5B58 \u663E\u793A 304\uFF0C\u4E0D\u9700\u8981\u518D\u63A5\u6536\u54CD\u5E94\u4F53\uFF0C\u8282\u7701\u4E00\u4E9B\u5E26\u5BBD")]),e("li",null,"\u6D4F\u89C8\u5668\u7F13\u5B58\u7B56\u7565\u6709\u5DEE\u5F02\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u7F13\u5B58\u65F6\uFF0C\u6700\u597D\u663E\u5F0F\u6307\u5B9A")])],-1),W=e("li",null,[e("p",null,"\u5171\u4EAB\u4EE3\u7406\u7F13\u5B58 VS \u79C1\u4EBA\u6D4F\u89C8\u5668\u7F13\u5B58"),e("p",null,"\u5171\u4EAB\u7F13\u5B58\u53EF\u4EE5\u5B58\u5728\u4E2D\u95F4\u670D\u52A1\u5668\u4E0A\uFF08\u53EA\u662F\u4E2A\u6982\u5FF5\uFF0C\u5982 cdn\uFF09")],-1),B=l(`<h3 id="\u7F13\u5B58\u6700\u4F73\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u6700\u4F73\u7B56\u7565" aria-hidden="true">#</a> \u7F13\u5B58\u6700\u4F73\u7B56\u7565</h3><ul><li>For html files, use Cache-Control: no-cache, and Etag. \u534F\u5546\u7F13\u5B58</li><li>For js,css, and image files, set Cache-Control: public, max-age=31536000, no Etag, no Last-Modified settings. \u5F3A\u7F13\u5B58\uFF0C\u56E0\u4E3A\u65B0\u8D44\u6E90 URL \u4E00\u822C\u6709\u7248\u672C</li></ul><h3 id="\u7F13\u5B58\u6709\u6548\u671F\u8BA1\u7B97" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u6709\u6548\u671F\u8BA1\u7B97" aria-hidden="true">#</a> \u7F13\u5B58\u6709\u6548\u671F\u8BA1\u7B97</h3><div class="language-text ext-text"><pre class="language-text"><code>// freshnessLifetime
if \`Cache-control: max-age=N\` exist
  = N
else if \`Expires\` exist
  = Expires - Date
else if \`Last-Modified\` exist
  = (Date - Last-Modified) / 10

expirationTime = responseTime + freshnessLifetime - currentAge

responseTime \u6D4F\u89C8\u5668\u63A5\u6536\u54CD\u5E94\u65F6\u95F4
currentAge = currentTime - storeTime
</code></pre></div><p>meta cache-control \u4E0D\u5EFA\u8BAE\u7528\uFF0Chtml4 \u6807\u51C6\uFF0C5 \u6CA1\u6709</p>`,5),Y={href:"https://stackoverflow.com/questions/49547/how-do-we-control-web-page-caching-across-all-browsers",target:"_blank",rel:"noopener noreferrer"},Q=t("http - How do we control web page caching, across all browsers? - Stack Overflow"),X=e("h2",{id:"https",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#https","aria-hidden":"true"},"#"),t(" HTTPS")],-1),J=e("p",null,"\u5EFA\u7ACB\u5728 SSL/TLS \u534F\u8BAE\u4E0A\uFF0C\u91C7\u7528\u4E86\u516C\u94A5\u52A0\u5BC6\u6CD5\uFF0C\u57FA\u672C\u8FC7\u7A0B\u662F\uFF1A",-1),Z=e("ol",null,[e("li",null,"\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u7AEF\u7D22\u8981\u5E76\u9A8C\u8BC1\u516C\u94A5\u3002"),e("li",null,"\u53CC\u65B9\u534F\u5546\u751F\u6210\u201D\u4F1A\u8BDD\u5BC6\u94A5\u201D\u3002"),e("li",null,"\u53CC\u65B9\u91C7\u7528\u201D\u4F1A\u8BDD\u5BC6\u94A5\u201D\u8FDB\u884C\u52A0\u5BC6\u901A\u4FE1")],-1),$=e("p",null,"\u6570\u636E\u901A\u4FE1 \u5BF9\u79F0\u52A0\u5BC6 \u7B7E\u540D \u975E\u5BF9\u79F0\u52A0\u5BC6",-1),ee=e("p",null,"SSL \u63E1\u624B s => send pubkey => c c => \u751F\u6210\u5BF9\u79F0\u52A0\u5BC6 session key \uFF0C\u5E76\u7528 pubkey \u52A0\u5BC6 => s \u7528\u79C1\u94A5\u89E3\u5BC6 \u4E4B\u540E\u4F7F\u7528\u5BF9\u79F0\u52A0\u5BC6 key \u6570\u636E\u4F20\u8F93",-1),te={href:"https://www.quora.com/Does-SSL-and-TLS-use-asymmetric-encryption",target:"_blank",rel:"noopener noreferrer"},oe=t("Does SSL and TLS use asymmetric encryption? - Quora"),ne=e("h2",{id:"cors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cors","aria-hidden":"true"},"#"),t(" CORS")],-1),se=e("p",null,"CORS \u5904\u7406\u975E\u7B80\u5355\u8BF7\u6C42\uFF08\u5982 POST\uFF09\u4F1A\u89E6\u53D1 options",-1),ae=t("Access-Control-Max-Age \u6307\u5B9A prelight \u8BF7\u6C42\u7F13\u5B58\u591A\u957F\u65F6\u95F4\uFF0C\u8FD9\u4E2A\u65F6\u95F4\u5185\u4E0D\u518D\u9700\u8981\u53D1 "),le={href:"https://blog.csdn.net/wanwan5856/article/details/79592681",target:"_blank",rel:"noopener noreferrer"},ie=t("\u51CF\u5C11 options \u8BF7\u6C42\u6B21\u6570 \u548C \u6570\u636E\u91CF\u5927\u65F6\u524D\u7AEF\u6E32\u67D3\u7684\u5904\u7406 - wanwan5856 \u7684\u535A\u5BA2 - CSDN \u535A\u5BA2"),re=l(`<p>\u7B80\u5355\u8BF7\u6C42\u7684\u5B9A\u4E49\uFF0C\u6765\u81EA MDN\uFF0C\u4E0D\u662F\u6807\u51C6\u3002\u7B80\u5355\u8BF7\u6C42\u8981\u6EE1\u8DB3\u4E00\u7CFB\u5217\u6761\u4EF6\uFF0C\u5982\u4EC5\u4F7F\u7528 CORS \u5B89\u5168 \u8BF7\u6C42\u5934\u3002\u800C\u9700\u8981 prelight \u7684\u8BF7\u6C42\uFF0C\u610F\u5473\u7740\u6D89\u53CA\u7528\u6237\u6570\u636E</p><h2 id="\u8FD4\u56DE\u72B6\u6001\u7801" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u72B6\u6001\u7801" aria-hidden="true">#</a> \u8FD4\u56DE\u72B6\u6001\u7801</h2><p>\u52A9\u8BB0\uFF1A1-5 / I OR CS</p><div class="language-text ext-text"><pre class="language-text"><code>1xx \u4FE1\u606F Information(I)
2xx \u6210\u529F OK(O)
3xx \u91CD\u5B9A\u5411 Redirect(R)
4xx \u5BA2\u6237\u7AEF\u9519\u8BEF Client Error(C)
5xx \u670D\u52A1\u7AEF\u9519\u8BEF Server Error(S)
</code></pre></div><p>pragma \u3014\u8BA1\u3015\u6742\u6CE8,\u7F16\u8BD1\u6307\u793A</p><p>\u4EA4\u6362\u5B8C\u8FDE\u63A5\u5373\u5173\u95ED\uFF0C\u800C\u957F\u8FDE\u63A5(HTTP1.1)\u53EA\u6709\u5728\u670D\u52A1\u7AEF\u6536\u5230<code>Connection: close</code>\u624D\u4F1A\u5173\u95ED</p><ul><li>206 - \u5927\u6587\u4EF6\u5206\u5757\u4E0B\u8F7D\u65F6\u4F7F\u7528 <code>curl --header &quot;Range: bytes=500-1000&quot; https://raw.githubusercontent.com/Germey/LaravelGeetest/master/README.md</code></li></ul><h2 id="get-\u4E0E-post-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#get-\u4E0E-post-\u533A\u522B" aria-hidden="true">#</a> GET \u4E0E POST \u533A\u522B</h2><ul><li>\u7528\u9014</li><li>\u53C2\u6570\u5F62\u5F0F</li><li>\u7F16\u7801</li><li>\u5B89\u5168\u6027</li></ul><p>\u5BF9\u4E8E GET \u65B9\u5F0F\u7684\u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u4F1A\u628A http header \u548C data \u4E00\u5E76\u53D1\u9001\u51FA\u53BB\uFF0C\u670D\u52A1\u5668\u54CD\u5E94 200\uFF08\u8FD4\u56DE\u6570\u636E\uFF09\uFF1B \u800C\u5BF9\u4E8E POST\uFF0C\u6D4F\u89C8\u5668\u5148\u53D1\u9001 header\uFF0C\u670D\u52A1\u5668\u54CD\u5E94 100 continue\uFF0C\u6D4F\u89C8\u5668\u518D\u53D1\u9001 data\uFF0C\u670D\u52A1\u5668\u54CD\u5E94 200 ok\uFF08\u8FD4\u56DE\u6570\u636E\uFF09\u3002</p><p>get \u53EA\u8BFB\uFF0Ccdn \u7F13\u5B58</p><p>post \u526F\u4F5C\u7528\uFF0C\u9700\u8981 web \u670D\u52A1\u5668\u64CD\u4F5C</p><p>100 continue \u5E76\u975E post \u5FC5\u7136\u4F7F\u7528\uFF0C\u4F7F\u7528\u573A\u666F\u662F post/put\uFF0C\u53D1\u9001\u5927\u91CF\u6570\u636E\u573A\u666F\u7684\u8BF7\u6C42\u4F18\u5316</p>`,13),ce={href:"https://gms.tf/when-curl-sends-100-continue.html",target:"_blank",rel:"noopener noreferrer"},he=t("When curl sends 100-continue | Georg's Log"),de={href:"https://www.zhihu.com/question/31640769",target:"_blank",rel:"noopener noreferrer"},pe=t("post \u76F8\u6BD4get \u6709\u5F88\u591A\u4F18\u70B9\uFF0C\u4E3A\u4EC0\u4E48\u73B0\u5728\u7684HTTP\u901A\u4FE1\u4E2D\u5927\u591A\u6570\u8BF7\u6C42\u8FD8\u662F\u4F7F\u7528get\uFF1F - \u77E5\u4E4E"),_e=l('<h3 id="get-url-\u957F\u5EA6\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#get-url-\u957F\u5EA6\u9650\u5236" aria-hidden="true">#</a> get url \u957F\u5EA6\u9650\u5236</h3><p>\u670D\u52A1\u5668\u622A\u65AD 8kb IE 2kb chrome 2MB firefox \u4E0D\u9650\u5236</p><p>\u5B9E\u6D4B\uFF0C\u8D85\u8FC7 10kb \u53EF\u6B63\u5E38\u8BF7\u6C42\uFF0C\u5730\u5740\u680F\u663E\u793A\u7701\u7565\u53F7 \u8D85\u8FC7 25kb \u8BF7\u6C42\u5F02\u5E38</p><h2 id="\u8BF7\u63CF\u8FF0-cookies\u3001sessionstorage-\u548C-localstorage-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u63CF\u8FF0-cookies\u3001sessionstorage-\u548C-localstorage-\u7684\u533A\u522B" aria-hidden="true">#</a> \u8BF7\u63CF\u8FF0 cookies\u3001sessionStorage \u548C localStorage \u7684\u533A\u522B?</h2><ol><li>\u5B58\u50A8\u65B9\u5F0F\uFF1Acookies \u5B58\u50A8\u5728 http \u4FE1\u606F\u7684\u5B9E\u4F53\u4E2D\uFF0Chttp \u6BCF\u6B21\u8BF7\u6C42\u90FD\u4F1A\u643A\u5E26 cookie, cookie \u5728\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u95F4\u6765\u56DE\u4F20\u9012\uFF0C \u540E\u4E24\u8005\u4EC5\u5728\u672C\u5730\u4FDD\u5B58</li><li>\u5B58\u50A8\u5927\u5C0F\uFF1Acookie \u6570\u636E\u4E0D\u80FD\u8D85\u8FC7 4k; \u540E\u4E24\u8005\u8981\u5927\u5F88\u591A\uFF0C\u53EF\u4EE5\u8FBE\u5230 5M</li><li>\u6709\u6548\u671F\uFF1Acookie \u5728\u8BBE\u7F6E\u7684 cookie \u6709\u6548\u671F\u4E4B\u524D\u6709\u6548\uFF0C\u5373\u4F7F\u6D4F\u89C8\u5668\u6216\u7A97\u53E3\u5173\u95ED\uFF1BsessionStorage \u4EC5\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u7A97\u53E3\u5173\u95ED\u524D\u6709\u6548\uFF0C\u4E0D\u53EF\u6301\u4E45\u4FDD\u5B58\uFF1BlocalSorage \u59CB\u7EC8\u6709\u6548\uFF0C\u7A97\u53E3\u6216\u6D4F\u89C8\u5668\u5173\u95ED\u4E5F\u4E00\u76F4\u4FDD\u5B58\uFF0C\u53EF\u505A\u6301\u4E45\u6570\u636E</li><li>\u4F5C\u7528\u57DF\uFF1Acookie\u3001localStorage \u5728\u6240\u6709\u7684\u540C\u6E90\u7A97\u53E3\u4E2D\u90FD\u662F\u5171\u4EAB\u7684\uFF1BsessionStorage \u53EA\u80FD\u5728\u5F53\u524D\u9875\u9762\u4F7F\u7528</li></ol><p>sessionStorage</p><ul><li>\u5237\u65B0\u6216\u6062\u590D\u9875\u9762\uFF08\u91CD\u65B0\u6253\u5F00\u5173\u95ED\u7684\u6807\u7B7E\u9875\uFF09\u65F6\uFF0Csession \u5B58\u5728</li><li>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u76F8\u540C URL \u9875\u9762\uFF0C\u4F1A\u521B\u5EFA\u65B0\u7684 session</li><li>\u8BD5\u9A8C https://codesandbox.io/s/992th?file=/src/index.js</li></ul>',7),ue=t("sessionStorage, localStorage \u5B58\u50A8 size \u9650\u5236 5MB\uFF0C\u5404\u6D4F\u89C8\u5668\u4E00\u81F4\uFF0C\u540C\u6B65\u6267\u884C\uFF0C\u53EF\u963B\u585E\u4E3B\u7EBF\u7A0B "),ge={href:"https://web.dev/storage-for-the-web/#check",target:"_blank",rel:"noopener noreferrer"},fe=t("Storage for the web"),xe=e("h2",{id:"http-\u4E0E-tcp-\u533A\u522B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#http-\u4E0E-tcp-\u533A\u522B","aria-hidden":"true"},"#"),t(" http \u4E0E tcp \u533A\u522B")],-1),me=e("ul",null,[e("li",null,"tcp \u662F\u4F20\u8F93\u5C42\uFF0Chttp \u662F\u8DD1\u5728 tcp \u4E0A\u7684\u5E94\u7528\u5C42\u534F\u8BAE")],-1),be={href:"https://www.infoq.cn/article/x80uOvcRyxVYw3KVusUm",target:"_blank",rel:"noopener noreferrer"},Te=t("HTTP/3 \u7684\u8FC7\u53BB\u3001\u73B0\u5728\u548C\u672A\u6765-InfoQ"),ke=l('<h2 id="dns" tabindex="-1"><a class="header-anchor" href="#dns" aria-hidden="true">#</a> DNS</h2><ol><li>\u6D4F\u89C8\u5668 cache</li><li>\u64CD\u4F5C\u7CFB\u7EDF cache</li><li>\u8DEF\u7531\u5668 cache</li><li>ISP \u7F51\u7EDC\u8FD0\u8425\u5546 cache (\u4EE5\u4E0A\u9012\u5F52\u67E5\u8BE2 - dns \u670D\u52A1\u5668)</li><li>root (\u4EE5\u4E0B \u8FED\u4EE3\u67E5\u8BE2)</li><li>\u57DF</li><li>\u6743\u5A01\u89E3\u6790\u670D\u52A1\u5668 - \u8FD4\u56DE IP</li></ol><p>\u6D41\u7A0B\uFF1A\u89E3\u6790-\u8BF7\u6C42-\u6E32\u67D3</p>',3),Se=t("\u9012\u5F52\u67E5\u8BE2-\u5BA2\u6237\u7AEF\u67E5\u4E00\u6B21\uFF0C\u8FED\u4EE3\u67E5\u8BE2-\u5BA2\u6237\u7AEF\u53CD\u590D\u67E5 "),we={href:"https://www.cnblogs.com/xiangsikai/p/8438601.html",target:"_blank",rel:"noopener noreferrer"},Ce=t("DNS \u9012\u5F52/\u8FED\u4EE3 \u539F\u7406 - kevin.Xiang - \u535A\u5BA2\u56ED"),Ee={href:"https://github.com/lgwebdream/FE-Interview/issues/14#issuecomment-647606369",target:"_blank",rel:"noopener noreferrer"},Pe=t("\u7B2C 8 \u9898\uFF1A\u8BF4\u4E00\u4E0B Http \u7F13\u5B58\u7B56\u7565\uFF0C\u6709\u4EC0\u4E48\u533A\u522B\uFF0C\u5206\u522B\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898 \xB7 Issue #14 \xB7 lgwebdream/FE-Interview"),Le={href:"https://www.jianshu.com/p/54cc04190252",target:"_blank",rel:"noopener noreferrer"},ve=t("\u6DF1\u5165\u7406\u89E3\u6D4F\u89C8\u5668\u7684\u7F13\u5B58\u673A\u5236 - \u7B80\u4E66"),He=l(`<h2 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> TCP</h2><p>TCP \u4E09\u6B21\u63E1\u624B\uFF0C\u5EFA\u7ACB\u53EF\u9760\u8FDE\u63A5\uFF0C\u53CC\u8FB9\u8981\u540C\u6B65(SYN)\u548C\u786E\u8BA4(ACK)</p><div class="language-text ext-text"><pre class="language-text"><code>C -&gt; SYN -&gt; S
C &lt;- SYN-ACK &lt;- S
C -&gt; ACK -&gt; S
</code></pre></div><p>\u5E8F\u5217\u53F7\u548C\u786E\u8BA4\u53F7\u7684\u4F7F\u7528\u5141\u8BB8\u53CC\u65B9\u68C0\u6D4B\u4E22\u5931\u6216\u4E71\u5E8F\u7684\u6570\u636E\u7247\u6BB5</p><p>https://www.google.com/search?q=tcp+handshake&amp;oq=tcp+handshake&amp;aqs=chrome..69i57.6609j0j7&amp;sourceid=chrome&amp;ie=UTF-8</p><p>\u56DB\u6B21\u6325\u624B Finish</p><div class="language-text ext-text"><pre class="language-text"><code>C -&gt; FIN -&gt; S
C &lt;- ACK &lt;- S
C &lt;- keep send and FIN &lt;- S
C -&gt; ACK -&gt; S
</code></pre></div>`,7),Ne={href:"https://wiki.wireshark.org/TCP%25204-times%2520close",target:"_blank",rel:"noopener noreferrer"},Me=t("TCP 4-times close - The Wireshark Wiki"),Ie=l('<h2 id="etag-\u548C-last-modified-\u533A\u522B-\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#etag-\u548C-last-modified-\u533A\u522B-\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> Etag \u548C Last-Modified \u533A\u522B\uFF0C\u4F7F\u7528\u573A\u666F</h2><ul><li>\u4F18\u5148\u7EA7</li><li>\u51C6\u786E\u6027\u3001\u53CA\u65F6\u6027</li><li>\u573A\u666F</li></ul><blockquote><p>Etag nginx \u662F\u57FA\u4E8E Last-Modified \u548C Content-Length \u8BA1\u7B97\uFF0C\u66F4\u65B0\u66F4\u53CA\u65F6\uFF1F</p></blockquote><h2 id="expires-\u548C-cache-control" tabindex="-1"><a class="header-anchor" href="#expires-\u548C-cache-control" aria-hidden="true">#</a> Expires \u548C Cache-Control</h2><p>Expires \u8981\u6C42\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u7684\u65F6\u949F\u4E25\u683C\u540C\u6B65\u3002 HTTP1.1 \u5F15\u5165 Cache-Control\u6765\u514B\u670DExpires\u5934\u7684\u9650\u5236\u3002\u5982\u679Cmax-age\u548CExpires\u540C\u65F6\u51FA\u73B0\uFF0C\u5219 max-age \u6709\u66F4\u9AD8\u7684\u4F18\u5148\u7EA7\u3002</p>',5),Oe=t("Last-Modified \u4E0E Etag \u5BF9\u6BD4\uFF0C\u7CBE\u786E\u5EA6\u3001\u5206\u5E03\u5F0F\u90E8\u7F72\u4E00\u81F4\u6027\u3001\u6027\u80FD\u6D88\u8017\u3001\u4F18\u5148\u7EA7 "),De={href:"https://mp.weixin.qq.com/s?__biz=MzA4ODUzNTE2Nw==&mid=2451060772&idx=3&sn=3ee0c658dd84a6e481bb3cc14e502a04&chksm=87c42134b0b3a822122a78b3bb676d122c0fbcd280dc9facd0c19e7cbe4b638ab09b283c590d#rd",target:"_blank",rel:"noopener noreferrer"},Re=t("\u901A\u8FC7 Node.js \u5C0F\u793A\u4F8B\u5B66\u4E60\u6D4F\u89C8\u5668\u7F13\u5B58\u7B56\u7565"),qe=l('<h2 id="\u52A0\u5BC6" tabindex="-1"><a class="header-anchor" href="#\u52A0\u5BC6" aria-hidden="true">#</a> \u52A0\u5BC6</h2><p>HTTPS\u662F\u5BF9\u79F0\u52A0\u5BC6\u8FD8\u662F\u975E\u5BF9\u79F0\u52A0\u5BC6 HTTPS \u5728<strong>\u5185\u5BB9\u4F20\u8F93</strong>\u7684\u52A0\u5BC6\u4E0A\u4F7F\u7528\u7684\u662F\u5BF9\u79F0\u52A0\u5BC6\uFF0C\u975E\u5BF9\u79F0\u52A0\u5BC6\u53EA\u4F5C\u7528\u5728<strong>\u8BC1\u4E66\u9A8C\u8BC1</strong>\u9636\u6BB5\u3002</p><h2 id="\u5E42\u7B49\u6027" tabindex="-1"><a class="header-anchor" href="#\u5E42\u7B49\u6027" aria-hidden="true">#</a> \u5E42\u7B49\u6027</h2><p>\u4EC0\u4E48\u662F\u5E42\u7B49\uFF1F\u4E00\u4E2A\u64CD\u4F5C\u5982\u679C\u5177\u6709\u4EFB\u610F\u591A\u6B21\u6267\u884C\u6240\u4EA7\u751F\u7684\u5F71\u54CD\u5747\u4E0E\u4E00\u6B21\u6267\u884C\u7684\u5F71\u54CD\u76F8\u540C\uFF0C\u6211\u4EEC\u5C31\u79F0\u4E4B\u4E3A\u5E42\u7B49\u3002</p><p>POST \u4E0D\u6EE1\u8DB3\uFF0C\u591A\u6B21\u8C03\u7528\u521B\u5EFA\u591A\u4E2A</p><p>GET/PUT/DELETE \u6EE1\u8DB3</p><p>\u5E42\u7B49\u8BBE\u8BA1\u7684\u4F5C\u7528\u662F\uFF0C\u5141\u8BB8\u5BA2\u6237\u7AEF\u591A\u6B21\u91CD\u8BD5\uFF0C\u800C\u4E0D\u4EA7\u751F\u610F\u5916\u526F\u4F5C\u7528</p><h2 id="\u5E38\u7528-code" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528-code" aria-hidden="true">#</a> \u5E38\u7528 code</h2><p>304 \u547D\u4E2D\u534F\u5546\u7F13\u5B58\uFF0C\u5BA2\u6237\u7AEF\u53D6\u672C\u5730\u7F13\u5B58</p><p>403 Forbidden \u670D\u52A1\u7AEF\u6709\u80FD\u529B\u5904\u7406\uFF0C\u5BA2\u6237\u7AEF IP \u88AB\u5C01\u7981</p>',10);function ye(Fe,ze){const n=i("RouterLink"),s=i("ExternalLinkIcon");return c(),h(d,null,[_,e("nav",u,[e("ul",null,[e("li",null,[o(n,{to:"#\u6D4F\u89C8\u5668\u7F13\u5B58"},{default:a(()=>[g]),_:1}),e("ul",null,[e("li",null,[o(n,{to:"#\u7F13\u5B58\u6700\u4F73\u7B56\u7565"},{default:a(()=>[f]),_:1})]),e("li",null,[o(n,{to:"#\u7F13\u5B58\u6709\u6548\u671F\u8BA1\u7B97"},{default:a(()=>[x]),_:1})])])]),e("li",null,[o(n,{to:"#https"},{default:a(()=>[m]),_:1})]),e("li",null,[o(n,{to:"#cors"},{default:a(()=>[b]),_:1})]),e("li",null,[o(n,{to:"#\u8FD4\u56DE\u72B6\u6001\u7801"},{default:a(()=>[T]),_:1})]),e("li",null,[o(n,{to:"#get-\u4E0E-post-\u533A\u522B"},{default:a(()=>[k]),_:1}),e("ul",null,[e("li",null,[o(n,{to:"#get-url-\u957F\u5EA6\u9650\u5236"},{default:a(()=>[S]),_:1})])])]),e("li",null,[o(n,{to:"#\u8BF7\u63CF\u8FF0-cookies\u3001sessionstorage-\u548C-localstorage-\u7684\u533A\u522B"},{default:a(()=>[w]),_:1})]),e("li",null,[o(n,{to:"#http-\u4E0E-tcp-\u533A\u522B"},{default:a(()=>[C]),_:1})]),e("li",null,[o(n,{to:"#dns"},{default:a(()=>[E]),_:1})]),e("li",null,[o(n,{to:"#tcp"},{default:a(()=>[P]),_:1})]),e("li",null,[o(n,{to:"#etag-\u548C-last-modified-\u533A\u522B-\u4F7F\u7528\u573A\u666F"},{default:a(()=>[L]),_:1})]),e("li",null,[o(n,{to:"#expires-\u548C-cache-control"},{default:a(()=>[v]),_:1})]),e("li",null,[o(n,{to:"#\u52A0\u5BC6"},{default:a(()=>[H]),_:1})]),e("li",null,[o(n,{to:"#\u5E42\u7B49\u6027"},{default:a(()=>[N]),_:1})]),e("li",null,[o(n,{to:"#\u5E38\u7528-code"},{default:a(()=>[M]),_:1})])])]),e("p",null,[e("a",I,[O,o(s)])]),D,e("p",null,[e("a",R,[q,o(s)])]),e("ul",null,[y,e("li",null,[F,e("p",null,[e("a",z,[A,o(s)])]),e("p",null,[e("a",G,[K,o(s)])]),e("p",null,[e("a",U,[V,o(s)])])]),j,W]),B,e("p",null,[e("a",Y,[Q,o(s)])]),X,J,Z,$,ee,e("p",null,[e("a",te,[oe,o(s)])]),ne,se,e("p",null,[ae,e("a",le,[ie,o(s)])]),re,e("p",null,[e("a",ce,[he,o(s)]),e("a",de,[pe,o(s)])]),_e,e("p",null,[ue,e("a",ge,[fe,o(s)])]),xe,me,e("p",null,[e("a",be,[Te,o(s)])]),ke,e("p",null,[Se,e("a",we,[Ce,o(s)])]),e("p",null,[e("a",Ee,[Pe,o(s)])]),e("p",null,[e("a",Le,[ve,o(s)])]),He,e("p",null,[e("a",Ne,[Me,o(s)])]),Ie,e("p",null,[Oe,e("a",De,[Re,o(s)])]),qe],64)}var Ge=r(p,[["render",ye],["__file","http.html.vue"]]);export{Ge as default};
