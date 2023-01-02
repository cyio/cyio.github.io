import{_ as e,e as n}from"./app.53df0352.js";const a={},s=n(`<h1 id="chrome-recorder" tabindex="-1"><a class="header-anchor" href="#chrome-recorder" aria-hidden="true">#</a> chrome-recorder</h1><h2 id="\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u51FA" aria-hidden="true">#</a> \u5BFC\u51FA</h2><p>\u524D\u4E24\u9879\u53EF\u5BFC\u56DE\uFF0C\u6700\u540E\u4E00\u9879 <strong>Puppeteer script</strong> \u4E0D\u80FD\u5BFC\u56DE</p><p>\u652F\u6301\u901A\u8FC7\u63D2\u4EF6\u8F6C\u6362\u6210\u522B\u7684\u5DE5\u5177\u811A\u672C\uFF0C\u5982 Cypress</p><p>\u964D\u901F\u4E0E\u65AD\u70B9</p><p>\u6B65\u9AA4\u7F16\u8F91</p><p>https://developer.chrome.com/docs/devtools/recorder/reference/##edit-steps</p><div class="language-text ext-text"><pre class="language-text"><code>npx @puppeteer/replay recording.json
</code></pre></div><p>\u7F16\u7A0B\u5F15\u5165</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> runner <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createRunner</span><span class="token punctuation">(</span>recording<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> runner<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>bug\uFF0C\u91CD\u542F\u6D4F\u89C8\u5668\u89E3\u51B3</p><p>https://stackoverflow.com/questions/70707622/no-frame-for-given-id-found-in-puppetter</p>`,12);function r(t,p){return s}var c=e(a,[["render",r],["__file","chrome-recorder.html.vue"]]);export{c as default};
