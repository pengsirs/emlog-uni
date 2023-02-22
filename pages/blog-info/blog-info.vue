<template>
	<!-- #ifndef MP-BAIDU -->
	<uni-transition ref="ani" custom-class="transition" :mode-class="modeClass" :styles="styles" :show="show">
		<!-- #endif -->
		<view class="content-box">
			<view class="title">
				{{data.title||"没有该文章或加载失败..."}}
			</view>
			<view class="xx">
				<view class="author-name">
					<uni-icons color="green" type="person" size="14"></uni-icons>{{data.author_name||"作者"}}
					<uni-icons color="red" type="fire" size="14"></uni-icons>{{data.views||"暂无浏览"}}
				</view>
				<view class="date">
					<uni-icons color="blue" type="calendar" size="14"></uni-icons>{{data.date||"1970-01-01 00:00:00"}}
				</view>
			</view>
			<view class="openhtml" :style="'height: '+height+';overflow: hidden;'">
				<mp-html lozy-load="true" container-style="overflow: hidden;" selectable="true" :tag-style="tagStyle"
					:content="data.content"></mp-html>
				<view class="over">—— The End ——</view>
			</view>
			<view class="htmlbtn" v-if="html" @click="closeHtml">收起<uni-icons style="margin-left: 5px;" type="top"
					size="16"></uni-icons>
			</view>
			<view class="htmlbtn" v-if="!html" @click="openHtml">查看更多<uni-icons style="margin-left: 5px;" type="bottom"
					size="16"></uni-icons>
			</view>
			<!-- 文章附件-->
			<view class="Info-File" v-if="downTitle!=''">
				<view class="File-title">
					文章附件
				</view>
				<view class="File-content">
					<view class="File-left">
						<uni-icons color="#23c1aa" type="circle-filled" size="20"></uni-icons>资源名称：{{downTitle}}
					</view>
					<view class="File-right">
						<!-- #ifdef MP-WEIXIN -->
						<view class="File-btn" @click="openVideoAd(downUrl)">立即获取</view>
						<!-- #endif -->
						<!-- #ifndef MP-WEIXIN -->
						<view class="File-btn" @click="copy(downUrl)">立即获取</view>
						<!-- #endif -->
					</view>
				</view>
			</view>
			<view class="Copyright-box">
				<view class="Copyright-item">
					<view class="Copyright">
						<text>版权声明：若无特殊注明，《</text><text
							class="Copyright-text">{{ data.title }}</text><text>》内容为《</text><text
							class="Copyright-text">{{ data.author_name||"作者"}}</text><text>》原创，转载请保留文章出处。如有《</text><text
							class="Copyright-text">{{ data.author_name||"作者"}}</text><text>》转载文章时未注明出处或侵犯您的权益或版权，请联系《</text><text
							class="Copyright-text">{{ data.author_name||"作者"}}</text><text>》，我们将及时清理删除并道歉，谢谢！</text>
					</view>
				</view>
			</view>

			<view class="tags" v-if="data.tags!=''">
				<view class="tag-title">文章标签</view>
				<view class="tag-item">
					<view v-for="item in data.tags">
						<view class="tag" @click="search(item.name)">{{ item.name }}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="comment" v-if="appData.data.auditing != 1">
			<view class="Cheader">
				<view class="Ctitle">
					问题反馈
				</view>
				<view style="display: flex;align-items: center;" @click="toComment(id)">
					<uni-icons type="compose" size="18"></uni-icons>去反馈
				</view>
			</view>
			<view class="comment-box" v-for="item in comment" :style="item.parent?'border:none':''">
				<view style="display: flex;justify-content: space-between;">
					<view class="comment-header" :style="item.parent?'margin-left:40px;':''">
						<image :src="'http://q2.qlogo.cn/headimg_dl?dst_uin=' + item.url.host + '&spec=100'" mode="">
						</image>
						<view class="comment-title-box">
							<view class="comment-title">
								{{item.poster}}
							</view>
							<view class="comment-data">
								{{item.date}}
							</view>
						</view>
					</view>
					<view style="display: flex;align-items: center;margin-right: 10px;">
						<view class="Chuifu" @click="toComment(id,item.cid)">
							<uni-icons type="more-filled" size="18"></uni-icons>
						</view>
					</view>
				</view>

				<view class="comment-content">
					<view class="comment-content-text" :style="item.parent?'margin-left:40px;':''">
						{{item.comment}}
					</view>
				</view>
			</view>
			<uni-load-more color="#007AFF" :status="status" style="border-top: 5px solid #f9f9f9;padding: 10px 0px;" />
		</view>
		<view class="foot-content"></view>
		<!-- #ifndef MP-BAIDU -->
	</uni-transition>
	<!-- #endif -->
	<!-- #ifdef APP-PLUS -->
	<view class="footer">
		<uni-collapses>
			<uni-collapse-items title="分享到" :show-animation="true">
				<view class="ft-content">
					<view class="homelist" @click="qq()">
						<view class="homelist-item">
							<uni-icons type="qq" color="#564aff" size="30"></uni-icons>
							<view style="font-size: 12px;font-weight: 400;">QQ</view>
						</view>
					</view>
					<view class="homelist" @click="weixin('WXSceneSession')">
						<view class="homelist-item">
							<uni-icons type="weixin" color="#42ff48" size="30"></uni-icons>
							<view style="font-size: 12px;font-weight: 400;">微信</view>
						</view>
					</view>
					<view class="homelist" @click="weixin('WXSceneTimeline')">
						<view class="homelist-item">
							<uni-icons type="pyq" color="#fec855" size="30"></uni-icons>
							<view style="font-size: 12px;font-weight: 400;">朋友圈</view>
						</view>
					</view>
				</view>
			</uni-collapse-items>
		</uni-collapses>
	</view>
	<!-- #endif -->
	<!-- #ifndef APP-PLUS -->
	<view class="footer">
		<uni-collapses>
			<!-- #ifndef MP-BAIDU -->
			<uni-collapse-items title="文章扩展" :show-animation="true">
				<view class="ft-content">
					<view class="homelist" @click="home()">
						<view class="homelist-item">
							<uni-icons type="home-filled" color="#564aff" size="30"></uni-icons>
							<view style="font-size: 12px;font-weight: 400;">回到首页</view>
						</view>
					</view>
					<view class="homelist" @click="toComment(id)" v-if="appData.data.auditing != 1">
						<view class="homelist-item">
							<uni-icons type="chat-filled" color="#fd7058" size="30"></uni-icons>
							<view style="font-size: 12px;font-weight: 400;">问题反馈</view>
						</view>
					</view>
					<!-- 					<view class="homelist" v-if="appData.data.auditing != 1" @click="down()">
						<view class="homelist-item">
							<uni-icons type="download-filled" color="#fec855" size="30"></uni-icons>
							<view style="font-size: 12px;font-weight: 400;">附件下载</view>
						</view>
					</view> -->
					<button class="homelist" open-type="share">
						<view class="homelist-item">
							<uni-icons type="paperplane-filled" color="#42ff48" size="30"></uni-icons>
							<view style="font-size: 12px;font-weight: 400;margin-top:5px;">分享文章</view>
						</view>
					</button>
				</view>
			</uni-collapse-items>
			<!-- #endif -->
		</uni-collapses>
	</view>
	<!-- #endif -->
