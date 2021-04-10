module.exports = {
  port: 3100,
  title: 'Plugin自动化开发平台',
  description: '提供业务插件开发最佳解决方案',
  theme: '@vuepress/vue',
  base: '/Plugin-platform-document/',
  themeConfig: {
    lastUpdated: 'Last Updated',
    sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    // 顶部导航栏
    nav: [
      { text: '影子设备', link: '/MQTT/' },
      { text: '指南', link: '/Guide/' },
      { text: '设备接入', link: '/Access/' },
      { text: '开发文档', link: '/Develop/' },
      { text: '接口文档', link: '/Interface/' },
      {
        text: '了解更多',
        items: [
          { text: '设计理念', link: '/' },
          { text: '术语', link: '/' },
          { text: 'FAQ', link: '/' }
        ]
      },
      { text: 'GitHub', items: [{ text: 'GitHub首页', link: 'https://github.com/BugManHere/Developer-Platform' }] }
    ],
    // 侧边栏分组
    sidebar: {
      '/MQTT/': [
        {
          title: '相关接口',
          path: '/MQTT/Interface',
          collapsable: false
        },
        {
          title: '案例',
          path: '/MQTT/Example',
          collapsable: false
        },
        {
          title: '接入须知',
          path: '/MQTT/Tip',
          collapsable: false
        }
      ],
      '/Guide/': [
        {
          title: '指南',
          children: [
            ['/', '介绍（未开放）'],
            ['/', '目录结构（未开放）'],
            ['/', '基本配置（未开放）'],
            ['/', '部署（未开放）']
          ],
          collapsable: false
        },
        {
          title: '深入',
          children: [
            ['/', '状态机（未开放）'],
            ['/', '二维关系表（未开放）']
          ],
          collapsable: false
        }
      ],
      '/Access/': [
        {
          title: '设备接入',
          children: [
            ['/', '介绍（未开放）'],
            ['/Access/Process', '接入流程'],
            ['/', '基本配置（未开放）']
          ],
          collapsable: false
        }
      ],
      '/Develop/': [
        {
          title: '平台开发',
          children: [
            ['/Develop/Platform/Preface', '介绍'],
            ['/', '目录结构（未开放）'],
            ['/', '基本配置（未开放）']
          ],
          collapsable: false
        },
        {
          title: '模板开发',
          children: [
            ['/Develop/Template/Preface', '介绍'],
            ['/Develop/Template/Structu', '目录结构'],
            ['/Develop/Template/Router', '路由'],
            ['/Develop/Template/State', '状态机设计模式'],
            ['/Develop/Template/Logic', '互斥关系处理'],
            ['/Develop/Template/Api', 'API'],
            ['/Develop/Template/Customize', '自定义函数'],
            ['/Develop/Template/Component', '组件开发'],
          ],
          collapsable: false
        }
      ],
      '/Interface/': [
        {
          title: '用户相关',
          children: [
            ['/', '注册（未开放）'],
            ['/', '登录（未开放）']
          ],
          collapsable: false
        },
        {
          title: '模板相关',
          children: [
            ['/', '获取模板信息（未开放）'],
            ['/', '创建新模板（未开放）'],
            ['/', '保存所有更改（未开放）'],
            ['/', '保存某一更改（未开放）'],
            ['/', '添加新功能（未开放）'],
            ['/', '删除某一功能（未开放）']
          ],
          collapsable: false
        },
        {
          title: '设备相关',
          children: [
            ['/', '获取设备信息（未开放）'],
            ['/', '创建新设备（未开放）'],
            ['/', '删除某一设备（未开放）'],
            ['/', '保存所有更改（未开放）'],
            ['/', '删除某一功能（未开放）'],
            ['/', '保存并下载配置（未开放）']
          ],
          collapsable: false
        },
        {
          title: '插件相关',
          children: [['/', '获取插件配置（未开放）']],
          collapsable: false
        }
      ]
    }
  },
  plugins: [
    [
      'container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>'
      }
    ]
  ]
};
