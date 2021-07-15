// const { path } = require('@vuepress/utils')
const path = require('path')
const fs = require('fs');
const glob = require('glob');

const solutionsArr = fs
  .readdirSync(path.resolve(__dirname, '../javascript/solutions'))
  .filter(filename => filename.endsWith('.md'))
  .map(filename => 'solutions/' + filename.slice(0, -3))
  .sort()

module.exports = {
  title: 'Oaker小站',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#0089a7' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.ico' }],
  ],
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    // ['@vuepress/register-components', {
        // componentsDir: path.resolve(__dirname, './components'),
        // // components: {
          // // BlogIndex: path.resolve(__dirname, './components/BlogIndex.vue'),
          // // Footer: path.resolve(__dirname, './components/Footer.vue'),
        // // },
    // }]
  ],
  bundler: '@vuepress/vite',
  bundlerConfig: {
    // vite bundler options
  },
  themeConfig: {
    serviceWorker: {
      lastUpdated: '最后更新',
      updatePopup: true,
      updatePopup: { 
         message: "有新内容可用", 
         buttonText: "更新" 
      }
    },
    evergreen: true,
    nav: [
      // { text: '主页', link: '/' },
      { text: 'Blog', link: '/' },
      { text: 'JS', link: '/javascript/concept' },
      // { text: '题解', link: '/javascript/solutions/new.md' },
      { text: 'Web', link: '/web/html' },
      { text: '框架', link: '/frameworks/vue' },
      { text: 'Node', link: '/node/concept' },
      { text: '工具', link: '/tools/markdown' },
      { text: 'Github', link: 'https://github.com/cyio' },
      // { text: '项目', link: '/projects/' },
      // { text: '未分类', link: '/uncategorized/' },
      // { text: '关于', link: '/about' },
    ],
    sidebarDepth: 2,
    // sidebar: 'auto',
    sidebar: genSidebarConfig()
  },
}

function genSidebarConfig () {
  let sideBarData = {}
  let navKeys = [
    {
      name: 'javascript',
      displayName: 'JS',
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
      displayName: '框架',
      collapsable: false,
    },
    {
      name: 'tools',
      displayName: '工具',
      collapsable: false,
    },
    // {
    // name: 'javascript/solutions',
    // displayName: '题解',
    // collapsable: false,
    // },
  ]
  navKeys.forEach(item => {
    sideBarData[`/${item.name}/`] = [
      {
        title: item.name,
        // path: 'javascript/solutions/',
        collapsable: item.collapsable,
        children: getChildren(item.name)
      },
    ]
  })
  sideBarData['/javascript/'].push(
    {
      title: '题解',
      collapsable: false,
      children: solutionsArr
    }
  )
  // console.log(solutionsArr)
  // console.log(sideBarData)
  return sideBarData
}
/*
 * 获取文件夹下所有 md 文件名列表
 * input 目录名
 * return Arrary
 */
function getChildren(dirName) {
  let names = []
  let globPath = path.resolve(`./docs/${dirName}/*.md`)
  glob.sync(globPath).forEach(file => {
    const name = path.parse(file).name
    if (name.indexOf('README') < 0) {
      names.push(name)
    }
  })
  // console.log('glob', names)
  return names
}
