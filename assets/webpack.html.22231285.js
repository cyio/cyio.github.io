import{_ as o,r as p,o as r,c as l,a as n,b as a,F as c,e as t,d as s}from"./app.818741d3.js";const i={},u=t(`<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h1><p>\u4E00\u7AD9\u5F0F\u89E3\u51B3\u4E86\u6240\u6709\u8D44\u6E90\u7684\u4F9D\u8D56\u95EE\u9898</p><h2 id="why" tabindex="-1"><a class="header-anchor" href="#why" aria-hidden="true">#</a> why</h2><ul><li><p>\u4F20\u7EDF script \u5F15\u5165\u7F3A\u70B9</p><ul><li>\u5168\u5C40\u6C61\u67D3</li><li>\u987A\u5E8F\u96BE\u4FDD\u8BC1</li></ul></li><li><p>\u5728\u5927\u578B SPA \u91CC\u9762\uFF0C\u5982\u679C\u5168\u90E8\u6253\u5305\u6210\u4E00\u4E2A\u6587\u4EF6\u4F1A\u5BFC\u81F4\u6587\u4EF6\u8FC7\u5927\uFF0C\u9996\u5C4F\u52A0\u8F7D\u901F\u5EA6\u53D7\u5F71\u54CD\uFF08code splitting\uFF09</p></li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> webpack-dev-server -g
webpack-dev-server --progress --colors
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>http://localhost:8080/webpack-dev-server/bundle</code></p><p>\u914D\u7F6E\u6587\u4EF6\u662F node.js(CommonJS)\u6A21\u5757\uFF0C\u4F7F\u7528 JavaScript \u7F16\u5199</p><h2 id="\u5DE5\u5177\u8981\u89E3\u51B3\u7684\u4E09\u4E2A\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5177\u8981\u89E3\u51B3\u7684\u4E09\u4E2A\u95EE\u9898" aria-hidden="true">#</a> \u5DE5\u5177\u8981\u89E3\u51B3\u7684\u4E09\u4E2A\u95EE\u9898</h2><pre><code>- \u6253\u5305\u5206\u62C6
- \u5F02\u6B65\u52A0\u8F7D
- \u5904\u7406\u9759\u6001\u8D44\u6E90\u5982CSS/images
</code></pre><h2 id="\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B" aria-hidden="true">#</a> \u6D41\u7A0B</h2><p>\u6D41\u7A0B <code>code -&gt; loaders -&gt; plugins -&gt; output</code><strong>loaders</strong> \u76F8\u5F53\u4E8E\u5176\u5B83\u5DE5\u5177\u4E2D\u7684 <strong>tasks</strong></p><p>entry \u4ECE\u54EA\u5F00\u59CB\u6253\u5305</p><p>output \u8F93\u51FA\u5230\u54EA</p><p>loader \u5982\u4F55\u8F6C\u6362\u8D44\u6E90</p><p>plugin \u5982\u4F55\u6253\u5305</p><p>resolve \u5982\u4F55\u89E3\u6790\u5305</p>`,17),d={href:"https://presentations.survivejs.com/advanced-webpack/#/?k=edjsgp&_k=esekxp",target:"_blank",rel:"noopener noreferrer"},h=s("Advanced Webpack"),b=n("h3",{id:"loader-vs-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#loader-vs-plugin","aria-hidden":"true"},"#"),s(" loader vs plugin")],-1),k=n("p",null,"loader \u8F6C\u6362\u5668\uFF0C\u9884\u5904\u7406\u6E90\u7801",-1),_=n("p",null,"plugin \u5904\u7406 loader \u5904\u7406\u4E0D\u4E86\u7684\u4EFB\u4F55\u4E8B",-1),m=n("h2",{id:"\u4E0A\u624B\u53C2\u8003",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E0A\u624B\u53C2\u8003","aria-hidden":"true"},"#"),s(" \u4E0A\u624B\u53C2\u8003")],-1),g={href:"https://github.com/petehunt/webpack-howto",target:"_blank",rel:"noopener noreferrer"},f=s("petehunt/webpack-howto"),w={href:"http://www.slideshare.net/ssuser0e4922/webpack-slides-51907869",target:"_blank",rel:"noopener noreferrer"},v=s("Webpack slides"),y={href:"http://www.ido321.com/1646.html",target:"_blank",rel:"noopener noreferrer"},x=s("\u8BE6\u89E3\u524D\u7AEF\u6A21\u5757\u5316\u5DE5\u5177-Webpack | \u6DE1\u5FD8~\u6D45\u601D"),j={href:"https://skryvets.com/blog/2018/03/25/webpack-configuration-for-multi-page-application/",target:"_blank",rel:"noopener noreferrer"},S=s("Webpack configuration for Multi Page Application. All you need to start your project | Sergey Kryvets Blog"),E=t(`<ul><li>publicPath \u7528\u4E8E\u53D1\u5E03\u65F6\u6587\u4EF6\u8DEF\u5F84\u7684\u8BBE\u7F6E\uFF0C\u662F\u7EDD\u5BF9\u8DEF\u5F84 \u672C\u5730\u6D4B\u8BD5\uFF0C\u8981\u5F00\u670D\u52A1\uFF0C\u7136\u540E\u628A\u670D\u52A1\u5730\u5740\u52A0\u4E0A</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>webpack main.js bundle.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./main.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8C03\u7528\uFF1A</p><ul><li><code>webpack</code> \u5F00\u53D1\u73AF\u5883\u4E0B\u7F16\u8BD1</li><li><code>webpack -p</code> \u4EA7\u54C1\u7F16\u8BD1\u53CA\u538B\u7F29</li><li><code>webpack --watch</code> \u5F00\u53D1\u73AF\u5883\u4E0B\u6301\u7EED\u7684\u76D1\u542C\u6587\u4EF6\u53D8\u52A8\u6765\u8FDB\u884C\u7F16\u8BD1(\u975E\u5E38\u5FEB!)</li><li><code>webpack -d</code> \u5F15\u5165 source maps</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u73B0\u5728\u4F60require\u6587\u4EF6\u7684\u65F6\u5019\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528require(&#39;file&#39;)\uFF0C\u4E0D\u7528\u4F7F\u7528require(&#39;file.coffee&#39;)</span>
  <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.coffee&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="webpack-3-x-\u5347\u7EA7" tabindex="-1"><a class="header-anchor" href="#webpack-3-x-\u5347\u7EA7" aria-hidden="true">#</a> webpack 3.x \u5347\u7EA7</h2><ul><li>\u4E0D\u518D\u652F\u6301\u81EA\u52A8\u5BFC\u5165<code>web_modules</code>\u76EE\u5F55\u4E0B\u6587\u4EF6 \u9700\u8981\u5728\u6587\u4EF6 <code>webpack.base.conf.js</code> \u4E2D\u6DFB\u52A0 alias</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	  <span class="token comment">// ...</span>
		<span class="token string-property property">&#39;web_modules&#39;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;web_modules&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// \u5F15\u5165</span>
<span class="token keyword">import</span> <span class="token string">&#39;web_modules/modernizr&#39;</span>  <span class="token comment">// must import first</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,9),C=s("\u53C2\u8003\uFF1A"),B={href:"https://webpack.js.org/configuration/resolve/#resolve-alias",target:"_blank",rel:"noopener noreferrer"},P=s("Resolve"),W=t('<h2 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> loader</h2><ul><li>file-loader \u5C06\u8D44\u6E90\u590D\u5236\u8FC7\u53BB\uFF0C\u7136\u540E\u8FD4\u56DE\u8D44\u6E90\u8DEF\u5F84\uFF0C\u4E00\u822C\u662F\u56FE\u7247\u6587\u4EF6\uFF0C\u90A3\u522B\u7684\u683C\u5F0F\u5982 mp3 \u6587\u4EF6\u600E\u4E48\u529E\uFF1F\u52A0\u5230\u6B63\u5219\u5373\u53EF</li><li>url-loader \u5C0F\u4E8E\u591A\u5C11\u5B57\u8282\u65F6\uFF0C\u8F6C\u6362\u4E3A base64 \u5185\u8054\uFF0C\u652F\u6301\u56DE\u9000\u5230 file-loader\uFF0C\u573A\u666F\u5982 icon</li></ul><h2 id="\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305" aria-hidden="true">#</a> \u6253\u5305</h2><ul><li>\u81EA\u5E26\u5206\u6790<code>webpack --profile --json &gt; stats.json</code></li></ul><p>vendor \u7B2C\u4E09\u65B9\u5E93 common \u5171\u7528</p><blockquote><p>With this bundle configuration, you would load your third party libraries, then your common application code, then your page-specific application code.</p></blockquote>',6),A={href:"https://www.jenniferbland.com/how-to-reduce-your-vue-js-bundle-size-with-webpack/",target:"_blank",rel:"noopener noreferrer"},D=s("How to Reduce Your Vue.JS Bundle Size With Webpack"),V=n("h2",{id:"\u5206\u5305-\u63D0\u53D6\u516C\u5171\u6A21\u5757",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5206\u5305-\u63D0\u53D6\u516C\u5171\u6A21\u5757","aria-hidden":"true"},"#"),s(" \u5206\u5305 - \u63D0\u53D6\u516C\u5171\u6A21\u5757")],-1),N=t("<li><p>why:</p><ul><li>\u5206\u79BB\u4E1A\u52A1\u4EE3\u7801\u548C\u7B2C\u4E09\u65B9\u5E93\uFF08 vendor \uFF09</li><li>\u6309\u9700\u52A0\u8F7D\uFF08\u5229\u7528 import() \u8BED\u6CD5\uFF09</li></ul></li><li><p>4.x \u5185\u7F6E SplitChunks</p></li><li><p>chunks \u7C7B\u522B\uFF1Fasync</p></li><li><p>\u9ED8\u8BA4\u89C4\u5219</p></li><li><p>chunks: all, async, and initial \u6307\u5B9A\u54EA\u7C7B\u5305\u53EF\u4EE5\u4F18\u5316\uFF0Cinitial \u540C\u6B65\uFF0Call \u53EF\u7528\u4E8E\u540C\u6B65\u548C\u5F02\u6B65</p></li><li><p>\u89C2\u5BDF\u4E0B vendors hash \u662F\u5426\u53D8\u5316\uFF0C\u5E94\u8BE5\u4FDD\u6301\u4E0D\u53D8</p></li>",6),q=n("p",null,"\u6837\u5F0F\u5982\u4F55\u62C6\u5305 scss\uFF0C\u5B98\u65B9\u63D2\u4EF6\u4EC5\u628A css \u4ECE js \u4E2D\u63D0\u53D6\uFF0C\u591A\u9875\u5B58\u5728\u5197\u4F59",-1),L={href:"https://cli.vuejs.org/guide/css.html#automatic-imports",target:"_blank",rel:"noopener noreferrer"},z=s("Working with CSS | Vue CLI 3"),I=n("ul",null,[n("li",null,"\u6309\u4E0A\u9762\u94FE\u63A5\u5904\u7406\u4E0D\u884C\uFF0C\u6253\u6210\u4E86 scoped \u6837\u5F0F\uFF0C\u6587\u4EF6\u66F4\u5927\u4E86")],-1),O=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u62C6\u53D6\u89C4\u5219</span>
        <span class="token literal-property property">vendors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\\\/]node_modules[\\\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// node_modules \u4E0B\u5F15\u5165\u7684\u5305\u5F52\u7C7B\u4E3A vendors</span>
          <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span> <span class="token comment">// \u4F18\u5148\u7EA7</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4\u88AB\u5F15\u7528 2 \u6B21\u53CA\u4EE5\u4E0A\u65F6\u62C6\u5305</span>
          <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token literal-property property">reuseExistingChunk</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,1),J={href:"https://webpack.js.org/plugins/split-chunks-plugin/#optimization-splitchunks",target:"_blank",rel:"noopener noreferrer"},F=s("SplitChunksPlugin - \u9ED8\u8BA4\u8BBE\u7F6E"),U=n("h2",{id:"\u6784\u5EFA\u6027\u80FD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6784\u5EFA\u6027\u80FD","aria-hidden":"true"},"#"),s(" \u6784\u5EFA\u6027\u80FD")],-1),Z=n("p",null,"\u65B9\u6CD5\u8BBA\uFF1A",-1),H=n("ul",null,[n("li",null,"\u591A\u7EBF\u7A0B thread-loader \u8BF7\u4EC5\u5728\u8017\u65F6\u7684 loader \u4E0A\u4F7F\u7528"),n("li",null,"\u7F13\u5B58 \u6784\u5EFA"),n("li",null,"\u79FB\u9664\u65E0\u7528\u4EE3\u7801 tree-shaking \u79FB\u9664\u672A\u5F15\u7528\u4EE3\u7801\uFF0C\u4F9D\u8D56 ES6 \u6A21\u5757\u8BED\u6CD5"),n("li",null,"\u5E76\u884C\u538B\u7F29")],-1),M=s("loader\u3001plugin \u8017\u65F6\u5206\u6790 SpeedMeasurePlugin "),R={href:"https://juejin.cn/post/6844904084781154318",target:"_blank",rel:"noopener noreferrer"},T=s("\u63A2\u7D22webpack\u6784\u5EFA\u901F\u5EA6\u63D0\u5347\u65B9\u6CD5\u548C\u4F18\u5316\u7B56\u7565"),G=n("h3",{id:"noparse",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#noparse","aria-hidden":"true"},"#"),s(" noParse")],-1),K=n("ul",null,[n("li",null,[s("\u542B\u6709 p"),n("wbr"),s("rocess.env.NODE_ENV \u7684\u6587\u4EF6\u4E5F\u4E0D\u8981\u8BA9 webpack noParse\u3002")])],-1),Y={href:"https://samsaccone.com/posts/why-is-my-webpack-build-slow.html",target:"_blank",rel:"noopener noreferrer"},$=s("Why is my webpack build slow?"),Q=n("h2",{id:"webpack-cdn-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webpack-cdn-plugin","aria-hidden":"true"},"#"),s(" webpack-cdn-plugin")],-1),X={href:"https://www.jianshu.com/p/86602494dbb7",target:"_blank",rel:"noopener noreferrer"},nn=s("webpack \u6253\u5305\u4F18\u5316 - \u7B80\u4E66"),sn=n("p",null,"\u5F02\u6B65 import \u9ED8\u8BA4\u4F1A\u5355\u72EC\u6253\u5305",-1),en=n("h2",{id:"chunks-\u542B\u4E49\u662F\u4EC0\u4E48",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#chunks-\u542B\u4E49\u662F\u4EC0\u4E48","aria-hidden":"true"},"#"),s(" chunks \u542B\u4E49\u662F\u4EC0\u4E48")],-1),an={href:"https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkschunks",target:"_blank",rel:"noopener noreferrer"},tn=s("SplitChunksPlugin | webpack"),on={href:"https://stackoverflow.com/questions/52104217/vuejs-webpack-lazyload-modules-from-elementui",target:"_blank",rel:"noopener noreferrer"},pn=s("vue.js - VueJs + Webpack lazyload modules from ElementUI - Stack Overflow"),rn=n("h2",{id:"runtime",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#runtime","aria-hidden":"true"},"#"),s(" runtime")],-1),ln={href:"https://symfonycasts.com/screencast/webpack-encore/single-runtime-chunk",target:"_blank",rel:"noopener noreferrer"},cn=s("The Single Runtime Chunk > Webpack Encore: Frontend like a Pro! | SymfonyCasts"),un=n("h2",{id:"hash-\u7B56\u7565",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hash-\u7B56\u7565","aria-hidden":"true"},"#"),s(" hash \u7B56\u7565")],-1),dn={href:"https://jkfhto.github.io/2019-10-18/webpack/webpack-%E6%96%87%E4%BB%B6%E6%8C%87%E7%BA%B9%E7%AD%96%E7%95%A5%EF%BC%9Achunkhash%E3%80%81contenthash%E5%92%8Chash/",target:"_blank",rel:"noopener noreferrer"},hn=s("webpack-\u6587\u4EF6\u6307\u7EB9\u7B56\u7565\uFF1Achunkhash\u3001contenthash \u548C hash | \u4E2A\u4EBA\u535A\u5BA2"),bn=t(`<h2 id="\u5E94\u7528\u4EE3\u7801\u6CE8\u5165\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u4EE3\u7801\u6CE8\u5165\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u5E94\u7528\u4EE3\u7801\u6CE8\u5165\u73AF\u5883\u53D8\u91CF</h2><p>DefinePlugin</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u5E94\u7528\u4E2D\u9700\u8981\u7684p<wbr>rocess.env\u53D8\u91CF\uFF0C\u5728\u6B64\u6CE8\u5165\u624D\u80FD\u4F7F\u7528\u3002</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token constant">BUILD_ENV</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BUILD_ENV</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// \u7F16\u8BD1\u73AF\u5883\uFF08development/test/production\uFF09</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,3),kn=s("import \u5927\u5C0F\u5199 path \u4E0D\u4E00\u81F4\u8B66\u544A "),_n={href:"https://stackoverflow.com/questions/47534267/webpack-there-are-multiple-modules-with-names-that-only-differ-in-casing-but",target:"_blank",rel:"noopener noreferrer"},mn=s('Webpack: "there are multiple modules with names that only differ in casing" but modules referenced are identical - Stack Overflow'),gn={href:"https://www.npmjs.com/package/case-sensitive-paths-webpack-plugin",target:"_blank",rel:"noopener noreferrer"},fn=s("case-sensitive-paths-webpack-plugin - npm"),wn=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import PureStyleLib from &#39;@/paper/components/Content/panel/StyleLib/PureStyleLib&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u539F\u56E0\u662F path \u4E2D\u7684 Content \u5199\u9519\u5927\u5C0F\u5199\u3002\u9700\u8981\u68C0\u67E5\u6574\u4E2A\u8DEF\u5F84</p><h2 id="\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6" aria-hidden="true">#</a> \u63D2\u4EF6</h2><p>cache-loader \u8BFB\u5199\u78C1\u76D8\u5F00\u9500\u3001\u526F\u4F5C\u7528\uFF0C\u4ED3\u5E93\u5DF2\u5E9F\u5F03\u3001\u5EFA\u8BAE\u5347 v5\uFF0C\u9ED8\u8BA4\u5F00\u542F</p><p>\u5C3D\u91CF\u7528 include \u663E\u793A\u6307\u5B9A\uFF0C\u6309\u9700\u6DFB\u52A0</p>`,5),vn={href:"https://github.com/HolyZheng/holyZheng-blog/issues/48",target:"_blank",rel:"noopener noreferrer"},yn=s("webpack5\u65B0\u7279\u6027\u4E00\u89C8 \xB7 Issue #48 \xB7 HolyZheng/holyZheng-blog"),xn=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  test: /\\.less$/,
  use: [
    &#39;style-loader&#39;,
    &#39;css-loader&#39;,
    &#39;less-loader&#39;
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>use \u4E0B\u9762\u7684\u5148\u6267\u884C\uFF0C\u4F7F\u7528\u4E86 compose</p><h2 id="node-\u8FDB\u7A0B-cpu-\u6301\u7EED\u8F83\u9AD8" tabindex="-1"><a class="header-anchor" href="#node-\u8FDB\u7A0B-cpu-\u6301\u7EED\u8F83\u9AD8" aria-hidden="true">#</a> node \u8FDB\u7A0B CPU \u6301\u7EED\u8F83\u9AD8</h2>`,3),jn=s("watchOptions: { poll: 5000, ignored: ['node_modules'] } "),Sn={href:"https://www.typescriptlang.org/docs/handbook/configuring-watch.html",target:"_blank",rel:"noopener noreferrer"},En=s("TypeScript: Documentation - Configuring Watch"),Cn={href:"https://stackoverflow.com/questions/62422627/error-unknown-type-name-uint64-t-on-macos-while-installing-libraries",target:"_blank",rel:"noopener noreferrer"},Bn=s("xcode - error: unknown type name 'uint64_t' on MacOS while installing libraries - Stack Overflow"),Pn=n("p",null,"\u539F\u56E0\uFF1Afsevents \u672C\u5730\u7F16\u8BD1\u5931\u8D25\uFF0C\u53EF\u80FD\u662F\u5347\u7EA7\u8FC7\u7CFB\u7EDF\uFF0C\u7F16\u8BD1\u4F9D\u8D56\u7684\u67D0\u4E9B\u5E93\u662F\u65E7\u7684\u3002\u8868\u73B0\u5F88\u660E\u663E\uFF0C\u4F46\u88AB\u5FFD\u7565\u4E86\uFF0C\u56E0\u4E3A webpack/ts-loader \u4F1A\u56DE\u9000\u7528\u8F6E\u8BE2\u65B9\u5F0F watch files",-1),Wn=n("h2",{id:"\u6309\u9700\u52A0\u8F7D",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6309\u9700\u52A0\u8F7D","aria-hidden":"true"},"#"),s(" \u6309\u9700\u52A0\u8F7D")],-1),An=n("p",null,[n("code",null,"import { xx } from yy"),s(" \u8FD9\u4E48\u5199\uFF0C\u7406\u8BBA\u4E0A\u4F1A\u5168\u5C40\u5F15\u5165 yy")],-1),Dn=n("p",null,"tree-shaking \u4F9D\u8D56 ES6 \u5BFC\u5165\u5BFC\u51FA\u4EE5\u7CBE\u786E\u5206\u6790\uFF0C\u4F46\u6709\u4E9B\u8001\u5E93\u662F ES5 \u5199\u7684",-1),Vn=n("p",null,"\u7528 babel \u8F6C\u6362\u63D2\u4EF6\uFF0C\u5199\u6CD5\u4E0D\u53D8\uFF0C\u63D2\u4EF6\u8FDB\u884C\u66FF\u6362",-1),Nn=n("p",null,"lodash \u652F\u6301\u6309\u65B9\u6CD5\u624B\u52A8\u6309\u9700\u5F15\u5165\uFF0C\u4F46\u5BFC\u5165\u6BD4\u8F83\u591A\u65F6\uFF0C\u8981\u5199\u5F88\u591A\u884C\uFF0C\u7E41\u7410",-1),qn=n("p",null,"antd \u9ED8\u8BA4\u5BF9 JS \u90E8\u5206\uFF0C\u7528 babel plugin \u8F6C\u6362\u6210\u6309\u9700\u5F15\u5165\u5199\u6CD5\u3002\u5982\u679C\u5168\u5C40\u5F15\u5165\uFF0C\u4F1A\u5728\u63A7\u5236\u53F0\u7ED9\u51FA\u8B66\u544A\u3002",-1),Ln={href:"https://3x.ant.design/docs/react/getting-started-cn#%25E6%258C%2589%25E9%259C%2580%25E5%258A%25A0%25E8%25BD%25BD",target:"_blank",rel:"noopener noreferrer"},zn=s("\u5FEB\u901F\u4E0A\u624B - Ant Design");function In(On,Jn){const e=p("ExternalLinkIcon");return r(),l(c,null,[u,n("p",null,[n("a",d,[h,a(e)])]),b,k,_,m,n("p",null,[n("a",g,[f,a(e)]),n("a",w,[v,a(e)]),n("a",y,[x,a(e)]),n("a",j,[S,a(e)])]),E,n("p",null,[C,n("a",B,[P,a(e)])]),W,n("p",null,[n("a",A,[D,a(e)])]),V,n("ul",null,[N,n("li",null,[q,n("p",null,[n("a",L,[z,a(e)])]),I])]),O,n("p",null,[n("a",J,[F,a(e)])]),U,Z,H,n("p",null,[M,n("a",R,[T,a(e)])]),G,K,n("p",null,[n("a",Y,[$,a(e)])]),Q,n("p",null,[n("a",X,[nn,a(e)])]),sn,en,n("p",null,[n("a",an,[tn,a(e)]),n("a",on,[pn,a(e)])]),rn,n("p",null,[n("a",ln,[cn,a(e)])]),un,n("p",null,[n("a",dn,[hn,a(e)])]),bn,n("p",null,[kn,n("a",_n,[mn,a(e)]),n("a",gn,[fn,a(e)])]),wn,n("p",null,[n("a",vn,[yn,a(e)])]),xn,n("p",null,[jn,n("a",Sn,[En,a(e)])]),n("p",null,[n("a",Cn,[Bn,a(e)])]),Pn,Wn,An,Dn,Vn,Nn,qn,n("p",null,[n("a",Ln,[zn,a(e)])])],64)}var Un=o(i,[["render",In],["__file","webpack.html.vue"]]);export{Un as default};
