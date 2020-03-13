<template>
  <div>
    <div class="container">
      <h2>标签选择器</h2>
      <div class="container">
        <Tag :tagList="tagList"></Tag>
      </div>
    </div>
    <div class="container">
      <h2>标签选择器(可展开和收起)</h2>
      <div class="container">
        <SelectTag :tagList="tagLists"></SelectTag>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "../components/Tag";
import SelectTag from "../components/SelectTag";
export default {
  data() {
    return {
      tagList: [
        { name: "标签1", selected: false },
        { name: "标签2", selected: false },
        { name: "标签3", selected: false },
        { name: "标签4", selected: false },
        { name: "标签5", selected: false },
        { name: "标签6", selected: false },
        { name: "标签7", selected: false },
        { name: "标签8", selected: false },
        { name: "标签9", selected: false },
        { name: "标签10", selected: false },
        { name: "标签11", selected: false },
        { name: "标签12", selected: false },
        { name: "标签13", selected: false }
      ],
      tagLists: [
        { name: "标签1", selected: false },
        { name: "标签2", selected: false },
        { name: "标签3", selected: false },
        { name: "标签4", selected: false },
        { name: "标签5", selected: false },
        { name: "标签6", selected: false },
        { name: "标签7", selected: false },
        { name: "标签8", selected: false },
        { name: "标签9", selected: false },
        { name: "标签10", selected: false },
        { name: "标签11", selected: false },
        { name: "标签12", selected: false },
        { name: "标签13", selected: false },
        { name: "标签14", selected: false },
        { name: "标签15", selected: false },
        { name: "标签16", selected: false },
        { name: "标签17", selected: false }
      ]
    };
  },
  components: {
    Tag,
    SelectTag
  },
  props: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  padding: 20px;
  width: 500px;
}
</style>