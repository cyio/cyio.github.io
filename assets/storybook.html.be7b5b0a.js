import{_ as t,r as e,o,c,a as n,b as p,F as r,d as s,e as l}from"./app.fcaad8ec.js";const u={},i=n("h1",{id:"storybook",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#storybook","aria-hidden":"true"},"#"),s(" storybook")],-1),k=n("p",null,"\u7EC4\u4EF6\u9A71\u52A8\u5F00\u53D1 \u7EAF\u5C55\u793A\u7EC4\u4EF6\uFF0C\u6CA1\u6709\u670D\u52A1\u5668\u63A5\u53E3\u652F\u6301\u4E0B\uFF0C\u6D4B\u8BD5 UI pure + data context(vuex) \u6D4B\u8BD5\u903B\u8F91\u573A\u666F \u5408\u6210\u7EC4\u4EF6",-1),d=n("p",null,"\u5BFC\u51FA\u9759\u6001\u6587\u4EF6\u90E8\u7F72\uFF0C\u6301\u7EED\u96C6\u6210\uFF0C\u670D\u52A1\u975E\u6280\u672F\u4EBA\u5458",-1),b=n("blockquote",null,[n("p",null,"Storybook\u662FUI\u7EC4\u4EF6\u7684\u5F00\u53D1\u73AF\u5883\u3002\u5B83\u5141\u8BB8\u60A8\u6D4F\u89C8\u7EC4\u4EF6\u5E93\uFF0C\u67E5\u770B\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u4E0D\u540C\u72B6\u6001\uFF0C\u4EE5\u53CA\u4EA4\u4E92\u5F0F\u5F00\u53D1\u548C\u6D4B\u8BD5\u7EC4\u4EF6\u3002\u53EF\u72EC\u7ACB\u4E8E\u4E1A\u52A1\u4EE3\u7801")],-1),m=n("p",null,"\u76EE\u5F55\u4F4D\u7F6E \u6839/src \u914D\u7F6E\u6587\u4EF6 \u8DDF\u7EC4\u4EF6/\u5206\u79BB",-1),g={href:"https://www.learnstorybook.com/vue/en/get-started/",target:"_blank",rel:"noopener noreferrer"},y=s("Get started | Storybook Tutorial"),_={href:"https://juejin.im/post/5a7465de5188257a6a78a08c",target:"_blank",rel:"noopener noreferrer"},f=s("\u5229\u7528StoryBook\u5F00\u53D1UI\u7EC4\u4EF6\u7BA1\u7406 - \u6398\u91D1"),x=l(`<div class="language-javascript ext-js"><pre class="language-javascript"><code># Run the test <span class="token function">runner</span> <span class="token punctuation">(</span>Jest<span class="token punctuation">)</span> <span class="token keyword">in</span> a terminal<span class="token operator">:</span>
yarn test<span class="token operator">:</span>unit

# Start the component explorer on port <span class="token number">6006</span><span class="token operator">:</span>
yarn run storybook

# Run the frontend app proper on port <span class="token number">8080</span><span class="token operator">:</span>
yarn serve
</code></pre></div><p>public \u6709\u56FE\u6807\u3001\u56FE\u7247\u7B49\u8D44\u6E90\u9700\u8981\u8BBF\u95EE <code>&quot;storybook&quot;: &quot;start-storybook -p 6006 -s public&quot;,</code></p><p>\u7F16\u8F91<code>.storybook/config.js</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> configure <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@storybook/vue&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 1. \u6DFB\u52A0\u5168\u5C40\u5F15\u5165\u5185\u5BB9</span>
<span class="token keyword">import</span> <span class="token string">&#39;../src/index.css&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 2. \u9ED8\u8BA4\u5F15\u5165\u6587\u4EF6\u5939\uFF0Cstories =&gt; src</span>
<span class="token comment">// automatically import all files ending in *.stories.js</span>
<span class="token keyword">const</span> req <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;../stories&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.stories.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">loadStories</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  req<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">filename</span> <span class="token operator">=&gt;</span> <span class="token function">req</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">configure</span><span class="token punctuation">(</span>loadStories<span class="token punctuation">,</span> module<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6DFB\u52A0\u88C5\u9970 context</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">paddedList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div style=&quot;padding: 3rem;&quot;&gt;&lt;story/&gt;&lt;/div&gt;&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">storiesOf</span><span class="token punctuation">(</span><span class="token string">&#39;TaskList&#39;</span><span class="token punctuation">,</span> module<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">addDecorator</span><span class="token punctuation">(</span>paddedList<span class="token punctuation">)</span>
</code></pre></div><p>glow \u53D1\u5149</p><p>\u6709\u5355\u72EC\u7684 webpack \u914D\u7F6E\uFF0C\u5982 scss \u9700\u8981\u5904\u7406</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// vue.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">sass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&#39;@import &quot;@/scss/settings.scss&quot;;&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// .storybook/webpack.config.js</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loaders</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;style-loader&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> 
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&#39;@import &quot;@/scss/settings.scss&quot;;&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span> 
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>addon-actions \u6253\u5370\u4E8B\u4EF6\u4FE1\u606F addon-links \u6545\u4E8B\u8DF3\u8F6C</p>`,10);function v(h,j){const a=e("ExternalLinkIcon");return o(),c(r,null,[i,k,d,b,m,n("p",null,[n("a",g,[y,p(a)]),n("a",_,[f,p(a)])]),x],64)}var w=t(u,[["render",v],["__file","storybook.html.vue"]]);export{w as default};
