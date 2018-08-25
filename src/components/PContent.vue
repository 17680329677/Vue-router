<template>
  <div>

    <h2>商品详情</h2>

  </div>
</template>

<script>
    export default {
        name: "PContent",
      data(){
        return {
          msg: '我是商品详情页面msg'
        }
      },
      mounted(){
          // 获取get传值
        //alert(this.$route.query);
        console.log(this.$route.query);
      }
    }
</script>

<style scoped>

</style>
