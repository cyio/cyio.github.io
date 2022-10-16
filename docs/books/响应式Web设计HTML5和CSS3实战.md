- width: 23.33333 小数点多写几位，更准确
- inline-block 可以设内外边距
- 上下文就是找最近的包裹标签
- 固定宽度转百分比计算公式：（目标元素宽度 / 上下文元素宽度 = 百分比宽度）, 这个规则同样适用字体单位从 px 到 em 的转换
- 浏览器的默认字体是 16px，最小是 12px
- 用`max-width:绝对值`阻止图片放大超过自身像素（变模糊），同样也可限制网页布局的最大宽度。
- 是否要用 section，要看是出于语义目的还是仅仅为了设置样式，后者应该继续用 div。
  - section 的目的是为了标识一个鲜明的内容块。
- css 先写私有标签，这是由于同名时后者优先级高的特性，当浏览器未来支持时，能应用标准写法。
- css 的工作方式是逐行下载样式表，应用其可识别的属性，忽略其无法识别的属性。
- html 的 ID 标签只要求内部不要有空格，可以是数字，如年份 2015
- nth-child(2n+1)，起始元素+相隔元素
- li:not(.internal) 否定
- HSL360° 色相环 黄绿青蓝洋红红
- opacity 做透明时，会影响元素的内容，这时可以用 rgba

```css
// 屏过大时布局改为定宽
@media (min-width: 992px) .container {
  width: 990px;
}

// 为图片增加响应
img.responsive {
  max-width: 100%;
  height: auto;
}
```

- text-shadow 先右后下，模糊距离可选
  - box-shadow 同上
    [JS Bin - text-shadow 的应用](http://jsbin.com/xugubi/edit?html,css,output)
    [JS Bin - 背景渐变](http://jsbin.com/kehaqi/edit?html,css,output)
