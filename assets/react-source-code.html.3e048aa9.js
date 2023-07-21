import{_ as n,e as a}from"./app.824beb48.js";const s={},t=a(`<h1 id="react-source-code" tabindex="-1"><a class="header-anchor" href="#react-source-code" aria-hidden="true">#</a> React source code</h1><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StrictMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRoot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-dom/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> rootElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">createRoot</span><span class="token punctuation">(</span>rootElement<span class="token punctuation">)</span><span class="token punctuation">;</span>

root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>StrictMode<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>StrictMode<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol><li>createRoot \u505A\u4E86\u4EC0\u4E48</li></ol><div class="language-text ext-text"><pre class="language-text"><code>createRoot
    createContainer
      root.current = uninitializedFiber;
        createFiber
            FiberNode
      uninitializedFiber.stateNode = root;
      initializeUpdateQueue(uninitializedFiber);
          fiber.updateQueue = queue;
</code></pre></div><ol start="2"><li>root.render \u505A\u4E86\u4EC0\u4E48</li><li>App \u5982\u4F55\u88AB render</li></ol>`,5);function e(o,p){return t}var r=n(s,[["render",e],["__file","react-source-code.html.vue"]]);export{r as default};
