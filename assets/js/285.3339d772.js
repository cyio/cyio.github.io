(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{725:function(t,e,v){"use strict";v.r(e);var _=v(56),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"tmux"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tmux"}},[t._v("#")]),t._v(" Tmux")]),t._v(" "),v("p",[v("a",{attrs:{href:"http://man.openbsd.org/OpenBSD-current/man1/tmux.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("tmux(1) - OpenBSD manual pages"),v("OutboundLink")],1)]),t._v(" "),v("blockquote",[v("p",[t._v("server <=> client => session => pane => window")])]),t._v(" "),v("h2",{attrs:{id:"cheatsheet"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cheatsheet"}},[t._v("#")]),t._v(" cheatsheet")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("功能")]),t._v(" "),v("th",[t._v("按键")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("前缀键")]),t._v(" "),v("td",[t._v("ctrl+k")])]),t._v(" "),v("tr",[v("td",[t._v("新建窗口/会话")]),t._v(" "),v("td",[t._v("c/shift-c")])]),t._v(" "),v("tr",[v("td",[t._v("水平分割")]),t._v(" "),v("td",[t._v('"（两个点）')])]),t._v(" "),v("tr",[v("td",[t._v("垂直分割")]),t._v(" "),v("td",[t._v("%（两个圈）")])]),t._v(" "),v("tr",[v("td",[t._v("切换窗口")]),t._v(" "),v("td",[t._v("o")])]),t._v(" "),v("tr",[v("td",[t._v("调换窗口")]),t._v(" "),v("td",[t._v("ctrl+o")])]),t._v(" "),v("tr",[v("td",[t._v("调整大小")]),t._v(" "),v("td",[t._v("ctrl+方向键")])]),t._v(" "),v("tr",[v("td",[t._v("列出所有窗口")]),t._v(" "),v("td",[t._v("w")])]),t._v(" "),v("tr",[v("td",[t._v("关闭当前窗口")]),t._v(" "),v("td",[t._v("&")])]),t._v(" "),v("tr",[v("td",[t._v("关闭 pane")]),t._v(" "),v("td",[t._v("x")])]),t._v(" "),v("tr",[v("td",[t._v("显示 pane 编号")]),t._v(" "),v("td",[t._v("q")])]),t._v(" "),v("tr",[v("td",[t._v("切换 pane")]),t._v(" "),v("td",[t._v(";")])]),t._v(" "),v("tr",[v("td",[t._v("查找 window")]),t._v(" "),v("td",[t._v("f")])]),t._v(" "),v("tr",[v("td",[t._v("last window")]),t._v(" "),v("td",[t._v("ctrl+l")])]),t._v(" "),v("tr",[v("td",[t._v("独立为新窗口")]),t._v(" "),v("td",[t._v("!")])]),t._v(" "),v("tr",[v("td",[t._v("列出所有 session")]),t._v(" "),v("td",[t._v("s")])]),t._v(" "),v("tr",[v("td",[t._v("切换 session")]),t._v(" "),v("td",[t._v("()")])]),t._v(" "),v("tr",[v("td",[t._v("放大当前窗口/恢复")]),t._v(" "),v("td",[t._v("z")])])])]),t._v(" "),v("p",[t._v("前缀键改为 "),v("code",[t._v("ctrl+k")]),t._v("，进入命令模式输入："),v("code",[t._v("set -g prefix ^k")]),t._v(" "),v("a",{attrs:{href:"https://gist.github.com/MohamedAlaa/2961058",target:"_blank",rel:"noopener noreferrer"}},[t._v("tmux shortcuts & cheatsheet"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"滚屏模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#滚屏模式"}},[t._v("#")]),t._v(" 滚屏模式")]),t._v(" "),v("p",[t._v("默认状态下不能滚屏，进入：前缀键 + [\n滚动：vi 按键风络或上下方向键或 PgUp/PgDown\n复制："),v("code",[t._v("prefix -> [ -> v -> y -> q")]),t._v("\n粘贴："),v("code",[t._v("prefix -> ]")])]),t._v(" "),v("h2",{attrs:{id:"会话"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#会话"}},[t._v("#")]),t._v(" 会话")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("# 创建会话\ntmux new -s [NAME]\n# 挂载会话\ntmux attach\n# 分离会话\ntmux detach\n# 列出会话\ntmux ls\n# 杀掉会话\ntmux kill-session -t [ID]\n# 保存会话\n`prefix ctrl s`\n# 恢复会话\n`prefix ctrl r`\n")])])]),v("h2",{attrs:{id:"大屏访问小屏时-修正窗口尺寸"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#大屏访问小屏时-修正窗口尺寸"}},[t._v("#")]),t._v(" 大屏访问小屏时，修正窗口尺寸")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("在大屏的 tmux 中\nprefix - D\ndetach 掉时间较旧的\n\n或者\ntmux list-client\ntmux detach-client -s 0\n\n或者 detach 掉除当前外的所有\ntmux detach -a\n")])])]),v("h2",{attrs:{id:"插件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),v("p",[t._v("安装插件管理器")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm\ntmux source ~/.tmux.conf\n")])])]),v("p",[t._v("在配置中写入插件地址，然后在 Tmux 中按下\n"),v("code",[t._v("prefix - I")]),t._v("，安装,\n"),v("code",[t._v("prefix - U")]),t._v("，更新,\n"),v("code",[t._v("prefix - alt - u")]),t._v("，卸载，注意这里是小写 u,")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://linuxtoy.org/archives/tmux-resurrect-and-continuum.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tmux Resurrect & Continuum: 持久保存 Tmux 会话 · LinuxTOY"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("快速创建 session "),v("code",[t._v("prefix - C")]),t._v("\n杀掉建 session "),v("code",[t._v("prefix - X")])])])}),[],!1,null,null,null);e.default=r.exports}}]);