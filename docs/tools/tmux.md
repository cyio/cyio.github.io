# Tmux

[tmux(1) - OpenBSD manual pages](http://man.openbsd.org/OpenBSD-current/man1/tmux.1)
> server <=> client => session => pane => window

## cheatsheet
| 功能 | 按键 |
| --- | --- |
| 前缀键 | ctrl+k |
| 新建窗口 | c |
| 水平分割 | "（两个点） |
| 垂直分割 | %（两个圈） |
| 切换窗口 | o |
| 调换窗口 | ctrl+o |
| 调整大小 | ctrl+方向键 |
| 列出所有窗口 | w |
| 关闭当前窗口 | & |
| 关闭 pane | x |
| 显示 pane 编号 | q |
| 切换 pane | ; |
| 查找 window | f |
| last window | ctrl+l |
| 独立为新窗口 | ! |
| 列出所有 session | s |
| 切换 session | () |
| 放大当前窗口/恢复 | z |

前缀键改为 `ctrl+k`，进入命令模式输入：`set -g prefix ^k`
[tmux shortcuts & cheatsheet](https://gist.github.com/MohamedAlaa/2961058)

## 滚屏模式
默认状态下不能滚屏，进入：前缀键 + [ 
滚动：vi按键风络或上下方向键或PgUp/PgDown
复制：`prefix -> [ -> v -> y -> q`
粘贴：`prefix -> ]`

## 会话
```
# 创建会话
tmux new -s [NAME]
# 挂载会话
tmux attach
# 分离会话
tmux detach
# 列出会话
tmux ls
# 杀掉会话
tmux kill-session -t [ID]
# 保存会话
`prefix ctrl s`
# 恢复会话
`prefix ctrl r`
```

## 大屏访问小屏时，修正窗口尺寸
```
在大屏的 tmux 中
prefix - D
detach 掉时间较旧的

或者
tmux list-client
tmux detach-client -s 0

或者 detach 掉除当前外的所有
tmux detach -a
```

## 插件
安装插件管理器
```
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
tmux source ~/.tmux.conf
```

在配置中写入插件地址，然后在Tmux中按下
`prefix - I`，安装,
`prefix - U`，更新,
`prefix - alt - u`，卸载，注意这里是小写u,

[Tmux Resurrect & Continuum: 持久保存 Tmux 会话 · LinuxTOY](https://linuxtoy.org/archives/tmux-resurrect-and-continuum.html)

快速创建 session `prefix - C`
杀掉建 session `prefix - X`
