import{r as e,o as n,c as r,a as l,F as a,b as s,d as i}from"./app.31fc93bc.js";const t={},o=l("h1",{id:"响应式设计",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#响应式设计","aria-hidden":"true"},"#"),s(" 响应式设计")],-1),p=l("h2",{id:"尺寸依据",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#尺寸依据","aria-hidden":"true"},"#"),s(" 尺寸依据")],-1),u={href:"http://chicun.jammy.cc/",target:"_blank",rel:"noopener noreferrer"},c=s("Web网页 - 设计尺寸"),d=l("h2",{id:"常见效果实现",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#常见效果实现","aria-hidden":"true"},"#"),s(" 常见效果实现")],-1),b=s("弹出框，如播放器 "),h={href:"http://fancyapps.com/fancybox/#examples",target:"_blank",rel:"noopener noreferrer"},m=s("fancyBox - Fancy jQuery Lightbox Alternative"),g=l("p",null,"滚动页面时，元素出现动画",-1),f={href:"http://mynameismatthieu.com/WOW/",target:"_blank",rel:"noopener noreferrer"},x=s("Reveal Animations When Scrolling — WOW.js"),y=l("li",null,"加上 wow 后，元素在用户滚动到前隐藏",-1),v=l("li",null,[s("可以自己写 JS 配合"),l("code",null,"animate.css")],-1),k=l("div",{class:"language-text ext-text line-numbers-mode"},[l("pre",{class:"language-text"},[l("code",null,'class="animated wow fadeInDown"\n')]),l("div",{class:"line-numbers"},[l("span",{class:"line-number"},"1"),l("br")])],-1),j={href:"https://github.com/ajlkn/jquery.scrollex",target:"_blank",rel:"noopener noreferrer"},w=s("ajlkn/jquery.scrollex: Nifty scroll events for jQuery."),_=s("视差滚动 "),A={href:"https://github.com/Victa/scrolly",target:"_blank",rel:"noopener noreferrer"},S=s("Victa/scrolly: Super simple and easy to use parallax plugin for jQuery (THIS PROJECT IS NOT MAINTAINED ANYMORE)"),q=i('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Scrolly links.\n  $(&#39;.scrolly&#39;).scrolly({\n    speed: 400\n  });\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',1),N=s("多级菜单 "),W={href:"https://github.com/ajlkn/jquery.dropotron",target:"_blank",rel:"noopener noreferrer"},z=s("ajlkn/jquery.dropotron: Adds multilevel dropdown menus to jQuery."),O=l("h2",{id:"源码收集",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#源码收集","aria-hidden":"true"},"#"),s(" 源码收集")],-1),E=l("p",null,"首屏视频",-1),I=l("li",null,"按窗口动态设定视频宽高",-1),M=s("滚动时停止播放 "),Q={href:"https://gist.github.com/cyio/35bb90d1e9ea65980994e47f4de25ef4",target:"_blank",rel:"noopener noreferrer"},R=s("www.zigeer.com 自个官网"),F=l("li",null,[l("p",null,[s("img srcset explain "),l("img",{src:"http://wx1.sinaimg.cn/large/4e5d3ea7ly1fji2pprv5rj20m80ciah2.jpg",alt:""})])],-1),T=i('<h2 id="响应式单位" tabindex="-1"><a class="header-anchor" href="#响应式单位" aria-hidden="true">#</a> 响应式单位</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>body {\n    min-height: 100vh;\n    /* some background property like a gradient */\n}\n\n// 固定比例 vmin 按最小边算\n.aspect-4-3 {\n  background-color: #e3e3e3;\n  width: 100vmin;\n  height: calc((3 / 4) * 100vmin); /* equals to 4:3 a.r. = height: 75vmin; */\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',2),C={href:"https://codepen.io/AndreusCafe/pen/bmBroR?editors=1100",target:"_blank",rel:"noopener noreferrer"},D=s("Maintaining Aspect Ratio using viewport units - CSS"),B={href:"https://codepen.io/hexagoncircle/pen/yvxyPW?editors=0100",target:"_blank",rel:"noopener noreferrer"},J=s("Flexbox Sticky Footer Example"),L=l("h2",{id:"rem",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#rem","aria-hidden":"true"},"#"),s(" rem")],-1),P=l("p",null,"rem的关键是等比缩放 用media为不同屏幕设置基准字体",-1),V=l("p",null,"流式布局致命缺点，宽度为百分比，高度为px写死，在大屏幕手机下会被拉宽。",-1),H=l("p",null,"固定宽度的缺点，大屏幕下两边留白，页面小、操作按钮小。",-1),Y=l("p",null,"高效的做法",-1),$=l("p",null,"设置viewport进行等比缩放，天猫是320*1.3",-1),G=l("p",null,"z-index只应用在兄弟元素上。 static定位的元素z-index值是0，也就是常规流。",-1),K=l("p",null,"npm viewtorem",-1),U={href:"https://mp.weixin.qq.com/s?__biz=Mzg2NDAzMjE5NQ==&mid=2247484266&idx=1&sn=50ee8117257c16c014f0067893c0d36d&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},X=s("关于移动端适配，你必须要知道的");t.render=function(s,i){const t=e("OutboundLink");return n(),r(a,null,[o,p,l("p",null,[l("a",u,[c,l(t)])]),d,l("ul",null,[l("li",null,[l("p",null,[b,l("a",h,[m,l(t)])])]),l("li",null,[g,l("ul",null,[l("li",null,[l("a",f,[x,l(t)])]),y,v]),k,l("ul",null,[l("li",null,[l("a",j,[w,l(t)])])])]),l("li",null,[l("p",null,[_,l("a",A,[S,l(t)])]),q]),l("li",null,[l("p",null,[N,l("a",W,[z,l(t)])])])]),O,l("ul",null,[l("li",null,[E,l("ul",null,[I,l("li",null,[M,l("a",Q,[R,l(t)])])])]),F]),T,l("p",null,[l("a",C,[D,l(t)]),l("a",B,[J,l(t)])]),L,P,V,H,Y,$,G,K,l("p",null,[l("a",U,[X,l(t)])])],64)};export default t;
