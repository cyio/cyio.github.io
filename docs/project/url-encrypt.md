# 地址加密

1. 全局参数 base64 转码
优点：实现简单，不引入库
缺点：增加任意参数会导致 base64 转换失败，兼容性差，比如微信分享场景
示例：
[url-parameters-encrypt.diff](https://gist.github.com/cyio/4cf87e46fafce79535771b5ff4741887)

应该只给 value 转码

```js
function encryptUrlParam(paramNames, url) {
  let newUrl = url
  paramNames.forEach(paramName => {
    let oldValue = getUrlParameterByName(paramName, newUrl)
    newUrl = replaceUrlParam(paramName, btoa(oldValue), newUrl)
  })
  return newUrl
}
function decryptUrlParam(paramNames, url) {
  let newUrl = url
  paramNames.forEach(paramName => {
    let oldValue = getUrlParameterByName(paramName, newUrl)
    newUrl = replaceUrlParam(paramName, atob(oldValue), newUrl)
  })
  return newUrl
}

let result = encryptUrlParam(['id', 'eid'], '/url-sample?id=3&eid=4&from=singlemessage')
let result2 = decryptUrlParam(['id', 'eid'], result)
console.log(result, '\n', result2)
// /url-sample?id=Mw==&eid=NA==&from=singlemessage
// /url-sample?id=3&eid=4&from=singlemessage

function btoa(str) {
  return Buffer.from(str).toString('base64')
}
function atob(str) {
  return Buffer.from(str, 'base64').toString()
}
```

