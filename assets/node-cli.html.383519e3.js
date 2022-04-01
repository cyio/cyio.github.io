import{_ as o,r as p,o as c,c as l,a as n,b as e,F as i,e as t,d as s}from"./app.818741d3.js";const r={},u=t(`<h1 id="node-cli" tabindex="-1"><a class="header-anchor" href="#node-cli" aria-hidden="true">#</a> node-cli</h1><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;bin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rename-cn-file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bin/index.js&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm link
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>npm unpublish \u53EA\u80FD\u5728 72 \u5C0F\u65F6\u5185\uFF0C\u5426\u5219\u8981\u8054\u7CFB\u5BA2\u670D\u3002\u5728\u672C\u5730\u6D4B\u8BD5\u597D\u518D\u53D1\u5E03</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> userArgs <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,5),d={href:"https://javascriptplayground.com/node-command-line-tool/",target:"_blank",rel:"noopener noreferrer"},k=s("Writing Command Line Tools with Node"),m=n("h2",{id:"\u6D88\u606F\u683C\u5F0F\u5316",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6D88\u606F\u683C\u5F0F\u5316","aria-hidden":"true"},"#"),s(" \u6D88\u606F\u683C\u5F0F\u5316")],-1),b=n("li",null,"\u4F18\u5148\u7528\u6A21\u677F\u5B57\u7B26\u4E32\uFF0C\u7A7A\u683C\u63A7\u5236\u66F4\u51C6\u786E",-1),g=t(`\u6587\u5B57\u989C\u8272<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> FgGreen <span class="token operator">=</span> <span class="token string">&quot;\\x1b[32m&quot;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">prefixWithDate</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>FgGreen<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">hello world</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">prefixWithDate</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>now<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>msg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,2),h={href:"https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color",target:"_blank",rel:"noopener noreferrer"},_=s("How to change node.js's console font color? - Stack Overflow");function v(f,x){const a=p("ExternalLinkIcon");return c(),l(i,null,[u,n("p",null,[n("a",d,[k,e(a)])]),m,n("ul",null,[b,n("li",null,[g,n("a",h,[_,e(a)])])])],64)}var j=o(r,[["render",v],["__file","node-cli.html.vue"]]);export{j as default};
