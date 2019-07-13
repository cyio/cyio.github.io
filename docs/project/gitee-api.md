## 坑

- 401-未授权
  公开 gist 不需要授权，是不是意外变私有了，api 修改代码片段，设置`public`默认为`private`，不传这个属性就会改成私有

- token 获取成功但使用时依然提示 401
  通过 postman 是正常的，对比发现，多个`Host:gitee.com`，在 nodejs-request 中加上可以了
