## 用来标记用户
服务器 set-cookie 发给客户端，浏览器会将 cookie 保存下来，稍后客户端发请求时可带上 cookie

## 小程序不支持 cookie 设置
意思是对接受的请求，不会存 cookie，我们可以自己封装利用 storage 存起来模拟
[微信小程序cookie-session问题 | 等英博客](https://www.waitig.com/%25E5%25BE%25AE%25E4%25BF%25A1%25E5%25B0%258F%25E7%25A8%258B%25E5%25BA%258Fcookie-session%25E9%2597%25AE%25E9%25A2%2598.html)

## 参考
[Cookie -- 前端视角 - hf872914334的博客 - CSDN博客](https://blog.csdn.net/hf872914334/article/details/78979007)
[Cookie的设置、读取以及是否自动携带问题 · Issue #2 · yinxin630/blog](https://github.com/yinxin630/blog/issues/2)

## 封装
```js
// 获取cookie、
function getCookie(name) {
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    const arr = document.cookie.match(reg)
    if (arr) return (arr[2]);
    return null;
}

// 设置cookie,增加到vue实例方便全局调用
function setCookie(name, value, expiredays) {
    const exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = `${name}=${escape(value)}${(expiredays == null) ? '' : `;expires=${exdate.toGMTString()}`};path=/;`;
}

// 删除cookie
function delCookie(name) {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cval = getCookie(name);
    if (cval != null) document.cookie = `${name}=${cval};expires=${exp.toGMTString()}`;
}
```
