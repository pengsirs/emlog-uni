<template>
	<view class="container" v-if="flg">
		<view class="page-body">
			<view class='wrapper'>
				<input class="inp-title" v-model="title" placeholder="文章标题" type="text" />
				<view class='toolbar' @tap="format">
					<view :class="formats.bold ? 'ql-active' : ''" class="iconfont icon-zitijiacu" data-name="bold">
					</view>
					<view :class="formats.italic ? 'ql-active' : ''" class="iconfont icon-zitixieti" data-name="italic">
					</view>
					<view :class="formats.underline ? 'ql-active' : ''" class="iconfont icon-zitixiahuaxian"
						data-name="underline"></view>
					<view :class="formats.strike ? 'ql-active' : ''" class="iconfont icon-zitishanchuxian"
						data-name="strike"></view>
					<view :class="formats.align === 'left' ? 'ql-active' : ''" class="iconfont icon-zuoduiqi"
						data-name="align" data-value="left"></view>
					<view :class="formats.align === 'center' ? 'ql-active' : ''" class="iconfont icon-juzhongduiqi"
						data-name="align" data-value="center"></view>
					<view :class="formats.align === 'right' ? 'ql-active' : ''" class="iconfont icon-youduiqi"
						data-name="align" data-value="right"></view>
					<!-- 有序和无序列表 -->
					<view :class="formats.list === 'ordered' ? 'ql-active' : ''" class="iconfont icon-youxupailie"
						data-name="list" data-value="ordered"></view>
					<view :class="formats.list === 'bullet' ? 'ql-active' : ''" class="iconfont icon-wuxupailie"
						data-name="list" data-value="bullet"></view>
					<!-- 回退和快进 -->
					<view class="iconfont icon-undo" @tap="undo"></view>
					<view class="iconfont icon-redo" @tap="redo"></view>
					<!-- 分割线 -->
					<view class="iconfont icon-fengexian" @tap="insertDivider"></view>
					<!-- 插入图片 -->
					<view class="iconfont icon-charutupian" @tap="insertImage"></view>
					<!-- <view class="iconfont icon-code" @tap="removeFormat">{{code}}</view> -->
					<view class="iconfont icon--checklist" data-name="list" data-value="check"></view>
					<!-- 标题 -->
					<view :class="formats.header === 1 ? 'ql-active' : ''" class="iconfont icon-format-header-1"
						data-name="header" :data-value="1"></view>
					<view :class="formats.header === 2 ? 'ql-active' : ''" class="iconfont icon-format-header-2"
						data-name="header" :data-value="2"></view>
					<view :class="formats.header === 3 ? 'ql-active' : ''" class="iconfont icon-format-header-3"
						data-name="header" :data-value="3"></view>
				</view>

				<editor @input="editText" id="editor" class="ql-container" :placeholder="placeholder" showImgSize
					showImgToolbar showImgResize @statuschange="onStatusChange" :read-only="readOnly"
					@ready="onEditorReady">
				</editor>



				<uni-collapse accordion v-model="accordionVal" @change="change">
					<uni-collapse-item :show-animation="true" :open="true" title="文章描述">
						<view class="content"> 
						<uni-easyinput type="text" v-model="excerpt" placeholder="请输入文章描述,可留空" />
							<!-- <uni-easyinput type="textarea" v-model="excerpt" placeholder="请输入文章描述,可留空"></uni-easyinput> -->
						</view>
					</uni-collapse-item>
					<uni-collapse-item :show-animation="true" title="选择分类">
						<view class="content">
							<view class="uni-list">
								<view class="uni-list-cell">
									<view class="uni-list-cell-db">
										<picker @change="bindPickerChange" :value="sort" :range="blogSortName">
											<view class="uni-input">{{blogSorts[sort].sortname || "请选择分类"}}</view>
										</picker>
									</view>
								</view>
							</view>
						</view>
					</uni-collapse-item>
					<uni-collapse-item :show-animation="true" title="文章标签">
						<view class="content">
							<uni-easyinput type="text" v-model="tags" placeholder="文章标签，多个半角逗号分隔，如：PHP,MySQL" />
						</view>
					</uni-collapse-item>
				</uni-collapse>

				<view class="fabu" @click="fabu()">发布</view>

			</view>
		</view>
	</view>

	<view>
		<!-- 提示信息弹窗 -->
		<uni-popup ref="message" type="message">
			<uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
		</uni-popup>
	</view>
	<view v-if="!flg" class="content">
		<view class="flg-title"></view>
		<image class="flg-img" src="../../static/close.png" mode="aspectFill"></image>
		<view class="flg-text">管理员信息验证失败！</view>
		<view class="flg-cell">请联系管理员获得该权限！</view>
		<button class="flg-btn" @click="setting()">管理员设置</button>
	</view>
