import{_ as n,e as s}from"./app.818741d3.js";const a={},p=s(`<h1 id="bind" tabindex="-1"><a class="header-anchor" href="#bind" aria-hidden="true">#</a> bind</h1><p>bind \u662F\u540E\u52A0\u7684\uFF0C\u53EF\u7528\u4EE5\u524D\u6709\u7684\u7279\u6027 apply \u6765\u5B9E\u73B0</p><p>\u8003\u8651\u53C2\u6570\u83B7\u53D6\u4E0E\u5408\u5E76</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token comment">// fn.bind(this, 1, 2)</span>
  <span class="token comment">// new fn</span>
  <span class="token comment">// arg concat</span>
  <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">oThis</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// type</span>
    <span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">const</span> oArgs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>oThis<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>oArgs<span class="token punctuation">,</span> <span class="token operator">...</span>arguments<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ES6 - Better</span>
  <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind1</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">const</span> oThis <span class="token operator">=</span> <span class="token function">args</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> oArgs <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>oThis<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>oArgs<span class="token punctuation">,</span> <span class="token operator">...</span>arguments<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;john&#39;</span><span class="token punctuation">,</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token parameter">words<span class="token punctuation">,</span> words2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hi </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>words<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>words2<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> sayMyBind <span class="token operator">=</span> user<span class="token punctuation">.</span>say<span class="token punctuation">.</span><span class="token function">myBind</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token string">&#39;morning&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> sayBind <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token string">&#39;morning&#39;</span><span class="token punctuation">)</span>

  <span class="token function">sayMyBind</span><span class="token punctuation">(</span><span class="token string">&#39;after&#39;</span><span class="token punctuation">)</span>
  <span class="token function">sayBind</span><span class="token punctuation">(</span><span class="token string">&#39;after&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u8003\u8651 \u6784\u9020\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//  Yes, it does work with \`new (funcA.bind(thisArg, args))\`</span>
<span class="token comment">// Credit to Douglas Crockford for this bind method</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>bind<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5982\u679C\u4E0D\u5B58\u5728 bind \u65B9\u6CD5</span>
  <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">oThis</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// bind \u65B9\u6CD5\u7684\u8C03\u7528\u5BF9\u8C61\u53EA\u80FD\u662F\u51FD\u6570\uFF0C\u5982\u679C\u4E0D\u662F\u5219\u629B\u51FA\u5F02\u5E38</span>
      <span class="token comment">// closest thing possible to the ECMAScript 5 internal IsCallable function\u200B</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span>
        <span class="token string">&#39;Function.prototype.bind - what is trying to be bound is not callable&#39;</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> aArgs <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u6D45\u590D\u5236 bind \u7684\u53C2\u6570\uFF0C\u4ECE\u7B2C 2 \u4E2A\u5F00\u59CB\u5230\u7ED3\u675F http://stackoverflow.com/a/26618338/5657916</span>
      fToBind <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">,</span>
      <span class="token function-variable function">fNOP</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// no operation \u65E0\u64CD\u4F5C\u51FD\u6570</span>
      <span class="token function-variable function">fBound</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8981\u8FD4\u56DE\u7684\u51FD\u6570\uFF0C\u7528 apply \u65B9\u6CD5\u7ED1\u5B9A this</span>
        <span class="token keyword">return</span> <span class="token function">fToBind</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>
          <span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">fNOP</span> <span class="token operator">&amp;&amp;</span> oThis <span class="token comment">// \u5F85\u8FD4\u56DE\u51FD\u6570\u4E0E\u6784\u9020\u51FD\u6570\u539F\u578B\u662F\u5426\u4E00\u81F4\uFF0CoThis \u53C2\u6570\u662F\u5426\u5B58\u5728</span>
            <span class="token operator">?</span> <span class="token keyword">this</span> <span class="token comment">// \u76F4\u63A5\u4F7F\u7528 bind \u7684\u8C03\u7528\u5BF9\u8C61</span>
            <span class="token operator">:</span> oThis<span class="token punctuation">,</span> <span class="token comment">// \u4F7F\u7528\u6307\u5B9A this</span>
          aArgs<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token comment">// \u5408\u5E76\u4E24\u4E2A\u65B9\u6CD5\u7684\u53C2\u6570</span>
      <span class="token punctuation">}</span> <span class="token comment">// var end</span>

    fNOP<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>prototype
    fBound<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fNOP</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> fBound
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,6);function t(o,e){return p}var l=n(a,[["render",t],["__file","bind.html.vue"]]);export{l as default};
