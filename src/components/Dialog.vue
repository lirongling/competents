<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      centerDialogVisible: false
    };
  },
  components: {},
  props: {
    showDialog: {
      type: Boolean,
      default: true
    }
  },
  methods: {},

  mounted() {},
  watch: {
    showDialog(val) {
      if (val) {
        this.centerDialogVisible = val;
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>