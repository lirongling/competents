<template>
  <div>
    <Hurdle v-if="show">
      <template v-slot:content>这是一段内容</template>
      <template v-slot:btn>
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" style="margin-left=20px">确定</el-button>
      </template>
    </Hurdle>
  </div>
</template>

<script>
import Hurdle from "../components/Hurdle";
export default {
  data() {
    return {
      show: true
    };
  },
  components: {
    Hurdle
  },
  props: {},
  methods: {
    cancel() {
      this.show = false;
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>