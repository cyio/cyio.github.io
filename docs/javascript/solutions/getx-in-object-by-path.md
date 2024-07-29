[一个小算法：实现一个函数，根据path读取object属性及函数执行 - 掘金](https://juejin.cn/post/7379157261425623081)

深度优先，支持对象属性、数组、函数

- 回忆 reduce，上一次的结果(obj)，当前项 key
- 字符串分割，简单的正则或表达，注意转义及空串过滤
- 进阶，分割出函数名和参数
- 应用场景，配置化执行函数，将调用配置到 JSON 中

```js
function getx1(obj, path) {
    const arr = path.split('.');
    // 1 + 2 + 3
    // arr.reduce((pre, cur) => {
    //     return typeof pre === object ? pre[cur] : 
    // })
    let cur = obj
    for (let item of arr) {
        // 1. 转成执行？
        // 2. 判断是否是函数
        // 3. 取出参数
        // 4. 遇到函数，从函数中读
        if (cur[item] === undefined) {
            return undefined
        }
        if (typeof cur[item] === 'function') {
            return cur[item]();
        }
        cur = cur[item]
    }
    return cur
}

function getx(obj, path) {
    // 1. 分割并过滤空串
    const keyArr = path.split(/\.|\[|\]/).filter(Boolean);
    // console.log('keyArr', keyArr);
    // 2. 想到用 reduce
    return keyArr.reduce((obj, key) => {
        // 函数执行
        if (key.includes('(')) {
            // 根据括号分割成 3 部分，函数名，参数，空串，这里取出前两项就行
            const [funcName, argString] = key.split(/\(|\)/);
            // console.log('funcName', funcName, argString)
            let args = argString?.split(',') || [];

            args.forEach((arg, index) => {
                arg = arg.trim();
                if (arg === 'null') args[index] = null;
                else if (arg === 'undefined') args[index] = undefined;
                else if (arg === 'true') args[index] = true;
                else if (arg === 'false') args[index] = false;
                else if (arg[0] === '"' && arg[arg.length - 1] === '"') args[index] = arg.slice(1, -1);
                else if (!isNaN(arg)) args[index] = +arg;
            });

            // 4. 函数表达
            return obj[funcName](...args);
        }

        // 3. 递归调用，数组和属性访问方式一样，不需要区分
        return obj[key];
    }, obj);
}


let r = getx({ a: { b: { c: 100 } } }, 'a.b.c') /* 100 */
console.log('r: ', r)
getx({ a: { b: { c: 100 } } }, 'a.b.c') /* 100 */
getx({ a: { b: { c: 100 } } }, 'a.b.c.d') /* undefined */
getx({ a: { b: [{ c: 100 }] } }, 'a.b[0].c') /* 100 */
getx({ a: { b: { c: function () { return { d: 100 } } } } }, 'a.b.c().d') /* 100 */
getx({ a: { b: { c: function (factor) { return { d: 100 * factor } } } } }, 'a.b.c(10).d') /* 1000 */
getx({ a: { b: { c: function (x, y) { return { d: x * y } } } } }, 'a.b.c(10, 20, "a").d') /* 200 */

```