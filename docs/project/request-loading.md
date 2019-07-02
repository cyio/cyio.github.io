## 转圈或进度

在http工具拦截器中设置
要考虑如何切换loading的显示与否，一种方案是用bus全局事件
参考第一条答案：[vue.js - [vue2.0]在http intercepter加载loading组件，无法显示 - SegmentFault](https://segmentfault.com/q/1010000008214689)

https://github.com/greyby/vue-spinner

```js
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.http.interceptors.push((request, next) => {
    // 请求发送前处理
    NProgress.start();
    next((response)=>{
        // 请求发送后处理
        NProgress.done();
        return response
      });
});
```
