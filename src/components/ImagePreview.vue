<template>
  <div>
    <el-image :src="url" :preview-src-list="srcList"></el-image>
    <div style="width: 100px;height: 100px;magrin-top:100px;">
      <el-image :src="url" :preview-src-list="srcList"></el-image>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: {
    url: {
      type: String,
      default: ""
    },
    srcList: {
      type: Array,
      default: () => []
    }
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>