# 接入流程

## 品类

新增模板前，需要选择品类，如果是新品类，则需要新增

- 数据结构

以空调为例，品类的数据结构如下

``` json
{
    "_id": "5e71c104d98c290c1cc48aed",
    "name": "空调",
    "seriesList": [ ... ],
    "plugin": { ... }
}
```

| 属性名 | _id | name | seriesList | plugin |
| :----: | :-: | :----: | :----: | :----: |
| 类型 | String | String | Array | Object |
| 示例 | `5e71c104d98c290c1cc48aed` | 空调 | `[ { name: "壁挂式空调", img: "Hangon.png" } ]` | `{ longpage: { name: "长页版新版插件页", path: "air-conditioning-longpage" } }` |
| 备注 | 品类id | 品类名 | 系列信息 | 模板信息 |

- 新增方法

`nodeJs`路由中使用以下方法新增品类

``` js
Model.create({ name: '测试' });
```

## 系列

新增品类后，需要选择对应系列，如果是新系列，则需要新增

- 数据结构

``` json
[
    {
        "_id": "5e71ebd4515bd0386813e083",
        "name": "壁挂式空调",
        "img": "Hangon.png"
    },
    {
        "_id": "5e71ebd4515bd0386813e084",
        "name": "立柜式空调",
        "img": "Cabinet.png"
    }
]
```

| 属性名 | _id | name | img |
| :----: | :-: | :----: | :----: |
| 类型 | String | String | Array |
| 示例 | `5e71ebd4515bd0386813e083` | 壁挂式空调 | `Hangon.png` |
| 备注 | 系列id | 系列名 | 图片名称 |

- 新增方法

``` js
Model.find().then(data => {
  const seriesList = data[0].seriesList;
  seriesList.push({
    name: '家用长版插件页',
    img: 'Hangon.png'
  });
  data[0].save();
});
```

## 模板

- 数据结构

``` json
{
  "_id": "5e7b269c7181233c242d78f9",
  "productID": "5e71c104d98c290c1cc48aed",
  "seriesID": "5e71ebd4515bd0386813e083",
  "createTime": "2020.03.25 17:38:36",
  "editUser": "陈文中",
  "editTime": "2021.04.08 17:47:10",
  "useTime": 0,
  "funcDefine": [ ... ],
  "jsonDefine": [ ... ],
  "typeDefine": [ ... ]
}
```

| 属性名 | _id | productID | seriesID | funcDefine | jsonDefine | typeDefine |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 类型 | String | String | String | Array | Array | Array |
| 备注 | 模板id | 品类id | 系列id | model定义集合 | json定义 | 类型定义 |

- 新增方法

``` js
Model.find().then(async params => {
  // 生成新模板
  const temp = JSON.parse(JSON.stringify(params[tempIndex])); // tempIndex为派生的模板

  const newTemp = new Model({
    productID: temp.productID,
    seriesID: temp.seriesID,
    createTime: temp.createTime,
    editUser: temp.editUser,
    editTime: temp.editTime,
    useTime: temp.useTime,
    funcDefine: [],
    jsonDefine: [],
    typeDefine: []
  });
  await newTemp.save();
});
```
