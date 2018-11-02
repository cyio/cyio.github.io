# 图片

> web优化专家一定是图片优化专家

[CodePen - JPNG.svg (Transparent PNG with JPEG Compression)](https://codepen.io/shshaw/full/LVKEdv)

## 图片压缩

* 首先原图往往尺寸很大，先缩小
* 把大文件挑出来，用智图的在线服务，压缩效果好，它的 gulp 工具依赖在线api，不支持多层目录，有待观察
* gulp-imagemin 支持多层目录
```js
    gulp.task('imagemin', function () {
        gulp.src('./h5/group4/M00/**/**/*.{png,jpg,gif,ico}')
            .pipe(imagemin())
            .pipe(gulp.dest('./h5/group4/M00-dist/'));
    });
```

## 图片格式
* WebP 有损、无损，30% 体积优势
* APNG 质量、大小较 GIF 均有优势，移动端可放心用，桌面端需要兼容 IE/EDGE，可用 JS 库播放 APNG
[UC内核支持更好的动画格式-APNG](https://zhuanlan.zhihu.com/p/37160029)
[全面掌握移动端主流图片格式的特点、性能、调优等 - 开源中国社区](https://www.oschina.net/question/3915715_2283697)
[GIF vs APNG vs WebP](http://littlesvr.ca/apng/gif_apng_webService workers are generic, event-driven, time-limited script contexts that run at an origin.p1.html)
[iSparta－PNG压缩与格式转换工具](http://isparta.github.io/)

## 处理上传
blob 必须设置 name
```
        blobToFile (theBlob, fileName) {
            theBlob.lastModifiedDate = new Date()
            theBlob.name = fileName
            return theBlob
        },

                const newFile = this.blobToFile(blob, 'upload.png')
                const formData = new FormData()
                formData.append('file', newFile, newFile.name)
```
[原理：Vue 实现图片预览、裁剪并获取被裁剪区域的base64(无组件) - hhzzcc_的博客 - CSDN博客](https://blog.csdn.net/hhzzcc_/article/details/80324546)
[Vue+element-ui图片上传剪裁组件 - 掘金](https://juejin.im/post/5b3f14c2f265da0f5405080f)

* element-ui
```
        el-upload.avatar-uploader(action='https://jsonplaceholder.typicode.com/posts/', :show-file-list='false', :on-success='handleAvatarSuccess', :before-upload='beforeAvatarUpload')
            el-button(type='primary') 上传
```
