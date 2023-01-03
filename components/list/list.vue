<template>
	
	<view class="pageBox">
		
		<view class="box" v-for="item in List" @click="tya(item.url)">
			<view class="title">
				{{item.title}}
			</view>
			<view class="content">
				<span>文章作者:{{item.author_name}}</span>
				<br>
				{{desc}}{{item.sort_name}}
			</view>
			<view class="bottom">
				<view class="bjtab" @click.stop="taburl(item.id)">
					查看文章
				</view>
				<view class="bjtab2" v-show="zw" @click.stop="zwurl(item.zwurl)">
					{{zw}} 
				</view>
				<view class="num">
					浏览量:{{item.views}}
				</view>
				<view class="caoan" @click.stop="caoan(item.id)">
					{{xiangqing}}
				</view>
			</view>
			
		</view>
		
	</view>
	
</template>

<script>
	export default{
		name:"hklist",
		props: {
			//列表
			List: {
				type: Array,
				default: function() {
					return [];
				}
			},
			tab: {
				type: String,
				default: ''
			},
			//详情文字
			xiangqing: {
				type: String,
				default: ""
			},//状态文字
			stat: {
				type: String,
				default: ""
			},
			zw: {
				type: String,
				default: ""
			},
			//简介文字
			desc: {
				type: String,
				default: ""
			},//浏览文字
			lll: {
				type: String,
				default: ""
			},
			
		},
		data(){
			return{
				
			}
		},
		methods:{
			tya(e){
				uni.navigateTo({
					url:e
				})
			},
			
			caoan(e){
				this.$emit("editBlog",e)
				console.log(this.$emit("editBlog",e))
			},
			taburl(e){
				uni.navigateTo({
					url:"/pages/blog-info/blog-info?id=" +e
				})
			},
			zwurl(e){
				
			},
		}
	}
</script>

<style lang="less">
	.title{
		font-weight: 600;
		margin: 10px 0px;
		font-size: 18px;
	}
	.pageBox{
		padding:10px;
	}
		.box{
			border-radius: 10px;
			background-color: #fff;
			padding: 10px;
			margin-bottom: 10px;
			box-shadow: 0 0px 6px 0 #dfe3e8;
		}
	.content{
		color: #686b73;
		font-size: 14px;
	}
	.bottom{
		display: flex;
		font-size: 14px;
		margin: 10px 0px 0px 0px;
		justify-content: space-between;
	}
	.bjtab{
		background: #ebf3fe;
		color: #1492ff;
		border-radius: 3px;
		padding: 3px 6px;
	}.bjtab2{
		background: #fef5eb;
		color: #faa851;
		border-radius: 3px;
		padding: 3px 6px;
	}
	.num{
		color: #686b73;
		padding: 3px 6px;
	}
	.caoan{
		padding: 3px 6px;
		background: #fccac3;
		font-weight: 400;
		color: #f53137;
		border-radius: 3px;
	}
</style>