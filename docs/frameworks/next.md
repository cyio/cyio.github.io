# Next

`Next.js` 是一个 React 应用程序的服务端渲染框架、全栈框架

集成 css module

服务商级别的优化和便利

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


## nest 区别

`Nest.js` 是一个基于 Node.js 平台的开发框架，类似 eggjs


## fast refresh

与 HMR 类似？

## 编译

5000个模块，intel 编译 5-10s，m1 2-4s，快一倍
