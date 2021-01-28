# 文本输入限制

## div edit content

思路：
- onkeydown 

存在问题：
- 中英文字符计算
- 按键检测，输入法上屏事件，复制、粘贴，空格
- 重置 innerHTML，光标会跑到开头

TODO 建 demo 测试

[实现一个字数限制的输入框 | Deng's Blog](http://objcer.com/2017/10/10/implement-a-word-limit-input-box/)

        this.blur()

剪切板

[react-text-content-editable/Editable.jsx at master · pkumar98/react-text-content-editable](https://github.com/pkumar98/react-text-content-editable/blob/master/src/Editable.jsx#L52)

可以考虑，fork 加上中文计算

```js
// 兼容中文和表情，原理是取 unicode
function getByteLen(str) {
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code >= 0 && code <= 128) {
      len += 1;
    } else {
      len += 2;
    }
  }
  return len;
}
```
