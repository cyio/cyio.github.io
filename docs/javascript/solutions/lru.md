# LRU 缓存算法 - 近期最少使用算法

淘汰原则：近期最少使用数据移出内存

规则：
1. 队列，先进先出。可以用 map 或 array，队首为旧缓存，队尾为新缓存。map 查找更优。
2. 最近访问过，更新到队尾。对已存值，在获取时 delete => set 将其设置为新缓存。

关键点：
	1. 如何标记新旧缓存，缓存淘汰
	2. map 如何获取 head key，如何获取大小

经典的 LRU 一般都使用 hashMap + 双向链表。考虑可能需要频繁删除一个元素，并将这个元素的前一个节点指向下一个节点，所以使用双链接最合适。并且它是按照节点最近被使用的时间顺序来存储的。 如果一个节点被访问了， 我们有理由相信它在接下来的一段时间被访问的概率要大于其它结点。

最优方案：
1. 双链表 插入、删除 O(1)，head 为新缓存，tail 为旧缓存
2. Map 查找 O(1)

[LRU 缓存机制 - 提交记录 - 力扣（LeetCode）](https://leetcode-cn.com/submissions/detail/215182646/)

[前端进阶算法3：从浏览器缓存淘汰策略和Vue的keep-alive学习LRU算法 · Issue #9 · sisterAn/JavaScript-Algorithms · GitHub](https://github.com/sisterAn/JavaScript-Algorithms/issues/9)


```js
class LRU {
    constructor(limit = 3) {
        this.limit = limit
        this.cache = new Map()
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1
        } else {
            const value = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, value)
            return value
        }
    }

    put(key, value) {
        // 存在时，更新
        // 不存在，push，是否超过 limit

		if (this.cache.size >= this.limit) {
			// 找到第一个移除
			const head = this.cache.keys().next().value
			this.cache.delete(head)
		}

        this.cache.set(key, value)
    }
}

let lru = new LRU(2)

lru.put('a', 1)
lru.put('b', 2)
lru.put('c', 3)
console.log(lru.get('a'), lru.get('c')) // -1 3
lru.get('b')
lru.put('d', 4)
console.log(lru.get('c'), lru.get('b')) // -1, 2

```

## 应用

vue 中 keep-alive LRU 实现用的是数组，删除旧节点用 indexOf 查找
