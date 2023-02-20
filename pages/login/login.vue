<template>
	<view class="zai-box">
		<image src="../../static/login.png" mode='aspectFit' class="zai-logo"></image>
		<view class="zai-title">欢迎登录</view>
		<view class="zai-form">
			<input class="zai-input" placeholder-class placeholder="请输入用户名" />
			<input class="zai-input" placeholder-class password placeholder="请输入密码"/>
			<view class="zai-input-btn">
				<input class="zai-input" placeholder-class @click="sendMailCode" placeholder="验证码" />
				<view @click="getImgCode()"><img class="zai-checking" :src="imgCode" /></view>
			</view>
			<view class="zai-label"></view>
			<button class="zai-btn" @click="login">立即登录</button>
			<navigator url="../registering/registering" hover-class="none" class="zai-label">还没有账号？点此注册.</navigator>
		</view>
	</view>
</template>

<script>
	import {
		htRequest,
		url
	} from '@/api.js';
	export default {
		data(){
			return{
				imgCode:''
			}
		},
		onLoad(){
			this.getImgCode()
		},
		methods:{
			// 获取图形验证码
			getImgCode(){
				this.imgCode = url + '/include/lib/checkcode.php?' + new Date().getTime()
			},
			async login(){
				const res = await htRequest({
					url: "/admin/account.php?action=dosignin",
					method: 'POST',
					data: {
						user: '',
						pw:'',
						login_code:'',
						persist:'',
						resp:'json'
					},
				})
				console.log(res)
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
		height: 85upx;
		border: #F17C67 1px solid;
		border-radius: 110upx;
	}

	.zai-checking.zai-time{
		background: #a7b6d0;
	}
	/*按钮点击效果*/
	.zai-btn.button-hover{
		transform: translate(1upx, 1upx);
	}
</style>