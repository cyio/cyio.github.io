```js

function getUrlRelativePath(url) {
  const arrUrl = url.split('//');
  const start = arrUrl[1].indexOf('/');
  let relUrl = arrUrl[1].substring(start);// stop省略，截取从start开始到结尾的所有字符
  if (relUrl.indexOf('?') !== -1) {
    // eslint-disable-next-line prefer-destructuring
    relUrl = relUrl.split('?')[0];
  }
  return relUrl;
}
```
