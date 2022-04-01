import{_ as t,r as o,o as i,c as l,a as e,b as s,F as r,e as d,d as n}from"./app.818741d3.js";const c={},b=d(`<h1 id="gitbook" tabindex="-1"><a class="header-anchor" href="#gitbook" aria-hidden="true">#</a> gitbook</h1><ol><li>\u5B89\u88C5\u4F9D\u8D56</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u76EE\u5F55\u81EA\u52A8\u751F\u6210\u5DE5\u5177
npm install -g gitbook-summary
// gitbook\u547D\u4EE4\u884C\u5DE5\u5177
npm install -g gitbook-cli
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2"><li>\u521D\u59CB\u5316GitBook</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gitbook init 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>\u5C06\u5F53\u524D\u76EE\u5F55\u4E0B\u7684md\u6587\u4EF6\u6309\u6811\u7ED3\u6784\u751F\u6210\u5230 SUMMARY.md</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>book sm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u53EF\u901A\u8FC7 book.json \u8FDB\u884C\u914D\u7F6E\uFF0C\u6BD4\u5982\u6392\u9664\u6587\u4EF6\u5939</p><ol start="4"><li>\u7F16\u8BD1\u67E5\u770B\uFF0C\u7F16\u8BD1\u7ED3\u679C\u5728 <em>book \u76EE\u5F55\u4E0B</em></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gitbook serve
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="5"><li>\u5728 _book \u76EE\u5F55\u4E0B\u521B\u5EFA\u5E73\u884C\u5206\u652F \u590D\u5236\u9879\u76EE\u7684.git\u6587\u4EF6\u5939\u5230 _book \u76EE\u5F55 \u521B\u5EFA\u65B0\u5206\u652F\u5E76\u6E05\u7A7Agit\u8BB0\u5F55</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git symbolic-ref HEAD refs/heads/coding-pages 
rm .git/index
git clean -fdx 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7136\u540E\u6DFB\u52A0\u6240\u6709\u6587\u4EF6\uFF0C\u5E76\u63A8\u9001\u5230\u8FDC\u7A0B\u5206\u652F</p><ol start="6"><li>\u5230coding.net\u5F00\u542Fpages\u670D\u52A1</li></ol><h2 id="gitbook\u5B58\u5728\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#gitbook\u5B58\u5728\u7684\u95EE\u9898" aria-hidden="true">#</a> Gitbook\u5B58\u5728\u7684\u95EE\u9898</h2><p>\uFF0A\u641C\u7D22\u4F53\u9A8C\u8F83\u5DEE \uFF0D\u4E0D\u652F\u6301\u4E2D\u6587\u641C\u7D22 \uFF0D\u641C\u7D22\u6846\u8981\u70B9\u51FB\u4E00\u6B65\u624D\u4F1A\u51FA\u73B0</p><ul><li>\u7F51\u7AD9\u4EE3\u7801\u6CA1\u6709\u538B\u7F29</li></ul>`,17),p=n("\u53C2\u8003\uFF1A "),g={href:"https://cnodejs.org/topic/564558515e7412b625b8befc",target:"_blank",rel:"noopener noreferrer"},m=n("\u8F7B\u677E\u6253\u9020\u5C5E\u4E8E\u81EA\u5DF1\u7684\u51FA\u7248\u5E73\u53F0 - CNode\u6280\u672F\u793E\u533A"),u={href:"https://chrisniael.gitbooks.io/gitbook-documentation/content/format/configuration.html",target:"_blank",rel:"noopener noreferrer"},h=n("\u914D\u7F6E | GitBook\u6587\u6863\uFF08\u4E2D\u6587\u7248\uFF09");function x(_,k){const a=o("ExternalLinkIcon");return i(),l(r,null,[b,e("p",null,[p,e("a",g,[m,s(a)]),e("a",u,[h,s(a)])])],64)}var f=t(c,[["render",x],["__file","gitbook.html.vue"]]);export{f as default};
