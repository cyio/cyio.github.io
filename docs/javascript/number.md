# Number

- 除法分母不要为 0

```js
1 / 0 // Infinity
0 / 0 // NaN
```

- 两个错误值
  - isNaN 无法转换成数字
  - Infinity 数字太大
- isNaN() 会尝试将参数转换为数字类型

## 浮点数计算

原因：二进制 + 64 位双精度

0.1 的二进制表示，是无限循环的长度，而存储有限

[JavaScript小数精度问题 - Web前端工程师面试题讲解 - YouTube](https://www.youtube.com/watch?v=cI0XQkC9AOc)

```js
a = "" + Number.MAX_SAFE_INTEGER
'9007199254740991'
a.length
16

((0.1 + 0.2) + "").length
"0.30000000000000004"
19
```

解决：
```js
parseFloat((0.1 + 0.2).toFixed(10))
// toFixed 格式化为小数点后 10 位 0.30000...
// parseFloat 解析为有效浮点数，没有了多余的 0
```

双精度是1位符号，11位指数，52位小数。
![v2-48240f0e1e0dd33ec89100cbe2d30707_1440w.jpg (618×125)](https://pic3.zhimg.com/80/v2-48240f0e1e0dd33ec89100cbe2d30707_1440w.jpg?source=1940ef5c)

## 接口返回大数

影响：
前端Js得到的数据将由于溢出而导致精度丢失，生成唯一 id 场景，不可接受

> 后面位数受影响，变为 0，数字规模不影响


![zfxstuoltk.png (522×246)](https://ask.qcloudimg.com/http-save/yehe-2553644/zfxstuoltk.png?imageView2/2/w/1620)

开发者工具（F12）查看网络请求（注意要查看请求原生的返回值，而不是被浏览器二次处理过的格式化数据）

后端：将可能超出范围的数字类型（Long）变量转为字符串类型（String），前端始终用 String 判断

[json-bigint的介绍和使用(可以解决Javascript的一个有关大整数的坑)_yabalaxi的博客-CSDN博客_json-bigint](https://blog.csdn.net/Aaa_Liao/article/details/106982675)

## 价格场景

彻底解决的方案是用‘分’表示金额，需要接口数据支持。

如果不想改，`*100`转换成 int 再进行计算。
最后的结果再除以 100 不会有问题。
```js
// 精确价格减法计算，每次运算都要处理浮点数
function subtract(n, m) {
  return (Number.parseInt(n * 100, 10) - Number.parseInt(m * 100, 10)) / 100
}
```


> 因为JavaScript是"弱类型"语言，但在小数点运算时，JavaScript将隐式的采取[IEEE754二进制浮点运算](https://link.zhihu.com/?target=https%3A//www.h-schmidt.net/FloatConverter/IEEE754.html)。而不是我们想象中的十进制运算。而十进制和二进制转换时，就可能出现精度丢失的问题。

> 因为JS的精度丢失问题历史，所以通常JS中最佳实践中，不推荐大家用JS进行浮点运算，例如货币，交易相关。如果无法避免的计算场景，通常推荐先将数字转换成整数，例如￥10.00元，变成￥1000分，进行计算。 另外也可以通过比较两个浮点数差值的绝对值，是否超过误差精度。

业务（money）推进技术，十进制主要因为金融和货币系统在用。

js是弱类型动态语言，本身并不适合做cpu密集型计算。

[JavaScript著名面试题: 0.1 + 0.2 !== 0.3，即将成为过去 - 知乎](https://zhuanlan.zhihu.com/p/225490777)