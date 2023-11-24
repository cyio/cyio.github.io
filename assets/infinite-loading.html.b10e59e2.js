import{_ as a,r as i,o as r,c as t,a as n,b as l,F as o,d as s,e as p}from"./app.ade76af1.js";const b={},c=n("h1",{id:"\u65E0\u9650\u6EDA\u52A8\u52A0\u8F7D",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u65E0\u9650\u6EDA\u52A8\u52A0\u8F7D","aria-hidden":"true"},"#"),s(" \u65E0\u9650\u6EDA\u52A8\u52A0\u8F7D")],-1),u=n("h2",{id:"basic",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#basic","aria-hidden":"true"},"#"),s(" basic")],-1),d={href:"https://developers.google.com/web/updates/2016/07/infinite-scroller",target:"_blank",rel:"noopener noreferrer"},m=s("Complexities of an Infinite Scroller \xA0|\xA0 Web \xA0|\xA0 Google Developers"),h=p(`<h2 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install vue-infinite-loading --save

import InfiniteLoading from &#39;vue-infinite-loading&#39;;

export default {
  components: {
    InfiniteLoading,
  },
};

// dom
  infinite-loading(:on-infinite=&quot;loadMore&quot;, ref=&quot;infiniteLoading&quot;)
    span(slot=&quot;no-more&quot;) \u6CA1\u6709\u66F4\u591A\u4E86
    span(slot=&quot;no-results&quot;) \u6CA1\u6709\u66F4\u591A\u4E86
// method

  loadMore () {
    if (this.loadStatus.busy) return
    if (this.list) {
      console.log(&#39;trigger loadmore&#39;, this.list &amp;&amp; this.list.items.length)
      if (!this.list._links.next) {
        this.loadStatus.loadingDone = true
        this.$refs.infiniteLoading.$emit(&#39;$InfiniteLoading:complete&#39;)
        return
      }
      this.loadStatus.busy = true
      this.$http.get(this.list._links.next.href).then((response) =&gt; {
        Array.prototype.unshift.apply(response.data.items, this.list.items)
        this.list = response.data
        this.loadStatus.busy = false
        this.$refs.infiniteLoading.$emit(&#39;$InfiniteLoading:loaded&#39;)
      }, (response) =&gt; {
        this.loadStatus.loadingError = true
      })
    }
  },
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,2);function f(g,_){const e=i("ExternalLinkIcon");return r(),t(o,null,[c,u,n("p",null,[n("a",d,[m,l(e)])]),h],64)}var v=a(b,[["render",f],["__file","infinite-loading.html.vue"]]);export{v as default};
