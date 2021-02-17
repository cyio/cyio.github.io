# lodash

## 源码

node_modules/lodash/lodash.js

自执行
  lodash 对象

`import { xx } from lodash` 引入大对象、解构
`import throttle from lodash/throttle` 引入某个文件

```js
import { throttle } from 'lodash-es';
//or import throttle from 'lodash.throttle'

  methods: {
    throttledMethod: _.throttle(() => {
      console.log('I get fired every two seconds!')
    }, 2000)
  }
```

## throttle
throttle 包装了 debounce，仅设置不同，是否首次执行
