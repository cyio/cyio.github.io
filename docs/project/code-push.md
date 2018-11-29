* `react-native link`，输入上传密钥

* `@codepush`, 需要 ES6 解构支持，否则会报语法错误；只在 release 时启用
  ```
  yarn add --dev babel-plugin-transform-decorators-legacy babel-preset-react-native-stage-0

  在 .babelrc 中添加:
  "plugins": ['transform-decorators-legacy']
  ```
