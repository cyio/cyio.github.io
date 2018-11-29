# 无限滚动加载

## basic
[Complexities of an Infinite Scroller  |  Web  |  Google Developers](https://developers.google.com/web/updates/2016/07/infinite-scroller)

## vue

```
npm install vue-infinite-loading --save

import InfiniteLoading from 'vue-infinite-loading';

export default {
  components: {
    InfiniteLoading,
  },
};

// dom
  infinite-loading(:on-infinite="loadMore", ref="infiniteLoading")
    span(slot="no-more") 没有更多了
    span(slot="no-results") 没有更多了
// method

  loadMore () {
    if (this.loadStatus.busy) return
    if (this.list) {
      console.log('trigger loadmore', this.list && this.list.items.length)
      if (!this.list._links.next) {
        this.loadStatus.loadingDone = true
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
        return
      }
      this.loadStatus.busy = true
      this.$http.get(this.list._links.next.href).then((response) => {
        Array.prototype.unshift.apply(response.data.items, this.list.items)
        this.list = response.data
        this.loadStatus.busy = false
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, (response) => {
        this.loadStatus.loadingError = true
      })
    }
  },
```
