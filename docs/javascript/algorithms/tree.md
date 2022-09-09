# 树
[[toc]]

## 遍历

深度优先:

- 前序(preorder) 根 -> 子树 node -> left -> right 自上而下
- 中序(inorder) 左（右）子树 -> 根 -> 右（左）子树 left -> node -> right
- 后序(postorder) 子树 -> 根 left -> right -> node 自下而上

广度优先:
- 层次(level) level 0 -> level 1 队列

- 对称

https://zh.m.wikipedia.org/zh-hans/%E6%A0%91%E7%9A%84%E9%81%8D%E5%8E%86

前、中、后判断依据是 node 访问时机

核心：递归

空间，O(n), n 为树高度，运算中递归栈高度

时间，O(n)，n 为节点数量

```js
class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    const temp = new Node(val)
    var insertNode = function(root, node) {
      if (node.val > root.val) {
        if (root.right === null) {
          root.right = node
        } else {
          insertNode(root.right, node)
        }
      } else {
        if (root.left === null) {
          root.left = node
        } else {
          insertNode(root.left, node)
        }
      }
    }
    if (!this.root) {
      this.root = temp
    } else {
      insertNode(this.root, temp)
    }
  }
  // 中序遍历
  inOrderTraverse(callback) {
    const inOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        inOrderTraverseNode(node.left, callback)
        callback(node.val)
        inOrderTraverseNode(node.right, callback)
      }
    }
    inOrderTraverseNode(this.root, callback)
  }
  // 前序遍历
  preOrderTraverse(callback) {
    const preOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        callback(node.val)
        preOrderTraverseNode(node.left, callback)
        preOrderTraverseNode(node.right, callback)
      }
    }
    preOrderTraverseNode(this.root, callback)
  }
  // 后序遍历
  postOrderTraverse(callback) {
    const postOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        postOrderTraverseNode(node.left, callback)
        postOrderTraverseNode(node.right, callback)
        callback(node.val)
      }
    }
    postOrderTraverseNode(this.root, callback)
  }

  min() {
    const minNode = node => {
      return node ? (node.left ? minNode(node.left) : node) : null
    }
    return minNode(this.root)
  }

  max() {
    const maxNode = node => {
      return node ? (node.right ? maxNode(node.right) : node) : null
    }
    return maxNode(this.root)
  }

  search(key) {
    const searchNode = (node, key) => {
      if (node === null) return
      if (node.val === key) {
        console.log(node)
        return node
      } else {
        return searchNode((key < node.val) ? node.left : node.right, key)
      }
    }
    searchNode(this.root, key)
  }
}

// 初始化一个BST
const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
console.log(tree)

// 调用二叉树对应地获取最大最小，以及搜索的方法
var m = tree.min()
console.log(m.val)

var max = tree.max()
console.log(max)

var r = tree.search(12)
console.log(r) 
```
