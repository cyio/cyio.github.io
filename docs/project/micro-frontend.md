# 微前端

微服务（后端）延伸

- 技术栈无关性
- 开发、发布及部署独立
- 应用隔离

[初探 MicroApp，一个极致简洁的微前端框架 - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1967842)

[标准微前端架构在蚂蚁的落地实践-阿里云开发者社区](https://developer.aliyun.com/article/742576)

qiankun 侵入性强，沙箱坑较多

## 自定义元素

[Custom elements](https://javascript.info/custom-elements)

浏览器原生支持的组件

connectedCallback 挂载

attributeChangedCallback & attributeChangedCallback 观察属性变化，回调，数据驱动调用

用 polyfill 可支持所有浏览器

通信：CustomEvent

SSI 服务端渲染包含，比较老的技术
缺点：最慢的片段决定了整个页面的响应时间

[微前端——将微服务理念扩展到前端开发](https://micro-frontends.org/)
