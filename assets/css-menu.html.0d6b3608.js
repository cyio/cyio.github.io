import{d as n}from"./app.31fc93bc.js";const s={},a=n('<h1 id="css实现菜单或下拉选择" tabindex="-1"><a class="header-anchor" href="#css实现菜单或下拉选择" aria-hidden="true">#</a> CSS实现菜单或下拉选择</h1><p>其实本来可以用表单来做，但有定制化样式的需求，只能用CSS模拟实现了</p><p>比如要实现下拉选择的内容居中，在Chrome下可以这样</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">select</span> <span class="token punctuation">{</span>\n  <span class="token property">text-align-last</span><span class="token punctuation">:</span> center\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>但是在移动端非Chrome下就没有办法了，是没法调整对齐的</p><p>无奈放弃原生表单，搬出CSS来从头模拟实现，HTML大概是这样</p><div class="language-pug ext-pug line-numbers-mode"><pre class="language-pug"><code><span class="token tag"><span class="token attr-class">.dropdown</span></span>\n  <span class="token tag">span</span> <span class="token plain-text">请选择</span>\n  <span class="token tag">ul<span class="token attr-class">.dropdown-content</span></span>\n    <span class="token tag">li</span> <span class="token plain-text">选项一    </span>\n    <span class="token tag">li</span> <span class="token plain-text">选项二    </span>\n    <span class="token tag">li</span> <span class="token plain-text">选项三    </span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>CSS如下</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.dropdown</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.dropdown-content</span> <span class="token punctuation">{</span>\n  <span class="token property">z-index</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>　// top定位这里用百分比\n  <span class="token property">width</span><span class="token punctuation">:</span> 92%<span class="token punctuation">;</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> -2%<span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> #f9f9f9<span class="token punctuation">;</span>\n  <span class="token property">min-width</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 8px 16px 0px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  // <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #b5b6b5<span class="token punctuation">;</span>\n  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 15px 10px<span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.dropdown-item</span> <span class="token punctuation">{</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> 22px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.dropdown-item:hover</span> <span class="token punctuation">{</span>\n  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.dropdown:hover .dropdown-content</span> <span class="token punctuation">{</span>\n  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n  <span class="token property">z-index</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>\n  <span class="token property">transition</span><span class="token punctuation">:</span> opacity .3s\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>缺点也很明显，要写额外的JS来处理选中值的变化</p>',10);s.render=function(n,s){return a};export default s;
