<template>
  <div>
    <div @click="clickItem" class="menu-item" :class="{'item-active' : isSelect}">{{name}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: {
    name: {
      type: String,
      default: ""
    },
    ico: {
      type: String,
      default: ""
    },
    to: {
      type: String,
      default: ""
    },
    isSelect: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickItem() {
      this.isSelect = true;
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.menu-item {
  color: hsla(0, 0%, 100%, 0.7);
  padding: 14px 24px;
  position: relative;
  cursor: pointer;
  font-size: 14px;
  display: flex;
}
.menu-item:hover {
  color: #fff;
  background: #515a6e;
}
.item-active {
  background: #363e4f;
  color: #2d8cf0;
}
</style>