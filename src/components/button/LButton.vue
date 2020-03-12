<template>
  <div>
    <button @click="click" class="btn" :class="[btnType,isPlain,[isRound],isCircle,]">
      <span v-if="icon.length>0">
        <i class="iconfont ico" :class="[icon]"></i>
      </span>
      <div>
        <slot v-if="$slots.default&&!circle"></slot>
      </div>

      <slot name="head"></slot>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: {
    type: {
      type: String,
      default: ""
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    }
  },
  methods: {
    click(e) {
      this.$emit("click", e);
    }
  },
  mounted() {},
  watch: {},
  computed: {
    btnType() {
      return "btn-" + this.type;
    },
    isPlain() {
      if (this.plain) {
        return "btn-" + this.type + "-plain";
      } else {
        return;
      }
    },
    isRound() {
      if (this.round) {
        return "btn-round";
      } else {
        return;
      }
    },
    isCircle() {
      if (this.circle) {
        return "btn-circle";
      } else {
        return;
      }
    }
  }
};
</script>

<style scoped lang='scss'>
i {
  font-size: 14px;
}
.btn:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.btn-round {
  border-radius: 20px !important;
  padding: 12px 23px;
}
.btn-circle {
  border-radius: 50% !important;
  padding: 12px !important;
  width: 46px !important;
  height: 46px !important;
}
span {
  width: 30px;
  display: block;
}

.btn {
  width: 98px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 4px;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  outline: none;
  &--plain {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }

  &-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &-plain {
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;
    }
  }
  &-primary:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
  &-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &-plain {
      color: #67c23a;
      background: #f0f9eb;
      border-color: #c2e7b0;
    }
  }
  &-success:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
  &-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &-plain {
      color: #909399;
      background: #f4f4f5;
      border-color: #d3d4d6;
    }
  }
  &-info:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
  &-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &-plain {
      color: #e6a23c;
      background: #fdf6ec;
      border-color: #f5dab1;
    }
  }
  &-warning:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }

  &-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &-plain {
      color: #f56c6c;
      background: #fef0f0;
      border-color: #fbc4c4;
    }
  }
  &-danger:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}
</style>