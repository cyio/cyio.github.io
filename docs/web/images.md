# 图片
[[toc]]

> web 优化专家一定是图片优化专家

## 显示优化

- 缩略图到原图过渡

[web 前端图片加载优化，从图片模糊到清晰的实现过程](http://www.fly63.com/article/detial/359)

## 图片格式

- WebP 有损、无损，30% 体积优势
- APNG 质量、大小较 GIF 均有优势，移动端可放心用，桌面端需要兼容 IE/EDGE，可用 JS 库播放 APNG

  [UC 内核支持更好的动画格式-APNG](https://zhuanlan.zhihu.com/p/37160029)

  [全面掌握移动端主流图片格式的特点、性能、调优等 - 开源中国社区](https://www.oschina.net/question/3915715_2283697)

  [GIF vs APNG vs WebP](http://littlesvr.ca/apng/gif_apng_webp.html)

  [iSparta－PNG 压缩与格式转换工具](http://isparta.github.io/)

### 不同格式适用场景
无损，压缩级别只是编码不同？

| 格式     | 使用场景                                         | 劣势                   |
| --       | --                                               | -                      |
| JPG/JPEG | 1. 大的背景图； 2. 轮播图； 3. Banner 图 4. 照片 |
| PNG      | 1. 小 Logo； 2. 透明背景                         |
| GIF      | 动态图片                                         |
| SVG      | 能适应不同设备且画质不能损坏的图片               |
| Base64   | 大小不超过 2KB，且更新率低的图片                 | 无法缓存，不适合大图片 |
| WebP     | 现代浏览器                                       |

[PNG - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/PNG#%25E4%25B8%258E%25E5%2585%25B6%25E4%25BB%2596%25E6%25A0%25BC%25E5%25BC%258F%25E7%259B%25B8%25E6%25AF%2594)

## 响应式展示

srcset/sizes

- 查看设备宽度
- 计算 sizes 中第一个符合媒体查询条件
- 查看给定 slot size
- 匹配 srcset 中最接近 size
- 旧浏览器会忽略
  [Responsive Images with srcset and sizes](https://codepen.io/tombennet/pen/yYgLaQ)
  [图片响应式解决方案 - 简书](https://www.jianshu.com/p/235ef450f5e9)

[Use Imagemin to compress images  |  web.dev](https://web.dev/fast/use-imagemin-to-compress-images)

## 占位图工具

[iph](http://iph.href.lu/200x200)

## h2 lazy

问题：一般期望首屏图片尽快下载完，但使用了 H2，优先级低的图片可能拖慢优先级高的图片下载，

- h2 并行，对下行带宽来说，相当于在请求一个合并文件
- 开发工具，切换到 image 标签，可以看当图片请求数，总请求大小
- 图片总体积 9Mb，网速 500KB/s，那 9 \* 1000 / 500 = 18，理论要 18s 全部下载完
- 并行请求，充分利用带宽，但导致单个资源可用带宽爱限
- 假定 50 张图片，每张图片分配的下行 500 / 50 = 10 kb/s，实际考虑有的图片较小，下载完会释放
- 带来的问题，优先级高的图片下载也慢了
- 用户带宽限制，服务器带宽一般远大于用户带宽

> 第 2、3 张走了不同的域名，所以快。第一张因为首页 h2 并发下载图片太多了（56 个请求，9Mb 大），4Mb 带宽下 较大图片并行请求 20 张每张分配大概是 50kb/s，一张 200kb 的图至少需要 4s （实测，swiper 第一张 5s 多）

- 所以用 h2，需要给图片排优先级(懒加载)，避免一次请求太多数据
- 图片上单独 cdn

## lazy load

传统方法 scroll 性能不好
交叉观察者接口，异步，空闲时执行
Chrome 51+，不支持 IE，兼容性很好
检查元素与父元素或视口(root)是否交叉，交叉比例 threshold

应用场景：lazy load，无限滚动
[IntersectionObserver - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)

缺点：依赖 JS 才能正确设置 src，Chrome 原生的好处

[Tips for rolling your own lazy loading | CSS-Tricks](https://css-tricks.com/tips-for-rolling-your-own-lazy-loading/)

## webp

- 支持检测原理，src base64 onload
- polyfill 支持原理，打包了`libwebp`解码库，webp -> image data -> canvas -> done
- 兼容性：IE11/Safari
- 文件 Giziped 95KB

[chase-moskal/webp-hero: browser polyfill for the webp image format](https://github.com/chase-moskal/webp-hero)
[Essential Image Optimization](https://images.guide/)

## 高清图

[Sketch用一倍图做设计稿还是二倍图？|UI|教程|Olaf_Chou - 原创文章 - 站酷 (ZCOOL)](https://www.zcool.com.cn/article/ZNDc5NTg4.html)

二倍图设计默认导出的图片是 2x 高清的，可直接使用。
二倍图导出时省去了点击+号 再选 2x ，操作方便。

## 图片压缩
### 表单图片压缩

- 图片 →  canvas 压缩 → 图片
- canvas 设置宽度
- `toBlob()`，转换成二进制，后端友好

[imageConversion 大文件 png 测试](https://codepen.io/cyio/pen/MWyeBbg)

图片预览，可以用 URL.creatObjectUrl(blob) 或 FileReader.readAsDataURL(blob) 

### 在线压缩

[Squoosh](https://squoosh.app/)

### 本地手动压缩

imageoptim-cli 不支持 svg，因为已经有 svgo

注意参数需要有引号

`imageoptim './*'`

gui 更全面，且支持异步同步调用

[自动优化图像  |  Web Fundamentals  |  Google Developers](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/automating-image-optimization/)

### ~~工具压缩 gulp~~

- 首先原图往往尺寸很大，先缩小
- 把大文件挑出来，用智图的在线服务，压缩效果好，它的 gulp 工具依赖在线 api，不支持多层目录，有待观察
- gulp-imagemin 支持多层目录

```js
gulp.task('imagemin', function() {
  gulp
    .src('./h5/group4/M00/**/**/*.{png,jpg,gif,ico}')
    .pipe(imagemin())
    .pipe(gulp.dest('./h5/group4/M00-dist/'))
})
```

## 图片预览

- filereader onload

## 处理上传

- blob 必须设置 name

```js
  blobToFile (theBlob, fileName) {
      theBlob.lastModifiedDate = new Date()
      theBlob.name = fileName
      return theBlob
  },

  const newFile = this.blobToFile(blob, 'upload.png')
  const formData = new FormData()
  formData.append('file', newFile, newFile.name)
```

  [原理：Vue 实现图片预览、裁剪并获取被裁剪区域的 base64(无组件) - hhzzcc\_的博客 - CSDN 博客](https://blog.csdn.net/hhzzcc_/article/details/80324546)

  [Vue+element-ui 图片上传剪裁组件 - 掘金](https://juejin.im/post/5b3f14c2f265da0f5405080f)

- element-ui

```pug
  el-upload.avatar-uploader(action='https://jsonplaceholder.typicode.com/posts/', :show-file-list='false', :on-success='handleAvatarSuccess', :before-upload='beforeAvatarUpload')
      el-button(type='primary') 上传
```

## AVIF
AV1 video keyframe
> All we need to do is repack AVIF as a single-frame AV1 video and decode it using native decoder.
polyfill 原理：将图片重打包成 AV! 视频，再复用浏览器原生支持能力解码
`AVIF -> MP4 -> <video> -> canvas -> output`
`.bmp`喂给浏览器，不必再压缩
SW 不能创建`<video>`，需要主线程配合


