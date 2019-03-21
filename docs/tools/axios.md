# Axios

```js
axios.defaults.validateStatus = function (status) {
  // console.log('store', status)
  return status >= 200 && status < 600
}
```
