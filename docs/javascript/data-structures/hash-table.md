# 哈希表
> A hash table (also called a hash, hash map, unordered map or dictionary) is a data structure that pairs keys to values. 

- 键与值存在映射关系
- 映射函数称做哈希函数
- 好处，查找快

[Algorithms in JavaScript: Hash Tables - JavaScript in Plain English - Medium](https://medium.com/javascript-in-plain-english/algorithm-in-javascript-hash-table-7b0464d2b81b)

## 哈希碰撞/冲突

常见的冲突解决方法有开放定址法，链地址法，建立公共溢出区等。实际的哈希表实现中，使用最多的是链地址法

链地址法的基本思想是，为每个 Hash 值建立一个单链表，当发生冲突时，将记录插入到链表中。

https://hit-alibaba.github.io/interview/basic/algo/Hash-Table.html

