<!-- ForgetPassword.vue -->
<!-- Login.vue -->
<template>
  <div class="login-form-div">
    <el-row
      type="flex"
      justify="center"
    >
      <el-col
        :span="20"
        class="login-div LoginByAccount"
      >
        <div class="forget-password-div">
          <div class="header">找回密码</div>
          <el-form
            :model="forgetPasswordInfo"
            :rules="forgetPasswordInfoRules"
            ref="passForm"
            style="width:100%"
          >
            <el-form-item prop="accountCode">
              <el-input
                v-model.trim="forgetPasswordInfo.accountCode"
                prefix-icon="iconfont icon-icon-131"
                type="text"
                placeholder="请输入手机号码"
              ></el-input>
            </el-form-item>
            <el-form-item prop="verificationCode">
              <el-col :span="14">
                <el-input
                  v-model.trim="forgetPasswordInfo.verificationCode"
                  prefix-icon="iconfont icon-icon-119"
                  type="text"
                  placeholder="请输入短信验证码"
                  class="validate-code-input"
                >
                </el-input>
              </el-col>
              <el-col
                class="line"
                :span="1"
              >&nbsp;</el-col>
              <el-col :span="9">
                <getcode />
              </el-col>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                placeholder="请输入新密码"
                prefix-icon="iconfont icon-icon-24"
                v-model.trim="forgetPasswordInfo.password"
                auto-compconste="off"
              ></el-input>
            </el-form-item>
            <el-form-item prop="checkpassword">
              <el-input
                type="password"
                placeholder="请再次输入密码"
                prefix-icon="iconfont icon-icon-24"
                v-model.trim="forgetPasswordInfo.checkpassword"
                auto-compconste="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-row
                type="flex"
                justify="space-between"
              >
                <el-button
                  class="medium-button"
                  size="medium"
                  @click="handleForgetPasword('passForm')"
                >提交</el-button>
              </el-row>
            </el-form-item>
          </el-form>
          <div
            class="handlogin"
            @click="handlogin"
          >以有账号？直接登录</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { validatePhoneUser, validatePassword } from '@/utils/validate'
import code from '@/components/code/Code'
export default {
  components: {
    getcode: code
  },
  data () {
    const identifyingCodeLegal = (rule, value, callback) => {
      if (value) {
        if (value.length === 4) {
          callback()
        } else {
          callback(new Error('请输入正确的短信验证码'))
        }
      } else {
        callback(new Error('请输入短信验证码'))
      }
    }
    // 手机号规则校验
    const accountCodePhone = (rule, value, callback) => {
      if (value) {
        if (!validatePhoneUser(value)) {
          callback(new Error('请输入正确的手机号'))
        } else {
          callback()
        }
      } else {
        callback(new Error('请输入手机号码'))
      }
    }
    const passwordforget = (rule, value, callback) => {
      if (!value || value === '') {
        callback(new Error('请输入密码'))
      } else if (!validatePassword(value)) {
        callback(new Error('请输入正确的密码(8-20位字符，必须由数字、字母组成)'))
      } else {
        callback()
      }
    }
    // 确认密码规则验证
    const passCheckLegal = (rule, value, callback) => {
      if (!value || value === '') {
        callback(new Error('请再次输入新密码'))
      } else if (value !== this.forgetPasswordInfo.password) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      forgetPasswordInfo: {
        accountCode: '',
        verificationCode: '',
        password: '',
        checkpassword: ''
      },
      forgetPasswordInfoRules: {
        accountCode: [{ validator: accountCodePhone, trigger: 'blur' }],
        password: [{ validator: passwordforget, trigger: 'blur' }],
        verificationCode: [{ validator: identifyingCodeLegal, trigger: 'blur' }],
        checkpassword: [{ validator: passCheckLegal, trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 返回登录
    handlogin () {
      this.$router.push('/login')
    },
    handleForgetPasword (passForm) {
      this.$refs['passForm'].validate(async valid => {
        // 数据传递的规则验证
        if (valid) {
        }
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.medium-button{
width:100%;
background: #FF6600;
color:#fff;
font-size:20px;
}
.login-form-div{
 -moz-box-shadow: 0px 0px 5px 5px #ddd; /* 老的 Firefox */
  box-shadow: 0px 0px 5px 5px #ddd;
  border-radius: 10px;
}
.forget-password-div{
  width:325px;
  margin:0 auto;

}
.header{
  font-size:23px;
  padding:10px 0;
  color:#FF6600;
  text-align: center;
}
.handlogin{
  text-align:center;
  font-size:14px;
  color:#333;
  cursor:pointer;
  margin:10px 0;
}

</style>