</template>

<script>
	var videoAd = null;
	import {
		myRequest,
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
				tagStyle: {
					blockquote: 'max-width:100%;background:#f9f9f9;padding:5px 10px;border-left:3px solid #42b883;margin:10px 0px;',
					table: 'width:100%;border:1px #eee solid;',
					td: 'border:1px #eee solid;text-align:center;',
					th: 'border:1px #eee solid;background-color:#ffc09f;',
				},
				height: "350px",
				data: {},
				haibao: "",
				html: false,
				url: '',
				status: "loading",
				id: '',
				page: 1,
				comment: '',
				downTitle: '',
				downUrl: '',
				urll: '', //点击获取时赋值
				// appData: {
				// 	data: {
				// 		auditing: ""
				// 	}
				// },
				arrays: [0],
				content: ""
				// content: "<div style='background:#eee;height:25px;width:50%;border-radius:5px;margin-top:10px;'></div>" +
				// 	"<div style='background:#eee;height:20px;width:80%;border-radius:5px;margin-top:10px;'></div>" +
				// 	"<div style='background:#eee;height:20px;width:70%;border-radius:5px;margin-top:10px;'></div>" +
				// 	"<div style='background:#eee;height:20px;width:50%;border-radius:5px;margin-top:10px;'></div>" +
				// 	"<div style='background:#eee;height:20px;width:90%;border-radius:5px;margin-top:10px;'></div>" +
				// 	"<div style='background:#eee;height:20px;width:30%;border-radius:5px;margin-top:10px;'></div>" +
				// 	"<div style='background:#eee;height:25px;width:50%;border-radius:5px;margin-top:10px;'></div>" +
				// 	"<div style='background:#eee;height:250px;width:100%;border-radius:5px;margin:10px auto;'></div>"
			}
		},
		onLoad(option) {
			this.id = option.id;
			// var that = this
			// uni.getStorage({
			// 	key: 'set_data',
			// 	success: function(res) {
			// 		that.appData = res.data
			// 	},
			// 	fail() {
			// 		that.getData();
			// 	}
			// });
			// #ifdef MP-WEIXIN
			this.adLoad();
			// #endif

			if (this.appData == '') {
				this.getData();
			}
			this.blog(option.id)
			this.url = decodeURIComponent(option.url);
			this.show = !this.show;
			this.modeClass = 'fade';
			this.addll(option.id);
		},
		onReachBottom() {
			this.page = this.page + 1
			this.getComments(this.page, this.id);
		},
		onShow() {
			this.page = 0
			this.comment = ''
			this.getComments(this.page, this.id)
			// var that = this
			// uni.getStorage({
			// 	key: 'set_data',
			// 	success: function(res) {
			// 		that.appData = res.data
			// 	},
			// 	fail() {
			// 		that.getData();
			// 	}
			// });
		},
		//	小程序分享
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			}
			return {
				title: this.data.title,
				imageUrl: this.data.cover || this.appData.data.shareImg,
				path: 'pages/blog-info/blog-info?id=' + this.data.id + "&url=" + this.url
			}
		},
		computed: {
			...mapState(['isLogin', 'appData'])
		},
		methods: {
			...mapMutations(['login', 'setAppData']),
			adLoad: function() {
				var that = this
				if (wx.createRewardedVideoAd) {
					videoAd = wx.createRewardedVideoAd({
						adUnitId: this.appData.data.videoAd //你的广告key
					})
					videoAd.onError(err => {})
					videoAd.onClose((status) => {
						if (status && status.isEnded || status === undefined) {
							that.copy(this.urll)

						} else {}
					})
				}
			},
			openVideoAd: function(e) {
				this.urll = e
				uni.showModal({
					title: "温馨提示",
					content: "您需要先看一段广告",
					success: function(res) {
						if (res.confirm) {
							if (videoAd) {
								videoAd.show().catch(err => {
									// 失败重试
									videoAd.load().then(() => videoAd.show())
								})
							}
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
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
					this.setAppData(res.data);
					// this.appData = res.data
					// uni.setStorage({
					// 	key: 'set_data',
					// 	data: res.data
					// })
				}
			},
			//获取评论内容
			async getComments(page, gid) {
				const res = await htRequest({
					url: "/content/plugins/ApiSetting/manyApi.php?route=comments",
					method: 'get',
					data: {
						gid: gid,
						page: page
					},
				})
				//如果没有数据 则显示没有更多
				if (res.data.data.list == '') {
					this.status = "no-more"
				} else {
					this.comment = [...this.comment, ...res.data.data.list]
				}
			},
			copy(e) {
				uni.setClipboardData({
					data: e,
					success: function() {
						uni.showModal({
							title: "温馨提示",
							content: "获取成功，设置到剪贴板"
						})
					}
				});
			},
			toComment(id, rid) {
				uni.navigateTo({
					url: "/pages/about/help?id=" + id + '&rid=' + rid
				})
			},
			openHtml() {
				this.height = "100%"
				this.html = !this.html
			},
			closeHtml() {
				this.height = "350px"
				this.html = !this.html
			},
			addll(e) {
				var that = this
				uni.request({
					url: set.url + "/" + e,
					method: 'GET',
					timeout: "1000"
				})
			},
			// App分享
			weixin(scene) {
				uni.share({
					provider: "weixin",
					scene: scene,
					title: this.data.title,
					type: 0,
					href: this.url,
					imageUrl: this.data.cover || this.appData.data.shareImg,
					summary: "我正在查看文章" + this.data.title + "，赶紧跟我一起来体验！",
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			},
			qq() {
				uni.share({
					provider: "qq",
					type: 0,
					title: this.data.title,
					summary: "我正在查看文章" + this.data.title + "，赶紧跟我一起来体验！",
					imageUrl: this.data.cover || this.appData.data.shareImg,
					href: this.url,
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			},
			home() {
				uni.reLaunch({
					url: "../index/index"
				})
			},
			wenti() {
				uni.navigateTo({
					url: "../about/help?id=" + this.id
				})
			},
			down() {
				uni.navigateTo({
					url: "../down/down?id=" + this.id
				})
			},
			search(res) {
				uni.reLaunch({
					url: "../search/search?tag=1&keyword=" + res
				})
			},
			async blog(e) {
				var arrays = this.arrays
				const res = await myRequest({
					url: '/?rest-api=article_detail',
					method: 'GET',
					data: {
						id: e
					}
				})
				res.data.data.article.content = res.data.data.article.content.replace(/\<img/gi,
					'<img class="rich-img" ');
				res.data.data.article.content = res.data.data.article.content.replace(/\<h1/gi,
					'<h1 class="rich-h1" ');
				res.data.data.article.content = res.data.data.article.content.replace(/\<h2/gi,
					'<h2 class="rich-h2" ');
				res.data.data.article.content = res.data.data.article.content.replace(/\<h3/gi,
					'<h3 class="rich-h3" ');
				res.data.data.article.content = res.data.data.article.content.replace(/\<h4/gi,
					'<h4 class="rich-h4" ');
				res.data.data.article.content = res.data.data.article.content.replace(/\<h5/gi,
					'<h5 class="rich-h5" ');
				res.data.data.article.content = res.data.data.article.content.replace(/\<h6/gi,
					'<h6 class="rich-h6" ');
				res.data.data.article.content = res.data.data.article.content.replace(/\<a/gi,
					'<a class="rich-a" ');
				res.data.data.article.content = res.data.data.article.content.replace(/\.\.\/content\/upload/gi,
					set.url + '/content/upload');
				//写一个正则表达式提取标签中的内容
				var reg = /<miniTitle>(.*)<\/miniTitle>/;
				var regUrl = /<miniUrl>(.*)<\/miniUrl>/;
				this.downTitle = res.data.data.article.content.match(reg) ? res.data.data.article.content.match(reg)[
					1] : '';
				this.downUrl = res.data.data.article.content.match(regUrl) ? res.data.data.article.content.match(
					regUrl)[1] : '';
				// res.data.data.article.content = res.data.data.article.content.replace(/百度网盘/gi, '****');
				// #ifndef APP-PLUS
				// arrays = res.data.data.article.content.match(/<a (.*)a>/gi) ? res.data.data.article.content.match(
				// 	/<a (.*)a>/gi) : ''
				// for (var i = 0; i < arrays.length; i++) {
				// 	if (arrays[i].indexOf("<img") == "-1") {
				// 		console.log(arrays[i].indexOf("<img"))
				// 		res.data.data.article.content = res.data.data.article.content.replace(arrays[i],
				// 			'<a class="aaa">请查看附件说明</a> ')
				// 	}
				// };
				// #endif
				this.data = res.data.data.article
			}
		},
	}
</script>

<style lang="less">
	/deep/.rich-a {
		color: #000;
	}

	.htmlbtn {
		width: 100%;
		text-align: center;
		padding-top: 30px;
		margin-top: -30px;
		font-size: 17px;
		font-weight: 500;
		color: #666;
		left: 0;
		position: relative;
		z-index: 99;
		background: linear-gradient(360deg, #fff 0%, #fff 50%, rgba(255, 255, 255, 0) 100%);
	}

	.openhtml {
		z-index: 1;
		position: relative;
	}

	.homelist-item {
		padding: 5px;
	}

	.homelist {
		text-align: center;
	}

	.ft-content {
		display: flex;
		justify-content: space-around;
	}

	.content-box {
		background-color: #fff;
		padding: 20px 20px 1px 20px;
		border-radius: 30px 30px 0px 0px;
		margin-top: 10px;
	}

	.comment {
		background-color: #fff;
	}

	.Cheader {
		background-color: #fff;
		padding: 10px;
		border-top: #f9f9f9 solid 15px;
		display: flex;
		justify-content: space-between;
		margin-bottom: -10px;
		z-index: 2;
		position: relative;
	}

	.Ctitle {
		font-size: 20px;
		font-weight: 600;
	}

	.Chuifu {
		padding: 5px 10px;
		border-radius: 5px;
		margin-top: -20px;
	}

	.comment-box {
		border-top: #f9f9f9 solid 5px;
	}

	.comment-header {
		padding: 10px;
		display: flex;

		image {
			width: 40px;
			height: 40px;
			border-radius: 50px;
			border: 1px red solid;
		}
	}

	.comment-title-box {
		margin-left: 10px;
		height: 40px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		.comment-title {
			font-weight: 800;
		}

		.comment-data {
			color: #666;
		}
	}

	.comment-content {
		padding: 0px 10px 10px 10px;
		margin-left: 50px;
	}

	.comment-content-text {
		background-color: #f9f9f9;
		padding: 3px 5px;
		border-radius: 3px;
	}

	page {
		font-size: 13px;
		background-color: #F17C67;
	}

	.xx {
		width: 100%;
		display: flex;
		justify-content: space-between;
		opacity: 0.6;
		font-size: 14px;
		margin-top: 10px;
	}

	.title {
		font-weight: 800;
		font-size: 18px;
	}



	button {
		margin: 0;
		padding: 0;
		border: 0;
		line-height: 1;
		border-radius: 0;
		display: inline-block;
		background-color: #1d243c;
		color: #fff;
	}

	button::after {
		border: none;
	}

	.Copyright-text {
		color: red;
	}

	.over {
		text-align: center;
		color: #000;
		font-size: 12px;
		font-weight: 100;
		margin: 10px 0px;
		opacity: 0.5;
	}

	.File-title {
		font-size: 16px;
	}

	.Info-File {
		background-color: #fff;
		/* box-shadow: 0px 0px 0px 5px #eee; */
		border-radius: 5px;
	}

	.File-content {
		display: flex;
		justify-content: space-between;
		height: 20px;
		line-height: 20px;
		margin-top: 10px;
	}

	.File-left {
		display: flex;
		align-items: center;
	}

	.File-right .File-btn {
		background-color: #23c1aa;
		padding: 0px 5px;
		border-radius: 5px;
	}

	.tag-item {
		flex-wrap: wrap;
		display: flex;
	}

	.tags {
		display: flex;
		flex-direction: column;
		margin: 10px 0px;
		padding: 5px;
		border-radius: 5px;
		background-color: #fff;
		box-shadow: 0px 0px 5px #eee;
	}

	.File-title:before,
	.tag-title:before {
		width: 40px;
		height: 3px;
		position: absolute;
		content: '';
		top: auto;
		left: 5px;
		bottom: 3px;
		border-radius: 5px;
		transition: 4s;
		background-image: linear-gradient(to right, #2979ff, #002c77);
		box-shadow: 1px 1px 3px -1px #2979ff;
	}

	.File-title,
	.tag-title {
		padding: 2px 5px;
		font-weight: 600;
		position: relative;
		padding-bottom: 8px;
	}

	.tag {
		font-size: 12px;
		padding: 2px 5px;
		font-weight: 100;
		border-radius: 5px;
		margin: 5px;
		color: #2979ff;
		border: 1px solid #2979ff;
	}

	.Copyright {
		background: #fff;
		font-size: 12px;
		font-weight: 300;
		color: #555;
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0px 0px 2px #fff;
	}

	.Copyright-item {
		padding: 2px;
		border-radius: 5px;
		background-color: #fff;
		box-shadow: inset 1px 1px 2px #eee, inset -1px -1px 2px #eee;
	}

	.Copyright-box {
		padding: 2px;
		border-radius: 5px;
		background-color: #fff;
		box-shadow: 0px 0px 5px #eee;
		margin-top: 20px;
	}

	.foot-content {
		height: 40px;
		background-color: #fff;
	}

	.uni-collapse-item {
		background-color: #1d243c;
		border-radius: 30px 30px 0px 0px;
		box-shadow: #555 1px 1px 10px;
		color: #fff;
	}

	.footer {
		position: fixed;
		bottom: 0;
		z-index: 99;
		width: 100%;
	}

	.ft-content {
		padding: 5px;
	}
</style>