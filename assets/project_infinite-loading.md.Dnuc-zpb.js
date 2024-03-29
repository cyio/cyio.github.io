import{_ as n,c as s,o as a,a4 as p}from"./chunks/framework.4aTu-Nia.js";const g=JSON.parse('{"title":"无限滚动加载","description":"","frontmatter":{},"headers":[],"relativePath":"project/infinite-loading.md","filePath":"project/infinite-loading.md"}'),e={name:"project/infinite-loading.md"},i=p(`<h1 id="无限滚动加载" tabindex="-1">无限滚动加载 <a class="header-anchor" href="#无限滚动加载" aria-label="Permalink to &quot;无限滚动加载&quot;">​</a></h1><h2 id="basic" tabindex="-1">basic <a class="header-anchor" href="#basic" aria-label="Permalink to &quot;basic&quot;">​</a></h2><p><a href="https://developers.google.com/web/updates/2016/07/infinite-scroller" target="_blank" rel="noreferrer">Complexities of an Infinite Scroller  |  Web  |  Google Developers</a></p><h2 id="vue" tabindex="-1">vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;vue&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install vue-infinite-loading --save</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import InfiniteLoading from &#39;vue-infinite-loading&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  components: {</span></span>
<span class="line"><span>    InfiniteLoading,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// dom</span></span>
<span class="line"><span>  infinite-loading(:on-infinite=&quot;loadMore&quot;, ref=&quot;infiniteLoading&quot;)</span></span>
<span class="line"><span>    span(slot=&quot;no-more&quot;) 没有更多了</span></span>
<span class="line"><span>    span(slot=&quot;no-results&quot;) 没有更多了</span></span>
<span class="line"><span>// method</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  loadMore () {</span></span>
<span class="line"><span>    if (this.loadStatus.busy) return</span></span>
<span class="line"><span>    if (this.list) {</span></span>
<span class="line"><span>      console.log(&#39;trigger loadmore&#39;, this.list &amp;&amp; this.list.items.length)</span></span>
<span class="line"><span>      if (!this.list._links.next) {</span></span>
<span class="line"><span>        this.loadStatus.loadingDone = true</span></span>
<span class="line"><span>        this.$refs.infiniteLoading.$emit(&#39;$InfiniteLoading:complete&#39;)</span></span>
<span class="line"><span>        return</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      this.loadStatus.busy = true</span></span>
<span class="line"><span>      this.$http.get(this.list._links.next.href).then((response) =&gt; {</span></span>
<span class="line"><span>        Array.prototype.unshift.apply(response.data.items, this.list.items)</span></span>
<span class="line"><span>        this.list = response.data</span></span>
<span class="line"><span>        this.loadStatus.busy = false</span></span>
<span class="line"><span>        this.$refs.infiniteLoading.$emit(&#39;$InfiniteLoading:loaded&#39;)</span></span>
<span class="line"><span>      }, (response) =&gt; {</span></span>
<span class="line"><span>        this.loadStatus.loadingError = true</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span></code></pre></div>`,5),t=[i];function l(o,r,c,d,h,u){return a(),s("div",null,t)}const m=n(e,[["render",l]]);export{g as __pageData,m as default};
