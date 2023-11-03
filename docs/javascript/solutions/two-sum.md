```js
/**
 * 寻找数组中两个元素之和等于给定数字的索引。
 *
 * @param {number[]} arr - 输入的数组
 * @param {number} num - 目标和
 * @returns {number[]} - 包含两个元素索引的数组，如果找不到匹配则返回 [-1, -1]
 */
function towSum(arr, num) {
    let numMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        let other = num - arr[i];
        if (numMap.has(other)) {
            return [numMap.get(other), i];
        } else {
            numMap.set(arr[i], i);
        }
    }

    return [-1, -1];
}

```