* 键盘弹出可能有延时，因此要延时执行或循环执行
* 不要用resize事件，ios不支持

```js
// test
const device = getDeviceInfo()
if (device.android) {
  console.log('before scroll, bodyscrollHeight: ', document.body.scrollHeight)
    setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight)
        console.log('after scroll', document.body.scrollHeight)
        }, 200)
  // if (this.$refs.submitBtn) {
  // this.$refs.submitBtn.scrollIntoView()
  // console.log('submit button scroll into view')
  // }
}

// 1. 最终代码
// 只在有问题的输入框上应用，不要和原生滚动重叠
fixLoginInput () {
  const device = getDeviceInfo()
  if (device.android) {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight)
    }, 200)
  }
}

// 使用
input.text(@focus="fixLoginInput")

// 2. intoview
var inputTextBox = document.getElementById('input-text-box');
setInterval(function(){
  inputTextBox.scrollIntoView(false); // true 为对齐视口上边延，false 为下边
}, 200)

// 获取页面滚动位置 
var viewTop = document.body.scrollTop, // 视口顶部
    viewBottom = viewTop + window.innerHeight; // 视口底部

// 获取元素在页面的位置
var elementTop = getElementPosition(element).top, // 元素顶部位置
    elementBottom = elementTop + element.clientHeight; // 元素底部位置

function getElementPosition (elem) {
    var defaultRect = {top: 0, left: 0};
    var rect = (elem.getBoundingClientRect && elem.getBoundingClientRect()) || defaultRect;
    return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
    }
}
```
