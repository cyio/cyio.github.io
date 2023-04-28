# videojs
[[toc]]

[video.js/player-workflows.md at master · videojs/video.js · GitHub](https://github.com/videojs/video.js/blob/master/docs/guides/player-workflows.md#accesing-the-tech-on-the-player)

## 1. 内联播放

在 video 标签加 webkit-playsinline, webkit-playsinline(iOS10) 属性 或者 webview.allowsInlineMediaPlayback = YES

iOS10 之前，不支持 参考这个 http://stackoverflow.com/a/37967643/5657916 [New video Policies for iOS | WebKit](https://webkit.org/blog/6784/new-video-policies-for-ios/)
兼容 iOS 89 的方案
[bfred-it/iphone-inline-video: 📱 Make videos playable inline on the iPhone (prevents automatic fullscreen)](https://github.com/bfred-it/iphone-inline-video)
线上测试 https://bfred-it.github.io/iphone-inline-video/demo/

poster 在 android 下兼容不好，不如在视频上层加个 div 铺张图片
解决：视频上加一层 div 做封面，由于 android 不允许视频上层有东西，所以首先将视频设为`width: 1px`，当播放后，上层的封面 remove 掉，同时`width：100%`或者你想要的宽度。

## 2. 自动播放

android / chrome 70 是不允许自动播放的，即使你用了 video.play() ,也是不行的。必须有用户的主动触发，比如触摸了屏幕，有 click 或 touch 事件产生

## 3. 播放控制

常用方法：`play|pause`

常用事件：
```
loadstart 开始加载
loadedmetadata 元信息加载成功
loadeddata 首帧加载成功
canplay
canplaythrough
ended
timeupdate
```

ios 需要播放后才会触发`canplay`和`canplaythrough`

## 4. 隐藏播放控件

android 下无法隐藏控件，可通过增加高度将控件顶出视窗以间接实现，有些副作用需要处理

[video 标签在不同平台上的事件表现差异分析 - 腾讯 Web 前端 IMWeb 团队社区 | blog | 团队博客](http://imweb.io/topic/560a6015c2317a8c3e086207)
[移动端 HTML5 video 视频播放优化实践 - 轩枫阁 – 前端开发 | web 前端技术博客](http://webcache.googleusercontent.com/search?q=cache:K3Kfv-HA0sMJ:www.xuanfengge.com/html5-video-play.html+&cd=1&hl=zh-CN&ct=clnk&gl=cn) 2015 年的不一定新
[mister-ben/videojs-flvjs: Video.js tech using flv.js for FLV playback](https://github.com/mister-ben/videojs-flvjs)

## 直播
1. 设置
flv 需要引入

  ```
  video.js
  flv.js
  videojs-flvjs.js
  ```

  配置

  ```
    flvjs: {
      mediaDataSource: {
        isLive: true,
        cors: true,
        withCredentials: false,
      },
      // config: {},
    },
  ```

2. 界面

  检测`duartionChange`事件，UI 有变化，不符合只看直播的期望

  videojs 在检测到直播流`duration < 0`才会切到`LIVE`样式，在`video-js`上添加`vjs-live`，新版还会加上`vjs-liveui`，新版有问题先不要用（安卓、seek）

  vjs-live-control 刚开始会隐藏，需要 hack 处理
  ```pug
  .video-js.vjs-live
  ```
  ```css
  .vjs-live .vjs-control.vjs-live-control {
    display: flex!important;
  }
  ```
  需要找直播流测试？本地如何模拟 livego + ffmpeg

  `ffmpeg -re -i aliyunmedia.mp4 -c copy -f flv rtmp://localhost/live/test`
  播放`http://localhost:7001/live/test.flv`

  [video.js/player.js at f5fd94f61012af2269a5528746c7d62a7b435467 · videojs/video.js](https://github.com/videojs/video.js/blob/f5fd94f61012af2269a5528746c7d62a7b435467/src/js/player.js#L2485)
  [video.js / live.md at 6c644feaa0ccef6e5e88e8bf45dc9caa82a94503·videojs / video.js](https://github.com/videojs/video.js/blob/6c644feaa0ccef6e5e88e8bf45dc9caa82a94503/docs/guides/live.md#the-new-user-interface)
  [VideoJs Live streaming example](http://tests.nuevolab.com/videojs/tests/livestream)

## 全屏事件

只有一个`fullscreenchange`事件，要配合`isFullscreen`方法

```js
this.$refs.videoPlayer.player.on('fullscreenchange', e => {
  const isFullscreen = self.$refs.videoPlayer.player.isFullscreen()
  console.log('is fullscreen: ', isFullscreen)
})
```

[FullScreen Events · Issue #3009 · videojs/video.js](https://github.com/videojs/video.js/issues/3009#issuecomment-172627411)

注意事件元素、方法，老版本 Chrome（如 63），Safari 等都需要前缀

## 在视频全屏上层显示元素

场景：上课场景的题板展示，全屏时显示休息提示

方案1：自定义全屏元素
  思路：
    1. 卸载自带事件（视频上双击和点全屏按钮，文档可能找不到，通过捕获事件，查源码定位到）
    2. 给播放器和要前置元素的**公共容器**设置全屏

  [videojs replaceFullscreen](https://gist.github.com/cyio/a838a85a87c14257427babd3ecf828e6)
  todo：参考 http://jsfiddle.net/carmijoon/pZbkX/ 补个 Demo

~~方案2-失效：(如果只考虑 chrome，可以设置一个特别大的 z-index)[https://stackoverflow.com/a/16240314/5657916]~~  

## 错误处理

```js
// Prevent “The play() request was interrupted by a call to pause()” error?
// Give the timeout enough time to avoid the race conflict.
var waitTime = 150

setTimeout(function() {
  // Resume play if the element if is paused.
  if (el.paused) {
    el.play()
  }
}, waitTime)
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

https://codepen.io/ncerminara/pen/zbKAD

http://stackoverflow.com/questions/25228056/responsive-iframe-using-bootstrap

原理：
容器设置相对定位，宽度100%，高度由 padding-bottom 设置，视频撑满容器，随容器伸缩
[vue-video-player/01-video.vue at master · surmon-china/vue-video-player](https://github.com/surmon-china/vue-video-player/blob/master/examples/01-video.vue)

## 加密解密

支持 AES-128 segment encryption
[Content Protection for HLS with AES-128 Encryption](https://www.linkedin.com/pulse/content-protection-hls-aes-128-encryption-steven-tielemans)

- 密钥保护
- 防盗播，需要自建服务器

比较：

- MPS 私有加密 - 阿里私有服务
  - 不支持 H5（调研时）
  - 必须使用阿里 CDN
  - 安全性高
- HLS 标准加密

  [hauk0101/video-hls-encrypt: 一个基于 hls 协议的视频加密 Demo](https://github.com/hauk0101/video-hls-encrypt)

  [视频加密*用户指南*媒体处理-阿里云](https://help.aliyun.com/document_detail/57113.html)

  [如何进行 HLS 的加密与播放 - 最佳实践| 阿里云](https://www.alibabacloud.com/help/zh/doc-detail/68565.htm)

  [腾讯云点播 - 视频防盗加密 - 使用总结 - 掘金](https://juejin.im/post/5c471a50f265da613a5452f6)

## 关键指标监控上报

- 播放成功率 - play/canplay event
- 首次缓冲时间/加载延迟 = loadeddata - loadstart
- 缓冲概率
- 卡顿缓冲时长 = playing - waiting，忽略第一次 playing，如果大于一定值，收集网速信息，上报
- 播放次数
- 下载进度 video.duration video.buffered.end(0)

收集信息：
- 视频地址
- 即时带宽

[视频加载延迟、卡顿计算及上报](https://gist.github.com/cyio/13ff0ff11de9d5507958aea3343f3611)
[前端视频质量监控 | DaraW | Code is Poetry](https://blog.daraw.cn/2018/09/07/video-quality-monitor/)
[十亿级视频播放技术优化揭密 - 踏雪无痕 SS - 博客园](https://www.cnblogs.com/chenpingzhao/p/6850595.html)

## 卸载和清除

一旦加载，会一直拉取，需要特殊操作停止拉取

需要两步，无法通过仅移除节点解决

一个页面视频比较多时，会阻塞后面的

```js
// 2) Clear the video source URL
oldVideo.src = ''

// 3) Tell the video to start loading "nothing"
oldVideo.load()
```

[javascript - HTML5 video: stalled event - Stack Overflow](https://stackoverflow.com/questions/28105950/html5-video-stalled-event)

## 倍速播放

- h5 原生支持
- Chrome mutes the audio if the rate is lower than 0.5, or higher than 4.0.
- 常用值 1.5|2
  [videojs/videojs-playbackrate-adjuster: A Video.js 6 middleware that adjusts controls based on playback rate](https://github.com/videojs/videojs-playbackrate-adjuster)

## 网络自适应

[播放器原理（何李石） | MySlide - 专注 PPT 分享，追随 SlideShare 和 SpeakerDeck 的脚步](https://myslide.cn/slides/491?vertical=1)

清晰度：分为普清、高清、超清、原画和 4k，分别对应 360p、480p、720p、1080p 和以上

使用这个支持 v6 的 fork 版本

原插件只支持 v5，v6 变化较大，不要用 npm/cdn 版本，是旧的

[neilhem/videojs-resolution-switcher: Resolution switcher adds the ability to select the video quality in video.js player.](https://github.com/neilhem/videojs-resolution-switcher)

## data-setup

会自动初始化，不要和手动初始化同时使用

## 组件

排序

1. children 插件会影响

```js
    children: [
      'playToggle',
      'durationDisplay',
      'timeDivider',
      'currentTimeDisplay',
      'progressControl',
      'volumePanel',
      'fullscreenToggle'
    ],
```

2. flex order tab 键切换还是按 html 顺序
   > Flex order change visual order, but html order stays the same. When you change focused element with your keyboard (TAB key) it keeps order defined by HTML. Tab index is scoped globally, so it is not right solution.
3. re-order your plugin initialization order so the plugins add their buttons in a different order.

## fade

[video.js: force control bar fade out - Stack Overflow](https://stackoverflow.com/questions/24641448/video-js-force-control-bar-fade-out)

## 主题 theme

参考：
[Videojs HLS Adaptive Streaming with quality resolution picker](https://www.nuevolab.com/videojs/tests/hls)
百度网盘的视频播放也是基于 videojs

[ProgressControl](https://docs.videojs.com/docs/api/progress-control.html)

## 点播使用 m3u8

- 可减轻服务器压力
- 首次加载更快？

[HTML5 点播 m3u8(hls)格式视频\_Helloweba](https://www.helloweba.net/javascript/571.html)
[为什么网络点播系统使用 m3u8 更有优势-PPVOD 视频点播源码/直播平台/服务器转码软件系统](http://www.ppvod.com/dianbo/wenti/443.html)

## 版本

videojs 7 集成 [http-streaming](https://github.com/videojs/http-streaming) 插件。如果不需要，使用 core.js

## 5-6 迁移

- `src()`改为异步

  ```js 
  player.src({type: 'video/mp4', src: 'foo.mp4'});
  player.ready(player.play);
  ```
  [Video.js 6 Migration Guide · videojs/video.js Wiki](https://github.com/videojs/video.js/wiki/Video.js-6-Migration-Guide)

## 恢复播放

- 需要 loadedmetadata 发生后
- 需要校验有效性？

```js
player.currentTime(this.lastTimeCopy)
player.play()
```

[VideoJS event list](https://gist.github.com/alecsgone/a6db03bade4dc405a61c63294a64f97a)
[[Video.js]隐藏和显示视频播放器控件 - 掘金](https://juejin.im/post/5adb020df265da0b7c06d970)

## 组件

[Tutorial: components | Video.js Documentation](https://docs.videojs.com/tutorial-components.html#creating-a-component)

## timeupdate

- 50ms - 250ms
- 如果需要精确控制，可以使用`requestAnimationFrame`，并在里面检查`player.currentTime()`

## ref
[视频云web播放器样式和组件自定义](http://vcloud.163.com/vcloud-sdk-manual/WebDemos/LivePlayer_Web/introToComponent.html)

## mp4
moov 需要放在开头，以启用 faststart

判断 moov 位置，在第一行（说明在开头），还是第二行（说明在末尾）
```sh
# zsh 里后面命令需要转义
ffmpeg -v trace -i file.mp4 2>&1 | grep -e type:\'mdat\' -e type:\'moov\'
```
[How to tell if faststart for video is set using ffmpeg or ffprobe - Stack Overflow](https://stackoverflow.com/questions/56963790/how-to-tell-if-faststart-for-video-is-set-using-ffmpeg-or-ffprobe)
[Optimizing MP4 Video for Fast Streaming in 2019 - VeerIT Solutions](https://veerit.com/other/optimizing-mp4-video-for-fast-streaming-in-2019/)
[在线短视频秒播优化之视频文件格式之MP4文件Moov box的位置 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000012477812)

重新排序，moov 放到开头
```sh
ffmpeg -i input.mp4 -movflags faststart -acodec copy -vcodec copy output.mp4
```

## 转码

[ffmpeg - Fastest way to convert videos (batch or single)? - Ask Ubuntu](https://askubuntu.com/questions/352920/fastest-way-to-convert-videos-batch-or-single)
[Encode/H.264 – FFmpeg](https://trac.ffmpeg.org/wiki/Encode/H.264)
[FFMPEG推流到RTMP服务器命令 - u013010310的专栏 - CSDN博客](https://blog.csdn.net/u013010310/article/details/52371440)
[ffmpeg录制摄像头 - 简书](https://www.jianshu.com/p/6f345eaf3471)

![youtube 指标](https://wx2.sinaimg.cn/large/69d3c9d2gy1g78ijxhwvxj20v00d6q7a.jpg)
[MP4文件格式解析 - 心之所向，身之所往 - CSDN博客](https://blog.csdn.net/chenchong_219/article/details/44263691)
[Audio/Video - The Chromium Projects](http://www.chromium.org/audio-video)
[Web Media Application Developer Guidelines](https://www.w3.org/2018/12/webmediaguidelines.html#byte-range-requests-in-context-of-web-video-application)
[How video streaming works on the web: An introduction](https://medium.com/canal-tech/how-video-streaming-works-on-the-web-an-introduction-7919739f7e1)

将1080p转成720p，宽度自适应
```sh
ffmpeg -i input.mkv -c copy -c:v libx264 -vf scale=-2:720 output.mkv
```
[ffmpeg 将1080P视频转换成720P_楚盟网](https://www.5yun.org/14696.html)

## 估算网速
1. 文件大小/下载所用时间
2. 视频下载本身符合上条

[How does YouTube detect connection speed without testing/using all speeds? - Web Applications Stack Exchange](https://webapps.stackexchange.com/questions/106358/how-does-youtube-detect-connection-speed-without-testing-using-all-speeds)

[How to detect internet speed in JavaScript? - Stack Overflow](https://stackoverflow.com/questions/5529718/how-to-detect-internet-speed-in-javascript)

## DASH/HLS

DASH 第一个国际标准

HLS 不是标准，chrome 移动端支持，pc 端可能永远不会支持
> DASH客户端可以根据当前的网络状况，自动选择对应的最匹配的比特率文件段下载，进行回放，而不会引起停顿或重新缓冲。这样，DASH客户端可以无缝地适应不断变化的网络条件，并提供高品质的播放，而能够尽量减少播放的停顿或缓冲。
> 虽然DASH是国际标准，但是 HLS 出现的更早，在业界占主流。

[权利的游戏、破冰行动都烂尾了，那就来讨论一下视频点播吧 - 掘金](https://juejin.im/post/5d0892a0e51d455a694f9533)

[我们为什么使用DASH - 哔哩哔哩](https://www.bilibili.com/read/cv855111/)

> HTMLVideoElement.getVideoPlaybackQuality() 中新增firstFrameTime（首帧时间）和bufferTimes（卡顿次数）以及希望获取总共可使用 MSE 的内存上限

fmp4 不需要一个 moov Box 来进行 initialization，fmp4 的 moov Box 只包含了一些 track 信息。
fmp4 可以结合 MSE 进行 HTML5 直播。

[W3C Web 中文兴趣组媒体特别任务组研讨会 -- 2019年3月23日](https://www.w3.org/2019/03/23-chinese-web-media-summary.html#item05)
> 我们不看瞬时速度，而是对最近请求的4-10个分片计算平均值

[西瓜播放器 | API](https://h5player.bytedance.com/api/#getbufferedrange)

播放本地视频，需要指定类型，blob 无法判断，不指定类型没有报错
[javascript - How can I set preview of video file, selecting from input type='file' - Stack Overflow](https://stackoverflow.com/questions/36035721/how-can-i-set-preview-of-video-file-selecting-from-input-type-file/40580663)
[Blob Url Support broke with 7.2.1 · Issue #5504 · videojs/video.js](https://github.com/videojs/video.js/issues/5504#issuecomment-481143136)

## 如何监听交互事件
如用户操作触发暂停

pause 有问题，跳转也会触发，但可通过 readyState 区分开，4 是用户操作，1 是 seek 或加载时的用户操作

[html - HTML5 video fires pause event while seeked - Stack Overflow](https://stackoverflow.com/questions/40584563/html5-video-fires-pause-event-while-seeked)

click，需要排除 dbclick，用户是在点击播放还是暂停

[HTML Standard](https://html.spec.whatwg.org/multipage/media.html#the-video-element)

![image.png](https://ws1.sinaimg.cn/large/4e5d3ea7ly1gb33uahrhvj20am08ct9n.jpg)

监听交互事件可能更容易，缺点是如果通过快捷键跳转可能需要单独判断

## MIME
"application/octet-stream" 例外 浏览器不会忽略

## 获取远程视频文件大小

- 额外发`HEAD`请求，获取`content-length`
- 需要服务器支持`HEAD`方法，需要支持CORS（可能是多个域名）。目前阿里 OSS 可以配多个、支持通配符，而 CDN 只支持配一个、精确

[Determine file size in JavaScript without downloading a file](https://bitexperts.com/Question/Detail/3316/determine-file-size-in-javascript-without-downloading-a-file)

```
    // not work 如何延迟设置自动隐藏
    // player.on('loadeddata', function() {
    // this.options.inactivityTimeout = 2000
    // })
```

写 CSS 类
姓名 复姓 新姓缩写

[视频直播的技术原理和实现思路方案整理 · Issue #61 · f2e-journey/xueqianban](https://github.com/f2e-journey/xueqianban/issues/61)

[What I’ve Learned From Working With HTML5 Video Over A Month | by Onur Şuyalçınkaya | Yemeksepeti Teknoloji | Medium](https://medium.com/yemeksepeti-teknoloji/what-ive-learned-from-working-with-html5-video-over-a-month-485c5d5c2045)
[HTML Standard](https://html.spec.whatwg.org/multipage/media.html#ready-states)
[YUV色彩空间 · FFmpeg原理](https://ffmpeg.xianwaizhiyin.net/base-knowledge/raw-yuv.html)
