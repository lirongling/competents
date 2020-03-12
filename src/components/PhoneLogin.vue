<template>
  <div>
    <div class="container">
      <!-- <Inputs v-model="user.username" leftIcon="icon-user"></Inputs>
      <Inputs type="password" leftIcon="icon-password"></Inputs>-->
      <Form ref="ruleForm" :model="ruleForm" :rules="rules" :label-width="80">
        <FormItem label="手机号" prop="phone">
          <Input v-model="ruleForm.phone" placeholder="请输入手机号">
            <Icon type="ios-call" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem label="密码" prop="code">
          <Input v-model="ruleForm.code" placeholder="请输入密码">
            <Icon type="md-bookmarks" slot="prepend"></Icon>
          </Input>
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
    return {};
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
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>