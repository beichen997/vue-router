<template>
<div class="hlist">
    <div class="list" >
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#fff"
        text-color="#303133"
        active-text-color="#ffd04b">
        <el-menu-item :index="list.key" v-for="(list, index1) of basic" :key="index1">
           <div class="imglist">
              <!-- <img class="img" src="../image/header.jpg" alt=""> -->
              <i class="iconfont ic_工时 icon-ic_gongshi" @click="remove(list)"></i>
          </div>
          <router-link class="imglist" :to="list.key" tag="div">
              <span>{{index1}}</span>
          </router-link>
        </el-menu-item>
      </el-menu>
    </div>
</div>

</template>

<script>
  export default {
    data() {
      return {
      }
    },
    computed: {
      basic () {
        return this.$store.state.mad.routers
      }
    },
     methods: {
      remove(list){
        console.log(1);
        this.$store.commit('DELETE_ROUTERS',list);
        this.$router.push()
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
