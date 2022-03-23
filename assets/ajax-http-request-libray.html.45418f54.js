import{r as n,o as s,c as a,a as p,F as e,d as t,b as o}from"./app.31fc93bc.js";const c={},l=t('<h1 id="ajax-http-请求库、工具" tabindex="-1"><a class="header-anchor" href="#ajax-http-请求库、工具" aria-hidden="true">#</a> ajax/http 请求库、工具</h1><h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h2><p>不支持设置 user agent 浏览器不允许，nodejs 应该可以，但 axios 就是不行 https://github.com/axios/axios/issues/1411 https://github.com/axios/axios/issues/1231</p><p>计划改用 superagent，理由：</p><blockquote><p>之前测试过市面上几乎所有的 request 类型的库，也为 request 库提过一个解决内存泄露的 PR 已经合并。开始以为 axios 很好用，后来发现里面坑很多，记得当时 form-data 只能以 json 形式提交，很多国内的站不支持。后来换成了 superagent，出自 node 界传奇人物 TJ 手笔（现已叛变到 Go 阵营）， 各种问题全部能够通过配置或者使用插件解决，有很多插件上手即用，非常方便，原生支持 promise，兼容前后端，也比 axios 轻量且插件机制非常灵活，比 got 之流直观方便，功能强悍。request 就不多说了，臃肿强大略微麻烦。推荐楼主使用 superagent。或者想要简单点的直接用 isomorphic-fetch 也行。 还可以支持测试环境，直接用 supertest 测试，也是原生 promise，还是很舒服的，自此再也不用 axios 之流了。而且发现 request，axios 这类能做的 superagent 都能做，最后写出的代码是最简单直观的</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">HTTP</span> <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  baseURL<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://jsonplaceholder.typicode.com/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  headers<span class="token operator">:</span> <span class="token punctuation">{</span>\n    Authorization<span class="token operator">:</span> <span class="token string">&#39;Bearer {token}&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// use</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">HTTP</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./http-common&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',6),r=o("请求图片 直接在浏览器打开会提示下载，估计是要返回创建新的 stream "),u={href:"https://stackoverflow.com/questions/41846669/download-an-image-using-axios-and-convert-it-to-base64",target:"_blank",rel:"noopener noreferrer"},i=o("javascript - Download an image using Axios and convert it to base64 - Stack Overflow"),k=t('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ctx.body = request(options)</span>\nctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>\n  url<span class="token operator">:</span> imgUrl<span class="token punctuation">,</span>\n  headers<span class="token operator">:</span> <span class="token punctuation">{</span>\n    Referer<span class="token operator">:</span> referrer\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  responseType<span class="token operator">:</span> <span class="token string">&#39;stream&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> response<span class="token punctuation">.</span>data\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>referrer 作用是识别页面，可以理解不包括 hash。如果需要 hash，可以手动在 headers 中添加 <code>window.location.href</code></p><h2 id="superagent" tabindex="-1"><a class="header-anchor" href="#superagent" aria-hidden="true">#</a> superagent</h2>',3),b={href:"https://github.com/zhaoqize/blog/issues/13",target:"_blank",rel:"noopener noreferrer"},m=o("[翻译] SuperAgent 中文使用指南(v3.8.0) · Issue #13 · zhaoqize/blog"),d=t('<ul><li>支持旧的回调方式，用 end</li><li>支持 retry</li></ul><p>与 axios 写法对比</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// axios</span>\n<span class="token keyword">let</span> data <span class="token operator">=</span> res<span class="token punctuation">.</span>data\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">,</span> e<span class="token punctuation">.</span>response<span class="token punctuation">.</span>config<span class="token punctuation">)</span>\n\n<span class="token comment">// superagent</span>\n<span class="token keyword">let</span> data <span class="token operator">=</span> res<span class="token punctuation">.</span>body\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token punctuation">[</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  superagent<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  superagent<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Promise 化</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>return new Promise((resolve, reject) =&gt; {\n  superagent\n    .post(params.url)\n    .auth(params.auth.username, params.auth.password)\n    .send(params.payload)\n    .set(&#39;Accept&#39;, &#39;application/json&#39;)\n    .end((error, res) =&gt; {\n        error ? reject(error) : resolve(res);\n    });\n});\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>批量 Promise 化</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&#39;superagent&#39;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">withPromiseCallback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">{</span> error <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token function">resolve</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>body<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">fetchSuggestions</span> <span class="token operator">=</span> <span class="token parameter">search</span> <span class="token operator">=&gt;</span>\n  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n    request\n      <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/auth/get-companies/0/50&#39;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">&#39;form&#39;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Accept&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        search\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token function">withPromiseCallback</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">fetchInitialInformation</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n    request\n      <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/auth/check&#39;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Accept&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token function">withPromiseCallback</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="测试工具" tabindex="-1"><a class="header-anchor" href="#测试工具" aria-hidden="true">#</a> 测试工具</h2>',8),g=p("li",null,"postman 不支持设置 socks5 代理",-1),h=o("在线测试 "),f={href:"https://www.hurl.it/",target:"_blank",rel:"noopener noreferrer"},v=o("Hurl.it - Make HTTP requests"),w=p("h3",{id:"替代品",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#替代品","aria-hidden":"true"},"#"),o(" 替代品")],-1),x=o("insomnia: 基于 Electron "),y={href:"https://github.com/Kong/insomnia",target:"_blank",rel:"noopener noreferrer"},j=o("Kong/insomnia: Cross-platform HTTP and GraphQL Client"),P=o("Postwoman 支持 PWA "),q={href:"https://postwoman.io/",target:"_blank",rel:"noopener noreferrer"},T=o("Postwoman • A free, fast and beautiful API request builder"),A=p("h2",{id:"服务器工具",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#服务器工具","aria-hidden":"true"},"#"),o(" 服务器工具")],-1),z=p("p",null,"自动刷新功能要针对一个目录才行，因此练手项目避免采用文件夹并行，而是使用分支",-1),C=p("p",null,"http-server 简单，支持文件夹浏览，当然也就没自动刷新了 liteserver 基于 browser-sync",-1);c.render=function(t,o){const c=n("OutboundLink");return s(),a(e,null,[l,p("ul",null,[p("li",null,[r,p("a",u,[i,p(c)])])]),k,p("p",null,[p("a",b,[m,p(c)])]),d,p("ul",null,[g,p("li",null,[h,p("a",f,[v,p(c)])])]),w,p("p",null,[x,p("a",y,[j,p(c)])]),p("p",null,[P,p("a",q,[T,p(c)])]),A,z,C],64)};export default c;
