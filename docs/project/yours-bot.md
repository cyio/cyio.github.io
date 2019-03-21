## 规则

* 不写，-1，走默认 1 票，适合广撒网，不考虑内容质量
* 写了，0，完全按字数，不足 500 字不投
* 写了，1+，有基数，至少一票

## config
[config - npm](https://www.npmjs.com/package/config)
```js
// config/xx.json

const config = require('config').get('xx.key')

let login = config.get('login')
```

## db
[nedb-promise - npm](https://www.npmjs.com/package/nedb-promise)
```js
const datastore = require('nedb-promise')
```

## debug
[debug - npm](https://www.npmjs.com/package/debug)
