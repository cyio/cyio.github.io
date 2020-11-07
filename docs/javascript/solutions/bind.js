// bind 特性，首参新 this，后续参数可选
// 1. FN.apply FN 怎么表示
// 2. 参数合并
// 3. this 区分
// const test = (x) => x

// Function.prototype.bind = (curThis) => {

// }

// test.bind(this)

let user = {
  firstName: 'john',
  say() {
    console.log(`hi ${this.firstName}`)
  }
}
user.say = user.say.bind(user)

setTimeout(user.say, 100)
// setTimeout(() => user.say(), 100)

user.say = () => console.log('changed')

// 1. 改成箭头函数，解决 this 绑定后， 引起问题是 对象值有可能变化
// 2. 避免 1 中的问题，可以用 bind，保持使用绑定当时的对象值

// 实现 bind v1 [手动实现bind函数（附MDN提供的Polyfill方案解析）](https://lvdingjin.github.io/tech/2018/06/05/achieve-bind.html)
// [面试官问：能否模拟实现JS的bind方法 - 掘金](https://juejin.im/post/5bec4183f265da616b1044d7)
// [Function.prototype.bind() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
// 考虑到一般不会把 bind 和 new 在一起用、效率问题，建议用这个简短版本
Function.prototype.bind = function(oThis) {
  if (typeof this !== 'function') {
    throw ('must be function')
  }

  var self = this
  var args = [].slice.call(arguments, 1) // this 后续参数
  return function() {
    return self.apply( // 应该是 boundFunc 进行 apply，这里的 context 已经变成 global，所以要用 self
      oThis,
      args.concat([].slice.call(arguments)) // 前置 binded fixed args
    )
  }
}

// test
let user = {
  firstName: 'john',
  say(words) {
    console.log(`hi ${this.firstName} ${words}`)
  }
}
user.say = user.say.bind(user, 'morning')

setTimeout(user.say, 100) // expect 'john'
