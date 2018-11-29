* api 失效导致困扰
* 获取网站 cookie
```js
// 检测是否登陆
chrome.cookies.get({
	url: 'http://music.163.com',
	name: 'MUSIC_U'
	}, (c) => {
		if (c!=null){
			// 已经登录
			});
		} else {
		}
	});

//获取通讯key，后端要用
chrome.cookies.get({
	url: netease.domain,
	name: '__csrf'
}, function (cookie) {
	if (cookie !== null) {
		netease.lckey = cookie.value;
	}
	Settings.setValue("lckey",netease.lckey);
});
```

