# websocket

ws - websocket over http
wss - websocket over https

[ssl - WSS works on http? - Stack Overflow](https://stackoverflow.com/questions/34532006/wss-works-on-http?lq=1)

- http 可连接 https，所以 http 应该可连 wss
- localhost 不受限制

websocket 是浏览器标准
nodejs 常用这个 https://github.com/websockets/ws
koa2 用这个 koa-websocket 或 koa-socket

[编写聊天室 - 廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001472794708264206fcf1589bb43caa0395752aa26538c000)

## 测试连接

`yarn global add wscat`
`wscat -c ws://localhost:8083`

[fireship-io/socketio-minimal-demo: Minimal socket.io group chat demo](https://github.com/fireship-io/socketio-minimal-demo)

## socket.io

库，支持自动降级（HTTP轮询）和重连

[Socket.IO minimal example - CodeSandbox](https://codesandbox.io/s/socket-io-minimal-example-k3h2l?file=/index.html)
