import{r as n,o as s,c as a,a as p,F as t,b as e,d as o}from"./app.31fc93bc.js";const l={},c=p("h1",{id:"使用-vue-js-构造可配置化表单",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#使用-vue-js-构造可配置化表单","aria-hidden":"true"},"#"),e(" 使用 Vue.js 构造可配置化表单")],-1),r=e("原文："),u={href:"https://juejin.im/post/59e4740251882578cb511d3e",target:"_blank",rel:"noopener noreferrer"},i=e("前端表单进阶之路：通过 Vue.js 实现表单可配置化 - 掘金"),k=o('<ul><li>如何实现表单内容的区别化和可配置化</li><li>需求一般有必填、格式校验</li><li>表单的核心是 Form（表单元素）和 Control（控件）</li><li>目标业务逻辑与控件逻辑分离</li><li>构造表单控件，通过函数式组件分离 input 和 textarea，便于独立维护</li><li>控件继承，如表单名称、生命周期，可以将统一的实现抽象为一个独立的类，应用到 mixin 机制</li><li>外部元素，如提交按钮、协议勾选，用 slot 机制注入</li><li>扩展，通过独立 Event Emitter 代理核心控件事件，暴露在<code>Vue.prototype</code>上</li><li>原生约束 required pattern</li></ul><p>页面结构</p><div class="language-pug ext-pug line-numbers-mode"><pre class="language-pug"><code><span class="token tag">form<span class="token attr-class">.form</span></span>\n  <span class="token tag"><span class="token attr-class">.form-line</span></span>\n    <span class="token tag"><span class="token attr-class">.form-control</span></span>\n      <span class="token tag">textarea<span class="token attributes"><span class="token punctuation">(</span><span class="token attr-name">name</span><span class="token punctuation">=</span><span class="token attr-value"><span class="token string">&#39;content&#39;</span></span><span class="token punctuation">)</span></span></span>\n  <span class="token tag"><span class="token attr-class">.form-line</span></span>\n    <span class="token tag"><span class="token attr-class">.form-control</span></span>\n      <span class="token tag">input<span class="token attributes"><span class="token punctuation">(</span><span class="token attr-name">type</span><span class="token punctuation">=</span><span class="token attr-value"><span class="token string">&#39;hidden&#39;</span></span><span class="token punctuation">,</span> <span class="token attr-name">name</span><span class="token punctuation">=</span><span class="token attr-value"><span class="token string">&#39;address&#39;</span></span><span class="token punctuation">)</span></span></span>\n      <span class="token comment">// 具体的控件实现</span>\n  <span class="token tag"><span class="token attr-class">.form-line</span></span>\n    <span class="token tag"><span class="token attr-class">.form-control</span></span>\n      <span class="token tag">input<span class="token attributes"><span class="token punctuation">(</span><span class="token attr-name">type</span><span class="token punctuation">=</span><span class="token attr-value"><span class="token string">&#39;text&#39;</span></span><span class="token punctuation">,</span> <span class="token attr-name">name</span><span class="token punctuation">=</span><span class="token attr-value"><span class="token string">&#39;contact&#39;</span></span><span class="token punctuation">)</span></span></span>\n  <span class="token tag">input<span class="token attributes"><span class="token punctuation">(</span><span class="token attr-name">type</span><span class="token punctuation">=</span><span class="token attr-value"><span class="token string">&#39;hidden&#39;</span></span><span class="token punctuation">,</span> <span class="token attr-name">name</span><span class="token punctuation">=</span><span class="token attr-value"><span class="token string">&#39;_token&#39;</span></span><span class="token punctuation">,</span> <span class="token attr-name">value</span><span class="token punctuation">=</span><span class="token attr-value"><span class="token string">&#39;1wev5wreb8hi1mn=&#39;</span></span><span class="token punctuation">)</span></span></span>\n  <span class="token tag">button<span class="token attributes"><span class="token punctuation">(</span><span class="token attr-name">type</span><span class="token punctuation">=</span><span class="token attr-value"><span class="token string">&#39;submit&#39;</span></span><span class="token punctuation">)</span></span></span> <span class="token plain-text">提交</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>期望通过配置生成表单</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textarea&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;validators&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token property">&quot;minlength&quot;</span><span class="token operator">:</span> <span class="token number">8</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tree&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;datasrc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;areaTree&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">3</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;contact&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;validators&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token property">&quot;regexp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;mobile&gt;&quot;</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p><code>my-line</code>组件</p>',6),b={href:"https://www.v2ex.com/t/753296",target:"_blank",rel:"noopener noreferrer"},m=e("基于 Vue 3.x 的 Form render - V2EX");l.render=function(e,o){const l=n("OutboundLink");return s(),a(t,null,[c,p("p",null,[r,p("a",u,[i,p(l)])]),k,p("p",null,[p("a",b,[m,p(l)])])],64)};export default l;
