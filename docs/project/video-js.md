# videojs

1. 内联播放
2. 自动播放
3. 播放控制
4. 隐藏播放控件

1. 在video标签加 webkit-playsinline, webkit-playsinline(iOS10) 属性 或者 webview.allowsInlineMediaPlayback = YES

iOS10之前，不支持 参考这个 http://stackoverflow.com/a/37967643/5657916 [New video Policies for iOS | WebKit](https://webkit.org/blog/6784/new-video-policies-for-ios/)
兼容iOS 89的方案
[bfred-it/iphone-inline-video: 📱 Make videos playable inline on the iPhone (prevents automatic fullscreen)](https://github.com/bfred-it/iphone-inline-video)
线上测试 https://bfred-it.github.io/iphone-inline-video/demo/ 

poster 在 android 下兼容不好，不如在视频上层加个div铺张图片
解决：视频上加一层div做封面，由于android不允许视频上层有东西，所以首先将视频设为的 width：1px ，当播放后，上层的封面remove掉，同时 width：100% 或者你想要的宽度。

2. android下是不允许自动播放的，即使你用了 video.play() ,也是不行的。必须有用户的主动触发，比如触摸了屏幕，有click或touch事件产生

3. 常用方法：play(),pause() 常用事件：'loadstart','canplay','canplaythrough','ended','timeupdate'
ios需要播放后才会触发'canplay'和'canplaythrough'

4. android 下无法隐藏控件，可通过增加高度将控件顶出视窗以间接实现，有些副作用需要处理

## 视频直播

HLS (M3U8)
苹果全家，高版本Android支持，桌面端Chrome不支持，需Flash间接支持
缺点是延迟大

WebRTC
移动端支持较差，safari不支持，高版本Android支持

[video标签在不同平台上的事件表现差异分析 - 腾讯Web前端 IMWeb 团队社区 | blog | 团队博客](http://imweb.io/topic/560a6015c2317a8c3e086207)
[移动端HTML5 video 视频播放优化实践 - 轩枫阁 – 前端开发 | web前端技术博客](http://webcache.googleusercontent.com/search?q=cache:K3Kfv-HA0sMJ:www.xuanfengge.com/html5-video-play.html+&cd=1&hl=zh-CN&ct=clnk&gl=cn) 2015年的不一定新

## 问题

```js
  // 播放器按钮设置fastclick例外
  const buttons = window.document.querySelectorAll('.vjs-control-bar>button')
  this.setNeedsClick(buttons)

  this.getVideoSrc() // 不能在这里加then处理播放，没明白

  const ctime = Storage.getItem('position-' + this.id) // 读取保存的播放位置

  // iOS下 currentTime 方法，需特殊处理才起作用，要先监听 loadedmetadata 事件
  let v = document.getElementsByTagName('video')[0]
  v.addEventListener('loadedmetadata', (e) => {
    if (ctime) {
      this.$refs.videoPlayer.player.currentTime(ctime)
    }
  })

  this.$refs.videoPlayer.player.play() // 播放

  // 注意，player 不能写成计算属性，也不要写成const，可能会被缓存，而导致切数据时指向还是旧的player
```

## 全屏事件

只有一个`fullscreenchange`事件，要配合`isFullscreen`方法
```js
  this.$refs.videoPlayer.player.on('fullscreenchange', (e) => {
    const isFullscreen = self.$refs.videoPlayer.player.isFullscreen()
    console.log('is fullscreen: ', isFullscreen)
  })
```
[FullScreen Events · Issue #3009 · videojs/video.js](https://github.com/videojs/video.js/issues/3009#issuecomment-172627411)

## 错误处理

```js
// Prevent “The play() request was interrupted by a call to pause()” error?
// Give the timeout enough time to avoid the race conflict.
var waitTime = 150;

setTimeout(function () {      
  // Resume play if the element if is paused.
  if (el.paused) {
    el.play();
  }
}, waitTime);
```
## 测试资源
测试源：G33K-TRICKS - Your source to Tips and Tricks : List of HLS Streaming video sample test URL http://g33ktricks.blogspot.com.br/2016/04/list-of-hls-streaming-video-sample-test.html
苹果的源有跨源限制，不要用

//player.alicdn.com/video/aliyunmedia.mp4

http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8

[Big list of sample videos for testers - standaloneinstaller.com](https://standaloneinstaller.com/blog/big-list-of-sample-videos-for-testers-124.html)

[Node.js 中实现 HTTP 206 内容分片 - 开源中国](https://www.oschina.net/translate/http-partial-content-in-node-js)

## 视频格式
查看`ffmpeg -i sample.flv`
