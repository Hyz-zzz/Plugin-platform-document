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

二级页面统一存放在`@/views/functionPage`目录下

### 引入

二级页面的引入使用自定义的`requireComponents`方法

``` js
const requireComponents = componentNames => {
  const result = {};
  componentNames.forEach(componentName => {
    result[componentName] = r => require.ensure([], () => r(require(`@/views/functionPage/${componentName}`)));
  });
  return result;
};
```

`requireComponents`方法会遍历输入的`componentNames`数组，在`@/views/functionPage`目录下找到对应的`component`引入

### 注册

二级页面的引入使用自定义的`registerRoute`方法

``` js
const registerRoute = componentNames => {
  return componentNames.map(componentName => {
    return {
      path: `/${componentName}`,
      name: componentName,
      component: functionPage[componentName]
    };
  });
};
```

`registerRoute`方法会遍历输入的`componentNames`数组，将其按照相应的规则注册

**参考:**

- [二级页面跳转](./Customize.md)
- [自定义函数](./Customize.md)

### 挂载到平台

- 首先将当前二级页面打开，截取效果图

![Router page](./../../.vuepress/public/img/router-page.png)

- 将效果图保存到`client/assets/page`对应的模板目录下，并取名，如`示例`
- 修改`client/assets/page`对应的模板目录下的`index.json`，添加页面

``` json {18,19,20,21,22,23}
{
  "pageConfig": {
    "SweepUd-const": {
      "routerName": "SweepConst",
      "params": {
        "id": 2
      }
    },
    "SweepLr-const": {
      "routerName": "SweepConst",
      "params": {
        "id": 1
      }
    },
    "AssHt": {
      "routerName": "AssHt"
    },
    "示例": {
      "routerName": "模板内路由名称",
      "params": {
        "属性名": "属性值" // 向路由传入的参数
      }
    }
  }
}
```
