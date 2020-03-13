<template>
  <div>
    <div class="container">
      <div>
        <slot name="content"></slot>
      </div>
      <div>
        <slot name="btn"></slot>
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
  props: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  width: 100%;

  padding: 0 24px;
  line-height: 56px;
  background: #fff;
  border-top: 1px solid #e8eaec;
  -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.03);
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.03);
}
</style>