# 字符编码

JS 使用 UTF-16 使用 two byte

```js
const uint8arr = new TextEncoder().encode('Hi!')
console.log(uint8arr)
new TextDecoder('utf8').decode(uint8arr) // 'Hi!'
```
![image.png](https://img.oaker.bid/?url=http://ww2.sinaimg.cn/large/4e5d3ea7ly1gi7wckwgrcj20qc0elmzk.jpg)
[JS � Character Encodings - YouTube](https://www.youtube.com/watch?v=i_JmWGYmhtk)

```js
let str = '汉'
str.charCodeAt(0) // 27721

String.fromCharCode(27721)
```
