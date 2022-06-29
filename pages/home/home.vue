<template>
	<view class="centent">

		<view class="banner-box">
			<view class="box-img">
				<image class="me-img" :src="avatarUrl" mode=""></image>
			</view>
			<view class="me" @click="login()">
				{{nickName}}
			</view>
		</view>
		<view class="bannertm">
			<view v-for="i in opacity" :style="i" class="tm"></view>
		</view>
		<view class="homelist">
			<view class="homelist-item" v-for="i in homelist" @click="go(i.url)">
				<image class="homelist-img" :src="i.img"></image>
				<view style="font-size: 12px;font-weight: 200;">{{i.text}}</view>
			</view>
		</view>
		<view class="baidu-box">
			<view class="baidu-item">
				<view class="sl-icon">
					<uni-icons color="#88CFFF" type="vip-filled" size="30"></uni-icons>
				</view>
				<view class="shoulu">
					<view class="sl-title">百度收录</view>
					<view class="sl-content">{{shoulu||'获取中...'}}</view>
				</view>
				<uni-icons @click="shua('baidu')" color="#aaa" type="refreshempty" size="20"></uni-icons>
			</view>
			<view class="baidu-item">
				<view class="sl-icon-sg">
					<uni-icons color="#E3BDA4" type="color-filled" size="30"></uni-icons>
				</view>
				<view class="shoulu">
					<view class="sl-title">搜狗收录</view>
					<view class="sl-content">{{sogo||'获取中...'}}</view>
				</view>
				<uni-icons @click="shua('sogo')" color="#aaa" type="refreshempty" size="20"></uni-icons>
			</view>

		</view>
		<view class="home-item">
			<view class="home-a">
				<view class="home-a-a">版本信息</view>
				<view class="home-a-b">V1.0.0</view>
			</view>
			<view class="home-a">
				<view class="home-a-a">页面开发</view>
				<view class="home-a-b">大彭Sir</view>
			</view>
			<view class="home-a" @click="clear()">
				<view class="home-a-a">清除缓存</view>
				<view class="home-a-b">></view>
			</view>
			<view class="home-b" @click="about()">
				<view class="home-a-a">关于我们</view>
				<view class="home-a-c">></view>
			</view>
		</view>
	</view>
	<view class="login" :style="height">
		<view class="close" @click="close()">
			<view class="close-title">请选择登录方式</view>
			<view class="close-btn">
				<uni-icons type="closeempty" size="30"></uni-icons>
			</view>
		</view>
		<view class="login-content">
				该功能仅获取您的微信/QQ头像，用于前端页面展示，本程序不会储存您的个人信息，请放心使用！
		</view>
		<view class="login-box">
			<view class="wx" @click="getUser('weixin')">
				<uni-icons type="weixin" color="#04BE02" size="16"></uni-icons>微信登录
			</view>
			<view class="qq" @click="getUser('qq')">
				<uni-icons type="qq" color="#66ccff" size="16"></uni-icons>QQ登录
			</view>
		</view>
	</view>
</template>

