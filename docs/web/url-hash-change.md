## 监听 URL 状态变化

要监听URL的状态更改（即在URL的哈希部分中的更改），可以使用 `window.onhashchange` 事件。

例如，下面的代码将向 `window` 对象添加一个事件侦听器，该侦听器将在 URL 的哈希部分更改时被调用：

```js
window.addEventListener("hashchange", function() {
  console.log("URL的哈希部分已更改为：" + window.location.hash);
});
```


在上面的示例中，当 `hashchange` 事件触发时，回调函数将被调用。此回调函数将日志记录哈希部分中的新 URL。

您还可以通过检查 `window.location.hash` 来获取当前哈希部分的值。例如，您可以在页面加载时初始化应用程序状态，并在 `hashchange` 事件发生时根据 URL 的哈希部分更新状态。

javascriptCopy code

```js
// 获取当前URL哈希部分的值
var currentHash = window.location.hash;

// 在页面加载时初始化应用程序状态
if (currentHash === "#home") {
  // 初始化应用程序状态为“主页”
} else if (currentHash === "#about") {
  // 初始化应用程序状态为“关于”
}

// 监听URL哈希部分更改的事件
window.addEventListener("hashchange", function() {
  var newHash = window.location.hash;
  if (newHash === "#home") {
    // 更新应用程序状态为“主页”
  } else if (newHash === "#about") {
    // 更新应用程序状态为“关于”
  }
});

```

请注意，如果URL中的哈希部分更改，但未触发 `hashchange` 事件，则可能是因为更改的哈希部分与当前哈希部分相同。在这种情况下，您可以手动触发 `hashchange` 事件，如下所示：

```js
window.location.hash = "#new-hash"; // 设置新的哈希部分
window.dispatchEvent(new Event("hashchange")); // 手动触发“hashchange”事件
```

## 解析 hash query

JavaScript中解析URL中的哈希查询参数（hash query）可以使用以下方法：
```js
// 获取URL中的哈希查询参数
const hashParams = new URLSearchParams(window.location.hash.substring(1));

// 获取某个参数的值
const paramValue = hashParams.get('paramName');

// 遍历所有参数
hashParams.forEach(function(value, key) {
  console.log(key, value);
});

```