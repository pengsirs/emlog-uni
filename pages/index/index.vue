<template>
	<view>
		<view class="content" v-if="appData.state==200">
			<view class="header">
				<view class="user">
					<view @click="showDrawer('showLeft')">
						<image class="user-img" :src="avatarUrl" mode=""></image>
					</view>
				</view>
				<view class="secrch">
					<uni-search-bar :radius="5" placeholder="请输入要搜索的内容" cancelButton="none" bgColor="#eee"
						@confirm="search" @cancel="search" cancel-text="搜索" v-model="searchKey">
						<uni-icons slot="searchIcon" color="#999999" size="18" type="home" />
					</uni-search-bar>
				</view>
				<view class="user" @click="search">
					<view class="user-img"
						style="line-height: 34px;font-size: 14px;font-weight: 800;text-align: center;color: #333;">
						搜索
					</view>
				</view>
			</view>
			<view class="example-body">
				<uni-drawer ref="showLeft" mode="left" :width="320">
					<scroll-view style="height: 100%;" scroll-y="true">
						<view style="width: 100%;display: flex;flex-direction: column;">
							<view class="lervor-card-page">
								<swiper class="card-swiper"  circular="true" @change="changeCard" previous-margin="45rpx"
									next-margin="45rpx">
									<swiper-item v-for="(item, index) in cardList">
										<view
											:class="['card-item', currentCardIndex === index ? 'card-item-current' : 'card-item-default']">
											<image class="card-bg" :src="item.caroLogo" mode="aspectFill"></image>
										</view>
									</swiper-item>
								</swiper>
								<view class="card-box">
									<view class="tj-title">站点数据统计</view>
									<view class="baidu-boxx">
										<view class="baidu-iteme">
											<view class="sl-icon" style="background-color: #fff;">
												<uni-icons color="#666" type="vip" size="30"></uni-icons>
											</view>
											<view class="shoulu">
												<view class="sl-content">文章数量</view>
												<view class="sl-title">{{toolsData.blogNum}}篇</view>
											</view>
										</view>
										<view class="baidu-iteme">
											<view class="sl-icon-sg" style="background-color: #fff;">
												<uni-icons color="#666" type="link" size="30"></uni-icons>
											</view>
											<view class="shoulu">
												<view class="sl-content">友链数量</view>
												<view class="sl-title">{{toolsData.linkNum}}个</view>
											</view>
										</view>
									</view>
									<view class="baidu-boxx">
										<view class="baidu-iteme">
											<view class="sl-icon" style="background-color: #fff;">
												<uni-icons color="#666" type="paperclip" size="30"></uni-icons>
											</view>
											<view class="shoulu">
												<view class="sl-content">分类数量</view>
												<view class="sl-title">{{toolsData.sortNum}}个</view>
											</view>
										</view>
										<view class="baidu-iteme">
											<view class="sl-icon-sg" style="background-color: #fff;">
												<uni-icons color="#666" type="fire-filled" size="30"></uni-icons>
											</view>
											<view class="shoulu">
												<view class="sl-content">标签数量</view>
												<view class="sl-title">{{toolsData.tagNum}}个</view>
											</view>
										</view>
									</view>
									<view class="baidu-boxx">
										<view class="baidu-iteme">
											<view class="sl-icon" style="background-color: #fff;">
												<uni-icons color="#666" type="staff-filled" size="30"></uni-icons>
											</view>
											<view class="shoulu">
												<view class="sl-content">用户数量</view>
												<view class="sl-title">{{toolsData.userNum}}个</view>
											</view>
										</view>
										<view class="baidu-iteme">
											<view class="sl-icon-sg" style="background-color: #fff;">
												<uni-icons color="#666" type="person-filled" size="30"></uni-icons>
											</view>
											<view class="shoulu">
												<view class="sl-content">管理数量</view>
												<view class="sl-title">{{toolsData.adminNum}}个</view>
											</view>
										</view>
									</view>
									<view class="baidu-boxx"
										style="box-shadow: 0px 0px 5px #eee;padding: 5px 10px;margin: 10px;border-radius: 5px;background: #fff;">
										最近文章发布时间{{toolsData.overTime}}</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</uni-drawer>
			</view>
			<view class="swiper-wrap">
				<swiper class="swiper-box" :indicator-dots="false" autoplay="true" circular="true"
					previous-margin="10px" next-margin="10px" :vertical="vertical"
					:current="swiperCurrent" @change="swiperChangeCustom">
					<swiper-item v-for="(item,index) in lunbo" :key="index" @click="toInfo(lbid[index])">
						<view class="swiper-item" :class="'swiper-item' + index">
							<img :src="item!='0'?item:'https://cdn.hkiii.cn/cg/' + (index+1) + '.jpeg'"
								class="swiper-img" srcset="">
						</view>
					</swiper-item>
				</swiper>
				<view class="dots">
					<view v-for="(item, index) in images" :class="'dot ' + (index == swiperCurrent ? ' active' : '')">
					</view>
				</view>
			</view>
			<view class="bannertm">
				<view v-for="i in opacity" :style="i" class="tm"></view>
			</view>


			<uni-notice-bar show-icon scrollable background-color="#fff" color="#000"
				:text="appData.data.ridingLantern||'获取中...'" />
			<view class="baidu-box" v-if="appData.data.auditing != 1">
				<view class="baidu-item" @click="copyUrl()">
					<view class="sl-icon">
						<uni-icons color="#fd7081" type="star-filled" size="30"></uni-icons>
					</view>
					<view class="shoulu">
						<view class="sl-content">App下载</view>
						<view class="sl-title">复制Url</view>
					</view>
					<uni-icons @click="copyUrl()" color="#aaa" type="circle-filled" size="20"></uni-icons>
				</view>
				<view class="baidu-item" @click="copyQQ()">
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

			<view class="s-box">
				<view class="s-header">
					<view class="s-header-right">专题推荐</view>
					<view class="s-header-left" @click="goToSorts">
						<uni-icons color="#333" type="bars" size="20px"></uni-icons>
					</view>
				</view>
				<view class="card-area">
					<scroll-view class="scroll-view" scroll-x>
						<view class="s-item" v-for="(item,index) in count">
							<view class="s-title-header" @click="goSortLogs(item[0].sort_id,item[0].sort_name)">
								<view class="s-Ftitle">最新文章</view>
								<view class="s-title">
									<!-- <view>{{ sorts[index].sortname }}</view> -->
									<view v-if='item.length>0'>{{ item[0].sort_name }}</view>
									<view v-else>不给你看</view>
									<uni-icons color="#fff" type="forward" size="12px"></uni-icons>
								</view>
							</view>
							<view>
								<view v-if="item == ''"
									style="height:120px;text-align: center; display: flex; flex-direction: column">
									<image style="width: 50%;height:100%;margin:auto" src="../../static/null.png"
										mode="widthFix" />
									<view style="margin: 10px;text-align: center;">这不是Bug!!!</view>
								</view>

								<view v-if="item != ''" class="s-content">
									<view class="s-content-item" v-for="(it,i) in item" @click="toInfo(it.id,it.url)">
										<image :src="'../../static/ph' + (i + 1) + '.png'" />
										<view class="ding">{{ i + 1 }}</view>
										<view class="s-text">{{ it.title }}</view>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>


			<view v-if="backTopValue" class="xiaohuojian" @click="xhj">
				<image src="../../static/fanhuidingbu.png" mode=""></image>
			</view>

			<view v-for="(item,index) in dataa" :key="index">
				<!-- #ifdef MP-QQ -->
				<ad class="ad" v-if="index%5==0 && index!=0" unit-id="675f88c8665f60f30b71804e8ef4707a"></ad>
				<!-- #endif -->
				<view v-if="getimg(item.description) || item.cover" class="list-items"
					@click="toInfo(item.id,item.url)">
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
									{{getDateBeforeNow(item.date)}}
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
									{{getDateBeforeNow(item.date)}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<uni-load-more color="#007AFF" :status="status" />
		</view>
		<view v-if='inull' style="margin-top: 100px">
			<null></null>
		</view>
		<zero-loading v-if="!inull&&appData.state!=200" mask="true"></zero-loading>
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
	export default {

		data() {
			return {
				inull: false,
				dataa: [],
				avatarUrl: '../../static/logo.png',
				$req_time: '',
				$sign: '',
				page: 1,
				shoulu: '',
				one: '',
				two: '',
				three: '',
				four: '',
				searchKey: '',
				toolsData: '',
				sorts: '',
				count: '',
				description: 0,
				di: false,
				swiperCurrent: '',
				backTopValue: false,
				onRefresh: false,
				status: "loading",
				blogSorts: [],
				images: [
					"http://cdn.hkiii.cn//img/_2022/06/21/09/52/42/167/6483441/13482961188039425428",
					"https://cdn.hkiii.cn/cg/11.jpeg",
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
				appData: '',
				lunbo: [],
				lbid: [],
				cardList: [{
						caroLogo: 'https://cdn.hkiii.cn/cg/10.jpeg'
					},
					{
						caroLogo: 'https://cdn.hkiii.cn/cg/11.jpeg'
					},
					{
						caroLogo: 'https://cdn.hkiii.cn/cg/12.jpeg'
					}
				],
				currentCardIndex: 0
			}
		},
		mounted() {},
		onLoad() {
			this.blog(1);
			this.getData();
			// this.getSorts();
			this.getTools();
		},
		onShow() {},
		onReachBottom() {
			this.page = this.page + 1
			this.blog(this.page);
		},
		onPullDownRefresh() {
			this.null = true
			this.dataa = ""
			this.status = "loading"
			this.page = 1
			this.lunbo = []
			this.lbid = []
			this.appData = ''
			this.count = ''
			this.blog(this.page);
			this.getData();
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
				imageUrl: this.appData.data.shareImg,
				path: 'pages/index/index'
			}
		},
		methods: {

			//专题
			async getSortsData(sort, sid) {
				var that = this;
				var res = await myRequest({
					url: '/?rest-api=article_list',
					method: 'GET',
					data: {
						sort_id: sid,
						count: 3
					}
				});
				var array = [];
				array.push(res.data.data.articles);
				that.count = [...that.count, ...array]
			},
			goToSorts() {
				uni.switchTab({
					url: '../sorts/sorts'
				});
			},
			goSortLogs: function(sid, sortname) {
				uni.navigateTo({
					url: "../sort-info/sort-info?id=" + sid + '&sortname=' + sortname
				})
			},
			changeCard(e) {
				this.currentCardIndex = e.detail.current
			},
			copyUrl() {
				uni.setClipboardData({
					data: this.appData.data.appUrl,
					success: function() {
						uni.showModal({
							title: "温馨提示",
							content: "复制成功"
						})
					}
				});
			},
			copyQQ() {
				uni.setClipboardData({
					data: this.appData.data.qq,
					success: function() {
						uni.showModal({
							title: "温馨提示",
							content: "复制成功"
						})
					}
				});
			},
			async getData() {
				var that = this;
				const res = await htRequest({
					url: "/content/plugins/ApiSetting/api.php",
					method: 'GET',
					data: {
						route: 'getSetting'
					},
				})
				if (res.data.state > 0) {
					var lunbo = res.data.data.lbid.split(",")
					for (var i = 0; i < lunbo.length; i++) {
						this.getInitImg(lunbo[i])
					}
					var sortid = res.data.data.sortid.split(",")
					for (var i = 0; i < sortid.length; i++) {
						this.getSortsData(i + 1, sortid[i])
					}
					this.appData = res.data
					uni.setStorage({
						key: 'set_data',
						data: res.data
					})
				} else if (res) {
					this.inull = true
				}
			},
			async getTools() {
				var that = this;
				const res = await htRequest({
					url: "/content/plugins/ApiSetting/api.php",
					method: 'GET',
					data: {
						route: 'getTools'
					},
				})
				this.toolsData = res.data.data
			},
			change(index, id) {
				uni.navigateTo({
					url: "../sort-info/sort-info?id=" + id
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
				if (str) {
					var reg = RegExp(/<img.+?src=('|")?([^'"]+)('|")?(?:\s+|>|\/>)/, "gim");
					var srcReg = /<img.+?src=[\'\"]?([^\'\"]*)[\'\"]?/i;
					var result = str.match(srcReg);
					if (result != null) {
						return result[1];
					} else {
						return false;
					}
				} else {
					return '0'
				}
			},
			getDateBeforeNow(stringTime) {
				stringTime = new Date(stringTime.replace(/-/g, '/'))
				// 统一单位换算
				var minute = 1000 * 60;
				var hour = minute * 60;
				var day = hour * 24;
				var week = day * 7;
				var month = day * 30;
				var year = month * 12;
				var time1 = new Date().getTime();
				var time2 = new Date(stringTime).getTime();
				var time = time1 - time2;
				var result = null;
				if (time < 0) {
					result = stringTime;
				} else if (time / year >= 1) {
					result = parseInt(time / year) + "年前";
				} else if (time / month >= 1) {
					result = parseInt(time / month) + "月前";
				} else if (time / week >= 1) {
					result = parseInt(time / week) + "周前";
				} else if (time / day >= 1) {
					result = parseInt(time / day) + "天前";
				} else if (time / hour >= 1) {
					result = parseInt(time / hour) + "小时前";
				} else if (time / minute >= 1) {
					result = parseInt(time / minute) + "分钟前";
				} else {
					result = "刚刚";
				}
				return result;
			},
			toInfo(e, u) {
				uni.navigateTo({
					url: '/pages/blog-info/blog-info?id=' + e + "&url=" + encodeURIComponent(u)
				})
			},
			search(res) {
				var value = res.value || this.searchKey
				uni.reLaunch({
					url: "/pages/search/search?keyword=" + value
				})
			},
			swiperChangeCustom(e) {
				this.swiperCurrent = e.detail.current
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
			async getInitImg(e) {
				const res = await myRequest({
					url: '/?rest-api=article_detail',
					method: 'GET',
					data: {
						id: e
					}
				})
				var a = this.getimg(res.data.data.article.content) || "0"
				this.lbid.push(e)
				this.lunbo.push(a)
			}
		}
	}
</script>

<style lang="less">
	@import "../../uni.css";
	@import url("sorts.css");

	.lervor-card-page {
		display: flex;
		flex-direction: column;
		padding-top: 30rpx;

		view,
		text,
		image {
			box-sizing: border-box;
		}

		.card-swiper {
			width: 100%;
			height: 286rpx; // 轮播图片的高度
			// background: #FAFAFA;

			.card-item {
				transition: transform 0.3s; // 缩放动画播放 0.3S
				border-radius: 10rpx;
				overflow: hidden;
				display: flex;
				flex-direction: column;
				width: 100%;
				height: 100%;
				padding: 26rpx 36rpx 0;
				color: #FFFFFF;
				position: relative;

				.card-bg {
					position: absolute;
					left: 0;
					right: 0;
					bottom: 0;
					width: 100%;
					height: 100%;
					z-index: -1;
				}

				.card-title {
					font-size: 38rpx;
					font-weight: bold;
					height: 50rpx;
					overflow: hidden;
				}

				.card-tip {
					font-size: 22rpx;
					margin-top: 18rpx;
				}

				.card-price {
					font-size: 60rpx;
					font-weight: bold;
					margin-top: 64rpx;

					&:before {
						content: '￥';
						font-size: 20rpx;
						margin-right: 2rpx;
						font-weight: normal;
					}
				}
			}

			.card-item-default {
				transform: scale(0.96, 0.96) translateY(50rpx); // 缩小到原来的 0.96，并沿Y轴向下移动 50rpx
			}
		}

		.card-box {
			z-index: 1;
			background: #fff;
			border-top: 1px #eee solid;
			// box-shadow: 0 0 69rpx 7rpx rgba(0, 0, 0, 0.29);
			border-radius: 30rpx 30rpx 0rpx 0rpx;
			margin-top: -20rpx; // 向上遮住部分轮播卡片
			min-height: 200rpx;
			padding: 3px 5px;
		}
	}

	page {
		font-size: 16px
	}

	.ad {
		width: 94%;
		margin: 3%;
	}

	.sl-title {
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

	/deep/.uni-scroll-view-content {
		display: flex;
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
		width: 60%;
		opacity: 0.5;
		font-size: 13px;
		align-items: center;
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
		margin: 10px 10px 0px 10px;
		padding: 10px;
		background-color: #fff;
		box-shadow: #ddd 1px 1px 30px;
		border-radius: 10px;
		justify-content: space-between;
	}

	.lists-img {
		width: 100%;
		height: 93px;
		border-radius: 5px;
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
		border-radius: 5px;
		padding: 3px;
		background-color: #fff;
		box-shadow: inset 1px 1px 2px #ddd, inset -1px -1px 2px #ddd;
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


	uni-image>img {
		opacity: inherit !important;
	}
</style>
