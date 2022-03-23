import{r as n,o as s,c as a,a as e,F as p,d as t,b as r}from"./app.31fc93bc.js";const o={},l=t('<h2 id="webpack-引入" tabindex="-1"><a class="header-anchor" href="#webpack-引入" aria-hidden="true">#</a> webpack 引入</h2><p>配置示范</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n\t<span class="token string">&quot;minify&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t<span class="token string">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t<span class="token string">&quot;setClasses&quot;</span>\n\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t<span class="token string">&quot;feature-detects&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t<span class="token string">&quot;img/webp-alpha&quot;</span>\n\t<span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 使用，注意特性名称的变化</span>\n<span class="token keyword">import</span> Modernizr <span class="token keyword">from</span> <span class="token string">&#39;modernizr&#39;</span>\nModernizr<span class="token punctuation">.</span>webpalpha\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',3),c={href:"https://github.com/peerigon/modernizr-loader",target:"_blank",rel:"noopener noreferrer"},i=r("GitHub - peerigon/modernizr-loader: Get your modernizr build bundled with webpack");o.render=function(t,r){const o=n("OutboundLink");return s(),a(p,null,[l,e("p",null,[e("a",c,[i,e(o)])])],64)};export default o;
