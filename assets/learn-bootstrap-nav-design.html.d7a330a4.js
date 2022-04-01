import{_ as t,r as p,o as e,c as o,a as n,b as c,F as l,d as s,e as u}from"./app.818741d3.js";const i={},k=n("h1",{id:"\u5B66\u4E60bootstrap\u98CE\u683C\u7684\u5BFC\u822A\u5207\u6362\u8BBE\u8BA1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B66\u4E60bootstrap\u98CE\u683C\u7684\u5BFC\u822A\u5207\u6362\u8BBE\u8BA1","aria-hidden":"true"},"#"),s(" \u5B66\u4E60Bootstrap\u98CE\u683C\u7684\u5BFC\u822A\u5207\u6362\u8BBE\u8BA1")],-1),r={href:"http://codepen.io/jefftml/pen/aOJXpv",target:"_blank",rel:"noopener noreferrer"},m=s("Responsive Main Navigation with Logo"),g=u(`<p>\u5BFC\u822A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show menu<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showmenu<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>MENU<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Contact Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Resume<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Something<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Something Else<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u9ED8\u8BA4\u53EA\u663E\u793A <code>.showmenu</code>\u6309\u94AE\uFF0C\u4E3A\u83DC\u5355\u5B50\u9879\u6DFB\u52A0\u5305\u88F9\uFF0C\u9ED8\u8BA4\u4E0D\u663E\u793A <code>.menuitems {display: none;}</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menu<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show menu<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showmenu<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>MENU<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuitems<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Contact Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Resume<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Something<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Something Else<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>.showmenu</code>\u89E6\u53D1\u5F00\u5173\uFF0C\u7ED9<code>.menuitems</code>\u6DFB\u52A0\u4E00\u4E2A\u4E34\u65F6\u7684\u7C7B\uFF08\u8FD9\u91CC\u4E3A\u4EC0\u4E48\u8981\u5355\u72EC\u521B\u5EFA\u4E00\u4E2A\u7C7B\uFF1F\uFF09</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.drawer</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.showmenu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.menuitems&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toggleClass</span><span class="token punctuation">(</span><span class="token string">&quot;drawer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5927\u5C4F\u5E55\u4E0B\uFF0C\u4E0D\u663E\u793A <code>.menu</code>\uFF0C<code>.menuitems</code>\u6539\u4E3A\u884C\u5185\u663E\u793A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* If browser is at least 800px wide */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span>800px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.menu</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.menuitems</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>inline<span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span>right<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span>4px 0 0 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.menuitems a</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>inline<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.drawer</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>inline<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,9);function b(d,q){const a=p("ExternalLinkIcon");return e(),o(l,null,[k,n("p",null,[n("a",r,[m,c(a)])]),g],64)}var v=t(i,[["render",b],["__file","learn-bootstrap-nav-design.html.vue"]]);export{v as default};
