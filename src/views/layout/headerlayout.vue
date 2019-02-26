<template>
<el-container>
  <el-header class="headelist">
    <div class="list">
      上海市社会工作和志愿者服务信息管理系统后台
    </div>
    <div class="headeright">
      <span @click="handManger"><i class="iconfont icon-ic_renyuan"></i>管理员</span>
      <span @click="exit"><i class="iconfont icon-ic_quxiao"></i>退出登录</span>
    </div>
</el-header>
 <router-view></router-view>
</el-container>

</template>
<script>
// import Aside from "./components/Aside"
export default {
  components:{
    // Aside
  },
  data(){
    return {}
  },
  // created(){
  //   if(this.$store.state.mad.path!=='/login') {
  //     this.$router.push(this.$store.state.mad.path);
  //   }
   
  // },
  methods:{
    handManger(){
    // let arr=[1,2,3,4];
    // let list =arr.map(function (item) { console.log(item); return item * item;});
    //   console.log(list);
    },
    exit(){
      console.log('退出');
       this.$router.push("/login")
    },
    returnlist(){
      console.log('返回');
      this.$router.go(-1);
      // window.history.go(-1);
    }
  }
}
</script>

<style lang='scss' scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .headelist{
    display: flex;
    justify-content: space-between;
    background:rgba(70, 76, 91, 1);
    .list{
      width:60%;
      text-align: start;
      color:#ddd;
    }
    .headeright{
      width:30%;
      color:#ddd;
      text-align: right;
      span{
        display: inline-block;
        margin:0 10px;
        cursor:pointer;
      }
    }

  }
  .title{
    background:#f9f9f9;
    display: flex;
    justify-content:space-between;
    padding:0 100px;
    align-items: center;
  }
  .sizeColor{
    border-left:5px solid #FF6600;
  }
  .listreturn{
    background: #ff6600;
    display: inline-block;
    padding: 0 20px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    color:#fff;
    font-size:14px;
  }
  .relist{
    background: #fefefe;
    line-height: 1.5;
  }
</style>