</template>

<script>
	import {
		myRequest
	} from '@/api.js';
	import md5 from 'js-md5';
	import set from '../../setting.js';
	export default {
		props: {
			value: {
				type: String,
				default: ''
			},
			placeholder: {
				type: String,
				default: '开始输入...'
			}
		},
		data() {
			return {
				blogSortName: [],
				code: ">_",
				readOnly: false,
				formats: {},
				htmls: '',
				title: '',
				excerpt: '',
				sort: 1,
				cover: [],
				flg: false,
				tags: '',
				sid:'1',
				blogSorts: [],
			}
		},
		created() {},
		onShow() {
			var that = this;
			uni.getStorage({
				key: 'appData',
				success: function(res) {
					that.appData = res.data
				}
			});
			uni.getStorage({
				key: 'apikey',
				success: function(res) {
					console.log('success')
					if (that.appData.data.apikey == res.data) {
						that.flg = true
					}
				},
				fail() {
					that.flg = false
				}
			});
		},
		onPullDownRefresh() {
			var that = this;
			uni.getStorage({
				key: 'apikey',
				success: function(res) {
					console.log('success')
					if (that.appData.data.apikey == res.data) {
						that.flg = true
					} else {
						that.flg = false
					}
				}
			});
			uni.stopPullDownRefresh();
		},
		methods: {
			setting() {
				uni.navigateTo({
					url: "../setting/admin"
				})
			},
			messageToggle(type, text) {
				this.msgType = type
				this.messageText = `${text}`
				this.$refs.message.open()
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', this.blogSorts[e.detail.value].sid)
				this.sort = e.detail.value
				this.sid = this.blogSorts[e.detail.value].sid
			},
			change(e) {},
			async fabu() {
				var title = this.$data.title
				var htmls = this.$data.htmls
				var excerpt = this.$data.excerpt
				var tags = this.$data.tags
				var sid = this.$data.sid
				var cover = this.$data.cover
				var time = new Date();
				var YYYY = time.getFullYear();
				var MM = time.getMonth() + 1;
				var DD = time.getDate();
				var hh = time.getHours();
				var mm = time.getMinutes();
				var ss = time.getSeconds();
				var $req_time = String((time.getTime() / 1000).toFixed(0)); // unix时间戳, 单位秒
				var md = $req_time + this.appData.data.apikey
				var $sign = md5(md); // MD5签名
				const res = await myRequest({
					url: '/?rest-api=article_post',
					data: {
						req_sign: $sign,
						req_time: $req_time,
						title: title,
						content: htmls,
						excerpt: excerpt, //文章描述
						cover: cover[0] || '', //文章封面，默认上传的第一张
						sort_id: sid, //分类ID
						author_uid: '1', //用户ID
						tags: tags,
						post_date: YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss //发布时间
					}
				})
				if (res.data.msg == "ok") {
					uni.showToast({
						title: '发布成功',
					});
					uni.reLaunch({
						url:"../index/index"
					})
				}
				this.dataa = res.data
				console.log(this.dataa)
			},
			editText(res) {
				this.$emit('editorChange', res.detail.html)
				this.htmls = res.detail.html
			},
			readOnlyChange() {
				this.readOnly = !this.readOnly
			},
			onEditorReady() {
				uni.createSelectorQuery().select('#editor').context((res) => {
					this.editorCtx = res.context
				}).exec()
			},
			undo() {
				this.editorCtx.undo()
			},
			redo() {
				this.editorCtx.redo()
			},
			format(e) {
				let {
					name,
					value
				} = e.target.dataset
				if (!name) return
				// console.log('format', name, value)
				this.editorCtx.format(name, value)
			},
			onStatusChange(e) {
				const formats = e.detail
				this.formats = formats
			},
			insertDivider() {
				this.editorCtx.insertDivider({
					success: function() {
						console.log('insert divider success')
					}
				})
			},
			clear() {
				this.editorCtx.clear({
					success: function(res) {
						console.log("clear success")
					}
				})
			},
			removeFormat() {
				this.editorCtx.insertText({
					text: "<pre>代码块</pre>"
				})
			},
			insertDate() {
				const date = new Date()
				const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
				this.editorCtx.insertText({
					text: formatDate
				})
			},
			insertImage() {
				const that = this;
				uni.chooseImage({
					count: 1,
					success: (res) => {
						uni.showLoading({
							title: '正在上传...'
						});
						console.log(res.tempFilePaths[0])
						console.log(that.appData.data.accessKey)
						console.log(that.appData.data.secretKey)
						uni.uploadFile({
							url: 'https://tp.hkiii.cn/index.php/index/index/img',
							filePath: res.tempFilePaths[0],
							name: 'file',
							method:'POST',
							fileType:"image",
							formData: {
								ak: that.appData.data.accessKey,
								sk: that.appData.data.secretKey,
								kj: that.appData.data.bucket,
								ym: that.appData.data.ym,
							},
							success: function(res) {
								var data = JSON.parse(res.data)
								console.log(data.data)
								that.editorCtx.insertImage({
									src: data.data,
									alt: data.data,
									success: function() {
										that.cover.push(data.data)
										that.messageToggle('success', '上传成功');
										uni.hideLoading();
									}
								})
							},
							fail: function() {
								that.messageToggle('error', '上传失败');
								uni.hideLoading();
							}
						})
					}
				})
			},
			async getSorts() {
				const res = await myRequest({
					url: '/?rest-api=sort_list',
					method: 'GET',
				})
				this.blogSorts = res.data.data.sorts
				var arr = Object.keys(this.blogSorts)
				for (var i = 0; i <= arr.length; i++) {
					this.blogSortName.push(res.data.data.sorts[i].sortname)
				}
				console.log(this.blogSortName)
			}
		},
		onLoad() {
			this.getSorts();
			uni.loadFontFace({
				family: 'Pacifico',
				source: 'url("./Pacifico.ttf")'
			})
		},
	}
