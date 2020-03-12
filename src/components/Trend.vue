<template>
  <div>
    <div class="trend">
      <div class="text">
        <slot name="text"></slot>
      </div>
      <i class="iconfont ico" :class="[trendType,types]"></i>
      <slot></slot>
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
    type: {
      type: String,
      default: "up"
    },
    reverseColor: {
      type: Boolean,
      default: false
    }
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {
    trendType() {
      return `icon-${this.type}`;
    },
    types() {
      if (this.reverseColor) {
        if (this.type === "up") {
          return "down";
        } else {
          return "up";
        }
      } else {
        return this.type;
      }
    }
  }
};
</script>

<style scoped lang='scss'>
.trend {
  display: flex;
  align-items: center;
  .ico {
    margin-right: 5px;
  }
  .up {
    color: #f5222d;
  }
  .down {
    color: #52c41a;
  }
  .text {
    font-size: 14px;
  }
}
</style>