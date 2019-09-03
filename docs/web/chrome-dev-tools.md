# Chrome-DevTools

- 单步调试`F11`，跳过下一个调用`Shift-F11`
- 对断点行，watch 监视表达式，console 打印求值
- 保存看效果

[Chrome 设置断点的各种姿势 | BluedWeb](https://web.blued.cn/2017/08/10/chrome%25E8%25AE%25BE%25E7%25BD%25AE%25E6%2596%25AD%25E7%2582%25B9%25E7%259A%2584%25E5%2590%2584%25E7%25A7%258D%25E5%25A7%25BF%25E5%258A%25BF/)

- 过滤 `-method:OPTIONS`
- 隐藏来自扩展请求 `-scheme:chrome-extension`
- console 中打印出 fetch 内容
  ```js
  let a = await fetch()
  await a.json()
  ```

[Chrome 开发者工具中文文档-在线手册-html 中文网](https://www.html.cn/doc/chrome-devtools/)

- 在 console 中复制对象
 `copy(JSON.stringify(object))`
 缺点是函数会被丢掉
