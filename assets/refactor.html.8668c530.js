import{_ as n,e as s}from"./app.c609db3d.js";const e={},a=s(`<h1 id="\u91CD\u6784" tabindex="-1"><a class="header-anchor" href="#\u91CD\u6784" aria-hidden="true">#</a> \u91CD\u6784</h1><ul><li>\u5D4C\u5957\u7684\u6761\u4EF6\u5206\u652F\u96BE\u4EE5\u9605\u8BFB\u548C\u7EF4\u62A4\uFF0C\u89E3\u51B3\u65B9\u6CD5\u662F\uFF1A\u5916\u5C42 if \u8868\u8FBE\u793A\u53CD\u8F6C\uFF0C\u8FDB\u5165\u6761\u4EF6\u5206\u652F\u540E\u7ACB\u5373 return \u9000\u51FA</li></ul><h2 id="\u91CD\u590D\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u91CD\u590D\u4EE3\u7801" aria-hidden="true">#</a> \u91CD\u590D\u4EE3\u7801</h2><p>\u4F7F\u7528 jscpd \u68C0\u6D4B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &quot;duplication-check&quot;: &quot;jscpd --config .cpd.yaml&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>.cpd.yaml</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>languages:
  - javascript
  - jsx
  - css
  - less
  - htmlmixed
  - vue

exclude:
  - &quot;src/assets/lib/*.js&quot;
  - &quot;src/mock/**/*.js&quot;

files:
  - &quot;src/**/*&quot;
reporter: json

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,7);function r(l,c){return a}var t=n(e,[["render",r],["__file","refactor.html.vue"]]);export{t as default};
