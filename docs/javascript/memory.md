# 内存管理

```
    memory
     /  \
stack     heap
fn/local  obj/global
```


栈空间，用完回收，连续存储，先进后出 

堆空间有老生代、新生代

新生代，空间小，速度快，但空间利用率低，Scanvage算法

老生代，新生代对象多次回收仍存活，空间大，标记清除和标记整理

如果一个值不再需要了，引用数却不为0，垃圾回收机制无法释放这块内存，从而导致内存泄漏。

如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap。

