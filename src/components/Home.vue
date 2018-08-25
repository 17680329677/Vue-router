<template>
  <div>

    <h2>首页组件</h2>

    <button @click="toNews">通过js跳转到新闻页面</button>


  </div>
</template>

<script>
    export default {
        name: "Home",
      data(){
          return{
            msg: '我是首页msg',
            list: ['111', '222', '333']
          }
      },
      methods: {
        toNews(){
          // 1. 第一种跳转方式 编程式导航
          // this.$router.push({path: 'news'});
          // this.$router.push({path: 'content/499'});

          // 2. 第二种跳转方式 命名路由
          this.$router.push({name: 'news'});

        }
      }
    }
</script>

<style scoped>

</style>
