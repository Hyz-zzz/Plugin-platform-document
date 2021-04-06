# 案例

## 判断MQTT版本

### 前置知识

- **UA**: `navigator.userAgent`
- **正则匹配**

### 代码

::: tip
建议存放在`utils`目录下
:::

``` js
export const isMqtt = () => {
  const UA = navigator.userAgent;
  let reg = /upper_device_protocol_version\/V*(\d*)/; // 匹配固件版本
  let ver = UA.match(reg);
  if (!ver) return 0;

  let version = ver[1]; // 模块传的值 "V3.0+"
  if (Number(version) < 3) return 0;

  reg = /mqttfunction\/V*(\d*)/; // 匹配影子设备版本
  ver = UA.match(reg);
  // 至少为一期
  if (!ver) return 1;
  return Number(ver[1]) || 1;
};
```

### 详解

以`UA = Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 upper_device_protocol_version/V3.0.0`为例子。

- 第一步，匹配`upper_device_protocol_version/V`，取出**协议版本**
- 如果没有命中，返回`0`。表示**不支持MQTT**。

``` js
const UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 upper_device_protocol_version/V3.0.0';
let reg = /upper_device_protocol_version\/V*(\d*)/; // 匹配固件版本
let ver = UA.match(reg); // ["upper_device_protocol_version/V3", "3", index: 110, input: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac O…obile/15E148 upper_device_protocol_version/V3.0.0", groups: undefined]
if (!ver) return 0;
```

- 第二步，取出匹配值，在上述正则表达式中，存在分组`(\d*)`，将其取出。
- 此匹配项为**协议版本**，如果小于`3`，返回`0`表示**不支持MQTT**。

``` js
let version = ver[1]; // 模块传的值 "V3.0+"
if (Number(version) < 3) return 0;
```

- 已经确定支持`MQTT`，接下来就是确定`MQTT`版本
- 第三步，匹配`/mqttfunction\/V*(\d*)/`，取出**MQTT版本**
- 返回分组`(\d*)`对应的版本，**注意支持MQTT的版本至少应为1**

``` js
reg = /mqttfunction\/V*(\d*)/; // 匹配MQTT版本
ver = UA.match(reg);
// 至少为一期
if (!ver) return 1;
return Number(ver[1]) || 1;
```

## 初始化

遵循以下规则

- **不支持MQTT**或**MQTT版本为1**时，通过接口主动查询数据
- **支持MQTT**时，调用`setMqttStatusCallback`给主体传递插件`callBack`方法

``` js
// 我们上面的篇章已经定义了isMqtt的实现
const mqttVer = isMqtt();

function init() {
  mqttVer <= 1 && /* 查询数据 */

  mqttVer && setMqttStatusCallback(/* something */)
}
```

## 轮询

遵循以下规则

- **不支持MQTT**或**MQTT版本为1**时，开启轮询，否则关闭

``` js
// 我们上面的篇章已经定义了isMqtt的实现
const mqttVer = isMqtt();

function setPolling() {
  mqttVer <= 1 && /* Open Polling */
}

```
