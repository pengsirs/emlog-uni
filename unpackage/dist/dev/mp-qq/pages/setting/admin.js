"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value: ""
    };
  },
  onLoad() {
    var that = this;
    common_vendor.index.getStorage({
      key: "apikey",
      success: function(res) {
        that.value = res.data;
      }
    });
  },
  methods: {
    messageToggle(type, text) {
      this.msgType = type;
      this.messageText = `${text}`;
      this.$refs.message.open();
    },
    save() {
      var that = this;
      if (this.value == "") {
        this.messageToggle("error", "\u8F93\u5165\u4E0D\u80FD\u4E3A\u7A7A");
      } else {
        common_vendor.index.setStorage({
          key: "apikey",
          data: that.value,
          success(res) {
            that.messageToggle("success", "\u4FDD\u5B58\u6210\u529F");
          }
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_popup_message2 = common_vendor.resolveComponent("uni-popup-message");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_popup_message2 + _easycom_uni_popup2)();
}
const _easycom_uni_popup_message = () => "../../uni_modules/uni-popup/components/uni-popup-message/uni-popup-message.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_popup_message + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: _ctx.msgType,
      message: _ctx.messageText,
      duration: 2e3
    }),
    b: common_vendor.sr("message", "54f0c487-0"),
    c: common_vendor.p({
      type: "message"
    }),
    d: $data.value,
    e: common_vendor.o(($event) => $data.value = $event.detail.value),
    f: common_vendor.o(($event) => $options.save())
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/setting/admin.vue"]]);
qq.createPage(MiniProgramPage);
