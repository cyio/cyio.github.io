import{_ as n,e as s}from"./app.ea0e2b7a.js";const a={},t=s(`<h1 id="f2-charts" tabindex="-1"><a class="header-anchor" href="#f2-charts" aria-hidden="true">#</a> f2-charts</h1><ol><li><code>git clone https://github.com/antvis/wx-f2.git</code></li><li><code>cp wx-f2/f2-canvas static/</code></li><li>\u53EA\u80FD\u5199\u5728\u9875\u9762\uFF1F\u56E0\u4E3A\u9700\u8981\u914D\u7F6E<code>main.js</code></li><li></li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code>  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5728 onLoad \u5185\u90E8\u901A\u8FC7id\u627E\u5230\u8BE5\u7EC4\u4EF6, \u7136\u540E\u8C03\u7528\u8BE5\u7EC4\u4EF6\u7684\u521D\u59CB\u5316\u65B9\u6CD5</span>
    <span class="token comment">// \u6CE8\u610F\u8FD9\u91CC\u9009\u62E9\u7EC4\u4EF6\u540D\u79F0\u662F\u9875\u9762\u540D</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$mp<span class="token punctuation">.</span>page<span class="token punctuation">.</span><span class="token function">selectComponent</span><span class="token punctuation">(</span><span class="token string">&#39;#test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>initChart<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><ol start="5"><li>\u63D0\u793A<code>TypeError: Cannot read property &#39;defaultView&#39; of undefined </code> \u5728 ff-canvas \u6216\u7236\u7EA7\u6DFB\u52A0\u6837\u5F0F</li></ol><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5);function p(o,c){return t}var i=n(a,[["render",p],["__file","f2-charts.html.vue"]]);export{i as default};