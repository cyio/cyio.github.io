import{_ as r,r as t,o as n,c as o,a as e,b as s,F as c,e as i,d}from"./app.6e1bfb90.js";const h={},p=i('<h1 id="spa" tabindex="-1"><a class="header-anchor" href="#spa" aria-hidden="true">#</a> spa</h1><h2 id="\u6839\u636E\u573A\u666F\u5BF9-seo-\u9700\u6C42\u505A\u6280\u672F\u9009\u578B" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u573A\u666F\u5BF9-seo-\u9700\u6C42\u505A\u6280\u672F\u9009\u578B" aria-hidden="true">#</a> \u6839\u636E\u573A\u666F\u5BF9 seo \u9700\u6C42\u505A\u6280\u672F\u9009\u578B</h2><ol><li>\u8425\u9500\u9875\u9762\uFF0CSEO \u5F3A\u9700\u6C42 -&gt; \u9759\u6001</li><li>App\u3001\u540E\u53F0\u7CFB\u7EDF\uFF08\u9700\u8981\u767B\u5F55\uFF09\uFF0CSEO \u5F31\u9700\u6C42 -&gt; Vue/React</li><li>\u5C11\u6570\u65E2\u9700\u8981 SPA \u5F3A\u4EA4\u4E92\u6027\uFF0C\u53C8\u5BF9 SEO \u548C\u9996\u5C4F\u901F\u5EA6\u6709\u521A\u6027\u9700\u6C42 -&gt; SSR</li></ol><h2 id="vue-seo-\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#vue-seo-\u8BBE\u7F6E" aria-hidden="true">#</a> Vue SEO \u8BBE\u7F6E</h2><h3 id="prerender-spa-plugin" tabindex="-1"><a class="header-anchor" href="#prerender-spa-plugin" aria-hidden="true">#</a> prerender-spa-plugin</h3><p>prerender-spa-plugin \u9884\u6E32\u67D3\u63D2\u4EF6\u7684\u4F7F\u7528\u8BF4\u660E - \u4E2A\u4EBA\u6587\u7AE0 - SegmentFault \u7B49 v3 \u7A33\u5B9A\u518D\u8BF4</p><h3 id="vue-meta" tabindex="-1"><a class="header-anchor" href="#vue-meta" aria-hidden="true">#</a> vue-meta</h3><p>\u9009\u62E9\u8FD9\u4E2A\u662F\u54EA\u90FD\u80FD\u6258\u7BA1</p><p>google \u652F\u6301\u540C\u6B65 JS \uFF0C\u4F46\u6211\u4EEC\u4E00\u822C\u662F\u5F02\u6B65\uFF0C\u670D\u52A1\u7AEF\u6E32\u67D3\u6709\u70B9\u590D\u6742</p><p>react Atyantik/react-pwa</p><blockquote><p>\u58F0\u660E\u5F0F\u5730\u5C06\u72B6\u6001\u6620\u5C04\u5230DOM\u2014\u2014\u4EE5\u5C3D\u53EF\u80FD\u5C11\u7684\u5E72\u6270\u65B9\u5F0F\u3002\u5982\u679C\u8FD9\u5C31\u662F\u4F60\u6240\u9700\u8981\u7684\uFF0C\u90A3\u4E48\u4F60\u4FBF\u53EF\u4EE5\u5728\u51E0\u5206\u949F\u5185\u638C\u63E1\u5176\u590D\u6742\u6027\u3002\u5F53\u5E94\u7528\u53D8\u5F97\u66F4\u5927\u65F6\uFF0C\u4F60\u53EF\u80FD\u4F1A\u5F00\u59CB\u4F7F\u7528\u7EC4\u4EF6\uFF0C\u4F46\u5B83\u4E0D\u4E00\u5B9A\u5FC5\u987B\u662FSPA\u3002\u5BF9\u4E8E\u771F\u6B63\u7684spa\uFF0C\u60A8\u53EF\u4EE5\u5F15\u5165vue-router\uFF0C\u4F46\u662F\u5426\u4F7F\u7528\u6A21\u5757\u6784\u5EFA\u7CFB\u7EDF\u4ECD\u7531\u60A8\u51B3\u5B9A\u3002\u6700\u540E\uFF0C\u5BF9\u4E8E\u4E00\u4E2A\u6210\u719F\u7684\u3001\u6A21\u5757\u5316\u7684SPA\uFF0C\u662F\u5426\u60F3\u8981\u4F7F\u7528Vuex\u7BA1\u7406\u60A8\u7684\u72B6\u6001\uFF0C\u8FD9\u53D6\u51B3\u4E8E\u60A8\u81EA\u5DF1\u3002</p></blockquote><blockquote></blockquote><p>\u5982\u679C\u662F SPA \u8FD9\u79CD\u5355\u9875\u9762\uFF0C\u57FA\u672C\u5C31\u662F\u628A index.html \u90E8\u7F72\u5230 nginx \u540E\uFF0C\u5176\u4ED6\u6253\u5305\u90E8\u7F72\u5230 CDN \uFF0C\u5305\u62EC JSS \u3001CSS \u3001\u56FE\u7247\u3001\u5B57\u4F53\u7B49\u3002\u6253\u5305\u5185\u5BB9\u4F1A\u7528 WebPack \u81EA\u52A8\u52A0\u4E0A\u6587\u4EF6\u5185\u5BB9\u54C8\u5E0C\u7801\uFF0C\u7136\u540E\u628A Cache - Control \u7684 max - age \u8BBE\u7F6E\u6210\u5F88\u5927\uFF0C\u8FD9\u6837\u80FD\u591F\u5145\u5206\u5229\u7528\u6D4F\u89C8\u5668\u548C HTTP \u534F\u8BAE\u7684\u7F13\u5B58\uFF0C\u53C8\u80FD\u4FDD\u8BC1\u53CA\u65F6\u66F4\u65B0\u3002 \u4E3A\u4EC0\u4E48 index.html \u4E0D\u653E\u5230 CDN \uFF1F\u56E0\u4E3A\u5982\u679C CDN \u7F13\u5B58\u6E05\u9664\u4E0D\u597D\u7684\u8BDD\uFF0C\u5165\u53E3\u6587\u4EF6\u6CA1\u6709\u66F4\u65B0\u5C31\u4F1A\u5BFC\u81F4\u6240\u6709\u7684\u8D44\u6E90\u90FD\u66F4\u65B0\u4E0D\u4E86\uFF0C\u8FD9\u662F\u4E2A\u5F88\u4E25\u91CD\u7684\u95EE\u9898\u3002 \u5982\u679C\u89C9\u5F97\u4E0A\u9762\u7684\u65B9\u5F0F\u9996\u9875\u767D\u5C4F\u65F6\u95F4\u6BD4\u8F83\u957F\u7684\u8BDD\uFF0C\u6211\u4EEC\u4F1A\u9009\u62E9 nginx \u540E\u7AEF\u90E8\u7F72 Node.js \u505A\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u89E3\u51B3\u9996\u9875\u767D\u5C4F\u65F6\u95F4\u8FC7\u957F\u7684\u95EE\u9898\u3002\u6216\u8005\u4E5F\u53EF\u4EE5\u7528 Gatsby \u3001next.js \u4E4B\u7C7B\u9759\u6001\u751F\u6210\u5DE5\u5177\u63D0\u524D\u751F\u6210\u9759\u6001\u9875\u9762\uFF0C\u7B49\u5F85\u9996\u9875\u52A0\u8F7D\u5B8C\u6210\u4E4B\u540E\uFF0C\u518D\u53BB\u52A8\u6001\u52A0\u8F7D\u5176\u4ED6\u9875\u9762\u3002</p>',13),l={href:"https://mp.weixin.qq.com/s?__biz=MzA4NTU2MTg3MQ==&mid=2655161566&idx=1&sn=27f049021a07290a29a597264f4bd02f&chksm=84602bbeb317a2a8c2f417032c103552f263d8bb58b83e6cbbfb10c30f346f134cb6212251a4&mpshare=1&scene=23&srcid=1015hJjSTWiBRA8loQdO9Daj%2523rd",target:"_blank",rel:"noopener noreferrer"},u=d("\u6F2B\u6781\u5BA2 CTO \u674E\u7131\uFF1A\u5927\u524D\u7AEF\u4E4B\u8DEF \u2014\u2014 \u5982\u4F55\u7528 Web \u6280\u672F\u4E00\u7EDF\u4E09\u7AEF\u5F00\u53D1");function b(_,f){const a=t("ExternalLinkIcon");return n(),o(c,null,[p,e("p",null,[e("a",l,[u,s(a)])])],64)}var x=r(h,[["render",b],["__file","spa.html.vue"]]);export{x as default};
