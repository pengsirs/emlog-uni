"use strict";
var common_vendor = require("../../common/vendor.js");
var api = require("../../api.js");
var setting = require("../../setting.js");
const _sfc_main = {
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "\u5F00\u59CB\u8F93\u5165..."
    }
  },
  data() {
    return {
      readOnly: false,
      formats: {},
      htmls: "",
      title: "",
      excerpt: "",
      sort: 0,
      cover: [],
      flg: false,
      tags: "",
      sorts: ["\u672A\u9009\u62E9\u5206\u7C7B", "\u5206\u7C7B\u4E00", "\u5206\u7C7B\u4E8C", "\u5206\u7C7B\u4E09"]
    };
  },
  created() {
  },
  onShow() {
    var that = this;
    common_vendor.index.getStorage({
      key: "apikey",
      success: function(res) {
        console.log("success");
        if (setting.set.$apikey == res.data) {
          that.flg = true;
        }
      },
      fail() {
        that.flg = false;
      }
    });
  },
  onPullDownRefresh() {
    var that = this;
    common_vendor.index.getStorage({
      key: "apikey",
      success: function(res) {
        console.log("success");
        if (setting.set.$apikey == res.data) {
          that.flg = true;
        } else {
          that.flg = false;
        }
      }
    });
    common_vendor.index.stopPullDownRefresh();
  },
  methods: {
    setting() {
      common_vendor.index.navigateTo({
        url: "../setting/admin"
      });
    },
    messageToggle(type, text) {
      this.msgType = type;
      this.messageText = `${text}`;
      this.$refs.message.open();
    },
    bindPickerChange: function(e) {
      console.log("picker\u53D1\u9001\u9009\u62E9\u6539\u53D8\uFF0C\u643A\u5E26\u503C\u4E3A", e.detail.value);
      this.sort = e.detail.value;
    },
    change(e) {
    },
    async fabu() {
      var title = this.$data.title;
      var htmls = this.$data.htmls;
      var excerpt = this.$data.excerpt;
      var cover = this.$data.cover;
      var time = new Date();
      var YYYY = time.getFullYear();
      var MM = time.getMonth() + 1;
      var DD = time.getDate();
      var hh = time.getHours();
      var mm = time.getMinutes();
      var ss = time.getSeconds();
      var $req_time = String((time.getTime() / 1e3).toFixed(0));
      var md = $req_time + setting.set.$apikey;
      var $sign = common_vendor.md5(md);
      const res = await api.myRequest({
        url: "/?rest-api=article_post",
        data: {
          req_sign: $sign,
          req_time: $req_time,
          title,
          content: htmls,
          excerpt,
          cover: cover[0] || "",
          sort_id: "1",
          author_uid: "1",
          post_date: YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss
        }
      });
      if (res.data.msg == "ok") {
        common_vendor.index.showToast({
          title: "\u53D1\u5E03\u6210\u529F"
        });
      }
      this.dataa = res.data;
      console.log(this.dataa);
    },
    editText(res) {
      this.$emit("editorChange", res.detail.html);
      this.htmls = res.detail.html;
    },
    readOnlyChange() {
      this.readOnly = !this.readOnly;
    },
    onEditorReady() {
      common_vendor.index.createSelectorQuery().select("#editor").context((res) => {
        this.editorCtx = res.context;
      }).exec();
    },
    undo() {
      this.editorCtx.undo();
    },
    redo() {
      this.editorCtx.redo();
    },
    format(e) {
      let {
        name,
        value
      } = e.target.dataset;
      if (!name)
        return;
      this.editorCtx.format(name, value);
    },
    onStatusChange(e) {
      const formats = e.detail;
      this.formats = formats;
    },
    insertDivider() {
      this.editorCtx.insertDivider({
        success: function() {
          console.log("insert divider success");
        }
      });
    },
    clear() {
      this.editorCtx.clear({
        success: function(res) {
          console.log("clear success");
        }
      });
    },
    removeFormat() {
      this.editorCtx.removeFormat();
    },
    insertDate() {
      const date = new Date();
      const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
      this.editorCtx.insertText({
        text: formatDate
      });
    },
    insertImage() {
      const that = this;
      common_vendor.index.chooseImage({
        count: 1,
        success: (res) => {
          common_vendor.index.showLoading({
            title: "\u6B63\u5728\u4E0A\u4F20..."
          });
          common_vendor.index.uploadFile({
            url: "http://tp.hkiii.cn/index.php/index/index/img",
            filePath: res.tempFilePaths[0],
            name: "file",
            formData: {
              ak: setting.set.$accessKey,
              sk: setting.set.$secretKey,
              kj: setting.set.$bucket
            },
            success: function(res2) {
              var data = JSON.parse(res2.data);
              that.editorCtx.insertImage({
                src: data,
                alt: data,
                success: function() {
                  that.cover.push(data);
                  that.messageToggle("success", "\u4E0A\u4F20\u6210\u529F");
                  common_vendor.index.hideLoading();
                }
              });
            },
            fail: function() {
              that.messageToggle("error", "\u4E0A\u4F20\u5931\u8D25");
              common_vendor.index.hideLoading();
            }
          });
        }
      });
    }
  },
  onLoad() {
    common_vendor.index.loadFontFace({
      family: "Pacifico",
      source: 'url("./Pacifico.ttf")'
    });
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_collapse_item2 = common_vendor.resolveComponent("uni-collapse-item");
  const _easycom_uni_collapse2 = common_vendor.resolveComponent("uni-collapse");
  const _easycom_uni_popup_message2 = common_vendor.resolveComponent("uni-popup-message");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_easyinput2 + _easycom_uni_collapse_item2 + _easycom_uni_collapse2 + _easycom_uni_popup_message2 + _easycom_uni_popup2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_collapse_item = () => "../../uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.js";
const _easycom_uni_collapse = () => "../../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.js";
const _easycom_uni_popup_message = () => "../../uni_modules/uni-popup/components/uni-popup-message/uni-popup-message.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_collapse_item + _easycom_uni_collapse + _easycom_uni_popup_message + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.flg
  }, $data.flg ? {
    b: $data.title,
    c: common_vendor.o(($event) => $data.title = $event.detail.value),
    d: common_vendor.n($data.formats.bold ? "ql-active" : ""),
    e: common_vendor.n($data.formats.italic ? "ql-active" : ""),
    f: common_vendor.n($data.formats.underline ? "ql-active" : ""),
    g: common_vendor.n($data.formats.strike ? "ql-active" : ""),
    h: common_vendor.n($data.formats.align === "left" ? "ql-active" : ""),
    i: common_vendor.n($data.formats.align === "center" ? "ql-active" : ""),
    j: common_vendor.n($data.formats.align === "right" ? "ql-active" : ""),
    k: common_vendor.n($data.formats.list === "ordered" ? "ql-active" : ""),
    l: common_vendor.n($data.formats.list === "bullet" ? "ql-active" : ""),
    m: common_vendor.o((...args) => $options.undo && $options.undo(...args)),
    n: common_vendor.o((...args) => $options.redo && $options.redo(...args)),
    o: common_vendor.o((...args) => $options.insertDivider && $options.insertDivider(...args)),
    p: common_vendor.o((...args) => $options.insertImage && $options.insertImage(...args)),
    q: common_vendor.n($data.formats.header === 1 ? "ql-active" : ""),
    r: common_vendor.n($data.formats.header === 2 ? "ql-active" : ""),
    s: common_vendor.n($data.formats.header === 3 ? "ql-active" : ""),
    t: common_vendor.o((...args) => $options.format && $options.format(...args)),
    v: common_vendor.o((...args) => $options.editText && $options.editText(...args)),
    w: $props.placeholder,
    x: common_vendor.o((...args) => $options.onStatusChange && $options.onStatusChange(...args)),
    y: $data.readOnly,
    z: common_vendor.o((...args) => $options.onEditorReady && $options.onEditorReady(...args)),
    A: common_vendor.o(($event) => $data.excerpt = $event),
    B: common_vendor.p({
      type: "textarea",
      placeholder: "\u8BF7\u8F93\u5165\u6587\u7AE0\u63CF\u8FF0,\u53EF\u7559\u7A7A",
      modelValue: $data.excerpt
    }),
    C: common_vendor.p({
      ["show-animation"]: true,
      title: "\u6587\u7AE0\u63CF\u8FF0"
    }),
    D: common_vendor.t($data.sorts[$data.sort]),
    E: common_vendor.o((...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
    F: $data.sort,
    G: $data.sorts,
    H: common_vendor.p({
      ["show-animation"]: true,
      title: "\u9009\u62E9\u5206\u7C7B"
    }),
    I: common_vendor.o(($event) => $data.tags = $event),
    J: common_vendor.p({
      type: "text",
      placeholder: "\u6587\u7AE0\u6807\u7B7E\uFF0C\u591A\u4E2A\u534A\u89D2\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1APHP,MySQL",
      modelValue: $data.tags
    }),
    K: common_vendor.p({
      ["show-animation"]: true,
      title: "\u6587\u7AE0\u6807\u7B7E"
    }),
    L: common_vendor.o($options.change),
    M: common_vendor.o(($event) => _ctx.accordionVal = $event),
    N: common_vendor.p({
      accordion: true,
      modelValue: _ctx.accordionVal
    }),
    O: common_vendor.o(($event) => $options.fabu())
  } : {}, {
    P: common_vendor.p({
      type: _ctx.msgType,
      message: _ctx.messageText,
      duration: 2e3
    }),
    Q: common_vendor.sr("message", "277d7266-6"),
    R: common_vendor.p({
      type: "message"
    }),
    S: !$data.flg
  }, !$data.flg ? {
    T: common_vendor.o(($event) => $options.setting())
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/xia-editor/xia-editor.vue"]]);
qq.createPage(MiniProgramPage);
