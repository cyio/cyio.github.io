# Next.js

`Next.js` 是一个 React 应用程序的服务端渲染框架、全栈框架

集成 css module

服务商级别的优化和便利

## Hello World 示例

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

pages 目录最关键，不可变

## 与 Nest.js 区别

`Nest.js` 是一个基于 Node.js 平台的开发框架，类似 eggjs

## fast refresh

- 类似于 HMR（热模块替换），允许在开发过程中实时查看更改。

## 编译

5000个模块，intel 编译 5-10s，m1 2-4s，快一倍

[Next.js SPA example with dynamic client-only routing and static hosting](https://gist.github.com/gaearon/9d6b8eddc7f5e647a054d7b333434ef6)

[Map of React API - JulesBlom.com](https://julesblom.com/writing/map-of-react-api)

## 原理

1. 编译 pages 目录的文件
2. 根据文件结构生成路由配置表
3. 根据请求路径查询路由表并动态加载页面文件

## Image 组件

- 性能优化：选择最优格式和体积。
- 提供占位符。
- 内置代理服务器处理远程图片。

## 打包部署

- 默认输出到 `.next` 文件夹。
- **自托管**：需维护 Node.js 环境，体验和维护成本较高。
- **静态托管**：可以将应用导出为纯静态网站。

[Advanced Features: Static HTML Export | Next.js](https://nextjs.org/docs/advanced-features/static-html-export)

### Vercel 部署优化

- API 路由走 serverless function，无限扩容。
- Middleware 走 edge function，快速启动。
- 使用 Git 钩子进行自动部署。

### 部署到 cloudflare

https://github.com/cloudflare/next-on-pages 基于已有项目执行

### 多服务器

build id 是随机的，多个不同的构建会导致缓存失效。解决方案是定制 buid id 方法，比如使用 git commit id

[How To Deploy Next.js on Multiple Servers | Level Up Coding](https://levelup.gitconnected.com/how-to-deploy-next-js-on-multiple-servers-3b493d4ce0e9)

## 数据获取

- **`getStaticProps`**：构建时预渲染，不常变化的数据。
- **`getServerSideProps`**：实时获取数据。
- **`getStaticPaths`**：构建时生成静态页面，支持动态路由。

> 在构建时，Next.js将使用getStaticPaths返回的参数值来生成静态页面。对于每个参数值，Next.js将调用getStaticProps函数，获取该参数的静态数据，并将其传递给页面组件作为props。

![[image/next-1722578971144.webp]]

## 国内

- Umi、Midway、Nest.js 和 Next.js 是主要选择。

## 缺点

不适合深度定制
适合大厂吗？

[我看Next.js：一个更现代的海王](https://mp.weixin.qq.com/s/5Ir7EoHLo37bs6W5WNa-Tw)

	Next.js 的事情相当复杂。开发服务器做了太多事情。复杂度转移，开发简单，部署迁移复杂。
可迁移性不确定、支持度不确定。平台捆绑。

[Want Next.js at the edge? Just use Vercel | Not a blog](https://zhuhaow.me/want-nextjs-at-edge-just-use-vercel/)

https://www.v2ex.com/t/938396
## prisma

[[prisma]]