# 分析

## 数据收集
- `unload`中的异步请求会被忽略，同步请求可用但页面`unload`延迟，减慢后续导航。拿不到 response
- `sendBeacon`
  - post
  - 会自动带上 cookie
  - 开发者工具：请求不在 xhr 中
  - 不提供 response
  - 发送数据类型有限制，需要接口支持。不支持 JSON？[1]
- fetch keepalive

```js
window.addEventListener('unload', logData, false);

function logData() {
    navigator.sendBeacon("/log", analyticsData);
}
```

[Beacon](https://w3c.github.io/beacon/)

[1]: [javascript - How to receive data posted by "navigator.sendbeacon" on node.js server? - Stack Overflow](https://stackoverflow.com/questions/31355128/how-to-receive-data-posted-by-navigator-sendbeacon-on-node-js-server)

[A closer look at the Beacon API](https://golb.hplar.ch/2018/09/beacon-api.html)


## 指标
- 跳出率 Bounce rate，只浏览某个页面即离开的会话 / 由该页开始的全部会话
- 退出率，进入这一页，用户离开 / 全部访问
[退出率与跳出率 - Google Analytics（分析）帮助](https://support.google.com/analytics/answer/2525491?hl=zh-Hans&ref_topic=6156780)

## sendbeacon

```
blob = new Blob([`room_id=123`], {type : 'application/x-www-form-urlencoded'});
navigator.sendBeacon("/cgi-bin/leave_room", blob);
```
(https://zhuanlan.zhihu.com/p/68838820)[https://zhuanlan.zhihu.com/p/68838820]

