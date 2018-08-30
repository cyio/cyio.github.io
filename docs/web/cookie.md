## 用来标记用户
服务器 set-cookie 发给客户端，浏览器会将 cookie 保存下来，稍后客户端发请求时可带上 cookie

## 小程序不支持 cookie 设置
意思是对接受的请求，不会存 cookie，我们可以自己封装利用 storage 存起来模拟
[微信小程序cookie-session问题 | 等英博客](https://www.waitig.com/%25E5%25BE%25AE%25E4%25BF%25A1%25E5%25B0%258F%25E7%25A8%258B%25E5%25BA%258Fcookie-session%25E9%2597%25AE%25E9%25A2%2598.html)
