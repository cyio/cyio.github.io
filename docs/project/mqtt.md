# MQTT

浏览器不能用默认的 1883

http 可以用 ws/wss

https 只能用 wss 443

客户端确保自己的 Client ID 全局唯一，不要重复连接，同时做好断线重连的逻辑。有格式要求。
[名词解释*产品简介*微消息队列 MQTT-阿里云](https://help.aliyun.com/document_detail/42420.html?spm=a2c4g.11186623.2.11.7bbf4967RXsZHo)

cleanSession 标志是 MQTT 协议中对一个客户端建立 TCP 连接后是否关心之前状态的定义

[阿里 demo lmq-demo/lmqdemo.html at master · AliwareMQ/lmq-demo](https://github.com/AliwareMQ/lmq-demo/blob/master/lmq-js-demo/lmqdemo.html)

## 两种连接方式

```js
// 1.
const options = {
  // host: config.host,
  // port: config.port,
  username: config.username,
  password: config.password,
  keepalive: 60,
  clientId: config.clientId,
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: false,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000
}
client = mqtt.connect(options)

// 2. 需要指定协议时，需要在 url 前面指定
const url = `wss://${config.host}:${config.port}`
client = mqtt.connect(url, options)
```

[mqtt 网页版客户端调试工具](https://codepen.io/cyio/pen/jJaQqX)

[通信猫 MQTT 在线客户端 共享服务器](http://www.tongxinmao.com/txm/webmqtt.php)

[社区文档 Home · mqtt/mqtt.github.io Wiki](https://github.com/mqtt/mqtt.github.io/wiki)

