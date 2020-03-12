<template>
  <div>
    <div class="divider" :class="[dividerType]">
      <div v-if="$slots.default&&type==='horizontal'" class="divider-text">
        <slot></slot>
      </div>
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
      default: "horizontal"
    }
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {
    dividerType() {
      return `divider-${this.type}`;
    }
  }
};
</script>

<style scoped lang='scss'>
.divider {
  color: #515a6e;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: #e8eaec;
  position: relative;
  &-text {
    display: inline-block;
    padding: 0 24px;
    background: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &-horizontal {
    display: block;
    height: 1px;
    width: 100%;
    min-width: 100%;
    margin: 24px 0;
  }
  &-vertical {
    margin: 0 8px;
    display: inline-block;
    height: 0.9em;
    width: 1px;
  }
}
</style>