import{_ as t,r,o as c,c as i,a as e,b as o,F as l,e as s,d as n}from"./app.e2525c08.js";const p={},d=s(`<h2 id="ios" tabindex="-1"><a class="header-anchor" href="#ios" aria-hidden="true">#</a> iOS</h2><p>\u5E38\u7528\u547D\u4EE4</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g cordova ios-deploy 
cordova plugin rm/add pluginName
cordova run ios
// \u5217\u51FA\u53EF\u7528\u6A21\u62DF\u5668
cordova run ios --list
// \u90E8\u7F72\u5230\u6307\u5B9A\u8BBE\u5907
cordova run ios --device
cordova run ios --target<span class="token operator">=</span><span class="token string">&quot;iPhone-6&quot;</span><span class="token punctuation">)</span> //\u6307\u5B9A\u4F7F\u7528iPhone6\u4F5C\u4E3A\u6A21\u62DF\u5668
</code></pre></div><p>xcode \u9879\u76EE\u7B7E\u540D\u9700\u8981\u53D6\u6D88\u81EA\u52A8\uFF0C\u518D\u9009\u4E0A</p><p>\u9519\u8BEF\u63D0\u793A: Cordova/CDVViewController.h File Not Found \u89E3\u51B3:</p><div class="language-text ext-text"><pre class="language-text"><code>Add this line to your Build Settings -&gt; Header Search Paths:

&quot;$(OBJROOT)/UninstalledProducts/$(PLATFORM_NAME)/include&quot;

</code></pre></div><h3 id="\u7981\u7528\u9009\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u7981\u7528\u9009\u4E2D" aria-hidden="true">#</a> \u7981\u7528\u9009\u4E2D</h3><ul><li>wkwebview \u9700\u8981 hack \u89E3\u51B3</li></ul>`,8),h={href:"http://www.jianshu.com/p/ba688cc688d2",target:"_blank",rel:"noopener noreferrer"},u=n("iOS WKWebview \u7981\u6B62\u957F\u6309\u5F39\u51FA\u6548\u679C - \u7B80\u4E66"),_={href:"http://stackoverflow.com/questions/39320386/wkwebview-how-to-change-long-press-action-or-disable-it",target:"_blank",rel:"noopener noreferrer"},k=n("ios - WKWebView : How to change Long press action or disable it? - Stack Overflow"),w=s(`<ul><li>uiwebview cordova \u5DF2\u96C6\u6210\u4E00\u63D2\u4EF6\u652F\u6301\uFF0C\u8BBE\u7F6E css \u5373\u53EF</li></ul><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token comment">/* Disable selection/Copy of UIWebView */</span>
  <span class="token property">-webkit-touch-callout</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">-webkit-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="wkwebview" tabindex="-1"><a class="header-anchor" href="#wkwebview" aria-hidden="true">#</a> wkwebview</h3>`,3),g={href:"https://developer.apple.com/reference/webkit/wkwebview",target:"_blank",rel:"noopener noreferrer"},b=n("WKWebView - WebKit | Apple Developer Documentation"),v={href:"https://github.com/apache/cordova-plugins/tree/wkwebview-engine-localhost",target:"_blank",rel:"noopener noreferrer"},f=n("apache/cordova-plugins at wkwebview-engine-localhost"),m={href:"https://gist.github.com/mlynch/c63205f114def01ed0b9",target:"_blank",rel:"noopener noreferrer"},x=n("Ionic WKWebView.md"),V=e("h3",{id:"android",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#android","aria-hidden":"true"},"#"),n(" android")],-1),W=e("ul",null,[e("li",null,"android sdk \u9009\u5305\u9ED8\u8BA4\u4F1A\u9009\u5F88\u591A\u4E0D\u5FC5\u8981\u7684\u5B50\u5305\uFF0Cx86/tv/wear\u7B49\u6700\u597D\u53D6\u6D88\u9009\u4E2D"),e("li",null,"clone \u9879\u76EE\uFF0Cadd platform \u7136\u540E run")],-1),O={href:"https://www.sitepoint.com/quick-tip-installing-and-getting-started-with-cordova/",target:"_blank",rel:"noopener noreferrer"},y=n("Quick Tip - Using and Installing Cordova"),N={href:"https://gist.github.com/Erichain/0ac3a6aaca0c28ad6551",target:"_blank",rel:"noopener noreferrer"},S=n("Mac OS\u4E0B\u5B89\u88C5\u548C\u914D\u7F6Eandroid-sdk"),q=e("h3",{id:"crosswalk",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#crosswalk","aria-hidden":"true"},"#"),n(" crosswalk")],-1),C=e("p",null,"\u9488\u5BF9android 4.0 - 4.4\uFF0C\u4EE5\u66FF\u6362webkit 4.4\u4EE5\u540E\u662Fchromium \u56E0\u6B64\u4F7F\u7528\u610F\u4E49\u4E0D\u5927",-1);function B(E,F){const a=r("ExternalLinkIcon");return c(),i(l,null,[d,e("p",null,[e("a",h,[u,o(a)])]),e("p",null,[e("a",_,[k,o(a)])]),w,e("p",null,[e("a",g,[b,o(a)]),e("a",v,[f,o(a)]),e("a",m,[x,o(a)])]),V,W,e("p",null,[e("a",O,[y,o(a)]),e("a",N,[S,o(a)])]),q,C],64)}var K=t(p,[["render",B],["__file","cordova.html.vue"]]);export{K as default};
