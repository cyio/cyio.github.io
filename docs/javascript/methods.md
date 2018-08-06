# 常用方法
## console 

.log
.error 红色
.info
.warn 黄色

```js
function divide(num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") {
    throw new Error("divide(): Both arguments must be numbers.");
  }
  return num1 / num2;
}
```
用 assert 函数进行抽象，简化错误输出
```js
function assert (conditon, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function divide(num1, num2) {
  assert(typeof num1 != "number" || typeof num2 != "number",
    "divide(): Both arguments must be numbers.");
  return num1/num2;
}
```

### 子字符串
```js
// 支持子字符串，
// %s string
// %d number
console.log('this is %s %d', 'Jack', 20);
VM146:2 this is Jack 20
```

## history
不能查看用户浏览了哪些页面

### 可用方法：

```js
history.go(-1) // 向后跳转一页 等价于 history.forward()
history.go(1)  // 向前跳转一页，等价于 history.back()
hisroty.go('google.com') // 跳转到包含字符串的页面，若不存在，什么也不做
```

push pop 是 HTML5 新增方法，专用于单页应用，骗用户用的

## date

```js
function timeFormat(timestamp) {
    var date = new Date(parseInt(timestamp)*1000);
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hour = date.getHours();
    var minite= date.getMinutes();
    var second = date.getSeconds();
    return year+"年"+month+"月"+day+"日";
    //return year+"."+month+"."+day;
}
```

