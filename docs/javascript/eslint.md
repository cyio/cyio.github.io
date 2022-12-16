# ESLint
[[toc]]

`eslint --init` 默认推荐本地安装 ，全局无法使用

## 串联和等级
* 可在子文件夹设置规则，会合并和覆盖更高层
* 会一直向上查找，如用户主目录`~/.eslintrc`，或在`package.json`显示指定`root`
[Configuring ESLint - ESLint - Pluggable JavaScript linter](https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy)

## 禁用
```js
/* eslint-disable */

const h = this.$createElement // eslint-disable-line
```
## 禁用 for in
会遍历原型链
## 禁用 for of
`iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations`
* 争论点，循环是可怕的，应避免使用，forEach 不是循环，而是迭代
* airbnb 禁用是因为 Symbols 不能 polyfilled，而禁用 Symbols 导致 Symbol.iterator 不可用
* 替代方法：`Array.from(mapOrSet, mapperFunction),Array.from(mapOrSet.keys(), mapperFunction)`
[Using 'ForOfStatement' is not allowed (no-restricted-syntax) · Issue #1271 · airbnb/javascript](https://github.com/airbnb/javascript/issues/1271#issuecomment-281756069)

## rules
* 导出全部规则，`./node_modules/.bin/eslint --print-config .eslintrc.js > .git/rules.json`
* `extends`的规则集会扩展或覆盖之前的，每条规则只有一个设置。如果出现冲突，不好排序时，只能单独在`rules`明确指定
* airbnb-base 不包含 react [javascript/packages/eslint-config-airbnb-base at master · airbnb/javascript](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) 
* @vue/eslint-config-airbnb 用的就是 airbnb-base 
[vue-cli/packages/@vue/eslint-config-airbnb at dev · vuejs/vue-cli](https://github.com/vuejs/vue-cli/tree/dev/packages/%2540vue/eslint-config-airbnb)
* [Introduction | eslint-plugin-vue](https://vuejs.github.io/eslint-plugin-vue/)
* [Efficient Code Analyzing and Formatting (for Vue.js) with ESLint and Prettier](https://medium.com/@doppelmutzi/eslint-prettier-vue-workflow-46a3cf54332f)
```js
  extends: [
    '@vue/airbnb', // 缩进要求 2
    'plugin:vue/essential',
    // 'eslint:recommended' // 不检查缩进
  ],

  rules: {
    'indent': ['warn', 2],
    'max-lines': [
      0,
      600
    ],
    'max-lines-per-function': [
      0,
      100
    ],
    'import/extensions': [
      'off',
      'always',
      {
        js: 'never',
        vue: 'never'
      }
    ],
    'comma-dangle': [
      'error',
      {
        objects: 'only-multiline',
        arrays: 'only-multiline'
      }
    ],
    'no-restricted-syntax': 0,
    'import/no-unresolved': 0,
    'no-multiple-empty-lines': [
      2,
      {
        max: 2
      }
    ],
    'dot-notation': [
      'error',
      {
        allowKeywords: false,
        allowPattern: ''
      }
    ],
    'func-names': 0,
    'func-style': 0,
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'max-nested-callbacks': 0,
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    'new-parens': 2,
    'newline-after-var': 0,
    'no-array-constructor': 2,
    'no-inline-comments': 0,
    'no-lonely-if': 0,
    'no-param-reassign': 0,
    'quote-props': 0,
    'max-len': 0,
    'guard-for-in': 0,
    'operator-assignment': 0,
    'no-use-before-define': [
      2,
      'nofunc'
    ],
    semi: 0,
    'linebreak-style': 0,
    'arrow-parens': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'consistent-return': 0,
    'space-before-function-paren': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
```

## 对象深嵌套解构
```js
const { statement: { isConfirmed }, statement } = this.props;
// 一行解出 statement 及下一级的 isConfirmed
```
[Destructuring assignment | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Nested_object_and_array_destructuring)

## vue/require-default-prop
* 没有设为 required 的 props 必须设置默认值（布尔值除外）
* 两种情况
  1. 没设置 required
  2. 设置为 false
[eslint-plugin-vue/require-default-prop.md at master · vuejs/eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-default-prop.md)

## vue

```json
    "extends": [
      "plugin:vue/essential",
      "@vue/prettier"
    ],
```

## case
- Value must be omitted for boolean attributes
存在默认值，删除即可
- hasOwnProperty
    不允许直接在 object 上使用 Object.prototype 上的方法
    1. Object.create 创建的 object 可能没有这个方法
    2. 原型方法可能被修改
```js
// error
foo.hasOwnProperty("bar")
// right
Object.prototype.hasOwnProperty.call(foo, "bar")
```

- 对象方法，使用缩写，相当于 function。如果用到 this，这种方式就不行，还是用箭头函数吧

## react
如果用到 pre state 
```js
this.setState(state => { count: state.count + 1 })
```

## linebreak-style
airbnb 是 unix

不使用，只能关掉

## jsx 部分字符符号可能意外渲染到界面上
[eslint-plugin-react/no-unescaped-entities.md at master · yannickcr/eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md)
解决：使用表达式，如`、`

## div 上绑定 onClick
[eslint-plugin-jsx-a11y/no-static-element-interactions.md at master · jsx-eslint/eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md)

解决：添加 role
```jsx
<div className="foo" onClick={() => {}} role="button" />
```

## import 不存在（比如删了）

eslint recommend / react 规则集里没有，需要安装 eslint-plugin-import，或者在文件头设置`@ts-check`

[javascript - how can I get warnings when importing modules that don't exist - Stack Overflow](https://stackoverflow.com/questions/46775309/how-can-i-get-warnings-when-importing-modules-that-dont-exist)
[eslint-plugin-import/named.md at f2db74a347a030c15a387826500cdc98203eac1e · benmosher/eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/named.md)

## alias path es/ts 无法识别
需要手动在对应配置添加

[webpack小记——alias与eslint](https://juejin.cn/post/6844903832888033288)

## eslint 和 prettier 冲突

使用 prettier 最好禁用 eslint 中代码格式化相关的规则
安装 eslint-config-prettier

另一种做法是 prettier-eslint，先 prettier 然后 eslint fix，两者兼顾

disable missing space before function parentheses · Issue #44 · prettier/eslint-plugin-prettier https://github.com/prettier/eslint-plugin-prettier/issues/44#issuecomment-323657069

暂时禁用 prettier 保存时运行

## vscode 简单格式化需求，用 eslint 插件

Setting -> formatter

[antfu/eslint-config: Anthony's ESLint config presets](https://github.com/antfu/eslint-config)

为什么不用 prettier，有很多预设规则，适应有成本

