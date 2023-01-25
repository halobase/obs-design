export default {
  lang: 'zh-Hans',
  title: 'OBS 工作室',
  lastUpdated: true,
  outDir: '../public',
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/moobu/obs' },
    ],
    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },
    nav: [
      { text: '发布', link: '/star' },
      { text: '设置', link: '/follow' },
    ],
    sidebar: [
      {
        text: '个人中心',
        items: [
          { text: '我的收藏', link: '/star' },
          { text: '我的关注', link: '/follow' },
        ]
      }, {
        text: '置顶标签',
        items: [
          { text: 'Minecraft', link: '/minecraft' },
          { text: '守望先锋', link: '/overwatch' }
        ]
      }, {
        text: '常用标签',
        items: [
          { text: 'Docker', link: '/minecraft' },
          { text: '哔哩哔哩', link: '/overwatch' }
        ]
      }
    ]
  }
}
