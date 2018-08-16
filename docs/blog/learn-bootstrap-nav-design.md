---
title: 学习Bootstrap风格的导航切换设计
date: 2015-08-04
description:
---
# 学习Bootstrap风格的导航切换设计

[Responsive Main Navigation with Logo](http://codepen.io/jefftml/pen/aOJXpv)

导航

``` html
    <a href="#" title="show menu" class="showmenu">MENU</a>
    <a href="#">Contact Me</a>
    <a href="#">Resume</a>
    <a href="#">Something</a>
    <a href="#">Something Else</a>
```

默认只显示 `.showmenu`按钮，为菜单子项添加包裹，默认不显示 `.menuitems {display: none;}`

``` html
<div class="menu">
    <a href="#" title="show menu" class="showmenu">MENU</a>
</div>
<div class="menuitems">
    <a href="#">Contact Me</a>
    <a href="#">Resume</a>
    <a href="#">Something</a>
    <a href="#">Something Else</a>
</div>
```

`.showmenu`触发开关，给`.menuitems`添加一个临时的类（这里为什么要单独创建一个类？）

``` css
.drawer {
  display:block;
}
```

``` js
$(document).ready(function () {
    $(".showmenu").click(function () {
        $(".menuitems").toggleClass("drawer");
    });
});
```

大屏幕下，不显示 `.menu`，`.menuitems`改为行内显示

``` css
/* If browser is at least 800px wide */
@media (min-width:800px) {
  .menu {
    display:none;
  }
  .menuitems {
    display:inline;
    float:right;
    padding:4px 0 0 0;
    width:auto;
  }
  .menuitems a {
    display:inline;
    border:none;
    background:none;
  }
  .drawer {
    display:inline;
  }
}
```
