"use strict";
var common_vendor = require("../../common/vendor.js");
var api = require("../../api.js");
var setting = require("../../setting.js");
const _sfc_main = {
  data() {
    return {
      shoulu: "",
      sogo: "",
      height: "0%",
      avatarUrl: "../../static/logo.png",
      nickName: "\u70B9\u51FB\u767B\u5F55",
      homelist: [
        {
          img: "../../static/home/xitongshezhi.png",
          text: "\u7A0B\u5E8F\u8BBE\u7F6E",
          url: "setting"
        },
        {
          img: "../../static/home/bangzhuzhongxin.png",
          text: "\u95EE\u9898\u53CD\u9988",
          url: "../about/help"
        },
        {
          img: "../../static/home/guanyuwomen.png",
          text: "\u5173\u4E8E\u6211\u4EEC",
          url: "../about/about"
        },
        {
          img: "../../static/home/zhanghuguanli.png",
          text: "\u7A0B\u5E8F\u7BA1\u7406",
          url: "../setting/admin"
        }
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
  },
  onShow() {
    var that = this;
    common_vendor.index.getStorage({
      key: "avatarUrl",
      success: function(res) {
        that.avatarUrl = res.data;
      }
    });
    common_vendor.index.getStorage({
      key: "nickName",
      success: function(res) {
        that.nickName = res.data;
      }
    });
  },
  onLoad() {
    this.height = "height:0%";
    var that = this;
    common_vendor.index.getStorage({
      key: "shoulu",
      success: function(res) {
        that.shoulu = res.data;
      },
      fail: function() {
        that.baidu("/baidupages/index", "shoulu");
      }
    });
    common_vendor.index.getStorage({
      key: "sogo",
      success: function(res) {
        that.sogo = res.data;
      },
      fail: function() {
        that.baidu("/sogoupages/index", "sogo");
      }
    });
  },
  methods: {
    close() {
      this.height = "height:0%";
    },
    login() {
      this.height = "height:40%";
    },
    getUser(app) {
      var that = this;
      common_vendor.index.login({
        provider: app,
        success: function(loginRes) {
          console.log(loginRes.authResult);
          common_vendor.index.getUserInfo({
            provider: app,
            success: function(infoRes) {
              that.avatarUrl = infoRes.userInfo.avatarUrl;
              that.nickName = infoRes.userInfo.nickName;
              common_vendor.index.setStorage({
                key: "nickName",
                data: infoRes.userInfo.nickName
              });
              common_vendor.index.setStorage({
                key: "avatarUrl",
                data: infoRes.userInfo.avatarUrl
              });
            }
          });
        }
      });
      this.height = "height:0%";
    },
    clear() {
      common_vendor.index.showModal({
        title: "\u6E29\u99A8\u63D0\u793A",
        content: "\u8FD9\u6837\u4F1A\u6E05\u7A7A\u60A8\u7684\u4E2A\u4EBA\u8BBE\u7F6E\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF01",
        success: function(res) {
          if (res.confirm) {
            common_vendor.index.clearStorage();
            common_vendor.index.showToast({
              title: "\u6E05\u9664\u6210\u529F",
              duration: 2e3
            });
            common_vendor.index.switchTab({
              url: "../index/index"
            });
          } else if (res.cancel) {
            console.log("\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
          }
        }
      });
    },
    about() {
      common_vendor.index.navigateTo({
        url: "../about/about"
      });
    },
    shua(b) {
      var that = this;
      common_vendor.index.showModal({
        title: "\u6E29\u99A8\u63D0\u793A",
        content: "\u786E\u5B9A\u8981\u5237\u65B0\u5417\uFF1F\uFF08\u8FC7\u591A\u5237\u65B0\u4F1A\u9020\u6210\u8D44\u6E90\u6D6A\u8D39\uFF09",
        success: function(res) {
          if (res.confirm) {
            if (b == "baidu") {
              that.baidu("/baidupages/index", "shoulu");
            } else if (b == "sogo") {
              that.baidu("/sogoupages/index", "sogo");
            }
          } else if (res.cancel) {
            console.log("\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
          }
        }
      });
    },
    go(url) {
      if (url == "setting") {
        common_vendor.index.openSetting({});
      } else {
        common_vendor.index.navigateTo({
          url
        });
      }
    },
    async baidu(u, k) {
      var urlNoProtocol = setting.set.url.replace(/^https?\:\/\//i, "");
      const res = await api.apiRequest({
        url: u,
        method: "GET",
        data: {
          key: setting.set.tiankey,
          domain: urlNoProtocol
        }
      });
      common_vendor.index.setStorage({
        key: k,
        data: res.data.newslist[0].count
      });
      this[k] = res.data.newslist[0].count;
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.avatarUrl,
    b: common_vendor.t($data.nickName),
    c: common_vendor.o(($event) => $options.login()),
    d: common_vendor.f($data.opacity, (i, k0, i0) => {
      return {
        a: common_vendor.s(i)
      };
    }),
    e: common_vendor.f($data.homelist, (i, k0, i0) => {
      return {
        a: i.img,
        b: common_vendor.t(i.text),
        c: common_vendor.o(($event) => $options.go(i.url))
      };
    }),
    f: common_vendor.p({
      color: "#88CFFF",
      type: "vip-filled",
      size: "30"
    }),
    g: common_vendor.t($data.shoulu || "\u83B7\u53D6\u4E2D..."),
    h: common_vendor.o(($event) => $options.shua("baidu")),
    i: common_vendor.p({
      color: "#aaa",
      type: "refreshempty",
      size: "20"
    }),
    j: common_vendor.p({
      color: "#E3BDA4",
      type: "color-filled",
      size: "30"
    }),
    k: common_vendor.t($data.sogo || "\u83B7\u53D6\u4E2D..."),
    l: common_vendor.o(($event) => $options.shua("sogo")),
    m: common_vendor.p({
      color: "#aaa",
      type: "refreshempty",
      size: "20"
    }),
    n: common_vendor.o(($event) => $options.clear()),
    o: common_vendor.o(($event) => $options.about()),
    p: common_vendor.p({
      type: "closeempty",
      size: "30"
    }),
    q: common_vendor.o(($event) => $options.close()),
    r: common_vendor.p({
      type: "weixin",
      color: "#04BE02",
      size: "16"
    }),
    s: common_vendor.o(($event) => $options.getUser("weixin")),
    t: common_vendor.p({
      type: "qq",
      color: "#66ccff",
      size: "16"
    }),
    v: common_vendor.o(($event) => $options.getUser("qq")),
    w: common_vendor.s($data.height)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/home/home.vue"]]);
qq.createPage(MiniProgramPage);
