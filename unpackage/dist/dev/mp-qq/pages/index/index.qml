<view class="content"><view class="header"><view class="user"><view class="user-img" bindtap="{{b}}"><uni-icons qq:if="{{a}}" u-i="02d9e768-0" bind:__l="__l" u-p="{{a}}"></uni-icons></view></view><view class="secrch"><uni-search-bar qq:if="{{f}}" u-s="{{['d']}}" bindconfirm="{{d}}" bindcancel="{{e}}" u-i="02d9e768-1" bind:__l="__l" u-p="{{f}}"><uni-icons qq:if="{{c}}" slot="searchIcon" u-i="02d9e768-2,02d9e768-1" bind:__l="__l" u-p="{{c}}"/></uni-search-bar></view><view class="user"><view><image bindtap="{{g}}" class="user-img" src="{{h}}" mode=""></image></view></view></view><view class="example-body"><uni-drawer qq:if="{{l}}" class="r" u-s="{{['d']}}" u-r="showLeft" u-i="02d9e768-3" bind:__l="__l" u-p="{{l}}"><scroll-view style="height:100%" scroll-y="true"><view class="title"><view class="title-blue"></view><text>已加载的文章</text></view><uni-steps qq:if="{{j}}" bindtoInfo="{{i}}" u-i="02d9e768-4,02d9e768-3" bind:__l="__l" u-p="{{j}}"/></scroll-view></uni-drawer></view><swiper class="swiper-box" indicator-dots="true" autoplay="true" circular="true" previous-margin="10px" next-margin="10px"><swiper-item qq:for="{{m}}" qq:for-item="item" qq:key="c"><view class="{{['swiper-item', item.b]}}"><image src="{{item.a}}" class="swiper-img" srcset=""></image></view></swiper-item></swiper><view class="bannertm"><view qq:for="{{n}}" qq:for-item="i" style="{{i.a}}" class="tm"></view></view><uni-notice-bar qq:if="{{o}}" u-i="02d9e768-5" bind:__l="__l" u-p="{{o}}"/><scroll-view scroll-x="true" style="width:100%;white-space:nowrap"><view class="sorts"><view qq:for="{{p}}" qq:for-item="s" qq:key="b" id="{{s.c}}" class="{{['scroll-view-item_H', s.d]}}" bindtap="{{s.e}}"><view class="sort-item">{{s.a}}</view></view></view></scroll-view><view qq:if="{{q}}" class="xiaohuojian" bindtap="{{r}}"><image src="/static/fanhuidingbu.png" mode=""></image></view><view qq:for="{{s}}" qq:for-item="item" qq:key="B"><view qq:if="{{item.a}}" class="list-items" bindtap="{{item.n}}"><view class="img-box"><image binderror="{{item.b}}" class="lists-img" src="{{item.c}}" mode="scaleToFill"></image></view><view class="list-box"><view class="list-title"><label qq:if="{{item.d}}" class="top">置顶</label>{{item.e}}</view><text class="desc">{{item.f}}</text><view class="many"><view class="sort">{{item.g}}</view><view class="right"><view class="read"><uni-icons qq:if="{{item.i}}" u-i="{{item.h}}" bind:__l="__l" u-p="{{item.i}}"></uni-icons>{{item.j}}</view><view class="comments"><uni-icons qq:if="{{item.l}}" u-i="{{item.k}}" bind:__l="__l" u-p="{{item.l}}"></uni-icons>{{item.m}}</view></view></view></view></view><view qq:if="{{item.o}}" class="list-items" bindtap="{{item.A}}"><view class="list-box-null"><view class="list-title"><label qq:if="{{item.p}}" class="top">置顶</label>{{item.q}}</view><text class="desc">{{item.r}}</text><view class="many"><view class="sort">{{item.s}}</view><view class="right"><view class="read"><uni-icons qq:if="{{item.v}}" u-i="{{item.t}}" bind:__l="__l" u-p="{{item.v}}"></uni-icons>{{item.w}}</view><view class="comments"><uni-icons qq:if="{{item.y}}" u-i="{{item.x}}" bind:__l="__l" u-p="{{item.y}}"></uni-icons>{{item.z}}</view></view></view></view></view></view><uni-load-more qq:if="{{t}}" u-i="02d9e768-10" bind:__l="__l" u-p="{{t}}"/></view>