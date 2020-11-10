# 状态管理

## 名词

### model

- Type: `Object`
- Description：`model`包含了一个功能的所有定义

``` js {2}
{
  "order": [ statusName1, statusName2, ... ], // 状态的变更顺序，被map替代，已废弃
  "identifier": String, // 唯一标识符
  "json": String, // 状态字段名
  "type": String, //  类型
  "statusDefine": { statusName1: status1, statusName2: status2, ... }, // status合集，以statusName作为属性名
  "map": { statusName1: statusName2, statusName2: statusName3, ... } // status指向关系合集
}
```

### status

- Type: `Object`
- Description：功能的抽象状态定义，作为`statusDefine`的属性，拥有对应的`statusName`作为属性名

``` js
statusName: {
  "name": String, // 名称，一版不直接使用
  "value": Number|String, // 状态值
  "isCheck": Boolean, // 是否检查互斥
  "customize": String|Boolean, // 自定义函数接入
  "moreCommand": Object, // 可选，更多命令
  // 可选，对应图标
  "icon": {
    "key": String,
    "type": String
  },
  // 可选，对应小图标
  "miniIcon": {
    "key": String
  },
  "hideArr": [stateName1, stateName2, ...], // 可选，隐藏的stateName
  "excludeArr": [stateName1, stateName2, ...] // 可选，排斥的stateName
}
```

### statusName

- Type: `String`
- Description: `status`的属性名
- Rule:
  1. 不可重复
  2. `statusDefine`下必须存在的`statusName`: `defalut`, `undefined`
  3. 新增的`statusName`值为`status_${num}`，`num`从1开始依次递增，如：`status_1`、`status_2`

### state

- Type: `Object`
- Description：功能的具象状态定义，拥有对应的`stateName`作为属性名
- Rule：指向对应的`status`
  
### stateName

- Type: `String`
- Description：`state`的属性名
- Rule：值为`${identifier}_${statusName}`，如：`Pow_default`、`Pow_status_1`

**参考:**

- [identifier来源：model](#model)
- [statusName](#statusname)

## API

## 运行机制

### 什么是状态

### 状态与数据的双向绑定

### 
