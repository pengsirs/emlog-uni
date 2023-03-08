<template>
	<view class="centent">
		<view class="banner-box" @click="toLogin" v-if="isLogin==false">
			<view class="box-img">
				<image :src="avatarUrl"></image>
			</view>
			<view class="user-nick">您好，请登录</view>
		</view>
		<view class="banner-box" v-else>
			<view class="box-img">
				<image :src="reg(user.photo)"></image>
			</view>
			<view class="user-nick">您好，{{user.nickname}}</view>
		</view>
		<view class="homelist">
			<button open-type="openSetting" class="homelist-item" @click="go('setting')">
				<image class="homelist-img" src="../../static/home/cxsz.png"></image>
				<view style="font-size: 12px;font-weight: 200;">程序设置</view>
			</button>
			<view class="homelist-item" v-for="i in homelist" @click="go(i.url)">
				<image class="homelist-img" :src="i.img"></image>
				<view style="font-size: 12px;font-weight: 200;">{{i.text}}</view>
			</view>
		</view>
		<template v-if="appData != ''">
			<view class="baidu-box" v-if="appData.data.tianapi==''?false:true">
				<view class="baidu-item">
					<view class="sl-icon">
						<uni-icons color="#88CFFF" type="vip-filled" size="30"></uni-icons>
					</view>
					<view class="shoulu">
						<view class="sl-title">百度收录</view>
						<view class="sl-content">{{shoulu||'获取中...'}}</view>
					</view>
					<uni-icons @click="shua('baidu')" color="#aaa" type="refreshempty" size="20"></uni-icons>
				</view>
				<view class="baidu-item">
					<view class="sl-icon-sg">
						<uni-icons color="#E3BDA4" type="color-filled" size="30"></uni-icons>
					</view>
					<view class="shoulu">
						<view class="sl-title">搜狗收录</view>
						<view class="sl-content">{{sogo||'获取中...'}}</view>
					</view>
					<uni-icons @click="shua('sogo')" color="#aaa" type="refreshempty" size="20"></uni-icons>
				</view>
			</view>

			<view class="home-item">
				<view class="home-a">
					<view class="home-a-a">版本信息</view>
					<view class="home-a-b">V{{banbenhao}}</view>
				</view>
				<view class="home-a">
					<view class="home-a-a">页面开发</view>
					<view class="home-a-b">大彭Sir</view>
				</view>
				<view class="home-b" @click="go('../setting/admin')">
					<view class="home-a-a">权限管理</view>
					<view class="home-a-c">
						<uni-icons type="locked-filled" size="20" color="#666"></uni-icons>
					</view>
				</view>
				<view class="home-b" @click="go('../setting/setting')">
					<view class="home-a-a">接口设置</view>
					<view class="home-a-c">
						<uni-icons type="gear-filled" size="20" color="#666"></uni-icons>
					</view>
				</view>
			</view>

			<view class="home-item">
				<!-- #ifdef APP-PLUS -->
				<view class="home-a" @click="version">
					<view class="home-a-a">应用更新</view>
					<view class="home-a-b">
						<uni-icons type="cloud-upload-filled" size="20"></uni-icons>
					</view>
				</view>
				<!-- #endif -->
				<view class="home-a" @click="about(appData.data.about)">
					<view class="home-a-a">关于我们</view>
					<view class="home-a-c">
						<uni-icons type="info-filled" color="#666" size="20"></uni-icons>
					</view>
				</view>
				<view class="home-a" @click="ys">
					<view class="home-a-a">隐私协议</view>
					<view class="home-a-b">
						<uni-icons type="map-filled" size="20"></uni-icons>
					</view>
				</view>
				<view class="home-a" @click="clear()">
					<view class="home-a-a">清除缓存</view>
					<view class="home-a-b">
						<uni-icons type="refresh-filled" size="20"></uni-icons>
					</view>
				</view>
				<view class="home-a" @click="edit()" v-if="isLogin==true">
					<view class="home-a-a">退出登录</view>
					<view class="home-a-b">
						<uni-icons type="clear" size="20"></uni-icons>
					</view>
				</view>
			</view>
			<view>
				<!-- #ifdef APP-PLUS -->
				<yomolUpgrade :type="upgradeType" theme="red" :url="upgradeUrl" title="发现新版本"
					:content="appData.data.appContent" ref="yomolUpgrade" :currentVersion="banbenhao"
					:newVersion="appData.data.appVersion"></yomolUpgrade>
				<!-- #endif -->
			</view>

		</template>
	</view>
	<view v-if="appData == ''" style="margin-top: -80px;">
		<null></null>
	</view>
