
## copy

```sh
# mac 下快速复制 ssh 公钥
pbcopy < ~/.ssh/id_rsa.pub 
```

## 安全

不同电脑要用不同的 Key ，这样如果某个电脑不再使用，只要将对应的 key 删除即可

## debug

`ssh -vv "your githost"`为什么要用这个，因为参数`-T`，即使返回成功，配置也可能不行（push 时还会问账密）

> 端口默认是 22，如果是公司，可能不一样，需要 config 指定

## remote

[[server/vps-init#SSH/Mosh 登陆]]