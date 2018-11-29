## 整体或按需引入
```js
// 整体引入
-import MintUI from 'mint-ui'
-import 'mint-ui/lib/style.css'
-Vue.use(MintUI)
-Vue.prototype.Toast = MintUI.Toast

// 按需引入，包括样式
+import {Toast} from 'mint-ui'
+import 'mint-ui/lib/toast/style.css'
+Vue.prototype.Toast = Toast
```

## 遇到的问题

* toast显示不出来 => z-index
* lazyload插件冲突 => 局部引入
