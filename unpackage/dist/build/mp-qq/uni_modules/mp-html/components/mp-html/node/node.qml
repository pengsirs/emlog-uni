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
<view id="{{b}}" class="{{c}}" style="{{d}}"><block qq:for="{{a}}" qq:for-item="n" qq:key="aD"><image qq:if="{{n.a}}" class="_img" style="{{n.b}}" src="{{n.c}}" mode="widthFix"/><image qq:if="{{n.d}}" id="{{n.e}}" class="{{n.f}}" style="{{n.g}}" src="{{n.h}}" mode="{{n.i}}" lazy-load="{{n.j}}" webp="{{n.k}}" show-menu-by-longpress="{{n.l}}" image-menu-prevent="{{n.m}}" data-i="{{n.n}}" bindload="{{n.o}}" binderror="{{n.p}}" catchtap="{{n.q}}" bindlongpress="{{n.r}}"/><text qq:elif="{{n.s}}" user-select="{{n.v}}" decode>{{n.t}}</text><text qq:elif="{{n.w}}">\n</text><view qq:elif="{{n.x}}" id="{{n.A}}" class="{{n.B}}" hover-class="_hover" style="{{n.C}}" data-i="{{n.D}}" catchtap="{{n.E}}"><node qq:if="{{n.z}}" style="display:inherit" u-i="{{n.y}}" bind:__l="__l" u-p="{{n.z}}"/></view><video qq:elif="{{n.F}}" id="{{n.G}}" class="{{n.H}}" style="{{n.I}}" autoplay="{{n.J}}" controls="{{n.K}}" loop="{{n.L}}" muted="{{n.M}}" object-fit="{{n.N}}" poster="{{n.O}}" src="{{n.P}}" data-i="{{n.Q}}" bindplay="{{n.R}}" binderror="{{n.S}}"/><audio qq:elif="{{n.T}}" id="{{n.U}}" class="{{n.V}}" style="{{n.W}}" author="{{n.X}}" controls="{{n.Y}}" loop="{{n.Z}}" name="{{n.aa}}" poster="{{n.ab}}" src="{{n.ac}}" data-i="{{n.ad}}" bindplay="{{n.ae}}" binderror="{{n.af}}"/><view qq:elif="{{n.ag}}" id="{{n.al}}" class="{{n.am}}" style="{{n.an}}"><node qq:if="{{n.ah}}" u-i="{{n.ai}}" bind:__l="__l" u-p="{{n.aj}}"/><block qq:else><view qq:for="{{n.ak}}" qq:for-item="tbody" qq:key="e" class="{{tbody.f}}" style="{{tbody.g}}"><node qq:if="{{tbody.a}}" u-i="{{tbody.b}}" bind:__l="__l" u-p="{{tbody.c}}"/><block qq:else><block qq:for="{{tbody.d}}" qq:for-item="tr" qq:key="i"><view qq:if="{{tr.a}}" class="{{tr.d}}" style="{{tr.e}}"><node qq:if="{{tr.c}}" u-i="{{tr.b}}" bind:__l="__l" u-p="{{tr.c}}"/></view><view qq:else class="{{tr.g}}" style="{{tr.h}}"><view qq:for="{{tr.f}}" qq:for-item="td" qq:key="c" class="{{td.d}}" style="{{td.e}}"><node qq:if="{{td.b}}" u-i="{{td.a}}" bind:__l="__l" u-p="{{td.b}}"/></view></view></block></block></view></block></view><rich-text qq:elif="{{n.ao}}" id="{{n.ap}}" style="{{n.aq}}" preview="{{false}}" selectable="{{n.ar}}" user-select="{{n.as}}" nodes="{{n.at}}"/><view qq:elif="{{n.av}}" id="{{n.ax}}" class="{{n.ay}}" style="{{n.az}}"><node qq:for="{{n.aw}}" qq:for-item="n2" qq:key="a" style="{{n2.b}}" u-i="{{n2.c}}" bind:__l="__l" u-p="{{n2.d}}"/></view><node qq:else style="{{n.aA}}" u-i="{{n.aB}}" bind:__l="__l" u-p="{{n.aC||''}}"/></block></view>