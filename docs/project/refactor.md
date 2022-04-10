# 重构

- 嵌套的条件分支难以阅读和维护，解决方法是：外层 if 表达示反转，进入条件分支后立即 return 退出

## 重复代码

使用 jscpd 检测
```
    "duplication-check": "jscpd --config .cpd.yaml",
```

`.cpd.yaml`
```
languages:
  - javascript
  - jsx
  - css
  - less
  - htmlmixed
  - vue

exclude:
  - "src/assets/lib/*.js"
  - "src/mock/**/*.js"

files:
  - "src/**/*"
reporter: json

```