<template>
<div class="out">
  <div >
      <img src="../../assets/image/out.png" alt="">
      <p class="size">暂无内容，功能开发中…</p>
  </div>
</div>

</template>

<script>
  export default {
    data() {
      return {
      }
    },
     methods: {
    }
  };
</script>
<style lang="scss" scoped>
// .outlist{
//   width:100%;
//   height:100%;
//   position:relative;
//   .out{
//     position:absolute;
//     top:50%;
//     left:50%;
//     transform: translate(-50%,-50%);
//     width:400px;
//     height:500px;
//   }
// }
.out{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    // width:400px;
    // height:500px;
  }
  .size{
    height: 50px;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #303133;
    text-align: center;
  }
</style>
