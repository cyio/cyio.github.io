# NEXT

pages -> next -> next build -> next start(prod)
```
mkdir hello-next
cd hello-next
npm init -y
npm install --save react react-dom next
mkdir pages

{
  "scripts": {
    "dev": "next"
  }
}

import Link from 'next/link'
```

pages 目录最关键，不可变，考虑全放到 pages 目录下

## now 发布工具
不需要本地依赖，就是给线上的配置
```
  "scripts": {
    "start": "micro index"
  },
  "dependencies": {
    "micro": "latest"
  }

```
