import{_ as a,r as l,o,c as r,a as e,b as s,F as c,e as i,d as n}from"./app.6e1bfb90.js";const _={},h=i('<h2 id="\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u539F\u5219" aria-hidden="true">#</a> \u539F\u5219</h2><ul><li>\u4E0A\u7B56\uFF1A\u5728\u7528\u6237\u611F\u77E5\u53CD\u9988\u524D\u89E3\u51B3\uFF0C\u5F71\u54CD\u6700\u5C0F</li><li>\u4E2D\u7B56\uFF1A \u968F\u7740\u65F6\u95F4\uFF0C\u5F71\u54CD\u9762\u6269\u5927\uFF0C\u88AB\u52A8\u5904\u7406</li></ul><p>\u4E8B\u6545\u901A\u62A5\u4F18\u4E8E\u4E8B\u6545\u5904\u7406</p><p>\u63A5\u6536\u9700\u6C42\u3001UI \u53D8\u5316\u65F6\uFF0C\u8981\u6C42\u5C3D\u91CF\u5C0F\u6539\u52A8\u3001\u589E\u91CF\u5F0F\uFF0C\u51CF\u5C11\u4E0D\u5FC5\u8981\u6539\u52A8\uFF0C\u5F71\u54CD\u9690\u85CF\u903B\u8F91</p><h2 id="\u5F00\u53D1\u3001\u6D4B\u8BD5\u6C9F\u901A\u534F\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u3001\u6D4B\u8BD5\u6C9F\u901A\u534F\u4F5C" aria-hidden="true">#</a> \u5F00\u53D1\u3001\u6D4B\u8BD5\u6C9F\u901A\u534F\u4F5C</h2><ul><li>\u4E00\u822C\u6027 bug \u8D70\u6D41\u7A0B\u6D41\u8F6C\u3002\u5982\u679C\u662F\u963B\u585E\u6027 bug \u53EF\u540C\u65F6\u53D1\u7FA4\u91CC</li><li>\u76EE\u7684\u662F\u63D0\u5347\u534F\u4F5C\u6548\u7387\uFF0C\u5F00\u53D1\u5BF9\u4E00\u822C\u6027 bug \u53EF\u4EE5\u96C6\u4E2D\u65F6\u95F4\u9AD8\u6548\u5904\u7406</li></ul>',6),u={href:"https://zhuanlan.zhihu.com/p/136858266",target:"_blank",rel:"noopener noreferrer"},d=n("Bug\u7684\u751F\u547D\u5468\u671F\u72B6\u6001\u6D41\u7A0B\u56FE - \u77E5\u4E4E"),p=e("p",null,"\u5F53\u4F60\u6B63\u5728\u6253\u9020\u90A3\u4E9B\u53EF\u80FD\u4F1A\u5931\u8D25\u7684\u4E1C\u897F\u65F6\uFF0C\u5FC5\u987B\u8981\u63A5\u53D7\u4E00\u4E9B\u65E0\u6CD5\u907F\u514D\u7684\u9519\u8BEF\u3002\u4EBA\u4EEC\u4E0D\u5E94\u8BE5\u4E3A\u806A\u660E\u7684\u5931\u8D25\u627F\u62C5\u8D23\u4EFB\uFF0C\u800C\u5E94\u8BE5\u4E3A\u6CA1\u6709\u4ECE\u4E2D\u5B66\u5230\u7ECF\u9A8C\u627F\u62C5\u8D23\u4EFB\u3002\u2014\u2014Ozan Varol",-1),f=e("p",null,"\u5728\u8FD9\u79CD\u73AF\u5883\u4E0B\uFF0C\u90A3\u4E9B\u4ECD\u7136\u4E0D\u613F\u610F\u516C\u5F00\u8C08\u8BBA\u5931\u8D25\u7684\u5DE5\u7A0B\u5E08\uFF0C\u90A3\u4E9B\u4ECD\u7136\u5BF9\u201C\u603B\u7ED3\u7ECF\u9A8C\u6559\u8BAD\u201D\u6577\u884D\u6F66\u8349\u7684\u5DE5\u7A0B\u5E08\uFF0C\u6CE8\u5B9A\u5C06\u4E00\u4E8B\u65E0\u6210\u3002",-1),g=e("p",null,[e("strong",null,"\u8FD9\u4E9B\u56E2\u961F\u62E5\u6709\u5F00\u653E\u7684\u6C1B\u56F4\uFF0C\u5458\u5DE5\u8BA4\u4E3A\u63A2\u8BA8\u9519\u8BEF\u7684\u505A\u6CD5\u662F\u5B89\u5168\u7684\uFF0C\u4ED6\u4EEC\u66F4\u613F\u610F\u4E0E\u4ED6\u4EBA\u5206\u4EAB\u5931\u8D25\u7684\u7ECF\u9A8C\uFF0C\u5E76\u79EF\u6781\u52AA\u529B\u51CF\u5C11\u5931\u8D25\uFF0C\u6240\u4EE5\u4ED6\u4EEC\u7684\u8868\u73B0\u66F4\u4E3A\u4F18\u79C0"),n("\u3002")],-1),m=e("p",null,[n("\u57C3\u5FB7\u8499\u68EE\u628A\u8FD9\u79CD\u6C1B\u56F4\u79F0\u4E3A\u5FC3\u7406\u5B89\u5168\u3002\u7528\u57C3\u5FB7\u8499\u68EE\u7684\u8BDD\u6765\u8BF4\uFF0C"),e("strong",null,"\u5FC3\u7406\u5B89\u5168\u662F\u6307\u201C\u5728\u5B9E\u73B0\u96C4\u5FC3\u52C3\u52C3\u7684\u7EE9\u6548\u76EE\u6807\u8FC7\u7A0B\u4E2D\uFF0C\u6CA1\u6709\u4EBA\u4F1A\u56E0\u4E3A\u72AF\u9519\u3001\u63D0\u95EE\u6216\u6C42\u52A9\u800C\u53D7\u5230\u60E9\u7F5A\u6216\u7F9E\u8FB1\u201D"),n("\u3002")],-1),b=e("p",null,[n("\u5FC3\u7406\u4E0D\u5B89 \u7684\u73AF\u5883\u662F\u6307\uFF0C\u72AF\u9519\u4F1A\u88AB\u60E9\u7F5A\u548C\u7F9E\u8FB1\u3002"),e("strong",null,"\u8FD9\u79CD\u73AF\u5883\u4F1A\u5F62\u6210\u6076\u6027\u5FAA\u73AF\u3002\u90A3\u4E9B\u8868\u73B0\u6700\u5DEE\u3001\u6700\u9700\u8981\u6539\u8FDB\u7684\u56E2\u961F\u4E5F\u6700\u4E0D\u53EF\u80FD\u4E0A\u62A5\u9519\u8BEF"),n("\uFF1B\u800C\u5982\u679C\u9519\u8BEF\u6CA1\u6709\u4E0A\u62A5\uFF0C\u56E2\u961F\u4FBF\u65E0\u6CD5\u6539\u8FDB\u3002")],-1);function x(k,V){const t=l("ExternalLinkIcon");return o(),r(c,null,[h,e("p",null,[e("a",u,[d,s(t)])]),p,f,g,m,b],64)}var N=a(_,[["render",x],["__file","bug.html.vue"]]);export{N as default};
