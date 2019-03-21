# storybook

组件驱动开发
纯展示组件，没有服务器接口支持下，测试 UI
pure + data context(vuex)
测试逻辑场景
合成组件

导出静态文件部署，持续集成，服务非技术人员

> Storybook是UI组件的开发环境。它允许您浏览组件库，查看每个组件的不同状态，以及交互式开发和测试组件。可独立于业务代码

目录位置 根/src
配置文件 跟组件/分离

[Get started | Storybook Tutorial](https://www.learnstorybook.com/vue/en/get-started/)
[利用StoryBook开发UI组件管理 - 掘金](https://juejin.im/post/5a7465de5188257a6a78a08c)

```js
# Run the test runner (Jest) in a terminal:
yarn test:unit

# Start the component explorer on port 6006:
yarn run storybook

# Run the frontend app proper on port 8080:
yarn serve
```

public 有图标、图片等资源需要访问
`"storybook": "start-storybook -p 6006 -s public",`

编辑`.storybook/config.js`
```js
import { configure } from '@storybook/vue';

// 1. 添加全局引入内容
import '../src/index.css';

// 2. 默认引入文件夹，stories => src
// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
```


添加装饰 context
```js
const paddedList = () => {
  return {
    template: '<div style="padding: 3rem;"><story/></div>',
  };
};

storiesOf('TaskList', module)
  .addDecorator(paddedList)
```

glow 发光

有单独的 webpack 配置，如 scss 需要处理 
```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/settings.scss";'
      }
    }
  }
}

// .storybook/webpack.config.js
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    }
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        exclude: /node_modules/,
        loaders: [{ loader: 'style-loader' }, { loader: 'css-loader' },
          { 
            loader: 'sass-loader',
            options: {
              data: '@import "@/scss/settings.scss";'
            }
          } 
        ],
      }
    ],
  },
};
```

addon-actions 打印事件信息
addon-links 故事跳转
