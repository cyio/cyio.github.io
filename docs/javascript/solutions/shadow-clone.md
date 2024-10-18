只拷贝一层
```js
function shadowClone(data) {
    let newData;
    if (typeof data === 'object' && data !== null) {  // 确保是非null的对象
        newData = Array.isArray(data) ? [] : {};
        for (let key in data) {
            if (data.hasOwnProperty(key)) {  // 确保只拷贝对象自身的属性
                newData[key] = data[key];
            }
        }
    } else {
        newData = data; // 处理非对象类型
    }

    return newData;
}

// 测试
console.log(shadowClone([1]));       // 输出: [1]
console.log(shadowClone({ a: 1 }));  // 输出: { a: 1 }

```


进一步，请改造成深拷贝

常见的浅拷贝操作，满足大部分场景，性能考虑