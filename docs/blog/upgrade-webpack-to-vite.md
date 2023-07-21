
第一次尝试 2021年7月3日，失败。第二次 2022年12月31日，成功

失败原因，前后端定制脚手架，不是 vue2 规范

## 迁移步骤

1. 基础迁移工具，帮我们做了很多事

`npx @originjs/webpack-to-vite buzz-bit`

脚本，会复制一个项目，执行生成 vite config 等动作
	![Pasted image 20221231113919.png](https://img.oaker.bid/?url=http://ww1.sinaimg.cn/large/4e5d3ea7ly1h9p5h8wfdxj20ip0d642v.jpg)

2. 上一步操作后，还有不少问题需要手动修改
	1. 页面白屏，检查 index.html 加载路径及文件内容
	2. require 改成 import
	3. node polyfill 这块最消耗时间，尝试多个网上方案不行，最终采用 [https://stackoverflow.com/a/74806555](https://stackoverflow.com/a/74806555)
	4. pwa 改用 vite 插件 https://vite-pwa-org.netlify.app/guide/
	5. npm 包不匹配等问题，手工解决

代码参考：[upgrade to vite · cyio/buzz-bit@8736ded](https://github.com/cyio/buzz-bit/commit/8736ded7df7b700b7aa7b4679d1a7e30ed2f4e62)

存在问题，由于使用了 server.proxy 配置，不支持启用 http2，网络请求并发阻塞，首次打开较慢