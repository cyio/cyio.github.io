# 表单

表单提交一组数据
类型是`multipart/form-data`
```js
const config = {
		headers: { 'content-type': 'multipart/form-data' }
}
```

[FormData 对象的使用 - Web API 接口 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/Using_FormData_Objects)
[axios post提交formdata - wopelo的博客 - CSDN博客](http://blog.csdn.net/wopelo/article/details/78783442)

* 姓名、昵称中间如果有多个连续空格，替换为一个空格
  问题：`white-space: normal`，超过一个的空格会被省略
    ```js
    this.ruleForm.consignee = this.ruleForm.consignee.replace(/\s+/g, ' ')
    ```
  另一种处理是，`white-space: pre`
