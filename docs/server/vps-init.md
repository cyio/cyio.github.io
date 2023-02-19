
记录拿到一台新 VPS 新机器要做的事情

## 登录
root 登录，需要 ip/port/root psd

添加用户
`adduser newuser`

切换新用户
`su - newuser`

默认有su，但是没有sudo
root下安装sudo，才能使用配置
`apt install sudo`
为新用户添加管理员权限
```sh
vi /etc/sudoers
```
内容修改为
```
root ALL=(ALL) ALL
youruser ALL=(ALL) ALL
```

mac 本机 `brew install ssh-copy-id`
`ssh-copy-id -i ~/.ssh/id_rsa.pub -p 29979 YourName@ip`

`vi etc/ssh/sshd_config`
编辑配置， 禁用密码登陆
`root/user psd: 2 * normal psd`

配置ssh，可能需要创建.ssh目录
私钥也需要拷贝到服务器
vim ~/.ssh/id_rsa
ssh-add ~/.ssh/id_rsa
chmod 400 ~/.ssh/id_rsa

## 裸系统开始要安装的包

```shell
sudo apt install git ufw mosh curl tmux

" nodejs6(include npm

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## 语言设置

```shell
sudo vim /etc/locale.gen
" 将 zh_CN.UTF-8 前的注释去掉

mosh-server 可能需要语言支持
sudo locale-gen zh_CN.UTF-8
```

## 简易防火墙设置

```shell
sudo ufw allow OpenSSH
sudo ufw allow [ssh-port]
” for mosh server
sudo ufw allow 60000:61000/udp

" start
sudo ufw enable

" check
sudo ufw status
sudo ufw app list
```

新开服务，都要把端口加入白名单
如果不加的话，也可以通过这个服务器搭的 ss 访问，也就是只有自己能访问



> 这是因为glibc设置问题，在/etc/locale.gen中去掉zh_CN.UTF-8的注释，再运行locale-gen即可。

```
sudo vim /etc/locale.gen
sudo locale-gen
```