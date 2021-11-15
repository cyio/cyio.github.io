# API

## 接口滥用

- 表单缓存比对，如果一致不发请求

## 接口安全

- 前端加密

[前后端分离，如何防止接口被其他人调用或恶意重发 - 骑着乌龟去看海 - 博客园](https://www.cnblogs.com/xiaozhang2014/p/7750562.html)

[善用工具之 postman 高级用法概述 | Mohuishou](https://lailin.xyz/post/45050.html?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)

## postman

- raw 是否要选 json
- post 不同类型选择互斥 from|json
- form-urlencoded 一般用来发送文本数据，而 form-data 发二进制数据
- 工具一般默认 JSON
- `queryString.stringify`，输出`name=hehe&age=10`

> x-www-form-urlencoded vs multipart/form-data

3. Both content types are used while sending form data as a POST request. 4) The x-www-form-urlencoded is used more generally to send text data to the server while multipart/form-data is used to send binary data, most notably for uploading files to the server.

## hoppscotch 原 postwoman

如何解决 CORS
1. page 与 extension 通信 hoppscotch-extension
2. 使用官方提供的 proxy server 中转

环境变量用途，baseUrl、测试代码

## 字段复制方法（考虑兼容性，写成 utils 复用）
1. 支持能力检测 navigator.clipboard 存在
2. 优先用 [Clipboard API](https://codepen.io/bellangerq/pen/VBqOPG) 不支持 IE，Chrome62+3. 回退：document.execCommand （标准已废弃，老浏览器可以用）
