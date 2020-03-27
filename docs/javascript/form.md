# 表单

## 表单提交一组数据
类型是`multipart/form-data`
```js
const config = {
  headers: { 'content-type': 'multipart/form-data' }
}
```

[FormData 对象的使用 - Web API 接口 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/Using_FormData_Objects)
[axios post提交formdata - wopelo的博客 - CSDN博客](http://blog.csdn.net/wopelo/article/details/78783442)

## 表单交互形式
  - 失焦验证
  - 输入验证
    input/textarea 没有change事件，是input事件
  - 提交验证

## 密码记忆规则

[Save Credentials from Forms  |  Web Fundamentals  |  Google Developers](https://developers.google.com/web/fundamentals/security/credential-management/save-forms)

不希望填充，使用 autocomplete 的`new-password`值
```html
<input id="userPassword" type="password" autocomplete="new-password">
```
[html - Google chrome autofilling all password inputs - Stack Overflow](https://stackoverflow.com/questions/23156578/google-chrome-autofilling-all-password-inputs)
## 姓名、昵称中间如果有多个连续空格，替换为一个空格

问题：`white-space: normal`，超过一个的空格会被省略
```js
this.ruleForm.consignee = this.ruleForm.consignee.replace(/\s+/g, ' ')
```
另一种处理是，`white-space: pre`

即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 标签上添加 @submit.native.prevent。

————————————————
版权声明：本文为CSDN博主「留给时间」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_32340877/article/details/80272155
