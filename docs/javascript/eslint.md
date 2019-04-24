# ESLint

`eslint --init` 默认推荐安装 local，全局无法使用

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

## 常用转换
```js
// error
foo.hasOwnProperty("bar")
// right
Object.prototype.hasOwnProperty.call(foo, "bar")
```
