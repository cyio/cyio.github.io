# 算法
[[toc]]

## 学习方法论

- 学习方式，手打，纸上推演，死记硬背，理解训练
- 复杂的，脑子里第一时间要想到图，可视化
- 纸上编码的能力很重要
- 代码熟练工与优秀开发者之间的选择
- 大部分时间用不到，有一定数据规模时，算法的作用才会显现
- 前置依赖，数学、逻辑，否则学起来吃力
- 先想出保底方法再优化
  算法和编码分开，先想出解法，道具 举例
  针对特殊用例优化

  [VisuAlgo - 数据结构和算法动态可视化 (Chinese)](https://visualgo.net/zh)

![mindmap](https://camo.githubusercontent.com/7a1f227eb672dfeb7ad558b44471c2ebea0a191594b34fa9f17775945518c678/687474703a2f2f7265736f757263652e6d757969792e636e2f696d6167652f32303230303631363030303630342e706e67)

## 复杂度

![jIGhf.png (835×579)](https://i.stack.imgur.com/jIGhf.png)
[algorithm - What does O(log n) mean exactly? - Stack Overflow](https://stackoverflow.com/questions/2307283/what-does-olog-n-mean-exactly)

- 评估算法优劣，反映运行时间或占用存储空间随输入规模增长而增长的量级
- 空间复杂度： 衡量运行时存储空间的占用，一般用大写 S(pace)
  - 内存有限制，需要选择更少内存方案
  - 评估能解决多大规模问题
- 时间复杂度： 定性描述算法运行时间的函数，一般用大写 O(peration) - 时间限制，避免陷入死循环 - 需要实时响应
  [算法的时间复杂度和空间复杂度-总结 - CSDN 博客](https://blog.csdn.net/zolalad/article/details/11848739)
  [冰与火之歌：「时间」与「空间」复杂度 - 掘金](https://juejin.im/post/5c174198f265da611036f4ea)

### 程序性能

- 用操作数和执行步数来估计程序的运行时间。用符号法来分别描述程序在最好、最坏和平均情况下的运行时间。
- 程序性能指需要内存和时间的多少
- 两种分析方法：分析和测量（实验）
- 实例特征，包含着可以决定程序空间大小的因素（如，输入和输出的数量或相关数的大小）。例如，对 n 个元素排序的程序，它所需要的空间大小是 n 的函数，n 为其实例特征。
- 相对来说，指令空间的大小受实例特征的影响不大。常量及简单变量所需要的空间与实例特征也没有多大关系，除非相关数的规模对于选定的数据类型来说实在太大。一些动态分配空间也可以不依赖实例特征。环境栈的大小一般不依赖实例特征，除非使用了递归函数。当使用递归函数时，实例特征通常影响（但不总是）环境栈的大小。
- 递归函数所需要的栈空间通常称为递归栈空间。它的大小依赖于局部变量和形式参数所需要的空间，依赖于递归的最大深度和编译器。

### Big O notation

| 符号     | 数学描述 |
| -------- | -------- |
| O(1)     | 常数     |
| O(log n) | 对数     |
| O(n)     | 线性     |
| O(n^2)   | 平方     |
| O(n^3)   | 立方     |
| O(2^n)   | 指数     |
| O(n!)    | 阶乘     |

有多个复杂度时，只看最高复杂度

| 算法             | 复杂度     |
| ---------------- | ---------- |
| 递归             | O(2^n)     |
| 二分             | O(log n)   |
| 二叉树遍历       | O(n)       |
| 优化排序矩阵查找 | O(n)       |
| 归并、快排       | O(n log n) |

[Master theorem (analysis of algorithms) - Wikipedia](https://en.wikipedia.org/wiki/Master_theorem_analysis_of_algorithms)

`O(n log n)` 念什么？

`2^n`和`n^2`，谁大，指数 n > 2，随着 n 变大，前者会远大于后者
```
2 ** 10 = 1024
10 * 10 = 100
```

array 转 set，需要遍历，时间复杂度 O(n) [javascript - Time complexity (Big-O) of converting an array to a Set - Stack Overflow](https://stackoverflow.com/questions/63543514/time-complexity-big-o-of-converting-an-array-to-a-set)

## 枚举

- 合理设置尝试范围，减少不必要尝试。例：完美立方 四重循环

- 链表 -- 两个 next --> 树 -- 节点指回 -> 图

  无单个子节点，完全二叉树

  二叉搜索树，有序，空树，左子树(所有)，右子树(所有)，根结点，查找 O(n) => O(log(n))，退化 O(n)，只有一侧树 =》平衡

[优秀程序员都应该学习的数据结构与算法项目（GitHub 开源清单） - 知乎](https://zhuanlan.zhihu.com/p/74584796)

- 测试用例，单步验证

  暴力解法

  解题线索，解题模板

[LeetCode 算法题刷题心得（JavaScript） - 简书](https://www.jianshu.com/p/8876704ea9c8)

## 二分查找

- 猜 1-1000 之间的一个数，猜多少次 `2 ** 10 = 1024`

  有序 比较中点 范围减半

## 模式识别
一旦涉及出现次数，需要用到 hash

构造子串，hash 存下标

涉及子串，考虑滑动窗口

深度优先：递归 + 回溯

广度优先：队列 + 追加，解决从 A 到 B 路径查找，循环检测

图：点 + 边，树是一种特殊的图

