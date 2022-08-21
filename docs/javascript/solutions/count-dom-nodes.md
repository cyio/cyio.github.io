# 计算页面 DOM 节点数量

```js
// 包括文本节点
function countNodes(node) {
  //  计算自身
  let count = 1
  //  判断是否存在子节点
  if (node.hasChildNodes()) {
    //  对子节点进行递归统计
    for (child of node.childNodes) {
      count += countNodes(child)
    }
  }
  return count
}

countNodes(document.body)
```

[怎样获取页面的DOM节点数量_甘焕的博客-CSDN博客](https://blog.csdn.net/yiifaa/article/details/70048860)
