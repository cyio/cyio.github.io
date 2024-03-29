import{_ as s,c as a,o as n,a4 as e}from"./chunks/framework.4aTu-Nia.js";const k=JSON.parse('{"title":"proxy","description":"","frontmatter":{},"headers":[],"relativePath":"project/proxy.md","filePath":"project/proxy.md"}'),p={name:"project/proxy.md"},t=e(`<h1 id="proxy" tabindex="-1">proxy <a class="header-anchor" href="#proxy" aria-label="Permalink to &quot;proxy&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#browsersync">browsersync</a></li><li><a href="#whistle">whistle</a></li><li><a href="#api">api</a></li><li><a href="#反向代理与正向代理区别">反向代理与正向代理区别</a></li></ul></nav><h2 id="browsersync" tabindex="-1">browsersync <a class="header-anchor" href="#browsersync" aria-label="Permalink to &quot;browsersync&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> browser-sync</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;localhost:1234&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --files</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;app&#39;</span></span></code></pre></div><p><a href="https://elemefe.github.io/sip/browsersync/command-line.html" target="_blank" rel="noreferrer">命令行使用 · GitBook</a></p><h2 id="whistle" tabindex="-1">whistle <a class="header-anchor" href="#whistle" aria-label="Permalink to &quot;whistle&quot;">​</a></h2><p><a href="http://wproxy.org/whistle/install.html" target="_blank" rel="noreferrer">安装启动 · GitBook</a></p><p>android 有的应用如 youtube/playstore 不走系统代理</p><p><a href="https://github.com/avwo/whistle/issues/63" target="_blank" rel="noreferrer">有些 App 不能通过代理访问，这种情况有没有办法能抓包？ · Issue #63 · avwo/whistle</a><a href="http://wproxy.org/whistle/rules/socks.html" target="_blank" rel="noreferrer">socks · GitBook</a></p><p><a href="https://github.com/avwo/whistle/blob/5599fbc1fb71a49fbcd1e39723a2b2011a923fec/docs/zh/rules/jsAppend.md" target="_blank" rel="noreferrer">whistle/jsAppend.md at 5599fbc1fb71a49fbcd1e39723a2b2011a923fec · avwo/whistle</a><a href="https://zhuanlan.zhihu.com/p/79037633" target="_blank" rel="noreferrer">使用 Whistle 作为你的 Web 调试工具吧 - 知乎</a></p><blockquote><p>通过whistle配置的host是不会缓存 <a href="https://wproxy.org/whistle/rules/disable.html" target="_blank" rel="noreferrer">disable · GitBook</a></p></blockquote><p><a href="https://diygod.me/web-debugging-proxy/" target="_blank" rel="noreferrer">科学的 Web 调试代理实践 | Hi, DIYgod</a></p><ul><li>修改响应头</li><li>修改响应内容（不需要另外指定 key）</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>*/mock file://({&quot;code&quot;:12345,&quot;message&quot;:&quot;some_logic_error&quot;}) # 模拟业务逻辑异常</span></span>
<span class="line"><span></span></span>
<span class="line"><span>*/mock statusCode://502 # 模拟 HTTP 状态码异常</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 本地静态 server</span></span>
<span class="line"><span># 规则：自定义域名或URL&lt;空格&gt;本地目录路径 （以下示例请替换为自己本地的写法）</span></span>
<span class="line"><span>my.demo/bw/ file:///Users/kaiye/Projects/Demo/002-black-white/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 返回内容替换</span></span>
<span class="line"><span>\`\`rule</span></span>
<span class="line"><span>aaa: bbb</span></span>
<span class="line"><span>\`\`</span></span>
<span class="line"><span>^www.xx.app/chunk-vendors.*.js resReplace://{rule}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 对某些域名不拦截</span></span>
<span class="line"><span>/xx.xx.com/ disable://intercept</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 任意域名绑定到本地任意服务</span></span>
<span class="line"><span>https://my.demo/ 127.0.0.1:8080</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 重写该域名的后端接口路径到线上服务地址</span></span>
<span class="line"><span>https://my.demo/api/ https://backend.example.com/api/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 或直接转发到局域网某台机器的具体端口</span></span>
<span class="line"><span>https://my.demo/api2/ http://127.0.0.1:3000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 把https请求转成http</span></span>
<span class="line"><span>https://www.test.com http://www.test.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 把根路径的请求转发到指定的ip和端口</span></span>
<span class="line"><span>/^https?:\\/\\/www\\.test\\.com(:\\d*)?\\/?(\\?|$)/ 192.168.30.118:8877</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 处理后缀为gif|jpg|jpeg|png|bmp|swf|ico|js|css|html的请求</span></span>
<span class="line"><span>/^https?:\\/\\/www\\.test\\.com(:\\d*)?\\/[^?]*\\.(gif|jpg|jpeg|png|bmp|swf|ico|js|css|html)(\\?|$)/i 127.0.0.1:8080</span></span></code></pre></div><p>追加 sourcemap</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>\`\`\` sourceMappingURL</span></span>
<span class="line"><span>//# sourceMappingURL=http://127.0.0.1:8080\${url.path.replace(/yo\\/static\\/js\\/(.*)\\.js/ig,static/js/$1.js.map)}</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>^https://test.wawa.li.com/yo/static/js/*.js jsAppend://\`{sourceMappingURL}\`</span></span></code></pre></div><p><a href="https://www.cnblogs.com/kaiye/p/10137592.html" target="_blank" rel="noreferrer">使用whistle模拟cgi接口异常：错误码、502、慢网速、超时 - 猫哥_kaiye - 博客园</a><a href="https://www.cnblogs.com/kaiye/p/9628692.html" target="_blank" rel="noreferrer">使用 whistle 替代本地 nginx/webpack 服务 - 猫哥_kaiye - 博客园</a></p><h2 id="api" tabindex="-1">api <a class="header-anchor" href="#api" aria-label="Permalink to &quot;api&quot;">​</a></h2><ul><li><code>https://bird.ioliu.cn/v1/?url=</code></li></ul><h2 id="反向代理与正向代理区别" tabindex="-1">反向代理与正向代理区别 <a class="header-anchor" href="#反向代理与正向代理区别" aria-label="Permalink to &quot;反向代理与正向代理区别&quot;">​</a></h2><p>正向代理设置在客户端，服务器不知道真实用户的IP地址</p><p>反向代理设置在服务器，客户端不知道真实服务器地址</p><p>从目的和用途判断，反向代理一般是为了负载均衡、安全防护</p>`,23),l=[t];function i(r,o,c,h,d,b){return n(),a("div",null,l)}const g=s(p,[["render",i]]);export{k as __pageData,g as default};
