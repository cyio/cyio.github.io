# 求数组交集

```js
// [1, 2, 3]
// [3, 4, 5]
// target [3]
function intersection(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    return result
}
```


时间复杂度为 O(m * n)，其中 m 和 n 分别是 `arr1` 和 `arr2` 的长度。对于大型数据，会有性能问题。

优化查找复杂度，可以将 Array includes 方法优化为 Set 的 has，后者是 O(1)

由于输出是输入数据的子集，可考虑用数组函数式方法处理，替代声明一个空数组

```js
function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const result = arr2.filter(item => set1.has(item));
    return result;
}
```

## 为什么 set 查找复杂度是 O(1)

内部使用哈希表存储，哈希表如 Object 查找是 O(1)

> 当你使用 `Set` 的 `has` 方法来查找元素时，它内部会使用哈希函数计算元素的哈希值，然后在哈希表中查找对应的位置，最后返回该位置上是否有元素。