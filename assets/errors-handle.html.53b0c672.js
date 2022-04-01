import{_ as c,r as p,o as l,c as i,a as n,b as a,w as o,F as u,d as s,e as r}from"./app.818741d3.js";const d={},h=n("h1",{id:"\u9519\u8BEF\u5904\u7406",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9519\u8BEF\u5904\u7406","aria-hidden":"true"},"#"),s(" \u9519\u8BEF\u5904\u7406")],-1),k={class:"table-of-contents"},b=s("throw"),m=s("Vue"),_=s("Image"),g=s("Sentry"),f=s("\u9519\u8BEF\u6A21\u62DF"),v=s("\u5B9E\u8DF5"),w=s("1px gif"),y=s("cdn \u811A\u672C\u9519\u8BEF"),E=r(`<h2 id="throw" tabindex="-1"><a class="header-anchor" href="#throw" aria-hidden="true">#</a> throw</h2><ul><li>\u4EC0\u4E48\u60C5\u51B5\u4E0B\u7528 throw\uFF0C\u5373\u4E0D\u6EE1\u8DB3\u7EE7\u7EED\u6267\u884C\u6761\u4EF6\uFF0C\u7EE7\u7EED\u6267\u884C\u6CA1\u610F\u4E49\uFF0C\u53EA\u4F1A\u663E\u793A\u66F4\u591A\u65E0\u7528\u9519\u8BEF\uFF0C\u751A\u81F3\u53EF\u80FD\u662F\u6B7B\u5FAA\u73AF</li><li>\u4E2D\u65AD\u51FD\u6570\u6267\u884C\uFF0C\u629B\u51FA\u4E00\u4E2A exception \u5BF9\u8C61\uFF0C\u5305\u542B name \u548C message \u4E24\u4E2A\u5C5E\u6027\uFF0C\u4E5F\u53EF\u4EE5\u6DFB\u52A0\u5176\u5B83\u7684\u5C5E\u6027 <code>try ... catch (e) {console.log(e.name, e.message)}</code> catch \u4ECE\u53E5\u53EF\u6355\u83B7\u5F02\u5E38\u9519\u8BEF</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">divide</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> num1 <span class="token operator">!=</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> num2 <span class="token operator">!=</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;divide(): Both arguments must be numbers.&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> num1 <span class="token operator">/</span> num2
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u53EF\u62BD\u8C61\u6210\u65AD\u8A00\u51FD\u6570\uFF0C\u7B80\u5316\u9519\u8BEF\u8F93\u51FA</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">assert</span><span class="token punctuation">(</span><span class="token parameter">conditon<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">divide</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">assert</span><span class="token punctuation">(</span>
    <span class="token keyword">typeof</span> num1 <span class="token operator">!=</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> num2 <span class="token operator">!=</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;divide(): Both arguments must be numbers.&#39;</span>
  <span class="token punctuation">)</span>
  <span class="token keyword">return</span> num1 <span class="token operator">/</span> num2
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,5),x={href:"https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror",target:"_blank",rel:"noopener noreferrer"},j=s("GlobalEventHandlers.onerror | MDN"),A={href:"https://developers.google.com/web/tools/chrome-devtools/console/track-exceptions?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},B=s("\u5F02\u5E38\u548C\u9519\u8BEF\u5904\u7406 \xA0|\xA0 Tools for Web Developers \xA0|\xA0 Google Developers"),C={href:"https://gist.github.com/nevergiveup-j/f8df2b1854492e0f80b6",target:"_blank",rel:"noopener noreferrer"},S=s("\u524D\u7AEF\u4EE3\u7801\u5F02\u5E38\u65E5\u5FD7\u6536\u96C6\u4E0E\u76D1\u63A7"),V={href:"http://bitcoin-on-nodejs.ebookchain.org/2-Node.js%25E5%2585%25A5%25E9%2597%25A8%25E6%258C%2587%25E5%258D%2597/4-%25E6%2582%25A8%25E5%25BF%2585%25E9%25A1%25BB%25E7%259F%25A5%25E9%2581%2593%25E7%259A%2584%25E5%2587%25A0%25E4%25B8%25AANodejs%25E7%25BC%2596%25E7%25A0%2581%25E4%25B9%25A0%25E6%2583%25AF.html",target:"_blank",rel:"noopener noreferrer"},F=s("\u60A8\u5FC5\u987B\u77E5\u9053\u7684\u51E0\u4E2A Nodejs \u7F16\u7801\u4E60\u60EF \xB7 GitBook"),N=n("h2",{id:"vue",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue","aria-hidden":"true"},"#"),s(" Vue")],-1),L=n("ul",null,[n("li",null,[n("code",null,"Vue.config.errorHandler"),s("\u5728\u8FD9\u91CC\u8BBE\u7F6E\u4E0A\u62A5")]),n("li",null,[n("code",null,"Vue.config.warnHandler"),s("\u5728 production \u4F1A\u5FFD\u7565")]),n("li",null,[n("code",null,"errorCaptured"),s(" hook \u53EF\u4EE5\u7528\u6765\u505A error-boundary \u7EC4\u4EF6\uFF0C2.5+ \u53EF\u7528\uFF0C\u6355\u83B7\u5B50\u5B59\u7EC4\u4EF6 vue render \u9519\u8BEF\uFF0C\u6355\u83B7\u4E0D\u4E86 click \u7B49\u4E8B\u4EF6\u51FD\u6570\u9519\u8BEF")])],-1),D={href:"https://cn.vuejs.org/v2/guide/deployment.html#%25E8%25B7%259F%25E8%25B8%25AA%25E8%25BF%2590%25E8%25A1%258C%25E6%2597%25B6%25E9%2594%2599%25E8%25AF%25AF",target:"_blank",rel:"noopener noreferrer"},I=s("\u751F\u4EA7\u73AF\u5883\u90E8\u7F72 \u2014 Vue.js"),G={href:"https://catchjs.com/Docs/Vue",target:"_blank",rel:"noopener noreferrer"},H=s("Error handling with Vue.js (a story of rental cars and Destinys Child) | CatchJS"),q={href:"https://github.com/CatChen/catchen.me/blob/c622f7c49e5b603cb4d768c189e1c2e0436bebcf/public/_layout.jade#L87",target:"_blank",rel:"noopener noreferrer"},z=s("catchen.me/_layout.jade at c622f7c49e5b603cb4d768c189e1c2e0436bebcf \xB7 CatChen/catchen.me"),P={href:"http://www.cnblogs.com/hustskyking/p/fe-monitor.html",target:"_blank",rel:"noopener noreferrer"},J=s("\u524D\u7AEF\u4EE3\u7801\u5F02\u5E38\u65E5\u5FD7\u6536\u96C6\u4E0E\u76D1\u63A7 - Barret Lee - \u535A\u5BA2\u56ED"),T={href:"https://github.com/happylindz/blog/issues/5",target:"_blank",rel:"noopener noreferrer"},W=s("\u524D\u7AEF\u4EE3\u7801\u5F02\u5E38\u76D1\u63A7\u5B9E\u6218 \xB7 Issue #5 \xB7 happylindz/blog"),M=r(`<h2 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> Image</h2><ol><li>\u5728 img \u6807\u7B7E\u4E0A\u8BBE\u7F6E <code>v-on:error=&quot;&quot;</code></li><li>\u8BBE\u7F6E\u66FF\u6362\u56FE\u7247\uFF0C\u8981\u4FDD\u8BC1\u66FF\u6362\u56FE\u7247\u5B58\u5728\uFF0C\u5426\u5219\u53EF\u80FD\u9020\u6210\u6B7B\u5FAA\u73AF</li></ol><h2 id="sentry" tabindex="-1"><a class="header-anchor" href="#sentry" aria-hidden="true">#</a> Sentry</h2><p>\u624B\u52A8\u4E0A\u62A5 <code>Sentry.captureMessage(&#39;Something went wrong&#39;);</code></p><p>Capturing Events - Docs https://docs.sentry.io/error-reporting/capturing/?platform=javascript</p><h2 id="\u9519\u8BEF\u6A21\u62DF" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u6A21\u62DF" aria-hidden="true">#</a> \u9519\u8BEF\u6A21\u62DF</h2><ul><li>dev tool block\uFF0C\u5FFD\u7565\u8FD9\u79CD\u60C5\u51B5\uFF0C\u610F\u4E49\u4E0D\u5927</li><li>mock 500\uFF0C\u8FD9\u79CD\u5E38\u89C1\uFF0ConError \u80FD\u6355\u83B7\u5230</li></ul><h2 id="\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u8DF5" aria-hidden="true">#</a> \u5B9E\u8DF5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
    <span class="token comment">// \u76D1\u63A7js\u9519\u8BEF</span>
    window<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> _url<span class="token punctuation">,</span> line<span class="token punctuation">,</span> col<span class="token punctuation">,</span> error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u91C7\u7528\u5F02\u6B65\u7684\u65B9\u5F0F,\u907F\u514D\u963B\u585E</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token comment">// \u76D1\u63A7\u8D44\u6E90\u52A0\u8F7D\u9519\u8BEF(img,script,css,\u4EE5\u53CAjsonp)</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;unhandledrejection&#39;</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_1px-gif" tabindex="-1"><a class="header-anchor" href="#_1px-gif" aria-hidden="true">#</a> 1px gif</h2><ol><li>\u6CA1\u6709\u8DE8\u57DF\u95EE\u9898\uFF0C\u4E00\u822C\u8FD9\u79CD\u4E0A\u62A5\u6570\u636E\uFF0C\u4EE3\u7801\u8981\u5199\u901A\u7528\u7684\uFF1B\uFF08\u6392\u9664ajax\uFF09</li><li>\u4E0D\u4F1A\u963B\u585E\u9875\u9762\u52A0\u8F7D\uFF0C\u5F71\u54CD\u7528\u6237\u7684\u4F53\u9A8C\uFF0C\u53EA\u8981new Image\u5BF9\u8C61\u5C31\u597D\u4E86\uFF1B\uFF08\u6392\u9664JS/CSS\u6587\u4EF6\u8D44\u6E90\u65B9\u5F0F\u4E0A\u62A5\uFF09</li><li>\u5728\u6240\u6709\u56FE\u7247\u4E2D\uFF0C\u4F53\u79EF\u6700\u5C0F\uFF1B\uFF08\u6BD4\u8F83PNG/JPG\uFF09</li></ol><h2 id="cdn-\u811A\u672C\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#cdn-\u811A\u672C\u9519\u8BEF" aria-hidden="true">#</a> cdn \u811A\u672C\u9519\u8BEF</h2><p>\u811A\u672C\u7531\u4E8E\u8DE8\u57DF\u7684\u95EE\u9898\uFF0C\u9519\u8BEF\u76D1\u63A7\u62FF\u5230\u7684\u9519\u8BEF\u4FE1\u606F\u91CC\u9762\u53EA\u6709Script Error</p><p>What the heck is &quot;Script error&quot;? | Product Blog \u2022 Sentry https://blog.sentry.io/2016/05/17/what-is-script-error https://html.spec.whatwg.org/multipage/scripting.html#attr-script-crossorigin</p>`,14);function R(U,K){const t=p("RouterLink"),e=p("ExternalLinkIcon");return l(),i(u,null,[h,n("nav",k,[n("ul",null,[n("li",null,[a(t,{to:"#throw"},{default:o(()=>[b]),_:1})]),n("li",null,[a(t,{to:"#vue"},{default:o(()=>[m]),_:1})]),n("li",null,[a(t,{to:"#image"},{default:o(()=>[_]),_:1})]),n("li",null,[a(t,{to:"#sentry"},{default:o(()=>[g]),_:1})]),n("li",null,[a(t,{to:"#\u9519\u8BEF\u6A21\u62DF"},{default:o(()=>[f]),_:1})]),n("li",null,[a(t,{to:"#\u5B9E\u8DF5"},{default:o(()=>[v]),_:1})]),n("li",null,[a(t,{to:"#_1px-gif"},{default:o(()=>[w]),_:1})]),n("li",null,[a(t,{to:"#cdn-\u811A\u672C\u9519\u8BEF"},{default:o(()=>[y]),_:1})])])]),E,n("p",null,[n("a",x,[j,a(e)]),n("a",A,[B,a(e)]),n("a",C,[S,a(e)]),n("a",V,[F,a(e)])]),N,L,n("p",null,[n("a",D,[I,a(e)])]),n("p",null,[n("a",G,[H,a(e)])]),n("p",null,[n("a",q,[z,a(e)])]),n("p",null,[n("a",P,[J,a(e)])]),n("p",null,[n("a",T,[W,a(e)])]),M],64)}var Q=c(d,[["render",R],["__file","errors-handle.html.vue"]]);export{Q as default};
