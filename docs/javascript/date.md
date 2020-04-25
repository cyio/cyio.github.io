# Date

## 日期格式国际标准

use the ISO 8601 standard for dates
YYYY-MM-DD

美国用的是 MMDDYYYY

如果手动拼，要注意用 0 补足位数 ，即 left pad

优点是清楚，易于排序

```js
new Date().toISOString().substr(0, 10)
// "2018-10-07"

new Intl.DateTimeFormat('zh-CN').format(new Date())
// "2018/2/26"
```

## UNIX

- Unix time (AKA epoch time)
- 定义是本地时间相对于 UTC 1970.1.1 以来的秒数。本地调慢时间后，访问 https 网站浏览器会拦截
- JS 中的`Date.getTime()`得到的是毫秒
  ```js
  Date.prototype.unix = function() {
    return (this.getTime() / 1000) | 0
  }
  ```
- UNIX 时间戳的定义与时区无关
  [How to get the correct Unix Timestamp from any Date in JavaScript](https://coderwall.com/p/rbfl6g/how-to-get-the-correct-unix-timestamp-from-any-date-in-javascript)
  [How To Work with Date and Time in JavaScript using Date Objects | DigitalOcean](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript)

## 客户端时间与服务器时间同步

影响因素：

1. 网络延时
2. js 计时器不准，页面一直开着，偏差会越来越大
3. 用户修改系统时间

解决：

- (进入页面时)获取与服务器时间差，缺点是每秒获取当前时间，可能用户在进入页面后更改

```js
//entry.js入口文件
if(!window.dateDiff){
    $.get('api/GetTimeDiff',
        {nowDate:Date.now()},
        function(dateDiff){
            window.dateDiff = dateDiff;
            //将时间差存在全局变量中，方便在其他模块中调用
    })
}
...

//other.js 其他模块
...
var myInterval = setInterval(function(){
    var countDown = endTime - Date.now() + dateDiff;
    //每秒会获取本地时间，这样就算执行的周期不准确
    //也可以准确的获取时间差

    //执行页面倒计时的渲染
}, 1000)
```
