import{_ as a,r,o as l,c as i,a as e,b as o,F as c,d as n,e as s}from"./app.818741d3.js";const h={},p=e("h1",{id:"\u6027\u80FD",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6027\u80FD","aria-hidden":"true"},"#"),n(" \u6027\u80FD")],-1),d=e("p",null,"[toc]",-1),u={href:"https://godbasin.github.io/front-end-playground/front-end-basic/deep-learning/monitor-and-report.html#%25E6%2595%25B0%25E6%258D%25AE%25E6%2594%25B6%25E9%259B%2586",target:"_blank",rel:"noopener noreferrer"},_=n("\u524D\u7AEF\u76D1\u63A7\u4F53\u7CFB\u642D\u5EFA | \u88AB\u5220\u7684\u524D\u7AEF\u6E38\u4E50\u573A"),m=e("h2",{id:"guidelines",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#guidelines","aria-hidden":"true"},"#"),n(" Guidelines")],-1),g=e("ol",null,[e("li",null,"\u5BA1\u8BA1\u9875\u9762"),e("li",null,"\u4F7F\u7528\u62A5\u544A\u627E\u51FA\u4F18\u5316\u70B9"),e("li",null,"\u4E00\u6B21\u6539\u53D8\u4E00\u4E2A\u70B9"),e("li",null,"\u6BCF\u6B21\u6539\u53D8\u540E\u5BA1\u8BA1\uFF0C\u89C2\u5BDF\u6548\u679C")],-1),b={href:"https://www.youtube.com/watch?v=5fLW5Q5ODiE",target:"_blank",rel:"noopener noreferrer"},f=n("Improving Load Performance - Chrome DevTools 101 - YouTube"),k=s('<h2 id="\u65B9\u6CD5\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u8BBA" aria-hidden="true">#</a> \u65B9\u6CD5\u8BBA</h2><ul><li>\u8BF7\u6C42 <ul><li>\u5E76\u53D1</li><li>\u5EF6\u8FDF Script defer</li><li>\u9884\u53D6</li><li>head</li><li>transfer gzipped</li><li>body \u538B\u7F29</li></ul></li><li>\u8BF7\u6C42\u4E0E\u6E32\u67D3\u7ED3\u5408 <ul><li>\u975E\u9996\u5C4F\u56FE\u7247\u61D2\u52A0\u8F7D | \u5173\u952E CSS \u62C6\u5206\u5185\u8054</li></ul></li></ul>',2),w={href:"https://developers.google.com/web/fundamentals/performance/why-performance-matters/?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},v=n("\u6027\u80FD\u4E3A\u4F55\u81F3\u5173\u91CD\u8981 \xA0|\xA0 Web Fundamentals \xA0|\xA0 Google Developers"),T={href:"https://www.smashingmagazine.com/2019/01/front-end-performance-checklist-2019-pdf-pages/",target:"_blank",rel:"noopener noreferrer"},x=n("Front-End Performance Checklist 2019 [PDF, Apple Pages, MS Word] \u2014 Smashing Magazine"),y={href:"https://juejin.im/post/5b65105f5188251b134e9778",target:"_blank",rel:"noopener noreferrer"},P=n("\u72D9\u6740\u9875\u9762\u5361\u987F \u2014\u2014 Performance \u6307\u5317 - \u6398\u91D1"),F=e("h2",{id:"\u540E\u53F0\u9875\u9762",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u540E\u53F0\u9875\u9762","aria-hidden":"true"},"#"),n(" \u540E\u53F0\u9875\u9762")],-1),S=e("li",null,[e("p",null,[n("\u4F7F\u7528"),e("code",null,"visibilityChange"),n("\u76D1\u542C\u5668\u907F\u514D\u5728\u540E\u53F0\u6267\u884C\u4E0D\u5FC5\u8981\u7684\u5DE5\u4F5C\uFF0C\u5982\u5904\u7406\u89C6\u56FE\u53D8\u5316")])],-1),z=e("code",null,"requestAnimationFrame",-1),C=n(" \u6279\u91CF\u66F4\u65B0\uFF0C\u5931\u7126\u65F6\u4E0D\u4F1A\u89E6\u53D1 "),q={href:"https://developers.google.com/web/updates/2017/03/background_tabs",target:"_blank",rel:"noopener noreferrer"},B=n("Background Tabs in Chrome 57 \xA0|\xA0 Web \xA0|\xA0 Google Developers"),L=e("li",null,[e("p",null,"\u4F8B\u5916\uFF0Cwebsocket \u8FDE\u63A5\uFF0Caudio\uFF0Cpinned tabs")],-1),I=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Try those flags:

automatic tab discarding disabled

only auto-reload visible tabs disabled

throttle expensive background timers disabled
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>\u6539\u5584\u4E0B\u8F7D\u65F6\u95F4 \u4FDD\u6301 JavaScript \u5305\u7684\u5C0F\u5DE7\uFF0C\u7279\u522B\u662F\u5BF9\u4E8E\u79FB\u52A8\u8BBE\u5907\u3002\u5C0F\u7684 js \u5305\u53EF\u63D0\u9AD8\u4E0B\u8F7D\u901F\u5EA6\uFF0C\u964D\u4F4E\u5185\u5B58\u4F7F\u7528\u7387\u5E76\u964D\u4F4E CPU \u6210\u672C\u3002 \u907F\u514D\u53EA\u6709\u4E00\u4E2A\u5927 js \u6587\u4EF6;\u5982\u679C\u5355\u4E2A js \u6587\u4EF6\u8D85\u8FC7~50-100 kB\uFF0C\u5219\u5C06\u5176\u62C6\u5206\u4E3A\u5355\u72EC\u7684\u8F83\u5C0F\u7684 js \u6587\u4EF6\u3002 \uFF08\u901A\u8FC7 HTTP / 2 \u591A\u8DEF\u590D\u7528\uFF0C\u53EF\u4EE5\u540C\u65F6\u4F20\u8F93\u591A\u4E2A\u8BF7\u6C42\u548C \u54CD\u5E94\u6D88\u606F\uFF0C\u4ECE\u800C\u51CF\u5C11\u989D\u5916\u8BF7\u6C42\u7684\u5F00\u9500\u3002\uFF09 \u5728\u79FB\u52A8\u8BBE\u5907\u4E0A\uFF0C\u4F60\u4F1A\u5E0C\u671B\u53D1\u9001\u7684\u6570\u636E\u66F4\u5C0F\uFF0C\u7279\u522B\u662F\u56E0\u4E3A\u7F51\u7EDC\u901F\u5EA6\uFF0C\u4F46\u4E5F\u4FDD\u6301\u4F4E\u5185\u5B58\u4F7F\u7528\u7387\u3002 \u7F29\u77ED\u6267\u884C\u65F6\u95F4 \u907F\u514D\u4F7F\u4E3B\u7EBF\u7A0B\u4FDD\u6301\u5FD9\u788C\u7684\u957F\u4EFB\u52A1\uFF0C\u5E76\u53EF\u4EE5\u63A8\u65AD\u51FA\u9875\u9762\u4EA4\u4E92\u7684\u65F6\u95F4\u3002\u4E0B\u8F7D\u540E\uFF0C\u811A\u672C\u6267\u884C\u65F6\u95F4\u73B0\u5728\u662F\u4E3B\u8981\u6210\u672C\u3002 \u907F\u514D\u4F7F\u7528\u5927\u578B\u5185\u8054\u811A\u672C\uFF08\u56E0\u4E3A\u5B83\u4EEC\u4ECD\u7136\u5728 \u4E3B\u7EBF\u7A0B\u4E0A\u8FDB\u884C\u4E86\u89E3\u6790\u548C\u7F16\u8BD1\uFF09\u3002\u4E00\u4E2A\u597D\u7684\u7ECF\u9A8C\u6CD5\u5219\u662F\uFF1A\u5982\u679C\u811A\u672C\u8D85\u8FC7 1 kB\uFF0C\u8BF7\u907F\u514D\u5185\u8054\uFF08\u56E0\u4E3A 1 kB \u4E5F\u662F\u5916\u90E8\u811A\u672C\u542F\u52A8\u65F6\u4EE3\u7801\u7F13\u5B58\u7684\u4E0B\u9650\uFF09\u3002</p></blockquote>`,2),M={href:"https://v8.dev/blog/cost-of-javascript-2019",target:"_blank",rel:"noopener noreferrer"},W=n("The cost of JavaScript in 2019 \xB7 V8"),j={href:"https://github.com/azl397985856/automate-everything/blob/master/docs/chapter4.md",target:"_blank",rel:"noopener noreferrer"},D=n("\u9875\u9762\u52A0\u8F7D\u6027\u80FD\u4F18\u5316 automate-everything/chapter4.md at master \xB7 azl397985856/automate-everything"),E=s(`<h2 id="lazy" tabindex="-1"><a class="header-anchor" href="#lazy" aria-hidden="true">#</a> lazy</h2><p>chrome \u9ED8\u8BA4\u89C4\u5219\uFF0C\u6309\u4F18\u5148\u7EA7\u52A0\u8F7D\uFF0C\u4F9D\u7136\u662F\u5C3D\u5FEB\u62C9\u53D6 chrome 76 \u652F\u6301\u6D4F\u89C8\u5668\u539F\u751F\u61D2\u52A0\u8F7D\uFF0C\u663E\u5F0F\u6307\u5B9A\u52A0\u8F7D\u89C4\u5219 <code>auto</code> \u9ED8\u8BA4 <code>lazy</code> \u8FDB\u5165\u89C6\u53E3\u624D\u52A0\u8F7D <code>eager</code> \u5FFD\u7565\u9ED8\u8BA4\u89C4\u5219</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lazy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lazy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u7B2C\u4E09\u65B9\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u65B9\u65B9\u6848" aria-hidden="true">#</a> \u7B2C\u4E09\u65B9\u65B9\u6848</h2>`,4),H={href:"https://www.tingyun.com/tingyun_browser.html",target:"_blank",rel:"noopener noreferrer"},O=n("\u542C\u4E91Browser\u30FB\u5B9E\u65F6\u4E86\u89E3\u60A8\u7F51\u7AD9\u7684\u771F\u5B9E\u7528\u6237\u4F53\u9A8C"),G={href:"https://www.tingyun.com/tingyun_network.html",target:"_blank",rel:"noopener noreferrer"},N=n("\u6D4B\u901F - \u542C\u4E91Network\u30FB\u56FD\u5185\u9886\u5148\u7684\u7F51\u7AD9\u6027\u80FD\u76D1\u6D4B\u4E0E\u4F18\u5316\u4EA7\u54C1"),A={href:"https://www.gatsbyjs.org/blog/2018-10-16-why-mobile-performance-is-crucial/",target:"_blank",rel:"noopener noreferrer"},U=n("Journey to the Content Mesh Part 4: Why Mobile Performance Is Crucial | GatsbyJS"),J=e("h2",{id:"modern-\u6784\u5EFA",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#modern-\u6784\u5EFA","aria-hidden":"true"},"#"),n(" modern \u6784\u5EFA")],-1),V=e("p",null,"\u6784\u5EFA\u4E24\u4E2A\u7248\u672C\uFF0Cmodern \u964D\u4F4E\u4F53\u79EF\uFF0Cold \u517C\u987E",-1),Y={href:"https://engineering.universe.com/improving-browser-performance-10x-f9551927dcff",target:"_blank",rel:"noopener noreferrer"},R=n("Improving Browser Performance 10x - Universe Engineering"),K={href:"https://github.com/GoogleChrome/lighthouse/blob/master/docs/authenticated-pages.md",target:"_blank",rel:"noopener noreferrer"},Q=n("lighthouse/authenticated-pages.md at master \xB7 GoogleChrome/lighthouse"),X={href:"https://www.cnblogs.com/videring/articles/7603864.html",target:"_blank",rel:"noopener noreferrer"},Z=n("Chrome \u4E2D\u7684 First Meaningful Paint - \u90B9\u5929\u5F97 - \u535A\u5BA2\u56ED"),$=n(" \u7B97\u6CD5\uFF1A a. \u9996\u6B21\u6709\u6548\u7ED8\u5236 = \u5177\u6709\u6700\u5927\u5E03\u5C40\u53D8\u5316\u7684\u7ED8\u5236 b. \u5E03\u5C40\u663E\u8457\u6027 = \u6DFB\u52A0\u7684\u5BF9\u8C61\u6570\u76EE / max(1, \u9875\u9762\u9AD8\u5EA6 / \u5C4F\u5E55\u9AD8\u5EA6)"),ee=e("p",null,"\u7528\u6237\u671F\u5F85\uFF1A\u9875\u9762\u7684\u9996\u5C4F\u5185\u5BB9\u5E94\u57281.5\u79D2\u5185\u52A0\u8F7D\u5B8C\u6210",-1),ne=e("p",null,"\u666E\u901A\u7528\u6237\u671F\u671B\u4E14\u80FD\u591F\u63A5\u53D7\u7684\u9875\u9762\u52A0\u8F7D\u65F6\u95F4\u5728 3 \u79D2\u4EE5\u5185",-1),te=e("p",null,"\u641C\u7D22\u6D41\u91CF\u503E\u659C\uFF0C3s \u7EA2\u7EBF",-1),oe={href:"https://developers.weixin.qq.com/community/develop/article/doc/00062cad124c8867cf380f64156c13",target:"_blank",rel:"noopener noreferrer"},se=n("\u524D\u7AEF\u52A0\u8F7D\u4F18\u5316\u53CA\u5B9E\u8DF5 | \u5FAE\u4FE1\u5F00\u653E\u793E\u533A"),ae={href:"https://www.itslide.com/slide/244993",target:"_blank",rel:"noopener noreferrer"},re=n("\u6768\u68EE \u628A\u524D\u7AEF\u6027\u80FD\u76D1\u63A7\u505A\u5230\u6781\u81F4 | ITSlide - \u4E13\u6CE8\u4E8EPPT\u5E7B\u706F\u7247\u7684\u5206\u4EAB\u5E73\u53F0"),le={href:"https://blog.shipengqi.top/2018/10/29/frontend-performance-optimize/",target:"_blank",rel:"noopener noreferrer"},ie=n("\u7B14\u8BB0 \u524D\u7AEF\u6027\u80FD\u4F18\u5316\u539F\u7406\u4E0E\u5B9E\u8DF5"),ce=e("p",null,"FMP \u4E3B\u8981\u5185\u5BB9\u7528\u6237\u53EF\u89C1 1220ms 99\u5206 \u57FA\u4E8E\u771F\u5B9E\u7F51\u7AD9\u6570\u636E",-1),he={href:"https://webpagetest.org/easy",target:"_blank",rel:"noopener noreferrer"},pe=n("WebPageTest - Website Performance and Optimization Test"),de=e("p",null,"\u53EF\u94FE\u63A5\u63D0\u4F9B Image Analysis Results\uFF0C\u53EF\u538B\u7F29\u6BD4",-1),ue={href:"https://docs.google.com/spreadsheets/d/1Cxzhy5ecqJCucdf1M0iOzM8mIxNc7mmx107o5nj38Eo/edit#gid=0",target:"_blank",rel:"noopener noreferrer"},_e=n("Lighthouse v3 Score Weighting [MAKE YOUR OWN COPY] - Google \u8868\u683C"),me=e("p",null,"\u53EF\u4EA4\u4E92\u65F6\u95F4\u3001\u901F\u5EA6\u6307\u6807\u6743\u91CD\u66F4\u9AD8\uFF0CFMP \u6743\u91CD\u6700\u4F4E\uFF0C\u6BD4\u8F83\u5BB9\u6613\u5B9E\u73B0",-1),ge={href:"https://web.dev/lighthouse-performance",target:"_blank",rel:"noopener noreferrer"},be=n("Performance audits \xA0|\xA0 web.dev"),fe={href:"https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics#tracking_fmp_using_hero_elements",target:"_blank",rel:"noopener noreferrer"},ke=n("\u4EE5\u7528\u6237\u4E3A\u4E2D\u5FC3\u7684\u6027\u80FD\u6307\u6807 \xA0|\xA0 Web Fundamentals \xA0|\xA0 Google Developers"),we=e("p",null,"\u4F20\u7EDF\u6307\u6807\u6216\u5355\u4E2A\u6307\u6807\u4E0D\u53EF\u9760\uFF0CGoogle \u5B9A\u4E49\u65B0\u6307\u6807",-1),ve=e("p",null,"Long Tasks API >50 \u6BEB\u79D2",-1),Te=e("p",null,"100 \u6BEB\u79D2\u5185\u54CD\u5E94\u7528\u6237\u8F93\u5165",-1),xe=e("p",null,"\u53D1\u751F\u5728\u540E\uFF0C\u6743\u91CD\u5927\uFF0C\u5BF9\u7528\u6237\u66F4\u91CD\u8981",-1),ye=e("p",null,"PerformanceObserver \u89C2\u6D4B\u5B9E\u9645\u8BBE\u5907",-1),Pe=e("p",null,"\u9996\u5C4F\u52A0\u8F7D\u65F6\u95F4\u5B9A\u4E49 \u4E00\u822C \u56FE\u7247 \u8BFE\u4EF6\uFF0C\u53EF\u64CD\u4F5C\u65F6\u95F4",-1),Fe=e("p",null,"speedIndex \u5185\u5BB9\u663E\u793A\u901F\u5EA6\uFF0C\u7EFC\u5408\u6307\u6807\uFF0C\u9700\u8981\u89E3\u51B3\u4E00\u7CFB\u5217\u95EE\u9898\u63D0\u5347",-1),Se=e("p",null,"\u6301\u7EED\u96C6\u6210\u3001\u6D4B\u8BD5\u5173\u952E\u6307\u6807\u662F\u5426\u5408\u683C\uFF0C\u4F4E\u4E8E\u9608\u503C\u5224\u5B9A\u5931\u8D25",-1),ze=e("p",null,"\u7528\u6237\u5173\u6CE8\u4E3B\u8981\u5185\u5BB9\u7684\u5C55\u793A\u548C\u53EF\u4EA4\u4E92\uFF0C\u4F46\u6D4F\u89C8\u5668\u4E0D\u77E5\u9053",-1),Ce=n("\u81EA\u5B9A\u4E49\u6307\u6807\uFF0C\u6D4B\u91CF\u65B9\u6CD5 "),qe={href:"https://speedcurve.com/blog/user-timing-and-custom-metrics/",target:"_blank",rel:"noopener noreferrer"},Be=n("SpeedCurve | User Timing and Custom Metrics"),Le={href:"https://www.w3.org/TR/navigation-timing-2/#performanceentry",target:"_blank",rel:"noopener noreferrer"},Ie=n("Navigation Timing Level 2"),Me=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`<body onload="init()">
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br")])],-1),We=e("p",null,[n("\u8FD9\u91CC"),e("code",null,"onload"),n("\u5373"),e("code",null,"window.onload"),n("\uFF0C\u5B8C\u6574 Document \u8D44\u6E90\u52A0\u8F7D\u7ED3\u675F\uFF0C\u5305\u62EC images, scripts, links and sub-frames")],-1),je={href:"https://www.infoq.cn/article/pqSFIzu9DFuwmg4e51oM?utm_source=rss&utm_medium=article",target:"_blank",rel:"noopener noreferrer"},De=n("\u8BA9\u5076\u73B0Bug\u65E0\u6240\u9041\u5F62\uFF1A\u8D1D\u58F3\u81EA\u7814\u65F6\u5149\u673A\u5982\u4F55\u89E3\u51B3\u524D\u7AEF\u884C\u4E1A\u75DB\u70B9\uFF1F-InfoQ"),Ee=s('<blockquote><p>\u5728\u8861\u91CF Web \u9875\u9762\u6027\u80FD\u65F6\uFF0C\u6700\u666E\u904D\u7684\u505A\u6CD5\u662F\u901A\u8FC7 YSlow\u3001Lighthouse \u7B49\u5DE5\u5177\u5BF9\u9875\u9762\u8FDB\u884C\u4E00\u6B21\u6027\u7684\u8BCA\u65AD\u5206\u6790\u3002\u8BDA\u7136\u8FD9\u4E9B\u5DE5\u5177\u53EF\u4EE5\u68C0\u67E5\u51FA\u8BF8\u591A\u9875\u9762\u6027\u80FD\u7684\u74F6\u9888\u548C\u4F18\u5316\u70B9\uFF0C\u4F46\u6211\u4EEC\u4F9D\u7136\u65E0\u6CD5\u611F\u77E5\u5E76\u91CF\u5316\u7528\u6237\u5728\u8BBF\u95EE\u9875\u9762\u65F6\u7684\u5177\u4F53\u8868\u73B0\uFF0C\u56E0\u4E3A\u771F\u5B9E\u573A\u666F\u7684\u9875\u9762\u6027\u80FD\u4F1A\u53D7\u5230\u8BF8\u591A\u56E0\u7D20\u7684\u5F71\u54CD\uFF0C\u5982\u7528\u6237\u4F7F\u7528\u7684\u7EC8\u7AEF\u7C7B\u578B\u3001\u670D\u52A1\u5668\u54CD\u5E94\u901F\u5EA6\u3001\u6240\u5728\u5730\u57DF CDN \u6027\u80FD\u7B49\u3002</p></blockquote><p>\u771F\u5B9E\u7528\u6237\u8BBF\u95EE --&gt; \u63D0\u53D6\u6027\u80FD\u6307\u6807 --&gt; \u6570\u636E\u6E05\u6D17\u52A0\u5DE5 --&gt; \u6027\u80FD\u5206\u6790\u76D1\u63A7\uFF08\u76D1\u63A7\u5E73\u53F0\uFF09</p><p>\u9AD8\u7CBE\u5EA6\u65F6\u95F4\uFF0C\u5C0F\u6570\u70B9\u540E 12 \u4F4D <code>performance.now</code>\u5355\u8C03\u9012\u589E\uFF0C\u4E0D\u53D7\u4FEE\u6539\u7CFB\u7EDF\u65F6\u95F4\u5F71\u54CD</p><p>\u539F\u751F DCL --&gt; FP/FCP --&gt; FMP \u7B97\u6CD5\u63A8\u5BFC \u7528\u6237\u611F\u77E5</p><p>FMP \u5E03\u5C40\u6811\uFF0C\u5E03\u5C40\u5BF9\u8C61\uFF0C\u6700\u5927\u4E4B\u540E\u7684\u7ED8\u5236\uFF0C\u53EF\u89C1\u533A\u57DF \u9875\u9762\u9AD8\u5EA6</p><blockquote><p>First meaningful paint = Paint that follows biggest layout change Biggest layout change means layout with the largest number of LayoutObjectsThatHadNeverHadLayout. In Figure 1, the biggest layout change is at 1.86s, so the next paint (1.907s) is the first meaningful paint.</p></blockquote><h2 id="ttfb" tabindex="-1"><a class="header-anchor" href="#ttfb" aria-hidden="true">#</a> TTFB</h2><p>\u9996\u5B57\u8282\u65F6\u95F4(TTFB)\u7528\u4E8E\u6D4B\u91CF\u670D\u52A1\u5668\u7684\u54CD\u5E94\u80FD\u529B\u3002\u662F\u4ECE\u5BA2\u6237\u7AEF\u53D1\u8D77 HTTP \u8BF7\u6C42\u5230\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u6536\u5230\u8D44\u6E90\u7684\u7B2C\u4E00\u4E2A\u5B57\u8282\u6240\u7ECF\u5386\u7684\u65F6\u95F4\u3002\u7531 socket \u8FDE\u63A5\u65F6\u95F4\u3001\u53D1\u9001 HTTP \u8BF7\u6C42\u6240\u9700\u65F6\u95F4\u3001\u6536\u5230\u9875\u9762\u7B2C\u4E00\u4E2A\u5B57\u8282\u6240\u9700\u65F6\u95F4\u7EC4\u6210\u3002</p><p>Gzip \u538B\u7F29\u4F1A\u5BFC\u81F4 TTFB \u63D0\u5347</p><p>\u5927\u591A\u6570\u670D\u52A1\u5668\u7684 TTFB \u65F6\u95F4\u90FD\u5728 50 ms \u4EE5\u4E0B</p><p>\u672C\u5730\u8FC7\u591A cookie \uFF1F\u6BCF\u6B21\u8BF7\u6C42\u4F1A\u5E26\u4E0A\uFF0C\u4E0A\u4F20\u53D7\u9650\uFF0C\u53EF\u80FD\u589E\u52A0 TTFB</p><p>h2 \u7EDF\u8BA1\u5230\u7684 TTFB \u503C\u4F1A\u66F4\u9AD8\uFF0C\u56E0\u4E3A socket \u8FDE\u63A5\u66F4\u65E9\uFF1F</p>',12),He=n("\u66F4\u597D\u89E3\u7B54 "),Oe={href:"https://stackoverflow.com/questions/53699584/is-it-possible-to-do-hls-streaming-over-http-2-and-will-it-be-better-latency-wi/53899295#53899295",target:"_blank",rel:"noopener noreferrer"},Ge=n("Is it possible to do HLS streaming over HTTP/2, and will it be better latency-wise than over HTTP/1.1? - Stack Overflow"),Ne=n(" h2 \u4F18\u52BF\u5728\u5927\u91CF\u5E76\u884C\u5C0F\u8BF7\u6C42 \u800C\u89C6\u9891\u6D41\u662F\u4E32\u884C\u8BF7\u6C42\u5927\u7684\u6570\u636E\u5757\uFF0CHTTP1.1 + keep alive \u5C31\u80FD\u6EE1\u8DB3\uFF0C\u4E14\u66F4\u9AD8\u6548\uFF0C\u4E0D\u9700\u8981\u5904\u7406 h2 \u57FA\u4E8E TCP \u7684\u6D41\u63A7\u5236\u67B6\u6784"),Ae={href:"https://blog.cloudflare.com/ttfb-time-to-first-byte-considered-meaningles/",target:"_blank",rel:"noopener noreferrer"},Ue=n("Stop worrying about Time To First Byte (TTFB)"),Je={href:"https://superuser.com/questions/931389/http-2-has-much-higher-ttfb-than-http-1-1",target:"_blank",rel:"noopener noreferrer"},Ve=n("iis - HTTP/2 has much higher TTFB than HTTP/1.1 - Super User"),Ye={href:"https://haydenjames.io/nginx-tuning-tips-tls-ssl-https-ttfb-latency/",target:"_blank",rel:"noopener noreferrer"},Re=n("Nginx tuning tips: TLS/SSL HTTPS - Improved TTFB/latency"),Ke={href:"https://juejin.im/post/5cb54286e51d456e235d9be6",target:"_blank",rel:"noopener noreferrer"},Qe=n("\u300AHTTP/2 \u57FA\u7840\u6559\u7A0B\u300B \u9605\u8BFB\u6458\u8981 - \u6398\u91D1"),Xe={href:"https://zhuanlan.zhihu.com/p/34020557",target:"_blank",rel:"noopener noreferrer"},Ze=n("\u9875\u9762\u52A0\u8F7D\u4E0EAPI\u670D\u52A1\u54CD\u5E94--- \u6027\u80FD\u6807\u5B9A\u4E0E\u6807\u51C6 - \u77E5\u4E4E"),$e=n("\u53EF\u80FD\u662F\u5206\u5E27\uFF0C\u589E\u52A0\u4E86\u5EF6\u8FDF\uFF1F "),en={href:"https://segmentfault.com/a/1190000015030944#item-5-19",target:"_blank",rel:"noopener noreferrer"},nn=n("HTTP/2 \u6280\u672F\u8C03\u7814\u548C\u6027\u80FD\u5206\u6790 - \u4E2A\u4EBA\u6587\u7AE0 - SegmentFault \u601D\u5426"),tn=e("h2",{id:"_4x-cpu",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4x-cpu","aria-hidden":"true"},"#"),n(" 4x cpu")],-1),on=e("p",null,"\u4EC5\u5F71\u54CD\u4E3B\u7EBF\u7A0B\uFF0C\u4EA7\u751F\u989D\u5916\u7EBF\u7A0B\u9891\u7E41\u6253\u65AD\u4E3B\u7EBF\u7A0B simulated \u4E0E Applied \u533A\u522B\uFF0C\u4E0D\u5B9E\u9645\u8282\u6D41\uFF0C\u63A8\u6D4B\u503C",-1),sn={href:"https://stackoverflow.com/questions/50848341/what-does-4x-slower-cpu-throttle-in-chrome-devtools-simulate-in-terms-of-hardwar",target:"_blank",rel:"noopener noreferrer"},an=n("performance testing - What does 4x slower CPU throttle in Chrome DevTools simulate in terms of hardware? - Stack Overflow"),rn=s('<h2 id="clear-storage" tabindex="-1"><a class="header-anchor" href="#clear-storage" aria-hidden="true">#</a> clear storage</h2><p>\u9009\u4E2D\uFF0C\u6A21\u62DF\u7528\u6237\u9996\u6B21\u8BBF\u95EE \u53D6\u6D88\u9009\u4E2D\uFF0C\u6A21\u62DF\u91CD\u590D\u8BBF\u95EE</p><h2 id="show-coverage" tabindex="-1"><a class="header-anchor" href="#show-coverage" aria-hidden="true">#</a> show coverage</h2><p>\u6309\u6587\u4EF6\uFF0C\u6309\u884C\u5206\u6790\uFF0C\u7EA2\u8272\u4E3A\u672A\u7528\u5230</p><p>\u5224\u65AD\u662F\u5426\u6E32\u67D3\u963B\u585E\u8D44\u6E90\uFF0C show block\uFF0C\u5237\u65B0\uFF0C\u9875\u9762\u662F\u5426\u6B63\u5E38\u6E32\u67D3</p><h2 id="main-thread" tabindex="-1"><a class="header-anchor" href="#main-thread" aria-hidden="true">#</a> main thread</h2><ol><li>performance</li><li>reload</li><li>user timing</li><li>bottom-up</li></ol><h2 id="\u4E0D\u540C\u673A\u5668\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u673A\u5668\u5DEE\u5F02" aria-hidden="true">#</a> \u4E0D\u540C\u673A\u5668\u5DEE\u5F02</h2><p>\u4E00\u6B21\u4F18\u5316\u5728\u4E00\u53F0\u673A\u5668\u4E0A\u6D4B\uFF0C\u6A21\u62DF\u73AF\u5883\uFF0C\u7136\u540E\u5728\u771F\u5B9E\u73AF\u5883\u9A8C\u8BC1\u3002\u8DE8\u673A\u5668\u6807\u51C6\u5316\u53EF\u64CD\u4F5C\u6027\u5DEE\uFF0C\u5F71\u54CD\u56E0\u7D20\u592A\u591A\u3002\u540C\u4E00\u53F0\u673A\u5668\uFF0C\u5C3D\u91CF\u51CF\u5C11\u5F71\u54CD\u7ED3\u679C\u7684\u5DEE\u5F02\u56E0\u7D20\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ul><li>\u5148\u5BA1\u8BA1\u518D\u4F18\u5316</li><li>\u4E00\u6B21\u6539\u4E00\u70B9\uFF0C\u9694\u79BB\u53D8\u5316\u5BF9\u6027\u80FD\u5F71\u54CD</li></ul>',11),ln={href:"https://developers.google.com/web/tools/chrome-devtools/speed/get-started",target:"_blank",rel:"noopener noreferrer"},cn=n("Optimize Website Speed With Chrome DevTools \xA0|\xA0 Tools for Web Developers"),hn={href:"https://zhuanlan.zhihu.com/p/91365316",target:"_blank",rel:"noopener noreferrer"},pn=n("Lighthouse \u6D4B\u8BD5\u5185\u5E55 - \u77E5\u4E4E"),dn=s('<h2 id="\u4FE1\u606F\u6D41\u5185\u5BB9\u9875-\u95EA\u5F00" tabindex="-1"><a class="header-anchor" href="#\u4FE1\u606F\u6D41\u5185\u5BB9\u9875-\u95EA\u5F00" aria-hidden="true">#</a> \u4FE1\u606F\u6D41\u5185\u5BB9\u9875\u201C\u95EA\u5F00\u201D</h2><p>\u6D41\u7A0B\u4E0A\u5728Webview\u5217\u8868\u521D\u59CB\u5316\u7684\u65F6\u5019\u8FDB\u884C\u8BE6\u60C5\u9875\u8D44\u6E90\u7684\u9884\u52A0\u8F7D\uFF0C\u540C\u65F6\u9488\u5BF9\u89C6\u56FE\u5185\u7684\u4FE1\u606F\u6D41\u5217\u8868\u8FDB\u884C\u5185\u5BB9\u9875\u7684\u9884\u6E32\u67D3\uFF0C\u4ECE\u800C\u5728\u7528\u6237\u70B9\u51FB\u8BE6\u60C5\u9875\u7684\u65F6\u5019\u53EF\u4EE5\u76F4\u63A5\u4ECE\u5185\u5B58\u4E2D\u8BFB\u51FAHTML\uFF0C\u8FBE\u5230\u95EA\u5F00\u7684\u6548\u679C\u3002</p><p>\u5B83\u5C06\u6E32\u67D3\u7684\u635F\u8017\u5206\u644A\u5230\u4E86\u5BA2\u6237\u7AEF\uFF0C\u4ECE\u800C\u4FDD\u8BC1\u6E32\u67D3\u4E0D\u4F1A\u53D7\u9AD8\u6D41\u91CF\u8BBF\u95EE\u7684\u5F71\u54CD</p><h2 id="\u5B9A\u4F4D\u6027\u80FD\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4F4D\u6027\u80FD\u95EE\u9898" aria-hidden="true">#</a> \u5B9A\u4F4D\u6027\u80FD\u95EE\u9898</h2><p>\u95EE\u9898\uFF1A \u9875\u9762\u6EDA\u52A8\u4E0D\u6D41\u7545</p><ol><li>\u6253\u5F00 console - <code>...</code> - rendering - Paint flashing</li><li>\u7EFF\u8272\u5757\u8868\u793A\u5B58\u5728\u6027\u80FD\u95EE\u9898</li><li>\u53CD\u590D\u79FB\u9664\u5185\u5BB9\uFF0C\u76F4\u5230\u7EFF\u8272\u5757\u6D88\u5931</li><li><code>fixed</code> \u5F15\u8D77</li></ol>',6),un={href:"https://www.youtube.com/watch?v=2vFrZXWiwIc",target:"_blank",rel:"noopener noreferrer"},_n=n("Troubleshooting rendering performance issues - YouTube"),mn={href:"https://stackoverflow.com/questions/26907265/css-will-change-how-to-use-it-how-it-works",target:"_blank",rel:"noopener noreferrer"},gn=n("css3 - CSS "),bn=e("code",null,"will-change",-1),fn=n(" - how to use it, how it works - Stack Overflow"),kn=e("h2",{id:"element-ui",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#element-ui","aria-hidden":"true"},"#"),n(" element-ui")],-1),wn=e("p",null,"css vendor common \u91CD\u5408 babel \u914D\u7F6E\u9690\u5F0F import css \u6539\u7528 scss import\uFF0C\u7EBF\u5F00 js split \u673A\u5236",-1),vn={href:"https://www.smashingmagazine.com/2020/01/front-end-performance-checklist-2020-pdf-pages/",target:"_blank",rel:"noopener noreferrer"},Tn=n("Front-End Performance Checklist 2020 [PDF, Apple Pages, MS Word] \u2014 Smashing Magazine"),xn=e("h2",{id:"fps",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fps","aria-hidden":"true"},"#"),n(" FPS")],-1),yn=e("p",null,"\u7406\u60F3\u503C 60",-1),Pn=e("p",null,"\u6536\u96C6 FPS list",-1),Fn=e("p",null,"\u8FDE\u7EED\u51FA\u73B03\u4E2A\u4F4E\u4E8E20\u7684 FPS \u5373\u53EF\u8BA4\u4E3A\u7F51\u9875\u5B58\u5728\u5361\u987F\u3002",-1),Sn={href:"https://zhuanlan.zhihu.com/p/39292837",target:"_blank",rel:"noopener noreferrer"},zn=n("\u5982\u4F55\u76D1\u63A7\u7F51\u9875\u7684\u5361\u987F\uFF1F - \u77E5\u4E4E"),Cn=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> hasFocus <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">hasFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;focus&#39;</span><span class="token punctuation">,</span> focusListener<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;blur&#39;</span><span class="token punctuation">,</span> blurListener<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>https://github.com/GoogleChromeLabs/squoosh/blob/dev/src/shared/prerendered-app/Intro/blob-anim/index.ts#L337</p><h2 id="\u6307\u6807" tabindex="-1"><a class="header-anchor" href="#\u6307\u6807" aria-hidden="true">#</a> \u6307\u6807</h2><ul><li>\u767D\u5C4F \u7B2C\u4E00\u4E2A\u5B57\u5E55 performance</li><li>\u9996\u5C4F dom \u7A33\u5B9A MutationObserver <ul><li>body</li><li>\u5C42\u7EA7\u7A33\u5B9A</li></ul></li></ul>`,4),qn={href:"https://zhuanlan.zhihu.com/p/420330110",target:"_blank",rel:"noopener noreferrer"},Bn=n("\u524D\u7AEF\u76D1\u63A7 SDK \u7684\u4E00\u4E9B\u6280\u672F\u8981\u70B9\u539F\u7406\u5206\u6790 - \u77E5\u4E4E");function Ln(In,Mn){const t=r("ExternalLinkIcon");return l(),i(c,null,[p,d,e("p",null,[e("a",u,[_,o(t)])]),m,g,e("p",null,[e("a",b,[f,o(t)])]),k,e("p",null,[e("a",w,[v,o(t)])]),e("p",null,[e("a",T,[x,o(t)])]),e("p",null,[e("a",y,[P,o(t)])]),F,e("ul",null,[S,e("li",null,[e("p",null,[z,C,e("a",q,[B,o(t)])])]),L]),I,e("p",null,[e("a",M,[W,o(t)]),e("a",j,[D,o(t)])]),E,e("p",null,[e("a",H,[O,o(t)])]),e("p",null,[e("a",G,[N,o(t)])]),e("p",null,[e("a",A,[U,o(t)])]),J,V,e("p",null,[e("a",Y,[R,o(t)])]),e("p",null,[e("a",K,[Q,o(t)])]),e("p",null,[e("a",X,[Z,o(t)]),$]),ee,ne,te,e("p",null,[e("a",oe,[se,o(t)])]),e("p",null,[e("a",ae,[re,o(t)])]),e("p",null,[e("a",le,[ie,o(t)])]),ce,e("p",null,[e("a",he,[pe,o(t)])]),de,e("p",null,[e("a",ue,[_e,o(t)])]),me,e("p",null,[e("a",ge,[be,o(t)])]),e("p",null,[e("a",fe,[ke,o(t)])]),we,ve,Te,xe,ye,Pe,Fe,Se,ze,e("p",null,[Ce,e("a",qe,[Be,o(t)])]),e("p",null,[e("a",Le,[Ie,o(t)])]),Me,We,e("p",null,[e("a",je,[De,o(t)])]),Ee,e("p",null,[He,e("a",Oe,[Ge,o(t)]),Ne]),e("p",null,[e("a",Ae,[Ue,o(t)]),e("a",Je,[Ve,o(t)]),e("a",Ye,[Re,o(t)]),e("a",Ke,[Qe,o(t)]),e("a",Xe,[Ze,o(t)])]),e("p",null,[$e,e("a",en,[nn,o(t)])]),tn,on,e("p",null,[e("a",sn,[an,o(t)])]),rn,e("p",null,[e("a",ln,[cn,o(t)]),e("a",hn,[pn,o(t)])]),dn,e("p",null,[e("a",un,[_n,o(t)]),e("a",mn,[gn,bn,fn,o(t)])]),kn,wn,e("p",null,[e("a",vn,[Tn,o(t)])]),xn,yn,Pn,Fn,e("p",null,[e("a",Sn,[zn,o(t)])]),Cn,e("p",null,[e("a",qn,[Bn,o(t)])])],64)}var jn=a(h,[["render",Ln],["__file","perf.html.vue"]]);export{jn as default};
