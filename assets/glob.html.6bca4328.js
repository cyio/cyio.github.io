import{_ as n,e as a}from"./app.de511a45.js";const s={},t=a(`<h1 id="glob" tabindex="-1"><a class="header-anchor" href="#glob" aria-hidden="true">#</a> glob</h1><ul><li>\u5F02\u6B65\u65B9\u6CD5\u4E0D\u80FD\u7528\u4E8E\u8FD4\u56DE</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>  <span class="token keyword">let</span> globPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dirName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/*.md</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token comment">// glob(globPath), function (err, files) {</span>
    <span class="token comment">// names = files.map(file =&gt; path.parse(file).name)</span>
    <span class="token comment">// return names</span>
  <span class="token comment">// })</span>
  glob<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span>globPath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">file</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    names<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,3);function p(o,e){return t}var l=n(s,[["render",p],["__file","glob.html.vue"]]);export{l as default};