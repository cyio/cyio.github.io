# eslint

## 禁用 for in
会遍历原型链
## 禁用 for of
`iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations`
* 争论点，循环是可怕的，应避免使用，forEach 不是循环，而是迭代
* airbnb 禁用是因为 Symbols 不能 polyfilled，而禁用 Symbols 导致 Symbol.iterator 不可用
* 替代方法：`Array.from(mapOrSet, mapperFunction),Array.from(mapOrSet.keys(), mapperFunction)`
[Using 'ForOfStatement' is not allowed (no-restricted-syntax) · Issue #1271 · airbnb/javascript](https://github.com/airbnb/javascript/issues/1271#issuecomment-281756069)
