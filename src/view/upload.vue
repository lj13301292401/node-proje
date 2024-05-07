<template>
	<div>
		<input type="file" @change="changeFn($event)">
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		methods:{
			changeFn(e){
				//新建formData对象-表单
				let formData=new FormData()
				//添加文件域信息--将文件域添加到表单中，file表示文件域的name
				formData.append("file",e.target.files[0])
				let config={
					//必须，表示提交文件
					headers:{
						"Content-Type":"multipart/form-data"
					},
					//获取上传进度
					onUploadProgress:function(progressEvent){
						let complete=(progressEvent.loaded / progressEvent.total)*100
						console.log(complete + "%")
					},
				}
				axios.post('/users/upload',formData,config).then(result=>{
					console.log(result.data)
				})
			}
		}
	}
</script>

<style>
</style>