import{r as n,o as s,c as a,a as p,F as e,d as t,b as c}from"./app.31fc93bc.js";const o={},l=t('<h1 id="观察者" tabindex="-1"><a class="header-anchor" href="#观察者" aria-hidden="true">#</a> 观察者</h1><p>两个角色：</p><ol><li>目标（被观察者）</li></ol><ul><li>维护观察者列表（收集依赖？）</li><li>添加观察者</li><li>通知观察者更新</li></ul><ol start="2"><li>观察者</li></ol><ul><li>允许传入业务回调</li><li>提供 update 方法供目标调用</li><li>update 内执行业务回调</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token comment">//   const observerCallback = function() {</span>\n  <span class="token comment">//     console.log(&#39;我被通知了&#39;)</span>\n  <span class="token comment">//   }</span>\n  <span class="token comment">//   const observer = new Observer(observerCallback)</span>\n\n  <span class="token comment">//   const subject = new Subject();</span>\n  <span class="token comment">//   subject.addObserver(observer);</span>\n  <span class="token comment">//   subject.notify();</span>\n\n  <span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>cb <span class="token operator">=</span> cb\n    <span class="token punctuation">}</span>\n\n    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">class</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token parameter">observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">ob</span><span class="token operator">=&gt;</span>ob<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">observerCallback</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我被通知了&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span>observerCallback<span class="token punctuation">)</span>\n\n  <span class="token keyword">const</span> subject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  subject<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  subject<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>',7),u=c("扩展：Vue 中 Dep 为主，Watcher 为从 "),r={href:"https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/34#issuecomment-519823665",target:"_blank",rel:"noopener noreferrer"},i=c("第 29 题：聊聊 Vue 的双向数据绑定，Model 如何改变 View，View 又是如何改变 Model 的 · Issue #34 · Advanced-Frontend/Daily-Interview-Question"),k={href:"http://caibaojian.com/vue-design/art/8vue-reactive-dep-watch.html",target:"_blank",rel:"noopener noreferrer"},b=c("渲染函数的观察者与进阶的数据响应系统 - Vue技术内幕");o.render=function(t,c){const o=n("OutboundLink");return s(),a(e,null,[l,p("p",null,[u,p("a",r,[i,p(o)]),p("a",k,[b,p(o)])])],64)};export default o;
