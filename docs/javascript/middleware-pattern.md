# 中间件设计
[[toc]]

## 概念

洋葱模型：（先从皮到心，再从心到皮）把代码流程化，让流水线更加清楚，且每一个中间件都有两次处理时机

每一个切面是一个中间件

一般用在数据请求流程中间

https://segmentfault.com/a/1190000023684453

## 好处

> The best feature of middleware is that it's composable in a chain. You can use multiple independent third-party middleware in a single project.

可组合性、拓展性

单个中间件应该足够简单，职责单一

## 与 helper 区别

> ExpressJS is based on a pattern in which an incoming request is examined and possibly modified by a series of "middleware" objects. Every single enabled middleware receives every single incoming request. Sometimes they ignore the request, sometimes they add information to it for subsequent middleware objects, and sometimes they perform discreet actions like logging. Often they perform security functions such as checking where the incoming request is going and killing it if the user isn't sufficiently authorized.

> A helper function often has nothing specifically to do with ExpressJS - it's just a function that exists to provide a place for common operations performed by otherwise unrelated objects to exist, to avoid these unrelated objects repeatedly re-implementing the same code.

[Difference between middlewares and helpers? : node](https://www.reddit.com/r/node/comments/wgnyb8/difference_between_middlewares_and_helpers/)

## 弊端：

- API 难理解，需要理解中件间运作机制和其他中间件
- 问题排查难度上升，不同中间件互相影响

解决：
类似 egg 把业务逻辑做成 controller，背后是 koa 中件间，API 美化

## 前端如何正确使用中间件？

每个中间件可以实现：
1) 实现独立的某个逻辑
2) 控制后续的流程是否执行（权限、路由拦截、条件请求）
3) 中间件前置、或后置逻辑

## 客户端应用

- 中间件上下文不明确
- 中间件操作其它数据
- 看成服务层
- 中间件和下游使用者，是一拨人还是两拨人

“中间件的这种模式，应该作为某个函数的装饰者模式来使用”

[面试官：说说对中间件概念的理解，如何封装 node 中间件？ | web前端面试 - 面试官系列](https://vue3js.cn/interview/NodeJS/middleware.html)

逻辑复用、要组合性，通过将公共逻辑的处理编写在中间件中，可以不用在每一个接口回调中做相同的代码编写，减少了冗杂代码

request -> middleware -> response
middleware 解析、鉴权、错误
中间件是从 http 请求开始到响应结束过程中的处理逻辑，通常需要对请求和响应进行处理

一般用在接口请求过程，HTTP 无状态，比较简单。而前端业务，数据存在交叉维护

[Middleware | Egg](https://eggjs.github.io/zh/guide/middleware.html#%25E8%25B7%25AF%25E7%2594%25B1%25E4%25B8%25AD%25E9%2597%25B4%25E4%25BB%25B6)
https://oychao.github.io/2019/04/08/javascript/38_middleware_pattern/

[中间件模式在前端框架中的应用 | 传不习乎](https://oychao.github.io/2019/04/08/javascript/38_middleware_pattern/)

[优化实战 第35期 - 优秀源码之中间件设计思想 - 掘金](https://juejin.cn/post/7110855173789990942)

两次处理时机分界点，`yield next`

eggjs 插件和中间件的区别是，中间件一定是处理请求相关上下文的，但是插件不一定

## 应用场景

分为：
1. 服务端框架：express/koa
2. 前端库：数据管理(redux)、数据请求(axios 插件)

Koa 请求加 header，token 校验，日志，异常处理，压缩，body 解析

Koa 的中间件栈以类似栈的方式流动，允许您在下游执行操作，然后过滤和操作上游响应。

express 不支持 async/await

redux 数据流添加 logger/debugger

axios 请求响应拦截器，没有 next，不算中间件。由第三方插件实现：https://emileber.github.io/axios-middleware

原理是 [请求中间件，发请求，响应中间件] 依次 Promise.then 处理

[axios拦截器/koa中间件/express中间件/redux中间件的原理 - 掘金](https://juejin.cn/post/6988145927319994399)

