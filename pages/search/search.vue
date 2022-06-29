<template>
	<view class="searchTop">
		<uni-search-bar placeholder="请输入要搜索的内容"  v-model="value" cancelButton="none" bgColor="#eee" @confirm="search"/>
	</view>
	<view class="content-item">
		
		
		<view v-for="(item,index) in dataa" :key="index">
		
		
			<uni-card :title="item.title" :sub-title="item.date" :extra="item.sort_name" :cover="cover" @click="toInfo(item.id)" v-if="item.cover!=''">
			    <image slot='cover' style="width: 100%;" :src="item.cover"></image>
					<view class="list-flex">
						<view class="list-item">
							作者:{{item.author_name}}
						</view>
						<view class="list-item">
							阅读{{item.views}}
						</view>
						<view class="list-item">
							评论{{item.comnum}}
						</view>
					</view>
			</uni-card>
		
		
		
			<uni-section type="line" v-if="item.cover==''">
				<uni-card :title="item.title" :sub-title="item.date" :extra="item.sort_name" :thumbnail="item.cover"
					@click="toInfo(item.id)">
					<view class="list-flex">
						<view class="list-item">
							作者:{{item.author_name}}
						</view>
						<view class="list-item">
							阅读{{item.views}}
						</view>
						<view class="list-item">
							评论{{item.comnum}}
						</view>
					</view>
				</uni-card>
			</uni-section>
		</view>
		
		
		
	</view>
</template>

<script>
	import {
		myRequest
	} from '@/api.js';
	export default {
		data() {
			return {
				value:'',
				dataa:'没有搜索到哦！'
			}
		},
		onLoad(options){
			this.value = options.search
			this.blog(options.search)
			console.log(111)
		},
		methods: {
			search(res){
				this.blog(res.value)
			},
			toInfo(e) {
				uni.navigateTo({
					url: '/pages/blog-info/blog-info?id=' + e
				})
			},
			async blog(keyword) {
				console.log(keyword)
				const res = await myRequest({
					url: '/?rest-api=article_list',
					method: 'GET',
					data: {
						keyword: keyword
					}
				})
					this.dataa = res.data.data.articles
				console.log(this.dataa)
			}
		},
	}
</script>

<style>
		@import "../../uni.css";
		.searchTop{
			position: fixed;
			top: 0px;
			width: 100%;
			z-index: 2;
			background-color: #fff;
			box-shadow: #eee 1px 1px 10px;
		}
		.content-item{
			margin-top: 60px;
		}
		page{
			font-size: 16px;
		}
</style>
