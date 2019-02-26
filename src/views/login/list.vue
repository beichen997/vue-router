<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    <div class="lit">
      <div class="mt">123</div>
    </div>
    <div id="echarts" :style="{width: '300px', height: '300px'}"></div>
    <div>list</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
       data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
    }
  },
  mounted() {
    var dom = document.getElementById('echarts')
    var myChart = this.echarts.init(dom)
    // 绘制图表
    myChart.setOption({
      series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        data: [{
            value: 235,
            name: '视频广告'
          },
          {
            value: 274,
            name: '联盟广告'
          },
          {
            value: 310,
            name: '邮件营销'
          },
          {
            value: 335,
            name: '直接访问'
          },
          {
            value: 400,
            name: '搜索引擎'
          }
        ]
      }]
    });
  },
  methods: {
     handleNodeClick(data) {
        console.log(data);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.lit{
  width:100%;
  .mt{
    width:100%;
    text-align: center;
  }
}
</style>
