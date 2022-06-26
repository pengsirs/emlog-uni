"use strict";
var api = require("../../api.js");
var common_vendor = require("../../common/vendor.js");
require("../../setting.js");
const _sfc_main = {
  data() {
    return {
      data: "",
      haibao: "",
      url: "",
      content: "<div style='background:#eee;height:25px;width:50%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:20px;width:80%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:20px;width:70%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:20px;width:50%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:20px;width:90%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:20px;width:30%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:25px;width:50%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:250px;width:100%;border-radius:5px;margin:10px auto;'></div>"
    };
  },
  onLoad(option) {
    this.blog(option.id);
    this.url = option.url;
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
  const _easycom_uni_collapse_item2 = common_vendor.resolveComponent("uni-collapse-item");
  const _easycom_uni_collapse2 = common_vendor.resolveComponent("uni-collapse");
  (_easycom_uni_icons2 + _easycom_mp_html2 + _easycom_uni_collapse_item2 + _easycom_uni_collapse2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_mp_html = () => "../../uni_modules/mp-html/components/mp-html/mp-html.js";
const _easycom_uni_collapse_item = () => "../../uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.js";
const _easycom_uni_collapse = () => "../../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_mp_html + _easycom_uni_collapse_item + _easycom_uni_collapse)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.data.title || "\u6807\u9898\u52A0\u8F7D\u4E2D..."),
    b: common_vendor.p({
      color: "green",
      type: "person",
      size: "14"
    }),
    c: common_vendor.t($data.data.author_name || "\u4F5C\u8005"),
    d: common_vendor.p({
      color: "red",
      type: "fire",
      size: "14"
    }),
    e: common_vendor.t($data.data.views || "9999"),
    f: common_vendor.p({
      color: "blue",
      type: "calendar",
      size: "14"
    }),
    g: common_vendor.t($data.data.date || "1970-01-01 00:00:00"),
    h: common_vendor.p({
      content: $data.data.content || $data.content
    }),
    i: common_vendor.t($data.data.title),
    j: common_vendor.t($data.data.author_name || "\u4F5C\u8005"),
    k: common_vendor.t($data.data.author_name || "\u4F5C\u8005"),
    l: common_vendor.t($data.data.author_name || "\u4F5C\u8005"),
    m: common_vendor.p({
      title: "\u6587\u7AE0\u6269\u5C55",
      ["show-animation"]: true
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/blog-info/blog-info.vue"]]);
wx.createPage(MiniProgramPage);
