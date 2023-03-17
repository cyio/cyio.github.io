import{_ as r,r as n,o,c as p,a as e,b as c,F as s,e as a,d}from"./app.de511a45.js";const h={},i=a('<h1 id="yuv" tabindex="-1"><a class="header-anchor" href="#yuv" aria-hidden="true">#</a> YUV</h1><h2 id="yuv-\u538B\u7F29\u3001\u4F20\u8F93" tabindex="-1"><a class="header-anchor" href="#yuv-\u538B\u7F29\u3001\u4F20\u8F93" aria-hidden="true">#</a> YUV \u538B\u7F29\u3001\u4F20\u8F93</h2><p>YUV \u8FC7\u53BB\u662F\u5E94\u7528\u5728\u7535\u89C6\u9886\u57DF\uFF0C\u73B0\u5728\u4E00\u822C\u8BF4\u7684 YUV \u662F\u6307\u5E94\u7528\u4E8E\u4E92\u8054\u7F51\u9886\u57DF\u7684 YCbCr</p><p>\u4EAE\u5EA6\u3001\u8272\u8C03\u3001\u8272\u9971\u548C\u5EA6</p><p>\u539F\u59CB\u50CF\u7D20\u4FE1\u606F\uFF0C\u4E0D\u5305\u542B\u91C7\u6837\u683C\u5F0F\u3001\u5BBD\u9AD8</p><p>\u53EF\u4EE5\u964D\u7EA7\u6210\u9ED1\u767D</p><h2 id="rgb-\u7528\u4E8E\u663E\u793A\u5668" tabindex="-1"><a class="header-anchor" href="#rgb-\u7528\u4E8E\u663E\u793A\u5668" aria-hidden="true">#</a> RGB \u7528\u4E8E\u663E\u793A\u5668</h2><p>\u663E\u793A\u5668\u4F7F\u7528 RGB \u53D1\u5149</p><p>R/G/B \u4E09\u4E2A\u5206\u91CF\u91CC\u90FD\u6709\u9AD8\u5EA6\u4FE1\u606F</p>',9),l={href:"https://ffmpeg.xianwaizhiyin.net/base-knowledge/raw-yuv.html",target:"_blank",rel:"noopener noreferrer"},u=d("YUV\u8272\u5F69\u7A7A\u95F4 \xB7 FFmpeg\u539F\u7406"),_=a(`<p>RGB \u8BC9\u6C42\u4E8E\u4EBA\u773C\u5BF9\u8272\u5F69\u7684\u611F\u5E94\uFF0CYUV\u5219\u7740\u91CD\u4E8E\u89C6\u89C9\u5BF9\u4E8E\u4EAE\u5EA6\u7684\u654F\u611F\u7A0B\u5EA6\u3002\u56E0\u4E3A\u4EBA\u773C\u76F8\u6BD4\u8272\u5EA6\uFF0C\u5BF9\u4EAE\u5EA6\u66F4\u654F\u611F\u3002\u6240\u4EE5YUV\u5BF9\u4EAE\u5EA6\u7684\u5B8C\u5168\u91C7\u6837\uFF0C\u8272\u5EA6\u7684\u9009\u62E9\u91C7\u6837\u3002\u5373\u53EF\u5728\u4EBA\u773C\u5BDF\u89C9\u4E0D\u5230\u7684\u8303\u56F4\u5185\u6700\u5927\u9650\u5EA6\u7684\u538B\u7F29\u56FE\u50CF\u3002\u8272\u5EA6\u62BD\u6837</p><h2 id="yuv420" tabindex="-1"><a class="header-anchor" href="#yuv420" aria-hidden="true">#</a> YUV420</h2><blockquote><p>\u7ECF\u8FC7\u5927\u91CF\u7814\u7A76\u5B9E\u9A8C\u8868\u660E\uFF0C\u89C6\u89C9\u7CFB\u7EDF \u5BF9 \u8272\u5EA6 \u7684\u654F\u611F\u5EA6 \u662F\u8FDC\u5C0F\u4E8E \u4EAE\u5EA6\u7684\u3002\u6240\u4EE5\u53EF\u4EE5\u5BF9 \u8272\u5EA6 \u91C7\u7528\u66F4\u5C0F\u7684\u91C7\u6837\u7387\u6765\u538B\u7F29\u6570\u636E\uFF0C\u5BF9\u4EAE\u5EA6\u91C7\u7528\u6B63\u5E38\u7684\u91C7\u6837\u7387\u5373\u53EF</p></blockquote><blockquote><p>\u7531\u4E8E\u5927\u591A\u6570\u89C6\u9891\u7F16\u7801\u4F7F\u7528\u7684\u662F YUV420\uFF0C\u6240\u4EE5\u6211\u4EEC\u7ECF\u5E38\u8BF4\u7684 \u89C6\u9891\u5206\u8FA8\u7387\uFF0C\u662F\u6307\u4ED6\u7684\u4EAE\u5EA6\u5206\u8FA8\u7387\uFF0C\u56E0\u4E3A\u53EA\u6709\u4EAE\u5EA6\u624D\u662F\u94FA\u6EE1\u7684\uFF0CUV \u4E0D\u662F\u3002</p></blockquote><p>\u89C6\u9891\u4F7F\u7528\u5E7F\u6CDB\u7684 YUV420 \u683C\u5F0F</p><p>422 \u683C\u5F0F\uFF0C\u662F\u7B2C\u4E00\u7B2C\u4E8C\u4E2A\u50CF\u7D20\u5171\u4EAB \u4E00\u7EC4UV\uFF0C\u7B2C\u4E09\u7B2C\u56DB\u50CF\u7D20\u5171\u4EAB \u4E00\u7EC4 UV</p><p>YUV 4:4:4 \u8DDF RGB24 \u4E00\u6837\uFF0C\u6BCF\u4E2A\u50CF\u7D20\u5360 3 \u5B57\u8282\uFF0C\u56FE\u7247\u5BBD\u9AD8\u662F 1920x1080 \uFF0C\u6240\u4EE5\u8FD9\u4E2A yuv \u56FE\u7247\u7684\u5927\u5C0F\u5982\u4E0B</p><div class="language-text ext-text"><pre class="language-text"><code>SIZE=1920\u22171080\u22173
6075 Kb
</code></pre></div><p>YUV 420 \u5C0F\u4E00\u534A\uFF0C\u4E5F\u9700\u8981 3037 kb</p><p>\u52A8\u753B\u770B\u8D77\u6765\u6D41\u7545\uFF0C\u9700\u8981\u4E00\u79D2\u64AD\u653E 24 \u5F20\u56FE\u7247\uFF0C1\u4E2A\u5C0F\u65F6\u7684\u7535\u5F71\u5927\u5C0F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>3\u221724\u221760\u221760=259200
</code></pre></div><p>1\u5C0F\u65F6\u7684YUV420 \u7684\u7535\u5F71\uFF0C\u9700\u8981 253G \u7A7A\u95F4\u6765\u5B58\u50A8</p><p>H264 \u7684\u538B\u7F29\u6BD4 \u53EF\u4EE5\u662F 102:1\uFF0C\u4E0A\u9762\u90A3\u4E2A 253G \u7684YUV420\u7535\u5F71\uFF0C\u538B\u7F29\u4E4B\u540E\u53EA\u9700 2.5G \u5B58\u50A8\u7A7A\u95F4</p>`,13);function V(x,v){const t=n("ExternalLinkIcon");return o(),p(s,null,[i,e("p",null,[e("a",l,[u,c(t)])]),_],64)}var b=r(h,[["render",V],["__file","yuv.html.vue"]]);export{b as default};