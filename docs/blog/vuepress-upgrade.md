# VuePress 从 1.x 升级到 2.x

## 背景
vuepress 1.x 使用 webpack 和旧的模块系统，需要全量编译，随着 markdown 文件增多，耗时变长，体验下降。对于静心只是写一些笔记来说，难以忍受，因此，我平时都不开 dev 服务，改用编辑器的预览插件。

vite 采用 ES6 module，浏览器原生支持，实现无刷更新。

有两个升级选择，一是迁到 vitepress，二是升级到 2.x。前者功能相对少，尝试后放弃。

## 升级问题

- 配置不兼容

需要根据 2.x 文档，进行调整，主要变化涉及 sidebar、navbar，插件注册

- md 元素标签处理错误

元素标签`<hi />`出现在标题和链接里，也会被解析为 Vue 组件，导致出错。

- 不支持获取`$site.posts`，原自定义实现的 blog 功能无法使用


升级变更见代码
[Merge branch 'migrate-v2' into dev · cyio/cyio.github.io@e3b2320](https://github.com/cyio/cyio.github.io/commit/e3b2320f369324bd87b3aae45e7b19385b439653#diff-52eb86351480925d61947a58caca1ea76d10950ec26533f16f37cb12a3519dff)

## 感受

优点：无刷更新，值得升级

缺点：首次启动开发服务、慢了很多