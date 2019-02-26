<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="left">
    <el-tab-pane label="排单查询" name="first" class="plan-tab-phone">
      <PlanSearch/>
    </el-tab-pane>
    <el-tab-pane label="计划排单信息" name="second">
      <PlanInformation/>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import PlanSearch from './planSearch'
import PlanInformation from './planInformation'
export default {
  components: {
    PlanSearch,
    PlanInformation
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  }
}
</script>
<style lang='scss'>
.el-tabs__item.is-active {
  color: #ffd04b;
}
.el-tabs__item:hover{
  color: #ffd04b;
}
</style>


