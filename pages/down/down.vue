<template>
	<view class="page">
		<view class="out">
			<view class="in"></view>
		</view>
		<view class="text">附件下载</view>
	</view>
	<view class="page-two" v-for="(item,index) in data" :key="index">
		{{index+1}}.
		<mp-html lozy-load="true" container-style="overflow: hidden;" selectable="true" tag-style="{{tagStyle}}"
			:content="item" />
	</view>
	<view class="page-two" v-if="data==null">
		暂无附件
	</view>
</template>

<script>
	import {
		myRequest
	} from '@/api.js';
	export default {
		data() {
			return {
				gid: 0,
				data:""
			}
		},
		onLoad(options) {
			this.gid = options.gid
			this.blog(options.id)
		},
		methods: {
			async blog(e) {
				var gid = this.gid || gid
				const res = await myRequest({
					url: '/?rest-api=article_detail',
					method: 'GET',
					data: {
						id: e
					}
				})
				var success = res.data.data.article.content
				var nr = success.match(/<a (.*)a>/gi)
				this.data = nr
				console.log(this.data)
			}
		}
	}
</script>

<style>
	page {
		background: #f7f7f7;
	}

	.page {
		width: 90%;
		margin: 10px auto;
		background: #fff;
		border-radius: 10px 10px 0px 0px;
		padding: 10px 10px 3px;
		display: flex;
		border-bottom: #eee 1rpx dashed;
	}

	.page-two {
		width: 90%;
		margin: -10px auto;
		background: #fff;
		border-radius: 0px 0px 10px 10px;
		padding: 10px;
		font-weight: 200;
		font-size: 13px;
	}

	.out {
		width: 15px;
		height: 15px;
		border: 1px solid #9dd3fa;
		border-radius: 50%;
		position: relative;
		margin: 5px;
	}

	.in {
		width: 10px;
		height: 10px;
		background: #9dd3fa;
		border-radius: 50%;
		position: absolute;
		margin: auto;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}

	.text {
		line-height: 27px;
		font-weight: 400;
	}
</style>
