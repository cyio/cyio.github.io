(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{495:function(_,v,t){"use strict";t.r(v);var a=t(56),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"leetcode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#leetcode"}},[_._v("#")]),_._v(" Leetcode")]),_._v(" "),t("p",[_._v("[toc]")]),_._v(" "),t("h2",{attrs:{id:"_26-删除排序数组中的重复项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_26-删除排序数组中的重复项"}},[_._v("#")]),_._v(" 26. 删除排序数组中的重复项")]),_._v(" "),t("p",[_._v("题意：")]),_._v(" "),t("ol",[t("li",[_._v("就地修改")]),_._v(" "),t("li",[_._v("要求空间占用 O(1)，不能用中间数组")])]),_._v(" "),t("p",[_._v("思路：")]),_._v(" "),t("ol",[t("li",[_._v("双指针，慢指针在元素不重复时才移动")])]),_._v(" "),t("ul",[t("li",[_._v("重点不是 nums 修改，而是输出 length。结合 length，可以作一次 slice，给出 nums")])]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("倒序遍历，当元素重复时，删除当前项")])]),_._v(" "),t("ul",[t("li",[_._v("正序剪切，会影响 i。倒序减切掉一个元素，i--，不影响待处理元素（身后）")])]),_._v(" "),t("h2",{attrs:{id:"_70-爬楼梯"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_70-爬楼梯"}},[_._v("#")]),_._v(" 70. 爬楼梯")]),_._v(" "),t("p",[_._v("思路：")]),_._v(" "),t("ol",[t("li",[_._v("记忆化递归")])]),_._v(" "),t("h2",{attrs:{id:"_121-买卖股票的最佳时机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_121-买卖股票的最佳时机"}},[_._v("#")]),_._v(" 121. 买卖股票的最佳时机")]),_._v(" "),t("p",[_._v("题意：")]),_._v(" "),t("ol",[t("li",[_._v("价格不会为负")])]),_._v(" "),t("p",[_._v("思路：")]),_._v(" "),t("ol",[t("li",[_._v("双指针，慢指针总是指向最小价格")])]),_._v(" "),t("p",[_._v("注意点：")]),_._v(" "),t("ol",[t("li",[_._v("给"),t("code",[_._v("Math.max")]),_._v("方法传入太大的数组，会导致超时，解决技巧，遍历时更新最小值")]),_._v(" "),t("li",[_._v("从第 2 个价格开始才能计算价格差，初始化最小价格为第一个价格")])]),_._v(" "),t("h2",{attrs:{id:"_3-无重复字符的最长子串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-无重复字符的最长子串"}},[_._v("#")]),_._v(" 3. 无重复字符的最长子串")]),_._v(" "),t("p",[_._v("思路：")]),_._v(" "),t("ol",[t("li",[_._v("滑动窗口")]),_._v(" "),t("li",[_._v("维护一个窗口，窗口右边界从 -1 开始")])]),_._v(" "),t("h2",{attrs:{id:"_387-字符串中的第一个唯一字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_387-字符串中的第一个唯一字符"}},[_._v("#")]),_._v(" 387. 字符串中的第一个唯一字符")]),_._v(" "),t("p",[_._v("思路：")]),_._v(" "),t("ol",[t("li",[_._v("暴力，O(n^2)")]),_._v(" "),t("li",[_._v("两次循环，时间 O(n)")]),_._v(" "),t("li",[_._v("由于 map 中没有存索引，第二次循环还是遍历原数组，以输出索引")])]),_._v(" "),t("h2",{attrs:{id:"_88-合并两个有序数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_88-合并两个有序数组"}},[_._v("#")]),_._v(" 88. 合并两个有序数组")]),_._v(" "),t("p",[_._v("思路：")]),_._v(" "),t("ol",[t("li",[_._v("双指针，倒序取较大值，当 nums2 取空时，结束。 case 要考虑全，如 p1 == -1 p2 == -1")])]),_._v(" "),t("h2",{attrs:{id:"_896-单调数列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_896-单调数列"}},[_._v("#")]),_._v(" 896. 单调数列")]),_._v(" "),t("p",[_._v("思路：")]),_._v(" "),t("ol",[t("li",[_._v("一次遍历，否定判断，输出一个为真或全部为真")])]),_._v(" "),t("h2",{attrs:{id:"lcp-06-拿硬币"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lcp-06-拿硬币"}},[_._v("#")]),_._v(" LCP 06. 拿硬币")]),_._v(" "),t("p",[_._v("公式："),t("code",[_._v("f(x) = x / 2 + x % 2")])]),_._v(" "),t("h2",{attrs:{id:"_680-验证回文字符串-ii"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_680-验证回文字符串-ii"}},[_._v("#")]),_._v(" 680. 验证回文字符串 Ⅱ")]),_._v(" "),t("p",[_._v("依赖知识：如何判断回文，1. 反转 2. 双指针 3. 迭代")]),_._v(" "),t("p",[_._v("回文指针末尾，lr 相邻，或 l === r，后者只剩一个字母，满足回文，比不比较都行")]),_._v(" "),t("p",[_._v("贪心算法")]),_._v(" "),t("h2",{attrs:{id:"_215-数组中的第k个最大元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_215-数组中的第k个最大元素"}},[_._v("#")]),_._v(" 215. 数组中的第K个最大元素")]),_._v(" "),t("ol",[t("li",[_._v("sort 降序后，取第 k - 1 元素 O(nlogn)")])]),_._v(" "),t("h2",{attrs:{id:"_209-长度最小的子数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_209-长度最小的子数组"}},[_._v("#")]),_._v(" 209. 长度最小的子数组")]),_._v(" "),t("p",[_._v("滑动窗口")]),_._v(" "),t("ol",[t("li",[_._v("右边界移动，直到找到解")]),_._v(" "),t("li",[_._v("找到解，左边界移动")])]),_._v(" "),t("h2",{attrs:{id:"_1143-最长公共子序列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1143-最长公共子序列"}},[_._v("#")]),_._v(" 1143. 最长公共子序列")]),_._v(" "),t("p",[_._v("二维 dp\n"),t("img",{attrs:{src:"http://ww1.sinaimg.cn/large/4e5d3ea7ly1gyr42umo68j20av06ytbt.jpg",alt:"4e5d3ea7ly1gyr42umo68j20av06ytbt.jpg (391×250)"}})])])}),[],!1,null,null,null);v.default=s.exports}}]);