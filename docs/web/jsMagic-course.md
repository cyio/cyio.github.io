# Babel Node && Npm

* 注意安装 babel-cli ，而非 babel
* 还有个 babel-preset-es2015
* 新建文件 .babelrc 
```
{
  "presets": ["babel-preset-es2015"]
}
```
* 命令行使用，导出
`$ ./node_modules/.bin/babel hello-babel.js > hello-babel.es3.js`

* 在node中加载
```bash
$ node
> require("babel-preset-es2015")
```

* 查看require的文件指向
```bash
> require.resolve("babel-preset-es2015")
'node_modules/babel-preset-es2015/index.js'
```

* 打印依赖树
$ npm ls

* 目录查找文件匹配
```bash
$ find node_modules | grep core-js/package.json
```

* 不要用 sudo
* 项目初始化
$ npm init --yes

* NodeJS 不支持 import/export 语法

# CommonJS
require 加载模块，相当于ES6 import
module.exports 导出模块，相当于ES6 export，注意后一个词为复数

```js
// constants.js
var pi = 3.14159;
var e = 2.71828;

var secretAnswer = 42;

module.exports = {
  pi: pi,
  e: e,
};
```
```bash
$ node
> require("./constants")    // 省略后缀
> var pi = require("./constants").pi;   // 指定加载
```

* require 和 ES6 解构
```bash
$ babel-node
> const {pi,e} = require("./constants");
> console.log("pie =", pi + e);
pie = 5.85987
```

* ES6默认导出导入
```js
export default 42
// import-default.js
import default from "./constants.js";   // 这里可以改名
console.log(default); // 42
```
