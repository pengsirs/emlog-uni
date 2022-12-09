"use strict";
var common_vendor = require("../../../../../common/vendor.js");
var block0 = {};
const node = () => Promise.resolve().then(function() {
  return L1VzZXJzL3Blbmdzb25nL0Rvd25sb2Fkcy9XZWIvdW5pLWFwcC9kZW1vMi91bmlfbW9kdWxlcy9tcC1odG1sL2NvbXBvbmVudHMvbXAtaHRtbC9ub2RlL25vZGUudnVl;
});
const _sfc_main = {
  name: "node",
  options: {
    virtualHost: true
  },
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
  },
  methods: {
    toJSON() {
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
          const ctx = common_vendor.index.createVideoContext(id, this);
          ctx.id = id;
          this.root._videos.push(ctx);
        }
      }
    },
    imgTap(e) {
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
          showmenu: this.root.showImgMenu,
          current: parseInt(node2.attrs.i),
          urls: this.root.imgList
        });
      }
    },
    imgLongTap(e) {
    },
    imgLoad(e) {
      const i = e.currentTarget.dataset.i;
      if (!this.childs[i].w) {
        this.$set(this.ctrl, i, e.detail.width);
      } else if (this.opts[1] && !this.ctrl[i] || this.ctrl[i] === -1) {
        this.$set(this.ctrl, i, 1);
      }
    },
    linkTap(e) {
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
        a: n.name === "img" && ($props.opts[1] && !$data.ctrl[i] || $data.ctrl[i] < 0)
      }, n.name === "img" && ($props.opts[1] && !$data.ctrl[i] || $data.ctrl[i] < 0) ? {
        b: common_vendor.s(n.attrs.style),
        c: $data.ctrl[i] < 0 ? $props.opts[2] : $props.opts[1]
      } : {}, {
        d: n.name === "img"
      }, n.name === "img" ? {
        e: n.attrs.id,
        f: common_vendor.n("_img " + n.attrs.class),
        g: common_vendor.s(($data.ctrl[i] === -1 ? "display:none;" : "") + "width:" + ($data.ctrl[i] || 1) + "px;height:1px;" + n.attrs.style),
        h: n.attrs.src,
        i: !n.h ? "widthFix" : !n.w ? "heightFix" : "",
        j: $props.opts[0],
        k: n.webp,
        l: $props.opts[3] && !n.attrs.ignore,
        m: !$props.opts[3] || n.attrs.ignore,
        n: i,
        o: common_vendor.o((...args) => $options.imgLoad && $options.imgLoad(...args)),
        p: common_vendor.o((...args) => $options.mediaError && $options.mediaError(...args)),
        q: common_vendor.o((...args) => $options.imgTap && $options.imgTap(...args)),
        r: common_vendor.o((...args) => $options.imgLongTap && $options.imgLongTap(...args))
      } : n.text ? {
        t: common_vendor.t(n.text),
        v: $props.opts[4]
      } : n.name === "br" ? {} : n.name === "a" ? {
        y: "0bf3a19b-0-" + i0,
        z: common_vendor.p({
          name: "span",
          childs: n.children,
          opts: $props.opts
        }),
        A: n.attrs.id,
        B: common_vendor.n((n.attrs.href ? "_a " : "") + n.attrs.class),
        C: common_vendor.s("display:inline;" + n.attrs.style),
        D: i,
        E: common_vendor.o((...args) => $options.linkTap && $options.linkTap(...args))
      } : n.name === "video" ? {
        G: n.attrs.id,
        H: common_vendor.n(n.attrs.class),
        I: common_vendor.s(n.attrs.style),
        J: n.attrs.autoplay,
        K: n.attrs.controls,
        L: n.attrs.loop,
        M: n.attrs.muted,
        N: n.attrs["object-fit"],
        O: n.attrs.poster,
        P: n.src[$data.ctrl[i] || 0],
        Q: i,
        R: common_vendor.o((...args) => $options.play && $options.play(...args)),
        S: common_vendor.o((...args) => $options.mediaError && $options.mediaError(...args))
      } : n.name === "audio" ? {
        U: n.attrs.id,
        V: common_vendor.n(n.attrs.class),
        W: common_vendor.s(n.attrs.style),
        X: n.attrs.author,
        Y: n.attrs.controls,
        Z: n.attrs.loop,
        aa: n.attrs.name,
        ab: n.attrs.poster,
        ac: n.src[$data.ctrl[i] || 0],
        ad: i,
        ae: common_vendor.o((...args) => $options.play && $options.play(...args)),
        af: common_vendor.o((...args) => $options.mediaError && $options.mediaError(...args))
      } : n.name === "table" && n.c || n.name === "li" ? common_vendor.e({
        ah: n.name === "li"
      }, n.name === "li" ? {
        ai: "0bf3a19b-1-" + i0,
        aj: common_vendor.p({
          childs: n.children,
          opts: $props.opts
        })
      } : {
        ak: common_vendor.f(n.children, (tbody, x, i1) => {
          return common_vendor.e({
            a: tbody.name === "td" || tbody.name === "th"
          }, tbody.name === "td" || tbody.name === "th" ? {
            b: "0bf3a19b-2-" + i0 + "-" + i1,
            c: common_vendor.p({
              childs: tbody.children,
              opts: $props.opts
            })
          } : {
            d: common_vendor.f(tbody.children, (tr, y, i2) => {
              return common_vendor.e({
                a: tr.name === "td" || tr.name === "th"
              }, tr.name === "td" || tr.name === "th" ? {
                b: "0bf3a19b-3-" + i0 + "-" + i1 + "-" + i2,
                c: common_vendor.p({
                  childs: tr.children,
                  opts: $props.opts
                }),
                d: common_vendor.n("_" + tr.name + " " + tr.attrs.class),
                e: common_vendor.s(tr.attrs.style)
              } : {
                f: common_vendor.f(tr.children, (td, z, i3) => {
                  return {
                    a: "0bf3a19b-4-" + i0 + "-" + i1 + "-" + i2 + "-" + i3,
                    b: common_vendor.p({
                      childs: td.children,
                      opts: $props.opts
                    }),
                    c: z,
                    d: common_vendor.n("_" + td.name + " " + td.attrs.class),
                    e: common_vendor.s(td.attrs.style)
                  };
                }),
                g: common_vendor.n("_" + tr.name + " " + tr.attrs.class),
                h: common_vendor.s(tr.attrs.style)
              }, {
                i: y
              });
            })
          }, {
            e: x,
            f: common_vendor.n("_" + tbody.name + " " + tbody.attrs.class),
            g: common_vendor.s(tbody.attrs.style)
          });
        })
      }, {
        al: n.attrs.id,
        am: common_vendor.n("_" + n.name + " " + n.attrs.class),
        an: common_vendor.s(n.attrs.style)
      }) : !n.c ? {
        ap: n.attrs.id,
        aq: common_vendor.s(n.f + ";display:inline"),
        ar: $props.opts[4],
        as: $props.opts[4],
        at: [n]
      } : n.c === 2 ? {
        aw: common_vendor.f(n.children, (n2, j, i1) => {
          return {
            a: j,
            b: common_vendor.s(n2.f),
            c: "0bf3a19b-5-" + i0 + "-" + i1,
            d: common_vendor.p({
              name: n2.name,
              attrs: n2.attrs,
              childs: n2.children,
              opts: $props.opts
            })
          };
        }),
        ax: n.attrs.id,
        ay: common_vendor.n("_block _" + n.name + " " + n.attrs.class),
        az: common_vendor.s(n.f + ";" + n.attrs.style)
      } : {
        aA: common_vendor.s(n.f),
        aB: "0bf3a19b-6-" + i0,
        aC: common_vendor.p({
          name: n.name,
          attrs: n.attrs,
          childs: n.children,
          opts: $props.opts
        })
      }, {
        s: n.text,
        w: n.name === "br",
        x: n.name === "a",
        F: n.name === "video",
        T: n.name === "audio",
        ag: n.name === "table" && n.c || n.name === "li",
        ao: !n.c,
        av: n.c === 2,
        aD: i
      });
    }),
    b: $props.attrs.id,
    c: common_vendor.n("_block _" + $props.name + " " + $props.attrs.class),
    d: common_vendor.s($props.attrs.style)
  };
}
if (typeof block0 === "function")
  block0(_sfc_main);
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/uni_modules/mp-html/components/mp-html/node/node.vue"]]);
wx.createComponent(Component);
var L1VzZXJzL3Blbmdzb25nL0Rvd25sb2Fkcy9XZWIvdW5pLWFwcC9kZW1vMi91bmlfbW9kdWxlcy9tcC1odG1sL2NvbXBvbmVudHMvbXAtaHRtbC9ub2RlL25vZGUudnVl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
