- 语法检查，运行测试
  `nginx -t -c /etc/nginx/nginx.conf`

- 启动或重启时，如果 nginx 进程已经存在，会报错
  手动 kill 掉

```
ps -ef | grep nginx
或查看活跃的网络服务
netstat -tulpn

kill -2 [PID]
```

- 添加开机启动
  [Linux(CentOS)下设置 nginx 开机自动启动和 chkconfig 管理 - 书生程序员](http://imshusheng.com/linux/225.html)

- 安装可能与 apache 有冲突，先停掉

## 反向代理和负载均衡

[WebSockets Over SSL With Node.js and Nginx – Ex Ratione](https://www.exratione.com/2013/06/websockets-over-ssl-with-nodejs-and-nginx/)
[Using NGINX as a WebSocket Proxy](https://www.nginx.com/blog/websocket-nginx/)

## 参考配置

[https://github.com/nicokaiser/nginx-websocket-proxy](https://gist.github.com/cyio/59b2c04d31af269263fac1cfe6990447)

## mac

- 可用 proxy，来避免使用指定文件夹位置
- 需要权限运行`sudo nginx`
- `vim /usr/local/etc/nginx/nginx.conf`
- `/usr/local/var/www/index.html`
    修改默认位置
    ```
    server {
      #....
      root /home/user/public_html/website.com/public/;

      location / {
    ```

