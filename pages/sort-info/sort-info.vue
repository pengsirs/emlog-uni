<template>
	<view v-for="(item,index) in dataa" :key="index">
		<view v-if="getimg(item.description) || item.cover" class="list-items" @click="toInfo(item.id,item.url)">
			<view class="img-box">
				<image @error="imageError($event, index)" class="lists-img"
					:src="item.cover||getimg(item.description)" mode="scaleToFill"></image>
			</view>
			<view class="list-box">
				<view class="list-title"><span v-if="item.top=='y'" class="top">置顶</span>{{item.title}}</view>
				<text class="desc">{{delHtmlTag(item.description)}}</text>
				<view class="many">
					<view class="sort">{{item.sort_name}}</view>
					<view class="right">
						<view class="read"> 
							<uni-icons type="fire-filled" size="17"></uni-icons>{{item.views}}
						</view>
						<view class="comments">
							<uni-icons type="chat-filled" size="17"></uni-icons>{{item.comnum}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="!getimg(item.description) && item.cover == ''" class="list-items"
			@click="toInfo(item.id,item.url)">
			<view class="list-box-null">
				<view class="list-title"><span v-if="item.top=='y'" class="top">置顶</span>{{item.title}}</view>
				<text class="desc">{{delHtmlTag(item.description)}}</text>
				<view class="many">
					<view class="sort">{{item.sort_name}}</view>
					<view class="right">
						<view class="read">
							<uni-icons type="fire-filled" size="17"></uni-icons>{{item.views}}
						</view>
						<view class="comments">
							<uni-icons type="chat-filled" size="17"></uni-icons>{{item.comnum}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	<uni-load-more color="#007AFF" :status="status" />
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
				id: '',
				page:1,
				dataa:''
			}
		},
		onLoad(option) {
			this.blog(1,option.id)
		},
		onReachBottom() {
			this.page = this.page + 1
			this.blog(this.page);
		},
		onPullDownRefresh() {
			this.dataa = ""
			this.status = "loading"
			this.page = 1
			this.blog(this.page);
			uni.stopPullDownRefresh();
		},
		methods: {
			delHtmlTag(str) {
				var reg = RegExp('<.*?>+|\n|\r', "ig");
				var result = str.replace(reg, '');
				return result;
			},
			imageError(e, index) {
				this.dataa[index]['cover'] =
					'http://cdn.hkiii.cn//img/_2022/06/29/01/38/12/502/6483441/11289324486965076622'
			},
			getimg(str) {
				var reg = RegExp(/<img.+?src=('|")?([^'"]+)('|")?(?:\s+|>|\/>)/, "gim");
				var srcReg = /<img.+?src=[\'\"]?([^\'\"]*)[\'\"]?/i;
				var result = str.match(srcReg);
				if (result != null) {
					return result[1];
				} else {
					return false;
				}
			},
			toInfo(e, u) {
				uni.navigateTo({
					url: '/pages/blog-info/blog-info?id=' + e + "&url=" + u
				})
			},
			async blog(page,id) {
				const res = await myRequest({
					url: '/?rest-api=article_list',
					method: 'GET',
					data: {
						sort_id:id,
						page: page,
						count: 10
					}
				})
				if (res.data.data.articles == '') {
					this.status = "no-more"
				} else {
					this.dataa = [...this.dataa, ...res.data.data.articles]
				}
			
			},
			}
		}
	
</script>

<style lang="scss">
	@import "../../uni.css";
	
	page {
		font-size: 16px
	}
	
	.many {
		display: flex;
		justify-content: space-between;
	}
	
	.top {
		padding: 1px 3px;
		border-radius: 5px;
		margin-right: 3px;
		background-color: #F17C67;
		color: #fff;
		opacity: 0.7;
	}
	
	.sorts {
		background-color: #eee;
		padding: 10px;
		margin: 10px;
		box-shadow: #eee 1px 1px 10px;
		border-radius: 10px;
		opacity: 0.8;
	}
	
	.scroll-view-item_H {
		&.active {
			background-color: #2979ff;
			border-radius: 20px;
			opacity: 0.5;
			color: #fff;
		}
	}
	
	.sort-item {
		padding: 5px 10px;
		margin: 0px 5px;
	}
	
	.sort {
		border: #fff solid 1px;
		padding: 3px;
		border-radius: 10px;
		opacity: 0.5;
		font-size: 16px;
	}
	
	
	.right {
		display: flex;
		justify-content: space-around;
		padding: 5px;
		width: 50%;
		opacity: 0.5;
		border-bottom: 1px dotted #eee;
	}
	
	.views {
		display: flex;
	}
	
	.comment {
		display: flex;
	}
	
	.list-items {
		display: flex;
		height: 100px;
		margin: 10px;
		padding: 10px;
		background-color: #fff;
		box-shadow: #ddd 1px 1px 30px;
		border-radius: 10px;
		justify-content: space-between;
	}
	
	.lists-img {
		width: 100%;
		height: 90px;
		border-radius: 5px;
		padding: 5px;
		background-color: #fff;
		box-shadow: inset 1px 1px 2px #ddd, inset -1px -1px 2px #ddd;
	}
	
	.list-box {
		width: 65%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.list-box-null {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.img-box {
		width: 30%;
	}
	
	.list-title {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		margin-bottom: 5px;
		font-weight: 700;
	}
	
	.desc {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		margin-bottom: 5px;
		font-weight: 200;
		font-size: 12px;
		opacity: 0.7;
	}
	
	/* #ifdef H5 */
	.header {
		margin-bottom: 10px;
		display: flex;
		width: 100%;
		position: fixed;
		top: 40px;
		justify-content: space-around;
		background-color: #fff;
		z-index: 99;
		box-shadow: #eee 1px 1px 10px;
	}
	
	/* #endif */
	/* #ifndef H5 */
	.header {
		margin-bottom: 10px;
		display: flex;
		width: 100%;
		position: fixed;
		top: 0;
		justify-content: space-around;
		background-color: #fff;
		z-index: 99;
		box-shadow: #eee 1px 1px 10px;
	}
	
	/* #endif */
	.secrch {
		width: 100%;
		border-radius: 10px;
	}
	
	.user {
		display: flex;
		height: 30px;
		margin: 10px;
	}
	
	.me-img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	
	.user-img {
		width: 34px;
		height: 34px;
		border-radius: 50%;
		border: 2px #eee solid;
	}
	
	.swiper-box {
		height: 150px;
		margin-top: 70px;
	}
	
	.title {
		display: flex;
		padding: 10px;
		line-height: 15px;
		font-size: 15px;
		font-weight: 800;
	}
	
	.title-blue {
		height: 15px;
		background-color: #2979ff;
		border-radius: 10px;
		width: 4px;
		margin-right: 5px;
	}
	
	.swiper-img {
		width: 99%;
		border-radius: 10px;
	}
	
	uni-image>img {
		opacity: inherit !important;
	}
</style>