import{_ as a,r as p,o as t,c as e,a as n,b as o,F as c,e as u,d as l}from"./app.4239eb90.js";const i={},r=u(`<h1 id="lazyman" tabindex="-1"><a class="header-anchor" href="#lazyman" aria-hidden="true">#</a> lazyman</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
  <span class="token comment">// quene next chain</span>

  <span class="token keyword">function</span> <span class="token function">LazyMan</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> quene <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> _lazyman <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> fn <span class="token operator">=</span> quene<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        quene<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hi! This is &#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">eat</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        quene<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Eat &#39;</span> <span class="token operator">+</span> arg<span class="token punctuation">)</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token parameter">wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        quene<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;wake up after &#39;</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> wait <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">sleepFirst</span><span class="token punctuation">(</span><span class="token parameter">wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        quene<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;wake up after &#39;</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> wait <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      
    <span class="token punctuation">}</span>

    _lazyman<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u4E0D\u4E00\u5B9A\u5148\u6267\u884C\uFF0C\u5148\u653E\u5230\u961F\u5217</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      _lazyman<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> _lazyman
  <span class="token punctuation">}</span>

  <span class="token comment">// test</span>
  <span class="token comment">// LazyMan(&quot;kakao&quot;)</span>
  <span class="token comment">// LazyMan(&quot;kakao&quot;).eat(&quot;apple&quot;).eat(&quot;banana&quot;)</span>
  <span class="token comment">// LazyMan(&quot;kakao&quot;).sleep(3).eat(&quot;apple&quot;)</span>
  <span class="token comment">// LazyMan(&quot;kakao&quot;).sleepFirst(3).eat(&quot;apple&quot;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div>`,2),k={href:"https://juejin.cn/post/6844903577756893191",target:"_blank",rel:"noopener noreferrer"},b=l("\u524D\u7AEF\u9762\u8BD5\u4E2D\u7684LazyMan");function m(f,d){const s=p("ExternalLinkIcon");return t(),e(c,null,[r,n("p",null,[n("a",k,[b,o(s)])])],64)}var h=a(i,[["render",m],["__file","lazy-man.html.vue"]]);export{h as default};
