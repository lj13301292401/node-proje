<template>
	 <div>
		 <!-- 点击遮罩层 ，状态默认-->
		  <div class="mask_layer" id="mask_layer" v-show="price_mask_ishow"  @click="	price_menu(false)">
		  	
		  </div>
		 <!-- 头部 -->
	     <nav-header></nav-header>
				<!-- 面包屑 -->
	     <nav-bread>
				 <span>Goods</span>
			 </nav-bread>
				<!-- 内容区 -->
	      <div class="accessory-result-page accessory-page">
	        <div class="container">
	          <div class="filter-nav">
	            <span class="sortby">Sort by:</span>
	            <a href="javascript:void(0)" class="default cur">Default</a>
	            <a href="javascript:void(0)" class="price" @click="sortGoods">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
							<!-- 让菜单显示出来 -->
	            <a href="javascript:void(0)" class="filterby stopPop" @click="price_menu(true)">Filter by</a>
	          </div>
	          <div class="accessory-result">
	            <!-- filter -->
	            <div class="filter stopPop" id="filter" :class="{'filterby-show':price_menu_ishow}">
	              <dl class="filter-price">
	                <dt>Price:</dt>
									<!-- 默认all是选中状态 -->
									<dd v-bind:class="{'cur':priceState_all=='active'}"  @click="priceState_set('active')"><a href="javascript:void(0)">All</a></dd>
	                <dd v-for="(item,index) in priceFilter" @click="priceState_set(index)" v-bind:class="{'cur':priceState_all==index}" >
										<a href="javascript:void(0)" >{{item.startPrice}}-{{item.endPrice}}</a></dd>
	              </dl>
	            </div>
	
	            <!-- search result accessories list -->
	            <div class="accessory-list-wrap">
	              <div class="accessory-list col-4">
	                <ul>
	                  <li v-for="(item,index) in goodslist" :key='index'>
	                    <div class="pic">
	                      <a href="#">
												<!-- <img :src="'/static/'+item.productImg" alt=""> -->
												<img v-lazy="'/static/'+item.productImage" alt="">
												</a>
	                    </div>
	                    <div class="main">
	                      <div class="name">{{item.productName}}</div>
	                      <div class="price">{{item.salePrice | c('￥')}}</div>
	                      <div class="btn-area">
	                        <a href="javascript:;" class="btn btn--m" @click='addCart(item.productId)'>加入购物车</a>
	                      </div>
	                    </div>
	                  </li>
	                </ul>
								<div v-infinite-scroll='loadMore' infinite-scroll-disabled='busy' infinite-scroll-distannce='10' class="goods_load">
									<img src="/static/loading-svg/loading-cubes.svg" alt="" v-show='loadingSvg'/>
								</div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
				<!-- 脚部 -->
	      <nav-footer></nav-footer>
				<!-- 模态框 -->
				<!-- 添加商品失败 -->
				 <!-- 自定义事件 -->
				<Modal :mdShow='mdShow' @close="closeModel">
					<p slot='message'>请先登录，否则无法加入购物车</p>
					<div slot='butGroup'>
						 <a href="javascript:;" class="btn-login"  @click="mdShow=false">关闭</a>
					</div>
				</Modal>
				<!-- 添加商品成功模态框 -->
				<Modal :mdShow='mdShowCart' @close="closeModel">
					<p slot='message'>添加购物车成功！</p>
					<div slot='butGroup'>
						 <a href="javascript:;" class="btn-login"  @click="mdShowCart=false">继续购物</a>
						 <router-link class='btn-login' to="/cart">查看购物车</router-link>
					</div>
				</Modal>
	    </div>
