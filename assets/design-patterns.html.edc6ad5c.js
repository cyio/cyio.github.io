import{r as n,o as a,c as s,a as p,w as t,F as e,b as l,d as o}from"./app.31fc93bc.js";const c={},i=p("h1",{id:"设计模式",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#设计模式","aria-hidden":"true"},"#"),l(" 设计模式")],-1),u={class:"table-of-contents"},r=l("设计原则"),k=l("里氏替换"),d=l("发布订阅"),b=l("策略模式"),h=l("工厂方法"),f=l("单例"),m=l("建造器"),y=l("适配器"),g=l("代理"),w=l("合成复用原则"),v=l("装饰器、包装"),x=l("享元"),E=l("模板方法"),_=l("命令模式"),A=l("职责链"),B=l("notes copy"),j=o('<h2 id="设计原则" tabindex="-1"><a class="header-anchor" href="#设计原则" aria-hidden="true">#</a> 设计原则</h2><blockquote><p>软件模式的产生是因为变化的东西太多，为减轻人类的负担， 将一些不变的东西先用模式固化，这样让人类可以更加集中精力对付变化的东西，所以 在软 件中大量反复使用模式（我个人认为这样的软件就叫框架软件了，比如 Ｊ２ＥＥ），不但没阻碍软 件的发展，反而是推动了软件的发展．因为其 他使用这套软件的人就可以将更多精力集中在 对付那些无法用模式的应用上来．</p></blockquote><p><img src="http://ww1.sinaimg.cn/large/4e5d3ea7ly1h0fkali93yj20f80jmn2b.jpg" alt="image.png"></p><p>基于六大设计原则:</p><ul><li>Single 单一职责 如写函数、职责过多</li><li>Open 开放封闭 对扩展开放，对修改封闭</li><li>Liskov 里氏替换 程序里的对象都应该可以被它的子类实例替换而不用更改程序.</li><li>Law of Demeter 迪米特法则 最少知识 直接交流、减少耦合</li><li>Interface 接口隔离 尽可能小的接口， 多个专用的接口比一个通用接口好。</li><li>Dependency 依赖倒置 面向接口而非面向实现类，高层模块依赖于抽象而非细节 反向依赖</li></ul><h3 id="里氏替换" tabindex="-1"><a class="header-anchor" href="#里氏替换" aria-hidden="true">#</a> 里氏替换</h3><p>可替代性（指父类？）</p><p>讲继承复用，对开闭原则的补充</p><p>子类可以扩展父类的功能，但不能改变父类原有的功能</p><h2 id="发布订阅" tabindex="-1"><a class="header-anchor" href="#发布订阅" aria-hidden="true">#</a> 发布订阅</h2><p>又叫观察者模式，定义对象间一对多的依赖关系，当一个对象状态发生变化时，所有依赖它的对象都将得到通知。JS 中就是事件模型。</p><ul><li>订阅者，数据结构是事件名到事件回调列表的映射，有一个默认事件<code>any</code></li><li>两个方法，一个是接收，参数是回调和事件名，一个是发出，参数是消息和事件名 <ul><li>接收， 就是写入订阅表，注意事件名存在时，回调列表要 push</li><li>发出，遍历调用事件名下的回调</li></ul></li><li>观察者模式中观察者和被观察者是互相知道对方的存在的，而在发布订阅模式中是不知道的。</li><li>数据驱动，数据与逻辑分离，前因后果</li><li>扩展：MVC，MVVM</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Event</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>cacheList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">on</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>cacheList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>cacheList<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 注意这里设置的值是数组</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>cacheList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>cacheList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token string">&#39;event not found&#39;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> fn <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cacheList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">fn</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> event <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\nevent<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token parameter">data</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">event data: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nevent<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span> <span class="token comment">// event data: hello</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>',13),L={href:"https://cnodejs.org/topic/5565b4a77d4c64752effb5dd",target:"_blank",rel:"noopener noreferrer"},S=l("ES6 语法实践，用 ES6 重写《JavaScript Patterns》中的设计模式 - CNode 技术社区"),C=o('<h2 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h2><p>算法实现和使用分离，策略类可互换，环境类接受用户请求，将请求委托给策略类</p><p>将不变的部分和变化的部分分隔开来是每个设计模式的主题。</p><p>至少两部分组成： 一是策略类，策略类封装了具体的算法，并负责具体的算法。 二是环境，类 Context 接受客户的请求，随后把请求委托给某一个策略类。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 计算工资</span>\n<span class="token keyword">var</span> strategies <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">S</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">4</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">A</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">5</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">B</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">6</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> <span class="token function-variable function">calculateBonus</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">level<span class="token punctuation">,</span> salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> strategies<span class="token punctuation">[</span>level<span class="token punctuation">]</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token comment">// Context</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">calculateBonus</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">calculateBonus</span><span class="token punctuation">(</span><span class="token string">&#39;S&#39;</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="工厂方法" tabindex="-1"><a class="header-anchor" href="#工厂方法" aria-hidden="true">#</a> 工厂方法</h2><p>将创建实例的责任与使用实例的责任分开</p><p>拿到商品，不需要关心怎么生产</p><h2 id="单例" tabindex="-1"><a class="header-anchor" href="#单例" aria-hidden="true">#</a> 单例</h2><p>单一实例对象 对外提供全局访问</p><p>创建对象，管理单例两个职责分离</p><h2 id="建造器" tabindex="-1"><a class="header-anchor" href="#建造器" aria-hidden="true">#</a> 建造器</h2><p>将复杂对象的<strong>创建</strong>逻辑与最终<strong>表现</strong>分离 JS 中很少用</p><h2 id="适配器" tabindex="-1"><a class="header-anchor" href="#适配器" aria-hidden="true">#</a> 适配器</h2><p>通过对象包装，解决接口数据结构不匹配，不改变已有接口，实现协同</p><h2 id="代理" tabindex="-1"><a class="header-anchor" href="#代理" aria-hidden="true">#</a> 代理</h2><p>为对象提供一个代用品或占位符，以便控制对它的访问</p><ul><li>场景：</li><li>优点：</li><li>分类： <ol><li>虚拟代理，把开销大的对象，延迟到真正需要时创建。 比较常用，如实现图片预加载，对象 A 负责创建 img 标签、设置 src，代理对象 B 设置 loading 图，监听 onload 后调用 A</li><li>保护代理，权限控制</li></ol></li></ul><h2 id="合成复用原则" tabindex="-1"><a class="header-anchor" href="#合成复用原则" aria-hidden="true">#</a> 合成复用原则</h2><h2 id="装饰器、包装" tabindex="-1"><a class="header-anchor" href="#装饰器、包装" aria-hidden="true">#</a> 装饰器、包装</h2><p>decorator/wrapper</p><p>在不改变元对象的基础上，对对象进行包装和拓展</p><p>将不同职责的代码装饰合并 不改变原有代码，直接修改原函数违返开闭原则</p><p>跟代理像，但代理是不方便访问本体，装饰是不确定全部功能</p><p>应用：</p><ul><li>分离业务代码和数据统计代码 Function.after</li><li>分离表单校验和合并 Function.before</li></ul><h2 id="享元" tabindex="-1"><a class="header-anchor" href="#享元" aria-hidden="true">#</a> 享元</h2><p>flyweight</p><p>内部状态相同、共享 对象太多，用时间换空间的性能优化</p><h2 id="模板方法" tabindex="-1"><a class="header-anchor" href="#模板方法" aria-hidden="true">#</a> 模板方法</h2><p>两部分：抽象父类和具体实现子类，父类封装子类的算法框架，子类继承</p><p>从多个子类中，分享共同点 轮廓，骨架，通用，穷举</p><h2 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式" aria-hidden="true">#</a> 命令模式</h2><p>可撤销，并发，程序无状态</p><h2 id="职责链" tabindex="-1"><a class="header-anchor" href="#职责链" aria-hidden="true">#</a> 职责链</h2><p>使多个对象都有机会处理请求，发送、多个接收解耦，传给第一个接收即可</p><p>应用：</p><ul><li>多种支付场景，优惠券，库存</li></ul><h2 id="notes-copy" tabindex="-1"><a class="header-anchor" href="#notes-copy" aria-hidden="true">#</a> notes copy</h2><ol><li><p>设计模式是一门语言加速程序员之间的沟通效率</p></li><li><p>设计模式为了解决特定问题每个设计模式都有优缺点，使用就要付出缺点的代价 a. Eg 观察者模式 i. 优点</p><ol><li>解耦 ii. 缺点</li><li>观察者模式会导致代码可读性和维护性下降</li></ol></li><li><p>设计模式只做一件事 a. 控制逻辑集中化</p></li><li><p>设计模式分为三种 a. 创建 i. 目的为了创建对象 ii. 创建对象配置化，本身就是满足了设计模式的精髓，目的是灵活 b. 结构</p><ol><li>处理类或对象的组合</li><li>处理功能的组合关系 c. 行为</li><li>描述类和对象怎么交互和怎样分配职责</li><li>数据和数据处理分离</li></ol><ol><li>任何的代码都是 a) 数据结构 b) 算法逻辑</li></ol></li><li><p>重点记忆 a. 创建型</p><ol><li>工厂</li><li>建造者</li><li>单例 b. 结构型</li><li>适配器</li><li>装饰</li><li>享元</li><li>代理 c. 行为型</li><li>责任连</li><li>命令</li><li>观察者</li><li>策略</li><li>访问者</li><li>模板方法</li></ol></li><li><p>工厂方法 a. 简单工厂</p><ol><li>控制集中化，可以只维护一个地方的代码 b. 工厂方法的缺点</li><li>开闭原则 c. 解决问题的思路</li><li>工厂方法输出接口</li></ol></li><li><p>建造者模式 a. 组合的过程配置化 b. 是一步一步创建一个复杂对象 c. 将一个复杂的对象构建与他的表示分离 d. 创建逻辑集中化</p></li><li><p>单例 a. 作用 1. 定义一个全局变量可以确保对象 2. 可以随时都可以被访问 3. 但不能防止我们的实例化多个对象 b. 单例的核心是 1. 配置核心化，配置集中 2. 解决系统控制粒度的核心化</p></li><li><p>适配器 a. 一个接口转换成另一个兼容接口 b. 使用场景 1. 第三方系统对接 2. 隔离外部变化时 c. 本质 1. 控制逻辑集中化、变化逻辑集中化 2. 就是一个变化的处理函数 3. 把变化的处理成使用不可变的数据 d. 引申 1. 生态系统稳定</p></li><li><p>代理模式 查一下代理模式的常用场景，具体优点</p></li></ol>',40),F={href:"https://pattern.windliang.wang/posts/%25E5%2589%258D%25E7%25AB%25AF%25E7%259A%2584%25E8%25AE%25BE%25E8%25AE%25A1%25E6%25A8%25A1%25E5%25BC%258F%25E7%25B3%25BB%25E5%2588%2597-%25E5%259F%25BA%25E6%259C%25AC%25E5%258E%259F%25E5%2588%2599.html",target:"_blank",rel:"noopener noreferrer"},M=l("前端的设计模式系列-基本原则 | 前端的设计模式系列");c.render=function(l,o){const c=n("RouterLink"),D=n("OutboundLink");return a(),s(e,null,[i,p("nav",u,[p("ul",null,[p("li",null,[p(c,{to:"#设计原则"},{default:t((()=>[r])),_:1}),p("ul",null,[p("li",null,[p(c,{to:"#里氏替换"},{default:t((()=>[k])),_:1})])])]),p("li",null,[p(c,{to:"#发布订阅"},{default:t((()=>[d])),_:1})]),p("li",null,[p(c,{to:"#策略模式"},{default:t((()=>[b])),_:1})]),p("li",null,[p(c,{to:"#工厂方法"},{default:t((()=>[h])),_:1})]),p("li",null,[p(c,{to:"#单例"},{default:t((()=>[f])),_:1})]),p("li",null,[p(c,{to:"#建造器"},{default:t((()=>[m])),_:1})]),p("li",null,[p(c,{to:"#适配器"},{default:t((()=>[y])),_:1})]),p("li",null,[p(c,{to:"#代理"},{default:t((()=>[g])),_:1})]),p("li",null,[p(c,{to:"#合成复用原则"},{default:t((()=>[w])),_:1})]),p("li",null,[p(c,{to:"#装饰器、包装"},{default:t((()=>[v])),_:1})]),p("li",null,[p(c,{to:"#享元"},{default:t((()=>[x])),_:1})]),p("li",null,[p(c,{to:"#模板方法"},{default:t((()=>[E])),_:1})]),p("li",null,[p(c,{to:"#命令模式"},{default:t((()=>[_])),_:1})]),p("li",null,[p(c,{to:"#职责链"},{default:t((()=>[A])),_:1})]),p("li",null,[p(c,{to:"#notes-copy"},{default:t((()=>[B])),_:1})])])]),j,p("p",null,[p("a",L,[S,p(D)])]),C,p("p",null,[p("a",F,[M,p(D)])])],64)};export default c;
