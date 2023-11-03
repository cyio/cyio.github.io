# stack


## 应用
存储访问过的任务或路径、撤销的操作

- 十进制转二进制

## 实现

- API 支持 预览、是否为空，清空
- 弹出，要考虑空的情况，Array 返回是 undefined

```js
class Stack {
    constructor() {
        this.items = [];
    }

    // 将元素压入堆栈
    push(element) {
        this.items.push(element);
    }

    // 从堆栈中弹出元素并返回它
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // 返回堆栈顶部元素，但不移除它
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // 检查堆栈是否为空
    isEmpty() {
        return this.items.length === 0;
    }

    // 返回堆栈的大小
    size() {
        return this.items.length;
    }

    // 清空堆栈
    clear() {
        this.items = [];
    }
}

// 使用示例
const stack = new Stack();
stack.push(2);
stack.push(3);
console.log(stack.peek()); // 输出 3
console.log(stack.pop());  // 输出 3
console.log(stack.isEmpty()); // 输出 false
console.log(stack.size()); // 输出 1
stack.clear();
console.log(stack.isEmpty()); // 输出 true

```