<view class="{{['uni-card', q && 'uni-card--full', r && 'uni-card--shadow', s && 'uni-card--border']}}" style="{{'margin:' + t + ';' + ('padding:' + v) + ';' + ('box-shadow:' + w)}}"><block qq:if="{{$slots.cover}}"><slot name="cover"></slot></block><block qq:else><view qq:if="{{a}}" class="uni-card__cover"><image class="uni-card__cover-image" mode="widthFix" bindtap="{{b}}" src="{{c}}"></image></view></block><block qq:if="{{$slots.title}}"><slot name="title"></slot></block><block qq:else><view qq:if="{{d}}" class="uni-card__header"><view class="uni-card__header-box" bindtap="{{k}}"><view qq:if="{{e}}" class="uni-card__header-avatar"><image class="uni-card__header-avatar-image" src="{{f}}" mode="aspectFit"/></view><view class="uni-card__header-content"><text class="uni-card__header-content-title uni-ellipsis"><label qq:if="{{g}}" class="istop">置顶</label>{{h}}</text><text qq:if="{{i}}" class="uni-card__header-content-subtitle uni-ellipsis">{{j}}</text></view></view><view class="uni-card__header-extra" bindtap="{{m}}"><text class="uni-card__header-extra-text">{{l}}</text></view></view></block><view class="uni-card__content" style="{{'padding:' + n}}" bindtap="{{o}}"><slot></slot></view><view class="uni-card__actions" bindtap="{{p}}"><slot name="actions"></slot></view></view>