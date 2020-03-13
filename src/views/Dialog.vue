<template>
  <div>
    <Button type="primary" @click="show">打开dialog</Button>
    <el-dialog
      title="提示"
      v-dialogDrag
      :visible.sync="showDialog"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showDialog = false">取 消</el-button>
        <el-button type="primary" @click="showDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Dialog from "../components/Dialog";
export default {
  data() {
    return {
      showDialog: false
    };
  },
  components: {
    Dialog
  },
  props: {},
  methods: {
    show() {
      this.showDialog = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>