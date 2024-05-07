// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import lazyload from 'vue-lazyload' //导入图片懒加载插件
import infiniteScroll from 'vue-infinite-scroll' //导入页面赖加载
// 导入模块化的方法:AMD/CMD/comments js /es6
import {currency} from './util/currency.js' //按需引入-性能高
import store from './store.js' //导入vuex参数
Vue.config.productionTip = false 
Vue.filter('c',currency) //全局挂载
Vue.use(lazyload,{ //挂载 {配置}
	loading:'/static/loading-svg/loading-bars.svg'
})
Vue.use(infiniteScroll) //挂载（使用）
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,//将store注册到vue实例中
  components: { App },
  template: '<App/>'
})
