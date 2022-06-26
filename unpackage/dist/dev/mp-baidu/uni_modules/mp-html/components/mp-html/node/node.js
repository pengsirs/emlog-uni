"use strict";
var common_vendor = require("../../../../../common/vendor.js");
var block0 = {};
function getTop(e) {
  let top;
  top = e.detail.y;
  if (top - e.currentTarget.offsetTop < 150)
    top = e.currentTarget.offsetTop;
  if (top < 30)
    top += 70;
  return top - 30;
}
const node = () => Promise.resolve().then(function() {
  return L1VzZXJzL3Blbmdzb25nL0Rvd25sb2Fkcy9XZWIvdW5pLWFwcC9kZW1vMi91bmlfbW9kdWxlcy9tcC1odG1sL2NvbXBvbmVudHMvbXAtaHRtbC9ub2RlL25vZGUudnVl;
});
const _sfc_main = {
  name: "node",
  options: {},
  data() {
    return {
      ctrl: {}
    };
  },
  props: {
    name: String,
    attrs: {
      type: Object,
      default() {
        return {};
      }
    },
    childs: Array,
    opts: Array
  },
  components: {
    node
  },
  mounted() {
    this.$nextTick(() => {
      for (this.root = this.$parent; this.root.$options.name !== "mp-html"; this.root = this.root.$parent)
        ;
    });
  },
  beforeDestroy() {
    if (this.root._edit === this) {
      this.root._edit = void 0;
    }
  },
  methods: {
    copyCode(e) {
      common_vendor.index.showActionSheet({
        itemList: ["\u590D\u5236\u4EE3\u7801"],
        success: () => common_vendor.index.setClipboardData({
          data: e.currentTarget.dataset.content
        })
      });
    },
    editStart(e) {
      if (this.opts[4]) {
        const i = e.currentTarget.dataset.i;
        if (!this.ctrl["e" + i]) {
          this.$set(this.ctrl, "e" + i, 1);
          setTimeout(() => {
            this.root._mask.push(() => this.$set(this.ctrl, "e" + i, 0));
          }, 50);
          this.root._edit = this;
          this.i = i;
          this.cursor = this.childs[i].text.length;
        } else {
          this.root._mask.pop();
          this.root._maskTap();
          this.$set(this.ctrl, "e" + i, 2);
          setTimeout(() => {
            this.$set(this.ctrl, "e" + i, 3);
          }, 50);
        }
      }
    },
    editInput(e) {
      const i = e.target.dataset.i;
      const value = e.detail.value.replace(/ {2,}/, ($) => {
        let res = "\xA0";
        for (let i2 = 1; i2 < $.length; i2++) {
          res += "\xA0";
        }
        return res;
      });
      this.root._editVal(`${this.opts[6]}.${i}.text`, this.childs[i].text, value);
      this.cursor = e.detail.cursor;
    },
    editEnd(e) {
      const i = e.target.dataset.i;
      this.$set(this.ctrl, "e" + i, 0);
      this.root._setData(`${this.opts[6]}.${i}.text`, e.detail.value);
      if (e.detail.cursor !== void 0) {
        this.cursor = e.detail.cursor;
      }
    },
    insert(node2) {
      setTimeout(() => {
        const childs = this.childs.slice(0);
        if (!childs[this.i]) {
          childs.push(node2);
        } else if (childs[this.i].text) {
          const text = childs[this.i].text;
          const list = [];
          if (this.cursor) {
            list.push({
              type: "text",
              text: text.substring(0, this.cursor)
            });
          }
          list.push(node2);
          if (this.cursor < text.length) {
            list.push({
              type: "text",
              text: text.substring(this.cursor)
            });
          }
          childs.splice(this.i, 1, ...list);
        } else {
          childs.splice(parseInt(this.i) + 1, 0, node2);
        }
        this.root._editVal(this.opts[6], this.childs, childs, true);
        this.i = parseInt(this.i) + 1;
      }, 200);
    },
    remove(i) {
      const arr = this.childs.slice(0);
      const delEle = arr.splice(i, 1)[0];
      if (delEle.name === "img" || delEle.name === "video" || delEle.name === "audio") {
        let src = delEle.attrs.src;
        if (delEle.src) {
          src = delEle.src.length === 1 ? delEle.src[0] : delEle.src;
        }
        this.root.$emit("remove", {
          type: delEle.name,
          src
        });
      }
      this.root._edit = void 0;
      this.root._maskTap();
      this.root._editVal(this.opts[6], this.childs, arr, true);
    },
    nodeTap(e) {
      if (this.opts[4]) {
        if (this.root._lock)
          return;
        this.root._lock = true;
        setTimeout(() => {
          this.root._lock = false;
        }, 50);
        if (this.ctrl["e" + this.i] === 3)
          return;
        this.root._maskTap();
        this.root._edit = this;
        let start = this.opts[6].lastIndexOf("children.");
        if (start !== -1) {
          start += 9;
        } else {
          start = 6;
        }
        const i = parseInt(this.opts[6].substring(start, this.opts[6].lastIndexOf(".children")));
        let parent = this.$parent;
        while (parent && parent.$options.name !== "node") {
          parent = parent.$parent;
        }
        if (!parent || this.opts[6].length - parent.opts[6].length > 15)
          return;
        this.$set(this.ctrl, "root", 1);
        this.root._mask.push(() => this.$set(this.ctrl, "root", 0));
        if (this.childs.length === 1 && this.childs[0].type === "text" && !this.ctrl.e0) {
          this.$set(this.ctrl, "e0", 1);
          this.root._mask.push(() => this.$set(this.ctrl, "e0", 0));
          this.i = 0;
          this.cursor = this.childs[0].text.length;
        }
        const items = this.root._getItem(parent.childs[i], i !== 0, i !== parent.childs.length - 1);
        this.root._tooltip({
          top: getTop(e),
          items,
          success: (tapIndex) => {
            if (items[tapIndex] === "\u5927\u5C0F") {
              const style = parent.childs[i].attrs.style || "";
              let value = style.match(/;font-size:([0-9]+)px/);
              if (value) {
                value = parseInt(value[1]);
              } else {
                value = 16;
              }
              this.root._slider({
                min: 10,
                max: 30,
                value,
                top: getTop(e),
                changing: (val) => {
                  if (Math.abs(val - value) > 2) {
                    parent.changeStyle("font-size", i, val + "px", value + "px");
                    value = e.detail.value;
                  }
                },
                change: (val) => {
                  if (val !== value) {
                    parent.changeStyle("font-size", i, val + "px", value + "px");
                  }
                  this.root._editVal(`${parent.opts[6]}.${i}.attrs.style`, style, parent.childs[i].attrs.style);
                }
              });
            } else if (items[tapIndex] === "\u4E0A\u79FB" || items[tapIndex] === "\u4E0B\u79FB") {
              const arr = parent.childs.slice(0);
              const item = arr[i];
              if (items[tapIndex] === "\u4E0A\u79FB") {
                arr[i] = arr[i - 1];
                arr[i - 1] = item;
              } else {
                arr[i] = arr[i + 1];
                arr[i + 1] = item;
              }
              this.root._editVal(parent.opts[6], parent.childs, arr, true);
            } else if (items[tapIndex] === "\u5220\u9664") {
              parent.remove(i);
            } else {
              const style = parent.childs[i].attrs.style || "";
              let newStyle = "";
              const item = items[tapIndex];
              let name;
              let value;
              if (item === "\u659C\u4F53") {
                name = "font-style";
                value = "italic";
              } else if (item === "\u7C97\u4F53") {
                name = "font-weight";
                value = "bold";
              } else if (item === "\u4E0B\u5212\u7EBF") {
                name = "text-decoration";
                value = "underline";
              } else if (item === "\u5C45\u4E2D") {
                name = "text-align";
                value = "center";
              } else if (item === "\u7F29\u8FDB") {
                name = "text-indent";
                value = "2em";
              }
              if (style.includes(name + ":")) {
                newStyle = style.replace(new RegExp(name + ":[^;]+"), "");
              } else {
                newStyle = style + ";" + name + ":" + value;
              }
              this.root._editVal(`${parent.opts[6]}.${i}.attrs.style`, style, newStyle, true);
            }
          }
        });
      }
    },
    mediaTap(e) {
      if (this.opts[4]) {
        const i = e.target.dataset.i;
        const node2 = this.childs[i];
        const items = this.root._getItem(node2);
        this.root._edit = this;
        this.i = i;
        this.root._tooltip({
          top: e.target.offsetTop - 30,
          items,
          success: (tapIndex) => {
            switch (items[tapIndex]) {
              case "\u5C01\u9762":
                this.root.getSrc("img", node2.attrs.poster || "").then((url) => {
                  this.root._editVal(`${this.opts[6]}.${i}.attrs.poster`, node2.attrs.poster, url instanceof Array ? url[0] : url, true);
                }).catch(() => {
                });
                break;
              case "\u5220\u9664":
                this.remove(i);
                break;
              case "\u5FAA\u73AF":
              case "\u4E0D\u5FAA\u73AF":
                this.root._setData(`${this.opts[6]}.${i}.attrs.loop`, !node2.attrs.loop);
                common_vendor.index.showToast({
                  title: "\u6210\u529F"
                });
                break;
              case "\u81EA\u52A8\u64AD\u653E":
              case "\u4E0D\u81EA\u52A8\u64AD\u653E":
                this.root._setData(`${this.opts[6]}.${i}.attrs.autoplay`, !node2.attrs.autoplay);
                common_vendor.index.showToast({
                  title: "\u6210\u529F"
                });
                break;
            }
          }
        });
        this.root._lock = true;
        setTimeout(() => {
          this.root._lock = false;
        }, 50);
      }
    },
    changeStyle(name, i, value, oldVal) {
      let style = this.childs[i].attrs.style || "";
      if (style.includes(";" + name + ":" + oldVal)) {
        style = style.replace(";" + name + ":" + oldVal, ";" + name + ":" + value);
      } else {
        style += ";" + name + ":" + value;
      }
      this.root._setData(`${this.opts[6]}.${i}.attrs.style`, style);
    },
    play(e) {
      this.root.$emit("play");
      if (this.root.pauseVideo) {
        let flag = false;
        const id = e.target.id;
        for (let i = this.root._videos.length; i--; ) {
          if (this.root._videos[i].id === id) {
            flag = true;
          } else {
            this.root._videos[i].pause();
          }
        }
        if (!flag) {
          const ctx = common_vendor.index.createVideoContext(id);
          ctx.id = id;
          this.root._videos.push(ctx);
        }
      }
    },
    imgTap(e) {
      if (!this.opts[4]) {
        const node2 = this.childs[e.currentTarget.dataset.i];
        if (node2.a) {
          this.linkTap(node2.a);
          return;
        }
        if (node2.attrs.ignore)
          return;
        this.root.$emit("imgtap", node2.attrs);
        if (this.root.previewImg) {
          common_vendor.index.previewImage({
            current: parseInt(node2.attrs.i),
            urls: this.root.imgList
          });
        }
      } else {
        const i = e.currentTarget.dataset.i;
        const node2 = this.childs[i];
        const items = this.root._getItem(node2);
        this.root._edit = this;
        this.i = i;
        this.root._maskTap();
        this.$set(this.ctrl, "e" + i, 1);
        this.root._mask.push(() => this.$set(this.ctrl, "e" + i, 0));
        this.root._tooltip({
          top: getTop(e),
          items,
          success: (tapIndex) => {
            if (items[tapIndex] === "\u6362\u56FE") {
              this.root.getSrc("img", node2.attrs.src || "").then((url) => {
                this.root._editVal(this.opts[6] + "." + i + ".attrs.src", node2.attrs.src, url instanceof Array ? url[0] : url, true);
              }).catch(() => {
              });
            } else if (items[tapIndex] === "\u5BBD\u5EA6") {
              const style = node2.attrs.style || "";
              let value = style.match(/max-width:([0-9]+)%/);
              if (value) {
                value = parseInt(value[1]);
              } else {
                value = 100;
              }
              this.root._slider({
                min: 0,
                max: 100,
                value,
                top: getTop(e),
                changing: (val) => {
                  if (Math.abs(val - value) > 5) {
                    this.changeStyle("max-width", i, val + "%", value + "%");
                    value = val;
                  }
                },
                change: (val) => {
                  if (val !== value) {
                    this.changeStyle("max-width", i, val + "%", value + "%");
                    value = val;
                  }
                  this.root._editVal(this.opts[6] + "." + i + ".attrs.style", style, this.childs[i].attrs.style);
                }
              });
            } else if (items[tapIndex] === "\u8D85\u94FE\u63A5") {
              this.root.getSrc("link", node2.a ? node2.a.href : "").then((url) => {
                if (node2.a) {
                  this.root._editVal(this.opts[6] + "." + i + ".a.href", node2.a.href, url, true);
                } else {
                  const link = {
                    name: "a",
                    attrs: {
                      href: url
                    },
                    children: [node2]
                  };
                  node2.a = link.attrs;
                  this.root._editVal(this.opts[6] + "." + i, node2, link, true);
                }
                wx.showToast({
                  title: "\u6210\u529F"
                });
              }).catch(() => {
              });
            } else if (items[tapIndex] === "\u9884\u89C8\u56FE") {
              this.root.getSrc("img", node2.attrs["original-src"] || "").then((url) => {
                this.root._editVal(this.opts[6] + "." + i + ".attrs.original-src", node2.attrs["original-src"], url instanceof Array ? url[0] : url, true);
                common_vendor.index.showToast({
                  title: "\u6210\u529F"
                });
              }).catch(() => {
              });
            } else if (items[tapIndex] === "\u5220\u9664") {
              this.remove(i);
            } else {
              this.root._setData(this.opts[6] + "." + i + ".attrs.ignore", !node2.attrs.ignore);
              common_vendor.index.showToast({
                title: "\u6210\u529F"
              });
            }
          }
        });
        this.root._lock = true;
        setTimeout(() => {
          this.root._lock = false;
        }, 50);
      }
    },
    imgLongTap(e) {
    },
    imgLoad(e) {
      const i = e.currentTarget.dataset.i;
      if (!this.childs[i].w) {
        this.$set(this.ctrl, i, e.detail.width);
        if (this.opts[4]) {
          const path = this.opts[6] + "." + i + ".attrs.";
          if (e.detail.width < 150)
            this.root._setData(path + "ignore", "T");
          this.root._setData(path + "width", e.detail.width.toString());
        }
      } else if (this.opts[1] && !this.ctrl[i] || this.ctrl[i] === -1) {
        this.$set(this.ctrl, i, 1);
      }
    },
    linkTap(e) {
      if (!this.opts[4]) {
        const node2 = e.currentTarget ? this.childs[e.currentTarget.dataset.i] : {};
        const attrs = node2.attrs || e;
        const href = attrs.href;
        this.root.$emit("linktap", Object.assign({
          innerText: this.root.getText(node2.children || [])
        }, attrs));
        if (href) {
          if (href[0] === "#") {
            this.root.navigateTo(href.substring(1)).catch(() => {
            });
          } else if (href.split("?")[0].includes("://")) {
            if (this.root.copyLink) {
              common_vendor.index.setClipboardData({
                data: href,
                success: () => common_vendor.index.showToast({
                  title: "\u94FE\u63A5\u5DF2\u590D\u5236"
                })
              });
            }
          } else {
            common_vendor.index.navigateTo({
              url: href,
              fail() {
                common_vendor.index.switchTab({
                  url: href,
                  fail() {
                  }
                });
              }
            });
          }
        }
      } else {
        const i = e.currentTarget.dataset.i;
        const node2 = this.childs[i];
        const items = this.root._getItem(node2);
        this.root._tooltip({
          top: getTop(e),
          items,
          success: (tapIndex) => {
            if (items[tapIndex] === "\u66F4\u6362\u94FE\u63A5") {
              this.root.getSrc("link", node2.attrs.href).then((url) => {
                this.root._editVal(this.opts[6] + "." + i + ".attrs.href", node2.attrs.href, url, true);
                common_vendor.index.showToast({
                  title: "\u6210\u529F"
                });
              }).catch(() => {
              });
            } else {
              this.remove(i);
            }
          }
        });
      }
    },
    mediaError(e) {
      const i = e.currentTarget.dataset.i;
      const node2 = this.childs[i];
      if (node2.name === "video" || node2.name === "audio") {
        let index = (this.ctrl[i] || 0) + 1;
        if (index > node2.src.length) {
          index = 0;
        }
        if (index < node2.src.length) {
          this.$set(this.ctrl, i, index);
          return;
        }
      } else if (node2.name === "img") {
        if (this.opts[2]) {
          this.$set(this.ctrl, i, -1);
        }
      }
      if (this.root) {
        this.root.$emit("error", {
          source: node2.name,
          attrs: node2.attrs,
          errMsg: e.detail.errMsg
        });
      }
    }
  }
};
if (!Array) {
  const _component_node = common_vendor.resolveComponent("node");
  _component_node();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.childs, (n, i, i0) => {
      return common_vendor.e({
        a: i,
        b: n.name === "img" && ($props.opts[1] && !$data.ctrl[i] || $data.ctrl[i] < 0)
      }, n.name === "img" && ($props.opts[1] && !$data.ctrl[i] || $data.ctrl[i] < 0) ? {
        c: common_vendor.s(n.attrs.style),
        d: $data.ctrl[i] < 0 ? $props.opts[2] : $props.opts[1]
      } : {}, {
        e: n.name === "img"
      }, n.name === "img" ? {
        f: n.attrs.id || "n" + i,
        g: common_vendor.n("_img " + n.attrs.class),
        h: common_vendor.s(($data.ctrl["e" + i] ? "border:1px dashed black;padding:3px;" : "") + ($data.ctrl[i] === -1 ? "display:none;" : "") + "width:" + ($data.ctrl[i] || 1) + "px;height:" + ($data.ctrl["h" + i] || 1) + "px;" + n.attrs.style),
        i: n.attrs.src,
        j: !n.h ? "widthFix" : !n.w ? "heightFix" : "",
        k: $props.opts[0],
        l: n.webp,
        m: !$props.opts[4] && $props.opts[3] && !n.attrs.ignore,
        n: $props.opts[4] || !$props.opts[3] || n.attrs.ignore,
        o: i,
        p: common_vendor.o((...args) => $options.imgLoad && $options.imgLoad(...args)),
        q: common_vendor.o((...args) => $options.mediaError && $options.mediaError(...args)),
        r: common_vendor.o((...args) => $options.imgTap && $options.imgTap(...args)),
        s: common_vendor.o((...args) => $options.imgLongTap && $options.imgLongTap(...args))
      } : n.type === "text" && !$data.ctrl["e" + i] ? common_vendor.e({
        v: common_vendor.t(n.text),
        w: !n.text
      }, !n.text ? {
        x: common_vendor.t($props.opts[5] || "\u8BF7\u8F93\u5165")
      } : {}, {
        y: i,
        z: n.us,
        A: !$props.opts[4],
        B: common_vendor.o((...args) => $options.editStart && $options.editStart(...args))
      }) : n.type === "text" && $data.ctrl["e" + i] === 1 ? common_vendor.e({
        D: common_vendor.t(n.text),
        E: !n.text
      }, !n.text ? {
        F: common_vendor.t($props.opts[5] || "\u8BF7\u8F93\u5165")
      } : {}, {
        G: i,
        H: common_vendor.o((...args) => $options.editStart && $options.editStart(...args))
      }) : n.type === "text" ? {
        J: $data.ctrl["e" + i] === 3,
        K: n.text,
        L: i,
        M: common_vendor.o((...args) => $options.editInput && $options.editInput(...args)),
        N: common_vendor.o((...args) => $options.editEnd && $options.editEnd(...args))
      } : n.name === "br" ? {} : n.name === "a" ? {
        Q: "0bf3a19b-0-" + i0,
        R: common_vendor.p({
          name: "span",
          childs: n.children,
          opts: [$props.opts[0], $props.opts[1], $props.opts[2], $props.opts[3], $props.opts[4], $props.opts[5], $props.opts[6] + "." + i + ".children"]
        }),
        S: n.attrs.id,
        T: common_vendor.n((n.attrs.href ? "_a " : "") + n.attrs.class),
        U: common_vendor.s("display:inline;" + n.attrs.style),
        V: i,
        W: common_vendor.o((...args) => $options.linkTap && $options.linkTap(...args))
      } : n.name === "video" ? {
        Y: !$props.opts[4],
        Z: common_vendor.o((...args) => $options.mediaTap && $options.mediaTap(...args)),
        aa: n.attrs.id,
        ab: common_vendor.n(n.attrs.class),
        ac: common_vendor.s(n.attrs.style),
        ad: n.attrs.autoplay,
        ae: n.attrs.controls,
        af: n.attrs.loop,
        ag: n.attrs.muted,
        ah: n.attrs["object-fit"],
        ai: n.attrs.poster,
        aj: n.src[$data.ctrl[i] || 0],
        ak: i,
        al: common_vendor.o((...args) => $options.play && $options.play(...args)),
        am: common_vendor.o((...args) => $options.mediaError && $options.mediaError(...args))
      } : n.name === "audio" ? {
        ao: common_vendor.o((...args) => $options.mediaTap && $options.mediaTap(...args)),
        ap: n.attrs.id,
        aq: common_vendor.n(n.attrs.class),
        ar: common_vendor.s(n.attrs.style),
        as: n.attrs.author,
        at: n.attrs.controls,
        av: n.attrs.loop,
        aw: n.attrs.name,
        ax: n.attrs.poster,
        ay: n.src[$data.ctrl[i] || 0],
        az: i,
        aA: common_vendor.o((...args) => $options.play && $options.play(...args)),
        aB: common_vendor.o((...args) => $options.mediaError && $options.mediaError(...args))
      } : n.name === "table" && (n.c || $props.opts[4]) || n.name === "li" ? common_vendor.e({
        aD: n.name === "li"
      }, n.name === "li" ? {
        aE: "0bf3a19b-1-" + i0,
        aF: common_vendor.p({
          childs: n.children,
          opts: [$props.opts[0], $props.opts[1], $props.opts[2], $props.opts[3], $props.opts[4], $props.opts[5], $props.opts[6] + "." + i + ".children"]
        })
      } : {
        aG: common_vendor.f(n.children, (tbody, x, i1) => {
          return common_vendor.e({
            a: x,
            b: tbody.name === "td" || tbody.name === "th"
          }, tbody.name === "td" || tbody.name === "th" ? {
            c: "0bf3a19b-2-" + i0 + "-" + i1,
            d: common_vendor.p({
              childs: tbody.children,
              opts: [$props.opts[0], $props.opts[1], $props.opts[2], $props.opts[3], $props.opts[4], $props.opts[5], $props.opts[6] + "." + i + ".children." + x + ".children"]
            })
          } : {
            e: common_vendor.f(tbody.children, (tr, y, i2) => {
              return common_vendor.e({
                a: y,
                b: tr.name === "td" || tr.name === "th"
              }, tr.name === "td" || tr.name === "th" ? {
                c: "0bf3a19b-3-" + i0 + "-" + i1 + "-" + i2,
                d: common_vendor.p({
                  childs: tr.children,
                  opts: [$props.opts[0], $props.opts[1], $props.opts[2], $props.opts[3], $props.opts[4], $props.opts[5], $props.opts[6] + "." + i + ".children." + x + ".children." + y + ".children"]
                }),
                e: common_vendor.n("_" + tr.name + " " + tr.attrs.class),
                f: common_vendor.s(tr.attrs.style)
              } : {
                g: common_vendor.f(tr.children, (td, z, i3) => {
                  return {
                    a: z,
                    b: "0bf3a19b-4-" + i0 + "-" + i1 + "-" + i2 + "-" + i3,
                    c: common_vendor.p({
                      childs: td.children,
                      opts: [$props.opts[0], $props.opts[1], $props.opts[2], $props.opts[3], $props.opts[4], $props.opts[5], $props.opts[6] + "." + i + ".children." + x + ".children." + y + ".children." + z + ".children"]
                    }),
                    d: common_vendor.n("_" + td.name + " " + td.attrs.class),
                    e: common_vendor.s(td.attrs.style)
                  };
                }),
                h: common_vendor.n("_" + tr.name + " " + tr.attrs.class),
                i: common_vendor.s(tr.attrs.style)
              });
            })
          }, {
            f: common_vendor.n("_" + tbody.name + " " + tbody.attrs.class),
            g: common_vendor.s(tbody.attrs.style)
          });
        })
      }, {
        aH: n.attrs.id,
        aI: common_vendor.n("_" + n.name + " " + n.attrs.class),
        aJ: common_vendor.s(n.attrs.style)
      }) : n.attrs["data-content"] ? {
        aL: [n],
        aM: n.attrs["data-content"],
        aN: n.attrs["data-lang"],
        aO: common_vendor.o((...args) => $options.copyCode && $options.copyCode(...args))
      } : !$props.opts[4] && !n.c ? {
        aQ: n.attrs.id,
        aR: common_vendor.s(n.f + ";display:inline"),
        aS: [n]
      } : n.c === 2 ? {
        aU: common_vendor.f(n.children, (n2, j, i1) => {
          return {
            a: j,
            b: common_vendor.s(n2.f),
            c: "0bf3a19b-5-" + i0 + "-" + i1,
            d: common_vendor.p({
              name: n2.name,
              attrs: n2.attrs,
              childs: n2.children,
              opts: [$props.opts[0], $props.opts[1], $props.opts[2], $props.opts[3], $props.opts[4], $props.opts[5], $props.opts[6] + "." + i + ".children." + j + ".children"]
            })
          };
        }),
        aV: n.attrs.id,
        aW: common_vendor.n("_block _" + n.name + " " + n.attrs.class),
        aX: common_vendor.s(n.f + ";" + n.attrs.style)
      } : {
        aY: common_vendor.s(n.f),
        aZ: "0bf3a19b-6-" + i0,
        ba: common_vendor.p({
          name: n.name,
          attrs: n.attrs,
          childs: n.children,
          opts: [$props.opts[0], $props.opts[1], $props.opts[2], $props.opts[3], $props.opts[4], $props.opts[5], $props.opts[6] + "." + i + ".children"]
        })
      }, {
        t: n.type === "text" && !$data.ctrl["e" + i],
        C: n.type === "text" && $data.ctrl["e" + i] === 1,
        I: n.type === "text",
        O: n.name === "br",
        P: n.name === "a",
        X: n.name === "video",
        an: n.name === "audio",
        aC: n.name === "table" && (n.c || $props.opts[4]) || n.name === "li",
        aK: n.attrs["data-content"],
        aP: !$props.opts[4] && !n.c,
        aT: n.c === 2
      });
    }),
    b: common_vendor.o((...args) => $options.nodeTap && $options.nodeTap(...args)),
    c: $props.attrs.id,
    d: common_vendor.n("_block _" + $props.name + " " + $props.attrs.class),
    e: common_vendor.s(($data.ctrl.root ? "border:1px solid black;padding:5px;display:block;" : "") + $props.attrs.style)
  };
}
if (typeof block0 === "function")
  block0(_sfc_main);
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/uni_modules/mp-html/components/mp-html/node/node.vue"]]);
swan.createComponent(Component);
var L1VzZXJzL3Blbmdzb25nL0Rvd25sb2Fkcy9XZWIvdW5pLWFwcC9kZW1vMi91bmlfbW9kdWxlcy9tcC1odG1sL2NvbXBvbmVudHMvbXAtaHRtbC9ub2RlL25vZGUudnVl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
