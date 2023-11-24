import{_ as n,e as s}from"./app.ade76af1.js";const a={},p=s(`<h1 id="once" tabindex="-1"><a class="header-anchor" href="#once" aria-hidden="true">#</a> once</h1><p>\u591A\u6B21\u8C03\u7528\uFF0C\u6267\u884C\u4E00\u6B21</p><p>\u5229\u7528\u95ED\u5305\uFF0C\u7F13\u50A8 flag \u548C result</p><ol><li>\u5DF2\u7ECF\u6267\u884C\u8FC7\uFF0C\u76F4\u63A5\u8FD4\u56DE result</li><li>\u5426\u5219\uFF0C\u6267\u884C\u5E76\u8FD4\u56DE result\uFF0C\u6807\u8BB0 flag</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">once</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">let</span> result
    <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span>

    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> result
      <span class="token punctuation">}</span>

      result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
      flag <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token keyword">return</span> result

    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
  <span class="token keyword">let</span> nFn <span class="token operator">=</span> <span class="token function">once</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
  <span class="token function">nFn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token function">nFn</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>ES6 Reflect</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">once</span> <span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> called <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> result
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>called<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      called <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      result <span class="token operator">=</span> <span class="token function">Reflect</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> result
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">fn</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;exec: &#39;</span> <span class="token operator">+</span> x<span class="token punctuation">)</span>
    <span class="token keyword">return</span> x
<span class="token punctuation">}</span>
<span class="token keyword">let</span> nFn <span class="token operator">=</span> <span class="token function">once</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
<span class="token function">nFn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">nFn</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u4F7F\u7528 Reflect.apply \u8C03\u7528 greet \u51FD\u6570\uFF0C\u5E76\u6307\u5B9A this \u503C\u4E3A person \u5BF9\u8C61</span>
<span class="token function">Reflect</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>greet<span class="token punctuation">,</span> person<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F7F\u7528 Function.prototype.apply \u8C03\u7528 greet \u51FD\u6570\uFF0C\u5E76\u6307\u5B9A this \u503C\u4E3A person \u5BF9\u8C61</span>
<span class="token function">greet</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,8);function t(e,o){return p}var l=n(a,[["render",t],["__file","once.html.vue"]]);export{l as default};
