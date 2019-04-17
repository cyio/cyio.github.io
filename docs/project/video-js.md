# videojs

## 1. 内联播放

在video标签加 webkit-playsinline, webkit-playsinline(iOS10) 属性 或者 webview.allowsInlineMediaPlayback = YES

iOS10之前，不支持 参考这个 http://stackoverflow.com/a/37967643/5657916 [New video Policies for iOS | WebKit](https://webkit.org/blog/6784/new-video-policies-for-ios/)
兼容iOS 89的方案
[bfred-it/iphone-inline-video: 📱 Make videos playable inline on the iPhone (prevents automatic fullscreen)](https://github.com/bfred-it/iphone-inline-video)
线上测试 https://bfred-it.github.io/iphone-inline-video/demo/ 

poster 在 android 下兼容不好，不如在视频上层加个div铺张图片
解决：视频上加一层div做封面，由于android不允许视频上层有东西，所以首先将视频设为`width: 1px`，当播放后，上层的封面remove掉，同时`width：100%`或者你想要的宽度。

## 2. 自动播放

android / chrome 70 是不允许自动播放的，即使你用了 video.play() ,也是不行的。必须有用户的主动触发，比如触摸了屏幕，有click或touch事件产生

## 3. 播放控制

常用方法：`play|pause`
常用事件：`loadstart 开始加载|loadedmetadata 元信息加载成功|loadeddata 首帧加载成功|canplay|canplaythrough|ended|timeupdate`
ios需要播放后才会触发`canplay`和`canplaythrough`

## 4. 隐藏播放控件

android 下无法隐藏控件，可通过增加高度将控件顶出视窗以间接实现，有些副作用需要处理

## 视频直播

HLS (M3U8)
苹果全家，高版本Android支持，桌面端Chrome不支持，需Flash间接支持
缺点是延迟大

WebRTC
移动端支持较差，safari不支持，高版本Android支持

[video标签在不同平台上的事件表现差异分析 - 腾讯Web前端 IMWeb 团队社区 | blog | 团队博客](http://imweb.io/topic/560a6015c2317a8c3e086207)
[移动端HTML5 video 视频播放优化实践 - 轩枫阁 – 前端开发 | web前端技术博客](http://webcache.googleusercontent.com/search?q=cache:K3Kfv-HA0sMJ:www.xuanfengge.com/html5-video-play.html+&cd=1&hl=zh-CN&ct=clnk&gl=cn) 2015年的不一定新

## ISSUES

### 播放器按钮设置fastclick例外
```js
const buttons = window.document.querySelectorAll('.vjs-control-bar>button')
this.setNeedsClick(buttons)
```
### iOS下 currentTime 方法，需特殊处理才起作用，要先监听 loadedmetadata 事件
```js
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

[Live FLV Stream on Android Chrome: "Playback seems stuck at 0, seek to 0.009" · Issue #291 · bilibili/flv.js](https://github.com/Bilibili/flv.js/issues/291#issuecomment-378025263)

## 播放器样式
16:9 自适应，高度有最大最小限制
```css
position: relative;
width: 100%;
height: calc((9 / 16) * 100vw);
max-height: calc(100vh - 169px);
min-height: 480px;
background: #000;
```
[vue-video-player/01-video.vue at master · surmon-china/vue-video-player](https://github.com/surmon-china/vue-video-player/blob/master/examples/01-video.vue)

## 加密解密
* MPS私有加密	- 阿里私有服务
    - 不支持 H5
    - 必须使用阿里 CDN
    - 安全性高
* HLS标准加密
[hauk0101/video-hls-encrypt: 一个基于hls协议的视频加密Demo](https://github.com/hauk0101/video-hls-encrypt)
[视频加密_用户指南_媒体处理-阿里云](https://help.aliyun.com/document_detail/57113.html)
[如何进行HLS的加密与播放 - 最佳实践| 阿里云](https://www.alibabacloud.com/help/zh/doc-detail/68565.htm)
[腾讯云点播 - 视频防盗加密 - 使用总结 - 掘金](https://juejin.im/post/5c471a50f265da613a5452f6)

## 监控上报
播放成功率 - play/canplay event
首次缓冲时间/加载延迟 = loadeddata - loadstart
缓冲概率
缓冲时长 = playing - waiting，忽略第一次 playing，如果大于一定值，收集网速信息，上报
播放次数
监控下载进度 video.duration video.buffered.end(0)
[前端视频质量监控 | DaraW | Code is Poetry](https://blog.daraw.cn/2018/09/07/video-quality-monitor/)
[十亿级视频播放技术优化揭密 - 踏雪无痕SS - 博客园](https://www.cnblogs.com/chenpingzhao/p/6850595.html)

## 卸载和清除
一旦加载，会一直拉取，需要特殊操作停止拉取
需要两步，无法通过仅移除节点解决
一个页面视频比较多时，会阻塞后面的
```js
// 2) Clear the video source URL
oldVideo.src = "";

// 3) Tell the video to start loading "nothing"
oldVideo.load();
```
[javascript - HTML5 video: stalled event - Stack Overflow](https://stackoverflow.com/questions/28105950/html5-video-stalled-event)

## 倍速播放
* h5 原生支持
* Chrome mutes the audio if the rate is lower than 0.5, or higher than 4.0.
* 常用值 1.5|2
[videojs/videojs-playbackrate-adjuster: A Video.js 6 middleware that adjusts controls based on playback rate](https://github.com/videojs/videojs-playbackrate-adjuster)

## 网络自适应
[播放器原理（何李石） | MySlide - 专注PPT分享，追随SlideShare和SpeakerDeck的脚步](https://myslide.cn/slides/491?vertical=1)
