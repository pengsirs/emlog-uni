<template>
	<view class="admin">
		<view class="tab">
			<view @click="swiperCurrent=0" :class="'tab1 ' + (0 == swiperCurrent ? ' active' : '')">基础</view>
			<view @click="swiperCurrent=1" :class="'tab2 ' + (1 == swiperCurrent ? ' active' : '')">广告</view>
			<view @click="swiperCurrent=2" :class="'tab3 ' + (2 == swiperCurrent ? ' active' : '')">App</view>
			<view @click="swiperCurrent=3" :class="'tab4 ' + (3 == swiperCurrent ? ' active' : '')">更多</view>
		</view>
		<swiper class="swiper" :current="swiperCurrent" easing-function="easeInOutCubic" :duration="500"
			@change="swiperChangeCustom">
			<swiper-item>
				<scroll-view :scroll-top="scrollTop" :scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					@scrolltolower="lower" @scroll="scroll">
					<view class="page-body">
						<view class="title">APPkey:</view>
						<uni-easyinput v-model="model.appkey" placeholder="请输入APPKEY,与emlog接口同" />
						<view class="title">轮播图:</view>
						<uni-easyinput v-model="model.lbid" placeholder="请输入文章ID用英文,隔开" />
						<view class="title">首页专题:</view>
						<uni-easyinput v-model="model.sortid" placeholder="请输入分类ID用英文,隔开" />
						<view class="title">首页公告:</view>
						<uni-easyinput v-model="model.ridingLantern" placeholder="请输入公告内容" />
						<view class="title">站长QQ:</view>
						<uni-easyinput v-model="model.qq" placeholder="请输入QQ" />
						<view class="title">分享图片:</view>
						<uni-easyinput v-model="model.shareImg" placeholder="请输入Url" />
						<view class="title">关于我们:</view>
						<uni-easyinput v-model="model.about" placeholder="请输入文章ID" />
						<view class="title flex">审核模式:
							<switch :checked="model.auditing==1?true:false" @change="auditing" />
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view :scroll-top="scrollTop" :scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					@scrolltolower="lower" @scroll="scroll">
					<view class="page-body">
						<view class="title">视频广告:</view>
						<uni-easyinput v-model="model.videoAd" placeholder="请输入视频广告ID" />
						<view class="title">Banner广告:</view>
						<uni-easyinput v-model="model.BannerAd" placeholder="请输入BannerID" />
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view :scroll-top="scrollTop" :scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					@scrolltolower="lower" @scroll="scroll">
					<view class="page-body">
						<view class="title">app版本号:</view>
						<uni-easyinput v-model="model.appVersion" placeholder="请输入版本号" />
						<view class="title">App下载链接:</view>
						<uni-easyinput v-model="model.appUrl" placeholder="请输入下载链接" />
						<view class="title">更新内容:</view>
						<uni-easyinput v-model="model.appContent" placeholder="请输入下载更新内容,尽量简短" />
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view :scroll-top="scrollTop" :scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					@scrolltolower="lower" @scroll="scroll">
					<view class="page-body">
						<view class="title">七牛空间名:</view>
						<uni-easyinput v-model="model.qiniukj" placeholder="请输入空间名" />
						<view class="title">七牛绑定的域名:</view>
						<uni-easyinput v-model="model.qiniuUrl" placeholder="请输入链接" />
						<view class="title">七牛AK:</view>
						<uni-easyinput v-model="model.qiniuak" placeholder="请输入七牛AK" />
						<view class="title">七牛SK:</view>
						<uni-easyinput v-model="model.qiniusk" placeholder="请输入七牛SK" />
						<view class="title">天行数据密钥:</view>
						<uni-easyinput v-model="model.tianapi" placeholder="请输入密钥" />
						<view class="title">百度链接提交token:</view>
						<uni-easyinput v-model="model.baidu" placeholder="请输入百度token" />
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<button class="active fixed" @click="upDataAdmin">保存设置</button>
	</view>
</template>

