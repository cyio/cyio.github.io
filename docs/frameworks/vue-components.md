* 目录结构
```
</examples/qiyun-el-ui/
▸ lib/
▸ node_modules/
▾ packages/
  ▾ qe-modal/ -- 组件
    ▾ src/
        qe-modal.vue
      index.js
    index.js
▸ public/
▾ src/ -- 用于调试
  ▸ assets/
  ▸ components/
  ▾ plugins/ -- 自动安装
      element.js
    App.vue
    main.js
  babel.config.js
  LICENSE
  package.json
  README.md
  vue.config.js
  yarn.lock
```
* element 引用配置在 babel.config.js
* 在 App.vue 中引入测试 
```
import QeModal from '../packages/qe-modal/src/qe-modal.vue'
```
* 在 main.js 中引入
```
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/button.css'
import 'element-ui/lib/theme-chalk/dialog.css'
```
[athena0304/qiyun-el-ui: based on element-ui](https://github.com/athena0304/qiyun-el-ui)
