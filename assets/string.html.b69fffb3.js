import{r as n,o as s,c as a,a as p,w as t,F as e,b as c,d as o}from"./app.31fc93bc.js";const l={},u=p("h1",{id:"字符串",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#字符串","aria-hidden":"true"},"#"),c(" 字符串")],-1),r={class:"table-of-contents"},i=c("判断字符串是否以给定字符开头"),k=c("实现 repeat"),b=c("转为数组"),m=c("replace"),d=o('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> stringValue <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">;</span>\nstringValue<span class="token punctuation">.</span>length <span class="token comment">//  &quot;11&quot;</span>\nstringValue<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//  &quot;e&quot; 字符</span>\nstringValue<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//  &quot;101&quot; 字符编码</span>\nstringValue<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token number">101</span><span class="token punctuation">)</span> <span class="token comment">//  &quot;e&quot; 上个方法的逆向</span>\nstringValue<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">//  &quot;e&quot;</span>\n\n<span class="token comment">// concat()用于拼接字符串，可接多个参数，但在实践中使用加号操作符（+）更方便</span>\nstringValue<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&quot; get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;it!&quot;</span><span class="token punctuation">)</span>   \n\n<span class="token comment">// 把字符串编码为base64</span>\nwindow<span class="token punctuation">.</span><span class="token function">btoa</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;YWJj&#39;  </span>\n\n<span class="token comment">// 汉字需要先进行 UTF-8 编码</span>\n<span class="token function">btoa</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0xe6</span><span class="token punctuation">,</span> <span class="token number">0x88</span><span class="token punctuation">,</span> <span class="token number">0x91</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  \n  <span class="token keyword">return</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// &quot;5oiR&quot; 我</span>\n<span class="token comment">// 在浏览器中打开 data:text/html;charset=utf-8;base64,5oiR</span>\n\n<span class="token keyword">function</span> <span class="token function">base64</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  \n  <span class="token keyword">return</span> <span class="token function">btoa</span><span class="token punctuation">(</span><span class="token function">encodeURI</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">%([0-9A-F]{2})</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span>\n  <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 字符串匹配替换</span>\n<span class="token comment">// 以 jpe?g 等结尾的 url</span>\n<span class="token keyword">let</span> url <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(.*?).(jpe?g|png|webp)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>\n<span class="token comment">// 提取后缀</span>\n<span class="token keyword">let</span> last <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.(jpe?g|png|webp)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>\n<span class="token comment">// 替换添加一些字符</span>\n<span class="token keyword">let</span> newUrl <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>last<span class="token punctuation">,</span> i <span class="token operator">+</span> last<span class="token punctuation">)</span>\n\n<span class="token comment">// 用反斜杠转义引号</span>\n<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;\\&#39;Mike\\&#39;&#39;</span> <span class="token comment">// &quot;&#39;Mike&#39;&quot;</span>\n\n<span class="token comment">// 内部用单引号，外部用双引号</span>\n\n<span class="token comment">// parseInt(str, radix) 不仅仅取整，会把第一个非数字及往后部分去掉</span>\n<span class="token comment">// 传入值不是字符串会转换，第二参数是基数（进制，总是明确用10，浏览器实现不一致,0开头可能被当作8进制）, 返回数字</span>\n<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;1-2&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>\n<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;1rem&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h2 id="判断字符串是否以给定字符开头" tabindex="-1"><a class="header-anchor" href="#判断字符串是否以给定字符开头" aria-hidden="true">#</a> 判断字符串是否以给定字符开头</h2><p>用<code>indexOf</code>方法判断，返回为 0，则是在开头， 如</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;github&#39;</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;git&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token comment">// true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>有了ES6，可以这样</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;github&#39;</span><span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;git&#39;</span><span class="token punctuation">)</span>\n<span class="token string">&#39;github&#39;</span><span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;hub&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment">// 可以指定位置</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="实现-repeat" tabindex="-1"><a class="header-anchor" href="#实现-repeat" aria-hidden="true">#</a> 实现 repeat</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 实现一，</span>\n<span class="token comment">// 空 + 字符串，这里字符串作为了拼接符</span>\n<span class="token comment">// n 个拼接符，需要 n + 1 个空</span>\n<span class="token class-name">String</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">repeatString1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ni&#39;</span><span class="token punctuation">.</span><span class="token function">repeatString1</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 实现二 fill 不传位置参数，填充全部</span>\n<span class="token class-name">String</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">repeatString2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ni&#39;</span><span class="token punctuation">.</span><span class="token function">repeatString2</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="转为数组" tabindex="-1"><a class="header-anchor" href="#转为数组" aria-hidden="true">#</a> 转为数组</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> string <span class="token operator">=</span> <span class="token string">&#39;word&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Option 1</span>\nstring<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Option 2</span>\n<span class="token punctuation">[</span><span class="token operator">...</span>string<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Option 3</span>\nArray<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Option 4</span>\nObject<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Result:</span>\n<span class="token comment">// [&#39;w&#39;, &#39;o&#39;, &#39;r&#39;, &#39;d&#39;]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="replace" tabindex="-1"><a class="header-anchor" href="#replace" aria-hidden="true">#</a> replace</h2>',11),g=p("code",null,"$1",-1),f=c(" 仅第二参数为字符串时可用 "),h={href:"https://www.jianshu.com/p/724e85c0941f",target:"_blank",rel:"noopener noreferrer"},x=c("js-replace的高阶用法,你知道吗 - 简书");l.render=function(c,o){const l=n("RouterLink"),v=n("OutboundLink");return s(),a(e,null,[u,p("nav",r,[p("ul",null,[p("li",null,[p(l,{to:"#判断字符串是否以给定字符开头"},{default:t((()=>[i])),_:1})]),p("li",null,[p(l,{to:"#实现-repeat"},{default:t((()=>[k])),_:1})]),p("li",null,[p(l,{to:"#转为数组"},{default:t((()=>[b])),_:1})]),p("li",null,[p(l,{to:"#replace"},{default:t((()=>[m])),_:1})])])]),d,p("ul",null,[p("li",null,[g,f,p("a",h,[x,p(v)])])])],64)};export default l;
