import{r as n,o as s,c as a,a as p,F as t,d as o,b as e}from"./app.31fc93bc.js";const c={},l=o('<h1 id="font" tabindex="-1"><a class="header-anchor" href="#font" aria-hidden="true">#</a> font</h1><h2 id="unicode-range" tabindex="-1"><a class="header-anchor" href="#unicode-range" aria-hidden="true">#</a> unicode-range</h2><ul><li>场景 <ul><li>对部分字符做特殊字体处理</li><li>字体分片，按一定规则拆分大字体文件，然后设置 css 文字范围与字体文件的映射关系</li></ul></li><li>兼容性：IE9 以上部分支持</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;ZCOOL QingKe HuangYou&#39;</span><span class="token punctuation">;</span>\n  <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>\n  <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>\n  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token function">local</span><span class="token punctuation">(</span><span class="token string">&#39;ZCOOL QingKe HuangYou Regular&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">local</span><span class="token punctuation">(</span><span class="token string">&#39;ZCOOLQingKeHuangYou-Regular&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>https://fonts.gstatic.com/s/zcoolqingkehuangyou/v2/2Eb5L_R5IXJEWhD3AOhSvFC554MOOahI4mRIjpWmcd2sME07NgirVXtlnqDJjtoEkzukmSp9MDttOpdc.4.woff2<span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;woff2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">unicode-range</span><span class="token punctuation">:</span> U+ff8e<span class="token punctuation">,</span> U+ff92<span class="token punctuation">,</span> U+ff97-ff9b<span class="token punctuation">,</span> U+ff9d-ff9f<span class="token punctuation">,</span> U+ffe0-ffe4<span class="token punctuation">,</span>U+1f359-1f363<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;ZCOOL QingKe HuangYou&#39;</span><span class="token punctuation">;</span>\n  <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>\n  <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>\n  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token function">local</span><span class="token punctuation">(</span><span class="token string">&#39;ZCOOL QingKe HuangYou Regular&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">local</span><span class="token punctuation">(</span><span class="token string">&#39;ZCOOLQingKeHuangYou-Regular&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>https://fonts.gstatic.com/s/zcoolqingkehuangyou/v2/2Eb5L_R5IXJEWhD3AOhSvFC554MOOahI4mRIjpWmcd2sME07NgirVXtlnqDJjtoEkzukmSp9MDttOpdc.47.woff2<span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;woff2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">unicode-range</span><span class="token punctuation">:</span> U+7b3f<span class="token punctuation">,</span> U+7c23-7c24<span class="token punctuation">,</span> U+7c26-7c33<span class="token punctuation">,</span> U+7c35<span class="token punctuation">,</span> U+7c37-7c3b<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><blockquote><p>目前现有的字体压缩方案依赖于一个字体压缩服务，这个服务是将输入的所有文字按照指定的字体类型生成一个特定的文件。这个文件只包含特定文字的字体内容也就大大降低了字体文件的大小。将课件中使用了非网络安全字体的文字提取出来，发送给字体压缩服务，生成字体文件后应用到这个课件中，播放课件时就不会再加载庞大的字体文件了，只需要加载生成的比较小的字体文件就能满足。但是这种模式下生成的字体文件只能应用与当前这个课件，每个课件都需要生成一个不同的字体文件，而且如果这个课件内的文字发生了变动，需要再次调用字体压缩服务重新生成一份字体文件。在这种模式下需要将字体文件生成完之后才能正常播放课件，拖慢了课件生成的速度，资源利用率也不高，而且会生成许多不会再使用的垃圾文件。</p></blockquote><blockquote><p>css分片字体加载方式：这种方式是将大字体文件提前按照一定规则切分成多个小的字体文件，并对应每个小的字体文件生成所包含字体unicode的范围。将这个范围标记到css标签@font-face的unicode-range属性中。将所有的@font-face标签放到一个css文件中，这个文件就是整个字体的小文件映射关联表。在使用时只需要在需要特定字体的html文件中引用这个css文件，使用css自身特定动态定位需要应用字体的文字，在@font-face标签中查找文字所在的小字体文件，并下载所需的字体文件。这一些列操作都是css自身完成，不需要二次开发。同时该模式还支持动态文本的渲染，比如使用javaScript修改了文档中的文字内容，css还是会动态计算需要下在的字体文件。这种方式可以解决课件生成速度慢，字体文件繁多利用率低的问题。</p></blockquote>',6),u={href:"https://www.zhangxinxu.com/wordpress/2016/11/css-unicode-range-character-font-face/",target:"_blank",rel:"noopener noreferrer"},i=e("CSS unicode-range特定字符使用font-face自定义字体 « 张鑫旭-鑫空间-鑫生活"),r=p("h2",{id:"google-fonts-字体加载策略",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#google-fonts-字体加载策略","aria-hidden":"true"},"#"),e(" google fonts 字体加载策略")],-1),k=p("li",null,[p("p",null,"有较长缓存期，普通用户使用问题不大")],-1),f=p("li",null,[p("p",null,"只请求需要的字重")],-1),g=p("li",null,[p("p",null,"多个字体合并为一个请求")],-1),b=e("请求构成 css + font srcs，且往往不在同载事下，dns-prefetch, preconnect "),h={href:"https://zhuanlan.zhihu.com/p/71640685",target:"_blank",rel:"noopener noreferrer"},d=e("Web技巧(12) - 知乎"),m=p("p",null,[e("设置"),p("code",null,"font-display: swap"),e("，google 默认链接带了这个参数，第三方可能得手动加上，如 "),p("code",null,"https://fonts.font.im/css?family=Oswald&display=swap")],-1),y={href:"https://css-tricks.com/font-display-masses/",target:"_blank",rel:"noopener noreferrer"},O=p("code",null,"font-display",-1),w=e(" for the Masses | CSS-Tricks"),U=e("自托管 "),C={href:"https://github.com/KyleAMathews/typefaces",target:"_blank",rel:"noopener noreferrer"},M=e("KyleAMathews/typefaces: NPM packages for Open Source typefaces"),S=p("p",null,"中文字体压缩的那些事 – 涂雨期的博客 https://hsingko.github.io/post/compress_webfont/",-1);c.render=function(o,e){const c=n("OutboundLink");return s(),a(t,null,[l,p("p",null,[p("a",u,[i,p(c)])]),r,p("ul",null,[k,f,g,p("li",null,[p("p",null,[b,p("a",h,[d,p(c)])])]),p("li",null,[m,p("p",null,[p("a",y,[O,w,p(c)])])])]),p("p",null,[U,p("a",C,[M,p(c)])]),S],64)};export default c;
