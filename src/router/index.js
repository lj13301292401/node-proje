import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/view/GoodsList.vue' //导入组件
import Cart from '@/view/carts.vue'//购物车页面
import Address from '@/view/Address.vue'//导入地址
import OrderConfirm from '@/view/OrderConfirm.vue'//确认订单
import OrderSuccess from '@/view/OrderSuccess.vue'//确认订单
import upload from '@/view/upload.vue'
Vue.use(Router)

export default new Router({
  routes: [
		{
		  path: '/',
		  component: GoodsList
		},
		{
		  path: '/cart',
		  component: Cart
		},
		{
			path: '/address',
			component: Address
		},
		{
			path: '/OrderConfirm',
			component: OrderConfirm
		},
		{
			path: '/OrderSuccess',
			component: OrderSuccess
		},
		{
			path: '/upload',
			component: upload
		}
  ]
})
