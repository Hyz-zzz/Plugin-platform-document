# 路由

## 主页面

主页面路由的引入参考[Vue Router文档](https://router.vuejs.org/zh/)

``` js
const Offline = r => require.ensure([], () => r(require('./views/Offline')), 'offline');
const ErrorWarning = r => require.ensure([], () => r(require('./views/ErrorWarning')), 'errorWarning');

const router = new Router({
  routes: [
    {
      path: '/Offline',
      name: 'Offline',
      component: Offline
    },
    {
      path: '/ErrorWarning',
      name: 'ErrorWarning',
      component: ErrorWarning
    }
  ]
});
```

## 二级页面

将二级页面存放在`functionPage`对象中，作为变量输出。
引入方式如下：

``` js
export const functionPage = {
  AssHt: r => require.ensure([], () => r(require('./views/functionPage/AssHt'))),
};

const router = new Router({
  routes: [
    {
      path: '/AssHt',
      name: 'AssHt',
      component: functionPage.AssHt
    }
  ]
});
```

**参考:**

- [二级页面跳转](./Customize.md)
- [自定义函数](./Customize.md)