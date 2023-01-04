# 从 VuePress 构建的一个报错看 WeakMap

从 VuePress 2.x 构建的一个错误谈起`build: TypeError: Invalid value used as weak map key`，为什么用 WeakMap，它的 key 类型要求是什么？

![vue build error](https://user-images.githubusercontent.com/3146103/159602294-3f150d61-e768-4765-8eb8-860fb48f7006.png)

## map 的实现与问题

Map 由两个数组实现，`[keys] [values]`，支持遍历。key 支持任意类型。

理想情况，当`object = null`时，我们希望 obj 占用空间能被自动回收

**但当 object 作为 map 的 key 时，存在强引用关系，会阻止内存回收**

强引用本身也是有用的，比如通过 map.keys() 遍历得到的值确定

解决：使用弱引用，没有引用时，可被垃圾回收

## 与 map 不同点

1. weakmap 的 key 只能是 object，如果使用原始类型，会抛错。原因可能是它的存在只是为了补充 map
2. 由于弱引用，无法保证 key 存在，不支持遍历相关方法

## 使用场景：

1. 额外数据，比如 value 的读取依赖 key，key 如不存在了，value 也不再可访问。
2. 缓存

weakset 类似，只能存 object，不支持遍历相关方法

回到文章开头，由于在 md 文件中存在的标签`<Hello />`，不是 Vue 组件、或未经注册，Vue WeakMap 接收的 key 本应是组件对象，变成了 string 引发错误。

构建抛错程序会中止，把组件参数打印出来，最后的打印输出就是有问题的标签，将 md 中相应标签处理即可解决。

```js
if (!raw && !hasExtends) {
    console.log('debug', comp) // 
    cache.set(comp, shared.EMPTY_ARR);
    return shared.EMPTY_ARR;
}
```

当然，更完善做法，主动在 WeakMap 入参增加校验，类型不满足时将参数输出。

[WeakMap - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
[WeakMap and WeakSet](https://javascript.info/weakmap-weakset)