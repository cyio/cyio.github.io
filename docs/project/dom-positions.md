[Js位置与大小（1）——正确理解和运用与尺寸大小相关的DOM属性 - 流云诸葛 - 博客园](http://www.cnblogs.com/lyzg/p/5043974.html)

```js
// 判断滚动方向
scroll(function(direction) { console.log(direction) });    
function scroll( fn ) {
    var beforeScrollTop = document.body.scrollTop,
        fn = fn || function() {};
    window.addEventListener("scroll", function() {
        var afterScrollTop = document.body.scrollTop,
            delta = afterScrollTop - beforeScrollTop;
        if( delta === 0 ) return false;
        fn( delta > 0 ? "down" : "up" );
        beforeScrollTop = afterScrollTop;
    }, false);
}
```
