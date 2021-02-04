# html5-mobile

[toc]

## 移动端适配

- 为什么不用媒体查询方案？
  移动端屏幕尺寸多，**适配代码量大**

- 弹性布局
  文字流式，控件弹性，图片等比缩放
  ![459873-20151014135816569-395090216.png (500×320)](http://images2015.cnblogs.com/blog/459873/201510/459873-20151014135816569-395090216.png)

- 字体单位
  em 是相对于父元素的比例，如 0.5em 就是当前元素的父元素的字体大小的一半

  rem 就是相对于 root，就是根元素 html > em = 希望得到的像素大小 / 父元素字体像素大小 > em 单位和百分比单位的作用是一样的
  `css body { font-size: 62.5%; /* font-size 1em = 10px */ } p { font-size: 1.6em; /* 1.6em = 16px */ }`

- 如何计算根元素的字体大小？
  等价问题是元素尺寸百分比的基准值应该是多少。
  页面代码用相对单位写死，然后根据不同屏幕宽度计算基准值。
  基准值 = 设备宽度 / 设计稿宽度 > 如果设计稿基于 iphone6，横向分辨率为 750，body 的 width 为 750 / 100 = 7.5rem > 如果设计稿基于 iphone4/5，横向分辨率为 640，body 的 width 为 640 / 100 = 6.4rem
- 结合项目的思考
  设计稿是 640，按 320 写


[Mobile Webpage 如何自适应屏幕 2](https://www.icloud.com/keynote/000DIf8ISxFcuxka4YozKLaOg#Mobile_Webpage_%25E5%25A6%2582%25E4%25BD%2595%25E8%2587%25AA%25E9%2580%2582%25E5%25BA%2594%25E5%25B1%258F%25E5%25B9%2595_2)

## UI 设计

PC 端一张大 banner 的图片预算大概在 300kb

手机端建议不超过 150kb。手机端使用满铺背景的图片，需要给出适配方案，特别要考虑橫屏情况

微信不支持横屏

## 移动端开发总结

- rem 设置是否正确，要验证
- 展示图不要指定高度或限高，平板设备需要的高度不同

## 返回刷新

[javascript - How to force reloading a page when using browser back button? - Stack Overflow](https://stackoverflow.com/questions/43043113/how-to-force-reloading-a-page-when-using-browser-back-button)

[网页后退不刷新的 N 种解决方案 · Issue #17 · rico-c/RICO-BLOG](https://github.com/rico-c/RICO-BLOG/issues/17)

死循环：A -> B -> A 此时浏览器返回又到了 B，无解。写死地址，会引起别的页面间死循环。

## issues

1.文件保存到本地 fileSaver 不适合移动浏览器（如 qq 浏览器），图片保存需采用长按方式
2.safari 默认禁元素长按，需加入-webkit-touch-callout: default; 3.移动端打开 oss 的 pdf，location.href 的方式有兼容性问题，需用 a 标签

1.移动浏览器页面返回场景 2.移动浏览器工具栏/iphone11 虚拟按钮占位问题 3.部分 bug 可能是微信版本导致，微信相关功能 bug 可优先去开发者论坛或者比较其他同类产品

[OMS/移动优化经验.md at master · herbertliu/OMS](https://github.com/herbertliu/OMS/blob/master/%25E7%25A7%25BB%25E5%258A%25A8%25E4%25BC%2598%25E5%258C%2596%25E7%25BB%258F%25E9%25AA%258C.md)

## 构建工具

```bash
SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ PHANTOMJS_CDNURL=https://npm.taobao.org/mirrors/phantomjs/ npm install -g elf-cli --registry=https://registry.npm.taobao.org

elf init elf-demo
elf init -t swiper demo-swiper

elf start
```

[ELF - 灵活可扩展的 HTML5 构建工具 | Aotu.io「凹凸实验室」](https://aotu.io/notes/2017/01/17/elf/)

[中高级前端必须注意的40条移动端H5坑位指南 | 网易三年实践](https://mp.weixin.qq.com/s/0F0Pd1Qzmf3YCXkcEHbzgw)

