<qs module="handler">
  
// 行内标签列表
var inlineTags = {
  abbr: true,
  b: true,
  big: true,
  code: true,
  del: true,
  em: true,
  i: true,
  ins: true,
  label: true,
  q: true,
  small: true,
  span: true,
  strong: true,
  sub: true,
  sup: true
}
/**
 * @description 判断是否为行内标签
 */
module.exports = {
  isInline: function (tagName, style) {
    return inlineTags[tagName] || (style || '').indexOf('display:inline') !== -1
  }
}

  </qs>
<view bindtap="{{b}}" id="{{c}}" class="{{d}}" style="{{e}}"><block qq:for="{{a}}" qq:for-item="n" qq:key="ba"><image qq:if="{{n.a}}" class="_img" style="{{n.b}}" src="{{n.c}}" mode="widthFix"/><image qq:if="{{n.d}}" id="{{n.e}}" class="{{n.f}}" style="{{n.g}}" src="{{n.h}}" mode="{{n.i}}" lazy-load="{{n.j}}" webp="{{n.k}}" show-menu-by-longpress="{{n.l}}" image-menu-prevent="{{n.m}}" data-i="{{n.n}}" bindload="{{n.o}}" binderror="{{n.p}}" catchtap="{{n.q}}" bindlongpress="{{n.r}}"/><text qq:elif="{{n.s}}" data-i="{{n.x}}" user-select="{{n.y}}" decode="{{n.z}}" bindtap="{{n.A}}">{{n.t}} <text qq:if="{{n.v}}" style="color:gray">{{n.w}}</text></text><text qq:elif="{{n.B}}" data-i="{{n.F}}" style="border:1px dashed black;min-width:50px;width:auto;padding:5px;display:block" catchtap="{{n.G}}">{{n.C}} <text qq:if="{{n.D}}" style="color:gray">{{n.E}}</text></text><textarea qq:elif="{{n.H}}" style="border:1px dashed black;min-width:50px;width:auto;padding:5px" auto-height maxlength="-1" focus="{{n.I}}" value="{{n.J}}" data-i="{{n.K}}" bindinput="{{n.L}}" bindblur="{{n.M}}"/><text qq:elif="{{n.N}}">\n</text><view qq:elif="{{n.O}}" id="{{n.R}}" class="{{n.S}}" hover-class="_hover" style="{{n.T}}" data-i="{{n.U}}" catchtap="{{n.V}}"><node qq:if="{{n.Q}}" style="display:inherit" u-i="{{n.P}}" bind:__l="__l" u-p="{{n.Q}}"/></view><video qq:elif="{{n.W}}" show-center-play-btn="{{n.X}}" bindtap="{{n.Y}}" id="{{n.Z}}" class="{{n.aa}}" style="{{n.ab}}" autoplay="{{n.ac}}" controls="{{n.ad}}" loop="{{n.ae}}" muted="{{n.af}}" object-fit="{{n.ag}}" poster="{{n.ah}}" src="{{n.ai}}" data-i="{{n.aj}}" bindplay="{{n.ak}}" binderror="{{n.al}}"/><audio qq:elif="{{n.am}}" bindtap="{{n.an}}" id="{{n.ao}}" class="{{n.ap}}" style="{{n.aq}}" author="{{n.ar}}" controls="{{n.as}}" loop="{{n.at}}" name="{{n.av}}" poster="{{n.aw}}" src="{{n.ax}}" data-i="{{n.ay}}" bindplay="{{n.az}}" binderror="{{n.aA}}"/><view qq:elif="{{n.aB}}" id="{{n.aG}}" class="{{n.aH}}" style="{{n.aI}}"><node qq:if="{{n.aC}}" u-i="{{n.aD}}" bind:__l="__l" u-p="{{n.aE}}"/><block qq:else><view qq:for="{{n.aF}}" qq:for-item="tbody" qq:key="e" class="{{tbody.f}}" style="{{tbody.g}}"><node qq:if="{{tbody.a}}" u-i="{{tbody.b}}" bind:__l="__l" u-p="{{tbody.c}}"/><block qq:else><block qq:for="{{tbody.d}}" qq:for-item="tr" qq:key="i"><view qq:if="{{tr.a}}" class="{{tr.d}}" style="{{tr.e}}"><node qq:if="{{tr.c}}" u-i="{{tr.b}}" bind:__l="__l" u-p="{{tr.c}}"/></view><view qq:else class="{{tr.g}}" style="{{tr.h}}"><view qq:for="{{tr.f}}" qq:for-item="td" qq:key="c" class="{{td.d}}" style="{{td.e}}"><node qq:if="{{td.b}}" u-i="{{td.a}}" bind:__l="__l" u-p="{{td.b}}"/></view></view></block></block></view></block></view><rich-text qq:elif="{{n.aJ}}" nodes="{{n.aK}}" data-content="{{n.aL}}" data-lang="{{n.aM}}" bindlongpress="{{n.aN}}"/><rich-text qq:elif="{{n.aO}}" id="{{n.aP}}" style="{{n.aQ}}" preview="{{false}}" nodes="{{n.aR}}"/><view qq:elif="{{n.aS}}" id="{{n.aU}}" class="{{n.aV}}" style="{{n.aW}}"><node qq:for="{{n.aT}}" qq:for-item="n2" qq:key="a" style="{{n2.b}}" u-i="{{n2.c}}" bind:__l="__l" u-p="{{n2.d}}"/></view><node qq:else style="{{n.aX}}" u-i="{{n.aY}}" bind:__l="__l" u-p="{{n.aZ||''}}"/></block></view>