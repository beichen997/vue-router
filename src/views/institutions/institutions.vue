<!-- 完善机构资料 -->
<template>
  <el-row type="flex" justify="start">
    <el-col :offset="3" :span="10">
    <el-form ref="form" class="institutions" :model="form" label-width="170px">
      <el-form-item label="机构名称">
        <el-input v-model="form.institutionsName"></el-input>
      </el-form-item>
       <el-form-item label="社会组织统一信用代码">
        <el-input v-model="form.managerCode"></el-input>
      </el-form-item>
      <el-form-item label="是否有持证社工">
        <el-radio-group v-model="form.socialWorker">
          <el-radio label="1">是</el-radio>
          <el-radio label="2">否</el-radio>
        </el-radio-group>
      </el-form-item>
       <el-form-item label="规模">
          <el-select class="select" v-model="form.regionCode" placeholder="请选择活动区域">
          <el-option label="市级" value="1"></el-option>
          <el-option label="区级" value="2"></el-option>
        </el-select>
      </el-form-item>
       <el-form-item label="性质">
        <el-select class="select" v-model="form.listCode" placeholder="请选择活动区域">
          <el-option label="国家行政单位" value="1"></el-option>
          <el-option label="公司合作企业" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="form.userAddress"></el-input>
      </el-form-item>
      <el-form-item label="发证机关">
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
      <el-form-item label="联系电话">
        <el-input v-model="form.tell"></el-input>
      </el-form-item>
      <el-form-item label="邮编">
        <el-input v-model="form.zipCode"></el-input>
      </el-form-item>
       <el-form-item label="业务主管部门">
        <el-input v-model="form.department"></el-input>
      </el-form-item>
       <el-form-item label="业务部门主管电话">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="机构负责人姓名">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="机构负责人职务">
          <el-select class="social select" v-model="form.record" placeholder="请选择">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="机构负责人手机号">
        <el-input v-model="form.positionPhone"></el-input>
      </el-form-item>
      <el-form-item label="机构负责人邮箱">
        <el-input v-model="form.positionemail"></el-input>
      </el-form-item>
       <el-form-item label="社会工作专领域">
          <el-checkbox-group v-model="form.checkedItems" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="item in items" :label="item" :key="item">{{item}}</el-checkbox>
          </el-checkbox-group>
      </el-form-item>
       <el-form-item label="服务宗旨">
        <el-input v-model="form.service"></el-input>
      </el-form-item>
       <el-form-item label="成立时间">
         <el-date-picker type="date" placeholder="选择出生日期" v-model="form.birthdry" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="机构规模">
        <el-input v-model="form.manger"></el-input>
      </el-form-item>
      <el-form-item label="机构官网">
        <el-input v-model="form.url"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="QQ">
        <el-input v-model="form.qq"></el-input>
      </el-form-item>
      <el-form-item label="微信">
        <el-input v-model="form.weixin"></el-input>
      </el-form-item>
      <el-form-item label="业务范围">
        <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 8}" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="服务展开情况">
        <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 8}" v-model="form.servierStart"></el-input>
      </el-form-item>
      <el-form-item label="机构简介">
        <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 8}" v-model="form.introduction"></el-input>
      </el-form-item>
       <el-form-item label="机构现状">
        <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 8}" v-model="form.status"></el-input>
      </el-form-item>
       <el-form-item label="机构特色">
        <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 8}" v-model="form.features"></el-input>
      </el-form-item>
       <el-form-item label="证书logo">
        <el-upload
        key="list1"
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess1"
        :before-upload="beforeAvatarUpload1">
        <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      </el-form-item>
      <el-form-item label="法人证书">
        <el-upload
        key="list2"
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess2"
        :before-upload="beforeAvatarUpload2">
        <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      </el-form-item>
      <el-form-item label="二维码">
        <el-upload
        key="list3"
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess3"
        :before-upload="beforeAvatarUpload3">
        <img v-if="imageUrl3" :src="imageUrl3" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
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
       imageUrl1: '',
       imageUrl2: '',
       imageUrl3: '',
         options3: [{
          value: '1',
          label: '总干事'
        }, {
          value: '2',
          label: '主任'
        },{
          value: '3',
          label: '秘书长'
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
        institutionsName: '',
        managerCode: '',
        regionCode: '1',
        listCode: '1',
        date: '',
        userAddress: '',
        code1: '1',code2:'1',code3:'1',
        unit: '1',
        tell: '',
        phone:'',
        department:'',
        zipCode: '',
        userName:'',
        record:'1',
        positionPhone:'',
        positionemail: '',
        birthdry: '',
        socialWorker: '1',
        service: '',
        manger:'',
        url:'',
        email: '',
        qq: '',
        weixin: '',
        desc:'',
        servierStart: '',
        introduction:'',
        status:'',
        features:'',
        checkedItems:[],
      }
    }
  },
  mounted() {
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    handleAvatarSuccess1(res, file) {
        this.imageUrl1 = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload1(file) {
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
     handleAvatarSuccess2(res, file) {
        this.imageUrl2 = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload2(file) {
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
     handleAvatarSuccess3(res, file) {
        this.imageUrl3 = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload3(file) {
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
    }
  }
}
</script>

<style lang="scss" >
.institutions{
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
