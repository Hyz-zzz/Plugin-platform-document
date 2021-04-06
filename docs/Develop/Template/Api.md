# API

## stateMachine

`stateMachine`是一个定义在`store/machine/actions.js`里的类。它具有以下API：

### getStatusName

- **Description**: 根据`identifier`获取当前`statusName`（**现态**的`statusName`）
- **Param**:
  - { String } identifier
- **Example**:
  
```js
stateMachine.getStatusName('Pow'); // Pow_defalut
```

### nextStatus

- **Description**: 根据`identifier`激活`model`的**次态**
- **Param**:
  - { String } identifier
- **Example**:
  
```js
stateMachine.nextStatus('Pow'); // Pow_default => Pow_status_1
```

### toStatus

- **Description**: 根据`identifier`与`statusName`将`model`跳转到指定状态
- **Param**:
  - { String } identifier
  - { String } statusName
- **Example**:
  
```js
stateMachine.toStatus('Pow', 'status_2'); // Pow_default => Pow_status_2
```

### checkLogic

- **Description**: 根据`identifier`检查`model`的互斥
- **Param**:
  - { String } identifier
- **Example**:
  
```js
stateMachine.checkLogic('Pow'); // 检查并执行identifier为'Pow'的model的互斥
```

## machine/getters

`store/machine/getters.js`里定义了许多可供业务使用的API：

### fakeStatusMap

- **Description**: 根据`identifier`获取`伪现态`（没有经过隐藏关系处理，不是真正的`现态`）的相关信息
- **Type**: { Object }
- **Example**: { identifier: { statusName, stateName, status } }

### funcDefine_active

- **Description**: 定义为**显性功能**的`model`合集
- **Type**: { Array }
- **Example**: [ model ]

### funcDefine_inertia

- **Description**: 定义为**隐性功能**的`model`合集
- **Type**: { Array }
- **Example**: [ model ]

### funcDefineMap

- **Description**: 根据`identifier`找到对应的`model`
- **Type**: { Object }
- **Example**: { identifier: model }

### hideMapReverse

- **Description**: 根据被隐藏的`stateName`找到具有隐藏关系的`stateName`合集
- **Type**: { Object }
- **Example**: { stateName: [ stateName ] }

### hideStateNameArr

- **Description**: 被隐藏的`stateName`合集
- **Type**: { Array }
- **Example**:  [ stateName ]

### identifierArr

- **Description**: 所有`model`的`identifier`合集
- **Type**: { Array }
- **Example**: [ identifier ]

### nextStatusInfoMap

- **Description**: 根据`identifier`获取`model`的**次态**的相关信息
- **Type**: { Object }
- **Example**: { identifier: { statusName, status, json, setData, customize } }

### noDirectionModelArr

- **Description**: 没有**次态**的`model`的`identifier`合集
- **Type**: { Array }
- **Example**: [ identifier ]

### stateNameToId

- **Description**: 根据`stateName`获取`identifier`
- **Type**: { Object }
- **Example**: { stateName: identifier }

### statusMap

- **Description**: 根据`identifier`获取**现态**的相关信息
- **Type**: { Object }
- **Example**: { identifier: { statusName, stateName, status } }

### statusLoop

- **Description**: 根据`identifier`获取`model`的状态指向关系
- **Type**: { Array }
- **Example**: { identifier: [ statusName ] }

### statusNameMap

- **Description**: 根据`identifier`获取`model`的`statusName`合集
- **Type**: { Object }
- **Example**: { identifier: [ statusName ] }

### statusDirectionMap

- **Description**: 根据`identifier`获取**次态**的`statusName`
- **Type**: { Object }
- **Example**: { identifier: statusName }

### statusInfoMap

- **Description**: 根据`identifier`与`statusName`获取`status`的相关信息
- **Type**: { Object }
- **Example**: { identifier: { statusName: { statusName, status, json, setData, customize } } }

### valToFakeStatusName

- **Description**: 根据`identifier`与`model.json`的值`value`获取`statusName`，没有经过隐藏关系处理
- **Type**: { Object }
- **Example**: { identifier: { value: statusName } }

### valToStatusName

- **Description**: 根据`identifier`与`model.json`的值`value`获取`statusName`
- **Type**: { Object }
- **Example**: { identifier: { value: statusName } }
