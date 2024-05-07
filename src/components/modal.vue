<template>
	<!-- 模态框 复用-->
	<div>
			    <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':mdShow}">
			      <div class="md-modal-inner">
			       <div class="md-top">
			     <!--     <div class="md-title"><slot name='title'></slot></div> -->
			          <button class="md-close" @click="closeModel">Close</button>
			        </div> 
			        <div class="md-content">
			          <div class="confirm-tips">
			          <!--  <div class="error-wrap">
			              <span class="error error-show" v-show="errTip">用户名或者密码错误</span>
			            </div> -->
									<slot name='message'></slot>
			           
			          </div>
			          <div class="login-wrap">
									<!-- 按钮组 -->
									<slot name="butGroup"></slot>
			            <!-- <a href="javascript:;" class="btn-login" >登 录</a> -->
			          </div>
			        </div>
			      </div>
			    </div>
					<!-- 默认遮罩层隐藏 -->
					<div class="md-overlay" v-if='mdShow' @click="closeModel"></div>
	</div>
</template>

<script>
	export default{
		props:['mdShow'],
		data(){
			return {
				 
			}
		},
		methods:{
			closeModel(){
				this.$emit('close')
			}
		}
	}
</script>

<style>
</style>