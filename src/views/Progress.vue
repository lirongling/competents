<template>
  <div>
    <div class="container">
      <div class="item">
        <h2>普通进度条</h2>
        <Progress :percentage="35.5"></Progress>
      </div>
      <div class="item">
        <h2>普通进度条控制高度</h2>
        <Progress height="12" :percentage="65.5"></Progress>
      </div>
      <div class="item">
        <h2>文字内显</h2>
        <Progress showType="1" height="10px" :percentage="35.5"></Progress>
      </div>
      <div class="item">
        <h2>自定义颜色</h2>
        <Progress height="10px" bg-color="rgb(255, 68, 102)" showType="1" :percentage="35.5"></Progress>
      </div>
      <div class="item">
        <h2>不显示进度</h2>
        <Progress noData height="10px" bg-color="rgb(255, 68, 102)" showType="1" :percentage="35.5"></Progress>
      </div>
      <div class="item">
        <h2>自定义显示内容</h2>
        <Progress
          :line-data="true"
          noData
          height="10px"
          bg-color="rgb(255, 68, 102)"
          showType="1"
          :percentage="35.5"
        >
          <template v-slot:content>转化率(日同比 66% )</template>
        </Progress>
      </div>
      <div class="item">
        <h2>进度条加载动画</h2>
        <Progress isAnimate :percentage="35.5"></Progress>
      </div>
      <div class="item">
        <h2>自定义加载动画时长</h2>
        <Progress duration="5000" isAnimate :percentage="35.5"></Progress>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from "../components/Progress";
export default {
  data() {
    return {};
  },
  components: {
    Progress
  },
  props: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  width: 600px;
  .item {
    margin: 20px 0;
  }
}
</style>