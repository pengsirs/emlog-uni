"use strict";
var common_vendor = require("./common/vendor.js");
var setting = require("./setting.js");
const myRequest = (options) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: setting.set.url + options.url,
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: options.method || "POST",
      data: options.data || {},
      success: (res) => {
        if (res.data.msg == "parameter error") {
          common_vendor.index.showToast({
            title: "\u5FC5\u586B\u53C2\u6570\u7F3A\u5931"
          });
        } else if (res.data.msg == "sign error") {
          common_vendor.index.showToast({
            title: "\u7B7E\u540D\u9519\u8BEF"
          });
        } else if (res.data.msg == "api is closed") {
          common_vendor.index.showToast({
            title: "\u672A\u5F00\u542FAPI\uFF0C\u8BF7\u5728\u540E\u53F0\u8BBE\u7F6E\u5F00\u542F"
          });
        } else if (res.data.msg == "API function is not exist") {
          common_vendor.index.showToast({
            title: "\u4E0D\u5B58\u5728\u7684API\u65B9\u6CD5"
          });
        }
        resolve(res);
      }
    });
  });
};
const apiRequest = (options) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: setting.set.tenapi + options.url,
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: options.method || "POST",
      data: options.data || {},
      success: (res) => {
        resolve(res);
      }
    });
  });
};
exports.apiRequest = apiRequest;
exports.myRequest = myRequest;
