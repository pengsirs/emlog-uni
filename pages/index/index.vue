<template>
	<view class="content">
		<view class="header">
			<view class="user">
				<view class="user-img" @click="showDrawer('showLeft')">
					<!-- <image class="user-img" src="../../static/logo.png" mode=""></image>-->
					<uni-icons type="settings" color="#007AFF	" size="30"></uni-icons>
				</view>
			</view>
			<view class="secrch">
				<uni-search-bar :radius="5" placeholder="请输入要搜索的内容" cancelButton="none" bgColor="#eee" @confirm="search"
					@cancel="search" cancel-text="搜索">
					<uni-icons slot="searchIcon" color="#999999" size="18" type="home" />
				</uni-search-bar>
			</view>
			<view class="user">
				<view>
					<image @click="getUser()" class="user-img" :src="avatarUrl" mode=""></image>
				</view>
			</view>
		</view>

		<view class="example-body">
			<uni-drawer ref="showLeft" mode="left" :width="320">
				<scroll-view style="height: 100%;" scroll-y="true">
					<view class="title">
						<view class="title-blue"></view>
						<text>文章分类</text>
					</view>
					<view class="sorts">
						<view v-for="(s,index) in blogSorts" :key="index" :id="'tab'+index"
							:class="['scroll-view-item_H',current==index?'active':'']" @click="change(index,s.sid)">
							<view class="sort-item">{{s.sortname}}</view>
						</view>
					</view>
				</scroll-view>
			</uni-drawer>
		</view>

		<swiper class="swiper-box" indicator-dots="true" autoplay="true" circular="true" previous-margin="10px"
			next-margin="10px">
			<swiper-item v-for="(item, index) in images" :key="index">
				<view class="swiper-item" :class="'swiper-item' + index">
					<img :src="item" class="swiper-img" srcset="">
				</view>
			</swiper-item>
		</swiper>
		<view class="bannertm">
			<view v-for="i in opacity" :style="i" class="tm"></view>
		</view>


		<uni-notice-bar show-icon scrollable  background-color="#fff" color="#000" :text="appData.data.gonggao" />

<!-- 		<scroll-view scroll-x="true" style="width: 100%;white-space: nowrap;">
			<view class="sorts">
				
			</view>
		</scroll-view> -->
		
		<view class="baidu-box" v-if="appData.downurl != 1">
			<view class="baidu-item">
				<view class="sl-icon">
					<uni-icons color="#fd7081" type="star-filled" size="30"></uni-icons>
				</view>
				<view class="shoulu">
					<view class="sl-content">App下载</view>
					<view class="sl-title">复制Url</view>
				</view>
				<uni-icons @click="copyUrl()" color="#aaa" type="circle-filled" size="20"></uni-icons>
			</view>
			<view class="baidu-item">
				<view class="sl-icon-sg">
					<uni-icons color="#66ccff" type="qq" size="30"></uni-icons>
				</view>
				<view class="shoulu">
					<view class="sl-content">联系客服</view>
					<view class="sl-title">复制QQ</view>
				</view>
				<uni-icons @click="copyQQ()" color="#aaa" type="circle-filled" size="20"></uni-icons>
			</view>
		</view>
		

		<view v-if="backTopValue" class="xiaohuojian" @click="xhj">
			<image src="../../static/fanhuidingbu.png" mode=""></image>
		</view>

		<view v-for="(item,index) in dataa" :key="index">
			<!-- #ifdef MP-QQ -->
			<ad class="ad" v-if="index%5==0 && index!=0" unit-id="675f88c8665f60f30b71804e8ef4707a"></ad>
			<!-- #endif -->
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
	</view>
