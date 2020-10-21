- LESS

  - 公共类的复用，其实提取出来就 OK
  - .class() 这种方式引入的只是里面的规则，而 class 类似函数名

- 小红点：是在 badge 上 hack 了一些。

- 倒三角：用图标字体做的，用纯 CSS 有点麻烦，得不偿失。

- 不定宽文字加个编辑图标：

```css
.name {
  span {
    position: relative;
    font-size: 16px;
  }
  i.edit {
    font-size: 11px;
    color: #8e8e8f;
    position: absolute;
    top: 0;
    right: -16px;
  }
}
```

- 列表的进入箭头上下居中：[Commit - 69a5f0ad36b1fa9f9d4511589d2f47673df72bbe - fnsoxt - bocai - Coding.net](https://coding.net/u/fnsoxt/p/bocai/git/commit/69a5f0ad36b1fa9f9d4511589d2f47673df72bbe)

  思路就是：隐藏标题行的箭头，把`.item-link .item-inner`的箭头显示出来

- 去掉链接切换动画，方法有二

  - 在 a 上添加 no-animation 类
  - 配置 data `<a href="about.html" data-animate-pages="false"></a>`

- 固定工具栏，页面变但工具栏不变，用 tabbar 实现。注意它的原理是在页面内访问 tab ID 的，而项目中各个页面比较复杂是在单独文件中写的。解决方法是，把 tablink 换成 link，然后工具栏上的链接去掉动画。

- 默认的布局（flex）不能直接用 show 方法，因为 show 就是 display: block，而 flex 不是 block，解决方法是套一个 div

- 工具栏下方多了 1px 的空白，用负的 margin-top 修复

- 事件冒泡

```js
// 点击菠菜按钮
$$(page.container)
  .find('.match-card .btn.enable')
  .click(function(e) {
    e.stopPropagation()
    mainView.router.load({
      url: 'bocai.html',
      dataset: $$(this).dataset()
    })
  })
```

- 写一个功能写老半天，还是不熟练

  - for 的条件写反了
  - 如何给对象添加值，object.key，注意这里不要 var 声明，因为 object 已经存在
  - 如果对象的 key 是字符串，如何访问对应的值，用 Object.keys(object)，得到的是 keys 数组，所以还要加个数组序号去访问 key 对应的值。Object.keys(object)[index]

- 用 for-in 还是 for
  看这里是否需要按顺序枚举，如果不需要，用 for in 也行

- 添加一个最简单的遮罩

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

- border 和内容保持一个颜色，就是不给 border 设置颜色，而是继承 color

```css
.box {
  color: blue;
  border: 1px solid;
}
```

- 键盘遮挡问题
  - 微信下输入框正常，是 F7 库的问题，由于两栏的高度，而浏览器滚动原生检测的是 body
  - scrollintoview 会引起重绘，导致页面向上位移，textarea 各种奇怪表现
  - 所以，绕过 scrollintoview，用 translate 替代，替代后 page-on-left 会显示在左下部分，要隐藏掉
- 无限滚动的 preloader，没数据时要手动移除。因为 preloader 是用户滚下去就要看到，所以默认是显示并一直在那里的。

- 获取滚动条的值，兼容 iOS 和 Android
  `window.scrollY window.scrollX`

- jade 复用，直接 include 即可，页面继承

- 把 css 和 js 都抽象成“资源”，相当于：组件 = 模板 + 资源

- swiper

  - 要么用类自动初始化，要么用 JS 手动控制，两者有冲突。注意 data 加短杠传参与 JS 写法的不同，前者是把词用短杠连接，后者是驼峰命名。

  - swiper 的指示点在 Android 微信下会偶尔跑到左边，解决方法是在内联指示点的定位样式

- jQuery 没有 reset 方法，所以这里要取第一个元素，调用 form 的原生方法

```js
$$('#feedback')[0].reset()
```

- Android 下键盘遮挡问题，transform 版本

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

- 返回个位数日期

```js
function getSingleDay(string) {
  var date = string
  console.log(date)
  var regex = /[\u4e00-\u9fa5]([0-9]{2})[\u4e00-\u9fa5]/g
  var matched = regex.exec(date)[1]
  console.warn(matched)
  if (parseInt(matched) < 10) {
    date = date.replace(matched, parseInt(matched))
  }

  return date
}

var date = '2月01日 星期一 1场可投'
getSingleDay(date) // '2月1日 星期一 1场可投'
```

或者
```js
var date = '2月01日 星期一 1场可投'
// var date = '2月1日 星期一 1场可投'
var regex = /0[0-9]日/ // 必须是 0 开头

let r = date.replace(regex, match => {
  console.log(match)
  // return match.slice(1)
  return match.replace(0, '') // replace 没有匹配分组，需要多处理一步
})
console.log(r)
```
