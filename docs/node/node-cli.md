# node-cli

```json
{
  "bin": {
    "rename-cn-file": "bin/index.js"
  }
}
```
```
npm link
```

npm unpublish 只能在 72 小时内，否则要联系客服。在本地测试好再发布

```js
var userArgs = process.argv.slice(2);
```

[Writing Command Line Tools with Node](https://javascriptplayground.com/node-command-line-tool/)

## 消息格式化
- 优先用模板字符串，空格控制更准确
- 文字颜色
  ```js
  const FgGreen = "\x1b[32m"

  console.log(prefixWithDate(`${FgGreen}hello world`))

  function prefixWithDate(msg) {
    const now = new Date().toLocaleString()
    return `${now}  ${msg}`
  }

  ```
  [How to change node.js's console font color? - Stack Overflow](https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color)
