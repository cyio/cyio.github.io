# Chrome-DevTools
[toc]

## 调试
- 选项：恢复脚本执行，跳过下一个函数调用，进入函数，跳出当前函数
- 按键，用组合键更好按
- 对断点行，watch 监视表达式，console 打印求值
- scope 值可编辑，不用离开 DevTools 就能看修正效果
- 监视表达式，观察值的变化
- 保存看效果
- 断点类型，最常用的是代码行，还有事件侦听器、异常等

[Chrome 设置断点的各种姿势 | BluedWeb](https://web.blued.cn/2017/08/10/chrome%25E8%25AE%25BE%25E7%25BD%25AE%25E6%2596%25AD%25E7%2582%25B9%25E7%259A%2584%25E5%2590%2584%25E7%25A7%258D%25E5%25A7%25BF%25E5%258A%25BF/)
[使用断点暂停代码  |  Tools for Web Developers  |  Google Developers](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints?hl=zh-cn#exceptions)

## console
- console 中打印出 fetch 内容
  ```js
  let a = await fetch()
  await a.json()
  ```

[Chrome 开发者工具中文文档-在线手册-html 中文网](https://www.html.cn/doc/chrome-devtools/)

- 在 console 中复制对象
 `copy(JSON.stringify(object))`
 缺点是函数会被丢掉
在 vue 晨
```js
  mounted () {
    window.myJSON = this.options
  }
// copy(JSON.stringify(window.myJSON))
```

- 可以通过在函数中插入 console.count('执行次数') 来观察重复执行的情况

## 网络
- 在开启开发工具下，长按刷新按钮出现菜单，Empty Cache And Hard Reload 强制全部请求走网络，模拟新客访问
- 点击截图，查看当时请求状态
- cmd + 点击，同时查看多种资源
- 过滤 `-method:OPTIONS`
- 隐藏来自扩展请求 `-scheme:chrome-extension`
- XAR 导出 录制、然后网络上右键 [How to generate a HAR file in Chrome or Firefox - KB254 - In](https://www.inflectra.com/support/knowledgebase/kb254.aspx)

## playground
可以巧用 snippets 作 playground，快速调试代码

放在 IIFE 里，使代码可反复运行
```js
(async function (){

})()
```


