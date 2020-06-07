# 字符串
```js
var stringValue = "Hello World";
stringValue.length //  "11"
stringValue.charAt(1) //  "e" 字符
stringValue.charCodeAt(1) //  "101" 字符编码
stringValue.fromCharCode(101) //  "e" 上个方法的逆向
stringValue[1] //  "e"

// concat()用于拼接字符串，可接多个参数，但在实践中使用加号操作符（+）更方便
stringValue.concat(" get", "it!")   

// 把字符串编码为base64
window.btoa('abc') // 'YWJj'  

// 汉字需要先进行 UTF-8 编码
btoa([0xe6, 0x88, 0x91].map(function(code) {  
  return String.fromCharCode(code)
}).join(''))    // "5oiR" 我
// 在浏览器中打开 data:text/html;charset=utf-8;base64,5oiR

function base64(str) {  
  return btoa(encodeURI(str).replace(/%([0-9A-F]{2})/g,
  function(str, h) {
    return String.fromCharCode(parseInt(h, 16))
  }))
}

// 字符串匹配替换
// 以 jpe?g 等结尾的 url
let url = path.match(/(.*?).(jpe?g|png|webp)/g)
// 提取后缀
let last = url.match(/.(jpe?g|png|webp)/g)
// 替换添加一些字符
let newUrl = url.replace(last, i + last)

// 用反斜杠转义引号
var a = '\'Mike\'' // "'Mike'"

// 内部用单引号，外部用双引号

// parseInt(str, radix) 不仅仅取整，会把第一个非数字及往后部分去掉
// 传入值不是字符串会转换，第二参数是基数（进制，总是明确用10，浏览器实现不一致,0开头可能被当作8进制）, 返回数字
parseInt('1-2', 10) // 1
parseInt('1rem') // 1
```

## 判断字符串是否以给定字符开头
用`indexOf`方法判断，返回为 0，则是在开头， 如 
```js
'github'.indexOf('git') === 0 // true
```

有了ES6，可以这样
```js
'github'.startsWith('git')
'github'.startsWith('hub', 3)  // 可以指定位置
```
## 实现 repeat
```js
// 实现一，
// 空 + 字符串，这里字符串作为了拼接符
// n 个拼接符，需要 n + 1 个空
String.prototype.repeatString1 = function (n) {
  return Array(n + 1).join(this);
}
console.log('ni'.repeatString1(4));

// 实现二 fill 不传位置参数，填充全部
String.prototype.repeatString2 = function (n) {
  return Array(n).fill(this).join('');
}
console.log('ni'.repeatString2(3));
```

## 转为数组
```js
const string = 'word';

// Option 1
string.split('');

// Option 2
[...string];

// Option 3
Array.from(string);

// Option 4
Object.assign([], string);

// Result:
// ['w', 'o', 'r', 'd']
```
