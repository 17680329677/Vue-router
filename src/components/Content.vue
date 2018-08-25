<template>
  <div>
    <h2>
      {{list.title}}
    </h2>
    <div v-html="list.content"></div>
  </div>
</template>

<script>

  /*
  * 使用动态路由在不同路由之间传值：
  *   1、配置动态路由
  *     const routes = [
          { path: '/content/:aid', component: Content },
  *     ]
  *
  *   2、在对应页面使用 this.$route.params 获取动态路由中的值
  *
  *   */
    export default {
        name: "Content",
        data(){
          return {
            msg: '我是详情页面msg',
            list: []
          }
        },
      mounted(){
          console.log(this.$route.params);  // 获取动态路由传值

          var aid = this.$route.params.aid;

          this.requestData(aid);
      },
      methods: {
          requestData(aid){
            // get请求如果跨域的话，后台里面要允许跨域
            var api = "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=" + aid;
            this.$http.get(api).then((response)=>{
              console.log(response);
              this.list = response.body.result[0];

            },(err)=>{
              console.log(err);
            })
          }
      }
    }
</script>

<style scoped>

</style>
