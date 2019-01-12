# upgrade
1. 相对 3.x 增加`templateParameters:`，需要移动原来的自定义模板变量
```js
templateParameters: {
  title: 'xx'
  cdn: 'xx',
},
```
2. 编辑 index.html，批量替换`htmlWebpackPlugin.options.`
```
:%s/htmlWebpackPlugin.options.//g
```

多页编译提升不大，还是在 copy 环节耗时较长
