import{d as n}from"./app.31fc93bc.js";const s={},a=n('<h1 id="promise-all" tabindex="-1"><a class="header-anchor" href="#promise-all" aria-hidden="true">#</a> promise.all</h1><ol><li>输入可迭代数组，返回有序 resolved values</li><li>全部并发完成 resolve</li><li>第一个错误发生时，reject</li></ol><p>注意点：</p><ul><li>输入出仅要求可遍历，不一定是异步 Promise，所以需要包起来</li><li>不能用 push 方式，values 要求能按原顺序取出</li></ul><p>核心：累计 resolve count，达到 all count 时 resolve</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Promise.myAll</span>\n<span class="token keyword">function</span> <span class="token function">myAll</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> values <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token keyword">let</span> resolveCount <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 并发请求填充 values，不能用 length，只能单独 count</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          resolveCount <span class="token operator">+=</span> <span class="token number">1</span>\n          values<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> value\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>resolveCount <span class="token operator">===</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">resolve</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> reject<span class="token punctuation">)</span>\n        <span class="token comment">// .catch(e =&gt; reject(e))</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// test</span>\n<span class="token keyword">const</span> <span class="token function-variable function">sleep</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ms <span class="token operator">=</span> <span class="token number">1000</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> ms<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token function">myAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">values</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;done: &#39;</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token function">myAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>',6);s.render=function(n,s){return a};export default s;
