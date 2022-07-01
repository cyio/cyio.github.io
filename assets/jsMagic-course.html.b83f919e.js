import{_ as s,e as n}from"./app.e2525c08.js";const a={},e=n(`<h1 id="babel-node-npm" tabindex="-1"><a class="header-anchor" href="#babel-node-npm" aria-hidden="true">#</a> Babel Node &amp;&amp; Npm</h1><ul><li>\u6CE8\u610F\u5B89\u88C5 babel-cli \uFF0C\u800C\u975E babel</li><li>\u8FD8\u6709\u4E2A babel-preset-es2015</li><li>\u65B0\u5EFA\u6587\u4EF6 .babelrc</li></ul><div class="language-text ext-text"><pre class="language-text"><code>{
  &quot;presets&quot;: [&quot;babel-preset-es2015&quot;]
}
</code></pre></div><ul><li><p>\u547D\u4EE4\u884C\u4F7F\u7528\uFF0C\u5BFC\u51FA <code>$ ./node_modules/.bin/babel hello-babel.js &gt; hello-babel.es3.js</code></p></li><li><p>\u5728node\u4E2D\u52A0\u8F7D</p></li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">node</span>
<span class="token operator">&gt;</span> require<span class="token punctuation">(</span><span class="token string">&quot;babel-preset-es2015&quot;</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>\u67E5\u770Brequire\u7684\u6587\u4EF6\u6307\u5411</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> require.resolve<span class="token punctuation">(</span><span class="token string">&quot;babel-preset-es2015&quot;</span><span class="token punctuation">)</span>
<span class="token string">&#39;node_modules/babel-preset-es2015/index.js&#39;</span>
</code></pre></div><ul><li><p>\u6253\u5370\u4F9D\u8D56\u6811 $ npm ls</p></li><li><p>\u76EE\u5F55\u67E5\u627E\u6587\u4EF6\u5339\u914D</p></li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">find</span> node_modules <span class="token operator">|</span> <span class="token function">grep</span> core-js/package.json
</code></pre></div><ul><li><p>\u4E0D\u8981\u7528 sudo</p></li><li><p>\u9879\u76EE\u521D\u59CB\u5316 $ npm init --yes</p></li><li><p>NodeJS \u4E0D\u652F\u6301 import/export \u8BED\u6CD5</p></li></ul><h1 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs" aria-hidden="true">#</a> CommonJS</h1><p>require \u52A0\u8F7D\u6A21\u5757\uFF0C\u76F8\u5F53\u4E8EES6 import module.exports \u5BFC\u51FA\u6A21\u5757\uFF0C\u76F8\u5F53\u4E8EES6 export\uFF0C\u6CE8\u610F\u540E\u4E00\u4E2A\u8BCD\u4E3A\u590D\u6570</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// constants.js</span>
<span class="token keyword">var</span> pi <span class="token operator">=</span> <span class="token number">3.14159</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> e <span class="token operator">=</span> <span class="token number">2.71828</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> secretAnswer <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">pi</span><span class="token operator">:</span> pi<span class="token punctuation">,</span>
  <span class="token literal-property property">e</span><span class="token operator">:</span> e<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code>$ <span class="token function">node</span>
<span class="token operator">&gt;</span> require<span class="token punctuation">(</span><span class="token string">&quot;./constants&quot;</span><span class="token punctuation">)</span>    // \u7701\u7565\u540E\u7F00
<span class="token operator">&gt;</span> var pi <span class="token operator">=</span> require<span class="token punctuation">(</span><span class="token string">&quot;./constants&quot;</span><span class="token punctuation">)</span>.pi<span class="token punctuation">;</span>   // \u6307\u5B9A\u52A0\u8F7D
</code></pre></div><ul><li>require \u548C ES6 \u89E3\u6784</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>$ babel-node
<span class="token operator">&gt;</span> const <span class="token punctuation">{</span>pi,e<span class="token punctuation">}</span> <span class="token operator">=</span> require<span class="token punctuation">(</span><span class="token string">&quot;./constants&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&gt;</span> console.log<span class="token punctuation">(</span><span class="token string">&quot;pie =&quot;</span>, pi + e<span class="token punctuation">)</span><span class="token punctuation">;</span>
pie <span class="token operator">=</span> <span class="token number">5.85987</span>
</code></pre></div><ul><li>ES6\u9ED8\u8BA4\u5BFC\u51FA\u5BFC\u5165</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token number">42</span>
<span class="token comment">// import-default.js</span>
<span class="token keyword">import</span> <span class="token keyword">default</span> <span class="token keyword">from</span> <span class="token string">&quot;./constants.js&quot;</span><span class="token punctuation">;</span>   <span class="token comment">// \u8FD9\u91CC\u53EF\u4EE5\u6539\u540D</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">default</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 42</span>
</code></pre></div>`,18);function p(t,o){return e}var c=s(a,[["render",p],["__file","jsMagic-course.html.vue"]]);export{c as default};
