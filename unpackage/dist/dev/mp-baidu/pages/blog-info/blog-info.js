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
      res.data.data.article.content = res.data.data.article.content.replace(/\<img/gi, '<img class="rich-img" ');
      res.data.data.article.content = res.data.data.article.content.replace(/\<h1/gi, '<h1 class="rich-h1" ');
      res.data.data.article.content = res.data.data.article.content.replace(/\<h2/gi, '<h2 class="rich-h2" ');
      res.data.data.article.content = res.data.data.article.content.replace(/\<h3/gi, '<h3 class="rich-h3" ');
      res.data.data.article.content = res.data.data.article.content.replace(/\<h4/gi, '<h4 class="rich-h4" ');
      res.data.data.article.content = res.data.data.article.content.replace(/\<h5/gi, '<h5 class="rich-h5" ');
      res.data.data.article.content = res.data.data.article.content.replace(/\<h6/gi, '<h6 class="rich-h6" ');
      res.data.data.article.content = res.data.data.article.content.replace(/百度网盘/gi, "****");
      this.data = res.data.data.article;
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_mp_html2 = common_vendor.resolveComponent("mp-html");
  (_easycom_uni_icons2 + _easycom_mp_html2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_mp_html = () => "../../uni_modules/mp-html/components/mp-html/mp-html.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_mp_html)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.data.title),
    b: common_vendor.p({
      color: "green",
      type: "person",
      size: "10"
    }),
    c: common_vendor.t($data.data.author_name),
    d: common_vendor.p({
      color: "red",
      type: "fire",
      size: "10"
    }),
    e: common_vendor.t($data.data.views),
    f: common_vendor.p({
      color: "blue",
      type: "calendar",
      size: "10"
    }),
    g: common_vendor.t($data.data.date),
    h: common_vendor.p({
      content: $data.data.content
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/blog-info/blog-info.vue"]]);
swan.createPage(MiniProgramPage);
