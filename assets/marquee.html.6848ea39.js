import{_ as t,r as e,o,c,a as n,b as l,F as u,e as s,d as a}from"./app.fcfcaf2d.js";const r={},i=s(`<h1 id="\u8DD1\u9A6C\u706F\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u8DD1\u9A6C\u706F\u6548\u679C" aria-hidden="true">#</a> \u8DD1\u9A6C\u706F\u6548\u679C</h1><blockquote><p>\u7ED3\u679C\u505A\u5B8C\u53D1\u73B0\u9700\u6C42\u4E0D\u662F\u8FD9\u4E2A\uFF0C\u6700\u540E\u7528slider\u7EAF\u6587\u5B57\u5B9E\u73B0 HTML \u4E2D\u7684<code>marquee</code>\u6807\u7B7E\u5728 HTML5 \u5DF2\u5E9F\u5F03 CSS \u4E2D\u7684<code>marquee</code>\u4E5F\u5728 CSS3 \u4E2D\u88AB\u5E9F\u5F03\u4E86</p></blockquote><p>\u56E0\u4E3ACSS3\u6709\u66F4\u597D\u7684\u52A8\u753B\u6765\u5B9E\u73B0\u3002</p><p>\u4E00\u3001\u7EDD\u5BF9\u5B9A\u4F4D\u65B9\u6848</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*CSS\u4EE3\u7801\u7247\u6BB5*/</span>

<span class="token comment">/* \u5B9A\u4E49\u4E00\u4E2A\u8D70\u9A6C\u706F\u52A8\u753B */</span>

<span class="token atrule"><span class="token rule">@keyframes</span> marquee</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span> <span class="token property">left</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token selector">50%</span> <span class="token punctuation">{</span> <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span> <span class="token property">left</span><span class="token punctuation">:</span> -100%<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.marquee</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.marquee .text</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>

  <span class="token property">-webkit-animation</span><span class="token punctuation">:</span> marquee 6s linear infinite<span class="token punctuation">;</span>
  <span class="token property">-moz-animation</span><span class="token punctuation">:</span> marquee 4s linear infinite<span class="token punctuation">;</span>
  <span class="token property">-ms-animation</span><span class="token punctuation">:</span> marquee 4s linear infinite<span class="token punctuation">;</span>
  <span class="token property">-o-animation</span><span class="token punctuation">:</span> marquee 4s linear infinite<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> marquee 6s linear infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,5),k=a("\u4E8C\u3001translate\u65B9\u6848\u5728\u5FAE\u4FE1\u4E0B\u4E0D\u80FD\u7528\uFF0C\u800Canimation-play-state\u5B9E\u73B0\u60AC\u6D6E\u65F6\u52A8\u753B\u6682\u505C\uFF0C\u79FB\u52A8\u7AEF\u4E5F\u4E0D\u9002\u7528 "),b={href:"http://stackoverflow.com/questions/21233033/css3-marquee-effect",target:"_blank",rel:"noopener noreferrer"},m=a("css - CSS3 Marquee Effect - Stack Overflow"),d=s(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>microsoft marquee<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Windows 8 and ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.marquee</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 450px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.marquee span</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>  <span class="token comment">/* show the marquee just outside the paragraph */</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> marquee 15s linear infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.marquee span:hover</span> <span class="token punctuation">{</span>
    <span class="token property">animation-play-state</span><span class="token punctuation">:</span> paused
<span class="token punctuation">}</span>

<span class="token comment">/* Make it move */</span>
<span class="token atrule"><span class="token rule">@keyframes</span> marquee</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span>   <span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-100%<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,2);function f(h,y){const p=e("ExternalLinkIcon");return o(),c(u,null,[i,n("p",null,[k,n("a",b,[m,l(p)])]),d],64)}var q=t(r,[["render",f],["__file","marquee.html.vue"]]);export{q as default};
