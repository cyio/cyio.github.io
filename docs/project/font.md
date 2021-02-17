# font

## unicode-range
- 场景
  - 对部分字符做特殊字体处理
  - 字体分片，按一定规则拆分大字体文件，然后设置 css 文字范围与字体文件的映射关系
- 兼容性：IE9 以上部分支持

```css
@font-face {
  font-family: 'ZCOOL QingKe HuangYou';
  font-style: normal;
  font-weight: 400;
  src: local('ZCOOL QingKe HuangYou Regular'), local('ZCOOLQingKeHuangYou-Regular'), url(https://fonts.gstatic.com/s/zcoolqingkehuangyou/v2/2Eb5L_R5IXJEWhD3AOhSvFC554MOOahI4mRIjpWmcd2sME07NgirVXtlnqDJjtoEkzukmSp9MDttOpdc.4.woff2) format('woff2');
  unicode-range: U+ff8e, U+ff92, U+ff97-ff9b, U+ff9d-ff9f, U+ffe0-ffe4,U+1f359-1f363;
}
@font-face {
  font-family: 'ZCOOL QingKe HuangYou';
  font-style: normal;
  font-weight: 400;
  src: local('ZCOOL QingKe HuangYou Regular'), local('ZCOOLQingKeHuangYou-Regular'), url(https://fonts.gstatic.com/s/zcoolqingkehuangyou/v2/2Eb5L_R5IXJEWhD3AOhSvFC554MOOahI4mRIjpWmcd2sME07NgirVXtlnqDJjtoEkzukmSp9MDttOpdc.47.woff2) format('woff2');
  unicode-range: U+7b3f, U+7c23-7c24, U+7c26-7c33, U+7c35, U+7c37-7c3b;
}
```

> 目前现有的字体压缩方案依赖于一个字体压缩服务，这个服务是将输入的所有文字按照指定的字体类型生成一个特定的文件。这个文件只包含特定文字的字体内容也就大大降低了字体文件的大小。将课件中使用了非网络安全字体的文字提取出来，发送给字体压缩服务，生成字体文件后应用到这个课件中，播放课件时就不会再加载庞大的字体文件了，只需要加载生成的比较小的字体文件就能满足。但是这种模式下生成的字体文件只能应用与当前这个课件，每个课件都需要生成一个不同的字体文件，而且如果这个课件内的文字发生了变动，需要再次调用字体压缩服务重新生成一份字体文件。在这种模式下需要将字体文件生成完之后才能正常播放课件，拖慢了课件生成的速度，资源利用率也不高，而且会生成许多不会再使用的垃圾文件。

> css分片字体加载方式：这种方式是将大字体文件提前按照一定规则切分成多个小的字体文件，并对应每个小的字体文件生成所包含字体unicode的范围。将这个范围标记到css标签@font-face的unicode-range属性中。将所有的@font-face标签放到一个css文件中，这个文件就是整个字体的小文件映射关联表。在使用时只需要在需要特定字体的html文件中引用这个css文件，使用css自身特定动态定位需要应用字体的文字，在@font-face标签中查找文字所在的小字体文件，并下载所需的字体文件。这一些列操作都是css自身完成，不需要二次开发。同时该模式还支持动态文本的渲染，比如使用javaScript修改了文档中的文字内容，css还是会动态计算需要下在的字体文件。这种方式可以解决课件生成速度慢，字体文件繁多利用率低的问题。

[CSS unicode-range特定字符使用font-face自定义字体 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2016/11/css-unicode-range-character-font-face/)

## google fonts 字体加载策略
- 有较长缓存期，普通用户使用问题不大
- 只请求需要的字重
- 多个字体合并为一个请求
- 请求构成 css + font srcs，且往往不在同载事下，dns-prefetch, preconnect
[Web技巧(12) - 知乎](https://zhuanlan.zhihu.com/p/71640685)
- 设置`font-display: swap`，google 默认链接带了这个参数，第三方可能得手动加上，如 `https://fonts.font.im/css?family=Oswald&display=swap`

  [`font-display` for the Masses | CSS-Tricks](https://css-tricks.com/font-display-masses/)

自托管
[KyleAMathews/typefaces: NPM packages for Open Source typefaces](https://github.com/KyleAMathews/typefaces)

中文字体压缩的那些事 – 涂雨期的博客 https://hsingko.github.io/post/compress_webfont/
