"use strict";
var common_vendor = require("../../common/vendor.js");
var api = require("../../api.js");
require("../../setting.js");
var block0 = {};
const _sfc_main = {
  data() {
    return {
      dataa: [],
      $req_time: "",
      $sign: "",
      page: 1,
      description: "",
      di: false,
      backTopValue: false,
      onRefresh: false,
      status: "loading",
      images: [
        "/static/1.jpeg",
        "/static/2.jpeg",
        "/static/3.jpeg"
      ],
      opacity: [
        "opacity:0.1;background:#fff;",
        "opacity:0.125;background:#fff;",
        "opacity:0.15;background:#fff;",
        "opacity:0.175;background:#fff;",
        "opacity:0.2;background:#fff;",
        "opacity:0.225;background:#fff;",
        "opacity:0.25;background:#fff;",
        "opacity:0.275;background:#fff;",
        "opacity:0.3;background:#fff;",
        "opacity:0.325;background:#fff;",
        "opacity:0.375;background:#fff;",
        "opacity:0.4;background:#fff;",
        "opacity:0.425;background:#fff;",
        "opacity:0.45;background:#fff;",
        "opacity:0.475;background:#fff;",
        "opacity:0.5;background:#fff;",
        "opacity:0.525;background:#fff;",
        "opacity:0.55;background:#fff;",
        "opacity:0.575;background:#fff;",
        "opacity:0.6;background:#fff;",
        "opacity:0.625;background:#fff;",
        "opacity:0.65;background:#fff;",
        "opacity:0.675;background:#fff;",
        "opacity:0.7;background:#fff;",
        "opacity:0.725;background:#fff;",
        "opacity:0.75;background:#fff;",
        "opacity:0.775;background:#fff;",
        "opacity:0.8;background:#fff;",
        "opacity:0.825;background:#fff;",
        "opacity:0.85;background:#fff;",
        "opacity:0.875;background:#fff;",
        "opacity:0.9;background:#fff;",
        "opacity:0.925;background:#fff;",
        "opacity:0.95;background:#fff;",
        "opacity:0.975;background:#fff;"
      ]
    };
  },
  mounted() {
    this.blog(1);
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
  onPageScroll: function(e) {
    var scrollTop = e.scrollTop;
    var backTopValue = scrollTop > 500 ? true : false;
    this.backTopValue = backTopValue;
  },
  methods: {
    toInfo(e) {
      common_vendor.index.navigateTo({
        url: "/pages/blog-info/blog-info?id=" + e
      });
    },
    search(res) {
      common_vendor.index.showToast({
        title: "\u641C\u7D22\uFF1A" + res.value,
        icon: "none"
      });
    },
    messageToggle(type) {
      this.msgType = type;
      this.messageText = `\u8FD9\u662F\u4E00\u6761${type}\u6D88\u606F\u63D0\u793A`;
      this.$refs.message.open();
    },
    xhj() {
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    },
    async blog(page) {
      const res = await api.myRequest({
        url: "/?rest-api=article_list",
        method: "GET",
        data: {
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
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_uni_popup_message2 = common_vendor.resolveComponent("uni-popup-message");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_icons2 + _easycom_uni_search_bar2 + _easycom_uni_notice_bar2 + _easycom_uni_popup_message2 + _easycom_uni_popup2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_card2 + _component_uni_section + _easycom_uni_load_more2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_notice_bar = () => "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_uni_popup_message = () => "../../uni_modules/uni-popup/components/uni-popup-message/uni-popup-message.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_search_bar + _easycom_uni_notice_bar + _easycom_uni_popup_message + _easycom_uni_popup + _easycom_uni_list_item + _easycom_uni_list + _easycom_uni_card + _easycom_uni_load_more)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      color: "#999999",
      size: "18",
      type: "home"
    }),
    b: {
      "cancel": common_vendor.o($options.search),
      "confirm": common_vendor.o($options.search)
    },
    c: common_vendor.p({
      radius: 20,
      placeholder: "\u8BF7\u8F93\u5165\u8981\u641C\u7D22\u7684\u8BCD",
      cancelButton: "always",
      ["cancel-text"]: "\u641C\u7D22"
    }),
    d: common_vendor.f($data.images, (item, index, i0) => {
      return {
        a: index,
        b: item,
        c: common_vendor.n("swiper-item" + index)
      };
    }),
    e: common_vendor.f($data.opacity, (i, k0, i0) => {
      return {
        a: common_vendor.s(i)
      };
    }),
    f: common_vendor.p({
      ["show-icon"]: true,
      scrollable: true,
      ["background-color"]: "#fff",
      color: "#000",
      text: "\u8FD9\u662F\u516C\u544A,\u8BF7\u5728\u7BA1\u7406\u540E\u53F0\u8BBE\u7F6E!"
    }),
    g: common_vendor.o(($event) => $options.messageToggle("success")),
    h: common_vendor.o(($event) => $options.messageToggle("error")),
    i: common_vendor.o(($event) => $options.messageToggle("warn")),
    j: common_vendor.o(($event) => $options.messageToggle("info")),
    k: common_vendor.p({
      type: _ctx.msgType,
      message: _ctx.messageText,
      duration: 2e3
    }),
    l: common_vendor.sr("message", "02d9e768-3"),
    m: common_vendor.p({
      type: "message"
    }),
    n: $data.backTopValue
  }, $data.backTopValue ? {
    o: common_vendor.o((...args) => $options.xhj && $options.xhj(...args))
  } : {}, {
    p: common_vendor.f($data.dataa, (item, index, i0) => {
      return common_vendor.e({
        a: index,
        b: item.cover != ""
      }, item.cover != "" ? {
        c: "02d9e768-8-" + i0 + "," + ("02d9e768-7-" + i0),
        d: common_vendor.p({
          ["show-switch"]: true,
          title: item.title
        }),
        e: "02d9e768-7-" + i0 + "," + ("02d9e768-6-" + i0),
        f: item.cover,
        g: "02d9e768-6-" + i0 + "," + ("02d9e768-5-" + i0),
        h: common_vendor.p({
          padding: "10px 0",
          thumbnail: _ctx.avatar
        }),
        i: "02d9e768-5-" + i0,
        j: {
          "click": common_vendor.o(($event) => $options.toInfo(item.id))
        },
        k: common_vendor.p({
          title: "\u6709\u5C01\u9762",
          type: "line"
        })
      } : {}, {
        l: item.cover == ""
      }, item.cover == "" ? {
        m: common_vendor.t(_ctx.m1.delHtmlTag(item.description)),
        n: common_vendor.t(item.author_name),
        o: common_vendor.t(item.views),
        p: common_vendor.t(item.comnum),
        q: "02d9e768-10-" + i0 + "," + ("02d9e768-9-" + i0),
        r: {
          "click": common_vendor.o(($event) => $options.toInfo(item.id))
        },
        s: common_vendor.p({
          title: item.title,
          ["sub-title"]: item.date,
          extra: item.sort_name,
          thumbnail: item.cover
        }),
        t: "02d9e768-9-" + i0,
        v: common_vendor.p({
          type: "line"
        })
      } : {});
    }),
    q: common_vendor.p({
      color: "#007AFF",
      status: $data.status
    })
  });
}
if (typeof block0 === "function")
  block0(_sfc_main);
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/index/index.vue"]]);
_sfc_main.__runtimeHooks = 1;
swan.createPage(MiniProgramPage);
