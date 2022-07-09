var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(shared, vue) {
  "use strict";
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (shared.toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = shared.toTypeString(v).toLowerCase();
      if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = shared.toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  var icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg2 = /^[0-9]*$/g;
    return typeof val === "number" || reg2.test(val) ? val + "px" : val;
  };
  const _sfc_main$o = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, null, 6);
  }
  var __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-a2e81f6e"], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index2 = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index2 < tokens.length) {
      const token = tokens[index2];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index2++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index2 = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index2, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  var en$1 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  var zhHans$1 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9"
  };
  var zhHant$1 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "\u8ACB\u8F38\u5165\u641C\u7D22\u5167\u5BB9"
  };
  var messages$1 = {
    en: en$1,
    "zh-Hans": zhHans$1,
    "zh-Hant": zhHant$1
  };
  const {
    t: t$2
  } = initVueI18n(messages$1);
  const _sfc_main$n = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: "\u53D6\u6D88"
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t$2("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t$2("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.$emit("clear", {
          value: this.searchVal
        });
        this.searchVal = "";
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e) {
        this.$emit("focus", e.detail);
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode("view", {
        style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
        class: "uni-searchbar__box",
        onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
      }, [
        vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
          vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
            vue.createVNode(_component_uni_icons, {
              color: "#c0c4cc",
              size: "18",
              type: "search"
            })
          ], true)
        ]),
        $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
          key: 0,
          focus: $data.showSync,
          disabled: $props.readonly,
          placeholder: $options.placeholderText,
          maxlength: $props.maxlength,
          class: "uni-searchbar__box-search-input",
          "confirm-type": "search",
          type: "text",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
          onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
          onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
          onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
        }, null, 40, ["focus", "disabled", "placeholder", "maxlength"])), [
          [vue.vModelText, $data.searchVal]
        ]) : (vue.openBlock(), vue.createElementBlock("text", {
          key: 1,
          class: "uni-searchbar__text-placeholder"
        }, vue.toDisplayString($props.placeholder), 1)),
        $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "uni-searchbar__box-icon-clear",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
        }, [
          vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
            vue.createVNode(_component_uni_icons, {
              color: "#c0c4cc",
              size: "20",
              type: "clear"
            })
          ], true)
        ])) : vue.createCommentVNode("v-if", true)
      ], 4),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 0,
        onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
        class: "uni-searchbar__cancel"
      }, vue.toDisplayString($options.cancelTextI18n), 1)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-180dbe05"], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const _sfc_main$m = {
    name: "UniDrawer",
    components: {},
    emits: ["change"],
    props: {
      mode: {
        type: String,
        default: ""
      },
      mask: {
        type: Boolean,
        default: true
      },
      maskClick: {
        type: Boolean,
        default: true
      },
      width: {
        type: Number,
        default: 220
      }
    },
    data() {
      return {
        visibleSync: false,
        showDrawer: false,
        rightMode: false,
        watchTimer: null,
        drawerWidth: 220
      };
    },
    created() {
      this.drawerWidth = this.width;
      this.rightMode = this.mode === "right";
    },
    methods: {
      clear() {
      },
      close(type) {
        if (type === "mask" && !this.maskClick || !this.visibleSync)
          return;
        this._change("showDrawer", "visibleSync", false);
      },
      open() {
        if (this.visibleSync)
          return;
        this._change("visibleSync", "showDrawer", true);
      },
      _change(param1, param2, status) {
        this[param1] = status;
        if (this.watchTimer) {
          clearTimeout(this.watchTimer);
        }
        this.watchTimer = setTimeout(() => {
          this[param2] = status;
          this.$emit("change", status);
        }, status ? 50 : 300);
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.visibleSync ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass([{ "uni-drawer--visible": $data.showDrawer }, "uni-drawer"]),
      onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.clear && $options.clear(...args), ["stop", "prevent"]))
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-drawer__mask", { "uni-drawer__mask--visible": $data.showDrawer && $props.mask }]),
        onClick: _cache[0] || (_cache[0] = ($event) => $options.close("mask"))
      }, null, 2),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-drawer__content", { "uni-drawer--right": $data.rightMode, "uni-drawer--left": !$data.rightMode, "uni-drawer__content--visible": $data.showDrawer }]),
        style: vue.normalizeStyle({ width: $data.drawerWidth + "px" })
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 6)
    ], 34)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-558f1882"], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/uni_modules/uni-drawer/components/uni-drawer/uni-drawer.vue"]]);
  const _sfc_main$l = {
    name: "UniNoticeBar",
    emits: ["click", "getmore", "close"],
    props: {
      text: {
        type: String,
        default: ""
      },
      moreText: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: "#FFF9EA"
      },
      speed: {
        type: Number,
        default: 100
      },
      color: {
        type: String,
        default: "#FF9A43"
      },
      moreColor: {
        type: String,
        default: "#FF9A43"
      },
      single: {
        type: [Boolean, String],
        default: false
      },
      scrollable: {
        type: [Boolean, String],
        default: false
      },
      showIcon: {
        type: [Boolean, String],
        default: false
      },
      showGetMore: {
        type: [Boolean, String],
        default: false
      },
      showClose: {
        type: [Boolean, String],
        default: false
      }
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      const elIdBox = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        textWidth: 0,
        boxWidth: 0,
        wrapWidth: "",
        webviewHide: false,
        elId,
        elIdBox,
        show: true,
        animationDuration: "none",
        animationPlayState: "paused",
        animationDelay: "0s"
      };
    },
    mounted() {
      var pages = getCurrentPages();
      var page = pages[pages.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
      this.$nextTick(() => {
        this.initSize();
      });
    },
    methods: {
      initSize() {
        if (this.scrollable) {
          let query = [];
          let textQuery = new Promise((resolve, reject) => {
            uni.createSelectorQuery().in(this).select(`#${this.elId}`).boundingClientRect().exec((ret) => {
              this.textWidth = ret[0].width;
              resolve();
            });
          });
          let boxQuery = new Promise((resolve, reject) => {
            uni.createSelectorQuery().in(this).select(`#${this.elIdBox}`).boundingClientRect().exec((ret) => {
              this.boxWidth = ret[0].width;
              resolve();
            });
          });
          query.push(textQuery);
          query.push(boxQuery);
          Promise.all(query).then(() => {
            this.animationDuration = `${this.textWidth / this.speed}s`;
            this.animationDelay = `-${this.boxWidth / this.speed}s`;
            setTimeout(() => {
              this.animationPlayState = "running";
            }, 1e3);
          });
        }
      },
      loopAnimation() {
      },
      clickMore() {
        this.$emit("getmore");
      },
      close() {
        this.show = false;
        this.$emit("close");
      },
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$4);
    return $data.show ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: "uni-noticebar",
      style: vue.normalizeStyle({ backgroundColor: $props.backgroundColor }),
      onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      $props.showIcon === true || $props.showIcon === "true" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
        key: 0,
        class: "uni-noticebar-icon",
        type: "sound",
        color: $props.color,
        size: "22"
      }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", {
        ref: "textBox",
        class: vue.normalizeClass(["uni-noticebar__content-wrapper", { "uni-noticebar__content-wrapper--scrollable": $props.scrollable, "uni-noticebar__content-wrapper--single": !$props.scrollable && ($props.single || $props.moreText) }])
      }, [
        vue.createElementVNode("view", {
          id: $data.elIdBox,
          class: vue.normalizeClass(["uni-noticebar__content", { "uni-noticebar__content--scrollable": $props.scrollable, "uni-noticebar__content--single": !$props.scrollable && ($props.single || $props.moreText) }])
        }, [
          vue.createElementVNode("text", {
            id: $data.elId,
            ref: "animationEle",
            class: vue.normalizeClass(["uni-noticebar__content-text", { "uni-noticebar__content-text--scrollable": $props.scrollable, "uni-noticebar__content-text--single": !$props.scrollable && ($props.single || $props.showGetMore) }]),
            style: vue.normalizeStyle({ color: $props.color, width: $data.wrapWidth + "px", "animationDuration": $data.animationDuration, "-webkit-animationDuration": $data.animationDuration, animationPlayState: $data.webviewHide ? "paused" : $data.animationPlayState, "-webkit-animationPlayState": $data.webviewHide ? "paused" : $data.animationPlayState, animationDelay: $data.animationDelay, "-webkit-animationDelay": $data.animationDelay })
          }, vue.toDisplayString($props.text), 15, ["id"])
        ], 10, ["id"])
      ], 2),
      $props.showGetMore === true || $props.showGetMore === "true" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-noticebar__more uni-cursor-point",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickMore && $options.clickMore(...args))
      }, [
        $props.moreText.length > 0 ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 0,
          style: vue.normalizeStyle({ color: $props.moreColor }),
          class: "uni-noticebar__more-text"
        }, vue.toDisplayString($props.moreText), 5)) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
          key: 1,
          type: "right",
          color: $props.moreColor,
          size: "16"
        }, null, 8, ["color"]))
      ])) : vue.createCommentVNode("v-if", true),
      ($props.showClose === true || $props.showClose === "true") && ($props.showGetMore === false || $props.showGetMore === "false") ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "uni-noticebar-close uni-cursor-point"
      }, [
        vue.createVNode(_component_uni_icons, {
          type: "closeempty",
          color: $props.color,
          size: "16",
          onClick: $options.close
        }, null, 8, ["color", "onClick"])
      ])) : vue.createCommentVNode("v-if", true)
    ], 4)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-a1596656"], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.vue"]]);
  var en = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  var zhHans = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u663E\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F7D...",
    "uni-load-more.contentnomore": "\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86"
  };
  var zhHant = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u986F\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F09...",
    "uni-load-more.contentnomore": "\u6C92\u6709\u66F4\u591A\u6578\u64DA\u4E86"
  };
  var messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  let platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  const {
    t: t$1
  } = initVueI18n(messages);
  const _sfc_main$k = {
    name: "UniLoadMore",
    emits: ["clickLoadMore"],
    props: {
      status: {
        type: String,
        default: "more"
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: "auto"
      },
      iconSize: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: "#777777"
      },
      contentText: {
        type: Object,
        default() {
          return {
            contentdown: "",
            contentrefresh: "",
            contentnomore: ""
          };
        }
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        webviewHide: false,
        platform,
        imgBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZVHb98LM+F5bHL8khA1iSeiyQBCRM+YGqKUnnJTDLGI0BGZlKDIU2MMglUiDApEZvSsZnQtBRJtKwQNKQMFYeRDR10WOLd8ljYXdh+v8v5fR3Od+797t1dnOnO/Ofce77z+J//+b/P+ZqtXbs2sJ9MJhNUV1cHJ06cCJo3bx7EPc2aNcvpy7pWrVoF+/fvDyoqKoI2bdoE9fX1F7TjN8a+EXBn/fkfvw942Tf+wYMHg9mzZwfjxo0LDhw4EPa1x2MbFw/fOGfPng1qa2tzcCkILsLDydq2bRsunpOTMM7TD/W/tZDZhPdeKD+yGxHhdu3aBV27dg3OnDlzMVANMheLAO3btw8KCwuDmpoaX5OxbgUIMEq7K8IcPnw4KCsrC/r37x8cP378/4cAXAB3vqSkJMuiDhTkw+XcuXNhOWbMmKBly5YhUT8xArhyFvP0BfwRsAuwxJZJsm/nzp2DTp06he/OU+cZ64K6o0ePBkOHDg2GDx8e6gEbJ5Q/NHNuAJQ1hgBeHUDlR7nVTkY8rQAvAi4z34vR/mPs1FoRsaCgIJThI0eOBC1atEiFGGV+5MiRoS45efJkqFjJFXV1dQuA012m2WcwTw98fy6CqBdsaiIO4CScrGPHjvk4odhavPquRtFWXEC25VgkREKOCh/qDSq+vn37htzD/mZTOmOc5U7zKzBPEedygWshcDyWvs30igAbU+6oyMgJBCFhwQE0fccxN60Ay9iebbjoDh06hMowjQxT4fXq1SskArmHZpkArvixp/kWzHdMeArExSJEaiXIjjRjRJ4DaAGWpibLzXN3Fm1vA5teBgh3j1Rv3bp1YgKwPdmf2p9zcyNYYgPKMfY0T5f5nNYdw158nJ8QawW4CLKwiOBSEgO/hok2eBydR+3dYH+PLxA5J8Vv0KBBwenTp0P2JWAx6+yFEBfs8lMY+y0SWMBNI9E4ThKi58VKTg3FQZS1RQF1cz27eC0QHMu+3E0SkUowjhVt5VdaWhp07949ZHv2Qd1EjDXM2cla1M0nl3GxAs3J9yREzyTdFVKVFOaE9qRA8GM0WebRuo9JGZKA7Mv2SeS/Z8+eoQ9BArMfFrLGo6jvxbhHbJZnKX2Rzz1O7QhJJ9Cs2ZMaWIyq/zhdeqPNfIoHd58clIQD+JSXl4dKlyIAuBdVXZwFVWKspSSoxE++h8x4k3uCnEhE4I5KwRiFWGOU0QWKiCYLbdoRMRKAu2kQ9vkfLU6dOhX06NEjlH+yMRZSinnuyWnYosVcji8CEA/6Cg2JF+IIUBqnGKUTCNwtwBN4f89RiK1R96DEgO2o0NDmtEdvVFdVVYV+P3UAPUEs6GFwV3PHmXkD4vh74iDFJysVI/MlaQhwKeBNTLYX5VuA8T4/gZxA4MRGFxDB6R7OmYPfyykGRJbyie+XnGYnQIC/coH9+vULiYrxrkL9ZA9+0ykaHIfEpM7ge8TiJ2CsHYwyMfafAF1yCGBHYIbCVDjDjKt7BeB51D+LgQa6OkG7IDYEEtvQ7lnXLKLtLdLuJBpE4gPUXcW2+PkZwOex+4cGDhwYDBkyRL7/HFcEwUGPo/8uWRUpYnfxGHco8HkewLHLyYmAawAPuIFZxhOpDfJQ8gbUv41yORAptMWBNr6oqMhWird5+u+iHmBb2nhjDV7HWBNQTgK8y11l5NetWzc5ULscAtSj7nbNI0skhWeUZCc0W4nyH/jO4Vz0u1IeYhbk4AiwM6tjxIWByHsoZ9qcIBPJd/y+DwPfBESOmCa/QF3WiZHucLlEDpNxcNhmheEOPgdQNx6/VZFQzFZ5TN08AHXQt2Ii3EdyFuUsPtTcGPhW5iMiCNELvz+Gdn9huG4HUJaW/w3g0wxV0XaG7arG2WeKiUWYM4Y7GO5ezshTARbbWGw/DvXkpp/ivVvE0JVoMxN4rpGzJMhE5Pl+xlATsDIqikP9F9D2z3h9nOksEUFhK+qO4rcPkoalMQ/HqJLIyb3F3JdjrCcw1yZ8joyJLR5gCo54etlag7qIoeNh1N1BRYj3DTFJ0elotxPlVzkGuYAmL0VSJVGAJA41c4Z6A3BzTLfn0HYwYKEI6CUAMzZEWvLsIcQOo1AmmyyM72nHJCfYsogflGV6jEk9vyQZXSuq6w4c16NsGcGZbwOPr+H1RkOk2LEzjNepxQkihHSCQ4ynAYNRx2zMKV92CQMWqj8J0BRE8EShxRFN6YrfCRhC0x3r/Zm4IbQCcmJoV0kMamllccR6FjHqUC5F2R/wS2dcymOlfAKOS4KmzQb5cpNC2MC7JhVn5wjXoJ44rYhLh8n0eXOCorJxa7POjbSlCGVczr34/RsAmrcvo9s+wGp3tzVhntxiXiJ4nvEYb4FJkf0O8HocAePmLvCxnL0AORraVekJk6TYjDabRVXfRE2lCN1h6ZQRN1+InUbsCpKwoBZHh0dODN9JBCUffItXxEavTQkUtnfTVAplCWL3JISz29h4NjotnuSsQKJCk8dF+kJR6RARjrqFVmfPnj3ZbK8cIJ0msd6jgHPGtfVTQ8VLmlvh4mct9sobRmPic0DyDQQnx/NlfYUgyz59+oScsH379pAwXABD32nTpoUHIToESeI5mnbE/UqDdyLcafEBf2MCqgC7NwxIbMREJQ0g4D4sfJwnD+AmRrII05cfMWJE+L1169bQr+fip06dGp4oJ83lmYd5wj/EmMa4TaHivo4EeCguYZBnkB5g2aWA69OIEnUHOaGysjIYMGBAMGnSpODYsWPZwCpFmm4lNq+4gSLQA7jcX8DwtjEyRC8wjabnXEx9kfWnTJkSJkAo90xpJVV+FmcVNeYAF5zWngS4C4O91MBxmAv8blLEpbjI5sz9MTdAhcgkCT1RO8mZkAjfiYpTEvStAS53Uw1vAiUGgZ3GpuQEYvoiBqlIan7kSDHnTwJQFNiPu0+5VxCVYhcZIjNrdXUDdp+Eq5AZ3Gkg8QAyVZRZIk4Tl4QAbF9cXJxNYZMAtAokgs4BrNxEpCtteXg7DDTMDKYNSuQdKsnJBek7HxewvxaosWxLYXtw+cJp18217wql4aKCfBNoEu0O5VU+PhctJ0YeXD4C6JQpyrlpSLTojpGGGN5YwNziChdIZLk4lvLcFJ9jMX3QdiImY9bmGQU+TRUL5CHITTRlgF8D9ouD1MfmLoEPl5xokIumZ2cfgMpHt47IW9N64Hsh7wQYYjyIugWuF5fCqYncXRd5vPMWyizzvhi/32+nvG0dZc9vR6fZOu0md5e+uC408FvKSIOZwXlGvxPv95izA2Vtvg1xKFWARI+vMX66HUhpQQb643uW1bSjuTWyw2SBvDrBvjFic1eGGlz5esq3ko9uSIlBRqPuFcCv8F4WIcN12nVaBd0SaYwI6PDDImR11JkqgHcPmQssjxIn6bUshygDFJUTxPMpHk+jfjPgupgdnYV2R/g7xSjtpah8RJBewhwf0gGK6XI92u4wXFEU40afJ4DN4h5LcAd+40HI3JgJecuT0c062W0i2hQJUTcxan3/CMW1PF2K6bbA+Daz4xRs1D3Br1Cm0OihKCqizW78/nXAF/G5TXrEcVzaNMH6CyMswqsAHqDyDLEyou8lwOXnKF8DjI6KjV3KzMBiXkDH8ij/H214J5A596ekrZ3F0zXlWeL7+P5eUrNo3/QwC15uxthuzidy7DzKRwEDaAViiDgKbTbz7CJnzo0bN7pIfIiid8SuPwn25o3QCmpnyjlZkyxPP8EomCJzrGb7GJMx7tNsq4MT2xMUYaiErZOluTzKsnz3gwCeCZyVRZJfYplNEokEjwrPtxlxjeYAk+F1F74VAzPxQRNYYdtpOUvWs8J1sGhBJMNsb7igN8plJs1eSmLIhLKE4rvaCX27gOhLpLOsIzJ7qn/i+wZzcvSOZ23/du8TZjwV8zHIXoP4R3ifBxiFz1dcVpa3aPntPE+c6TmIWE9EtcMmAcPdWAhYhAXxcLOQi9L1WhD1Sc8p1d2oL7XGiRKp8F4A2i8K/nfI+y/gsTDJ/YC/8+AD5Uh04KHiGl+cIFPnBDDrPMjwRGkLXyxO4VGbfQWnDH2v0bVWE3C9QOXlepbgjEfIJQI6XDG3z5ahD9cw2pS78ipB85wyScNTvsVzlzzhL8/jRrnmVjfFJK/m3m4nj9vbgQTguT8XZTjsm672R5uJKEaQmBI/c58gyus8ZDagLpEVSJBIyHp4jn++xqPV71OgQgJYEWOtZ/haxRtKmWOBu8xdBLftWltsY84zE6WIEy/eIOWL+BaayMx+KHtL7EAkqdNDLiEXmEMUHniedtJqg9HmZtfvt26vNi0BdG3Ft3g8ZOf7PAu59TxtzivLNIekyi+wD1i8CuUiD9FXAa8C+/xS3JPmZnomyc7H+fb4/Se0bk41Fel621r4cgVxbq91V4jVqwB7HTe2M7jgB+QWHavZkDRPmZcASoZEmBx6i75bGjPcMdL4/VKGFAGWZkGzPG0XAbdL9A81G5LOmUnC9hHKJeO7dcUMjblSl12867ElFTtaGl20xvvLGPdVz/8TVuU7y0x1PG7vtNg24oz9Uo/Z412++VFWI7Fcog9tu9Lm6gvRmIPv9x1xmQAu6RDkXtbOtlGEmpgD5Nvnyc0dcv0EE6cfdi1HmhMf9wDF3k3gtRvEedhxjpgfqPb9PU9iEJHnyOUA7bQUXh6kq/D7l2iTjWv7XOD530BDr8jIrus+srXjt4MzumJMHuTsBa63YKE1+RR5lBjEikCCnWKWiHdzOgKO+nRIBAF88za/IFmJ3eMZov4CYxGBabcpGL8EYx+SeMXJeRwHNsV/h+vdxeuhEpN3ZyNY78Gm2fknJxVGhyjixPiQvVkNzT1elD9Py/aTAL64Hb9vcYmC9zfdXdT/C1LeGbg4rnBaAihDFJH12W5ulfNCNe/xTsP3bp8ikzJs5BF+5PNfAQYAPaseTdsEcaYAAAAASUVORK5CYII="
      };
    },
    computed: {
      iconSnowWidth() {
        return (Math.floor(this.iconSize / 24) || 1) * 2;
      },
      contentdownText() {
        return this.contentText.contentdown || t$1("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t$1("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t$1("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages = getCurrentPages();
      var page = pages[pages.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    methods: {
      onClick() {
        this.$emit("clickLoadMore", {
          detail: {
            status: this.status
          }
        });
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-load-more",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.webviewHide && ($props.iconType === "circle" || $props.iconType === "auto" && $data.platform === "android") && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
        class: "uni-load-more__img uni-load-more__img--android-MP"
      }, [
        vue.createElementVNode("view", {
          class: "uni-load-more__img-icon",
          style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
        }, null, 4),
        vue.createElementVNode("view", {
          class: "uni-load-more__img-icon",
          style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
        }, null, 4),
        vue.createElementVNode("view", {
          class: "uni-load-more__img-icon",
          style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
        }, null, 4)
      ], 4)) : !$data.webviewHide && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
        class: "uni-load-more__img uni-load-more__img--ios-H5"
      }, [
        vue.createElementVNode("image", {
          src: $data.imgBase64,
          mode: "widthFix"
        }, null, 8, ["src"])
      ], 4)) : vue.createCommentVNode("v-if", true),
      $props.showText ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 2,
        class: "uni-load-more__text",
        style: vue.normalizeStyle({ color: $props.color })
      }, vue.toDisplayString($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText), 5)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-90d4256a"], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"]]);
  const url = "https://www.hkiii.cn";
  const tenapi = "https://api.tianapi.com";
  const seturl = "https://tp.hkiii.cn";
  const setapi = "dc483e80a7a0bd9ef71d8cf973673924";
  var set = {
    url,
    seturl,
    setapi,
    tenapi
  };
  const myRequest = (options) => {
    return new Promise((resolve, reject) => {
      uni.request({
        url: set.url + options.url,
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: options.method || "POST",
        data: options.data || {},
        success: (res) => {
          if (res.data.msg == "parameter error") {
            uni.showToast({
              title: "\u5FC5\u586B\u53C2\u6570\u7F3A\u5931"
            });
          } else if (res.data.msg == "sign error") {
            uni.showToast({
              title: "\u7B7E\u540D\u9519\u8BEF"
            });
          } else if (res.data.msg == "api is closed") {
            uni.showToast({
              title: "\u672A\u5F00\u542FAPI\uFF0C\u8BF7\u5728\u540E\u53F0\u8BBE\u7F6E\u5F00\u542F"
            });
          } else if (res.data.msg == "API function is not exist") {
            uni.showToast({
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
      uni.request({
        url: set.tenapi + options.url,
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
  const htRequest = (options) => {
    return new Promise((resolve, reject) => {
      uni.request({
        url: set.seturl + options.url,
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
  const _sfc_main$j = {
    data() {
      return {
        dataa: [],
        avatarUrl: "../../static/logo.png",
        $req_time: "",
        $sign: "",
        page: 1,
        shoulu: "",
        description: "",
        di: false,
        backTopValue: false,
        onRefresh: false,
        status: "loading",
        blogSorts: [],
        images: [
          "http://cdn.hkiii.cn//img/_2022/06/21/09/52/42/167/6483441/13482961188039425428",
          "http://cdn.hkiii.cn//img/_2022/06/21/09/52/42/181/6483441/13482961192300838800",
          "http://cdn.hkiii.cn//img/_2022/06/21/09/52/42/172/6483441/13482961190153354896"
        ],
        opacity: [
          "opacity:0.1;background:#fff;",
          "opacity:0.125;background:#fff;",
          "opacity:0.15;background:#fff;",
          "opacity:0.175;background:#fff;",
          "opacity:0.2;background:#fff;",
          "opacity:0.225;background:#fff;",
          "opacity:0.25;background:#fff;",
          "opacity:0.275;background:#fff;",
          "opacity:0.3;background:#fff;",
          "opacity:0.325;background:#fff;",
          "opacity:0.375;background:#fff;",
          "opacity:0.4;background:#fff;",
          "opacity:0.425;background:#fff;",
          "opacity:0.45;background:#fff;",
          "opacity:0.475;background:#fff;",
          "opacity:0.5;background:#fff;",
          "opacity:0.525;background:#fff;",
          "opacity:0.55;background:#fff;",
          "opacity:0.575;background:#fff;",
          "opacity:0.6;background:#fff;",
          "opacity:0.625;background:#fff;",
          "opacity:0.65;background:#fff;",
          "opacity:0.675;background:#fff;",
          "opacity:0.7;background:#fff;",
          "opacity:0.725;background:#fff;",
          "opacity:0.75;background:#fff;",
          "opacity:0.775;background:#fff;",
          "opacity:0.8;background:#fff;",
          "opacity:0.825;background:#fff;",
          "opacity:0.85;background:#fff;",
          "opacity:0.875;background:#fff;",
          "opacity:0.9;background:#fff;",
          "opacity:0.925;background:#fff;",
          "opacity:0.95;background:#fff;",
          "opacity:0.975;background:#fff;"
        ],
        scrollTop: 0,
        old: {
          scrollTop: 0
        },
        blogAll: "",
        current: 0,
        scrollinto: "",
        appData: ""
      };
    },
    mounted() {
    },
    onLoad() {
      this.blog(1);
      this.getSorts();
      this.getData();
    },
    onShow() {
      var that = this;
      uni.getStorage({
        key: "avatarUrl",
        success: function(res) {
          that.avatarUrl = res.data;
        }
      });
    },
    onReachBottom() {
      this.page = this.page + 1;
      this.blog(this.page);
    },
    onPullDownRefresh() {
      this.dataa = "";
      this.status = "loading";
      this.page = 1;
      this.blog(this.page);
      uni.stopPullDownRefresh();
    },
    onPageScroll: function(e) {
      var scrollTop = e.scrollTop;
      var backTopValue = scrollTop > 500 ? true : false;
      this.backTopValue = backTopValue;
    },
    onShareAppMessage(res) {
      if (res.from === "button") {
        formatAppLog("log", "at pages/index/index.vue:221", res.target);
      }
      return {
        title: "\u5206\u4EAB\u597D\u73A9\u7684\u7A0B\u5E8F\uFF01",
        imageUrl: this.appData.data.shareimg,
        path: "pages/index/index"
      };
    },
    methods: {
      copyUrl() {
        uni.setClipboardData({
          data: this.appData.data.downurl,
          success: function() {
          }
        });
      },
      copyQQ() {
        uni.setClipboardData({
          data: this.appData.data.qq,
          success: function() {
          }
        });
      },
      async getData() {
        const res = await htRequest({
          url: "/index.php/index/index/get_miniapp",
          method: "POST",
          data: {
            setapi: set.setapi
          }
        });
        this.appData = res.data;
        uni.setStorage({
          key: "appData",
          data: res.data
        });
      },
      change(index2, id) {
        uni.navigateTo({
          url: "../sort-info/sort-info?id=" + id
        });
        this.current = index2;
        this.scrollinto = "tab" + index2;
      },
      onChangeTab(e) {
        this.change(e.detail.current);
      },
      getUser() {
        uni.switchTab({
          url: "../home/home"
        });
      },
      showDrawer(e) {
        this.$refs[e].open();
      },
      closeDrawer(e) {
        this.$refs[e].close();
      },
      delHtmlTag(str) {
        var reg2 = RegExp("<.*?>+|\n|\r", "ig");
        var result = str.replace(reg2, "");
        return result;
      },
      imageError(e, index2) {
        this.dataa[index2]["cover"] = "http://cdn.hkiii.cn//img/_2022/06/29/01/38/12/502/6483441/11289324486965076622";
      },
      getimg(str) {
        var srcReg = /<img.+?src=[\'\"]?([^\'\"]*)[\'\"]?/i;
        var result = str.match(srcReg);
        if (result != null) {
          return result[1];
        } else {
          return false;
        }
      },
      toInfo(e, u) {
        uni.navigateTo({
          url: "/pages/blog-info/blog-info?id=" + e + "&url=" + u
        });
      },
      search(res) {
        uni.navigateTo({
          url: "../search/search?search=" + res.value
        });
      },
      messageToggle(type) {
        this.msgType = type;
        this.messageText = `\u8FD9\u662F\u4E00\u6761${type}\u6D88\u606F\u63D0\u793A`;
        this.$refs.message.open();
      },
      xhj() {
        uni.pageScrollTo({
          scrollTop: 0,
          duration: 300
        });
      },
      async blog(page) {
        const res = await myRequest({
          url: "/?rest-api=article_list",
          method: "GET",
          data: {
            page,
            count: 10
          }
        });
        if (res.data.data.articles == "") {
          this.status = "no-more";
        } else {
          this.dataa = [...this.dataa, ...res.data.data.articles];
        }
      },
      async blogall() {
        const res = await myRequest({
          url: "/?rest-api=article_list",
          method: "GET",
          data: {
            count: 999
          }
        });
        this.blogAll = [...this.blogAll, ...res.data.data.articles];
      },
      async getSorts() {
        const res = await myRequest({
          url: "/?rest-api=sort_list",
          method: "GET"
        });
        this.blogSorts = res.data.data.sorts;
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$4);
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$3);
    const _component_uni_drawer = resolveEasycom(vue.resolveDynamicComponent("uni-drawer"), __easycom_2$2);
    const _component_uni_notice_bar = resolveEasycom(vue.resolveDynamicComponent("uni-notice-bar"), __easycom_3);
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("view", { class: "user" }, [
          vue.createElementVNode("view", {
            class: "user-img",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.showDrawer("showLeft"))
          }, [
            vue.createCommentVNode(' <image class="user-img" src="../../static/logo.png" mode=""></image>'),
            vue.createVNode(_component_uni_icons, {
              type: "settings",
              color: "#007AFF	",
              size: "30"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "secrch" }, [
          vue.createVNode(_component_uni_search_bar, {
            radius: 5,
            placeholder: "\u8BF7\u8F93\u5165\u8981\u641C\u7D22\u7684\u5185\u5BB9",
            cancelButton: "none",
            bgColor: "#eee",
            onConfirm: $options.search,
            onCancel: $options.search,
            "cancel-text": "\u641C\u7D22"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_icons, {
                slot: "searchIcon",
                color: "#999999",
                size: "18",
                type: "home"
              })
            ]),
            _: 1
          }, 8, ["onConfirm", "onCancel"])
        ]),
        vue.createElementVNode("view", { class: "user" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              onClick: _cache[1] || (_cache[1] = ($event) => $options.getUser()),
              class: "user-img",
              src: $data.avatarUrl,
              mode: ""
            }, null, 8, ["src"])
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "example-body" }, [
        vue.createVNode(_component_uni_drawer, {
          ref: "showLeft",
          mode: "left",
          width: 320
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("scroll-view", {
              style: { "height": "100%" },
              "scroll-y": "true"
            }, [
              vue.createElementVNode("view", { class: "title" }, [
                vue.createElementVNode("view", { class: "title-blue" }),
                vue.createElementVNode("text", null, "\u6587\u7AE0\u5206\u7C7B")
              ]),
              vue.createElementVNode("view", { class: "sorts" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.blogSorts, (s, index2) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index2,
                    id: "tab" + index2,
                    class: vue.normalizeClass(["scroll-view-item_H", $data.current == index2 ? "active" : ""]),
                    onClick: ($event) => $options.change(index2, s.sid)
                  }, [
                    vue.createElementVNode("view", { class: "sort-item" }, vue.toDisplayString(s.sortname), 1)
                  ], 10, ["id", "onClick"]);
                }), 128))
              ])
            ])
          ]),
          _: 1
        }, 512)
      ]),
      vue.createElementVNode("swiper", {
        class: "swiper-box",
        "indicator-dots": "true",
        autoplay: "true",
        circular: "true",
        "previous-margin": "10px",
        "next-margin": "10px"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.images, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index2 }, [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["swiper-item", "swiper-item" + index2])
            }, [
              vue.createElementVNode("img", {
                src: item,
                class: "swiper-img",
                srcset: ""
              }, null, 8, ["src"])
            ], 2)
          ]);
        }), 128))
      ]),
      vue.createElementVNode("view", { class: "bannertm" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.opacity, (i) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            style: vue.normalizeStyle(i),
            class: "tm"
          }, null, 4);
        }), 256))
      ]),
      vue.createVNode(_component_uni_notice_bar, {
        "show-icon": "",
        scrollable: "",
        "background-color": "#fff",
        color: "#000",
        text: $data.appData.data.gonggao
      }, null, 8, ["text"]),
      vue.createCommentVNode(' 		<scroll-view scroll-x="true" style="width: 100%;white-space: nowrap;">\n			<view class="sorts">\n				\n			</view>\n		</scroll-view> '),
      vue.createElementVNode("view", { class: "baidu-box" }, [
        vue.createElementVNode("view", { class: "baidu-item" }, [
          vue.createElementVNode("view", { class: "sl-icon" }, [
            vue.createVNode(_component_uni_icons, {
              color: "#fd7081",
              type: "star-filled",
              size: "30"
            })
          ]),
          vue.createElementVNode("view", { class: "shoulu" }, [
            vue.createElementVNode("view", { class: "sl-content" }, "App\u4E0B\u8F7D"),
            vue.createElementVNode("view", { class: "sl-title" }, "\u590D\u5236Url")
          ]),
          vue.createVNode(_component_uni_icons, {
            onClick: _cache[2] || (_cache[2] = ($event) => $options.copyUrl()),
            color: "#aaa",
            type: "circle-filled",
            size: "20"
          })
        ]),
        vue.createElementVNode("view", { class: "baidu-item" }, [
          vue.createElementVNode("view", { class: "sl-icon-sg" }, [
            vue.createVNode(_component_uni_icons, {
              color: "#66ccff",
              type: "qq",
              size: "30"
            })
          ]),
          vue.createElementVNode("view", { class: "shoulu" }, [
            vue.createElementVNode("view", { class: "sl-content" }, "\u8054\u7CFB\u5BA2\u670D"),
            vue.createElementVNode("view", { class: "sl-title" }, "\u590D\u5236QQ")
          ]),
          vue.createVNode(_component_uni_icons, {
            onClick: _cache[3] || (_cache[3] = ($event) => $options.copyQQ()),
            color: "#aaa",
            type: "circle-filled",
            size: "20"
          })
        ])
      ]),
      $data.backTopValue ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "xiaohuojian",
        onClick: _cache[4] || (_cache[4] = (...args) => $options.xhj && $options.xhj(...args))
      }, [
        vue.createElementVNode("image", {
          src: "/static/fanhuidingbu.png",
          mode: ""
        })
      ])) : vue.createCommentVNode("v-if", true),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.dataa, (item, index2) => {
        return vue.openBlock(), vue.createElementBlock("view", { key: index2 }, [
          $options.getimg(item.description) || item.cover ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "list-items",
            onClick: ($event) => $options.toInfo(item.id, item.url)
          }, [
            vue.createElementVNode("view", { class: "img-box" }, [
              vue.createElementVNode("image", {
                onError: ($event) => $options.imageError($event, index2),
                class: "lists-img",
                src: item.cover || $options.getimg(item.description),
                mode: "scaleToFill"
              }, null, 40, ["onError", "src"])
            ]),
            vue.createElementVNode("view", { class: "list-box" }, [
              vue.createElementVNode("view", { class: "list-title" }, [
                item.top == "y" ? (vue.openBlock(), vue.createElementBlock("span", {
                  key: 0,
                  class: "top"
                }, "\u7F6E\u9876")) : vue.createCommentVNode("v-if", true),
                vue.createTextVNode(vue.toDisplayString(item.title), 1)
              ]),
              vue.createElementVNode("text", { class: "desc" }, vue.toDisplayString($options.delHtmlTag(item.description)), 1),
              vue.createElementVNode("view", { class: "many" }, [
                vue.createElementVNode("view", { class: "sort" }, vue.toDisplayString(item.sort_name), 1),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode("view", { class: "read" }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "fire-filled",
                      size: "17"
                    }),
                    vue.createTextVNode(vue.toDisplayString(item.views), 1)
                  ]),
                  vue.createElementVNode("view", { class: "comments" }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "chat-filled",
                      size: "17"
                    }),
                    vue.createTextVNode(vue.toDisplayString(item.comnum), 1)
                  ])
                ])
              ])
            ])
          ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
          !$options.getimg(item.description) && item.cover == "" ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "list-items",
            onClick: ($event) => $options.toInfo(item.id, item.url)
          }, [
            vue.createElementVNode("view", { class: "list-box-null" }, [
              vue.createElementVNode("view", { class: "list-title" }, [
                item.top == "y" ? (vue.openBlock(), vue.createElementBlock("span", {
                  key: 0,
                  class: "top"
                }, "\u7F6E\u9876")) : vue.createCommentVNode("v-if", true),
                vue.createTextVNode(vue.toDisplayString(item.title), 1)
              ]),
              vue.createElementVNode("text", { class: "desc" }, vue.toDisplayString($options.delHtmlTag(item.description)), 1),
              vue.createElementVNode("view", { class: "many" }, [
                vue.createElementVNode("view", { class: "sort" }, vue.toDisplayString(item.sort_name), 1),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode("view", { class: "read" }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "fire-filled",
                      size: "17"
                    }),
                    vue.createTextVNode(vue.toDisplayString(item.views), 1)
                  ]),
                  vue.createElementVNode("view", { class: "comments" }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "chat-filled",
                      size: "17"
                    }),
                    vue.createTextVNode(vue.toDisplayString(item.comnum), 1)
                  ])
                ])
              ])
            ])
          ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
        ]);
      }), 128)),
      vue.createVNode(_component_uni_load_more, {
        color: "#007AFF",
        status: $data.status
      }, null, 8, ["status"])
    ]);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/index/index.vue"]]);
  const _sfc_main$i = {
    name: "uni-easyinput",
    emits: ["click", "iconClick", "update:modelValue", "input", "focus", "blur", "confirm"],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: String,
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 15
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: true
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        errMsg: "",
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false
      };
    },
    computed: {
      msg() {
        return this.errorMessage || this.errMsg;
      },
      inputMaxlength() {
        return Number(this.maxlength);
      }
    },
    watch: {
      value(newVal) {
        if (this.errMsg)
          this.errMsg = "";
        this.val = newVal;
        if (this.form && this.formItem && !this.is_reset) {
          this.is_reset = false;
          this.formItem.setValue(newVal);
        }
      },
      modelValue(newVal) {
        if (this.errMsg)
          this.errMsg = "";
        this.val = newVal;
        if (this.form && this.formItem && !this.is_reset) {
          this.is_reset = false;
          this.formItem.setValue(newVal);
        }
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
        });
      }
    },
    created() {
      if (!this.value && this.value !== 0) {
        this.val = this.modelValue;
      }
      if (!this.modelValue && this.modelValue !== 0) {
        this.val = this.value;
      }
      this.form = this.getForm("uniForms");
      this.formItem = this.getForm("uniFormsItem");
      if (this.form && this.formItem) {
        if (this.formItem.name) {
          if (!this.is_reset) {
            this.is_reset = false;
            this.formItem.setValue(this.val);
          }
          this.rename = this.formItem.name;
          this.form.inputChildrens.push(this);
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
      });
    },
    methods: {
      init() {
      },
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      onEyes() {
        this.showPassword = !this.showPassword;
      },
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      onFocus(event) {
        this.$emit("focus", event);
      },
      onBlur(event) {
        event.detail.value;
        this.$emit("blur", event);
      },
      onConfirm(e) {
        this.$emit("confirm", e.detail.value);
      },
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
      },
      fieldClick() {
        this.$emit("click");
      },
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
      style: vue.normalizeStyle({ color: $props.inputBorder && $options.msg ? "#e43d33" : $props.styles.color })
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-easyinput__content", { "is-input-border": $props.inputBorder, "is-input-error-border": $props.inputBorder && $options.msg, "is-textarea": $props.type === "textarea", "is-disabled": $props.disabled }]),
        style: vue.normalizeStyle({ "border-color": $props.inputBorder && $options.msg ? "#dd524d" : $props.styles.borderColor, "background-color": $props.disabled ? $props.styles.disableColor : "" })
      }, [
        $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
          key: 0,
          class: "content-clear-icon",
          type: $props.prefixIcon,
          color: "#c0c4cc",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix"))
        }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
        $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
          key: 1,
          class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
          name: $props.name,
          value: $data.val,
          placeholder: $props.placeholder,
          placeholderStyle: $props.placeholderStyle,
          disabled: $props.disabled,
          "placeholder-class": "uni-easyinput__placeholder-class",
          maxlength: $options.inputMaxlength,
          focus: $data.focused,
          autoHeight: $props.autoHeight,
          onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
          onBlur: _cache[2] || (_cache[2] = (...args) => $options.onBlur && $options.onBlur(...args)),
          onFocus: _cache[3] || (_cache[3] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args))
        }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight"])) : (vue.openBlock(), vue.createElementBlock("input", {
          key: 2,
          type: $props.type === "password" ? "text" : $props.type,
          class: "uni-easyinput__content-input",
          style: vue.normalizeStyle({
            "padding-right": $props.type === "password" || $props.clearable || $props.prefixIcon ? "" : "10px",
            "padding-left": $props.prefixIcon ? "" : "10px"
          }),
          name: $props.name,
          value: $data.val,
          password: !$data.showPassword && $props.type === "password",
          placeholder: $props.placeholder,
          placeholderStyle: $props.placeholderStyle,
          "placeholder-class": "uni-easyinput__placeholder-class",
          disabled: $props.disabled,
          maxlength: $options.inputMaxlength,
          focus: $data.focused,
          confirmType: $props.confirmType,
          onFocus: _cache[5] || (_cache[5] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onBlur: _cache[6] || (_cache[6] = (...args) => $options.onBlur && $options.onBlur(...args)),
          onInput: _cache[7] || (_cache[7] = (...args) => $options.onInput && $options.onInput(...args)),
          onConfirm: _cache[8] || (_cache[8] = (...args) => $options.onConfirm && $options.onConfirm(...args))
        }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType"])),
        $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 3 }, [
          $data.val ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
            type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
            size: 18,
            color: "#c0c4cc",
            onClick: $options.onEyes
          }, null, 8, ["class", "type", "onClick"])) : vue.createCommentVNode("v-if", true)
        ], 2112)) : $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 4 }, [
          $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: "content-clear-icon",
            type: $props.suffixIcon,
            color: "#c0c4cc",
            onClick: _cache[9] || (_cache[9] = ($event) => $options.onClickIcon("suffix"))
          }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
        ], 2112)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 5 }, [
          $props.clearable && $data.val && !$props.disabled ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
            type: "clear",
            size: $props.clearSize,
            color: "#c0c4cc",
            onClick: $options.onClear
          }, null, 8, ["class", "size", "onClick"])) : vue.createCommentVNode("v-if", true)
        ], 2112)),
        vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
      ], 6)
    ], 6);
  }
  var __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-abe12412"], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  const _sfc_main$h = {
    name: "uniCollapseItem",
    props: {
      title: {
        type: String,
        default: ""
      },
      name: {
        type: [Number, String],
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      },
      showAnimation: {
        type: Boolean,
        default: false
      },
      open: {
        type: Boolean,
        default: false
      },
      thumb: {
        type: String,
        default: ""
      },
      titleBorder: {
        type: String,
        default: "auto"
      },
      border: {
        type: Boolean,
        default: true
      },
      showArrow: {
        type: Boolean,
        default: true
      }
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        isOpen: false,
        isheight: null,
        height: 0,
        elId,
        nameSync: 0
      };
    },
    watch: {
      open(val) {
        this.isOpen = val;
        this.onClick(val, "init");
      }
    },
    updated(e) {
      this.$nextTick(() => {
        this.init(true);
      });
    },
    created() {
      this.collapse = this.getCollapse();
      this.oldHeight = 0;
      this.onClick(this.open, "init");
    },
    unmounted() {
      this.__isUnmounted = true;
      this.uninstall();
    },
    mounted() {
      if (!this.collapse)
        return;
      if (this.name !== "") {
        this.nameSync = this.name;
      } else {
        this.nameSync = this.collapse.childrens.length + "";
      }
      if (this.collapse.names.indexOf(this.nameSync) === -1) {
        this.collapse.names.push(this.nameSync);
      } else {
        formatAppLog("warn", "at uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue:154", `name \u503C ${this.nameSync} \u91CD\u590D`);
      }
      if (this.collapse.childrens.indexOf(this) === -1) {
        this.collapse.childrens.push(this);
      }
      this.init();
    },
    methods: {
      init(type) {
        this.getCollapseHeight(type);
      },
      uninstall() {
        if (this.collapse) {
          this.collapse.childrens.forEach((item, index2) => {
            if (item === this) {
              this.collapse.childrens.splice(index2, 1);
            }
          });
          this.collapse.names.forEach((item, index2) => {
            if (item === this.nameSync) {
              this.collapse.names.splice(index2, 1);
            }
          });
        }
      },
      onClick(isOpen, type) {
        if (this.disabled)
          return;
        this.isOpen = isOpen;
        if (this.isOpen && this.collapse) {
          this.collapse.setAccordion(this);
        }
        if (type !== "init") {
          this.collapse.onChange(isOpen, this);
        }
      },
      getCollapseHeight(type, index2 = 0) {
        const views = uni.createSelectorQuery().in(this);
        views.select(`#${this.elId}`).fields({
          size: true
        }, (data2) => {
          if (index2 >= 10)
            return;
          if (!data2) {
            index2++;
            this.getCollapseHeight(false, index2);
            return;
          }
          this.height = data2.height;
          this.isheight = true;
          if (type)
            return;
          this.onClick(this.isOpen, "init");
        }).exec();
      },
      getNvueHwight(type) {
        dom.getComponentRect(this.$refs["collapse--hook"], (option) => {
          if (option && option.result && option.size) {
            this.height = option.size.height;
            this.isheight = true;
            if (type)
              return;
            this.onClick(this.open, "init");
          }
        });
      },
      getCollapse(name = "uniCollapse") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-collapse-item" }, [
      vue.createCommentVNode(" onClick(!isOpen) "),
      vue.createElementVNode("view", {
        onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick(!$data.isOpen)),
        class: vue.normalizeClass(["uni-collapse-item__title", { "is-open": $data.isOpen && $props.titleBorder === "auto", "uni-collapse-item-border": $props.titleBorder !== "none" }])
      }, [
        vue.createElementVNode("view", { class: "uni-collapse-item__title-wrap" }, [
          vue.renderSlot(_ctx.$slots, "title", {}, () => [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["uni-collapse-item__title-box", { "is-disabled": $props.disabled }])
            }, [
              $props.thumb ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 0,
                src: $props.thumb,
                class: "uni-collapse-item__title-img"
              }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("text", { class: "uni-collapse-item__title-text" }, vue.toDisplayString($props.title), 1)
            ], 2)
          ], true)
        ]),
        $props.showArrow ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: vue.normalizeClass([{ "uni-collapse-item__title-arrow-active": $data.isOpen, "uni-collapse-item--animation": $props.showAnimation === true }, "uni-collapse-item__title-arrow"])
        }, [
          vue.createVNode(_component_uni_icons, {
            color: $props.disabled ? "#ddd" : "#bbb",
            size: "14",
            type: "bottom"
          }, null, 8, ["color"])
        ], 2)) : vue.createCommentVNode("v-if", true)
      ], 2),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-collapse-item__wrap", { "is--transition": $props.showAnimation }]),
        style: vue.normalizeStyle({ height: ($data.isOpen ? $data.height : 0) + "px" })
      }, [
        vue.createElementVNode("view", {
          id: $data.elId,
          ref: "collapse--hook",
          class: vue.normalizeClass(["uni-collapse-item__wrap-content", { open: $data.isheight, "uni-collapse-item--border": $props.border && $data.isOpen }])
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 10, ["id"])
      ], 6)
    ]);
  }
  var __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-41027c34"], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue"]]);
  const _sfc_main$g = {
    name: "uniCollapse",
    emits: ["change", "activeItem", "input", "update:modelValue"],
    props: {
      value: {
        type: [String, Array],
        default: ""
      },
      modelValue: {
        type: [String, Array],
        default: ""
      },
      accordion: {
        type: [Boolean, String],
        default: false
      }
    },
    data() {
      return {};
    },
    computed: {
      dataValue() {
        let value = typeof this.value === "string" && this.value === "" || Array.isArray(this.value) && this.value.length === 0;
        let modelValue = typeof this.modelValue === "string" && this.modelValue === "" || Array.isArray(this.modelValue) && this.modelValue.length === 0;
        if (value) {
          return this.modelValue;
        }
        if (modelValue) {
          return this.value;
        }
        return this.value;
      }
    },
    watch: {
      dataValue(val) {
        this.setOpen(val);
      }
    },
    created() {
      this.childrens = [];
      this.names = [];
    },
    mounted() {
      this.$nextTick(() => {
        this.setOpen(this.dataValue);
      });
    },
    methods: {
      setOpen(val) {
        let str = typeof val === "string";
        let arr = Array.isArray(val);
        this.childrens.forEach((vm, index2) => {
          if (str) {
            if (val === vm.nameSync) {
              if (!this.accordion) {
                formatAppLog("warn", "at uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue:75", "accordion \u5C5E\u6027\u4E3A false ,v-model \u7C7B\u578B\u5E94\u8BE5\u4E3A array");
                return;
              }
              vm.isOpen = true;
            }
          }
          if (arr) {
            val.forEach((v) => {
              if (v === vm.nameSync) {
                if (this.accordion) {
                  formatAppLog("warn", "at uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue:85", "accordion \u5C5E\u6027\u4E3A true ,v-model \u7C7B\u578B\u5E94\u8BE5\u4E3A string");
                  return;
                }
                vm.isOpen = true;
              }
            });
          }
        });
        this.emit(val);
      },
      setAccordion(self2) {
        if (!this.accordion)
          return;
        this.childrens.forEach((vm, index2) => {
          if (self2 !== vm) {
            vm.isOpen = false;
          }
        });
      },
      resize() {
        this.childrens.forEach((vm, index2) => {
          vm.getCollapseHeight();
        });
      },
      onChange(isOpen, self2) {
        let activeItem = [];
        if (this.accordion) {
          activeItem = isOpen ? self2.nameSync : "";
        } else {
          this.childrens.forEach((vm, index2) => {
            if (vm.isOpen) {
              activeItem.push(vm.nameSync);
            }
          });
        }
        this.$emit("change", activeItem);
        this.emit(activeItem);
      },
      emit(val) {
        this.$emit("input", val);
        this.$emit("update:modelValue", val);
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-collapse" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  var __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-275068f4"], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue"]]);
  var popup = {
    data() {
      return {};
    },
    created() {
      this.popup = this.getParent();
    },
    methods: {
      getParent(name = "uniPopup") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  const _sfc_main$f = {
    name: "uniPopupMessage",
    mixins: [popup],
    props: {
      type: {
        type: String,
        default: "success"
      },
      message: {
        type: String,
        default: ""
      },
      duration: {
        type: Number,
        default: 3e3
      },
      maskShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {};
    },
    created() {
      this.popup.maskShow = this.maskShow;
      this.popup.messageChild = this;
    },
    methods: {
      timerClose() {
        if (this.duration === 0)
          return;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.popup.close();
        }, this.duration);
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-popup-message" }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-popup-message__box fixforpc-width", "uni-popup__" + $props.type])
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode("text", {
            class: vue.normalizeClass(["uni-popup-message-text", "uni-popup__" + $props.type + "-text"])
          }, vue.toDisplayString($props.message), 3)
        ], true)
      ], 2)
    ]);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-38167fe2"], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/uni_modules/uni-popup/components/uni-popup-message/uni-popup-message.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation(options);
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config2 = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, __spreadValues({
          styles
        }, config2), (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config: config2
        } = obj;
        this._animateRun(styles, config2).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config2 = {}) {
      this.animation.step(config2);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$e = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      stylesObject() {
        let styles = __spreadProps(__spreadValues({}, this.styles), {
          "transition-duration": this.duration / 1e3 + "s"
        });
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      step(obj, config2 = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139", `\u65B9\u6CD5 ${i} \u4E0D\u5B58\u5728`);
          }
        }
        this.animation.step(config2);
        return this;
      },
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$d = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      animation: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: "center"
      },
      isMaskClick: {
        type: Boolean,
        default: null
      },
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      }
    },
    watch: {
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: this.isDesktop ? "fixforpc-top" : "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth: windowWidth2,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth2;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    unmounted() {
      this.setH5Visible();
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible() {
      },
      closeMask() {
        this.maskShow = false;
      },
      disableMask() {
        this.mkclick = false;
      },
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          clearTimeout(this.timer);
          this.showPopup = false;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:280", "\u7F3A\u5C11\u7C7B\u578B\uFF1A", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_2);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
    }, [
      vue.createElementVNode("view", {
        onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
      }, [
        $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
          key: "1",
          name: "mask",
          "mode-class": "fade",
          styles: $data.maskClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
        vue.createVNode(_component_uni_transition, {
          key: "2",
          "mode-class": $data.ani,
          name: "content",
          styles: $data.transClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
              style: vue.normalizeStyle({ backgroundColor: $options.bg }),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 6)
          ]),
          _: 3
        }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
      ], 32)
    ], 2)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-7c43d41b"], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var md5$1 = { exports: {} };
  /**
   * [js-md5]{@link https://github.com/emn178/js-md5}
   *
   * @namespace md5
   * @version 0.7.3
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2014-2017
   * @license MIT
   */
  (function(module) {
    (function() {
      var ERROR = "input is invalid type";
      var WINDOW = typeof window === "object";
      var root = WINDOW ? window : {};
      if (root.JS_MD5_NO_WINDOW) {
        WINDOW = false;
      }
      var WEB_WORKER = !WINDOW && typeof self === "object";
      var NODE_JS = !root.JS_MD5_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
      if (NODE_JS) {
        root = commonjsGlobal;
      } else if (WEB_WORKER) {
        root = self;
      }
      var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && true && module.exports;
      var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
      var HEX_CHARS = "0123456789abcdef".split("");
      var EXTRA = [128, 32768, 8388608, -2147483648];
      var SHIFT = [0, 8, 16, 24];
      var OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"];
      var BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      var blocks = [], buffer8;
      if (ARRAY_BUFFER) {
        var buffer = new ArrayBuffer(68);
        buffer8 = new Uint8Array(buffer);
        blocks = new Uint32Array(buffer);
      }
      if (root.JS_MD5_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function(obj) {
          return Object.prototype.toString.call(obj) === "[object Array]";
        };
      }
      if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function(obj) {
          return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
        };
      }
      var createOutputMethod = function(outputType) {
        return function(message) {
          return new Md5(true).update(message)[outputType]();
        };
      };
      var createMethod = function() {
        var method2 = createOutputMethod("hex");
        if (NODE_JS) {
          method2 = nodeWrap(method2);
        }
        method2.create = function() {
          return new Md5();
        };
        method2.update = function(message) {
          return method2.create().update(message);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var type = OUTPUT_TYPES[i];
          method2[type] = createOutputMethod(type);
        }
        return method2;
      };
      var nodeWrap = function(method) {
        var crypto = eval("require('crypto')");
        var Buffer = eval("require('buffer').Buffer");
        var nodeMethod = function(message) {
          if (typeof message === "string") {
            return crypto.createHash("md5").update(message, "utf8").digest("hex");
          } else {
            if (message === null || message === void 0) {
              throw ERROR;
            } else if (message.constructor === ArrayBuffer) {
              message = new Uint8Array(message);
            }
          }
          if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) {
            return crypto.createHash("md5").update(new Buffer(message)).digest("hex");
          } else {
            return method(message);
          }
        };
        return nodeMethod;
      };
      function Md5(sharedMemory) {
        if (sharedMemory) {
          blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
          this.blocks = blocks;
          this.buffer8 = buffer8;
        } else {
          if (ARRAY_BUFFER) {
            var buffer2 = new ArrayBuffer(68);
            this.buffer8 = new Uint8Array(buffer2);
            this.blocks = new Uint32Array(buffer2);
          } else {
            this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          }
        }
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
        this.finalized = this.hashed = false;
        this.first = true;
      }
      Md5.prototype.update = function(message) {
        if (this.finalized) {
          return;
        }
        var notString, type = typeof message;
        if (type !== "string") {
          if (type === "object") {
            if (message === null) {
              throw ERROR;
            } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
              message = new Uint8Array(message);
            } else if (!Array.isArray(message)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
                throw ERROR;
              }
            }
          } else {
            throw ERROR;
          }
          notString = true;
        }
        var code, index2 = 0, i, length = message.length, blocks2 = this.blocks;
        var buffer82 = this.buffer8;
        while (index2 < length) {
          if (this.hashed) {
            this.hashed = false;
            blocks2[0] = blocks2[16];
            blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
          }
          if (notString) {
            if (ARRAY_BUFFER) {
              for (i = this.start; index2 < length && i < 64; ++index2) {
                buffer82[i++] = message[index2];
              }
            } else {
              for (i = this.start; index2 < length && i < 64; ++index2) {
                blocks2[i >> 2] |= message[index2] << SHIFT[i++ & 3];
              }
            }
          } else {
            if (ARRAY_BUFFER) {
              for (i = this.start; index2 < length && i < 64; ++index2) {
                code = message.charCodeAt(index2);
                if (code < 128) {
                  buffer82[i++] = code;
                } else if (code < 2048) {
                  buffer82[i++] = 192 | code >> 6;
                  buffer82[i++] = 128 | code & 63;
                } else if (code < 55296 || code >= 57344) {
                  buffer82[i++] = 224 | code >> 12;
                  buffer82[i++] = 128 | code >> 6 & 63;
                  buffer82[i++] = 128 | code & 63;
                } else {
                  code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index2) & 1023);
                  buffer82[i++] = 240 | code >> 18;
                  buffer82[i++] = 128 | code >> 12 & 63;
                  buffer82[i++] = 128 | code >> 6 & 63;
                  buffer82[i++] = 128 | code & 63;
                }
              }
            } else {
              for (i = this.start; index2 < length && i < 64; ++index2) {
                code = message.charCodeAt(index2);
                if (code < 128) {
                  blocks2[i >> 2] |= code << SHIFT[i++ & 3];
                } else if (code < 2048) {
                  blocks2[i >> 2] |= (192 | code >> 6) << SHIFT[i++ & 3];
                  blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
                } else if (code < 55296 || code >= 57344) {
                  blocks2[i >> 2] |= (224 | code >> 12) << SHIFT[i++ & 3];
                  blocks2[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[i++ & 3];
                  blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
                } else {
                  code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index2) & 1023);
                  blocks2[i >> 2] |= (240 | code >> 18) << SHIFT[i++ & 3];
                  blocks2[i >> 2] |= (128 | code >> 12 & 63) << SHIFT[i++ & 3];
                  blocks2[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[i++ & 3];
                  blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
                }
              }
            }
          }
          this.lastByteIndex = i;
          this.bytes += i - this.start;
          if (i >= 64) {
            this.start = i - 64;
            this.hash();
            this.hashed = true;
          } else {
            this.start = i;
          }
        }
        if (this.bytes > 4294967295) {
          this.hBytes += this.bytes / 4294967296 << 0;
          this.bytes = this.bytes % 4294967296;
        }
        return this;
      };
      Md5.prototype.finalize = function() {
        if (this.finalized) {
          return;
        }
        this.finalized = true;
        var blocks2 = this.blocks, i = this.lastByteIndex;
        blocks2[i >> 2] |= EXTRA[i & 3];
        if (i >= 56) {
          if (!this.hashed) {
            this.hash();
          }
          blocks2[0] = blocks2[16];
          blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
        }
        blocks2[14] = this.bytes << 3;
        blocks2[15] = this.hBytes << 3 | this.bytes >>> 29;
        this.hash();
      };
      Md5.prototype.hash = function() {
        var a, b, c, d, bc, da, blocks2 = this.blocks;
        if (this.first) {
          a = blocks2[0] - 680876937;
          a = (a << 7 | a >>> 25) - 271733879 << 0;
          d = (-1732584194 ^ a & 2004318071) + blocks2[1] - 117830708;
          d = (d << 12 | d >>> 20) + a << 0;
          c = (-271733879 ^ d & (a ^ -271733879)) + blocks2[2] - 1126478375;
          c = (c << 17 | c >>> 15) + d << 0;
          b = (a ^ c & (d ^ a)) + blocks2[3] - 1316259209;
          b = (b << 22 | b >>> 10) + c << 0;
        } else {
          a = this.h0;
          b = this.h1;
          c = this.h2;
          d = this.h3;
          a += (d ^ b & (c ^ d)) + blocks2[0] - 680876936;
          a = (a << 7 | a >>> 25) + b << 0;
          d += (c ^ a & (b ^ c)) + blocks2[1] - 389564586;
          d = (d << 12 | d >>> 20) + a << 0;
          c += (b ^ d & (a ^ b)) + blocks2[2] + 606105819;
          c = (c << 17 | c >>> 15) + d << 0;
          b += (a ^ c & (d ^ a)) + blocks2[3] - 1044525330;
          b = (b << 22 | b >>> 10) + c << 0;
        }
        a += (d ^ b & (c ^ d)) + blocks2[4] - 176418897;
        a = (a << 7 | a >>> 25) + b << 0;
        d += (c ^ a & (b ^ c)) + blocks2[5] + 1200080426;
        d = (d << 12 | d >>> 20) + a << 0;
        c += (b ^ d & (a ^ b)) + blocks2[6] - 1473231341;
        c = (c << 17 | c >>> 15) + d << 0;
        b += (a ^ c & (d ^ a)) + blocks2[7] - 45705983;
        b = (b << 22 | b >>> 10) + c << 0;
        a += (d ^ b & (c ^ d)) + blocks2[8] + 1770035416;
        a = (a << 7 | a >>> 25) + b << 0;
        d += (c ^ a & (b ^ c)) + blocks2[9] - 1958414417;
        d = (d << 12 | d >>> 20) + a << 0;
        c += (b ^ d & (a ^ b)) + blocks2[10] - 42063;
        c = (c << 17 | c >>> 15) + d << 0;
        b += (a ^ c & (d ^ a)) + blocks2[11] - 1990404162;
        b = (b << 22 | b >>> 10) + c << 0;
        a += (d ^ b & (c ^ d)) + blocks2[12] + 1804603682;
        a = (a << 7 | a >>> 25) + b << 0;
        d += (c ^ a & (b ^ c)) + blocks2[13] - 40341101;
        d = (d << 12 | d >>> 20) + a << 0;
        c += (b ^ d & (a ^ b)) + blocks2[14] - 1502002290;
        c = (c << 17 | c >>> 15) + d << 0;
        b += (a ^ c & (d ^ a)) + blocks2[15] + 1236535329;
        b = (b << 22 | b >>> 10) + c << 0;
        a += (c ^ d & (b ^ c)) + blocks2[1] - 165796510;
        a = (a << 5 | a >>> 27) + b << 0;
        d += (b ^ c & (a ^ b)) + blocks2[6] - 1069501632;
        d = (d << 9 | d >>> 23) + a << 0;
        c += (a ^ b & (d ^ a)) + blocks2[11] + 643717713;
        c = (c << 14 | c >>> 18) + d << 0;
        b += (d ^ a & (c ^ d)) + blocks2[0] - 373897302;
        b = (b << 20 | b >>> 12) + c << 0;
        a += (c ^ d & (b ^ c)) + blocks2[5] - 701558691;
        a = (a << 5 | a >>> 27) + b << 0;
        d += (b ^ c & (a ^ b)) + blocks2[10] + 38016083;
        d = (d << 9 | d >>> 23) + a << 0;
        c += (a ^ b & (d ^ a)) + blocks2[15] - 660478335;
        c = (c << 14 | c >>> 18) + d << 0;
        b += (d ^ a & (c ^ d)) + blocks2[4] - 405537848;
        b = (b << 20 | b >>> 12) + c << 0;
        a += (c ^ d & (b ^ c)) + blocks2[9] + 568446438;
        a = (a << 5 | a >>> 27) + b << 0;
        d += (b ^ c & (a ^ b)) + blocks2[14] - 1019803690;
        d = (d << 9 | d >>> 23) + a << 0;
        c += (a ^ b & (d ^ a)) + blocks2[3] - 187363961;
        c = (c << 14 | c >>> 18) + d << 0;
        b += (d ^ a & (c ^ d)) + blocks2[8] + 1163531501;
        b = (b << 20 | b >>> 12) + c << 0;
        a += (c ^ d & (b ^ c)) + blocks2[13] - 1444681467;
        a = (a << 5 | a >>> 27) + b << 0;
        d += (b ^ c & (a ^ b)) + blocks2[2] - 51403784;
        d = (d << 9 | d >>> 23) + a << 0;
        c += (a ^ b & (d ^ a)) + blocks2[7] + 1735328473;
        c = (c << 14 | c >>> 18) + d << 0;
        b += (d ^ a & (c ^ d)) + blocks2[12] - 1926607734;
        b = (b << 20 | b >>> 12) + c << 0;
        bc = b ^ c;
        a += (bc ^ d) + blocks2[5] - 378558;
        a = (a << 4 | a >>> 28) + b << 0;
        d += (bc ^ a) + blocks2[8] - 2022574463;
        d = (d << 11 | d >>> 21) + a << 0;
        da = d ^ a;
        c += (da ^ b) + blocks2[11] + 1839030562;
        c = (c << 16 | c >>> 16) + d << 0;
        b += (da ^ c) + blocks2[14] - 35309556;
        b = (b << 23 | b >>> 9) + c << 0;
        bc = b ^ c;
        a += (bc ^ d) + blocks2[1] - 1530992060;
        a = (a << 4 | a >>> 28) + b << 0;
        d += (bc ^ a) + blocks2[4] + 1272893353;
        d = (d << 11 | d >>> 21) + a << 0;
        da = d ^ a;
        c += (da ^ b) + blocks2[7] - 155497632;
        c = (c << 16 | c >>> 16) + d << 0;
        b += (da ^ c) + blocks2[10] - 1094730640;
        b = (b << 23 | b >>> 9) + c << 0;
        bc = b ^ c;
        a += (bc ^ d) + blocks2[13] + 681279174;
        a = (a << 4 | a >>> 28) + b << 0;
        d += (bc ^ a) + blocks2[0] - 358537222;
        d = (d << 11 | d >>> 21) + a << 0;
        da = d ^ a;
        c += (da ^ b) + blocks2[3] - 722521979;
        c = (c << 16 | c >>> 16) + d << 0;
        b += (da ^ c) + blocks2[6] + 76029189;
        b = (b << 23 | b >>> 9) + c << 0;
        bc = b ^ c;
        a += (bc ^ d) + blocks2[9] - 640364487;
        a = (a << 4 | a >>> 28) + b << 0;
        d += (bc ^ a) + blocks2[12] - 421815835;
        d = (d << 11 | d >>> 21) + a << 0;
        da = d ^ a;
        c += (da ^ b) + blocks2[15] + 530742520;
        c = (c << 16 | c >>> 16) + d << 0;
        b += (da ^ c) + blocks2[2] - 995338651;
        b = (b << 23 | b >>> 9) + c << 0;
        a += (c ^ (b | ~d)) + blocks2[0] - 198630844;
        a = (a << 6 | a >>> 26) + b << 0;
        d += (b ^ (a | ~c)) + blocks2[7] + 1126891415;
        d = (d << 10 | d >>> 22) + a << 0;
        c += (a ^ (d | ~b)) + blocks2[14] - 1416354905;
        c = (c << 15 | c >>> 17) + d << 0;
        b += (d ^ (c | ~a)) + blocks2[5] - 57434055;
        b = (b << 21 | b >>> 11) + c << 0;
        a += (c ^ (b | ~d)) + blocks2[12] + 1700485571;
        a = (a << 6 | a >>> 26) + b << 0;
        d += (b ^ (a | ~c)) + blocks2[3] - 1894986606;
        d = (d << 10 | d >>> 22) + a << 0;
        c += (a ^ (d | ~b)) + blocks2[10] - 1051523;
        c = (c << 15 | c >>> 17) + d << 0;
        b += (d ^ (c | ~a)) + blocks2[1] - 2054922799;
        b = (b << 21 | b >>> 11) + c << 0;
        a += (c ^ (b | ~d)) + blocks2[8] + 1873313359;
        a = (a << 6 | a >>> 26) + b << 0;
        d += (b ^ (a | ~c)) + blocks2[15] - 30611744;
        d = (d << 10 | d >>> 22) + a << 0;
        c += (a ^ (d | ~b)) + blocks2[6] - 1560198380;
        c = (c << 15 | c >>> 17) + d << 0;
        b += (d ^ (c | ~a)) + blocks2[13] + 1309151649;
        b = (b << 21 | b >>> 11) + c << 0;
        a += (c ^ (b | ~d)) + blocks2[4] - 145523070;
        a = (a << 6 | a >>> 26) + b << 0;
        d += (b ^ (a | ~c)) + blocks2[11] - 1120210379;
        d = (d << 10 | d >>> 22) + a << 0;
        c += (a ^ (d | ~b)) + blocks2[2] + 718787259;
        c = (c << 15 | c >>> 17) + d << 0;
        b += (d ^ (c | ~a)) + blocks2[9] - 343485551;
        b = (b << 21 | b >>> 11) + c << 0;
        if (this.first) {
          this.h0 = a + 1732584193 << 0;
          this.h1 = b - 271733879 << 0;
          this.h2 = c - 1732584194 << 0;
          this.h3 = d + 271733878 << 0;
          this.first = false;
        } else {
          this.h0 = this.h0 + a << 0;
          this.h1 = this.h1 + b << 0;
          this.h2 = this.h2 + c << 0;
          this.h3 = this.h3 + d << 0;
        }
      };
      Md5.prototype.hex = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
        return HEX_CHARS[h0 >> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h0 >> 12 & 15] + HEX_CHARS[h0 >> 8 & 15] + HEX_CHARS[h0 >> 20 & 15] + HEX_CHARS[h0 >> 16 & 15] + HEX_CHARS[h0 >> 28 & 15] + HEX_CHARS[h0 >> 24 & 15] + HEX_CHARS[h1 >> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h1 >> 12 & 15] + HEX_CHARS[h1 >> 8 & 15] + HEX_CHARS[h1 >> 20 & 15] + HEX_CHARS[h1 >> 16 & 15] + HEX_CHARS[h1 >> 28 & 15] + HEX_CHARS[h1 >> 24 & 15] + HEX_CHARS[h2 >> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h2 >> 12 & 15] + HEX_CHARS[h2 >> 8 & 15] + HEX_CHARS[h2 >> 20 & 15] + HEX_CHARS[h2 >> 16 & 15] + HEX_CHARS[h2 >> 28 & 15] + HEX_CHARS[h2 >> 24 & 15] + HEX_CHARS[h3 >> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h3 >> 12 & 15] + HEX_CHARS[h3 >> 8 & 15] + HEX_CHARS[h3 >> 20 & 15] + HEX_CHARS[h3 >> 16 & 15] + HEX_CHARS[h3 >> 28 & 15] + HEX_CHARS[h3 >> 24 & 15];
      };
      Md5.prototype.toString = Md5.prototype.hex;
      Md5.prototype.digest = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
        return [
          h0 & 255,
          h0 >> 8 & 255,
          h0 >> 16 & 255,
          h0 >> 24 & 255,
          h1 & 255,
          h1 >> 8 & 255,
          h1 >> 16 & 255,
          h1 >> 24 & 255,
          h2 & 255,
          h2 >> 8 & 255,
          h2 >> 16 & 255,
          h2 >> 24 & 255,
          h3 & 255,
          h3 >> 8 & 255,
          h3 >> 16 & 255,
          h3 >> 24 & 255
        ];
      };
      Md5.prototype.array = Md5.prototype.digest;
      Md5.prototype.arrayBuffer = function() {
        this.finalize();
        var buffer2 = new ArrayBuffer(16);
        var blocks2 = new Uint32Array(buffer2);
        blocks2[0] = this.h0;
        blocks2[1] = this.h1;
        blocks2[2] = this.h2;
        blocks2[3] = this.h3;
        return buffer2;
      };
      Md5.prototype.buffer = Md5.prototype.arrayBuffer;
      Md5.prototype.base64 = function() {
        var v1, v2, v3, base64Str = "", bytes = this.array();
        for (var i = 0; i < 15; ) {
          v1 = bytes[i++];
          v2 = bytes[i++];
          v3 = bytes[i++];
          base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] + BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] + BASE64_ENCODE_CHAR[v3 & 63];
        }
        v1 = bytes[i];
        base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[v1 << 4 & 63] + "==";
        return base64Str;
      };
      var exports = createMethod();
      if (COMMON_JS) {
        module.exports = exports;
      } else {
        root.md5 = exports;
      }
    })();
  })(md5$1);
  var md5 = md5$1.exports;
  const _sfc_main$c = {
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
        blogSortName: [],
        code: ">_",
        readOnly: false,
        formats: {},
        htmls: "",
        title: "",
        excerpt: "",
        sort: 1,
        cover: [],
        flg: false,
        tags: "",
        sid: "1",
        blogSorts: []
      };
    },
    created() {
    },
    onShow() {
      var that = this;
      uni.getStorage({
        key: "appData",
        success: function(res) {
          that.appData = res.data;
        }
      });
      uni.getStorage({
        key: "apikey",
        success: function(res) {
          formatAppLog("log", "at pages/xia-editor/xia-editor.vue:145", "success");
          if (that.appData.data.apikey == res.data) {
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
      uni.getStorage({
        key: "apikey",
        success: function(res) {
          formatAppLog("log", "at pages/xia-editor/xia-editor.vue:160", "success");
          if (that.appData.data.apikey == res.data) {
            that.flg = true;
          } else {
            that.flg = false;
          }
        }
      });
      uni.stopPullDownRefresh();
    },
    methods: {
      setting() {
        uni.navigateTo({
          url: "../setting/admin"
        });
      },
      messageToggle(type, text) {
        this.msgType = type;
        this.messageText = `${text}`;
        this.$refs.message.open();
      },
      bindPickerChange: function(e) {
        formatAppLog("log", "at pages/xia-editor/xia-editor.vue:182", "picker\u53D1\u9001\u9009\u62E9\u6539\u53D8\uFF0C\u643A\u5E26\u503C\u4E3A", this.blogSorts[e.detail.value].sid);
        this.sort = e.detail.value;
        this.sid = this.blogSorts[e.detail.value].sid;
      },
      change(e) {
      },
      async fabu() {
        var title = this.$data.title;
        var htmls = this.$data.htmls;
        var excerpt = this.$data.excerpt;
        var tags = this.$data.tags;
        var sid = this.$data.sid;
        var cover = this.$data.cover;
        var time = new Date();
        var YYYY = time.getFullYear();
        var MM = time.getMonth() + 1;
        var DD = time.getDate();
        var hh = time.getHours();
        var mm = time.getMinutes();
        var ss = time.getSeconds();
        var $req_time = String((time.getTime() / 1e3).toFixed(0));
        var md = $req_time + this.appData.data.apikey;
        var $sign = md5(md);
        const res = await myRequest({
          url: "/?rest-api=article_post",
          data: {
            req_sign: $sign,
            req_time: $req_time,
            title,
            content: htmls,
            excerpt,
            cover: cover[0] || "",
            sort_id: sid,
            author_uid: "1",
            tags,
            post_date: YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss
          }
        });
        if (res.data.msg == "ok") {
          uni.showToast({
            title: "\u53D1\u5E03\u6210\u529F"
          });
          uni.reLaunch({
            url: "../index/index"
          });
        }
        this.dataa = res.data;
        formatAppLog("log", "at pages/xia-editor/xia-editor.vue:228", this.dataa);
      },
      editText(res) {
        this.$emit("editorChange", res.detail.html);
        this.htmls = res.detail.html;
      },
      readOnlyChange() {
        this.readOnly = !this.readOnly;
      },
      onEditorReady() {
        uni.createSelectorQuery().select("#editor").context((res) => {
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
            formatAppLog("log", "at pages/xia-editor/xia-editor.vue:264", "insert divider success");
          }
        });
      },
      clear() {
        this.editorCtx.clear({
          success: function(res) {
            formatAppLog("log", "at pages/xia-editor/xia-editor.vue:271", "clear success");
          }
        });
      },
      removeFormat() {
        this.editorCtx.insertText({
          text: "<pre>\u4EE3\u7801\u5757</pre>"
        });
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
        uni.chooseImage({
          count: 1,
          success: (res) => {
            uni.showLoading({
              title: "\u6B63\u5728\u4E0A\u4F20..."
            });
            formatAppLog("log", "at pages/xia-editor/xia-editor.vue:295", res.tempFilePaths[0]);
            formatAppLog("log", "at pages/xia-editor/xia-editor.vue:296", that.appData.data.accessKey);
            formatAppLog("log", "at pages/xia-editor/xia-editor.vue:297", that.appData.data.secretKey);
            uni.uploadFile({
              url: "https://tp.hkiii.cn/index.php/index/index/img",
              filePath: res.tempFilePaths[0],
              name: "file",
              method: "POST",
              fileType: "image",
              formData: {
                ak: that.appData.data.accessKey,
                sk: that.appData.data.secretKey,
                kj: that.appData.data.bucket,
                ym: that.appData.data.ym
              },
              success: function(res2) {
                var data2 = JSON.parse(res2.data);
                formatAppLog("log", "at pages/xia-editor/xia-editor.vue:312", data2.data);
                that.editorCtx.insertImage({
                  src: data2.data,
                  alt: data2.data,
                  success: function() {
                    that.cover.push(data2.data);
                    that.messageToggle("success", "\u4E0A\u4F20\u6210\u529F");
                    uni.hideLoading();
                  }
                });
              },
              fail: function() {
                that.messageToggle("error", "\u4E0A\u4F20\u5931\u8D25");
                uni.hideLoading();
              }
            });
          }
        });
      },
      async getSorts() {
        const res = await myRequest({
          url: "/?rest-api=sort_list",
          method: "GET"
        });
        this.blogSorts = res.data.data.sorts;
        var arr = Object.keys(this.blogSorts);
        for (var i = 0; i <= arr.length; i++) {
          this.blogSortName.push(res.data.data.sorts[i].sortname);
        }
        formatAppLog("log", "at pages/xia-editor/xia-editor.vue:341", this.blogSortName);
      }
    },
    onLoad() {
      this.getSorts();
      uni.loadFontFace({
        family: "Pacifico",
        source: 'url("./Pacifico.ttf")'
      });
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$2);
    const _component_uni_collapse_item = resolveEasycom(vue.resolveDynamicComponent("uni-collapse-item"), __easycom_1$2);
    const _component_uni_collapse = resolveEasycom(vue.resolveDynamicComponent("uni-collapse"), __easycom_2$1);
    const _component_uni_popup_message = resolveEasycom(vue.resolveDynamicComponent("uni-popup-message"), __easycom_0$1);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      $data.flg ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "container"
      }, [
        vue.createElementVNode("view", { class: "page-body" }, [
          vue.createElementVNode("view", { class: "wrapper" }, [
            vue.withDirectives(vue.createElementVNode("input", {
              class: "inp-title",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.title = $event),
              placeholder: "\u6587\u7AE0\u6807\u9898",
              type: "text"
            }, null, 512), [
              [vue.vModelText, $data.title]
            ]),
            vue.createElementVNode("view", {
              class: "toolbar",
              onClick: _cache[5] || (_cache[5] = (...args) => $options.format && $options.format(...args))
            }, [
              vue.createElementVNode("view", {
                class: vue.normalizeClass([$data.formats.bold ? "ql-active" : "", "iconfont icon-zitijiacu"]),
                "data-name": "bold"
              }, null, 2),
              vue.createElementVNode("view", {
                class: vue.normalizeClass([$data.formats.italic ? "ql-active" : "", "iconfont icon-zitixieti"]),
                "data-name": "italic"
              }, null, 2),
              vue.createElementVNode("view", {
                class: vue.normalizeClass([$data.formats.underline ? "ql-active" : "", "iconfont icon-zitixiahuaxian"]),
                "data-name": "underline"
              }, null, 2),
              vue.createElementVNode("view", {
                class: vue.normalizeClass([$data.formats.strike ? "ql-active" : "", "iconfont icon-zitishanchuxian"]),
                "data-name": "strike"
              }, null, 2),
              vue.createElementVNode("view", {
                class: vue.normalizeClass([$data.formats.align === "left" ? "ql-active" : "", "iconfont icon-zuoduiqi"]),
                "data-name": "align",
                "data-value": "left"
              }, null, 2),
              vue.createElementVNode("view", {
                class: vue.normalizeClass([$data.formats.align === "center" ? "ql-active" : "", "iconfont icon-juzhongduiqi"]),
                "data-name": "align",
                "data-value": "center"
              }, null, 2),
              vue.createElementVNode("view", {
                class: vue.normalizeClass([$data.formats.align === "right" ? "ql-active" : "", "iconfont icon-youduiqi"]),
                "data-name": "align",
                "data-value": "right"
              }, null, 2),
              vue.createCommentVNode(" \u6709\u5E8F\u548C\u65E0\u5E8F\u5217\u8868 "),
              vue.createElementVNode("view", {
                class: vue.normalizeClass([$data.formats.list === "ordered" ? "ql-active" : "", "iconfont icon-youxupailie"]),
                "data-name": "list",
                "data-value": "ordered"
              }, null, 2),
              vue.createElementVNode("view", {
                class: vue.normalizeClass([$data.formats.list === "bullet" ? "ql-active" : "", "iconfont icon-wuxupailie"]),
                "data-name": "list",
                "data-value": "bullet"
              }, null, 2),
              vue.createCommentVNode(" \u56DE\u9000\u548C\u5FEB\u8FDB "),
              vue.createElementVNode("view", {
                class: "iconfont icon-undo",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.undo && $options.undo(...args))
              }),
              vue.createElementVNode("view", {
                class: "iconfont icon-redo",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.redo && $options.redo(...args))
              }),
              vue.createCommentVNode(" \u5206\u5272\u7EBF "),
              vue.createElementVNode("view", {
                class: "iconfont icon-fengexian",
                onClick: _cache[3] || (_cache[3] = (...args) => $options.insertDivider && $options.insertDivider(...args))
              }),
              vue.createCommentVNode(" \u63D2\u5165\u56FE\u7247 "),
              vue.createElementVNode("view", {
                class: "iconfont icon-charutupian",
                onClick: _cache[4] || (_cache[4] = (...args) => $options.insertImage && $options.insertImage(...args))
              }),
              vue.createCommentVNode(' <view class="iconfont icon-code" @tap="removeFormat">{{code}}</view> '),
              vue.createElementVNode("view", {
                class: "iconfont icon--checklist",
                "data-name": "list",
                "data-value": "check"
              }),
              vue.createCommentVNode(" \u6807\u9898 "),
              vue.createElementVNode("view", {
                class: vue.normalizeClass([$data.formats.header === 1 ? "ql-active" : "", "iconfont icon-format-header-1"]),
                "data-name": "header",
                "data-value": 1
              }, null, 2),
              vue.createElementVNode("view", {
                class: vue.normalizeClass([$data.formats.header === 2 ? "ql-active" : "", "iconfont icon-format-header-2"]),
                "data-name": "header",
                "data-value": 2
              }, null, 2),
              vue.createElementVNode("view", {
                class: vue.normalizeClass([$data.formats.header === 3 ? "ql-active" : "", "iconfont icon-format-header-3"]),
                "data-name": "header",
                "data-value": 3
              }, null, 2)
            ]),
            vue.createElementVNode("editor", {
              onInput: _cache[6] || (_cache[6] = (...args) => $options.editText && $options.editText(...args)),
              id: "editor",
              class: "ql-container",
              placeholder: $props.placeholder,
              showImgSize: "",
              showImgToolbar: "",
              showImgResize: "",
              onStatuschange: _cache[7] || (_cache[7] = (...args) => $options.onStatusChange && $options.onStatusChange(...args)),
              "read-only": $data.readOnly,
              onReady: _cache[8] || (_cache[8] = (...args) => $options.onEditorReady && $options.onEditorReady(...args))
            }, null, 40, ["placeholder", "read-only"]),
            vue.createVNode(_component_uni_collapse, {
              accordion: "",
              modelValue: _ctx.accordionVal,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => _ctx.accordionVal = $event),
              onChange: $options.change
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_collapse_item, {
                  "show-animation": true,
                  open: true,
                  title: "\u6587\u7AE0\u63CF\u8FF0"
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "content" }, [
                      vue.createVNode(_component_uni_easyinput, {
                        type: "text",
                        modelValue: $data.excerpt,
                        "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.excerpt = $event),
                        placeholder: "\u8BF7\u8F93\u5165\u6587\u7AE0\u63CF\u8FF0,\u53EF\u7559\u7A7A"
                      }, null, 8, ["modelValue"]),
                      vue.createCommentVNode(' <uni-easyinput type="textarea" v-model="excerpt" placeholder="\u8BF7\u8F93\u5165\u6587\u7AE0\u63CF\u8FF0,\u53EF\u7559\u7A7A"></uni-easyinput> ')
                    ])
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_uni_collapse_item, {
                  "show-animation": true,
                  title: "\u9009\u62E9\u5206\u7C7B"
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "content" }, [
                      vue.createElementVNode("view", { class: "uni-list" }, [
                        vue.createElementVNode("view", { class: "uni-list-cell" }, [
                          vue.createElementVNode("view", { class: "uni-list-cell-db" }, [
                            vue.createElementVNode("picker", {
                              onChange: _cache[10] || (_cache[10] = (...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
                              value: $data.sort,
                              range: $data.blogSortName
                            }, [
                              vue.createElementVNode("view", { class: "uni-input" }, vue.toDisplayString($data.blogSorts[$data.sort].sortname || "\u8BF7\u9009\u62E9\u5206\u7C7B"), 1)
                            ], 40, ["value", "range"])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_uni_collapse_item, {
                  "show-animation": true,
                  title: "\u6587\u7AE0\u6807\u7B7E"
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "content" }, [
                      vue.createVNode(_component_uni_easyinput, {
                        type: "text",
                        modelValue: $data.tags,
                        "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.tags = $event),
                        placeholder: "\u6587\u7AE0\u6807\u7B7E\uFF0C\u591A\u4E2A\u534A\u89D2\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1APHP,MySQL"
                      }, null, 8, ["modelValue"])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue", "onChange"]),
            vue.createElementVNode("view", {
              class: "fabu",
              onClick: _cache[13] || (_cache[13] = ($event) => $options.fabu())
            }, "\u53D1\u5E03")
          ])
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", null, [
        vue.createCommentVNode(" \u63D0\u793A\u4FE1\u606F\u5F39\u7A97 "),
        vue.createVNode(_component_uni_popup, {
          ref: "message",
          type: "message"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_popup_message, {
              type: _ctx.msgType,
              message: _ctx.messageText,
              duration: 2e3
            }, null, 8, ["type", "message"])
          ]),
          _: 1
        }, 512)
      ]),
      !$data.flg ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "content"
      }, [
        vue.createElementVNode("view", { class: "flg-title" }),
        vue.createElementVNode("image", {
          class: "flg-img",
          src: "/static/close.png",
          mode: "aspectFill"
        }),
        vue.createElementVNode("view", { class: "flg-text" }, "\u7BA1\u7406\u5458\u4FE1\u606F\u9A8C\u8BC1\u5931\u8D25\uFF01"),
        vue.createElementVNode("view", { class: "flg-cell" }, "\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u83B7\u5F97\u8BE5\u6743\u9650\uFF01"),
        vue.createElementVNode("button", {
          class: "flg-btn",
          onClick: _cache[14] || (_cache[14] = ($event) => $options.setting())
        }, "\u7BA1\u7406\u5458\u8BBE\u7F6E")
      ])) : vue.createCommentVNode("v-if", true)
    ], 64);
  }
  var PagesXiaEditorXiaEditor = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/xia-editor/xia-editor.vue"]]);
  var block0 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("handler");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["handler"] = "2f992f8c";
  };
  const _sfc_main$b = {
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
      if (this.opts[0]) {
        let i;
        for (i = this.childs.length; i--; ) {
          if (this.childs[i].name === "img")
            break;
        }
        if (i !== -1) {
          this.observer = uni.createIntersectionObserver(this).relativeToViewport({
            top: 500,
            bottom: 500
          });
          this.observer.observe("._img", (res) => {
            if (res.intersectionRatio) {
              this.$set(this.ctrl, "load", 1);
              this.observer.disconnect();
            }
          });
        }
      }
    },
    beforeDestroy() {
      if (this.observer) {
        this.observer.disconnect();
      }
    },
    methods: {
      play(e) {
        this.root.$emit("play");
      },
      imgTap(e) {
        const node2 = this.childs[e.currentTarget.dataset.i];
        if (node2.a) {
          this.linkTap(node2.a);
          return;
        }
        if (node2.attrs.ignore)
          return;
        node2.attrs.src = node2.attrs.src || node2.attrs["data-src"];
        this.root.$emit("imgtap", node2.attrs);
        if (this.root.previewImg) {
          uni.previewImage({
            current: parseInt(node2.attrs.i),
            urls: this.root.imgList
          });
        }
      },
      imgLongTap(e) {
        const attrs = this.childs[e.currentTarget.dataset.i].attrs;
        if (this.opts[3] && !attrs.ignore) {
          uni.showActionSheet({
            itemList: ["\u4FDD\u5B58\u56FE\u7247"],
            success: () => {
              const save = (path) => {
                uni.saveImageToPhotosAlbum({
                  filePath: path,
                  success() {
                    uni.showToast({
                      title: "\u4FDD\u5B58\u6210\u529F"
                    });
                  }
                });
              };
              if (this.root.imgList[attrs.i].startsWith("http")) {
                uni.downloadFile({
                  url: this.root.imgList[attrs.i],
                  success: (res) => save(res.tempFilePath)
                });
              } else {
                save(this.root.imgList[attrs.i]);
              }
            }
          });
        }
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
              plus.runtime.openWeb(href);
            }
          } else {
            uni.navigateTo({
              url: href,
              fail() {
                uni.switchTab({
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
          let index2 = (this.ctrl[i] || 0) + 1;
          if (index2 > node2.src.length) {
            index2 = 0;
          }
          if (index2 < node2.src.length) {
            this.$set(this.ctrl, i, index2);
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
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_node = vue.resolveComponent("node", true);
    return vue.openBlock(), vue.createElementBlock("view", {
      id: $props.attrs.id,
      class: vue.normalizeClass("_block _" + $props.name + " " + $props.attrs.class),
      style: vue.normalizeStyle($props.attrs.style)
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.childs, (n, i) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: i }, [
          vue.createCommentVNode(" \u56FE\u7247 "),
          vue.createCommentVNode(" \u5360\u4F4D\u56FE "),
          n.name === "img" && ($props.opts[1] && !$data.ctrl[i] || $data.ctrl[i] < 0) ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 0,
            class: "_img",
            style: vue.normalizeStyle(n.attrs.style),
            src: $data.ctrl[i] < 0 ? $props.opts[2] : $props.opts[1],
            mode: "widthFix"
          }, null, 12, ["src"])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" \u663E\u793A\u56FE\u7247 "),
          n.name === "img" ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 1,
            id: n.attrs.id,
            class: vue.normalizeClass("_img " + n.attrs.class),
            style: vue.normalizeStyle(($data.ctrl[i] === -1 ? "display:none;" : "") + "width:" + ($data.ctrl[i] || 1) + "px;" + n.attrs.style),
            src: n.attrs.src || ($data.ctrl.load ? n.attrs["data-src"] : ""),
            mode: !n.h ? "widthFix" : !n.w ? "heightFix" : "",
            "data-i": i,
            onLoad: _cache[0] || (_cache[0] = (...args) => $options.imgLoad && $options.imgLoad(...args)),
            onError: _cache[1] || (_cache[1] = (...args) => $options.mediaError && $options.mediaError(...args)),
            onClick: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.imgTap && $options.imgTap(...args), ["stop"])),
            onLongpress: _cache[3] || (_cache[3] = (...args) => $options.imgLongTap && $options.imgLongTap(...args))
          }, null, 46, ["id", "src", "mode", "data-i"])) : n.text ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 2 }, [
            vue.createCommentVNode(" \u6587\u672C "),
            vue.createElementVNode("text", {
              "user-select": $props.opts[4],
              decode: ""
            }, vue.toDisplayString(n.text), 9, ["user-select"])
          ], 2112)) : n.name === "br" ? (vue.openBlock(), vue.createElementBlock("text", { key: 3 }, "\\n")) : n.name === "a" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 4 }, [
            vue.createCommentVNode(" \u94FE\u63A5 "),
            vue.createElementVNode("view", {
              id: n.attrs.id,
              class: vue.normalizeClass((n.attrs.href ? "_a " : "") + n.attrs.class),
              "hover-class": "_hover",
              style: vue.normalizeStyle("display:inline;" + n.attrs.style),
              "data-i": i,
              onClick: _cache[4] || (_cache[4] = vue.withModifiers((...args) => $options.linkTap && $options.linkTap(...args), ["stop"]))
            }, [
              vue.createVNode(_component_node, {
                name: "span",
                childs: n.children,
                opts: $props.opts,
                style: { "display": "inherit" }
              }, null, 8, ["childs", "opts"])
            ], 14, ["id", "data-i"])
          ], 2112)) : n.html ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 5 }, [
            vue.createCommentVNode(" \u89C6\u9891 "),
            vue.createElementVNode("view", {
              id: n.attrs.id,
              class: vue.normalizeClass("_video " + n.attrs.class),
              style: vue.normalizeStyle(n.attrs.style),
              innerHTML: n.html,
              onVplay: _cache[5] || (_cache[5] = vue.withModifiers((...args) => $options.play && $options.play(...args), ["stop"]))
            }, null, 46, ["id", "innerHTML"])
          ], 2112)) : n.name === "iframe" ? (vue.openBlock(), vue.createElementBlock("iframe", {
            key: 6,
            style: vue.normalizeStyle(n.attrs.style),
            allowfullscreen: n.attrs.allowfullscreen,
            frameborder: n.attrs.frameborder,
            src: n.attrs.src
          }, null, 12, ["allowfullscreen", "frameborder", "src"])) : n.name === "embed" ? (vue.openBlock(), vue.createElementBlock("embed", {
            key: 7,
            style: vue.normalizeStyle(n.attrs.style),
            src: n.attrs.src
          }, null, 12, ["src"])) : n.name === "table" && n.c || n.name === "li" ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 8,
            id: n.attrs.id,
            class: vue.normalizeClass("_" + n.name + " " + n.attrs.class),
            style: vue.normalizeStyle(n.attrs.style)
          }, [
            n.name === "li" ? (vue.openBlock(), vue.createBlock(_component_node, {
              key: 0,
              childs: n.children,
              opts: $props.opts
            }, null, 8, ["childs", "opts"])) : (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList(n.children, (tbody, x) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: x,
                class: vue.normalizeClass("_" + tbody.name + " " + tbody.attrs.class),
                style: vue.normalizeStyle(tbody.attrs.style)
              }, [
                tbody.name === "td" || tbody.name === "th" ? (vue.openBlock(), vue.createBlock(_component_node, {
                  key: 0,
                  childs: tbody.children,
                  opts: $props.opts
                }, null, 8, ["childs", "opts"])) : (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList(tbody.children, (tr, y) => {
                  return vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: y }, [
                    tr.name === "td" || tr.name === "th" ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: vue.normalizeClass("_" + tr.name + " " + tr.attrs.class),
                      style: vue.normalizeStyle(tr.attrs.style)
                    }, [
                      vue.createVNode(_component_node, {
                        childs: tr.children,
                        opts: $props.opts
                      }, null, 8, ["childs", "opts"])
                    ], 6)) : (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: vue.normalizeClass("_" + tr.name + " " + tr.attrs.class),
                      style: vue.normalizeStyle(tr.attrs.style)
                    }, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(tr.children, (td, z) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          key: z,
                          class: vue.normalizeClass("_" + td.name + " " + td.attrs.class),
                          style: vue.normalizeStyle(td.attrs.style)
                        }, [
                          vue.createVNode(_component_node, {
                            childs: td.children,
                            opts: $props.opts
                          }, null, 8, ["childs", "opts"])
                        ], 6);
                      }), 128))
                    ], 6))
                  ], 64);
                }), 128))
              ], 6);
            }), 128))
          ], 14, ["id"])) : !n.c ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 9 }, [
            vue.createCommentVNode(" \u5BCC\u6587\u672C "),
            vue.createElementVNode("rich-text", {
              id: n.attrs.id,
              style: vue.normalizeStyle(n.f + ";display:inline"),
              preview: false,
              selectable: $props.opts[4],
              "user-select": $props.opts[4],
              nodes: [n]
            }, null, 12, ["id", "selectable", "user-select", "nodes"])
          ], 2112)) : n.c === 2 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 10 }, [
            vue.createCommentVNode(" \u7EE7\u7EED\u9012\u5F52 "),
            vue.createElementVNode("view", {
              id: n.attrs.id,
              class: vue.normalizeClass("_block _" + n.name + " " + n.attrs.class),
              style: vue.normalizeStyle(n.f + ";" + n.attrs.style)
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(n.children, (n2, j) => {
                return vue.openBlock(), vue.createBlock(_component_node, {
                  key: j,
                  style: vue.normalizeStyle(n2.f),
                  name: n2.name,
                  attrs: n2.attrs,
                  childs: n2.children,
                  opts: $props.opts
                }, null, 8, ["style", "name", "attrs", "childs", "opts"]);
              }), 128))
            ], 14, ["id"])
          ], 2112)) : (vue.openBlock(), vue.createBlock(_component_node, {
            key: 11,
            style: vue.normalizeStyle(n.f),
            name: n.name,
            attrs: n.attrs,
            childs: n.children,
            opts: $props.opts
          }, null, 8, ["style", "name", "attrs", "childs", "opts"]))
        ], 64);
      }), 128))
    ], 14, ["id"]);
  }
  if (typeof block0 === "function")
    block0(_sfc_main$b);
  var node = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-35a45afb"], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/uni_modules/mp-html/components/mp-html/node/node.vue"]]);
  const config = {
    trustTags: makeMap("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),
    blockTags: makeMap("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),
    inlineTags: makeMap("abbr,b,big,code,del,em,i,ins,label,q,small,span,strong,sub,sup"),
    ignoreTags: makeMap("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),
    voidTags: makeMap("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),
    entities: {
      lt: "<",
      gt: ">",
      quot: '"',
      apos: "'",
      ensp: "\u2002",
      emsp: "\u2003",
      nbsp: "\xA0",
      semi: ";",
      ndash: "\u2013",
      mdash: "\u2014",
      middot: "\xB7",
      lsquo: "\u2018",
      rsquo: "\u2019",
      ldquo: "\u201C",
      rdquo: "\u201D",
      bull: "\u2022",
      hellip: "\u2026",
      larr: "\u2190",
      uarr: "\u2191",
      rarr: "\u2192",
      darr: "\u2193"
    },
    tagStyle: {
      address: "font-style:italic",
      big: "display:inline;font-size:1.2em",
      caption: "display:table-caption;text-align:center",
      center: "text-align:center",
      cite: "font-style:italic",
      dd: "margin-left:40px",
      mark: "background-color:yellow",
      pre: "font-family:monospace;white-space:pre",
      s: "text-decoration:line-through",
      small: "display:inline;font-size:0.8em",
      strike: "text-decoration:line-through",
      u: "text-decoration:underline"
    },
    svgDict: {
      animatetransform: "animateTransform",
      lineargradient: "linearGradient",
      viewbox: "viewBox",
      attributename: "attributeName",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur"
    }
  };
  const tagSelector = {};
  const {
    windowWidth
  } = uni.getSystemInfoSync();
  const blankChar = makeMap(" ,\r,\n,	,\f");
  let idIndex = 0;
  config.ignoreTags.iframe = void 0;
  config.trustTags.iframe = true;
  config.ignoreTags.embed = void 0;
  config.trustTags.embed = true;
  function makeMap(str) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for (let i = list.length; i--; ) {
      map[list[i]] = true;
    }
    return map;
  }
  function decodeEntity(str, amp) {
    let i = str.indexOf("&");
    while (i !== -1) {
      const j = str.indexOf(";", i + 3);
      let code;
      if (j === -1)
        break;
      if (str[i + 1] === "#") {
        code = parseInt((str[i + 2] === "x" ? "0" : "") + str.substring(i + 2, j));
        if (!isNaN(code)) {
          str = str.substr(0, i) + String.fromCharCode(code) + str.substr(j + 1);
        }
      } else {
        code = str.substring(i + 1, j);
        if (config.entities[code] || code === "amp" && amp) {
          str = str.substr(0, i) + (config.entities[code] || "&") + str.substr(j + 1);
        }
      }
      i = str.indexOf("&", i + 1);
    }
    return str;
  }
  function Parser(vm) {
    this.options = vm || {};
    this.tagStyle = Object.assign({}, config.tagStyle, this.options.tagStyle);
    this.imgList = vm.imgList || [];
    this.plugins = vm.plugins || [];
    this.attrs = /* @__PURE__ */ Object.create(null);
    this.stack = [];
    this.nodes = [];
    this.pre = (this.options.containerStyle || "").includes("white-space") && this.options.containerStyle.includes("pre") ? 2 : 0;
  }
  Parser.prototype.parse = function(content) {
    for (let i = this.plugins.length; i--; ) {
      if (this.plugins[i].onUpdate) {
        content = this.plugins[i].onUpdate(content, config) || content;
      }
    }
    new Lexer(this).parse(content);
    while (this.stack.length) {
      this.popNode();
    }
    return this.nodes;
  };
  Parser.prototype.expose = function() {
    for (let i = this.stack.length; i--; ) {
      const item = this.stack[i];
      if (item.c || item.name === "a" || item.name === "video" || item.name === "audio")
        return;
      item.c = 1;
    }
  };
  Parser.prototype.hook = function(node2) {
    for (let i = this.plugins.length; i--; ) {
      if (this.plugins[i].onParse && this.plugins[i].onParse(node2, this) === false) {
        return false;
      }
    }
    return true;
  };
  Parser.prototype.getUrl = function(url2) {
    const domain = this.options.domain;
    if (url2[0] === "/") {
      if (url2[1] === "/") {
        url2 = (domain ? domain.split("://")[0] : "http") + ":" + url2;
      } else if (domain) {
        url2 = domain + url2;
      } else {
        url2 = plus.io.convertLocalFileSystemURL(url2);
      }
    } else if (!url2.includes("data:") && !url2.includes("://")) {
      if (domain) {
        url2 = domain + "/" + url2;
      } else {
        url2 = plus.io.convertLocalFileSystemURL(url2);
      }
    }
    return url2;
  };
  Parser.prototype.parseStyle = function(node2) {
    const attrs = node2.attrs;
    const list = (this.tagStyle[node2.name] || "").split(";").concat((attrs.style || "").split(";"));
    const styleObj = {};
    let tmp = "";
    if (attrs.id && !this.xml) {
      if (this.options.useAnchor) {
        this.expose();
      } else if (node2.name !== "img" && node2.name !== "a" && node2.name !== "video" && node2.name !== "audio") {
        attrs.id = void 0;
      }
    }
    if (attrs.width) {
      styleObj.width = parseFloat(attrs.width) + (attrs.width.includes("%") ? "%" : "px");
      attrs.width = void 0;
    }
    if (attrs.height) {
      styleObj.height = parseFloat(attrs.height) + (attrs.height.includes("%") ? "%" : "px");
      attrs.height = void 0;
    }
    for (let i = 0, len = list.length; i < len; i++) {
      const info = list[i].split(":");
      if (info.length < 2)
        continue;
      const key = info.shift().trim().toLowerCase();
      let value = info.join(":").trim();
      if (value[0] === "-" && value.lastIndexOf("-") > 0 || value.includes("safe")) {
        tmp += `;${key}:${value}`;
      } else if (!styleObj[key] || value.includes("import") || !styleObj[key].includes("import")) {
        if (value.includes("url")) {
          let j = value.indexOf("(") + 1;
          if (j) {
            while (value[j] === '"' || value[j] === "'" || blankChar[value[j]]) {
              j++;
            }
            value = value.substr(0, j) + this.getUrl(value.substr(j));
          }
        } else if (value.includes("rpx")) {
          value = value.replace(/[0-9.]+\s*rpx/g, ($) => parseFloat($) * windowWidth / 750 + "px");
        }
        styleObj[key] = value;
      }
    }
    node2.attrs.style = tmp;
    return styleObj;
  };
  Parser.prototype.onTagName = function(name) {
    this.tagName = this.xml ? name : name.toLowerCase();
    if (this.tagName === "svg") {
      this.xml = (this.xml || 0) + 1;
    }
  };
  Parser.prototype.onAttrName = function(name) {
    name = this.xml ? name : name.toLowerCase();
    if (name.substr(0, 5) === "data-") {
      if (name === "data-src" && !this.attrs.src) {
        this.attrName = "src";
      } else if (this.tagName === "img" || this.tagName === "a") {
        this.attrName = name;
      } else {
        this.attrName = void 0;
      }
    } else {
      this.attrName = name;
      this.attrs[name] = "T";
    }
  };
  Parser.prototype.onAttrVal = function(val) {
    const name = this.attrName || "";
    if (name === "style" || name === "href") {
      this.attrs[name] = decodeEntity(val, true);
    } else if (name.includes("src")) {
      this.attrs[name] = this.getUrl(decodeEntity(val, true));
    } else if (name) {
      this.attrs[name] = val;
    }
  };
  Parser.prototype.onOpenTag = function(selfClose) {
    const node2 = /* @__PURE__ */ Object.create(null);
    node2.name = this.tagName;
    node2.attrs = this.attrs;
    if (this.options.nodes.length) {
      node2.type = "node";
    }
    this.attrs = /* @__PURE__ */ Object.create(null);
    const attrs = node2.attrs;
    const parent = this.stack[this.stack.length - 1];
    const siblings = parent ? parent.children : this.nodes;
    const close = this.xml ? selfClose : config.voidTags[node2.name];
    if (tagSelector[node2.name]) {
      attrs.class = tagSelector[node2.name] + (attrs.class ? " " + attrs.class : "");
    }
    if (node2.name === "embed") {
      this.expose();
    }
    if (node2.name === "video" || node2.name === "audio") {
      if (node2.name === "video" && !attrs.id) {
        attrs.id = "v" + idIndex++;
      }
      if (!attrs.controls && !attrs.autoplay) {
        attrs.controls = "T";
      }
      node2.src = [];
      if (attrs.src) {
        node2.src.push(attrs.src);
        attrs.src = void 0;
      }
      this.expose();
    }
    if (close) {
      if (!this.hook(node2) || config.ignoreTags[node2.name]) {
        if (node2.name === "base" && !this.options.domain) {
          this.options.domain = attrs.href;
        } else if (node2.name === "source" && parent && (parent.name === "video" || parent.name === "audio") && attrs.src) {
          parent.src.push(attrs.src);
        }
        return;
      }
      const styleObj = this.parseStyle(node2);
      if (node2.name === "img") {
        if (attrs.src) {
          if (attrs.src.includes("webp")) {
            node2.webp = "T";
          }
          if (attrs.src.includes("data:") && !attrs["original-src"]) {
            attrs.ignore = "T";
          }
          if (!attrs.ignore || node2.webp || attrs.src.includes("cloud://")) {
            for (let i = this.stack.length; i--; ) {
              const item = this.stack[i];
              if (item.name === "a") {
                node2.a = item.attrs;
                break;
              }
              item.c = 1;
            }
            attrs.i = this.imgList.length.toString();
            let src = attrs["original-src"] || attrs.src;
            this.imgList.push(src);
            if (this.options.lazyLoad) {
              attrs["data-src"] = attrs.src;
              attrs.src = void 0;
            }
          }
        }
        if (styleObj.display === "inline") {
          styleObj.display = "";
        }
        if (attrs.ignore) {
          styleObj["max-width"] = styleObj["max-width"] || "100%";
          attrs.style += ";-webkit-touch-callout:none";
        }
        if (parseInt(styleObj.width) > windowWidth) {
          styleObj.height = void 0;
        }
        if (!isNaN(parseInt(styleObj.width))) {
          node2.w = "T";
        }
        if (!isNaN(parseInt(styleObj.height)) && (!styleObj.height.includes("%") || parent && (parent.attrs.style || "").includes("height"))) {
          node2.h = "T";
        }
      } else if (node2.name === "svg") {
        siblings.push(node2);
        this.stack.push(node2);
        this.popNode();
        return;
      }
      for (const key in styleObj) {
        if (styleObj[key]) {
          attrs.style += `;${key}:${styleObj[key].replace(" !important", "")}`;
        }
      }
      attrs.style = attrs.style.substr(1) || void 0;
    } else {
      if ((node2.name === "pre" || (attrs.style || "").includes("white-space") && attrs.style.includes("pre")) && this.pre !== 2) {
        this.pre = node2.pre = 1;
      }
      node2.children = [];
      this.stack.push(node2);
    }
    siblings.push(node2);
  };
  Parser.prototype.onCloseTag = function(name) {
    name = this.xml ? name : name.toLowerCase();
    let i;
    for (i = this.stack.length; i--; ) {
      if (this.stack[i].name === name)
        break;
    }
    if (i !== -1) {
      while (this.stack.length > i) {
        this.popNode();
      }
    } else if (name === "p" || name === "br") {
      const siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
      siblings.push({
        name,
        attrs: {
          class: tagSelector[name] || "",
          style: this.tagStyle[name] || ""
        }
      });
    }
  };
  Parser.prototype.popNode = function() {
    const node2 = this.stack.pop();
    let attrs = node2.attrs;
    const children = node2.children;
    const parent = this.stack[this.stack.length - 1];
    const siblings = parent ? parent.children : this.nodes;
    if (!this.hook(node2) || config.ignoreTags[node2.name]) {
      if (node2.name === "title" && children.length && children[0].type === "text" && this.options.setTitle) {
        uni.setNavigationBarTitle({
          title: children[0].text
        });
      }
      siblings.pop();
      return;
    }
    if (node2.pre && this.pre !== 2) {
      this.pre = node2.pre = void 0;
      for (let i = this.stack.length; i--; ) {
        if (this.stack[i].pre) {
          this.pre = 1;
        }
      }
    }
    const styleObj = {};
    if (node2.name === "svg") {
      if (this.xml > 1) {
        this.xml--;
        return;
      }
      let src = "";
      const style = attrs.style;
      attrs.style = "";
      attrs.xmlns = "http://www.w3.org/2000/svg";
      (function traversal(node3) {
        if (node3.type === "text") {
          src += node3.text;
          return;
        }
        const name = config.svgDict[node3.name] || node3.name;
        src += "<" + name;
        for (const item in node3.attrs) {
          const val = node3.attrs[item];
          if (val) {
            src += ` ${config.svgDict[item] || item}="${val}"`;
          }
        }
        if (!node3.children) {
          src += "/>";
        } else {
          src += ">";
          for (let i = 0; i < node3.children.length; i++) {
            traversal(node3.children[i]);
          }
          src += "</" + name + ">";
        }
      })(node2);
      node2.name = "img";
      node2.attrs = {
        src: "data:image/svg+xml;utf8," + src.replace(/#/g, "%23"),
        style,
        ignore: "T"
      };
      node2.children = void 0;
      this.xml = false;
      return;
    }
    if (attrs.align) {
      if (node2.name === "table") {
        if (attrs.align === "center") {
          styleObj["margin-inline-start"] = styleObj["margin-inline-end"] = "auto";
        } else {
          styleObj.float = attrs.align;
        }
      } else {
        styleObj["text-align"] = attrs.align;
      }
      attrs.align = void 0;
    }
    if (attrs.dir) {
      styleObj.direction = attrs.dir;
      attrs.dir = void 0;
    }
    if (node2.name === "font") {
      if (attrs.color) {
        styleObj.color = attrs.color;
        attrs.color = void 0;
      }
      if (attrs.face) {
        styleObj["font-family"] = attrs.face;
        attrs.face = void 0;
      }
      if (attrs.size) {
        let size = parseInt(attrs.size);
        if (!isNaN(size)) {
          if (size < 1) {
            size = 1;
          } else if (size > 7) {
            size = 7;
          }
          styleObj["font-size"] = ["x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large"][size - 1];
        }
        attrs.size = void 0;
      }
    }
    if ((attrs.class || "").includes("align-center")) {
      styleObj["text-align"] = "center";
    }
    Object.assign(styleObj, this.parseStyle(node2));
    if (node2.name !== "table" && parseInt(styleObj.width) > windowWidth) {
      styleObj["max-width"] = "100%";
      styleObj["box-sizing"] = "border-box";
    }
    if (config.blockTags[node2.name]) {
      node2.name = "div";
    } else if (!config.trustTags[node2.name] && !this.xml) {
      node2.name = "span";
    }
    if (node2.name === "a" || node2.name === "ad" || node2.name === "iframe") {
      this.expose();
    } else if (node2.name === "video") {
      if ((styleObj.height || "").includes("auto")) {
        styleObj.height = void 0;
      }
      let str = '<video style="width:100%;height:100%"';
      for (const item in attrs) {
        if (attrs[item]) {
          str += " " + item + '="' + attrs[item] + '"';
        }
      }
      if (this.options.pauseVideo) {
        str += ` onplay="this.dispatchEvent(new CustomEvent('vplay',{bubbles:!0}));for(var e=document.getElementsByTagName('video'),t=0;t<e.length;t++)e[t]!=this&&e[t].pause()"`;
      }
      str += ">";
      for (let i = 0; i < node2.src.length; i++) {
        str += '<source src="' + node2.src[i] + '">';
      }
      str += "</video>";
      node2.html = str;
    } else if ((node2.name === "ul" || node2.name === "ol") && node2.c) {
      const types = {
        a: "lower-alpha",
        A: "upper-alpha",
        i: "lower-roman",
        I: "upper-roman"
      };
      if (types[attrs.type]) {
        attrs.style += ";list-style-type:" + types[attrs.type];
        attrs.type = void 0;
      }
      for (let i = children.length; i--; ) {
        if (children[i].name === "li") {
          children[i].c = 1;
        }
      }
    } else if (node2.name === "table") {
      let padding = parseFloat(attrs.cellpadding);
      let spacing = parseFloat(attrs.cellspacing);
      const border = parseFloat(attrs.border);
      if (node2.c) {
        if (isNaN(padding)) {
          padding = 2;
        }
        if (isNaN(spacing)) {
          spacing = 2;
        }
      }
      if (border) {
        attrs.style += ";border:" + border + "px solid gray";
      }
      if (node2.flag && node2.c) {
        styleObj.display = "grid";
        if (spacing) {
          styleObj["grid-gap"] = spacing + "px";
          styleObj.padding = spacing + "px";
        } else if (border) {
          attrs.style += ";border-left:0;border-top:0";
        }
        const width = [];
        const trList = [];
        const cells = [];
        const map = {};
        (function traversal(nodes) {
          for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].name === "tr") {
              trList.push(nodes[i]);
            } else {
              traversal(nodes[i].children || []);
            }
          }
        })(children);
        for (let row = 1; row <= trList.length; row++) {
          let col = 1;
          for (let j = 0; j < trList[row - 1].children.length; j++) {
            const td = trList[row - 1].children[j];
            if (td.name === "td" || td.name === "th") {
              while (map[row + "." + col]) {
                col++;
              }
              let style = td.attrs.style || "";
              const start = style.indexOf("width") ? style.indexOf(";width") : 0;
              if (start !== -1) {
                let end = style.indexOf(";", start + 6);
                if (end === -1) {
                  end = style.length;
                }
                if (!td.attrs.colspan) {
                  width[col] = style.substring(start ? start + 7 : 6, end);
                }
                style = style.substr(0, start) + style.substr(end);
              }
              style += (border ? `;border:${border}px solid gray` + (spacing ? "" : ";border-right:0;border-bottom:0") : "") + (padding ? `;padding:${padding}px` : "");
              if (td.attrs.colspan) {
                style += `;grid-column-start:${col};grid-column-end:${col + parseInt(td.attrs.colspan)}`;
                if (!td.attrs.rowspan) {
                  style += `;grid-row-start:${row};grid-row-end:${row + 1}`;
                }
                col += parseInt(td.attrs.colspan) - 1;
              }
              if (td.attrs.rowspan) {
                style += `;grid-row-start:${row};grid-row-end:${row + parseInt(td.attrs.rowspan)}`;
                if (!td.attrs.colspan) {
                  style += `;grid-column-start:${col};grid-column-end:${col + 1}`;
                }
                for (let rowspan = 1; rowspan < td.attrs.rowspan; rowspan++) {
                  for (let colspan = 0; colspan < (td.attrs.colspan || 1); colspan++) {
                    map[row + rowspan + "." + (col - colspan)] = 1;
                  }
                }
              }
              if (style) {
                td.attrs.style = style;
              }
              cells.push(td);
              col++;
            }
          }
          if (row === 1) {
            let temp = "";
            for (let i = 1; i < col; i++) {
              temp += (width[i] ? width[i] : "auto") + " ";
            }
            styleObj["grid-template-columns"] = temp;
          }
        }
        node2.children = cells;
      } else {
        if (node2.c) {
          styleObj.display = "table";
        }
        if (!isNaN(spacing)) {
          styleObj["border-spacing"] = spacing + "px";
        }
        if (border || padding) {
          (function traversal(nodes) {
            for (let i = 0; i < nodes.length; i++) {
              const td = nodes[i];
              if (td.name === "th" || td.name === "td") {
                if (border) {
                  td.attrs.style = `border:${border}px solid gray;${td.attrs.style || ""}`;
                }
                if (padding) {
                  td.attrs.style = `padding:${padding}px;${td.attrs.style || ""}`;
                }
              } else if (td.children) {
                traversal(td.children);
              }
            }
          })(children);
        }
      }
      if (this.options.scrollTable && !(attrs.style || "").includes("inline")) {
        const table = Object.assign({}, node2);
        node2.name = "div";
        node2.attrs = {
          style: "overflow:auto"
        };
        node2.children = [table];
        attrs = table.attrs;
      }
    } else if ((node2.name === "td" || node2.name === "th") && (attrs.colspan || attrs.rowspan)) {
      for (let i = this.stack.length; i--; ) {
        if (this.stack[i].name === "table") {
          this.stack[i].flag = 1;
          break;
        }
      }
    } else if (node2.name === "ruby") {
      node2.name = "span";
      for (let i = 0; i < children.length - 1; i++) {
        if (children[i].type === "text" && children[i + 1].name === "rt") {
          children[i] = {
            name: "div",
            attrs: {
              style: "display:inline-block;text-align:center"
            },
            children: [{
              name: "div",
              attrs: {
                style: "font-size:50%;" + (children[i + 1].attrs.style || "")
              },
              children: children[i + 1].children
            }, children[i]]
          };
          children.splice(i + 1, 1);
        }
      }
    } else if (node2.c) {
      (function traversal(node3) {
        node3.c = 2;
        for (let i = node3.children.length; i--; ) {
          const child = node3.children[i];
          if (child.name && (config.inlineTags[child.name] || (child.attrs.style || "").includes("inline")) && !child.c) {
            traversal(child);
          }
          if (!child.c || child.name === "table") {
            node3.c = 1;
          }
        }
      })(node2);
    }
    if ((styleObj.display || "").includes("flex") && !node2.c) {
      for (let i = children.length; i--; ) {
        const item = children[i];
        if (item.f) {
          item.attrs.style = (item.attrs.style || "") + item.f;
          item.f = void 0;
        }
      }
    }
    const flex = parent && ((parent.attrs.style || "").includes("flex") || (parent.attrs.style || "").includes("grid")) && !node2.c;
    if (flex) {
      node2.f = ";max-width:100%";
    }
    if (children.length >= 50 && node2.c && !(styleObj.display || "").includes("flex")) {
      let i = children.length - 1;
      for (let j = i; j >= -1; j--) {
        if (j === -1 || children[j].c || !children[j].name || children[j].name !== "div" && children[j].name !== "p" && children[j].name[0] !== "h" || (children[j].attrs.style || "").includes("inline")) {
          if (i - j >= 5) {
            children.splice(j + 1, i - j, {
              name: "div",
              attrs: {},
              children: node2.children.slice(j + 1, i + 1)
            });
          }
          i = j - 1;
        }
      }
    }
    for (const key in styleObj) {
      if (styleObj[key]) {
        const val = `;${key}:${styleObj[key].replace(" !important", "")}`;
        if (flex && (key.includes("flex") && key !== "flex-direction" || key === "align-self" || key.includes("grid") || styleObj[key][0] === "-" || key.includes("width") && val.includes("%"))) {
          node2.f += val;
          if (key === "width") {
            attrs.style += ";width:100%";
          }
        } else {
          attrs.style += val;
        }
      }
    }
    attrs.style = attrs.style.substr(1) || void 0;
  };
  Parser.prototype.onText = function(text) {
    if (!this.pre) {
      let trim = "";
      let flag;
      for (let i = 0, len = text.length; i < len; i++) {
        if (!blankChar[text[i]]) {
          trim += text[i];
        } else {
          if (trim[trim.length - 1] !== " ") {
            trim += " ";
          }
          if (text[i] === "\n" && !flag) {
            flag = true;
          }
        }
      }
      if (trim === " " && flag)
        return;
      text = trim;
    }
    const node2 = /* @__PURE__ */ Object.create(null);
    node2.type = "text";
    node2.text = decodeEntity(text);
    if (this.hook(node2)) {
      const siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
      siblings.push(node2);
    }
  };
  function Lexer(handler) {
    this.handler = handler;
  }
  Lexer.prototype.parse = function(content) {
    this.content = content || "";
    this.i = 0;
    this.start = 0;
    this.state = this.text;
    for (let len = this.content.length; this.i !== -1 && this.i < len; ) {
      this.state();
    }
  };
  Lexer.prototype.checkClose = function(method2) {
    const selfClose = this.content[this.i] === "/";
    if (this.content[this.i] === ">" || selfClose && this.content[this.i + 1] === ">") {
      if (method2) {
        this.handler[method2](this.content.substring(this.start, this.i));
      }
      this.i += selfClose ? 2 : 1;
      this.start = this.i;
      this.handler.onOpenTag(selfClose);
      if (this.handler.tagName === "script") {
        this.i = this.content.indexOf("</", this.i);
        if (this.i !== -1) {
          this.i += 2;
          this.start = this.i;
        }
        this.state = this.endTag;
      } else {
        this.state = this.text;
      }
      return true;
    }
    return false;
  };
  Lexer.prototype.text = function() {
    this.i = this.content.indexOf("<", this.i);
    if (this.i === -1) {
      if (this.start < this.content.length) {
        this.handler.onText(this.content.substring(this.start, this.content.length));
      }
      return;
    }
    const c = this.content[this.i + 1];
    if (c >= "a" && c <= "z" || c >= "A" && c <= "Z") {
      if (this.start !== this.i) {
        this.handler.onText(this.content.substring(this.start, this.i));
      }
      this.start = ++this.i;
      this.state = this.tagName;
    } else if (c === "/" || c === "!" || c === "?") {
      if (this.start !== this.i) {
        this.handler.onText(this.content.substring(this.start, this.i));
      }
      const next = this.content[this.i + 2];
      if (c === "/" && (next >= "a" && next <= "z" || next >= "A" && next <= "Z")) {
        this.i += 2;
        this.start = this.i;
        this.state = this.endTag;
        return;
      }
      let end = "-->";
      if (c !== "!" || this.content[this.i + 2] !== "-" || this.content[this.i + 3] !== "-") {
        end = ">";
      }
      this.i = this.content.indexOf(end, this.i);
      if (this.i !== -1) {
        this.i += end.length;
        this.start = this.i;
      }
    } else {
      this.i++;
    }
  };
  Lexer.prototype.tagName = function() {
    if (blankChar[this.content[this.i]]) {
      this.handler.onTagName(this.content.substring(this.start, this.i));
      while (blankChar[this.content[++this.i]])
        ;
      if (this.i < this.content.length && !this.checkClose()) {
        this.start = this.i;
        this.state = this.attrName;
      }
    } else if (!this.checkClose("onTagName")) {
      this.i++;
    }
  };
  Lexer.prototype.attrName = function() {
    let c = this.content[this.i];
    if (blankChar[c] || c === "=") {
      this.handler.onAttrName(this.content.substring(this.start, this.i));
      let needVal = c === "=";
      const len = this.content.length;
      while (++this.i < len) {
        c = this.content[this.i];
        if (!blankChar[c]) {
          if (this.checkClose())
            return;
          if (needVal) {
            this.start = this.i;
            this.state = this.attrVal;
            return;
          }
          if (this.content[this.i] === "=") {
            needVal = true;
          } else {
            this.start = this.i;
            this.state = this.attrName;
            return;
          }
        }
      }
    } else if (!this.checkClose("onAttrName")) {
      this.i++;
    }
  };
  Lexer.prototype.attrVal = function() {
    const c = this.content[this.i];
    const len = this.content.length;
    if (c === '"' || c === "'") {
      this.start = ++this.i;
      this.i = this.content.indexOf(c, this.i);
      if (this.i === -1)
        return;
      this.handler.onAttrVal(this.content.substring(this.start, this.i));
    } else {
      for (; this.i < len; this.i++) {
        if (blankChar[this.content[this.i]]) {
          this.handler.onAttrVal(this.content.substring(this.start, this.i));
          break;
        } else if (this.checkClose("onAttrVal"))
          return;
      }
    }
    while (blankChar[this.content[++this.i]])
      ;
    if (this.i < len && !this.checkClose()) {
      this.start = this.i;
      this.state = this.attrName;
    }
  };
  Lexer.prototype.endTag = function() {
    const c = this.content[this.i];
    if (blankChar[c] || c === ">" || c === "/") {
      this.handler.onCloseTag(this.content.substring(this.start, this.i));
      if (c !== ">") {
        this.i = this.content.indexOf(">", this.i);
        if (this.i === -1)
          return;
      }
      this.start = ++this.i;
      this.state = this.text;
    } else {
      this.i++;
    }
  };
  /*!
   * marked - a markdown parser
   * Copyright (c) 2011-2020, Christopher Jeffrey. (MIT Licensed)
   * https://github.com/markedjs/marked
   */
  function t() {
    function i(e2, t3) {
      for (var n2 = 0; n2 < t3.length; n2++) {
        var r2 = t3[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
      }
    }
    function s(e2, t3) {
      (t3 == null || t3 > e2.length) && (t3 = e2.length);
      for (var n2 = 0, r2 = new Array(t3); n2 < t3; n2++)
        r2[n2] = e2[n2];
      return r2;
    }
    function p(e2, t3) {
      var n2;
      if (typeof Symbol != "undefined" && e2[Symbol.iterator] != null)
        return (n2 = e2[Symbol.iterator]()).next.bind(n2);
      if (Array.isArray(e2) || (n2 = function(e3, t4) {
        if (e3) {
          if (typeof e3 == "string")
            return s(e3, t4);
          var n3 = Object.prototype.toString.call(e3).slice(8, -1);
          return n3 === "Object" && e3.constructor && (n3 = e3.constructor.name), n3 === "Map" || n3 === "Set" ? Array.from(e3) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? s(e3, t4) : void 0;
        }
      }(e2)) || t3 && e2 && typeof e2.length == "number") {
        n2 && (e2 = n2);
        var r2 = 0;
        return function() {
          return r2 >= e2.length ? { done: true } : { done: false, value: e2[r2++] };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function n(e2) {
      return c[e2];
    }
    var e, t2 = (function(t3) {
      function e2() {
        return { baseUrl: null, breaks: false, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartLists: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
      }
      t3.exports = { defaults: e2(), getDefaults: e2, changeDefaults: function(e3) {
        t3.exports.defaults = e3;
      } };
    }(e = { exports: {} }), e.exports), r = (t2.defaults, t2.getDefaults, t2.changeDefaults, /[&<>"']/), l = /[&<>"']/g, a = /[<>"']|&(?!#?\w+;)/, o = /[<>"']|&(?!#?\w+;)/g, c = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    var u = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
    function h(e2) {
      return e2.replace(u, function(e3, t3) {
        return (t3 = t3.toLowerCase()) === "colon" ? ":" : t3.charAt(0) === "#" ? t3.charAt(1) === "x" ? String.fromCharCode(parseInt(t3.substring(2), 16)) : String.fromCharCode(+t3.substring(1)) : "";
      });
    }
    var g = /(^|[^\[])\^/g;
    var f = /[^\w:]/g, d = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
    var k = {}, b = /^[^:]+:\/*[^/]*$/, m = /^([^:]+:)[\s\S]*$/, x = /^([^:]+:\/*[^/]*)[\s\S]*$/;
    function w(e2, t3) {
      k[" " + e2] || (b.test(e2) ? k[" " + e2] = e2 + "/" : k[" " + e2] = v(e2, "/", true));
      var n2 = (e2 = k[" " + e2]).indexOf(":") === -1;
      return t3.substring(0, 2) === "//" ? n2 ? t3 : e2.replace(m, "$1") + t3 : t3.charAt(0) === "/" ? n2 ? t3 : e2.replace(x, "$1") + t3 : e2 + t3;
    }
    function v(e2, t3, n2) {
      var r2 = e2.length;
      if (r2 === 0)
        return "";
      for (var i2 = 0; i2 < r2; ) {
        var s2 = e2.charAt(r2 - i2 - 1);
        if (s2 !== t3 || n2) {
          if (s2 === t3 || !n2)
            break;
          i2++;
        } else
          i2++;
      }
      return e2.substr(0, r2 - i2);
    }
    var _ = function(e2, t3) {
      if (t3) {
        if (r.test(e2))
          return e2.replace(l, n);
      } else if (a.test(e2))
        return e2.replace(o, n);
      return e2;
    }, y = h, z = function(n2, e2) {
      n2 = n2.source || n2, e2 = e2 || "";
      var r2 = { replace: function(e3, t3) {
        return t3 = (t3 = t3.source || t3).replace(g, "$1"), n2 = n2.replace(e3, t3), r2;
      }, getRegex: function() {
        return new RegExp(n2, e2);
      } };
      return r2;
    }, S = function(e2, t3, n2) {
      if (e2) {
        var r2;
        try {
          r2 = decodeURIComponent(h(n2)).replace(f, "").toLowerCase();
        } catch (e3) {
          return null;
        }
        if (r2.indexOf("javascript:") === 0 || r2.indexOf("vbscript:") === 0 || r2.indexOf("data:") === 0)
          return null;
      }
      t3 && !d.test(n2) && (n2 = w(t3, n2));
      try {
        n2 = encodeURI(n2).replace(/%25/g, "%");
      } catch (e3) {
        return null;
      }
      return n2;
    }, $ = { exec: function() {
    } }, A = function(e2) {
      for (var t3, n2, r2 = 1; r2 < arguments.length; r2++)
        for (n2 in t3 = arguments[r2])
          Object.prototype.hasOwnProperty.call(t3, n2) && (e2[n2] = t3[n2]);
      return e2;
    }, R = function(e2, t3) {
      var n2 = e2.replace(/\|/g, function(e3, t4, n3) {
        for (var r3 = false, i2 = t4; 0 <= --i2 && n3[i2] === "\\"; )
          r3 = !r3;
        return r3 ? "|" : " |";
      }).split(/ \|/), r2 = 0;
      if (n2.length > t3)
        n2.splice(t3);
      else
        for (; n2.length < t3; )
          n2.push("");
      for (; r2 < n2.length; r2++)
        n2[r2] = n2[r2].trim().replace(/\\\|/g, "|");
      return n2;
    }, T = function(e2, t3) {
      if (e2.indexOf(t3[1]) === -1)
        return -1;
      for (var n2 = e2.length, r2 = 0, i2 = 0; i2 < n2; i2++)
        if (e2[i2] === "\\")
          i2++;
        else if (e2[i2] === t3[0])
          r2++;
        else if (e2[i2] === t3[1] && --r2 < 0)
          return i2;
      return -1;
    }, I = function(e2) {
      e2 && e2.sanitize && !e2.silent && formatAppLog("warn", "at uni_modules/mp-html/components/mp-html/markdown/marked.min.js:6", "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
    }, Z = function(e2, t3) {
      if (t3 < 1)
        return "";
      for (var n2 = ""; 1 < t3; )
        1 & t3 && (n2 += e2), t3 >>= 1, e2 += e2;
      return n2 + e2;
    }, q = t2.defaults, O = v, C = R, U = _, j = T;
    function E(e2, t3, n2) {
      var r2 = t3.href, i2 = t3.title ? U(t3.title) : null, t3 = e2[1].replace(/\\([\[\]])/g, "$1");
      return e2[0].charAt(0) !== "!" ? { type: "link", raw: n2, href: r2, title: i2, text: t3 } : { type: "image", raw: n2, href: r2, title: i2, text: U(t3) };
    }
    var D = function() {
      function e2(e3) {
        this.options = e3 || q;
      }
      var t3 = e2.prototype;
      return t3.space = function(e3) {
        e3 = this.rules.block.newline.exec(e3);
        if (e3)
          return 1 < e3[0].length ? { type: "space", raw: e3[0] } : { raw: "\n" };
      }, t3.code = function(e3, t4) {
        e3 = this.rules.block.code.exec(e3);
        if (e3) {
          t4 = t4[t4.length - 1];
          if (t4 && t4.type === "paragraph")
            return { raw: e3[0], text: e3[0].trimRight() };
          t4 = e3[0].replace(/^ {4}/gm, "");
          return { type: "code", raw: e3[0], codeBlockStyle: "indented", text: this.options.pedantic ? t4 : O(t4, "\n") };
        }
      }, t3.fences = function(e3) {
        var t4 = this.rules.block.fences.exec(e3);
        if (t4) {
          var n2 = t4[0], e3 = function(e4, t5) {
            if ((e4 = e4.match(/^(\s+)(?:```)/)) === null)
              return t5;
            var n3 = e4[1];
            return t5.split("\n").map(function(e5) {
              var t6 = e5.match(/^\s+/);
              return t6 !== null && t6[0].length >= n3.length ? e5.slice(n3.length) : e5;
            }).join("\n");
          }(n2, t4[3] || "");
          return { type: "code", raw: n2, lang: t4[2] && t4[2].trim(), text: e3 };
        }
      }, t3.heading = function(e3) {
        e3 = this.rules.block.heading.exec(e3);
        if (e3)
          return { type: "heading", raw: e3[0], depth: e3[1].length, text: e3[2] };
      }, t3.nptable = function(e3) {
        e3 = this.rules.block.nptable.exec(e3);
        if (e3) {
          var t4 = { type: "table", header: C(e3[1].replace(/^ *| *\| *$/g, "")), align: e3[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: e3[3] ? e3[3].replace(/\n$/, "").split("\n") : [], raw: e3[0] };
          if (t4.header.length === t4.align.length) {
            for (var n2 = t4.align.length, r2 = 0; r2 < n2; r2++)
              /^ *-+: *$/.test(t4.align[r2]) ? t4.align[r2] = "right" : /^ *:-+: *$/.test(t4.align[r2]) ? t4.align[r2] = "center" : /^ *:-+ *$/.test(t4.align[r2]) ? t4.align[r2] = "left" : t4.align[r2] = null;
            for (n2 = t4.cells.length, r2 = 0; r2 < n2; r2++)
              t4.cells[r2] = C(t4.cells[r2], t4.header.length);
            return t4;
          }
        }
      }, t3.hr = function(e3) {
        e3 = this.rules.block.hr.exec(e3);
        if (e3)
          return { type: "hr", raw: e3[0] };
      }, t3.blockquote = function(e3) {
        var t4 = this.rules.block.blockquote.exec(e3);
        if (t4) {
          e3 = t4[0].replace(/^ *> ?/gm, "");
          return { type: "blockquote", raw: t4[0], text: e3 };
        }
      }, t3.list = function(e3) {
        e3 = this.rules.block.list.exec(e3);
        if (e3) {
          for (var t4, n2, r2, i2, s2, l2 = e3[0], a2 = e3[2], o2 = 1 < a2.length, c2 = { type: "list", raw: l2, ordered: o2, start: o2 ? +a2.slice(0, -1) : "", loose: false, items: [] }, u2 = e3[0].match(this.rules.block.item), p2 = false, h2 = u2.length, g2 = this.rules.block.listItemStart.exec(u2[0]), f2 = 0; f2 < h2; f2++) {
            if (l2 = t4 = u2[f2], f2 !== h2 - 1) {
              if ((r2 = this.rules.block.listItemStart.exec(u2[f2 + 1]))[1].length > g2[0].length || 3 < r2[1].length) {
                u2.splice(f2, 2, u2[f2] + "\n" + u2[f2 + 1]), f2--, h2--;
                continue;
              }
              (!this.options.pedantic || this.options.smartLists ? r2[2][r2[2].length - 1] !== a2[a2.length - 1] : o2 == (r2[2].length === 1)) && (n2 = u2.slice(f2 + 1).join("\n"), c2.raw = c2.raw.substring(0, c2.raw.length - n2.length), f2 = h2 - 1), g2 = r2;
            }
            r2 = t4.length, ~(t4 = t4.replace(/^ *([*+-]|\d+[.)]) ?/, "")).indexOf("\n ") && (r2 -= t4.length, t4 = this.options.pedantic ? t4.replace(/^ {1,4}/gm, "") : t4.replace(new RegExp("^ {1," + r2 + "}", "gm"), "")), r2 = p2 || /\n\n(?!\s*$)/.test(t4), f2 !== h2 - 1 && (p2 = t4.charAt(t4.length - 1) === "\n", r2 = r2 || p2), r2 && (c2.loose = true), this.options.gfm && (s2 = void 0, (i2 = /^\[[ xX]\] /.test(t4)) && (s2 = t4[1] !== " ", t4 = t4.replace(/^\[[ xX]\] +/, ""))), c2.items.push({ type: "list_item", raw: l2, task: i2, checked: s2, loose: r2, text: t4 });
          }
          return c2;
        }
      }, t3.html = function(e3) {
        e3 = this.rules.block.html.exec(e3);
        if (e3)
          return { type: this.options.sanitize ? "paragraph" : "html", raw: e3[0], pre: !this.options.sanitizer && (e3[1] === "pre" || e3[1] === "script" || e3[1] === "style"), text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e3[0]) : U(e3[0]) : e3[0] };
      }, t3.def = function(e3) {
        e3 = this.rules.block.def.exec(e3);
        if (e3)
          return e3[3] && (e3[3] = e3[3].substring(1, e3[3].length - 1)), { tag: e3[1].toLowerCase().replace(/\s+/g, " "), raw: e3[0], href: e3[2], title: e3[3] };
      }, t3.table = function(e3) {
        e3 = this.rules.block.table.exec(e3);
        if (e3) {
          var t4 = { type: "table", header: C(e3[1].replace(/^ *| *\| *$/g, "")), align: e3[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: e3[3] ? e3[3].replace(/\n$/, "").split("\n") : [] };
          if (t4.header.length === t4.align.length) {
            t4.raw = e3[0];
            for (var n2 = t4.align.length, r2 = 0; r2 < n2; r2++)
              /^ *-+: *$/.test(t4.align[r2]) ? t4.align[r2] = "right" : /^ *:-+: *$/.test(t4.align[r2]) ? t4.align[r2] = "center" : /^ *:-+ *$/.test(t4.align[r2]) ? t4.align[r2] = "left" : t4.align[r2] = null;
            for (n2 = t4.cells.length, r2 = 0; r2 < n2; r2++)
              t4.cells[r2] = C(t4.cells[r2].replace(/^ *\| *| *\| *$/g, ""), t4.header.length);
            return t4;
          }
        }
      }, t3.lheading = function(e3) {
        e3 = this.rules.block.lheading.exec(e3);
        if (e3)
          return { type: "heading", raw: e3[0], depth: e3[2].charAt(0) === "=" ? 1 : 2, text: e3[1] };
      }, t3.paragraph = function(e3) {
        e3 = this.rules.block.paragraph.exec(e3);
        if (e3)
          return { type: "paragraph", raw: e3[0], text: e3[1].charAt(e3[1].length - 1) === "\n" ? e3[1].slice(0, -1) : e3[1] };
      }, t3.text = function(e3, t4) {
        e3 = this.rules.block.text.exec(e3);
        if (e3) {
          t4 = t4[t4.length - 1];
          return t4 && t4.type === "text" ? { raw: e3[0], text: e3[0] } : { type: "text", raw: e3[0], text: e3[0] };
        }
      }, t3.escape = function(e3) {
        e3 = this.rules.inline.escape.exec(e3);
        if (e3)
          return { type: "escape", raw: e3[0], text: U(e3[1]) };
      }, t3.tag = function(e3, t4, n2) {
        e3 = this.rules.inline.tag.exec(e3);
        if (e3)
          return !t4 && /^<a /i.test(e3[0]) ? t4 = true : t4 && /^<\/a>/i.test(e3[0]) && (t4 = false), !n2 && /^<(pre|code|kbd|script)(\s|>)/i.test(e3[0]) ? n2 = true : n2 && /^<\/(pre|code|kbd|script)(\s|>)/i.test(e3[0]) && (n2 = false), { type: this.options.sanitize ? "text" : "html", raw: e3[0], inLink: t4, inRawBlock: n2, text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e3[0]) : U(e3[0]) : e3[0] };
      }, t3.link = function(e3) {
        var t4 = this.rules.inline.link.exec(e3);
        if (t4) {
          e3 = j(t4[2], "()");
          -1 < e3 && (r2 = (t4[0].indexOf("!") === 0 ? 5 : 4) + t4[1].length + e3, t4[2] = t4[2].substring(0, e3), t4[0] = t4[0].substring(0, r2).trim(), t4[3] = "");
          var n2, e3 = t4[2], r2 = "";
          return r2 = this.options.pedantic ? (n2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(e3), n2 ? (e3 = n2[1], n2[3]) : "") : t4[3] ? t4[3].slice(1, -1) : "", E(t4, { href: (e3 = e3.trim().replace(/^<([\s\S]*)>$/, "$1")) && e3.replace(this.rules.inline._escapes, "$1"), title: r2 && r2.replace(this.rules.inline._escapes, "$1") }, t4[0]);
        }
      }, t3.reflink = function(e3, t4) {
        if ((n2 = this.rules.inline.reflink.exec(e3)) || (n2 = this.rules.inline.nolink.exec(e3))) {
          e3 = (n2[2] || n2[1]).replace(/\s+/g, " ");
          if ((e3 = t4[e3.toLowerCase()]) && e3.href)
            return E(n2, e3, n2[0]);
          var n2 = n2[0].charAt(0);
          return { type: "text", raw: n2, text: n2 };
        }
      }, t3.strong = function(e3, t4, n2) {
        n2 === void 0 && (n2 = "");
        var r2 = this.rules.inline.strong.start.exec(e3);
        if (r2 && (!r2[1] || r2[1] && (n2 === "" || this.rules.inline.punctuation.exec(n2)))) {
          t4 = t4.slice(-1 * e3.length);
          var i2, s2 = r2[0] === "**" ? this.rules.inline.strong.endAst : this.rules.inline.strong.endUnd;
          for (s2.lastIndex = 0; (r2 = s2.exec(t4)) != null; )
            if (i2 = this.rules.inline.strong.middle.exec(t4.slice(0, r2.index + 3)))
              return { type: "strong", raw: e3.slice(0, i2[0].length), text: e3.slice(2, i2[0].length - 2) };
        }
      }, t3.em = function(e3, t4, n2) {
        n2 === void 0 && (n2 = "");
        var r2 = this.rules.inline.em.start.exec(e3);
        if (r2 && (!r2[1] || r2[1] && (n2 === "" || this.rules.inline.punctuation.exec(n2)))) {
          t4 = t4.slice(-1 * e3.length);
          var i2, s2 = r2[0] === "*" ? this.rules.inline.em.endAst : this.rules.inline.em.endUnd;
          for (s2.lastIndex = 0; (r2 = s2.exec(t4)) != null; )
            if (i2 = this.rules.inline.em.middle.exec(t4.slice(0, r2.index + 2)))
              return { type: "em", raw: e3.slice(0, i2[0].length), text: e3.slice(1, i2[0].length - 1) };
        }
      }, t3.codespan = function(e3) {
        var t4 = this.rules.inline.code.exec(e3);
        if (t4) {
          var n2 = t4[2].replace(/\n/g, " "), r2 = /[^ ]/.test(n2), e3 = n2.startsWith(" ") && n2.endsWith(" ");
          return r2 && e3 && (n2 = n2.substring(1, n2.length - 1)), n2 = U(n2, true), { type: "codespan", raw: t4[0], text: n2 };
        }
      }, t3.br = function(e3) {
        e3 = this.rules.inline.br.exec(e3);
        if (e3)
          return { type: "br", raw: e3[0] };
      }, t3.del = function(e3) {
        e3 = this.rules.inline.del.exec(e3);
        if (e3)
          return { type: "del", raw: e3[0], text: e3[2] };
      }, t3.autolink = function(e3, t4) {
        e3 = this.rules.inline.autolink.exec(e3);
        if (e3) {
          var n2, t4 = e3[2] === "@" ? "mailto:" + (n2 = U(this.options.mangle ? t4(e3[1]) : e3[1])) : n2 = U(e3[1]);
          return { type: "link", raw: e3[0], text: n2, href: t4, tokens: [{ type: "text", raw: n2, text: n2 }] };
        }
      }, t3.url = function(e3, t4) {
        var n2, r2, i2, s2;
        if (n2 = this.rules.inline.url.exec(e3)) {
          if (n2[2] === "@")
            i2 = "mailto:" + (r2 = U(this.options.mangle ? t4(n2[0]) : n2[0]));
          else {
            for (; s2 = n2[0], n2[0] = this.rules.inline._backpedal.exec(n2[0])[0], s2 !== n2[0]; )
              ;
            r2 = U(n2[0]), i2 = n2[1] === "www." ? "http://" + r2 : r2;
          }
          return { type: "link", raw: n2[0], text: r2, href: i2, tokens: [{ type: "text", raw: r2, text: r2 }] };
        }
      }, t3.inlineText = function(e3, t4, n2) {
        e3 = this.rules.inline.text.exec(e3);
        if (e3) {
          n2 = t4 ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e3[0]) : U(e3[0]) : e3[0] : U(this.options.smartypants ? n2(e3[0]) : e3[0]);
          return { type: "text", raw: e3[0], text: n2 };
        }
      }, e2;
    }(), R = $, T = z, $ = A, z = { newline: /^\n+/, code: /^( {4}[^\n]+\n*)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/, hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/, html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))", def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/, nptable: R, table: R, lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/, text: /^[^\n]+/, _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/, _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/ };
    z.def = T(z.def).replace("label", z._label).replace("title", z._title).getRegex(), z.bullet = /(?:[*+-]|\d{1,9}[.)])/, z.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/, z.item = T(z.item, "gm").replace(/bull/g, z.bullet).getRegex(), z.listItemStart = T(/^( *)(bull)/).replace("bull", z.bullet).getRegex(), z.list = T(z.list).replace(/bull/g, z.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + z.def.source + ")").getRegex(), z._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", z._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, z.html = T(z.html, "i").replace("comment", z._comment).replace("tag", z._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), z.paragraph = T(z._paragraph).replace("hr", z.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", z._tag).getRegex(), z.blockquote = T(z.blockquote).replace("paragraph", z.paragraph).getRegex(), z.normal = $({}, z), z.gfm = $({}, z.normal, { nptable: "^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)", table: "^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" }), z.gfm.nptable = T(z.gfm.nptable).replace("hr", z.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", z._tag).getRegex(), z.gfm.table = T(z.gfm.table).replace("hr", z.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", z._tag).getRegex(), z.pedantic = $({}, z.normal, { html: T(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", z._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/, fences: R, paragraph: T(z.normal._paragraph).replace("hr", z.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", z.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() });
    R = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: R, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/, nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", strong: { start: /^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/, middle: /^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/, endAst: /[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/, endUnd: /[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/ }, em: { start: /^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/, middle: /^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/, endAst: /[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/, endUnd: /[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: R, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^([\s*punctuation])/, _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~" };
    R.punctuation = T(R.punctuation).replace(/punctuation/g, R._punctuation).getRegex(), R._blockSkip = "\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>", R._overlapSkip = "__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*", R._comment = T(z._comment).replace("(?:-->|$)", "-->").getRegex(), R.em.start = T(R.em.start).replace(/punctuation/g, R._punctuation).getRegex(), R.em.middle = T(R.em.middle).replace(/punctuation/g, R._punctuation).replace(/overlapSkip/g, R._overlapSkip).getRegex(), R.em.endAst = T(R.em.endAst, "g").replace(/punctuation/g, R._punctuation).getRegex(), R.em.endUnd = T(R.em.endUnd, "g").replace(/punctuation/g, R._punctuation).getRegex(), R.strong.start = T(R.strong.start).replace(/punctuation/g, R._punctuation).getRegex(), R.strong.middle = T(R.strong.middle).replace(/punctuation/g, R._punctuation).replace(/overlapSkip/g, R._overlapSkip).getRegex(), R.strong.endAst = T(R.strong.endAst, "g").replace(/punctuation/g, R._punctuation).getRegex(), R.strong.endUnd = T(R.strong.endUnd, "g").replace(/punctuation/g, R._punctuation).getRegex(), R.blockSkip = T(R._blockSkip, "g").getRegex(), R.overlapSkip = T(R._overlapSkip, "g").getRegex(), R._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, R._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, R._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, R.autolink = T(R.autolink).replace("scheme", R._scheme).replace("email", R._email).getRegex(), R._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, R.tag = T(R.tag).replace("comment", R._comment).replace("attribute", R._attribute).getRegex(), R._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, R._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/, R._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, R.link = T(R.link).replace("label", R._label).replace("href", R._href).replace("title", R._title).getRegex(), R.reflink = T(R.reflink).replace("label", R._label).getRegex(), R.reflinkSearch = T(R.reflinkSearch, "g").replace("reflink", R.reflink).replace("nolink", R.nolink).getRegex(), R.normal = $({}, R), R.pedantic = $({}, R.normal, { strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: T(/^!?\[(label)\]\((.*?)\)/).replace("label", R._label).getRegex(), reflink: T(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", R._label).getRegex() }), R.gfm = $({}, R.normal, { escape: T(R.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/ }), R.gfm.url = T(R.gfm.url, "i").replace("email", R.gfm._extended_email).getRegex(), R.breaks = $({}, R.gfm, { br: T(R.br).replace("{2,}", "*").getRegex(), text: T(R.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() });
    var R = { block: z, inline: R }, P = t2.defaults, L = R.block, N = R.inline, B = Z;
    function F(e2) {
      return e2.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
    }
    function M(e2) {
      for (var t3, n2 = "", r2 = e2.length, i2 = 0; i2 < r2; i2++)
        t3 = e2.charCodeAt(i2), 0.5 < Math.random() && (t3 = "x" + t3.toString(16)), n2 += "&#" + t3 + ";";
      return n2;
    }
    var W = function() {
      function n2(e3) {
        this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e3 || P, this.options.tokenizer = this.options.tokenizer || new D(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options;
        e3 = { block: L.normal, inline: N.normal };
        this.options.pedantic ? (e3.block = L.pedantic, e3.inline = N.pedantic) : this.options.gfm && (e3.block = L.gfm, this.options.breaks ? e3.inline = N.breaks : e3.inline = N.gfm), this.tokenizer.rules = e3;
      }
      n2.lex = function(e3, t4) {
        return new n2(t4).lex(e3);
      }, n2.lexInline = function(e3, t4) {
        return new n2(t4).inlineTokens(e3);
      };
      var e2, t3, r2 = n2.prototype;
      return r2.lex = function(e3) {
        return e3 = e3.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e3, this.tokens, true), this.inline(this.tokens), this.tokens;
      }, r2.blockTokens = function(e3, t4, n3) {
        var r3, i2, s2, l2;
        for (t4 === void 0 && (t4 = []), n3 === void 0 && (n3 = true), e3 = e3.replace(/^ +$/gm, ""); e3; )
          if (r3 = this.tokenizer.space(e3))
            e3 = e3.substring(r3.raw.length), r3.type && t4.push(r3);
          else if (r3 = this.tokenizer.code(e3, t4))
            e3 = e3.substring(r3.raw.length), r3.type ? t4.push(r3) : ((l2 = t4[t4.length - 1]).raw += "\n" + r3.raw, l2.text += "\n" + r3.text);
          else if (r3 = this.tokenizer.fences(e3))
            e3 = e3.substring(r3.raw.length), t4.push(r3);
          else if (r3 = this.tokenizer.heading(e3))
            e3 = e3.substring(r3.raw.length), t4.push(r3);
          else if (r3 = this.tokenizer.nptable(e3))
            e3 = e3.substring(r3.raw.length), t4.push(r3);
          else if (r3 = this.tokenizer.hr(e3))
            e3 = e3.substring(r3.raw.length), t4.push(r3);
          else if (r3 = this.tokenizer.blockquote(e3))
            e3 = e3.substring(r3.raw.length), r3.tokens = this.blockTokens(r3.text, [], n3), t4.push(r3);
          else if (r3 = this.tokenizer.list(e3)) {
            for (e3 = e3.substring(r3.raw.length), s2 = r3.items.length, i2 = 0; i2 < s2; i2++)
              r3.items[i2].tokens = this.blockTokens(r3.items[i2].text, [], false);
            t4.push(r3);
          } else if (r3 = this.tokenizer.html(e3))
            e3 = e3.substring(r3.raw.length), t4.push(r3);
          else if (n3 && (r3 = this.tokenizer.def(e3)))
            e3 = e3.substring(r3.raw.length), this.tokens.links[r3.tag] || (this.tokens.links[r3.tag] = { href: r3.href, title: r3.title });
          else if (r3 = this.tokenizer.table(e3))
            e3 = e3.substring(r3.raw.length), t4.push(r3);
          else if (r3 = this.tokenizer.lheading(e3))
            e3 = e3.substring(r3.raw.length), t4.push(r3);
          else if (n3 && (r3 = this.tokenizer.paragraph(e3)))
            e3 = e3.substring(r3.raw.length), t4.push(r3);
          else if (r3 = this.tokenizer.text(e3, t4))
            e3 = e3.substring(r3.raw.length), r3.type ? t4.push(r3) : ((l2 = t4[t4.length - 1]).raw += "\n" + r3.raw, l2.text += "\n" + r3.text);
          else if (e3) {
            var a2 = "Infinite loop on byte: " + e3.charCodeAt(0);
            if (this.options.silent) {
              formatAppLog("error", "at uni_modules/mp-html/components/mp-html/markdown/marked.min.js:6", a2);
              break;
            }
            throw new Error(a2);
          }
        return t4;
      }, r2.inline = function(e3) {
        for (var t4, n3, r3, i2, s2, l2 = e3.length, a2 = 0; a2 < l2; a2++)
          switch ((s2 = e3[a2]).type) {
            case "paragraph":
            case "text":
            case "heading":
              s2.tokens = [], this.inlineTokens(s2.text, s2.tokens);
              break;
            case "table":
              for (s2.tokens = { header: [], cells: [] }, r3 = s2.header.length, t4 = 0; t4 < r3; t4++)
                s2.tokens.header[t4] = [], this.inlineTokens(s2.header[t4], s2.tokens.header[t4]);
              for (r3 = s2.cells.length, t4 = 0; t4 < r3; t4++)
                for (i2 = s2.cells[t4], s2.tokens.cells[t4] = [], n3 = 0; n3 < i2.length; n3++)
                  s2.tokens.cells[t4][n3] = [], this.inlineTokens(i2[n3], s2.tokens.cells[t4][n3]);
              break;
            case "blockquote":
              this.inline(s2.tokens);
              break;
            case "list":
              for (r3 = s2.items.length, t4 = 0; t4 < r3; t4++)
                this.inline(s2.items[t4].tokens);
          }
        return e3;
      }, r2.inlineTokens = function(e3, t4, n3, r3) {
        var i2;
        t4 === void 0 && (t4 = []), n3 === void 0 && (n3 = false), r3 === void 0 && (r3 = false);
        var s2, l2, a2, o2 = e3;
        if (this.tokens.links) {
          var c2 = Object.keys(this.tokens.links);
          if (0 < c2.length)
            for (; (s2 = this.tokenizer.rules.inline.reflinkSearch.exec(o2)) != null; )
              c2.includes(s2[0].slice(s2[0].lastIndexOf("[") + 1, -1)) && (o2 = o2.slice(0, s2.index) + "[" + B("a", s2[0].length - 2) + "]" + o2.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
        }
        for (; (s2 = this.tokenizer.rules.inline.blockSkip.exec(o2)) != null; )
          o2 = o2.slice(0, s2.index) + "[" + B("a", s2[0].length - 2) + "]" + o2.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        for (; e3; )
          if (l2 || (a2 = ""), l2 = false, i2 = this.tokenizer.escape(e3))
            e3 = e3.substring(i2.raw.length), t4.push(i2);
          else if (i2 = this.tokenizer.tag(e3, n3, r3))
            e3 = e3.substring(i2.raw.length), n3 = i2.inLink, r3 = i2.inRawBlock, t4.push(i2);
          else if (i2 = this.tokenizer.link(e3))
            e3 = e3.substring(i2.raw.length), i2.type === "link" && (i2.tokens = this.inlineTokens(i2.text, [], true, r3)), t4.push(i2);
          else if (i2 = this.tokenizer.reflink(e3, this.tokens.links))
            e3 = e3.substring(i2.raw.length), i2.type === "link" && (i2.tokens = this.inlineTokens(i2.text, [], true, r3)), t4.push(i2);
          else if (i2 = this.tokenizer.strong(e3, o2, a2))
            e3 = e3.substring(i2.raw.length), i2.tokens = this.inlineTokens(i2.text, [], n3, r3), t4.push(i2);
          else if (i2 = this.tokenizer.em(e3, o2, a2))
            e3 = e3.substring(i2.raw.length), i2.tokens = this.inlineTokens(i2.text, [], n3, r3), t4.push(i2);
          else if (i2 = this.tokenizer.codespan(e3))
            e3 = e3.substring(i2.raw.length), t4.push(i2);
          else if (i2 = this.tokenizer.br(e3))
            e3 = e3.substring(i2.raw.length), t4.push(i2);
          else if (i2 = this.tokenizer.del(e3))
            e3 = e3.substring(i2.raw.length), i2.tokens = this.inlineTokens(i2.text, [], n3, r3), t4.push(i2);
          else if (i2 = this.tokenizer.autolink(e3, M))
            e3 = e3.substring(i2.raw.length), t4.push(i2);
          else if (n3 || !(i2 = this.tokenizer.url(e3, M))) {
            if (i2 = this.tokenizer.inlineText(e3, r3, F))
              e3 = e3.substring(i2.raw.length), a2 = i2.raw.slice(-1), l2 = true, t4.push(i2);
            else if (e3) {
              var u2 = "Infinite loop on byte: " + e3.charCodeAt(0);
              if (this.options.silent) {
                formatAppLog("error", "at uni_modules/mp-html/components/mp-html/markdown/marked.min.js:6", u2);
                break;
              }
              throw new Error(u2);
            }
          } else
            e3 = e3.substring(i2.raw.length), t4.push(i2);
        return t4;
      }, e2 = n2, t3 = [{ key: "rules", get: function() {
        return { block: L, inline: N };
      } }], (r2 = null) && i(e2.prototype, r2), t3 && i(e2, t3), n2;
    }(), X = t2.defaults, G = S, V = _, H = function() {
      function e2(e3) {
        this.options = e3 || X;
      }
      var t3 = e2.prototype;
      return t3.code = function(e3, t4, n2) {
        var r2 = (t4 || "").match(/\S*/)[0];
        return !this.options.highlight || (t4 = this.options.highlight(e3, r2)) != null && t4 !== e3 && (n2 = true, e3 = t4), r2 ? '<pre><code class="' + this.options.langPrefix + V(r2, true) + '">' + (n2 ? e3 : V(e3, true)) + "</code></pre>\n" : "<pre><code>" + (n2 ? e3 : V(e3, true)) + "</code></pre>\n";
      }, t3.blockquote = function(e3) {
        return "<blockquote>\n" + e3 + "</blockquote>\n";
      }, t3.html = function(e3) {
        return e3;
      }, t3.heading = function(e3, t4, n2, r2) {
        return this.options.headerIds ? "<h" + t4 + ' id="' + this.options.headerPrefix + r2.slug(n2) + '">' + e3 + "</h" + t4 + ">\n" : "<h" + t4 + ">" + e3 + "</h" + t4 + ">\n";
      }, t3.hr = function() {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
      }, t3.list = function(e3, t4, n2) {
        var r2 = t4 ? "ol" : "ul";
        return "<" + r2 + (t4 && n2 !== 1 ? ' start="' + n2 + '"' : "") + ">\n" + e3 + "</" + r2 + ">\n";
      }, t3.listitem = function(e3) {
        return "<li>" + e3 + "</li>\n";
      }, t3.checkbox = function(e3) {
        return "<input " + (e3 ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
      }, t3.paragraph = function(e3) {
        return "<p>" + e3 + "</p>\n";
      }, t3.table = function(e3, t4) {
        return "<table>\n<thead>\n" + e3 + "</thead>\n" + (t4 = t4 && "<tbody>" + t4 + "</tbody>") + "</table>\n";
      }, t3.tablerow = function(e3) {
        return "<tr>\n" + e3 + "</tr>\n";
      }, t3.tablecell = function(e3, t4) {
        var n2 = t4.header ? "th" : "td";
        return (t4.align ? "<" + n2 + ' align="' + t4.align + '">' : "<" + n2 + ">") + e3 + "</" + n2 + ">\n";
      }, t3.strong = function(e3) {
        return "<strong>" + e3 + "</strong>";
      }, t3.em = function(e3) {
        return "<em>" + e3 + "</em>";
      }, t3.codespan = function(e3) {
        return "<code>" + e3 + "</code>";
      }, t3.br = function() {
        return this.options.xhtml ? "<br/>" : "<br>";
      }, t3.del = function(e3) {
        return "<del>" + e3 + "</del>";
      }, t3.link = function(e3, t4, n2) {
        if ((e3 = G(this.options.sanitize, this.options.baseUrl, e3)) === null)
          return n2;
        e3 = '<a href="' + V(e3) + '"';
        return t4 && (e3 += ' title="' + t4 + '"'), e3 += ">" + n2 + "</a>";
      }, t3.image = function(e3, t4, n2) {
        if ((e3 = G(this.options.sanitize, this.options.baseUrl, e3)) === null)
          return n2;
        n2 = '<img src="' + e3 + '" alt="' + n2 + '"';
        return t4 && (n2 += ' title="' + t4 + '"'), n2 += this.options.xhtml ? "/>" : ">";
      }, t3.text = function(e3) {
        return e3;
      }, e2;
    }(), J = function() {
      function e2() {
      }
      var t3 = e2.prototype;
      return t3.strong = function(e3) {
        return e3;
      }, t3.em = function(e3) {
        return e3;
      }, t3.codespan = function(e3) {
        return e3;
      }, t3.del = function(e3) {
        return e3;
      }, t3.html = function(e3) {
        return e3;
      }, t3.text = function(e3) {
        return e3;
      }, t3.link = function(e3, t4, n2) {
        return "" + n2;
      }, t3.image = function(e3, t4, n2) {
        return "" + n2;
      }, t3.br = function() {
        return "";
      }, e2;
    }(), K = function() {
      function e2() {
        this.seen = {};
      }
      var t3 = e2.prototype;
      return t3.serialize = function(e3) {
        return e3.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
      }, t3.getNextSafeSlug = function(e3, t4) {
        var n2 = e3, r2 = 0;
        if (this.seen.hasOwnProperty(n2))
          for (r2 = this.seen[e3]; n2 = e3 + "-" + ++r2, this.seen.hasOwnProperty(n2); )
            ;
        return t4 || (this.seen[e3] = r2, this.seen[n2] = 0), n2;
      }, t3.slug = function(e3, t4) {
        t4 === void 0 && (t4 = {});
        var n2 = this.serialize(e3);
        return this.getNextSafeSlug(n2, t4.dryrun);
      }, e2;
    }(), Q = t2.defaults, Y = y, ee = function() {
      function n2(e3) {
        this.options = e3 || Q, this.options.renderer = this.options.renderer || new H(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new J(), this.slugger = new K();
      }
      n2.parse = function(e3, t3) {
        return new n2(t3).parse(e3);
      }, n2.parseInline = function(e3, t3) {
        return new n2(t3).parseInline(e3);
      };
      var e2 = n2.prototype;
      return e2.parse = function(e3, t3) {
        t3 === void 0 && (t3 = true);
        for (var n3, r2, i2, s2, l2, a2, o2, c2, u2, p2, h2, g2, f2, d2, k2, b2 = "", m2 = e3.length, x2 = 0; x2 < m2; x2++)
          switch ((c2 = e3[x2]).type) {
            case "space":
              continue;
            case "hr":
              b2 += this.renderer.hr();
              continue;
            case "heading":
              b2 += this.renderer.heading(this.parseInline(c2.tokens), c2.depth, Y(this.parseInline(c2.tokens, this.textRenderer)), this.slugger);
              continue;
            case "code":
              b2 += this.renderer.code(c2.text, c2.lang, c2.escaped);
              continue;
            case "table":
              for (a2 = u2 = "", i2 = c2.header.length, n3 = 0; n3 < i2; n3++)
                a2 += this.renderer.tablecell(this.parseInline(c2.tokens.header[n3]), { header: true, align: c2.align[n3] });
              for (u2 += this.renderer.tablerow(a2), o2 = "", i2 = c2.cells.length, n3 = 0; n3 < i2; n3++) {
                for (a2 = "", s2 = (l2 = c2.tokens.cells[n3]).length, r2 = 0; r2 < s2; r2++)
                  a2 += this.renderer.tablecell(this.parseInline(l2[r2]), { header: false, align: c2.align[r2] });
                o2 += this.renderer.tablerow(a2);
              }
              b2 += this.renderer.table(u2, o2);
              continue;
            case "blockquote":
              o2 = this.parse(c2.tokens), b2 += this.renderer.blockquote(o2);
              continue;
            case "list":
              for (u2 = c2.ordered, w2 = c2.start, p2 = c2.loose, i2 = c2.items.length, o2 = "", n3 = 0; n3 < i2; n3++)
                f2 = (g2 = c2.items[n3]).checked, d2 = g2.task, h2 = "", g2.task && (k2 = this.renderer.checkbox(f2), p2 ? 0 < g2.tokens.length && g2.tokens[0].type === "text" ? (g2.tokens[0].text = k2 + " " + g2.tokens[0].text, g2.tokens[0].tokens && 0 < g2.tokens[0].tokens.length && g2.tokens[0].tokens[0].type === "text" && (g2.tokens[0].tokens[0].text = k2 + " " + g2.tokens[0].tokens[0].text)) : g2.tokens.unshift({ type: "text", text: k2 }) : h2 += k2), h2 += this.parse(g2.tokens, p2), o2 += this.renderer.listitem(h2, d2, f2);
              b2 += this.renderer.list(o2, u2, w2);
              continue;
            case "html":
              b2 += this.renderer.html(c2.text);
              continue;
            case "paragraph":
              b2 += this.renderer.paragraph(this.parseInline(c2.tokens));
              continue;
            case "text":
              for (o2 = c2.tokens ? this.parseInline(c2.tokens) : c2.text; x2 + 1 < m2 && e3[x2 + 1].type === "text"; )
                o2 += "\n" + ((c2 = e3[++x2]).tokens ? this.parseInline(c2.tokens) : c2.text);
              b2 += t3 ? this.renderer.paragraph(o2) : o2;
              continue;
            default:
              var w2 = 'Token with "' + c2.type + '" type was not found.';
              if (this.options.silent)
                return void formatAppLog("error", "at uni_modules/mp-html/components/mp-html/markdown/marked.min.js:6", w2);
              throw new Error(w2);
          }
        return b2;
      }, e2.parseInline = function(e3, t3) {
        t3 = t3 || this.renderer;
        for (var n3, r2 = "", i2 = e3.length, s2 = 0; s2 < i2; s2++)
          switch ((n3 = e3[s2]).type) {
            case "escape":
              r2 += t3.text(n3.text);
              break;
            case "html":
              r2 += t3.html(n3.text);
              break;
            case "link":
              r2 += t3.link(n3.href, n3.title, this.parseInline(n3.tokens, t3));
              break;
            case "image":
              r2 += t3.image(n3.href, n3.title, n3.text);
              break;
            case "strong":
              r2 += t3.strong(this.parseInline(n3.tokens, t3));
              break;
            case "em":
              r2 += t3.em(this.parseInline(n3.tokens, t3));
              break;
            case "codespan":
              r2 += t3.codespan(n3.text);
              break;
            case "br":
              r2 += t3.br();
              break;
            case "del":
              r2 += t3.del(this.parseInline(n3.tokens, t3));
              break;
            case "text":
              r2 += t3.text(n3.text);
              break;
            default:
              var l2 = 'Token with "' + n3.type + '" type was not found.';
              if (this.options.silent)
                return void formatAppLog("error", "at uni_modules/mp-html/components/mp-html/markdown/marked.min.js:6", l2);
              throw new Error(l2);
          }
        return r2;
      }, n2;
    }(), te = A, ne = I, re = _, _ = t2.getDefaults, ie = t2.changeDefaults, t2 = t2.defaults;
    function se(e2, n2, r2) {
      if (e2 == null)
        throw new Error("marked(): input parameter is undefined or null");
      if (typeof e2 != "string")
        throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e2) + ", string expected");
      if (typeof n2 == "function" && (r2 = n2, n2 = null), n2 = te({}, se.defaults, n2 || {}), ne(n2), r2) {
        var i2, s2 = n2.highlight;
        try {
          i2 = W.lex(e2, n2);
        } catch (e3) {
          return r2(e3);
        }
        var l2 = function(t4) {
          var e3;
          if (!t4)
            try {
              e3 = ee.parse(i2, n2);
            } catch (e4) {
              t4 = e4;
            }
          return n2.highlight = s2, t4 ? r2(t4) : r2(null, e3);
        };
        if (!s2 || s2.length < 3)
          return l2();
        if (delete n2.highlight, !i2.length)
          return l2();
        var a2 = 0;
        return se.walkTokens(i2, function(n3) {
          n3.type === "code" && (a2++, setTimeout(function() {
            s2(n3.text, n3.lang, function(e3, t4) {
              return e3 ? l2(e3) : (t4 != null && t4 !== n3.text && (n3.text = t4, n3.escaped = true), void (--a2 === 0 && l2()));
            });
          }, 0));
        }), void (a2 === 0 && l2());
      }
      try {
        var t3 = W.lex(e2, n2);
        return n2.walkTokens && se.walkTokens(t3, n2.walkTokens), ee.parse(t3, n2);
      } catch (e3) {
        if (e3.message += "\nPlease report this to https://github.com/markedjs/marked.", n2.silent)
          return "<p>An error occurred:</p><pre>" + re(e3.message + "", true) + "</pre>";
        throw e3;
      }
    }
    return se.options = se.setOptions = function(e2) {
      return te(se.defaults, e2), ie(se.defaults), se;
    }, se.getDefaults = _, se.defaults = t2, se.use = function(a2) {
      var t3, n2 = te({}, a2);
      a2.renderer && function() {
        var e2, l2 = se.defaults.renderer || new H();
        for (e2 in a2.renderer)
          !function(i2) {
            var s2 = l2[i2];
            l2[i2] = function() {
              for (var e3 = arguments.length, t4 = new Array(e3), n3 = 0; n3 < e3; n3++)
                t4[n3] = arguments[n3];
              var r2 = a2.renderer[i2].apply(l2, t4);
              return r2 === false && (r2 = s2.apply(l2, t4)), r2;
            };
          }(e2);
        n2.renderer = l2;
      }(), a2.tokenizer && function() {
        var e2, l2 = se.defaults.tokenizer || new D();
        for (e2 in a2.tokenizer)
          !function(i2) {
            var s2 = l2[i2];
            l2[i2] = function() {
              for (var e3 = arguments.length, t4 = new Array(e3), n3 = 0; n3 < e3; n3++)
                t4[n3] = arguments[n3];
              var r2 = a2.tokenizer[i2].apply(l2, t4);
              return r2 === false && (r2 = s2.apply(l2, t4)), r2;
            };
          }(e2);
        n2.tokenizer = l2;
      }(), a2.walkTokens && (t3 = se.defaults.walkTokens, n2.walkTokens = function(e2) {
        a2.walkTokens(e2), t3 && t3(e2);
      }), se.setOptions(n2);
    }, se.walkTokens = function(e2, t3) {
      for (var n2, r2 = p(e2); !(n2 = r2()).done; ) {
        var i2 = n2.value;
        switch (t3(i2), i2.type) {
          case "table":
            for (var s2 = p(i2.tokens.header); !(l2 = s2()).done; ) {
              var l2 = l2.value;
              se.walkTokens(l2, t3);
            }
            for (var a2, o2 = p(i2.tokens.cells); !(a2 = o2()).done; )
              for (var c2 = p(a2.value); !(u2 = c2()).done; ) {
                var u2 = u2.value;
                se.walkTokens(u2, t3);
              }
            break;
          case "list":
            se.walkTokens(i2.items, t3);
            break;
          default:
            i2.tokens && se.walkTokens(i2.tokens, t3);
        }
      }
    }, se.parseInline = function(e2, t3) {
      if (e2 == null)
        throw new Error("marked.parseInline(): input parameter is undefined or null");
      if (typeof e2 != "string")
        throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e2) + ", string expected");
      t3 = te({}, se.defaults, t3 || {}), ne(t3);
      try {
        var n2 = W.lexInline(e2, t3);
        return t3.walkTokens && se.walkTokens(n2, t3.walkTokens), ee.parseInline(n2, t3);
      } catch (e3) {
        if (e3.message += "\nPlease report this to https://github.com/markedjs/marked.", t3.silent)
          return "<p>An error occurred:</p><pre>" + re(e3.message + "", true) + "</pre>";
        throw e3;
      }
    }, se.Parser = ee, se.parser = ee.parse, se.Renderer = H, se.TextRenderer = J, se.Lexer = W, se.lexer = W.lex, se.Tokenizer = D, se.Slugger = K, se.parse = se;
  }
  var marked = t();
  let index = 0;
  function Markdown(vm) {
    this.vm = vm;
    vm._ids = {};
  }
  Markdown.prototype.onUpdate = function(content) {
    if (this.vm.markdown) {
      return marked(content);
    }
  };
  Markdown.prototype.onParse = function(node2, vm) {
    if (vm.options.markdown) {
      if (vm.options.useAnchor && node2.attrs && /[\u4e00-\u9fa5]/.test(node2.attrs.id)) {
        const id = "t" + index++;
        this.vm._ids[node2.attrs.id] = id;
        node2.attrs.id = id;
      }
      if (node2.name === "p" || node2.name === "table" || node2.name === "tr" || node2.name === "th" || node2.name === "td" || node2.name === "blockquote" || node2.name === "pre" || node2.name === "code") {
        node2.attrs.class = `md-${node2.name} ${node2.attrs.class || ""}`;
      }
    }
  };
  const reg = /\[(\S+?)\]/g;
  const data = {
    \u7B11\u8138: "\u{1F604}",
    \u751F\u75C5: "\u{1F637}",
    \u7834\u6D95\u4E3A\u7B11: "\u{1F602}",
    \u5410\u820C: "\u{1F61D}",
    \u8138\u7EA2: "\u{1F633}",
    \u6050\u60E7: "\u{1F631}",
    \u5931\u671B: "\u{1F614}",
    \u65E0\u8BED: "\u{1F612}",
    \u7728\u773C: "\u{1F609}",
    \u9177: "\u{1F60E}",
    \u54ED: "\u{1F62D}",
    \u75F4\u8FF7: "\u{1F60D}",
    \u543B: "\u{1F618}",
    \u601D\u8003: "\u{1F914}",
    \u56F0\u60D1: "\u{1F615}",
    \u98A0\u5012: "\u{1F643}",
    \u94B1: "\u{1F911}",
    \u60CA\u8BB6: "\u{1F632}",
    \u767D\u773C: "\u{1F644}",
    \u53F9\u6C14: "\u{1F624}",
    \u7761\u89C9: "\u{1F634}",
    \u4E66\u5446\u5B50: "\u{1F913}",
    \u6124\u6012: "\u{1F621}",
    \u9762\u65E0\u8868\u60C5: "\u{1F611}",
    \u5F20\u5634: "\u{1F62E}",
    \u91CF\u4F53\u6E29: "\u{1F912}",
    \u5455\u5410: "\u{1F92E}",
    \u5149\u73AF: "\u{1F607}",
    \u5E7D\u7075: "\u{1F47B}",
    \u5916\u661F\u4EBA: "\u{1F47D}",
    \u673A\u5668\u4EBA: "\u{1F916}",
    \u6342\u773C\u955C: "\u{1F648}",
    \u6342\u8033\u6735: "\u{1F649}",
    \u6342\u5634: "\u{1F64A}",
    \u5A74\u513F: "\u{1F476}",
    \u7537\u5B69: "\u{1F466}",
    \u5973\u5B69: "\u{1F467}",
    \u7537\u4EBA: "\u{1F468}",
    \u5973\u4EBA: "\u{1F469}",
    \u8001\u4EBA: "\u{1F474}",
    \u8001\u5987\u4EBA: "\u{1F475}",
    \u8B66\u5BDF: "\u{1F46E}",
    \u738B\u5B50: "\u{1F934}",
    \u516C\u4E3B: "\u{1F934}",
    \u4E3E\u624B: "\u{1F64B}",
    \u8DD1\u6B65: "\u{1F3C3}",
    \u5BB6\u5EAD: "\u{1F46A}",
    \u773C\u775B: "\u{1F440}",
    \u9F3B\u5B50: "\u{1F443}",
    \u8033\u6735: "\u{1F442}",
    \u820C\u5934: "\u{1F445}",
    \u5634: "\u{1F444}",
    \u5FC3: "\u2764\uFE0F",
    \u5FC3\u788E: "\u{1F494}",
    \u96EA\u4EBA: "\u2603\uFE0F",
    \u60C5\u4E66: "\u{1F48C}",
    \u5927\u4FBF: "\u{1F4A9}",
    \u95F9\u949F: "\u23F0",
    \u773C\u955C: "\u{1F453}",
    \u96E8\u4F1E: "\u2602\uFE0F",
    \u97F3\u4E50: "\u{1F3B5}",
    \u8BDD\u7B52: "\u{1F3A4}",
    \u6E38\u620F\u673A: "\u{1F3AE}",
    \u5587\u53ED: "\u{1F4E2}",
    \u8033\u673A: "\u{1F3A7}",
    \u793C\u7269: "\u{1F381}",
    \u7535\u8BDD: "\u{1F4DE}",
    \u7535\u8111: "\u{1F4BB}",
    \u6253\u5370\u673A: "\u{1F5A8}\uFE0F",
    \u624B\u7535\u7B52: "\u{1F526}",
    \u706F\u6CE1: "\u{1F4A1}",
    \u4E66\u672C: "\u{1F4D6}",
    \u4FE1\u5C01: "\u2709\uFE0F",
    \u836F\u4E38: "\u{1F48A}",
    \u53E3\u7EA2: "\u{1F484}",
    \u624B\u673A: "\u{1F4F1}",
    \u76F8\u673A: "\u{1F4F7}",
    \u7535\u89C6: "\u{1F4FA}",
    \u4E2D: "\u{1F004}",
    \u5783\u573E\u6876: "\u{1F6AE}",
    \u5395\u6240: "\u{1F6BE}",
    \u611F\u53F9\u53F7: "\u2757",
    \u7981: "\u{1F232}",
    \u53EF: "\u{1F251}",
    \u5F69\u8679: "\u{1F308}",
    \u65CB\u98CE: "\u{1F300}",
    \u96F7\u7535: "\u26A1",
    \u96EA\u82B1: "\u2744\uFE0F",
    \u661F\u661F: "\u2B50",
    \u6C34\u6EF4: "\u{1F4A7}",
    \u73AB\u7470: "\u{1F339}",
    \u52A0\u6CB9: "\u{1F4AA}",
    \u5DE6: "\u{1F448}",
    \u53F3: "\u{1F449}",
    \u4E0A: "\u{1F446}",
    \u4E0B: "\u{1F447}",
    \u624B\u638C: "\u{1F590}\uFE0F",
    \u597D\u7684: "\u{1F44C}",
    \u597D: "\u{1F44D}",
    \u5DEE: "\u{1F44E}",
    \u80DC\u5229: "\u270C",
    \u62F3\u5934: "\u{1F44A}",
    \u6325\u624B: "\u{1F44B}",
    \u9F13\u638C: "\u{1F44F}",
    \u7334\u5B50: "\u{1F412}",
    \u72D7: "\u{1F436}",
    \u72FC: "\u{1F43A}",
    \u732B: "\u{1F431}",
    \u8001\u864E: "\u{1F42F}",
    \u9A6C: "\u{1F40E}",
    \u72EC\u89D2\u517D: "\u{1F984}",
    \u6591\u9A6C: "\u{1F993}",
    \u9E7F: "\u{1F98C}",
    \u725B: "\u{1F42E}",
    \u732A: "\u{1F437}",
    \u7F8A: "\u{1F40F}",
    \u957F\u9888\u9E7F: "\u{1F992}",
    \u5927\u8C61: "\u{1F418}",
    \u8001\u9F20: "\u{1F42D}",
    \u8759\u8760: "\u{1F987}",
    \u523A\u732C: "\u{1F994}",
    \u718A\u732B: "\u{1F43C}",
    \u9E3D\u5B50: "\u{1F54A}\uFE0F",
    \u9E2D\u5B50: "\u{1F986}",
    \u5154\u5B50: "\u{1F407}",
    \u8001\u9E70: "\u{1F985}",
    \u9752\u86D9: "\u{1F438}",
    \u86C7: "\u{1F40D}",
    \u9F99: "\u{1F409}",
    \u9CB8\u9C7C: "\u{1F433}",
    \u6D77\u8C5A: "\u{1F42C}",
    \u8DB3\u7403: "\u26BD",
    \u68D2\u7403: "\u26BE",
    \u7BEE\u7403: "\u{1F3C0}",
    \u6392\u7403: "\u{1F3D0}",
    \u6A44\u6984\u7403: "\u{1F3C9}",
    \u7F51\u7403: "\u{1F3BE}",
    \u9AB0\u5B50: "\u{1F3B2}",
    \u9E21\u817F: "\u{1F357}",
    \u86CB\u7CD5: "\u{1F382}",
    \u5564\u9152: "\u{1F37A}",
    \u997A\u5B50: "\u{1F95F}",
    \u6C49\u5821: "\u{1F354}",
    \u85AF\u6761: "\u{1F35F}",
    \u610F\u5927\u5229\u9762: "\u{1F35D}",
    \u5E72\u676F: "\u{1F942}",
    \u7B77\u5B50: "\u{1F962}",
    \u7CD6\u679C: "\u{1F36C}",
    \u5976\u74F6: "\u{1F37C}",
    \u7206\u7C73\u82B1: "\u{1F37F}",
    \u90AE\u5C40: "\u{1F3E4}",
    \u533B\u9662: "\u{1F3E5}",
    \u94F6\u884C: "\u{1F3E6}",
    \u9152\u5E97: "\u{1F3E8}",
    \u5B66\u6821: "\u{1F3EB}",
    \u57CE\u5821: "\u{1F3F0}",
    \u706B\u8F66: "\u{1F682}",
    \u9AD8\u94C1: "\u{1F684}",
    \u5730\u94C1: "\u{1F687}",
    \u516C\u4EA4: "\u{1F68C}",
    \u6551\u62A4\u8F66: "\u{1F691}",
    \u6D88\u9632\u8F66: "\u{1F692}",
    \u8B66\u8F66: "\u{1F693}",
    \u51FA\u79DF\u8F66: "\u{1F695}",
    \u6C7D\u8F66: "\u{1F697}",
    \u8D27\u8F66: "\u{1F69B}",
    \u81EA\u884C\u8F66: "\u{1F6B2}",
    \u6469\u6258: "\u{1F6F5}",
    \u7EA2\u7EFF\u706F: "\u{1F6A5}",
    \u5E06\u8239: "\u26F5",
    \u6E38\u8F6E: "\u{1F6F3}\uFE0F",
    \u8F6E\u8239: "\u26F4\uFE0F",
    \u98DE\u673A: "\u2708\uFE0F",
    \u76F4\u5347\u673A: "\u{1F681}",
    \u7F06\u8F66: "\u{1F6A0}",
    \u8B66\u544A: "\u26A0\uFE0F",
    \u7981\u6B62: "\u26D4"
  };
  function Emoji() {
  }
  Emoji.prototype.onUpdate = function(content) {
    return content.replace(reg, ($, $1) => {
      if (data[$1])
        return data[$1];
      return $;
    });
  };
  Emoji.prototype.onGetContent = function(content) {
    for (const item in data) {
      content = content.replace(new RegExp(data[item], "g"), "[" + item + "]");
    }
    return content;
  };
  var _self = typeof window != "undefined" ? window : typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope ? self : {}, Prism = function(e) {
    var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, t2 = 0, r = {}, a = { manual: e.Prism && e.Prism.manual, disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler, util: { encode: function e2(n2) {
      return n2 instanceof i ? new i(n2.type, e2(n2.content), n2.alias) : Array.isArray(n2) ? n2.map(e2) : n2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(e2) {
      return Object.prototype.toString.call(e2).slice(8, -1);
    }, objId: function(e2) {
      return e2.__id || Object.defineProperty(e2, "__id", { value: ++t2 }), e2.__id;
    }, clone: function e2(n2, t3) {
      var r2, i2;
      switch (t3 = t3 || {}, a.util.type(n2)) {
        case "Object":
          if (i2 = a.util.objId(n2), t3[i2])
            return t3[i2];
          for (var l2 in r2 = {}, t3[i2] = r2, n2)
            n2.hasOwnProperty(l2) && (r2[l2] = e2(n2[l2], t3));
          return r2;
        case "Array":
          return i2 = a.util.objId(n2), t3[i2] ? t3[i2] : (r2 = [], t3[i2] = r2, n2.forEach(function(n3, a2) {
            r2[a2] = e2(n3, t3);
          }), r2);
        default:
          return n2;
      }
    }, getLanguage: function(e2) {
      for (; e2; ) {
        var t3 = n.exec(e2.className);
        if (t3)
          return t3[1].toLowerCase();
        e2 = e2.parentElement;
      }
      return "none";
    }, setLanguage: function(e2, t3) {
      e2.className = e2.className.replace(RegExp(n, "gi"), ""), e2.classList.add("language-" + t3);
    }, currentScript: function() {
      if (typeof document == "undefined")
        return null;
      if ("currentScript" in document)
        return document.currentScript;
      try {
        throw new Error();
      } catch (r2) {
        var e2 = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r2.stack) || [])[1];
        if (e2) {
          var n2 = document.getElementsByTagName("script");
          for (var t3 in n2)
            if (n2[t3].src == e2)
              return n2[t3];
        }
        return null;
      }
    }, isActive: function(e2, n2, t3) {
      for (var r2 = "no-" + n2; e2; ) {
        var a2 = e2.classList;
        if (a2.contains(n2))
          return true;
        if (a2.contains(r2))
          return false;
        e2 = e2.parentElement;
      }
      return !!t3;
    } }, languages: { plain: r, plaintext: r, text: r, txt: r, extend: function(e2, n2) {
      var t3 = a.util.clone(a.languages[e2]);
      for (var r2 in n2)
        t3[r2] = n2[r2];
      return t3;
    }, insertBefore: function(e2, n2, t3, r2) {
      var i2 = (r2 = r2 || a.languages)[e2], l2 = {};
      for (var o2 in i2)
        if (i2.hasOwnProperty(o2)) {
          if (o2 == n2)
            for (var s2 in t3)
              t3.hasOwnProperty(s2) && (l2[s2] = t3[s2]);
          t3.hasOwnProperty(o2) || (l2[o2] = i2[o2]);
        }
      var u2 = r2[e2];
      return r2[e2] = l2, a.languages.DFS(a.languages, function(n3, t4) {
        t4 === u2 && n3 != e2 && (this[n3] = l2);
      }), l2;
    }, DFS: function e2(n2, t3, r2, i2) {
      i2 = i2 || {};
      var l2 = a.util.objId;
      for (var o2 in n2)
        if (n2.hasOwnProperty(o2)) {
          t3.call(n2, o2, n2[o2], r2 || o2);
          var s2 = n2[o2], u2 = a.util.type(s2);
          u2 !== "Object" || i2[l2(s2)] ? u2 !== "Array" || i2[l2(s2)] || (i2[l2(s2)] = true, e2(s2, t3, o2, i2)) : (i2[l2(s2)] = true, e2(s2, t3, null, i2));
        }
    } }, plugins: {}, highlightAll: function(e2, n2) {
      a.highlightAllUnder(document, e2, n2);
    }, highlightAllUnder: function(e2, n2, t3) {
      var r2 = { callback: t3, container: e2, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
      a.hooks.run("before-highlightall", r2), r2.elements = Array.prototype.slice.apply(r2.container.querySelectorAll(r2.selector)), a.hooks.run("before-all-elements-highlight", r2);
      for (var i2, l2 = 0; i2 = r2.elements[l2++]; )
        a.highlightElement(i2, n2 === true, r2.callback);
    }, highlightElement: function(n2, t3, r2) {
      var i2 = a.util.getLanguage(n2), l2 = a.languages[i2];
      a.util.setLanguage(n2, i2);
      var o2 = n2.parentElement;
      o2 && o2.nodeName.toLowerCase() === "pre" && a.util.setLanguage(o2, i2);
      var s2 = { element: n2, language: i2, grammar: l2, code: n2.textContent };
      function u2(e2) {
        s2.highlightedCode = e2, a.hooks.run("before-insert", s2), s2.element.innerHTML = s2.highlightedCode, a.hooks.run("after-highlight", s2), a.hooks.run("complete", s2), r2 && r2.call(s2.element);
      }
      if (a.hooks.run("before-sanity-check", s2), (o2 = s2.element.parentElement) && o2.nodeName.toLowerCase() === "pre" && !o2.hasAttribute("tabindex") && o2.setAttribute("tabindex", "0"), !s2.code)
        return a.hooks.run("complete", s2), void (r2 && r2.call(s2.element));
      if (a.hooks.run("before-highlight", s2), s2.grammar)
        if (t3 && e.Worker) {
          var c2 = new Worker(a.filename);
          c2.onmessage = function(e2) {
            u2(e2.data);
          }, c2.postMessage(JSON.stringify({ language: s2.language, code: s2.code, immediateClose: true }));
        } else
          u2(a.highlight(s2.code, s2.grammar, s2.language));
      else
        u2(a.util.encode(s2.code));
    }, highlight: function(e2, n2, t3) {
      var r2 = { code: e2, grammar: n2, language: t3 };
      if (a.hooks.run("before-tokenize", r2), !r2.grammar)
        throw new Error('The language "' + r2.language + '" has no grammar.');
      return r2.tokens = a.tokenize(r2.code, r2.grammar), a.hooks.run("after-tokenize", r2), i.stringify(a.util.encode(r2.tokens), r2.language);
    }, tokenize: function(e2, n2) {
      var t3 = n2.rest;
      if (t3) {
        for (var r2 in t3)
          n2[r2] = t3[r2];
        delete n2.rest;
      }
      var a2 = new s();
      return u(a2, a2.head, e2), o(e2, a2, n2, a2.head, 0), function(e3) {
        for (var n3 = [], t4 = e3.head.next; t4 !== e3.tail; )
          n3.push(t4.value), t4 = t4.next;
        return n3;
      }(a2);
    }, hooks: { all: {}, add: function(e2, n2) {
      var t3 = a.hooks.all;
      t3[e2] = t3[e2] || [], t3[e2].push(n2);
    }, run: function(e2, n2) {
      var t3 = a.hooks.all[e2];
      if (t3 && t3.length)
        for (var r2, i2 = 0; r2 = t3[i2++]; )
          r2(n2);
    } }, Token: i };
    function i(e2, n2, t3, r2) {
      this.type = e2, this.content = n2, this.alias = t3, this.length = 0 | (r2 || "").length;
    }
    function l(e2, n2, t3, r2) {
      e2.lastIndex = n2;
      var a2 = e2.exec(t3);
      if (a2 && r2 && a2[1]) {
        var i2 = a2[1].length;
        a2.index += i2, a2[0] = a2[0].slice(i2);
      }
      return a2;
    }
    function o(e2, n2, t3, r2, s2, g2) {
      for (var f2 in t3)
        if (t3.hasOwnProperty(f2) && t3[f2]) {
          var h2 = t3[f2];
          h2 = Array.isArray(h2) ? h2 : [h2];
          for (var d = 0; d < h2.length; ++d) {
            if (g2 && g2.cause == f2 + "," + d)
              return;
            var v = h2[d], p = v.inside, m = !!v.lookbehind, y = !!v.greedy, k = v.alias;
            if (y && !v.pattern.global) {
              var x = v.pattern.toString().match(/[imsuy]*$/)[0];
              v.pattern = RegExp(v.pattern.source, x + "g");
            }
            for (var b = v.pattern || v, w = r2.next, A = s2; w !== n2.tail && !(g2 && A >= g2.reach); A += w.value.length, w = w.next) {
              var E = w.value;
              if (n2.length > e2.length)
                return;
              if (!(E instanceof i)) {
                var P, L = 1;
                if (y) {
                  if (!(P = l(b, A, e2, m)) || P.index >= e2.length)
                    break;
                  var S = P.index, O = P.index + P[0].length, j = A;
                  for (j += w.value.length; S >= j; )
                    j += (w = w.next).value.length;
                  if (A = j -= w.value.length, w.value instanceof i)
                    continue;
                  for (var C = w; C !== n2.tail && (j < O || typeof C.value == "string"); C = C.next)
                    L++, j += C.value.length;
                  L--, E = e2.slice(A, j), P.index -= A;
                } else if (!(P = l(b, 0, E, m)))
                  continue;
                S = P.index;
                var N = P[0], _ = E.slice(0, S), M = E.slice(S + N.length), W = A + E.length;
                g2 && W > g2.reach && (g2.reach = W);
                var z = w.prev;
                if (_ && (z = u(n2, z, _), A += _.length), c(n2, z, L), w = u(n2, z, new i(f2, p ? a.tokenize(N, p) : N, k, N)), M && u(n2, w, M), L > 1) {
                  var I = { cause: f2 + "," + d, reach: W };
                  o(e2, n2, t3, w.prev, A, I), g2 && I.reach > g2.reach && (g2.reach = I.reach);
                }
              }
            }
          }
        }
    }
    function s() {
      var e2 = { value: null, prev: null, next: null }, n2 = { value: null, prev: e2, next: null };
      e2.next = n2, this.head = e2, this.tail = n2, this.length = 0;
    }
    function u(e2, n2, t3) {
      var r2 = n2.next, a2 = { value: t3, prev: n2, next: r2 };
      return n2.next = a2, r2.prev = a2, e2.length++, a2;
    }
    function c(e2, n2, t3) {
      for (var r2 = n2.next, a2 = 0; a2 < t3 && r2 !== e2.tail; a2++)
        r2 = r2.next;
      n2.next = r2, r2.prev = n2, e2.length -= a2;
    }
    if (e.Prism = a, i.stringify = function e2(n2, t3) {
      if (typeof n2 == "string")
        return n2;
      if (Array.isArray(n2)) {
        var r2 = "";
        return n2.forEach(function(n3) {
          r2 += e2(n3, t3);
        }), r2;
      }
      var i2 = { type: n2.type, content: e2(n2.content, t3), tag: "span", classes: ["token", n2.type], attributes: {}, language: t3 }, l2 = n2.alias;
      l2 && (Array.isArray(l2) ? Array.prototype.push.apply(i2.classes, l2) : i2.classes.push(l2)), a.hooks.run("wrap", i2);
      var o2 = "";
      for (var s2 in i2.attributes)
        o2 += " " + s2 + '="' + (i2.attributes[s2] || "").replace(/"/g, "&quot;") + '"';
      return "<" + i2.tag + ' class="' + i2.classes.join(" ") + '"' + o2 + ">" + i2.content + "</" + i2.tag + ">";
    }, !e.document)
      return e.addEventListener ? (a.disableWorkerMessageHandler || e.addEventListener("message", function(n2) {
        var t3 = JSON.parse(n2.data), r2 = t3.language, i2 = t3.code, l2 = t3.immediateClose;
        e.postMessage(a.highlight(i2, a.languages[r2], r2)), l2 && e.close();
      }, false), a) : a;
    var g = a.util.currentScript();
    function f() {
      a.manual || a.highlightAll();
    }
    if (g && (a.filename = g.src, g.hasAttribute("data-manual") && (a.manual = true)), !a.manual) {
      var h = document.readyState;
      h === "loading" || h === "interactive" && g && g.defer ? document.addEventListener("DOMContentLoaded", f) : window.requestAnimationFrame ? window.requestAnimationFrame(f) : window.setTimeout(f, 16);
    }
    return a;
  }(_self);
  typeof global != "undefined" && (global.Prism = Prism);
  Prism.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: true }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: true }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: true, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: true, greedy: true, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: true }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: true }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: true, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, { pattern: /^(\s*)["']|["']$/, lookbehind: true }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function(a) {
    a.type === "entity" && (a.attributes.title = a.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function(a, e) {
    var s = {};
    s["language-" + e] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: true, inside: Prism.languages[e] }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var t2 = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } };
    t2["language-" + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] };
    var n = {};
    n[a] = { pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function() {
      return a;
    }), "i"), lookbehind: true, greedy: true, inside: t2 }, Prism.languages.insertBefore("markup", "cdata", n);
  } }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", { value: function(a, e) {
    Prism.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(`(^|["'\\s])(?:` + a + `)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`, "i"), lookbehind: true, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: true, alias: [e, "language-" + e], inside: Prism.languages[e] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
  } }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
  !function(s) {
    var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    s.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|` + e.source + ")*?(?:;|(?=\\s*\\{))"), inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: true, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: true } } }, url: { pattern: RegExp("\\burl\\((?:" + e.source + `|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`, "i"), greedy: true, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + e.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + e.source + ")*(?=\\s*\\{)"), lookbehind: true }, string: { pattern: e, greedy: true }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: true }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: true }, punctuation: /[(){};:,]/ }, s.languages.css.atrule.inside.rest = s.languages.css;
    var t2 = s.languages.markup;
    t2 && (t2.tag.addInlined("style", "css"), t2.tag.addAttribute("style", "css"));
  }(Prism);
  Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true, greedy: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ };
  Prism.languages.javascript = Prism.languages.extend("clike", { "class-name": [Prism.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: true }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: true }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"), lookbehind: true }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`), lookbehind: true, greedy: true, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: true, alias: "language-regex", inside: Prism.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: true, inside: Prism.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), Prism.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: true, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: true, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: true, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: true, greedy: true, alias: "property" } }), Prism.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: true, alias: "property" } }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), Prism.languages.js = Prism.languages.javascript;
  !function(e) {
    var n = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, t2 = "(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*", s = { pattern: RegExp("(^|[^\\w.])" + t2 + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"), lookbehind: true, inside: { namespace: { pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/, inside: { punctuation: /\./ } }, punctuation: /\./ } };
    e.languages.java = e.languages.extend("clike", { string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/, lookbehind: true, greedy: true }, "class-name": [s, { pattern: RegExp("(^|[^\\w.])" + t2 + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)"), lookbehind: true, inside: s.inside }, { pattern: RegExp("(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)" + t2 + "[A-Z]\\w*\\b"), lookbehind: true, inside: s.inside }], keyword: n, function: [e.languages.clike.function, { pattern: /(::\s*)[a-z_]\w*/, lookbehind: true }], number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i, operator: { pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m, lookbehind: true } }), e.languages.insertBefore("java", "string", { "triple-quoted-string": { pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/, greedy: true, alias: "string" }, char: { pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/, greedy: true } }), e.languages.insertBefore("java", "class-name", { annotation: { pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/, lookbehind: true, alias: "punctuation" }, generics: { pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/, inside: { "class-name": s, keyword: n, punctuation: /[<>(),.:]/, operator: /[?&|]/ } }, import: [{ pattern: RegExp("(\\bimport\\s+)" + t2 + "(?:[A-Z]\\w*|\\*)(?=\\s*;)"), lookbehind: true, inside: { namespace: s.inside.namespace, punctuation: /\./, operator: /\*/, "class-name": /\w+/ } }, { pattern: RegExp("(\\bimport\\s+static\\s+)" + t2 + "(?:\\w+|\\*)(?=\\s*;)"), lookbehind: true, alias: "static", inside: { namespace: s.inside.namespace, static: /\b\w+$/, punctuation: /\./, operator: /\*/, "class-name": /\w+/ } }], namespace: { pattern: RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g, function() {
      return n.source;
    })), lookbehind: true, inside: { punctuation: /\./ } } });
  }(Prism);
  !function(e) {
    function n(e2, n2) {
      return "___" + e2.toUpperCase() + n2 + "___";
    }
    Object.defineProperties(e.languages["markup-templating"] = {}, { buildPlaceholders: { value: function(t2, a, r, o) {
      if (t2.language === a) {
        var c = t2.tokenStack = [];
        t2.code = t2.code.replace(r, function(e2) {
          if (typeof o == "function" && !o(e2))
            return e2;
          for (var r2, i = c.length; t2.code.indexOf(r2 = n(a, i)) !== -1; )
            ++i;
          return c[i] = e2, r2;
        }), t2.grammar = e.languages.markup;
      }
    } }, tokenizePlaceholders: { value: function(t2, a) {
      if (t2.language === a && t2.tokenStack) {
        t2.grammar = e.languages[a];
        var r = 0, o = Object.keys(t2.tokenStack);
        !function c(i) {
          for (var u = 0; u < i.length && !(r >= o.length); u++) {
            var g = i[u];
            if (typeof g == "string" || g.content && typeof g.content == "string") {
              var l = o[r], s = t2.tokenStack[l], f = typeof g == "string" ? g : g.content, p = n(a, l), k = f.indexOf(p);
              if (k > -1) {
                ++r;
                var m = f.substring(0, k), d = new e.Token(a, e.tokenize(s, t2.grammar), "language-" + a, s), h = f.substring(k + p.length), v = [];
                m && v.push.apply(v, c([m])), v.push(d), h && v.push.apply(v, c([h])), typeof g == "string" ? i.splice.apply(i, [u, 1].concat(v)) : g.content = v;
              }
            } else
              g.content && c(g.content);
          }
          return i;
        }(t2.tokens);
      }
    } } });
  }(Prism);
  !function(e) {
    var a = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/, t2 = [{ pattern: /\b(?:false|true)\b/i, alias: "boolean" }, { pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i, greedy: true, lookbehind: true }, { pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i, greedy: true, lookbehind: true }, /\b(?:null)\b/i, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/], i = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i, n = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/, s = /[{}\[\](),:;]/;
    e.languages.php = { delimiter: { pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i, alias: "important" }, comment: a, variable: /\$+(?:\w+\b|(?=\{))/, package: { pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, lookbehind: true, inside: { punctuation: /\\/ } }, "class-name-definition": { pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i, lookbehind: true, alias: "class-name" }, "function-definition": { pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i, lookbehind: true, alias: "function" }, keyword: [{ pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i, alias: "type-casting", greedy: true, lookbehind: true }, { pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i, alias: "type-hint", greedy: true, lookbehind: true }, { pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i, alias: "return-type", greedy: true, lookbehind: true }, { pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i, alias: "type-declaration", greedy: true }, { pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i, alias: "type-declaration", greedy: true, lookbehind: true }, { pattern: /\b(?:parent|self|static)(?=\s*::)/i, alias: "static-context", greedy: true }, { pattern: /(\byield\s+)from\b/i, lookbehind: true }, /\bclass\b/i, { pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i, lookbehind: true }], "argument-name": { pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i, lookbehind: true }, "class-name": [{ pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i, greedy: true, lookbehind: true }, { pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i, greedy: true, lookbehind: true }, { pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i, greedy: true }, { pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i, alias: "class-name-fully-qualified", greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }, { pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i, alias: "class-name-fully-qualified", greedy: true, inside: { punctuation: /\\/ } }, { pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, alias: "class-name-fully-qualified", greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }, { pattern: /\b[a-z_]\w*(?=\s*\$)/i, alias: "type-declaration", greedy: true }, { pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i, alias: ["class-name-fully-qualified", "type-declaration"], greedy: true, inside: { punctuation: /\\/ } }, { pattern: /\b[a-z_]\w*(?=\s*::)/i, alias: "static-context", greedy: true }, { pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i, alias: ["class-name-fully-qualified", "static-context"], greedy: true, inside: { punctuation: /\\/ } }, { pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i, alias: "type-hint", greedy: true, lookbehind: true }, { pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i, alias: ["class-name-fully-qualified", "type-hint"], greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }, { pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i, alias: "return-type", greedy: true, lookbehind: true }, { pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, alias: ["class-name-fully-qualified", "return-type"], greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }], constant: t2, function: { pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i, lookbehind: true, inside: { punctuation: /\\/ } }, property: { pattern: /(->\s*)\w+/, lookbehind: true }, number: i, operator: n, punctuation: s };
    var l = { pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/, lookbehind: true, inside: e.languages.php }, r = [{ pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/, alias: "nowdoc-string", greedy: true, inside: { delimiter: { pattern: /^<<<'[^']+'|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<'?|[';]$/ } } } }, { pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i, alias: "heredoc-string", greedy: true, inside: { delimiter: { pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<"?|[";]$/ } }, interpolation: l } }, { pattern: /`(?:\\[\s\S]|[^\\`])*`/, alias: "backtick-quoted-string", greedy: true }, { pattern: /'(?:\\[\s\S]|[^\\'])*'/, alias: "single-quoted-string", greedy: true }, { pattern: /"(?:\\[\s\S]|[^\\"])*"/, alias: "double-quoted-string", greedy: true, inside: { interpolation: l } }];
    e.languages.insertBefore("php", "variable", { string: r, attribute: { pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im, greedy: true, inside: { "attribute-content": { pattern: /^(#\[)[\s\S]+(?=\]$)/, lookbehind: true, inside: { comment: a, string: r, "attribute-class-name": [{ pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i, alias: "class-name", greedy: true, lookbehind: true }, { pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i, alias: ["class-name", "class-name-fully-qualified"], greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }], constant: t2, number: i, operator: n, punctuation: s } }, delimiter: { pattern: /^#\[|\]$/, alias: "punctuation" } } } }), e.hooks.add("before-tokenize", function(a2) {
      /<\?/.test(a2.code) && e.languages["markup-templating"].buildPlaceholders(a2, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g);
    }), e.hooks.add("after-tokenize", function(a2) {
      e.languages["markup-templating"].tokenizePlaceholders(a2, "php");
    });
  }(Prism);
  Prism.languages.python = { comment: { pattern: /(^|[^\\])#.*/, lookbehind: true, greedy: true }, "string-interpolation": { pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i, greedy: true, inside: { interpolation: { pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/, lookbehind: true, inside: { "format-spec": { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: true }, "conversion-option": { pattern: /![sra](?=[:}]$)/, alias: "punctuation" }, rest: null } }, string: /[\s\S]+/ } }, "triple-quoted-string": { pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i, greedy: true, alias: "string" }, string: { pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: true }, function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: true }, "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: true }, decorator: { pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m, lookbehind: true, alias: ["annotation", "punctuation"], inside: { punctuation: /\./ } }, keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/, builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/, boolean: /\b(?:False|None|True)\b/, number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i, operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, punctuation: /[{}[\];(),.:]/ }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python;
  function Highlight(vm) {
    this.vm = vm;
  }
  Highlight.prototype.onParse = function(node2, vm) {
    if (node2.name === "pre") {
      let i;
      for (i = node2.children.length; i--; ) {
        if (node2.children[i].name === "code")
          break;
      }
      if (i === -1)
        return;
      const code = node2.children[i];
      let className = code.attrs.class || "";
      i = className.indexOf("language-");
      if (i === -1) {
        className = node2.attrs.class || "";
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
        if (node2.c) {
          node2.c = void 0;
        }
        if (Prism.languages[lang]) {
          code.children = new Parser(this.vm).parse("<pre>" + Prism.highlight(text, Prism.languages[lang], lang).replace(/token /g, "hl-") + "</pre>")[0].children;
        }
        node2.attrs.class = "hl-pre";
        code.attrs.class = "hl-code";
        {
          node2.children.push({
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
          node2.attrs.style += (node2.attrs.style || "") + ";user-select:none";
          node2.attrs["data-content"] = text;
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
          node2.children.push({
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
  function Search(vm) {
    vm.search = function(key, anchor, style = "background-color:yellow") {
      const res = [];
      const stack = [];
      (function traversal(nodes) {
        for (let i = 0; i < nodes.length; i++) {
          let node2 = nodes[i];
          if (node2.type === "text" && key) {
            const text = node2.text;
            const arr = text.split(key);
            if (arr.length > 1) {
              node2 = {
                name: "span",
                attrs: {},
                type: "node",
                c: anchor ? 1 : void 0,
                s: 1,
                children: []
              };
              vm.$set(nodes, i, node2);
              for (let j = 0; j < arr.length; j++) {
                if (arr[j]) {
                  node2.children.push({
                    type: "text",
                    text: arr[j]
                  });
                }
                if (j !== arr.length - 1) {
                  node2.children.push({
                    name: "span",
                    attrs: {
                      id: anchor ? "search" + (res.length + 1) : void 0,
                      style
                    },
                    children: [{
                      type: "text",
                      text: key instanceof RegExp ? key.exec(text)[0] : key
                    }]
                  });
                  res.push(node2.children[node2.children.length - 1].attrs);
                }
              }
              if (key instanceof RegExp) {
                key.exec(text);
              }
              if (anchor) {
                for (let l = stack.length; l--; ) {
                  if (stack[l].c) {
                    break;
                  } else {
                    vm.$set(stack[l], "c", 1);
                  }
                }
              }
            }
          } else if (node2.s) {
            let text = "";
            for (let k = 0; k < node2.children.length; k++) {
              const child = node2.children[k];
              if (child.text) {
                text += child.text;
              } else {
                text += child.children[0].text;
              }
            }
            vm.$set(nodes, i, {
              type: "text",
              text
            });
            if (key && (key instanceof RegExp ? key.test(text) : text.includes(key))) {
              i--;
            }
          } else if (node2.children) {
            stack.push(node2);
            traversal(node2.children);
            stack.pop();
          }
        }
      })(vm.nodes);
      return new Promise(function(resolve) {
        setTimeout(() => {
          resolve({
            num: res.length,
            highlight(i, hlstyle = "background-color:#FF9632") {
              if (i < 1 || i > res.length)
                return;
              if (this.last) {
                res[this.last - 1].style = style;
              }
              this.last = i;
              res[i - 1].style = hlstyle;
            },
            jump: anchor ? (i, offset) => {
              if (i > 0 && i <= res.length) {
                vm.navigateTo("search" + i, offset);
              }
            } : void 0
          });
        }, 200);
      });
    };
  }
  const plugins = [Markdown, Emoji, Highlight, Search];
  const _sfc_main$a = {
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
          const selector = uni.createSelectorQuery().in(this._in ? this._in.page : this).select((this._in ? this._in.selector : "._root") + (id ? `${deep}#${id}` : "")).boundingClientRect();
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
              uni.pageScrollTo({
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
          uni.createSelectorQuery().in(this).select("#_root").boundingClientRect().exec((res) => res[0] ? resolve(res[0]) : reject(Error("Root label not found")));
        });
      },
      pauseMedia() {
        for (let i = (this._videos || []).length; i--; ) {
          this._videos[i].pause();
        }
        const command = 'for(var e=document.getElementsByTagName("video"),i=e.length;i--;)e[i].pause()';
        let page = this.$parent;
        while (!page.$scope)
          page = page.$parent;
        page.$scope.$getAppWebview().evalJS(command);
      },
      setContent(content, append) {
        if (!append || !this.imgList) {
          this.imgList = [];
        }
        const nodes = new Parser(this).parse(content);
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
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_node = vue.resolveComponent("node");
    return vue.openBlock(), vue.createElementBlock("view", {
      id: "_root",
      class: vue.normalizeClass(($props.selectable ? "_select " : "") + "_root"),
      style: vue.normalizeStyle(($props.editable ? "position:relative;min-height:200px;" : "") + $props.containerStyle),
      onClick: _cache[3] || (_cache[3] = (...args) => $options._containTap && $options._containTap(...args))
    }, [
      !$data.nodes[0] ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createBlock(_component_node, {
        key: 1,
        childs: $data.nodes,
        opts: [$props.lazyLoad, $props.loadingImg, $props.errorImg, $props.showImgMenu, $props.editable, $props.placeholder, "nodes"],
        name: "span"
      }, null, 8, ["childs", "opts"])),
      $data.tooltip ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "_tooltip_contain",
        style: vue.normalizeStyle("top:" + $data.tooltip.top + "px")
      }, [
        vue.createElementVNode("view", { class: "_tooltip" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.tooltip.items, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index2,
              class: "_tooltip_item",
              "data-i": index2,
              onClick: _cache[0] || (_cache[0] = (...args) => $options._tooltipTap && $options._tooltipTap(...args))
            }, vue.toDisplayString(item), 9, ["data-i"]);
          }), 128))
        ])
      ], 4)) : vue.createCommentVNode("v-if", true),
      $data.slider ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 3,
        class: "_slider",
        style: vue.normalizeStyle("top:" + $data.slider.top + "px")
      }, [
        vue.createElementVNode("slider", {
          value: $data.slider.value,
          min: $data.slider.min,
          max: $data.slider.max,
          "handle-size": "14",
          "block-size": "14",
          "show-value": "",
          activeColor: "white",
          style: { "padding": "3px" },
          onChanging: _cache[1] || (_cache[1] = (...args) => $options._sliderChanging && $options._sliderChanging(...args)),
          onChange: _cache[2] || (_cache[2] = (...args) => $options._sliderChange && $options._sliderChange(...args))
        }, null, 40, ["value", "min", "max"])
      ], 4)) : vue.createCommentVNode("v-if", true)
    ], 6);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-0cfd6ca1"], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/uni_modules/mp-html/components/mp-html/mp-html.vue"]]);
  const _sfc_main$9 = {
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
      uni.getStorage({
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
        formatAppLog("log", "at pages/blog-info/blog-info.vue:150", res.target);
      }
      return {
        title: this.data.title,
        imageUrl: this.data.cover || this.appData.data.shareimg,
        path: "pages/blog-info/blog-info?id=" + this.data.id + "&url=" + this.url
      };
    },
    methods: {
      weixin(scene) {
        uni.share({
          provider: "weixin",
          scene,
          title: this.data.title,
          type: 0,
          href: this.url,
          imageUrl: this.data.cover || this.appData.data.shareimg,
          summary: "\u6211\u6B63\u5728\u67E5\u770B\u6587\u7AE0" + this.data.title + "\uFF0C\u8D76\u7D27\u8DDF\u6211\u4E00\u8D77\u6765\u4F53\u9A8C\uFF01",
          success: function(res) {
            formatAppLog("log", "at pages/blog-info/blog-info.vue:170", "success:" + JSON.stringify(res));
          },
          fail: function(err) {
            formatAppLog("log", "at pages/blog-info/blog-info.vue:173", "fail:" + JSON.stringify(err));
          }
        });
      },
      qq() {
        uni.share({
          provider: "qq",
          type: 0,
          title: this.data.title,
          summary: "\u6211\u6B63\u5728\u67E5\u770B\u6587\u7AE0" + this.data.title + "\uFF0C\u8D76\u7D27\u8DDF\u6211\u4E00\u8D77\u6765\u4F53\u9A8C\uFF01",
          imageUrl: this.data.cover || this.appData.data.shareimg,
          href: this.url,
          success: function(res) {
            formatAppLog("log", "at pages/blog-info/blog-info.vue:186", "success:" + JSON.stringify(res));
          },
          fail: function(err) {
            formatAppLog("log", "at pages/blog-info/blog-info.vue:189", "fail:" + JSON.stringify(err));
          }
        });
      },
      home() {
        uni.reLaunch({
          url: "../index/index"
        });
      },
      wenti() {
        uni.navigateTo({
          url: "../about/help?id=" + this.id
        });
      },
      down() {
        uni.navigateTo({
          url: "../down/down?id=" + this.id
        });
      },
      async getData() {
        const res = await htRequest({
          url: "/index.php/index/index/get_miniapp",
          method: "POST",
          data: {
            setapi: set.setapi
          }
        });
        this.appData = res.data;
        uni.setStorage({
          key: "appData",
          data: res.data
        });
      },
      async blog(e) {
        this.arrays;
        const res = await myRequest({
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
        this.data = res.data.data.article;
        console.log();
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$4);
    const _component_mp_html = resolveEasycom(vue.resolveDynamicComponent("mp-html"), __easycom_0);
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_2);
    const _component_uni_collapse_items = vue.resolveComponent("uni-collapse-items");
    const _component_uni_collapses = vue.resolveComponent("uni-collapses");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_uni_transition, {
        ref: "ani",
        "custom-class": "transition",
        "mode-class": _ctx.modeClass,
        styles: _ctx.styles,
        show: _ctx.show
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "content-box" }, [
            vue.createElementVNode("view", { class: "title" }, vue.toDisplayString($data.data.title || "\u6807\u9898\u52A0\u8F7D\u4E2D..."), 1),
            vue.createElementVNode("view", { class: "xx" }, [
              vue.createElementVNode("view", { class: "author-name" }, [
                vue.createVNode(_component_uni_icons, {
                  color: "green",
                  type: "person",
                  size: "14"
                }),
                vue.createTextVNode(vue.toDisplayString($data.data.author_name || "\u4F5C\u8005") + " ", 1),
                vue.createVNode(_component_uni_icons, {
                  color: "red",
                  type: "fire",
                  size: "14"
                }),
                vue.createTextVNode(vue.toDisplayString($data.data.views || "\u6682\u65E0\u6D4F\u89C8"), 1)
              ]),
              vue.createElementVNode("view", { class: "date" }, [
                vue.createVNode(_component_uni_icons, {
                  color: "blue",
                  type: "calendar",
                  size: "14"
                }),
                vue.createTextVNode(vue.toDisplayString($data.data.date || "1970-01-01 00:00:00"), 1)
              ])
            ]),
            vue.createVNode(_component_mp_html, {
              "lozy-load": "true",
              "container-style": "overflow: hidden;",
              selectable: "true",
              "tag-style": $data.tagStyle,
              content: $data.data.content
            }, null, 8, ["tag-style", "content"]),
            vue.createCommentVNode(' <rich-text :nodes="data.content"></rich-text> '),
            vue.createElementVNode("view", { class: "over" }, "\u2014\u2014 The End \u2014\u2014"),
            vue.createElementVNode("view", { class: "Copyright" }, [
              vue.createElementVNode("text", null, "\u7248\u6743\u58F0\u660E\uFF1A\u82E5\u65E0\u7279\u6B8A\u6CE8\u660E\uFF0C\u300A"),
              vue.createElementVNode("text", { class: "Copyright-text" }, vue.toDisplayString($data.data.title), 1),
              vue.createElementVNode("text", null, "\u300B\u5185\u5BB9\u4E3A\u300A"),
              vue.createElementVNode("text", { class: "Copyright-text" }, vue.toDisplayString($data.data.author_name || "\u4F5C\u8005"), 1),
              vue.createElementVNode("text", null, "\u300B\u539F\u521B\uFF0C\u8F6C\u8F7D\u8BF7\u4FDD\u7559\u6587\u7AE0\u51FA\u5904\u3002\u5982\u6709\u300A"),
              vue.createElementVNode("text", { class: "Copyright-text" }, vue.toDisplayString($data.data.author_name || "\u4F5C\u8005"), 1),
              vue.createElementVNode("text", null, "\u300B\u8F6C\u8F7D\u6587\u7AE0\u65F6\u672A\u6CE8\u660E\u51FA\u5904\u6216\u4FB5\u72AF\u60A8\u7684\u6743\u76CA\u6216\u7248\u6743\uFF0C\u8BF7\u8054\u7CFB\u300A"),
              vue.createElementVNode("text", { class: "Copyright-text" }, vue.toDisplayString($data.data.author_name || "\u4F5C\u8005"), 1),
              vue.createElementVNode("text", null, "\u300B\uFF0C\u6211\u4EEC\u5C06\u53CA\u65F6\u6E05\u7406\u5220\u9664\u5E76\u9053\u6B49\uFF0C\u8C22\u8C22\uFF01")
            ]),
            vue.createCommentVNode(' 			<view class="tags">\n			<view>\n			<text class="tag">\u6807\u7B7E\u540D</text>\n			</view>\n			</view> ')
          ]),
          vue.createElementVNode("view", { class: "foot-content" })
        ]),
        _: 1
      }, 8, ["mode-class", "styles", "show"]),
      vue.createElementVNode("view", { class: "footer" }, [
        vue.createVNode(_component_uni_collapses, null, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_collapse_items, {
              title: "\u5206\u4EAB\u5230",
              "show-animation": true
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "ft-content" }, [
                  vue.createElementVNode("view", {
                    class: "homelist",
                    onClick: _cache[0] || (_cache[0] = ($event) => $options.qq())
                  }, [
                    vue.createElementVNode("view", { class: "homelist-item" }, [
                      vue.createVNode(_component_uni_icons, {
                        type: "qq",
                        color: "#564aff",
                        size: "30"
                      }),
                      vue.createElementVNode("view", { style: { "font-size": "12px", "font-weight": "400" } }, "QQ")
                    ])
                  ]),
                  vue.createElementVNode("view", {
                    class: "homelist",
                    onClick: _cache[1] || (_cache[1] = ($event) => $options.weixin("WXSceneSession"))
                  }, [
                    vue.createElementVNode("view", { class: "homelist-item" }, [
                      vue.createVNode(_component_uni_icons, {
                        type: "weixin",
                        color: "#42ff48",
                        size: "30"
                      }),
                      vue.createElementVNode("view", { style: { "font-size": "12px", "font-weight": "400" } }, "\u5FAE\u4FE1")
                    ])
                  ]),
                  vue.createElementVNode("view", {
                    class: "homelist",
                    onClick: _cache[2] || (_cache[2] = ($event) => $options.weixin("WXSceneTimeline"))
                  }, [
                    vue.createElementVNode("view", { class: "homelist-item" }, [
                      vue.createVNode(_component_uni_icons, {
                        type: "pyq",
                        color: "#fec855",
                        size: "30"
                      }),
                      vue.createElementVNode("view", { style: { "font-size": "12px", "font-weight": "400" } }, "\u670B\u53CB\u5708")
                    ])
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ], 64);
  }
  var PagesBlogInfoBlogInfo = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/blog-info/blog-info.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {
        url: "www.hkiii.cn",
        appData: ""
      };
    },
    onLoad() {
    },
    onShow() {
      var that = this;
      uni.getStorage({
        key: "appData",
        success: function(res) {
          that.appData = res.data;
        }
      });
    },
    methods: {}
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_mp_html = resolveEasycom(vue.resolveDynamicComponent("mp-html"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", { style: { "height": "10vh" } }),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "logo-box" }, [
          vue.createElementVNode("image", {
            class: "logo",
            src: "/static/logo.png",
            mode: ""
          })
        ]),
        vue.createElementVNode("view", { class: "title" }, " \u6211\u7684\u535A\u5BA2"),
        vue.createElementVNode("view", { class: "url" }, vue.toDisplayString($data.appData.data.blogurl), 1),
        vue.createVNode(_component_mp_html, {
          content: $data.appData.data.about
        }, null, 8, ["content"])
      ])
    ], 64);
  }
  var PagesAboutAbout = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/about/about.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {
        gid: 0,
        data: ""
      };
    },
    onLoad(options) {
      this.gid = options.gid;
      this.blog(options.id);
    },
    methods: {
      async blog(e) {
        var gid = this.gid || gid;
        const res = await myRequest({
          url: "/?rest-api=article_detail",
          method: "GET",
          data: {
            id: e
          }
        });
        var success = res.data.data.article.content;
        var nr = success.match(/<a (.*)a>/gi);
        this.data = nr;
        formatAppLog("log", "at pages/down/down.vue:46", this.data);
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_mp_html = resolveEasycom(vue.resolveDynamicComponent("mp-html"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", { class: "page" }, [
        vue.createElementVNode("view", { class: "out" }, [
          vue.createElementVNode("view", { class: "in" })
        ]),
        vue.createElementVNode("view", { class: "text" }, "\u9644\u4EF6\u4E0B\u8F7D")
      ]),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.data, (item, index2) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "page-two",
          key: index2
        }, [
          vue.createTextVNode(vue.toDisplayString(index2 + 1) + ". ", 1),
          vue.createVNode(_component_mp_html, {
            "lozy-load": "true",
            "container-style": "overflow: hidden;",
            selectable: "true",
            "tag-style": "{{tagStyle}}",
            content: item
          }, null, 8, ["content"])
        ]);
      }), 128)),
      $data.data == null ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "page-two"
      }, " \u6682\u65E0\u9644\u4EF6 ")) : vue.createCommentVNode("v-if", true)
    ], 64);
  }
  var PagesDownDown = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/down/down.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {
        id: "",
        page: 1,
        dataa: ""
      };
    },
    onLoad(option) {
      this.blog(1, option.id);
    },
    onReachBottom() {
      this.page = this.page + 1;
      this.blog(this.page);
    },
    onPullDownRefresh() {
      this.dataa = "";
      this.status = "loading";
      this.page = 1;
      this.blog(this.page);
      uni.stopPullDownRefresh();
    },
    methods: {
      delHtmlTag(str) {
        var reg2 = RegExp("<.*?>+|\n|\r", "ig");
        var result = str.replace(reg2, "");
        return result;
      },
      imageError(e, index2) {
        this.dataa[index2]["cover"] = "http://cdn.hkiii.cn//img/_2022/06/29/01/38/12/502/6483441/11289324486965076622";
      },
      getimg(str) {
        var srcReg = /<img.+?src=[\'\"]?([^\'\"]*)[\'\"]?/i;
        var result = str.match(srcReg);
        if (result != null) {
          return result[1];
        } else {
          return false;
        }
      },
      toInfo(e, u) {
        uni.navigateTo({
          url: "/pages/blog-info/blog-info?id=" + e + "&url=" + u
        });
      },
      async blog(page, id) {
        const res = await myRequest({
          url: "/?rest-api=article_list",
          method: "GET",
          data: {
            sort_id: id,
            page,
            count: 10
          }
        });
        if (res.data.data.articles == "") {
          this.status = "no-more";
        } else {
          this.dataa = [...this.dataa, ...res.data.data.articles];
        }
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$4);
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.dataa, (item, index2) => {
        return vue.openBlock(), vue.createElementBlock("view", { key: index2 }, [
          $options.getimg(item.description) || item.cover ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "list-items",
            onClick: ($event) => $options.toInfo(item.id, item.url)
          }, [
            vue.createElementVNode("view", { class: "img-box" }, [
              vue.createElementVNode("image", {
                onError: ($event) => $options.imageError($event, index2),
                class: "lists-img",
                src: item.cover || $options.getimg(item.description),
                mode: "scaleToFill"
              }, null, 40, ["onError", "src"])
            ]),
            vue.createElementVNode("view", { class: "list-box" }, [
              vue.createElementVNode("view", { class: "list-title" }, [
                item.top == "y" ? (vue.openBlock(), vue.createElementBlock("span", {
                  key: 0,
                  class: "top"
                }, "\u7F6E\u9876")) : vue.createCommentVNode("v-if", true),
                vue.createTextVNode(vue.toDisplayString(item.title), 1)
              ]),
              vue.createElementVNode("text", { class: "desc" }, vue.toDisplayString($options.delHtmlTag(item.description)), 1),
              vue.createElementVNode("view", { class: "many" }, [
                vue.createElementVNode("view", { class: "sort" }, vue.toDisplayString(item.sort_name), 1),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode("view", { class: "read" }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "fire-filled",
                      size: "17"
                    }),
                    vue.createTextVNode(vue.toDisplayString(item.views), 1)
                  ]),
                  vue.createElementVNode("view", { class: "comments" }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "chat-filled",
                      size: "17"
                    }),
                    vue.createTextVNode(vue.toDisplayString(item.comnum), 1)
                  ])
                ])
              ])
            ])
          ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
          !$options.getimg(item.description) && item.cover == "" ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "list-items",
            onClick: ($event) => $options.toInfo(item.id, item.url)
          }, [
            vue.createElementVNode("view", { class: "list-box-null" }, [
              vue.createElementVNode("view", { class: "list-title" }, [
                item.top == "y" ? (vue.openBlock(), vue.createElementBlock("span", {
                  key: 0,
                  class: "top"
                }, "\u7F6E\u9876")) : vue.createCommentVNode("v-if", true),
                vue.createTextVNode(vue.toDisplayString(item.title), 1)
              ]),
              vue.createElementVNode("text", { class: "desc" }, vue.toDisplayString($options.delHtmlTag(item.description)), 1),
              vue.createElementVNode("view", { class: "many" }, [
                vue.createElementVNode("view", { class: "sort" }, vue.toDisplayString(item.sort_name), 1),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode("view", { class: "read" }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "fire-filled",
                      size: "17"
                    }),
                    vue.createTextVNode(vue.toDisplayString(item.views), 1)
                  ]),
                  vue.createElementVNode("view", { class: "comments" }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "chat-filled",
                      size: "17"
                    }),
                    vue.createTextVNode(vue.toDisplayString(item.comnum), 1)
                  ])
                ])
              ])
            ])
          ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
        ]);
      }), 128)),
      vue.createVNode(_component_uni_load_more, {
        color: "#007AFF",
        status: _ctx.status
      }, null, 8, ["status"])
    ], 64);
  }
  var PagesSortInfoSortInfo = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/sort-info/sort-info.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        shoulu: "",
        sogo: "",
        height: "0%",
        avatarUrl: "../../static/logo.png",
        nickName: "\u70B9\u51FB\u767B\u5F55",
        homelist: [
          {
            img: "../../static/home/bangzhuzhongxin.png",
            text: "\u95EE\u9898\u53CD\u9988",
            url: "../about/help"
          },
          {
            img: "../../static/home/guanyuwomen.png",
            text: "\u5173\u4E8E\u6211\u4EEC",
            url: "../about/about"
          },
          {
            img: "../../static/home/zhanghuguanli.png",
            text: "\u7A0B\u5E8F\u7BA1\u7406",
            url: "../setting/admin"
          }
        ],
        appData: [],
        opacity: [
          "opacity:0.1;background:#fff;",
          "opacity:0.125;background:#fff;",
          "opacity:0.15;background:#fff;",
          "opacity:0.175;background:#fff;",
          "opacity:0.2;background:#fff;",
          "opacity:0.225;background:#fff;",
          "opacity:0.25;background:#fff;",
          "opacity:0.275;background:#fff;",
          "opacity:0.3;background:#fff;",
          "opacity:0.325;background:#fff;",
          "opacity:0.375;background:#fff;",
          "opacity:0.4;background:#fff;",
          "opacity:0.425;background:#fff;",
          "opacity:0.45;background:#fff;",
          "opacity:0.475;background:#fff;",
          "opacity:0.5;background:#fff;",
          "opacity:0.525;background:#fff;",
          "opacity:0.55;background:#fff;",
          "opacity:0.575;background:#fff;",
          "opacity:0.6;background:#fff;",
          "opacity:0.625;background:#fff;",
          "opacity:0.65;background:#fff;",
          "opacity:0.675;background:#fff;",
          "opacity:0.7;background:#fff;",
          "opacity:0.725;background:#fff;",
          "opacity:0.75;background:#fff;",
          "opacity:0.775;background:#fff;",
          "opacity:0.8;background:#fff;",
          "opacity:0.825;background:#fff;",
          "opacity:0.85;background:#fff;",
          "opacity:0.875;background:#fff;",
          "opacity:0.9;background:#fff;",
          "opacity:0.925;background:#fff;",
          "opacity:0.95;background:#fff;",
          "opacity:0.975;background:#fff;"
        ]
      };
    },
    mounted() {
    },
    onShow() {
      var that = this;
      uni.getStorage({
        key: "appData",
        success: function(res) {
          that.appData = res.data;
        }
      });
      uni.getStorage({
        key: "avatarUrl",
        success: function(res) {
          that.avatarUrl = res.data;
        }
      });
      uni.getStorage({
        key: "nickName",
        success: function(res) {
          that.nickName = res.data;
        }
      });
      uni.getStorage({
        key: "shoulu",
        success: function(res) {
          that.shoulu = res.data;
        },
        fail: function() {
          that.baidu("/baidupages/index", "shoulu");
        }
      });
      uni.getStorage({
        key: "sogo",
        success: function(res) {
          that.sogo = res.data;
        },
        fail: function() {
          that.baidu("/sogoupages/index", "sogo");
        }
      });
    },
    onLoad() {
      this.height = "height:0%";
    },
    methods: {
      close() {
        this.height = "height:0%";
      },
      login() {
        this.height = "height:40%";
      },
      loginqw() {
      },
      getUser(app) {
        var that = this;
        uni.login({
          provider: app,
          success: function(loginRes) {
            formatAppLog("log", "at pages/home/home.vue:210", loginRes.authResult);
            uni.getUserInfo({
              provider: app,
              success: function(infoRes) {
                that.avatarUrl = infoRes.userInfo.avatarUrl;
                that.nickName = infoRes.userInfo.nickName;
                uni.setStorage({
                  key: "nickName",
                  data: infoRes.userInfo.nickName
                });
                uni.setStorage({
                  key: "avatarUrl",
                  data: infoRes.userInfo.avatarUrl
                });
              }
            });
          }
        });
        this.height = "height:0%";
      },
      clear() {
        uni.showModal({
          title: "\u6E29\u99A8\u63D0\u793A",
          content: "\u8FD9\u6837\u4F1A\u6E05\u7A7A\u60A8\u7684\u4E2A\u4EBA\u8BBE\u7F6E\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF01",
          success: function(res) {
            if (res.confirm) {
              uni.clearStorage();
              uni.showToast({
                title: "\u6E05\u9664\u6210\u529F",
                duration: 2e3
              });
              uni.reLaunch({
                url: "../index/index"
              });
            } else if (res.cancel) {
              formatAppLog("log", "at pages/home/home.vue:246", "\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
            }
          }
        });
      },
      about() {
        uni.navigateTo({
          url: "../about/about"
        });
      },
      shua(b) {
        var that = this;
        uni.showModal({
          title: "\u6E29\u99A8\u63D0\u793A",
          content: "\u786E\u5B9A\u8981\u5237\u65B0\u5417\uFF1F\uFF08\u8FC7\u591A\u5237\u65B0\u4F1A\u9020\u6210\u8D44\u6E90\u6D6A\u8D39\uFF09",
          success: function(res) {
            if (res.confirm) {
              if (b == "baidu") {
                that.baidu("/baidupages/index", "shoulu");
              } else if (b == "sogo") {
                that.baidu("/sogoupages/index", "sogo");
              }
            } else if (res.cancel) {
              formatAppLog("log", "at pages/home/home.vue:269", "\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
            }
          }
        });
      },
      go(url2) {
        if (url2 == "setting") {
          uni.showModal({
            title: "\u6E29\u99A8\u63D0\u793A",
            content: "\u4EC5\u9650\u5C0F\u7A0B\u5E8F\u4F7F\u7528\uFF01"
          });
        } else {
          uni.navigateTo({
            url: url2
          });
        }
      },
      async baidu(u, k) {
        var that = this;
        var urlNoProtocol = that.appData.data.blogurl.replace(/^https?\:\/\//i, "");
        const res = await apiRequest({
          url: u,
          method: "GET",
          data: {
            key: that.appData.data.tianapi,
            domain: urlNoProtocol
          }
        });
        uni.setStorage({
          key: k,
          data: res.data.newslist[0].count
        });
        that[k] = res.data.newslist[0].count;
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      $data.appData.code == "200" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "centent"
      }, [
        vue.createElementVNode("view", { class: "banner-box" }, [
          vue.createElementVNode("view", { class: "box-img" }, [
            vue.createElementVNode("image", {
              class: "me-img",
              src: $data.avatarUrl,
              mode: ""
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("view", {
            class: "me",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.login())
          }, vue.toDisplayString($data.nickName), 1)
        ]),
        vue.createElementVNode("view", { class: "bannertm" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.opacity, (i) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              style: vue.normalizeStyle(i),
              class: "tm"
            }, null, 4);
          }), 256))
        ]),
        vue.createElementVNode("view", { class: "homelist" }, [
          vue.createElementVNode("button", {
            "open-type": "openSetting",
            class: "homelist-item",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.go("setting"))
          }, [
            vue.createElementVNode("image", {
              class: "homelist-img",
              src: "/static/home/xitongshezhi.png"
            }),
            vue.createElementVNode("view", { style: { "font-size": "12px", "font-weight": "200" } }, "\u7A0B\u5E8F\u8BBE\u7F6E")
          ]),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.homelist, (i) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "homelist-item",
              onClick: ($event) => $options.go(i.url)
            }, [
              vue.createElementVNode("image", {
                class: "homelist-img",
                src: i.img
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { style: { "font-size": "12px", "font-weight": "200" } }, vue.toDisplayString(i.text), 1)
            ], 8, ["onClick"]);
          }), 256))
        ]),
        vue.createElementVNode("view", { class: "baidu-box" }, [
          vue.createElementVNode("view", { class: "baidu-item" }, [
            vue.createElementVNode("view", { class: "sl-icon" }, [
              vue.createVNode(_component_uni_icons, {
                color: "#88CFFF",
                type: "vip-filled",
                size: "30"
              })
            ]),
            vue.createElementVNode("view", { class: "shoulu" }, [
              vue.createElementVNode("view", { class: "sl-title" }, "\u767E\u5EA6\u6536\u5F55"),
              vue.createElementVNode("view", { class: "sl-content" }, vue.toDisplayString($data.shoulu || "\u83B7\u53D6\u4E2D..."), 1)
            ]),
            vue.createVNode(_component_uni_icons, {
              onClick: _cache[2] || (_cache[2] = ($event) => $options.shua("baidu")),
              color: "#aaa",
              type: "refreshempty",
              size: "20"
            })
          ]),
          vue.createElementVNode("view", { class: "baidu-item" }, [
            vue.createElementVNode("view", { class: "sl-icon-sg" }, [
              vue.createVNode(_component_uni_icons, {
                color: "#E3BDA4",
                type: "color-filled",
                size: "30"
              })
            ]),
            vue.createElementVNode("view", { class: "shoulu" }, [
              vue.createElementVNode("view", { class: "sl-title" }, "\u641C\u72D7\u6536\u5F55"),
              vue.createElementVNode("view", { class: "sl-content" }, vue.toDisplayString($data.sogo || "\u83B7\u53D6\u4E2D..."), 1)
            ]),
            vue.createVNode(_component_uni_icons, {
              onClick: _cache[3] || (_cache[3] = ($event) => $options.shua("sogo")),
              color: "#aaa",
              type: "refreshempty",
              size: "20"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "home-item" }, [
          vue.createElementVNode("view", { class: "home-a" }, [
            vue.createElementVNode("view", { class: "home-a-a" }, "\u7248\u672C\u4FE1\u606F"),
            vue.createElementVNode("view", { class: "home-a-b" }, "V1.0.0")
          ]),
          vue.createElementVNode("view", { class: "home-a" }, [
            vue.createElementVNode("view", { class: "home-a-a" }, "\u9875\u9762\u5F00\u53D1"),
            vue.createElementVNode("view", { class: "home-a-b" }, "\u5927\u5F6DSir")
          ]),
          vue.createElementVNode("view", {
            class: "home-a",
            onClick: _cache[4] || (_cache[4] = ($event) => $options.clear())
          }, [
            vue.createElementVNode("view", { class: "home-a-a" }, "\u6E05\u9664\u7F13\u5B58"),
            vue.createElementVNode("view", { class: "home-a-b" }, ">")
          ]),
          vue.createElementVNode("view", {
            class: "home-b",
            onClick: _cache[5] || (_cache[5] = ($event) => $options.about())
          }, [
            vue.createElementVNode("view", { class: "home-a-a" }, "\u5173\u4E8E\u6211\u4EEC"),
            vue.createElementVNode("view", { class: "home-a-c" }, ">")
          ])
        ]),
        vue.createElementVNode("view", {
          class: "login",
          style: vue.normalizeStyle($data.height)
        }, [
          vue.createElementVNode("view", {
            class: "close",
            onClick: _cache[6] || (_cache[6] = ($event) => $options.close())
          }, [
            vue.createElementVNode("view", { class: "close-title" }, "\u8BF7\u9009\u62E9\u767B\u5F55\u65B9\u5F0F"),
            vue.createElementVNode("view", { class: "close-btn" }, [
              vue.createVNode(_component_uni_icons, {
                type: "closeempty",
                color: "#fff",
                size: "30"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "login-content" }, " \u8BE5\u529F\u80FD\u4EC5\u83B7\u53D6\u60A8\u7684\u5FAE\u4FE1/QQ\u5934\u50CF\uFF0C\u7528\u4E8E\u524D\u7AEF\u9875\u9762\u5C55\u793A\uFF0C\u672C\u7A0B\u5E8F\u4E0D\u4F1A\u50A8\u5B58\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u8BF7\u653E\u5FC3\u4F7F\u7528\uFF01 "),
          vue.createElementVNode("view", { class: "login-box" }, [
            vue.createElementVNode("view", {
              class: "wx",
              onClick: _cache[7] || (_cache[7] = ($event) => $options.getUser("weixin"))
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "weixin",
                color: "#04BE02",
                size: "16"
              }),
              vue.createTextVNode("\u5FAE\u4FE1\u767B\u5F55 ")
            ]),
            vue.createElementVNode("view", {
              class: "qq",
              onClick: _cache[8] || (_cache[8] = ($event) => $options.getUser("qq"))
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "qq",
                color: "#66ccff",
                size: "16"
              }),
              vue.createTextVNode("QQ\u767B\u5F55 ")
            ])
          ])
        ], 4)
      ])) : vue.createCommentVNode("v-if", true),
      $data.appData.code == "201" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "centent",
        style: { "text-align": "center" }
      }, " \u8D26\u53F7\u672A\u6FC0\u6D3B\uFF0C\u8BF7\u8054\u7CFBQQ6283354 ")) : vue.createCommentVNode("v-if", true)
    ], 64);
  }
  var PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/home/home.vue"]]);
  const _sfc_main$4 = {
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
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
      style: vue.normalizeStyle({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" })
    }, [
      vue.createCommentVNode(" \u5C01\u9762 "),
      vue.renderSlot(_ctx.$slots, "cover", {}, () => [
        $props.cover ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-card__cover"
        }, [
          vue.createElementVNode("image", {
            class: "uni-card__cover-image",
            mode: "widthFix",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
            src: $props.cover
          }, null, 8, ["src"])
        ])) : vue.createCommentVNode("v-if", true)
      ], true),
      vue.renderSlot(_ctx.$slots, "title", {}, () => [
        $props.title || $props.extra ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-card__header"
        }, [
          vue.createCommentVNode(" \u5361\u7247\u6807\u9898 "),
          vue.createElementVNode("view", {
            class: "uni-card__header-box",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
          }, [
            $props.thumbnail ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "uni-card__header-avatar"
            }, [
              vue.createElementVNode("image", {
                class: "uni-card__header-avatar-image",
                src: $props.thumbnail,
                mode: "aspectFit"
              }, null, 8, ["src"])
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "uni-card__header-content" }, [
              vue.createElementVNode("text", { class: "uni-card__header-content-title uni-ellipsis" }, [
                $props.istop == "y" ? (vue.openBlock(), vue.createElementBlock("span", {
                  key: 0,
                  class: "istop"
                }, "\u7F6E\u9876")) : vue.createCommentVNode("v-if", true),
                vue.createTextVNode(vue.toDisplayString($props.title), 1)
              ]),
              $props.title && $props.subTitle ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "uni-card__header-content-subtitle uni-ellipsis"
              }, vue.toDisplayString($props.subTitle), 1)) : vue.createCommentVNode("v-if", true)
            ])
          ]),
          vue.createElementVNode("view", {
            class: "uni-card__header-extra",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
          }, [
            vue.createElementVNode("text", { class: "uni-card__header-extra-text" }, vue.toDisplayString($props.extra), 1)
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ], true),
      vue.createCommentVNode(" \u5361\u7247\u5185\u5BB9 "),
      vue.createElementVNode("view", {
        class: "uni-card__content",
        style: vue.normalizeStyle({ padding: $props.padding }),
        onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4),
      vue.createElementVNode("view", {
        class: "uni-card__actions",
        onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
      }, [
        vue.renderSlot(_ctx.$slots, "actions", {}, void 0, true)
      ])
    ], 6);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-19622063"], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {
        value: "",
        dataa: "\u6CA1\u6709\u641C\u7D22\u5230\u54E6\uFF01"
      };
    },
    onLoad(options) {
      this.value = options.search;
      this.blog(options.search);
      formatAppLog("log", "at pages/search/search.vue:65", 111);
    },
    methods: {
      search(res) {
        this.blog(res.value);
      },
      toInfo(e) {
        uni.navigateTo({
          url: "/pages/blog-info/blog-info?id=" + e
        });
      },
      async blog(keyword) {
        formatAppLog("log", "at pages/search/search.vue:77", keyword);
        const res = await myRequest({
          url: "/?rest-api=article_list",
          method: "GET",
          data: {
            keyword
          }
        });
        this.dataa = res.data.data.articles;
        formatAppLog("log", "at pages/search/search.vue:86", this.dataa);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$3);
    const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_1);
    const _component_uni_section = vue.resolveComponent("uni-section");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", { class: "searchTop" }, [
        vue.createVNode(_component_uni_search_bar, {
          placeholder: "\u8BF7\u8F93\u5165\u8981\u641C\u7D22\u7684\u5185\u5BB9",
          modelValue: $data.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value = $event),
          cancelButton: "none",
          bgColor: "#eee",
          onConfirm: $options.search
        }, null, 8, ["modelValue", "onConfirm"])
      ]),
      vue.createElementVNode("view", { class: "content-item" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.dataa, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", { key: index2 }, [
            item.cover != "" ? (vue.openBlock(), vue.createBlock(_component_uni_card, {
              key: 0,
              title: item.title,
              "sub-title": item.date,
              extra: item.sort_name,
              cover: _ctx.cover,
              onClick: ($event) => $options.toInfo(item.id)
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("image", {
                  slot: "cover",
                  style: { "width": "100%" },
                  src: item.cover
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "list-flex" }, [
                  vue.createElementVNode("view", { class: "list-item" }, " \u4F5C\u8005:" + vue.toDisplayString(item.author_name), 1),
                  vue.createElementVNode("view", { class: "list-item" }, " \u9605\u8BFB" + vue.toDisplayString(item.views), 1),
                  vue.createElementVNode("view", { class: "list-item" }, " \u8BC4\u8BBA" + vue.toDisplayString(item.comnum), 1)
                ])
              ]),
              _: 2
            }, 1032, ["title", "sub-title", "extra", "cover", "onClick"])) : vue.createCommentVNode("v-if", true),
            item.cover == "" ? (vue.openBlock(), vue.createBlock(_component_uni_section, {
              key: 1,
              type: "line"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_card, {
                  title: item.title,
                  "sub-title": item.date,
                  extra: item.sort_name,
                  thumbnail: item.cover,
                  onClick: ($event) => $options.toInfo(item.id)
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "list-flex" }, [
                      vue.createElementVNode("view", { class: "list-item" }, " \u4F5C\u8005:" + vue.toDisplayString(item.author_name), 1),
                      vue.createElementVNode("view", { class: "list-item" }, " \u9605\u8BFB" + vue.toDisplayString(item.views), 1),
                      vue.createElementVNode("view", { class: "list-item" }, " \u8BC4\u8BBA" + vue.toDisplayString(item.comnum), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["title", "sub-title", "extra", "thumbnail", "onClick"])
              ]),
              _: 2
            }, 1024)) : vue.createCommentVNode("v-if", true)
          ]);
        }), 128))
      ])
    ], 64);
  }
  var PagesSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/search/search.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        value: ""
      };
    },
    onLoad() {
      var that = this;
      uni.getStorage({
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
          uni.setStorage({
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
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_popup_message = resolveEasycom(vue.resolveDynamicComponent("uni-popup-message"), __easycom_0$1);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createCommentVNode(" \u63D0\u793A\u4FE1\u606F\u5F39\u7A97  "),
      vue.createVNode(_component_uni_popup, {
        ref: "message",
        type: "message"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_popup_message, {
            type: _ctx.msgType,
            message: _ctx.messageText,
            duration: 2e3
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 512),
      vue.createElementVNode("view", { class: "new" }, [
        vue.createElementVNode("view", { class: "new-title" }, "\u6E29\u99A8\u63D0\u793A\uFF1A"),
        vue.createElementVNode("view", { class: "new-text" }, " API\u79D8\u94A5\u5728\u60A8\u7684\u7AD9\u70B9\u540E\u53F0-\u7CFB\u7EDF-\u8BBE\u7F6E-API\u63A5\u53E3\u83B7\u53D6\uFF01 ")
      ]),
      vue.createElementVNode("view", { class: "inp" }, [
        vue.createElementVNode("view", { class: "title" }, "API\u79D8\u94A5\uFF1A"),
        vue.withDirectives(vue.createElementVNode("input", {
          class: "srk",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value = $event),
          type: "text",
          placeholder: "\u8BF7\u8F93\u5165API\u79D8\u94A5"
        }, null, 512), [
          [vue.vModelText, $data.value]
        ])
      ]),
      vue.createElementVNode("view", {
        class: "save",
        onClick: _cache[1] || (_cache[1] = ($event) => $options.save())
      }, " \u4FDD\u5B58\u8BBE\u7F6E ")
    ], 64);
  }
  var PagesSettingAdmin = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/setting/admin.vue"]]);
  const _sfc_main$1 = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("textarea", {
          name: "",
          id: "",
          cols: "30",
          rows: "10",
          placeholder: "\u8BF7\u8F93\u5165\u8981\u53CD\u9988\u7684\u5185\u5BB9!"
        })
      ]),
      vue.createElementVNode("button", {
        class: "btn",
        type: "primary",
        disabled: "true",
        plain: "true"
      }, "\u6682\u672A\u5F00\u653E")
    ], 64);
  }
  var PagesAboutHelp = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/pages/about/help.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/xia-editor/xia-editor", PagesXiaEditorXiaEditor);
  __definePage("pages/blog-info/blog-info", PagesBlogInfoBlogInfo);
  __definePage("pages/about/about", PagesAboutAbout);
  __definePage("pages/down/down", PagesDownDown);
  __definePage("pages/sort-info/sort-info", PagesSortInfoSortInfo);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/search/search", PagesSearchSearch);
  __definePage("pages/setting/admin", PagesSettingAdmin);
  __definePage("pages/about/help", PagesAboutHelp);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "onShow");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/pengsong/Downloads/Web/uni-app/demo2/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(uni.VueShared, Vue);
