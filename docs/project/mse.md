# MSE api

提供无插件流媒体支持

之前只能播放整个文件，或用 Flash

分割合并 arraybuffers

src => MediaSource Object(Blob) [SourceBuffer]

更好粒度控制数据请求量、请求频率，控制内存使用，动态码率流基础 Dash/HLS

缺点：计算开销，耗电，iOS 仅 >= iPadOS 13 支持

流程：

```
Download ---》 Response.arrayBuffer(适用fetch/xhr等异步获取流媒体数据) ---》 SourceBuffer(添加到MediaSource的buffer中) ---》 <vedio/> or <autio/>
```

核心代码：

```js
var mediaSource = new MediaSource()
//console.log(mediaSource.readyState); // closed
video.src = URL.createObjectURL(mediaSource)
mediaSource.addEventListener('sourceopen', sourceOpen)

var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec)
fetchAB(assetURL, function(buf) {
  sourceBuffer.addEventListener('updateend', function(_) {
    mediaSource.endOfStream()
    video.play()
    //console.log(mediaSource.readyState); // ended
  })
  sourceBuffer.appendBuffer(buf)
})
```

[Media Source API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API#media_source_extensions_concepts_and_usage)
[Ddmo](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html)
