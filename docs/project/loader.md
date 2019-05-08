# 手动载入脚本和样式

```js
function loadStyleSheet(styleUrl) {
  const link = document.createElement('link');
  link.rel = 'stylesheet'
  link.href = styleUrl
  document.head.appendChild(link);
}

// 加载 videojs 后，再加载插件
async function loadFn () {
  await Vue.loadScript(scripts[0])
  const afterScripts = scripts.slice(1)
  return Promise.all(afterScripts.map(url => Vue.loadScript(url)))
}

function unloadFn () {
  scripts.forEach(url => Vue.unloadScript(url))
}
```
