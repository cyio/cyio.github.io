1. `git clone https://github.com/antvis/wx-f2.git`
2. `cp wx-f2/f2-canvas static/`
3. 只能写在页面？因为需要配置`main.js`
4. 
```
  onLoad() {
    // 在 onLoad 内部通过id找到该组件, 然后调用该组件的初始化方法
    // 注意这里选择组件名称是页面名
    this.$mp.page.selectComponent('#test').init(initChart)
  },
```
5. 提示`TypeError: Cannot read property 'defaultView' of undefined `
在 ff-canvas 或父级添加样式
```css
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
```
