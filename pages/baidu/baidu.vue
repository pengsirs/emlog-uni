<template>
	<view class="baidu">
		<list @editBlog="getBaidu" :List="list" xiangqing="提交链接" desc="来自文章分类:"></list>
	</view>
</template>

<script>
	import {
		myRequest,
		apiRequest,
		htRequest,
		get
	} from '@/api.js';
	export default {
		data() {
			return {
				value: '',
				page: 1,
				list: '',
				flg: false
			}
		},
		onReachBottom() {
			this.page = this.page + 1
			this.blog(this.page);
		},
		onShow() {
			 // #ifndef APP-PLUS
			 uni.showModal({
			 	title: "提示",
			 	content: '仅APP可用该功能',
			 	success: function(res) {
			 		if (res.confirm) {
			 			uni.navigateBack(1)
			 		} else if (res.cancel) {
			 			uni.navigateBack(1)
			 		}
			 	}
			 })
			 //#endif
		},
		onLoad() {
			this.blog(1);
			var that = this;
			//获取管理员Key
			uni.getStorage({
				key: 'apikey',
				success: function(res) {
					that.http(res.data)
				},
				fail() {
					uni.showModal({
						title: "提示",
						content: '您不是管理员',
						showCancel:false,
						success: function(res) {
							if (res.confirm) {
								uni.navigateBack(1)
							}
						}
					})
				}
			});
		},
		methods: {
			async http(key) {
				const res = await myRequest({
					url: '/content/plugins/ApiSetting/api.php',
					method: 'post',
					data: {
						admin: "getAdmin",
						key: key
					}
				})
				if (res.data.state == 200) {
					this.flg = true
					this.value = res.data.data
				} else {
					this.flg = false
					uni.showModal({
						title: "提示",
						content: '您不是管理员',
						showCancel:false,
						success: function(res) {
							if (res.confirm) {
								uni.navigateBack(1)
							}
						}
					})
				}
			},
			async getBaidu(id, u) {
				uni.showLoading({
					title: `提交中`
				})
				// console.log(id,u)
				const res = await get({
					url: 'https://data.zz.baidu.com/urls?site=' + u + '&token=' + this.value.baidu,
				})
				if (res.data.error >= 400) {
					uni.hideLoading()
					uni.showModal({
						title: "链接提交失败",
						content: `${res.data.message}`
					})
				} else if (res.data.error <= 400) {
					uni.hideLoading()
					uni.showModal({
						title: "提交成功",
						content: `剩余的可推送${res.data.remain}条`
					})
				}else {
					uni.hideLoading()
					uni.showModal({
						title: "提交失败",
						content: `${res.data.message}`
					})
				}
				// console.log(res.data.error)
			},
			async blog(page) {
				const res = await myRequest({
					url: '/?rest-api=article_list',
					method: 'GET',
					data: {
						page: page,
						count: 10
					}
				})
				if (res.data.data.articles == '') {
					this.status = "no-more"
				} else {
					this.list = [...this.list, ...res.data.data.articles]
				}
			},
		}
	}
</script>
<style>
</style>
