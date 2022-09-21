import{_ as t,r as o,o as e,c,a as n,b as a,F as l,e as k,d as p}from"./app.d39319ce.js";const u={},r=k(`<h1 id="new" tabindex="-1"><a class="header-anchor" href="#new" aria-hidden="true">#</a> new</h1><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9E\u9645\u4E0A</span>
<span class="token comment">// 1. \u521B\u5EFA\u7A7A\u5BF9\u8C61</span>
<span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2. \u539F\u578B\u94FE\u7EE7\u627F</span>
o<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token comment">// 3. \u6267\u884C\u6784\u9020\u5668\u51FD\u6570\uFF0C\u65B0\u5BF9\u8C61\u4F5C\u4E3A this</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token function">Foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 4. \u8FD4\u56DE\u5904\u7406\uFF0C\u5982\u679C\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u4E86\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5305\u62EC\u4E8C\u7EA7\u7C7B\u578B</span>
res <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> res <span class="token operator">:</span> o<span class="token punctuation">;</span>
</code></pre></div><p>\u624B\u5199</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// new Fn()</span>
<span class="token comment">// 0. input=fn, output=object  1. new obj 2. proto 3. new obj as this call 4. return</span>

<span class="token keyword">function</span> <span class="token function">myNew</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// let obj = new Object()</span>
  <span class="token comment">// obj.__proto__ = fn.prototype</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>fn<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
  <span class="token keyword">let</span> fnRet <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
  <span class="token keyword">return</span> fnRet <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> fnRet <span class="token operator">:</span> obj
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">hi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&#39;jack&#39;</span>
  <span class="token comment">// return { b: &#39;d&#39;}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token function">myNew</span><span class="token punctuation">(</span>hi<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>a<span class="token punctuation">,</span> r<span class="token punctuation">.</span>b<span class="token punctuation">)</span>
</code></pre></div><p>create</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">aa</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

b<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> a <span class="token comment">// true</span>
</code></pre></div><ol><li>\u5BF9\u8C61\u6709\u5C5E\u6027__proto__,\u6307\u5411\u8BE5\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u3002</li><li>\u65B9\u6CD5\u9664\u4E86\u6709\u5C5E\u6027__proto__,\u8FD8\u6709\u5C5E\u6027prototype\uFF0Cprototype\u6307\u5411\u8BE5\u65B9\u6CD5\u7684\u539F\u578B\u5BF9\u8C61\u3002</li></ol><p>\u8003\u5BDF\u6784\u9020\u51FD\u6570\u539F\u578B\u7EE7\u627F</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token comment">// \u5982\u679C\u8BE5\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u5BF9\u8C61\uFF0C\u5219\u8FD4\u56DEthis\u3002</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&#39;x&#39;</span>
<span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token string">&#39;y&#39;</span>
<span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token string">&#39;z&#39;</span>

<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>b<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>c<span class="token punctuation">)</span>
<span class="token comment">// print: undefined b c</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span> <span class="token comment">// \u540E\u6267\u884C\uFF0C\u8986\u76D6</span>
<span class="token punctuation">}</span>

<span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&#39;x&#39;</span> <span class="token comment">// \u5148\u6267\u884C</span>
<span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token string">&#39;y&#39;</span>
<span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token string">&#39;z&#39;</span>

<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>b<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>c<span class="token punctuation">)</span>
<span class="token comment">// print: a y z</span>
</code></pre></div>`,10),i={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",target:"_blank",rel:"noopener noreferrer"},d=p("Inheritance and the prototype chain - JavaScript | MDN"),m={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new",target:"_blank",rel:"noopener noreferrer"},f=p("new operator - JavaScript | MDN");function _(y,g){const s=o("ExternalLinkIcon");return e(),c(l,null,[r,n("p",null,[n("a",i,[d,a(s)]),n("a",m,[f,a(s)])])],64)}var b=t(u,[["render",_],["__file","new.html.vue"]]);export{b as default};
