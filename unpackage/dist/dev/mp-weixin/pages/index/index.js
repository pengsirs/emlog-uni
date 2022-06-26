"use strict";
var common_vendor = require("../../common/vendor.js");
var api = require("../../api.js");
var setting = require("../../setting.js");
const _sfc_main = {
  data() {
    return {
      dataa: [],
      $req_time: "",
      $sign: "",
      page: 1,
      shoulu: "",
      description: "",
      di: false,
      backTopValue: false,
      onRefresh: false,
      status: "loading",
      images: [
        "http://cdn.hkiii.cn//img/_2022/06/21/09/52/42/167/6483441/13482961188039425428",
        "http://cdn.hkiii.cn//img/_2022/06/21/09/52/42/181/6483441/13482961192300838800",
        "http://cdn.hkiii.cn//img/_2022/06/21/09/52/42/172/6483441/13482961190153354896"
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
      ],
      scrollTop: 0,
      old: {
        scrollTop: 0
      },
      blogAll: ""
    };
  },
  mounted() {
  },
  onLoad() {
    this.blog(1);
    this.blogall();
    this.baidu();
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
    this.baidu();
    common_vendor.index.stopPullDownRefresh();
  },
  onPageScroll: function(e) {
    var scrollTop = e.scrollTop;
    var backTopValue = scrollTop > 500 ? true : false;
    this.backTopValue = backTopValue;
  },
  methods: {
    showDrawer(e) {
      this.$refs[e].open();
    },
    closeDrawer(e) {
      this.$refs[e].close();
    },
    delHtmlTag(str) {
      var reg = RegExp("<.*?>+|\n|\r", "ig");
      var result = str.replace(reg, "");
      return result;
    },
    toInfo(e, u) {
      common_vendor.index.navigateTo({
        url: "/pages/blog-info/blog-info?id=" + e + "&url=" + u
      });
    },
    search(res) {
      common_vendor.index.navigateTo({
        url: "../search/search?search=" + res.value
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
    },
    async baidu() {
      const res = await api.apiRequest({
        url: "/site/?url=" + setting.set.tenapi,
        method: "GET"
      });
      this.shoulu = res.data.data;
    },
    async blogall() {
      const res = await api.myRequest({
        url: "/?rest-api=article_list",
        method: "GET",
        data: {
          count: 999
        }
      });
      this.blogAll = [...this.blogAll, ...res.data.data.articles];
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_steps2 = common_vendor.resolveComponent("uni-steps");
  const _easycom_uni_drawer2 = common_vendor.resolveComponent("uni-drawer");
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_icons2 + _easycom_uni_search_bar2 + _easycom_uni_steps2 + _easycom_uni_drawer2 + _easycom_uni_notice_bar2 + _easycom_uni_card2 + _component_uni_section + _easycom_uni_load_more2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_steps = () => "../../uni_modules/uni-steps/components/uni-steps/uni-steps.js";
const _easycom_uni_drawer = () => "../../uni_modules/uni-drawer/components/uni-drawer/uni-drawer.js";
const _easycom_uni_notice_bar = () => "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_search_bar + _easycom_uni_steps + _easycom_uni_drawer + _easycom_uni_notice_bar + _easycom_uni_card + _easycom_uni_load_more)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      type: "settings",
      color: "#007AFF	",
      size: "30"
    }),
    b: common_vendor.o(($event) => $options.showDrawer("showLeft")),
    c: common_vendor.p({
      color: "#999999",
      size: "18",
      type: "home"
    }),
    d: common_vendor.o($options.search),
    e: common_vendor.o($options.search),
    f: common_vendor.p({
      radius: 5,
      placeholder: "\u8BF7\u8F93\u5165\u8981\u641C\u7D22\u7684\u5185\u5BB9",
      cancelButton: "none",
      bgColor: "#eee",
      ["cancel-text"]: "\u641C\u7D22"
    }),
    g: common_vendor.o($options.toInfo),
    h: common_vendor.p({
      options: $data.blogAll,
      ["active-color"]: "#007AFF",
      active: $data.page * 10,
      direction: "column"
    }),
    i: common_vendor.sr("showLeft", "02d9e768-3"),
    j: common_vendor.p({
      mode: "left",
      width: 320
    }),
    k: common_vendor.f($data.images, (item, index, i0) => {
      return {
        a: item,
        b: common_vendor.n("swiper-item" + index),
        c: index
      };
    }),
    l: common_vendor.f($data.opacity, (i, k0, i0) => {
      return {
        a: common_vendor.s(i)
      };
    }),
    m: common_vendor.o(($event) => $options.baidu()),
    n: common_vendor.p({
      ["show-icon"]: true,
      scrollable: true,
      ["background-color"]: "#fff",
      color: "#000",
      text: "\u8FD9\u662F\u516C\u544A,\u8BF7\u5728\u7BA1\u7406\u540E\u53F0\u8BBE\u7F6E!"
    }),
    o: common_vendor.t($data.shoulu),
    p: $data.backTopValue
  }, $data.backTopValue ? {
    q: common_vendor.o((...args) => $options.xhj && $options.xhj(...args))
  } : {}, {
    r: common_vendor.f($data.dataa, (item, index, i0) => {
      return common_vendor.e({
        a: item.cover != ""
      }, item.cover != "" ? {
        b: item.cover,
        c: common_vendor.t($options.delHtmlTag(item.description)),
        d: common_vendor.t(item.author_name),
        e: common_vendor.t(item.views),
        f: common_vendor.t(item.comnum),
        g: common_vendor.o(($event) => $options.toInfo(item.id, item.url)),
        h: "02d9e768-6-" + i0,
        i: common_vendor.p({
          title: item.title,
          istop: item.top,
          ["sub-title"]: item.date,
          extra: item.sort_name,
          cover: _ctx.cover
        })
      } : {}, {
        j: item.cover == ""
      }, item.cover == "" ? {
        k: common_vendor.t($options.delHtmlTag(item.description)),
        l: common_vendor.t(item.author_name),
        m: common_vendor.t(item.views),
        n: common_vendor.t(item.comnum),
        o: common_vendor.o(($event) => $options.toInfo(item.id, item.url)),
        p: "02d9e768-8-" + i0 + "," + ("02d9e768-7-" + i0),
        q: common_vendor.p({
          title: item.title,
          istop: item.top,
          ["sub-title"]: item.date,
          extra: item.sort_name,
          thumbnail: item.cover
        }),
        r: "02d9e768-7-" + i0,
        s: common_vendor.p({
          type: "line"
        })
      } : {}, {
        t: index
      });
    }),
    s: common_vendor.p({
      color: "#007AFF",
      status: $data.status
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/index/index.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
