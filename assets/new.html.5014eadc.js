import{_ as o,r as e,o as c,c as l,a as n,b as a,F as k,e as p,d as t}from"./app.bacf2a9d.js";const u={},r=p(`<h2 id="new" tabindex="-1"><a class="header-anchor" href="#new" aria-hidden="true">#</a> new</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9E\u9645\u4E0A</span>
<span class="token comment">// 1. \u521B\u5EFA\u7A7A\u5BF9\u8C61</span>
<span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2. \u539F\u578B\u94FE\u7EE7\u627F</span>
o<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token comment">// 3. \u6267\u884C\u6784\u9020\u5668\u51FD\u6570\uFF0C\u65B0\u5BF9\u8C61\u4F5C\u4E3A this</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token function">Foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 4. \u8FD4\u56DE\u65B0\u5BF9\u8C61\uFF0C\u5982\u679C\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u4E86\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5305\u62EC\u4E8C\u7EA7\u7C7B\u578B</span>
res <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> res <span class="token operator">:</span> o<span class="token punctuation">;</span>
</code></pre></div><p>\u624B\u5199</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// new Fn()</span>
<span class="token comment">// 0. input=fn, output=object  1. new obj 2. proto 3. new obj as this call 4. return</span>

<span class="token keyword">function</span> <span class="token function">myNew</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> fn<span class="token punctuation">.</span>prototype
  <span class="token comment">// let obj = Object.create(fn.prototype)</span>
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
  <span class="token keyword">return</span> ret <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> ret <span class="token operator">:</span> obj
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">hi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&#39;jack&#39;</span>
  <span class="token comment">// return { b: &#39;d&#39;}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token function">myNew</span><span class="token punctuation">(</span>hi<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>a<span class="token punctuation">,</span> r<span class="token punctuation">.</span>b<span class="token punctuation">)</span>
</code></pre></div><h2 id="object-create" tabindex="-1"><a class="header-anchor" href="#object-create" aria-hidden="true">#</a> Object.create</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">aa</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

b<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> a <span class="token comment">// true</span>

<span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> o
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><ol><li>Object \u6709\u5C5E\u6027__proto__\uFF0C\u6307\u5411\u8BE5\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u3002</li><li>Function \u9664\u4E86\u6709\u5C5E\u6027__proto__\uFF0C\u8FD8\u6709\u5C5E\u6027prototype\uFF0Cprototype \u6307\u5411\u8BE5\u65B9\u6CD5\u7684\u539F\u578B\u5BF9\u8C61\u3002</li></ol><p>\u8003\u5BDF\u6784\u9020\u51FD\u6570\u539F\u578B\u7EE7\u627F</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre></div>`,10),i={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",target:"_blank",rel:"noopener noreferrer"},d=t("Inheritance and the prototype chain - JavaScript | MDN"),m={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new",target:"_blank",rel:"noopener noreferrer"},w=t("new operator - JavaScript | MDN"),y=p(`<h2 id="\u6539\u9020-person-\u4F7F\u5176\u5728\u975Enew\u8C03\u7528\u65F6\u629B\u51FA\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u6539\u9020-person-\u4F7F\u5176\u5728\u975Enew\u8C03\u7528\u65F6\u629B\u51FA\u9519\u8BEF" aria-hidden="true">#</a> \u6539\u9020 Person \u4F7F\u5176\u5728\u975Enew\u8C03\u7528\u65F6\u629B\u51FA\u9519\u8BEF</h2><p>\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539 Person \u7C7B\u7684\u6784\u9020\u51FD\u6570\u5B9E\u73B0</p><p>\u4EE5\u4E0B\u662F\u4E00\u4E2A\u53EF\u80FD\u7684\u5B9E\u73B0\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Person</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Person must be called with new&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u91CC\u4F7F\u7528\u4E86 instanceof \u8FD0\u7B97\u7B26\u6765\u5224\u65AD this \u662F\u5426\u662F Person \u7684\u5B9E\u4F8B\u3002\u5982\u679C\u4E0D\u662F\uFF0C\u5219\u8BF4\u660E\u6CA1\u6709\u4F7F\u7528 new \u5173\u952E\u5B57\u521B\u5EFA\u5BF9\u8C61\uFF0C\u5E94\u8BE5\u629B\u51FA\u9519\u8BEF\u3002\u5982\u679C\u662F\uFF0C\u5219\u6B63\u5E38\u6267\u884C\u6784\u9020\u51FD\u6570\u7684\u903B\u8F91\u3002</p>`,5);function f(_,g){const s=e("ExternalLinkIcon");return c(),l(k,null,[r,n("p",null,[n("a",i,[d,a(s)]),n("a",m,[w,a(s)])]),y],64)}var b=o(u,[["render",f],["__file","new.html.vue"]]);export{b as default};
