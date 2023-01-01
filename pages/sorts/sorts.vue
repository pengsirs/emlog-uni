<template>
    <view>
        <!-- pages/sorts/sorts.wxml  emlog博客小程序Brief作者QQ：6283354，请保留该版权！ -->
        <view class="categorie-header">
            <view class="categorie-text">
                <text>博客分类</text>
                <view>大彭Sir-成就更好的我，遇上更好的你！</view>
            </view>
            <image src="https://cdn.hkiii.cn/cg/10.jpeg" mode="aspectFill" />
        </view>

        <view class="sorts" v-if="'adata'">
            <block :s-key="item.sid" v-for="item in sorts">
                    <view class="sortbox" @click="goSortLogs(item.sid,item.sortname)">
                        <view class="item-link">
                            <view class="sortimage">
                                <image :src="'https://cdn.hkiii.cn/cg/' + item.sid + '.jpeg'"></image>
                            </view>
                            <view class="sorttitle">{{ item.sortname }}</view>
                            <view class="sortsummary">{{ item.description }}</view>
                        </view>
                    </view>
            </block>
        </view>
        <view v-else>
            <null></null>
        </view>
    </view>
</template>

<script>
// pages/sorts/sorts.js  emlog博客小程序Brief作者QQ：6283354，请保留该版权！
	import {
		myRequest,
		apiRequest,
		htRequest
	} from '@/api.js';
	import set from '@/setting.js';
export default {
    data() {
        return {
            description: '',
            sorts: [],
            adata: '',
            sid: '',
            sortname: ''
        };
    },
    onLoad: function (options) {
        this.getSorts();
        this.getSetting();
    },
    onShareAppMessage: function (res) {
        return {
            title: '',
            imageUrl: 'https://api.ixiaowai.cn/api/api.php',
            // 图片 URL
            path: ''
        };
    },
    onShow() {
        this.getSetting();
    },
    methods: {
		async getSorts() {
			const res = await myRequest({
				url: '/?rest-api=sort_list',
				method: 'GET',
			})
			this.sorts = res.data.data.sorts
		},
        getSetting() {
            var that = this;
            uni.getStorage({
                key: 'admin_data',

                success(res) {
                    that.setData({
                        adata: res.data
                    });
                }
            });
        },

        goSortLogs: function (sid,sortname) {
            uni.navigateTo({
            	url:"../sort-info/sort-info?id="+sid+'&sortname='+sortname
            })
        }
    }
};
</script>
<style>
	@import url("sorts.css");
</style>