<script>
	import {
		myRequest,
		apiRequest,
		htRequest,
		get
	} from '@/api.js';
	import set from '@/setting.js';
	import {
		update
	} from 'js-md5';
	export default {
		data() {
			return {
				data: '',
				status: false,
				swiperCurrent: 0,
				sexs: [{
					text: '开启',
					value: 1
				}, {
					text: '关闭',
					value: 0
				}],
				value: '',
				model: {
					appkey: '',
					lbid: '',
					sortid: '',
					ridingLantern: '',
					shareImg: '',
					about: '',
					auditing: '',
					qq: '',
					videoAd: '',
					BannerAd: '',
					appVersion: '',
					appUrl: '',
					appContent: '',
					qiniuUrl: '',
					qiniukj: '',
					qiniuak: '',
					qiniusk: '',
					tianapi: '',
					baidu: '',
				},
			}
		},
		onLoad() {
			var that = this;
			uni.getStorage({
				key: 'apikey',
				success: function(res) {
					that.value = res.data
					that.http(res.data);
				}
			});
		},
		methods: {
			swiperChangeCustom(e) {
				this.swiperCurrent = e.detail.current
			},
			auditing(e) {
				if (e.detail.value) {
					this.model.auditing = 1
				} else {
					this.model.auditing = 0
				}
			},
			async http(key) {
				const res = await myRequest({
					url: '/content/plugins/ApiSetting/api.php',
					method: 'post',
					data: {
						admin: "getAdmin",
						key: key
					}
				})
				if (res.data.state == 0) {
					this.status = false
				} else if (res.data.state == 200) {
					this.status = true
					this.model = res.data.data
				}
			},
			async upDataAdmin() {
				Object.assign(this.model, {
					admin: "upDataAdmin"
				})
				const res = await myRequest({
					url: '/content/plugins/ApiSetting/api.php',
					method: 'post',
					data: this.model
				})
				if (res.data.state == 201) {
					uni.showToast({
						title: "不是管理员",
						icon: 'error'
					})
				} else if (res.data.state == 200) {
					uni.showModal({
						title: "温馨提示！",
						content: '保存成功！已为您更新本地设置！'
					})
					this.http();
				} else if (res.data.state == 204) {
					uni.showToast({
						title: "保存失败了",
						icon: 'error'
					})
				} else {
					uni.showToast({
						title: `网络错误x`,
						icon: 'error'
					})
				}
			},
		}
	}
</script>

<style>
	.loadmany {
		text-align: center;
	}

	.uni-input {
		text-align: center;
	}

	.tab {
		box-shadow: inset 0px 0px 5px #ddd;
		width: 95%;
		height: 5vh;
		margin: 2vh auto;
		padding: 5px 0px;
		border-radius: 10px;
		display: flex;
		justify-content: space-around;
		line-height: 5vh;
	}

	.tab view {
		width: 20%;
		text-align: center;
		box-shadow: 0px 0px 10px #ddd;
		border-radius: 5px;
	}

	.swiper {
		width: 100%;
		margin: auto;
		height: 90vh;
		position: absolute;
		bottom: 0;
		left: 0;
	}

	.title {
		margin-top: 10px;
	}

	.scroll-Y {
		height: 95vh;
		background-color: #fff;
		box-shadow: 0px 0px 5px #ddd;
		width: 95%;
		margin: 10px auto 10px;
		border-radius: 10px;
		padding: 5px;
		/* overflow: hidden; */
	}

	.textarea {
		width: 90%;
		margin: 10px auto 10px;
	}


	page {
		margin: 0;
		padding: 0;
	}

	.fabu {
		width: 90%;
		margin: 10px auto;
		padding: 10px;
		text-align: center;
		background-color: #38F;
		border-radius: 5px;
	}

	.uni-input,
	>>>.uni-easyinput input {
		padding: 10px;
		box-shadow: inset 0px 0px 5px #ddd;
		border-radius: 5px;
		border: 0 !important;
	}

	>>>.is-input-border {
		border: 0 !important;
	}

	.flg-img {
		width: 100%;
		margin-top: 50px;
	}

	.flg-text {
		text-align: center;
		font-weight: 800;
		margin-top: 50px;
	}

	.flg-btn {
		margin: 10px;
		margin-top: 40px;
		border-radius: 10px;
		background-color: #F17C67;
		opacity: 0.9;
		color: #fff;
	}

	page {
		font-size: 16px;
	}

	.flg-title {
		margin-top: 30px;
	}

	.flg-close {
		margin-left: 10px;
		opacity: 0.5;
	}

	.flg-cell {
		text-align: center;
		opacity: 0.3;
	}

	.wrapper {
		padding: 5px;
	}

	.toolbar {}

	.iconfont {
		display: inline-block;
		padding: 8px 8px;
		width: 24px;
		height: 24px;
		cursor: pointer;
		font-size: 20px;
	}
.flex{
	display: flex;
	justify-content: space-between;
}
	.toolbar {
		box-sizing: border-box;
		border-bottom: 0;
		font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
	}

	.ql-container {
		box-sizing: border-box;
		padding: 12px 15px;
		width: 100%;
		min-height: 30vh;
		height: auto;
		background: #fff;
		font-size: 16px;
		line-height: 1.5;
		box-shadow: inset 0px 0px 5px #ddd;
		border-radius: 5px;
	}

	.ql-active {
		color: #38F;
	}

	.inp-title {
		box-shadow: inset 0px 0px 5px #ddd;
		border-radius: 5px;
		padding: 5px;
	}

	.active {
		background: #38F;
		box-shadow: 0px 0px 10px #38F !important;
		transition: all 1s;
	}

	.fixed {
		position: fixed;
		bottom: 10px;
		left: 25%;
		width: 50%;
	}
</style>
