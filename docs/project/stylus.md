* 贴近 nodejs 社区，维护不是很活跃，也是很稳定了
* 变量定义规则比较自由，加不加 $ 都可以，也可以不定义，直接 @ 引用,，不过作用域比较小
* 不用库，按需调用
* [test stylus](https://codepen.io/cyio/pen/WEWGGd)
* 在线测试，霜要看错误信息
* 生成三角 [mylus/triangle.styl at master · linx4200/mylus](https://github.com/linx4200/mylus/blob/master/helper/triangle.styl)
* 工具库 [nib/lib/nib at master · tj/nib](https://github.com/tj/nib/tree/master/lib/nib)

* 混合写法
```css
	section {
		padding-bottom: .2rem;
		padding-top: .4rem;
		&:after // 这里是添加的 stylus 风格代码，会报错，`未期望的 }`
			background red // 解决是把外围括号去掉
	}
```

