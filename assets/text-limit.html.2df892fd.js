import{r as n,o as s,c as a,a as e,F as p,d as t,b as o}from"./app.31fc93bc.js";const l={},c=t('<h1 id="文本输入限制" tabindex="-1"><a class="header-anchor" href="#文本输入限制" aria-hidden="true">#</a> 文本输入限制</h1><h2 id="div-edit-content" tabindex="-1"><a class="header-anchor" href="#div-edit-content" aria-hidden="true">#</a> div edit content</h2><p>思路：</p><ul><li>onkeydown</li></ul><p>存在问题：</p><ul><li>中英文字符计算</li><li>按键检测，输入法上屏事件，复制、粘贴，空格</li><li>重置 innerHTML，光标会跑到开头</li></ul><p>TODO 建 demo 测试</p>',7),r={href:"http://objcer.com/2017/10/10/implement-a-word-limit-input-box/",target:"_blank",rel:"noopener noreferrer"},u=o("实现一个字数限制的输入框 | Deng's Blog"),i=e("pre",null,[e("code",null,"    this.blur()\n")],-1),k=e("p",null,"剪切板",-1),b={href:"https://github.com/pkumar98/react-text-content-editable/blob/master/src/Editable.jsx#L52",target:"_blank",rel:"noopener noreferrer"},d=o("react-text-content-editable/Editable.jsx at master · pkumar98/react-text-content-editable"),m=t('<p>可以考虑，fork 加上中文计算</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 兼容中文和表情，原理是取 unicode</span>\n<span class="token keyword">function</span> <span class="token function">getByteLen</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> code <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> code <span class="token operator">&lt;=</span> <span class="token number">128</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      len <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      len <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> len<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',2);l.render=function(t,o){const l=n("OutboundLink");return s(),a(p,null,[c,e("p",null,[e("a",r,[u,e(l)])]),i,k,e("p",null,[e("a",b,[d,e(l)])]),m],64)};export default l;
