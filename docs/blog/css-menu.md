---
title: CSS实现菜单或下拉选择
date: 2016-05-10
description: 
---

# CSS实现菜单或下拉选择

其实本来可以用表单来做，但有定制化样式的需求，只能用CSS模拟实现了

比如要实现下拉选择的内容居中，在Chrome下可以这样

``` css
select {
  text-align-last: center
}
```

但是在移动端非Chrome下就没有办法了，是没法调整对齐的

无奈放弃原生表单，搬出CSS来从头模拟实现，HTML大概是这样

``` jade
.dropdown
  span 请选择
  ul.dropdown-content
    li 选项一    
    li 选项二    
    li 选项三    
```

CSS如下

``` css
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  z-index: 100;
  position: absolute;
  top: 100%;　// top定位这里用百分比
  width: 92%;
  margin-left: -2%;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  // border: 1px solid #b5b6b5;
  list-style: none;
  padding: 15px 10px;
  font-size: 14px;
}
.dropdown-item {
  line-height: 22px;
}
.dropdown-item:hover {
  cursor: pointer;
}
.dropdown:hover .dropdown-content {
  opacity: 1;
  z-index: 100;
  transition: opacity .3s
}
```

缺点也很明显，要写额外的JS来处理选中值的变化
