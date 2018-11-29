## 构建工具

```bash
SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ PHANTOMJS_CDNURL=https://npm.taobao.org/mirrors/phantomjs/ npm install -g elf-cli --registry=https://registry.npm.taobao.org

elf init elf-demo
elf init -t swiper demo-swiper

elf start
```

[ELF - 灵活可扩展的 HTML5 构建工具 | Aotu.io「凹凸实验室」](https://aotu.io/notes/2017/01/17/elf/)

## 移动端适配

- 为什么不用媒体查询方案？
移动端屏幕尺寸多，**适配代码量大**

- 弹性布局
		文字流式，控件弹性，图片等比缩放
		
		![459873-20151014135816569-395090216.png (500×320)](http://images2015.cnblogs.com/blog/459873/201510/459873-20151014135816569-395090216.png)

- 字体单位
		em 是相对于父元素的比例，如 0.5em 就是当前元素的父元素的字体大小的一半    
		rem 就是相对于root，就是根元素html
		
		> em = 希望得到的像素大小 / 父元素字体像素大小
		> em单位和百分比单位的作用是一样的
		
		```css
		body {
			font-size: 62.5%; /* font-size 1em = 10px */
		}
		p {
			font-size: 1.6em; /* 1.6em = 16px */
		}
		```

- 如何计算根元素的字体大小？
		等价问题是元素尺寸百分比的基准值应该是多少。
		页面代码用相对单位写死，然后根据不同屏幕宽度计算基准值。
		基准值 = 设备宽度 / 设计稿宽度
		
		> 如果设计稿基于iphone6，横向分辨率为750，body的width为750 / 100 = 7.5rem
		> 如果设计稿基于iphone4/5，横向分辨率为640，body的width为640 / 100 = 6.4rem    
- 结合项目的思考
		设计稿是640，按320写    
		
[Mobile Webpage 如何自适应屏幕 2](https://www.icloud.com/keynote/000DIf8ISxFcuxka4YozKLaOg#Mobile_Webpage_%25E5%25A6%2582%25E4%25BD%2595%25E8%2587%25AA%25E9%2580%2582%25E5%25BA%2594%25E5%25B1%258F%25E5%25B9%2595_2)    
## 移动端布局

- 考虑布局时思维还是经常堵住
- 布局分解不清晰，用什么来写呢？
- 急着上手写，分析布局的时间不足
- 不知道用哪个写，如何学习求助？

## 犯过的错
* 布局时，一定要检查是否为子元素设置了宽度。
* 注意写的先后顺序，先布局，后细节

## [OMS/移动优化经验.md at master · herbertliu/OMS](https://github.com/herbertliu/OMS/blob/master/%25E7%25A7%25BB%25E5%258A%25A8%25E4%25BC%2598%25E5%258C%2596%25E7%25BB%258F%25E9%25AA%258C.md)
