<view qq:if="{{a}}" class="centent"><view class="banner-box"><view class="box-img"><image class="me-img" src="{{b}}" mode=""></image></view><view class="me" bindtap="{{d}}">{{c}}</view></view><view class="bannertm"><view qq:for="{{e}}" qq:for-item="i" style="{{i.a}}" class="tm"></view></view><view class="homelist"><button open-type="openSetting" class="homelist-item" bindtap="{{f}}"><image class="homelist-img" src="/static/home/xitongshezhi.png"></image><view style="font-size:12px;font-weight:200">程序设置</view></button><view qq:for="{{g}}" qq:for-item="i" class="homelist-item" bindtap="{{i.c}}"><image class="homelist-img" src="{{i.a}}"></image><view style="font-size:12px;font-weight:200">{{i.b}}</view></view></view><view class="baidu-box"><view class="baidu-item"><view class="sl-icon"><uni-icons qq:if="{{h}}" u-i="07ed1dc6-0" bind:__l="__l" u-p="{{h}}"></uni-icons></view><view class="shoulu"><view class="sl-title">百度收录</view><view class="sl-content">{{i}}</view></view><uni-icons qq:if="{{k}}" bindclick="{{j}}" u-i="07ed1dc6-1" bind:__l="__l" u-p="{{k}}"></uni-icons></view><view class="baidu-item"><view class="sl-icon-sg"><uni-icons qq:if="{{l}}" u-i="07ed1dc6-2" bind:__l="__l" u-p="{{l}}"></uni-icons></view><view class="shoulu"><view class="sl-title">搜狗收录</view><view class="sl-content">{{m}}</view></view><uni-icons qq:if="{{o}}" bindclick="{{n}}" u-i="07ed1dc6-3" bind:__l="__l" u-p="{{o}}"></uni-icons></view></view><view class="home-item"><view class="home-a"><view class="home-a-a">版本信息</view><view class="home-a-b">V1.0.0</view></view><view class="home-a"><view class="home-a-a">页面开发</view><view class="home-a-b">大彭Sir</view></view><view class="home-a" bindtap="{{p}}"><view class="home-a-a">清除缓存</view><view class="home-a-b">></view></view><view class="home-b" bindtap="{{q}}"><view class="home-a-a">关于我们</view><view class="home-a-c">></view></view></view><view class="login" style="{{y}}"><view class="close" bindtap="{{s}}"><view class="close-title">请选择登录方式</view><view class="close-btn"><uni-icons qq:if="{{r}}" u-i="07ed1dc6-4" bind:__l="__l" u-p="{{r}}"></uni-icons></view></view><view class="login-content"> 该功能仅获取您的微信/QQ头像，用于前端页面展示，本程序不会储存您的个人信息，请放心使用！ </view><view class="login-box"><view class="wx" bindtap="{{v}}"><uni-icons qq:if="{{t}}" u-i="07ed1dc6-5" bind:__l="__l" u-p="{{t}}"></uni-icons>微信登录 </view><view class="qq" bindtap="{{x}}"><uni-icons qq:if="{{w}}" u-i="07ed1dc6-6" bind:__l="__l" u-p="{{w}}"></uni-icons>QQ登录 </view></view></view></view><view qq:if="{{z}}" class="centent" style="text-align:center"> 账号未激活，请联系QQ6283354 </view>