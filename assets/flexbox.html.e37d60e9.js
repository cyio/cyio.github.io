import{r as n,o as a,c as s,a as e,w as t,F as l,b as p,d as o}from"./app.31fc93bc.js";const c={},r=e("h1",{id:"flexbox",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flexbox","aria-hidden":"true"},"#"),p(" Flexbox")],-1),i={class:"table-of-contents"},u=p("问题"),d=p("解决如何灵活分配空间（传统布局问题）"),b=p("flex 没有 justify-self"),k=p("兼容性"),g=p("参考"),f=o('<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><ol><li>内容不足时想自适应撑满，怎么做</li><li>内容撑满时，子条目如何分配空间</li><li>如何实现子条目换行</li></ol><ul><li><p><code>flex</code>块级元素，<code>inline-flex</code>行内元素</p></li><li><p>由<strong>伸缩容器</strong>和<strong>伸缩条目</strong>构成，支持任意嵌套，内外互不干扰</p></li><li><p><code>flex-grow</code>增长系数，<code>flex-shrink</code>收缩系数。总和不足 1 时，按 1 计算</p><p>场景：内容不足时想撑满，内容撑满时如何分配</p></li><li><p>父元素设置<code>flex-wrap: wrap;</code>，配合某个子条目设置<code>flex-basis: 100%;</code>，可以实现后续内容换行排列</p></li></ul><table><thead><tr><th>justify-content</th><th>两头间隔</th></tr></thead><tbody><tr><td>space-between</td><td>没有（仅元素间有）</td></tr><tr><td>space-around</td><td>有，但为半格</td></tr><tr><td>space-evenly</td><td>有，与其它间隔相等</td></tr></tbody></table><p>缩写 grow, shrink, basis</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>flex: 1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="解决如何灵活分配空间-传统布局问题" tabindex="-1"><a class="header-anchor" href="#解决如何灵活分配空间-传统布局问题" aria-hidden="true">#</a> 解决如何灵活分配空间（传统布局问题）</h2><ol><li><p>多余空间的分配</p><p>实现三栏等高布局，两边侧栏定宽，中间内容占用剩余空间</p></li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">section</span> <span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">.left-side,\n  .right-side</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">.content</span> <span class="token punctuation">{</span>\n    <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left-side<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right-side<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ol start="2"><li>空间不足时收缩</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="flex-没有-justify-self" tabindex="-1"><a class="header-anchor" href="#flex-没有-justify-self" aria-hidden="true">#</a> flex 没有 justify-self</h2><p>比如，有三个元素，两个元素紧挨排列，第三个元素居右。首先不能用 justify-content</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span>  <span class="token punctuation">{</span>\n  display<span class="token punctuation">;</span> flex<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.push</span> <span class="token punctuation">{</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',14),h={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox",target:"_blank",rel:"noopener noreferrer"},x=p("Box alignment in Flexbox - CSS（层叠样式表） | MDN"),m=o('<h2 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性" aria-hidden="true">#</a> 兼容性</h2><ul><li>IE10 需要<code>-ms-</code>前缀，IE11 支持<code>flex</code>，但有一些 bug</li><li>UC 需要<code>-webkit-box</code></li></ul><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',3),v={href:"http://yoksel.github.io/flex-cheatsheet/",target:"_blank",rel:"noopener noreferrer"},y=p("Flexbox Cheatsheet"),_=e("br",null,null,-1),w={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox#Status_in_browsers",target:"_blank",rel:"noopener noreferrer"},S=p("Backwards Compatibility of Flexbox - CSS: Cascading Style Sheets | MDN"),C=e("br",null,null,-1),F={href:"https://www.qdfuns.com/article/25669/87bd5567ba0af95f5ad0064bf36b7139.html",target:"_blank",rel:"noopener noreferrer"},q=p("文章 - Flex 子元素高度塌陷 | 前端网（QDFuns）"),j=e("br",null,null,-1),B={href:"http://jsbin.com/mesivil/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"},L=p("JS Bin - Collaborative JavaScript Debugging"),z=e("br",null,null,-1),M={href:"https://isux.tencent.com/flexbox.html",target:"_blank",rel:"noopener noreferrer"},D=p("移动端全兼容的 flexbox 速成班 - 前端技术 - 腾讯 ISUX"),E=e("br",null,null,-1),I={href:"https://stackoverflow.com/a/43882888/5657916",target:"_blank",rel:"noopener noreferrer"},N=p("css - Margin collapsing in flexbox - Stack Overflow"),T=e("br",null,null,-1),U={href:"https://www.w3.org/TR/css-flexbox-1/#flex-containers",target:"_blank",rel:"noopener noreferrer"},W=p("CSS Flexible Box Layout Module Level 1"),A=e("br",null,null,-1),J={href:"https://www.smashingmagazine.com/2017/07/enhancing-css-layout-floats-flexbox-grid/",target:"_blank",rel:"noopener noreferrer"},O=p("Progressively Enhancing CSS Layout: From Floats To Flexbox To Grid — Smashing Magazine"),R=e("br",null,null,-1),G={href:"https://www.gridtoflex.com/",target:"_blank",rel:"noopener noreferrer"},P=p("gridtoflex.com"),Q=e("blockquote",null,[e("p",null,"chrome73,74 版本以后 flex 布局 Web 应用程序中的溢出将不再起作用，要在 flex 父元素，原来是 min-height: auto; 现在改为 min-height: 0;才可以")],-1);c.render=function(p,o){const c=n("RouterLink"),X=n("OutboundLink");return a(),s(l,null,[r,e("nav",i,[e("ul",null,[e("li",null,[e(c,{to:"#问题"},{default:t((()=>[u])),_:1})]),e("li",null,[e(c,{to:"#解决如何灵活分配空间-传统布局问题"},{default:t((()=>[d])),_:1})]),e("li",null,[e(c,{to:"#flex-没有-justify-self"},{default:t((()=>[b])),_:1})]),e("li",null,[e(c,{to:"#兼容性"},{default:t((()=>[k])),_:1})]),e("li",null,[e(c,{to:"#参考"},{default:t((()=>[g])),_:1})])])]),f,e("p",null,[e("a",h,[x,e(X)])]),m,e("p",null,[e("a",v,[y,e(X)]),_,e("a",w,[S,e(X)]),C,e("a",F,[q,e(X)]),j,e("a",B,[L,e(X)]),z,e("a",M,[D,e(X)]),E,e("a",I,[N,e(X)]),T,e("a",U,[W,e(X)]),A,e("a",J,[O,e(X)]),R,e("a",G,[P,e(X)])]),Q],64)};export default c;
