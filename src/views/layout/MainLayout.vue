<template>
 <el-container>
    <el-aside width="200px"><Aside /></el-aside>
    <el-container>
      <el-header class="title"><span><b class="sizeColor"></b>&nbsp;{{this.$store.state.mad.title}}</span><span class="listreturn" >返回</span></el-header>
      <el-main class="relist">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Aside from "./components/Aside"
export default {
  components:{
    Aside,
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
  .el-header{
    padding:0;
  }

  .el-aside {
    background-color: #f4f4f4;
    color: #333;
    // text-align: center;
    // line-height: 200px;
  }

  .el-main {
    background-color: #f4f4f4;
    color: #333;
    // max-height:800px;
    // text-align: center;
    // line-height: 160px;
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
</style>
