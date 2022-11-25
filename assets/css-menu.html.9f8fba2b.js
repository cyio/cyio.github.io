import{_ as n,e as s}from"./app.5f7dba74.js";const a={},p=s(`<h1 id="css\u5B9E\u73B0\u83DC\u5355\u6216\u4E0B\u62C9\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#css\u5B9E\u73B0\u83DC\u5355\u6216\u4E0B\u62C9\u9009\u62E9" aria-hidden="true">#</a> CSS\u5B9E\u73B0\u83DC\u5355\u6216\u4E0B\u62C9\u9009\u62E9</h1><p>\u5176\u5B9E\u672C\u6765\u53EF\u4EE5\u7528\u8868\u5355\u6765\u505A\uFF0C\u4F46\u6709\u5B9A\u5236\u5316\u6837\u5F0F\u7684\u9700\u6C42\uFF0C\u53EA\u80FD\u7528CSS\u6A21\u62DF\u5B9E\u73B0\u4E86</p><p>\u6BD4\u5982\u8981\u5B9E\u73B0\u4E0B\u62C9\u9009\u62E9\u7684\u5185\u5BB9\u5C45\u4E2D\uFF0C\u5728Chrome\u4E0B\u53EF\u4EE5\u8FD9\u6837</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">select</span> <span class="token punctuation">{</span>
  <span class="token property">text-align-last</span><span class="token punctuation">:</span> center
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F46\u662F\u5728\u79FB\u52A8\u7AEF\u975EChrome\u4E0B\u5C31\u6CA1\u6709\u529E\u6CD5\u4E86\uFF0C\u662F\u6CA1\u6CD5\u8C03\u6574\u5BF9\u9F50\u7684</p><p>\u65E0\u5948\u653E\u5F03\u539F\u751F\u8868\u5355\uFF0C\u642C\u51FACSS\u6765\u4ECE\u5934\u6A21\u62DF\u5B9E\u73B0\uFF0CHTML\u5927\u6982\u662F\u8FD9\u6837</p><div class="language-pug ext-pug"><pre class="language-pug"><code><span class="token tag"><span class="token attr-class">.dropdown</span></span>
  <span class="token tag">span</span> <span class="token plain-text">\u8BF7\u9009\u62E9</span>
  <span class="token tag">ul<span class="token attr-class">.dropdown-content</span></span>
    <span class="token tag">li</span> <span class="token plain-text">\u9009\u9879\u4E00    </span>
    <span class="token tag">li</span> <span class="token plain-text">\u9009\u9879\u4E8C    </span>
    <span class="token tag">li</span> <span class="token plain-text">\u9009\u9879\u4E09    </span>
</code></pre></div><p>CSS\u5982\u4E0B</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.dropdown</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.dropdown-content</span> <span class="token punctuation">{</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\u3000// top\u5B9A\u4F4D\u8FD9\u91CC\u7528\u767E\u5206\u6BD4
  <span class="token property">width</span><span class="token punctuation">:</span> 92%<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -2%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f9f9f9<span class="token punctuation">;</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 8px 16px 0px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  // <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #b5b6b5<span class="token punctuation">;</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 15px 10px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.dropdown-item</span> <span class="token punctuation">{</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 22px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.dropdown-item:hover</span> <span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.dropdown:hover .dropdown-content</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> opacity .3s
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u7F3A\u70B9\u4E5F\u5F88\u660E\u663E\uFF0C\u8981\u5199\u989D\u5916\u7684JS\u6765\u5904\u7406\u9009\u4E2D\u503C\u7684\u53D8\u5316</p>`,10);function t(e,o){return p}var l=n(a,[["render",t],["__file","css-menu.html.vue"]]);export{l as default};
