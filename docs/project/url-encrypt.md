# 地址加密

1. 全局参数 base64 转码
优点：实现简单，不引入库
缺点：增加任意参数会导致 base64 转换失败，兼容性差，比如微信分享场景
示例：
[url-parameters-encrypt.diff](https://gist.github.com/cyio/4cf87e46fafce79535771b5ff4741887)

应该只给 value 转码

