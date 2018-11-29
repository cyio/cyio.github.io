+ LESS
    - 公共类的复用，其实提取出来就OK
    - .class() 这种方式引入的只是里面的规则，而class类似函数名

+ 小红点：是在badge上hack了一些。

+ 倒三角：用图标字体做的，用纯CSS有点麻烦，得不偿失。

+ 不定宽文字加个编辑图标：
```css
    .name {
      span {
        position: relative;
        font-size: 16px;
      }
      i.edit {
        font-size: 11px;
        color: #8E8E8F;
        position: absolute;
        top: 0;
        right: -16px;
      }
    }
```

+ 列表的进入箭头上下居中：[Commit - 69a5f0ad36b1fa9f9d4511589d2f47673df72bbe - fnsoxt - bocai - Coding.net](https://coding.net/u/fnsoxt/p/bocai/git/commit/69a5f0ad36b1fa9f9d4511589d2f47673df72bbe)

    思路就是：隐藏标题行的箭头，把`.item-link .item-inner`的箭头显示出来

+ 去掉链接切换动画，方法有二
    - 在a上添加no-animation类
    - 配置data `<a href="about.html" data-animate-pages="false"></a> `    

+ 固定工具栏，页面变但工具栏不变，用tabbar实现。注意它的原理是在页面内访问tab ID的，而项目中各个页面比较复杂是在单独文件中写的。解决方法是，把tablink换成link，然后工具栏上的链接去掉动画。

+ 默认的布局（flex）不能直接用show方法，因为show就是display: block，而flex不是block，解决方法是套一个div

+ 工具栏下方多了1px的空白，用负的margin-top修复

+ 事件冒泡
```js
// 点击菠菜按钮
$$(page.container).find('.match-card .btn.enable').click(function(e) {
    e.stopPropagation();
    mainView.router.load({
        url: 'bocai.html',
        dataset: $$(this).dataset(),
    });
});
```

+ 写一个功能写老半天，还是不熟练
    - for 的条件写反了
    - 如何给对象添加值，object.key，注意这里不要var声明，因为object已经存在
    - 如果对象的key是字符串，如何访问对应的值，用 Object.keys(object)，得到的是keys数组，所以还要加个数组序号去访问key对应的值。Object.keys(object)[index]

+ 用for-in还是for
    看这里是否需要按顺序枚举，如果不需要，用for in也行

+ 添加一个最简单的遮罩
```html
<div class="box">this is a box</div>
```
```css
.box {
  width: 300px;
  height: 100px;
  background: #ccc;
  position: relative;
}

.box:before {
  position: absolute;
  display: block;
  content: '';
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0.6;
}
```
    
+ border和内容保持一个颜色，就是不给border设置颜色，而是继承color
```css
.box {
  color: blue;
  border: 1px solid;
}
```    


+ 键盘遮挡问题
    - 微信下输入框正常，是F7库的问题，由于两栏的高度，而浏览器滚动原生检测的是body
    - scrollintoview会引起重绘，导致页面向上位移，textarea各种奇怪表现
    - 所以，绕过scrollintoview，用translate替代，替代后 page-on-left 会显示在左下部分，要隐藏掉
    
+ 无限滚动的preloader，没数据时要手动移除。因为preloader是用户滚下去就要看到，所以默认是显示并一直在那里的。

+ 获取滚动条的值，兼容iOS和Android
`window.scrollY  window.scrollX`

+ jade复用，直接include即可，页面继承

+ 把css和js都抽象成“资源”，相当于：组件 = 模板 + 资源

+ swiper
    - 要么用类自动初始化，要么用JS手动控制，两者有冲突。注意data加短杠传参与JS写法的不同，前者是把词用短杠连接，后者是驼峰命名。

    - swiper的指示点在Android微信下会偶尔跑到左边，解决方法是在内联指示点的定位样式
    
+ jQuery没有reset方法，所以这里要取第一个元素，调用form的原生方法
```js
$$('#feedback')[0].reset();
```    

+ Android下键盘遮挡问题，transform版本

```js
  // 解决Android下在From中输入，键盘弹出页面不能适应滚动的问题
var curPage = $$(".page-content.game");
var pageHeightFull = curPage.height();
$$(".item-input > *").each(function(index,dom){
    $$(dom).on('focus', function(e) {
        domTop = $$(dom).offset().top + $$(dom).height(); // 获取当前输入控件与页面顶部的距离
    });
});
$$(window).on('resize', function(e) {
    if (myApp.device.ios) return;
    var pageHeightNew = curPage.height(); // 键盘弹出时的页面高度
    var kbdHeight = pageHeightFull - pageHeightNew; // 键盘高度
    var kbdTop = pageHeightFull - kbdHeight; // 键盘与页面顶部之差
    var scrollHeight = domTop - kbdTop + 45; // 需要滚动的距离，要加上工具栏高度
    if (pageHeightNew < pageHeightFull) { // 检测页面高度发生变化（键盘弹出）
        if (domTop >= pageHeightNew) { // 输入控件被遮挡时才需要处理
            var tmpDiv = "<div id='tmp' style='height:" + kbdHeight + "px'>&nbsp;</div>"; // 在页面底部临时插入键盘高度的div
            $$(page.container).find('.page-content').append(tmpDiv).scrollTop(scrollHeight);
        }
    } else {
        $$(page.container).find('#tmp').remove();
    }
```

+ 返回个位数日期

```js
function getSingleDay (string) {
  var date = string;
  console.log(date);
  var regex = /[\u4e00-\u9fa5]([0-9]{2})[\u4e00-\u9fa5]/g;
  var matched = regex.exec(date)[1];
  console.warn(matched);
  if(parseInt(matched) < 10) {
    date = date.replace(matched, parseInt(matched));
  }

  return date;
};

var date = '2月01日 星期一 1场可投';
getSingleDay(date); // '2月1日 星期一 1场可投'
```
