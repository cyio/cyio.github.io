## Postman 使用注意
> Most JSON APIs only accept "raw" input with "application/json" header
[Feature request: improve JSON parameters editor · Issue #3807 · postmanlabs/postman-app-support](https://github.com/postmanlabs/postman-app-support/issues/3807)

body => raw => JSON

## github 与 gitee 授权有区别

1. github
在 header 中，注意有个 token 关键字
```
Authorization:token xxx
```

2. gitee
不能写在 header 中，而是 body 中，并且类型必须选 JSON
```
{
	"description": "the description for this gist",
	"files": {
		"file1.txt": {
			"content": "updated file contents"
		}
	}
}
```
