<template>
	<view class="admin">
		{{data}}
		<button @click="upDataAdmin">ceshi</button>
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
				status: false
			}
		},
		onLoad() {
			this.http();
			var that = this;
			uni.getStorage({
				key: 'apikey',
				success: function(res) {
					that.value = res.data
				}
			});
		},
		methods: {
			async http(page) {
				const res = await myRequest({
					url: '/content/plugins/ApiSetting/api.php',
					method: 'post',
					data: {
						admin: "getAdmin",
						key: "appkey"
					}
				})
				if (res.data.state == 0) {
					this.status = false
				} else if (res.data.state == 200) {
					this.status = true
					this.data = res.data.data
				} else {
					uni.showToast({
						title: "网络错误",
						icon: 'error'
					})
				}
			},
			async upDataAdmin() {
				const res = await myRequest({
					url: '/content/plugins/ApiSetting/api.php',
					method: 'post',
					data: {
						admin: "upDataAdmin",
						appkey: 'appkey',
						lbid: '120,122,255',
						sortid: '1,2,3,4',
						ridingLantern: '这是公告',
						shareImg: '这是分享图片url',
						about: '255',
						auditing: '1',
						qq: '6283354',
						videoAd: 'videoid',
						BannerAd: 'bannerad',
						appVersion: '1.0.1',
						appUrl: 'https://cdn.hkiii.cn/PengSir.apk',
						appContent: '更新内容',
						qiniuUrl: 'qiniuUrl',
						qiniukj: 'qiniukj',
						qiniuak: 'qiniuak',
						qiniusk: 'qiniusk',
						tianapi: 'tianapi',
						baidu: 'baidu',
					}
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
				} else if (res.data.state == 204) {
					uni.showToast({
						title: "保存失败了",
						icon: 'error'
					})
				} else {
					uni.showToast({
						title: "网络错误",
						icon: 'error'
					})
				}
			},
		}
	}
</script>

<style>
</style>
