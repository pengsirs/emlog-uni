"use strict";
var api = require("../../api.js");
var common_vendor = require("../../common/vendor.js");
require("../../setting.js");
const _sfc_main = {
  data() {
    return {
      data: ""
    };
  },
  onLoad(option) {
    this.blog(option.id);
  },
  methods: {
    async blog(e) {
      const res = await api.myRequest({
        url: "/?rest-api=article_detail",
        method: "GET",
        data: {
          id: e
        }
      });
      this.data = res.data.data.article;
    }
  }
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
    a: common_vendor.p({
      content: $data.data.content
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/blog-info/blog-info.vue"]]);
qq.createPage(MiniProgramPage);
