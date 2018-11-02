# Vuex

* 全局实例注入
```
import store from './store';

new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: { App }
});
```
* 在`computed`中，用对象展开符展开 store 中的对象
```
    ...mapState({
        userInfo: 'userInfo'
    }),
```
