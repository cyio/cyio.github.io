# indexOf

查找字符串，不是查单个字母

```js
  // 'abbbc' 'bc'
  // str.match(regexp) return [] with property: index/input
  String.prototype.myIndexOf = function(str) {
    const reg = new RegExp(str)
    const result = this.match(reg)
    return result ? result.index : -1
  }

  console.log('abbbc'.myIndexOf('bc'))
```
