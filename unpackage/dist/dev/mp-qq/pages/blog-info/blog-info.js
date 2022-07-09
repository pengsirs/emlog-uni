"use strict";
var common_vendor = require("../../common/vendor.js");
var api = require("../../api.js");
var setting = require("../../setting.js");
const _sfc_main = {
  data() {
    return {
      tagStyle: {
        blockquote: "max-width:100%;border-radius:5px;background:#eee;padding:5px;",
        table: "width:100%;border:1px #eee solid;",
        td: "border:1px #eee solid;text-align:center;",
        th: "border:1px #eee solid;background-color:#ffc09f;"
      },
      data: {},
      haibao: "",
      url: "",
      arrays: [0],
      content: "<div style='background:#eee;height:25px;width:50%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:20px;width:80%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:20px;width:70%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:20px;width:50%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:20px;width:90%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:20px;width:30%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:25px;width:50%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:250px;width:100%;border-radius:5px;margin:10px auto;'></div>"
    };
  },
  onLoad(option) {
    this.blog(option.id);
    this.id = option.id;
    this.url = option.url;
    this.show = !this.show;
    this.modeClass = "fade";
  },
  onShow() {
    var that = this;
    common_vendor.index.getStorage({
      key: "appData",
      success: function(res) {
        that.appData = res.data;
      },
      fail() {
        that.getData();
      }
    });
  },
  onShareAppMessage(res) {
    if (res.from === "button") {
      console.log(res.target);
    }
    return {
      title: this.data.title,
      imageUrl: this.data.cover || this.appData.data.shareimg,
      path: "pages/blog-info/blog-info?id=" + this.data.id + "&url=" + this.url
    };
  },
  methods: {
    weixin(scene) {
      common_vendor.index.share({
        provider: "weixin",
        scene,
        title: this.data.title,
        type: 0,
        href: this.url,
        imageUrl: this.data.cover || this.appData.data.shareimg,
        summary: "\u6211\u6B63\u5728\u67E5\u770B\u6587\u7AE0" + this.data.title + "\uFF0C\u8D76\u7D27\u8DDF\u6211\u4E00\u8D77\u6765\u4F53\u9A8C\uFF01",
        success: function(res) {
          console.log("success:" + JSON.stringify(res));
        },
        fail: function(err) {
          console.log("fail:" + JSON.stringify(err));
        }
      });
    },
    qq() {
      common_vendor.index.share({
        provider: "qq",
        type: 0,
        title: this.data.title,
        summary: "\u6211\u6B63\u5728\u67E5\u770B\u6587\u7AE0" + this.data.title + "\uFF0C\u8D76\u7D27\u8DDF\u6211\u4E00\u8D77\u6765\u4F53\u9A8C\uFF01",
        imageUrl: this.data.cover || this.appData.data.shareimg,
        href: this.url,
        success: function(res) {
          console.log("success:" + JSON.stringify(res));
        },
        fail: function(err) {
          console.log("fail:" + JSON.stringify(err));
        }
      });
    },
    home() {
      common_vendor.index.reLaunch({
        url: "../index/index"
      });
    },
    wenti() {
      common_vendor.index.navigateTo({
        url: "../about/help?id=" + this.id
      });
    },
    down() {
      common_vendor.index.navigateTo({
        url: "../down/down?id=" + this.id
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
    async blog(e) {
      var arrays = this.arrays;
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
      arrays = res.data.data.article.content.match(/<a (.*)a>/gi) ? res.data.data.article.content.match(/<a (.*)a>/gi) : "";
      for (var i = 0; i < arrays.length; i++) {
        if (arrays[i].indexOf("<img") == "-1") {
          console.log(arrays[i].indexOf("<img"));
          res.data.data.article.content = res.data.data.article.content.replace(arrays[i], '<a class="aaa">\u8BF7\u67E5\u770B\u9644\u4EF6\u8BF4\u660E</a> ');
        }
      }
      this.data = res.data.data.article;
      console.log();
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_mp_html2 = common_vendor.resolveComponent("mp-html");
  const _easycom_uni_transition2 = common_vendor.resolveComponent("uni-transition");
  const _component_uni_collapse_items = common_vendor.resolveComponent("uni-collapse-items");
  const _component_uni_collapses = common_vendor.resolveComponent("uni-collapses");
  (_easycom_uni_icons2 + _easycom_mp_html2 + _easycom_uni_transition2 + _component_uni_collapse_items + _component_uni_collapses)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_mp_html = () => "../../uni_modules/mp-html/components/mp-html/mp-html.js";
const _easycom_uni_transition = () => "../../uni_modules/uni-transition/components/uni-transition/uni-transition.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_mp_html + _easycom_uni_transition)();
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
    e: common_vendor.t($data.data.views || "\u6682\u65E0\u6D4F\u89C8"),
    f: common_vendor.p({
      color: "blue",
      type: "calendar",
      size: "14"
    }),
    g: common_vendor.t($data.data.date || "1970-01-01 00:00:00"),
    h: common_vendor.p({
      ["lozy-load"]: "true",
      ["container-style"]: "overflow: hidden;",
      selectable: "true",
      ["tag-style"]: $data.tagStyle,
      content: $data.data.content
    }),
    i: common_vendor.t($data.data.title),
    j: common_vendor.t($data.data.author_name || "\u4F5C\u8005"),
    k: common_vendor.t($data.data.author_name || "\u4F5C\u8005"),
    l: common_vendor.t($data.data.author_name || "\u4F5C\u8005"),
    m: common_vendor.sr("ani", "67bc634c-0"),
    n: common_vendor.p({
      ["custom-class"]: "transition",
      ["mode-class"]: _ctx.modeClass,
      styles: _ctx.styles,
      show: _ctx.show
    }),
    o: common_vendor.p({
      type: "home-filled",
      color: "#564aff",
      size: "30"
    }),
    p: common_vendor.o(($event) => $options.home()),
    q: common_vendor.p({
      type: "chat-filled",
      color: "#fd7058",
      size: "30"
    }),
    r: common_vendor.o(($event) => $options.wenti()),
    s: common_vendor.p({
      type: "download-filled",
      color: "#fec855",
      size: "30"
    }),
    t: common_vendor.o(($event) => $options.down()),
    v: common_vendor.p({
      type: "paperplane-filled",
      color: "#42ff48",
      size: "30"
    }),
    w: common_vendor.p({
      title: "\u6587\u7AE0\u6269\u5C55",
      ["show-animation"]: true
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/blog-info/blog-info.vue"]]);
_sfc_main.__runtimeHooks = 2;
qq.createPage(MiniProgramPage);
