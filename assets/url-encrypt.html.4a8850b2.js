import{r as n,o as s,c as a,a as p,F as t,b as e,d as o}from"./app.31fc93bc.js";const c={},l=p("h1",{id:"地址加密",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#地址加密","aria-hidden":"true"},"#"),e(" 地址加密")],-1),u=e("全局参数 base64 转码 优点：实现简单，不引入库 缺点：增加任意参数会导致 base64 转换失败，兼容性差，比如微信分享场景 示例： "),r={href:"https://gist.github.com/cyio/4cf87e46fafce79535771b5ff4741887",target:"_blank",rel:"noopener noreferrer"},i=e("url-parameters-encrypt.diff"),k=o('<p>应该只给 value 转码</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">encryptUrlParam</span><span class="token punctuation">(</span><span class="token parameter">paramNames<span class="token punctuation">,</span> url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> newUrl <span class="token operator">=</span> url\n  paramNames<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">paramName</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> oldValue <span class="token operator">=</span> <span class="token function">getUrlParameterByName</span><span class="token punctuation">(</span>paramName<span class="token punctuation">,</span> newUrl<span class="token punctuation">)</span>\n    newUrl <span class="token operator">=</span> <span class="token function">replaceUrlParam</span><span class="token punctuation">(</span>paramName<span class="token punctuation">,</span> <span class="token function">btoa</span><span class="token punctuation">(</span>oldValue<span class="token punctuation">)</span><span class="token punctuation">,</span> newUrl<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token keyword">return</span> newUrl\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">decryptUrlParam</span><span class="token punctuation">(</span><span class="token parameter">paramNames<span class="token punctuation">,</span> url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> newUrl <span class="token operator">=</span> url\n  paramNames<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">paramName</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> oldValue <span class="token operator">=</span> <span class="token function">getUrlParameterByName</span><span class="token punctuation">(</span>paramName<span class="token punctuation">,</span> newUrl<span class="token punctuation">)</span>\n    newUrl <span class="token operator">=</span> <span class="token function">replaceUrlParam</span><span class="token punctuation">(</span>paramName<span class="token punctuation">,</span> <span class="token function">atob</span><span class="token punctuation">(</span>oldValue<span class="token punctuation">)</span><span class="token punctuation">,</span> newUrl<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token keyword">return</span> newUrl\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">encryptUrlParam</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;eid&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;/url-sample?id=3&amp;eid=4&amp;from=singlemessage&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token function">decryptUrlParam</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;eid&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">,</span> result2<span class="token punctuation">)</span>\n<span class="token comment">// /url-sample?id=Mw==&amp;eid=NA==&amp;from=singlemessage</span>\n<span class="token comment">// /url-sample?id=3&amp;eid=4&amp;from=singlemessage</span>\n\n<span class="token keyword">function</span> <span class="token function">btoa</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">&#39;base64&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">atob</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">&#39;base64&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>',2);c.render=function(e,o){const c=n("OutboundLink");return s(),a(t,null,[l,p("ol",null,[p("li",null,[u,p("a",r,[i,p(c)])])]),k],64)};export default c;
