# Photoshop
[toc]

## 工作区
- 历史记录
- 信息
- 导航器
- 图层
- 字符

参考：[The Ultimate Front-End Developer's Guide to Photoshop](https://netguru.co/blog/photoshop-for-front-end-developers)
## 切图
- 选“类型”-“图片”过滤出待切图层，用 [Export-Layers-to-Files-Fast](https://github.com/jwa107/Photoshop-Export-Layers-to-Files-Fast/) 导出
- 在图层上右键复制CSS，可更快获取字体字号、颜色等属性
- 手动切图：
  1. 将待切元素拖放到新页面 （背景透明）
  2. 自动裁切，去掉多余部分

Tips：PS自带功能“将图层导出到文件”的脚本也不错，用前把待导出图片最好放到一个新画布

![](https://img.cnb.workers.dev/?url=http://ww2.sinaimg.cn/large/4e5d3ea7jw1ex0m7pll8jj20vu0p5guz.jpg)
## 切片
- 裁剪 --> 切片
- 可对切片设置属性
- 按Shift键多选，组合切片
- 在导出到文件对话框中，可选择“HTML和图象”

参考：[设计派 | 如何正确使用Photoshop切片工具](http://www.shejipai.cn/image-slicing-photoshop.html)
## 快捷键

| 功能 | 快捷键 |
| --- | :-: |
| 改变视图 | Ctrl/Alt + 滚轮、左右键 |
| 拖动（抓手工具`H`） | 空格 + 左键 |

![image](https://cloud.githubusercontent.com/assets/3146103/8339663/b37fdece-1aeb-11e5-9c29-408a710ff76d.png)

自由的控制视图系列
- 自由的浏览图片：按住空格后，鼠标拖动
- 自由的缩放图片：按住alt+滚轮
- 切换到实际像素（100%）：Ctrl + 1
- 工作区类型切换：Tab

控制内容系列
- 通过画面上点选一个图层：Alt + 鼠标右键
- 在画面上拖动一个图层：V 切换到移动模式 鼠标拖动
- 复制拖动一个图层：移动模式下 Alt+拖动
- 删除一个图层：选中要删除的图层 按下 Delete
- 合并多个图层：选中要合并的图层 按下 Ctrl+E
- 选区内填充颜色：Alt+Delete (前景色) Ctrl+Delete(背景色)
- 缩放当前选择图层：Ctrl+T(自由变换模式)

实用工具系列
- 画一个选区：点击M进入选区模式 ， 鼠标拖画
- 放弃选区：Ctrl+D
- 吸管工具：点击I进入吸管模式，点选画面颜色
- 文字工具：点击T进入文字模式，点选画面的文字或者创建新文本
- 切片工具：点击C进入切片模式（旧版本会有不同）
