# Vim 插件、扩展

## 开发

[vim 插件开发入门之 MRU - 知乎](https://zhuanlan.zhihu.com/p/47374698)

## git

插件是对当前打开文件操作

```sh
:git rm &
:gremove

:git mv & target-path
:gmove target-path

:git add &
:gwrite

:git checkout &
:gread

gvdiff 检查变动

:Gstatus
-
=
```

## 注释 - nerdcommenter

```
leader c space 注释或取消注释
leader c y 先复制再注释
leader c A 行末尾追加注释
leader c s 多行带星号(sexy)注释
leader c m 单行带星号(minimal)注释
```

## FZF

- 支持多种查找，包括一些插件功能
- 定位后，c-t s v 用不同方式打开
- `:Files`与 ctrlf 功能重合
- 实用查找 `:Buffers` `:Snippets` `:GFiles?` `:BCommits`
- 差异，交互式
- 不如 ctrlsf 方便 [search and replace in project? · Issue #528 · junegunn/fzf.vim](https://github.com/junegunn/fzf.vim/issues/528#issuecomment-368260699)

> Preview 我用的命令是bat，自动语法高亮

使用理由：全局性 zsh git
[What am I missing by not using FZF? : vim](https://www.reddit.com/r/vim/comments/gbhvlo/what_am_i_missing_by_not_using_fzf/)

## wildfire

选择内容时向外扩展, enter 即可
只要有界限就能放到里面选择，如各种括号

## markdown

- `:Toc` 临时跳转窗口
- `:gentoc` 在光标位置生成目录，可放到标题上按`t)`跳转，按`ctrl - o`跳回

## emmet

插件默认触发补全键是`ctrl y` ,

期望是用 tab ，而原 tab 功能由`\tab`替代

## ctrlp 刷新索引

`ctrl - p F5`

## nerdtree

- 存在时，按`q`关掉，再`ctrl-p`，或者找到文件按`t`在新标签中打开
- 操作当前文件，如重命名`:NERDTreeFind`
- 切换显示隐藏 `shift i`
- 重命名等操作，nerdtree 模拟的是文件管理器的右键(这一点不如原生文件浏览方便)
  ```
  (a)dd a childnode
  (m)ove the curent node
  (d)elete the curent node
  (c)copy the current node
  ```
- `u`: 切换目录树的根目录为上层目录
- `U`: 切换目录树的根目录为上层目录，并保持旧的目录树的状态

## `:UltiSnipsEdit`

```
tab 补全
ctrl-b 下一个点
ctrl-z 上一个点
```

临时使用其它类型的补全，设置文件类型

## ~~ternjs 是 JS 代码分析引擎~~

自动完成|函数参数提示|查询表达示类型|查找定义|自动重构(改名)

```
:h tern_map_keys
```

## LeaderF

`ctrl f` 切换路径搜索和名字搜索，名字不惟一时，适合路径查找，如果输入关键词后，内容很多，按些键切换模式
`ctrl u` 清除，重新输入关键字
'ind;mock' 文件名加目录名
'ind js' 多个关键字匹配文件名

## 创建便携 vim

```
bash <(curl -L https://raw.githubusercontent.com/junegunn/myvim/master/myvim)
```

会创建可执行文件，所它放到需要的机器，添加执行权限运行即可
[Creating portable Vim environment](https://junegunn.kr/2014/10/creating-portable-vim-environment)

## coc

[dotfiles/.vimrc at master · vuhuucuong/dotfiles](https://github.com/vuhuucuong/dotfiles/blob/master/.vimrc)
[A guide to modern Web Development with (Neo)vim – freeCodeCamp.org](https://medium.freecodecamp.org/a-guide-to-modern-web-development-with-neo-vim-333f7efbf8e2)

[jarvis/init.vim at master · ctaylo21/jarvis](https://github.com/ctaylo21/jarvis/blob/master/config/nvim/init.vim)

配合 snip

`ctrl-y`

[Completion with sources · neoclide/coc.nvim Wiki](https://github.com/neoclide/coc.nvim/wiki/Completion-with-sources#improve-the-completion-experience)

指定类型使用，markdown 打字卡

[Disable coc.nvim per filetype (i.e. a filetype whitelist or blacklist) · Issue #349 · neoclide/coc.nvim](https://github.com/neoclide/coc.nvim/issues/349#issuecomment-455332882)

```sh
" Remap for rename current word
nmap <F2> <Plug>(coc-rename)
```

[init.vim](https://gist.github.com/benawad/b768f5a5bbd92c8baabd363b7e79786f#file-init-vim-L178)

`:CocInstall coc-explorer`

定义跳转 GoTo 查看 `~/.vimrc`

## note plugin

### 正面观点

- 方便导航
- 思维导图形象，但搜索差，不宜保存长久笔记
- 设置多个 wiki

```
= My knowledge base =
    * [Tasks](Tasks) -- things to be done _yesterday_!!!
    * Project Gutenberg -- good books are power.
    * Scratchpad -- various temporary stuff.
```

[How does vimwiki compare to emac's org mode? : vim](https://www.reddit.com/r/vim/comments/6bl4al/how_does_vimwiki_compare_to_emacs_org_mode/dhnn3i6?utm_source=share&utm_medium=web2x)
[vimwiki cheatsheet](http://thedarnedestthing.com/vimwiki%2520cheatsheet)
[How I Take Notes With Vim, Markdown, and Pandoc - things james does](https://jamesbvaughan.com/markdown-pandoc-notes/)
[将 vim 作为日常笔记本使用 – VOID001's WOWO](https://void-shana.moe/linux/zh-taking-notes-with-vim.html)

### 反面观点

认为不需要 vimwiki

- 链接跳转用`gf`
- `grep -Ri todo . > todos`
- 日志不方便
  [Joe Reynolds Audio](http://joereynoldsaudio.com/2018/07/07/you-dont-need-vimwiki.html)

查找，`#`后向匹配，`g*`非精确匹配

## Coc Typescript

[Vim for JavaScript and React in 2019 | Vim From Scratch](https://www.vimfromscratch.com/articles/vim-for-javascript-and-react-in-2019/)

| 按键      | 功能                   |
| --------- | ---------------------- |
| gd        | 跳转定义               |
| gy        | 跳转类型定义           |
| gi        | 跳转实现               |
| gr        | 跳转引用               |
| leader ac | 代码动作               |
| leader a  | 可视模式，已选代码动作 |
| leader qf | 修复当前               |
| K         | 查看文档               |
| c-j       | 插入模式，snip 展开    |

## Coc snippets

`c-j` 展开
`c-j``c-k` 上、下一个编辑点

查看当前 buffer 关联
`:CocList snippets`

可以不安装 ultisnips

问题：编写 `useS` 可自动 import，但是对编辑点支持有限
解决：为了使用 virtual placeholder，改用 ultisnips + coc-ultisnips，不使用 coc-snippets

react snippets 位置
`~/.vim/plugged/vim-snippets/UltiSnips/javascript_react.snippets`


## 表格支持

`junegunn/vim-easy-align`

`<leader>\` Align GitHub-flavored Markdown tables

插件 [dhruvasagar/vim-table-mode: VIM Table Mode for instant table creation.](https://github.com/dhruvasagar/vim-table-mode)

使用：

`leader tm`

`||`输入分割线

csv 转换 `leadet tt`

    ```
    h,h,h
    ||
    a,a,a

    a,b
    --
    c,d
    e,f
    ```

```
:[range]w !eslint --stdin
```

## vim-task

- 简单专注，不用离开 Vim
- 快捷键
  ```
  n/N 创建
  d(one) 切换完成
  x(cancel) 取消
  a(rchive) 存档
  ```

## 翻译

`:Translate -w test`

[VIM 插件推荐 - 知乎](https://zhuanlan.zhihu.com/p/58816186)

## fugitive

为什么用，命令行 git blame 需要记住文件名、行数
Gmove 处理了 buffer，避免返回时修改原文件
完整实现
[The Fugitive Series - a retrospective](http://vimcasts.org/blog/2011/05/the-fugitive-series/)

- md new todo
  ```
  au Filetype markdown set com=s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:>,b:-\ \[\ \]
  au Filetype markdown set formatoptions=tcroqln
  ```
  会影响原功能`-`，暂时使用复制吧

## 字符包围

- 单词两侧加空格 `ysiw<space><space>` 分解：you surround inner word with space
- y 是添加包围符的动作，注意空格打两个
- 拓展，如何删除两边空格，`ds<space><space>`
- 小写 s 表示不同行，同行使用大写 S
- 查看帮助：`h surr<tab>`

## ctrlsf

搜索、查看、编辑

GLOB search
`:CtrlSF -G *.pug svg` 在所有 pug 文件中，查找 svg

插件一般不支持工具的原生命令行参数，如果要用完整命令行，`Leaderf rg`

## tmp
- `set spell` 拼写检查，比如记不清楚某个单词拼写，可以新开 buffer，然后 `z=`，`num <cr>`

