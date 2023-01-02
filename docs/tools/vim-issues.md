# VIM-ISSUES
[[toc]]

## ssh 上复制

无法与图形端系统交互
cat / less 打印到终端
不过，用本地 vim 编辑更好？

```sh
:e scp://remoteuser@server.tld//path/to/document
vim scp://oaker@vserver.oaker.bid:29979//home/oaker/tmp.js
```

## python 支持

安装 vim-nox

## set commit editor

`$ git config core.editor "vim"`

## 编码转换，不同系统间的文件，常意外报错

`:w ++ff=unix`

## 提示恢复时，删除交换文件

可能是在别的地方也在打开，关闭只留一个
复制给出的路径，`rm`

## 与系统剪贴板交互

查看是否支持
`$ vim --version | grep clipboard` +号表示支持，-号相反
如果不支持，安装
`$ sudo apt-get install vim-gnome`

## 输入法切换

中文模式编辑完成后，`shift - esc or jk`
英文模式编辑完成后，`esc or jk`

## 不使用当前配置启动(标准 vim)

`$ vim -u none -n`

`<cr>`指的是回车，不是`<c-r>`
`cw .` 有时比正则要快
cgn
s/foo/bar/g
s/foo/bar/gc (confirm before replace)
d} 删除直到空行

## 缓冲区 buffers （对应浏览器中的标签页）

- `:ls` 列出缓冲区文件列表
- `:b keyword<TAB>` 关键字 tab 补全/或编号，快速定位打开缓冲区中的文件
- `:sb keyword<TAB>` 分屏打开文件，保持了固定顺序，也可`sbfirst`
- `bn/bp` 上一个/下一个
- ` <C-^>``:e # ` 来回切换，然后切换回原目录`:cd -`
- `leader cd` 切换工作目录为当前文件所在目录
- `:b some-unique-part-of-the-file-path` 在文件间快速跳转

## 忽略已记录文件

`$ git update-index --assume-unchanged <path>`
重置
`$ git update-index --no-assume-unchanged`

## viminfo: 缺少对应的 '>' in line:

    rm ~/.viminfo

## 缩进不一致

在不同环境，tab 制表键设置不同，导致显示差异
统一转换成空格，expandtab
输入 tab，`ctrl-v<tab>`
当前文件转换，:retab
[converting tabs to spaces | vim tips wiki | fandom powered by wikia](http://vim.wikia.com/wiki/converting_tabs_to_spaces)

## 缩进指导

- 水平缩进显示 `:set list`，大短杠为 Tab，小短杠为空格，
- 垂直对齐显示 `<leader> il`

## 重载当前文件

`:e`

## 移除换行无用字符^m

`:%s/\r$//g`

## 提示不能修改 Cannot make changes, 'Modifiable' is off

set ma (modifiable) / set noma

## 查看当前文件路径

`echo @%`

## 批量替换

```
:arg *.cpp	All *.cpp files in current directory.
:argadd *.h	And all *.h files.
:arg	Optional: Display the current arglist.
:argdo %s/pattern/replace/ge | update	Search and replace in all files in arglist.

:argadd **/*.h	All *.h files in and below current directory
```

## nodejs 调试

1. `<leader>e` 执行 AsyncRun
2. `:cw` 打开 QuickFix 窗口

## vim-vue 插件卡顿

原因分析：并不仅仅是多语言语法高亮问题导致
[I can't fix the slowness. · Issue #95 · posva/vim-vue](https://github.com/posva/vim-vue/issues/95#issuecomment-374108025)

- 关闭相对行数 `set nornu`
- 使用 vim-vue 性能优化分支

### 如何分析语法时间开销

```
:syntime on

:syntime report

then remove the offending patterns
```

## 只能运行 zsh 非交互命令

比如 alias.sh 中的运行不了

[How to run zsh aliased command from vim command mode? - Vi and Vim Stack Exchange](https://vi.stackexchange.com/questions/16186/how-to-run-zsh-aliased-command-from-vim-command-mode/16197)

## 项目配置

`set exrc`
在项目根目录，创建`.exrc`，使用这个文件名可兼容 vim 和 nvim

## color theme
```
" Plug 'joshdick/onedark.vim' " only dark
" Plug 'tomasiser/vim-code-dark' " like vscode dark
" Plug 'rakr/vim-one' " not work?
```

[256 Terminal colors and their 24bit equivalent (or similar)](http://www.calmar.ws/vim/256-xterm-24bit-rgb-color-chart.html)
[papercolor-theme/PaperColor.vim at master · NLKNguyen/papercolor-theme](https://github.com/NLKNguyen/papercolor-theme/blob/master/colors/PaperColor.vim)

## [用 Vim 编辑 Markdown 时直接粘贴图片 - 知乎](https://zhuanlan.zhihu.com/p/138060559)

## 模式

- 多用 buffers，替代 Tab/Window

## 不保存退出

1. 按键太难记
2. kill tmux window，reopen

## 替换转义
用 # 代替 / 这样避免路径中的 / 需要转义