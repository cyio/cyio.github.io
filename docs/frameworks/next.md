# Next.js

`Next.js` 是一个 React 应用程序的服务端渲染框架、全栈框架

集成 css module

服务商级别的优化和便利

## 特点

现代化框架需要哪些特性

1.  自动代码分割（跟 vue/react 脚手架类似，基于页面）：Next.js 会自动将页面和组件按需加载，提高页面加载速度和性能。
2.  服务器端渲染（vs 客户端渲染）：Next.js 支持服务器端渲染，可以提高 SEO 和首屏加载速度。
3.  静态文件服务（没区别）：Next.js 可以将静态文件直接服务于客户端，提高页面加载速度。
4.  自动优化（vs 手动）：Next.js 会自动分析页面和组件，进行优化，提高性能。
5.  热加载（有变化？）：Next.js 支持热加载，修改代码后可以快速看到效果。
6.  客户端路由：Next.js 支持客户端路由，可以提高用户体验。
7.  支持 TypeScript：Next.js 支持 TypeScript，提供了更好的类型检查和 IDE 支持。
8.  支持 API 路由（全栈）：Next.js 可以直接将 API 服务于客户端，方便构建前后端分离应用。
9.  支持多种部署方式：Next.js 可以部署在多种环境中，包括服务器、静态托管服务和云函数等。

## hello world

pages -> next -> next build -> next start(prod)
```
mkdir hello-next
cd hello-next
npm init -y
npm install --save react react-dom next
mkdir pages

{
  "scripts": {
    "dev": "next"
  }
}

import Link from 'next/link'
```

pages 目录最关键，不可变，考虑全放到 pages 目录下


## 与 Nest.js 区别

`Nest.js` 是一个基于 Node.js 平台的开发框架，类似 eggjs


## fast refresh

与 HMR 类似？

## 编译

5000个模块，intel 编译 5-10s，m1 2-4s，快一倍


React 服务器组件也是如此。人们听到“服务器”并假设是 Node.js。但 RSC 可以在构建期间运行。事实上，在 Next 13 App Router 中它是*默认值*。如果你在 RSC 中获取（）某些东西，它将*在构建时*，除非你选择动态渲染。

我们看到的转变（是的，正在努力实现）并不是从“编写 SPA”到“不编写 SPA”。它是从“被锁定在 SPA 中”（以后很难添加内置时间或服务器端集成）到“使用对每个页面有意义的任何模式”。hybrid era.

这是一种转变，但主要是一种心理转变。

[Next.js SPA example with dynamic client-only routing and static hosting](https://gist.github.com/gaearon/9d6b8eddc7f5e647a054d7b333434ef6)

[Map of React API - JulesBlom.com](https://julesblom.com/writing/map-of-react-api)

## 原理

1. 将 pages 的文件编译
2. 编译时根据文件结构顺便把路由配置表生成
3. 请求时根据请求路径去路由表查询结果，最后根据路由动态加载相应的页面文件。

## 自动优化

1.  自动代码分割：Next.js 会自动将页面和组件按需加载，提高页面加载速度和性能。
2.  预取：Next.js 会自动分析页面和组件的依赖关系，提前加载可能需要的资源，从而减少页面加载时间。
3.  缓存：Next.js 会自动缓存静态资源和页面数据，提高页面加载速度和性能。
4.  压缩和混淆：Next.js 会自动压缩和混淆 JavaScript 和 CSS 代码，减少文件大小，提高页面加载速度和性能。
5.  图像优化：Next.js 会自动优化图像，包括压缩、缩放和 WebP 转换等，提高页面加载速度和性能。
6.  预渲染：Next.js 支持预渲染，可以将页面预先生成为静态 HTML 文件，提高 SEO 和首屏加载速度。

## Image 组件

性能：最优格式和体积
体验：占位

内转 proxy server，可处理远程图片

后缀名与 MIME 可能不一致

## 打包部署

默认输出到 .next 文件夹

### 自托管

自己搭个 node 环境，体验落后且维护成本高

导出纯静态托管
[Advanced Features: Static HTML Export | Next.js](https://nextjs.org/docs/advanced-features/static-html-export)

### vercel 部署优化

api 路由走 serverless function，无限扩容
Middleware 走 edge function，快速启动

git 钩子自动部署

1.  什么是 Next.js 的服务器端渲染（SSR）？有什么优点和缺点？
	- 优点：首屏、SEO
	- 缺点：开发、部署成本，服务器压力
1.  如何在 Next.js 中使用数据获取（Data Fetching）？有哪些方式可以实现数据获取？
2.  什么是 Next.js 的静态生成（Static Generation）？与服务器端渲染有何不同？
3.  如何在 Next.js 中实现动态路由（Dynamic Routing）？有哪些注意点？
4.  如何在 Next.js 中实现代码分割（Code Splitting）？有哪些常见的代码分割策略？

### 多服务器

build id 是随机的，多个不同的构建会导致缓存失效。解决方案是定制 buid id 方法，比如使用 git commit id

[How To Deploy Next.js on Multiple Servers | Level Up Coding](https://levelup.gitconnected.com/how-to-deploy-next-js-on-multiple-servers-3b493d4ce0e9)

## 数据获取

getStaticProps 构建时预渲染，不怎么变的数据。框架勾子，拿到的数据，以 prop 传递给组件
getServerSideProps 实时更新
getStaticPaths 动态路由

![640 (1080×538)](https://mmbiz.qpic.cn/mmbiz_png/ZCdKIQujeZya9N0I4XCYSNLb8bVXoCicArsOTUhGto6QmADytvuZL2R0y7Wpbd4EHH2GblTVVWxWuHkZoibPljrQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## 国内

umi

如果是今年选Node.js Web框架，大概只有Midway、Nest和next.js了

## 缺点

不适合深度定制
适合大厂吗？

[我看Next.js：一个更现代的海王](https://mp.weixin.qq.com/s/5Ir7EoHLo37bs6W5WNa-Tw)


## prisma

[[prisma]]