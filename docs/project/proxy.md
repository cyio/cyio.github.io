# proxy
[[toc]]
## browsersync
```sh
$ browser-sync start --proxy 'localhost:1234' --files 'app'
```
[命令行使用 · GitBook](https://elemefe.github.io/sip/browsersync/command-line.html)

## whistle
[安装启动 · GitBook](http://wproxy.org/whistle/install.html)

android 有的应用如 youtube/playstore 不走系统代理

[有些 App 不能通过代理访问，这种情况有没有办法能抓包？ · Issue #63 · avwo/whistle](https://github.com/avwo/whistle/issues/63)
[socks · GitBook](http://wproxy.org/whistle/rules/socks.html)

[whistle/jsAppend.md at 5599fbc1fb71a49fbcd1e39723a2b2011a923fec · avwo/whistle](https://github.com/avwo/whistle/blob/5599fbc1fb71a49fbcd1e39723a2b2011a923fec/docs/zh/rules/jsAppend.md)
[使用 Whistle 作为你的 Web 调试工具吧 - 知乎](https://zhuanlan.zhihu.com/p/79037633)

> 通过whistle配置的host是不会缓存
[disable · GitBook](https://wproxy.org/whistle/rules/disable.html)

[科学的 Web 调试代理实践 | Hi, DIYgod](https://diygod.me/web-debugging-proxy/)

- 修改响应头
- 修改响应内容（不需要另外指定 key）

```
*/mock file://({"code":12345,"message":"some_logic_error"}) # 模拟业务逻辑异常

*/mock statusCode://502 # 模拟 HTTP 状态码异常

# 本地静态 server
# 规则：自定义域名或URL<空格>本地目录路径 （以下示例请替换为自己本地的写法）
my.demo/bw/ file:///Users/kaiye/Projects/Demo/002-black-white/
```
[使用whistle模拟cgi接口异常：错误码、502、慢网速、超时 - 猫哥_kaiye - 博客园](https://www.cnblogs.com/kaiye/p/10137592.html)
[使用 whistle 替代本地 nginx/webpack 服务 - 猫哥_kaiye - 博客园](https://www.cnblogs.com/kaiye/p/9628692.html)
