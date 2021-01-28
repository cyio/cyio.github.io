# 上传

post 类型
```js
  switch (type) {
    case 'json':
      headers['Content-Type'] = 'application/json';
      break;
    case 'upload':
      headers['Content-Type'] = 'multiple/form-data';
      break;
    default:
      headers['Content-Type'] = 'application/x-www-form-urlencoded';
      break;
```

html 写法
```html
  <form action="/upload" method="post" enctype="multipart/form-data">
    <input accept="image/png,image/bmp,image/jpg,image/jpeg" id="uploadImage" name="img" type="file">
    <input type="submit" value="提交">
  </form>
```

## 大文件上传

- 浏览器内存限制
- 分割、并发

思路：
- 切片，编号，批量上传
- 何时合并 a. 前端通知 b. 请求带上 total，后端自动合并

核心是利用`Blob.prototype.slice`

[字节跳动面试官：请你实现一个大文件上传和断点续传](https://juejin.cn/post/6844904046436843527)

## 断点续传

思路：
- 服务端保存已上传分片 hash，前端上传前查询

## 暂停、恢复

- 正在上传的请求，abort
- 恢复用断点续传即可

## hash 生成

- 根据内容计算 hash 
- 耗时，用 web-worker

