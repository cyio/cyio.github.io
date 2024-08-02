# 动态规划

**定义：** 动态规划是一种通过将问题分解为更小的子问题，并存储每个子问题的结果来避免重复计算的方法。动态规划通常用于优化递归解决方案。

**特点：**
- **避免重复计算：** 通过存储子问题的结果（通常使用数组或哈希表），动态规划避免了重复计算，从而提高了效率。
- **两种实现方式：** 动态规划可以通过自顶向下的记忆化递归（memoization）和自底向上的迭代（tabulation）来实现。

**记忆化递归（Memoization）：**
通过递归加缓存的方式来存储已经计算过的结果。
```javascript
function fib(n, memo = {}) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
```

**迭代动态规划（Tabulation）：**
通过迭代的方式，从小到大逐步求解。
```javascript
function fib(n) {
    if (n <= 1) return n;
    let dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
```

### 递归与动态规划的关系

1. **递归是动态规划的基础：**
   递归通过分解问题为子问题，动态规划通过存储子问题的结果来避免重复计算。因此，很多动态规划问题最初都是通过递归来思考和分析的。

2. **优化递归：**
   递归解决方案通常会有大量的重复计算，通过引入缓存或使用迭代方式，可以将递归优化为动态规划，从而大大提高效率。

3. **自顶向下与自底向上：**
   递归是自顶向下的解决问题，动态规划可以是自顶向下（记忆化递归）也可以是自底向上（迭代）。自顶向下的记忆化递归更接近原始的递归思路，而自底向上的迭代方式通常更加高效。

### 例子：爬楼梯问题

**递归：**
```javascript
function climb(n) {
    if (n <= 1) return 1;
    return climb(n - 1) + climb(n - 2);
}
```

**记忆化递归：**
```javascript
function climb(n, memo = {}) {
    if (n <= 1) return 1;
    if (memo[n]) return memo[n];
    memo[n] = climb(n - 1, memo) + climb(n - 2, memo);
    return memo[n];
}
```

**迭代动态规划：**
```javascript
function climb(n) {
    if (n <= 1) return 1;
    let dp = [1, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
```

**空间优化的迭代动态规划：**
```javascript
function climb(n) {
    if (n <= 1) return 1;
    let pre = 1, cur = 1;
    for (let i = 2; i <= n; i++) {
        [cur, pre] = [pre + cur, cur];
    }
    return cur;
}
```

总结起来，递归提供了解决问题的基本思路，动态规划则通过缓存和迭代优化了这些思路，使得算法更加高效。
### 例子：斐波那契数列

斐波那契数列是一个典型的具有重叠子问题的例子。斐波那契数列中的每一个数都是前两个数的和：

\[ F(n) = F(n-1) + F(n-2) \]

直接递归的方法会导致大量的重复计算。比如计算 \( F(5) \) 会多次计算 \( F(3) \)、\( F(2) \) 等。

#### 递归方法（存在重复计算）

```javascript
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
```

#### 动态规划方法

通过使用动态规划，我们可以用一个数组来保存已经计算过的斐波那契数，从而避免重复计算。

##### 自底向上（迭代法）

```javascript
function fib(n) {
  if (n <= 1) return n;
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
```

##### 自顶向下（带缓存的递归法）

```javascript
function fib(n) {
  let memo = new Array(n + 1).fill(null);
  return fibHelper(n, memo);
}

function fibHelper(n, memo) {
  if (n <= 1) return n;
  if (memo[n] !== null) return memo[n];
  memo[n] = fibHelper(n - 1, memo) + fibHelper(n - 2, memo);
  return memo[n];
}
```

### 动态规划的基本步骤

1. **定义状态**：用一个数组 `dp` 来保存子问题的解，例如 `dp[i]` 表示斐波那契数列中的第 `i` 个数。
2. **状态转移方程**：定义当前状态和之前状态之间的关系，例如 `dp[i] = dp[i-1] + dp[i-2]`。
3. **初始化**：初始化已知的状态，例如 `dp[0] = 0` 和 `dp[1] = 1`。
4. **计算结果**：根据状态转移方程，从初始状态开始逐步计算到目标状态，例如 `dp[n]`。

### 动态规划的优势

通过保存子问题的解，动态规划方法避免了重复计算，从而显著提高了算法的效率。对于时间复杂度，递归方法的时间复杂度是指数级别的 \( O(2^n) \)，而动态规划方法的时间复杂度则是线性级别的 \( O(n) \)。

### 尾递归优化（Tail Recursion Optimization）

**定义：** 尾递归优化是一种编译器优化技术，针对尾递归调用进行优化。尾递归是指函数在返回时调用自身，并且这个调用是函数中的最后一个操作。

**特点：**

- **减少栈空间使用：** 编译器可以将尾递归转换为迭代，从而避免了函数调用栈的增长，减少了栈空间的使用。
- **需要编译器支持：** 并不是所有编译器都支持尾递归优化，具体取决于编译器的实现。

**实现方式：** 将递归调用改为尾递归形式，通常通过引入辅助参数来传递累积结果。

**例子：斐波那契数列**

```js
function fibTail(n, a = 0, b = 1) {
    if (n === 0) return a;
    if (n === 1) return b;
    return fibTail(n - 1, b, a + b);
}
```

### 参考资料

- [Dynamic Programming - GeeksforGeeks](https://www.geeksforgeeks.org/dynamic-programming/)
- [Dynamic Programming Introduction - Topcoder](https://www.topcoder.com/thrive/articles/dynamic-programming-from-novice-to-advanced)