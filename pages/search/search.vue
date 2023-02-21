<template>
	<view>
		<view v-if="appData.state==200">
			<view class="uni-padding-wrap uni-common-mt">
				<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text" />
			</view>
			<view class="container">
				<view class="tui-searchbox">
					<view class="tui-search-input">
						<icon type="search" :size="15" color="#666"></icon>
						<input confirm-type="search" placeholder="大家都在搜：Brief" :focus="false"
							placeholder-class="tui-input-plholder" class="tui-input" :value="key" @input="bindinput"
							@confirm="setKey(key)" />
						<icon type="clear" :size="13" color="#ccc" @click="setKey('')" v-if="key"></icon>
					</view>
					<view class="tui-cancle" @click="setKey(key)">搜索</view>
				</view>
				<view class="tui-search-history" v-if="history.length>0 && !key">
					<view class="tui-history-header">
						<view class="tui-search-title">大家都在搜</view>
					</view>
					<view class="tui-history-content">
						<block :key="index" v-for="item in history">
							<view class="hot" @click="setKey(item)" margin="0 24rpx 24rpx 0">{{ item }}</view>
						</block>
					</view>
				</view>
				<view v-if="key">
					<view class="tui-header">
						<view class="tui-header-left tui-noboredr">
							<text v-if="current==0" style="font-weight: 600;">文章</text>
							<text v-else style="font-weight: 600;">标签</text>
							搜索: <text style="color: red;">{{ key }}</text>的结果
						</view>
					</view>
					<view class="tui-result-box" v-if="searchList">
						<view :key="index" v-for="item in searchList">
							<view v-if="getimg(item.description) || item.cover" class="list-items"
								@click="toInfo(item.id,item.url)">
								<view class="img-box">
									<image @error="imageError($event, index)" class="lists-img"
										:src="item.cover||getimg(item.description)" mode="scaleToFill"></image>
								</view>
								<view class="list-box">
									<view class="list-title"><span v-if="item.top=='y'"
											class="top">置顶</span>{{item.title}}
									</view>
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
									<view class="list-title"><span v-if="item.top=='y'"
											class="top">置顶</span>{{item.title}}
									</view>
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
					</view>
					<view v-else style="margin-top: 100px">
						<over></over>
					</view>
				</view>
			</view>
		</view>
		<view v-else>
		    <null></null>
		</view>
	</view>
</template>

<script>
	// pages/search.js
	import {
		myRequest,
		apiRequest,
		htRequest,
		get
	} from '@/api.js';
	import set from '@/setting.js';
	var app = getApp();
	export default {
		data() {
			return {
				current: 0,
				history: ['Brief', 'Emlog', '小程序', 'bug修复', '前端', '跨域', '游戏', 'PHP', 'VUE', '爬虫', 'JAVA'],
				key: '',
				items: ['文章搜索', '标签搜索'],
				showActionSheet: false,
				searchList: [],
				isend: false,
				appData:'',
			};
		}
		/**
		 * 生命周期函数--监听页面加载
		 */
		,
		onLoad: function(options) {
			if (options.tag == '1') {
				this.current = 1
			}
			if (options.keyword != '') {
				this.key = options.keyword
				this.getData();
			}
		},
		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady: function() {},
		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function() {
			var that = this
			uni.getStorage({
				key: 'set_data',
				success: function(res) {
					that.appData = res.data
				}
			});
		},
		/**
		 * 生命周期函数--监听页面隐藏
		 */
		onHide: function() {},
		/**
		 * 生命周期函数--监听页面卸载
		 */
		onUnload: function() {},
		/**
		 * 页面相关事件处理函数--监听用户下拉动作
		 */
		onPullDownRefresh: function() {},
		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function() {},
		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function() {},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
					this.key = ''
				}
			},
			async getData() {
				if (this.key) {
					var that = this;
					if (this.current == 0) {
						var data = {
							keyword: that.key
						}
					} else {
						var data = {
							tag: that.key
						}
					}
					const res = await myRequest({
						url: '/?rest-api=article_list',
						method: 'GET',
						data: data
					})
					if (res.data.data.articles == '') {
						this.isend = true
						// that.getData('tag');
					} else {
						this.searchList = res.data.data.articles
					}
				}
			},
			toInfo(id, url) {
				uni.navigateTo({
					url: '/pages/blog-info/blog-info?id=' + id + '&url=' + encodeURIComponent(url)
				});
			},

			bindinput(e) {
				this.key = e.detail.value
				this.getData();
			},

			setKey(key) {
				this.searchList = ''
				this.key = key
				this.getData();
			},

			selectResult: function(e) {
				var gid = e.detail.item.value;
				uni.navigateTo({
					url: '../blog-info/blog-info?gid=' + gid
				});
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
		}
	};
</script>
<style>
	@import url("search.css");

	.uni-common-mt {
		width: 50%;
		margin: 10px auto;
		box-shadow: 0px 0px 5px #ddd;
		border-radius: 5px;
		padding-bottom: 3px;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 50%;
		margin-left: -25%;
		z-index: 99;
	}
</style>
