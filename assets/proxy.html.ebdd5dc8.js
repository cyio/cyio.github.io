import{_ as i,r as l,o as p,c,a as e,b as n,w as t,F as b,d as s,e as o}from"./app.818741d3.js";const h={},d=e("h1",{id:"proxy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#proxy","aria-hidden":"true"},"#"),s(" proxy")],-1),u={class:"table-of-contents"},_=s("browsersync"),m=s("whistle"),w=s("api"),f=o(`<h2 id="browsersync" tabindex="-1"><a class="header-anchor" href="#browsersync" aria-hidden="true">#</a> browsersync</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ browser-sync start --proxy <span class="token string">&#39;localhost:1234&#39;</span> --files <span class="token string">&#39;app&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,2),g={href:"https://elemefe.github.io/sip/browsersync/command-line.html",target:"_blank",rel:"noopener noreferrer"},k=s("\u547D\u4EE4\u884C\u4F7F\u7528 \xB7 GitBook"),x=e("h2",{id:"whistle",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#whistle","aria-hidden":"true"},"#"),s(" whistle")],-1),y={href:"http://wproxy.org/whistle/install.html",target:"_blank",rel:"noopener noreferrer"},v=s("\u5B89\u88C5\u542F\u52A8 \xB7 GitBook"),j=e("p",null,"android \u6709\u7684\u5E94\u7528\u5982 youtube/playstore \u4E0D\u8D70\u7CFB\u7EDF\u4EE3\u7406",-1),q={href:"https://github.com/avwo/whistle/issues/63",target:"_blank",rel:"noopener noreferrer"},B=s("\u6709\u4E9B App \u4E0D\u80FD\u901A\u8FC7\u4EE3\u7406\u8BBF\u95EE\uFF0C\u8FD9\u79CD\u60C5\u51B5\u6709\u6CA1\u6709\u529E\u6CD5\u80FD\u6293\u5305\uFF1F \xB7 Issue #63 \xB7 avwo/whistle"),L={href:"http://wproxy.org/whistle/rules/socks.html",target:"_blank",rel:"noopener noreferrer"},G=s("socks \xB7 GitBook"),I={href:"https://github.com/avwo/whistle/blob/5599fbc1fb71a49fbcd1e39723a2b2011a923fec/docs/zh/rules/jsAppend.md",target:"_blank",rel:"noopener noreferrer"},N=s("whistle/jsAppend.md at 5599fbc1fb71a49fbcd1e39723a2b2011a923fec \xB7 avwo/whistle"),R={href:"https://zhuanlan.zhihu.com/p/79037633",target:"_blank",rel:"noopener noreferrer"},V=s("\u4F7F\u7528 Whistle \u4F5C\u4E3A\u4F60\u7684 Web \u8C03\u8BD5\u5DE5\u5177\u5427 - \u77E5\u4E4E"),z=s("\u901A\u8FC7whistle\u914D\u7F6E\u7684host\u662F\u4E0D\u4F1A\u7F13\u5B58 "),A={href:"https://wproxy.org/whistle/rules/disable.html",target:"_blank",rel:"noopener noreferrer"},C=s("disable \xB7 GitBook"),E={href:"https://diygod.me/web-debugging-proxy/",target:"_blank",rel:"noopener noreferrer"},T=s("\u79D1\u5B66\u7684 Web \u8C03\u8BD5\u4EE3\u7406\u5B9E\u8DF5 | Hi, DIYgod"),W=o(`<ul><li>\u4FEE\u6539\u54CD\u5E94\u5934</li><li>\u4FEE\u6539\u54CD\u5E94\u5185\u5BB9\uFF08\u4E0D\u9700\u8981\u53E6\u5916\u6307\u5B9A key\uFF09</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>*/mock file://({&quot;code&quot;:12345,&quot;message&quot;:&quot;some_logic_error&quot;}) # \u6A21\u62DF\u4E1A\u52A1\u903B\u8F91\u5F02\u5E38

*/mock statusCode://502 # \u6A21\u62DF HTTP \u72B6\u6001\u7801\u5F02\u5E38

# \u672C\u5730\u9759\u6001 server
# \u89C4\u5219\uFF1A\u81EA\u5B9A\u4E49\u57DF\u540D\u6216URL&lt;\u7A7A\u683C&gt;\u672C\u5730\u76EE\u5F55\u8DEF\u5F84 \uFF08\u4EE5\u4E0B\u793A\u4F8B\u8BF7\u66FF\u6362\u4E3A\u81EA\u5DF1\u672C\u5730\u7684\u5199\u6CD5\uFF09
my.demo/bw/ file:///Users/kaiye/Projects/Demo/002-black-white/

# \u8FD4\u56DE\u5185\u5BB9\u66FF\u6362
\`\`rule
aaa: bbb
\`\`
^www.xx.app/chunk-vendors.*.js resReplace://{rule}

# \u5BF9\u67D0\u4E9B\u57DF\u540D\u4E0D\u62E6\u622A
/xx.xx.com/ disable://intercept

# \u4EFB\u610F\u57DF\u540D\u7ED1\u5B9A\u5230\u672C\u5730\u4EFB\u610F\u670D\u52A1
https://my.demo/ 127.0.0.1:8080

# \u91CD\u5199\u8BE5\u57DF\u540D\u7684\u540E\u7AEF\u63A5\u53E3\u8DEF\u5F84\u5230\u7EBF\u4E0A\u670D\u52A1\u5730\u5740
https://my.demo/api/ https://backend.example.com/api/

# \u6216\u76F4\u63A5\u8F6C\u53D1\u5230\u5C40\u57DF\u7F51\u67D0\u53F0\u673A\u5668\u7684\u5177\u4F53\u7AEF\u53E3
https://my.demo/api2/ http://127.0.0.1:3000

# \u628Ahttps\u8BF7\u6C42\u8F6C\u6210http
https://www.test.com http://www.test.com

# \u628A\u6839\u8DEF\u5F84\u7684\u8BF7\u6C42\u8F6C\u53D1\u5230\u6307\u5B9A\u7684ip\u548C\u7AEF\u53E3
/^https?:\\/\\/www\\.test\\.com(:\\d*)?\\/?(\\?|$)/ 192.168.30.118:8877

# \u5904\u7406\u540E\u7F00\u4E3Agif|jpg|jpeg|png|bmp|swf|ico|js|css|html\u7684\u8BF7\u6C42
/^https?:\\/\\/www\\.test\\.com(:\\d*)?\\/[^?]*\\.(gif|jpg|jpeg|png|bmp|swf|ico|js|css|html)(\\?|$)/i 127.0.0.1:8080

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div>`,2),$={href:"https://www.cnblogs.com/kaiye/p/10137592.html",target:"_blank",rel:"noopener noreferrer"},D=s("\u4F7F\u7528whistle\u6A21\u62DFcgi\u63A5\u53E3\u5F02\u5E38\uFF1A\u9519\u8BEF\u7801\u3001502\u3001\u6162\u7F51\u901F\u3001\u8D85\u65F6 - \u732B\u54E5_kaiye - \u535A\u5BA2\u56ED"),F={href:"https://www.cnblogs.com/kaiye/p/9628692.html",target:"_blank",rel:"noopener noreferrer"},H=s("\u4F7F\u7528 whistle \u66FF\u4EE3\u672C\u5730 nginx/webpack \u670D\u52A1 - \u732B\u54E5_kaiye - \u535A\u5BA2\u56ED"),P=e("h2",{id:"api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#api","aria-hidden":"true"},"#"),s(" api")],-1),U=e("ul",null,[e("li",null,[e("code",null,"https://bird.ioliu.cn/v1/?url=")])],-1);function S(Y,J){const r=l("RouterLink"),a=l("ExternalLinkIcon");return p(),c(b,null,[d,e("nav",u,[e("ul",null,[e("li",null,[n(r,{to:"#browsersync"},{default:t(()=>[_]),_:1})]),e("li",null,[n(r,{to:"#whistle"},{default:t(()=>[m]),_:1})]),e("li",null,[n(r,{to:"#api"},{default:t(()=>[w]),_:1})])])]),f,e("p",null,[e("a",g,[k,n(a)])]),x,e("p",null,[e("a",y,[v,n(a)])]),j,e("p",null,[e("a",q,[B,n(a)]),e("a",L,[G,n(a)])]),e("p",null,[e("a",I,[N,n(a)]),e("a",R,[V,n(a)])]),e("blockquote",null,[e("p",null,[z,e("a",A,[C,n(a)])])]),e("p",null,[e("a",E,[T,n(a)])]),W,e("p",null,[e("a",$,[D,n(a)]),e("a",F,[H,n(a)])]),P,U],64)}var M=i(h,[["render",S],["__file","proxy.html.vue"]]);export{M as default};
