<template>
	<view class="">
		{{isLogin}}
		<view class="" @click="btn">
			登录
		</view>
		<view class="" @click="btn2">
			退出
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from "vuex"
	export default{
		data(){
			return{
				ddd:"111"
			}
		},
		computed:{
			...mapState(['isLogin'])
		},
		onShow() {
			console.log(this.$store)
		},
		methods:{
			...mapMutations(['login','loginOut']),
			btn(){
				this.login();
			},
			btn2(){
				this.loginOut()
			}
		}
		
	}
</script>

<style>
</style>