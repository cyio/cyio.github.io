import{_ as o,r as p,o as c,c as r,a as n,b as e,F as i,e as t,d as a}from"./app.de511a45.js";const l={},u=t('<h1 id="pwa" tabindex="-1"><a class="header-anchor" href="#pwa" aria-hidden="true">#</a> PWA</h1><h2 id="\u53EF\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u53EF\u5B89\u88C5" aria-hidden="true">#</a> \u53EF\u5B89\u88C5</h2><p><code>manifest.json</code></p><h2 id="sw" tabindex="-1"><a class="header-anchor" href="#sw" aria-hidden="true">#</a> SW</h2><ul><li>\u9700\u8981\u7F13\u5B58\u8D44\u6E90 <ul><li>\u5E94\u7528\u6838\u5FC3 JS CSS</li><li>\u5B57\u4F53</li><li>\u56FE\u7247</li><li>\u5173\u952E HTTP \u8BF7\u6C42</li></ul></li></ul><h2 id="\u4E0E\u5C0F\u7A0B\u5E8F\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E0E\u5C0F\u7A0B\u5E8F\u533A\u522B" aria-hidden="true">#</a> \u4E0E\u5C0F\u7A0B\u5E8F\u533A\u522B</h2><p>\u5C0F\u3001\u5FEB\u3001\u8F7B\uFF0C\u5E94\u5BF9\u539F\u751F\u5E94\u7528\u5F0A\u7AEF\uFF0C\u8BA9 web \u5177\u6709\u5E94\u7528\u80FD\u529B \u4E24\u4E2A\u751F\u6001\uFF1A \u5F00\u653E\u3001\u5C01\u95ED</p><blockquote><p>\u4F20\u7EDF\u7684 HttpCache\uFF0C\u8BA9\u8D44\u6E90\u5728\u7F13\u5B58\u65F6\u6027\u80FD\u4F1A\u5F88\u597D\uFF0C\u800C PWA \u662F\u8BA9\u8D44\u6E90\u975E\u5E38\u53EF\u9760\u5730\u7F13\u5B58\u8D77\u6765\uFF0C\u8BA9\u9875\u9762\u6027\u80FD\u4E00\u76F4\u90FD\u5F88\u597D\u3002</p></blockquote><h2 id="\u6FC0\u6D3B\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u6FC0\u6D3B\u95EE\u9898" aria-hidden="true">#</a> \u6FC0\u6D3B\u95EE\u9898</h2><p>\u9ED8\u8BA4\u7B49\u5F85\u6FC0\u6D3B\uFF0C\u9700\u8981\u7B49\u9875\u9762\u5173\u95ED\uFF0C\u8FD9\u4E48\u8BBE\u8BA1\u539F\u56E0\u662F\u6E10\u8FD1\u5F0F</p>',10),h={href:"https://gomakethings.com/how-to-immediately-activate-a-service-worker-with-vanilla-js/",target:"_blank",rel:"noopener noreferrer"},d=a("How to immediately activate a service worker with vanilla JS | Go Make Things"),k={href:"https://stackoverflow.com/a/56569087/5657916",target:"_blank",rel:"noopener noreferrer"},_=a("vue.js - How to do skipwaiting with register-service-worker in vue app? - Stack Overflow"),f=t(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// vue.config.js</span>
    <span class="token literal-property property">pwa</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>
        <span class="token literal-property property">workboxPluginMode</span><span class="token operator">:</span> <span class="token string">&#39;GenerateSW&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">workboxOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">skipWaiting</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div>`,1),g={href:"https://allanchain.github.io/blog/post/vue-pwa-3/",target:"_blank",rel:"noopener noreferrer"},v=a("\u7528 Vue \u505A PWA \uFF08\u4E09\uFF09\uFF1A\u7406\u89E3\u751F\u547D\u5468\u671F - AC Dustbin"),w={href:"https://www.360learntocode.com/2020/12/vuejs-pwa-notify-user-of-app-update.html",target:"_blank",rel:"noopener noreferrer"},b=a("VueJs PWA: Notify User about the App Update | skipWaiting ~ 360learntocode"),m=n("h2",{id:"\u79BB\u7EBF\u5305\u600E\u4E48\u66F4\u65B0-\u600E\u4E48\u77E5\u9053\u9700\u8981\u6253\u5F00\u54EA\u4E2A\u79BB\u7EBF\u5305",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u79BB\u7EBF\u5305\u600E\u4E48\u66F4\u65B0-\u600E\u4E48\u77E5\u9053\u9700\u8981\u6253\u5F00\u54EA\u4E2A\u79BB\u7EBF\u5305","aria-hidden":"true"},"#"),a(" \u79BB\u7EBF\u5305\u600E\u4E48\u66F4\u65B0\uFF1F\u600E\u4E48\u77E5\u9053\u9700\u8981\u6253\u5F00\u54EA\u4E2A\u79BB\u7EBF\u5305\uFF1F")],-1),y=n("p",null,"\u540E\u53F0\u66F4\u65B0\uFF1A\u6BCF\u6B21\u8FDB\u5165\u4E00\u4E2A\u65B0\u9875\u9762\uFF0C\u5F02\u6B65\u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\uFF0C\u662F\u5426\u9700\u8981\u66F4\u65B0\u3002",-1),x=n("p",null,"\u901A\u8FC7\u7248\u672C\u53F7\u3002",-1),A=a("\u7F51\u9875\u4E2D\u7684\u4E3B\u9898\u8272\u8BBE\u7F6E"),W=n("code",null,'<meta name="theme-color" content="#2196F3">',-1),S=a("\uFF0C\u4F18\u5148\u4E8E manifest.json \u4E2D\u7684\u8BBE\u7F6E"),j=n("code",null,'"theme_color": "#2196F3"',-1),P={href:"https://fed.renren.com/2017/10/04/service-worker/",target:"_blank",rel:"noopener noreferrer"},E=a("\u4F7F\u7528Service Worker\u505A\u4E00\u4E2APWA\u79BB\u7EBF\u7F51\u9875\u5E94\u7528 \u2013 \u4EBA\u4EBA\u7F51FED\u535A\u5BA2"),q=t(`<h2 id="\u7F13\u5B58\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u7B56\u7565" aria-hidden="true">#</a> \u7F13\u5B58\u7B56\u7565</h2><p>5 \u79CD\uFF0C\u5E38\u7528\u7684\u662F\u7F13\u5B58\u4F18\u5148\u548C\u7F51\u7EDC\u4F18\u5148</p><p>\u76D1\u542C fetch \u4E8B\u4EF6</p><ol><li>\u7F13\u5B58\u4F18\u5148\u2014\u2014\u9996\u5148\u67E5\u770B\u7F13\u5B58\uFF0C\u5F53\u7F13\u5B58\u5931\u6548\u65F6\u518D\u53BB\u8BBF\u95EE\u7F51\u7EDC\u3002\u8FD9\u4E00\u7B56\u7565\u9002\u7528\u4E8E\u8D44\u6E90\u6587\u4EF6\uFF0C\u5982\u5B57\u4F53\u3001\u6837\u5F0F\u3001\u56FE\u7247\u7B49</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code>self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;fetch&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span>
    caches<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> response <span class="token operator">||</span> <span class="token function">fetch</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u9996\u5148\u4ECE\u7F13\u5B58\u4E2D\u83B7\u53D6\u8D44\u6E90\uFF0C\u5982\u679C\u7F13\u5B58\u4E2D\u6CA1\u6709\u8D44\u6E90\uFF0C\u5219\u4ECE\u7F51\u7EDC\u83B7\u53D6\u8D44\u6E90\u3002\u5982\u679C\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\uFF0C\u5219\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u54CD\u5E94\u3002</p><ol start="2"><li>\u7F51\u7EDC\u4F18\u5148\uFF1A\u9996\u5148\u67E5\u770B\u7F51\u7EDC\uFF0C\u5F53\u7F51\u7EDC\u5931\u8D25\u65F6\u5E94\u7528\u672C\u5730\u7F13\u5B58\u3002\u8FD9\u4E00\u7B56\u7565\u9002\u5408\u5B9E\u65F6\u6570\u636E\uFF0C\u6BD4\u5982\u83B7\u53D6\u5929\u6C14\u4FE1\u606F\u7684 AJAX \u8BF7\u6C42\u3002\u8FD9\u6837\u6BCF\u6B21\u9875\u9762\u5237\u65B0\u90FD\u53EF\u4EE5\u83B7\u5F97\u6700\u65B0\u7684\u5929\u6C14\u4FE1\u606F\uFF0C\u5F53\u79BB\u7EBF\u65F6\u4F1A\u964D\u7EA7\u5230\u4F7F\u7528\u672C\u5730\u7F13\u5B58\u3002\u5E76\u7ED9\u51FA\u79BB\u7EBF\u7684\u63D0\u793A\u3002</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code>self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;fetch&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> response<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> caches<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u9996\u5148\u4ECE\u7F51\u7EDC\u83B7\u53D6\u8D44\u6E90\uFF0C\u5982\u679C\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\uFF0C\u5219\u4ECE\u7F13\u5B58\u4E2D\u83B7\u53D6\u8D44\u6E90\u3002\u5982\u679C\u7F13\u5B58\u4E2D\u4E5F\u6CA1\u6709\u8D44\u6E90\uFF0C\u5219\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u54CD\u5E94\u3002</p>`,9),B={href:"http://www.infoq.com/cn/articles/exploration-and-practice-of-baidu-search-for-pwa",target:"_blank",rel:"noopener noreferrer"},V=a("\u767E\u5EA6\u641C\u7D22\u5BF9PWA\u7684\u63A2\u7D22\u548C\u521D\u6B65\u5B9E\u8DF5"),F=t('<h2 id="\u7ED3\u5408\u4E1A\u52A1" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u5408\u4E1A\u52A1" aria-hidden="true">#</a> \u7ED3\u5408\u4E1A\u52A1</h2><ul><li>\u4F53\u9A8C\u63A5\u8FD1\u79BB\u7EBF\u5E94\u7528\uFF0C\u63D0\u9AD8 xx \u7387</li><li>\u8282\u7701\u516C\u53F8\u8D44\u6E90\uFF1A\u4E0E\u5E38\u89C4\u7F13\u5B58\u76F8\u6BD4\uFF0C\u80FD\u51CF\u5C11\u591A\u5C11\u8D44\u6E90\u8BF7\u6C42\uFF1F</li><li>\u6280\u672F\u590D\u6742\u5EA6\u548C\u6210\u672C\uFF1A\u76F8\u8F83 SSR \u4F4E</li></ul><h2 id="issues" tabindex="-1"><a class="header-anchor" href="#issues" aria-hidden="true">#</a> Issues</h2><p>\u79BB\u7EBF\u540E\u53EA\u80FD\u4ECE\u5165\u53E3\u8BBF\u95EE\uFF1F\u4E0D\u80FD\u4ECE\u5B50\u9875\u9762</p><h3 id="ios-12-\u652F\u6301\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#ios-12-\u652F\u6301\u60C5\u51B5" aria-hidden="true">#</a> ios 12 \u652F\u6301\u60C5\u51B5</h3><p>still force reload every time app is shown/hidden now retain cookies after being reloaded (i.e. login possible) forget deep links support localStorage don&#39;t support sessionStorage</p><p>\u89E3\u51B3\uFF1A Switched to localStorage instead of sessionStorage when &quot;standalone&quot; and persist a custom history stack to restore deep links</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>',8),L={href:"https://huangxuan.me/2017/07/12/upgrading-eleme-to-pwa/#%25E5%25A4%259A%25E9%25A1%25B5%25E5%25BA%2594%25E7%2594%25A8vuepwa",target:"_blank",rel:"noopener noreferrer"},T=a("\u997F\u4E86\u4E48\u7684 PWA \u5347\u7EA7\u5B9E\u8DF5 - \u9EC4\u7384\u7684\u535A\u5BA2 | Hux Blog"),H={href:"https://lavas.baidu.com/",target:"_blank",rel:"noopener noreferrer"},N=a("Lavas | \u57FA\u4E8E Vue \u7684 PWA \u5B8C\u6574\u89E3\u51B3\u65B9\u6848"),C={href:"https://github.com/lavas-project",target:"_blank",rel:"noopener noreferrer"},J=a("Lavas"),D={href:"https://developers.google.com/web/updates/2018/05/beyond-spa",target:"_blank",rel:"noopener noreferrer"},G=a("Beyond SPAs: alternative architectures for your PWA \xA0|\xA0 Web \xA0|\xA0 Google Developers"),I=n("p",null,"Trusted Web Activity",-1),M={href:"https://ymedialabs.com/progressive-web-apps",target:"_blank",rel:"noopener noreferrer"},O=a("Why Progressive Web Apps Are The Future of Mobile Web [2019 Research]");function R(U,X){const s=p("ExternalLinkIcon");return c(),r(i,null,[u,n("p",null,[n("a",h,[d,e(s)]),n("a",k,[_,e(s)])]),f,n("p",null,[n("a",g,[v,e(s)]),n("a",w,[b,e(s)])]),m,y,x,n("ul",null,[n("li",null,[A,W,S,j,n("a",P,[E,e(s)])])]),q,n("p",null,[n("a",B,[V,e(s)])]),F,n("p",null,[n("a",L,[T,e(s)]),n("a",H,[N,e(s)]),n("a",C,[J,e(s)]),n("a",D,[G,e(s)])]),I,n("p",null,[n("a",M,[O,e(s)])])],64)}var K=o(l,[["render",R],["__file","pwa.html.vue"]]);export{K as default};