<template>
  <div>
    <InlineTable :tableData="tableData" :tableDesc="tableDesc"></InlineTable>
  </div>
</template>

<script>
import InlineTable from "../components/InlineTable";
export default {
  data() {
    return {
      tableData: [],
      tableDesc: []
    };
  },
  components: {
    InlineTable
  },
  props: {},
  methods: {
    getTable() {
      this.$api
        .getTable()
        .then(res => {
          if (res.code === 200) {
            this.tableData = res.data;
            // this.tableDesc = Object.keys(res.data[0]);
            this.tableDesc = [
              { label: "编号", prop: "id" },
              { label: "描述", prop: "des" },
              { label: "调用次数", prop: "requestNumber" },
              { label: "状态", prop: "state" },
              { label: "更新时间", prop: "date" }
            ];
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getTable();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>