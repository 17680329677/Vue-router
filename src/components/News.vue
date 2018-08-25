<template>
  <div>

    <h2>新闻组件</h2>

    <ul>
      <li v-for="(item,key) in list">
        <router-link :to="'/content/'+item.aid"> *{{item.title}}</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
    export default {
        name: "News",
      data(){
          return{
            msg: '我是新闻组件msg',
            list: []
          }
      },
      methods: {
          requestData(){
            // jsonp请求的话后台api要支持jsonp
            var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";

            this.$http.jsonp(api).then((response)=>{

              console.log(response);

              // 用到this要注意this指向问题
              this.list = response.body.result;

            },function (err) {
              console.log(err);
            })
          }
      },
      mounted(){
          this.requestData();
      }
    }
</script>

<style scoped>

</style>
