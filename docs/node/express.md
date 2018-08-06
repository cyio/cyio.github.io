# express

* 两种提供 html 文件访问的方式
```js
app.use('/', express.static(__dirname + '/'));

app.get('/', (req, res) => {  
  // response.send('Hello from Express!')
  res.sendFile(__dirname + '/index.html')
})
```