<script>
	import {
		myRequest,
		apiRequest
	} from '@/api.js';
	import set from '@/setting.js';
	export default {
		data() {
			return {
				shoulu: '',
				sogo: '',
				height: '0%',
				avatarUrl: '../../static/logo.png',
				nickName: "点击登录",
				homelist: [{
						img: "../../static/home/xitongshezhi.png",
						text: "程序设置",
						url: "setting"
					},
					{
						img: "../../static/home/bangzhuzhongxin.png",
						text: "问题反馈",
						url: "../about/help"
					},
					{
						img: "../../static/home/guanyuwomen.png",
						text: "关于我们",
						url: "../about/about"
					},
					{
						img: "../../static/home/zhanghuguanli.png",
						text: "程序管理",
						url: "../setting/admin"
					}
				],
				opacity: ["opacity:0.1;background:#fff;", "opacity:0.125;background:#fff;",
					"opacity:0.15;background:#fff;", "opacity:0.175;background:#fff;", "opacity:0.2;background:#fff;",
					"opacity:0.225;background:#fff;",
					"opacity:0.25;background:#fff;", "opacity:0.275;background:#fff;", "opacity:0.3;background:#fff;",
					"opacity:0.325;background:#fff;", "opacity:0.375;background:#fff;", "opacity:0.4;background:#fff;",
					"opacity:0.425;background:#fff;", "opacity:0.45;background:#fff;",
					"opacity:0.475;background:#fff;", "opacity:0.5;background:#fff;", "opacity:0.525;background:#fff;",
					"opacity:0.55;background:#fff;",
					"opacity:0.575;background:#fff;", "opacity:0.6;background:#fff;", "opacity:0.625;background:#fff;",
					"opacity:0.65;background:#fff;", "opacity:0.675;background:#fff;", "opacity:0.7;background:#fff;",
					"opacity:0.725;background:#fff;", "opacity:0.75;background:#fff;",
					"opacity:0.775;background:#fff;", "opacity:0.8;background:#fff;", "opacity:0.825;background:#fff;",
					"opacity:0.85;background:#fff;",
					"opacity:0.875;background:#fff;", "opacity:0.9;background:#fff;", "opacity:0.925;background:#fff;",
					"opacity:0.95;background:#fff;", "opacity:0.975;background:#fff;"
				],
			}
		},
		mounted() {},
		onShow() {
			var that = this
			uni.getStorage({
				key: "avatarUrl",
				success: function(res) {
					that.avatarUrl = res.data
				}
			})
			uni.getStorage({
				key: "nickName",
				success: function(res) {
					that.nickName = res.data
				}
			})
		},
		onLoad() {
			this.height = "height:0%";
			var that = this;
			uni.getStorage({
				key: 'shoulu',
				success: function(res) {
					that.shoulu = res.data
				},
				fail: function() {
					that.baidu('/baidupages/index', 'shoulu');
				}
			});
			uni.getStorage({
				key: 'sogo',
				success: function(res) {
					that.sogo = res.data
				},
				fail: function() {
					that.baidu('/sogoupages/index', 'sogo');
				}
			});
		},
		methods: {
			close() {
				this.height = "height:0%";
			},
			login() {
				this.height = "height:40%"
			},
			getUser(app) {
				var that = this
				uni.login({
					provider: app,
					success: function(loginRes) {
						console.log(loginRes.authResult);
						// 获取用户信息
						uni.getUserInfo({
							provider: app,
							success: function(infoRes) {
								that.avatarUrl = infoRes.userInfo.avatarUrl
								that.nickName = infoRes.userInfo.nickName
								uni.setStorage({
									key: 'nickName',
									data: infoRes.userInfo.nickName
								})
								uni.setStorage({
									key: 'avatarUrl',
									data: infoRes.userInfo.avatarUrl
								})
							}
						});
					}
				});
				this.height = "height:0%";
			},
			clear() {
				uni.showModal({
					title: "温馨提示",
					content: "这样会清空您的个人设置，请谨慎操作！",
					success: function(res) {
						if (res.confirm) {
							uni.clearStorage();
							uni.showToast({
								title: '清除成功',
								duration: 2000
							});
							uni.switchTab({
								url: "../index/index"
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			about() {
				uni.navigateTo({
					url: "../about/about"
				})
			},
			shua(b) {
				var that = this;
				uni.showModal({
					title: '温馨提示',
					content: '确定要刷新吗？（过多刷新会造成资源浪费）',
					success: function(res) {
						if (res.confirm) {
							if (b == 'baidu') {
								that.baidu('/baidupages/index', 'shoulu');
							} else if (b == 'sogo') {
								that.baidu('/sogoupages/index', 'sogo');
							}
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			go(url) {
				if (url == 'setting') {
					// #ifdef MP-BAIDU || MP-WEIXIN ||MP-QQ
					uni.openSetting({});
					// #endif
					// #ifdef APP-PLUS||H5
					uni.showModal({
						title: "温馨提示",
						content: "仅限小程序使用！"
					})
					// #endif
				} else {
					uni.navigateTo({
						url: url
					})
				}
			},
			async baidu(u, k) {
				var urlNoProtocol = set.url.replace(/^https?\:\/\//i, "");
				const res = await apiRequest({
					url: u,
					method: 'GET',
					data: {
						key: set.tiankey,
						domain: urlNoProtocol
					}
				})
				uni.setStorage({
					key: k,
					data: res.data.newslist[0].count
				});
				this[k] = res.data.newslist[0].count
			},
		}
	}
</script>

<style>
	@import "../../uni.css";
page{
	font-size: 16px;
}
	.login {
		width: 100%;
		z-index: 99;
		transition: 2s;
		position: fixed;
		bottom: 0;
		box-shadow: #BBE4FF 1px 1px 10px;
		background-color: #F3E3D8;
		border-radius: 20px 20px 0px 0px;
	}

	.close {
		display: flex;
		justify-content: space-between;
		padding: 2px;
		margin: 10px;
		height: 10%;
	}

	.close-title {
		font-size: 20px;
		font-weight: 800;
	}

	.close-btn {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border: 2px #eee solid;
	}

	.login-box {
		display: flex;
		justify-content: space-around;
	}

	.wx,
	.qq {
		padding: 5px 10px;
		border-radius: 30px;
		background-color: #fff;
		box-shadow: #F3E3D8 1px 1px 10px;
		width: 30%;
		text-align: center;
	}

	.wx {
		color: #04BE02;
	}

	.qq {
		color: #66ccff;
	}

	.login-content {
		height: 50%;
		padding: 10px;
		word-wrap: break-word;
		opacity: 0.7;
		text-indent: 32px;
	}
	/* #ifdef H5 */
	.login-content {
		height: 30%;
		padding: 10px;
		word-wrap: break-word;
		opacity: 0.7;
		text-indent: 32px;
	}
	/* #endif */
	.baidu-box {
		display: flex;
		justify-content: space-between;
		margin: auto;
		margin: 10px;
	}

	.baidu-item {
		width: 43%;
		border-radius: 10px;
		box-shadow: #eeeeee 1px 1px 30px;
		display: flex;
		justify-content: space-between;
		padding: 10px;
		align-items: center;
	}

	.shoulu {
		display: flex;
		flex-direction: column;
		line-height: normal;
	}

	.sl-icon {
		background-color: #BBE4FF;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		display: flex;
		align-items: center;
	}

	.sl-icon-sg {
		background-color: #F3E3D8;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		display: flex;
		align-items: center;
	}

	.sl-title {
		font-weight: 200;
		opacity: 0.8;
	}

	.sl-content {
		font-weight: 800;
	}

	.homelist {
		margin: 10px;
		margin-top: -25px;
		background-color: #fff;
		border-radius: 20px 20px 0px 0px;
		display: flex;
		height: 55px;
		padding: 10px;
		justify-content: space-around;
		z-index: 2;
	}

	.home-item {
		margin: 10px;
		padding: 10px;
		background: #fff;
		border-radius: 10px;
		opacity: 0.8;
		font-weight: 200;
		box-shadow: #ddd 1px 1px 10px;
	}

	.home-a {
		display: flex;
		padding: 10px;
		border-bottom: 1px dotted #eeeeee;
	}

	.home-b {
		display: flex;
		padding: 10px;
	}

	.home-a-a {
		font-weight: 600;
		font-size: 15px;
	}

	.home-a-b {
		position: absolute;
		right: 40px;
		font-weight: 100;
		font-size: 13px;
		line-height: 39rpx;
	}

	.home-a-c {
		position: absolute;
		right: 40px;
		font-weight: 100;
		font-size: 17px;
		line-height: 39rpx;
	}
</style>
