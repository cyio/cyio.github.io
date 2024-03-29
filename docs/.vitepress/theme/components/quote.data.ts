// example.data.js
export default {
    // load() {
    //   return {
    //     hello: 'world'
    //   }
    // }
    async load() {
        // 获取远程数据
        return (await fetch('https://api.quotable.io/random')).json()
    }
  }