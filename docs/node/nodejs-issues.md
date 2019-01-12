# nodejs-issues

## request 默认 encoding 为 string

javascript - Getting binary content in Node.js using request - Stack Overflow http://stackoverflow.com/questions/14855015/getting-binary-content-in-node-js-using-request

request 默认是 utf8 ，如果要 buffer 要设置 encoding: null
