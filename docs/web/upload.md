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
