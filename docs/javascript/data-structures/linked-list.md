# 链表
[[toc]]

## 基础

定义：节点集合，每个节点使用对象引用指向其后继，这个引用叫做链

线性集合，不按照元素的物理顺序排列，而是每个元素有指向，高效插入和移除通过遍历

JS 中数组效率低（实现成了对象，与其它语言有别），除了随机访问，都可以用链表替换一维数组

插入和删除操作展示出高效率，因为只是**调整引用指向**

缺点是访问慢（如随机）

有哪些操作方法？可以从增删改查来推导

具有递归特性，题目常用递归解决

> 前端没有多少实际用途
[前端应用数据结构：何时使用链表 - 知乎](https://zhuanlan.zhihu.com/p/61935862)

内存连续，指针/引用

## 与数组区别

  - 链表-插入删除快 O(1)，随机访问 O(n)
  - 数组-下标随机访问 O(1)，查找二分 O(log n)

## 迭代
cur = cur.next
## 练习/重考察实现
> 写起来很容易错，需要考虑很多、多练习，避免易犯错误

- 反转链表 | 交换相邻节点

- 判断是否有环，硬做 1s | set 判重 | 快慢碰撞

- 两个有序的链表合并

- 删除链表倒数第 n 个节点

- 求链表的中间节点

