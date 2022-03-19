(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{678:function(e,t,r){"use strict";r.r(t);var s=r(56),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"proxy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[e._v("#")]),e._v(" proxy")]),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#browsersync"}},[e._v("browsersync")])]),r("li",[r("a",{attrs:{href:"#whistle"}},[e._v("whistle")])]),r("li",[r("a",{attrs:{href:"#api"}},[e._v("api")])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"browsersync"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#browsersync"}},[e._v("#")]),e._v(" browsersync")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("$ browser-sync start --proxy "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'localhost:1234'")]),e._v(" --files "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'app'")]),e._v("\n")])])]),r("p",[r("a",{attrs:{href:"https://elemefe.github.io/sip/browsersync/command-line.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("命令行使用 · GitBook"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"whistle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#whistle"}},[e._v("#")]),e._v(" whistle")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://wproxy.org/whistle/install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("安装启动 · GitBook"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("android 有的应用如 youtube/playstore 不走系统代理")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/avwo/whistle/issues/63",target:"_blank",rel:"noopener noreferrer"}},[e._v("有些 App 不能通过代理访问，这种情况有没有办法能抓包？ · Issue #63 · avwo/whistle"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"http://wproxy.org/whistle/rules/socks.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("socks · GitBook"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/avwo/whistle/blob/5599fbc1fb71a49fbcd1e39723a2b2011a923fec/docs/zh/rules/jsAppend.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("whistle/jsAppend.md at 5599fbc1fb71a49fbcd1e39723a2b2011a923fec · avwo/whistle"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/79037633",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 Whistle 作为你的 Web 调试工具吧 - 知乎"),r("OutboundLink")],1)]),e._v(" "),r("blockquote",[r("p",[e._v("通过whistle配置的host是不会缓存\n"),r("a",{attrs:{href:"https://wproxy.org/whistle/rules/disable.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("disable · GitBook"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://diygod.me/web-debugging-proxy/",target:"_blank",rel:"noopener noreferrer"}},[e._v("科学的 Web 调试代理实践 | Hi, DIYgod"),r("OutboundLink")],1)]),e._v(" "),r("ul",[r("li",[e._v("修改响应头")]),e._v(" "),r("li",[e._v("修改响应内容（不需要另外指定 key）")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('*/mock file://({"code":12345,"message":"some_logic_error"}) # 模拟业务逻辑异常\n\n*/mock statusCode://502 # 模拟 HTTP 状态码异常\n\n# 本地静态 server\n# 规则：自定义域名或URL<空格>本地目录路径 （以下示例请替换为自己本地的写法）\nmy.demo/bw/ file:///Users/kaiye/Projects/Demo/002-black-white/\n\n# 返回内容替换\n``rule\naaa: bbb\n``\n^www.xx.app/chunk-vendors.*.js resReplace://{rule}\n\n# 对某些域名不拦截\n/xx.xx.com/ disable://intercept\n\n# 任意域名绑定到本地任意服务\nhttps://my.demo/ 127.0.0.1:8080\n\n# 重写该域名的后端接口路径到线上服务地址\nhttps://my.demo/api/ https://backend.example.com/api/\n\n# 或直接转发到局域网某台机器的具体端口\nhttps://my.demo/api2/ http://127.0.0.1:3000\n\n# 把https请求转成http\nhttps://www.test.com http://www.test.com\n\n# 把根路径的请求转发到指定的ip和端口\n/^https?:\\/\\/www\\.test\\.com(:\\d*)?\\/?(\\?|$)/ 192.168.30.118:8877\n\n# 处理后缀为gif|jpg|jpeg|png|bmp|swf|ico|js|css|html的请求\n/^https?:\\/\\/www\\.test\\.com(:\\d*)?\\/[^?]*\\.(gif|jpg|jpeg|png|bmp|swf|ico|js|css|html)(\\?|$)/i 127.0.0.1:8080\n\n')])])]),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/kaiye/p/10137592.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用whistle模拟cgi接口异常：错误码、502、慢网速、超时 - 猫哥_kaiye - 博客园"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://www.cnblogs.com/kaiye/p/9628692.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 whistle 替代本地 nginx/webpack 服务 - 猫哥_kaiye - 博客园"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")]),e._v(" api")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("https://bird.ioliu.cn/v1/?url=")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);