<template>
	<!-- 提示信息弹窗  -->
	<uni-popup ref="message" type="message">
		<uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
	</uni-popup>
	<view class="new">
		<view class="new-title">温馨提示：</view>
		<view class="new-text">
			API秘钥在您的站点后台-系统-设置-API接口获取！
		</view>
	</view>
	<view class="inp">
		<view class="title">API秘钥：</view>
		<input class="srk" v-model="value" type="text" placeholder="请输入API秘钥">
	</view>
	<view class="save" @click="save()">
		保存设置
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
			}
		},
		onLoad() {
			var that = this;
			uni.getStorage({
				key: 'apikey',
				success: function(res) {
					that.value = res.data
				}
			});
		},
		methods: {
			messageToggle(type, text) {
				this.msgType = type
				this.messageText = `${text}`
				this.$refs.message.open()
			},
			save() {
				var that = this;
				if (this.value == '') {
					this.messageToggle('error', '输入不能为空');
				} else {
					uni.setStorage({
						key: "apikey",
						data: that.value,
						success(res) {
							that.messageToggle('success', '保存成功');
						}
					});
				}
			}
		}
	}
</script>

<style>
	.save {
		margin: 10px;
		padding: 5px;
		text-align: center;
		margin-top: 20px;
		border-radius: 5px;
		background-color: deepskyblue;
		color: #fff;
		box-shadow: 1px 1px 10px deepskyblue, -1px -1px 10px #ffffff;
	}

	.new-title {
		font-size: 20px;
		font-weight: 800;
	}

	.new-text {
		opacity: 0.7;
	}

	.inp {
		display: flex;
		padding: 5px;
		margin: 10px;
		border-bottom: 1px solid #eee;
	}

	.srk {
		width: 70%;
	}

	.new {
		background: #fff;
		border-radius: 5px;
		padding: 5px;
		margin: 10px;
		box-shadow: inset 1px 1px 2px #999da4, inset -1px -1px 2px #ffffff;
	}
	page{
		font-size: 16px;
	}
</style>
