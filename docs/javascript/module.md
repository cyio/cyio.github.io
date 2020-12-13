# 模块

- script module 默认 defer 执行，与常规 script 相比，会等文档执行完，用户可能先于应用准备好前看到 HTML
- 外部或内联导入，都支持 async
- 导出内容的修改，对所有导入共享可见

[Modules, introduction](https://javascript.info/modules-intro)

## 兼容性
- safari > 11.1
- firefox
SyntaxError: export declarations may only appear at top level of a module

[JavaScript: Classic Scripts vs. Modules vs. CommonJS](https://gist.github.com/jkrems/b14894e0b8efde10aa10a28c652d3541)

## require/import 区别
出处：CommonJS/ES6
require 轸出值拷贝，import 输出值引用
import 严格模式
require 运行时动态加载 import 静态编译

