# vite

ES6 module + rollup-based fro production

浏览器原生支持，实现无刷更新。

[Vite & VitePress @ Vue Toronto 2020 - Google 幻灯片](https://docs.google.com/presentation/d/1X1hrFw18v67bEniTPpaI_DBulLdkKNFEc_3nVEm95mM/edit#slide=id.p)

[博客重构于Vite - 程沛权 - 养了三只猫](https://chengpeiquan.com/article/rewrite-in-vite.html)

Tailwind CSS

- 需要 CSS 基础，编写体验与写 CSS 加补全类似
- postcss 替代 sass/less

静态资源处理，借助 npm & CDN

旧页面 301 重定向到新页面

## ES module based dev server VS Bundle based dev server

- 全量打包，项目越大，打包越慢
  - 解析每个文件的导入导出关系
  - 排序、重写，连接模块
- 代码分割是针对生产环境

## 问题，模块多，HTTP 请求多

1. 预打包依赖，一个依赖一个请求
2. etag & 304
3. 代码分割，ES module 同时支持 dev & prod

## 依赖预构建
原因
1. 兼容性，cjs/umd 转为 esm
2. 性能，减少请求数