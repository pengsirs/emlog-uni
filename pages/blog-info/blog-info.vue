<template>
	<uni-transition ref="ani" custom-class="transition" :mode-class="modeClass" :styles="styles" :show="show">
		<view class="content-box">
			<view class="title">
				{{data.title||"标题加载中..."}}
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
			<mp-html lozy-load="true" container-style="overflow: hidden;" selectable="true" :tag-style="tagStyle"
				:content="data.content"></mp-html>
			<!-- <rich-text :nodes="data.content"></rich-text> -->
			<view class="over">—— The End ——</view>

			<view class="Copyright">
				<text>版权声明：若无特殊注明，《</text><text class="Copyright-text">{{ data.title }}</text><text>》内容为《</text><text
					class="Copyright-text">{{ data.author_name||"作者"}}</text><text>》原创，转载请保留文章出处。如有《</text><text
					class="Copyright-text">{{ data.author_name||"作者"}}</text><text>》转载文章时未注明出处或侵犯您的权益或版权，请联系《</text><text
					class="Copyright-text">{{ data.author_name||"作者"}}</text><text>》，我们将及时清理删除并道歉，谢谢！</text>
			</view>
			<!-- 			<view class="tags">
			<view>
			<text class="tag">标签名</text>
			</view>
			</view> -->
		</view>
		<view class="foot-content"></view>
	</uni-transition>
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
			<uni-collapse-items title="文章扩展" :show-animation="true">
				<view class="ft-content">
					<view class="homelist" @click="home()">
						<view class="homelist-item">
							<uni-icons type="home-filled" color="#564aff" size="30"></uni-icons>
							<view style="font-size: 12px;font-weight: 400;">回到首页</view>
						</view>
					</view>
					<view class="homelist" @click="wenti()">
						<view class="homelist-item">
							<uni-icons type="chat-filled" color="#fd7058" size="30"></uni-icons>
							<view style="font-size: 12px;font-weight: 400;">问题反馈</view>
						</view>
					</view>
					<view class="homelist" v-if="appData.downurl != 1" @click="down()">
						<view class="homelist-item">
							<uni-icons type="download-filled" color="#fec855" size="30"></uni-icons>
							<view style="font-size: 12px;font-weight: 400;">附件下载</view>
						</view>
					</view>
					<button class="homelist" open-type="share">
						<view class="homelist-item">
							<uni-icons type="paperplane-filled" color="#42ff48" size="30"></uni-icons>
							<view style="font-size: 12px;font-weight: 400;margin-top:5px;">分享文章</view>
						</view>
					</button>
				</view>
			</uni-collapse-items>
		</uni-collapses>
	</view>
	<!-- #endif -->
</template>

<script>
	import {
		myRequest,
		htRequest
	} from '@/api.js';
	import set from '@/setting.js';
	export default {
		data() {
			return {
				tagStyle: {
					blockquote: 'max-width:100%;border-radius:5px;background:#eee;padding:5px;',
					table: 'width:100%;border:1px #eee solid;',
					td: 'border:1px #eee solid;text-align:center;',
					th: 'border:1px #eee solid;background-color:#ffc09f;',
				},
				data: {},
				haibao: "",
				url: '',
				arrays: [0],
				content: "<div style='background:#eee;height:25px;width:50%;border-radius:5px;margin-top:10px;'></div>" +
					"<div style='background:#eee;height:20px;width:80%;border-radius:5px;margin-top:10px;'></div>" +
					"<div style='background:#eee;height:20px;width:70%;border-radius:5px;margin-top:10px;'></div>" +
					"<div style='background:#eee;height:20px;width:50%;border-radius:5px;margin-top:10px;'></div>" +
					"<div style='background:#eee;height:20px;width:90%;border-radius:5px;margin-top:10px;'></div>" +
					"<div style='background:#eee;height:20px;width:30%;border-radius:5px;margin-top:10px;'></div>" +
					"<div style='background:#eee;height:25px;width:50%;border-radius:5px;margin-top:10px;'></div>" +
					"<div style='background:#eee;height:250px;width:100%;border-radius:5px;margin:10px auto;'></div>"
			}
		},
		onLoad(option) {
			this.blog(option.id)
			this.id = option.id;
			this.url = decodeURIComponent(option.url);
			this.show = !this.show;
			this.modeClass = 'fade';
			this.addll(option.id);
		},
		onShow() {
			var that = this
			uni.getStorage({
				key: 'appData',
				success: function(res) {
					that.appData = res.data
				},
				fail() {
					that.getData()
				}
			});
		},
		//	小程序分享
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			}
			return {
				title: this.data.title,
				imageUrl: this.data.cover || this.appData.data.shareimg,
				path: 'pages/blog-info/blog-info?id=' + this.data.id + "&url=" + this.url
			}
		},
		methods: {
			addll(e) {
				var that = this
				uni.request({
					url: set.url+"/"+e,
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
					imageUrl: this.data.cover || this.appData.data.shareimg,
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
					imageUrl: this.data.cover || this.appData.data.shareimg,
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
					key: 'appData',
					data: res.data
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
				res.data.data.article.content = res.data.data.article.content.replace(/\/content\/upload/gi,
					set.url+'/content/upload');
				res.data.data.article.content = res.data.data.article.content.replace(/百度网盘/gi, '****');
				// #ifndef APP-PLUS
				arrays = res.data.data.article.content.match(/<a (.*)a>/gi) ? res.data.data.article.content.match(
					/<a (.*)a>/gi) : ''
				for (var i = 0; i < arrays.length; i++) {
					if (arrays[i].indexOf("<img") == "-1") {
						console.log(arrays[i].indexOf("<img"))
						res.data.data.article.content = res.data.data.article.content.replace(arrays[i],
							'<a class="aaa">请查看附件说明</a> ')
					}
				};
				// #endif
				this.data = res.data.data.article
			}
		},
	}
</script>

<style>
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
		padding: 20px;
		border-radius: 30px 30px 0px 0px;
		margin-top: 10px;
		min-height: 100vh;
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

	.Copyright {
		background: #ddd;
		font-size: 12px;
		font-weight: 100;
		padding: 10px;
		border-radius: 5px;
		opacity: 0.5;
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

	.tags {
		display: -webkit-box;
		margin: 10px 0px;
		opacity: 0.5;
	}

	.tag {
		background: #ddd;
		font-size: 12px;
		padding: 2px 5px;
		font-weight: 100;
		border-radius: 15px;
		margin: 3px;
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
