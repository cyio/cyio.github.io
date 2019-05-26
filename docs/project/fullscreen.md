# 全屏

## 在全屏元素上层显示

浏览器会为全屏元素设置一些样式，会明确指定一些`!important`的规则，我们没法覆盖
```css
:not(:root):-webkit-full-screen
```
解决办法，是给全屏元素套一个容器，在容器上处理
[H5 全屏demo](https://codepen.io/OBKoro1/pen/wQmOzG)

## `z-index`需要设置`position`才能生效

这个功能的原理很简单，就是在视频区域再添加一个相同位置相同尺寸的同级节点，并让该节点的 z-index 属性大于视频节点的属性即可，以下只摘录关键代码：

因为视频节点是普通的节点,所以直接让需要覆盖在其上的新节点宽高与其相同即可
clientWidth属性只有数值，所以还需手动加上 'px' 这个单位
http://stackoverflow.com/questions/9191803/why-does-z-index-not-work
只有设置了position属性的元素,z-index才能对其起作用

```js
<script type="text/javascript">
  var overlayNode = document.createElement('div');
  overlayNode.style.width = videoNode.clientWidth + 'px';
  overlayNode.style.position = 'relative';
  overlayNode.style.zIndex = 20;
</script>
```
