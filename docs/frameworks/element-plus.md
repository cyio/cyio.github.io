
## 父组件如何使用 defineExpose 暴露的属性

```js
function changeButtonClass() {
  // 修改子组件暴露的属性
  buttonRef.value.buttonClass = 'new-class'
}
```

