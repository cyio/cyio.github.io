# ISSUES

## 播放器按钮设置 fastclick 例外

```js
const buttons = window.document.querySelectorAll('.vjs-control-bar>button')
this.setNeedsClick(buttons)
```

## iOS 下 currentTime 方法，需特殊处理才起作用，要先监听 loadedmetadata 事件

```js
const ctime = Storage.getItem('position-' + this.id) // 读取保存的播放位置

// iOS下 currentTime 方法，需特殊处理才起作用，要先监听 loadedmetadata 事件
let v = document.getElementsByTagName('video')[0]
v.addEventListener('loadedmetadata', e => {
  if (ctime) {
    this.$refs.videoPlayer.player.currentTime(ctime)
  }
})

this.$refs.videoPlayer.player.play() // 播放

// 注意，player 不能写成计算属性，也不要写成const，可能会被缓存，导致切数据时指向还是旧的player
```

## 异步加载脚本情况下显示 video 原生界面问题

等 videojs 初始化后，再显示 dom

## 页面失去响应（白屏）

问题表现：当页面在播放中，转入后台一段时间，再切回页面会白屏，需要长达 10 s 页面才能恢复可交互

1. CPU 用量性能分析，与老页面对比
2. 逐步停用后台任务、如定时器，排除业务代码所致
3. 隔离 video demo 中稳定复现
4. 查官方 issues
5. 源码解决方式 加开关，一次只能运行一个任务

原因：https://github.com/videojs/video.js/issues/5937#issuecomment-539442030

setInterval 在后台一直执行，不断添加 rAF 回调，页面进入后台，rAF 只是暂停，并没有取消。当页面恢复前台时积累了大量待执行 rAF 回调，导致 CPU 飙升

收获：
- CPU 分析时，节流选低端设备，问题更明显
- 恢复时结合 rAf 获取对应时刻动画状态，给用户一直在播放的感觉 https://www.zhihu.com/question/64422733/answer/222075042

[High CPU usage after the player stays in background for a while · Issue #5937 · videojs/video.js](https://github.com/videojs/video.js/issues/5937)
[高级播放器示例 - Video.js：播放器框架](https://videojs.com/advanced/#disneys-oceans)
[js-leakage-patterns/requestAnimationFrame.md at master · zhansingsong/js-leakage-patterns](https://github.com/zhansingsong/js-leakage-patterns/blob/master/requestAnimationFrame/requestAnimationFrame.md)

