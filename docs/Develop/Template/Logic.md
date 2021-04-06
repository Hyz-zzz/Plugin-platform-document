# 互斥关系处理

## 排斥

在状态机中，每个事件执行结束后都会调用`checkLogic`方法检查一次互斥

``` js {19}
function checkLogic(context, identifier, statusName) {
  const { state, getters } = context;
  const checkStatusName = statusName || getters.statusMap[identifier].statusName;
  const checkStateName = `${identifier}_${checkStatusName}`;
  // 提取互斥逻辑
  const excludeStateNameArr = state.baseData.excludeMap[checkStateName];
  // 如果该状态存在互斥
  if (!excludeStateNameArr || !excludeStateNameArr.length) return;
  // 轮询互斥关系
  excludeStateNameArr.forEach(stateName => {
    // 找到互斥的identifier
    const identifier = getters.stateNameToId[stateName];
    if (!identifier) return;
    // 获取identifier的当前statusName
    const currentStatusName = getters.fakeStatusMap[identifier].statusName;
    // 获取identifier的当前stateName
    const currentStateName = `${identifier}_${currentStatusName}`;
    // 如果当前stateName被排斥，则跳转到指向状态
    stateName === currentStateName && excludeStatus(identifier, currentStatusName);
  });
}
```

如上所示，如`checkLogic`方法成功检测到排斥，会向状态机提交一个`excludeStatus`事件

``` js
class stateMachine {
  ...
  excludeStatus(identifier, fromStatusName) {
    this.stateQueue.push({ identifier, fromStatusName, type: 'exclude' });
  }
}
```

- `excludeStatus`会向事件队列尾提交事件，标明发生事件的`identifier`, `statusName`以及`type`
- 事件队列根据`type`解析排斥事件，输出指令

## 隐藏
