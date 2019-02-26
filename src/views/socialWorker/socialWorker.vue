 <!-- 完善社工资料 -->
<template>
  <el-row type="flex" justify="start">
    <el-col :offset="3" :span="10">
    <el-form ref="form" class="sociallist" :model="form" label-width="150px">
      <el-form-item label="用户名">
        <span>{{name}}</span>
      </el-form-item>
      <el-form-item label="社工证书照片">
        <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      </el-form-item>
      <el-form-item label="社工证书编号">
        <el-input v-model="form.socialCode"></el-input>
      </el-form-item>
       <el-form-item label="证书管理号">
        <el-input v-model="form.managerCode"></el-input>
      </el-form-item>
       <el-form-item label="证书类型">
         <el-col :span="12">
          <el-select class="select" v-model="form.regionCode" placeholder="请选择活动区域">
          <el-option label="区域一" value="1"></el-option>
          <el-option label="区域二" value="2"></el-option>
        </el-select>
        </el-col>
        <!-- <el-col class="line" :span="2"></el-col> -->
        <el-col :span="12">
         <el-select class="select" v-model="form.listCode" placeholder="请选择活动区域">
          <el-option label="区域一" value="1"></el-option>
          <el-option label="区域二" value="2"></el-option>
        </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="获得证书的时间">
         <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input v-model="form.idCard"></el-input>
      </el-form-item>
      <el-form-item label="出生日期">
         <el-date-picker type="date" placeholder="选择出生日期" v-model="form.birthdry" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio label="1">男</el-radio>
          <el-radio label="2">女</el-radio>
        </el-radio-group>
      </el-form-item>
       <el-form-item label="民族">
          <el-select class="social select" v-model="form.national" placeholder="请选择">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
       <el-form-item label="政治面貌">
          <el-select class="social select" v-model="form.political" placeholder="请选择">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-form-item>
       <el-form-item label="毕业院校">
        <el-input v-model="form.university"></el-input>
      </el-form-item>
       <el-form-item label="毕业时间">
        <el-input v-model="form.endDate"></el-input>
      </el-form-item>
       <el-form-item label="所学专业">
        <el-input v-model="form.professional"></el-input>
      </el-form-item>
        <el-form-item label="学历">
          <el-select class="social select" v-model="form.record" placeholder="请选择">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-form-item>
       <el-form-item label="是否从事社会工作">
        <el-radio-group v-model="form.resource">
          <el-radio label="1">是</el-radio>
          <el-radio label="2">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="单位类别">
          <el-select class="social select" v-model="form.unit" placeholder="请选择">
            <el-option
              v-for="item in units"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.tell"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="联系地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="邮编">
        <el-input v-model="form.zipCode"></el-input>
      </el-form-item>
      <el-form-item label="所在地区">
         <el-col :span="8">
          <el-select class="select" v-model="form.code1" placeholder="请选择活动区域">
          <el-option label="上海" value="1"></el-option>
          <el-option label="北京" value="2"></el-option>
        </el-select>
        </el-col>

        <el-col :span="8">
         <el-select class="select" v-model="form.code2" placeholder="请选择活动区域">
          <el-option label="上海市直辖" value="1"></el-option>
          <el-option label="上海市郊区" value="2"></el-option>
        </el-select>
        </el-col>

          <el-col :span="8">
         <el-select class="select" v-model="form.code3" placeholder="请选择活动区域">
          <el-option label="黄埔" value="1"></el-option>
          <el-option label="宝山" value="2"></el-option>
        </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="职务">
        <el-input v-model="form.position"></el-input>
      </el-form-item>
       <el-form-item label="社会工作领域">
          <el-checkbox-group v-model="form.checkedItems" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="item in items" :label="item" :key="item">{{item}}</el-checkbox>
          </el-checkbox-group>
      </el-form-item>
      <el-form-item label="社会工作专长">
       <el-checkbox-group v-model="form.checkedlist" @change="handleCheckedChange">
            <el-checkbox v-for="item in lists" :label="item" :key="item">{{item}}</el-checkbox>
          </el-checkbox-group>
      </el-form-item>
      <el-form-item label="从事社会工作经历">
        <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 8}" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="Submit" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  // name: 'login',
  components: {
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

    return {
       imageUrl: '',
       name:'2345671',
         options1: [{
          value: '1',
          label: '汉族'
        }, {
          value: '2',
          label: '壮族'
        }],
          options2: [{
          value: '1',
          label: '党员'
        }, {
          value: '2',
          label: '团员'
        }],
         options3: [{
          value: '1',
          label: '本科'
        }, {
          value: '2',
          label: '专科'
        }],
        units:[{
          value: '1',
          label: '党政机关'
        }, {
          value: '2',
          label: '事业单位'
        },{
          value: '3',
          label: '企业'
        }],
      items:['家庭','医务','健康','安置','信访'],
      lists:['家庭','医务','健康','安置','信访'],
      form: {
        socialCode: '',
        managerCode: '',
        regionCode: '1',
        listCode: '1',
        date: '',
        userName: '',
        idCard:'',
        birthdry: '',
        sex: '1',
        national: '1',
        political: '1',
        email: '',
        university:'',
        endDate:'',
        professional: '',
        record: '1',
        unit: '1',
        resource: '1',
        tell: '',
        phone:'',
        address:'',
        zipCode: '',
        code1: '1',code2:'1',code3:'1',
        position:'',
        desc:'',
        checkedItems:[],
        checkedlist:[]
      }
    }
  },
  mounted() {
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    handleCheckedCitiesChange(value) {
      console.log(value,this.form.checkedItems);
    },
    handleCheckedChange(value){
      console.log(value,this.form.checkedItems);
    }
  }
}
</script>

<style lang="scss" >
.sociallist{
  margin:20px 0;
  .avatar-uploader .el-upload {
    border: 1px dashed #ddd;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .Submit{
    background: #FF6600;
    color:#fff;
  }
  .select{
    width:100%;
  }
}

</style>
