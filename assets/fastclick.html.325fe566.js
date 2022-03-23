import{r as e,o as a,c as s,a as n,F as t,d as i,b as o}from"./app.31fc93bc.js";const r={},l=i('<h1 id="fast-click" tabindex="-1"><a class="header-anchor" href="#fast-click" aria-hidden="true">#</a> fast click</h1><h2 id="_300ms-延时问题" tabindex="-1"><a class="header-anchor" href="#_300ms-延时问题" aria-hidden="true">#</a> 300ms 延时问题</h2><p>在移动端的 web 上存在这样一个问题：你给某个元素绑定上 click 事件，当你点击这个元素的时候，事件将在 300ms 之后才得以执行</p><p>300ms 来源，在移动设备访问 PC 页面需要放大，为了识别两次 tap 缩放手势，而给点击事件增加的延时。</p><p>Android Chrome 对于设置<code>width=device-width</code>即专为移动设计的页面，则不会启用 300ms 延迟。</p><h2 id="fastclick" tabindex="-1"><a class="header-anchor" href="#fastclick" aria-hidden="true">#</a> fastclick</h2><p>副作用较多</p><p>在 chrome 上调试的时候，无法点击，解决是切到 android 设备来调试</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> FastClick <span class="token keyword">from</span> <span class="token string">&#39;fastclick&#39;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;ontouchstart&#39;</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  FastClick<span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="hammer-time" tabindex="-1"><a class="header-anchor" href="#hammer-time" aria-hidden="true">#</a> hammer-time</h2><p>手势插件，可兼用于替代 fastclick</p>',11),c={href:"https://github.com/youngwind/blog/issues/77",target:"_blank",rel:"noopener noreferrer"},d=o("利用 hammer.js 解决 300ms 延时 · Issue #77 · youngwind/blog"),p={href:"https://github.com/vuejs/vue-touch/tree/next",target:"_blank",rel:"noopener noreferrer"},u=o("vuejs/vue-touch at next"),h=o(" 在 vue 中，用 v-touch 指令替代 v-click，以解决 300ms 问题"),m={id:"github-meckodo-vue-tap-vue-的-tap-手势插件",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#github-meckodo-vue-tap-vue-的-tap-手势插件","aria-hidden":"true"},"#",-1),k=o(),g={href:"https://github.com/MeCKodo/vue-tap",target:"_blank",rel:"noopener noreferrer"},f=o("GitHub - MeCKodo/vue-tap: vue 的 tap 手势插件"),v=n("p",null,"可以规避 fastclick 跟 vue click 事件冲突的问题.",-1),w=n("h2",{id:"docs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docs","aria-hidden":"true"},"#"),o(" docs")],-1),y=n("p",null,"Click is delayed on mobile devices for double tap A major problem with touch on mobile devices today is that the click event is generally delayed by ~300ms in order to recognize the double tap to zoom gesture without sending click events on double tap. The generally accepted solution is to use a fast-click library (such as FTLabs FastClick) which generates ‘click’ events on touchend. This has a number of disadvantages including:",-1),j=n("ul",null,[n("li",null,"Threaded scrolling is disabled"),n("li",null,"No way to get touch adjustment"),n("li",null,"No way to get tap supression (i.e. a tap while a fling is in progress should stop the fling, not send a click event). A Netflix engineer has raised this as a major problem for them")],-1),x=n("p",null,"We’ve improved the situation in chrome Android by disabling the click delay for width=device-width sites, and there is ongoing debate for how we might improve it further.",-1),C=n("p",null,"IE10 solution The -ms-touch-action CSS property lets you specify explicitly whether double tap to zoom is enabled on given elements. When double tap to zoom is disabled, so is the click delay (eg. see discussion here). Unfortunately, anything relating to gestures is out of scope for the W3C standard version of pointer events. Luckily we were able to add ‘manipulation’ (which disables double-tap without disabling pinch-zoom) within these constraints.",-1),z={href:"https://docs.google.com/document/d/12-HPlSIF7-ISY8TQHtuQ3IqDi-isZVI0Yzv5zwl90VU/edit#heading=h.qwzwdq9jbvjb",target:"_blank",rel:"noopener noreferrer"},I=o("Issues with touch events - Google 文档");r.render=function(i,o){const r=e("OutboundLink");return a(),s(t,null,[l,n("p",null,[n("a",c,[d,n(r)])]),n("p",null,[n("a",p,[u,n(r)]),h]),n("h2",m,[b,k,n("a",g,[f,n(r)])]),v,w,y,j,x,C,n("p",null,[n("a",z,[I,n(r)])])],64)};export default r;
