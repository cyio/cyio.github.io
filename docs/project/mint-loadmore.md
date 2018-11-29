在main.js中引入
```js
import 'mint-loadmore/lib/style.css'
import Loadmore from 'mint-loadmore'
Vue.component('loadmore', Loadmore)
```

markup
```pug
loadmore(:bottom-method='loadBottom', :bottom-all-loaded='allLoaded')
```

data/props
```
allLoaded : false
```

methods
```js
loadBottom () {}
```

加载完后
```js
function (id) 
...
this.allLoaded = true
this.$broadcast('onBottomLoaded', id)
```