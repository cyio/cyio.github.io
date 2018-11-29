# 魅族转盘


## 框架选择

原生 OR 框架

考虑因素
* web 浏览器兼容
* 时间
* 技术需求

用最熟悉的工具链最快，平时多练多准备，临用赶时间才能应付

## 难点

* 转盘规则
简化，转到区域中间
累加，总角度和要转的角度要放到外面，转前把上一次的角度值减掉

```js

    setResult (index, callback) {
      const isRunning = this.$els.startBtn.classList.length
      if (isRunning > 1) return
      if (this.lotteryCount === 0) {
        this.showPopup.over = true
        return
      }
      totalDeg = totalDeg - targetDeg   // 减回到 0 度
      const round = 360 * 6           // 圈数
      if (index > -1) {
        targetDeg = 360 / 6 * index     // 从0度起算
      } else {
        targetDeg = 360 / 6 * (Math.floor(Math.random() * 6)) + 30  // 随机区域正中间度数加上到边界的度数
      }
      totalDeg = totalDeg + targetDeg + round
      this.lotteryCount = this.lotteryCount - 1
      Velocity(this.$els.startBtn, {
        rotateZ: totalDeg
      }, {
        easing: 'easeInOutQuart',
        duration: 3400,
        complete: callback
      })
    },
```

* 模态组件 modal

开始选了vux，移动端组件，非常不合适
这种场景没有一般性，用别人的适用起来，要改很多东西，需要自己根据需求去实现

* 鼠标进入窗口

		这里用了 mouseover，点击才有效果，没找到类似 CSS 中hover的检测方式

## 原理探究

