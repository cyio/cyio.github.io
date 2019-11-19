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
