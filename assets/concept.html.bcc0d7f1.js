import{r as n,o as a,c as s,a as e,w as p,F as t,b as l,d as o}from"./app.31fc93bc.js";const c={},r=e("h1",{id:"concept",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#concept","aria-hidden":"true"},"#"),l(" concept")],-1),u={class:"table-of-contents"},i=l("流 stream"),d=l("path"),k=l("stream/buffer/string"),h=l("优化"),b=l("回调"),f=l("REPL"),m=l("REPL 元命令"),g=l("单线程"),j=l("高并发"),v=l("用途"),x=o('<h2 id="流-stream" tabindex="-1"><a class="header-anchor" href="#流-stream" aria-hidden="true">#</a> 流 stream</h2><ul><li>一切都是数据流</li><li>普通开发者一般用不到</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> data <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;/resource.json&#39;</span><span class="token punctuation">)</span> <span class="token comment">//同步方法</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>为什么是流的设计，什么叫 I/O 非阻塞:</p><blockquote><p>在很多其他编程语言里，就是这么用的。这样做的好处，就是直观，便于人类直线思考。坏处就是，数据（流）大时，必然需要长时间执行，直接 阻 塞 进程，整个程序只好停下来等着，这就是 I/O 阻塞 。 Node.js 因为用了 回调 ，js 代码所在的（主）线程会把一切 回调 扔给后台的线程池去处理，而自己一步到底，所以叫 I/O 非阻塞 。 再直白一些，流 ，不可能一下子发生或结束，再快也得有个时间差。就像人类社会，始终以时间为单位，这一刻到下一刻，已经发生变化。而 Node.js 严格尊重这个现实 ，无论是远程访问，还是本地请求，每一个 data 都被分成一段一段数据流（通常是 Buffer 对象）传输。 因此，Node.js 里没有简单拷贝的概念，或者说拷贝其实可以通过流来简单实现。</p></blockquote><p>您必须知道的几个 Nodejs 编码习惯 · GitBook</p><p>无法立即释放内存有两种情况，一是全局变量，一是闭包中间函数引用</p><p>node 有固定的内存使用上限</p><p>使用 Buffer 可以读取超过 V8 内存限制的大文件</p><p>Buffer 对象，属于堆外内存，意指不受 V8 分配</p><p>V8 的垃圾回收机制，把内存分为新生代和老生代</p><p>新生代中的对象存活时间较短，而老生代中的对象存活时间较长或者为常驻对象</p><h2 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h2><ul><li><code>path.join</code>正确使用路径分隔符连接</li><li><code>path.resolve(from..., to)</code>把相对路径转换为绝对路径，类似 cd，多个参数是跳转关系</li><li><code>path.relative(from, to)</code> 获取两路径之间的相对关系</li><li><code>path.normalize(path)</code> 转换<code>\\/ ..</code></li></ul><h2 id="stream-buffer-string" tabindex="-1"><a class="header-anchor" href="#stream-buffer-string" aria-hidden="true">#</a> stream/buffer/string</h2><p>无论是处理文件，还是请求远程资源，处理的就是数据流</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">var</span> rs <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&#39;tmp.js&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">var</span> chunks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  size <span class="token operator">=</span> <span class="token number">0</span>\n\nrs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token parameter">chunk</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  chunks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>chunk<span class="token punctuation">)</span>\n  size <span class="token operator">+=</span> chunk<span class="token punctuation">.</span>length\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nrs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> data <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>chunks<span class="token punctuation">,</span> size<span class="token punctuation">)</span>\n  <span class="token keyword">var</span> str <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2><ul><li>避免使用全局变量 <ul><li>变量按作用域树向上查找，开销大</li><li>内存不会自动回收</li></ul></li></ul><h2 id="回调" tabindex="-1"><a class="header-anchor" href="#回调" aria-hidden="true">#</a> 回调</h2><p>Node.js 是单进程的，一般代码在主进程中运行，回调放在事件轮循中处理</p><h2 id="repl" tabindex="-1"><a class="header-anchor" href="#repl" aria-hidden="true">#</a> REPL</h2><ul><li>输入多行 <ul><li><code>.editor</code></li><li><code>{}</code></li></ul></li></ul><h2 id="repl-元命令" tabindex="-1"><a class="header-anchor" href="#repl-元命令" aria-hidden="true">#</a> REPL 元命令</h2><p>提供了以点号（.）开头的元命令 <code>.help</code> 查看 <code>.editor</code>可输入多行，<code>^d</code> 退出</p><blockquote><p>单线程异步的Node.js不代表不会阻塞，在主线程做过多的任务可能会导致主线程的卡死，影响整个程序的性能，所以我们要非常小心的处理大量的循环，字符串拼接和浮 点运算等cpu密集型任务，合理的利用各种技术把任务丢给子线程或子进程去完成，保持Node.js主线程的畅通。</p></blockquote><h2 id="单线程" tabindex="-1"><a class="header-anchor" href="#单线程" aria-hidden="true">#</a> 单线程</h2>',27),_={href:"https://zhuanlan.zhihu.com/p/30743785",target:"_blank",rel:"noopener noreferrer"},N=l("Node.js的线程和进程详解 - 知乎"),w=e("p",null,"单线程事件循环，非阻塞 I/O 回调 主线程 将任务推到共享任务队列 线程池并行处理，有的处理网络请求，有的处理文件 I/O，处理完交给主线程执行回调",-1),y=e("p",null,"缺点",-1),P=e("ol",null,[e("li",null,"默认不能靠多核 CPU 扩容，可以使用 cluster 或 pm2"),e("li",null,"持续时间长的计算或 CPU 密集型任务，可冻结事件循环直到完成")],-1),z=e("p",null,"可以提高线程池的默认线程数，服务器可能会将线程分配到不同核心去处理",-1),L={href:"https://en.wikipedia.org/wiki/Node.js#Threading",target:"_blank",rel:"noopener noreferrer"},O=l("Node.js - Wikipedia"),R=e("h2",{id:"高并发",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#高并发","aria-hidden":"true"},"#"),l(" 高并发")],-1),q=l("读写冲突十分严重，如何 业务规则：流量摊匀 前端：置灰，避免多次提交 后端：同一个用户，限制次数，风控，滑块，拦截，黑名单 "),B={href:"https://cloud.tencent.com/developer/article/1638407",target:"_blank",rel:"noopener noreferrer"},I=l("《吊打面试官》系列 Node.js 全栈秒杀系统 - 云+社区 - 腾讯云"),E=e("p",null,"子进程 child_process cluster",-1),C=e("h2",{id:"用途",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#用途","aria-hidden":"true"},"#"),l(" 用途")],-1),S=e("p",null,"一切非 CPU 密集型",-1);c.render=function(l,o){const c=n("RouterLink"),U=n("OutboundLink");return a(),s(t,null,[r,e("nav",u,[e("ul",null,[e("li",null,[e(c,{to:"#流-stream"},{default:p((()=>[i])),_:1})]),e("li",null,[e(c,{to:"#path"},{default:p((()=>[d])),_:1})]),e("li",null,[e(c,{to:"#stream-buffer-string"},{default:p((()=>[k])),_:1})]),e("li",null,[e(c,{to:"#优化"},{default:p((()=>[h])),_:1})]),e("li",null,[e(c,{to:"#回调"},{default:p((()=>[b])),_:1})]),e("li",null,[e(c,{to:"#repl"},{default:p((()=>[f])),_:1})]),e("li",null,[e(c,{to:"#repl-元命令"},{default:p((()=>[m])),_:1})]),e("li",null,[e(c,{to:"#单线程"},{default:p((()=>[g])),_:1})]),e("li",null,[e(c,{to:"#高并发"},{default:p((()=>[j])),_:1})]),e("li",null,[e(c,{to:"#用途"},{default:p((()=>[v])),_:1})])])]),x,e("p",null,[e("a",_,[N,e(U)])]),w,y,P,z,e("p",null,[e("a",L,[O,e(U)])]),R,e("p",null,[q,e("a",B,[I,e(U)])]),E,C,S],64)};export default c;
