<template>
	<view style="height: 10vh;">

	</view>
	<uni-transition ref="ani" custom-class="transition" :mode-class="modeClass" :styles="styles" :show="show">
		<view class="content">
			<view class="logo-box">
				<image class="logo" src="../../static/logo.png" mode=""></image>
			</view>
			<view class="title"> 彭先生博客</view>
			<view class="url">{{url}}</view>
			<image class="banner" src="../../static/home.jpeg" mode="aspectFill"></image>
			<view class="p">这里是站点介绍这里是站点介绍这里是站点介绍这里是站点介绍这里是站点介绍这里是站点介绍这里是站点介绍这里是站点介绍</view>
		</view>
	</uni-transition>
</template>

<script>
	export default {
		data() {
			return {
				url: 'www.hkiii.cn'
			}
		},
		onLoad() {
			this.show = !this.show
			this.modeClass = ['fade', 'zoom-in']
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
