
## query


URLSearchParams IE 不支持
```js
let d = new URLSearchParams('?id=1')
// var params = new URLSearchParams(window.location.search);

d.get('id')
```

## hash query

```js
let hash = `#new-hash?id=1`
let reg = /\?.*/
let res = reg.exec(hash)
res = res[0]
// '?id=1'

// split
let url = `#new-hash?id=1`
const query = url.split('?')[1];
const queryParams = qs.parse(query);
console.log(queryParams.id);
```

## qs
```js
const queryParams = qs.parse(query);
console.log(queryParams.id);
```