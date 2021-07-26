# Surfingkeys

[[toc]]

## 功能

```
这里主要列举几个Vimium没有的功能 
     1. sg/sb -> 搜索选中文本 
     2. I -> 内嵌vim editor可用来编辑input/textarea/select 
     3. sm -> markdown 预览与vim 编辑 
     4. Ctrl-Alt-d 流程图预览与vim 编辑 
     5. yg 截屏 yG 截长页 yS 截滚动div的屏 yS截出来的默认设置完整按键。
```

## 快捷键

- 是否在当前页启用切换 `alt-s`

- 基础

  ```
  E - 切到左边的标签页
  R - 切到右边的标签页
  B - 跳回刚才的标签页(第二次点不起作用)
  S - 后退
  D - 前进
  r - 刷新
  t - 输入打开链接
  b - 从收藏夹打开链接
  v - 切换可视化模式
  oh 从历史记录打开链接
  ```

- 打开标签页

  ```
  f - 全部可点击元素
  F - 仅链接，前台打开
  af/C - 后台打开
  cf - 多选后台打开

  ```

- 功能以 s 为前缀，联想即插件名首字母

  sm -> markdown 预览与 vim 编辑

- 替代原生快捷键，以 g 开头

  ctrl - h => g - h

- 编辑

  su - vim 编辑模式处理网址

- 搜索

  sg/sb -> 搜索选中文本

- 标签跳转

  ```
  T - 查看已打开标签
  J/K - 左右
  g0/\$ - 第一个/最后一个
  ```

  以上均支持搭配数字，如 3K，跳到右边第三个

- 复制粘贴

  ```
  yt 复制当前标签页
  yf 复制当前页 URL
  p 打开剪贴板里的链接
  ```

- 截屏

  ```
  yg - 截屏
  yG - 截长页
  yS - 截滚动 div 的屏
  ```

- 滚动

  ```
  cs - 切换滚动对象
  0 - 滚到最左边
  \$ - 滚动最右边
  ```

- 开发

  ;q 在当前页插入 jQuery

## 问题

ace tower 评论框不能用，中文排版较宽

## 从地址栏切换焦点回页面内容

> If macOS System Preferences -> Keyboard -> Shortcuts -> Full Keyboard Access is set to “Text boxes and lists only”, then Tab from the omnibox should go to the web page.

## 排除 Google Docs 和 印象笔记 diff
```
"exclude_matches": ["https://docs.google.com/*", "https://app.yinxiang.com/*"],
```
