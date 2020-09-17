# 状态管理

## 名词

### model

- Type: `Object`

model包含了一个功能的所有定义。

model的结构：

``` js
{
  "identifier": String, // 唯一标识符。
  "json": String, // 状态字段名。
  "type": String, //  类型，用于布局的时候区分。
  "statusDefine": Object, // status的定义集合。
  "map": Object // status的指向关系集合。
}
```
  
**参考**

- [statusDefine](../guide/deploy.md#github-pages)
- [map](../guide/assets.md#base-url)

### status

- Type: `Object`

功能的抽象状态定义，作为statusDefine的对象属性，拥有对应的statusName作为key值。

status的结构：

``` js
"statusName": {
  "name": String, // 名称，一版不直接使用
  "value": Number|String, // 状态值
  "isCheck": Boolean, // 是否检查互斥
  "customize": String|Boolean, // 自定义函数接入
  "moreCommand": Object, // 可选，更多命令
  // 可选，对应图标
  "icon": {
    "key": String,
    "type": "on"|"off"
  },
  // 可选，对应小图标
  "miniIcon": {
    "key": String
  },
  "hideArr": [String], // 可选，隐藏的state的key值
  "excludeArr": [String] // 可选，排斥的state的key值
}
```

### state

- Type: `String`


## API

## 机制