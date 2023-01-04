import{_ as l,r as n,o as d,c as o,a as t,b as a,F as i,e as s,d as e}from"./app.854743f2.js";const h={},c=s('<h2 id="why" tabindex="-1"><a class="header-anchor" href="#why" aria-hidden="true">#</a> why</h2><p>SPA \u5BA2\u6237\u7AEF\u6E32\u67D3\u4F9D\u8D56\u6846\u67B6\uFF08vue/router/vuex\uFF09\uFF0C\u9700\u8981\u7B49\u6846\u67B6\u52A0\u8F7D\u5B8C</p><h2 id="what" tabindex="-1"><a class="header-anchor" href="#what" aria-hidden="true">#</a> what</h2><table><thead><tr><th>\u7B80\u79F0</th><th>\u7C7B\u578B</th><th>\u4F18\u70B9</th><th style="text-align:left;">\u7F3A\u70B9</th><th>\u9002\u7528\u573A\u666F</th></tr></thead><tbody><tr><td>CSR</td><td>\u7EAF JS \u6E32\u67D3</td><td>\u6613\u4E8E\u8DE8\u7EC8\u7AEF</td><td style="text-align:left;">\u9996\u5C4F\u6E32\u67D3\u6162\uFF0CSEO\u4E0D\u53CB\u597D</td><td>\u4E0D\u9700\u8981\u767B\u5F55</td></tr><tr><td>SSR</td><td>\u670D\u52A1\u7AEF\u6E32\u67D3\uFF08\u5373\u65F6\uFF0C\u8FD4\u56DE\u52A8\u6001 HTML)</td><td>\u6539\u5584\u6240\u6709\u6307\u6807</td><td style="text-align:left;">\u9700\u8981\u670D\u52A1\u5668\u5373\u65F6\u5904\u7406\uFF0C\u589E\u52A0\u5F00\u53D1\u8C03\u8BD5\u6210\u672C\uFF08\u670D\u52A1\u5668\u6E32\u67D3\u4EA4\u4E92</td><td>SEO\u3001\u9996\u5C4F\u6709\u5F3A\u9700\u6C42</td></tr><tr><td>SSG</td><td>\u670D\u52A1\u7AEF\u9884\u6E32\u67D3(\u8FD4\u56DE\u9759\u6001 HTML)</td><td>\u9759\u6001\u670D\u52A1\u5668\u5373\u53EF</td><td style="text-align:left;"></td><td>\u53EA\u9002\u5408\u9759\u6001\u5185\u5BB9</td></tr><tr><td>ISG</td><td>\u670D\u52A1\u7AEF\u589E\u91CF\u751F\u6210</td><td>\u89E3\u51B3 SSG \u95EE\u9898</td><td style="text-align:left;">\u5E26\u6765\u5176\u4ED6\u95EE\u9898\uFF0C\u5982\u95EE\u9898\u5B9A\u4F4D\u548C\u7F13\u5B58</td><td></td></tr></tbody></table><p><img src="https://img.cnb.workers.dev/?url=http://tvax1.sinaimg.cn/large/4e5d3ea7gy1h9plzy33baj21c00r8qsc.jpg" alt="Pasted image 20221228093741.png"></p><p><img src="https://img.cnb.workers.dev/?url=http://tvax1.sinaimg.cn/large/4e5d3ea7gy1h9pm0f6relj20og0b8wlf.jpg" alt="Pasted image 20221227094939.png"><img src="https://img.cnb.workers.dev/?url=http://tvax1.sinaimg.cn/large/4e5d3ea7gy1h9pm102k1gj23js298npd.jpg" alt="Pasted image 20221227095117.png"></p><h1 id="ssr" tabindex="-1"><a class="header-anchor" href="#ssr" aria-hidden="true">#</a> SSR</h1>',7),p={href:"https://cn.vuejs.org/guide/scaling-up/ssr.html#why-ssr",target:"_blank",rel:"noopener noreferrer"},_=e("\u670D\u52A1\u7AEF\u6E32\u67D3 (SSR) | Vue.js"),g={href:"https://juejin.im/post/5bbda9ed5188255c8f06c0dc",target:"_blank",rel:"noopener noreferrer"},u=e("\u5E26\u4F60\u4E94\u6B65\u5B66\u4F1AVue SSR - \u6398\u91D1"),S=s('<p>SSR \u7684 HTML</p><ol><li>\u66F4\u5FEB\uFF08\u5C24\u5176\u662F\u5F53\u60A8\u7684JS\u4E0E\u5E7F\u544A/\u5206\u6790\u7B49\u7ADE\u4E89\u65F6\uFF09</li><li>\u66F4\u6613\u4E8E\u6293\u53D6\u548C\u5F52\u6863</li><li>\u5BF9\u53EF\u80FD\u5BFC\u81F4JS\u5931\u8D25\u7684\u8BB8\u591A\u60C5\u51B5\uFF08\u6709\u7F3A\u9677\u7684\u8FDE\u63A5\uFF0C\u914D\u7F6E\u9519\u8BEF\u7684\u516C\u5171wifi\uFF0Cadblocker\uFF09\u5177\u6709\u5F39\u6027</li></ol><p>\u540C\u6784\uFF08\u901A\u7528\uFF09</p><ul><li>\u9996\u5C4F\u767D\u5C4F\u95EE\u9898\uFF0C\u5BA2\u6237\u7AEF\u53EA\u8D1F\u8D23\u89E3\u6790 HTML</li><li>SEO \u95EE\u9898</li></ul><p>\u6743\u8861\uFF1A</p><ol><li>\u5F00\u53D1\u9650\u5236\uFF0C\u5982\u7279\u6B8A\u52FE\u5B50\uFF0C\u5916\u90E8\u5E93\u9700\u8981\u7279\u6B8A\u5904\u7406</li><li>\u90E8\u7F72\u8981\u6C42\uFF0Capp server vs static server</li><li>\u670D\u52A1\u7AEF\u8D1F\u8F7D\uFF0C\u66F4\u5360\u7528 CPU\uFF0C\u9AD8\u6D41\u91CF\u9700\u8981\u8003\u8651\u5408\u7406\u7684\u7F13\u5B58</li></ol><p>\u6311\u6218\uFF1A</p><ol><li>\u4E24\u6B21\u6784\u5EFA</li><li>\u4FDD\u8BC1\u6B63\u786E\u7684\u8D44\u6E90\u94FE\u63A5\u548C\u63D0\u793A</li><li>\u4EE5\u901A\u7528\u7684\u65B9\u5F0F\u7BA1\u7406\u8DEF\u7531\u3001\u6570\u636E\u83B7\u53D6\u548C\u72B6\u6001\u5B58\u50A8</li></ol><p>\u5BF9\u4E8E\u540C\u6784\u5E94\u7528\u6765\u8BF4\uFF0C\u6211\u4EEC\u5FC5\u987B\u5B9E\u73B0\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u7684\u8DEF\u7531\u3001\u6A21\u578B\u7EC4\u4EF6\u3001\u6570\u636E\u6A21\u578B\u7684\u5171\u4EAB\u3002</p><p>\u540E\u7EED\u8BBF\u95EE\u7528\u5BA2\u6237\u7AEF\u6E32\u67D3</p><h2 id="ssr-\u5BF9\u6027\u80FD\u4F18\u5316\u7684\u63D0\u5347\u5728\u54EA\u91CC" tabindex="-1"><a class="header-anchor" href="#ssr-\u5BF9\u6027\u80FD\u4F18\u5316\u7684\u63D0\u5347\u5728\u54EA\u91CC" aria-hidden="true">#</a> SSR \u5BF9\u6027\u80FD\u4F18\u5316\u7684\u63D0\u5347\u5728\u54EA\u91CC</h2><p>\u9884\u6E32\u67D3\uFF0C\u63D0\u5347\u9996\u5C4F</p>',12),f={href:"https://www.zhihu.com/question/308792091/answer/575636896",target:"_blank",rel:"noopener noreferrer"},b=e("\u6709\u5FC5\u8981\u4F7F\u7528\u670D\u52A1\u5668\u7AEF\u6E32\u67D3(SSR)\u5417\uFF1F - \u77E5\u4E4E"),m={href:"https://note.youdao.com/ynoteshare1/index.html?id=9174b59418d987cd810dc058a7b6a121&type=note",target:"_blank",rel:"noopener noreferrer"},x=e("\u5B98\u7F51\u9884\u6E32\u67D3\u65B9\u6848-\u6709\u9053\u4E91\u7B14\u8BB0"),w=s('<h2 id="ssg-\u9884\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#ssg-\u9884\u6E32\u67D3" aria-hidden="true">#</a> SSG\uFF08\u9884\u6E32\u67D3\uFF09</h2><p>\u597D\u5904\uFF1A</p><ol><li>\u4E0E SSR \u540C\u7B49\u7684\u9996\u5C4F\u6027\u80FD</li><li>\u66F4\u5BB9\u6613\u90E8\u7F72\uFF0C\u4F4E\u8D1F\u8F7D</li></ol><p>\u9650\u5236</p><ol><li>\u9759\u6001\u6570\u636E</li></ol><p>\u573A\u666F\uFF1A</p><ol><li>\u8425\u9500\u9875\u9762</li><li>\u5B98\u7F51\u3001\u535A\u5BA2</li></ol><p>SSR \u5B9E\u65F6\u8BF7\u6C42\u3001\u6E32\u67D3\u3001\u54CD\u5E94\uFF0CIDC</p><p>SSG \u53EF\u4EE5\u653E\u5728 CDN\uFF0C\u6784\u5EFA\u65F6\u5373\u786E\u5B9A\u6E32\u67D3</p>',9),y={href:"https://www.xuanbiyijue.com/2021/08/17/%E9%A2%84%E6%B8%B2%E6%9F%93%E3%80%81SSR%E3%80%81SSG%E3%80%81ISR/",target:"_blank",rel:"noopener noreferrer"},v=e("\u9884\u6E32\u67D3\u3001SSR\u3001SSG\u3001ISR | \u60AC\u7B14e\u7EDD\u7684\u4E2A\u4EBA\u535A\u5BA2"),j={href:"https://reactjs.org/blog/2022/03/29/react-v18.html#gradually-adopting-concurrent-features",target:"_blank",rel:"noopener noreferrer"},k=e("React v18.0 \u2013 React Blog"),R=t("p",null,"\u6700\u4F73\u5B9E\u8DF5\u662F\u7ED3\u5408",-1),E=t("h2",{id:"nextjs-\u539F\u7406",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nextjs-\u539F\u7406","aria-hidden":"true"},"#"),e(" nextjs \u539F\u7406")],-1),V=t("ol",null,[t("li",null,"\u5C06 pages \u7684\u6587\u4EF6\u7F16\u8BD1"),t("li",null,"\u7F16\u8BD1\u65F6\u6839\u636E\u6587\u4EF6\u7ED3\u6784\u987A\u4FBF\u628A\u8DEF\u7531\u914D\u7F6E\u8868\u751F\u6210"),t("li",null,"\u8BF7\u6C42\u65F6\u6839\u636E\u8BF7\u6C42\u8DEF\u5F84\u53BB\u8DEF\u7531\u8868\u67E5\u8BE2\u7ED3\u679C\uFF0C\u6700\u540E\u6839\u636E\u8DEF\u7531\u52A8\u6001\u52A0\u8F7D\u76F8\u5E94\u7684\u9875\u9762\u6587\u4EF6\u3002")],-1),G=t("h2",{id:"issues",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#issues","aria-hidden":"true"},"#"),e(" issues")],-1),B={href:"https://www.v2ex.com/t/845794",target:"_blank",rel:"noopener noreferrer"},I=e("Vue 3 \u7684\u670D\u52A1\u7AEF\u4E0E\u5F02\u6B65\u6570\u636E\u83B7\u53D6 - V2EX");function L(C,N){const r=n("ExternalLinkIcon");return d(),o(i,null,[c,t("p",null,[t("a",p,[_,a(r)])]),t("p",null,[t("a",g,[u,a(r)])]),S,t("p",null,[t("a",f,[b,a(r)])]),t("p",null,[t("a",m,[x,a(r)])]),w,t("p",null,[t("a",y,[v,a(r)])]),t("p",null,[t("a",j,[k,a(r)])]),R,E,V,G,t("p",null,[t("a",B,[I,a(r)])])],64)}var T=l(h,[["render",L],["__file","ssr.html.vue"]]);export{T as default};
