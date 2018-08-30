## axios
```js
import axios from 'axios';

export const HTTP = axios.create({
	baseURL: `http://jsonplaceholder.typicode.com/`,
	headers: {
		Authorization: 'Bearer {token}'
	}
})

// use
import {HTTP} from './http-common';
```

* 请求图片
直接在浏览器打开会提示下载，估计是要返回创建新的 stream
[javascript - Download an image using Axios and convert it to base64 - Stack Overflow](https://stackoverflow.com/questions/41846669/download-an-image-using-axios-and-convert-it-to-base64)
```
// ctx.body = request(options)
ctx.body = await axios({
	method: 'get',
	url: imgUrl,
	headers: {
		Referer: referrer,
	},
	responseType: 'stream',
}).then(response => {
	return response.data
})
```

## superagent
[[翻译] SuperAgent 中文使用指南(v3.8.0) · Issue #13 · zhaoqize/blog](https://github.com/zhaoqize/blog/issues/13)

* 支持旧的回调方式，用 end
* 支持 retry

与 axios 写法对比
```
// axios
let data = res.data
console.log(e.response.status, e.response.config)

// superagent
let data = res.body
console.log()
const [foo, bar] = await Promise.all([
  superagent.get('foo'),
  superagent.get('bar'),
]);
```

Promise 化
```
return new Promise((resolve, reject) => {
  superagent
    .post(params.url)
    .auth(params.auth.username, params.auth.password)
    .send(params.payload)
    .set('Accept', 'application/json')
    .end((error, res) => {
        error ? reject(error) : resolve(res);
    });
});
```

批量 Promise 化
```
import request from "superagent";

const withPromiseCallback = (resolve, reject) => (error, response) => {
  if (error) {
    reject({error});
  } else {
    resolve(response.body);
  }
};

export const fetchSuggestions = (search) => new Promise((resolve, reject) =>
 request.
    get("/api/auth/get-companies/0/50").
    type("form").
    set("Accept", "application/json").
    query({
      search,
    }).
    end(withPromiseCallback(resolve, reject))
);

export const fetchInitialInformation = () => new Promise((resolve, reject) =>
  request.
    get("/api/auth/check").
    set("Accept", "application/json").
    end(withPromiseCallback(resolve, reject))
);
```
