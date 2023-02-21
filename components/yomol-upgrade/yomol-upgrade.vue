<template>
	<view class="zy-modal" :class="dshow?'show':''">
		<view class="zy-dialog" style="background-color: transparent;">
			<view class="padding-top text-white" :class="'zy-upgrade-topbg-'+theme">
				<view>
					<text class="zy-upgrade-title">
						发现新版本
					</text>
				</view>
				<text class="flex-wrap">{{currentVersion}}->{{ newVersion }}</text>
			</view>
			<view class="padding-xl bg-white text-left">
				<scroll-view style="max-height: 200rpx;" scroll-y="auto" v-if="!downloading">
					<text>{{content}}</text>
				</scroll-view>
				<view class="zy-progress radius striped active" v-if="downloading">
					<view :class="'bg-'+theme" :style="'width: '+progress+'%;'">
						{{progress}}
					</view>
				</view>
			</view>
			<view class="zy-bar bg-white justify-end">
				<view class="action" v-if="!downloading">
					<button class="zy-btn" :class="'bg-'+theme" @click="onSureClick">确认升级</button>
					<button class="zy-btn margin-left" :class="'line-'+theme" v-if="!downloading"
						@click="upgrade_cancel">取消升级</button>
				</view>
				<view class="action text-center" v-if="downloading">
					<button class="zy-btn" :class="'bg-'+theme" @click="upgrade_break">中断升级</button>
				</view>
			</view>
		</view>
	</view>

	<!-- <view v-if="visible" class="mark">
		<view class="view">
			<text class="title">{{title}}</text>
			<view class="tip">新版更新内容</view>
			<scroll-view class="scroll" scroll-y>
				<view class="item" v-for="(item,index) in contents" :key="index">
					{{item}}
				</view>
			</scroll-view>
			<view v-if="!downloading" class="btns">
				<image class="icon" src="/static/images/system/user/upgrade.png"></image>
				<view class="sure" @click="onSureClick()">马上升级</view>
			</view>
			<cmd-circle v-else class="progress" type="circle" stroke-color="#5D79F7" :percent="progress"></cmd-circle>
		</view>
	</view> -->


</template>

<script>
	import cmdCircle from "@/components/cmd-circle/cmd-circle.vue"
	export default {
		components: {
			cmdCircle
		},
		data() {
			return {
				dshow: false,
				visible: false,
				progress: 0,
				contents: '',
				downloading: false,
				success: true,
				forceupgrade: false,
				downloadTask: []
			}
		},
		props: {
			//更新后的版本号
			newVersion: String,
			//更新前的版本号
			currentVersion: String,
			theme: { //主题，目前支持green,pink,blue,yellow,red
				type: String,
				default: 'red'
			},
			type: {
				type: String,
				default: 'pkg'
			},
			url: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: '版本更新'
			},
			content: {
				type: String,
				default: ""
			}
		},
		watch: {
			// content() {
			// 	var strs = this.content.split('\\n')
			// 	for (var i = 0; i < strs.length; i++) {
			// 		this.contents.push(strs[i])
			// 	}
			// }
		},
		methods: {
			//升级过程中，点击中断升级按钮，中断升级
			upgrade_break() {
				this.downloadTask.abort();
				this.downloading = false;
			},
			//点击取消升级按钮，取消升级
			upgrade_cancel() {
				this.dshow = false;
			},
			show() {
				if (this.success) {
					// this.visible = true
					this.dshow = true;
				}
			},
			hide() {
				// this.visible = false
				this.dshow = false;
			},
			onCancelClick() {
				this.hide()
			},
			async postPlatformAndNewVersion(platform) {
				let res = await getApp().globalData.request.post('common/versioncount', {
					platform,
					versionnum: this.newVersion
				});
				console.log('版本号发送：', res);
			},
			onSureClick() {
				var that = this
				var platform = uni.getSystemInfoSync().platform;
				this.postPlatformAndNewVersion(platform);
				if (platform == 'ios' && this.type == 'pkg') {
					plus.runtime.openURL(this.url);
					// let appleId = 111111111; 苹果升级
					// plus.runtime.launchApplication({
					//   action: `itms-apps://itunes.apple.com/cn/app/id${appleId}?mt=8`
					// }, function(e) {
					//    	do something...
					// });
				} else {
					this.downloading = true
					this.dshow = true;
					this.downloadTask = uni.downloadFile({
						url: this.url,
						success: (downloadResult) => {
							console.log(downloadResult);
							if (downloadResult.statusCode === 200) {
								plus.runtime.install(downloadResult.tempFilePath, {
									force: false
								}, function() {
									plus.runtime.restart();
								}, (e) => {
									console.log(e);
									this.success = false
									uni.showToast({
										title: '安装升级包失败',
										icon: 'none'
									})
								});
							}
						}
					});
							// this.downloadTask.onProgressUpdate((res) => {
							// 	console.log('上传进度' + res.progress);
							// 	console.log('已经上传的数据长度' + res.totalBytesWritten);
							// 	console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToWrite);
							// 	that.progress = res.progress
							// 	// 测试条件，取消上传任务。
							// 	if (res.progress > 50) {
							// 		this.downloadTask.abort();
							// 	}
							// });
					this.downloadTask.onProgressUpdate((res) => {
						// this.progress = res.progress

						that.progress = res.progress
						if (res.progress == Infinity) {
							//使用size计算
							// console.log("计算size");
							let progress = (res.totalBytesWritten / this.size) * 100
							if (progress > 100) {
								progress = 100
							}
							that.progress = progress;
						}
					})
				}
			}
		},
	}
</script>

<style scoped>

	@import url("static/css/main.css");

	.zy-upgrade-topbg-green {
		background-image: url('./static/images/green.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		height: 290rpx;
	}

	.zy-upgrade-topbg-red {
		background-image: url('https://cdn.hkiii.cn/cg/huojian.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		height: 290rpx;
	}

	.zy-upgrade-topbg-pink {
		background-image: url('./static/images/pink.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		height: 290rpx;
	}

	.zy-upgrade-topbg-yellow {
		background-image: url('./static/images/yellow.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		height: 290rpx;
	}

	.zy-upgrade-topbg-blue {
		background-image: url('./static/images/blue.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		height: 290rpx;
	}

	.zy-upgrade-title {
		font-size: 50rpx;
		color: white;
	}
</style>
