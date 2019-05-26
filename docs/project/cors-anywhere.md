# cors-anywhere

```
git clone https://github.com/Rob--W/cors-anywhere.git
```

## 指定端口运行
```
PORT=8099 node server
```

## 写到 package.json 中固化下来
```
"start": "PORT=8099 node server",
```

## pm2
```
pm2 start npm --watch --name cors-anywhere -- run start
```

## server.js 注释掉以下
```
// requireHeader: ['origin', 'x-requested-with'],
```

## nginx config

```config
server {

	listen 80;
	server_name cors.oaker.bid;

	location / {

		if ($request_method = 'OPTIONS') {
			return 204;
		}

		proxy_set_header X-Forwarded-For $remote_addr;
		proxy_set_header Host $http_host;
		proxy_pass "http://127.0.0.1:8099";
	}

	listen 443 ssl; # managed by Certbot
	ssl_certificate /etc/letsencrypt/live/cors.oaker.bid/fullchain.pem; # managed by Certbot
	ssl_certificate_key /etc/letsencrypt/live/cors.oaker.bid/privkey.pem; # managed by Certbot
	include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
	ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
```
