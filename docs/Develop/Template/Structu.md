# 目录结构

::: vue
├─public
├─src
│   ├─assets
│   │  ├─iconfont
│   │  ├─img
│   │  ├─js
│   │  └─scss
│   ├─`components` _(**业务组件**)_
│   ├─config
│   ├─i18n
│   ├─`logic` _(**状态机配置**)_
│   │  ├─`customize.js` _(**自定义函数**)_
│   │  ├─`define.js` _(**状态机API**)_
│   │  ├─`port.js` _(**数据接口**)_
│   │  ├─`watch.js` _(**状态监听**)_
│   │  └─`work.js` _(**业务逻辑**)_
│   ├─mixins
│   │  ├─ _**config**_ _(**已废弃，抽离的组件公用配置项**)_
│   │  └─utils
│   ├─store
│   ├─utils
│   └─views
│       └─`functionPage` _(**二级页面**)_
└─package.json
:::

::: tip 注意
functionPage内页面一般作为配置项插入
:::

**参考:**

- [状态管理](./State.md)
- [路由](./Router.md)
- [组件开发](./Component.md)