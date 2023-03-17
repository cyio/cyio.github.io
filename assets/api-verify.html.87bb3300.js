import{_ as n,e as s}from"./app.de511a45.js";const a={},p=s(`<h2 id="\u63A5\u53E3\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u9A8C\u8BC1" aria-hidden="true">#</a> \u63A5\u53E3\u9A8C\u8BC1</h2><p>Node\u63A5\u53E3\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\u63A5\u53E3\u9A8C\u8BC1\uFF1A</p><ol><li><p>\u5BA2\u6237\u7AEF\u8BF7\u6C42\u63A5\u53E3\u65F6\uFF0C\u9700\u8981\u5728\u8BF7\u6C42\u5934\u6216\u8BF7\u6C42\u53C2\u6570\u4E2D\u643A\u5E26\u7B7E\u540D\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1Atimestamp\u3001nonce\uFF08\u968F\u673A\u6570\uFF09\u3001signature\u7B49\u3002</p></li><li><p>\u670D\u52A1\u5668\u7AEF\u63A5\u6536\u5230\u8BF7\u6C42\u540E\uFF0C\u9996\u5148\u9700\u8981\u9A8C\u8BC1\u65F6\u95F4\u6233\u662F\u5426\u8FC7\u671F\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E2A\u65F6\u95F4\u6233\u8FC7\u671F\u65F6\u95F4\uFF0C\u8D85\u8FC7\u8BE5\u65F6\u95F4\u5219\u8BA4\u4E3A\u8BF7\u6C42\u975E\u6CD5\u3002</p></li><li><p>\u63A5\u7740\uFF0C\u9700\u8981\u9A8C\u8BC1nonce\u662F\u5426\u552F\u4E00\uFF0C\u53EF\u4EE5\u5C06nonce\u5B58\u5165\u6570\u636E\u5E93\u6216\u7F13\u5B58\u4E2D\uFF0C\u6BCF\u6B21\u63A5\u6536\u5230\u8BF7\u6C42\u65F6\u5148\u67E5\u8BE2\u662F\u5426\u5DF2\u5B58\u5728\u8BE5nonce\uFF0C\u5982\u679C\u5B58\u5728\u5219\u8BA4\u4E3A\u8BF7\u6C42\u975E\u6CD5\u3002</p></li><li><p>\u6700\u540E\uFF0C\u9700\u8981\u9A8C\u8BC1signature\u662F\u5426\u6B63\u786E\uFF0C\u53EF\u4EE5\u4F7F\u7528\u52A0\u5BC6\u7B97\u6CD5\u5BF9\u8BF7\u6C42\u53C2\u6570\u8FDB\u884C\u52A0\u5BC6\uFF0C\u7136\u540E\u4E0E\u8BF7\u6C42\u5934\u6216\u53C2\u6570\u4E2D\u7684signature\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5982\u679C\u4E00\u81F4\u5219\u8BA4\u4E3A\u8BF7\u6C42\u5408\u6CD5\u3002</p></li></ol><p>\u4EE5\u4E0A\u662F\u5E38\u89C1\u7684\u7B7E\u540D\u9A8C\u8BC1\u6D41\u7A0B\uFF0C\u5177\u4F53\u5B9E\u73B0\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u8C03\u6574\u3002</p><h2 id="\u7B7E\u540D\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u7B7E\u540D\u9A8C\u8BC1" aria-hidden="true">#</a> \u7B7E\u540D\u9A8C\u8BC1</h2><p>\u5BF9\u4E8E Node.js \u670D\u52A1\u63A5\u53E3\u7684\u7B7E\u540D\u9A8C\u8BC1\uFF0C\u4E00\u79CD\u5E38\u89C1\u7684\u505A\u6CD5\u662F\u901A\u8FC7 HMAC \u7B97\u6CD5\u5BF9\u8BF7\u6C42\u8FDB\u884C\u7B7E\u540D\u5E76\u8FDB\u884C\u6BD4\u5BF9\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u57FA\u672C\u7684\u7B7E\u540D\u9A8C\u8BC1\u8FC7\u7A0B\uFF1A</p><ol><li>\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u5171\u4EAB\u4E00\u4E2A\u5BC6\u94A5\uFF0C\u7528\u4E8E\u52A0\u5BC6\u548C\u89E3\u5BC6\u7B7E\u540D\u3002</li><li>\u5BA2\u6237\u7AEF\u53D1\u9001\u8BF7\u6C42\u65F6\uFF0C\u5728\u8BF7\u6C42\u5934\u6216\u8BF7\u6C42\u53C2\u6570\u4E2D\u9644\u52A0\u7B7E\u540D\u4FE1\u606F\uFF0C\u4F8B\u5982\u5C06\u7B7E\u540D\u4FE1\u606F\u653E\u5728\u8BF7\u6C42\u5934\u4E2D\u7684 <code>Authorization</code> \u5B57\u6BB5\u4E2D\u3002</li><li>\u670D\u52A1\u7AEF\u63A5\u6536\u5230\u8BF7\u6C42\u540E\uFF0C\u4ECE\u8BF7\u6C42\u5934\u6216\u8BF7\u6C42\u53C2\u6570\u4E2D\u83B7\u53D6\u7B7E\u540D\u4FE1\u606F\u3002</li><li>\u670D\u52A1\u7AEF\u4F7F\u7528\u5171\u4EAB\u5BC6\u94A5\u5BF9\u8BF7\u6C42\u7684\u5185\u5BB9\u8FDB\u884C\u7B7E\u540D\uFF0C\u5F97\u5230\u7B7E\u540D\u7ED3\u679C\u3002</li><li>\u670D\u52A1\u7AEF\u5C06\u5F97\u5230\u7684\u7B7E\u540D\u7ED3\u679C\u4E0E\u5BA2\u6237\u7AEF\u4F20\u6765\u7684\u7B7E\u540D\u4FE1\u606F\u8FDB\u884C\u6BD4\u5BF9\uFF0C\u5982\u679C\u4E00\u81F4\u5219\u8BA4\u4E3A\u8BE5\u8BF7\u6C42\u662F\u5408\u6CD5\u7684\uFF0C\u5426\u5219\u62D2\u7EDD\u8BE5\u8BF7\u6C42\u3002</li></ol><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4F7F\u7528 Node.js \u5B9E\u73B0 HMAC \u7B7E\u540D\u9A8C\u8BC1\u7684\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> crypto <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;crypto&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9A\u4E49\u5171\u4EAB\u5BC6\u94A5</span>
<span class="token keyword">const</span> secretKey <span class="token operator">=</span> <span class="token string">&#39;my_secret_key&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u751F\u6210\u7B7E\u540D\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">generateSignature</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> hmac <span class="token operator">=</span> crypto<span class="token punctuation">.</span><span class="token function">createHmac</span><span class="token punctuation">(</span><span class="token string">&#39;sha256&#39;</span><span class="token punctuation">,</span> secretKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
  hmac<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> hmac<span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&#39;hex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7B7E\u540D\u9A8C\u8BC1\u4E2D\u95F4\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">signatureMiddleware</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> signature <span class="token operator">=</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>authorization<span class="token punctuation">;</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> req<span class="token punctuation">.</span>method <span class="token operator">+</span> req<span class="token punctuation">.</span>path<span class="token punctuation">;</span>
  <span class="token keyword">const</span> expectedSignature <span class="token operator">=</span> <span class="token function">generateSignature</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>signature <span class="token operator">!==</span> expectedSignature<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Unauthorized&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528\u4E2D\u95F4\u4EF6</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>signatureMiddleware<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C<code>generateSignature</code> \u51FD\u6570\u4F7F\u7528\u4E86 Node.js \u81EA\u5E26\u7684 <code>crypto</code> \u6A21\u5757\u4E2D\u7684 <code>createHmac</code> \u65B9\u6CD5\u751F\u6210 HMAC \u7B7E\u540D\uFF0C\u4F7F\u7528\u5171\u4EAB\u5BC6\u94A5\u5BF9\u8BF7\u6C42\u7684\u65B9\u6CD5\u548C\u8DEF\u5F84\u8FDB\u884C\u7B7E\u540D\uFF0C\u5E76\u8FD4\u56DE\u7B7E\u540D\u7ED3\u679C\u3002<code>signatureMiddleware</code> \u662F\u4E00\u4E2A\u4E2D\u95F4\u4EF6\uFF0C\u7528\u4E8E\u9A8C\u8BC1\u8BF7\u6C42\u7684\u7B7E\u540D\u662F\u5426\u5408\u6CD5\uFF0C\u5982\u679C\u5408\u6CD5\u5219\u8C03\u7528 <code>next()</code> \u7EE7\u7EED\u5904\u7406\uFF0C\u5426\u5219\u8FD4\u56DE <code>401</code> \u9519\u8BEF\u3002\u5728\u5E94\u7528\u4E2D\u4F7F\u7528 <code>app.use(signatureMiddleware)</code> \u5C06\u8BE5\u4E2D\u95F4\u4EF6\u5E94\u7528\u5230\u6240\u6709\u8BF7\u6C42\u4E0A\u3002</p><h2 id="\u5171\u4EAB\u5BC6\u94A5\u5B89\u5168\u6027" tabindex="-1"><a class="header-anchor" href="#\u5171\u4EAB\u5BC6\u94A5\u5B89\u5168\u6027" aria-hidden="true">#</a> \u5171\u4EAB\u5BC6\u94A5\u5B89\u5168\u6027</h2><p>\u5BA2\u6237\u7AEF\u4FDD\u8BC1\u5BC6\u94A5\u7684\u5B89\u5168\u6027\u662F\u4FDD\u8BC1\u7B7E\u540D\u9A8C\u8BC1\u7684\u91CD\u8981\u524D\u63D0\u3002\u56E0\u4E3A\u5982\u679C\u5BC6\u94A5\u6CC4\u9732\uFF0C\u653B\u51FB\u8005\u53EF\u4EE5\u4F7F\u7528\u8BE5\u5BC6\u94A5\u751F\u6210\u4EFB\u4F55\u8BF7\u6C42\u7684\u7B7E\u540D\uFF0C\u4ECE\u800C\u7ED5\u8FC7\u7B7E\u540D\u9A8C\u8BC1\u673A\u5236\uFF0C\u8FDB\u884C\u672A\u7ECF\u6388\u6743\u7684\u8BBF\u95EE\u6216\u64CD\u4F5C\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E9B\u5E38\u89C1\u7684\u4FDD\u8BC1\u5BC6\u94A5\u5B89\u5168\u6027\u7684\u65B9\u6CD5\uFF1A</p><ol><li><p>\u4E0D\u5728\u5BA2\u6237\u7AEF\u5B58\u50A8\u5BC6\u94A5\uFF1A\u5BA2\u6237\u7AEF\u4E0D\u5E94\u8BE5\u5C06\u5BC6\u94A5\u5B58\u50A8\u5728\u672C\u5730\uFF0C\u53EF\u4EE5\u5C06\u5BC6\u94A5\u5B58\u50A8\u5728\u670D\u52A1\u5668\u7AEF\u6216\u5176\u4ED6\u5B89\u5168\u7684\u5730\u65B9\uFF0C\u5BA2\u6237\u7AEF\u53EA\u9700\u8981\u5728\u9700\u8981\u53D1\u9001\u8BF7\u6C42\u65F6\u4ECE\u670D\u52A1\u5668\u7AEF\u83B7\u53D6\u5BC6\u94A5\u3002</p></li><li><p>\u4F7F\u7528\u52A0\u5BC6\u5B58\u50A8\u5BC6\u94A5\uFF1A\u5982\u679C\u5FC5\u987B\u5728\u5BA2\u6237\u7AEF\u5B58\u50A8\u5BC6\u94A5\uFF0C\u53EF\u4EE5\u4F7F\u7528\u52A0\u5BC6\u5B58\u50A8\u7684\u65B9\u5F0F\uFF0C\u4F8B\u5982\u4F7F\u7528 iOS \u4E2D\u7684 Keychain \u6216 Android \u4E2D\u7684 Keystore \u5C06\u5BC6\u94A5\u52A0\u5BC6\u5B58\u50A8\u5728\u672C\u5730\uFF0C\u53EA\u6709\u7ECF\u8FC7\u8EAB\u4EFD\u9A8C\u8BC1\u7684\u7528\u6237\u624D\u80FD\u89E3\u5BC6\u4F7F\u7528\u5BC6\u94A5\u3002</p></li><li><p>\u4F7F\u7528\u77ED\u671F\u5BC6\u94A5\uFF1A\u53EF\u4EE5\u4F7F\u7528\u4E00\u6B21\u6027\u7684\u77ED\u671F\u5BC6\u94A5\uFF0C\u6BCF\u6B21\u8BF7\u6C42\u4F7F\u7528\u4E0D\u540C\u7684\u5BC6\u94A5\uFF0C\u9632\u6B62\u653B\u51FB\u8005\u901A\u8FC7\u957F\u671F\u83B7\u5F97\u5BC6\u94A5\u540E\u8FDB\u884C\u6076\u610F\u64CD\u4F5C\u3002</p></li><li><p>\u4F7F\u7528\u516C\u94A5\u52A0\u5BC6\uFF1A\u5BA2\u6237\u7AEF\u53EF\u4EE5\u4F7F\u7528\u516C\u94A5\u52A0\u5BC6\u8BF7\u6C42\u4FE1\u606F\uFF0C\u670D\u52A1\u5668\u7AEF\u4F7F\u7528\u79C1\u94A5\u89E3\u5BC6\uFF0C\u4ECE\u800C\u9632\u6B62\u653B\u51FB\u8005\u7A83\u53D6\u5BC6\u94A5\u5E76\u4F7F\u7528\u8BE5\u5BC6\u94A5\u751F\u6210\u7B7E\u540D\u3002</p></li><li><p>\u5BF9\u5BC6\u94A5\u8FDB\u884C\u4FDD\u62A4\uFF1A\u5BA2\u6237\u7AEF\u53EF\u4EE5\u4F7F\u7528\u786C\u4EF6\u5B89\u5168\u6A21\u5757\uFF08HSM\uFF09\u6216\u5B89\u5168\u5143\u4EF6\uFF08TEE\uFF09\u7B49\u7269\u7406\u8BBE\u5907\u4FDD\u62A4\u5BC6\u94A5\uFF0C\u8FD9\u4E9B\u8BBE\u5907\u63D0\u4F9B\u4E86\u5B89\u5168\u7684\u9694\u79BB\u548C\u5B58\u50A8\uFF0C\u9632\u6B62\u653B\u51FB\u8005\u4ECE\u8F6F\u4EF6\u5C42\u9762\u7A83\u53D6\u5BC6\u94A5\u3002</p></li></ol><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4EE5\u4E0A\u65B9\u6CD5\u90FD\u4E0D\u662F\u7EDD\u5BF9\u5B89\u5168\u7684\uFF0C\u653B\u51FB\u8005\u603B\u662F\u6709\u53EF\u80FD\u7A81\u7834\u8FD9\u4E9B\u4FDD\u62A4\u63AA\u65BD\uFF0C\u56E0\u6B64\u5728\u4FDD\u8BC1\u5BC6\u94A5\u5B89\u5168\u6027\u7684\u540C\u65F6\uFF0C\u8FD8\u9700\u8981\u5B9E\u65BD\u5176\u4ED6\u7684\u5B89\u5168\u63AA\u65BD\uFF0C\u4F8B\u5982\u9650\u5236\u8BF7\u6C42\u9891\u7387\u3001\u4F7F\u7528 SSL/TLS \u52A0\u5BC6\u901A\u4FE1\u7B49\u3002</p>`,15);function e(t,c){return p}var l=n(a,[["render",e],["__file","api-verify.html.vue"]]);export{l as default};