"use strict";
var common_vendor = require("../../common/vendor.js");
var api = require("../../api.js");
require("../../setting.js");
const _sfc_main = {
  data() {
    return {
      id: "",
      page: 1,
      dataa: ""
    };
  },
  onLoad(option) {
    this.blog(1, option.id);
  },
  onReachBottom() {
    this.page = this.page + 1;
    this.blog(this.page);
  },
  onPullDownRefresh() {
    this.dataa = "";
    this.status = "loading";
    this.page = 1;
    this.blog(this.page);
    common_vendor.index.stopPullDownRefresh();
  },
  methods: {
    delHtmlTag(str) {
      var reg = RegExp("<.*?>+|\n|\r", "ig");
      var result = str.replace(reg, "");
      return result;
    },
    imageError(e, index) {
      this.dataa[index]["cover"] = "http://cdn.hkiii.cn//img/_2022/06/29/01/38/12/502/6483441/11289324486965076622";
    },
    getimg(str) {
      var srcReg = /<img.+?src=[\'\"]?([^\'\"]*)[\'\"]?/i;
      var result = str.match(srcReg);
      if (result != null) {
        return result[1];
      } else {
        return false;
      }
    },
    toInfo(e, u) {
      common_vendor.index.navigateTo({
        url: "/pages/blog-info/blog-info?id=" + e + "&url=" + u
      });
    },
    async blog(page, id) {
      const res = await api.myRequest({
        url: "/?rest-api=article_list",
        method: "GET",
        data: {
          sort_id: id,
          page,
          count: 10
        }
      });
      if (res.data.data.articles == "") {
        this.status = "no-more";
      } else {
        this.dataa = [...this.dataa, ...res.data.data.articles];
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_icons2 + _easycom_uni_load_more2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_load_more)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.dataa, (item, index, i0) => {
      return common_vendor.e({
        a: $options.getimg(item.description) || item.cover
      }, $options.getimg(item.description) || item.cover ? common_vendor.e({
        b: common_vendor.o(($event) => $options.imageError($event, index)),
        c: item.cover || $options.getimg(item.description),
        d: item.top == "y"
      }, item.top == "y" ? {} : {}, {
        e: common_vendor.t(item.title),
        f: common_vendor.t($options.delHtmlTag(item.description)),
        g: common_vendor.t(item.sort_name),
        h: "4a322462-0-" + i0,
        i: common_vendor.p({
          type: "fire-filled",
          size: "17"
        }),
        j: common_vendor.t(item.views),
        k: "4a322462-1-" + i0,
        l: common_vendor.p({
          type: "chat-filled",
          size: "17"
        }),
        m: common_vendor.t(item.comnum),
        n: common_vendor.o(($event) => $options.toInfo(item.id, item.url))
      }) : {}, {
        o: !$options.getimg(item.description) && item.cover == ""
      }, !$options.getimg(item.description) && item.cover == "" ? common_vendor.e({
        p: item.top == "y"
      }, item.top == "y" ? {} : {}, {
        q: common_vendor.t(item.title),
        r: common_vendor.t($options.delHtmlTag(item.description)),
        s: common_vendor.t(item.sort_name),
        t: "4a322462-2-" + i0,
        v: common_vendor.p({
          type: "fire-filled",
          size: "17"
        }),
        w: common_vendor.t(item.views),
        x: "4a322462-3-" + i0,
        y: common_vendor.p({
          type: "chat-filled",
          size: "17"
        }),
        z: common_vendor.t(item.comnum),
        A: common_vendor.o(($event) => $options.toInfo(item.id, item.url))
      }) : {}, {
        B: index
      });
    }),
    b: common_vendor.p({
      color: "#007AFF",
      status: _ctx.status
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/sort-info/sort-info.vue"]]);
wx.createPage(MiniProgramPage);
