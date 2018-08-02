module.exports = {
  title: 'Oaker 的文档',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  serviceWorker: true,
  themeConfig: {
    serviceWorker: {
      updatePopup: true
    },
    nav: [
      { text: '主页', link: '/' },
      { text: 'JS', link: '/javascript/' },
      { text: 'CSS', link: '/css/' },
      { text: '框架', link: '/frameworks/' },
      { text: 'Node', link: '/node/' },
      { text: 'Linux', link: '/linux/' },
      { text: '未分类', link: '/uncategorized/' },
    ],
    sidebar: {
      '/javascript/': genSidebarConfig('javascript'),
      '/frameworks/': genSidebarConfig('frameworks'),
      '/linux/': genSidebarConfig('linux'),
    }
  },
}

function genSidebarConfig (title) {
  let config = {
    'javascript': [
      {
        title: 'Javascript',
        collapsable: false,
        children: [
          '',
          'array',
          'object',
          'function',
          'block-level-scope',
          'closure',
          'data-structures',
        ]
      },
    ],
    'frameworks': [
      {
        title: 'Vue',
        collapsable: true,
        children: [
        ]
      },
      {
        title: 'React',
        collapsable: true,
        children: [
        ]
      },
      {
        title: '小程序',
        collapsable: true,
        children: [
        ]
      },
    ],
    'linux': [
      {
        title: 'Linux',
        collapsable: true,
        children: [
          'vim'
        ]
      },
    ]
  }
  return config[title]
}
