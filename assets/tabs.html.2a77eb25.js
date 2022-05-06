import{_ as n,e as s}from"./app.b51303a2.js";const a={},p=s(`<div class="language-pug ext-pug line-numbers-mode"><pre class="language-pug"><code><span class="token tag">template</span>
  <span class="token tag"><span class="token attr-class">.ui-tabs</span></span>
    <span class="token tag"><span class="token attr-class">.tab__item</span><span class="token attributes"><span class="token punctuation">(</span>
      <span class="token attr-name">v-for</span><span class="token punctuation">=</span><span class="token attr-value"><span class="token string">&quot;tabItem in tabOptions&quot;</span></span>
      :<span class="token attr-name">class</span><span class="token punctuation">=</span><span class="token attr-value"><span class="token string">&quot;{ &#39;is-active&#39;: activeTab === tabItem.key }&quot;</span></span>
      @<span class="token attr-name">click</span><span class="token punctuation">=</span><span class="token attr-value"><span class="token string">&quot;activeTab = tabItem.key&quot;</span></span><span class="token punctuation">)</span></span></span> <span class="token plain-text">{{tabItem.title}}</span>
      <span class="token tag"><span class="token attr-class">.tab__bottom-bar</span></span>
  <span class="token tag"><span class="token attr-class">.ui-tab__pane</span><span class="token attributes"><span class="token punctuation">(</span>
    <span class="token attr-name">v-for</span><span class="token punctuation">=</span><span class="token attr-value">&quot;<span class="token punctuation">(</span>item</span><span class="token punctuation">,</span> <span class="token attr-name">index</span><span class="token punctuation">)</span></span></span> <span class="token plain-text">in tabOptions&quot;</span>
    :class<span class="token punctuation">=</span>&quot;item<span class="token punctuation">.</span>class&quot;
    :key<span class="token punctuation">=</span>&#39;item<span class="token punctuation">.</span>name&#39;
    <span class="token tag">v-if</span><span class="token punctuation">=</span><span class="token code"><span class="token string">&quot;activeTab === index&quot;</span></span>
  )
    <span class="token tag">component<span class="token attributes"><span class="token punctuation">(</span>:<span class="token attr-name">is</span><span class="token punctuation">=</span><span class="token attr-value"><span class="token string">&quot;item.component&quot;</span></span><span class="token punctuation">)</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>      <span class="token literal-property property">activeTab</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tabOptions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;aaa&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;AAA&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;bbb&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$--color-primary</span></span><span class="token punctuation">:</span> #FF0520<span class="token punctuation">;</span>

  <span class="token selector">.tabs </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token selector">.tab__item </span><span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 176px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 56px<span class="token punctuation">;</span>
      <span class="token property">line-height</span><span class="token punctuation">:</span> 56px<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 0 32px<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
      <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
      <span class="token selector"><span class="token parent important">&amp;</span>:first-child::after </span><span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #F1F2F4<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.tab__bottom-bar </span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 64px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> -3px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector"><span class="token parent important">&amp;</span>.is-active </span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$--color-primary</span><span class="token punctuation">;</span>
        <span class="token selector">.tab__bottom-bar </span><span class="token punctuation">{</span>
          <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$--color-primary</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>`,3);function t(e,o){return p}var l=n(a,[["render",t],["__file","tabs.html.vue"]]);export{l as default};
