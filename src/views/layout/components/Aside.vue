<template>
  <div>
    <!-- <div class="header">共睿OA管理系统</div> -->
    <!-- :default-openeds="['1', '3']" -->
    <!-- <el-menu router :default-active="this.$route.path" class="menulist" text-color="#303133" -->
    <el-menu class="menulist" text-color="#303133"
    router :default-active="this.$route.path"
        active-text-color="#ffd04b" @select="handselect">
      <el-submenu index="/myProject1">
        <template slot="title">
          <!-- <router-link to="/home" tag="div"> -->
            <i class="iconfont icon-ic_dashboard"></i>生产过程
          <!-- </router-link> -->
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home2">
            计划排单
          </el-menu-item>
           <el-menu-item index="/home1">
            计划审核
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <!-- <router-link to tag="div"> -->
            <i class="iconfont icon-ic_extension"></i>目标管理
          <!-- </router-link> -->
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="/myProject">生产目标
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <!-- <router-link to tag="div"> -->
            <i class="iconfont icon-ic_labs"></i>人机排位
          <!-- </router-link> -->
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="/myProjectAdd">人机分配</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    //   console.log(1);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    //   console.log(2);
    // },
    handselect(key, keyPath){
      // let router = {'key': key}
      // this.$store.commit('SET_ROUTERS', router);
      // console.log(this.$store.state.mad.routers,'123');
      // this.$router.push(key);
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  text-align: center;
  height: 60px;
  line-height: 60px;
  background-color: #f4f4f4;
  color: #cffcff;
  font-size: 18px;
}
.menulist{
  min-height:800px;
}
</style>
