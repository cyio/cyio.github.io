# C++
## 学习意义和目标
* JS 引擎 V8 就是用 C++ 写的， 学会 C++，可以看 V8 源码
* 熟悉基本语言特性，能编写理解算法题
* 语言特点：低级，静态强类型，面向对象
[Why CS students *must* learn C++ as their main programming language](https://medium.com/@vardanator/why-cs-students-must-learn-c-as-their-main-programming-language-6d3b4f8720bd)
[C++ for JavaScript developers | pawelgrzybek.com](https://pawelgrzybek.com/cpp-for-javascript-developers/)
[JavaScript vs C++ detailed comparison as of 2018 - Slant](https://www.slant.co/versus/111/127/~javascript_vs_c)

## 编译环境
* c `gcc` c++`g++`
* vim 定制 F9 编译，F8 运行

## 基础
* 对象具有状态和形为，类是描述对象状态和形为的模板，对象是类的补例
* 计算机中的浮点 float 是一种对数字接近而非精确的表达。double 的意思是精度是两倍。
[单精度与双精度是什么意思，有什么区别？ - 知乎](https://www.zhihu.com/question/26022206/answer/222407459)
* `cout cin` 不是语言本身的，使用前需要`#include <iostream>`，`cout << "main" << endl;`，注意`return`并不会打印
* `printf` 格式化输出，先引入`#include "stdio.h"`，然后需要指定格式，比较麻烦，并且前后类型必须一致？

### 数据类型
* 相对 C 的`char`，增加了`string`类型，只能用双引号
* 不能用`+`直接拼接字符串，需要先声明，至少有一个指定类型
* 单引号，只能是字符（一个），双引号是字符串，末尾会自动追加`\0`
* 数组，必须指定个数`int n[2] = {1, 2};` 或者`int *n = new int(2);`

### 函数
* 函数名前指定返回类型
* 函数默认是执行的，要想只定义不执行，需要把声明和定义分开
* 接口与定义分开，`**.h **.cpp`
* `inline`要跟函数的定义放在一块
    [C++ 内联函数分析 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000015967573?utm_source=tag-newest)
* 会执行最后一个函数
