<template>
  <div>
    <div class="container" :class="{'open' : btnText==='收起'}" :style="{maxHeight:height}">
      <div class="item" ref="getheight" :class="{'active': selected}" @click="clickAll">全部</div>
      <div
        class="item"
        :class="{'active': item.selected}"
        v-for="(item,index) in tagLists"
        :key="index"
        @click="clickItem(item)"
      >{{item.name}}</div>
      <div class="btn">
        <el-button type="text" @click="up">
          {{btnText}}
          <i :class="icon"></i>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagLists: [],
      selected: false,
      btnText: "展开",
      icon: "el-icon-arrow-down",
      height: 30
    };
  },
  components: {},
  props: {
    tagList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    up() {
      if (this.btnText === "展开") {
        this.btnText = "收起";
        this.icon = "el-icon-arrow-up";
      } else {
        this.btnText = "展开";
        this.icon = "el-icon-arrow-down";
      }
    },
    clickItem(item) {
      item.selected = !item.selected;
      this.selected = this.tagLists.every(item => {
        return item.selected;
      });
    },
    clickAll() {
      this.selected = !this.selected;
      this.tagLists.map(item => {
        item.selected = this.selected;
      });
    }
  },
  beforeMount() {
    this.tagLists = this.tagList;
    this.selected = this.tagLists.every(item => {
      return item.selected;
    });
  },
  mounted() {
    this.height = this.$refs.getheight.offsetHeight + "px";
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.open {
  max-height: 1000000px !important;
}
.container {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
  padding-right: 50px;
  .item {
    margin-right: 10px;
    padding: 2px 5px;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .active {
    background: #2d8cf0;
    color: #fff;
  }
  .btn {
    position: absolute;
    right: 0;
    top: -6px;
  }
}
</style>