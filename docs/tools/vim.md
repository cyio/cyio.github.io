# Vim

> - 编辑器之争，出一些新编辑器，如 vscode 看到很多人安利，其实你不要动，那个是给大多数不会 vim 的开发人员使用的。
> - 在各种编辑器里尝试 vim 插件，最后都会回来，为什么？并不是因为 vim 自身，而是因为 vim 作为整个开发环境的一个组件，vim 与 tmux 等工具组合，窗口多开和切换以便执行多任务快速方便，而非割裂的应用窗口
> - vim 是人生最后一个编辑器，不要在其他编辑器上花时间，做选择，纠结，那些花哨的功能带来的效率提升，跟 vim 其实是没法比的。vim 与 tmux 等组成的工具链，是无敌的。
> - vim 的口号是用思维的速度编码
> - 正确使用 vim 的关键就是使得自己能够快速的离开插入模式，然后在常用模式下进行移动。

## cheatsheet

| 功能                | 按键      |
| ------------------- | --------- |
| 设置文件类型为 JS   | leader pj |
| 设置文件类型为 none | leader pn |
| 设置文件类型为 vue  | leader pv |

## 基础

### 玩转帮助

[How to find vimdoc help : vim](https://www.reddit.com/r/vim/comments/2eb82s/how_to_find_vimdoc_help/)
- `:help help-summary`
- `:h usr_01.txt`
- `:` cmd/ex `:help :help`
- `'` options `:help 'incsearch`
- `i_` insert mode `:help i_CTRL-[`
- `v_` visual mode `:help v_CTRL-]`
- no prefix for normal mode commands

### 使用 vim 的出厂配置

`vim -u NONE -N`

### 强制保存

`:w !sudo tee %`

### 映射 map

`n/v/i`

始终添加 nore，禁用递归 如，`inoremap clg console.log`

### 快速 source .vimrc

`:so %` 注意只在 VIM 中运行，不需要在 SHELL 中运行

### 退出插入模式，vim 自带按键

`^[`

### 复制粘贴

- 支持系统剪贴板 `sudo apt-get install vim-gnome`
- `"`引用寄存器动作，同时也是默认使用的
- 无名寄存器 `""`
- 复制专用寄存器 `"0`
- 列出所有寄存器 `:reg`
- 查看寄存器内容 `:reg ("0)`
- `p - put y - yank`会同时保存到无名和复制专用寄存器 0
- `d - delete`实际相当于剪切，会被保存到无名寄存器 符合期望的粘贴操作是
- 只需要粘贴一次时，用 x d 解决，多次用 y 0 解决
- `"0p`，而不是 p，无名寄存器是易变的
- 使用系统剪贴板粘贴而不是进入插入模式手动插入剪贴板内容，能避免缩进错乱
  方式一：
  v 进入可视选择，选择复制目标
  "+y 然后到粘贴位置 "+p
  定制进阶：
  v 进入可视选择，按`<leader> Y`复制整行

### 高效切换

1.  `ctrl - z`挂起，`fg`回到 vim
2.  输入`:sh`，然后 exit 返回 vim

### 快速进入括号内（无插件辅助时）

输入`()`，按下`esc + i`

### 行内查找的重复与撤销

`f{char}/t{char} ; ,`

### 文件修改的重复与撤销

`. u`

### 文件查找

`/pattern<cr> n n` 用`?`号向上查找

### 标签内文本重复操作

```html
<p>firefox</p>
<p>chrome</p>
```

按键 `guit`
然后 `j .`
含义：将标签内的文本切换为大写，然后跳到下一行按点号重复执行
这个例子提示，尽量用操作模式，而非可视模式。

### 命令行通用操作

- `ctrl - w` 删词
- `ctrl - u` 删到行首（清空）
- `ctrl - r` 加寄存器 插入寄存器内容

### 分屏操作

上下或左右分割当前打开的文件
`ctrl-w s/v`

### 如何选中当前行

`0v$` 或 `V`

### 模式

- 可视模式
- v 单字符模式
- V 行模式
- ctrl-v 列模式

### 补全

文件名补全不能对大小写进行模糊匹配

直接按`<c-n><c-p>`，而不是先按`<c-x>`，匹配范围不限于当前文件

### 临时设置缩进

    set shiftwidth=4

### 不使用 ctrl 移动光标，如在 code 中

```
H-M-G // 当前屏幕项中底
zt // 将光标所在行放置到屏幕项端
```

### ex 模式

- 输入`$p`，不仅会在命令行打印出最后一行，屏幕焦点还会跳到最后一行
- 范围可以行数，也可以用模式，并且可以通过运算进行偏移
- 如`:/<html>/+1,/</html>/-1p`，对 html 标签之间的行操作，不包括行本身
- 可视行，用可视模式选中行，再进入 ex 模式指定操作

### 跳转列表

- 适用场景：在前后文件间快速切换
- 在文件中按下`c-o c-i`向后向前跳转
- `:jumps`查看这个列表,列表前数字是`jump`所需次数，`[count]c-o`

### 改变列表

- `:changes`查看这个列表
- `[count]g, g;`正向反向跳到变更处

    jumps 和 changes 先进入列表查看定位所需 count，然后退出，再操作对应指令 count 次，方可定位

### 缩进

- 注意是打两下`>> << =`
- 配合数字多行操作
- `=%`跳到括号上使用，缩进整个语句块
- `gg=g`缩进整个文件

### z 命令

相对光标滚动

- `[count]z.`将当前行放到屏幕中间
- `[count]z<CR>`将当前行放到屏幕顶部

### 折叠
- `za zi`折叠展开或关闭，最常用
- `zj zk`跳转
- 指定折叠`{{{1`

### 把当前单词插入到命令行

`<c-r> <c-w>`

### 跳转到块开头

`[{`

### 自带文件查找 find

- 支持实例，默认不找子目录
- 查看路径 `set path?`
- 设置查找子目录 `set path+=**`
- 补全时显示匹配文件 `set wildmenu`
- `find ./src/*.js` 模糊查找，文件多时有延时，最好限制路径
- `:b` 补全已打开文件

### 光标不在单词开头时修改整个词

`caw`

### 原生文件浏览

`:ex[plorer]`

### tab 标签页

- `leader tn`打开新标签页
- `gt`
- `num g t`切换到某个标签页
- `ctrl-w shift-t`移动当前窗口到新标签页，替代方法`:tabedit %<cr>`

> 1. Eight buffers open in eight tab pages (wrong)
> 2. Two tabs for two specific tasks (right)

tab 缺点：无法模糊匹配跳转，超过 8 个就挤了

tab 少用？有别于传统编辑器
window 比较、参考
buffer 可以开很多，不关心空间安排

[vi - Why do Vim experts prefer buffers over tabs? - Stack Overflow](https://stackoverflow.com/questions/26708822/why-do-vim-experts-prefer-buffers-over-tabs/26710166#26710166)

### 窗口管理

- `<c-w><c-p>`切换到最近的窗口
- `<c-w> x`调换对称窗口
- `tabedit %` 最大化窗口，只能间接实现，改完后关闭

### 跳转

`ctrl i[in]/o[out]`

### 清空当前文件

`ggdG`

### 查找替换

- `s`表示替换动作，前面不指定范围时操作当前行
- %s 全文查找替换
- 可配合可视选择，对指定范围操作
  ```shell
  " \c 大小写不敏感 \c 敏感 全局替换，需要确认
  :%s/aut\c/att/gc
  ```

### 全选

- `:%y+`
- `ggvG` then `shif-$`

### 大小写切换

正常模式下，切换动作是`~`
可视模式下，是`u U`

### inside 和 around 的区别

后者包括空格

### 记一个 macro 宏

1.  `qa`开始录制
2.  `0`按下跳到行开头
3.  `daw`删除第一个词
4.  `k`跳到上一行
5.  `J`拼接
6.  `q`结束
7.  `2@a`重复 macro

### arglist 操作多个文件

- `:arg` 查看参数列表有哪些文件
- `:argadd/delete` 添加或删除文件
- `:argdo %s/var/let/g` 批量替换
- `:argdo undo` 撤销

### 快速跳转和切换

`gf` 打开光标下的文件（绝对或相对路径）
`:e#` 两个文件间切换

### 计算

- `ctrl r = 2 + 2`(insert 模式，会将结果插入)，默认小数会丢弃，如果需要的话，`2.0/75`
- `ctrl a` (normal 模式)，自增

### quickfix

- copen/cclose
- cnext/cprev
- cc
- colder/cnewer

## 教程

[A vim Tutorial and Primer](https://danielmiessler.com/study/vim/#gs.61FKkls)

[A Good Vimrc](https://dougblack.io/words/a-good-vimrc.html)

[amix/vimrc: The ultimate Vim configuration: vimrc](https://github.com/amix/vimrc)

## ISSUES

### ssh 上复制

无法与图形端系统交互
cat / less 打印到终端
不过，用本地 vim 编辑更好？

```sh
:e scp://remoteuser@server.tld//path/to/document
vim scp://oaker@vserver.oaker.bid:29979//home/oaker/tmp.js
```

### python 支持

安装 vim-nox

### set commit editor

`$ git config core.editor "vim"`

### 编码转换，不同系统间的文件，常意外报错

`:w ++ff=unix`

### 提示恢复时，删除交换文件

可能是在别的地方也在打开，关闭只留一个
复制给出的路径，`rm`

### 与系统剪贴板交互

查看是否支持
`$ vim --version | grep clipboard` +号表示支持，-号相反
如果不支持，安装
`$ sudo apt-get install vim-gnome`

### 输入法切换

中文模式编辑完成后，`shift - esc or jk`
英文模式编辑完成后，`esc or jk`

### 不使用当前配置启动(标准 vim)

`$ vim -u none -n`

`<cr>`指的是回车，不是`<c-r>`
`cw .` 有时比正则要快
cgn
s/foo/bar/g
s/foo/bar/gc (confirm before replace)
d} 删除直到空行

### 缓冲区 buffers （对应浏览器中的标签页）

- `:ls` 列出缓冲区文件列表
- `:b keyword<TAB>` 关键字 tab 补全/或编号，快速定位打开缓冲区中的文件
- `:sb keyword<TAB>` 分屏打开文件，保持了固定顺序，也可`sbfirst`
- `bn/bp` 上一个/下一个
- ` <C-^>``:e # ` 来回切换，然后切换回原目录`:cd -`
- `leader cd` 切换工作目录为当前文件所在目录
- `:b some-unique-part-of-the-file-path` 在文件间快速跳转

### 忽略已记录文件

`$ git update-index --assume-unchanged <path>`
重置
`$ git update-index --no-assume-unchanged`

### viminfo: 缺少对应的 '>' in line:

    rm ~/.viminfo

### 缩进不一致

在不同环境，tab 制表键设置不同，导致显示差异
统一转换成空格，expandtab
输入 tab，`ctrl-v<tab>`
当前文件转换，:retab
[converting tabs to spaces | vim tips wiki | fandom powered by wikia](http://vim.wikia.com/wiki/converting_tabs_to_spaces)

### 缩进指导

- 水平缩进显示 `:set list`，大短杠为 Tab，小短杠为空格，
- 垂直对齐显示 `<leader> il`

### 重载当前文件

`:e`

### 移除换行无用字符^m

`:%s/\r$//g`

### 提示不能修改 Cannot make changes, 'Modifiable' is off

set ma (modifiable) / set noma

### 查看当前文件路径

`echo @%`

### 批量替换

```
:arg *.cpp	All *.cpp files in current directory.
:argadd *.h	And all *.h files.
:arg	Optional: Display the current arglist.
:argdo %s/pattern/replace/ge | update	Search and replace in all files in arglist.

:argadd **/*.h	All *.h files in and below current directory
```

### nodejs 调试

1. `<leader>e` 执行 AsyncRun
2. `:cw` 打开 QuickFix 窗口

### 终端

```
`:term`
`<c-w>N` 在终端进入 normal 模式，按 i 恢复输入模式
`<c-w>.` 向终端发送`<c-w>`
`<c-w><c-c>` 强制结束终端
`<c-w>:` ex 输入
`<c-w>"{reg}` 粘贴寄存器

`:1sp` 只给 1 高度，不适用，终端输出不总是更新在可视区域
```

使用好处：只占用 Vim 内窗口，可以作为 buffer 存在，不一定占用可视窗口

`:term npm start` 用 vim-term 插件，更好些？只需要启一个进程，能看到输出，退出窗口即杀掉进程

### 主题

[256 Terminal colors and their 24bit equivalent (or similar)](http://www.calmar.ws/vim/256-xterm-24bit-rgb-color-chart.html)
[papercolor-theme/PaperColor.vim at master · NLKNguyen/papercolor-theme](https://github.com/NLKNguyen/papercolor-theme/blob/master/colors/PaperColor.vim)

### vim-vue 插件卡顿

原因分析：并不仅仅是多语言语法高亮问题导致
[I can't fix the slowness. · Issue #95 · posva/vim-vue](https://github.com/posva/vim-vue/issues/95#issuecomment-374108025)

- 关闭相对行数 `set nornu`
- 使用 vim-vue 性能优化分支

#### 如何分析语法时间开销

    ```
    :syntime on

    :syntime report

    then remove the offending patterns
    ```

## 浏览一番后快速跳回原处

```
使用全局标记 ma
跳回 `a
```

## 只能运行 zsh 非交互命令

比如 alias.sh 中的运行不了
[How to run zsh aliased command from vim command mode? - Vi and Vim Stack Exchange](https://vi.stackexchange.com/questions/16186/how-to-run-zsh-aliased-command-from-vim-command-mode/16197)

不匹配都删掉`:g!/pattern/d`

## 插件的原生替代

[Recommendations - #vim on freenode](https://www.vi-improved.org/recommendations/)

## path

`set path?` 查看
`set path+=path/to/include`
`set path=.,front/src/js/`

`gF` 跳转到行

vim-rest-console

## vimscript

- 每天使用的命令就是，进一步学习可增强
- 评价不高，出了 vim 就没用，复杂逻辑运行慢，重绘

[VimScript 五分钟入门（翻译） - 知乎](https://zhuanlan.zhihu.com/p/37352209)
[tpope/vim-scriptease: scriptease.vim: A Vim plugin for Vim plugins](https://github.com/tpope/vim-scriptease)

`exe 'cd ' expand('%:p:h')` 进入当前文件所在目录

## 性能

- 停用 相对行数 功能，每次要重绘
- 容易带来渲染问题的插件、设置
  [](https://stefan.magnuson.co/posts/2019-04-15-improving-vim-neovim-rendering-performance/)

[Slow Syntax Highlighting in Vim · Marcus Mu](https://www.chunkhang.com/blog/slow-syntax-highlighting-in-vim)

## nvim

- init, python3 module, restart 迁移比较简单
- `/`搜索时按下`c-f`，可显示搜索历史
- `:10sp ~/.zshrc`
- 一些操作比 vim 快，如 source
- vimagit commit slow

## 第一个 tab 只用作目录浏览

要浏览就跳到第一个 tab，始终按`t`在新 tab 中打开文件

## 提制文件名和文件路径，@ 后面表示寄存器

- `:let @" = expand("%")`
- `:let @+ = expand("%:p")`

## vimdiff cheat sheet

    vimdiff leftFile rightFile
    ]c :        - next difference
    [c :        - previous difference
    do          - diff obtain
    dp          - diff put
    zo          - open folded text
    zc          - close folded text
    :diffupdate - re-scan the files for differences
    :diffget //2
    :diffget //3
    :only
    :qa!
    :wqa

## 查找
有空格，用字串
`ag 'brew link'`
`/brew link`
正则
`ag -- -foo`


