import{_ as n,e as s}from"./app.8a416d48.js";const a={},p=s(`<h1 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> Less</h1><h2 id="\u590D\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u590D\u7528\u573A\u666F" aria-hidden="true">#</a> \u590D\u7528\u573A\u666F</h2><ul><li>Mixin \u53EA\u9002\u5408\u9700\u8981\u4F20\u53C2\u6570\u5FEB\u901F\u521B\u5EFA\u7684\u573A\u666F\uFF0C\u5426\u5219\u7B49\u540C\u4E8E\u624B\u52A8\u590D\u5236\u800C\u6CA1\u5FC5\u8981\u4F7F\u7528\u3002 <ul><li>\u7C7B\u540D\u672C\u8EAB\u662F\u5426\u8F93\u51FA\uFF0C\u5982\u679C\u4E3A\u5426\u5219\u52A0\u4E0A\u62EC\u53F7</li></ul></li><li>\u63D2\u503C\uFF0C\u8C03\u7528\u65F6\u4F20\u53D8\u91CF</li><li>\u7EE7\u627F</li><li>\u907F\u514D\u65E0\u610F\u95F4\u53BB\u5199\u4F9D\u8D56\u4E0A\u4E0B\u6587\u7684\u6837\u5F0F\uFF0C\u5C3D\u91CF\u5199\u901A\u7528\u6A21\u5757\uFF0C\u4FBF\u4E8E\u540E\u671F\u7EF4\u62A4</li><li>\u5982\u679C\u8DDF\u5176\u4ED6\u5143\u7D20\u7D27\u5BC6\uFF0C\u90A3\u5C31\u653E\u5728li\u7684\u5D4C\u5957\u91CC\uFF0C\u5426\u5219\u5C31\u8DDFli\u72EC\u7ACB\u5F00\u6765\u3002\u5982\u65E0\u5FC5\u8981\uFF0C\u52FF\u589E\u5D4C\u5957\u3002</li></ul><p><code>&amp;</code>\u8FD9\u4E2A\u7B26\u53F7\u5F15\u7528\u7236\u9009\u62E9\u5668\uFF0C\u5199\u4F2A\u7C7B\u65F6\u4F1A\u7528\u5230</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>

  <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u7B80\u5355\u7684\u4EE3\u7801\u590D\u7528\u3001\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7684\u4EE3\u7801\u590D\u7528\u3001\u7EE7\u627F" aria-hidden="true">#</a> \u7B80\u5355\u7684\u4EE3\u7801\u590D\u7528\u3001\u7EE7\u627F</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.bordered</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#menu a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
  .bordered<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.post a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  .bordered<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="extend-\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#extend-\u6269\u5C55" aria-hidden="true">#</a> extend \u6269\u5C55</h2><p>\u4F5C\u7528\uFF1A\u628A\u5F53\u524D\u9009\u62E9\u5668\u5408\u5E76\u7ED9\u53E6\u4E00\u4E2A\u9009\u62E9\u5668,</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">nav ul</span> <span class="token punctuation">{</span>
  &amp;<span class="token punctuation">:</span><span class="token function">extend</span><span class="token punctuation">(</span>.inline<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.inline</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">nav ul</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.inline,
nav ul</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,12);function t(e,o){return p}var l=n(a,[["render",t],["__file","less.html.vue"]]);export{l as default};
