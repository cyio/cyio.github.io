```
document.getElementById('msg').innerText = 'Hi!';
setTimeout(() => {
  alert('Hi!');
}, 0);
```

Q: 什么是安全的方式，当 msg "Hi" 显示在页面后，再执行 alert

setTimeout 10 (chrome) 可以，但是太特定了

MutationObserver 不行，仅响应数据变化，而不是显示变化

```js
const elem = document.getElementById('msg')
const obs = new MutationObserver(() => {
  alert('Hi!')
})
obs.observe(elem, { subtree: true, childList: true })
elem.innerText = 'Hi!'
```

rAF 可以，注意需要两层

event loop: rAF -> style -> layout -> paint

所以第一个 rAF 执行其实是和附近的代码在一个 task 里
```js
requestAnimationFrame(() => {
  const elem = document.getElementById('message')
  elem.innerText = 'Test'
  requestAnimationFrame(() => { // make sure after first paint
    alert('Test')
  })
})
```
[ Axel Rauschmayer 在 Twitter: "document.getElementById('msg').innerText = 'Hi!'; setTimeout(() =&gt; { alert('Hi!'); }, 0); What’s a safe way to ensure alert() always runs *after* the DOM change is displayed? – Timeouts &gt; 10 work (in Chrome), but that seems arbitrary. – Or something other than setTimeout()?" / Twitter](https://mobile.twitter.com/rauschma/status/1288868746682081285)

[Jake Archibald: “In The Loop” — Taking a close look into the browser’s Event Loop – Bram.us](https://www.bram.us/2018/02/09/jake-archibald-in-the-loop-taking-a-close-look-into-the-browsers-event-loop/)
