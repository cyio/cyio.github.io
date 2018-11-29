# 使用 Vue.js 构造可配置化表单

原文：[前端表单进阶之路：通过 Vue.js 实现表单可配置化 - 掘金](https://juejin.im/post/59e4740251882578cb511d3e)

* 需求一般有必填、格式校验
* 表单的核心是 Form（表单元素）和 Control（控件）
* 目标业务逻辑与控件逻辑分离
* 构造表单控件，通过函数式组件分离 input 和 textarea，便于独立维护
* 控件继承，如表单名称、生命周期，可以将统一的实现抽象为一个独立的类，应用到 mixin 机制
* 外部元素，如提交按钮、协议勾选，用 slot 机制注入
* 扩展，通过独立 Event Emitter 代理核心控件事件，暴露在`Vue.prototype`上

页面结构
```pug
form.form
  .form-line
    .form-control
      textarea(name='content')
  .form-line
    .form-control
      input(type='hidden', name='address')
      // 具体的控件实现
  .form-line
    .form-control
      input(type='text', name='contact')
  input(type='hidden', name='_token', value='1wev5wreb8hi1mn=')
  button(type='submit') 提交
```
期望通过配置生成表单
```json
[
  {
    "type": "textarea",
    "name": "content",
    "validators": [
      "minlength": 8
    ]
  },
  {
    "type": "tree",
    "name": "address",
    "datasrc": "areaTree",
    "level": 3
  },
  {
    "type": "text",
    "name": "contact",
    "required": true,
    "validators": [
      "regexp": "<mobile>"
    ]
  }
]
```

`my-line`组件
