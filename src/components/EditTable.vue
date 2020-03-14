<template>
  <div>
    <el-table
      @selection-change="handleSelectionChange"
      ref="multipleTable"
      tooltip-effect="dark"
      :data="tableDatas"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column
        :label="item.label"
        width="210"
        v-for="(item,index) in tableDesc"
        :key="index"
      >
        <template slot-scope="scope">
          <div @click="clickCell(scope.$index, scope.column.id,scope.row)">
            <span class="edit" v-if="columnIds===`${scope.$index}${scope.column.id}`">
              <el-input v-model="scope.row[item.prop]" size="mini" />
              <el-button size="mini" type="text" @click.stop="save(index, scope.row)">保存</el-button>
              <el-button size="mini" type="text" @click.stop="cancel(index,scope.row)">取消</el-button>
            </span>
            <span v-else>{{scope.row[item.prop]}}</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="page" style="marginTop:25px">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="pageSizeOpts"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableDatass.length"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      size: 10,
      search: "",
      tableDatass: [],
      tableIdx: -1,
      tableIdxs: -1,
      tableItem: {},
      columnIds: ""
    };
  },
  components: {},
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    tableDesc: {
      type: Array,
      default: () => []
    },
    pageNum: {
      type: Number,
      default: 10
    }
  },
  methods: {
    // 每页条数切换的配置

    handleSizeChange(val) {
      this.size = val;
    },
    handleCurrentChange(val) {
      this.page = val;
    },

    del(index) {
      this.tableDatass.splice(index, 1);
    },

    save(index, item) {
      this.$emit("edit", item);
      this.tableItem = JSON.stringify(item);
      this.columnIds = "";
    },
    cancel(index, item) {
      this.tableDatass.splice(this.tableIdxs, 1, JSON.parse(this.tableItem));
      this.columnIds = "";
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      // console.log(val);
    },
    clickCell(index, id, item) {
      // console.log(this.tableItem);

      if (
        this.tableItem.length > 0 &&
        this.tableItem !== JSON.stringify(item)
      ) {
        this.tableDatass.splice(this.tableIdxs, 1, JSON.parse(this.tableItem));
      }

      this.columnIds = `${index}${id}`;
      this.tableIdxs = this.tableDatass.indexOf(item);
      this.tableItem = JSON.stringify(item);
    }
  },
  beforeMount() {
    this.size = this.pageNum;
  },
  mounted() {
    setTimeout(() => {
      this.tableDatass = this.tableData;
    }, 1000);
  },
  watch: {
    search(val) {
      this.tableDatass = this.tableData.filter(item => {
        return JSON.stringify(item).includes(val);
      });
    }
  },
  computed: {
    tableDatas() {
      return this.tableDatass.slice(
        (this.page - 1) * this.size,
        this.page * this.size
      );
    },
    pageSizeOpts() {
      let a = [];
      let b = 50;
      if (this.tableDatass.length < 50) {
        b = this.tableDatass.length;
      }
      let i = 1;
      do {
        a.push(this.pageNum * i);
        i++;
      } while (i * this.pageNum <= b);
      return a;
    }
  }
};
</script>

<style scoped lang='scss'>
.edit {
  display: flex;
  align-items: center;
}
</style>