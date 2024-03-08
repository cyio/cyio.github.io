import{_ as e,r as p,o,c as l,a,b as n,F as c,e as r,d as t}from"./app.0fa1b285.js";const k={},i=r(`<h1 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> table</h1><p>\u8868\u683C\u5E03\u5C40\uFF0C\u9ED8\u8BA4\u7531\u5185\u5BB9\u51B3\u5B9A \u8BBE\u4E3A fixed \uFF0C\u6307\u5B9A\u5BBD\u5EA6\uFF0C\u5F80\u5F80\u540C\u65F6\u8981\u8BBE\u5B9A overflow: hidden \u9632\u6B62\u6EA2\u51FA table-layout</p><p>\u8FB9\u6846\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u662F\u5206\u5F00 seprate \u8BBE\u4E3A collapse\uFF0C\u584C\u9677\u5408\u5E76 border-collapse</p><p>\u76F8\u90BB\u5355\u5143\u683C\u7684\u8FB9\u6846\u95F4\u7684\u8DDD\u79BB\uFF08\u4EC5\u7528\u4E8E\u201C\u8FB9\u6846\u5206\u79BB\u201D\u6A21\u5F0F\uFF09 border-spacing: 10px \u6240\u4EE5\u5982\u679C\u662F\u5408\u5E76\u6A21\u5F0F\uFF0C\u8BBE\u4E3A0\u53EF\u80FD\u662F\u6CA1\u6709\u610F\u4E49\u7684</p><h2 id="\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F" aria-hidden="true">#</a> \u6A21\u677F</h2><div class="language-pug ext-pug"><pre class="language-pug"><code><span class="token tag">table<span class="token attr-class">.table</span></span>
  <span class="token tag">tbody</span>
    <span class="token tag">tr<span class="token attr-class">.table-head</span></span>
      <span class="token tag">th</span> <span class="token plain-text">\u9898\u76EE\u5E8F\u53F7</span>
      <span class="token tag">th</span> <span class="token plain-text">\u9898\u76EE\u7C7B\u578B</span>
      <span class="token tag">th</span> <span class="token plain-text">\u96BE\u5EA6</span>
      <span class="token tag">th</span> <span class="token plain-text">\u9898\u76EE\u603B\u5206</span>
      <span class="token tag">th</span> <span class="token plain-text">\u6211\u7684\u5F97\u5206</span>
    <span class="token punctuation">-</span><span class="token code"> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> x<span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> x<span class="token operator">&lt;</span><span class="token number">10</span> <span class="token punctuation">;</span>x<span class="token operator">++</span><span class="token punctuation">)</span></span>
      <span class="token tag">tr<span class="token attr-class">.table-body-item</span></span>
        <span class="token tag">td</span> <span class="token plain-text">1</span>
        <span class="token tag">td</span> <span class="token plain-text">\u9009\u62E9\u9898</span>
        <span class="token tag">td</span> <span class="token plain-text">3\u7EA7</span>
        <span class="token tag">td</span> <span class="token plain-text">5</span>
        <span class="token tag">td</span> <span class="token plain-text">3</span>
</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">table</span> <span class="token punctuation">{</span>
  <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7),d={href:"https://codepen.io/cyio/pen/vvYrVL",target:"_blank",rel:"noopener noreferrer"},u=t("table demo"),h={href:"https://www.w3schools.com/css/css_table.asp",target:"_blank",rel:"noopener noreferrer"},g=t("CSS Styling Tables");function b(_,x){const s=p("ExternalLinkIcon");return o(),l(c,null,[i,a("p",null,[a("a",d,[u,n(s)]),a("a",h,[g,n(s)])])],64)}var m=e(k,[["render",b],["__file","table.html.vue"]]);export{m as default};
