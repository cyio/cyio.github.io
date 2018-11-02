---
title: 解决 Vue 多页编译慢问题
date: 2018-10-04
description: 
---
# 解决 Vue 多页编译慢问题

## 问题描述：
vue-cli 创建的项目配置多页后，随着多页入口的增加，编译日渐缓慢，严重影响开发效率。

目前项目 12 个入口，启动服务 21 秒，热编译 3 秒（每保存一次代码，需要等 3 秒才能看效果）。

检查发现主要是`html-webpack-plugin`这个插件处理时间长，应该是原来针对单页设计，缺乏对多页的优化支持。

插件官方已经有对多页编译有一定优化的 4.x 版本，需要 webpack 4 的支持，尚未正式发布（vue-cli 3 引用的还是 3.x）

## 解决步骤：
1. 升级 vue-cli 3 正式版，webpack 升到 4
2. 本地克隆`html-webpack-plugin`，并检出需要的特性分支
    ```
    cd node_modules/@vue/cli-service/node_modules
    git clone https://github.com/jantimon/html-webpack-plugin.git
    git checkout feature/cache-file-timestamps
    ```
3. 第 2 步操作完后，执行`yarn serve`无法启动服务，与`@vue/preload-webpack-plugin`有冲突，vue 官方对这个插件有定制，不好升级
4. 禁用`preload`和`prefetch`插件，目前用不到，后续如果需要可以在最终打包时启用
    ```js
    // vue.config.js
    module.exports = {
        chainWebpack: (config) => {
            Object.keys(pagesObj).forEach(entryName => {
                config.plugins.delete(`prefetch-${entryName}`)
                config.plugins.delete(`preload-${entryName}`)
            })
            config.plugins.delete('pwa')
        },
    ```

## 结果
启动服务 15 秒，热编译 0.16 - 2 秒之间，至少节省 33% 的时间

在脚手架调整后，项目开发人员只要执行第 2 步替换旧的`html-webpack-plugin`插件即可
## 参考
[feat(compiler): Use a single compiler for multiple plugin instances by jantimon · Pull Request #967 · jantimon/html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin/pull/967)

[Multiple entry points -> multiple html outputs webpack rebuild very slow · Issue #724 · jantimon/html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin/issues/724#issuecomment-419885840)

[关于webpack多入口热加载很慢的原因 - 掘金](https://juejin.im/post/5af46971f265da0b95272330)
