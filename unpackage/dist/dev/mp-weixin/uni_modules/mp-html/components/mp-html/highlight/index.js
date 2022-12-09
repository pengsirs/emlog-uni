"use strict";
var uni_modules_mpHtml_components_mpHtml_highlight_prism_min = require("./prism.min.js");
var uni_modules_mpHtml_components_mpHtml_parser = require("../parser.js");
function Highlight(vm) {
  this.vm = vm;
}
Highlight.prototype.onParse = function(node, vm) {
  if (node.name === "pre") {
    let i;
    for (i = node.children.length; i--; ) {
      if (node.children[i].name === "code")
        break;
    }
    if (i === -1)
      return;
    const code = node.children[i];
    let className = code.attrs.class || "";
    i = className.indexOf("language-");
    if (i === -1) {
      className = node.attrs.class || "";
      i = className.indexOf("language-");
    }
    if (i === -1) {
      className = "language-text";
      i = className.indexOf("language-");
    }
    i += 9;
    let j;
    for (j = i; j < className.length; j++) {
      if (className[j] === " ")
        break;
    }
    const lang = className.substring(i, j);
    if (code.children.length) {
      const text = this.vm.getText(code.children).replace(/&amp;/g, "&");
      if (!text)
        return;
      if (node.c) {
        node.c = void 0;
      }
      if (uni_modules_mpHtml_components_mpHtml_highlight_prism_min.Prism.languages[lang]) {
        code.children = new uni_modules_mpHtml_components_mpHtml_parser.Parser(this.vm).parse("<pre>" + uni_modules_mpHtml_components_mpHtml_highlight_prism_min.Prism.highlight(text, uni_modules_mpHtml_components_mpHtml_highlight_prism_min.Prism.languages[lang], lang).replace(/token /g, "hl-") + "</pre>")[0].children;
      }
      node.attrs.class = "hl-pre";
      code.attrs.class = "hl-code";
      {
        node.children.push({
          name: "div",
          attrs: {
            class: "hl-language",
            style: "user-select:none"
          },
          children: [{
            type: "text",
            text: lang
          }]
        });
      }
      {
        node.attrs.style += (node.attrs.style || "") + ";user-select:none";
        node.attrs["data-content"] = text;
        vm.expose();
      }
      {
        const line = text.split("\n").length;
        const children = [];
        for (let k = line; k--; ) {
          children.push({
            name: "span",
            attrs: {
              class: "span"
            }
          });
        }
        node.children.push({
          name: "span",
          attrs: {
            class: "line-numbers-rows"
          },
          children
        });
      }
    }
  }
};
exports.Highlight = Highlight;
