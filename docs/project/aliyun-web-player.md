## 阿里云 Web 播放器

[阿里云Aliplayer播放器，定制](https://player.alicdn.com/aliplayer/setting/setting.html)
[阿里云Aliplayer播放器，属性](https://player.alicdn.com/aliplayer/docs/properties.html)
[阿里云 Aliplayer高级功能介绍(七)：多分辨率-云栖社区-阿里云](https://yq.aliyun.com/articles/687092)
[vue-aliplayer/VueAliplayer.vue at master · slacrey/vue-aliplayer](https://github.com/slacrey/vue-aliplayer/blob/master/src/VueAliplayer.vue)
[如何利用阿里视频云开源组件，快速自定义你的H5播放器？-云栖社区-阿里云](https://yq.aliyun.com/articles/626454)

倍速播放功能仅H5支持（和阿里工程师确认过，Flash暂不支持倍速），并且部分移动端浏览器不支持设置H5倍速，功能会失效，比如android微信。
当前清晰度切换只有在使用阿里云点播和转码服务时通过vid方式（用户上传视频到阿里云点播后会获得vid）播放时会自动开启。

## 防盗链
http-referer
[Referer防盗链_访问控制_用户指南_全站加速-阿里云](https://help.aliyun.com/document_detail/65105.html)

## 清晰度
> 多清晰度预置：流畅、标清、高清、超清、2k、4k等多个预置清晰度，提供最佳经验值，降低接入门槛
[音视频转码_媒体处理_开发指南_视频点播-阿里云](https://help.aliyun.com/document_detail/99719.html?spm=a2c4e.11153940.blogcont687092.13.76f0671fa7s4DI#%25E7%2582%25B9%25E6%2592%25AD%25E8%25BD%25AC%25E7%25A0%2581%25E5%258A%259F%25E8%2583%25BD%25E7%2589%25B9%25E6%2580%25A7)


## 版本
2.8.2 

点击播放按钮报错
aliplayer-min.js:2 Uncaught ReferenceError: liveForceLoad is not defined
    at i.t.play (aliplayer-min.js:2)
    at i.<anonymous> (aliplayer-min.js:2)
    at HTMLDivElement.r (aliplayer-min.js:2)
    at HTMLDivElement.a.dispatcher.a.dispatcher (aliplayer-min.js:2)

使用 2.8.1 OK
