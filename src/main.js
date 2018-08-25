import Vue from 'vue'
import App from './App.vue'

// 请求数据

import VueResource from 'vue-resource';

Vue.use(VueResource);

// 1、引入并使用vue-router

import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 2、创建并引入组件

import Home from './components/Home';
import News from './components/News';
import PContent from './components/PContent';
import Content from './components/Content';

// 3、配置路由(定义路由)

const routes = [
  { path: '/home', component: Home },
  // 命名路由
  { path: '/news', component: News, name: 'news'},
  { path: '/content/:aid', component: Content },
  { path: '/pcontent', component: PContent },
  { path: '*', redirect: '/home' }   /*默认跳转路由*/
]

// 4、实例化VueRouter

const router = new VueRouter({
  mode: 'history',  // 将路由的hash模式改为history模式
  routes          // （缩写）相当于 routes: routes
})

// 5、挂载路由

new Vue({
  el: '#app',
  router,   // 挂载路由
  render: h => h(App)
})

//  6、根组件的模板里面放上这句话   <router-view></router-view>
