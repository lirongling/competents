<template>
  <div>
    <div class="container">
      <h2>普通登录组件</h2>
      <div class="container">
        <Login :ruleForm="ruleForm" @submit="submit" @errHandle="errHandle" :rules="rules"></Login>
      </div>
    </div>
    <div class="container">
      <h2>手机验证码</h2>
      <div class="container">
        <PhoneLogin :ruleForm="ruleForm1" @submit="submit" @errHandle="errHandle" :rules="rules1"></PhoneLogin>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "../components/Login";
import PhoneLogin from "../components/PhoneLogin";
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 2 || value.length > 6) {
        callback(new Error("长度在2到6个字符"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6 || value.length > 15) {
        callback(new Error("长度在6到15个字符"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      let a = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (!a.test(value)) {
        callback(new Error("手机号不合法"));
      } else {
        callback();
      }
    };
    var validateCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (String(value).length != 6 && String(value).length != 4) {
        console.log(String(value).length);
        callback(new Error("长度为4个或6个字符"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        password: ""
      },
      ruleForm1: {
        phone: "",
        code: ""
      },
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      },
      rules1: {
        phone: [{ validator: validatePhone, trigger: "blur" }],
        code: [{ validator: validateCode, trigger: "blur" }]
      }
    };
  },
  components: {
    Login,
    PhoneLogin
  },
  props: {},
  methods: {
    submit() {
      this.$Notice.success({
        title: "验证成功"
      });
    },
    errHandle() {
      this.$Notice.warning({
        title: "验证失败"
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  width: 500px;
  padding: 20px;
}
</style>