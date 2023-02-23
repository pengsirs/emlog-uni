<template>
	<view class="zai-box">
		
		<view class="login-logo">
			<image :src="options.user_avatar" mode='aspectFit' class="login-logo-img"></image>
			<view class="login-logo-title">
				{{options.blogname}}
			</view>
		</view>
		
		<view class="zai-form">
			<input class="zai-input" v-model="username" placeholder-class placeholder="请输入用户名" />
			<input class="zai-input" v-model="password" placeholder-class password placeholder="请输入密码"/>
			<view class="zai-input-btn" v-if="options.login_code == 'y'">
				<input class="zai-input" v-model="loginCode" placeholder-class placeholder="验证码" />
				<view @click="getImgCode()"><img class="zai-checking" :src="imgCode" /></view>
			</view>
			<view class="zai-label"></view>
			<button class="zai-btn" @click="tologin">立即登录</button>
			<navigator url="../registering/registering" hover-class="none" class="zai-label">还没有账号？点此注册.</navigator>
			<view class="zai-label">
				您好，登录功能暂无用途，正在开发中...
			</view>
		</view>
	</view>
</template>

<script>
	import {
		htRequest,
		url
	} from '@/api.js';
	import {mapState,mapMutations} from "vuex"
	export default {
		data(){
			return{
				imgCode:'',
				username:'',
				loginCode:'',
				password:''
			}
		},
		computed:{
			...mapState(['isLogin','appData','options'])
		},
		onShow(){
			this.getImgCode();
			this.getOpitions();
		},
		methods:{
			...mapMutations(['login','setOptions']),
			//获取系统设置
			async getOpitions(){
				const res = await htRequest({
					url:'/content/plugins/ApiSetting/manyApi.php',
					method:"GET",
					data:{
						route:'options'
					}
				})
				if(res.data.state == 1){
					this.setOptions(res.data.data)
				}else{
					uni.showModal({
						title:"温馨提示",
						content:`${res.data.msg}`,
						showCancel: false,
						success(res) {
							if (res.confirm) {
								uni.navigateBack()
							}
						}
					})
				}
			},
			// 获取图形验证码
			getImgCode(){
				this.imgCode = url + '/include/lib/checkcode.php?' + new Date().getTime()
			},
			async tologin(){
				uni.showLoading({
					title: '登录中'
				})
				var that = this;
				const res = await htRequest({
					url: "/admin/account.php?action=dosignin",
					method: 'POST',
					data: {
						user: this.username,
						pw:this.password,
						login_code:this.loginCode,
						persist:'1',
						resp:'json'
					},
				})
				if (res.data.code == 1) {
					uni.hideLoading()
					uni.showModal({
						title: "温馨提示",
						content: `${res.data.msg}`,
						showCancel: false,
						success(res) {
							if (res.confirm) {
								that.getImgCode();
							}
						}
					})
				} else if (res.data.code == 0) {
					uni.hideLoading()
					uni.showModal({
						title: "温馨提示",
						content: `登录成功`,
						showCancel: false,
						success(res) {
							if (res.confirm) {
								that.login();
								uni.navigateBack()
							}
						}
					})
				} else {
					uni.hideLoading()
					uni.showModal({
						title: "温馨提示",
						content: `未知错误或已登录`,
						showCancel: false,
						success(res) {
							if (res.confirm) {
								that.getImgCode();
							}
						}
					})
				}
			}
		}
	}
</script>

<style>
@import "../../uni.css";
</style>