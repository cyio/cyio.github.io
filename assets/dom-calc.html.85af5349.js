import{_ as e,r as t,o as p,c as o,a as n,b as c,F as l,e as r,d as s}from"./app.de511a45.js";const i={},u=r(`<h1 id="dom-\u8BA1\u7B97" tabindex="-1"><a class="header-anchor" href="#dom-\u8BA1\u7B97" aria-hidden="true">#</a> DOM \u8BA1\u7B97</h1><h2 id="\u5750\u6807\u3001\u8DDD\u79BB" tabindex="-1"><a class="header-anchor" href="#\u5750\u6807\u3001\u8DDD\u79BB" aria-hidden="true">#</a> \u5750\u6807\u3001\u8DDD\u79BB</h2><ul><li>clientX/Y</li><li>screenX/Y</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u83B7\u53D6\u9F20\u6807\u76F8\u5BF9\u4E8Ecanvas\u753B\u5E03\u7684\u4F4D\u7F6E
 **/</span>
<span class="token keyword">function</span> <span class="token function">getPosition</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> rect <span class="token operator">=</span> e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    touch<span class="token punctuation">,</span>
    po
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>clientType <span class="token operator">===</span> <span class="token string">&#39;mobile&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    touch <span class="token operator">=</span> e<span class="token punctuation">.</span>touches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token comment">//console.log(touch);</span>
    po <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> touch<span class="token punctuation">.</span>clientX <span class="token operator">-</span> rect<span class="token punctuation">.</span>left<span class="token punctuation">,</span>
      <span class="token literal-property property">y</span><span class="token operator">:</span> touch<span class="token punctuation">.</span>clientY <span class="token operator">-</span> rect<span class="token punctuation">.</span>top
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    po <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> e<span class="token punctuation">.</span>clientX <span class="token operator">-</span> rect<span class="token punctuation">.</span>left<span class="token punctuation">,</span>
      <span class="token literal-property property">y</span><span class="token operator">:</span> e<span class="token punctuation">.</span>clientY <span class="token operator">-</span> rect<span class="token punctuation">.</span>top
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> po
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528 offsetX/Y \u6765\u83B7\u53D6\u9F20\u6807\u76F8\u5BF9\u5143\u7D20\u7684\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u53EA\u4E0D\u8FC7\u9700\u8981\u6CE8\u610F\u4E00\u70B9\u7684\u662F\uFF0CoffsetX/Y \u5F97\u5230\u7684\u662F\u76F8\u5BF9\u5143\u7D20 padding box \u7684\u76F8\u5BF9\u4F4D\u7F6E\uFF0C\u548C\u901A\u8FC7 clientX/Y-rect.left/top \u5F97\u5230\u7684\u662F\u76F8\u5BF9\u5143\u7D20 border box \u5F97\u5230\u7684\u76F8\u5BF9\u4F4D\u7F6E\u3002</p><h2 id="getboundingclientrect\u548Cgetclientrects\u5F02\u540C" tabindex="-1"><a class="header-anchor" href="#getboundingclientrect\u548Cgetclientrects\u5F02\u540C" aria-hidden="true">#</a> <code>getBoundingClientRect</code>\u548C<code>getClientRects</code>\u5F02\u540C</h2>`,6),k=n("li",null,"bounding \u754C\u9650 rectangle \u77E9\u5F62",-1),d=n("li",null,"\u6CE8\u610F right \u548C bottom \u662F\u6309\u5DE6\u4E0A\u8FB9\u8BA1\u7B97",-1),b=s("\u8FD9\u4E24\u4E2A\u51FD\u6570\u5BF9 block \u5143\u7D20\u5F97\u5230\u7684\u7ED3\u679C\u76F8\u540C\uFF0C\u53EA\u4E0D\u8FC7 getClientRects()\u5F97\u5230\u7684\u662F\u4E00\u4E2A\u6570\u7EC4\u3002\u5BF9\u4E8E inline \u5143\u7D20\u6765\u8BF4\uFF0C\u5982\u679C inline \u5143\u7D20\u8DE8\u884C\u540E\uFF0C\u6BCF\u884C\u90FD\u4F1A\u5F62\u6210\u4E00\u4E2A DOMRect\uFF0C\u56E0\u6B64 getClientRects()\u4F1A\u5F97\u5230\u591A\u4E2A DOMRect \u7684\u4F4D\u7F6E\u5927\u5C0F\u4FE1\u606F\u7EC4\u6210\u7684\u6570\u7EC4\u3002\u800C getBoundingClientRect()\u4F1A\u5F97\u5230\u5305\u56F4\u6240\u6709 DOMRect \u7684\u6700\u5C0F\u77E9\u5F62\u7684\u4F4D\u7F6E\u5927\u5C0F\u4FE1\u606F\u3002 "),m={href:"https://www.quirksmode.org/dom/tests/rectangles.html",target:"_blank",rel:"noopener noreferrer"},h=s("DOM tests - rectangles");function g(_,f){const a=t("ExternalLinkIcon");return p(),o(l,null,[u,n("ul",null,[k,d,n("li",null,[b,n("a",m,[h,c(a)])])])],64)}var x=e(i,[["render",g],["__file","dom-calc.html.vue"]]);export{x as default};