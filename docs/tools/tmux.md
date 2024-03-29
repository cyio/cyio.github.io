# Tmux
[toc]

[tmux(1) - OpenBSD manual pages](http://man.openbsd.org/OpenBSD-current/man1/tmux.1)

> server <=> client => session => pane => window

## cheatsheet

| 功能              | 按键        |
| ----------------- | ----------- |
| 前缀键            | ctrl+k      |
| 新建窗口/会话     | c/shift-c   |
| 水平分割          | "（两个点） |
| 垂直分割          | %（两个圈） |
| 切换窗口          | o           |
| 调换窗口          | ctrl+o      |
| 调整大小          | ctrl+方向键 |
| 列出所有窗口      | w           |
| 关闭当前窗口      | &           |
| 关闭 pane         | x           |
| 显示 pane 编号    | q           |
| 切换 pane         | ;           |
| 查找 window       | f           |
| last window       | ctrl+l      |
| 独立为新窗口      | !           |
| 列出所有 session  | s           |
| 切换 session      | ()          |
| 放大当前窗口/恢复 | z           |

前缀键改为 `ctrl+k`，进入命令模式输入：`set -g prefix ^k`
[tmux shortcuts & cheatsheet](https://gist.github.com/MohamedAlaa/2961058)

## 滚屏模式

默认状态下不能滚屏，进入：前缀键 + [
滚动：vi 按键风络或上下方向键或 PgUp/PgDown
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

## 插件

安装插件管理器

```
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
tmux source ~/.tmux.conf
```

在配置中写入插件地址，然后在 Tmux 中按下
`prefix - I`，安装,
`prefix - U`，更新,
`prefix - alt - u`，卸载，注意这里是小写 u,

[Tmux Resurrect & Continuum: 持久保存 Tmux 会话 · LinuxTOY](https://linuxtoy.org/archives/tmux-resurrect-and-continuum.html)

快速创建 session `prefix - C`
杀掉建 session `prefix - X`

## issues

### 大屏访问小屏时，修正窗口尺寸

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

### kill session

1. 切换到窗口列表
2. 焦点移动到要杀掉的 session
3. 依次按下`q` `y` `enter`

### 窗口意外退出

是因为触发终端退出

[shell - How can I prevent tmux exiting with Ctrl-d? - Super User](https://superuser.com/questions/479600/how-can-i-prevent-tmux-exiting-with-ctrl-d)

### debug

`tmux -v` 启动，当前目录生成日志

