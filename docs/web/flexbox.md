# Flexbox

* display 属性值为 flex 时，渲染为块级元素，为 inline-flex 时渲染为行内元素
* 由伸缩容器+伸缩项目构成，支持任意嵌套，内外互不干扰
* 
| justify-content | 两头空间如何       |
| ---             | ---                |
| space-between   | 没有               |
| space-around    | 有，但为半格       |
| space-evenly    | 有，与其它间隔相等 |
* `flex-grow`增长系数，`flex-shrink`收缩系数。总和不足 1 时，按 1 计算
* 父元素设置`flex-wrap: wrap;`，配合某个子元素设置`flex-basis: 100%;`，可以实现后续内容换行排列

## 解决传统布局问题：如何灵活分配空间
  1. 多余空间的分配  
  实现三栏等高布局，两边侧栏定宽，中间内容占用剩余空间  
  ```
  <style>
    section {display: flex;}
    .left-side,
    .right-side {width: 200px;}
    .content {flex-grow: 1;}
  </style>
  <section>
    <div class="left-side"></div>
    <div class="content"></div>
    <div class="right-side"></div>
  </section>
  ```
  2. 空间不足时收缩
  ```

  ```

## 兼容性
* IE10 需要`-ms-`前缀，IE11 支持`flex`，但有一些 bug
* UC 需要`-webkit-box`

## 参考
[Flexbox Cheatsheet](http://yoksel.github.io/flex-cheatsheet/)  
[Backwards Compatibility of Flexbox - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox#Status_in_browsers)  
[文章 - Flex 子元素高度塌陷 | 前端网（QDFuns）](https://www.qdfuns.com/article/25669/87bd5567ba0af95f5ad0064bf36b7139.html)  
[JS Bin - Collaborative JavaScript Debugging](http://jsbin.com/mesivil/edit?html,css,output)  
[移动端全兼容的flexbox速成班 - 前端技术 - 腾讯ISUX](https://isux.tencent.com/flexbox.html)  
[css - Margin collapsing in flexbox - Stack Overflow](https://stackoverflow.com/a/43882888/5657916)  
[CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/#flex-containers)  
[Progressively Enhancing CSS Layout: From Floats To Flexbox To Grid — Smashing Magazine](https://www.smashingmagazine.com/2017/07/enhancing-css-layout-floats-flexbox-grid/)  
[gridtoflex.com](https://www.gridtoflex.com/)  
