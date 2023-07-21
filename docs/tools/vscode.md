# VSCode

- `cmd-space @` 或 `cmd-shift o`智能感知，symboal jump 查找函数有用，比如定位 methods 勾子
- `cmd + p` 输入 # 进入工作目录符号搜索模式，后面输入你需要搜索的函数名，输入 @ 只搜索当前 tab
- `c-k c-m` keybindding map
- `c-k c-o` fold all `c-k c-j` unfold all
- json to api
- `>` 命令，如切换 terminal
- 后退/前进 `^-` / `^shift-`   控制类，所以 prefix 是 ctrl
- http 
[VSCode 小鸡汤 第01期 - REST Client 简单好用的接口测试辅助工具 - - SegmentFault 思否](https://segmentfault.com/a/1190000018091951)
保存位置？不是很方便

– `^-` 光标点跳回

## vscode terminal

- 窗口最大化
- 支持 GPU 加速
- 支持光标定位
- 支持拆分
- 支持配置任务
- 切换窗口  `shift-cmd-[`
- 替换当前 code，会提示保存
```
code -g filepath // go to some file 在当前窗口打开
code -r .
```
- 不支持切换 split window，用 tmux
- 状态保持，比如常用目录，增加 alias 快速进入

## issues

[解决VScode 与 Linux Rime 中州韵输入法 CTRL+~ 热键冲突_Spaceack的博客-CSDN博客](https://blog.csdn.net/a541972321/article/details/112864684)

## git

源代码控制”图标（Ctrl + Shift + G）

## debugger

1. 标记断点，比如函数 return 位置（可替代 console.log）
2. F5 开始，shift-F5 停止，ctrl-F5 只运行

F5有些慢，推荐 watch 自动运行
npx nodemon tmp.js

debug console 无法展开对象

```sh
// node
file="~/Projects/Personal/learn/tmp.js" && code "$file" && npx nodemon --delay 0ms "$file"


// deno fast & json fold
// 问题：deno 不能识别 ~ 目录？
file="~/Projects/Personal/learn/tmp.ts" && code "$file" && deno run --watch "$file"

// 优化版，使用临时目录，自动创建文件，有意义的 alias
alias play='file="/tmp/play.ts" && touch "$file" && code "$file" && deno run --watch "$file"'
```

## ssh

好用，执行命令 connect host，然后就像本地一样，可访问文件目录，也可用终端跳转

## trouble shooting

终端无法启动
搜 - open log - select window type
[Terminal Issues · microsoft/vscode Wiki](https://github.com/microsoft/vscode/wiki/Terminal-Issues#enabling-trace-logging)