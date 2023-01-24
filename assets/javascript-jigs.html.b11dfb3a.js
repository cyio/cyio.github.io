import{_ as p,r as t,o,c as e,a as n,b as c,F as u,d as s,e as l}from"./app.2f4e902b.js";const r={},i=n("h1",{id:"javascript\u6A21\u5177-\u7C97\u8BD1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#javascript\u6A21\u5177-\u7C97\u8BD1","aria-hidden":"true"},"#"),s(" JavaScript\u6A21\u5177[\u7C97\u8BD1]")],-1),k=s("\u539F\u6587\uFF1A"),b={href:"http://markdaggett.com/blog/2013/02/18/javascript-jigs/",target:"_blank",rel:"noopener noreferrer"},m=s("JavaScript Jigs - Mark Daggett's Blog"),d=l(`<blockquote><p>jigs: \u6A21\u5177\uFF0C\u5939\u5177</p></blockquote><p>\u5728\u67D0\u4E66\u4E2D\uFF0C\u4F5C\u8005\u7528\u6728\u5320\u7684\u6A21\u5177\u6765\u5F62\u5BB9\u806A\u660E\u7684\u7A0B\u5E8F\u5458\u521B\u5EFA\u7684\u53EF\u590D\u7528\u7684\u6A21\u677F\u6216\u4EE3\u7801\u751F\u6210\u5668\u3002</p><blockquote><p>\u6728\u5320\u7528\u6A21\u5177\uFF0C\u5904\u7406\u4E86\u590D\u6742\u6027\u4E14\u51CF\u5C11\u4E86\u51FA\u9519\u3002\u624B\u827A\u4EBA\u53EF\u4EE5\u66F4\u591A\u5730\u5173\u6CE8\u8D28\u91CF\u3002</p></blockquote><p>\u8981\u6210\u4E3A\u6A21\u5177\uFF0C\u8FD9\u4E2A\u89E3\u51B3\u65B9\u6848\u9700\u8981\u662F\u9AD8\u5EA6\u4E13\u6CE8\uFF0C\u5E76\u64C5\u957F\u5904\u7406\u67D0\u9879\u4EFB\u52A1\u3002 \u5927\u591A\u6570\u5E93\u4E00\u5F00\u59CB\u5C31\u662F\u4E00\u4E9B\u6A21\u5177\u7684\u96C6\u5408\u3002</p><h2 id="\u81EA\u6267\u884C\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u81EA\u6267\u884C\u51FD\u6570" aria-hidden="true">#</a> \u81EA\u6267\u884C\u51FD\u6570</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">;</span><span class="token operator">!</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">;</span><span class="token operator">-</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">;</span><span class="token operator">+</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">;</span><span class="token operator">~</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Not Recommended</span>
<span class="token punctuation">;</span><span class="token keyword">void</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Not Recommended</span>
<span class="token punctuation">;</span><span class="token keyword">delete</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757" aria-hidden="true">#</a> \u6A21\u5757</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token operator">!</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">global</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> Module <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// Mostly Private Variable</span>
    <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token string">&#39;secret&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>

      <span class="token literal-property property">bool</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">string</span><span class="token operator">:</span> <span class="token string">&#39;a string&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">array</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">object</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&quot;en-Us&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">getData</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">setData</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>data <span class="token operator">=</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// expose our module to the global object</span>
  global<span class="token punctuation">.</span>Module <span class="token operator">=</span> Module<span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u8FD9\u4E2A\u6A21\u5757\u6CE8\u610F\u4E09\u70B9\uFF1A</p><ol><li>\u5B83\u662F\u4E2A\u95ED\u5305\u51FD\u6570</li><li>\u521D\u59CB\u5316\u6DFB\u52A0\u5230\u5168\u5C40\u547D\u540D\u7A7A\u95F4</li><li>\u53EF\u901A\u8FC7getter\u548Csetter\u8BBF\u95EE\u79C1\u6709\u53D8\u91CFdata</li></ol><p>\u4E0B\u9762\u662F\u4E24\u6BB5\u8FD8\u770B\u4E0D\u61C2\u7684\u5199\u6CD5\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// A string representation of an a object similar to what you might get with JSON.</span>
<span class="token keyword">var</span> dataString <span class="token operator">=</span> <span class="token string">&#39;{&quot;foo&quot;:&quot;bar&quot;}&#39;</span><span class="token punctuation">;</span>

<span class="token punctuation">;</span><span class="token operator">!</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">global<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token comment">// the variable name provided is replaced with the evaluated code.</span>
    global<span class="token punctuation">[</span>data<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token string">&quot;return&quot;</span> <span class="token operator">+</span> global<span class="token punctuation">[</span>data<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&quot;dataString&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// dataString is now Object {foo: &quot;bar&quot;}</span>
</code></pre></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">$</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  $<span class="token punctuation">.</span><span class="token function-variable function">subscribe</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    o<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  $<span class="token punctuation">.</span><span class="token function-variable function">unsubscribe</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    o<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  $<span class="token punctuation">.</span><span class="token function-variable function">publish</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    o<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">(</span>jQuery<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Usage Examples</span>
<span class="token comment">// Creates a &quot;named&quot; logging function.</span>

<span class="token keyword">function</span> <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// Skip the first argument (event object) but log the name and other args.</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Subscribe to the &quot;foo&quot; topic (bind to the &quot;foo&quot; event, no namespace).</span>
$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Subscribe to the &quot;foo.bar&quot; topic (bind to the &quot;foo&quot; event, &quot;bar&quot; namespace).</span>
$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&#39;foo.bar&#39;</span><span class="token punctuation">,</span> <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token string">&#39;foo.bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
 * logs:
 * foo 1 2
 * foo.bar 1 2
 * foo.baz 1 2
 */</span>
$<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
 * logs:
 * foo.bar 3 4
 */</span>
$<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&#39;foo.bar&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div>`,13);function g(f,v){const a=t("ExternalLinkIcon");return o(),e(u,null,[i,n("p",null,[k,n("a",b,[m,c(a)])]),d],64)}var y=p(r,[["render",g],["__file","javascript-jigs.html.vue"]]);export{y as default};
