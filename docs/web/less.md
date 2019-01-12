# Less

一般都有哪些复用需求呢？
- Mixin 只适合需要传参数快速创建的场景，否则等同于手动复制而没必要使用。
  + 类名本身是否输出，如果为否则加上括号
- 插值，调用时传变量
- 继也？
- 避免无意间去写依赖上下文的样式，尽量写通用模块，便于后期维护
- 如果跟其他元素紧密，那就放在li的嵌套里，否则就跟li独立开来。如无必要，勿增嵌套。

`&`这个符号引用父选择器，写伪类时会用到
```css
.clearfix {
  display: block;
  zoom: 1;

  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```

简单的代码复用、继承
```css
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}

#menu a {
  color: #111;
  .bordered;
}

.post a {
  color: red;
  .bordered;
}
```

extend 扩展
作用：把当前选择器合并给另一个选择器,
```css
nav ul {
  &:extend(.inline);
  background: blue;
}
.inline {
  color: red;
}
```
输出
```css
nav ul {
  background: blue;
}
.inline,
nav ul {
  color: red;
}
```
