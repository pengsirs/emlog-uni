<template>
	<view class="container">
		<view class="tab">
			<view @click="swiperCurrent=0" :class="'tab1 ' + (0 == swiperCurrent ? ' active' : '')">编辑</view>
			<view @click="swiperCurrent=1" :class="'tab2 ' + (1 == swiperCurrent ? ' active' : '')">文章</view>
			<view @click="swiperCurrent=2" :class="'tab3 ' + (2 == swiperCurrent ? ' active' : '')">笔记</view>
		</view>
		<swiper class="swiper" :current="swiperCurrent" easing-function="easeInOutCubic" circular="true"
			:duration="500" @change="swiperChangeCustom">
			<swiper-item>
				<scroll-view scroll-top="scrollTop" :scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					@scrolltolower="lower" @scroll="scroll">
					<list @editBlog="editBlog" :List="list" xiangqing="编辑文章" desc="来自文章分类:"></list>
					<view class="loadmany" @click="loadmany">---加载更多---</view>
					<view style="height: 50px;"></view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-top="scrollTop" :scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					@scrolltolower="lower" @scroll="scroll">
					<view class="page-body">
						<view class='wrapper'>
							<input class="inp-title" v-model="title" placeholder="文章标题" type="text" />
							
							<view class='toolbar' @tap="format">
								<view :class="formats.bold ? 'ql-active' : ''" class="iconfont icon-zitijiacu"
									data-name="bold">
								</view>
								<view :class="formats.italic ? 'ql-active' : ''" class="iconfont icon-zitixieti"
									data-name="italic">
								</view>
								<view :class="formats.underline ? 'ql-active' : ''" class="iconfont icon-zitixiahuaxian"
									data-name="underline"></view>
								<view :class="formats.strike ? 'ql-active' : ''" class="iconfont icon-zitishanchuxian"
									data-name="strike"></view>
								<view :class="formats.align === 'left' ? 'ql-active' : ''"
									class="iconfont icon-zuoduiqi" data-name="align" data-value="left"></view>
								<view :class="formats.align === 'center' ? 'ql-active' : ''"
									class="iconfont icon-juzhongduiqi" data-name="align" data-value="center"></view>
								<view :class="formats.align === 'right' ? 'ql-active' : ''"
									class="iconfont icon-youduiqi" data-name="align" data-value="right"></view>
								<!-- 有序和无序列表 -->
								<view :class="formats.list === 'ordered' ? 'ql-active' : ''"
									class="iconfont icon-youxupailie" data-name="list" data-value="ordered"></view>
								<view :class="formats.list === 'bullet' ? 'ql-active' : ''"
									class="iconfont icon-wuxupailie" data-name="list" data-value="bullet"></view>
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
								<view :class="formats.header === 1 ? 'ql-active' : ''"
									class="iconfont icon-format-header-1" data-name="header" :data-value="1"></view>
								<view :class="formats.header === 2 ? 'ql-active' : ''"
									class="iconfont icon-format-header-2" data-name="header" :data-value="2"></view>
								<view :class="formats.header === 3 ? 'ql-active' : ''"
									class="iconfont icon-format-header-3" data-name="header" :data-value="3"></view>
									<view class="iconfont icon-shanchu" @click="reblogid"></view>
							</view>
				
							<editor @input="editText" id="editor" class="ql-container" :placeholder="placeholder"
								showImgSize showImgToolbar showImgResize @statuschange="onStatusChange"
								:read-only="readOnly" @ready="onEditorReady">
							</editor>
							
							<view @click="reblogid" v-if="blogid" style="margin: 10px 0px;color:brown;">当前编辑的文章ID是{{blogid}}，点击清空重新编写</view>
							
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
													<picker @change="bindPickerChange" :value="sort"
														:range="blogSortName">
														<view class="uni-input">{{blogSorts[sort].sortname || "请选择分类"}}
														</view>
													</picker>
												</view>
											</view>
										</view>
									</view>
								</uni-collapse-item>
								<uni-collapse-item :show-animation="true" title="文章标签">
									<view class="content">
										<uni-easyinput type="text" v-model="tags"
											placeholder="文章标签，多个半角逗号分隔，如：PHP,MySQL" />
									</view>
								</uni-collapse-item>
							</uni-collapse>
							<view v-if="flg">
								<view v-if="!blogid" class="fabu" @click="fabu()">发布文章</view>
								<view v-if="blogid" class="fabu" @click="bianji()">保存编辑</view>
							</view>
							<view v-else>
								<view class="fabu" @click="setting()">没有权限哦</view>
							</view>
							<view style="height: 50px;"></view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-top="scrollTop" :scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					@scrolltolower="lower" @scroll="scroll">
					<textarea @input="bjinput" class="textarea uni-input"/>
					<view v-if="flg">
						<view class="fabu" @click="fabubj()">发布笔记</view>
					</view>
					<view v-else>
						<view class="fabu" @click="setting()">没有权限哦</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>

	</view>

	<view>
		<!-- 提示信息弹窗 -->
		<uni-popup ref="message" type="message">
			<uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
		</uni-popup>
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
				page: 1,
				list:'',
				cover: [],
				flg: false,
				tags: '',
				sid: '1',
				blogid:'',
				blogSorts: [],
				swiperCurrent:1,
				bjcontent:''
			}
		},
		created() {},
		onShow() {
			var that = this;
			//获取管理员Key
			uni.getStorage({
				key: 'apikey',
				success: function(res) {
					that.http(res.data)
				}
			});
		},
		onPullDownRefresh() {
			var that = this;
			uni.getStorage({
				key: 'apikey',
				success: function(res) {
					that.http(res.data)
				}
			});
			uni.stopPullDownRefresh();
		},
		methods: {
			bjinput(e){
				this.bjcontent = e.detail.value
			},
			editBlog(e){
				var that = this
				this.swiperCurrent = 1;
				setTimeout(()=>{
					that.blogid = e
					that.getOne(e);
				},1000)
			},
			async http(key) {
				const res = await myRequest({
					url: '/content/plugins/ApiSetting/api.php',
					method: 'post',
					data: {
						admin: "getAdmin",
						key: key
					}
				})
				if (res.data.state == 200) {
					this.flg = true
					this.model = res.data.data
				}else{
					this.flg = false
				}
			},
			reblogid(){
				this.title = ''
				this.blogid = ''
				this.clear();
			},
			async getOne(e) {
				var arrays = this.arrays
				const res = await myRequest({
					url: '/?rest-api=article_detail',
					method: 'GET',
					data: {
						id: e
					}
				})
				this.title = res.data.data.article.title
				this.editorCtx.setContents({
					html: res.data.data.article.content
				})
			},
			swiperChangeCustom(e) {
				this.swiperCurrent = e.detail.current
			},
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
				var md = $req_time + this.model.appkey
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
					uni.showModal({
						title: '发布成功',
						content:"大约30秒后刷新首页即可",
						success() {
							uni.reLaunch({
								url: "../index/index"
							})
						}
					});
				}
				this.dataa = res.data
			},
			async bianji() {
				var id = this.blogid
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
				var md = $req_time + this.model.appkey
				var $sign = md5(md); // MD5签名
				const res = await myRequest({
					url: '/?rest-api=article_update',
					data: {
						req_sign: $sign,
						req_time: $req_time,
						id:id,
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
					uni.showModal({
						title: '修改成功',
						content:"大约30秒后刷新首页即可",
						success() {
							uni.reLaunch({
								url: "../index/index"
							})
						}
					});
				}
				this.dataa = res.data
			},
			async fabubj() {
				var t = this.bjcontent
				var time = new Date();
				var YYYY = time.getFullYear();
				var MM = time.getMonth() + 1;
				var DD = time.getDate();
				var hh = time.getHours();
				var mm = time.getMinutes();
				var ss = time.getSeconds();
				var $req_time = String((time.getTime() / 1000).toFixed(0)); // unix时间戳, 单位秒
				var md = $req_time + this.model.appkey
				var $sign = md5(md); // MD5签名
				const res = await myRequest({
					url: '/?rest-api=note_post',
					data: {
						req_sign: $sign,
						req_time: $req_time,
						t: t,
						author_uid: '1', //用户ID
					}
				})
				if (res.data.msg == "ok") {
					uni.showModal({
						title: '发布成功',
						content:"可在后台查看笔记",
						success() {
							uni.reLaunch({
								url: "../index/index"
							})
						}
					});
				}
				this.dataa = res.data
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
						uni.uploadFile({
							url: 'https://tp.hkiii.cn/index.php/index/index/img',
							filePath: res.tempFilePaths[0],
							name: 'file',
							method: 'POST',
							fileType: "image",
							formData: {
								ak: that.model.qiniuak,
								sk: that.model.qiniusk,
								kj: that.model.qiniukj,
								ym: that.model.qiniuUrl,
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
					this.list = [...this.list, ...res.data.data.articles]
				}
			},
			loadmany() {
				this.page = this.page + 1
				this.blog(this.page);
			},
		},

		onLoad() {
			this.blog(1);
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
	.loadmany{
		text-align: center;
	}
	.uni-input {
		text-align: center;
	}
	.tab{
		box-shadow:inset 0px 0px 5px #ddd;
		width: 95%;
		height: 5vh;
		margin: 2vh auto;
		padding: 5px 0px;
		border-radius: 10px;
		display: flex;
		justify-content: space-around;
		line-height: 5vh;
	}
	.tab view{
		width: 30%;
		text-align: center;
		box-shadow: 0px 0px 10px #ddd;
		border-radius: 5px;
	}
	
	.swiper {
		width: 100%;
		margin: auto;
		height: 90vh;
		position: absolute;
		bottom: 0;
		left: 0;
			}
	.scroll-Y{
		height: 95vh;
		background-color: #fff;
		box-shadow: 0px 0px 5px #ddd;
		width: 95%;
		margin: 10px auto 10px;
		border-radius: 10px;
		/* overflow: hidden; */
	}
	.textarea{
		width: 90%;
		margin:  10px auto 10px;
	}
	.page-body {
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
		background-color: #38F;
		border-radius: 5px;
	}

	.uni-input,>>>.uni-easyinput input {
		padding: 10px;
		box-shadow:inset 0px 0px 5px #ddd;
		border-radius: 5px;
	border: 0!important;
	}
>>>.is-input-border{
	border: 0!important;
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
		box-shadow:inset 0px 0px 5px #ddd;
		border-radius: 5px;
	}

	.ql-active {
		color: #38F;
	}

	.inp-title {
		box-shadow:inset 0px 0px 5px #ddd;
		border-radius: 5px;
		padding: 5px;
	}
	.active {
		background: #38F;
		box-shadow: 0px 0px 10px #38F!important;
		transition: all 1s;
	}
</style>
