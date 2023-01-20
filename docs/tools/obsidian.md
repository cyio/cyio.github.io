
# Obsidian

##  feature
- 剪贴体验佳
- 日记+模板
- 局部加密
- 图表 draw.io

快捷键 `Ctrl/Cmd-E`  编辑、预览模式间切换

[[vim#^d34ab8]]

Dataview插件 替代 Notion

选择的理由：
- 有本地笔记，并且数量不少，希望提升内容联系，加深记忆和便于查找

不用刻意关心文件或内容位置，sql 查询聚合

[程序员使用 Obsidian 的经验 --- 我的工作流_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV18Y4y1H7Gu)

[vim](vim.md)

## TDOO


- [ ] obsidian-git
- [x] CMD + L
	- [ ] quick-add 自动工作流插入文件内容

plugin: 
- tasks
- obsidian-task

- [ ] 12334 📅 2023-01-09 
- [ ] today 📅 2023-01-07 

## 文件外链

图片 assets，默认路径规则是尽可能短，会导致其他预览软件无法解析。应该使用相对路径

大部分图片重要性不高，尽量用图床。不走 git 管理。
未来可以考虑用脚本批量备份到网盘。

tvax1.sinaimg.com、tvax2.sinaimg.com、tvax3.sinaimg.com、tvax4.sinaimg.com

附件不要有空格，使用插件批量改名

https://github.com/dy-sh/obsidian-unique-attachments


[达里尔·曼宁 | 我的 GTD 设置](https://daryl.wakatara.com/my-obsidian-gtd-setup/)

## why
- all in one
- 更容易结合代码
- 自己掌控，容易迁移和重构

[玩转 Obsidian 03：间歇式日记 - 少数派](https://sspai.com/post/63674)

[Obsidian - 善用佳软 2022 - Obsidian Publish](https://publish.obsidian.md/xbeta/docsify/Obsidian)

> 我还是觉得notion方便，尤其是跟我同时研究笔记的人，我都用notion做笔记读完四本书了，他还在折腾双链，一本都没开始读。我开始做公号输出了，他还在纠结ob插件，等着别人更新插件。


## 同步
[Obsidian 免费的实时同步服务](https://irithys.com/p/obsidian-livesync/)

[[Guide] Using Git to sync your Obsidian vault on Android devices - Share & showcase - Obsidian Forum](https://forum.obsidian.md/t/guide-using-git-to-sync-your-obsidian-vault-on-android-devices/41887)

手机上麻烦，需要应对网络问题。暂用 Github App

[Installation · denolehov/obsidian-git Wiki](https://github.com/denolehov/obsidian-git/wiki/Installation#mobile)

gitignore

[Obsidian Configuration: Sync Plugin Data – Muya's Blog](https://blog.muya.co.ke/sync-obsidian-plugin-data-via-git/)


把 metadata tag 放到 frontmatter，通用性

## 使用子仓库？

- 配置放子仓库多个项目共享
- 两个文档关联？