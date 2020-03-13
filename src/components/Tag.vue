<template>
  <div>
    <div class="container">
      <div class="item" :class="{'active': selected}" @click="clickAll">全部</div>
      <div
        class="item"
        :class="{'active': item.selected}"
        v-for="(item,index) in tagLists"
        :key="index"
        @click="clickItem(item)"
      >{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagLists: [],
      selected: false
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
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  display: flex;
  flex-wrap: wrap;
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
}
</style>