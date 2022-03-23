import{d as n}from"./app.31fc93bc.js";const s={},a=n('<h1 id="输入数字-找对应字母" tabindex="-1"><a class="header-anchor" href="#输入数字-找对应字母" aria-hidden="true">#</a> 输入数字，找对应字母</h1><p>如: 1 a 2 b 26 z 27 aa</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token comment">// 每 26 进一位，为 a</span>\n  <span class="token keyword">function</span> <span class="token function">mapNumToLetters</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>\n    <span class="token keyword">let</span> remainder <span class="token operator">=</span> num <span class="token operator">%</span> <span class="token number">26</span>\n    <span class="token keyword">let</span> shang <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>num <span class="token operator">/</span> <span class="token number">26</span><span class="token punctuation">)</span> <span class="token comment">// 商或位数</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>remainder <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      remainder <span class="token operator">=</span> <span class="token number">26</span>\n      shang <span class="token operator">-=</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">while</span><span class="token punctuation">(</span>shang <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      str <span class="token operator">+=</span> <span class="token string">&#39;a&#39;</span>\n      shang <span class="token operator">-=</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span>\n    str <span class="token operator">+=</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>remainder <span class="token operator">+</span> <span class="token number">96</span><span class="token punctuation">)</span> <span class="token comment">// unicode 查找</span>\n\n    <span class="token keyword">return</span> str\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>',3);s.render=function(n,s){return a};export default s;
