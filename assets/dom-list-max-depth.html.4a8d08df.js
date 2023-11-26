import{_ as n,e as s}from"./app.42d2afad.js";const a={},p=s(`<h1 id="dom-\u5217\u8868\u6700\u5927\u6DF1\u5EA6" tabindex="-1"><a class="header-anchor" href="#dom-\u5217\u8868\u6700\u5927\u6DF1\u5EA6" aria-hidden="true">#</a> DOM \u5217\u8868\u6700\u5927\u6DF1\u5EA6</h1><p>\u7ED9\u4E00\u4E2A HTML \u9875\u9762\uFF0C\u91CC\u9762\u53EF\u80FD\u6709\u5D4C\u5957\u5217\u8868\uFF0C\u5982 ul \u5305\u542B ul/ol\uFF0C\u6216 ol \u5305\u542B ul/ol\u3002\u9898\u76EE\u5C31\u662F\u7ED9\u5B9A\u4E00\u4E2A HTML \u9875\u9762\uFF0C\u8BA1\u7B97\u51FA\u6700\u5927\u7684\u5D4C\u5957\u6DF1\u5EA6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">calculateMaxDepth</span><span class="token punctuation">(</span><span class="token parameter">html</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> doc <span class="token operator">=</span> document<span class="token punctuation">.</span>implementation<span class="token punctuation">.</span><span class="token function">createHTMLDocument</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  doc<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> html<span class="token punctuation">;</span>
  <span class="token keyword">let</span> maxDepth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">calculateDepth</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> depth</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    maxDepth <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxDepth<span class="token punctuation">,</span> depth<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> children <span class="token operator">=</span> element<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> child <span class="token operator">=</span> children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>nodeName <span class="token operator">===</span> <span class="token string">&#39;UL&#39;</span> <span class="token operator">||</span> child<span class="token punctuation">.</span>nodeName <span class="token operator">===</span> <span class="token string">&#39;OL&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">calculateDepth</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">calculateDepth</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span>body<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> maxDepth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u793A\u4F8B\u7528\u6CD5</span>
<span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
&lt;html&gt;
  &lt;body&gt;
    &lt;ul&gt;
      &lt;li&gt;Item 1&lt;/li&gt;
      &lt;li&gt;Item 2
        &lt;ol&gt;
          &lt;li&gt;Subitem 2.1&lt;/li&gt;
          &lt;li&gt;Subitem 2.2
            &lt;ul&gt;
              &lt;li&gt;Subsubitem 2.2.1&lt;/li&gt;
              &lt;li&gt;Subsubitem 2.2.2&lt;/li&gt;
            &lt;/ul&gt;
          &lt;/li&gt;
        &lt;/ol&gt;
      &lt;/li&gt;
      &lt;li&gt;Item 3&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/body&gt;
&lt;/html&gt;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> maxDepth <span class="token operator">=</span> <span class="token function">calculateMaxDepth</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6700\u5927\u5D4C\u5957\u6DF1\u5EA6:&quot;</span><span class="token punctuation">,</span> maxDepth<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div>`,3);function t(e,l){return p}var o=n(a,[["render",t],["__file","dom-list-max-depth.html.vue"]]);export{o as default};
