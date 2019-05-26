第一阶段
主要用到：getAttribute, setAttribute

```js
function showPic(whichpic) {
  var source = whichpic.getAttribute('href')
  var placeholder = document.getElementById('placeholder')
  placeholder.setAttribute('src', source)
  var text = whichpic.getAttribute('title')
  // var body = document.getElementsByTagName("body")[0];
  var body = document.body
  var description = document.getElementById('description')
  description.firstChild.nodeValue = text
}
```

第二阶段
兼容性检查，动态创建 placeholder，在 HTML 中只保留“挂钩”，也就是列表节点

```js
function preparePlaceholder() {
  if (!document.createElement) return false
  if (!document.createTextNode) return false
  if (!document.getElementById) return false
  if (!document.getElementById('images-list')) return false
  var placeholder = document.createElement('img')
  placeholder.setAttribute('id', 'placeholder')
  placeholder.setAttribute('src', 'http://placeholder.qiniudn.com/400x350')
  placeholder.setAttribute('alt', 'my image gallery')
  var description = document.createElement('p')
  description.setAttribute('id', 'description')
  var desctext = document.createTextNode('Choose an image')
  description.appendChild(desctext)
  var imglist = document.getElementById('images-list')
  imglist.parentNode.insertBefore(placeholder, imglist)
  imglist.parentNode.insertBefore(description, imglist)
}
```

定制函数

```js
// 队列事件添加
function addLoadEvent(func) {
  var oldonload = window.onload
  if (typeof window.onload != 'function') {
    window.onload = func
  } else {
    window.onload = function() {
      oldonload()
      func()
    }
  }
}

// 向后插入
function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement)
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling)
  }
}
```
