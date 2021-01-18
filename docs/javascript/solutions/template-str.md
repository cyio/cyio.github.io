# 替换模板字符

```js
// 输入
// replaceTemplateStr('<div class={%className%}>{%name%}</div>', {className:'hd', name:123})
// 输出
// <div class="hd">123</div>
```

- 用 key 拼接字符，准确 replace
- str 是纯方法，不修改原字符串

```js
function tpl(template, data) {
  let str = template
  Object.keys(data).forEach(key => {
    str = str.replace(
      `{%${key}%}`,
      key === 'className' ? `"${data[key]}"` : data[key]
    )
  })
  return str
}
let r = tpl('<div class={%className%}>{%name%}</div>', {
  className: 'hd',
  name: 123
})
console.log(r)
```

正则匹配，存在问题
className 要求双引号，需要 replace 多次，并且先 replace 特例

```js
// not work
function replaceTemplateStr(template, data) {
  return template.replace(`/\{\%(.*?)\%\}/g`, (match, key) => {
    return data[key]
  })
}
let r = tpl('<div class={%className%}>{%name%}</div>', {
  className: 'hd',
  name: 123
})
console.log(r)
```
