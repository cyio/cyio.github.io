# Tips and Tricks
${toc}

### cheatsheet

| 功能                | 按键      |
| ------------------- | --------- |
| 设置文件类型为 JS   | leader pj |
| 设置文件类型为 none | leader pn |
| 设置文件类型为 vue  | leader pv |

### 第一个 tab 只用作目录浏览

要浏览就跳到第一个 tab，始终按`t`在新 tab 中打开文件

### 强制保存

`:w !sudo tee %`

### 高效切换

1.  `ctrl - z`挂起，`fg`回到 vim
2.  输入`:sh`，然后 exit 返回 vim

### 快速进入括号内（无插件辅助时）

输入`()`，按下`esc + i`

### 行内查找的重复与撤销

`f{char}/t{char} ; ,`


### 标签内文本重复操作

```html
<p>firefox</p>
<p>chrome</p>
```

按键 `guit`
然后 `j .`
含义：将标签内的文本切换为大写，然后跳到下一行按点号重复执行
这个例子提示，尽量用操作模式，而非可视模式。

### 把当前单词插入到命令行

`<c-r> <c-w>`

### 跳转到块开头

`[{`

### 光标不在单词开头时修改整个词

`caw`

### 清空当前文件

`ggdG`

### 全选

- `:%y+`
- `ggvG` then `shif-$`

### 大小写切换

正常模式下，切换动作是`~`
可视模式下，是`u U`

### ~~ag 查找~~
有空格，用字串

`ag 'brew link'`

`/brew link`

正则

`ag -- -foo`

### 复制文件名和文件路径，@ 后面表示寄存器

- `:let @" = expand("%")`
- `:let @+ = expand("%:p")`

### 临时设置缩进

    set shiftwidth=4

### 不使用 ctrl 移动光标，如在 code 中

```
H-M-G // 当前屏幕项中底
zt // 将光标所在行放置到屏幕项端
```

### 不匹配都删掉
`:g!/pattern/d`


## 创建指定名称文件

```
autocmd BufNewFile life/* execute 'file' fnameescape(strftime("%Y-%m-%d.md"))

exe 'e ./life/'.strftime("%F.md")
```