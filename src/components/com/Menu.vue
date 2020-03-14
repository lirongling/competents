<template>
  <div>
    <div class="container">
      <ul>
        <li
          v-for="(item,index) in menu"
          :key="index"
          @click="clickItem(index,item.to)"
          :class="{'item-active' : activeIdx===index}"
        >
          <i class="iconfont ico" :class="[item.ico]"></i>
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIdx: 0
    };
  },
  components: {},
  props: {
    menu: {
      type: Array,
      default: () => []
    },
    active: {
      type: Number,
      default: 0
    }
  },
  methods: {
    clickItem(index, to) {
      this.activeIdx = index;
      if (this.$route.name !== to) {
        this.$router.push(to);
      }
    }
  },
  beforeMount() {
    this.activeIdx = this.active;
  },
  mounted() {
    // let a = this.$route.name;
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  min-width: 200px;
  background: #515a6e;
  height: 100%;
  ul {
    li {
      color: hsla(0, 0%, 100%, 0.7);
      padding: 14px 24px;
      position: relative;
      cursor: pointer;
      font-size: 14px;
      display: flex;
      align-items: center;

      .ico {
        margin-right: 5px;
      }
    }
    li:hover {
      color: #fff;
      background: #515a6e;
    }
    .item-active {
      background: #363e4f !important;
      color: #2d8cf0 !important;
      transition: all 0.2s ease-in-out;
    }
  }
}
</style>