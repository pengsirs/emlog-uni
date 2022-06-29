"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "UniCard",
  emits: ["click"],
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    istop: {
      type: String,
      default: ""
    },
    padding: {
      type: String,
      default: "10px"
    },
    margin: {
      type: String,
      default: "15px"
    },
    spacing: {
      type: String,
      default: "0 10px"
    },
    extra: {
      type: String,
      default: ""
    },
    cover: {
      type: String,
      default: ""
    },
    thumbnail: {
      type: String,
      default: ""
    },
    isFull: {
      type: Boolean,
      default: false
    },
    isShadow: {
      type: Boolean,
      default: true
    },
    shadow: {
      type: String,
      default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick(type) {
      this.$emit("click", type);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.cover
  }, $props.cover ? {
    b: common_vendor.o(($event) => $options.onClick("cover")),
    c: $props.cover
  } : {}, {
    d: $props.title || $props.extra
  }, $props.title || $props.extra ? common_vendor.e({
    e: $props.thumbnail
  }, $props.thumbnail ? {
    f: $props.thumbnail
  } : {}, {
    g: $props.istop == "y"
  }, $props.istop == "y" ? {} : {}, {
    h: common_vendor.t($props.title),
    i: $props.title && $props.subTitle
  }, $props.title && $props.subTitle ? {
    j: common_vendor.t($props.subTitle)
  } : {}, {
    k: common_vendor.o(($event) => $options.onClick("title")),
    l: common_vendor.t($props.extra),
    m: common_vendor.o(($event) => $options.onClick("extra"))
  }) : {}, {
    n: $props.padding,
    o: common_vendor.o(($event) => $options.onClick("content")),
    p: common_vendor.o(($event) => $options.onClick("actions")),
    q: $props.isFull ? 1 : "",
    r: $props.isShadow ? 1 : "",
    s: $props.border ? 1 : "",
    t: $props.isFull ? 0 : $props.margin,
    v: $props.spacing,
    w: $props.isShadow ? $props.shadow : ""
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);
qq.createComponent(Component);
