"use strict";
var api = require("../../api.js");
var common_vendor = require("../../common/vendor.js");
require("../../setting.js");
const _sfc_main = {
  data() {
    return {
      gid: 0,
      data: ""
    };
  },
  onLoad(options) {
    this.gid = options.gid;
    this.blog(options.id);
  },
  methods: {
    async blog(e) {
      var gid = this.gid || gid;
      const res = await api.myRequest({
        url: "/?rest-api=article_detail",
        method: "GET",
        data: {
          id: e
        }
      });
      var success = res.data.data.article.content;
      var nr = success.match(/<a (.*)a>/gi);
      this.data = nr;
      console.log(this.data);
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
  return common_vendor.e({
    a: common_vendor.f($data.data, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: "276f8fa6-0-" + i0,
        c: common_vendor.p({
          ["lozy-load"]: "true",
          ["container-style"]: "overflow: hidden;",
          selectable: "true",
          ["tag-style"]: "{{tagStyle}}",
          content: item
        }),
        d: index
      };
    }),
    b: $data.data == null
  }, $data.data == null ? {} : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/down/down.vue"]]);
qq.createPage(MiniProgramPage);
