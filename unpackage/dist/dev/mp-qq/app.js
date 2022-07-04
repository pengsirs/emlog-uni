"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/xia-editor/xia-editor.js";
  "./pages/blog-info/blog-info.js";
  "./pages/about/about.js";
  "./pages/sort-info/sort-info.js";
  "./pages/home/home.js";
  "./pages/search/search.js";
  "./pages/setting/admin.js";
  "./pages/about/help.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("onShow");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
