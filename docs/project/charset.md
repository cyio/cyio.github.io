```js
import iconv from 'iconv-lite'

axios.interceptors.response.use(function (response) {
	var ctype = response.headers["content-type"];
	response.data = ctype.includes("charset=GB2312") ?
	  // TODO: need buffer
		iconv.decode(response.data, 'gb2312') :
		iconv.decode(response.data, 'utf-8');
	return response;
})
```

```js
$.get({
	url: site.url,
	contentType: 'text/html; charset=UTF-8',
}, (res) => {}
```

```js
$.ajaxSetup({
  beforeSend: function(xhr) {
    xhr.overrideMimeType('text/html; charset=UTF-8')
  },
})
```
