# 位运算

权限系统里，存在很多关联关系。系统越大，关联关系越多，越难以维护。而引入位运算，可以巧妙的解决该问题。

或运算 添加权限

> linux 三个 7 分别代表：文件所有者，文件所有者所在组，所有其他用户

与运算 校验权限

> 通过 用户权限 & 权限 code === 权限 code 就可以判断出用户是否拥有该权限。

[JavaScript 中的位运算和权限设计(前端权限控制实现方案) - 掘金](https://juejin.cn/post/6844904003499720712)