</template>
<script>
	import {
		myRequest,
		apiRequest,
		htRequest
	} from '@/api.js';
	import set from '@/setting.js';
	export default {
		data() {
			return {
				dataa: [],
				avatarUrl: '../../static/logo.png',
				$req_time: '',
				$sign: '',
				page: 1,
				shoulu: "",
				description: '',
				di: false,
				backTopValue: false,
				onRefresh: false,
				status: "loading",
				blogSorts: [],
				images: [
					"http://cdn.hkiii.cn//img/_2022/06/21/09/52/42/167/6483441/13482961188039425428",
					"http://cdn.hkiii.cn//img/_2022/06/21/09/52/42/181/6483441/13482961192300838800",
					"http://cdn.hkiii.cn//img/_2022/06/21/09/52/42/172/6483441/13482961190153354896"
				],
				opacity: ["opacity:0.1;background:#fff;", "opacity:0.125;background:#fff;",
					"opacity:0.15;background:#fff;", "opacity:0.175;background:#fff;", "opacity:0.2;background:#fff;",
					"opacity:0.225;background:#fff;",
					"opacity:0.25;background:#fff;", "opacity:0.275;background:#fff;", "opacity:0.3;background:#fff;",
					"opacity:0.325;background:#fff;", "opacity:0.375;background:#fff;", "opacity:0.4;background:#fff;",
					"opacity:0.425;background:#fff;", "opacity:0.45;background:#fff;",
					"opacity:0.475;background:#fff;", "opacity:0.5;background:#fff;", "opacity:0.525;background:#fff;",
					"opacity:0.55;background:#fff;",
					"opacity:0.575;background:#fff;", "opacity:0.6;background:#fff;", "opacity:0.625;background:#fff;",
					"opacity:0.65;background:#fff;", "opacity:0.675;background:#fff;", "opacity:0.7;background:#fff;",
					"opacity:0.725;background:#fff;", "opacity:0.75;background:#fff;",
					"opacity:0.775;background:#fff;", "opacity:0.8;background:#fff;", "opacity:0.825;background:#fff;",
					"opacity:0.85;background:#fff;",
					"opacity:0.875;background:#fff;", "opacity:0.9;background:#fff;", "opacity:0.925;background:#fff;",
					"opacity:0.95;background:#fff;", "opacity:0.975;background:#fff;"
				],
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				blogAll: '',
				current: 0,
				scrollinto: '',
				appData:''
			}
		},
		mounted() {},
		onLoad() {
			this.blog(1);
			this.getSorts();
			this.getData();
		},
		onShow() {
			var that = this;
			uni.getStorage({
				key: "avatarUrl",
				success: function(res) {
					that.avatarUrl = res.data
				}
			})
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
		// 监听滚动条坐标
		onPageScroll: function(e) {
			var scrollTop = e.scrollTop
			var backTopValue = scrollTop > 500 ? true : false
			this.backTopValue = backTopValue
		},
		//	小程序分享
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			}
			return {
				title: '分享好玩的程序！',
				imageUrl: this.appData.data.shareimg,
				path: 'pages/index/index'
			}
		},
		methods: {
			copyUrl(){
				uni.setClipboardData({
					data: this.appData.data.downurl,
					success: function () {
						uni.showModal({
							title:"温馨提示",
							content:"复制成功"
						})
					}
				});
			},
			copyQQ(){
				uni.setClipboardData({
					data: this.appData.data.qq,
					success: function () {
						uni.showModal({
							title:"温馨提示",
							content:"复制成功"
						})
					}
				});
			},
			async getData() {
				var that = this;
				const res = await htRequest({
					url: "/index.php/index/index/get_miniapp",
					method: 'POST',
					data: {
						setapi: set.setapi
					},
				})
				this.appData = res.data
				uni.setStorage({
					key:'appData',
					data:res.data
				})
			},
			change(index,id) {
				uni.navigateTo({
					url:"../sort-info/sort-info?id="+id
				})
				this.current = index;
				this.scrollinto = 'tab' + index;
			},
			onChangeTab(e) {
				this.change(e.detail.current)
			},
			getUser() {
				uni.switchTab({
					url: "../home/home"
				})
			},
			// 打开窗口
			showDrawer(e) {
				this.$refs[e].open()
			},
			// 关闭窗口 
			closeDrawer(e) {
				this.$refs[e].close()
			},
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
					url: '/pages/blog-info/blog-info?id=' + e + "&url=" + encodeURIComponent(u)
				})
			},
			search(res) {
				uni.navigateTo({
					url: "../search/search?search=" + res.value
				})
			},
			messageToggle(type) {
				this.msgType = type
				this.messageText = `这是一条${type}消息提示`
				this.$refs.message.open()
			},
			xhj() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})
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
					this.dataa = [...this.dataa, ...res.data.data.articles]
				}

			},
			async blogall() {
				const res = await myRequest({
					url: '/?rest-api=article_list',
					method: 'GET',
					data: {
						count: 999
					}
				})
				this.blogAll = [...this.blogAll, ...res.data.data.articles]
			},
			async getSorts() {
				const res = await myRequest({
					url: '/?rest-api=sort_list',
					method: 'GET',
				})
				this.blogSorts = res.data.data.sorts
			}
		}
	}
</script>

<style lang="scss">
	@import "../../uni.css";

	page {
		font-size: 16px
	}
	.ad{
		width: 94%;
		margin: 3%;
	}
	.sl-title{
		font-size: 13px;
		font-weight: 200;
	}
	.sl-icon {
		background-color: #feb9bc;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		display: flex;
		align-items: center;
	}

	.sl-icon-sg {
		background-color: #BBE4FF;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		display: flex;
		align-items: center;
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

	.xiaohuojian {
		width: 50px;
		height: 50px;
		position: fixed;
		bottom: 50px;
		right: 10px;
		z-index: 99;
	}

	.xiaohuojian image {
		width: 100%;
		height: 100%;
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
