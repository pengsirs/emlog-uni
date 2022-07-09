"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      url: "www.hkiii.cn",
      appData: ""
    };
  },
  onLoad() {
  },
  onShow() {
    var that = this;
    common_vendor.index.getStorage({
      key: "appData",
      success: function(res) {
        that.appData = res.data;
      }
    });
  },
  methods: {}
};
if (!Array) {
  const _easycom_mp_html2 = common_vendor.resolveComponent("mp-html");
  _easycom_mp_html2();
}
const _easycom_mp_html = () => "../../uni_modules/mp-html/components/mp-html/mp-html.js";
if (!Math) {
  _easycom_mp_html();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.appData.data.blogurl),
    b: common_vendor.p({
      content: $data.appData.data.about
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/about/about.vue"]]);
qq.createPage(MiniProgramPage);
