import{_ as n,e as s}from"./app.818741d3.js";const a={},p=s(`<h1 id="promise-\u4E32\u884C" tabindex="-1"><a class="header-anchor" href="#promise-\u4E32\u884C" aria-hidden="true">#</a> Promise \u4E32\u884C</h1><p>\u9898\u76EE\u4E0D\u5173\u5FC3\u8FD4\u56DE</p><h2 id="_1-\u8FED\u4EE3" tabindex="-1"><a class="header-anchor" href="#_1-\u8FED\u4EE3" aria-hidden="true">#</a> 1. \u8FED\u4EE3</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">runPromiseByQueue</span><span class="token punctuation">(</span><span class="token parameter">tasks</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> task <span class="token keyword">of</span> tasks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">task</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_2-\u501F\u7528-reduce" tabindex="-1"><a class="header-anchor" href="#_2-\u501F\u7528-reduce" aria-hidden="true">#</a> 2. \u501F\u7528 reduce</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">runPromiseByQueue</span><span class="token punctuation">(</span><span class="token parameter">myPromises</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  myPromises<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">previousPromise<span class="token punctuation">,</span> nextPromise</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> previousPromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">nextPromise</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">createPromise</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">time<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">solve</span> <span class="token operator">=&gt;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;promise&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">solve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">runPromiseByQueue</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token function">createPromise</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">createPromise</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">createPromise</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,6);function t(e,o){return p}var u=n(a,[["render",t],["__file","promise-quene.html.vue"]]);export{u as default};
