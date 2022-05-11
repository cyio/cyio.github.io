import{_ as p,r as o,o as c,c as l,a as n,b as s,F as r,e,d as t}from"./app.52b45447.js";const u={},i=e(`<h1 id="pdf" tabindex="-1"><a class="header-anchor" href="#pdf" aria-hidden="true">#</a> PDF</h1><h2 id="\u9875\u9762\u5185\u5D4C-pdf-\u9884\u89C8" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u5185\u5D4C-pdf-\u9884\u89C8" aria-hidden="true">#</a> \u9875\u9762\u5185\u5D4C PDF \u9884\u89C8</h2><h3 id="\u65B9\u68481-\u4F7F\u7528\u6D4F\u89C8\u5668\u81EA\u5E26\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u65B9\u68481-\u4F7F\u7528\u6D4F\u89C8\u5668\u81EA\u5E26\u63D2\u4EF6" aria-hidden="true">#</a> \u65B9\u68481\uFF1A\u4F7F\u7528\u6D4F\u89C8\u5668\u81EA\u5E26\u63D2\u4EF6</h3><p>\u4F18\u70B9\uFF1A\u4E0D\u5F15\u5165\u5916\u90E8\u4F9D\u8D56\uFF0C\u5F00\u53D1\u5DE5\u4F5C\u91CF\u53EF\u5FFD\u7565\u3002</p><p>\u7F3A\u70B9\uFF1A</p><ol><li>\u517C\u5BB9\u6027\uFF0C\u76EE\u524D\u4E3B\u6D41\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u3002\u4E0D\u652F\u6301\uFF08IE\uFF09\u4F1A\u8F6C\u4E3A\u4E0B\u8F7D\u3002</li><li>\u4E0D\u652F\u6301\u6D41\u5F0F\u52A0\u8F7D\uFF0C\u9002\u5408\u8F83\u5C0F PDF</li></ol><h3 id="_1-iframe" tabindex="-1"><a class="header-anchor" href="#_1-iframe" aria-hidden="true">#</a> 1. iframe</h3><p><s>\u8B66\u544A <code>Resource interpreted as Document but transferred with MIME type application/pdf</code></s></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isSupportPDF()<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">v-else</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>link<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_blank<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>\u4E0B\u8F7D(\u4EC5\u7535\u8111\u7AEF)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// util</span>
<span class="token keyword">function</span> <span class="token function">isSupportPDF</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> hasPDFViewer <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> pdf <span class="token operator">=</span>
         navigator<span class="token punctuation">.</span>mimeTypes <span class="token operator">&amp;&amp;</span>
         navigator<span class="token punctuation">.</span>mimeTypes<span class="token punctuation">[</span><span class="token string">&quot;application/pdf&quot;</span><span class="token punctuation">]</span>
         <span class="token operator">?</span> navigator<span class="token punctuation">.</span>mimeTypes<span class="token punctuation">[</span><span class="token string">&quot;application/pdf&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>enabledPlugin
         <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pdf<span class="token punctuation">)</span> hasPDFViewer <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>mimeTypes<span class="token punctuation">[</span><span class="token string">&quot;application/pdf&quot;</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
         hasPDFViewer <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">return</span> hasPDFViewer<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_2-embed-\u4E0D\u652F\u6301\u56DE\u9000" tabindex="-1"><a class="header-anchor" href="#_2-embed-\u4E0D\u652F\u6301\u56DE\u9000" aria-hidden="true">#</a> 2. embed\uFF0C\u4E0D\u652F\u6301\u56DE\u9000</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/index.pdf<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>application/pdf<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u4F55\u9690\u85CF\u5DE5\u5177\u680F\uFF1A\u5728 pdf url \u540E\u8FFD\u52A0\u53C2\u6570<code>#toolbar=0</code></p>`,13),k={href:"https://stackoverflow.com/questions/39620917/resource-interpreted-as-document-but-transferred-with-mime-type-application-pdf",target:"_blank",rel:"noopener noreferrer"},d=t("asp.net mvc - Resource interpreted as Document but transferred with MIME type application/pdf - Stack Overflow"),m={href:"https://codepen.io/cyio/pen/mgGybw",target:"_blank",rel:"noopener noreferrer"},h=t("inline pdf"),b={href:"https://blog.csdn.net/qappleh/article/details/80250492",target:"_blank",rel:"noopener noreferrer"},f=t("\u524D\u7AEF\u9884\u89C8PDF\u603B\u7ED3\uFF1Aiframe\u3001embed\u3001PDFObject\u3001PDF.js - ruanhongbiao\u7684\u4E13\u680F - CSDN\u535A\u5BA2"),g=e('<h3 id="\u65B9\u68482-pdf-js" tabindex="-1"><a class="header-anchor" href="#\u65B9\u68482-pdf-js" aria-hidden="true">#</a> \u65B9\u68482: pdf.js</h3><p>\u6838\u5FC3\u4F7F\u7528 canvas \u6E32\u67D3\uFF0C\u652F\u6301 IE</p><p>\u4F18\u70B9\uFF1A</p><ol><li>\u652F\u6301 IE</li><li>\u4FDD\u6301\u5404\u5E73\u53F0 UI \u4E00\u81F4\uFF0C\u53EF\u5B9A\u5236\u6027\u5F3A</li><li>\u53EF\u4EE5\u652F\u6301\u6D41\u5F0F\u52A0\u8F7D\uFF0C\u5927\u6587\u4EF6\u9996\u5C4F\u53EF\u66F4\u65E9\u6E32\u67D3</li></ol><p>\u7F3A\u70B9\uFF1A</p><ol><li>\u9700\u8981\u7B49\u5F85 pdf.js \u4E0B\u8F7D\u548C\u521D\u59CB\u5316</li><li>\u5F00\u53D1\u5DE5\u4F5C\u91CF\u8F83\u5927</li></ol>',6),_={href:"https://www.cnblogs.com/163yun/p/9811569.html",target:"_blank",rel:"noopener noreferrer"},v=t("pdfjs viewer \u5F00\u53D1\u5C0F\u7ED3 - \u7F51\u6613\u4E91 - \u535A\u5BA2\u56ED");function q(w,y){const a=o("ExternalLinkIcon");return c(),l(r,null,[i,n("p",null,[n("a",k,[d,s(a)])]),n("p",null,[n("a",m,[h,s(a)]),n("a",b,[f,s(a)])]),g,n("p",null,[n("a",_,[v,s(a)])])],64)}var D=p(u,[["render",q],["__file","pdf.html.vue"]]);export{D as default};
