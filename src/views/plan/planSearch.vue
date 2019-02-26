<template>
  <div>
    <el-row>
      <el-col>
        <p class="search-title">查询条件</p>
        <el-card class="box-card">
          <el-form :inline="true" :model="formInline" :rules="formInlineRules" ref="formInline" class="demo-form-inline" label-width="85px" label-position="right">
            <el-form-item label="款式：" prop="styles">
              <el-input class="search-common" v-model="formInline.styles" placeholder="请输入款式"></el-input>
            </el-form-item>
            <el-form-item label="订单：" prop="orders">
              <el-input class="search-common" v-model="formInline.orders" placeholder="请输入订单"></el-input>
            </el-form-item>
            <el-form-item label="组别：" prop="groups">
              <el-input class="search-common" v-model="formInline.groups" placeholder="请输入组别"></el-input>
            </el-form-item>
            <el-form-item label="状态：" prop="status">
              <el-select class="search-common" v-model="formInline.status" placeholder="请选择状态">
                <el-option label="状态一" value="shanghai"></el-option>
                <el-option label="状态二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="开始时间：" prop="startTime">
              <el-date-picker
                class="search-common"
                v-model="formInline.startTime"
                :picker-options="pickerOptions"
                type="date"
                placeholder="请选择开始时间">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间：" prop="endTime">
              <el-date-picker
                class="search-common"
                v-model="formInline.endTime"
                :picker-options="pickerOptions"
                type="date"
                placeholder="请选择结束时间">
              </el-date-picker>
            </el-form-item>
            <el-form-item class="last-item">
              <el-row type="flex" justify="start">
                <el-button @click="resetForm('formInline')">清空条件</el-button>
                <el-button type="warning" @click="submitForm('formInline')">检索数据</el-button>
              </el-row>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="search-row">
      <el-col>
        <p class="search-title">排单数据</p>
        <el-card class="box-card">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="status"
              label="状态">
              <template slot-scope="scope">
                <el-button
                  round
                  :type="buttonType(scope.row.status)"
                  size="mini">{{scope.row.status=='0'?'未审核':scope.row.status=='1'?'已审核':'已完成'}}</el-button>
              </template>
            </el-table-column>
            <el-table-column
              prop="groups"
              label="组别">
            </el-table-column>
            <el-table-column
              prop="styles"
              label="款式">
            </el-table-column>
            <el-table-column
              prop="orders"
              label="订单">
            </el-table-column>
            <el-table-column
              prop="ordersNum"
              label="订单数">
            </el-table-column>
            <el-table-column
              prop="startTime"
              label="开始时间">
            </el-table-column>
            <el-table-column
              prop="endTime"
              label="结束时间">
            </el-table-column>
          </el-table>
          <el-row type="flex" justify="end" style="margin-top:36px">
            <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formInlineRules:{
        styles: [
          { required: false, message: '请选择活动区域', trigger: 'blur' }
        ],
        orders: [
          { required: false, message: '请选择活动区域', trigger: 'blur' }
        ],
        groups: [
          { required: false, message: '请选择活动区域', trigger: 'blur' }
        ],
        status: [
          { required: false, message: '请选择活动区域', trigger: 'change' }
        ],
        startTime: [
          { required: false, message: '请选择活动区域', trigger: 'change' }
        ],
        endTime: [
          { required: false, message: '请选择活动区域', trigger: 'change' }
        ]
      },
      formInline: {
        styles: '',
        orders: '',
        groups: '',
        status: '',
        startTime: '',
        endTime: ''
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      tableData: [{
        status: '0',
        groups: '缝制组一组/缝制组二组',
        styles: '款式001',
        orders: '订单001',
        ordersNum: '950',
        startTime: '2019-01-02',
        endTime: '2019-01-11',
      }, {
        status: '1',
        groups: '缝制组一组/缝制组二组',
        styles: '款式001',
        orders: '订单001',
        ordersNum: '950',
        startTime: '2019-01-02',
        endTime: '2019-01-11',
      }, {
        status: '2',
        groups: '缝制组一组/缝制组二组',
        styles: '款式001',
        orders: '订单001',
        ordersNum: '950',
        startTime: '2019-01-02',
        endTime: '2019-01-11',
      }, {
        status: '0',
        groups: '缝制组一组/缝制组二组',
        styles: '款式001',
        orders: '订单001',
        ordersNum: '950',
        startTime: '2019-01-02',
        endTime: '2019-01-11',
      },{
        status: '0',
        groups: '缝制组一组/缝制组二组',
        styles: '款式001',
        orders: '订单001',
        ordersNum: '950',
        startTime: '2019-01-02',
        endTime: '2019-01-11',
      }, {
        status: '1',
        groups: '缝制组一组/缝制组二组',
        styles: '款式001',
        orders: '订单001',
        ordersNum: '950',
        startTime: '2019-01-02',
        endTime: '2019-01-11',
      }, {
        status: '2',
        groups: '缝制组一组/缝制组二组',
        styles: '款式001',
        orders: '订单001',
        ordersNum: '950',
        startTime: '2019-01-02',
        endTime: '2019-01-11',
      }]
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    buttonType(status) {
      // 0 未审核 1 已审核 2 已完成
      if (status == '0'){
        return 'warning'
      } else if(status == '1') {
        return 'success'
      } else if(status == '2') {
        return 'info'
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.search-row {
  margin-top: 20px;
}
.search-title {
  text-indent: 16px;
  height: 28px;
  line-height: 28px;
  font-size: 16px;
}
.search-title::before {
  content: "";
  position: absolute;
  top: 6px;
  left: 0;
  width: 2px;
  height: 16px;
  background: #cccccc;
}
.demo-form-inline .el-form-item {
  width: 24%;
}
.demo-form-inline .last-item {
  margin-left: 85px;
}
.search-common,
.search-common.el-date-editor.el-input {
  width: 270px;
}
</style>


