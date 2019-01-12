# date-fns

```js
import { format } from 'date-fns'
import zhCn from 'date-fns/locale/zh_cn'

format(ms, 'YYYY年MM月DD日')
// 星期几
format(ms, 'dddd', { locale: zhCn })
format(ms, 'hh:mm')

import dayjs from 'dayjs'
Vue.prototype.dayjs = dayjs
```
