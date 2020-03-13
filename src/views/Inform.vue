<template>
  <div>
    <div class="container">
      <h2>通知图标</h2>
      <div class="content">
        <div class="content-item">
          <h4>消息为空时</h4>
          <Notice></Notice>
        </div>
        <div class="content-item">
          <h4>消息为0时</h4>
          <Notice>0</Notice>
        </div>
        <div class="content-item">
          <h4>消息小于100</h4>
          <Notice>12</Notice>
        </div>
        <div class="content-item">
          <h4>消息大于99</h4>
          <Notice>
            100
            <template v-slot:content>您有100条新消息</template>
          </Notice>
        </div>
      </div>
      <div class="content">
        <div class="content-item">
          <h4>改变呼出方式click 改变大小</h4>
          <Notice trigger="click" width="300">
            100
            <template v-slot:content>您有100条新消息</template>
          </Notice>
        </div>
        <div class="content-item">
          <h4>改变呼出方式focus</h4>
          <Notice trigger="focus">
            100
            <template v-slot:content>您有100条新消息</template>
          </Notice>
        </div>
        <div class="content-item">
          <h4>改变位置</h4>
          <Notice placement="left-end">
            100
            <template v-slot:content>您有100条新消息</template>
          </Notice>
        </div>
        <div class="content-item">
          <h4>改变位置</h4>
          <Notice placement="bottom">
            100
            <template v-slot:content>您有100条新消息</template>
          </Notice>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notice from "../components/Notice";
export default {
  data() {
    return {};
  },
  components: {
    Notice
  },
  props: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.content {
  display: flex;
  align-items: center;
  .content-item {
    display: flex;
    margin: 20px;
    align-items: center;
  }
}
</style>