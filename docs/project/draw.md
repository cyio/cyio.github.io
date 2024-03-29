# 画图

## 流程图

### why 

- 核心部件、主流程，有一定复杂度，影响系统稳健性
- 便于交接或快速回忆

> 流程图这方面我们研发部内部也做了讨论，最终决定需要用流程图来表述一些复杂、关键的状态转换。几个理由：1. 有些需要讨论采用哪种技术方案，避免走冤枉路。用流程图方便项目经理、程序员、市场经理三方共同讨论。这种流程图是粗线条的式的。2. 部分复杂、影响系统稳健性的逻辑，程序员需要画出流程，避免漏洞。编写、审核代码就有了依据。3. N年后再修改代码，有个流程图便于快速回忆主体逻辑。4. 代码移交。 当然流程图不能解决所有问题，有些不方便用流程图表述的，用文字、伪代码、波形图等手段。

### how

要点：
- 通常用椭圆形表示开始和结束
- 标明类型，如 `ui: enter page`，`store: set id`，`c++: encode img`
- 平行流程，建立关系

步骤：
1. 确定目的，确定开始和结束
2. 识别主要步骤、决策，并连接
3. 检查并修正
4. 选择画图工具绘制（这是最后要做的事）

## 时序图

- 不是太好用 [WebSequenceDiagrams - Draw UML sequence diagrams online in seconds](https://www.websequencediagrams.com/)
- mermaid typora
- github 支持
- gpt 生成

## Think

画图很麻烦

理清、返工

提前把主干理清楚

mermaid 自己看没问题，有些问题需要规避

[基于 Mermaid 的时序图、流程图和甘特图 - Powered by MinDoc](https://www.iminho.me/wiki/docs/mindoc/mermaid.md)
[Online FlowChart & Diagrams Editor - Mermaid Live Editor](https://mermaidjs.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbkFbQ2hyaXN0bWFzXSAtLT58R2V0IG1vbmV5fCBCKEdvIHNob3BwaW5nKVxuQiAtLT4gQ3tMZXQgbWUgdGhpbmt9XG5DIC0tPnxPbmV8IERbTGFwdG9wXVxuQyAtLT58VHdvfCBFW2lQaG9uZV1cbkMgLS0-fFRocmVlfCBGW2ZhOmZhLWNhciBDYXJdXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ)
[Markdown 流程图 flowchart.js - JavaScript - 123si 博客](https://www.123si.org/javascript/article/markdown-flow-chart-flowchart-js/)

时序图+流程图，带拼写提示 [Chart Mage - Draw sequence diagrams and flowcharts at lightning speed.](http://chartmage.com/index.html)

## 技巧

- 元素：图形 链接 文本
- 悬浮有操作提示
- 对齐，可以先连上箭头，然后把不齐的图形用箭头微移
- 使用cmd + click(鼠标左键点击)来进行特定元素的多选
- 替换，drag 直到 替换图标（褐色） 出现
- 可以先不处理样式，做完后统一选择处理
- 样式都可以后期改，比如线的箭头，粗细

[Releases · jgraph/drawio-desktop](https://github.com/jgraph/drawio-desktop/releases)
桌面端，不支持打开线上文件？


[使用draw.io绘制简洁大方的流程图 - 开发工具 - 掘金](https://juejin.im/entry/5acc5205f265da2391487073)

## draw.io

高级图形：flow|tree|mindmap

自动添加并连接到已选中图形
1. 选中图形
2. 按住 alt，同时点击待添加图形
![image.png](https://img.oaker.bid/?url=http://ww2.sinaimg.cn/mw690/4e5d3ea7ly1h0fjgqljw7j20z80g2aeg.jpg)

全选，样式里设置 sketch，设置框架主题

右键批量选择线条或是图形

style -> 复制样式、粘贴样式

### 数据

xml 是原始格式

### 离线能力

部分功能不可用，如
- 导出到网盘
- 转换格式

[Run diagrams.net offline : draw.io is becoming diagrams.net](https://drawio.freshdesk.com/support/solutions/articles/16000067668-run-diagrams-net-offline)
## ref

[我的绘图工具箱 · 构建我的被动收入](https://www.bmpi.dev/self/my-drawing-toolbox/)

## 白板

[Excalidraw | Hand-drawn look & feel • Collaborative • Secure](https://excalidraw.com/)

## 架构图

- 思考：业务关系，分层
- 自下而上：支撑，抽象
- 布局：左右，左右下
- 步骤：
		1. 分层
		2. 分模块
		3. 填功能

步骤：
1. **标识主要组件：** 确定系统中的主要组件。这可能包括前端应用、后端服务、数据库、第三方服务等。用简单的图形符号来表示每个组件。
    
2. **连接组件：** 用箭头或线条连接组件，表示它们之间的关系和通信。这可以包括数据流、API调用、消息传递等。标明连接线的方向，以表示信息流向。
    
3. **标明接口和协议：** 如果组件之间有定义的接口和协议，确保在图中标注清楚。这有助于理解组件之间的通信方式。
    
4. **标注重要属性：** 对于每个组件，标注关键的属性，例如技术栈、版本号、数据库类型等。这有助于更详细地了解系统的技术细节。
    
5. **分层表示：** 如果系统有多个层次（例如前端、后端、数据库层等），可以考虑使用分层表示。这使得架构图更易于理解。

[如何用语雀画板，轻松画出架构图？ - 语雀的个人空间 - OSCHINA - 中文开源技术交流社区](https://my.oschina.net/yuque/blog/5517347)