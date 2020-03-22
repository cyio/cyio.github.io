# 页面编码

在 GBK 编码的页面里编写如下代码：

```html
<form method="post" action="..." accept-charset="utf-8">
  ...
</form>
```

如此的代码在 Firefox 等正常的浏览器下没有任何问题，但是遇到 IE 这个变态浏览器就不灵光了，我们还得用点不入流的手段 Hack 一下：

```html
<form
  method="post"
  action="..."
  accept-charset="utf-8"
  onsubmit="document.charset='utf-8';"
>
  ...
</form>
```

剩下的工作浏览器会搞定。

[利用 form 的“accept-charset”在不同编码的页面间提交表单 - Q.Lee.lulu - 博客园](https://www.cnblogs.com/QLeelulu/archive/2009/03/17/1414064.html)
