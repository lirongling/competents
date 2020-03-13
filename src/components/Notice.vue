<template>
  <div>
    <div class="content">
      <i class="el-icon-bell"></i>
      <span class="badge" v-if="this.$slots.default&&text">
        <el-popover
          v-if="text==='99+'"
          :placement="placement"
          :trigger="trigger"
          :width="width"
          v-model="visible"
        >
          <slot name="content"></slot>
          <span slot="reference">{{text}}</span>
        </el-popover>
        <span v-else>{{text}}</span>
        <span v-if="false">
          <slot></slot>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  components: {},
  props: {
    trigger: {
      type: String,
      default: "hover"
    },
    width: {
      type: String,
      default: "200"
    },
    placement: {
      type: String,
      default: "top-start"
    }
  },
  methods: {},
  mounted() {
    // console.log(this.$slots.default[0].text);
  },
  watch: {},
  computed: {
    text() {
      if (this.$slots.default) {
        let a = this.$slots.default[0].text;
        if (a > 0 && a < 100) {
          return a;
        } else if (a == 0) {
          return;
        } else if (a > 99) {
          return "99+";
        }
      }
    }
  }
};
</script>

<style scoped lang='scss'>
i {
  font-size: 23px;
}
.content {
  position: relative;
}
.badge {
  position: absolute;
  top: 0;
  right: 10px;
  transform: translateY(-50%) translateX(100%);
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f56c6c;
  font-size: 12px;
  color: #fff;
}
</style>