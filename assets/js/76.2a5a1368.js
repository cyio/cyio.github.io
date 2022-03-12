(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{518:function(t,a,s){"use strict";s.r(a);var n=s(56),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"设计模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计模式"}},[t._v("#")]),t._v(" 设计模式")]),t._v(" "),s("p",[t._v("[toc]")]),t._v(" "),s("h2",{attrs:{id:"设计原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计原则"}},[t._v("#")]),t._v(" 设计原则")]),t._v(" "),s("blockquote",[s("p",[t._v("软件模式的产生是因为变化的东西太多，为减轻人类的负担， 将一些不变的东西先用模式固化，这样让人类可以更加集中精力对付变化的东西，所以\n在软 件中大量反复使用模式（我个人认为这样的软件就叫框架软件了，比如 Ｊ２ＥＥ），不但没阻碍软 件的发展，反而是推动了软件的发展．因为其\n他使用这套软件的人就可以将更多精力集中在 对付那些无法用模式的应用上来．")])]),t._v(" "),s("p",[t._v("基于六大设计原则:")]),t._v(" "),s("ul",[s("li",[t._v("Single 单一职责  如写函数、职责过多")]),t._v(" "),s("li",[t._v("Open 开放封闭 对扩展开放，对修改封闭")]),t._v(" "),s("li",[t._v("Liskov 里氏替换")]),t._v(" "),s("li",[t._v("Law of Demeter 迪米特法则 最少知识 直接交流、减少耦合")]),t._v(" "),s("li",[t._v("Interface 接口隔离 尽可能小的接口")]),t._v(" "),s("li",[t._v("Dependency 依赖倒置 面向接口而非面向实现类，高层模块依赖于抽象而非细节 反向依赖")])]),t._v(" "),s("h3",{attrs:{id:"里氏替换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#里氏替换"}},[t._v("#")]),t._v(" 里氏替换")]),t._v(" "),s("p",[t._v("可替代性（指父类？）")]),t._v(" "),s("p",[t._v("讲继承复用，对开闭原则的补充")]),t._v(" "),s("p",[t._v("子类可以扩展父类的功能，但不能改变父类原有的功能")]),t._v(" "),s("h2",{attrs:{id:"发布订阅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅"}},[t._v("#")]),t._v(" 发布订阅")]),t._v(" "),s("p",[t._v("又叫观察者模式，定义对象间一对多的依赖关系，当一个对象状态发生变化时，所有依赖它的对象都将得到通知。JS 中就是事件模型。")]),t._v(" "),s("ul",[s("li",[t._v("订阅者，数据结构是事件名到事件回调列表的映射，有一个默认事件"),s("code",[t._v("any")])]),t._v(" "),s("li",[t._v("两个方法，一个是接收，参数是回调和事件名，一个是发出，参数是消息和事件名\n"),s("ul",[s("li",[t._v("接收， 就是写入订阅表，注意事件名存在时，回调列表要 push")]),t._v(" "),s("li",[t._v("发出，遍历调用事件名下的回调")])])]),t._v(" "),s("li",[t._v("观察者模式中观察者和被观察者是互相知道对方的存在的，而在发布订阅模式中是不知道的。")]),t._v(" "),s("li",[t._v("数据驱动，数据与逻辑分离，前因后果")]),t._v(" "),s("li",[t._v("扩展：MVC，MVVM")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cacheList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cacheList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cacheList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意这里设置的值是数组")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cacheList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cacheList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'event not found'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fn "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cacheList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nevent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("event data: ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nevent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// event data: hello")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://cnodejs.org/topic/5565b4a77d4c64752effb5dd",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES6 语法实践，用 ES6 重写《JavaScript Patterns》中的设计模式 - CNode 技术社区"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"策略模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#策略模式"}},[t._v("#")]),t._v(" 策略模式")]),t._v(" "),s("p",[t._v("算法实现和使用分离，策略类可互换，环境类接受用户请求，将请求委托给策略类")]),t._v(" "),s("p",[t._v("将不变的部分和变化的部分分隔开来是每个设计模式的主题。")]),t._v(" "),s("p",[t._v("至少两部分组成：\n一是策略类，策略类封装了具体的算法，并负责具体的算法。\n二是环境，类 Context 接受客户的请求，随后把请求委托给某一个策略类。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算工资")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" strategies "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("S")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("salary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" salary "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("salary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" salary "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("salary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" salary "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("calculateBonus")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("level"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" salary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" strategies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("level"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Context")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calculateBonus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calculateBonus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'S'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"工厂方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工厂方法"}},[t._v("#")]),t._v(" 工厂方法")]),t._v(" "),s("p",[t._v("将创建实例的责任与使用实例的责任分开")]),t._v(" "),s("p",[t._v("拿到商品，不需要关心怎么生产")]),t._v(" "),s("h2",{attrs:{id:"单例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单例"}},[t._v("#")]),t._v(" 单例")]),t._v(" "),s("p",[t._v("单一实例对象 对外提供全局访问")]),t._v(" "),s("p",[t._v("创建对象，管理单例两个职责分离")]),t._v(" "),s("h2",{attrs:{id:"建造器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建造器"}},[t._v("#")]),t._v(" 建造器")]),t._v(" "),s("p",[t._v("将复杂对象的"),s("strong",[t._v("创建")]),t._v("逻辑与最终"),s("strong",[t._v("表现")]),t._v("分离\nJS 中很少用")]),t._v(" "),s("h2",{attrs:{id:"适配器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#适配器"}},[t._v("#")]),t._v(" 适配器")]),t._v(" "),s("p",[t._v("通过对象包装，解决接口数据结构不匹配，不改变已有接口，实现协同")]),t._v(" "),s("h2",{attrs:{id:"代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代理"}},[t._v("#")]),t._v(" 代理")]),t._v(" "),s("p",[t._v("为对象提供一个代用品或占位符，以便控制对它的访问")]),t._v(" "),s("ul",[s("li",[t._v("场景：")]),t._v(" "),s("li",[t._v("优点：")]),t._v(" "),s("li",[t._v("分类：\n"),s("ol",[s("li",[t._v("虚拟代理，把开销大的对象，延迟到真正需要时创建。\n比较常用，如实现图片预加载，对象 A 负责创建 img 标签、设置 src，代理对象 B 设置 loading 图，监听 onload 后调用 A")]),t._v(" "),s("li",[t._v("保护代理，权限控制")])])])]),t._v(" "),s("h2",{attrs:{id:"合成复用原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合成复用原则"}},[t._v("#")]),t._v(" 合成复用原则")]),t._v(" "),s("h2",{attrs:{id:"装饰器、包装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#装饰器、包装"}},[t._v("#")]),t._v(" 装饰器、包装")]),t._v(" "),s("p",[t._v("decorator/wrapper")]),t._v(" "),s("p",[t._v("在不改变元对象的基础上，对对象进行包装和拓展")]),t._v(" "),s("p",[t._v("将不同职责的代码装饰合并\n不改变原有代码，直接修改原函数违返开闭原则")]),t._v(" "),s("p",[t._v("跟代理像，但代理是不方便访问本体，装饰是不确定全部功能")]),t._v(" "),s("p",[t._v("应用：")]),t._v(" "),s("ul",[s("li",[t._v("分离业务代码和数据统计代码 Function.after")]),t._v(" "),s("li",[t._v("分离表单校验和合并 Function.before")])]),t._v(" "),s("h2",{attrs:{id:"享元"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#享元"}},[t._v("#")]),t._v(" 享元")]),t._v(" "),s("p",[t._v("flyweight")]),t._v(" "),s("p",[t._v("内部状态相同、共享\n对象太多，用时间换空间的性能优化")]),t._v(" "),s("h2",{attrs:{id:"模板方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板方法"}},[t._v("#")]),t._v(" 模板方法")]),t._v(" "),s("p",[t._v("两部分：抽象父类和具体实现子类，父类封装子类的算法框架，子类继承")]),t._v(" "),s("p",[t._v("从多个子类中，分享共同点\n轮廓，骨架，通用，穷举")]),t._v(" "),s("h2",{attrs:{id:"命令模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令模式"}},[t._v("#")]),t._v(" 命令模式")]),t._v(" "),s("p",[t._v("可撤销，并发，程序无状态")]),t._v(" "),s("h2",{attrs:{id:"职责链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#职责链"}},[t._v("#")]),t._v(" 职责链")]),t._v(" "),s("p",[t._v("使多个对象都有机会处理请求，发送、多个接收解耦，传给第一个接收即可")]),t._v(" "),s("p",[t._v("应用：")]),t._v(" "),s("ul",[s("li",[t._v("多种支付场景，优惠券，库存")])]),t._v(" "),s("h2",{attrs:{id:"notes-copy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes-copy"}},[t._v("#")]),t._v(" notes copy")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("设计模式是一门语言加速程序员之间的沟通效率")])]),t._v(" "),s("li",[s("p",[t._v("设计模式为了解决特定问题每个设计模式都有优缺点，使用就要付出缺点的代价\na. Eg 观察者模式\ni. 优点")]),t._v(" "),s("ol",[s("li",[t._v("解耦\nii. 缺点")]),t._v(" "),s("li",[t._v("观察者模式会导致代码可读性和维护性下降")])])]),t._v(" "),s("li",[s("p",[t._v("设计模式只做一件事\na. 控制逻辑集中化")])]),t._v(" "),s("li",[s("p",[t._v("设计模式分为三种\na. 创建\ni. 目的为了创建对象\nii. 创建对象配置化，本身就是满足了设计模式的精髓，目的是灵活\nb. 结构")]),t._v(" "),s("ol",[s("li",[t._v("处理类或对象的组合")]),t._v(" "),s("li",[t._v("处理功能的组合关系\nc. 行为")]),t._v(" "),s("li",[t._v("描述类和对象怎么交互和怎样分配职责")]),t._v(" "),s("li",[t._v("数据和数据处理分离")])]),t._v(" "),s("ol",[s("li",[t._v("任何的代码都是\na) 数据结构\nb) 算法逻辑")])])]),t._v(" "),s("li",[s("p",[t._v("重点记忆\na. 创建型")]),t._v(" "),s("ol",[s("li",[t._v("工厂")]),t._v(" "),s("li",[t._v("建造者")]),t._v(" "),s("li",[t._v("单例\nb. 结构型")]),t._v(" "),s("li",[t._v("适配器")]),t._v(" "),s("li",[t._v("装饰")]),t._v(" "),s("li",[t._v("享元")]),t._v(" "),s("li",[t._v("代理\nc. 行为型")]),t._v(" "),s("li",[t._v("责任连")]),t._v(" "),s("li",[t._v("命令")]),t._v(" "),s("li",[t._v("观察者")]),t._v(" "),s("li",[t._v("策略")]),t._v(" "),s("li",[t._v("访问者")]),t._v(" "),s("li",[t._v("模板方法")])])]),t._v(" "),s("li",[s("p",[t._v("工厂方法\na. 简单工厂")]),t._v(" "),s("ol",[s("li",[t._v("控制集中化，可以只维护一个地方的代码\nb. 工厂方法的缺点")]),t._v(" "),s("li",[t._v("开闭原则\nc. 解决问题的思路")]),t._v(" "),s("li",[t._v("工厂方法输出接口")])])]),t._v(" "),s("li",[s("p",[t._v("建造者模式\na. 组合的过程配置化\nb. 是一步一步创建一个复杂对象\nc. 将一个复杂的对象构建与他的表示分离\nd. 创建逻辑集中化")])]),t._v(" "),s("li",[s("p",[t._v("单例\na. 作用\n1. 定义一个全局变量可以确保对象\n2. 可以随时都可以被访问\n3. 但不能防止我们的实例化多个对象\nb. 单例的核心是\n1. 配置核心化，配置集中\n2. 解决系统控制粒度的核心化")])]),t._v(" "),s("li",[s("p",[t._v("适配器\na. 一个接口转换成另一个兼容接口\nb. 使用场景\n1. 第三方系统对接\n2. 隔离外部变化时\nc. 本质\n1. 控制逻辑集中化、变化逻辑集中化\n2. 就是一个变化的处理函数\n3. 把变化的处理成使用不可变的数据\nd. 引申\n1. 生态系统稳定")])]),t._v(" "),s("li",[s("p",[t._v("代理模式\n查一下代理模式的常用场景，具体优点")])])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://pattern.windliang.wang/posts/%25E5%2589%258D%25E7%25AB%25AF%25E7%259A%2584%25E8%25AE%25BE%25E8%25AE%25A1%25E6%25A8%25A1%25E5%25BC%258F%25E7%25B3%25BB%25E5%2588%2597-%25E5%259F%25BA%25E6%259C%25AC%25E5%258E%259F%25E5%2588%2599.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端的设计模式系列-基本原则 | 前端的设计模式系列"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);