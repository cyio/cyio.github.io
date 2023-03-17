import{_ as n,e as s}from"./app.de511a45.js";const a={},p=s(`<h1 id="once" tabindex="-1"><a class="header-anchor" href="#once" aria-hidden="true">#</a> once</h1><p>\u5229\u7528\u95ED\u5305</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">once</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,3);function e(t,o){return p}var l=n(a,[["render",e],["__file","once.html.vue"]]);export{l as default};
