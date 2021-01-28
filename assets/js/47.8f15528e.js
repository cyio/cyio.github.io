(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{478:function(t,_,v){"use strict";v.r(_);var a=v(57),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[t._v("#")]),t._v(" 算法")]),t._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#学习方法论"}},[t._v("学习方法论")])]),v("li",[v("a",{attrs:{href:"#复杂度"}},[t._v("复杂度")]),v("ul",[v("li",[v("a",{attrs:{href:"#程序性能"}},[t._v("程序性能")])]),v("li",[v("a",{attrs:{href:"#big-o-notation"}},[t._v("Big O notation")])])])]),v("li",[v("a",{attrs:{href:"#枚举"}},[t._v("枚举")])]),v("li",[v("a",{attrs:{href:"#二分查找"}},[t._v("二分查找")])]),v("li",[v("a",{attrs:{href:"#模式识别"}},[t._v("模式识别")])])])]),v("p"),t._v(" "),v("h2",{attrs:{id:"学习方法论"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#学习方法论"}},[t._v("#")]),t._v(" 学习方法论")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("学习方式，手打，纸上推演，死记硬背，理解训练")])]),t._v(" "),v("li",[v("p",[t._v("复杂的，脑子里第一时间要想到图，可视化")])]),t._v(" "),v("li",[v("p",[t._v("纸上编码的能力很重要")])]),t._v(" "),v("li",[v("p",[t._v("代码熟练工与优秀开发者之间的选择")])]),t._v(" "),v("li",[v("p",[t._v("大部分时间用不到，有一定数据规模时，算法的作用才会显现")])]),t._v(" "),v("li",[v("p",[t._v("前置依赖，数学、逻辑，否则学起来吃力")])]),t._v(" "),v("li",[v("p",[t._v("先想出保底方法再优化\n算法和编码分开，先想出解法，道具 举例\n针对特殊用例优化")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://visualgo.net/zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("VisuAlgo - 数据结构和算法动态可视化 (Chinese)"),v("OutboundLink")],1)])])]),t._v(" "),v("h2",{attrs:{id:"复杂度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#复杂度"}},[t._v("#")]),t._v(" 复杂度")]),t._v(" "),v("ul",[v("li",[t._v("评估算法优劣，反映运行时间或占用存储空间随输入规模增长而增长的量级")]),t._v(" "),v("li",[t._v("空间复杂度： 衡量运行时存储空间的占用，一般用大写 S(pace)\n"),v("ul",[v("li",[t._v("内存有限制，需要选择更少内存方案")]),t._v(" "),v("li",[t._v("评估能解决多大规模问题")])])]),t._v(" "),v("li",[t._v("时间复杂度： 定性描述算法运行时间的函数，一般用大写 O(peration) - 时间限制，避免陷入死循环 - 需要实时响应\n"),v("a",{attrs:{href:"https://blog.csdn.net/zolalad/article/details/11848739",target:"_blank",rel:"noopener noreferrer"}},[t._v("算法的时间复杂度和空间复杂度-总结 - CSDN 博客"),v("OutboundLink")],1),t._v(" "),v("a",{attrs:{href:"https://juejin.im/post/5c174198f265da611036f4ea",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰与火之歌：「时间」与「空间」复杂度 - 掘金"),v("OutboundLink")],1)])]),t._v(" "),v("h3",{attrs:{id:"程序性能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#程序性能"}},[t._v("#")]),t._v(" 程序性能")]),t._v(" "),v("ul",[v("li",[t._v("用操作数和执行步数来估计程序的运行时间。用符号法来分别描述程序在最好、最坏和平均情况下的运行时间。")]),t._v(" "),v("li",[t._v("程序性能指需要内存和时间的多少")]),t._v(" "),v("li",[t._v("两种分析方法：分析和测量（实验）")]),t._v(" "),v("li",[t._v("实例特征，包含着可以决定程序空间大小的因素（如，输入和输出的数量或相关数的大小）。例如，对 n 个元素排序的程序，它所需要的空间大小是 n 的函数，n 为其实例特征。")]),t._v(" "),v("li",[t._v("相对来说，指令空间的大小受实例特征的影响不大。常量及简单变量所需要的空间与实例特征也没有多大关系，除非相关数的规模对于选定的数据类型来说实在太大。一些动态分配空间也可以不依赖实例特征。环境栈的大小一般不依赖实例特征，除非使用了递归函数。当使用递归函数时，实例特征通常影响（但不总是）环境栈的大小。")]),t._v(" "),v("li",[t._v("递归函数所需要的栈空间通常称为递归栈空间。它的大小依赖于局部变量和形式参数所需要的空间，依赖于递归的最大深度和编译器。")])]),t._v(" "),v("h3",{attrs:{id:"big-o-notation"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#big-o-notation"}},[t._v("#")]),t._v(" Big O notation")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("符号")]),t._v(" "),v("th",[t._v("数学描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("O(1)")]),t._v(" "),v("td",[t._v("常数")])]),t._v(" "),v("tr",[v("td",[t._v("O(log n)")]),t._v(" "),v("td",[t._v("对数")])]),t._v(" "),v("tr",[v("td",[t._v("O(n)")]),t._v(" "),v("td",[t._v("线性")])]),t._v(" "),v("tr",[v("td",[t._v("O(n^2)")]),t._v(" "),v("td",[t._v("平方")])]),t._v(" "),v("tr",[v("td",[t._v("O(n^3)")]),t._v(" "),v("td",[t._v("立方")])]),t._v(" "),v("tr",[v("td",[t._v("O(2^n)")]),t._v(" "),v("td",[t._v("指数")])]),t._v(" "),v("tr",[v("td",[t._v("O(n!)")]),t._v(" "),v("td",[t._v("阶乘")])])])]),t._v(" "),v("p",[t._v("有多个复杂度时，只看最高复杂度")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("算法")]),t._v(" "),v("th",[t._v("复杂度")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("递归")]),t._v(" "),v("td",[t._v("O(2^n)")])]),t._v(" "),v("tr",[v("td",[t._v("二分")]),t._v(" "),v("td",[t._v("O(log n)")])]),t._v(" "),v("tr",[v("td",[t._v("二叉树遍历")]),t._v(" "),v("td",[t._v("O(n)")])]),t._v(" "),v("tr",[v("td",[t._v("优化排序矩阵查找")]),t._v(" "),v("td",[t._v("O(n)")])]),t._v(" "),v("tr",[v("td",[t._v("归并、快排")]),t._v(" "),v("td",[t._v("O(n log n)")])])])]),t._v(" "),v("p",[t._v("[Master theorem (analysis of algorithms) - Wikipedia](https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)")]),t._v(" "),v("p",[v("code",[t._v("O(n log n)")]),t._v(" 念倍？")]),t._v(" "),v("h2",{attrs:{id:"枚举"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#枚举"}},[t._v("#")]),t._v(" 枚举")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("合理设置尝试范围，减少不必要尝试。例：完美立方 四重循环")])]),t._v(" "),v("li",[v("p",[t._v("链表 -- 两个 next --\x3e 树 -- 节点指回 -> 图")]),t._v(" "),v("p",[t._v("无单个子节点，完全二叉树")]),t._v(" "),v("p",[t._v("二叉搜索树，有序，空树，左子树(所有)，右子树(所有)，根结点，查找 O(n) => O(log(n))，退化 O(n)，只有一侧树 =》平衡")])])]),t._v(" "),v("p",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/74584796",target:"_blank",rel:"noopener noreferrer"}},[t._v("优秀程序员都应该学习的数据结构与算法项目（GitHub 开源清单） - 知乎"),v("OutboundLink")],1)]),t._v(" "),v("ul",[v("li",[v("p",[t._v("测试用例，单步验证")]),t._v(" "),v("p",[t._v("暴力解法")]),t._v(" "),v("p",[t._v("解题线索，解题模板")])])]),t._v(" "),v("p",[v("a",{attrs:{href:"https://www.jianshu.com/p/8876704ea9c8",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeetCode 算法题刷题心得（JavaScript） - 简书"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"二分查找"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二分查找"}},[t._v("#")]),t._v(" 二分查找")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("猜 1-1000 之间的一个数，猜多少次 "),v("code",[t._v("2 ** 10 = 1024")])]),t._v(" "),v("p",[t._v("有序 比较中点 范围减半")]),t._v(" "),v("p",[t._v("O(log n)")])])]),t._v(" "),v("h2",{attrs:{id:"模式识别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#模式识别"}},[t._v("#")]),t._v(" 模式识别")]),t._v(" "),v("p",[t._v("一旦涉及出现次数，需要用到 hash\n构造子串，hash 存下标\n涉及子串，考虑滑动窗口")])])}),[],!1,null,null,null);_.default=r.exports}}]);