在 JavaScript 中，迭代器模式是一种常用的设计模式，它可以帮助我们遍历集合中的元素，同时隐藏底层集合的复杂性。以下是一个简单的 JavaScript 迭代器模式的实践：

```js
// 定义一个迭代器对象
// 定义一个迭代器对象
const iterator = (array) = >{
    let index = 0;
    return {
        next: () = >{
            if (index < array.length) {
                return {
                    value: array[index++],
                    done: false
                };
            } else {
                return {
                    done: true
                };
            }
        },
    };
};

// 使用迭代器遍历数组
const arr = [1, 2, 3, 4, 5];
const it = iterator(arr);
let result = it.next();
while (!result.done) {
    console.log(result.value);
    result = it.next();
}
```

在上面的代码中，我们定义了一个迭代器对象，它接受一个数组作为参数，然后返回一个包含 next 方法的对象。next 方法用于返回下一个数组元素，并在到达数组结尾时返回 done 为 true。

然后我们创建了一个数组 arr，并使用迭代器对象 it 遍历数组。我们首先调用迭代器对象的 next 方法，获取数组的第一个元素。然后我们使用 while 循环，判断迭代器对象的 done 是否为 true，如果为 true 则退出循环，否则继续调用迭代器对象的 next 方法获取下一个元素，并输出到控制台。

需要注意的是，在实际开发中，我们通常会使用 JavaScript 内置的迭代器对象，如 for...of 循环、Array.prototype.forEach 方法、Map.prototype.forEach 方法等，它们都使用了迭代器模式的思想，可以更方便地遍历集合中的元素。