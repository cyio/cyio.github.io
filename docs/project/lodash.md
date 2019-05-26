# lodash

```js
import { throttle } from 'lodash-es';
//or import throttle from 'lodash.throttle'

  methods: {
    throttledMethod: _.throttle(() => {
      console.log('I get fired every two seconds!')
    }, 2000)
  }
```
