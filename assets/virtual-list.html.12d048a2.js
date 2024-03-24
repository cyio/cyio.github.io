import{_ as r,r as o,o as i,c as l,a as e,b as n,F as p,e as t,d as a}from"./app.a812d536.js";const c={},h=t('<h1 id="\u865A\u62DF\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u5217\u8868" aria-hidden="true">#</a> \u865A\u62DF\u5217\u8868</h1><blockquote><p>\u53C8\u540D \u865A\u62DF\u6EDA\u52A8</p></blockquote><h2 id="why" tabindex="-1"><a class="header-anchor" href="#why" aria-hidden="true">#</a> Why</h2><p>\u5982\u4F55\u6E32\u67D3\u5927\u91CF\u6570\u636E\u5728\u9875\u9762\u4E0A\uFF1F</p><h2 id="\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406</h2><p>\u53EA\u6E32\u67D3\u53EF\u89C6\u533A\u57DF</p><p>\u6EDA\u52A8\u65F6\uFF0C\u8BA1\u7B97\u5E76\u66F4\u65B0\u5F00\u59CB\u4F4D\u7F6E\u548C\u7ED3\u675F\u4F4D\u7F6E</p><h2 id="vue-virtual-scroll-list" tabindex="-1"><a class="header-anchor" href="#vue-virtual-scroll-list" aria-hidden="true">#</a> vue-virtual-scroll-list</h2><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528\uFF1A</h3><p>resized item mounted \u65F6\u89E6\u53D1</p><h3 id="\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u573A\u666F" aria-hidden="true">#</a> \u573A\u666F\uFF1A</h3><ul><li>\u6709\u9650\u6570\u636E</li><li>\u65E0\u9650\u52A0\u8F7D</li><li>\u6A2A\u5411</li><li>\u4FDD\u6301\u72B6\u6001\uFF0C\u5982\u9009\u4E2D</li><li>\u804A\u5929\u5BA4\uFF0C\u73B0\u6210\u89E3\u51B3\u65B9\u6848</li></ul><h3 id="\u539F\u7406-1" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406-1" aria-hidden="true">#</a> \u539F\u7406\uFF1A</h3><p>\u6EDA\u52A8\u65F6\u901A\u8FC7\u6539\u53D8 padding \u7684\u503C\u6765\u6A21\u62DF\u6EDA\u52A8\uFF0C\u91CC\u9762\u7684\u6BCF\u4E00\u4E2A item \u5728\u6EDA\u52A8\u65F6\u88AB\u52A8\u6001\u66FF\u6362</p><p>item \u56FA\u5B9A\u9AD8\u5EA6\uFF0C\u53EF\u4EE5\u63D0\u524D\u8BA1\u7B97\u51FA\u603B\u9AD8\u5EA6 padding = item-height *</p><p>item \u9AD8\u5EA6\u4E0D\u5B9A\uFF0Cpadding \u521D\u59CB\u4E3A 0</p><h3 id="\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801" aria-hidden="true">#</a> \u6E90\u7801\uFF1A</h3><p>h(type, attrs, children) \u51FD\u6570\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F children</p><p>item \u7528 <em>ResizeObserver</em> \u89C2\u6D4B\u81EA\u8EAB\uFF0C\u89E6\u53D1 resized \u4E8B\u4EF6</p><p><img src="https://img.oaker.bid/?url=http://tva1.sinaimg.cn/large/4e5d3ea7ly1h7cmoka817j215e15sne6.jpg" alt="image.png"></p><p>virtual-list-item\uFF0Cvirtual-list-slot \u591A\u7EC4\u4EF6\u7528 mixin</p><p>\u7ED3\u6784</p><p>Virtual \u7C7B\uFF0C\u865A\u62DF\u5217\u8868\u6838\u5FC3\u8BA1\u7B97</p><p>updateRange \u66F4\u65B0 start/end\uFF0C\u89E6\u53D1\u65F6\u673A\uFF1Fhead/footer resized\uFF1F</p><p><img src="https://img.oaker.bid/?url=http://tva1.sinaimg.cn/large/4e5d3ea7ly1h7co3h80vnj20nq0ben0f.jpg" alt="image.png"></p>',25),d={href:"https://www.vue-js.com/topic/5f9789724590fe0031e5927c",target:"_blank",rel:"noopener noreferrer"},u=a("\u957F\u5217\u8868\u4F18\u5316\u4E4B\u865A\u62DF\u5217\u8868__Vue.js - VueClub"),m={href:"https://segmentfault.com/a/1190000041415120",target:"_blank",rel:"noopener noreferrer"},k=a("javascript - \u9762\u8BD5\u9898\uFF1A\u6E32\u67D3\u5341\u4E07\u6761\u6570\u636E\u89E3\u51B3\u65B9\u6848_\u4E2A\u4EBA\u6587\u7AE0 - SegmentFault \u601D\u5426"),_={href:"https://blog.azhubaby.com/2022/02/09/2022-02-09-%25E6%25B8%25B2%25E6%259F%2593%25E5%258D%2581%25E4%25B8%2587%25E6%259D%25A1%25E6%2595%25B0%25E6%258D%25AE%25E8%25A7%25A3%25E5%2586%25B3%25E6%2596%25B9%25E6%25A1%2588/",target:"_blank",rel:"noopener noreferrer"},g=a("\u9762\u8BD5\u9898\uFF1A\u6E32\u67D3\u5341\u4E07\u6761\u6570\u636E\u89E3\u51B3\u65B9\u6848 | Azhubaby Blog"),b=t(`<h2 id="\u61D2\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> \u61D2\u52A0\u8F7D</h2><p>\u89E6\u5E95\u52A0\u8F7D\uFF0C\u4E00\u76F4\u8FFD\u52A0\uFF0C\u8F83\u5E38\u7528</p><h2 id="\u65F6\u95F4\u5206\u7247" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u5206\u7247" aria-hidden="true">#</a> \u65F6\u95F4\u5206\u7247</h2><p>\u4E00\u6B21\u6027\u6E32\u67D3\u662F\u74F6\u9888\uFF0C\u5206\u6279\u6E32\u67D3</p><h2 id="vue-virtual-scroller" tabindex="-1"><a class="header-anchor" href="#vue-virtual-scroller" aria-hidden="true">#</a> vue-virtual-scroller</h2><p>grid \u548C list\uFF0C\u6709\u4E0D\u540C\u7EC4\u4EF6</p><p>\u95EE\u9898\uFF1A</p><ul><li>scrollToItem \u53EA\u652F\u6301 index\uFF0C\u53EA\u80FD\u6EDA\u52A8\u8BE5\u5143\u7D20\u5230\u5C4F\u5E55\u9876\u90E8</li><li>\u4E0D\u786E\u5B9A\u9AD8\u5EA6\uFF1A\u53C2\u8003 simple-list demo\uFF0C\u9700\u8981\u7528\u6307\u5B9A\u7EC4\u4EF6\u5BF9 item \u5305\u4E00\u4E0B\uFF0C\u4EE5\u8BA1\u7B97 item \u9AD8\u5EA6</li></ul><h3 id="\u6E90\u7801-1" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801-1" aria-hidden="true">#</a> \u6E90\u7801</h3><p>\u6570\u636E\uFF1Apool</p><p>\u6EDA\u52A8: CSS transform</p><blockquote><p>\u5229\u7528 transform \u7684 translate3d \u5C5E\u6027\u6765\u5B9E\u73B0\u865A\u62DF\u6EDA\u52A8\u3002\u8FD9\u6837\u505A\u7684\u539F\u56E0\u662F\uFF0C\u4F7F\u7528 translate3d \u53EF\u4EE5\u89E6\u53D1 GPU \u52A0\u901F\uFF0C\u63D0\u9AD8\u6EDA\u52A8\u7684\u6027\u80FD\u3002\u5B83\u901A\u8FC7\u8BA1\u7B97\u5217\u8868\u9879\u7684\u9AD8\u5EA6\uFF0C\u5E76\u5728\u6EDA\u52A8\u65F6\u52A8\u6001\u5730\u66F4\u65B0 transform \u5C5E\u6027\uFF0C\u4EE5\u5B9E\u73B0\u865A\u62DF\u6EDA\u52A8\u7684\u6548\u679C\u3002</p></blockquote><p>scrollToPosition \u8BA1\u7B97\u8DDD\u79BB\uFF0C\u64CD\u4F5C el.scrollTop scrollDistance \u8BA1\u7B97</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>itemSize <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        scroll <span class="token operator">=</span> index <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sizes<span class="token punctuation">[</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>accumulator <span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        scroll <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>index <span class="token operator">/</span> gridItems<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>itemSize
      <span class="token punctuation">}</span>
</code></pre></div><h3 id="pool-\u6570\u636E\u4E22\u5931" tabindex="-1"><a class="header-anchor" href="#pool-\u6570\u636E\u4E22\u5931" aria-hidden="true">#</a> pool \u6570\u636E\u4E22\u5931</h3>`,15),f=a("\u9700\u8981\u6E90\u7801\u6253\u70B9 "),v={href:"https://github.com/Akryum/vue-virtual-scroller/issues/794#issuecomment-1443121523",target:"_blank",rel:"noopener noreferrer"},x=a("Missing elements after RecycleScroller is displayed \xB7 Issue #794 \xB7 Akryum/vue-virtual-scroller"),w={href:"https://github.com/Akryum/vue-virtual-scroller/issues/749",target:"_blank",rel:"noopener noreferrer"},y=a("Space between items in the list is wrong \xB7 Issue #749 \xB7 Akryum/vue-virtual-scroller"),E=t(`<h2 id="\u5C06\u5143\u7D20\u6EDA\u52A8\u5230\u53EF\u89C1\u533A\u57DF" tabindex="-1"><a class="header-anchor" href="#\u5C06\u5143\u7D20\u6EDA\u52A8\u5230\u53EF\u89C1\u533A\u57DF" aria-hidden="true">#</a> \u5C06\u5143\u7D20\u6EDA\u52A8\u5230\u53EF\u89C1\u533A\u57DF</h2><p>scrollIntoView</p><ul><li>smooth \u6709\u65F6\u770B\u8D77\u6765\u50CF\u5361\uFF0C\u7528\u9ED8\u8BA4\u503C instant \u66F4\u597D</li><li>block \u8868\u793A\u5782\u76F4\uFF0Cinline \u8868\u793A\u6C34\u5E73\uFF0C\u4E24\u8005\u9ED8\u8BA4\u8005\u4E0D\u540C\uFF0C\u6CE8\u610F\u4F7F\u7528\u3002</li><li>nearest \u4E0E\u7236\u5143\u7D20\u6700\u8FD1\u7684\u8FB9\u5BF9\u9F50</li></ul><div class="language-text ext-text"><pre class="language-text"><code>images[currentIndex - 1].scrollIntoView({ behavior: &#39;smooth&#39;, block: &#39;nearest&#39; });
</code></pre></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,5),j={href:"https://www.cnblogs.com/Grewer/p/16084947.html",target:"_blank",rel:"noopener noreferrer"},A=a("\u524D\u7AEF\u591A\u6570\u636E\u6E32\u67D3\u4F18\u5316 - Grewer - \u535A\u5BA2\u56ED");function B(z,I){const s=o("ExternalLinkIcon");return i(),l(p,null,[h,e("p",null,[e("a",d,[u,n(s)])]),e("p",null,[e("a",m,[k,n(s)])]),e("p",null,[e("a",_,[g,n(s)])]),b,e("p",null,[f,e("a",v,[x,n(s)]),e("a",w,[y,n(s)])]),E,e("p",null,[e("a",j,[A,n(s)])])],64)}var S=r(c,[["render",B],["__file","virtual-list.html.vue"]]);export{S as default};
