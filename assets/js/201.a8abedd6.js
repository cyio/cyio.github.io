(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{630:function(t,n,e){"use strict";e.r(n);var i=e(57),s=Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"无限滚动加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#无限滚动加载"}},[t._v("#")]),t._v(" 无限滚动加载")]),t._v(" "),e("h2",{attrs:{id:"basic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic"}},[t._v("#")]),t._v(" basic")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developers.google.com/web/updates/2016/07/infinite-scroller",target:"_blank",rel:"noopener noreferrer"}},[t._v("Complexities of an Infinite Scroller  |  Web  |  Google Developers"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" vue")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm install vue-infinite-loading --save\n\nimport InfiniteLoading from 'vue-infinite-loading';\n\nexport default {\n  components: {\n    InfiniteLoading,\n  },\n};\n\n// dom\n  infinite-loading(:on-infinite=\"loadMore\", ref=\"infiniteLoading\")\n    span(slot=\"no-more\") 没有更多了\n    span(slot=\"no-results\") 没有更多了\n// method\n\n  loadMore () {\n    if (this.loadStatus.busy) return\n    if (this.list) {\n      console.log('trigger loadmore', this.list && this.list.items.length)\n      if (!this.list._links.next) {\n        this.loadStatus.loadingDone = true\n        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')\n        return\n      }\n      this.loadStatus.busy = true\n      this.$http.get(this.list._links.next.href).then((response) => {\n        Array.prototype.unshift.apply(response.data.items, this.list.items)\n        this.list = response.data\n        this.loadStatus.busy = false\n        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')\n      }, (response) => {\n        this.loadStatus.loadingError = true\n      })\n    }\n  },\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);