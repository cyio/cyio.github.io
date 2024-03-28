import { defineConfig } from 'vitepress'
import path from 'node:path';
import glob from 'glob';
import {getFirstHeading} from './util';

export default defineConfig({
  // 打包输出目录
  outDir: '../dist',

  // 站点语言标题等
  lang: 'zh-CN',
  title: 'Oaker的知识库',
  description: 'Oaker的成长之路，包含前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等',

  // Site Metadata
  ignoreDeadLinks: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav: nav(),
    sidebar: genSidebarConfig(),
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '页面导航'
    },
    footer: {
      message: '当一个程序员对算法、语言标准、底层、原生、英文文档这些词汇产生恐惧感的时候，他的技术生命已经走到尽头',
      // copyright: 'Copyright © 2019-present Evan You'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/cyio' }],

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    search: {
      provider: 'local'
    }
  },
})
function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '主页', link: '/' },
    { text: 'Blog', link: '/blog/index.html' },
    { text: 'JavaScript', link: '/javascript/concept.html' },
    // { text: '题解', link: '/javascript/solutions/new.md' },
    { text: 'Web', link: '/web/html.html' },
    { text: '框架', link: '/frameworks/vue.html' },
    { text: 'Node', link: '/node/concept.html' },
    { text: '工具', link: '/tools/markdown.html' },
    { text: '算法', link: '/javascript/algorithms/index.html' },
    { text: '题解', link: '/javascript/solutions/fib.html' },
    // { text: 'Github', link: 'https://github.com/cyio' },
    // { text: '项目', link: '/projects/' },
    // { text: '未分类', link: '/uncategorized/' },
    // { text: '关于', link: '/about' },
    // {
    //   text: 'Reference',
    //   link: '/reference/site-config',
    //   activeMatch: '/reference/'
    // },
    // {
    //   text: pkg.version,
    //   items: [
    //     {
    //       text: 'Changelog',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    //     },
    //     {
    //       text: 'Contributing',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
    //     }
    //   ]
    // }
  ]
}

// Multiple Sidebars
// sidebar: {
//   '/javascript/': [{
//     text: 'JavaScript',
//     base: '/javascript/',
//     collapsed: false,
//     items: [{
//       text: '概念',
//       link: 'concept'
//     }]
//   }],
//   '/node/': [{
//     text: 'Node',
//     base: '/node/',
//     collapsed: false,
//     items: [{
//       text: '概念',
//       link: 'concept'
//     }]
//   }],
// },
function genSidebarConfig () {
  let sideBarData = {}
  let navKeys = [
    {
      name: 'javascript',
      displayName: 'JavaScript',
      collapsable: false,
    },
    {
      name: 'web',
      displayName: 'Web',
      collapsable: false,
    },
    {
      name: 'node',
      displayName: 'Node',
      collapsable: false,
    },
    {
      name: 'frameworks',
      displayName: 'Frameworks',
      collapsable: false,
    },
    {
      name: 'tools',
      displayName: 'Tools',
      collapsable: false,
    },
    {
      name: 'javascript/algorithms',
      displayName: '算法',
      collapsable: false,
    },
    {
      name: 'javascript/solutions',
      displayName: '题解',
      collapsable: false,
    },
  ]
  navKeys.forEach(item => {
    sideBarData[`/${item.name}/`] = [
      {
        text: item.displayName,
        base: `/${item.name}/`,
        collapsible: item.collapsable,
        items: getChildren(item.name)
      },
      // ...getChildren(item.name)
    ]
  })
  // console.log(solutionsArr)
  // console.log(sideBarData['/javascript/'])
  return sideBarData
}
/*
 * 获取文件夹下所有 md 文件名列表
 * input 目录名
 * return Arrary
 */
function getChildren(dirName) {
  // console.time('glob')
  let names = []
  let globPath = path.resolve(`./docs/${dirName}/*.md`)
  glob.sync(globPath).forEach(async (file, index) => {
    const name = path.parse(file).base
    if (name.indexOf('README') < 0) {
      // 解析 heading
      const firstHeading = await getFirstHeading(path.resolve('./docs/' + dirName, name))
      // console.log('firstHeading: ', firstHeading);
      names.push({
        text: firstHeading || name.split('.')[0],
        // text: name.split('.')[0],
        link: name
      });
    }
  })
  // console.timeEnd('glob')
  return names
}