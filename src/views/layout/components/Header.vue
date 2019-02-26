<template>
<div class="hlist">
   <div class="header"><img class="logo" src="../../../assets/image/logo.png" alt="">波司登智造系统</div>
    <div class="list" >
      <el-menu
        router :default-active="this.$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#fff"
        text-color="#303133"
        active-text-color="#ffd04b">
        <el-menu-item index="/out">
           <div class="imglist">
              <!-- <img class="img" src="../image/header.jpg" alt=""> -->
              <i class="iconfont ic_工时 icon-ic_gongshi"></i>
          </div>
          <div class="imglist">
              <span> 标准工时</span>
          </div>

        </el-menu-item>
         <el-menu-item index="/mainIndex">
           <div class="imglist">
               <i class="iconfont icon-ic_zhineng"></i>
          </div>
          <div class="imglist">
              <span> 智能排单</span>
          </div>

        </el-menu-item>
         <el-menu-item index="/outl">
           <div class="imglist">
               <i class="iconfont icon-ic_shengchan"></i>
          </div>
          <div class="imglist">
              <span> 生产管理</span>
          </div>
        </el-menu-item>
         <el-menu-item index="/outm">
           <div class="imglist">
               <i class="iconfont icon-ic_changchu"></i>
          </div>
          <div class="imglist">
              <span> 仓库管理</span>
          </div>

        </el-menu-item>
         <el-menu-item index="/outn">
           <div class="imglist">
               <i class="iconfont icon-ic_zhiliang"></i>
          </div>
          <div class="imglist">
              <span> 质量管理</span>
          </div>

        </el-menu-item>
         <el-menu-item index="/outs">
           <div class="imglist">
               <i class="iconfont icon-ic_xitong"></i>
          </div>
          <div class="imglist">
              <span> 系统设置</span>
          </div>

        </el-menu-item>
      </el-menu>
      <div class="foot">
        <div class="right">
          <div class="date">2019年1月12日</div>
          <div class="datelist">星期一</div>
        </div>
        <div class="bor"></div>
        <div class="left">
            <div class="photo">
              <img class="img" src="../image/header.jpg" alt="">
            </div>
            <div class="photoright">
                <div class="textlist">
                  <span>戴总,</span>&nbsp;你好
                </div>
                <div>
                  <el-button size="mini" class="forget iconfont icon-ic_gaimi">修改密码</el-button>
                  <el-button size="mini" class="exit iconfont icon-ic_tuichu" >退出系统</el-button>
                </div>
            </div>
        </div>

      </div>

    </div>
</div>

</template>

<script>
  export default {
    data() {
      return {
        activeIndex2: '1'
      }
    },
     methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>
<style lang="scss" scoped>
.header{
  float:left;
  width:200px;
  background: #fff;
  font-size: 18px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #ffa000;
  border-right:1px solid #f3f3f3;
}
.list{
  margin-left:200px;
  text-align: right;
  font-size: 12px;
  display: flex;
  justify-content:space-between;
  background-color: #fff;
  padding: 0 20px;
  color:#e3e3e3;
}
.foot{
  width:350px;
}
.logo{
  vertical-align: middle;
  width:40px;
  margin-right:5px;
}
.left{
  float:right;
  height:60px;
  width:250px;
  line-height: 60px;
  display: flex;
  justify-content: center;
}
.photo{
  width:40px;
  .img{
    width:40px;
    height:40px;
    border-radius: 50%;
    background-color: #fff;
    vertical-align:middle;
  }
}
.photoright{
  width:210px;
}
.photoright>div{
  height: 30px;
  line-height: 30px;

}
.right{
  float:left;
  height:60px;
  line-height: 60px;
  padding-right:5px;
  border-right:1px solid #ececec;
}
.img{
  width:20px;
  height:20px;
  border-radius: 50%;
  background-color: #fff;
  vertical-align:middle;
}
.imglist{
  height:30px;
  line-height: 30px;
  text-align: center;
  i{
    font-size: 20px;
  }
}
.textlist{
  padding-left:10px;
  text-align: left;
  color: #9e9e9e;
  span{
    color:#333;
    font-size:15px;
  }
}
.forget{
  background-color: #ffa000;
	border-radius: 4px;
  font-size: 12px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #ffffff;
}
.exit{
  background-color: #7ed321;
	border-radius: 4px;
  font-size: 12px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #ffffff;
}
.date{
  text-align: right;
  height: 30px;
	font-size: 12px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 30px;
	letter-spacing: 0px;
	color: #303133;
}
.datelist{
height: 30px;
line-height: 30px;
font-size: 12px;
}
</style>
