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
## 客户端导航

问题：使用 SSR  Link 导航，延迟明显
1. 使用客户端导航
2. 实现预加载（鼠标 hover 时）
3. 添加加载指示器

- **使用 Next.js 的 Link 组件**：在代码中，你使用了 `import Link from 'next/link'` 并在 header 中使用了 `<Link>` 组件。这是关键点，因为 Next.js 的 Link 组件是实现客户端导航的核心。
- **Link 组件的工作原理**：当用户点击 Link 组件时，Next.js 会拦截这个点击事件。然后，它会使用 JavaScript 来更新 URL 并获取新页面的内容，而不是让浏览器执行完整的页面刷新。这就是客户端导航的本质。
- **自动代码分割**：Next.js 会自动对你的应用进行代码分割。这意味着当用户导航到新页面时，只有那个页面所需的 JavaScript 代码才会被加载，而不是整个应用的代码。这使得导航更快。
- **预取**：默认情况下，Next.js 的 Link 组件会在视口中出现时自动预取链接页面的内容。这进一步提高了导航速度。
- **Layout 持久化**：使用这种 App Router 结构（带有 RootLayout），Next.js 可以在页面导航时保持共享的 layout 组件，只更新变化的部分。这也有助于提高导航性能。

## 数据请求

- 默认自动缓存，读 cache-control
	- 只要调整缓存时长，就能减轻 API 压力，应对 scale
- 优先使用 fetch，官方进行了扩展。如果使用第三方，需要手动管理
- 可以指定重新验证间隔，检查但未必更新，取决于内容是否有变化


## server side component

- 直接访问数据库
- 更安全，核心逻辑和敏感数据不泄漏
- 