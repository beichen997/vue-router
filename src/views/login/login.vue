<template>
  <div class="login-form-div">
    <el-row type="flex" justify="center">
      <el-col :span="20" class="login-div LoginByAccount">
        <div class="title">登录</div>
        <el-form :rules="loginInfoRules" ref="ruleForm" :model="loginInfo">
          <el-form-item prop="accountCode">
            <el-input
              v-model.trim="loginInfo.accountCode"
              type="text"
              placeholder="请输入手机号码/邮箱地址/用户名"
              prefix-icon="iconfont icon-icon-131"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              maxlength="20"
              minlength="8"
              v-model="loginInfo.password"
              type="password"
              placeholder="请输入登录密码"
              prefix-icon="iconfont icon-icon-24"
            ></el-input>
          </el-form-item>
            <el-form-item label-position="left" prop="verificationCode">
            <el-col :span="14">
              <el-input
                v-model.trim="loginInfo.verificationCode"
                type="text"
                placeholder="请输入短信验证码"
                prefix-icon="iconfont icon-icon-119"
                class="validate-code-input"
              ></el-input>
            </el-col>
            <el-col class="line" :span="1">&nbsp;</el-col>
            <el-col :span="9">
              <getCode/>
            </el-col>
          </el-form-item>
          <el-button class="log-in" @click="handleLogin('ruleForm')">登录</el-button>
        </el-form>
        <el-row type="flex" justify="space-around" class="commot">
          <el-col :span="12">
            <span class="sizeColor cursor" @click="forgetPassword">忘记密码?</span>
          </el-col>
          <el-col :span="12" class="sizeColor cursor size-align">
            <router-link :to="{'name':'register'}" tag="span">
              <span>注册账户</span>
            </router-link>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { validatePhoneUser, validatePassword } from "@/utils/validate"
import { staticRoutes, dynamicRoutes } from '@/router/index'
import code from "@/components/code/Code"
export default {
  // name: 'login',
  components: {
    getCode: code
  },
  data() {
    const identifyingCodeLegal = (rule, value, callback) => {
      if (value) {
        if (value.length === 4) {
          callback()
        } else {
          callback(new Error("请输入正确的短信验证码"))
        }
      } else {
        callback(new Error("请输入短信验证码"))
      }
    }
    // 用户账号规则校验
    const accountCodeLegal = (rule, value, callback) => {
      if (!value || value === "") {
        callback(new Error("请输入手机号码/邮箱地址/用户名"))
      } else {
        callback()
      }
    }
    // 手机号规则校验
    const accountCodePhone = (rule, value, callback) => {
      if (value) {
        if (!validatePhoneUser(value)) {
          callback(new Error("请输入正确的手机号"))
        } else {
          callback()
        }
      } else {
        callback(new Error("请输入手机号码"))
      }
    }
    // 密码规则验证
    const passwordLegal = (rule, value, callback) => {
      if (!value || value === "") {
        callback(new Error("请输入密码"))
      } else {
        callback()
      }
    }
    return {
      loginInfo: {
        accountCode: "",
        password: "",
        verificationCode: ''
      },
      loginInfoRules: {
        accountCode: [{ validator: accountCodeLegal, trigger: "blur" }],
        password: [{ validator: passwordLegal, trigger: "blur" }],
        verificationCode: [{ validator: identifyingCodeLegal, trigger: 'blur' }]
      }
    }
  },
  mounted() {
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    },
    handleClick() {},
    hand() {
      window.open("http://www.baidu.com")
    },
    // 用户登录
    handleLogin(nameForm) {
      this.$refs[nameForm].validate(valid => {
        // 数据传递的规则验证
        if (valid) {
          let smt= dynamicRoutes;
          // console.log(smt)
          // let smts=smt.push({path:'*',redirect: '/404'})
          // this.$router.addRoutes(dynamicRoutes.concat([{path:'*',redirect: '/404'}]))
          sessionStorage.setItem("router", JSON.stringify(dynamicRoutes));
          this.$store.commit('SET_ID','');
          // this.$router.options.routes.push(dynamicRoutes)
          console.log(sessionStorage.getItem('router'))
          console.log(this.$router,'router');
          this.$router.push("/home1")
        } else {
          return false
        }
      })
    },
    forgetPassword() {
      this.$router.push("/forgetPassword")
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form-div {
  width: 390px;
  margin: 0 auto;
  padding-top: 15px;
  -moz-box-shadow: 0px 0px 5px 5px #ddd; /* 老的 Firefox */
  box-shadow: 0px 0px 5px 5px #ddd;
  border-radius: 10px;
}
.title{
  color:#FF6600;
text-align: center;
font-size: 30px;
padding: 10px 0;
}
.commot {
  font-size: 14px;
  margin: 20px 0;
  text-align: left;
}
.pass {
  text-align: right;
  padding-bottom: 16px;
}
.sizeColor {
  color: #333;
  font-size: 14px;
}
.cursor {
  cursor: pointer;
}

.size-align {
  text-align: right;
}

.log-in {
  width: 100%;
  background: #FF6600;
  color:#fff;
  font-size:20px;
}

.weixin {
  font-size: 14px;
  color: #606266;
  padding-right: 24px;
  position: relative;
  color: #909399;
  .weixin-icon {
    position: absolute;
    top: 0;
    right: 0;
    width: 16px;
    height: 16px;
    background-image: url("./image/weChat.svg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}
.medium-button {
  width: 100%;
}

.forget-password-div {
  width: 325px;
  margin: 0 auto;
}
</style>
