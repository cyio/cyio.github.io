# 代码风格

## CSS

- 属性名一律小写，除了个别字体名。
- 允许嵌套的情形：伪元素，伪类，组件状态，媒体查询

## HTML

- 文本、图像、链接等内联元素不能直接暴露在 body 标签中，必须用其他标签包裹
- 内联元素不能包含块级元素
- 优先用语义化标签
- body 中设置文字大小 font-size：63%，在需要设置 12px 的地方设置文字大小为 1.2em，以此类推 14px 相对 1.4em

## JavaScript

变量用 camelCase ，类用 CamelCase

## JS 严格模式下的编写要求

`'use strict'`

- 变量使用前必须先声明
- 使用对象字面量时，属性名必须唯一
- 要求参数唯一，在函数内部改变参数会报错
