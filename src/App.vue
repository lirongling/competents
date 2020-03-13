<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
// 去除number类型input的加减
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
</style>
