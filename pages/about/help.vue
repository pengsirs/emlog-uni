<template>
	<view class="content">
		<view class="two">
			<input type="text" v-model="name" placeholder="昵称,默认游客" />
			<input type="text" v-model="qq" placeholder="邮箱(可留空)" />
		</view>
		<input class="url" type="text" v-model="userUrl" placeholder="请输入企鹅号码(用于显示您的头像)" />
		<textarea v-model="content" cols="30" rows="10" placeholder="请输入要反馈的内容!"></textarea>
	</view>
	<button class="btn" type="primary" @click="addComment">提交内容</button>
</template>

<script>
	import {
		htRequest,
		url
	} from '@/api.js';
	export default {
		data() {
			return {
				id: '',
				rid: '',
				content: '',
				qq: '',
				userUrl: '',
				name: ''
			}
		},
		onLoad(o) {
			this.id = o.id;
			this.rid = o.rid || '';
		},
		methods: {
			async addComment() {
				uni.showLoading({})
				const res = await htRequest({
					url: "/index.php?action=addcom",
					method: 'POST',
					data: {
						gid: this.id,
						comname: this.name || '游客',
						comment: this.content,
						commail: this.qq,
						pid: this.rid,
						comurl: this.userUrl,
						imgcode: '',
						resp: 'json'
					},
				})
				if (res.data.code == 1) {
					uni.hideLoading()
					uni.showModal({
						title: "温馨提示",
						content: `${res.data.msg}`,
						showCancel: false
					})
				} else if (res.data.code == 0) {
					uni.hideLoading()
					uni.showModal({
						title: "温馨提示",
						content: `提交成功`,
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
						content: `未知错误`,
						showCancel: false
					})
				}
			}
		}
	}
</script>

<style>
	page {
		font-size: 16px;
	}

	textarea {
		background-color: #fff;
		box-shadow: #ddd 1px 1px 10px;
		margin: 2%;
		padding: 2%;
		width: 92%;
		border-radius: 10px;
	}

	.two {
		display: flex;
		justify-content: space-between;
		margin: 2%;
	}

	.two input {
		width: 46%;
		border-radius: 5px;
		padding: 3px 5px;
		background-color: #fff;
		box-shadow: #ddd 1px 1px 10px;
	}

	.url {
		margin: 2%;
		border-radius: 5px;
		padding: 3px 5px;
		background-color: #fff;
		box-shadow: #ddd 1px 1px 10px;
	}

	.btn {
		margin: 50px 10px;
		border-radius: 50px;
		box-shadow: #ddd 1px 1px 10px;
	}
</style>
