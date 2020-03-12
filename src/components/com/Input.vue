<template>
  <div class="my-input">
    <input
      class="input"
      :class="[icoType,isPass]"
      :type="types"
      :disabled="disabled"
      :placeholder="placeholder"
      :value="values"
      @input="input"
    />
    <span :class="iconClass">
      <i class="iconfont" :class="icon"></i>
    </span>
    <span @click="changeType" class="input__suffix" v-if="type==='password'">
      <i class="iconfont" :class="eye"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eye: "icon-eyes",
      types: "text",
      values: ""
    };
  },
  components: {},
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: String,
      default: ""
    },
    rightIcon: {
      type: String,
      default: ""
    }
  },
  methods: {
    input(e) {
      this.values = e.target.value;
      this.$emit("input", e.target.value);
    },
    changeType() {
      if (this.types === "password") {
        this.types = "text";
        this.eye = "icon-close-eyes";
      } else {
        this.types = "password";
        this.eye = "icon-eyes";
      }
    }
  },
  beforeMount() {
    this.types = this.type;
    this.values = this.value;
  },
  mounted() {},
  watch: {},
  computed: {
    icoType() {
      if (this.leftIcon.length > 0) {
        return `input-prefix`;
      } else if (this.rightIcon.length > 0) {
        return `input-suffix`;
      } else {
        return;
      }
    },
    icon() {
      if (this.leftIcon.length > 0) {
        return this.leftIcon;
      } else if (this.rightIcon.length > 0) {
        return this.rightIcon;
      } else {
        return;
      }
    },
    isPass() {
      if (this.type === "password") {
        return "input-suffix";
      } else {
        return;
      }
    },
    iconClass() {
      if (this.leftIcon.length > 0) {
        return `input__prefix`;
      } else if (this.rightIcon.length > 0 && this.type !== "password") {
        return `input__suffix`;
      } else {
        return;
      }
    }
  }
};
</script>

<style scoped lang='scss'>
.my-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
.input:focus {
  border-color: #409eff;
  outline: 0;
}

.input {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;

  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  &-prefix {
    padding-left: 30px;
  }
  &__suffix {
    position: absolute;
    right: 5px;
    cursor: pointer;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
    // background: rgb(173, 4, 4);
  }
  &-suffix {
    padding-right: 30px;
  }
  &__prefix {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    color: #c0c4cc;
  }
}
</style>