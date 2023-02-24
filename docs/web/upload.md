# 上传
[[toc]]

## 大文件上传

思路：
- 切片，编号，批量上传
- 合并时机
    1. 前端判断，通知后端
    2. 请求带上 total，后端判断

> 核心切片 api:`Blob.prototype.slice`

分片考虑因素：
- 浏览器内存限制、硬盘限制
- 文件太大 nginx 超时
- 并发上传个数
- 单个分片上传错误重试，及重试次数
- 带宽
- 页面级内存/CPU分配
- 服务器分片存储限制

### 极限大小

影响因素

业务上：
- 希望使用客户端

技术上：
- 上传成功率
- 浏览器性能

## 断点续传

思路：
- 服务端保存已上传分片 hash，前端上传前查询中断位置

## 秒传
hash + size

大文件计算 hash 耗时长，可只计算前 xx kb 数据，以很小的成本过滤掉不能秒传的文件

## 暂停、恢复

- 暂停正在上传的请求，abort
- 恢复用断点续传即可

## hash 生成

根据内容计算 hash，这是耗时任务，可用 web-worker 优化

## form 上传 snippet

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

## 参考

[文件上传](https://help.aliyun.com/document_detail/175888.html)

[字节跳动面试官：请你实现一个大文件上传和断点续传](https://juejin.cn/post/6844904046436843527)

在 Web 浏览器中使用 FileReader.readAsArrayBuffer() 处理大文件 https://joji.me/en-us/blog/processing-huge-files-using-filereader-readasarraybuffer-in-web-browser/

javascript - filereader api on big files - Stack Overflow https://stackoverflow.com/questions/25810051/filereader-api-on-big-files