</script>

<style>
	@import "./cs.css";

	.uni-input {
		text-align: center;
	}

	page {
		margin: 0;
		padding: 0;
	}

	.fabu {
		width: 90%;
		margin: 10px auto;
		padding: 10px;
		text-align: center;
		background-color: #06c;
		border-radius: 5px;
	}

	.uni-input {
		padding: 10px;
		border: #eee 1px solid;
	}

	.flg-img {
		width: 100%;
		margin-top: 50px;
	}

	.flg-text {
		text-align: center;
		font-weight: 800;
		margin-top: 50px;
	}

	.flg-btn {
		margin: 10px;
		margin-top: 40px;
		border-radius: 10px;
		background-color: #F17C67;
		opacity: 0.9;
		color: #fff;
	}

	page {
		font-size: 16px;
	}

	.flg-title {
		margin-top: 30px;
	}

	.flg-close {
		margin-left: 10px;
		opacity: 0.5;
	}

	.flg-cell {
		text-align: center;
		opacity: 0.3;
	}

	.wrapper {
		padding: 5px;
	}

	.toolbar {
		border: 1upx #eee solid;
	}

	.iconfont {
		display: inline-block;
		padding: 8px 8px;
		width: 24px;
		height: 24px;
		cursor: pointer;
		font-size: 20px;
	}

	.toolbar {
		box-sizing: border-box;
		border-bottom: 0;
		font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
	}

	.ql-container {
		box-sizing: border-box;
		padding: 12px 15px;
		width: 100%;
		min-height: 30vh;
		height: auto;
		background: #fff;
		font-size: 16px;
		line-height: 1.5;
		border: 1px #eee solid;
	}

	.ql-active {
		color: #06c;
	}

	.inp-title {
		border: 1px #eee solid;
		padding: 5px;
	}
</style>
