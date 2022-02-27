(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{498:function(t,a,s){"use strict";s.r(a);var n=s(56),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"递归"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#递归"}},[t._v("#")]),t._v(" 递归")]),t._v(" "),s("p",[t._v("[toc]")]),t._v(" "),s("h2",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://tva1.sinaimg.cn/large/4e5d3ea7ly1gywlbbqi6aj20im07uq39.jpg",alt:"image.png"}})]),t._v(" "),s("ul",[s("li",[t._v("递归由基本部分和递归部分组成，基础部分直接定义（即不用递归就能求解），递归部分可以通过参数减小转换为基础部分，递归部分的每一次应用都更接近基础部分，最后一次应用基础部分。")]),t._v(" "),s("li",[t._v("一种循环形式，在函数定义内调用自身")]),t._v(" "),s("li",[t._v("相似的特征，归纳，递归步骤，常见嵌套循环，外循环递增，内循环递减")]),t._v(" "),s("li",[t._v("边界条件\n"),s("a",{attrs:{href:"http://io.upyun.com/2016/04/05/recursion/",target:"_blank",rel:"noopener noreferrer"}},[t._v("谈谈递归"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("递推公式 + 终止条件")]),t._v(" "),s("li",[t._v("去的过程叫 递，回来的过程叫 归，电影院查座位"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("f(1) = 1\nf(n) = f(n - 1) + 1\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"斐波那契数列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#斐波那契数列"}},[t._v("#")]),t._v(" 斐波那契数列")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://leetcode-cn.com/problems/fibonacci-number/",target:"_blank",rel:"noopener noreferrer"}},[t._v("509. 斐波那契数 - 力扣（LeetCode）"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("初始值是 0 1 或 1 1")]),t._v(" "),s("h2",{attrs:{id:"数据按序请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据按序请求"}},[t._v("#")]),t._v(" 数据按序请求")]),t._v(" "),s("p",[t._v("数组+Finally+递归")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ids "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("34112")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("98325")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("68125")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ids"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shift")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'finished'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 终止条件")]),t._v("\n  $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/get'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("always")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//do sth.")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'finished'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 递归调用")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"http://caibaojian.com/data-structures-and-algorithms.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("我接触过的前端数据结构与算法-前端开发博客"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"爬楼梯"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#爬楼梯"}},[t._v("#")]),t._v(" 爬楼梯")]),t._v(" "),s("p",[t._v("走法分两种，即第一步走 1 个台阶或 2 个台阶")]),t._v(" "),s("p",[t._v("n 个台阶走法，转化为减掉最后一步的台阶走法之和")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("f(n) = f(n-1) + f(n-2)\n\nf(2) = 2\nf(1) = 1\nf(0) = 0 // 无意义\n")])])]),s("h2",{attrs:{id:"堆栈溢出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#堆栈溢出"}},[t._v("#")]),t._v(" 堆栈溢出")]),t._v(" "),s("blockquote",[s("p",[t._v("函数调用会使用栈来保存临时变量。每调用一个函数，都会将临时变量封装 为栈帧压\n入内存栈，等函数执行完成返回时，才出栈。系统栈或者虚拟机栈空间一般都不大。如果\n递归求解的数据规模很大，调用层次很深，一直压入栈，就会有堆栈溢出的风险。\n出自：10 | 递归：如何用三行代码找到“最终推荐人”？")])]),t._v(" "),s("p",[t._v("应对：限制递归深度")]),t._v(" "),s("h2",{attrs:{id:"优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),s("p",[t._v("重复计算：memo")]),t._v(" "),s("p",[t._v("转为非递归，本质并没有变")]),t._v(" "),s("p",[t._v("记忆化递归，时间由 O(n^2) 降到 O(n)")]),t._v(" "),s("p",[t._v("滚动数组，可以将空间由 O(n) 降到 O(1)")]),t._v(" "),s("h2",{attrs:{id:"调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[t._v("#")]),t._v(" 调试")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("打印日志发现，递归值。")])]),t._v(" "),s("li",[s("p",[t._v("结合条件断点进行调试。")])])]),t._v(" "),s("p",[t._v("代入较小的数枚举验证")])])}),[],!1,null,null,null);a.default=e.exports}}]);