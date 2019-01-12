const path = require('path');
const glob = require('glob');

module.exports = {
  title: 'Oaker小站',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#0089a7' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.ico' }],
  ],
  serviceWorker: true,
  themeConfig: {
    serviceWorker: {
      lastUpdated: 'Last Updated',
      updatePopup: true
    },
    evergreen: true,
    nav: [
      // { text: '主页', link: '/' },
      { text: 'Blog', link: '/' },
      { text: 'JS', link: '/javascript/' },
      { text: 'Web', link: '/web/' },
      { text: '框架', link: '/frameworks/' },
      { text: 'Node', link: '/node/' },
      { text: '工具', link: '/tools/' },
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
      collapsable: true,
    },
    {
      name: 'tools',
      displayName: '工具',
      collapsable: false,
    },
  ]
  navKeys.forEach(item => {
    sideBarData[`/${item.name}/`] = [
      {
        title: item.name,
        collapsable: item.collapsable,
        children: getChildren(item.name)
      },
    ]
  })
  let config = {
    'javascript': [
      {
        title: 'Javascript',
        collapsable: false,
        children: getChildren('javascript')
      },
    ],
    'web': [
      {
        title: 'web',
        collapsable: false,
        children: getChildren('javascript')
      },
    ],
    'node': [
      {
        title: 'Node',
        collapsable: false,
        children: getChildren('javascript')
      },
    ],
    'frameworks': [
      {
        title: 'frameworks',
        collapsable: true,
        children: getChildren('javascript')
      },
    ],
    'tools': [
      {
        title: '工具',
        collapsable: false,
        children: getChildren('javascript')
      },
    ]
  }
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
