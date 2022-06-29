"use strict";
var common_vendor = require("../../common/vendor.js");
var api = require("../../api.js");
require("../../setting.js");
const _sfc_main = {
  data() {
    return {
      value: "",
      dataa: "\u6CA1\u6709\u641C\u7D22\u5230\u54E6\uFF01"
    };
  },
  onLoad(options) {
    this.value = options.search;
    this.blog(options.search);
    console.log(111);
  },
  methods: {
    search(res) {
      this.blog(res.value);
    },
    toInfo(e) {
      common_vendor.index.navigateTo({
        url: "/pages/blog-info/blog-info?id=" + e
      });
    },
    async blog(keyword) {
      console.log(keyword);
      const res = await api.myRequest({
        url: "/?rest-api=article_list",
        method: "GET",
        data: {
          keyword
        }
      });
      this.dataa = res.data.data.articles;
      console.log(this.dataa);
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_search_bar2 + _easycom_uni_card2 + _component_uni_section)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.search),
    b: common_vendor.o(($event) => $data.value = $event),
    c: common_vendor.p({
      placeholder: "\u8BF7\u8F93\u5165\u8981\u641C\u7D22\u7684\u5185\u5BB9",
      cancelButton: "none",
      bgColor: "#eee",
      modelValue: $data.value
    }),
    d: common_vendor.f($data.dataa, (item, index, i0) => {
      return common_vendor.e({
        a: item.cover != ""
      }, item.cover != "" ? {
        b: item.cover,
        c: common_vendor.t(item.author_name),
        d: common_vendor.t(item.views),
        e: common_vendor.t(item.comnum),
        f: common_vendor.o(($event) => $options.toInfo(item.id)),
        g: "ecf213b4-1-" + i0,
        h: common_vendor.p({
          title: item.title,
          ["sub-title"]: item.date,
          extra: item.sort_name,
          cover: _ctx.cover
        })
      } : {}, {
        i: item.cover == ""
      }, item.cover == "" ? {
        j: common_vendor.t(item.author_name),
        k: common_vendor.t(item.views),
        l: common_vendor.t(item.comnum),
        m: common_vendor.o(($event) => $options.toInfo(item.id)),
        n: "ecf213b4-3-" + i0 + "," + ("ecf213b4-2-" + i0),
        o: common_vendor.p({
          title: item.title,
          ["sub-title"]: item.date,
          extra: item.sort_name,
          thumbnail: item.cover
        }),
        p: "ecf213b4-2-" + i0,
        q: common_vendor.p({
          type: "line"
        })
      } : {}, {
        r: index
      });
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/search/search.vue"]]);
qq.createPage(MiniProgramPage);
