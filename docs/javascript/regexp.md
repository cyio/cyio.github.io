# 正则表达式

> 学习目标：基础扎实，熟练运用
> 积累一些练习题，隔段时间回忆考察

只能处理字符串，不能处理语法分析（语法表达示）

```js
var re = /hello src=(.+) yes/; // 创建正则表达式对象，这里不是字符串
var str = "hello src=value yes";
re.exec(str); // 返回结果数组或null，如果只需要知道 true 或 false，用 test 或 String.search/indexOf
alert(RegExp.$1); //获取第一个分组匹配

g 表示执行多次，符合匹配的可能有多个
匹配子字符串，从 lastIndex 开始
```

- match 和 exec 主要区别

## 基础

### 创建方式

字面量和构造器，如果正则内容是动态有变量，只能用构造器

### 元字符

`.`换行符外的任意字符，如果要包括换行符的话，在 JS 中，`\s\S`匹配任意字符

`\w`字母数字下划线，相当于`[a-zA-Z0-9_]`，注意包括数字和下划线

`\s`任意空白字符，空格、制表符、换行符

大写时求反，如`/S`表示匹配任意非空白字符

`()`分组

`[]`字符组，如`[a-z]`

`{n}`量词

`{n, m}`范围

### 定位符

`\b`单词边界(word boundary) 放到待匹配字符前面

`^`(在其它语言里是 A) 文本开头

`$ (\z \Z)`文本结束，区别是`Z`会匹配到最后的换行符

### 选择分支

| 管道，或

### 补充

n 进制，即逢 n 进一位，如二进制，逢 2 变 10，逢 4 变 100。钟表是十二进制加六十进制，八卦是类八进制表示

## 常用匹配

图片后缀

```
const s = 'afafad/a.jpg|233' // 路径末尾有多余字符，需要去掉
s.match(/(.+?).(jpe?g|png|webp)/g)
// return ["afafad/a.jpg"]
```

## 常用正则

```js
// 多个字符串或关系
var reg = /hello|world/ // 是否存在 hello 或 world
reg.test('hello') // return true
vue 表达式对正则支持不好，比如URL地址转义`\/`会报表达式无效

// 将等号左右词掉换
let t = '2=1'
var result = t.replace(/(\w+)=(\w+)/, '$2=$1') // 匹配不成功，相当于赋值为 t
console.log(result)

// 匹配 HTML 标签
var re = /<[^<>]*>/

// 将加粗内容中的 before 替换为 after
// 一次替换不完
var t = 'before <b>first before</b> test <b>before before</b> then'
var result = t.replace(/<b>.*?<\/b>/g, function (match) { // 问号修饰星号，懒匹配，0 或更多，否则会匹配很长
	console.log(match)
	return match.replace(/before/g, 'after')
})
console.log(result)

// 替换数字为其2倍
var t = '123'
var re = /\d+/ // 或者 /\d/g 执行多次
var result = t.replace(/\d+/, function (match) {
  return match * 2
})
console.log(result)

// 日期，连接符可为 / . -
// 1. 连字符处避免点号滥用，否则会匹配 999999 这样
// 2. 最后一段后面没有短杠
// 3. 直白的写更简单？有优化意义吗？
/(\d{2}[/.\-]){2}\d{2}/

```

## 如何匹配电子邮件

- 两边非空白字符 1 到 N 个，中间 @
- 先写全法的构造，然后针对不合法情况，写细节

## 构造正则步骤

1. 加载一些合法和不合法的样例数据
2. 写一个正则匹配所有合法的数据
3. 雕琢组成部分，直到不再匹配任何不合法的数据

## 实战

- 正则表达式`/^d+[^d]+/`能匹配的字符串？
  - A 123
  - B 123a
  - C d123
  - D 123def

这道题理解错误在一下几点：

1. 正则表达式的开头的 d+ 不是表示数字，表示数字是 \d，此处要匹配的就是英文字母 d
2. 中括号的意思是匹配其中某一个字符，比如 [123]要匹配 1 或 2 或 3
3. 中口号中的 ^不是匹配单词开始，而是取反的意思，即要匹配的字符不能使中括号中的任意一个，比如 [^123]要匹配的字符是 1、2、3 之外的任意字符即可
4. 所以题目中的正则表达式要匹配的是以英文字母 d 开头的字符，字母 d 有一个或多个，然后不是英文字母
   d 的字符一个或多个（至少有一个）

## 手机号

[JS正则表达式完整教程（略长） - 掘金](https://juejin.im/post/5965943ff265da6c30653879)

## 汉字
匹配
```js
new RegExp("[\\u4E00-\\u9FFF]+","g");
/.*[\u4e00-\u9fa5]+.*$/.test('ab我')
```

[RegExr: Learn, Build, & Test RegEx](https://regexr.com/)

[社区规则集 RegexHQ](https://github.com/regexhq)

[JS 正则表达式完整教程（略长） - 掘金](https://juejin.im/post/5965943ff265da6c30653879)

[Regulex：JavaScript Regular Expression Visualizer](https://jex.im/regulex)


边界模式
内容模式

- 括号匹配
```js
/\((.*?)\)/g
// (a, bc) bdbdb (1, 2)
```

贪婪模式 字符串回溯
懒惰模式? 正则回溯
独占模式+，不回溯

过滤Emoji：
```
name = name.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "");
```

验证插件只支持正向 pattern
```
const validStrPattern = /^[\u4e00-\u9fa5_a-zA-Z0-9- ]+$/
```

[当我问表单校验的面试题时，我期望得到什么样的答案-图灵社区](https://www.ituring.com.cn/article/500582)
