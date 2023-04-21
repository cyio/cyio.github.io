# 版本

## v10

- mkdir 官方支持递归创建

  ```js
  // 10 以前，会提示 tmp 或 tmp/a 不存在，无法成功创建
  fs.mkdir('/tmp/a')

  // 10
  fs.mkdir('/tmp/a', { recursive: true })
  ```

  https://nodejs.org/api/fs.html#fs_fs_mkdir_path_options_callback

  https://www.npmjs.com/package/mkdir-recursive

- 移除了`__dirname`和`__filename`

  https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-when-using-the-experimental-modules-flag

## v18

全局 fetch


## 升级

Maintenance 维护期后，不再有安全更新，无法快速修复漏洞

LTS	当前活跃维护的稳定版本

Current 最新版本，可能不稳定

https://github.com/nodejs/Release