</template>

<script>
	import {
		myRequest,
		apiRequest,
		htRequest
	} from '@/api.js';
	import {
		mapState,
		mapMutations
	} from "vuex"
	import yomolUpgrade from '@/components/yomol-upgrade/yomol-upgrade.vue';
	import set from '@/setting.js';
	export default {
		components: {
			yomolUpgrade
		},
		data() {
			return {
				banbenhao: '1.2.0', //这个是内置的版本号，新版是要和这个比较的，所以每次更新都要改这里的版本号。
				shoulu: '',
				sogo: '',
				upgradeType: '', //pkg 整包 wgt 升级包
				upgradeContent: '', //更新内容
				upgradeUrl: '', //更新地址
				avatarUrl: 'http://cdn.hkiii.cn//img/_2022/06/30/12/54/49/747/6483441/7812966043841394587',
				homelist: [{
						img: "../../static/home/wtfk.png",
						text: "问题反馈",
						url: "../about/help"
					},
					{
						img: "../../static/home/ljtj.png",
						text: "链接提交",
						url: "../baidu/baidu"
					},
					{
						img: "../../static/home/tags.png",
						text: "全部标签",
						url: "../tags/tags"
					}
				],
				// appData: {
				// 	data:{
				// 		tianapi:''
				// 	}
				// },
			}
		},
		computed: {
			...mapState(['isLogin', 'appData','user','options'])
		},
		mounted() {},
		onShow() {
			var that = this
			uni.getStorage({
				key: 'shoulu',
				success: function(res) {
					that.shoulu = res.data
				},
				fail: function() {
					that.baidu('/baidupages/index', 'shoulu');
				}
			});
			uni.getStorage({
				key: 'sogo',
				success: function(res) {
					that.sogo = res.data
				},
				fail: function() {
					that.baidu('/sogoupages/index', 'sogo');
				}
			});
		},
		onLoad() {
			this.height = "height:0%";
		},
		methods: {
			...mapMutations(['login', 'loginOut', 'clearStorages']),
			reg(e) {
				if(e == ''){
					return this.options.blogurl + 'admin/views/images/avatar.svg'
				}else{
					e = e.replace(/\.\.\/content\/upload/gi,
					this.options.blogurl + 'content/upload');
					return e
				}
			},
			toLogin() {
				uni.navigateTo({
					url: "/pages/login/login"
				})
			},
			compare(curV, reqV) {
				if (curV && reqV) {
					//将两个版本号拆成数字
					var arr1 = curV.split('.'),
						arr2 = reqV.split('.');
					var minLength = Math.min(arr1.length, arr2.length),
						position = 0,
						diff = 0;
					//依次比较版本号每一位大小，当对比得出结果后跳出循环（后文有简单介绍）
					while (position < minLength && ((diff = parseInt(arr1[position]) - parseInt(arr2[position])) == 0)) {
						position++;
					}
					diff = (diff != 0) ? diff : (arr1.length - arr2.length);
					//若curV大于reqV，则返回true
					return diff > 0;
				} else {
					return false;
				}
			},
			version() {
				var flg = this.compare(this.appData.data.appVersion, this.banbenhao)
				if (flg) {
					this.upgradeType = 'pkg';
					this.upgradeUrl = this.appData.data.appUrl;
					this.$refs.yomolUpgrade.show();
				} else {
					uni.showToast({
						title: "已经是最新版本",
						icon: 'success'
					})
				}
			},
			edit() {
				var that = this
				uni.showModal({
					title: '提示',
					content: '确定要退出登录吗？',
					success: function(res) {
						if (res.confirm) {
							that.editt("退出成功！");
						} else if (res.cancel) {}
					}
				});
			},
			async editt(e) {
				const res = await htRequest({
					url: "/admin/account.php?action=logout",
				})
				uni.showToast({
					title: `${e}`,
					duration: 2000
				});
				this.loginOut();
			},

			clear() {
				var that = this
				uni.showModal({
					title: "温馨提示",
					content: "这样会清空您的个人设置，请谨慎操作！",
					success: function(res) {
						if (res.confirm) {
							that.editt("清除成功！")
							uni.clearStorage();
							that.clearStorages();
							uni.reLaunch({
								url: "../index/index"
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			about(e) {
				uni.navigateTo({
					url: '/pages/blog-info/blog-info?id=' + e
				})
			},
			ys() {
				uni.showModal({
					title: "温馨提示",
					content: "本程序承诺不保留任何用户信息，用户在使用过程中存留的数据可在本页面（清除缓存）中清理！"
				})
			},
			shua(b) {
				var that = this;
				uni.showModal({
					title: '温馨提示',
					content: '确定要刷新吗？（过多刷新会造成资源浪费）',
					success: function(res) {
						if (res.confirm) {
							if (b == 'baidu') {
								that.baidu('/baidupages/index', 'shoulu');
							} else if (b == 'sogo') {
								that.baidu('/sogoupages/index', 'sogo');
							}
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			go(url) {
				if (url == 'setting') {
					// #ifdef MP-BAIDU || MP-WEIXIN ||MP-QQ
					uni.openSetting({});
					// #endif
					// #ifdef APP-PLUS||H5
					uni.showModal({
						title: "温馨提示",
						content: "仅限小程序使用！"
					})
					// #endif
				} else {
					uni.navigateTo({
						url: url
					})
				}
			},
			async baidu(u, k) {
				var that = this;
				var urlNoProtocol = set.url.replace(/^https?\:\/\//i, "");
				const res = await apiRequest({
					url: u,
					method: 'GET',
					data: {
						key: that.appData.data.tianapi,
						domain: urlNoProtocol
					}
				})
				uni.setStorage({
					key: k,
					data: res.data.newslist[0].count
				});
				that[k] = res.data.newslist[0].count
			},
		}
	}
</script>

<style>
	@import "../../uni.css";

	.box-img {
		width: 70px;
		height: 70px;
		background: #fff;
		border-radius: 10px;
		box-shadow: inset 0px 0px 5px #eee;
		margin: 30px 0px 0px 30px;
		overflow: hidden;
		padding: 3px;
	}

	.box-img image {
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}

	.banner-box {
		display: flex;
		background: #F17C67;
		border-radius: 0px 0px 30% 30%;
	}

	page {
		font-size: 16px;
	}

	button {
		margin: 0;
		padding: 0;
		border: 0;
		line-height: 1.5;
		border-radius: 0;
		display: inline-block;
		background-color: #fff;
		color: #000;
		border: none;
	}

	button::after {
		border: none;
	}

	.login {
		width: 100%;
		z-index: 99;
		transition: 2s;
		position: fixed;
		bottom: 0;
		color: #fff;
		box-shadow: #BBE4FF 1px 1px 10px;
		background-color: #1d243c;
		border-radius: 20px 20px 0px 0px;
	}

	.close {
		display: flex;
		justify-content: space-between;
		padding: 2px;
		margin: 10px;
		height: 10%;
	}

	.close-title {
		font-size: 20px;
		font-weight: 800;
	}

	.close-btn {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border: 2px #eee solid;
	}

	.login-box {
		display: flex;
		justify-content: space-around;
	}

	.wx,
	.qq {
		padding: 5px 10px;
		border-radius: 30px;
		background-color: #fff;
		box-shadow: #F3E3D8 1px 1px 10px;
		width: 30%;
		text-align: center;
	}

	.wx {
		color: #04BE02;
	}

	.qq {
		color: #66ccff;
	}

	.login-content {
		height: 50%;
		padding: 10px;
		word-wrap: break-word;
		opacity: 0.7;
		text-indent: 32px;
	}

	/* #ifdef H5 */
	.login-content {
		height: 30%;
		padding: 10px;
		word-wrap: break-word;
		opacity: 0.7;
		text-indent: 32px;
	}

	/* #endif */
	.baidu-box {
		display: flex;
		justify-content: space-between;
		margin: auto;
		margin: 10px;
	}

	.baidu-item {
		width: 43%;
		border-radius: 10px;
		box-shadow: #eeeeee 1px 1px 30px;
		display: flex;
		justify-content: space-between;
		padding: 10px;
		align-items: center;
	}

	.shoulu {
		display: flex;
		flex-direction: column;
		line-height: normal;
	}

	.sl-icon {
		background-color: #BBE4FF;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		display: flex;
		align-items: center;
	}

	.sl-icon-sg {
		background-color: #F3E3D8;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		display: flex;
		align-items: center;
	}

	.sl-title {
		font-weight: 200;
		opacity: 0.8;
	}

	.sl-content {
		font-weight: 800;
	}

	.homelist {
		margin: 10px;
		margin-top: -60px;
		background-color: #fff;
		border-radius: 20px;
		display: flex;
		height: 55px;
		padding: 10px;
		justify-content: space-around;
		z-index: 2;
		box-shadow: 0px 0px 5px #eee;
	}

	.homelist-img {
		width: 38px;
		height: 40px !important;
	}

	.home-item {
		margin: 10px;
		padding: 10px;
		background: #fff;
		border-radius: 10px;
		opacity: 0.8;
		font-weight: 200;
		box-shadow: #ddd 1px 1px 10px;
	}

	.home-a {
		display: flex;
		padding: 10px;
		border-bottom: 1px dotted #eeeeee;
	}

	.home-b {
		display: flex;
		padding: 10px;
	}

	.home-a-a {
		font-weight: 600;
		font-size: 15px;
	}

	.home-a-b {
		position: absolute;
		right: 40px;
		font-weight: 100;
		font-size: 13px;
		line-height: 39rpx;
	}

	.home-a-c {
		position: absolute;
		right: 40px;
		font-weight: 100;
		font-size: 17px;
		line-height: 39rpx;
	}

	.user-nick {
		display: inline-block;
		vertical-align: middle;
		font-size: 20px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-left: 20px;
		margin-top: 30px;
		font-weight: 800;
		line-height: 70px;
		height: 70px;
		color: #fff;
	}

	.user-nick-a {
		display: inline-block;
		vertical-align: middle;
		font-size: 20px;
		width: 200rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-weight: 800;
		line-height: 70px;
		height: 70px;
	}

	.sorts {
		margin: 50px 10px 0px 10px;
		background-color: #fff;
		padding: 5px;
		font-weight: 200;
		border-radius: 10px 10px 0px 0px;
		border-bottom: 2px dotted #eeeeee;
		padding: 10px 20px 10px 20px;
		overflow: hidden;
		white-space: nowrap;
		text-align: center;
	}

	.sorts-b {
		margin: 0px 10px;
		background-color: #fff;
		padding: 5px;
		font-weight: 100;
		padding: 10px 20px 10px 20px;
		font-size: 15px;
		border-radius: 0px 0px 10px 10px;
		margin-bottom: 10px;
	}
</style>
