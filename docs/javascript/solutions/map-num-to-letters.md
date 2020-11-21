# 输入数字，找对应字母
如: 
1 a
2 b
26 z
27 aa

```js
  // 每 26 进一位，为 a
  function mapNumToLetters(num){
    let str = ''
    let remainder = num % 26
    let shang = Math.floor(num / 26) // 商或位数

    if (remainder === 0) {
      remainder = 26
      shang -= 1
    }

    while(shang >= 1){
      str += 'a'
      shang -= 1
    }
    str += String.fromCharCode(remainder + 96) // unicode 查找

    return str
  }
```
