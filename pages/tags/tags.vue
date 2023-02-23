<template>
	<view class="tags">
		<view class="tag" :style="{ '--tagcolor':colorString[index] }" v-for="(item,index) in tags" :key="index" @click="toSearch(item.tagname)">
			{{item.tagname}}
		</view>
	</view>
</template>

<script>
	// pages/sorts/sorts.js  emlog博客小程序Brief作者QQ：6283354，请保留该版权！
	import {
		myRequest,
		apiRequest,
		htRequest
	} from '@/api.js';
	import set from '@/setting.js';
	import {
		mapState,
		mapMutations
	} from "vuex"
	export default {
		data() {
			return {
				tags: '',
				colorString:[]
			};
		},
		computed: {
			...mapState(['isLogin', 'appData'])
		},
		onLoad: function(options) {
			this.getTags();
		},
		methods: {
			/**
			 * 设置随机颜色
			 */
			getColor() {
				var row = this.tags.length
				var ColorCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
				for (var i = 0; i < row; i++) {
					var HomeNumber = "#"
					for (var j = 0; j < 6; j++) {
						var NumberRand = Math.floor(Math.random() * 16)
						HomeNumber += ColorCharacter[NumberRand]
					}
					this.colorString[i]=HomeNumber
				}
			},
			async getTags() {
				const res = await htRequest({
					url: '/content/plugins/ApiSetting/manyApi.php',
					method: "GET",
					data: {
						route: 'tags'
					}
				})
				if (res.data.state == 1) {
					this.tags = res.data.data
					this.getColor();
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
			toSearch(res) {
				uni.reLaunch({
					url: "../search/search?tag=1&keyword=" + res
				})
			},
		}
	};
</script>
<style lang="less">
	.tags {
		width: 95%;
		margin: 10px auto;
		display: flex;
		flex-wrap: wrap;
	}

	.tag {
		background-color: #fff;
		padding: 8px 10px;
		margin: 3px;
		color: #666;
		box-shadow: 1px 1px 5px #eee;
		border-radius: 5px;
		font-weight: 200;
		position: relative
	}

	.tag::before {
		width: 10px;
		height: 5px;
		border-radius: 100%;
		position: absolute;
		background-color: var(--tagcolor);
		box-shadow: inset 1px 1px 3px -1px #fff;
		content: '';
		top: 10%;
		left: 5%;
		border-radius: 3px;
		transition: 4s;
	}
</style>
