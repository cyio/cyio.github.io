# 伪元素

## 常见的应用场景
- 排版，如加引号

``` css
p::before{
    content:open-quote;
}
p::after{
    content:close-quote;
}
```
- 给链接前加图标(URI)

``` css
a::before{
    content: url(https://www.mozilla.org/favicon.ico) " MOZILLA: ";
    color:   gray;
}
```
- 给待办事项前加对勾（绝对定位、空元素、边框、旋转）

``` css
li.done::before {
  content: '';
  position: absolute;
  border-color: #009933;
  border-style: solid;
  border-width: 0 0.3em 0.25em 0;
  height: 1em;
  top: 1.3em;
  left: 0.6em;
  margin-top: -1em;
  transform: rotate(45deg);
  width: 0.5em;
}
```
- HTML转Markdown格式

``` css
h1::before { content: "# "; }
h2::before { content: "## "; }
h3::before { content: "### "; }
```
## 兼容性

注意IE8支持的是`:before`
## 参考

[content - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/content)
[::before (:before) - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/%3A%3Abefore)
[Learning To Use The :before And :after Pseudo-Elements In CSS – Smashing Magazine](http://www.smashingmagazine.com/2011/07/13/learning-to-use-the-before-and-after-pseudo-elements-in-css/)
[Render Markdown as unrendered Markdown (see http://jsbin.com/huwosomawo)](https://gist.github.com/ImJasonH/c00cdd7aece6945fb8ea)
