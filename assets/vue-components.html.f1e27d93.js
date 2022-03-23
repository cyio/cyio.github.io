import{r as n,o as s,c as e,a,F as l,d as r,b as i}from"./app.31fc93bc.js";const p={},b=r('<h1 id="vue-components" tabindex="-1"><a class="header-anchor" href="#vue-components" aria-hidden="true">#</a> vue-components</h1><ul><li>目录结构</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;/examples/qiyun-el-ui/\n▸ lib/\n▸ node_modules/\n▾ packages/\n  ▾ qe-modal/ -- 组件\n    ▾ src/\n        qe-modal.vue\n      index.js\n    index.js\n▸ public/\n▾ src/ -- 用于调试\n  ▸ assets/\n  ▸ components/\n  ▾ plugins/ -- 自动安装\n      element.js\n    App.vue\n    main.js\n  babel.config.js\n  LICENSE\n  package.json\n  README.md\n  vue.config.js\n  yarn.lock\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ul><li>element 引用配置在 babel.config.js</li><li>在 App.vue 中引入测试</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import QeModal from &#39;../packages/qe-modal/src/qe-modal.vue&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>在 main.js 中引入</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import &#39;./plugins/element.js&#39;\nimport &#39;element-ui/lib/theme-chalk/button.css&#39;\nimport &#39;element-ui/lib/theme-chalk/dialog.css&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',7),u={href:"https://github.com/athena0304/qiyun-el-ui",target:"_blank",rel:"noopener noreferrer"},c=i("athena0304/qiyun-el-ui: based on element-ui");p.render=function(r,i){const p=n("OutboundLink");return s(),e(l,null,[b,a("p",null,[a("a",u,[c,a(p)])])],64)};export default p;
