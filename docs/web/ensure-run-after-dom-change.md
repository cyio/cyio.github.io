# 如何保证 DOM 更新（绘制）后执行

以下代码，先展示 Hi，还是先 alert
```js
document.querySelector('div').innerText = 'Hi'; 

alert(2)
```
先 alert，同步代码执行完，再渲染

什么是安全的方式，保证当 msg "Hi" 显示在页面后，再执行 alert

1. setTimeout 可以，但仅限 chrome，不同浏览器不一样

```js
document.querySelector('div').innerText = 'Hi'
setTimeout(() => {
  alert('Hi!');
}, 0);
```

2. MutationObserver 仅响应数据变化，而不是显示变化。也是先 alert，不满足。

```js
const elem = document.querySelector('div')
elem.innerText = 'Hi' // won't display
const obs = new MutationObserver(() => {
  alert('Hi!') // o1
})
obs.observe(elem, { subtree: true, childList: true })
elem.innerText = 'Hi 2' // o2
```

3. rAF 可以

event loop: 
规范/chrome:         rAF -> style -> layout -> paint
老版 Edge 和 Safari： style -> layout -> paint -> rAF

所以第一个 rAF 执行其实是和附近的代码在一个 task 里

```js
requestAnimationFrame(() => {
  const elem = document.querySelector('div')
  elem.innerText = 'Test'
  requestAnimationFrame(() => { // make sure after first paint
    alert('Test')
  })
})
```

[ Axel Rauschmayer 在 Twitter: "document.getElementById('msg').innerText = 'Hi!'; setTimeout(() =&gt; { alert('Hi!'); }, 0); What’s a safe way to ensure alert() always runs *after* the DOM change is displayed? – Timeouts &gt; 10 work (in Chrome), but that seems arbitrary. – Or something other than setTimeout()?" / Twitter](https://mobile.twitter.com/rauschma/status/1288868746682081285)


阻塞渲染 while/promise
```
// 1.
$0.addEventListener('click', () => { while (true) {} })

// 2.
function loop() {
  Promise.resove(loop)
}
loop()
```

强制渲染，比如想让动画执行一段、再执行后续代码
```
getComputedStyle
```

保证渲染间隔 rAF

![image.png](https://ww1.sinaimg.cn/large/4e5d3ea7ly1h1asipl6u4j20x50gon1r.jpg)

[Jake Archibald: “In The Loop” — Taking a close look into the browser’s Event Loop – Bram.us](https://www.bram.us/2018/02/09/jake-archibald-in-the-loop-taking-a-close-look-into-the-browsers-event-loop/)
