# Cookie
[toc]

## 使用场景

授权认证：
  - 基于 cookie，服务器需要生成、保持 session，保持，有状态
  - 基于 token，用户信息编码，无状态

## 用来标记用户

服务器`set-cookie`发给客户端，浏览器会将 cookie 保存下来，稍后客户端发请求时可带上 cookie

## 判断是否登录

- 两层，前后端 cookie 有效期可能不一致
- 前端 cookie 检查优先

## 有效期

默认 session 级

```js
document.cookie = `KEY=${123};path=/;domain=.baidu.com`;
```

需要在相应域名的页面或接口下才能读取到

## 封装


```js
// 获取cookie、
function getCookie(name) {
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
  const arr = document.cookie.match(reg)
  if (arr) return arr[2]
  return null
}

// 设置cookie,增加到vue实例方便全局调用
function setCookie(name, value, expireDays) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  const expireDate = new Date()
  expireDate.setDate(expireDate.getDate() + expireDays)
  const expireDateKeyValue =
    expireDays === null ? '' : ';expires=' + expireDate.toUTCString()
  const domainKeyValue =
    location.host.indexOf('aijianzi') > 0 ? ';domain=.google.com' : ''
  const cookieValue = escape(value) + expireDateKeyValue + domainKeyValue
  document.cookie = name + '=' + cookieValue
}

// 删除cookie
function delCookie(name) {
  setCookie(name, 0, -1)
}
```

document.cookie = `${name}=${escape(value)}${(expiredays == null) ? '' :`;expires=\${exdate.toGMTString()}`};path=/;`;

```js
var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
```

## 子域名共享

- 不同业务间影响
- key name 用域名空间解决，如 token34/token35
- 同名 cookie，泛域名会优先被读取？

  [Creating a JavaScript cookie on a domain and reading it across sub domains - Stack Overflow](https://stackoverflow.com/questions/5671451/creating-a-javascript-cookie-on-a-domain-and-reading-it-across-sub-domains)

## domain

- 值要有两个点
- localhost 时要完全省略掉

  [setcookie - Cookies on localhost with explicit domain - Stack Overflow](https://stackoverflow.com/questions/1134290/cookies-on-localhost-with-explicit-domain)

## 同步

- 写入 cookie 是同步操作，阻塞
- 不知道写入成功还是失败

  [Cookie Store API](https://wicg.github.io/cookie-store/#intro-proposed-change)

## 小程序不支持 cookie 设置

意思是对接受的请求，不会存 cookie，我们可以自己封装利用 storage 存起来模拟
[微信小程序 cookie-session 问题 | 等英博客](https://www.waitig.com/%25E5%25BE%25AE%25E4%25BF%25A1%25E5%25B0%258F%25E7%25A8%258B%25E5%25BA%258Fcookie-session%25E9%2597%25AE%25E9%25A2%2598.html)

## 基于 token 的认证方式更好

cookie 与 token 方式，根本区别，存储位置，前者需要服务器存 session、客户端存 session id，后者算法生成 token，仅客户端保存（JWT）

无状态、性能更好（带宽、服务器解密即可，不必存 session）、通用性（小程序、oAuth）

## 签名-验证是否被修改过

```js
res.cookie('name', 'value', {signed: true})
```

类似 hash，支持重新计算校验

[node.js - What are "signed" cookies in connect/expressjs? - Stack Overflow](https://stackoverflow.com/questions/11897965/what-are-signed-cookies-in-connect-expressjs)

## 参考

[Cookie -- 前端视角 - hf872914334 的博客 - CSDN 博客](https://blog.csdn.net/hf872914334/article/details/78979007)
[Cookie 的设置、读取以及是否自动携带问题 · Issue #2 · yinxin630/blog](https://github.com/yinxin630/blog/issues/2)

