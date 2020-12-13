```js
function getTextFromHTMl(html) {
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(html, 'text/html');
  return htmlDoc.body.innerText
}
```
