# 目录结构

::: vue
├─public _(**公用资源**)_
├─src
│   ├─assets _(**项目资源**)_
│   │  ├─iconfont
│   │  ├─img
│   │  ├─js
│   │  └─scss
│   ├─`components` _(**业务组件**)_
│   ├─config  _(**xml文件，与原生规定的传入字段**)_
│   ├─i18n  _(**翻译表**)_
│   ├─mixins _(**vue全局混入文件，不推荐使用**)_
│   ├─store _(**业务与状态机的数据交互**)_
│   │  ├─control _(**业务模块**)_
│   │  └─machine _(**状态机模块**)_
│   ├─utils _(**公用方法**)_
│   └─views _(**页面**)_
│       └─`functionPage` _(**二级页面**)_
└─package.json
:::

::: tip 注意
`functionPage`内页面一般作为JSON配置项插入
:::

**参考:**

- [状态管理](./State.md)
- [路由](./Router.md)
- [业务组件开发](./Component.md)