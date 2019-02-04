# HLS

| 视频协议   | 用途      | PC                           | 移动   | 延时   |
| ---        | --        | --                           | --     | --     |
| HLS(m3u8)  | 直播/点播 | 支持                         | 支持   | 10-30s |
| FLV(flash) | 直播/点播 | 支持(需要用户安装启用 flash) | 支持   |        |
| RTMP       | 只能直播  | 支持                         | 不支持 | 3s     |
| MP4        | 只能点播  | 支持                         | 支持   |        |

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

[使用flv.js做直播 · Issue #3 · gwuhaolin/blog](https://github.com/gwuhaolin/blog/issues/3)
