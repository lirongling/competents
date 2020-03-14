<template>
  <div>
    <el-table :data="tableDatas" style="width: 100%">
      <el-table-column
        :label="item.label"
        width="180"
        v-for="(item,index) in tableDesc"
        :key="index"
      >
        <template slot-scope="scope">
          <span v-if="tableIdx===scope.$index">
            <el-input v-model="scope.row[item.prop]" size="mini" />
          </span>
          <span v-else>{{scope.row[item.prop]}}</span>
        </template>
      </el-table-column>

      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <span v-if="tableIdx===scope.$index">
            <el-button size="mini" @click="save(scope.$index, scope.row)">保存</el-button>
            <el-button size="mini" type="danger" @click="cancel(scope.$index,scope.row)">取消</el-button>
          </span>
          <span v-else>
            <el-button
              style="margin-right:10px"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-popconfirm title="这是一段内容确定删除吗？" @onConfirm="del(scope.$index)">
              <el-button size="mini" type="danger" slot="reference">删除</el-button>
            </el-popconfirm>
          </span>
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
      tableItem: {},
      tableIdxs: -1
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
    handleEdit(index, item) {
      if (this.tableItem.length > 0) {
        this.tableDatass.splice(this.tableIdxs, 1, JSON.parse(this.tableItem));
      }
      this.tableItem = JSON.stringify(item);
      this.tableIdx = index;
      this.tableIdxs = this.tableDatass.indexOf(item);
    },
    save(index, item) {
      this.$emit("edit", item);
      this.tableItem = JSON.stringify(item);
      this.tableIdx = -1;
    },
    cancel(index, item) {
      this.tableDatass.splice(this.tableIdxs, 1, JSON.parse(this.tableItem));
      this.tableIdx = -1;
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
</style>