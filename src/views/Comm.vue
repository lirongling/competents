<template>
  <div>
    <div class="container">
      <div class="left">
        <Menus :menu="menu" :active="active"></Menus>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { name: "首页", ico: "icon-home", to: "/" },
        { name: "趋势", ico: "icon-tendency", to: "tendency" },
        { name: "通用登录", ico: "icon-login", to: "login" },
        { name: "图片预览", ico: "icon-picture", to: "picture" },
        { name: "通知图标", ico: "icon-inform", to: "inform" },
        { name: "标签选择器", ico: "icon-label", to: "label" },
        { name: "进度条", ico: "icon-progress", to: "progress" },
        { name: "锁屏", ico: "icon-lock", to: "lock" },
        { name: "全屏", ico: "icon-full", to: "full" },
        { name: "底部工具栏", ico: "icon-hurdle", to: "hurdle" },
        { name: "拖拽dialog", ico: "icon-dialog", to: "dialog" },
        { name: "行内可编辑表格", ico: "icon-inlineTable", to: "inlineTable" },
        { name: "单元可标记表格", ico: "icon-editTable", to: "editTable" },
        { name: "回到顶部", ico: "icon-top", to: "top" },
        { name: "403", ico: "icon-403", to: "403" },
        { name: "404", ico: "icon-404", to: "404" },
        { name: "500", ico: "icon-500", to: "500" }
      ],
      active: 0
    };
  },
  components: {},
  props: {},
  beforeMount() {
    let name = this.$route.name;
    let b = this.menu.findIndex(item => item.to === name);
    if (b !== -1) {
      this.active = b;
    }
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  display: flex;
  width: 100vw;
  height: 100%;
  .left {
    height: 100%;
  }
  .right {
    flex: 1;
    padding: 30px;
  }
}
</style>