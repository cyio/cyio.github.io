# Proxy

```js
const target = {
  message1: "hello",
  message2: "everyone"
};

const handler3 = {
  get: function (target, prop, receiver) {
    if (prop === "message2") {
      return "world";
    }
    return Reflect.get(...arguments);
  },
};

const proxy3 = new Proxy(target, handler3);

console.log(proxy3.message1); // hello
console.log(proxy3.message2); // world
```

使用场景：
 
- set 时做数据校验 
- key 不存在时，提供默认值
