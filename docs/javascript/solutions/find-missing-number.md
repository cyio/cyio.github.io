# 寻找缺失的数字

## 连续的自然数序列，只少一个数字

使用等差数列求和公式来计算从1到n的和，公式为：S = (n * (n + 1)) / 2

时间复杂度：O(n)

```js
function sumFrom1ToN(n) {
    return (n * (n + 1)) / 2;
}

function sum(arr) {
    return arr.reduce((acc, cur) => acc + cur)
}

function find(arr) {
    const expectedSum = sumFrom1ToN(arr[arr.length - 1]);
    const actualSum = sum(arr);
    const missingNumber = expectedSum - actualSum;
  
    if (missingNumber === 0) {
      return null; // 没有缺失的数字
    }
  
    return missingNumber;
  }

let d = find([0, 1, 2, 4, 5])

console.log(d) // expect 3
```

## 非连续的整数数组 & 多个数字缺失

更通用

时间复杂度：O(2n) 也是线性

```js
function find(arr) {
    let last = arr[arr.length - 1]
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i)
    }
    let missing = []
    for (let num = 0; num < last; num++) {
        if (!map.has(num)) {
            missing.push(num)
        }
    }
    return missing
}

let d = find([0, 1, 2, 5])

console.log(d)
```

## 大数据集

分批处理
内存优化

```js
function findMissingInBatch(batch) {
  const batchMap = new Map(batch.map((num, idx) => [num, idx]));
  const maxNumber = Math.max(...batch);
  const missingNumbers = [];

  for (let num = maxNumber - batch.length + 1; num <= maxNumber; num++) {
    if (!batchMap.has(num)) {
      missingNumbers.push(num);
    }
  }

  return missingNumbers;
}

function findMissingNumbers(dataGenerator, batchSize) {
  let missingNumbers = [];
  let batch = [];

  for (const number of dataGenerator()) {
    batch.push(number);

    if (batch.length >= batchSize) {
      missingNumbers.push(...findMissingInBatch(batch));
      batch.length = 0; // 清空批次
    }
  }

  // Handle any remaining numbers in the last batch
  missingNumbers.push(...findMissingInBatch(batch));

  return missingNumbers;
}

// Example data generator that generates numbers from 0 to 99999
// 10 万条数据，每次处理 1 万条
function* dataGenerator() {
  for (let i = 0; i <= 99999; i++) {
    yield i;
  }
}

const missingNumbers = findMissingNumbers(dataGenerator, 10000);
console.log(missingNumbers);

```