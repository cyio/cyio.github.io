
# 运维

## 常用命令

```sh

uptime/last/htop # 上线时间/最后登入

ll/ls -l # 对比查看权限

chown group:owner file # 修改权限

lsb_release -a # 查看系统信息，mac 下是 sw_vers

uname -a # 查看软硬件信息更全面

df -h # 磁盘占用信息

cat /proc/cpuinfo # CPU信息

free -m # 内存信息

ifconfig # 网络信息
ifconfig|grep 192 # 查看本机局域网IP

nmap -sP 192.168.1.1-255

# 测网速
wget -O - https://raw.github.com/sivel/speedtest-cli/master/speedtest.py | python

sudo passwd # root 用户改密码
sudo passwd USERNAME # 普通用户，如果直接运行 passwd 命令会限制密码长度

# 查看端口占用 (list open files)
  lsof [-P] -i [tcp]:3000 [| xargs kill]
  杀掉，3 表示退出，避免残留
  kill [-3] pid

tail -5 filename # 查看最后5行

find [path] -type [d/f] -name 'react*' [-ls] # 以react开头 [文件夹/文件] [显示详细信息]

find . -name "*.odex" | xargs rm -f # 删除所有子目录下的特定文件用

grep -Rli "500" # 打印包含指定字符串的文件名, 参数分别表示，递归，列出文件名，忽略大小写

grep -rh '500' --include 'access.log*' # 特定文件名包含字符串，递归，不显示文件名

grep -P '(\d+\.){3}\d+' -hor --include 'access.log*' # 特定文件内容匹配打印出IP地址，-o 只打印匹配部分，否则会打印行其它内容

zip -r myapp.zip myapp # 压缩文件夹

curl --socks5 localhost:1086 httpbin.org/ip # 验证代理是否生效

pbcopy < ~/.ssh/id_rsa.pub # mac 下快速复制 ssh 公钥

pbpaste | base64 | pbcopy # mac 下将剪贴板中的内容转换为 base64

# 下载网站
wget -r -np -k http://www.ime.usp.br/~coelho/mac0122-2013/ep2/esqueleto/

users # 查看有哪些用户
id -g -n tom # 查看 tom 所在用户组

ps xf / -ef # 查看用户或所有进程，htop 默认会显示所有进程，按 H 只显示用户进程

ps -ef|grep mosh # 查找进程

```

## 如何将命令转入后台

1. 在命令后加一个 & 符号，运行需按 Ctrl - Z 结束命令对当前终端的占用
2. 已经运行的命令，直接 Ctrl - Z，然后输入 bg 回车


    保持进程（同时转入后台）
    nohup node server.js$

## Linux 下修改用户名

[permissions - How do I change my username? - Ask Ubuntu](http://askubuntu.com/questions/34074/how-do-i-change-my-username)

根据第二个答案操作，注意点：

- 如果老用户有占用进程，要杀掉
- 原答说操作完就可以新用户登陆了，但我这里登陆界面的用户名并没有变，重启解决

接着，桌面启动失败，软件正常
此时，切换到 X 下，用`startx`是可以正常启动桌面
然后，发现 npm 命令的权限不正确，尝试如下命令修复权限

```sh
sudo chown -R $USER:$GROUP ~/.npm
npm cache clean
sudo npm update
```

接着，发现 zsh 配置有写包含老用户名的绝对路径，均改为相对 home 路径
到这里，差不多就能正常启动桌面了。

## centos 6 和 7 防火墙不一样

测试端口是否打开 `telnet ip port`
[不可不知的 centos7 firewalld 防火墙的使用 - 飞翔的大象 - SegmentFault](https://segmentfault.com/a/1190000003931716)

## 服务器站点目录权限

需求:

- web 访问和写入
- bower 安装权限避免用 root
- 自己编辑避免 root
- 能普通用户处理，就不用 root
- 想想平时自己在本地是怎么处理的，一样，新建用户是必须的
  [webserver - How to avoid using sudo when working in /var/www? - Ask Ubuntu](https://askubuntu.com/questions/46331/how-to-avoid-using-sudo-when-working-in-var-www)

```sh
sudo mkdir html
# 将自己加入 www-data 用户组
sudo gpasswd -a "$USER" www-data
sudo chown -R "$USER":www-data /var/www
```

## 迁移检查清单

- 创建新用户，设置公钥登录
- 在普通用户下安装环境
- 设置 www 权限 `sudo chown -R "$USER":www-data /var/www`，如果 webserver 要写入，要把用户也改为`www-data`
  - 注意，centos 下没有 www-data，对应的是 apache，`chown -R apache:apache uploadfile/`
- 克隆项目
- 安装前端环境，npm 全局需要的包不多，直接 sudo 装

```sh
sudo npm install -g pm2
```

- 是否有静态资源如图片需要迁移
- 是否需要配置临时域名，以便客户测试

## 新建用户

```sh
apt install sudo

# 无法直接修改
chmod u+w /etc/sudoers
/etc/sudoers
chmod u-w /etc/sudoers

tar -xvzf community_images.tar.gz

$ pm2 save
$ chown -R $USER:$USER ~/.pm2
$ pkill -f PM2
$ pm2 resurrect

# pm2 能运行带 sudo 权限的进程吗？
# 指定用户 -u root
# 要求输入密码 sudo -S
# 运行 kcp ，无日志输出，不行
# use -- to start entering options for the launched app
$ pm2 start npm -- start
```

## npm 权限

直接全局安装 pm2，会要求 sudo 权限
先改 prefix，设置好 dotfiles 后，`npm config set prefix '~/.npm-packages'`

## 添加额外 IP

1. 查看以太网设备名称 `$ ip link show`，下而的命令和配置都要用到
2. 添加配置 `$ sudo vim /etc/network/interfaces`

```sh
auto ens3:0
iface ens3:0 inet static
address 45.77.93.109
netmask 255.255.255.255
```

3. 启用 `$ sudo ifup ens3:0`

## scp 远程拷贝

```sh
# 注意指定了服务器端口
# 有时目录没有写入权限或怕写错位置，可以先复制到 /tmp，再进一步操作
scp -r -P 29979 ./wp-content/uploads xx@xx:/tmp/
```

## 线上编译失败

内存不足，3-4 百兆不一定够，只能 scp 上传
yarn 安装更省内存

## certbot

用法有变化

- centos
  [Installing Python 2.7 on CentOS 6.5](https://gist.github.com/dalegaspi/dec44117fa5e7597a559)
- 提示版本收集不满足，pip 走的是 aliyun 代理
  `ping pypi.python.org`

  > 这个只是阿里云的镜像没同步完整 pypi 仓库而已，你换成清华大学的镜像站就 OK 了，或者删掉 pip.conf 中的 mirror 配置，直接走官方仓库。那个报错是说找不到指定的版本而已

- UFW 影响 renew

```
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

## travis-cli

debug 时要依先后顺序挨个点开看排除，跟命令行是一个道理

## sudo 权限运行脚本

```
sudo crontab -e
```

## 无法登陆时

1. 开启密码登陆 2. 修改端口
   找到 passwordAuthentication 项，修改成 yes

```
vim /etc/ssh/sshd_config
service sshd restart
```
