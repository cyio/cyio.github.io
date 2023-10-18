# Tailwind CSS

## 需求

- 替代一部分设计师工作-出设计稿
- 替代一部分前端工作-还原设计稿
## 优劣

- 不用给 class 起名，同时避免全局污染

## 原理

设计理念：原子类、组合

> tailwind 本质上就是一个 postcss 插件，通过 AST 来分析 css 代码，对 css 做增删改，并且可以通过 extractor 提取 js、html 中的 class，之后基于这些来生成最终的 css 代码。

### JIT 编译:

通过 Just-In-Time (JIT) 编译，Tailwind CSS 会在构建时根据项目中实际使用的类生成精简的 CSS，而不会包含未使用的样式，从而减小 CSS 文件的大小。

## 单位

默认 1 个单位 0.25rem == 4px，桌面端 x4 就好了

gap-4  4个单位的间距，Tailwind 预定义 1 个单位 0.25rem spacing

## 布局

```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <!-- 这里放置栅格项 -->
  <div class="bg-gray-200 p-4">栅格项 1</div>
  <div class="bg-gray-200 p-4">栅格项 2</div>
  <div class="bg-gray-200 p-4">栅格项 3</div>
  <div class="bg-gray-200 p-4">栅格项 4</div>
</div>

```

## 盒模型

py-6  padding-y 纵轴

## 颜色

bg-gray-50 到 bg-gray-950 明度/色阶

bg-gray-950/50 加上 50% 透明

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

## 商业模式

tailwindui 是官方商业项目，百万美元生意

## 与 bootstrap 比较

bootstrap 基于组件

同质化严重

tailwind utility-first，随意组合、自由度高

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

https://ui.shadcn.com/

## 速查

1. **布局 (Layout)**:
    
    - `container`: 设置页面宽度和内边距，使内容居中。
    - `mx-auto`: 设置左右外边距为自动以水平居中内容。
    - `flex`: 创建一个弹性容器，用于创建灵活的布局。
    - `grid`: 创建一个网格容器，用于网格布局。
    - `col-span-{n}`: 定义一个网格列的跨度，其中 `{n}` 是一个整数。
2. **背景 (Background)**:
    
    - `bg-{color}`: 设置背景颜色，其中 `{color}` 是一个颜色名称或颜色代码。
    - `bg-opacity-{value}`: 设置背景颜色的不透明度，其中 `{value}` 是 0 到 100 之间的数字。
3. **文本 (Typography)**:
    
    - `text-{color}`: 设置文本颜色。
    - `text-opacity-{value}`: 设置文本颜色的不透明度。
    - `text-{size}`: 设置文本大小，其中 `{size}` 可以是类似 `sm`、`lg`、`xl` 的尺寸。
    - `font-{weight}`: 设置字体粗细，其中 `{weight}` 可以是 `normal`、`bold`、`semibold` 等。
4. **边框 (Border)**:
    
    - `border`: 添加边框。
    - `border-{color}`: 设置边框颜色。
    - `border-{width}`: 设置边框宽度，其中 `{width}` 可以是 `1`、`2`、`4` 等。
    - `rounded`: 添加圆角边框。
    - `border-opacity-{value}`: 设置边框颜色的不透明度。
5. **间距 (Spacing)**:
    
    - `m-{size}`: 设置外边距。
    - `p-{size}`: 设置内边距。
6. **宽度和高度 (Width and Height)**:
    
    - `w-{size}`: 设置元素的宽度。
    - `h-{size}`: 设置元素的高度。
7. **阴影和动画 (Shadows and Animations)**:
    
    - `shadow-{size}`: 添加阴影效果。
    - `animate-{animation}`: 添加动画效果，其中 `{animation}` 是动画的名称。
8. **响应式 (Responsive)**:
    
    - `sm`, `md`, `lg`, `xl`: 用于在不同屏幕尺寸上应用不同的样式。

## 高级示例

### 卡片

```html
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
  <img class="w-full h-48 object-cover" src="https://via.placeholder.com/300x200" alt="Card image">
  <div class="px-6 py-4">
    <h3 class="text-xl font-semibold text-gray-800">卡片标题</h3>
    <p class="mt-2 text-gray-600">这是卡片的一些文本内容。你可以在这里添加更多信息。</p>
  </div>
</div>

```

## 布局

```html
<div class="p-2 text-center h-300 bg-slate-100">header</div>
<div class="flex">
  <div class="w-1/4 bg-gray-300 p-4 h-screen">left</div>
  <div class="w-3/4 p-4 h-screen">right</div>
</div>
```
## 自定义、扩展

1. 原始方式，直接定义 class
2. @layer 指令，明确添加到某一层

```
// 三层结构，优先级
base // 第一层，全局基础样式

components // 第二层，可被 util 规则覆盖

utilities
```

[Adding Custom Styles - Tailwind CSS](https://tailwindcss.com/docs/adding-custom-styles)

## 兼容性

不支持 IE

```
<div class="p-2 text-center h-300 bg-slate-100">header</div>

<div class="flex">

<div class="w-1/4 bg-gray-300 p-4 h-screen">left</div>

<div class="w-3/4 p-4 h-screen">right</div>

</div>
```

## 源码

`plugins` 数组： 这个数组包含了一系列的函数，它们在处理 CSS 样式时会被依次执行。这些函数用于处理导入规则、处理 Tailwind CSS 特性、以及应用 Lightning CSS 转换。

- `handleImportAtRules()`: 返回一些处理导入规则的函数。
- 一个异步函数，用于处理 Tailwind CSS 特性，通过调用 `processTailwindFeatures`。
- `lightningCssPlugin`: 用于将 CSS 样式应用 Lightning CSS 转换。

lightningcss rust 编写，光速，追求性能，类似 esbuild
可以控制 target

## 对比

| | | | | | |

|---|---|---|---|---|---|

|名称|star 数|定位|诞生时间|优劣|使用场景|

|Tailwind CSS|72.8k|实用的 CSS 框架，提供原子级样式|2017 年|优点：更灵活，可自定义样式，小型项目适用<br><br>缺点：学习曲线较陡峭，需要编写更多类名|小型项目、个性化设计、更灵活的需求|

|Bootstrap|166k|综合组件库|2011 年|优点：快速搭建，大型项目适用<br><br>缺点：较固定，自定义样式复杂|大型项目、快速开发、传统的网站建设|

|Element Plus|11.4k|综合组件库|2021 年|

|Ant Design Vue|3.6k|综合组件库|2019 年|