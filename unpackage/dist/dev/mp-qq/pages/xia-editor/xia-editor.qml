<view qq:if="{{a}}" class="container"><view class="page-body"><view class="wrapper"><input class="inp-title" placeholder="文章标题" type="text" value="{{b}}" bindinput="{{c}}"/><view class="toolbar" bindtap="{{t}}"><view class="{{[d, 'iconfont', 'icon-zitijiacu']}}" data-name="bold"></view><view class="{{[e, 'iconfont', 'icon-zitixieti']}}" data-name="italic"></view><view class="{{[f, 'iconfont', 'icon-zitixiahuaxian']}}" data-name="underline"></view><view class="{{[g, 'iconfont', 'icon-zitishanchuxian']}}" data-name="strike"></view><view class="{{[h, 'iconfont', 'icon-zuoduiqi']}}" data-name="align" data-value="left"></view><view class="{{[i, 'iconfont', 'icon-juzhongduiqi']}}" data-name="align" data-value="center"></view><view class="{{[j, 'iconfont', 'icon-youduiqi']}}" data-name="align" data-value="right"></view><view class="{{[k, 'iconfont', 'icon-youxupailie']}}" data-name="list" data-value="ordered"></view><view class="{{[l, 'iconfont', 'icon-wuxupailie']}}" data-name="list" data-value="bullet"></view><view class="iconfont icon-undo" bindtap="{{m}}"></view><view class="iconfont icon-redo" bindtap="{{n}}"></view><view class="iconfont icon-fengexian" bindtap="{{o}}"></view><view class="iconfont icon-charutupian" bindtap="{{p}}"></view><view class="iconfont icon--checklist" data-name="list" data-value="check"></view><view class="{{[q, 'iconfont', 'icon-format-header-1']}}" data-name="header" data-value="{{1}}"></view><view class="{{[r, 'iconfont', 'icon-format-header-2']}}" data-name="header" data-value="{{2}}"></view><view class="{{[s, 'iconfont', 'icon-format-header-3']}}" data-name="header" data-value="{{3}}"></view></view><editor bindinput="{{v}}" id="editor" class="ql-container" placeholder="{{w}}" showImgSize showImgToolbar showImgResize bindstatuschange="{{x}}" read-only="{{y}}" bindready="{{z}}"></editor><uni-collapse qq:if="{{N}}" u-s="{{['d']}}" bindchange="{{L}}" u-i="277d7266-0" bind:__l="__l" bindupdateModelValue="{{M}}" u-p="{{N}}"><uni-collapse-item qq:if="{{C}}" u-s="{{['d']}}" u-i="277d7266-1,277d7266-0" bind:__l="__l" u-p="{{C}}"><view class="content"><uni-easyinput qq:if="{{B}}" u-i="277d7266-2,277d7266-1" bind:__l="__l" bindupdateModelValue="{{A}}" u-p="{{B}}"/></view></uni-collapse-item><uni-collapse-item qq:if="{{H}}" u-s="{{['d']}}" u-i="277d7266-3,277d7266-0" bind:__l="__l" u-p="{{H}}"><view class="content"><view class="uni-list"><view class="uni-list-cell"><view class="uni-list-cell-db"><picker bindchange="{{E}}" value="{{F}}" range="{{G}}"><view class="uni-input">{{D}}</view></picker></view></view></view></view></uni-collapse-item><uni-collapse-item qq:if="{{K}}" u-s="{{['d']}}" u-i="277d7266-4,277d7266-0" bind:__l="__l" u-p="{{K}}"><view class="content"><uni-easyinput qq:if="{{J}}" u-i="277d7266-5,277d7266-4" bind:__l="__l" bindupdateModelValue="{{I}}" u-p="{{J}}"/></view></uni-collapse-item></uni-collapse><view class="fabu" bindtap="{{O}}">发布</view></view></view></view><view><uni-popup qq:if="{{R}}" class="r" u-s="{{['d']}}" u-r="message" u-i="277d7266-6" bind:__l="__l" u-p="{{R}}"><uni-popup-message qq:if="{{P}}" u-i="277d7266-7,277d7266-6" bind:__l="__l" u-p="{{P}}"></uni-popup-message></uni-popup></view><view qq:if="{{S}}" class="content"><view class="flg-title"></view><image class="flg-img" src="/static/close.png" mode="aspectFill"></image><view class="flg-text">管理员信息验证失败！</view><view class="flg-cell">请联系管理员获得该权限！</view><button class="flg-btn" bindtap="{{T}}">管理员设置</button></view>