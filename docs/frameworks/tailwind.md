# Tailwind CSS

## 需求

- 替代一部分设计师工作-出设计稿
- 替代一部分前端工作-还原设计稿

## 单位

默认 0.25rem == 4px，桌面端 x4 就好了

## 布局

## 盒模型

py-6  padding-y 纵轴

## 颜色

bg-gray-50 到 bg-gray-950 明度

shadow-xl 2xl

ring-0 搭边，0 表示去除

ring-gray-900/5 gray-500 是颜色，5 是边的大小

## 字体

leading-7 行间距为字体大小的 1.7 倍

## 组件库

[Sailboat UI - Modern UI component library for Tailwind CSS](https://sailboatui.com/)
[daisyUI — Tailwind CSS Components](https://daisyui.com/)
[http://Tailblock.cc](https://link.zhihu.com/?target=http%3A//Tailblock.cc) ，有一系列可以直接拿来用的 tailwind 组件

[现代化的CSS](https://gist.github.com/banyudu/32792f05c07cc7f32575f51198e510d4)

[前端成功转型后端开发的机会在哪里；如何评价框架TailwindCSS；前端的未来是远程工作吗｜极客观点-阿里云开发者社区](https://developer.aliyun.com/article/1036306)

## 官网

tailwindui 是官方商业项目，百万美元生意

## 与 bootstrap 比较

同质化严重

utility-first，随意组合、自由度高


## 使用体验&技巧

> 我使用tailwindcss的原因：官方的插件提示效果非常好，基本上不需要动方向键。而且官方还有个插件可以自动对class的内容排序，所以写的时候不需要思考顺序。基本上不需要命名，直接在class属性中使用。真的能少写好多css，写媒体响应式很方便（sm:hidden等等）不需要来回跳文件。写网页真的太快了。@apply命令也可以解决复用性的问题（不过这就要考虑命名了）

> 我认为完全用 TailwindCSS 写项目会比较累，有不小的学习成本，也影响代码阅读。但是配合其它整套的组件库就很合适

- 需要 CSS 基础，编写体验与写 CSS 加补全类似
- postcss 替代 sass/less


## script 方式

https://cdn.tailwindcss.com/ 会 302 重定向到最新版，100kb 大小

## 编辑器

官方插件，相当于带有翻译功能

排序，解决可读问题

## playground

live 看效果

下方检查编译产出

右上角 Tidy 格式化整体

https://play.tailwindcss.com/