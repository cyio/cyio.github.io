# JSON

## 解析比 JS 对象高效
> 因为JSON语法比JavaScript的语法简单得多，所以可以比JavaScript更有效地解析JSON。 这些知识可用于提高Web应用程序的启动性能，这些
> 应用程序可提供类似JSON的大型配置对象文字（例如内联Redux存储）。 而不是将数据内联为JavaScript对象文字，
> 如果您的Web应用程序将类似JSON的配置作为JavaScript对象文字传递，请考虑使用JSON.parse。 它的速度要快得多，特别是对于冷负荷
[The cost of JavaScript in 2019 · V8](https://v8.dev/blog/cost-of-javascript-2019#json)
[Evan You 正在使用 Twitter：“@mathias @Atinux does Nuxt already do this for store state?” / Twitter](https://mobile.twitter.com/youyuxi/status/1143682079978397696)

## fx 命令行 JSON 处理
* 浏览器开发工具 xhr 请求上复制 curl
* 默认打开是折叠，要展开加`.`
    ```sh
    fx data.json
    fx .
    fx .data
    fx .data > .git/data.json
    fx .data .result 'this[0]'
    ```
* 选中`Option+Mouse	`
