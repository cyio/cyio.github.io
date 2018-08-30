## 常用代码
* 隐藏动画
  ```js
  $(".button").click(function(){
      $(".error").slideToggle(400, "swing", function(){
      alert("Animation Completed!");
      });
  });
  ```

* 显示错误
  ```js
  $("#test").addClass("error").html("There was an error");
  ```

* 初始时机
  ```js
  $(document).ready(function(){
   // jQuery code go here...
  });
  ```
  或者这样
  ```js
  function doSomething(){
      ...
  }
  $(document).ready(doSomething);
  ```
  简写版本
  ```js
  $(function(){
   // jQuery methods go here...
  });
  ```

## 选择器

* 第一个
  ```js
  $("ul li:first"):
  ```

* 没有后代
  ```js
  $(":empty")
  $("p:empty")    // 没有后代的p
  ```

* 选择多个，类似CSS
  ```js
  $("code, em, strong")
  ```

* 否定排除
  ```js
  $("li:not(.mukund)")
  ```

* 相比于类 CSS 的选择器写法，用 find 性能更好
  ```js
  $("#apress").find("div.mukund");
  ```

* 避免使用复杂的查询，尽量简单

* 避免使用全局选择器
  ```js
  $( ".buttons > *" );    // 可能很慢
  $( ".buttons" ).children();     // 推荐使用
  ```

* each的使用
  ```js
  <script>
  $(document).ready(function(){
      $( "li" ).each(function( index ) {
      console.log( index + ": " + $( this ).text() );
      
      if ( $( this ).is( "#stop" ) ) {
       $( "span" ).text( "Stopped at div index #" + index );
       return false;
      }
      });
  });
  </script>
  </head>
  <body>
  <ul>
   <li>John</li>
   <li>Doe</li>
  </ul>
  </body>
  ```
### 选择语法

  ```
  first 第一个子元素
  first:child 集合
  + 下一个
  ~ 全部同辈
  contains 包含字符
  has 包含选择器
  hidden 全部不可见
  [title=attr] 属性
  [title!=attr] 不包含属性
  [title*=attr] 通配包含
  eq(index) 索引位置
  空格 后代元素
  逗号 多个元素
  ```

### 表单

  input
  img
  radio
  checked
  selected
  password

### 操作DOM

  css 要用大括号
  append
  appendTo
  clone
  replaceWith 跟内容
  replaceAll 跟选择器
  wrap
  wrapInner 内容
  remove 移除
  empty 仅清空内容

### 事件

  .bind("event1 event2", function()) 多个事件

### 杂记

  $()
  三个调用方式：CSS选择器，Element、Document或Window对象，HTML文本。
  $.each() 函数
  .each() 方法（没有美元）
  x.html 等价于 x[0].innerHTML
  innerWidth() 和 outerWidth() 的区别是，后者包括border
  toggle(f, g, h) 循环执行
  .bind('mouseover.myMod', f) 设置命名空间
  $("form").submit() 等价于 $("form").trigger("submit")
  $().event.trigger() 指定事件更高效
  实时事件依赖于事件冒泡 ?
  $.getScript() $.getJSON() 参一：内容，参二：Success，参三：XMLHttpRequest

## AJAX
  回调情景`done``fail`和`always`
