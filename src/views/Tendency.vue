<template>
  <div>
    <Dividers>正常</Dividers>
    <div class="content">
      <Trends>
        <template v-slot:text>
          <div>营业额</div>
        </template>
        5%
      </Trends>
      <Dividers type="vertical"></Dividers>
      <Trends type="down">
        <template v-slot:text>
          <div>个人业绩</div>
        </template>
        3%
      </Trends>
    </div>
    <Dividers>颜色反转</Dividers>
    <div class="content">
      <Trends reverseColor>
        <template v-slot:text>
          <div>营业额</div>
        </template>
        5%
      </Trends>
      <Dividers type="vertical"></Dividers>
      <Trends type="down" reverseColor>
        <template v-slot:text>
          <div>个人业绩</div>
        </template>
        3%
      </Trends>
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
.content {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
}
</style>