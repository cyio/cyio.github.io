# glob
* 异步方法不能用于返回
```js
  let globPath = path.resolve(`./${dirName}/*.md`)
  // glob(globPath), function (err, files) {
    // names = files.map(file => path.parse(file).name)
    // return names
  // })
  glob.sync(globPath).forEach(file => {
    names.push(path.parse(file).name)
  })
```
