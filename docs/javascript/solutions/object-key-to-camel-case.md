# 命名风格转换

实现一个方法，将传入对象的下划线命名方式全部换为驼峰式(考虑递归的场景)

```js
  // before
  const obj = {
    first_name: 'chen'
  }

  // after
  const obj2 = {
    firstName: 'chen'
  }

  // 递归
  // for of
  // key replace /_([a-z])/
  let result = {}

  function convert(obj) {
    for (let key of Object.keys(obj)) {
      let newKey = key.replace(/_([a-z])/g, (p1, p2) => {
        console.log(p2)
        return p2.toUpperCase()
      })

      if (typeof obj[key] === Object) {
        result[newKey] = convert(obj[key])
      } else {
        result[newKey] = obj[key]
      }

    }
  }
  let r = convert(obj)
  console.log(result)
```
