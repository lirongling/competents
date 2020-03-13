<template>
  <div>
    <div class="container" @click="showFull">
      <el-popover placement="top-start" :content="content" width="auto" trigger="hover">
        <i slot="reference" class="el-icon-s-grid"></i>
      </el-popover>
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";
export default {
  data() {
    return {
      content: "开启全屏",
      isFullscreen: false
    };
  },
  components: {},
  props: {},
  methods: {
    showFull() {
      // if (!screenfull.enabled) {
      //   // 如果不允许进入全屏，发出不允许提示
      //   this.$message({
      //     message: "不支持全屏",
      //     type: "warning"
      //   });
      //   return false;
      // }
      screenfull.toggle();
      if (this.isFullscreen) {
        this.content = "开启全屏";
        this.isFullscreen = false;
        this.$message({
          message: "关闭全屏啦",
          type: "success"
        });
      } else {
        this.content = "关闭全屏";
        this.isFullscreen = true;
        this.$message({
          message: "全屏啦",
          type: "success"
        });
      }
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
i {
  font-size: 26px;
}
</style>