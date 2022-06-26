"use strict";
var common_vendor = require("../../../../common/vendor.js");
var uni_modules_mpHtml_components_mpHtml_parser = require("./parser.js");
var uni_modules_mpHtml_components_mpHtml_markdown_index = require("./markdown/index.js");
var uni_modules_mpHtml_components_mpHtml_emoji_index = require("./emoji/index.js");
var uni_modules_mpHtml_components_mpHtml_highlight_index = require("./highlight/index.js");
var uni_modules_mpHtml_components_mpHtml_search_index = require("./search/index.js");
require("./markdown/marked.min.js");
require("./highlight/prism.min.js");
const node = () => "./node/node.js";
const plugins = [uni_modules_mpHtml_components_mpHtml_markdown_index.Markdown, uni_modules_mpHtml_components_mpHtml_emoji_index.Emoji, uni_modules_mpHtml_components_mpHtml_highlight_index.Highlight, uni_modules_mpHtml_components_mpHtml_search_index.Search];
const _sfc_main = {
  name: "mp-html",
  data() {
    return {
      tooltip: null,
      slider: null,
      nodes: []
    };
  },
  props: {
    editable: Boolean,
    placeholder: String,
    markdown: Boolean,
    containerStyle: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    copyLink: {
      type: [Boolean, String],
      default: true
    },
    domain: String,
    errorImg: {
      type: String,
      default: ""
    },
    lazyLoad: {
      type: [Boolean, String],
      default: false
    },
    loadingImg: {
      type: String,
      default: ""
    },
    pauseVideo: {
      type: [Boolean, String],
      default: true
    },
    previewImg: {
      type: [Boolean, String],
      default: true
    },
    scrollTable: [Boolean, String],
    selectable: [Boolean, String],
    setTitle: {
      type: [Boolean, String],
      default: true
    },
    showImgMenu: {
      type: [Boolean, String],
      default: true
    },
    tagStyle: Object,
    useAnchor: [Boolean, Number]
  },
  emits: ["load", "ready", "imgtap", "linktap", "play", "error"],
  components: {
    node
  },
  watch: {
    editable(val) {
      this.setContent(val ? this.content : this.getContent());
      if (!val)
        this._maskTap();
    },
    content(content) {
      this.setContent(content);
    }
  },
  created() {
    this.plugins = [];
    for (let i = plugins.length; i--; ) {
      this.plugins.push(new plugins[i](this));
    }
  },
  mounted() {
    if ((this.content || this.editable) && !this.nodes.length) {
      this.setContent(this.content);
    }
  },
  beforeDestroy() {
    this._hook("onDetached");
    clearInterval(this._timer);
  },
  methods: {
    _containTap() {
      if (!this._lock && !this.slider) {
        this._edit = void 0;
        this._maskTap();
      }
    },
    _tooltipTap(e) {
      this._tooltipcb(e.currentTarget.dataset.i);
      this.$set(this, "tooltip", null);
    },
    _sliderChanging(e) {
      this._slideringcb(e.detail.value);
    },
    _sliderChange(e) {
      this._slidercb(e.detail.value);
    },
    in(page, selector, scrollTop) {
      if (page && selector && scrollTop) {
        this._in = {
          page,
          selector,
          scrollTop
        };
      }
    },
    navigateTo(id, offset) {
      id = this._ids[decodeURI(id)] || id;
      return new Promise((resolve, reject) => {
        if (!this.useAnchor) {
          reject(Error("Anchor is disabled"));
          return;
        }
        offset = offset || parseInt(this.useAnchor) || 0;
        let deep = " ";
        deep = ">>>";
        const selector = common_vendor.index.createSelectorQuery().in(this._in ? this._in.page : this).select((this._in ? this._in.selector : "._root") + (id ? `${deep}#${id}` : "")).boundingClientRect();
        if (this._in) {
          selector.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect();
        } else {
          selector.selectViewport().scrollOffset();
        }
        selector.exec((res) => {
          if (!res[0]) {
            reject(Error("Label not found"));
            return;
          }
          const scrollTop = res[1].scrollTop + res[0].top - (res[2] ? res[2].top : 0) + offset;
          if (this._in) {
            this._in.page[this._in.scrollTop] = scrollTop;
          } else {
            common_vendor.index.pageScrollTo({
              scrollTop,
              duration: 300
            });
          }
          resolve();
        });
      });
    },
    getText(nodes) {
      let text = "";
      (function traversal(nodes2) {
        for (let i = 0; i < nodes2.length; i++) {
          const node2 = nodes2[i];
          if (node2.type === "text") {
            text += node2.text.replace(/&amp;/g, "&");
          } else if (node2.name === "br") {
            text += "\n";
          } else {
            const isBlock = node2.name === "p" || node2.name === "div" || node2.name === "tr" || node2.name === "li" || node2.name[0] === "h" && node2.name[1] > "0" && node2.name[1] < "7";
            if (isBlock && text && text[text.length - 1] !== "\n") {
              text += "\n";
            }
            if (node2.children) {
              traversal(node2.children);
            }
            if (isBlock && text[text.length - 1] !== "\n") {
              text += "\n";
            } else if (node2.name === "td" || node2.name === "th") {
              text += "	";
            }
          }
        }
      })(nodes || this.nodes);
      return text;
    },
    getRect() {
      return new Promise((resolve, reject) => {
        common_vendor.index.createSelectorQuery().in(this).select("#_root").boundingClientRect().exec((res) => res[0] ? resolve(res[0]) : reject(Error("Root label not found")));
      });
    },
    pauseMedia() {
      for (let i = (this._videos || []).length; i--; ) {
        this._videos[i].pause();
      }
    },
    setContent(content, append) {
      if (!append || !this.imgList) {
        this.imgList = [];
      }
      const nodes = new uni_modules_mpHtml_components_mpHtml_parser.Parser(this).parse(content);
      this.$set(this, "nodes", append ? (this.nodes || []).concat(nodes) : nodes);
      this._videos = [];
      this.$nextTick(() => {
        this._hook("onLoad");
        this.$emit("load");
      });
      let height;
      clearInterval(this._timer);
      this._timer = setInterval(() => {
        this.getRect().then((rect) => {
          if (rect.height === height) {
            this.$emit("ready", rect);
            clearInterval(this._timer);
          }
          height = rect.height;
        }).catch(() => {
        });
      }, 350);
    },
    _hook(name) {
      for (let i = plugins.length; i--; ) {
        if (this.plugins[i][name]) {
          this.plugins[i][name]();
        }
      }
    }
  }
};
if (!Array) {
  const _component_node = common_vendor.resolveComponent("node");
  _component_node();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.nodes[0]
  }, !$data.nodes[0] ? {} : {
    b: common_vendor.p({
      childs: $data.nodes,
      opts: [$props.lazyLoad, $props.loadingImg, $props.errorImg, $props.showImgMenu, $props.editable, $props.placeholder, "nodes"],
      name: "span"
    })
  }, {
    c: $data.tooltip
  }, $data.tooltip ? {
    d: common_vendor.f($data.tooltip.items, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index,
        c: index
      };
    }),
    e: common_vendor.o((...args) => $options._tooltipTap && $options._tooltipTap(...args)),
    f: common_vendor.s("top:" + $data.tooltip.top + "px")
  } : {}, {
    g: $data.slider
  }, $data.slider ? {
    h: $data.slider.value,
    i: $data.slider.min,
    j: $data.slider.max,
    k: common_vendor.o((...args) => $options._sliderChanging && $options._sliderChanging(...args)),
    l: common_vendor.o((...args) => $options._sliderChange && $options._sliderChange(...args)),
    m: common_vendor.s("top:" + $data.slider.top + "px")
  } : {}, {
    n: common_vendor.n(($props.selectable ? "_select " : "") + "_root"),
    o: common_vendor.s(($props.editable ? "position:relative;min-height:200px;" : "") + $props.containerStyle),
    p: common_vendor.o((...args) => $options._containTap && $options._containTap(...args))
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/uni_modules/mp-html/components/mp-html/mp-html.vue"]]);
wx.createComponent(Component);
