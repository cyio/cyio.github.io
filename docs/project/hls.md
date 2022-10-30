# HLS
[toc]

## 协议对比

| 视频协议   | 用途      | PC                           | 移动              | 延时   |
| ---        | --        | --                           | --                | --     |
| HLS(m3u8)  | 直播/点播 | 支持                         | 支持              | 10-30s |
| FLV(flash) | 直播/点播 | 支持(需要用户安装启用 flash) | 支持              |        |
| HTTP-FLV   | 直播/点播 | 支持                         | ios safari 不支持 | 1-3s   |
| RTMP       | 只能直播  | 支持                         | 不支持            | 3s     |
| MP4        | 只能点播  | 支持                         | 支持              |        |

## 直播和点播
直播是指视频源是实时的，一旦主播停播了，这个地址就已经失去意义了，而且由于是实时直播，所以播放器在播直播视频的时候是没有进度条的。
点播是指视频源是一个服务器上的文件，文件只要没有被提供方删除，就随时可以播放， 而且由于整个视频都在服务器上，所以播放器在播点播视频的时候是有进度条的。

## 协议兼容性
HLS，目前各手机浏览器产品对这种格式的兼容性最好，但它有个天然的问题，就是延迟比较
大，一般是 20-30 秒左右的延迟，在手机浏览器上我们并没有其它选择。

在 PC 上情况会好很多，因为 PC 上的浏览器目前还没有抛弃 flash 控件，而 flash 控件不追求洁癖，支持的视频源格式挺多的，而且各浏览器上的 flash 控件
都是 Adobe 自己开发，所以兼容性非常好。

## HLS 高延迟
平均延时在10秒-30秒


在HLS中改变自适应流时，需要建立一个新的缓冲区。在撰写本文章当前，苹果公司默认使用10秒的内容区块和一定数量的数据包来创建播放缓冲区。这导致从捕获到最终数据包组装的新玻壳(glass-to-glass)延迟约30秒。但是，当您引入CDN以获得更高的可扩展性时，您会注入另外15-30秒的延迟时间以便服务器可以缓存正在进行的内容。其他更不用提，这就是HLS延迟的最大问题。 

[移动直播技术秒开优化经验（含PPT）](https://mp.weixin.qq.com/s?__biz=MzAwMDU1MTE1OQ==&mid=2653547042&idx=1&sn=26d8728548a6b5b657079eeab121e283&scene=21#wechat_redirect)
[直播开发入门学习笔记 | Alan Hou的个人博客](https://alanhou.org/live-video/)
[如何降低直播延时？-云栖社区-阿里云](https://yq.aliyun.com/articles/277195)

## flv.js
缺点：不支持 ios safari

## https 域名 video 标签可以播放 http 源
但通过 hls.js 等库去 fetch 不可以
延伸：被动内容可以通过 http，如 Images Videos Audio

[javascript - HTML5: Playing HTTP streaming on HTTPS domain - Stack Overflow](https://stackoverflow.com/questions/44392426/html5-playing-http-streaming-on-https-domain)

[视频直播常见问题与解决办法汇总【系列一】-云栖社区-阿里云](https://yq.aliyun.com/articles/511196)

[直播http-flv小调研 - ahoustep的博客 - CSDN博客](https://blog.csdn.net/ahoustep/article/details/52175732)

[直播协议 HTTP-FLV 详解 - 简书](https://www.jianshu.com/p/bfdba8ab903a)

[为什么使用flv.js做直播 · Issue #3 · gwuhaolin/blog](https://github.com/gwuhaolin/blog/issues/3)

m3u8是一段一段加载，速度快，不会卡，体验好。    mp4 是一开始加载视频头文件，如果mp4变大，就会开始卡几秒。

## 加密，用第 2 个
```sh
// 带压缩
ffmpeg -v verbose \
  -re \
  -i aliyunmedia.mp4 \
  -c:v libx264 \
  -b:v 5000k \
  -f hls \
  -hls_time 6 \
  -hls_list_size 4 \
  -hls_wrap 40 \
  -hls_delete_threshold 1 \
  -hls_flags delete_segments \
  -hls_start_number_source datetime \
  -preset superfast \
  -start_number 10 \
  ./stream.m3u8

ffmpeg \
  -i ./source.mp4 \
  -vcodec copy \
  -acodec copy \
  -vbsf h264_mp4toannexb \
  -hls_time 12 \
  -hls_key_info_file source.keyinfo \
  -hls_playlist_type vod \
  -hls_segment_filename "./output/stream_%d.ts" ./output/stream.m3u8

-hls_time 分片时长，苹果推荐 10
-hls_key_info_file 加密配置
```
[How to Encrypt Video for HLS | HTTP Live Streaming](http://hlsbook.net/how-to-encrypt-hls-video-with-ffmpeg/)
[参数详解 - FFmpeg Formats Documentation](https://ffmpeg.org/ffmpeg-formats.html)

## 解密
1. 修改 m3u8 里的 key uri 为本地路径。也可以把 ts 替换为完整路径，直接下载合并
2. 
```sh
ffmpeg -allowed_extensions ALL -i stream.m3u8 -c copy new.mp4
```
可以直接修改留一个 ts 作解密测试

## videojs 每次请求 key
可防止 key 失效，新版本支持手动控制，开发者自行处理缓存控制

https://github.com/videojs/http-streaming#cacheencryptionkeys
[While doing HLS AES 128 playback, the player request key file for every chunk. · Issue #367 · videojs/http-streaming](https://github.com/videojs/http-streaming/issues/367#issuecomment-482603212)

## safari hls support
h264: fMP4/TS
h265: fMP4
> 1.5. The container format for HEVC video MUST be fMP4.

在线测试 hevc
https://bitmovin.com/demos/stream-test?format=hls&manifest=https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel-hevc.ism/.m3u8

> 我们的实现是纯硬解，无软解部分，也就是说没有什么版权风险，毕竟解码能力是操作系统提供的，硬件已经交过专利费了。
[8K HDR!｜为 Chromium 实现 HEVC 硬解 - 原理/实测指南 - 知乎](https://zhuanlan.zhihu.com/p/541082191)
[【专访】 Chrome HEVC 硬解背后的字节开源贡献者 - 知乎](https://zhuanlan.zhihu.com/p/577394651)
[enable-chromium-hevc-hardware-decoding/README.zh_CN.md at main · StaZhu/enable-chromium-hevc-hardware-decoding](https://github.com/StaZhu/enable-chromium-hevc-hardware-decoding/blob/main/README.zh_CN.md)
