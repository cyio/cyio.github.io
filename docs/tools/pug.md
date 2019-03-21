# Pug

* 两种注释风格
  `//` 编译为HTML风格注释，块注释，内容要有缩进
  `//-` 不编译到HTML

* body 可以和它的后代同级缩进，如
  body
  div
  div

* mixin
  mixin 必须放到最顶部
  &attributes(attributes) 映射属性
  +hello 调用mixin

* 遍历
  ```
  for i in ['a', 'b', 'c', 'd']
    .area(id='area-'+i)
  ```

* 如何传数据
  `# {}`

* 文件引入
  新建 filename.pug
  引用 include filename

* [pug变量如何插入vue表达式](http://codepen.io/cyio/pen/VKYdRb)

