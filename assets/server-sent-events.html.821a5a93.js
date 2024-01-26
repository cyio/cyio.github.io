import{_ as o,r as n,o as a,c as i,a as e,b as r,F as l,e as h,d as t}from"./app.7ba70c05.js";const c={},p=h('<p>Server-sent events (SSE) \u662F\u4E00\u79CD\u5B9E\u73B0\u670D\u52A1\u5668\u5411\u5BA2\u6237\u7AEF\u63A8\u9001\u4E8B\u4EF6\u7684 Web \u6280\u672F\u3002\u5B83\u5141\u8BB8\u670D\u52A1\u5668\u63A8\u9001\u6570\u636E\u5230\u5BA2\u6237\u7AEF\uFF0C\u800C\u4E0D\u9700\u8981\u5BA2\u6237\u7AEF\u8FDB\u884C\u8F6E\u8BE2\u8BF7\u6C42\u3002SSE \u4E3B\u8981\u7528\u4E8E\u4EE5\u4E0B\u51E0\u79CD\u573A\u666F\uFF1A</p><ol><li><p>\u5B9E\u65F6\u6570\u636E\u66F4\u65B0\uFF1ASSE \u53EF\u4EE5\u5B9E\u73B0\u5B9E\u65F6\u7684\u6570\u636E\u66F4\u65B0\uFF0C\u4F8B\u5982\u80A1\u7968\u4EF7\u683C\u3001\u5929\u6C14\u9884\u62A5\u3001\u5B9E\u65F6\u804A\u5929\u7B49\u3002\u670D\u52A1\u5668\u53EF\u4EE5\u5C06\u6570\u636E\u63A8\u9001\u5230\u5BA2\u6237\u7AEF\uFF0C\u800C\u65E0\u9700\u5BA2\u6237\u7AEF\u4E0D\u505C\u5730\u53D1\u9001\u8BF7\u6C42\u3002</p></li><li><p>\u901A\u77E5\u548C\u63D0\u9192\uFF1ASSE \u53EF\u4EE5\u7528\u4E8E\u53D1\u9001\u901A\u77E5\u548C\u63D0\u9192\uFF0C\u4F8B\u5982\u65B0\u90AE\u4EF6\u901A\u77E5\u3001\u793E\u4EA4\u5A92\u4F53\u6D88\u606F\u901A\u77E5\u7B49\u3002</p></li><li><p>\u65E5\u5FD7\u548C\u76D1\u63A7\uFF1ASSE \u53EF\u4EE5\u7528\u4E8E\u5B9E\u65F6\u76D1\u63A7\u548C\u8BB0\u5F55\u7CFB\u7EDF\u65E5\u5FD7\u3001\u670D\u52A1\u5668\u72B6\u6001\u7B49\u3002</p></li><li><p>\u591A\u4EBA\u534F\u4F5C\uFF1ASSE \u53EF\u4EE5\u7528\u4E8E\u591A\u4EBA\u534F\u4F5C\u7684\u5E94\u7528\uFF0C\u4F8B\u5982\u5728\u7EBF\u6587\u672C\u7F16\u8F91\u5668\u3001\u534F\u540C\u767D\u677F\u7B49\u3002</p></li></ol><p>\u603B\u7684\u6765\u8BF4\uFF0CSSE \u53EF\u4EE5\u7528\u4E8E\u4EFB\u4F55\u9700\u8981\u5B9E\u65F6\u63A8\u9001\u6570\u636E\u7684\u573A\u666F\uFF0C\u53EF\u4EE5\u63D0\u9AD8 Web \u5E94\u7528\u7A0B\u5E8F\u7684\u6548\u7387\u548C\u6027\u80FD\uFF0C\u5E76\u51CF\u5C11\u7F51\u7EDC\u5E26\u5BBD\u7684\u5360\u7528\u3002</p><h2 id="\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a> \u7F3A\u70B9</h2><p><strong>\u5355\u5411\u901A\u4FE1\u3001\u6709\u72B6\u6001\u8FDE\u63A5</strong></p><p>\u867D\u7136 Server-sent events\uFF08SSE\uFF09\u6709\u5F88\u591A\u4F18\u70B9\uFF0C\u4F46\u4E5F\u5B58\u5728\u4E00\u4E9B\u7F3A\u70B9\uFF0C\u5305\u62EC\uFF1A</p><ol><li><p>\u517C\u5BB9\u6027\u95EE\u9898\uFF1A\u867D\u7136 SSE \u662F\u4E00\u79CD HTML5 \u89C4\u8303\uFF0C\u4F46\u5E76\u4E0D\u662F\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u5B83\u3002\u7279\u522B\u662F\u5728\u65E7\u7248\u7684\u6D4F\u89C8\u5668\u4E0A\u53EF\u80FD\u4F1A\u6709\u95EE\u9898\uFF08IE \u4E0D\u652F\u6301\uFF09\uFF0C\u9700\u8981\u4F7F\u7528 Polyfill \u6765\u89E3\u51B3\u517C\u5BB9\u6027\u95EE\u9898\u3002</p></li><li><p>\u53EF\u9760\u6027\u95EE\u9898\uFF1A\u5728 SSE \u4E2D\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u8FDE\u63A5\u662F\u957F\u671F\u4FDD\u6301\u7684\uFF0C\u5982\u679C\u8FDE\u63A5\u65AD\u5F00\uFF0C\u5219\u9700\u8981\u91CD\u65B0\u5EFA\u7ACB\u8FDE\u63A5\u3002\u5982\u679C\u670D\u52A1\u5668\u5728\u4E2D\u9014\u5D29\u6E83\u6216\u91CD\u542F\uFF0C\u5219\u5BA2\u6237\u7AEF\u5C06\u65E0\u6CD5\u63A5\u6536\u5230\u65B0\u7684\u6570\u636E\uFF0C\u76F4\u5230\u91CD\u65B0\u5EFA\u7ACB\u8FDE\u63A5\u3002</p></li><li><p>\u6709\u72B6\u6001\u8FDE\u63A5\uFF1ASSE \u7684\u8FDE\u63A5\u662F\u6709\u72B6\u6001\u7684\uFF0C\u8FD9\u610F\u5473\u7740\u670D\u52A1\u5668\u9700\u8981\u5728\u5185\u5B58\u4E2D\u7EF4\u62A4\u6BCF\u4E2A\u5BA2\u6237\u7AEF\u7684\u8FDE\u63A5\u72B6\u6001\u3002\u5982\u679C\u540C\u65F6\u6709\u5927\u91CF\u5BA2\u6237\u7AEF\u8FDE\u63A5\uFF0C\u5219\u53EF\u80FD\u4F1A\u5BF9\u670D\u52A1\u5668\u7684\u6027\u80FD\u548C\u5185\u5B58\u4F7F\u7528\u9020\u6210\u5F71\u54CD\u3002</p></li><li><p>\u5355\u5411\u901A\u4FE1\uFF1ASSE \u53EA\u652F\u6301\u670D\u52A1\u5668\u5411\u5BA2\u6237\u7AEF\u53D1\u9001\u6570\u636E\uFF0C\u5BA2\u6237\u7AEF\u65E0\u6CD5\u5411\u670D\u52A1\u5668\u53D1\u9001\u6570\u636E\u3002\u5982\u679C\u9700\u8981\u8FDB\u884C\u53CC\u5411\u901A\u4FE1\uFF0C\u5219\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u6280\u672F\uFF0C\u5982 WebSocket\u3002</p></li></ol><h2 id="\u7528\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7528\u4F8B" aria-hidden="true">#</a> \u7528\u4F8B</h2><p>Server-sent events\uFF08SSE\uFF09\u662F\u4E00\u79CD\u57FA\u4E8EWeb\u7684\u6280\u672F\uFF0C\u5DF2\u7ECF\u88AB\u5E7F\u6CDB\u5E94\u7528\u4E8E\u5404\u79CD\u9886\u57DF\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u77E5\u540D\u516C\u53F8\u6216\u9879\u76EE\u5728\u4F7F\u7528SSE\u7684\u793A\u4F8B\uFF1A</p><ol><li><p>Github: Github \u4F7F\u7528 SSE \u6765\u5411\u7528\u6237\u53D1\u9001\u5B9E\u65F6\u901A\u77E5\uFF0C\u4F8B\u5982\u4EE3\u7801\u5408\u5E76\u8BF7\u6C42\u3001\u65B0\u95EE\u9898\u7B49\u3002</p></li><li><p>Facebook: Facebook \u4F7F\u7528 SSE \u6765\u5411\u7528\u6237\u53D1\u9001\u5B9E\u65F6\u901A\u77E5\uFF0C\u4F8B\u5982\u65B0\u6D88\u606F\u3001\u65B0\u670B\u53CB\u8BF7\u6C42\u7B49\u3002</p></li><li><p>Slack: Slack \u4F7F\u7528 SSE \u6765\u5B9E\u73B0\u5B9E\u65F6\u804A\u5929\u529F\u80FD\uFF0C\u4F7F\u7528\u6237\u53EF\u4EE5\u5728\u4E0D\u5237\u65B0\u9875\u9762\u7684\u60C5\u51B5\u4E0B\u63A5\u6536\u548C\u53D1\u9001\u6D88\u606F\u3002</p></li><li><p>Google Drive: Google Drive \u4F7F\u7528 SSE \u6765\u63D0\u4F9B\u5B9E\u65F6\u534F\u4F5C\u529F\u80FD\uFF0C\u4F8B\u5982\u591A\u4EBA\u7F16\u8F91\u548C\u8BC4\u8BBA\u6587\u6863\u7B49\u3002</p></li><li><p>Financial Times: Financial Times \u4F7F\u7528 SSE \u6765\u63D0\u4F9B\u5B9E\u65F6\u65B0\u95FB\u66F4\u65B0\uFF0C\u4F7F\u7528\u6237\u53EF\u4EE5\u5728\u7F51\u7AD9\u4E0A\u83B7\u53D6\u6700\u65B0\u7684\u65B0\u95FB\u548C\u4E8B\u4EF6\u3002</p></li></ol><p>\u9664\u4E86\u4E0A\u8FF0\u516C\u53F8\u548C\u9879\u76EE\uFF0C\u8FD8\u6709\u8BB8\u591A\u5176\u4ED6\u7684\u516C\u53F8\u548C\u9879\u76EE\u6B63\u5728\u4F7F\u7528SSE\u6765\u5B9E\u73B0\u5B9E\u65F6\u901A\u77E5\u3001\u534F\u4F5C\u3001\u76D1\u63A7\u548C\u65E5\u5FD7\u8BB0\u5F55\u7B49\u529F\u80FD\u3002\u56E0\u6B64\uFF0CSSE \u662F\u4E00\u4E2A\u975E\u5E38\u6709\u7528\u7684Web\u6280\u672F\uFF0C\u5728\u8BB8\u591A\u4E0D\u540C\u7684\u5E94\u7528\u573A\u666F\u4E2D\u90FD\u5F97\u5230\u4E86\u5E7F\u6CDB\u7684\u5E94\u7528\u3002</p><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> DEMO</h2><p>https://github.com/cyio/sse-tutorial</p>',13),d={href:"https://juejin.cn/post/7205412097953808445",target:"_blank",rel:"noopener noreferrer"},S=t("\u5B9E\u65F6\u901A\u4FE1\u53D8\u5F97\u7B80\u5355\u2014\u2014\u4F7F\u7528Node.js\u548CServer-sent events\u7684\u5B8C\u6574\u6559\u7A0B - \u6398\u91D1"),_=e("p",null,"SSE \u5C01\u88C5 https://github.com/yetone/openai-translator/blob/63e0564679d9dbad37e187aa9b995304337728ce/src/content_script/utils.ts#L69",-1),u=e("h2",{id:"event-stream",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#event-stream","aria-hidden":"true"},"#"),t(" Event Stream")],-1),m=e("p",null,"WebSockets\u6216Server-Sent Events\uFF08SSE\uFF09",-1),E=e("p",null,"chrome dev tools apparently only works with the native EventSource",-1),b=e("h2",{id:"stream-fetch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stream-fetch","aria-hidden":"true"},"#"),t(" stream fetch")],-1),v=e("p",null,"chromium105+",-1),f=t("https://glitch.com/~fetch-request-stream "),g={href:"https://developer.chrome.com/articles/fetch-streaming-requests/#streaming-request-bodies",target:"_blank",rel:"noopener noreferrer"},k=t("Streaming requests with the fetch API - Chrome Developers"),x={href:"https://www.youtube.com/watch?v=o1yKuH86_So",target:"_blank",rel:"noopener noreferrer"},w=t("Consume Web streams from OpenAI using vanilla JavaScript - NO DEPENDENCIES! - YouTube"),W=t(" https://umaar.com/dev-tips/269-web-streams-openai/"),N=e("h2",{id:"\u4E0E-ws-\u5BF9\u6BD4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E0E-ws-\u5BF9\u6BD4","aria-hidden":"true"},"#"),t(" \u4E0E WS \u5BF9\u6BD4")],-1),y=e("ul",null,[e("li",null,"\u662F\u5426\u4FDD\u6301\u957F\u8FDE\u63A5\uFF0C\u53EF\u6269\u5C55\u6027\uFF0C\u6210\u672C")],-1),D=e("h2",{id:"\u6A21\u62DF-ws",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6A21\u62DF-ws","aria-hidden":"true"},"#"),t(" \u6A21\u62DF WS")],-1),F=e("ul",null,[e("li",null,"\u6A21\u62DF\uFF1A\u628A\u5386\u53F2\u8F93\u5165\u90FD\u5E26\u4E0A")],-1);function I(T,q){const s=n("ExternalLinkIcon");return a(),i(l,null,[p,e("p",null,[e("a",d,[S,r(s)])]),_,u,m,E,b,v,e("p",null,[f,e("a",g,[k,r(s)])]),e("p",null,[e("a",x,[w,r(s)]),W]),N,y,D,F],64)}var G=o(c,[["render",I],["__file","server-sent-events.html.vue"]]);export{G as default};
