
## 父组件如何使用 defineExpose 暴露的属性

```js
function changeButtonClass() {
  // 修改子组件暴露的属性
  buttonRef.value.buttonClass = 'new-class'
}
```


渲染性能，主要发生在 mount -> patch，以 slide 为例，用了很多 computed，自己实现只用 1 个

页面用了几十个组件

```
实例化组件
	Render 函数执行
		创建虚拟 DOM
			更新虚拟 DOM
				Patch（补丁）比较，找出变更
					挂载到 DOM
						生命周期钩子执行 mounted
```