# Cookie

## 用来标记用户

服务器`set-cookie`发给客户端，浏览器会将 cookie 保存下来，稍后客户端发请求时可带上 cookie

## 判断是否登录

- 两层，前后端 cookie 有效期可能不一致
- 前端 cookie 检查优先

## 小程序不支持 cookie 设置

意思是对接受的请求，不会存 cookie，我们可以自己封装利用 storage 存起来模拟
[微信小程序 cookie-session 问题 | 等英博客](https://www.waitig.com/%25E5%25BE%25AE%25E4%25BF%25A1%25E5%25B0%258F%25E7%25A8%258B%25E5%25BA%258Fcookie-session%25E9%2597%25AE%25E9%25A2%2598.html)

## 参考

[Cookie -- 前端视角 - hf872914334 的博客 - CSDN 博客](https://blog.csdn.net/hf872914334/article/details/78979007)
[Cookie 的设置、读取以及是否自动携带问题 · Issue #2 · yinxin630/blog](https://github.com/yinxin630/blog/issues/2)

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

