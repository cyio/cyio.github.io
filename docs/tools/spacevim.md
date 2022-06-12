# SpaceVim

## 配置

插件默认会自动安装，手动安装命令
`:SPReinstall echodoc.vim`

## 查找

文件 SPC p f
模糊 SPC s f

## 文档
[十分钟Spacevim入门 - Jackie的博客](https://jackiegeek.gitee.io/blog/%25E9%25AB%2598%25E6%2595%2588%25E5%25B7%25A5%25E5%2585%25B7/%25E5%258D%2581%25E5%2588%2586%25E9%2592%259FSpacevim%25E5%2585%25A5%25E9%2597%25A8/)`

## 源码
入口 main.vim

```vim
# 语言等设置
call SpaceVim#begin()

# 用户配置读取 toml 解析 生成 json cache
call SpaceVim#custom#load()

call SpaceVim#default#keyBindings()

call SpaceVim#end()
```
