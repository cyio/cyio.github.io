# Vim
[toc]

> - 编辑器之争，出一些新编辑器，如 vscode 看到很多人安利，其实你不要动，那个是给大多数不会 vim 的开发人员使用的。
> - 在各种编辑器里尝试 vim 插件，最后都会回来，为什么？并不是因为 vim 自身，而是因为 vim 作为整个开发环境的一个组件，vim 与 tmux 等工具组合，
> 窗口多开和切换以便执行多任务快速方便，而非割裂的应用窗口
> - vim 是人生最后一个编辑器，不要在其他编辑器上花时间，做选择，纠结，那些花哨的功能带来的效率提升，跟 vim 其实是没法比的。vim 与 tmux 等组成
> 的工具链，是无敌的。
> - vim 的口号是用思维的速度编码
> - 正确使用 vim 的关键就是使得自己能够快速的离开插入模式，然后在常用模式下进行移动。

[Tips and Tricks](./vim-tricks.md)
[Extend](./vim-extend.md)
[Issues](./vim-issues.md)

## 基础

### 玩转帮助

[Vim Cheat Sheet - 中文](https://vim.rtorr.com/lang/zh_cn/)
 
[Vim Cheat Sheet & Quick Reference](https://quickref.me/vim)

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

### 文件修改的重复与撤销

`. u`

### 文件查找

`/pattern<cr> n n` 用`?`号向上查找

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

### 自带文件查找 find

- 支持实例，默认不找子目录
- 查看路径 `set path?`
- 设置查找子目录 `set path+=**`
- 补全时显示匹配文件 `set wildmenu`
- `find ./src/*.js` 模糊查找，文件多时有延时，最好限制路径
- `:b` 补全已打开文件

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

### 查找替换

- `s`表示替换动作，前面不指定范围时操作当前行
- %s 全文查找替换
- 可配合可视选择，对指定范围操作
  ```shell
  " \c 大小写不敏感 \c 敏感 全局替换，需要确认
  :%s/aut\c/att/gc
  ```

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

### mark 书签
浏览一番后快速跳回原处

```
1. 使用全局标记 ma
2. 跳回 `a // 单引号
```

### path

`set path?` 查看

`set path+=path/to/include`

`set path=.,front/src/js/`

`gF` 跳转到行

vim-rest-console

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

## vimscript

- 每天使用的命令就是，进一步学习可增强
- 评价不高，出了 vim 就没用，复杂逻辑运行慢，重绘

[VimScript 五分钟入门（翻译） - 知乎](https://zhuanlan.zhihu.com/p/37352209)
[tpope/vim-scriptease: scriptease.vim: A Vim plugin for Vim plugins](https://github.com/tpope/vim-scriptease)

`exe 'cd ' expand('%:p:h')` 进入当前文件所在目录

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

  临时 diff 两段文本
  1. 在空 buffer 输入文本一
  2. split `e new`，输入文本二
  3. `:diffthis`

## 教程

[A vim Tutorial and Primer](https://danielmiessler.com/study/vim/#gs.61FKkls)

[A Good Vimrc](https://dougblack.io/words/a-good-vimrc.html)

[amix/vimrc: The ultimate Vim configuration: vimrc](https://github.com/amix/vimrc)

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

## config
[Vim Config](https://awesomeopensource.com/project/rafi/vim-config)
拆分参考：https://github.com/rafi/vim-config/blob/master/config/vimrc#L72

## 插件的原生替代

[Recommendations - #vim on freenode](https://www.vi-improved.org/recommendations/)

## debug
您可以使用:scriptnames找出来源的插件。

我会禁用所有插件，然后逐个重新启用它们，直到问题重新出现


