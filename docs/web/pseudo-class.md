# 伪类

给内容的状态添加样式

- 前提是并列元素

```css
// Syntax
selector:pseudo-class {
  property: value;
}

// type 标签类型
p:nth-of-type(4n) {
  color: lime;
}

// child 指同辈元素，first/last/nth
:nth-child(4n) {
  color: lime;
}
// 从后面数
:nth-last-child()

// 没有后代的元素
div:empty {
  background: lime;
}
```

[Mastering the :nth-child | CSS3 pseudo classes and :nth-child ranges](http://nthmaster.com/)
