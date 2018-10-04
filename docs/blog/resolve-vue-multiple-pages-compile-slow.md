---
title: 解决 Vue 多页编译慢问题
date: 2018-10-04
description: 
---
# 解决 Vue 多页编译慢问题

## 问题描述：
编译慢，启动服务 21 秒，热编译 3 秒（每保存一次代码，需要等 3 秒才能看效果）

检查发现`html-webpack-plugin`这个插件处理多页很慢，每增加一个多页入口，处理时间增加。

对多页编译优化的分支版本需要 webpack 4 的支持

[feat(compiler): Use a single compiler for multiple plugin instances by jantimon · Pull Request #967 · jantimon/html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin/pull/967)
## 解决过程：
* 升级 vue-cli 3 正式版，webpack 升到 4
* 在`node_modules/@vue/cli-service/`目录下
    ```
    cd node_modules
    git clone https://github.com/jantimon/html-webpack-plugin.git
    git checkout feature/cache-file-timestamps
    ```
* 运行`yarn serve`无法启动服务，与`@vue/preload-webpack-plugin`有冲突，vue 官方对这个插件有定制，不好升级
* 禁用`preload`和`prefetch`插件，目前用不到，后续如果需要可以在最终打包时启用
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
## 参考
[Multiple entry points -> multiple html outputs webpack rebuild very slow · Issue #724 · jantimon/html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin/issues/724#issuecomment-419885840) 
[关于webpack多入口热加载很慢的原因 - 掘金](https://juejin.im/post/5af46971f265da0b95272330)
