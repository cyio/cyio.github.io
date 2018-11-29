描述：
> if you're using a fixed navbar or using inputs within a modal, iOS has a rendering bug that doesn't update the position of fixed elements when the virtual keyboard is triggered
> 如果你在固定定位的顶栏或模态框中使用输入框，iOS有个渲染bug，即当软键盘弹出时不更新固定定位元素的位置

[Getting started · Bootstrap](http://getbootstrap.com/getting-started/#support-fixed-position-keyboards)
[Web移动端Fixed布局的解决方案 | EFE Tech](http://efe.baidu.com/blog/mobile-fixed-layout/)

解决：限制滚动范围，避免fixed元素受影响

副作用较多：
* 整体页面可拖动
* 滚动偶尔会卡动

比较清晰的解决: [IOS fixed input focus bug - 简书](http://www.jianshu.com/p/4ac46d2b0f41)

最好建立独立的测试环境，进行隔离实验，准确定位重现并修复问题
棘手bug往往产生于复杂环境，时间耗费在定位问题，当务之急是建立隔离环境

手动修改position，实验性代码
```js
  window.addEventListener('resize', (e) => {
    // alert(e)
    var ele = document.getElementsByClassName('header_bar')[0]
    let pos = window.getComputedStyle(ele, null).position
    pos === 'fixed' ? ele.style.position = 'absolute' : ele.style.position = 'fixed'
    console.warn(e.type, 'header_bar position is:', ele.style.position)
  })
```

ios上键盘 弹起/收回 不会触发window.resize事件;
android 4.4 以下, 键盘唤起时, 不仅会触发resize, 而且会触发scroll事件; (如果有需要滑动失去焦点这个需求, 选择touchMove, 不要选择scroll)
ios之所以会遮挡输入框, 是因为, 第三方输入法的tool bar 或者 键盘也被当做可视区域了(包含在键盘弹出时的window.innerHeight)
