import{r as e,o as a,c as r,a as n,F as s,d as o,b as t}from"./app.31fc93bc.js";const l={},i=o('<h1 id="html5-mobile" tabindex="-1"><a class="header-anchor" href="#html5-mobile" aria-hidden="true">#</a> html5-mobile</h1><p>[toc]</p><h2 id="移动端适配" tabindex="-1"><a class="header-anchor" href="#移动端适配" aria-hidden="true">#</a> 移动端适配</h2><ul><li><p>为什么不用媒体查询方案？ 移动端屏幕尺寸多，<strong>适配代码量大</strong></p></li><li><p>弹性布局 文字流式，控件弹性，图片等比缩放 <img src="http://images2015.cnblogs.com/blog/459873/201510/459873-20151014135816569-395090216.png" alt="459873-20151014135816569-395090216.png (500×320)"></p></li><li><p>字体单位 em 是相对于父元素的比例，如 0.5em 就是当前元素的父元素的字体大小的一半</p><p>rem 就是相对于 root，就是根元素 html &gt; em = 希望得到的像素大小 / 父元素字体像素大小 &gt; em 单位和百分比单位的作用是一样的 <code>css body { font-size: 62.5%; /* font-size 1em = 10px */ } p { font-size: 1.6em; /* 1.6em = 16px */ }</code></p></li><li><p>如何计算根元素的字体大小？ 等价问题是元素尺寸百分比的基准值应该是多少。 页面代码用相对单位写死，然后根据不同屏幕宽度计算基准值。 基准值 = 设备宽度 / 设计稿宽度 &gt; 如果设计稿基于 iphone6，横向分辨率为 750，body 的 width 为 750 / 100 = 7.5rem &gt; 如果设计稿基于 iphone4/5，横向分辨率为 640，body 的 width 为 640 / 100 = 6.4rem</p></li><li><p>结合项目的思考 设计稿是 640，按 320 写</p></li></ul>',4),p={href:"https://www.icloud.com/keynote/000DIf8ISxFcuxka4YozKLaOg#Mobile_Webpage_%25E5%25A6%2582%25E4%25BD%2595%25E8%2587%25AA%25E9%2580%2582%25E5%25BA%2594%25E5%25B1%258F%25E5%25B9%2595_2",target:"_blank",rel:"noopener noreferrer"},h=t("Mobile Webpage 如何自适应屏幕 2"),c=o('<h2 id="ui-设计" tabindex="-1"><a class="header-anchor" href="#ui-设计" aria-hidden="true">#</a> UI 设计</h2><p>PC 端一张大 banner 的图片预算大概在 300kb</p><p>手机端建议不超过 150kb。手机端使用满铺背景的图片，需要给出适配方案，特别要考虑橫屏情况</p><p>微信不支持横屏</p><h2 id="移动端开发总结" tabindex="-1"><a class="header-anchor" href="#移动端开发总结" aria-hidden="true">#</a> 移动端开发总结</h2><ul><li>rem 设置是否正确，要验证</li><li>展示图不要指定高度或限高，平板设备需要的高度不同</li></ul><h2 id="返回刷新" tabindex="-1"><a class="header-anchor" href="#返回刷新" aria-hidden="true">#</a> 返回刷新</h2>',7),b={href:"https://stackoverflow.com/questions/43043113/how-to-force-reloading-a-page-when-using-browser-back-button",target:"_blank",rel:"noopener noreferrer"},d=t("javascript - How to force reloading a page when using browser back button? - Stack Overflow"),u={href:"https://github.com/rico-c/RICO-BLOG/issues/17",target:"_blank",rel:"noopener noreferrer"},m=t("网页后退不刷新的 N 种解决方案 · Issue #17 · rico-c/RICO-BLOG"),f=n("p",null,"死循环：A -> B -> A 此时浏览器返回又到了 B，无解。写死地址，会引起别的页面间死循环。",-1),g=n("h2",{id:"issues",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#issues","aria-hidden":"true"},"#"),t(" issues")],-1),k=n("p",null,"1.文件保存到本地 fileSaver 不适合移动浏览器（如 qq 浏览器），图片保存需采用长按方式 2.safari 默认禁元素长按，需加入-webkit-touch-callout: default; 3.移动端打开 oss 的 pdf，location.href 的方式有兼容性问题，需用 a 标签",-1),w=n("p",null,"1.移动浏览器页面返回场景 2.移动浏览器工具栏/iphone11 虚拟按钮占位问题 3.部分 bug 可能是微信版本导致，微信相关功能 bug 可优先去开发者论坛或者比较其他同类产品",-1),E={href:"https://github.com/herbertliu/OMS/blob/master/%25E7%25A7%25BB%25E5%258A%25A8%25E4%25BC%2598%25E5%258C%2596%25E7%25BB%258F%25E9%25AA%258C.md",target:"_blank",rel:"noopener noreferrer"},A=t("OMS/移动优化经验.md at master · herbertliu/OMS"),x=o('<h2 id="构建工具" tabindex="-1"><a class="header-anchor" href="#构建工具" aria-hidden="true">#</a> 构建工具</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">SASS_BINARY_SITE</span><span class="token operator">=</span>https://npm.taobao.org/mirrors/node-sass/ <span class="token assign-left variable">PHANTOMJS_CDNURL</span><span class="token operator">=</span>https://npm.taobao.org/mirrors/phantomjs/ <span class="token function">npm</span> <span class="token function">install</span> -g elf-cli --registry<span class="token operator">=</span>https://registry.npm.taobao.org\n\nelf init elf-demo\nelf init -t swiper demo-swiper\n\nelf start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',2),B={href:"https://aotu.io/notes/2017/01/17/elf/",target:"_blank",rel:"noopener noreferrer"},_=t("ELF - 灵活可扩展的 HTML5 构建工具 | Aotu.io「凹凸实验室」"),O={href:"https://mp.weixin.qq.com/s/0F0Pd1Qzmf3YCXkcEHbzgw",target:"_blank",rel:"noopener noreferrer"},S=t("中高级前端必须注意的40条移动端H5坑位指南 | 网易三年实践");l.render=function(o,t){const l=e("OutboundLink");return a(),r(s,null,[i,n("p",null,[n("a",p,[h,n(l)])]),c,n("p",null,[n("a",b,[d,n(l)])]),n("p",null,[n("a",u,[m,n(l)])]),f,g,k,w,n("p",null,[n("a",E,[A,n(l)])]),x,n("p",null,[n("a",B,[_,n(l)])]),n("p",null,[n("a",O,[S,n(l)])])],64)};export default l;