通用的时间函数 [JavaScript date function - php.js](http://phpjs.org/functions/date/)

示例：
```js
date('Y\\年m\\月d\\日', 1062402400)
// "2003年09月01日"

date('m\\月d\\日 l', 1062402400)
// "09月01日 星期一"

date('Y.m.d' , this.updated_at)
//  2003.09.01
```

如何将自己的函数添加到框架中？
1. 把文件添加到JS框架文件夹中
2. 修改gulp配置


date存储的是value值，以毫秒（millisecond）为单位，可用getTime()获取。

```js
new Date('1970-01-01').getTime()
// 0
new Date('1970-01-02').getTime()
// 86400000
new Date('1970-02-01').getTime()
// 2678400000
new Date('1970-03-01').getTime()
// 5097600000
2678400000 - 86400000
// 2592000000
5097600000 - 2678400000
// 2419200000
86400000 * 30
// 2592000000
86400000 * 28
// 2419200000
aDay = new Date(24 * 60 * 60 * 1000).getTime();
// 86400000
aMonth = new Date(24 * 60 * 60 * 1000 * 30).getTime();  // 不同月天数不一样，这里是30天
// 2592000000
anHour = new Date(60 * 60 * 1000).getTime();
// 3600000
aMinute = new Date(60 * 1000).getTime();
// 60000
jsDate = new Date('2016-01-21').getTime();  // 日月如为个数，前面的0不可省略
phpDate = new Date('2016-01-21').getTime()/1000;
```
用getFullYear()，getYear()是被废弃的用法
getMonth();  // 获取月份(0-11,0代表1月,用的时候记得加上1)
Date.parse(date)  // 只能精确到秒，毫秒将用0来代替

目前F7项目中引入的date时间格式化函数，来自PHP，时间以秒为单位，在用JS处理时要注意转换。

[JavaScript time values: dates as milliseconds since 1970-01-01](http://www.2ality.com/2014/02/time-values.html)

[js时间戳与日期格式之间的互转 - 脑细胞 - SegmentFault](https://segmentfault.com/a/1190000000481753)

[时间单位换算,单位换算,单位转换](http://cn.bestconverter.org/unitconverter_time.php)

[Exact Age Calculator](http://codepen.io/Codeman12323/pen/HqCyw/)

### 倒计时 countdown
给定数字，如果是个位数，前面加 0

### 时区
nodejs 端输入 new Date()，打印出来是标准时区时间，而 getHours() 执行出来是系统环境时区

```js
let dt = new Date()
let hr = dt.getHours() - dt.getTimezoneOffset() / 60
dt.setUTCHours()
```

## fetch

fetch 相对于旧的 XHR ，主要不同即使用 Promise
完整流程应该先检查状态码，与 callback 写法一致
返回的是 Stream，因此用 json() 方法读取是异步的
响应类型有三种，basic cors opaque，cors 不设限制时跟 basic 一样
fetch 目前无法取消
```
fetch('./api/some.json', {mode: 'cors'})
	.then(
		function(response) {
			if (response.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' +
					response.status);
				return;
			}

			// Examine the text in the response
			response.json().then(function(data) {
				console.log(data);
			});
		}
	)
	.catch(function(err) {
		console.log('Fetch Error :-S', err);
	});

// 简化办支，是分离 status 和 json 等步骤，更关注结果
function status(response) {
	if (response.status >= 200 && response.status < 300) {
		return Promise.resolve(response)
	} else {
		return Promise.reject(new Error(response.statusText))
	}
}

function json(response) {
	return response.json()
}

fetch('users.json')
	.then(status)
	.then(json)
	.then(function(data) {
		console.log('Request succeeded with JSON response', data);
	}).catch(function(error) {
		console.log('Request failed', error);
	});
```
简写
```js
fetch(url).then(res => res.json().then(console.table))
```

[Introduction to fetch()  |  Web  |  Google Developers](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)

### CORS
* 需要服务器设置支持
* Access-Control-Allow-Origin 有两种情况，一个域名或`*`
* Access-Control-Allow-Credentials 表示是否允许发送 cookie，只能是 true，不需要就不要写
* cookie  比较敏感，需要两端配合，才能传送，且只能同源
* 有些操作是浏览器处理的，如 origin 的设置 
[跨域资源共享 CORS 详解 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2016/04/cors.html)

## location
```js
location.assign('http://baidu.com')
location.replace('http://baidu.com')
```
两个方法都会载入一个新地址，区别是replace会抹掉当前页的历史记录（之前的不影响）。

## map

```js
//Example: Calculate 15% tip on a list of bills and order them
//No keys used
//Reduce simply creates a sorted array

const mapper = item => Math.round(parseFloat(item) * 1.15 * 100) / 100
const reducer = (intermediate, current) => { 
  intermediate.push(current)
  return intermediate.sort()
}
let initial = []
const data = "14.22 15.28 19.42 16.80 11.96".split(" ");
console.log(data.map(mapper).reduce(reducer, initial));
```

[Simple implementation and explanation of Map Reduce using Javascript](https://gist.github.com/johnhenry/5487382)

## math
### 获取两个值之间的随机整数
MDN random 上有，不要自己推了

```js
// 获取随机数公式
var num = Math.floor(Math.random() * 随机数的总数 + 随机数的最小值)
// 从1到10的随机数
var num = Math.floor(Math.random() * 10 + 1)
// 从2到10的随机数
var num = Math.floor(Math.random() * 9 + 2)

// 进阶，给定范围直接返回随机数
function selectFrom (lowerValue, upperValue) {
    var choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random * choices + lowerValue)
}

var num = selectFrom(2, 10);

// 程序模拟抛硬币，计算概率 未指派
function throwCoins(times) {
	let r
	let output = []
	for (let i = 0; i < times; i++) {
		r = getRandomIntInclusive(0, 1)
		if (r === 0) {
			output.push(r)
		}
	}
	console.log('0 出现的概率：' + output.length / times)
}

throwCoins(1000000)

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
```

* 取模/取余/取个位数 %
* Math.floor(x) 取小于或等于x的最大正整数，比如用来取十位数
  + floor ceil 一个地板，一个天花板，一个往小取，一个往大取，正负规则一样
  + Math.trunc(x) 取整，ES6新增，仅去掉小数部分
* Math.sqrt(4) // square root of 4 is 2
* 3.1415926.toFixed(2) // 3.14 四舍五入，不传参数是，表示0，即去掉小数部分
* 浮点数(float)计算不精确，可先转换成整数
```js
0.2 + 0.1
// 0.30000000000000004
(0.2 * 10 + 0.1 * 10) / 10
// 0.3
```
浮点指的是带有小数的数值，浮点运算即是小数的四则运算
计算机里没有小数点，只能转换为类似科学计数法的表达方式，有精度限制

> 通常，取模运算也叫取余运算，它们返回结果都是余数.rem（取余）和mod（取模）唯一的区别在于： 当x和y的正负号一样的时候，两个函数结果是等同的；当x和y的符号不同时，rem函数结果的符号和x的一样，而mod和y一样。

## settimeout
* 尽快执行，不能保证，浏览器负责排序
    在JavaScript中没有任何代码是立刻执行的，但一旦进程空闲则尽快执行（表面看是立刻执行）。

* 何时加入队列，而非实际执行
    定时器指定的时间间隔表示何时将定时器的代码添加到队列，而不是何时实际执行代码。

* 最佳实践
    ```js
    (function foo() {
        ...
        setTimeout(foo, delay);
    })();
    ```

## websocket

加一个回传机制，server 推送后，客户端回传一个消息，当 server 多次推送后，没有收到回传消息，就删除这个客户端
客户端和服务器端 应该一直有 ping pong 这种心跳来维持在线和判断在线.
主动断开连接或正常关闭页面时浏览器会发送一个断开事件。如果是异常断开，那要看服务端 Socket 的 KeepAlive 参数是设置的是多长时间，要等到超时才能收到断开事件。如果应用层不能设置 KeepAlive 参数，那只能自己加心跳来及时处理异常情况。

如何生成自签名证书
[WebSocket Over SSL/TLS · Issue #49 · abbshr/abbshr.github.io](https://github.com/abbshr/abbshr.github.io/issues/49)

HTTP是一种无连接，无状态协议，它只负责HTTP报文，真正维护那个连接的是传输层的TCP协议
“request”事件对应的是HTTP的request，而“connect/connection”事件才对应着TCP connection
