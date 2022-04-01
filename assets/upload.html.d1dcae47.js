import{_ as t,r as p,o as e,c as o,a,b as l,F as c,e as n,d as u}from"./app.818741d3.js";const r={},i=n('<h1 id="\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20" aria-hidden="true">#</a> \u4E0A\u4F20</h1><p>[toc]</p><h2 id="\u5927\u6587\u4EF6\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#\u5927\u6587\u4EF6\u4E0A\u4F20" aria-hidden="true">#</a> \u5927\u6587\u4EF6\u4E0A\u4F20</h2><p>\u601D\u8DEF\uFF1A</p><ul><li>\u5207\u7247\uFF0C\u7F16\u53F7\uFF0C\u6279\u91CF\u4E0A\u4F20</li><li>\u5408\u5E76\u65F6\u673A <ol><li>\u524D\u7AEF\u5224\u65AD\uFF0C\u901A\u77E5\u540E\u7AEF</li><li>\u8BF7\u6C42\u5E26\u4E0A total\uFF0C\u540E\u7AEF\u5224\u65AD</li></ol></li></ul><blockquote><p>\u6838\u5FC3 api:<code>Blob.prototype.slice</code></p></blockquote><p>\u8003\u8651\u56E0\u7D20\uFF1A</p><ul><li>\u6D4F\u89C8\u5668\u5185\u5B58\u9650\u5236</li><li>\u5E76\u53D1\u6570</li></ul>',8),k={href:"https://juejin.cn/post/6844904046436843527",target:"_blank",rel:"noopener noreferrer"},d=u("\u5B57\u8282\u8DF3\u52A8\u9762\u8BD5\u5B98\uFF1A\u8BF7\u4F60\u5B9E\u73B0\u4E00\u4E2A\u5927\u6587\u4EF6\u4E0A\u4F20\u548C\u65AD\u70B9\u7EED\u4F20"),h=n(`<h2 id="\u65AD\u70B9\u7EED\u4F20" tabindex="-1"><a class="header-anchor" href="#\u65AD\u70B9\u7EED\u4F20" aria-hidden="true">#</a> \u65AD\u70B9\u7EED\u4F20</h2><p>\u601D\u8DEF\uFF1A</p><ul><li>\u670D\u52A1\u7AEF\u4FDD\u5B58\u5DF2\u4E0A\u4F20\u5206\u7247 hash\uFF0C\u524D\u7AEF\u4E0A\u4F20\u524D\u67E5\u8BE2\u4E2D\u65AD\u4F4D\u7F6E</li></ul><h2 id="\u6682\u505C\u3001\u6062\u590D" tabindex="-1"><a class="header-anchor" href="#\u6682\u505C\u3001\u6062\u590D" aria-hidden="true">#</a> \u6682\u505C\u3001\u6062\u590D</h2><ul><li>\u6B63\u5728\u4E0A\u4F20\u7684\u8BF7\u6C42\uFF0Cabort</li><li>\u6062\u590D\u7528\u65AD\u70B9\u7EED\u4F20\u5373\u53EF</li></ul><h2 id="hash-\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#hash-\u751F\u6210" aria-hidden="true">#</a> hash \u751F\u6210</h2><p>\u6839\u636E\u5185\u5BB9\u8BA1\u7B97 hash\uFF0C\u8FD9\u662F\u8017\u65F6\u4EFB\u52A1\uFF0C\u53EF\u7528 web-worker \u4F18\u5316</p><h2 id="snippet" tabindex="-1"><a class="header-anchor" href="#snippet" aria-hidden="true">#</a> snippet</h2><p>post \u7C7B\u578B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;json&#39;</span><span class="token operator">:</span>
      headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;upload&#39;</span><span class="token operator">:</span>
      headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;multiple/form-data&#39;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;application/x-www-form-urlencoded&#39;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>html \u5199\u6CD5</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/upload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multipart/form-data<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image/png,image/bmp,image/jpg,image/jpeg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploadImage<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u63D0\u4EA4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,12);function m(b,g){const s=p("ExternalLinkIcon");return e(),o(c,null,[i,a("p",null,[a("a",k,[d,l(s)])]),h],64)}var v=t(r,[["render",m],["__file","upload.html.vue"]]);export{v as default};
