<template>
	<div>
		<nav-header></nav-header>
		<nav-bread>
			<span>Goods</span>
		</nav-bread>

		<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1"
			xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<defs>
				<symbol id="icon-add" viewBox="0 0 32 32">
					<title>add2</title>
					<path class="path1"
						d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z">
					</path>
				</symbol>
				<symbol id="icon-ok" viewBox="0 0 39 32">
					<title>ok</title>
					<path class="path1"
						d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z">
					</path>
				</symbol>
				<symbol id="icon-edit" viewBox="0 0 32 32">
					<title>edit</title>
					<path class="path1"
						d="M25.599 11.292l-4.892-4.892 3.825-3.825 4.892 4.892-3.825 3.825zM4.732 23.308l3.959 3.959-5.939 1.98 1.98-5.939zM10.666 26.225l-4.892-4.892 13.425-13.425 4.892 4.892-13.425 13.425zM31.687 6.713l-6.4-6.4c-0.417-0.417-1.091-0.417-1.508 0l-20.267 20.267c-0.114 0.115-0.191 0.25-0.242 0.393-0.003 0.009-0.012 0.015-0.015 0.025l-3.2 9.6c-0.128 0.383-0.029 0.806 0.257 1.091 0.203 0.204 0.476 0.313 0.754 0.313 0.112 0 0.227-0.017 0.337-0.054l9.6-3.2c0.011-0.003 0.017-0.013 0.027-0.016 0.142-0.052 0.276-0.128 0.39-0.242l20.267-20.267c0.417-0.416 0.417-1.091 0-1.508v0z">
					</path>
				</symbol>
				<symbol id="icon-delete" viewBox="0 0 26 32">
					<title>delete</title>
					<path class="path1"
						d="M17.723 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM7.877 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM12.8 28c0.543 0 0.985-0.448 0.985-1v-12c0-0.552-0.441-1-0.985-1s-0.984 0.448-0.984 1v12c0 0.552 0.441 1 0.984 1v0zM23.631 4h-5.908v-2c0-1.104-0.882-2-1.969-2h-5.908c-1.087 0-1.969 0.896-1.969 2v2h-5.908c-1.087 0-1.969 0.896-1.969 2v2c0 1.104 0.882 2 1.969 2v18c0 2.208 1.765 4 3.939 4h13.784c2.174 0 3.938-1.792 3.938-4v-18c1.087 0 1.969-0.896 1.969-2v-2c0-1.104-0.882-2-1.969-2v0zM9.846 3c0-0.552 0.441-1 0.984-1h3.938c0.544 0 0.985 0.448 0.985 1v1h-5.908v-1zM21.662 28c0 1.104-0.882 2-1.969 2h-13.784c-1.087 0-1.97-0.896-1.97-2v-18h17.723v18zM22.646 8h-19.692c-0.543 0-0.985-0.448-0.985-1s0.441-1 0.985-1h19.692c0.543 0 0.984 0.448 0.984 1s-0.441 1-0.984 1v0z">
					</path>
				</symbol>
				<symbol id="icon-clock" viewBox="0 0 32 32">
					<title>clock</title>
					<path class="path1"
						d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z">
					</path>
				</symbol>
			</defs>
		</svg>
		<div class="container">
			<div class="checkout-order">
				<!-- process step -->
				<div class="check-step">
					<ul>
						<li class="cur"><span>Confirm</span> address</li>
						<li class="cur"><span>View your</span> order</li>
						<li><span>Make</span> payment</li>
						<li><span>Order</span> confirmation</li>
					</ul>
				</div>

				<!-- order list -->
				<div class="page-title-normal checkout-title">
					<h2><span>Order content</span></h2>
				</div>
				<div class="item-list-wrap confirm-item-list-wrap">
					<div class="cart-item order-item">
						<div class="cart-item-head">
							<ul>
								<li>Order contents</li>
								<li>Price</li>
								<li>Quantity</li>
								<li>Subtotal</li>
							</ul>
						</div>
						<ul class="cart-item-list">
							<li v-for="(item,index) in cartList" v-if="item.checked=='1'">
								<div class="cart-tab-1">
									<div class="cart-item-pic">
										<img :src="/static/+item.productImage" alt="XX">
									</div>
									<div class="cart-item-title">
										<div class="item-name">{{item.productName}}</div>

									</div>
								</div>
								<div class="cart-tab-2">
									<div class="item-price">{{item.salePrice | c('￥')}}</div>
								</div>
								<div class="cart-tab-3">
									<div class="item-quantity">
										<div class="select-self">
											<div class="select-self-area">
												<span class="select-ipt">×{{item.productNum}}</span>
											</div>
										</div>
										<div class="item-stock item-stock-no">In Stock</div>
									</div>
								</div>
								<div class="cart-tab-4">
									<div class="item-price-total">{{item.salePrice*item.productNum | c('￥')}}</div>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<!-- Price count -->
				<div class="price-count-wrap">
					<div class="price-count">
						<ul>
							<li>
								<span>Item subtotal:</span>
								<span>{{subtotal | c('￥')}}</span>
							</li>
							<li>
								<span>Shipping:</span>
								<span>{{Shipping | c('￥')}}</span>
							</li>
							<li>
								<span>Discount:</span>
								<span>{{Discount | c('￥')}}</span>
							</li>
							<li>
								<span>Tax:</span>
								<span>{{Tax | c('￥')}}</span>
							</li>
							<li class="order-total-price">
								<span>Order total:</span>
								<span>{{Ordertotal | c('￥')}}</span>
							</li>
						</ul>
					</div>
				</div>

				<div class="order-foot-wrap">
					<div class="prev-btn-wrap">
						<a class="btn btn--m">Previous</a>
					</div>
					<div class="next-btn-wrap">
						<button class="btn btn--m btn--red" @click="payMent">Proceed to payment</button>
					</div>
				</div>
			</div>
		</div>
		<nav-footer></nav-footer>
	</div>
</template>
<script>
	import Modal from '../components/modal.vue' //模态框
	import NavHeader from '@/components/Header.vue'
	import NavFooter from '@/components/Footer.vue'
	import NavBread from '@/components/NavBread.vue'
	import axios from 'axios'
	export default {
		data() {
			return {
				subtotal:0,//商品总金额
				Shipping:10,//配送费
				Discount:5,//优惠活动
				Tax:0,//税
				Ordertotal:0,//总金额
				cartList: [],
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			payMent(){
				var addressId=this.$route.query.addressId //接收传递的地址ID
				axios.get('/users/payMont',{params:{addressId,ordeTotal:this.Ordertotal}}).then(res=>{
				if(res.data.status==0){
					this.$router.push({
						path:'/OrderSuccess?orderId='+res.data.result.orderId+'&orderTotal='+res.data.result.ordeTotal
					})
				}
				})
			},
			init() {
				axios.get('/users/cartList').then(res => {
					console.log(res)
					this.cartList = res.data.result
					// 总金额
					this.cartList.forEach(element=>{
						if(element.checked=='1'){
							this.subtotal+=element.salePrice*element.productNum
						}
					})
				// 总价=商品+配送费-折扣+税
				   this.Ordertotal=(this.subtotal+this.Shipping-this.Discount+this.Tax)*0.98
				})
			}
		},
		components: {
			NavHeader,
			NavBread,
			NavFooter,
			Modal
		}
	}
</script>