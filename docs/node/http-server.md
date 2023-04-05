# http-server

- `http.get`取到的是流
- 内置的`http`和`request`均不支持`Promise`

```js
const http = require('http')
const server = http.createServer()
const port = process.env.PORT || 3008
server.listen(port)
server.on('request', (req, res) => {
	console.log('on request')
})
server.on('listening', () => {
	console.log('server is listering on ' + port)
})
server.on('error', e => {
	if (e.code === 'EADDRINUSE') {
		console.log('服务器地址及端口已被占用')
	} else {
		console.log(e.code)
	}
})
```

- [HTTP 传输解析 | Node.js](https://nodejs.org/zh-cn/docs/guides/anatomy-of-an-http-transaction/)

## live-server
`npx live-server`

长期
```
npm install -g live-server
```

支持配置化支行

原理：
- 建立 websocket 连接，html 注入脚本
- css 可以免 reload，局部更新

https://github.com/tapio/live-server/issues/208#issuecomment-733510202

vue 作者建议用  cdn alias，构建后保证可用 https://github.com/vitejs/vite/issues/2483#issuecomment-799527624