</template>
<script>
	// 导入样式
	import '@/assets/css/base.css'
	import '@/assets/css/checkout.css'
	import Modal from '../components/modal.vue' //模态框
	import '@/assets/css/product.css'
	import NavHeader from '@/components/Header.vue'
	import NavFooter from '@/components/Footer.vue'
	import NavBread from '@/components/NavBread.vue'
	import axios from 'axios'	
	export default {
		data() {
			return {
				mdShowCart:false,//购物车添加商品成功默认关闭模态框
				mdShow:false, //购物车添加商品失败默关闭模态框
				loadingSvg:false, //默认隐藏svg
				busy:true, //是否分页栏加载，默认不能加载
				sortFlag:true, //升序开关
				page:1, //初始化显示第一页
				pageSize:4, //每页显示的条数
				price_mask_ishow:false,//菜单遮罩层
				price_menu_ishow:false,//菜单是否显示
				priceState_all:'active', //定义状态
        goodslist:[], //商品列表数据
				priceFilter:[ //价格列表
					{startPrice:'0.00',endPrice:'100.00'},
					{startPrice:'100.00',endPrice:'500.00'},
					{startPrice:'500.00',endPrice:'1000.00'},
					{startPrice:'1000.00',endPrice:'2200.00'},
					{startPrice:'2200.00',endPrice:'3000.00'}
				]
			}
		},
		mounted(){
			this.getGoodsList() //初始化调用数据
		},
		methods:{
			mdShowModel(index){
				this.mdShow=index
			},
			// 关闭添加购物车失败模态框
			closeModel(){
				this.mdShow=false //关闭添加商品失败的模态框
				this.mdShowCart=false//关闭添加商品成功的模态框
			},
			//添加到购物车
			addCart(productId){
				axios.post('/goods/addCart',{productId}).then(res=>{
					console.log('addCart',res)
					if(res.data.status=='0'){ //添加购物车成功
						this.mdShowCart=true
						this.$store.commit('updateCartCount',1)
					}else{
						this.mdShow=true
					}
					
				})
			},
			loadMore(){ //懒加载的方法
				setTimeout(()=>{
					this.page++, //当前页+1
					this.getGoodsList(true)  //重新渲染数据
					//true是否数据累加，比如现在是第二页，第一页的数据是否保留
				},500)
			},
			getGoodsList(flag){ //初始化商品列表数据
			this.loadingSvg=true //开始请求显示动画
			console.log('flag',flag)
			var param={
				page:this.page, //当前页
				pageSize:this.pageSize, //每页显示的条数
				sort:this.sortFlag?1:-1, //1为升序 -1为降序
				priceLevel:this.priceState_all//价格级别
				//排序
			}
				axios.get('/goods/list',{params:param}).then(res=>{
					this.loadingSvg=false //请求成功关闭动画
					console.log(res)
					if(res.data.status=='2'){ //成功
					 if(flag){
						//true：当前页的值去合并新数据
						 this.goodslist=this.goodslist.concat(res.data.result.list)
						   if(res.data.result.count==0){//没有数据
								   this.busy=true //不再加载数据
							 }else{
								   this.busy=false //可以加载数据
							 }
					 }else{
						 this.goodslist=res.data.result.list
						 this.busy=false //可以加载数据
					 }	
					}else{
						this.goodslist=[]
					}		
				})	
			},
			sortGoods(){  //升降序开关
				this.sortFlag=!this.sortFlag //升降序切换
				this.page=1 //重新显示第一页数据
				this.getGoodsList() //重新渲染
			},
			priceState_set(index){  //点击后的状态
				this.priceState_all=index
				this.price_menu_ishow=false //菜单消失
				this.price_mask_ishow=false//遮罩层消失
				//每次点击价位重第一页开始显示并重新渲染
				this.page=1
				this.getGoodsList()
			},
			price_menu(v){  //显示菜单
				this.price_menu_ishow=v
				this.price_mask_ishow=v
			}
		},
		components:{
			NavHeader,  //头部组件
			NavBread, //面包屑组件
			NavFooter, //脚部组件
			Modal //模态框
		},
		
	}
</script>
<style>
	.mask_layer{
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.2);
		position: fixed;
		z-index: 10;
	}
	img[lazy='loading']{
		width: 50px;
		height: 50px;
		margin-top: 50%;
	}
	.goods_load{
		height: 100px;
		text-align: center;
    line-height: 100px;
	}
</style>