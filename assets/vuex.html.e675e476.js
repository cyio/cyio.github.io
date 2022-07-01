import{_ as l,r as c,o as u,c as r,a as s,b as e,w as o,F as i,d as n,e as p}from"./app.e2525c08.js";const d={},h=s("h1",{id:"vuex",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuex","aria-hidden":"true"},"#"),n(" Vuex")],-1),_={class:"table-of-contents"},k=n("\u57FA\u7840"),v=n("\u6570\u636E\u6D41\u52A8\u8FC7\u7A0B"),g=n("\u4F55\u65F6\u4F7F\u7528"),m=n("\u72B6\u6001\u91CD\u7F6E"),f=n("\u8BA1\u7B97\u7F13\u5B58 vs Methods"),x=n("\u53D8\u5316\u68C0\u6D4B"),b=p(`<p>\u5B9A\u4F4D\uFF1A\u89E3\u51B3\u7EC4\u4EF6\u95F4\u7684\u6570\u636E\u5171\u4EAB</p><h2 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h2><ul><li>store: state getters mutations action module</li><li><code>store</code> \u72B6\u6001\u7684\u5BB9\u5668\uFF0C\u54CD\u5E94\u5F0F\uFF0C\u5F53\u5176\u4E2D\u72B6\u6001\u53D8\u5316\u65F6\uFF0C\u76F8\u5E94\u7EC4\u4EF6\u9AD8\u6548\u66F4\u65B0\u3002\u4E0D\u80FD\u76F4\u63A5\u4FEE\u6539\uFF08\u8D4B\u503C\uFF09\uFF0C\u53EA\u80FD\u663E\u5F0F\u5730\u901A\u8FC7<code>mutations</code>\u4E2D\u5B9A\u4E49\u7684\u65B9\u6CD5<code>commit</code></li><li>Mutations \u6B63\u5982\u5176\u540D\uFF0C\u53EA\u662F\u7528\u6765\u4FEE\u6539 state\uFF0C\u53EA\u80FD\u662F\u540C\u6B65\u7684\u7EAF\u51FD\u6570 Mutations \u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u4E8B\u4EF6\u7CFB\u7EDF\uFF0C\u7531\u4E8B\u4EF6\u540D\u79F0\u548C\u5904\u7406\u51FD\u6570\u6784\u6210 Actions \u901A\u8FC7 Mutations \u6765\u64CD\u4F5C state\uFF0C\u4F7F\u7528\u7075\u6D3B</li><li>\u8C03\u7528\uFF0C\u7B80\u5355\u5728\u8BA1\u7B97\u5C5E\u6027\u4E2D\u8FD4\u56DE\u5373\u53EF</li><li>\u4F18\u70B9\uFF0C\u66F4\u660E\u786E\u5730\u72B6\u6001\u8FFD\u8E2A</li></ul><h2 id="\u6570\u636E\u6D41\u52A8\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6D41\u52A8\u8FC7\u7A0B" aria-hidden="true">#</a> \u6570\u636E\u6D41\u52A8\u8FC7\u7A0B</h2><blockquote><p>5\u6B65\uFF1Adispatch \u6D3E\u53D1 -&gt; action \u52A8\u4F5C -&gt; mutations \u4FEE\u6539 -&gt; state \u72B6\u6001 -&gt; comp \u7EC4\u4EF6</p></blockquote><p><img src="https://vuex.vuejs.org/vuex.png" alt="vuex.png (701\xD7551)"></p><ul><li>\u5168\u5C40\u5B9E\u4F8B\u6CE8\u5165</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;App/&gt;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>\u5728<code>computed</code>\u4E2D\uFF0C\u7528\u5BF9\u8C61\u5C55\u5F00\u7B26\u5C55\u5F00 store \u4E2D\u7684\u5BF9\u8C61</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token string">&#39;userInfo&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre></div><h2 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a> \u4F55\u65F6\u4F7F\u7528</h2><ul><li>\u5148\u4E0D\u8981\u7528\uFF0C\u9700\u8981\u65F6\u5207\u6362</li><li>\u6570\u636E\u9700\u8981\u5728\u591A\u5904(\u5982 view \u4E4B\u95F4)\u4F7F\u7528\uFF1F \u5B98\u65B9\u6587\u6863\uFF0C\u591A\u4E2A\u5B9E\u4F8B\u95F4\u5171\u4EAB</li><li>\u54EA\u4E9B\u6570\u636E\uFF1F\u9996\u5148\u662F\u9694\u79BB\u5916\u90E8\u6570\u636E\uFF0C\u628A\u5916\u90E8\u6570\u636E\u903B\u8F91\u4E0E\u89C6\u56FE\u5185\u53D8\u91CF\u5206\u79BB</li><li>\u5176\u6B21\u662F\u6838\u5FC3\u6570\u636E\u6A21\u578B \u3001\u63A5\u53E3\uFF0C\u907F\u514D\u4E0E\u9875\u9762\u89C6\u56FE\u6DF7\u5728\u4E00\u8D77\uFF0C\u65B9\u4FBF\u7BA1\u7406</li><li>store \u662F\u4FDD\u6301\u5E94\u7528\u72B6\u6001\u7684\u5BB9\u5668\uFF0C\u6240\u4EE5\u91CC\u8FB9\u662F\u6709\u72B6\u6001\u7684\u6570\u636E</li><li>\u7EC4\u4EF6\u5E94\u8BE5\u53EA\u5448\u73B0\u6570\u636E\uFF0C\u4E0D\u5904\u7406\u6570\u636E</li><li>\u5728 React \u4E2D\u6709\u5BB9\u5668\u548C\u7EC4\u4EF6\u7684\u6982\u5FF5\u3002 \u5B83\u6CA1\u6709\u88AB Vue.js \u5F3A\u5236\u6267\u884C\u3002 \u5BB9\u5668\u53EA\u662F\u7EC4\u4EF6\uFF0C\u4F46\u5B83\u4EEC\u4E5F\u53EF\u4EE5\u4ECE store \u83B7\u53D6\u6570\u636E\u5E76\u4E0E store \u4EA4\u4E92\u3002 \u7EC4\u4EF6\u5C31\u5728\u90A3\u91CC\u4FDD\u5B58\u6570\u636E\u5E76\u6E32\u67D3\u5B83\u3002</li></ul><blockquote><p>\u6211\u4EEC\u5DF2\u5C06\u5E94\u7528\u7A0B\u5E8F\u5206\u4E3A\u4E09\u90E8\u5206\u3002 \u4E00\u90E8\u5206\u662F\u4E1A\u52A1\u903B\u8F91\uFF0C\u5B83\u5B58\u5728\u4E8E store \u7684 module \u5185\uFF0C\u6216\u8005\u66F4\u666E\u904D\u5730\u5B58\u50A8\u5728 store \u5185\uFF0C\u5BB9\u5668\u5143\u7D20\u8D1F\u8D23\u83B7\u53D6\u6570\u636E\u5E76\u5C06\u5176\u586B\u5145 \u5230\u5448\u73B0\u7EC4\u4EF6\uFF0C\u8FD9\u4E9B\u7EC4\u4EF6\u4EC5\u7528\u4E8E\u5448\u73B0\u6570\u636E\u3002 \u8FD9\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u5F88\u597D\u7684\u6A21\u5757\u5316\u5E76\u652F\u6301\u5355\u4E00\u8D23\u4EFB\u539F\u5219\u3002 \u5B83\u8FD8\u63D0\u4F9B\u4E86\u5F88\u597D\u7684\u53EF\u6D4B\u8BD5\u6027\uFF0C\u56E0\u4E3A\u4F60\u53EF\u4EE5\u81EA\u884C\u6D4B\u8BD5\u6B64\u7ED3 \u6784\u7684\u6BCF\u4E2A\u90E8\u5206\u3002 \u4ED6\u4EEC\u4E00\u8D77\u5C06\u5F62\u6210\u67D0\u79CD\u7EFC\u5408\u6D4B\u8BD5\u3002</p></blockquote>`,13),j={href:"https://blog.fundebug.com/2018/06/12/large-scale-vuex-application-structures/",target:"_blank",rel:"noopener noreferrer"},y=n("\u5927\u578B Vuex \u5E94\u7528\u7A0B\u5E8F\u7684\u76EE\u5F55\u7ED3\u6784 | Fundebug \u535A\u5BA2"),E={href:"https://juejin.im/post/5cb2dabde51d456e46603e02",target:"_blank",rel:"noopener noreferrer"},w=n("\u5982\u4F55\u6784\u5EFA Vue \u5927\u578B\u5E94\u7528 - \u6398\u91D1"),A={href:"https://github.com/bailicangdu/vue2-elm",target:"_blank",rel:"noopener noreferrer"},V=n("bailicangdu/vue2-elm: \u57FA\u4E8E vue2 + vuex \u6784\u5EFA\u4E00\u4E2A\u5177\u6709 45 \u4E2A\u9875\u9762\u7684\u5927\u578B\u5355\u9875\u9762\u5E94\u7528"),B=n("vuex modules mapGetters "),M={href:"https://github.com/igeligel/vuex-namespaced-module-structure/blob/master/src/views/Home.vue",target:"_blank",rel:"noopener noreferrer"},q=n("vuex-namespaced-module-structure/Home.vue at master \xB7 igeligel/vuex-namespaced-module-structure"),F=s("h2",{id:"\u72B6\u6001\u91CD\u7F6E",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u72B6\u6001\u91CD\u7F6E","aria-hidden":"true"},"#"),n(" \u72B6\u6001\u91CD\u7F6E")],-1),I=s("p",null,"\u5207\u6362\u8DEF\u7531\uFF0C\u7EC4\u4EF6\u9500\u6BC1\uFF0Cvuex \u4E0D\u9500\u6BC1\uFF0Cstate \u9700\u91CD\u7F6E",-1),L=s("p",null,"\u573A\u666F\uFF1A\u4E0E\u540E\u7AEF\u4EA4\u4E92\u903B\u8F91\u5199\u5230 vuex\uFF0C\u7EC4\u4EF6\u53EA\u8D1F\u8D23\u5BF9\u6570\u636E\u8FDB\u884C\u6E32\u67D3",-1),N=s("blockquote",null,[s("p",null,"\u5F00\u53D1\u4E1A\u52A1\u524D\u4F1A\u786E\u8BA4 vuex \u7684 root module\uFF0C\b \u7136\u540E\u6839\u636E\u5B50\u4E1A\u52A1\u529F\u80FD\u7EC6\u7C92\u5EA6\u5230 child module\u3002\u591A\u4E2A root module \u5207\u6362\u65F6\uFF0C\u82E5\u9700\u8981\u4FDD\u7559\u7684 state \u6570\u636E\uFF0C\u53EF\u4EE5\u901A\u8FC7 preserveState \u5C06\u5176\u5F52\u6863")],-1),C=s("blockquote",null,[s("p",null,"\u52A8\u6001\u88C5\u5378\u7684\u95EE\u9898\u7684\u662F\u5F53\u5F02\u6B65\u8C03\u7528 store \u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u5982\u679C\u6A21\u5757\u5DF2\u7ECF\u5378\u8F7D\u4E86\u7684\u8BDD\u4F1A\u62A5\u627E\u4E0D\u5230 action/mutation \u9519\u8BEF")],-1),Q={href:"https://github.com/vuejs/vuex-router-sync",target:"_blank",rel:"noopener noreferrer"},R=n("vuejs/vuex-router-sync: Effortlessly keep vue-router and vuex store in sync."),S=p(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token string">&#39;pushQuestions&#39;</span><span class="token punctuation">,</span> pushQuestionsModule<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">destroyed</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">unregisterModule</span><span class="token punctuation">(</span><span class="token string">&#39;pushQuestions&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1),$={href:"https://juejin.im/post/5a4c8da3f265da43085e6c64",target:"_blank",rel:"noopener noreferrer"},H=n("vuex \u95F2\u7F6E\u72B6\u6001\u91CD\u7F6E\u65B9\u6848 - \u6398\u91D1"),D=s("h2",{id:"\u8BA1\u7B97\u7F13\u5B58-vs-methods",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u8BA1\u7B97\u7F13\u5B58-vs-methods","aria-hidden":"true"},"#"),n(" \u8BA1\u7B97\u7F13\u5B58 vs Methods")],-1),G=s("p",null,"\u8BA1\u7B97\u5C5E\u6027\u662F\u57FA\u4E8E\u5B83\u7684\u4F9D\u8D56\u7F13\u5B58\uFF0C\u5982\u679C\u5B9A\u4E49\u7684\u4E0D\u662F\u54CD\u5E94\u5F0F\u4F9D\u8D56\uFF0C\u5C06\u4E0D\u4F1A\u66F4\u65B0 \u800C method \u5728\u9875\u9762\u91CD\u65B0\u6E32\u67D3\u65F6\uFF0C\u603B\u662F\u4F1A\u6267\u884C",-1),O={href:"https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"},T=n("\u8BA1\u7B97\u5C5E\u6027 - vue.js"),z=p(`<h2 id="\u53D8\u5316\u68C0\u6D4B" tabindex="-1"><a class="header-anchor" href="#\u53D8\u5316\u68C0\u6D4B" aria-hidden="true">#</a> \u53D8\u5316\u68C0\u6D4B</h2><p>\u8981\u8BA9\u65B0\u589E\u52A0\u7684\u503C\u652F\u6301\u54CD\u5E94\u66F4\u65B0\uFF0C\u9700\u6302\u5230 data \u5DF2\u5B58\u5728\u7684\u5C5E\u6027\u4E0A\uFF0C\u4E0D\u652F\u6301\u6DFB\u52A0\u65B0\u7684\u6839\u7EA7\u54CD\u5E94\u5F0F\u5C5E\u6027</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>someObject<span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre></div>`,3),J={href:"https://cn.vuejs.org/v2/guide/reactivity.html#%E5%A3%B0%E6%98%8E%E5%93%8D%E5%BA%94%E5%BC%8F%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"},K=n("\u6DF1\u5165\u54CD\u5E94\u5F0F\u539F\u7406 - vue.js");function P(U,W){const a=c("RouterLink"),t=c("ExternalLinkIcon");return u(),r(i,null,[h,s("nav",_,[s("ul",null,[s("li",null,[e(a,{to:"#\u57FA\u7840"},{default:o(()=>[k]),_:1})]),s("li",null,[e(a,{to:"#\u6570\u636E\u6D41\u52A8\u8FC7\u7A0B"},{default:o(()=>[v]),_:1})]),s("li",null,[e(a,{to:"#\u4F55\u65F6\u4F7F\u7528"},{default:o(()=>[g]),_:1})]),s("li",null,[e(a,{to:"#\u72B6\u6001\u91CD\u7F6E"},{default:o(()=>[m]),_:1})]),s("li",null,[e(a,{to:"#\u8BA1\u7B97\u7F13\u5B58-vs-methods"},{default:o(()=>[f]),_:1})]),s("li",null,[e(a,{to:"#\u53D8\u5316\u68C0\u6D4B"},{default:o(()=>[x]),_:1})])])]),b,s("p",null,[s("a",j,[y,e(t)])]),s("p",null,[s("a",E,[w,e(t)])]),s("p",null,[s("a",A,[V,e(t)])]),s("p",null,[B,s("a",M,[q,e(t)])]),F,I,L,N,C,s("p",null,[s("a",Q,[R,e(t)])]),S,s("p",null,[s("a",$,[H,e(t)])]),D,G,s("p",null,[s("a",O,[T,e(t)])]),z,s("p",null,[s("a",J,[K,e(t)])])],64)}var Y=l(d,[["render",P],["__file","vuex.html.vue"]]);export{Y as default};
