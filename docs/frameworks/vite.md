# vite

ES6 module + rollup-based for production

浏览器原生支持，实现无刷更新。

静态资源处理，借助 npm & CDN

旧页面 301 重定向到新页面

## 与 webpack 比较

定位不同，vite 是上层工具链，依赖 rollup，而 webpack 与 rollup 对标

## ES module based dev server VS Bundle based dev server

- 全量打包，项目越大，打包越慢
  - 解析每个文件的导入导出关系
  - 排序、重写，连接模块
- 代码分割是针对生产环境

[[vite多久后能干掉webpack？ - 知乎]]

## 问题，模块多，HTTP 请求多

1. 预打包依赖，一个依赖一个请求
2. etag & 304
3. 代码分割，ES module 同时支持 dev & prod

## 依赖预构建

原因
1. 兼容性，cjs/umd 转为 esm
2. 性能，减少请求数

## 引用

[Vite & VitePress @ Vue Toronto 2020 - Google 幻灯片](https://docs.google.com/presentation/d/1X1hrFw18v67bEniTPpaI_DBulLdkKNFEc_3nVEm95mM/edit#slide=id.p)

[博客重构于Vite - 程沛权 - 养了三只猫](https://chengpeiquan.com/article/rewrite-in-vite.html)


>vite在dev下有明显的性能提升，体验是飞速的，但是在浏览器请求页面时，会同时加载大量js文件，这导致在速度上也有一定的牺牲，而webpack在构建上确实会慢很多，并且项目的文件越多越慢，但是一但构建好，在浏览器端体验是要比vite快的。另外vite即便是在生产环境下采用rollup对文件进行打包，但是对于IE的支持还是不好，并且生产打包的速度和webpack基本上一致，总之，如果项目已经很稳定并且很庞大，不建议换vite。

[B端系统改造Vite最佳实践 | 吕小鸣前端博客](https://www.nihaoshijie.com.cn/index.php/archives/1903/)

## Rolldown

[尤雨溪：Vite的现状与未来展望 - 前端充电宝 - 博客园](https://www.cnblogs.com/cuggz/archive/2023/10/06/17744353.html)