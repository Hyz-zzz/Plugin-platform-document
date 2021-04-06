# 组件开发

- 根据在平台上定义好的功能类型，在组件中获取对应的`model`，转化成组件需要的数据结构
- 所有事件都将经过状态机处理

## 示例

以按钮组为例子

``` vue {4,22,23,51}
<template>
  <card-group>
    <template v-slot:content>
      <btn-group :btn-list="btnList" /> <!-- 将解析后的数据结构输入 -->
    </template>
  </card-group>
</template>

<script>
import { mapGetters } from 'vuex';
import { glyphs } from '@assets/iconfont/iconfont.json';
import BtnGroup from '@/components/BtnGroup/index';
import CardGroup from '@/components/CardGroup/index';

export default {
  name: 'adv-btn-group',
  components: {
    [BtnGroup.name]: BtnGroup,
    [CardGroup.name]: CardGroup
  },
  computed: {
    ...mapGetters(['buttonDefine']), // 从getter里取数据
    ...mapGetters('machine', ['statusMap', 'blindModelArr']), // 从状态机里取数据
    // 解析成组件需要的数据结构
    btnList() {
      if (!Object.keys(this.statusMap).length) return [];
      const result = this.buttonDefine.map(model => {
        const identifier = model.identifier;
        if (!this.statusMap[identifier])
          return {
            icon: {},
            handler: () => {
              console.log('Undefined function');
            }
          };
        // 当前status定义
        const status = this.statusMap[identifier].status;
        // 取名称
        const defaultNameKey = `btn.${identifier}`;
        const statusNameText = status.name;
        const stateNameText = `${defaultNameKey}_${statusNameText}`;
        const name = stateNameText === this.$language(stateNameText) ? this.$language(defaultNameKey) : this.$language(stateNameText);
        // 图标
        const icon = glyphs.some(item => item.font_class === status.icon.key) ? status.icon : { key: 'undefined', type: 'off' };
        // 是否置灰
        const gray = this.blindModelArr.includes(identifier);
        // 是否隐藏
        const hide = status.icon.key === 'disable';
        // 执行的方法
        const handler = (identifier, disable = false) => {
          disable || this.$stateMachine.nextStatus(identifier); // 状态机执行方法
        };
        return { key: identifier, name, icon, gray, hide, handler };
      });
      return result;
    }
  }
};
</script>

```