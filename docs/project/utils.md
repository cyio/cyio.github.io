* 类型：私有方法，需导出的

```dir
utils/api.js
utils/request.js
utils/index.js
```
```js
// utils/api.js
export default api

// utils/index.js
export { default as api } from './api'

// my js
import { api } from '@/utils'
```
