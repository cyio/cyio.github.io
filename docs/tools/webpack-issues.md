# webpack issues

## 安装

```sh
npm install webpack-dev-server -g
webpack-dev-server --progress --colors
```

`http://localhost:8080/webpack-dev-server/bundle`

配置文件是 node.js(CommonJS)模块，使用 JavaScript 编写

## webpack 3.x 升级

- 不再支持自动导入`web_modules`目录下文件
  需要在文件 `webpack.base.conf.js` 中添加 alias

```js
resolve: {
	alias: {
	  // ...
		'web_modules': resolve('web_modules')
	}
},

// 引入
import 'web_modules/modernizr'  // must import first
```

参考：[Resolve](https://webpack.js.org/configuration/resolve/#resolve-alias)


## 应用代码注入环境变量

DefinePlugin

```js
  plugins: [
    // 应用中需要的process.env变量，在此注入才能使用。
    new webpack.DefinePlugin({
      BUILD_ENV: JSON.stringify(process.env.BUILD_ENV),  // 编译环境（development/test/production）
    }),
```

import 大小写 path 不一致警告
[Webpack: "there are multiple modules with names that only differ in casing" but modules referenced are identical - Stack Overflow](https://stackoverflow.com/questions/47534267/webpack-there-are-multiple-modules-with-names-that-only-differ-in-casing-but)
[case-sensitive-paths-webpack-plugin - npm](https://www.npmjs.com/package/case-sensitive-paths-webpack-plugin)

```
import PureStyleLib from '@/paper/components/Content/panel/StyleLib/PureStyleLib'
```

原因是 path 中的 Content 写错大小写。需要检查整个路径

## node 进程 CPU 持续较高

  watchOptions: {
    poll: 5000,
    ignored: ['node_modules']
  }
[TypeScript: Documentation - Configuring Watch](https://www.typescriptlang.org/docs/handbook/configuring-watch.html)

[xcode - error: unknown type name 'uint64_t' on MacOS while installing libraries - Stack Overflow](https://stackoverflow.com/questions/62422627/error-unknown-type-name-uint64-t-on-macos-while-installing-libraries)

原因：fsevents 本地编译失败，可能是升级过系统，编译依赖的某些库是旧的。表现很明显，但被忽略了，因为 webpack/ts-loader 会回退用轮询方式 watch files

