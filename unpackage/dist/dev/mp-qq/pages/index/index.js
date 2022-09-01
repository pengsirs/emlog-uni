"use strict";
var common_vendor = require("../../common/vendor.js");
var api = require("../../api.js");
var setting = require("../../setting.js");
const _sfc_main = {
  data() {
    return {
      dataa: [],
      avatarUrl: "../../static/logo.png",
      $req_time: "",
      $sign: "",
      page: 1,
      shoulu: "",
      description: "",
      di: false,
      backTopValue: false,
      onRefresh: false,
      status: "loading",
      blogSorts: [],
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
      blogAll: "",
      current: 0,
      scrollinto: "",
      appData: ""
    };
  },
  mounted() {
  },
  onLoad() {
    this.blog(1);
    this.getSorts();
    this.getData();
  },
  onShow() {
    var that = this;
    common_vendor.index.getStorage({
      key: "avatarUrl",
      success: function(res) {
        that.avatarUrl = res.data;
      }
    });
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
  onShareAppMessage(res) {
    if (res.from === "button") {
      console.log(res.target);
    }
    return {
      title: "\u5206\u4EAB\u597D\u73A9\u7684\u7A0B\u5E8F\uFF01",
      imageUrl: this.appData.data.shareimg,
      path: "pages/index/index"
    };
  },
  methods: {
    copyUrl() {
      common_vendor.index.setClipboardData({
        data: this.appData.data.downurl,
        success: function() {
          common_vendor.index.showModal({
            title: "\u6E29\u99A8\u63D0\u793A",
            content: "\u590D\u5236\u6210\u529F"
          });
        }
      });
    },
    copyQQ() {
      common_vendor.index.setClipboardData({
        data: this.appData.data.qq,
        success: function() {
          common_vendor.index.showModal({
            title: "\u6E29\u99A8\u63D0\u793A",
            content: "\u590D\u5236\u6210\u529F"
          });
        }
      });
    },
    async getData() {
      const res = await api.htRequest({
        url: "/index.php/index/index/get_miniapp",
        method: "POST",
        data: {
          setapi: setting.set.setapi
        }
      });
      this.appData = res.data;
      common_vendor.index.setStorage({
        key: "appData",
        data: res.data
      });
    },
    change(index, id) {
      common_vendor.index.navigateTo({
        url: "../sort-info/sort-info?id=" + id
      });
      this.current = index;
      this.scrollinto = "tab" + index;
    },
    onChangeTab(e) {
      this.change(e.detail.current);
    },
    getUser() {
      common_vendor.index.switchTab({
        url: "../home/home"
      });
    },
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
        url: "/pages/blog-info/blog-info?id=" + e + "&url=" + encodeURIComponent(u)
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
    async blogall() {
      const res = await api.myRequest({
        url: "/?rest-api=article_list",
        method: "GET",
        data: {
          count: 999
        }
      });
      this.blogAll = [...this.blogAll, ...res.data.data.articles];
    },
    async getSorts() {
      const res = await api.myRequest({
        url: "/?rest-api=sort_list",
        method: "GET"
      });
      this.blogSorts = res.data.data.sorts;
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_drawer2 = common_vendor.resolveComponent("uni-drawer");
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_icons2 + _easycom_uni_search_bar2 + _easycom_uni_drawer2 + _easycom_uni_notice_bar2 + _easycom_uni_load_more2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_drawer = () => "../../uni_modules/uni-drawer/components/uni-drawer/uni-drawer.js";
const _easycom_uni_notice_bar = () => "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_search_bar + _easycom_uni_drawer + _easycom_uni_notice_bar + _easycom_uni_load_more)();
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
    g: common_vendor.o(($event) => $options.getUser()),
    h: $data.avatarUrl,
    i: common_vendor.f($data.blogSorts, (s, index, i0) => {
      return {
        a: common_vendor.t(s.sortname),
        b: index,
        c: "tab" + index,
        d: common_vendor.n($data.current == index ? "active" : ""),
        e: common_vendor.o(($event) => $options.change(index, s.sid))
      };
    }),
    j: common_vendor.sr("showLeft", "02d9e768-3"),
    k: common_vendor.p({
      mode: "left",
      width: 320
    }),
    l: common_vendor.f($data.images, (item, index, i0) => {
      return {
        a: item,
        b: common_vendor.n("swiper-item" + index),
        c: index
      };
    }),
    m: common_vendor.f($data.opacity, (i, k0, i0) => {
      return {
        a: common_vendor.s(i)
      };
    }),
    n: common_vendor.p({
      ["show-icon"]: true,
      scrollable: true,
      ["background-color"]: "#fff",
      color: "#000",
      text: $data.appData.data.gonggao
    }),
    o: $data.appData.downurl != 1
  }, $data.appData.downurl != 1 ? {
    p: common_vendor.p({
      color: "#fd7081",
      type: "star-filled",
      size: "30"
    }),
    q: common_vendor.o(($event) => $options.copyUrl()),
    r: common_vendor.p({
      color: "#aaa",
      type: "circle-filled",
      size: "20"
    }),
    s: common_vendor.p({
      color: "#66ccff",
      type: "qq",
      size: "30"
    }),
    t: common_vendor.o(($event) => $options.copyQQ()),
    v: common_vendor.p({
      color: "#aaa",
      type: "circle-filled",
      size: "20"
    })
  } : {}, {
    w: $data.backTopValue
  }, $data.backTopValue ? {
    x: common_vendor.o((...args) => $options.xhj && $options.xhj(...args))
  } : {}, {
    y: common_vendor.f($data.dataa, (item, index, i0) => {
      return common_vendor.e({
        a: index % 5 == 0 && index != 0
      }, index % 5 == 0 && index != 0 ? {} : {}, {
        b: $options.getimg(item.description) || item.cover
      }, $options.getimg(item.description) || item.cover ? common_vendor.e({
        c: common_vendor.o(($event) => $options.imageError($event, index)),
        d: item.cover || $options.getimg(item.description),
        e: item.top == "y"
      }, item.top == "y" ? {} : {}, {
        f: common_vendor.t(item.title),
        g: common_vendor.t($options.delHtmlTag(item.description)),
        h: common_vendor.t(item.sort_name),
        i: "02d9e768-9-" + i0,
        j: common_vendor.p({
          type: "fire-filled",
          size: "17"
        }),
        k: common_vendor.t(item.views),
        l: "02d9e768-10-" + i0,
        m: common_vendor.p({
          type: "chat-filled",
          size: "17"
        }),
        n: common_vendor.t(item.comnum),
        o: common_vendor.o(($event) => $options.toInfo(item.id, item.url))
      }) : {}, {
        p: !$options.getimg(item.description) && item.cover == ""
      }, !$options.getimg(item.description) && item.cover == "" ? common_vendor.e({
        q: item.top == "y"
      }, item.top == "y" ? {} : {}, {
        r: common_vendor.t(item.title),
        s: common_vendor.t($options.delHtmlTag(item.description)),
        t: common_vendor.t(item.sort_name),
        v: "02d9e768-11-" + i0,
        w: common_vendor.p({
          type: "fire-filled",
          size: "17"
        }),
        x: common_vendor.t(item.views),
        y: "02d9e768-12-" + i0,
        z: common_vendor.p({
          type: "chat-filled",
          size: "17"
        }),
        A: common_vendor.t(item.comnum),
        B: common_vendor.o(($event) => $options.toInfo(item.id, item.url))
      }) : {}, {
        C: index
      });
    }),
    z: common_vendor.p({
      color: "#007AFF",
      status: $data.status
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/index/index.vue"]]);
_sfc_main.__runtimeHooks = 3;
qq.createPage(MiniProgramPage);
