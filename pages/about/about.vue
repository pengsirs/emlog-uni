<template>
	<view style="height: 10vh;">

	</view>
	<view class="content">
		<view class="logo-box">
			<image class="logo" src="../../static/logo.png" mode=""></image>
		</view>
		<view class="title"> 我的博客</view>
		<view class="url">{{appData.data.blogurl}}</view>
		<mp-html :content="appData.data.about"></mp-html>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: 'www.hkiii.cn',
				appData:""
			}
		},
		onLoad() {},
		onShow() {
			var that = this
			uni.getStorage({
				key: 'appData',
				success: function(res) {
					that.appData = res.data
				}
			});
		},
		methods: {}
	}
</script>

<style>
	page {
		background: linear-gradient(to bottom, #F17C67 0%, #fff 100%);
	}

	.content {
		padding: 10px;
		border-radius: 10px;
		transition: 2s;
		background-color: #fff;
		margin: 0px 10px;
		min-height: 80vh;
	}

	page {
		font-size: 16px;
	}

	.p {
		text-indent: 30px;
		font-weight: 300;
	}

	.banner {
		width: 100%;
		border-radius: 2px;
		margin-top: 10px;
	}

	.logo-box {
		display: flex;
		justify-content: center;
	}

	.logo {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background-color: #fff;
		margin-top: -65px;
		box-shadow: #ddd 1px 1px 10px;
	}

	.title {
		text-align: center;
		font-weight: 800;
		font-size: 25px;
		color: #F17C67;
	}

	.url {
		text-align: center;
		color: #F17C67;
	}
</style>
