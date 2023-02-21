<template>
	<view class="zai-box">
		<image src="../../static/login.png" mode='aspectFit' class="zai-logo"></image>
		<view class="zai-title">欢迎登录</view>
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
				options:'',
				username:'',
				loginCode:'',
				password:''
			}
		},
		onShow(){
			this.getImgCode();
			this.getOpitions();
		},
		methods:{
			...mapMutations(['login']),
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
					this.options = res.data.data
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
	.zai-box{
		padding: 0 100upx;
		position: relative;
	}
	.zai-logo{
		width: 100%;
		width: 100%;
		height: 310upx;
		margin: 50px 0px;
	}
	.zai-title{
		position: absolute;
		top: 0;
		line-height: 360upx;
		margin: 50px 0px;
		font-size: 68upx;
		color: #fff;
		text-align: center;
		width: 100%;
		margin-left: -100upx;
	}
	.zai-input{
		background: #f9f9f9;
		margin-top: 30upx;
		border-radius: 100upx;
		padding: 20upx 40upx;
		font-size: 36upx;
	}
	.input-placeholder, .zai-input{
		color: #000;
	}
	.zai-label{
		padding: 60upx 0;
		text-align: center;
		font-size: 30upx;
		color: #a7b6d0;
	}
	.zai-btn{
		background: #F17C67;
		color: #fff;
		border: 0;
		border-radius: 100upx;
		font-size: 36upx;
	}
	.zai-btn:after{
		border: 0;
	}
	/*验证码输入框*/
	.zai-input-btn{
		position: relative;
	}
	.zai-input-btn .zai-input{
		padding-right: 260upx;
	}
	.zai-checking{
		position: absolute;
		right: 0;
		top: 0;
		background: #F17C67;
		color: #fff;
		border: 0;
		border-radius: 110upx;
		font-size: 36upx;
		height: 85upx;
		line-height: 85upx;
		margin-left: auto;
		margin-right: auto;
		padding-left: 28upx;
		padding-right: 28upx;
		box-sizing: border-box;
		text-align: center;
		text-decoration: none;
		-webkit-tap-highlight-color: transparent;
		overflow: hidden;
		padding-top: 2upx;
		padding-bottom: 2upx;
	}

	.zai-checking.zai-time{
		background: #a7b6d0;
	}
	/*按钮点击效果*/
	.zai-btn.button-hover{
		transform: translate(1upx, 1upx);
	}
</style>