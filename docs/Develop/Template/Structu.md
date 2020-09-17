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
│   │  └─`watch.js` _(**状态监听**)_
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

**同时阅读:**

- [状态机](../config/README.md)
- [路由](../theme/)
- [组件](../theme/default-theme-config.md)