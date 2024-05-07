import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
	state:{
		nickName:'',//登录名称
		cartCount:0//购物车数量
	},
	mutations:{ //修改状态
		updateUserInfo(state,nickName){//把state值传递过来，nickName接收的值
			state.nickName=nickName
		},
		
		updateCartCount(state,cartCount){ //购物车数量
			state.cartCount+=cartCount
		},
		initCartCount(state,cartCount){ //初始化
			state.cartCount=cartCount
		}
	},
})
export default store //暴露