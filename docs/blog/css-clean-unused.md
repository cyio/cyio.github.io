---
title: 如何清理无效的CSS代码
date: 2015-12-12
description: 
---

# 如何清理无效的CSS代码

项目开发过程中，前端设计改来改去，这时往往会先把新的效果做出来，等项目做完，就会有一些遗弃的CSS代码，比如有些CSS类在DOM改动后用不到了。那么，有哪些可用的方法呢？
### 对比清除无用CSS的解决方法：
1. 在线网站分析，优点是输个地址就行，有直观的图表展示，缺点是要获取详细数据可能需要付费，不支持本地使用。
2. gulp npm工具，优点是可以融入工作流，缺点是清除无用CSS只是一次性任务，配置有点麻烦，而且哪些代码要剔除恐怕必须要人工判断。
3. [unusedCSS - Chrome 网上应用店](https://chrome.google.com/webstore/detail/unusedcss/dokggbghedajooenkgjbamikfgnngeik?utm_source=chrome-app-launcher-info-dialog) 推荐，支持本地服务上跑的页面，界面简陋但够用方便。
### 图文简单介绍下unusedCSS的使用：

使用前提示：
- 先把其他扩展关掉，或直接进隐私模式，只开启这个扩展。
- 通常项目有多个页面（比如webapp），那就要对所有页面交互操作一遍，再看 unusedCSS 的检测结果。
1. 如图，点`Set Domain`，对当前网站分析。
   
   ![](https://img.cnb.workers.dev/?url=http://ww2.sinaimg.cn/large/4e5d3ea7jw1eywn7dx80uj209q06dgly.jpg) 
2. 随便点空白地方，等扩展界面关掉再次打开，界面显示扩展已开启，有三个按钮，点第二个查看分析结果。
   
   ![](https://img.cnb.workers.dev/?url=http://ww2.sinaimg.cn/large/4e5d3ea7jw1eywn87jhioj209m061wet.jpg)
3. 结果页，主要是看后两项，未使用和重复项，结合这两项数据，逐条清理。
   ![](https://img.cnb.workers.dev/?url=http://ww2.sinaimg.cn/large/4e5d3ea7jw1eywn9gfkynj20mg0ag40w.jpg)
### 总结

清理无效CSS，需要花一点时间手动剔除（无法自动化），有些代码只在某种特殊状态下才用到（如 media query），这些代码就要跳过了。清理过程中，要做好测试，防止误伤。

经V友提示，Chrome开发者工具自带Audits（审计）功能，等研究完再更新本文。

附本文在V2EX的[讨论链接](https://www.v2ex.com/t/242998)
