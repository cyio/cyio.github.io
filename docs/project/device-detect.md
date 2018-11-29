`yarn add mobile-detect`
```js
import MobileDetect from 'mobile-detect'
let md = new MobileDetect(window.navigator.userAgent)

  isMobile () {
    return md.mobile()
  },
  isSupportWebShare () {
    return md.is('AndroidOS') && md.version('Chrome') >= 61
  }
```
[mobile-detect-demo/main.js at master · zeno/mobile-detect-demo](https://github.com/zeno/mobile-detect-demo/blob/master/app/scripts/main.js)

```js
function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

if (!IsPC()) {
  window.location.href = 'http://m.bishijie.com/kuaixun/?a=' + Date.parse(new Date());
}
```
