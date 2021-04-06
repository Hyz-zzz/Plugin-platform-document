# 相关接口

## setMqttStatusCallback(*mac*, *callBack*)

影子设备项目中，提供回调让App主动传递变更的数据给插件页

### params

| 参数 | mac| callBack |
| :----: | :----: | :----: |
| 类型 | **String** | **Function** |
| 作用 | - | 插件获取/更新数据方法 |
| 必须 | **true** | **true** |
| 示例 | f497ac9e34751c | ` data => { dispatch(types.MQTT_CALLBACK, data) } `|
