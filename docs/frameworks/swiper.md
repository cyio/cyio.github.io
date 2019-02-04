# Swiper

## 兼容性
swiper3是专门针对移动端写的。如果想兼容IE8的话，应该引入swiper2.

## 常用选项

autoplay 不设置或值设为0，则不自动播放
onlyexternal: true 只能通过切换指示点来切换

```js
this.$nexttick(() => {
	let mySwiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		loop: false,
		speed: 400,
		spaceBetween: 30,
		onlyExternal: true // disable drag
	})
	let todo = () => mySwiper.startAutoplay()
	document.getElementById('app').onmouseover = (e) => {
		todo = () => {}   // 产生鼠标事件则赋值为空函数
	}
	setTimeout(() => {
		mySwiper.params.autoplay = 1500
		todo()
	}, 2000)

```

## 在 SPA 中使用中使用

1. 在入口文件如 main.js 中引入样式
```diff
 import 'mint-ui/lib/toast/style.css'
+import 'swiper/dist/css/swiper.min.css'
 import VueEvents from 'vue-events
```
2. 在页面中
```js
// html
.swiper-container
	.swiper-wrapper
		.swiper-slide
			.image(v-bind:style="{'background-image': 'url(http://score.hanshikeji.com:81/upload/banner/18/58d9359f4cbc9.jpg)'}")
			.text 测试 1
// script
import Swiper from 'swiper'

export default {
	data () {
		return {
			swiperData: null
		}
	},
	methods: {
		getBannerData () {
			const url = `http://score.hanshikeji.com:81/v1/banner`
			this.$http.get(url).then((response) => {
				this.swiperData = response.data
				this.setSwiper()
			})
		},
		setSwiper () {
			this.$nextTick(() => {
				let bannerSwiper = new Swiper('.banner .swiper-container', {
					pagination: {
						el: '.swiper-pagination'
					},
					loop: true,
					speed: 600,
					observer: true,
					observeParents: true
				})
				// 延迟开始自动播放
				setTimeout(() => bannerSwiper.autoplay.start(), 222222222222000)
			})
		}
	},
	mounted () {
		this.getBannerData()
	}
```

