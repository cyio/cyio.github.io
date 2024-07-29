# C++
## 学习意义和目标
* JS 引擎 V8 就是用 C++ 写的， 学会 C++，可以看 V8 源码
* 熟悉基本语言特性，能编写理解算法题
* 语言特点：低级，静态强类型，面向对象
[Why CS students *must* learn C++ as their main programming language](https://medium.com/@vardanator/why-cs-students-must-learn-c-as-their-main-programming-language-6d3b4f8720bd)
[C++ for JavaScript developers | pawelgrzybek.com](https://pawelgrzybek.com/cpp-for-javascript-developers/)
[JavaScript vs C++ detailed comparison as of 2018 - Slant](https://www.slant.co/versus/111/127/~javascript_vs_c)
[C++ - YouTube](https://www.youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb)
## 编译环境

* c `gcc` c++`g++`
* vim 定制 F9 编译，F8 运行
* vscode 插件，已经集成了运行程序

[一键搞定 VSCode 下的 C/C++基本开发环境配置 - 知乎](https://zhuanlan.zhihu.com/p/137760796)
[3.添加文件和目标_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1us4y1J7HL/?p=3&spm_id_from=pageDriver&vd_source=cd540dde0d36a467c866b595c9f74eda)
## 教程&在线运行

https://www.runoob.com/cplusplus/cpp-functions.html

https://www.runoob.com/try/runcode.php?filename=helloworld&type=cpp

## AI 辅助

https://gemini.google.com/app/50360efad54e1d65

## 概念

对象是类的实例。

C++ 程序可以定义为对象的集合，这些对象通过调用彼此的方法进行交互。
## 基础

* 对象具有状态和行为，类是描述对象状态和形为的模板，对象是类的补例
* 计算机中的浮点 float 是一种对数字接近而非精确的表达。double 的意思是精度是两倍。
[单精度与双精度是什么意思，有什么区别？ - 知乎](https://www.zhihu.com/question/26022206/answer/222407459)
* `cout cin` 不是语言本身的，使用前需要`#include <iostream>`，`cout << "main" << endl;`，注意`return`并不会打印
* `printf` 格式化输出，先引入`#include "stdio.h"`，然后需要指定格式，比较麻烦，并且前后类型必须一致？

## 数据类型

### 基本

* 相对 C 的`char`，增加了`string`类型，只能用双引号
* 不能用`+`直接拼接字符串，需要先声明，至少有一个指定类型
* 单引号，只能是字符（一个），双引号是字符串，末尾会自动追加`\0`
* 数组，必须指定个数`int n[2] = {1, 2};` 或者`int *n = new int(2);`
* 类型声明错误，会导致隐式转换，丢失精度
* `long long` 32位整型扩展到 64 位

## 数组

传递数组，同时需要传递长度（无法内部获取），更接近底层内存管理的操作方式
### 字符串

推荐使用 `std:string`，动态长度、内存安全，可以方便地重新赋值，而不是`char*`

`char*` 是指针类型，较低级的方式，需要手动管理内存分配和释放
### 结构与类

* C++ 中的结构体（`struct`）和类（`class`）与 JavaScript 的对象类似，但更加强大。

如何打印 struct，cout 不支持，重载 ostream 只能解决这个 struct，想通用需要用到模板和宏

### 标准模板库（STL）

常用容器如 `std::vector` 动态数组、`std::map`、`std::set` 等

#### map

first 表示 key，second 表示 value

item->second
## 自动变量与静态变量

自动变量，相当于局部变量
静态变量，声明在内部，但值可以保持。static 限制变量声明所在文件或函数有效。
## 函数

* 函数名前指定返回类型
* 函数默认是执行的，要想只定义不执行，需要把声明和定义分开
* 接口与定义分开，`**.h **.cpp`
* `inline`要跟函数的定义放在一块
    [C++ 内联函数分析 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000015967573?utm_source=tag-newest)
* 会执行最后一个函数

Boost 扩展库
messageloop 异步执行
`*`号放在变量前，访问指针指向的对象的值

## 打印

    cout << "Hello, world!";

cout 表示 character output

## 类

是一个模板

作用域解析运算符 `::`

抽象类，一个空的基类，供继承实现

## 继承

不像 JS 需要 extends
```
// Base class
class Animal {
public:
    void eat() {
        cout << "Eating..." << endl;
    }
};

class Dog: public Animal {
};
```

## 函数

不需要 function 关键字

Lambda ->

## 重载

编译器判断用匹配哪个，重载决策

## 指针（硬币两面）

连字号（&）运算符访问内存地址
声明配合 * 号

- 指针必须始终指向有效的内存位置。否则，会导致程序崩溃或其他未定义行为。
- 当不再需要指针时，必须释放指向的内存。否则，会导致内存泄漏。
- 使用智能指针等安全替代
- new 创建动态 size 数组，返回是分配的内存地址，因此类型是指针
```C++
int x = 10;
int* p = &x;  // p 是一个指针，存储 x 的地址
std::cout << *p << std::endl;  // 通过指针 p 访问 x 的值
```
## 引用

作为函数的参数或返回值，更安全
```C++
int y = 20;
int& ref = y;  // ref 是 y 的引用
ref = 30;  // 改变 ref 的值会改变 y 的值
std::cout << y << std::endl;  // 输出 30
```

## 前端工程师，学习 C++，有哪些快速入门必须知道的语法差异和概念

学习 C++ 作为前端工程师是一个不错的选择，因为它可以让你更深入地了解计算机科学和编程原理。以下是一些你可能想要了解的快速入门必备知识：

1. **静态类型**：C++ 是一种静态类型语言，这意味着你在编译时就需要指定变量的类型，并且类型通常不能隐式转换。

2. **指针和引用**：C++ 中有指针和引用的概念，这是 JavaScript 等动态语言所没有的。指针存储变量的内存地址，而引用则是变量的别名。

3. **内存管理**：在 C++ 中，你需要手动管理内存，包括使用 `new` 和 `delete` 来分配和释放内存，避免内存泄漏。

4. **函数重载**：C++ 支持函数重载，这意味着你可以定义多个同名函数，但参数列表不同。

5. **类和对象**：C++ 是一种面向对象的语言，你可以使用类来定义对象的结构和行为，并通过实例化类来创建对象。

6. **模板**：C++ 中的模板允许你编写泛型代码，这意味着你可以编写适用于多种类型的函数和类。

7. **异常处理**：C++ 支持异常处理机制，你可以使用 `try`、`catch` 和 `throw` 来处理异常情况。

8. **标准库**：C++ 标准库提供了丰富的功能，包括容器（如向量、链表、映射等）、算法（如排序、查找等）和输入输出操作（如文件操作、流操作等）。

这些是你在学习 C++ 时可能遇到的一些重要概念和语法差异。通过练习和阅读更多的代码，你会逐渐熟悉这些概念并掌握 C++ 编程技能。

### 代码示例

以下是一些简单的代码示例，演示了 C++ 中的一些重要概念和语法差异：

1. **静态类型**：
   ```cpp
   int main() {
       int age = 30; // 声明一个整型变量 age，并赋值为 30
       double height = 175.5; // 声明一个双精度浮点型变量 height，并赋值为 175.5
       char grade = 'A'; // 声明一个字符型变量 grade，并赋值为 'A'
       return 0;
   }
   ```

2. **指针和引用**：
   ```cpp
   int main() {
       int number = 10;
       int* ptr = &number; // 声明一个整型指针 ptr，并将其指向 number 的地址
       int& ref = number; // 声明一个整型引用 ref，它是 number 的别名
       return 0;
   }
   ```

3. **内存管理**：
   ```cpp
   int main() {
       int* ptr = new int; // 使用 new 关键字分配一个整型变量的内存空间
       *ptr = 5; // 在分配的内存空间中存储值 5
       delete ptr; // 使用 delete 关键字释放内存空间
       return 0;
   }
   ```

4. **函数重载**：
强类型语言非常常见，参数为多种类型，最简单就是写多个名称相同参数（类型）不同的函数
   ```cpp
   void print(int num) {
       cout << "Integer: " << num << endl;
   }

   void print(double num) {
       cout << "Double: " << num << endl;
   }

   int main() {
       print(5); // 调用第一个 print 函数
       print(3.14); // 调用第二个 print 函数
       return 0;
   }
   ```

更好方案是用模板
```C++
#include <iostream>
using namespace std;

// 定义模板函数
template<typename T>
void print(T num) {
    cout << "Value: " << num << endl;
}

int main() {
    print(5);      // 调用 print<int>，输出: Value: 5
    print(3.14);   // 调用 print<double>，输出: Value: 3.14
    return 0;
}

```

5. **类和对象**：
   ```cpp
   class Person {
   public:
       string name;
       int age;

       void introduce() {
           cout << "Name: " << name << ", Age: " << age << endl;
       }
   };

   int main() {
       Person person; // 实例化一个 Person 对象
       person.name = "Alice";
       person.age = 30;
       person.introduce(); // 调用对象的成员函数
       return 0;
   }
   ```

6. **模板**：
   ```cpp
   template <typename T>
   T add(T a, T b) {
       return a + b;
   }

   int main() {
       cout << add(5, 3) << endl; // 调用模板函数 add<int>
       cout << add(3.14, 2.71) << endl; // 调用模板函数 add<double>
       return 0;
   }
   ```

7. **异常处理**：
   ```cpp
   int main() {
       try {
           int result = 10 / 0; // 故意引发除以零的异常
       } catch (const exception& e) {
           cout << "Exception caught: " << e.what() << endl;
       }
       return 0;
   }
   ```

这些示例代码涵盖了 C++ 中的一些重要概念和语法，希望对你的学习有所帮助！

### 使用 * 和 & 的时机和含义

在 C++ 中，`*` 和 `&` 符号有多种含义，取决于它们的上下文。以下是它们最常见的用法和含义：

1. **指针声明和引用**：
   - `*`：用于声明指针变量，表示一个变量是一个指针。例如：`int* ptr;` 声明了一个整型指针变量。
   - `&`：用于创建引用，表示一个变量是另一个变量的别名。例如：`int& ref = x;` 创建了一个整型变量 `ref`，它是 `x` 的引用。

2. **指针操作**：
   - `*`：用于解引用指针，即访问指针指向的内存中的值。例如：`int x = *ptr;` 会将 `ptr` 指向的整数值赋给 `x`。
   - `&`：用于获取变量的地址，即取地址运算符。例如：`int* ptr = &x;` 将 `x` 的地址赋给 `ptr`。

3. **位操作**：
   - `*`：在数学运算中，表示乘法。例如：`int result = 5 * 3;` 将 5 乘以 3。
   - `&`：在位运算中，表示按位与操作。例如：`int result = 5 & 3;` 将 5 和 3 进行按位与操作。

4. **引用修饰符**：
   - `*`：在指针变量前，用于指定指针指向的值为指针指向的变量。在类型声明时，用于声明指针类型。例如：`int* ptr;` 和 `int* arr[];` 分别声明了一个整型指针和一个整型指针数组。
   - `&`：在函数参数列表中，用于指定参数为引用类型，可以避免函数调用时的值拷贝。例如：`void swap(int& a, int& b);` 定义了一个交换两个整数值的函数，参数为整数的引用。

这些是 `*` 和 `&` 在 C++ 中的一些常见用法和含义。它们是 C++ 中重要且常用的符号，理解它们的含义对于正确地使用指针和引用至关重要。

## UML画图

1. 类图：`-`表示私有，`+` 表示公共
	[ClassDiagramBook.png (579×351)](https://www3.ntu.edu.sg/home/ehchua/programming/cpp/images/ClassDiagramBook.png)
1. 组件图：进程包含类，进程间 IPC 通信
2. 序列图（时序）
3. 部署图

一张图没办法全部表示了，可以分成多张图
基本流程、跨进程通信、细化流程

[C++ 后端项目类交叉引用画图](https://chatgpt.com/c/db0ae920-f552-4cf2-af49-c85224203f64)
## 多线程

任务处理

### 互斥锁

mutex 是“mutual exclusion”的缩写，意思是“互斥”

同一时刻只有一个线程可以修改 `shared_variable`
## 异常处理

## 符号

. 操作符：用于对象本身或引用。
-> 操作符：用于指针，包括原生指针和智能指针。

## 调试

- 条件断点：如指定进程崩溃
- 关掉编译优化
- debug 开关文件，查看日志

## 安装

https://visualstudio.microsoft.com/zh-hans/downloads
配 host
https://blog.csdn.net/littlehaes/article/details/106492231

mac clion

加固、反调试

![[image/cplusplus-1719487474586.webp]]

## cmake

1. 编写 CMakeLists.txt
2. `cmake ..`
3. `make`
4. `./MyProject` 执行