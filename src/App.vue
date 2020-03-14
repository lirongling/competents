<template>
  <div id="app">
    <router-view />
    <BackTop></BackTop>
  </div>
</template>
<script>
import BackTop from "./components/BackTop";
export default {
  components: {
    BackTop
  }
};
</script>

<style lang="scss">
// 去除number类型input的加减
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
</style>
