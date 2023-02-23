<template>
	<view class="zai-box">
		<view class="login-logo">
			<image :src="options.user_avatar" mode='aspectFit' class="login-logo-img"></image>
			<view class="login-logo-title">
				{{options.blogname}}
			</view>
		</view>
		<view class="zai-form">
			<input class="zai-input" v-model="email" placeholder-class placeholder="请输入邮箱" />
			<view class="zai-input-btn" v-if="options.email_code == 'y'">
				<input class="zai-input" v-model="ecode" placeholder-class placeholder="验证码" />
				<view class="zai-checking" @click="checking" v-if="state===false">获取验证码</view>
				<view class="zai-checking zai-time" v-if="state===true">倒计时{{ currentTime }}s</view>
			</view>
			<input class="zai-input" v-model="pwd" placeholder-class password placeholder="请输入密码" />
			<input class="zai-input" v-model="rpwd" placeholder-class password placeholder="请再次输入密码" />
			<view class="zai-input-btn" v-if="options.login_code == 'y'">
				<input class="zai-input" v-model="code" placeholder-class placeholder="图片验证码" />
				<view @click="getImgCode"><img class="zai-checking" :src="imgCode" /></view>
			</view>
			<button class="zai-btn" @click="login">立即注册</button>
			<navigator url="../login/login" open-type='navigateBack' hover-class="none" class="zai-label">已有账号，点此去登录.
			</navigator>
			
		</view>
	</view>
</template>

<script>
	import {
		htRequest,
		url
	} from '@/api.js';
	export default {
		data() {
			return {
				state: false, //是否开启倒计时
				totalTime: 60, //总时间，单位秒
				recordingTime: 0, //记录时间变量
				currentTime: 0, //显示时间变量
				options: '',
				email: '',
				ecode: '',
				pwd: '',
				rpwd: '',
				code: '',
				imgCode:'',
			}
		},
		onLoad() {
			this.getImgCode();
		},
		onShow() {
			this.getOpitions();
		},
		methods: {
			// 获取图形验证码
			getImgCode() {
				this.imgCode = url + '/include/lib/checkcode.php?' + new Date().getTime()
			},
			//获取系统设置
			async getOpitions() {
				const res = await htRequest({
					url: '/content/plugins/ApiSetting/manyApi.php',
					method: "GET",
					data: {
						route: 'options'
					}
				})
				if (res.data.state == 1) {
					this.options = res.data.data
				} else {
					uni.showModal({
						title: "温馨提示",
						content: `${res.data.msg}`,
						showCancel: false,
						success(res) {
							if (res.confirm) {
								uni.navigateBack()
							}
						}
					})
				}
			},
			// https://www.hkiii.cn/include/lib/checkcode.php?1676905793914
			async login() {
				var that = this
				uni.showLoading({
					title: '注册中'
				})
				const res = await htRequest({
					url: "/admin/account.php?action=dosignup",
					method: 'POST',
					data: {
						mail: this.email, //邮箱
						passwd: this.pwd, //密码
						repasswd: this.rpwd, //重复密码
						mail_code: this.ecode,
						login_code: this.code,
						resp: 'json'
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
						content: `注册成功`,
						showCancel: false,
						success(res) {
							if (res.confirm) {
								uni.navigateBack()
							}
						}
					})
				} else {
					uni.hideLoading()
					uni.showModal({
						title: "温馨提示",
						content: `您已登录过了，请先退出登录。`,
						showCancel: false,
						success(res) {
							if (res.confirm) {
								that.getImgCode();
							}
						}
					})
				}
			},
			//发送邮箱验证码
			async sendMailCode() {
				const res = await htRequest({
					url: "/admin/account.php?action=send_email_code",
					method: 'POST',
					data: {
						mail: 'hk@hkiii.cn'
					}
				})
			},
			checking() {
				//把显示时间设为总时间
				this.currentTime = this.totalTime;
				//开始倒计时
				this.state = true;
				//执行倒计时
				this.checkingTime();
				this.sendMailCode();
			},
			checkingTime() {
				let that = this;
				//判断是否开启
				if (this.state) {
					//判断显示时间是否已到0，判断记录时间是否已到总时间
					if (this.currentTime > 0 && this.recordingTime <= this.totalTime) {
						//记录时间增加 1
						this.recordingTime = this.recordingTime + 1;
						//显示时间，用总时间 - 记录时间
						this.currentTime = this.totalTime - this.recordingTime;
						//1秒钟后，再次执行本方法
						setTimeout(() => {
							//定时器内，this指向外部，找不到vue的方法，所以，需要用that变量。
							that.checkingTime();
						}, 1000)
					} else {
						//时间已完成，还原相关变量
						this.state = false; //关闭倒计时
						this.recordingTime = 0; //记录时间为0
						this.currentTime = this.totalTime; //显示时间为总时间
					}
				} else {
					//倒计时未开启，初始化默认变量
					this.state = false;
					this.recordingTime = 0;
					this.currentTime = this.totalTime;
				}
			}
		}
	}
</script>

<style>
	@import "../../uni.css";
	.zai-btn {
		background: #F17C67;
		color: #fff;
		border: 0;
		border-radius: 100upx;
		font-size: 36upx;
		margin-top: 60upx;
	}
</style>
