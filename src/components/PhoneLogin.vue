<template>
  <div>
    <div class="container">
      <!-- <Inputs v-model="user.username" leftIcon="icon-user"></Inputs>
      <Inputs type="password" leftIcon="icon-password"></Inputs>-->
      <Form ref="ruleForm" :model="ruleForm" :rules="rules" :label-width="80">
        <FormItem label="手机号" prop="phone">
          <Input
            type="number"
            clearable
            v-model="ruleForm.phone"
            @on-change="phoneInput"
            placeholder="请输入手机号"
          >
            <Icon type="ios-call" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem label="验证码" prop="code">
          <div class="code">
            <Input type="number" v-model="ruleForm.code" placeholder="请输入密码">
              <Icon type="md-bookmarks" slot="prepend"></Icon>
            </Input>
            <Button
              @click="sendCodes"
              style="margin-left: 20px"
              type="info"
              :disabled="disabled"
            >{{sendCode}}</Button>
          </div>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('ruleForm')">登录</Button>
          <Button style="margin-left: 20px" @click="back">返回</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: true,
      sendCode: "发送验证码"
    };
  },
  components: {},
  props: {
    ruleForm: {
      type: Object,
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$emit("submit");
          this.$Message.success("Success!");
        } else {
          this.$emit("errHandle");
          this.$Message.error("Fail!");
        }
      });
    },
    back() {
      this.$router.go(-1);
    },
    phoneInput() {
      let a = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
      if (a.test(this.ruleForm.phone)) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    // 发送验证码
    sendCodes() {
      this.$emit("sendCode");
      var count = 30;
      var timer = setInterval(() => {
        count--;
        if (count <= 0) {
          this.sendCode = "重新获取";
          this.disabled = false;
          clearInterval(timer);
        } else {
          this.sendCode = "已发送" + count;
          this.disabled = true;
        }
      }, 1000);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
/deep/input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  appearance: none !important;
  margin: 0 !important;
}

.code {
  display: flex;
  /deep/ .ivu-btn {
    width: 105px;
  }
}
</style>