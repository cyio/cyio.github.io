## webpack 引入
配置示范
```js
{
	"minify": true,
	"options": [
		"setClasses"
	],
	"feature-detects": [
		"img/webp-alpha"
	]
}

// 使用，注意特性名称的变化
import Modernizr from 'modernizr'
Modernizr.webpalpha
```
[GitHub - peerigon/modernizr-loader: Get your modernizr build bundled with webpack](https://github.com/peerigon/modernizr-loader)
