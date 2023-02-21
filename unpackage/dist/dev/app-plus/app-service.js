if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
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
(function(vue, shared) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const icons = {
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
  const _export_sfc = (sfc, props) => {
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
  const _sfc_main$D = {
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
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, null, 6);
  }
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$C], ["__scopeId", "data-v-d31e1c47"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const isObject$1 = (val) => val !== null && typeof val === "object";
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
    const mode = Array.isArray(values) ? "list" : isObject$1(values) ? "named" : "unknown";
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
  const en$1 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans$1 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9"
  };
  const zhHant$1 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "\u8ACB\u8F38\u5165\u641C\u7D22\u5167\u5BB9"
  };
  const messages$1 = {
    en: en$1,
    "zh-Hans": zhHans$1,
    "zh-Hant": zhHant$1
  };
  const {
    t: t$3
  } = initVueI18n(messages$1);
  const _sfc_main$C = {
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
        return this.cancelText || t$3("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t$3("uni-search-bar.placeholder");
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
      emitFocus(e2) {
        this.$emit("focus", e2.detail);
      }
    }
  };
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$3);
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
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$B], ["__scopeId", "data-v-f07ef577"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const _sfc_main$B = {
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
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$A], ["__scopeId", "data-v-f7c32d22"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/uni_modules/uni-drawer/components/uni-drawer/uni-drawer.vue"]]);
  const _sfc_main$A = {
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
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$3);
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
  const __easycom_3$3 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$z], ["__scopeId", "data-v-c3453ea3"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.vue"]]);
  const en = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  const zhHans = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u663E\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F7D...",
    "uni-load-more.contentnomore": "\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86"
  };
  const zhHant = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u986F\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F09...",
    "uni-load-more.contentnomore": "\u6C92\u6709\u66F4\u591A\u6578\u64DA\u4E86"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  let platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  const {
    t: t$2
  } = initVueI18n(messages);
  const _sfc_main$z = {
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
        return this.contentText.contentdown || t$2("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t$2("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t$2("uni-load-more.contentnomore");
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
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$y], ["__scopeId", "data-v-9245e42c"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"]]);
  const _sfc_main$y = {
    data() {
      return {};
    },
    onLoad() {
    },
    onReady() {
    },
    onShow() {
    },
    onHide() {
    },
    onUnload() {
    },
    onPullDownRefresh() {
    },
    onReachBottom() {
    },
    onShareAppMessage() {
    },
    methods: {}
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "over" }, [
      vue.createElementVNode("view", { class: "root" }, [
        vue.createElementVNode("image", {
          style: { "width": "60%", "margin": "auto" },
          src: "/static/failed.png",
          mode: "widthFix"
        }),
        vue.createElementVNode("view", { style: { "margin": "10px", "font-weight": "800" } }, "\u52A0\u8F7D\u5931\u8D25"),
        vue.createElementVNode("view", { style: { "margin": "10px", "font-size": "13px", "color": "#666" } }, "\u8BF7\u786E\u8BA4\u662F\u5426\u5B89\u88C5\u63D2\u4EF6\u6216\u6253\u5F00Emlog\u540E\u53F0\u7684Api\u63A5\u53E3")
      ])
    ]);
  }
  const __easycom_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$x], ["__scopeId", "data-v-4968336f"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/components/null/null.vue"]]);
  const _sfc_main$x = {
    name: "loading-atom",
    data() {
      return {};
    }
  };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "box" }, [
        vue.createElementVNode("view", { class: "atom" }),
        vue.createElementVNode("view", { class: "atom" }),
        vue.createElementVNode("view", { class: "atom" }),
        vue.createElementVNode("view", { class: "dot" })
      ])
    ]);
  }
  const loading8 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$w], ["__scopeId", "data-v-7c0c2b07"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/uni_modules/zero-loading/components/zero-loading/static/loading-atom.vue"]]);
  const _sfc_main$w = {
    name: "zero-loading",
    components: {
      loading8
    },
    props: {
      type: {
        type: String,
        default: "atom"
      },
      position: {
        type: String,
        default: "fixed"
      },
      zIndex: {
        type: Number,
        default: 9
      },
      mask: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {};
    },
    methods: {
      handleClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_loading8 = vue.resolveComponent("loading8");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createCommentVNode("  "),
      vue.createElementVNode("view", {
        style: vue.normalizeStyle({ "position": $props.position, "z-index": $props.zIndex }),
        class: vue.normalizeClass(["container", $props.mask ? "mask" : ""]),
        onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.handleClick && $options.handleClick(...args), ["prevent"]))
      }, [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("view", { class: "main" }, [
            $props.type == "atom" ? (vue.openBlock(), vue.createBlock(_component_loading8, { key: 0 })) : vue.createCommentVNode("v-if", true)
          ])
        ])
      ], 6)
    ], 2112);
  }
  const __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$v], ["__scopeId", "data-v-8a0ec36c"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/uni_modules/zero-loading/components/zero-loading/zero-loading.vue"]]);
  const url$1 = "https://www.hkiii.cn";
  const set = {
    url: url$1
  };
  const url = set.url;
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
        url: "https://api.tianapi.com" + options.url,
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
  const get = (options) => {
    return new Promise((resolve, reject) => {
      uni.request({
        url: options.url,
        header: options.header,
        method: "get",
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
        url: set.url + options.url,
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: options.method || "POST",
        data: options.data || {},
        success: (res) => {
          resolve(res);
        },
        fail() {
          resolve(0);
        }
      });
    });
  };
  const _sfc_main$v = {
    data() {
      return {
        inull: false,
        dataa: [],
        avatarUrl: "../../static/logo.png",
        $req_time: "",
        $sign: "",
        page: 1,
        shoulu: "",
        one: "",
        two: "",
        three: "",
        four: "",
        searchKey: "",
        toolsData: "",
        sorts: "",
        count: "",
        description: 0,
        di: false,
        swiperCurrent: "",
        backTopValue: false,
        onRefresh: false,
        status: "loading",
        blogSorts: [],
        images: [
          "http://cdn.hkiii.cn//img/_2022/06/21/09/52/42/167/6483441/13482961188039425428",
          "https://cdn.hkiii.cn/cg/11.jpeg",
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
        appData: "",
        lunbo: [],
        lbid: [],
        cardList: [
          {
            caroLogo: "https://cdn.hkiii.cn/cg/10.jpeg"
          },
          {
            caroLogo: "https://cdn.hkiii.cn/cg/11.jpeg"
          },
          {
            caroLogo: "https://cdn.hkiii.cn/cg/12.jpeg"
          }
        ],
        currentCardIndex: 0
      };
    },
    mounted() {
    },
    onLoad() {
      this.blog(1);
      this.getData();
      this.getTools();
    },
    onShow() {
    },
    onReachBottom() {
      this.page = this.page + 1;
      this.blog(this.page);
    },
    onPullDownRefresh() {
      this.null = true;
      this.dataa = "";
      this.status = "loading";
      this.page = 1;
      this.lunbo = [];
      this.lbid = [];
      this.appData = "";
      this.count = "";
      this.blog(this.page);
      this.getData();
      uni.stopPullDownRefresh();
    },
    onPageScroll: function(e2) {
      var scrollTop = e2.scrollTop;
      var backTopValue = scrollTop > 500 ? true : false;
      this.backTopValue = backTopValue;
    },
    onShareAppMessage(res) {
      if (res.from === "button") {
        formatAppLog("log", "at pages/index/index.vue:403", res.target);
      }
      return {
        title: "\u5206\u4EAB\u597D\u73A9\u7684\u7A0B\u5E8F\uFF01",
        imageUrl: this.appData.data.shareImg,
        path: "pages/index/index"
      };
    },
    methods: {
      async getSortsData(sort, sid) {
        var that = this;
        var res = await myRequest({
          url: "/?rest-api=article_list",
          method: "GET",
          data: {
            sort_id: sid,
            count: 3
          }
        });
        var array = [];
        array.push(res.data.data.articles);
        that.count = [...that.count, ...array];
      },
      goToSorts() {
        uni.switchTab({
          url: "../sorts/sorts"
        });
      },
      goSortLogs: function(sid, sortname) {
        uni.navigateTo({
          url: "../sort-info/sort-info?id=" + sid + "&sortname=" + sortname
        });
      },
      changeCard(e2) {
        this.currentCardIndex = e2.detail.current;
      },
      copyUrl() {
        uni.setClipboardData({
          data: this.appData.data.appUrl,
          success: function() {
            uni.showModal({
              title: "\u6E29\u99A8\u63D0\u793A",
              content: "\u590D\u5236\u6210\u529F"
            });
          }
        });
      },
      copyQQ() {
        uni.setClipboardData({
          data: this.appData.data.qq,
          success: function() {
            uni.showModal({
              title: "\u6E29\u99A8\u63D0\u793A",
              content: "\u590D\u5236\u6210\u529F"
            });
          }
        });
      },
      async getData() {
        const res = await htRequest({
          url: "/content/plugins/ApiSetting/api.php",
          method: "GET",
          data: {
            route: "getSetting"
          }
        });
        if (res.data.state > 0) {
          var lunbo = res.data.data.lbid.split(",");
          for (var i2 = 0; i2 < lunbo.length; i2++) {
            this.getInitImg(lunbo[i2]);
          }
          var sortid = res.data.data.sortid.split(",");
          for (var i2 = 0; i2 < sortid.length; i2++) {
            this.getSortsData(i2 + 1, sortid[i2]);
          }
          this.appData = res.data;
          uni.setStorage({
            key: "set_data",
            data: res.data
          });
        } else if (res) {
          this.inull = true;
        }
      },
      async getTools() {
        const res = await htRequest({
          url: "/content/plugins/ApiSetting/api.php",
          method: "GET",
          data: {
            route: "getTools"
          }
        });
        this.toolsData = res.data.data;
      },
      change(index2, id) {
        uni.navigateTo({
          url: "../sort-info/sort-info?id=" + id
        });
        this.current = index2;
        this.scrollinto = "tab" + index2;
      },
      onChangeTab(e2) {
        this.change(e2.detail.current);
      },
      getUser() {
        uni.switchTab({
          url: "../home/home"
        });
      },
      showDrawer(e2) {
        this.$refs[e2].open();
      },
      closeDrawer(e2) {
        this.$refs[e2].close();
      },
      delHtmlTag(str) {
        var reg2 = RegExp("<.*?>+|\n|\r", "ig");
        var result = str.replace(reg2, "");
        return result;
      },
      imageError(e2, index2) {
        this.dataa[index2]["cover"] = "http://cdn.hkiii.cn//img/_2022/06/29/01/38/12/502/6483441/11289324486965076622";
      },
      getimg(str) {
        if (str) {
          var srcReg = /<img[^>]*src\s*=\s*['"]?([^'"]+)['"]?[^>]*>/gim;
          var result = str.match(srcReg);
          if (result != null) {
            for (var i2 = 0; i2 < result.length; i2++) {
              result[i2] = result[i2].replace(/<img[^>]*src\s*=\s*['"]?([^'"]+)['"]?[^>]*>/gim, "$1");
            }
            return result;
          } else {
            return false;
          }
        } else {
          return "0";
        }
      },
      getDateBeforeNow(stringTime) {
        stringTime = new Date(stringTime.replace(/-/g, "/"));
        var minute = 1e3 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var week = day * 7;
        var month = day * 30;
        var year = month * 12;
        var time1 = new Date().getTime();
        var time2 = new Date(stringTime).getTime();
        var time = time1 - time2;
        var result = null;
        if (time < 0) {
          result = stringTime;
        } else if (time / year >= 1) {
          result = parseInt(time / year) + "\u5E74\u524D";
        } else if (time / month >= 1) {
          result = parseInt(time / month) + "\u6708\u524D";
        } else if (time / week >= 1) {
          result = parseInt(time / week) + "\u5468\u524D";
        } else if (time / day >= 1) {
          result = parseInt(time / day) + "\u5929\u524D";
        } else if (time / hour >= 1) {
          result = parseInt(time / hour) + "\u5C0F\u65F6\u524D";
        } else if (time / minute >= 1) {
          result = parseInt(time / minute) + "\u5206\u949F\u524D";
        } else {
          result = "\u521A\u521A";
        }
        return result;
      },
      toInfo(e2, u2) {
        uni.navigateTo({
          url: "/pages/blog-info/blog-info?id=" + e2 + "&url=" + encodeURIComponent(u2)
        });
      },
      search(res) {
        var value = res.value || this.searchKey;
        uni.reLaunch({
          url: "/pages/search/search?keyword=" + value
        });
      },
      swiperChangeCustom(e2) {
        this.swiperCurrent = e2.detail.current;
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
      async getInitImg(e2) {
        const res = await myRequest({
          url: "/?rest-api=article_detail",
          method: "GET",
          data: {
            id: e2
          }
        });
        var a2 = this.getimg(res.data.data.article.content) || "0";
        this.lbid.push(e2);
        this.lunbo.push(a2);
      }
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$3);
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_1$2);
    const _component_uni_drawer = resolveEasycom(vue.resolveDynamicComponent("uni-drawer"), __easycom_2$2);
    const _component_uni_notice_bar = resolveEasycom(vue.resolveDynamicComponent("uni-notice-bar"), __easycom_3$3);
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_1$1);
    const _component_null = resolveEasycom(vue.resolveDynamicComponent("null"), __easycom_3$2);
    const _component_zero_loading = resolveEasycom(vue.resolveDynamicComponent("zero-loading"), __easycom_6);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      $data.appData.state == 200 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "content"
      }, [
        vue.createElementVNode("view", { class: "header" }, [
          vue.createElementVNode("view", { class: "user" }, [
            vue.createElementVNode("view", {
              onClick: _cache[0] || (_cache[0] = ($event) => $options.showDrawer("showLeft"))
            }, [
              vue.createElementVNode("image", {
                class: "user-img",
                src: "http://q2.qlogo.cn/headimg_dl?dst_uin=" + $data.appData.data.qq + "&spec=100",
                mode: ""
              }, null, 8, ["src"])
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
              "cancel-text": "\u641C\u7D22",
              modelValue: $data.searchKey,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.searchKey = $event)
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
            }, 8, ["onConfirm", "onCancel", "modelValue"])
          ]),
          vue.createElementVNode("view", {
            class: "user",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.search && $options.search(...args))
          }, [
            vue.createElementVNode("view", {
              class: "user-img",
              style: { "line-height": "34px", "font-size": "14px", "font-weight": "800", "text-align": "center", "color": "#333" }
            }, " \u641C\u7D22 ")
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
                vue.createElementVNode("view", { style: { "width": "100%", "display": "flex", "flex-direction": "column" } }, [
                  vue.createElementVNode("view", { class: "lervor-card-page" }, [
                    vue.createElementVNode("swiper", {
                      class: "card-swiper",
                      circular: "true",
                      onChange: _cache[3] || (_cache[3] = (...args) => $options.changeCard && $options.changeCard(...args)),
                      "previous-margin": "45rpx",
                      "next-margin": "45rpx"
                    }, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.cardList, (item, index2) => {
                        return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
                          vue.createElementVNode("view", {
                            class: vue.normalizeClass(["card-item", $data.currentCardIndex === index2 ? "card-item-current" : "card-item-default"])
                          }, [
                            vue.createElementVNode("image", {
                              class: "card-bg",
                              src: item.caroLogo,
                              mode: "aspectFill"
                            }, null, 8, ["src"])
                          ], 2)
                        ]);
                      }), 256))
                    ], 32),
                    vue.createElementVNode("view", { class: "card-box" }, [
                      vue.createElementVNode("view", { class: "tj-title" }, "\u7AD9\u70B9\u6570\u636E\u7EDF\u8BA1"),
                      vue.createElementVNode("view", { class: "baidu-boxx" }, [
                        vue.createElementVNode("view", { class: "baidu-iteme" }, [
                          vue.createElementVNode("view", {
                            class: "sl-icon",
                            style: { "background-color": "#fff" }
                          }, [
                            vue.createVNode(_component_uni_icons, {
                              color: "#666",
                              type: "vip",
                              size: "30"
                            })
                          ]),
                          vue.createElementVNode("view", { class: "shoulu" }, [
                            vue.createElementVNode("view", { class: "sl-content" }, "\u6587\u7AE0\u6570\u91CF"),
                            vue.createElementVNode("view", { class: "sl-title" }, vue.toDisplayString($data.toolsData.blogNum) + "\u7BC7", 1)
                          ])
                        ]),
                        vue.createElementVNode("view", { class: "baidu-iteme" }, [
                          vue.createElementVNode("view", {
                            class: "sl-icon-sg",
                            style: { "background-color": "#fff" }
                          }, [
                            vue.createVNode(_component_uni_icons, {
                              color: "#666",
                              type: "link",
                              size: "30"
                            })
                          ]),
                          vue.createElementVNode("view", { class: "shoulu" }, [
                            vue.createElementVNode("view", { class: "sl-content" }, "\u53CB\u94FE\u6570\u91CF"),
                            vue.createElementVNode("view", { class: "sl-title" }, vue.toDisplayString($data.toolsData.linkNum) + "\u4E2A", 1)
                          ])
                        ])
                      ]),
                      vue.createElementVNode("view", { class: "baidu-boxx" }, [
                        vue.createElementVNode("view", { class: "baidu-iteme" }, [
                          vue.createElementVNode("view", {
                            class: "sl-icon",
                            style: { "background-color": "#fff" }
                          }, [
                            vue.createVNode(_component_uni_icons, {
                              color: "#666",
                              type: "paperclip",
                              size: "30"
                            })
                          ]),
                          vue.createElementVNode("view", { class: "shoulu" }, [
                            vue.createElementVNode("view", { class: "sl-content" }, "\u5206\u7C7B\u6570\u91CF"),
                            vue.createElementVNode("view", { class: "sl-title" }, vue.toDisplayString($data.toolsData.sortNum) + "\u4E2A", 1)
                          ])
                        ]),
                        vue.createElementVNode("view", { class: "baidu-iteme" }, [
                          vue.createElementVNode("view", {
                            class: "sl-icon-sg",
                            style: { "background-color": "#fff" }
                          }, [
                            vue.createVNode(_component_uni_icons, {
                              color: "#666",
                              type: "fire-filled",
                              size: "30"
                            })
                          ]),
                          vue.createElementVNode("view", { class: "shoulu" }, [
                            vue.createElementVNode("view", { class: "sl-content" }, "\u6807\u7B7E\u6570\u91CF"),
                            vue.createElementVNode("view", { class: "sl-title" }, vue.toDisplayString($data.toolsData.tagNum) + "\u4E2A", 1)
                          ])
                        ])
                      ]),
                      vue.createElementVNode("view", { class: "baidu-boxx" }, [
                        vue.createElementVNode("view", { class: "baidu-iteme" }, [
                          vue.createElementVNode("view", {
                            class: "sl-icon",
                            style: { "background-color": "#fff" }
                          }, [
                            vue.createVNode(_component_uni_icons, {
                              color: "#666",
                              type: "staff-filled",
                              size: "30"
                            })
                          ]),
                          vue.createElementVNode("view", { class: "shoulu" }, [
                            vue.createElementVNode("view", { class: "sl-content" }, "\u7528\u6237\u6570\u91CF"),
                            vue.createElementVNode("view", { class: "sl-title" }, vue.toDisplayString($data.toolsData.userNum) + "\u4E2A", 1)
                          ])
                        ]),
                        vue.createElementVNode("view", { class: "baidu-iteme" }, [
                          vue.createElementVNode("view", {
                            class: "sl-icon-sg",
                            style: { "background-color": "#fff" }
                          }, [
                            vue.createVNode(_component_uni_icons, {
                              color: "#666",
                              type: "person-filled",
                              size: "30"
                            })
                          ]),
                          vue.createElementVNode("view", { class: "shoulu" }, [
                            vue.createElementVNode("view", { class: "sl-content" }, "\u7BA1\u7406\u6570\u91CF"),
                            vue.createElementVNode("view", { class: "sl-title" }, vue.toDisplayString($data.toolsData.adminNum) + "\u4E2A", 1)
                          ])
                        ])
                      ]),
                      vue.createElementVNode("view", {
                        class: "baidu-boxx",
                        style: { "box-shadow": "0px 0px 5px #eee", "padding": "5px 10px", "margin": "10px", "border-radius": "5px", "background": "#fff" }
                      }, " \u6700\u8FD1\u6587\u7AE0\u53D1\u5E03\u65F6\u95F4" + vue.toDisplayString($data.toolsData.overTime), 1)
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }, 512)
        ]),
        vue.createElementVNode("view", { class: "swiper-wrap" }, [
          vue.createElementVNode("swiper", {
            class: "swiper-box",
            "indicator-dots": false,
            autoplay: "true",
            circular: "true",
            "previous-margin": "10px",
            "next-margin": "10px",
            vertical: _ctx.vertical,
            current: $data.swiperCurrent,
            onChange: _cache[4] || (_cache[4] = (...args) => $options.swiperChangeCustom && $options.swiperChangeCustom(...args))
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.lunbo, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("swiper-item", {
                key: index2,
                onClick: ($event) => $options.toInfo($data.lbid[index2])
              }, [
                vue.createElementVNode("view", {
                  class: vue.normalizeClass(["swiper-item", "swiper-item" + index2])
                }, [
                  vue.createElementVNode("img", {
                    src: item != "0" ? item : "https://cdn.hkiii.cn/cg/" + (index2 + 1) + ".jpeg",
                    class: "swiper-img",
                    srcset: ""
                  }, null, 8, ["src"])
                ], 2)
              ], 8, ["onClick"]);
            }), 128))
          ], 40, ["vertical", "current"]),
          vue.createElementVNode("view", { class: "dots" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.images, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: vue.normalizeClass("dot " + (index2 == $data.swiperCurrent ? " active" : ""))
              }, null, 2);
            }), 256))
          ])
        ]),
        vue.createElementVNode("view", { class: "bannertm" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.opacity, (i2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              style: vue.normalizeStyle(i2),
              class: "tm"
            }, null, 4);
          }), 256))
        ]),
        vue.createVNode(_component_uni_notice_bar, {
          "show-icon": "",
          scrollable: "",
          "background-color": "#fff",
          color: "#000",
          text: $data.appData.data.ridingLantern || "\u83B7\u53D6\u4E2D..."
        }, null, 8, ["text"]),
        $data.appData.data.auditing != 1 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "baidu-box"
        }, [
          vue.createElementVNode("view", {
            class: "baidu-item",
            onClick: _cache[6] || (_cache[6] = ($event) => $options.copyUrl())
          }, [
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
              onClick: _cache[5] || (_cache[5] = ($event) => $options.copyUrl()),
              color: "#aaa",
              type: "circle-filled",
              size: "20"
            })
          ]),
          vue.createElementVNode("view", {
            class: "baidu-item",
            onClick: _cache[8] || (_cache[8] = ($event) => $options.copyQQ())
          }, [
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
              onClick: _cache[7] || (_cache[7] = ($event) => $options.copyQQ()),
              color: "#aaa",
              type: "circle-filled",
              size: "20"
            })
          ])
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "s-box" }, [
          vue.createElementVNode("view", { class: "s-header" }, [
            vue.createElementVNode("view", { class: "s-header-right" }, "\u4E13\u9898\u63A8\u8350"),
            vue.createElementVNode("view", {
              class: "s-header-left",
              onClick: _cache[9] || (_cache[9] = (...args) => $options.goToSorts && $options.goToSorts(...args))
            }, [
              vue.createVNode(_component_uni_icons, {
                color: "#333",
                type: "bars",
                size: "20px"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "card-area" }, [
            vue.createElementVNode("scroll-view", {
              class: "scroll-view",
              "scroll-x": ""
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.count, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", { class: "s-item" }, [
                  vue.createElementVNode("view", {
                    class: "s-title-header",
                    onClick: ($event) => $options.goSortLogs(item[0].sort_id, item[0].sort_name)
                  }, [
                    vue.createElementVNode("view", { class: "s-Ftitle" }, "\u6700\u65B0\u6587\u7AE0"),
                    vue.createElementVNode("view", { class: "s-title" }, [
                      vue.createCommentVNode(" <view>{{ sorts[index].sortname }}</view> "),
                      item.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, vue.toDisplayString(item[0].sort_name), 1)) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, "\u4E0D\u7ED9\u4F60\u770B")),
                      vue.createVNode(_component_uni_icons, {
                        color: "#fff",
                        type: "forward",
                        size: "12px"
                      })
                    ])
                  ], 8, ["onClick"]),
                  vue.createElementVNode("view", null, [
                    item == "" ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      style: { "height": "120px", "text-align": "center", "display": "flex", "flex-direction": "column" }
                    }, [
                      vue.createElementVNode("image", {
                        style: { "width": "50%", "height": "100%", "margin": "auto" },
                        src: "/static/null.png",
                        mode: "widthFix"
                      }),
                      vue.createElementVNode("view", { style: { "margin": "10px", "text-align": "center" } }, "\u8FD9\u4E0D\u662FBug!!!")
                    ])) : vue.createCommentVNode("v-if", true),
                    item != "" ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "s-content"
                    }, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item, (it, i2) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: "s-content-item",
                          onClick: ($event) => $options.toInfo(it.id, it.url)
                        }, [
                          vue.createElementVNode("image", {
                            src: "../../static/ph" + (i2 + 1) + ".png"
                          }, null, 8, ["src"]),
                          vue.createElementVNode("view", { class: "ding" }, vue.toDisplayString(i2 + 1), 1),
                          vue.createElementVNode("view", { class: "s-text" }, vue.toDisplayString(it.title), 1)
                        ], 8, ["onClick"]);
                      }), 256))
                    ])) : vue.createCommentVNode("v-if", true)
                  ])
                ]);
              }), 256))
            ])
          ])
        ]),
        $data.backTopValue ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "xiaohuojian",
          onClick: _cache[10] || (_cache[10] = (...args) => $options.xhj && $options.xhj(...args))
        }, [
          vue.createElementVNode("image", {
            src: "/static/fanhuidingbu.png",
            mode: ""
          })
        ])) : vue.createCommentVNode("v-if", true),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.dataa, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", { key: index2 }, [
            vue.createCommentVNode(" \u591A\u5F20\u56FE\u7247 "),
            $options.getimg(item.description).length > 1 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "list-items-many",
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
                $options.getimg(item.description).length == 2 ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "img-box-many between"
                }, [
                  (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(2, (i2) => {
                    return vue.createElementVNode("view", { class: "packaged" }, [
                      vue.createElementVNode("image", {
                        onError: ($event) => $options.imageError($event, index2),
                        class: "lists-img-many",
                        src: $options.getimg(item.description)[i2 - 1],
                        mode: "scaleToFill"
                      }, null, 40, ["onError", "src"])
                    ]);
                  }), 64))
                ])) : vue.createCommentVNode("v-if", true),
                $options.getimg(item.description).length >= 3 ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "img-box-many between"
                }, [
                  (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(3, (i2) => {
                    return vue.createElementVNode("view", {
                      class: "packaged",
                      style: { "width": "30%" }
                    }, [
                      vue.createElementVNode("image", {
                        onError: ($event) => $options.imageError($event, index2),
                        class: "lists-img-many",
                        src: $options.getimg(item.description)[i2 - 1],
                        mode: "scaleToFill"
                      }, null, 40, ["onError", "src"])
                    ]);
                  }), 64))
                ])) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("view", { class: "many" }, [
                  vue.createElementVNode("view", { class: "sort" }, vue.toDisplayString(item.sort_name || "\u6682\u672A\u5206\u7C7B"), 1),
                  vue.createElementVNode("view", { class: "right" }, [
                    vue.createElementVNode("view", { class: "read" }, [
                      vue.createVNode(_component_uni_icons, {
                        type: "fire-filled",
                        size: "17"
                      }),
                      vue.createTextVNode(vue.toDisplayString(item.views), 1)
                    ]),
                    vue.createElementVNode("view", { class: "comments" }, vue.toDisplayString($options.getDateBeforeNow(item.date)), 1)
                  ])
                ])
              ])
            ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" \u53EA\u6709\u4E00\u5F20\u56FE\u7247 "),
            $options.getimg(item.description).length == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "list-items",
              onClick: ($event) => $options.toInfo(item.id, item.url)
            }, [
              vue.createElementVNode("view", { class: "img-box" }, [
                vue.createElementVNode("image", {
                  onError: ($event) => $options.imageError($event, index2),
                  class: "lists-img",
                  src: $options.getimg(item.description)[0],
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
                  vue.createElementVNode("view", { class: "sort" }, vue.toDisplayString(item.sort_name || "\u6682\u672A\u5206\u7C7B"), 1),
                  vue.createElementVNode("view", { class: "right" }, [
                    vue.createElementVNode("view", { class: "read" }, [
                      vue.createVNode(_component_uni_icons, {
                        type: "fire-filled",
                        size: "17"
                      }),
                      vue.createTextVNode(vue.toDisplayString(item.views), 1)
                    ]),
                    vue.createElementVNode("view", { class: "comments" }, vue.toDisplayString($options.getDateBeforeNow(item.date)), 1)
                  ])
                ])
              ])
            ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" \u6CA1\u6709\u56FE\u7247 "),
            !$options.getimg(item.description) ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
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
                  vue.createElementVNode("view", { class: "sort" }, vue.toDisplayString(item.sort_name || "\u6682\u672A\u5206\u7C7B"), 1),
                  vue.createElementVNode("view", { class: "right" }, [
                    vue.createElementVNode("view", { class: "read" }, [
                      vue.createVNode(_component_uni_icons, {
                        type: "fire-filled",
                        size: "17"
                      }),
                      vue.createTextVNode(vue.toDisplayString(item.views), 1)
                    ]),
                    vue.createElementVNode("view", { class: "comments" }, vue.toDisplayString($options.getDateBeforeNow(item.date)), 1)
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
      ])) : vue.createCommentVNode("v-if", true),
      $data.inull ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        style: { "margin-top": "100px" }
      }, [
        vue.createVNode(_component_null)
      ])) : vue.createCommentVNode("v-if", true),
      !$data.inull && $data.appData.state != 200 ? (vue.openBlock(), vue.createBlock(_component_zero_loading, {
        key: 2,
        mask: "true"
      })) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/pages/index/index.vue"]]);
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = { ...defaultSettings };
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data2 = JSON.parse(raw);
        Object.assign(currentSettings, data2);
      } catch (e2) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e2) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.1.0
   * (c) 2022 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i2 = subs.indexOf(fn);
      if (i2 > -1) {
        subs.splice(i2, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    var oldScope = store2._scope;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    var computedCache = {};
    var scope = vue.effectScope(true);
    scope.run(function() {
      forEachValue(wrappedGetters, function(fn, key) {
        computedObj[key] = partial(fn, store2);
        computedCache[key] = vue.computed(function() {
          return computedObj[key]();
        });
        Object.defineProperty(store2.getters, key, {
          get: function() {
            return computedCache[key].value;
          },
          enumerable: true
        });
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    store2._scope = scope;
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
    if (oldScope) {
      oldScope.stop();
    }
  }
  function installModule(store2, rootState, path, module2, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module2.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module2;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn(
              '[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"'
            );
          }
        }
        parentState[moduleName] = module2.state;
      });
    }
    var local = module2.context = makeLocalContext(store2, namespace, path);
    module2.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module2.forEachAction(function(action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module2.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module2.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._actions[type]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
            return;
          }
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._mutations[type]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
            return;
          }
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      {
        console.error("[vuex] duplicate getter key: " + type);
      }
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store3) {
      return rawGetter(
        local.state,
        local.getters,
        store3.state,
        store3.getters
      );
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key) {
      return state2[key];
    }, state);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    {
      assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app, store2) {
    setupDevtoolsPlugin(
      {
        id: "org.vuejs.vuex",
        app,
        label: "Vuex",
        homepage: "https://next.vuex.vuejs.org/",
        logo: "https://vuejs.org/images/icons/favicon-96x96.png",
        packageName: "vuex",
        componentStateTypes: [LABEL_VUEX_BINDINGS]
      },
      function(api) {
        api.addTimelineLayer({
          id: MUTATIONS_LAYER_ID,
          label: "Vuex Mutations",
          color: COLOR_LIME_500
        });
        api.addTimelineLayer({
          id: ACTIONS_LAYER_ID,
          label: "Vuex Actions",
          color: COLOR_LIME_500
        });
        api.addInspector({
          id: INSPECTOR_ID,
          label: "Vuex",
          icon: "storage",
          treeFilterPlaceholder: "Filter stores..."
        });
        api.on.getInspectorTree(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            if (payload.filter) {
              var nodes = [];
              flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
              payload.rootNodes = nodes;
            } else {
              payload.rootNodes = [
                formatStoreForInspectorTree(store2._modules.root, "")
              ];
            }
          }
        });
        api.on.getInspectorState(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            makeLocalGetters(store2, modulePath);
            payload.state = formatStoreForInspectorState(
              getStoreModule(store2._modules, modulePath),
              modulePath === "root" ? store2.getters : store2._makeLocalGettersCache,
              modulePath
            );
          }
        });
        api.on.editInspectorState(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            var path = payload.path;
            if (modulePath !== "root") {
              path = modulePath.split("/").filter(Boolean).concat(path);
            }
            store2._withCommit(function() {
              payload.set(store2._state.data, path, payload.state.value);
            });
          }
        });
        store2.subscribe(function(mutation, state) {
          var data2 = {};
          if (mutation.payload) {
            data2.payload = mutation.payload;
          }
          data2.state = state;
          api.notifyComponentUpdate();
          api.sendInspectorTree(INSPECTOR_ID);
          api.sendInspectorState(INSPECTOR_ID);
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: mutation.type,
              data: data2
            }
          });
        });
        store2.subscribeAction({
          before: function(action, state) {
            var data2 = {};
            if (action.payload) {
              data2.payload = action.payload;
            }
            action._id = actionId++;
            action._time = Date.now();
            data2.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: action._time,
                title: action.type,
                groupId: action._id,
                subtitle: "start",
                data: data2
              }
            });
          },
          after: function(action, state) {
            var data2 = {};
            var duration = Date.now() - action._time;
            data2.duration = {
              _custom: {
                type: "duration",
                display: duration + "ms",
                tooltip: "Action duration",
                value: duration
              }
            };
            if (action.payload) {
              data2.payload = action.payload;
            }
            data2.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: Date.now(),
                title: action.type,
                groupId: action._id,
                subtitle: "end",
                data: data2
              }
            });
          }
        });
      }
    );
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module2, path) {
    return {
      id: path || "root",
      label: extractNameFromPath(path),
      tags: module2.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module2._children).map(
        function(moduleName) {
          return formatStoreForInspectorTree(
            module2._children[moduleName],
            path + moduleName + "/"
          );
        }
      )
    };
  }
  function flattenStoreForInspectorTree(result, module2, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module2.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module2._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module2._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module2, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module2.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module2.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p) {
          if (!target[p]) {
            target[p] = {
              _custom: {
                value: {},
                display: p,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n2) {
      return n2;
    });
    return names.reduce(
      function(module2, moduleName, i2) {
        var child = module2[moduleName];
        if (!child) {
          throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
        }
        return i2 === names.length - 1 ? child : child._children;
      },
      path === "root" ? moduleMap : moduleMap.root._children
    );
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e2) {
      return e2;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module2) {
    this._children[key] = module2;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update2(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get2(path) {
    return path.reduce(function(module2, key) {
      return module2.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module2 = this.root;
    return path.reduce(function(namespace, key) {
      module2 = module2.getChild(key);
      return namespace + (module2.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn(
          "[vuex] trying to unregister module '" + key + "', which is not registered"
        );
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn(
              "[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed"
            );
          }
          return;
        }
        update(
          path.concat(key),
          targetModule.getChild(key),
          newModule.modules[key]
        );
      }
    }
  }
  var functionAssert = {
    assert: function(value) {
      return typeof value === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value) {
      return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value, type) {
        assert(
          assertOptions.assert(value),
          makeAssertionMessage(path, key, type, value, assertOptions.expected)
        );
      });
    });
  }
  function makeAssertionMessage(path, key, type, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins2 = options.plugins;
    if (plugins2 === void 0)
      plugins2 = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._scope = null;
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins2.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install(app, injectKey) {
    app.provide(injectKey || storeKey, this);
    app.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn(
        "[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
      );
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e2) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e2);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e2) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e2);
          }
        }
        resolve(res);
      }, function(error) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error);
          });
        } catch (e2) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e2);
          }
        }
        reject(error);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  var mapState = normalizeNamespace(function(namespace, states) {
    var res = {};
    if (!isValidMap(states)) {
      console.error("[vuex] mapState: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(states).forEach(function(ref) {
      var key = ref.key;
      var val = ref.val;
      res[key] = function mappedState() {
        var state = this.$store.state;
        var getters = this.$store.getters;
        if (namespace) {
          var module2 = getModuleByNamespace(this.$store, "mapState", namespace);
          if (!module2) {
            return;
          }
          state = module2.context.state;
          getters = module2.context.getters;
        }
        return typeof val === "function" ? val.call(this, state, getters) : state[val];
      };
      res[key].vuex = true;
    });
    return res;
  });
  var mapMutations = normalizeNamespace(function(namespace, mutations) {
    var res = {};
    if (!isValidMap(mutations)) {
      console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(mutations).forEach(function(ref) {
      var key = ref.key;
      var val = ref.val;
      res[key] = function mappedMutation() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var commit = this.$store.commit;
        if (namespace) {
          var module2 = getModuleByNamespace(this.$store, "mapMutations", namespace);
          if (!module2) {
            return;
          }
          commit = module2.context.commit;
        }
        return typeof val === "function" ? val.apply(this, [commit].concat(args)) : commit.apply(this.$store, [val].concat(args));
      };
    });
    return res;
  });
  function normalizeMap(map) {
    if (!isValidMap(map)) {
      return [];
    }
    return Array.isArray(map) ? map.map(function(key) {
      return { key, val: key };
    }) : Object.keys(map).map(function(key) {
      return { key, val: map[key] };
    });
  }
  function isValidMap(map) {
    return Array.isArray(map) || isObject(map);
  }
  function normalizeNamespace(fn) {
    return function(namespace, map) {
      if (typeof namespace !== "string") {
        map = namespace;
        namespace = "";
      } else if (namespace.charAt(namespace.length - 1) !== "/") {
        namespace += "/";
      }
      return fn(namespace, map);
    };
  }
  function getModuleByNamespace(store2, helper, namespace) {
    var module2 = store2._modulesNamespaceMap[namespace];
    if (!module2) {
      console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
    }
    return module2;
  }
  const _sfc_main$u = {
    data() {
      return {
        imgCode: "",
        options: "",
        username: "",
        loginCode: "",
        password: ""
      };
    },
    onShow() {
      this.getImgCode();
      this.getOpitions();
    },
    methods: {
      ...mapMutations(["login"]),
      async getOpitions() {
        const res = await htRequest({
          url: "/content/plugins/ApiSetting/manyApi.php",
          method: "GET",
          data: {
            route: "options"
          }
        });
        if (res.data.state == 1) {
          this.options = res.data.data;
        } else {
          uni.showModal({
            title: "\u6E29\u99A8\u63D0\u793A",
            content: `${res.data.msg}`,
            showCancel: false,
            success(res2) {
              if (res2.confirm) {
                uni.navigateBack();
              }
            }
          });
        }
      },
      getImgCode() {
        this.imgCode = url + "/include/lib/checkcode.php?" + new Date().getTime();
      },
      async tologin() {
        uni.showLoading({
          title: "\u767B\u5F55\u4E2D"
        });
        var that = this;
        const res = await htRequest({
          url: "/admin/account.php?action=dosignin",
          method: "POST",
          data: {
            user: this.username,
            pw: this.password,
            login_code: this.loginCode,
            persist: "1",
            resp: "json"
          }
        });
        if (res.data.code == 1) {
          uni.hideLoading();
          uni.showModal({
            title: "\u6E29\u99A8\u63D0\u793A",
            content: `${res.data.msg}`,
            showCancel: false,
            success(res2) {
              if (res2.confirm) {
                that.getImgCode();
              }
            }
          });
        } else if (res.data.code == 0) {
          uni.hideLoading();
          uni.showModal({
            title: "\u6E29\u99A8\u63D0\u793A",
            content: `\u767B\u5F55\u6210\u529F`,
            showCancel: false,
            success(res2) {
              if (res2.confirm) {
                that.login();
                uni.navigateBack();
              }
            }
          });
        } else {
          uni.hideLoading();
          uni.showModal({
            title: "\u6E29\u99A8\u63D0\u793A",
            content: `\u672A\u77E5\u9519\u8BEF\u6216\u5DF2\u767B\u5F55`,
            showCancel: false,
            success(res2) {
              if (res2.confirm) {
                that.getImgCode();
              }
            }
          });
        }
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "zai-box" }, [
      vue.createElementVNode("image", {
        src: "/static/login.png",
        mode: "aspectFit",
        class: "zai-logo"
      }),
      vue.createElementVNode("view", { class: "zai-title" }, "\u6B22\u8FCE\u767B\u5F55"),
      vue.createElementVNode("view", { class: "zai-form" }, [
        vue.withDirectives(vue.createElementVNode("input", {
          class: "zai-input",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.username = $event),
          "placeholder-class": "",
          placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D"
        }, null, 512), [
          [vue.vModelText, $data.username]
        ]),
        vue.withDirectives(vue.createElementVNode("input", {
          class: "zai-input",
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.password = $event),
          "placeholder-class": "",
          password: "",
          placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
        }, null, 512), [
          [vue.vModelText, $data.password]
        ]),
        $data.options.login_code == "y" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "zai-input-btn"
        }, [
          vue.withDirectives(vue.createElementVNode("input", {
            class: "zai-input",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.loginCode = $event),
            "placeholder-class": "",
            placeholder: "\u9A8C\u8BC1\u7801"
          }, null, 512), [
            [vue.vModelText, $data.loginCode]
          ]),
          vue.createElementVNode("view", {
            onClick: _cache[3] || (_cache[3] = ($event) => $options.getImgCode())
          }, [
            vue.createElementVNode("img", {
              class: "zai-checking",
              src: $data.imgCode
            }, null, 8, ["src"])
          ])
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "zai-label" }),
        vue.createElementVNode("button", {
          class: "zai-btn",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.tologin && $options.tologin(...args))
        }, "\u7ACB\u5373\u767B\u5F55"),
        vue.createElementVNode("navigator", {
          url: "../registering/registering",
          "hover-class": "none",
          class: "zai-label"
        }, "\u8FD8\u6CA1\u6709\u8D26\u53F7\uFF1F\u70B9\u6B64\u6CE8\u518C.")
      ])
    ]);
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/pages/login/login.vue"]]);
  const _sfc_main$t = {
    data() {
      return {
        ddd: "111"
      };
    },
    computed: {
      ...mapState(["isLogin"])
    },
    onShow() {
      formatAppLog("log", "at pages/demo/demo.vue:25", this.$store);
    },
    methods: {
      ...mapMutations(["login", "loginOut"]),
      btn() {
        this.login();
      },
      btn2() {
        this.loginOut();
      }
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "" }, [
      vue.createTextVNode(vue.toDisplayString(_ctx.isLogin) + " ", 1),
      vue.createElementVNode("view", {
        class: "",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.btn && $options.btn(...args))
      }, " \u767B\u5F55 "),
      vue.createElementVNode("view", {
        class: "",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.btn2 && $options.btn2(...args))
      }, " \u9000\u51FA ")
    ]);
  }
  const PagesDemoDemo = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/pages/demo/demo.vue"]]);
  const _sfc_main$s = {
    data() {
      return {
        state: false,
        totalTime: 60,
        recordingTime: 0,
        currentTime: 0,
        options: "",
        email: "",
        ecode: "",
        pwd: "",
        rpwd: "",
        code: "",
        imgCode: ""
      };
    },
    onLoad() {
      this.getImgCode();
    },
    onShow() {
      this.getOpitions();
    },
    methods: {
      getImgCode() {
        this.imgCode = url + "/include/lib/checkcode.php?" + new Date().getTime();
      },
      async getOpitions() {
        const res = await htRequest({
          url: "/content/plugins/ApiSetting/manyApi.php",
          method: "GET",
          data: {
            route: "options"
          }
        });
        if (res.data.state == 1) {
          this.options = res.data.data;
        } else {
          uni.showModal({
            title: "\u6E29\u99A8\u63D0\u793A",
            content: `${res.data.msg}`,
            showCancel: false,
            success(res2) {
              if (res2.confirm) {
                uni.navigateBack();
              }
            }
          });
        }
      },
      async login() {
        var that = this;
        uni.showLoading({
          title: "\u6CE8\u518C\u4E2D"
        });
        const res = await htRequest({
          url: "/admin/account.php?action=dosignup",
          method: "POST",
          data: {
            mail: this.email,
            passwd: this.pwd,
            repasswd: this.rpwd,
            mail_code: this.ecode,
            login_code: this.code,
            resp: "json"
          }
        });
        if (res.data.code == 1) {
          uni.hideLoading();
          uni.showModal({
            title: "\u6E29\u99A8\u63D0\u793A",
            content: `${res.data.msg}`,
            showCancel: false,
            success(res2) {
              if (res2.confirm) {
                that.getImgCode();
              }
            }
          });
        } else if (res.data.code == 0) {
          uni.hideLoading();
          uni.showModal({
            title: "\u6E29\u99A8\u63D0\u793A",
            content: `\u6CE8\u518C\u6210\u529F`,
            showCancel: false,
            success(res2) {
              if (res2.confirm) {
                uni.navigateBack();
              }
            }
          });
        } else {
          uni.hideLoading();
          uni.showModal({
            title: "\u6E29\u99A8\u63D0\u793A",
            content: `\u60A8\u5DF2\u767B\u5F55\u8FC7\u4E86\uFF0C\u8BF7\u5148\u9000\u51FA\u767B\u5F55\u3002`,
            showCancel: false,
            success(res2) {
              if (res2.confirm) {
                that.getImgCode();
              }
            }
          });
        }
      },
      async sendMailCode() {
        await htRequest({
          url: "/admin/account.php?action=send_email_code",
          method: "POST",
          data: {
            mail: "hk@hkiii.cn"
          }
        });
      },
      checking() {
        this.currentTime = this.totalTime;
        this.state = true;
        this.checkingTime();
        this.sendMailCode();
      },
      checkingTime() {
        let that = this;
        if (this.state) {
          if (this.currentTime > 0 && this.recordingTime <= this.totalTime) {
            this.recordingTime = this.recordingTime + 1;
            this.currentTime = this.totalTime - this.recordingTime;
            setTimeout(() => {
              that.checkingTime();
            }, 1e3);
          } else {
            this.state = false;
            this.recordingTime = 0;
            this.currentTime = this.totalTime;
          }
        } else {
          this.state = false;
          this.recordingTime = 0;
          this.currentTime = this.totalTime;
        }
      }
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "zai-box" }, [
      vue.createElementVNode("image", {
        src: "/static/login.png",
        mode: "aspectFit",
        class: "zai-logo"
      }),
      vue.createElementVNode("view", { class: "zai-title" }, "\u6B22\u8FCE\u6CE8\u518C"),
      vue.createElementVNode("view", { class: "zai-form" }, [
        vue.withDirectives(vue.createElementVNode("input", {
          class: "zai-input",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.email = $event),
          "placeholder-class": "",
          placeholder: "\u8BF7\u8F93\u5165\u90AE\u7BB1"
        }, null, 512), [
          [vue.vModelText, $data.email]
        ]),
        $data.options.email_code == "y" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "zai-input-btn"
        }, [
          vue.withDirectives(vue.createElementVNode("input", {
            class: "zai-input",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.ecode = $event),
            "placeholder-class": "",
            placeholder: "\u9A8C\u8BC1\u7801"
          }, null, 512), [
            [vue.vModelText, $data.ecode]
          ]),
          $data.state === false ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "zai-checking",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.checking && $options.checking(...args))
          }, "\u83B7\u53D6\u9A8C\u8BC1\u7801")) : vue.createCommentVNode("v-if", true),
          $data.state === true ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "zai-checking zai-time"
          }, "\u5012\u8BA1\u65F6" + vue.toDisplayString($data.currentTime) + "s", 1)) : vue.createCommentVNode("v-if", true)
        ])) : vue.createCommentVNode("v-if", true),
        vue.withDirectives(vue.createElementVNode("input", {
          class: "zai-input",
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.pwd = $event),
          "placeholder-class": "",
          password: "",
          placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
        }, null, 512), [
          [vue.vModelText, $data.pwd]
        ]),
        vue.withDirectives(vue.createElementVNode("input", {
          class: "zai-input",
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.rpwd = $event),
          "placeholder-class": "",
          password: "",
          placeholder: "\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"
        }, null, 512), [
          [vue.vModelText, $data.rpwd]
        ]),
        $data.options.login_code == "y" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "zai-input-btn"
        }, [
          vue.withDirectives(vue.createElementVNode("input", {
            class: "zai-input",
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.code = $event),
            "placeholder-class": "",
            placeholder: "\u56FE\u7247\u9A8C\u8BC1\u7801"
          }, null, 512), [
            [vue.vModelText, $data.code]
          ]),
          vue.createElementVNode("view", {
            onClick: _cache[6] || (_cache[6] = (...args) => $options.getImgCode && $options.getImgCode(...args))
          }, [
            vue.createElementVNode("img", {
              class: "zai-checking",
              src: $data.imgCode
            }, null, 8, ["src"])
          ])
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("button", {
          class: "zai-btn",
          onClick: _cache[7] || (_cache[7] = (...args) => $options.login && $options.login(...args))
        }, "\u7ACB\u5373\u6CE8\u518C"),
        vue.createElementVNode("navigator", {
          url: "../login/login",
          "open-type": "navigateBack",
          "hover-class": "none",
          class: "zai-label"
        }, "\u5DF2\u6709\u8D26\u53F7\uFF0C\u70B9\u6B64\u53BB\u767B\u5F55. ")
      ])
    ]);
  }
  const PagesRegisteringRegistering = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/pages/registering/registering.vue"]]);
  const _sfc_main$r = {
    name: "hklist",
    props: {
      List: {
        type: Array,
        default: function() {
          return [];
        }
      },
      tab: {
        type: String,
        default: ""
      },
      xiangqing: {
        type: String,
        default: ""
      },
      stat: {
        type: String,
        default: ""
      },
      zw: {
        type: String,
        default: ""
      },
      desc: {
        type: String,
        default: ""
      },
      lll: {
        type: String,
        default: ""
      }
    },
    data() {
      return {};
    },
    methods: {
      tya(e2) {
        uni.navigateTo({
          url: e2
        });
      },
      caoan(e2, u2) {
        this.$emit("editBlog", e2, u2);
      },
      taburl(e2) {
        uni.navigateTo({
          url: "/pages/blog-info/blog-info?id=" + e2
        });
      },
      zwurl(e2) {
      }
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "pageBox" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.List, (item) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "box",
          onClick: ($event) => $options.tya(item.url)
        }, [
          vue.createElementVNode("view", { class: "title" }, vue.toDisplayString(item.title), 1),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("span", null, "\u6587\u7AE0\u4F5C\u8005:" + vue.toDisplayString(item.author_name), 1),
            vue.createElementVNode("br"),
            vue.createTextVNode(" " + vue.toDisplayString($props.desc) + vue.toDisplayString(item.sort_name), 1)
          ]),
          vue.createElementVNode("view", { class: "bottom" }, [
            vue.createElementVNode("view", {
              class: "bjtab",
              onClick: vue.withModifiers(($event) => $options.taburl(item.id), ["stop"])
            }, " \u67E5\u770B\u6587\u7AE0 ", 8, ["onClick"]),
            vue.withDirectives(vue.createElementVNode("view", {
              class: "bjtab2",
              onClick: vue.withModifiers(($event) => $options.zwurl(item.zwurl), ["stop"])
            }, vue.toDisplayString($props.zw), 9, ["onClick"]), [
              [vue.vShow, $props.zw]
            ]),
            vue.createElementVNode("view", { class: "num" }, " \u6D4F\u89C8\u91CF:" + vue.toDisplayString(item.views), 1),
            vue.createElementVNode("view", {
              class: "caoan",
              onClick: vue.withModifiers(($event) => $options.caoan(item.id, item.url), ["stop"])
            }, vue.toDisplayString($props.xiangqing), 9, ["onClick"])
          ])
        ], 8, ["onClick"]);
      }), 256))
    ]);
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__scopeId", "data-v-18578b00"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/components/list/list.vue"]]);
  const _sfc_main$q = {
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
      onConfirm(e2) {
        this.$emit("confirm", e2.detail.value);
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
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$3);
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
        ], 64)) : $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 4 }, [
          $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: "content-clear-icon",
            type: $props.suffixIcon,
            color: "#c0c4cc",
            onClick: _cache[9] || (_cache[9] = ($event) => $options.onClickIcon("suffix"))
          }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
        ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 5 }, [
          $props.clearable && $data.val && !$props.disabled ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
            type: "clear",
            size: $props.clearSize,
            color: "#c0c4cc",
            onClick: $options.onClear
          }, null, 8, ["class", "size", "onClick"])) : vue.createCommentVNode("v-if", true)
        ], 64)),
        vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
      ], 6)
    ], 6);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-09fd5285"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  const _sfc_main$p = {
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
    updated(e2) {
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
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$3);
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
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-3d2dde9f"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue"]]);
  const _sfc_main$o = {
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
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-collapse" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  const __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-3f050360"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue"]]);
  const popup = {
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
  const _sfc_main$n = {
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
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-a4566996"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/uni_modules/uni-popup/components/uni-popup-message/uni-popup-message.vue"]]);
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
        nvueAnimation.transition(ref, {
          styles,
          ...config2
        }, (res) => {
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
  const _sfc_main$m = {
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
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform = "";
        for (let i2 in styles) {
          let line = this.toLine(i2);
          transform += line + ":" + styles[i2] + ";";
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
        for (let i2 in obj) {
          try {
            if (typeof obj[i2] === "object") {
              this.animation[i2](...obj[i2]);
            } else {
              this.animation[i2](obj[i2]);
            }
          } catch (e2) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139", `\u65B9\u6CD5 ${i2} \u4E0D\u5B58\u5728`);
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
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$l = {
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
      clear(e2) {
        e2.stopPropagation();
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
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_3);
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
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-4dd3c44b"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
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
        for (var i2 = 0; i2 < OUTPUT_TYPES.length; ++i2) {
          var type = OUTPUT_TYPES[i2];
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
        var code, index2 = 0, i2, length = message.length, blocks2 = this.blocks;
        var buffer82 = this.buffer8;
        while (index2 < length) {
          if (this.hashed) {
            this.hashed = false;
            blocks2[0] = blocks2[16];
            blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
          }
          if (notString) {
            if (ARRAY_BUFFER) {
              for (i2 = this.start; index2 < length && i2 < 64; ++index2) {
                buffer82[i2++] = message[index2];
              }
            } else {
              for (i2 = this.start; index2 < length && i2 < 64; ++index2) {
                blocks2[i2 >> 2] |= message[index2] << SHIFT[i2++ & 3];
              }
            }
          } else {
            if (ARRAY_BUFFER) {
              for (i2 = this.start; index2 < length && i2 < 64; ++index2) {
                code = message.charCodeAt(index2);
                if (code < 128) {
                  buffer82[i2++] = code;
                } else if (code < 2048) {
                  buffer82[i2++] = 192 | code >> 6;
                  buffer82[i2++] = 128 | code & 63;
                } else if (code < 55296 || code >= 57344) {
                  buffer82[i2++] = 224 | code >> 12;
                  buffer82[i2++] = 128 | code >> 6 & 63;
                  buffer82[i2++] = 128 | code & 63;
                } else {
                  code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index2) & 1023);
                  buffer82[i2++] = 240 | code >> 18;
                  buffer82[i2++] = 128 | code >> 12 & 63;
                  buffer82[i2++] = 128 | code >> 6 & 63;
                  buffer82[i2++] = 128 | code & 63;
                }
              }
            } else {
              for (i2 = this.start; index2 < length && i2 < 64; ++index2) {
                code = message.charCodeAt(index2);
                if (code < 128) {
                  blocks2[i2 >> 2] |= code << SHIFT[i2++ & 3];
                } else if (code < 2048) {
                  blocks2[i2 >> 2] |= (192 | code >> 6) << SHIFT[i2++ & 3];
                  blocks2[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
                } else if (code < 55296 || code >= 57344) {
                  blocks2[i2 >> 2] |= (224 | code >> 12) << SHIFT[i2++ & 3];
                  blocks2[i2 >> 2] |= (128 | code >> 6 & 63) << SHIFT[i2++ & 3];
                  blocks2[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
                } else {
                  code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index2) & 1023);
                  blocks2[i2 >> 2] |= (240 | code >> 18) << SHIFT[i2++ & 3];
                  blocks2[i2 >> 2] |= (128 | code >> 12 & 63) << SHIFT[i2++ & 3];
                  blocks2[i2 >> 2] |= (128 | code >> 6 & 63) << SHIFT[i2++ & 3];
                  blocks2[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
                }
              }
            }
          }
          this.lastByteIndex = i2;
          this.bytes += i2 - this.start;
          if (i2 >= 64) {
            this.start = i2 - 64;
            this.hash();
            this.hashed = true;
          } else {
            this.start = i2;
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
        var blocks2 = this.blocks, i2 = this.lastByteIndex;
        blocks2[i2 >> 2] |= EXTRA[i2 & 3];
        if (i2 >= 56) {
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
        var a2, b, c2, d, bc, da, blocks2 = this.blocks;
        if (this.first) {
          a2 = blocks2[0] - 680876937;
          a2 = (a2 << 7 | a2 >>> 25) - 271733879 << 0;
          d = (-1732584194 ^ a2 & 2004318071) + blocks2[1] - 117830708;
          d = (d << 12 | d >>> 20) + a2 << 0;
          c2 = (-271733879 ^ d & (a2 ^ -271733879)) + blocks2[2] - 1126478375;
          c2 = (c2 << 17 | c2 >>> 15) + d << 0;
          b = (a2 ^ c2 & (d ^ a2)) + blocks2[3] - 1316259209;
          b = (b << 22 | b >>> 10) + c2 << 0;
        } else {
          a2 = this.h0;
          b = this.h1;
          c2 = this.h2;
          d = this.h3;
          a2 += (d ^ b & (c2 ^ d)) + blocks2[0] - 680876936;
          a2 = (a2 << 7 | a2 >>> 25) + b << 0;
          d += (c2 ^ a2 & (b ^ c2)) + blocks2[1] - 389564586;
          d = (d << 12 | d >>> 20) + a2 << 0;
          c2 += (b ^ d & (a2 ^ b)) + blocks2[2] + 606105819;
          c2 = (c2 << 17 | c2 >>> 15) + d << 0;
          b += (a2 ^ c2 & (d ^ a2)) + blocks2[3] - 1044525330;
          b = (b << 22 | b >>> 10) + c2 << 0;
        }
        a2 += (d ^ b & (c2 ^ d)) + blocks2[4] - 176418897;
        a2 = (a2 << 7 | a2 >>> 25) + b << 0;
        d += (c2 ^ a2 & (b ^ c2)) + blocks2[5] + 1200080426;
        d = (d << 12 | d >>> 20) + a2 << 0;
        c2 += (b ^ d & (a2 ^ b)) + blocks2[6] - 1473231341;
        c2 = (c2 << 17 | c2 >>> 15) + d << 0;
        b += (a2 ^ c2 & (d ^ a2)) + blocks2[7] - 45705983;
        b = (b << 22 | b >>> 10) + c2 << 0;
        a2 += (d ^ b & (c2 ^ d)) + blocks2[8] + 1770035416;
        a2 = (a2 << 7 | a2 >>> 25) + b << 0;
        d += (c2 ^ a2 & (b ^ c2)) + blocks2[9] - 1958414417;
        d = (d << 12 | d >>> 20) + a2 << 0;
        c2 += (b ^ d & (a2 ^ b)) + blocks2[10] - 42063;
        c2 = (c2 << 17 | c2 >>> 15) + d << 0;
        b += (a2 ^ c2 & (d ^ a2)) + blocks2[11] - 1990404162;
        b = (b << 22 | b >>> 10) + c2 << 0;
        a2 += (d ^ b & (c2 ^ d)) + blocks2[12] + 1804603682;
        a2 = (a2 << 7 | a2 >>> 25) + b << 0;
        d += (c2 ^ a2 & (b ^ c2)) + blocks2[13] - 40341101;
        d = (d << 12 | d >>> 20) + a2 << 0;
        c2 += (b ^ d & (a2 ^ b)) + blocks2[14] - 1502002290;
        c2 = (c2 << 17 | c2 >>> 15) + d << 0;
        b += (a2 ^ c2 & (d ^ a2)) + blocks2[15] + 1236535329;
        b = (b << 22 | b >>> 10) + c2 << 0;
        a2 += (c2 ^ d & (b ^ c2)) + blocks2[1] - 165796510;
        a2 = (a2 << 5 | a2 >>> 27) + b << 0;
        d += (b ^ c2 & (a2 ^ b)) + blocks2[6] - 1069501632;
        d = (d << 9 | d >>> 23) + a2 << 0;
        c2 += (a2 ^ b & (d ^ a2)) + blocks2[11] + 643717713;
        c2 = (c2 << 14 | c2 >>> 18) + d << 0;
        b += (d ^ a2 & (c2 ^ d)) + blocks2[0] - 373897302;
        b = (b << 20 | b >>> 12) + c2 << 0;
        a2 += (c2 ^ d & (b ^ c2)) + blocks2[5] - 701558691;
        a2 = (a2 << 5 | a2 >>> 27) + b << 0;
        d += (b ^ c2 & (a2 ^ b)) + blocks2[10] + 38016083;
        d = (d << 9 | d >>> 23) + a2 << 0;
        c2 += (a2 ^ b & (d ^ a2)) + blocks2[15] - 660478335;
        c2 = (c2 << 14 | c2 >>> 18) + d << 0;
        b += (d ^ a2 & (c2 ^ d)) + blocks2[4] - 405537848;
        b = (b << 20 | b >>> 12) + c2 << 0;
        a2 += (c2 ^ d & (b ^ c2)) + blocks2[9] + 568446438;
        a2 = (a2 << 5 | a2 >>> 27) + b << 0;
        d += (b ^ c2 & (a2 ^ b)) + blocks2[14] - 1019803690;
        d = (d << 9 | d >>> 23) + a2 << 0;
        c2 += (a2 ^ b & (d ^ a2)) + blocks2[3] - 187363961;
        c2 = (c2 << 14 | c2 >>> 18) + d << 0;
        b += (d ^ a2 & (c2 ^ d)) + blocks2[8] + 1163531501;
        b = (b << 20 | b >>> 12) + c2 << 0;
        a2 += (c2 ^ d & (b ^ c2)) + blocks2[13] - 1444681467;
        a2 = (a2 << 5 | a2 >>> 27) + b << 0;
        d += (b ^ c2 & (a2 ^ b)) + blocks2[2] - 51403784;
        d = (d << 9 | d >>> 23) + a2 << 0;
        c2 += (a2 ^ b & (d ^ a2)) + blocks2[7] + 1735328473;
        c2 = (c2 << 14 | c2 >>> 18) + d << 0;
        b += (d ^ a2 & (c2 ^ d)) + blocks2[12] - 1926607734;
        b = (b << 20 | b >>> 12) + c2 << 0;
        bc = b ^ c2;
        a2 += (bc ^ d) + blocks2[5] - 378558;
        a2 = (a2 << 4 | a2 >>> 28) + b << 0;
        d += (bc ^ a2) + blocks2[8] - 2022574463;
        d = (d << 11 | d >>> 21) + a2 << 0;
        da = d ^ a2;
        c2 += (da ^ b) + blocks2[11] + 1839030562;
        c2 = (c2 << 16 | c2 >>> 16) + d << 0;
        b += (da ^ c2) + blocks2[14] - 35309556;
        b = (b << 23 | b >>> 9) + c2 << 0;
        bc = b ^ c2;
        a2 += (bc ^ d) + blocks2[1] - 1530992060;
        a2 = (a2 << 4 | a2 >>> 28) + b << 0;
        d += (bc ^ a2) + blocks2[4] + 1272893353;
        d = (d << 11 | d >>> 21) + a2 << 0;
        da = d ^ a2;
        c2 += (da ^ b) + blocks2[7] - 155497632;
        c2 = (c2 << 16 | c2 >>> 16) + d << 0;
        b += (da ^ c2) + blocks2[10] - 1094730640;
        b = (b << 23 | b >>> 9) + c2 << 0;
        bc = b ^ c2;
        a2 += (bc ^ d) + blocks2[13] + 681279174;
        a2 = (a2 << 4 | a2 >>> 28) + b << 0;
        d += (bc ^ a2) + blocks2[0] - 358537222;
        d = (d << 11 | d >>> 21) + a2 << 0;
        da = d ^ a2;
        c2 += (da ^ b) + blocks2[3] - 722521979;
        c2 = (c2 << 16 | c2 >>> 16) + d << 0;
        b += (da ^ c2) + blocks2[6] + 76029189;
        b = (b << 23 | b >>> 9) + c2 << 0;
        bc = b ^ c2;
        a2 += (bc ^ d) + blocks2[9] - 640364487;
        a2 = (a2 << 4 | a2 >>> 28) + b << 0;
        d += (bc ^ a2) + blocks2[12] - 421815835;
        d = (d << 11 | d >>> 21) + a2 << 0;
        da = d ^ a2;
        c2 += (da ^ b) + blocks2[15] + 530742520;
        c2 = (c2 << 16 | c2 >>> 16) + d << 0;
        b += (da ^ c2) + blocks2[2] - 995338651;
        b = (b << 23 | b >>> 9) + c2 << 0;
        a2 += (c2 ^ (b | ~d)) + blocks2[0] - 198630844;
        a2 = (a2 << 6 | a2 >>> 26) + b << 0;
        d += (b ^ (a2 | ~c2)) + blocks2[7] + 1126891415;
        d = (d << 10 | d >>> 22) + a2 << 0;
        c2 += (a2 ^ (d | ~b)) + blocks2[14] - 1416354905;
        c2 = (c2 << 15 | c2 >>> 17) + d << 0;
        b += (d ^ (c2 | ~a2)) + blocks2[5] - 57434055;
        b = (b << 21 | b >>> 11) + c2 << 0;
        a2 += (c2 ^ (b | ~d)) + blocks2[12] + 1700485571;
        a2 = (a2 << 6 | a2 >>> 26) + b << 0;
        d += (b ^ (a2 | ~c2)) + blocks2[3] - 1894986606;
        d = (d << 10 | d >>> 22) + a2 << 0;
        c2 += (a2 ^ (d | ~b)) + blocks2[10] - 1051523;
        c2 = (c2 << 15 | c2 >>> 17) + d << 0;
        b += (d ^ (c2 | ~a2)) + blocks2[1] - 2054922799;
        b = (b << 21 | b >>> 11) + c2 << 0;
        a2 += (c2 ^ (b | ~d)) + blocks2[8] + 1873313359;
        a2 = (a2 << 6 | a2 >>> 26) + b << 0;
        d += (b ^ (a2 | ~c2)) + blocks2[15] - 30611744;
        d = (d << 10 | d >>> 22) + a2 << 0;
        c2 += (a2 ^ (d | ~b)) + blocks2[6] - 1560198380;
        c2 = (c2 << 15 | c2 >>> 17) + d << 0;
        b += (d ^ (c2 | ~a2)) + blocks2[13] + 1309151649;
        b = (b << 21 | b >>> 11) + c2 << 0;
        a2 += (c2 ^ (b | ~d)) + blocks2[4] - 145523070;
        a2 = (a2 << 6 | a2 >>> 26) + b << 0;
        d += (b ^ (a2 | ~c2)) + blocks2[11] - 1120210379;
        d = (d << 10 | d >>> 22) + a2 << 0;
        c2 += (a2 ^ (d | ~b)) + blocks2[2] + 718787259;
        c2 = (c2 << 15 | c2 >>> 17) + d << 0;
        b += (d ^ (c2 | ~a2)) + blocks2[9] - 343485551;
        b = (b << 21 | b >>> 11) + c2 << 0;
        if (this.first) {
          this.h0 = a2 + 1732584193 << 0;
          this.h1 = b - 271733879 << 0;
          this.h2 = c2 - 1732584194 << 0;
          this.h3 = d + 271733878 << 0;
          this.first = false;
        } else {
          this.h0 = this.h0 + a2 << 0;
          this.h1 = this.h1 + b << 0;
          this.h2 = this.h2 + c2 << 0;
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
        for (var i2 = 0; i2 < 15; ) {
          v1 = bytes[i2++];
          v2 = bytes[i2++];
          v3 = bytes[i2++];
          base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] + BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] + BASE64_ENCODE_CHAR[v3 & 63];
        }
        v1 = bytes[i2];
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
  const md5 = md5$1.exports;
  const _sfc_main$k = {
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
        page: 1,
        list: "",
        cover: [],
        flg: false,
        tags: "",
        sid: "1",
        blogid: "",
        blogSorts: [],
        swiperCurrent: 1,
        bjcontent: ""
      };
    },
    created() {
    },
    onShow() {
      var that = this;
      uni.getStorage({
        key: "apikey",
        success: function(res) {
          that.http(res.data);
        }
      });
    },
    onPullDownRefresh() {
      var that = this;
      uni.getStorage({
        key: "apikey",
        success: function(res) {
          that.http(res.data);
        }
      });
      uni.stopPullDownRefresh();
    },
    methods: {
      bjinput(e2) {
        this.bjcontent = e2.detail.value;
      },
      editBlog(e2) {
        var that = this;
        this.swiperCurrent = 1;
        setTimeout(() => {
          that.blogid = e2;
          that.getOne(e2);
        }, 1e3);
      },
      async http(key) {
        const res = await myRequest({
          url: "/content/plugins/ApiSetting/api.php",
          method: "post",
          data: {
            admin: "getAdmin",
            key
          }
        });
        if (res.data.state == 200) {
          this.flg = true;
          this.model = res.data.data;
        } else {
          this.flg = false;
        }
      },
      reblogid() {
        this.title = "";
        this.blogid = "";
        this.clear();
      },
      async getOne(e2) {
        this.arrays;
        const res = await myRequest({
          url: "/?rest-api=article_detail",
          method: "GET",
          data: {
            id: e2
          }
        });
        this.title = res.data.data.article.title;
        this.editorCtx.setContents({
          html: res.data.data.article.content
        });
      },
      swiperChangeCustom(e2) {
        this.swiperCurrent = e2.detail.current;
      },
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
      bindPickerChange: function(e2) {
        formatAppLog("log", "at pages/xia-editor/xia-editor.vue:263", "picker\u53D1\u9001\u9009\u62E9\u6539\u53D8\uFF0C\u643A\u5E26\u503C\u4E3A", this.blogSorts[e2.detail.value].sid);
        this.sort = e2.detail.value;
        this.sid = this.blogSorts[e2.detail.value].sid;
      },
      change(e2) {
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
        var md = $req_time + this.model.appkey;
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
          uni.showModal({
            title: "\u53D1\u5E03\u6210\u529F",
            content: "\u5927\u7EA630\u79D2\u540E\u5237\u65B0\u9996\u9875\u5373\u53EF",
            success() {
              uni.reLaunch({
                url: "../index/index"
              });
            }
          });
        }
        this.dataa = res.data;
      },
      async bianji() {
        var id = this.blogid;
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
        var md = $req_time + this.model.appkey;
        var $sign = md5(md);
        const res = await myRequest({
          url: "/?rest-api=article_update",
          data: {
            req_sign: $sign,
            req_time: $req_time,
            id,
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
          uni.showModal({
            title: "\u4FEE\u6539\u6210\u529F",
            content: "\u5927\u7EA630\u79D2\u540E\u5237\u65B0\u9996\u9875\u5373\u53EF",
            success() {
              uni.reLaunch({
                url: "../index/index"
              });
            }
          });
        }
        this.dataa = res.data;
      },
      async fabubj() {
        var t2 = this.bjcontent;
        var time = new Date();
        time.getFullYear();
        time.getMonth() + 1;
        time.getDate();
        time.getHours();
        time.getMinutes();
        time.getSeconds();
        var $req_time = String((time.getTime() / 1e3).toFixed(0));
        var md = $req_time + this.model.appkey;
        var $sign = md5(md);
        const res = await myRequest({
          url: "/?rest-api=note_post",
          data: {
            req_sign: $sign,
            req_time: $req_time,
            t: t2,
            author_uid: "1"
          }
        });
        if (res.data.msg == "ok") {
          uni.showModal({
            title: "\u53D1\u5E03\u6210\u529F",
            content: "\u53EF\u5728\u540E\u53F0\u67E5\u770B\u7B14\u8BB0",
            success() {
              uni.reLaunch({
                url: "../index/index"
              });
            }
          });
        }
        this.dataa = res.data;
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
      format(e2) {
        let {
          name,
          value
        } = e2.target.dataset;
        if (!name)
          return;
        this.editorCtx.format(name, value);
      },
      onStatusChange(e2) {
        const formats = e2.detail;
        this.formats = formats;
      },
      insertDivider() {
        this.editorCtx.insertDivider({
          success: function() {
            formatAppLog("log", "at pages/xia-editor/xia-editor.vue:428", "insert divider success");
          }
        });
      },
      clear() {
        this.editorCtx.clear({
          success: function(res) {
            formatAppLog("log", "at pages/xia-editor/xia-editor.vue:435", "clear success");
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
            uni.uploadFile({
              url: "https://tp.hkiii.cn/index.php/index/index/img",
              filePath: res.tempFilePaths[0],
              name: "file",
              method: "POST",
              fileType: "image",
              formData: {
                ak: that.model.qiniuak,
                sk: that.model.qiniusk,
                kj: that.model.qiniukj,
                ym: that.model.qiniuUrl
              },
              success: function(res2) {
                var data2 = JSON.parse(res2.data);
                formatAppLog("log", "at pages/xia-editor/xia-editor.vue:473", data2.data);
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
        for (var i2 = 0; i2 <= arr.length; i2++) {
          this.blogSortName.push(res.data.data.sorts[i2].sortname);
        }
        formatAppLog("log", "at pages/xia-editor/xia-editor.vue:502", this.blogSortName);
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
          this.list = [...this.list, ...res.data.data.articles];
        }
      },
      loadmany() {
        this.page = this.page + 1;
        this.blog(this.page);
      }
    },
    onLoad() {
      this.blog(1);
      this.getSorts();
      uni.loadFontFace({
        family: "Pacifico",
        source: 'url("./Pacifico.ttf")'
      });
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_list = resolveEasycom(vue.resolveDynamicComponent("list"), __easycom_0$4);
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$3);
    const _component_uni_collapse_item = resolveEasycom(vue.resolveDynamicComponent("uni-collapse-item"), __easycom_2$1);
    const _component_uni_collapse = resolveEasycom(vue.resolveDynamicComponent("uni-collapse"), __easycom_3$1);
    const _component_uni_popup_message = resolveEasycom(vue.resolveDynamicComponent("uni-popup-message"), __easycom_0$2);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", { class: "container" }, [
        vue.createElementVNode("view", { class: "tab" }, [
          vue.createElementVNode("view", {
            onClick: _cache[0] || (_cache[0] = ($event) => $data.swiperCurrent = 0),
            class: vue.normalizeClass("tab1 " + (0 == $data.swiperCurrent ? " active" : ""))
          }, "\u7F16\u8F91", 2),
          vue.createElementVNode("view", {
            onClick: _cache[1] || (_cache[1] = ($event) => $data.swiperCurrent = 1),
            class: vue.normalizeClass("tab2 " + (1 == $data.swiperCurrent ? " active" : ""))
          }, "\u6587\u7AE0", 2),
          vue.createElementVNode("view", {
            onClick: _cache[2] || (_cache[2] = ($event) => $data.swiperCurrent = 2),
            class: vue.normalizeClass("tab3 " + (2 == $data.swiperCurrent ? " active" : ""))
          }, "\u7B14\u8BB0", 2)
        ]),
        vue.createElementVNode("swiper", {
          class: "swiper",
          current: $data.swiperCurrent,
          "easing-function": "easeInOutCubic",
          circular: "true",
          duration: 500,
          onChange: _cache[34] || (_cache[34] = (...args) => $options.swiperChangeCustom && $options.swiperChangeCustom(...args))
        }, [
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("scroll-view", {
              "scroll-top": "scrollTop",
              "scroll-y": true,
              class: "scroll-Y",
              onScrolltoupper: _cache[4] || (_cache[4] = (...args) => _ctx.upper && _ctx.upper(...args)),
              onScrolltolower: _cache[5] || (_cache[5] = (...args) => _ctx.lower && _ctx.lower(...args)),
              onScroll: _cache[6] || (_cache[6] = (...args) => _ctx.scroll && _ctx.scroll(...args))
            }, [
              vue.createVNode(_component_list, {
                onEditBlog: $options.editBlog,
                List: $data.list,
                xiangqing: "\u7F16\u8F91\u6587\u7AE0",
                desc: "\u6765\u81EA\u6587\u7AE0\u5206\u7C7B:"
              }, null, 8, ["onEditBlog", "List"]),
              vue.createElementVNode("view", {
                class: "loadmany",
                onClick: _cache[3] || (_cache[3] = (...args) => $options.loadmany && $options.loadmany(...args))
              }, "---\u52A0\u8F7D\u66F4\u591A---"),
              vue.createElementVNode("view", { style: { "height": "50px" } })
            ], 32)
          ]),
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("scroll-view", {
              "scroll-top": "scrollTop",
              "scroll-y": true,
              class: "scroll-Y",
              onScrolltoupper: _cache[25] || (_cache[25] = (...args) => _ctx.upper && _ctx.upper(...args)),
              onScrolltolower: _cache[26] || (_cache[26] = (...args) => _ctx.lower && _ctx.lower(...args)),
              onScroll: _cache[27] || (_cache[27] = (...args) => _ctx.scroll && _ctx.scroll(...args))
            }, [
              vue.createElementVNode("view", { class: "page-body" }, [
                vue.createElementVNode("view", { class: "wrapper" }, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "inp-title",
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.title = $event),
                    placeholder: "\u6587\u7AE0\u6807\u9898",
                    type: "text"
                  }, null, 512), [
                    [vue.vModelText, $data.title]
                  ]),
                  vue.createElementVNode("view", {
                    class: "toolbar",
                    onClick: _cache[13] || (_cache[13] = (...args) => $options.format && $options.format(...args))
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
                      onClick: _cache[8] || (_cache[8] = (...args) => $options.undo && $options.undo(...args))
                    }),
                    vue.createElementVNode("view", {
                      class: "iconfont icon-redo",
                      onClick: _cache[9] || (_cache[9] = (...args) => $options.redo && $options.redo(...args))
                    }),
                    vue.createCommentVNode(" \u5206\u5272\u7EBF "),
                    vue.createElementVNode("view", {
                      class: "iconfont icon-fengexian",
                      onClick: _cache[10] || (_cache[10] = (...args) => $options.insertDivider && $options.insertDivider(...args))
                    }),
                    vue.createCommentVNode(" \u63D2\u5165\u56FE\u7247 "),
                    vue.createElementVNode("view", {
                      class: "iconfont icon-charutupian",
                      onClick: _cache[11] || (_cache[11] = (...args) => $options.insertImage && $options.insertImage(...args))
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
                    }, null, 2),
                    vue.createElementVNode("view", {
                      class: "iconfont icon-shanchu",
                      onClick: _cache[12] || (_cache[12] = (...args) => $options.reblogid && $options.reblogid(...args))
                    })
                  ]),
                  vue.createElementVNode("editor", {
                    onInput: _cache[14] || (_cache[14] = (...args) => $options.editText && $options.editText(...args)),
                    id: "editor",
                    class: "ql-container",
                    placeholder: $props.placeholder,
                    showImgSize: "",
                    showImgToolbar: "",
                    showImgResize: "",
                    onStatuschange: _cache[15] || (_cache[15] = (...args) => $options.onStatusChange && $options.onStatusChange(...args)),
                    "read-only": $data.readOnly,
                    onReady: _cache[16] || (_cache[16] = (...args) => $options.onEditorReady && $options.onEditorReady(...args))
                  }, null, 40, ["placeholder", "read-only"]),
                  $data.blogid ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    onClick: _cache[17] || (_cache[17] = (...args) => $options.reblogid && $options.reblogid(...args)),
                    style: { "margin": "10px 0px", "color": "brown" }
                  }, "\u5F53\u524D\u7F16\u8F91\u7684\u6587\u7AE0ID\u662F" + vue.toDisplayString($data.blogid) + "\uFF0C\u70B9\u51FB\u6E05\u7A7A\u91CD\u65B0\u7F16\u5199", 1)) : vue.createCommentVNode("v-if", true),
                  vue.createVNode(_component_uni_collapse, {
                    accordion: "",
                    modelValue: _ctx.accordionVal,
                    "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => _ctx.accordionVal = $event),
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
                              "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => $data.excerpt = $event),
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
                                    onChange: _cache[19] || (_cache[19] = (...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
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
                              "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => $data.tags = $event),
                              placeholder: "\u6587\u7AE0\u6807\u7B7E\uFF0C\u591A\u4E2A\u534A\u89D2\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1APHP,MySQL"
                            }, null, 8, ["modelValue"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onChange"]),
                  $data.flg ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
                    !$data.blogid ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "fabu",
                      onClick: _cache[22] || (_cache[22] = ($event) => $options.fabu())
                    }, "\u53D1\u5E03\u6587\u7AE0")) : vue.createCommentVNode("v-if", true),
                    $data.blogid ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "fabu",
                      onClick: _cache[23] || (_cache[23] = ($event) => $options.bianji())
                    }, "\u4FDD\u5B58\u7F16\u8F91")) : vue.createCommentVNode("v-if", true)
                  ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 2 }, [
                    vue.createElementVNode("view", {
                      class: "fabu",
                      onClick: _cache[24] || (_cache[24] = ($event) => $options.setting())
                    }, "\u6CA1\u6709\u6743\u9650\u54E6")
                  ])),
                  vue.createElementVNode("view", { style: { "height": "50px" } })
                ])
              ])
            ], 32)
          ]),
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("scroll-view", {
              "scroll-top": "scrollTop",
              "scroll-y": true,
              class: "scroll-Y",
              onScrolltoupper: _cache[31] || (_cache[31] = (...args) => _ctx.upper && _ctx.upper(...args)),
              onScrolltolower: _cache[32] || (_cache[32] = (...args) => _ctx.lower && _ctx.lower(...args)),
              onScroll: _cache[33] || (_cache[33] = (...args) => _ctx.scroll && _ctx.scroll(...args))
            }, [
              vue.createElementVNode("textarea", {
                onInput: _cache[28] || (_cache[28] = (...args) => $options.bjinput && $options.bjinput(...args)),
                class: "textarea uni-input"
              }, null, 32),
              $data.flg ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                vue.createElementVNode("view", {
                  class: "fabu",
                  onClick: _cache[29] || (_cache[29] = ($event) => $options.fabubj())
                }, "\u53D1\u5E03\u7B14\u8BB0")
              ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
                vue.createElementVNode("view", {
                  class: "fabu",
                  onClick: _cache[30] || (_cache[30] = ($event) => $options.setting())
                }, "\u6CA1\u6709\u6743\u9650\u54E6")
              ]))
            ], 32)
          ])
        ], 40, ["current"])
      ]),
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
      ])
    ], 64);
  }
  const PagesXiaEditorXiaEditor = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/pages/xia-editor/xia-editor.vue"]]);
  const block0 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("handler");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["handler"] = "2f992f8c";
  };
  const _sfc_main$j = {
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
    components: {},
    mounted() {
      this.$nextTick(() => {
        for (this.root = this.$parent; this.root.$options.name !== "mp-html"; this.root = this.root.$parent)
          ;
      });
      if (this.opts[0]) {
        let i2;
        for (i2 = this.childs.length; i2--; ) {
          if (this.childs[i2].name === "img")
            break;
        }
        if (i2 !== -1) {
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
      copyCode(e2) {
        uni.showActionSheet({
          itemList: ["\u590D\u5236\u4EE3\u7801"],
          success: () => uni.setClipboardData({
            data: e2.currentTarget.dataset.content
          })
        });
      },
      play(e2) {
        this.root.$emit("play");
      },
      imgTap(e2) {
        const node2 = this.childs[e2.currentTarget.dataset.i];
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
      imgLongTap(e2) {
        const attrs = this.childs[e2.currentTarget.dataset.i].attrs;
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
      imgLoad(e2) {
        const i2 = e2.currentTarget.dataset.i;
        if (!this.childs[i2].w) {
          this.$set(this.ctrl, i2, e2.detail.width);
        } else if (this.opts[1] && !this.ctrl[i2] || this.ctrl[i2] === -1) {
          this.$set(this.ctrl, i2, 1);
        }
        this.checkReady();
      },
      checkReady() {
        if (!this.root.lazyLoad) {
          this.root._unloadimgs -= 1;
          if (!this.root._unloadimgs) {
            setTimeout(() => {
              this.root.getRect().then((rect) => {
                this.root.$emit("ready", rect);
              }).catch(() => {
                this.root.$emit("ready", {});
              });
            }, 350);
          }
        }
      },
      linkTap(e2) {
        const node2 = e2.currentTarget ? this.childs[e2.currentTarget.dataset.i] : {};
        const attrs = node2.attrs || e2;
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
      mediaError(e2) {
        const i2 = e2.currentTarget.dataset.i;
        const node2 = this.childs[i2];
        if (node2.name === "video" || node2.name === "audio") {
          let index2 = (this.ctrl[i2] || 0) + 1;
          if (index2 > node2.src.length) {
            index2 = 0;
          }
          if (index2 < node2.src.length) {
            this.$set(this.ctrl, i2, index2);
            return;
          }
        } else if (node2.name === "img") {
          if (this.opts[2]) {
            this.$set(this.ctrl, i2, -1);
          }
          this.checkReady();
        }
        if (this.root) {
          this.root.$emit("error", {
            source: node2.name,
            attrs: node2.attrs,
            errMsg: e2.detail.errMsg
          });
        }
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_node = vue.resolveComponent("node", true);
    return vue.openBlock(), vue.createElementBlock("view", {
      id: $props.attrs.id,
      class: vue.normalizeClass("_block _" + $props.name + " " + $props.attrs.class),
      style: vue.normalizeStyle($props.attrs.style)
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.childs, (n2, i2) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: i2 }, [
          vue.createCommentVNode(" \u56FE\u7247 "),
          vue.createCommentVNode(" \u5360\u4F4D\u56FE "),
          n2.name === "img" && !n2.t && ($props.opts[1] && !$data.ctrl[i2] || $data.ctrl[i2] < 0) ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 0,
            class: "_img",
            style: vue.normalizeStyle(n2.attrs.style),
            src: $data.ctrl[i2] < 0 ? $props.opts[2] : $props.opts[1],
            mode: "widthFix"
          }, null, 12, ["src"])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" \u663E\u793A\u56FE\u7247 "),
          vue.createCommentVNode(" \u8868\u683C\u4E2D\u7684\u56FE\u7247\uFF0C\u4F7F\u7528 rich-text \u9632\u6B62\u5927\u5C0F\u4E0D\u6B63\u786E "),
          n2.name === "img" && n2.t ? (vue.openBlock(), vue.createElementBlock("rich-text", {
            key: 1,
            style: vue.normalizeStyle("display:" + n2.t),
            nodes: "<img class='_img' style='" + n2.attrs.style + "' src='" + n2.attrs.src + "'>",
            "data-i": i2,
            onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.imgTap && $options.imgTap(...args), ["stop"]))
          }, null, 12, ["nodes", "data-i"])) : n2.name === "img" ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 2,
            id: n2.attrs.id,
            class: vue.normalizeClass("_img " + n2.attrs.class),
            style: vue.normalizeStyle(($data.ctrl[i2] === -1 ? "display:none;" : "") + "width:" + ($data.ctrl[i2] || 1) + "px;" + n2.attrs.style),
            src: n2.attrs.src || ($data.ctrl.load ? n2.attrs["data-src"] : ""),
            mode: !n2.h ? "widthFix" : !n2.w ? "heightFix" : "",
            "data-i": i2,
            onLoad: _cache[1] || (_cache[1] = (...args) => $options.imgLoad && $options.imgLoad(...args)),
            onError: _cache[2] || (_cache[2] = (...args) => $options.mediaError && $options.mediaError(...args)),
            onClick: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.imgTap && $options.imgTap(...args), ["stop"])),
            onLongpress: _cache[4] || (_cache[4] = (...args) => $options.imgLongTap && $options.imgLongTap(...args))
          }, null, 46, ["id", "src", "mode", "data-i"])) : n2.text ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 3 }, [
            vue.createCommentVNode(" \u6587\u672C "),
            vue.createElementVNode("text", { decode: "" }, vue.toDisplayString(n2.text), 1)
          ], 2112)) : n2.name === "br" ? (vue.openBlock(), vue.createElementBlock("text", { key: 4 }, "\\n")) : n2.name === "a" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 5 }, [
            vue.createCommentVNode(" \u94FE\u63A5 "),
            vue.createElementVNode("view", {
              id: n2.attrs.id,
              class: vue.normalizeClass((n2.attrs.href ? "_a " : "") + n2.attrs.class),
              "hover-class": "_hover",
              style: vue.normalizeStyle("display:inline;" + n2.attrs.style),
              "data-i": i2,
              onClick: _cache[5] || (_cache[5] = vue.withModifiers((...args) => $options.linkTap && $options.linkTap(...args), ["stop"]))
            }, [
              vue.createVNode(_component_node, {
                name: "span",
                childs: n2.children,
                opts: $props.opts,
                style: { "display": "inherit" }
              }, null, 8, ["childs", "opts"])
            ], 14, ["id", "data-i"])
          ], 2112)) : n2.html ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 6 }, [
            vue.createCommentVNode(" \u89C6\u9891 "),
            vue.createElementVNode("view", {
              id: n2.attrs.id,
              class: vue.normalizeClass("_video " + n2.attrs.class),
              style: vue.normalizeStyle(n2.attrs.style),
              innerHTML: n2.html,
              onVplay: _cache[6] || (_cache[6] = vue.withModifiers((...args) => $options.play && $options.play(...args), ["stop"]))
            }, null, 46, ["id", "innerHTML"])
          ], 2112)) : n2.name === "iframe" ? (vue.openBlock(), vue.createElementBlock("iframe", {
            key: 7,
            style: vue.normalizeStyle(n2.attrs.style),
            allowfullscreen: n2.attrs.allowfullscreen,
            frameborder: n2.attrs.frameborder,
            src: n2.attrs.src
          }, null, 12, ["allowfullscreen", "frameborder", "src"])) : n2.name === "embed" ? (vue.openBlock(), vue.createElementBlock("embed", {
            key: 8,
            style: vue.normalizeStyle(n2.attrs.style),
            src: n2.attrs.src
          }, null, 12, ["src"])) : n2.name === "table" && n2.c || n2.name === "li" ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 9,
            id: n2.attrs.id,
            class: vue.normalizeClass("_" + n2.name + " " + n2.attrs.class),
            style: vue.normalizeStyle(n2.attrs.style)
          }, [
            n2.name === "li" ? (vue.openBlock(), vue.createBlock(_component_node, {
              key: 0,
              childs: n2.children,
              opts: $props.opts
            }, null, 8, ["childs", "opts"])) : (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList(n2.children, (tbody, x) => {
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
          ], 14, ["id"])) : n2.attrs && n2.attrs["data-content"] ? (vue.openBlock(), vue.createElementBlock("rich-text", {
            key: 10,
            nodes: [n2],
            "data-content": n2.attrs["data-content"],
            "data-lang": n2.attrs["data-lang"],
            onLongpress: _cache[7] || (_cache[7] = (...args) => $options.copyCode && $options.copyCode(...args))
          }, null, 40, ["nodes", "data-content", "data-lang"])) : !n2.c ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 11 }, [
            vue.createCommentVNode(" \u5BCC\u6587\u672C "),
            vue.createElementVNode("rich-text", {
              id: n2.attrs.id,
              style: vue.normalizeStyle(n2.f + ";display:inline"),
              preview: false,
              selectable: $props.opts[4],
              "user-select": $props.opts[4],
              nodes: [n2]
            }, null, 12, ["id", "selectable", "user-select", "nodes"])
          ], 2112)) : n2.c === 2 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 12 }, [
            vue.createCommentVNode(" \u7EE7\u7EED\u9012\u5F52 "),
            vue.createElementVNode("view", {
              id: n2.attrs.id,
              class: vue.normalizeClass("_block _" + n2.name + " " + n2.attrs.class),
              style: vue.normalizeStyle(n2.f + ";" + n2.attrs.style)
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(n2.children, (n22, j) => {
                return vue.openBlock(), vue.createBlock(_component_node, {
                  key: j,
                  style: vue.normalizeStyle(n22.f),
                  name: n22.name,
                  attrs: n22.attrs,
                  childs: n22.children,
                  opts: $props.opts
                }, null, 8, ["style", "name", "attrs", "childs", "opts"]);
              }), 128))
            ], 14, ["id"])
          ], 2112)) : (vue.openBlock(), vue.createBlock(_component_node, {
            key: 13,
            style: vue.normalizeStyle(n2.f),
            name: n2.name,
            attrs: n2.attrs,
            childs: n2.children,
            opts: $props.opts
          }, null, 8, ["style", "name", "attrs", "childs", "opts"]))
        ], 64);
      }), 128))
    ], 14, ["id"]);
  }
  if (typeof block0 === "function")
    block0(_sfc_main$j);
  const node = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-8845ff2f"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/uni_modules/mp-html/components/mp-html/node/node.vue"]]);
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
    for (let i2 = list.length; i2--; ) {
      map[list[i2]] = true;
    }
    return map;
  }
  function decodeEntity(str, amp) {
    let i2 = str.indexOf("&");
    while (i2 !== -1) {
      const j = str.indexOf(";", i2 + 3);
      let code;
      if (j === -1)
        break;
      if (str[i2 + 1] === "#") {
        code = parseInt((str[i2 + 2] === "x" ? "0" : "") + str.substring(i2 + 2, j));
        if (!isNaN(code)) {
          str = str.substr(0, i2) + String.fromCharCode(code) + str.substr(j + 1);
        }
      } else {
        code = str.substring(i2 + 1, j);
        if (config.entities[code] || code === "amp" && amp) {
          str = str.substr(0, i2) + (config.entities[code] || "&") + str.substr(j + 1);
        }
      }
      i2 = str.indexOf("&", i2 + 1);
    }
    return str;
  }
  function mergeNodes(nodes) {
    let i2 = nodes.length - 1;
    for (let j = i2; j >= -1; j--) {
      if (j === -1 || nodes[j].c || !nodes[j].name || nodes[j].name !== "div" && nodes[j].name !== "p" && nodes[j].name[0] !== "h" || (nodes[j].attrs.style || "").includes("inline")) {
        if (i2 - j >= 5) {
          nodes.splice(j + 1, i2 - j, {
            name: "div",
            attrs: {},
            children: nodes.slice(j + 1, i2 + 1)
          });
        }
        i2 = j - 1;
      }
    }
  }
  function Parser$1(vm) {
    this.options = vm || {};
    this.tagStyle = Object.assign({}, config.tagStyle, this.options.tagStyle);
    this.imgList = vm.imgList || [];
    this.imgList._unloadimgs = 0;
    this.plugins = vm.plugins || [];
    this.attrs = /* @__PURE__ */ Object.create(null);
    this.stack = [];
    this.nodes = [];
    this.pre = (this.options.containerStyle || "").includes("white-space") && this.options.containerStyle.includes("pre") ? 2 : 0;
  }
  Parser$1.prototype.parse = function(content) {
    for (let i2 = this.plugins.length; i2--; ) {
      if (this.plugins[i2].onUpdate) {
        content = this.plugins[i2].onUpdate(content, config) || content;
      }
    }
    new Lexer$1(this).parse(content);
    while (this.stack.length) {
      this.popNode();
    }
    if (this.nodes.length > 50) {
      mergeNodes(this.nodes);
    }
    return this.nodes;
  };
  Parser$1.prototype.expose = function() {
    for (let i2 = this.stack.length; i2--; ) {
      const item = this.stack[i2];
      if (item.c || item.name === "a" || item.name === "video" || item.name === "audio")
        return;
      item.c = 1;
    }
  };
  Parser$1.prototype.hook = function(node2) {
    for (let i2 = this.plugins.length; i2--; ) {
      if (this.plugins[i2].onParse && this.plugins[i2].onParse(node2, this) === false) {
        return false;
      }
    }
    return true;
  };
  Parser$1.prototype.getUrl = function(url2) {
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
  Parser$1.prototype.parseStyle = function(node2) {
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
    for (let i2 = 0, len = list.length; i2 < len; i2++) {
      const info = list[i2].split(":");
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
  Parser$1.prototype.onTagName = function(name) {
    this.tagName = this.xml ? name : name.toLowerCase();
    if (this.tagName === "svg") {
      this.xml = (this.xml || 0) + 1;
    }
  };
  Parser$1.prototype.onAttrName = function(name) {
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
  Parser$1.prototype.onAttrVal = function(val) {
    const name = this.attrName || "";
    if (name === "style" || name === "href") {
      this.attrs[name] = decodeEntity(val, true);
    } else if (name.includes("src")) {
      this.attrs[name] = this.getUrl(decodeEntity(val, true));
    } else if (name) {
      this.attrs[name] = val;
    }
  };
  Parser$1.prototype.onOpenTag = function(selfClose) {
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
            for (let i2 = this.stack.length; i2--; ) {
              const item = this.stack[i2];
              if (item.name === "a") {
                node2.a = item.attrs;
              }
              if (item.name === "table" && !node2.webp && !attrs.src.includes("cloud://")) {
                if (!styleObj.display || styleObj.display.includes("inline")) {
                  node2.t = "inline-block";
                } else {
                  node2.t = styleObj.display;
                }
                styleObj.display = void 0;
              }
              item.c = 1;
            }
            attrs.i = this.imgList.length.toString();
            let src = attrs["original-src"] || attrs.src;
            this.imgList.push(src);
            if (!node2.t) {
              this.imgList._unloadimgs += 1;
            }
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
  Parser$1.prototype.onCloseTag = function(name) {
    name = this.xml ? name : name.toLowerCase();
    let i2;
    for (i2 = this.stack.length; i2--; ) {
      if (this.stack[i2].name === name)
        break;
    }
    if (i2 !== -1) {
      while (this.stack.length > i2) {
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
  Parser$1.prototype.popNode = function() {
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
      for (let i2 = this.stack.length; i2--; ) {
        if (this.stack[i2].pre) {
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
          for (let i2 = 0; i2 < node3.children.length; i2++) {
            traversal(node3.children[i2]);
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
      for (let i2 = 0; i2 < node2.src.length; i2++) {
        str += '<source src="' + node2.src[i2] + '">';
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
      for (let i2 = children.length; i2--; ) {
        if (children[i2].name === "li") {
          children[i2].c = 1;
        }
      }
    } else if (node2.name === "table") {
      let padding = parseFloat(attrs.cellpadding);
      let spacing = parseFloat(attrs.cellspacing);
      const border = parseFloat(attrs.border);
      const bordercolor = styleObj["border-color"];
      const borderstyle = styleObj["border-style"];
      if (node2.c) {
        if (isNaN(padding)) {
          padding = 2;
        }
        if (isNaN(spacing)) {
          spacing = 2;
        }
      }
      if (border) {
        attrs.style += `;border:${border}px ${borderstyle || "solid"} ${bordercolor || "gray"}`;
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
          for (let i2 = 0; i2 < nodes.length; i2++) {
            if (nodes[i2].name === "tr") {
              trList.push(nodes[i2]);
            } else {
              traversal(nodes[i2].children || []);
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
              let start = style.indexOf("width") ? style.indexOf(";width") : 0;
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
              style += ";display:flex";
              start = style.indexOf("vertical-align");
              if (start !== -1) {
                const val = style.substr(start + 15, 10);
                if (val.includes("middle")) {
                  style += ";align-items:center";
                } else if (val.includes("bottom")) {
                  style += ";align-items:flex-end";
                }
              } else {
                style += ";align-items:center";
              }
              start = style.indexOf("text-align");
              if (start !== -1) {
                const val = style.substr(start + 11, 10);
                if (val.includes("center")) {
                  style += ";justify-content: center";
                } else if (val.includes("right")) {
                  style += ";justify-content: right";
                }
              }
              style = (border ? `;border:${border}px ${borderstyle || "solid"} ${bordercolor || "gray"}` + (spacing ? "" : ";border-right:0;border-bottom:0") : "") + (padding ? `;padding:${padding}px` : "") + ";" + style;
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
            for (let i2 = 1; i2 < col; i2++) {
              temp += (width[i2] ? width[i2] : "auto") + " ";
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
            for (let i2 = 0; i2 < nodes.length; i2++) {
              const td = nodes[i2];
              if (td.name === "th" || td.name === "td") {
                if (border) {
                  td.attrs.style = `border:${border}px ${borderstyle || "solid"} ${bordercolor || "gray"};${td.attrs.style || ""}`;
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
      for (let i2 = this.stack.length; i2--; ) {
        if (this.stack[i2].name === "table") {
          this.stack[i2].flag = 1;
          break;
        }
      }
    } else if (node2.name === "ruby") {
      node2.name = "span";
      for (let i2 = 0; i2 < children.length - 1; i2++) {
        if (children[i2].type === "text" && children[i2 + 1].name === "rt") {
          children[i2] = {
            name: "div",
            attrs: {
              style: "display:inline-block;text-align:center"
            },
            children: [{
              name: "div",
              attrs: {
                style: "font-size:50%;" + (children[i2 + 1].attrs.style || "")
              },
              children: children[i2 + 1].children
            }, children[i2]]
          };
          children.splice(i2 + 1, 1);
        }
      }
    } else if (node2.c) {
      (function traversal(node3) {
        node3.c = 2;
        for (let i2 = node3.children.length; i2--; ) {
          const child = node3.children[i2];
          if (child.name && (config.inlineTags[child.name] || (child.attrs.style || "").includes("inline") && child.children) && !child.c) {
            traversal(child);
          }
          if (!child.c || child.name === "table") {
            node3.c = 1;
          }
        }
      })(node2);
    }
    if ((styleObj.display || "").includes("flex") && !node2.c) {
      for (let i2 = children.length; i2--; ) {
        const item = children[i2];
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
      mergeNodes(children);
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
  Parser$1.prototype.onText = function(text) {
    if (!this.pre) {
      let trim = "";
      let flag;
      for (let i2 = 0, len = text.length; i2 < len; i2++) {
        if (!blankChar[text[i2]]) {
          trim += text[i2];
        } else {
          if (trim[trim.length - 1] !== " ") {
            trim += " ";
          }
          if (text[i2] === "\n" && !flag) {
            flag = true;
          }
        }
      }
      if (trim === " ") {
        if (flag)
          return;
        else {
          const parent = this.stack[this.stack.length - 1];
          if (parent && parent.name[0] === "t")
            return;
        }
      }
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
  function Lexer$1(handler) {
    this.handler = handler;
  }
  Lexer$1.prototype.parse = function(content) {
    this.content = content || "";
    this.i = 0;
    this.start = 0;
    this.state = this.text;
    for (let len = this.content.length; this.i !== -1 && this.i < len; ) {
      this.state();
    }
  };
  Lexer$1.prototype.checkClose = function(method2) {
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
  Lexer$1.prototype.text = function() {
    this.i = this.content.indexOf("<", this.i);
    if (this.i === -1) {
      if (this.start < this.content.length) {
        this.handler.onText(this.content.substring(this.start, this.content.length));
      }
      return;
    }
    const c2 = this.content[this.i + 1];
    if (c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z") {
      if (this.start !== this.i) {
        this.handler.onText(this.content.substring(this.start, this.i));
      }
      this.start = ++this.i;
      this.state = this.tagName;
    } else if (c2 === "/" || c2 === "!" || c2 === "?") {
      if (this.start !== this.i) {
        this.handler.onText(this.content.substring(this.start, this.i));
      }
      const next = this.content[this.i + 2];
      if (c2 === "/" && (next >= "a" && next <= "z" || next >= "A" && next <= "Z")) {
        this.i += 2;
        this.start = this.i;
        this.state = this.endTag;
        return;
      }
      let end = "-->";
      if (c2 !== "!" || this.content[this.i + 2] !== "-" || this.content[this.i + 3] !== "-") {
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
  Lexer$1.prototype.tagName = function() {
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
  Lexer$1.prototype.attrName = function() {
    let c2 = this.content[this.i];
    if (blankChar[c2] || c2 === "=") {
      this.handler.onAttrName(this.content.substring(this.start, this.i));
      let needVal = c2 === "=";
      const len = this.content.length;
      while (++this.i < len) {
        c2 = this.content[this.i];
        if (!blankChar[c2]) {
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
  Lexer$1.prototype.attrVal = function() {
    const c2 = this.content[this.i];
    const len = this.content.length;
    if (c2 === '"' || c2 === "'") {
      this.start = ++this.i;
      this.i = this.content.indexOf(c2, this.i);
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
  Lexer$1.prototype.endTag = function() {
    const c2 = this.content[this.i];
    if (blankChar[c2] || c2 === ">" || c2 === "/") {
      this.handler.onCloseTag(this.content.substring(this.start, this.i));
      if (c2 !== ">") {
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
  function t$1() {
    function i2(e3, t3) {
      for (var n3 = 0; n3 < t3.length; n3++) {
        var r3 = t3[n3];
        r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
      }
    }
    function s(e3, t3) {
      (null == t3 || t3 > e3.length) && (t3 = e3.length);
      for (var n3 = 0, r3 = new Array(t3); n3 < t3; n3++)
        r3[n3] = e3[n3];
      return r3;
    }
    function p(e3, t3) {
      var n3;
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator])
        return (n3 = e3[Symbol.iterator]()).next.bind(n3);
      if (Array.isArray(e3) || (n3 = function(e4, t4) {
        if (e4) {
          if ("string" == typeof e4)
            return s(e4, t4);
          var n4 = Object.prototype.toString.call(e4).slice(8, -1);
          return "Object" === n4 && e4.constructor && (n4 = e4.constructor.name), "Map" === n4 || "Set" === n4 ? Array.from(e4) : "Arguments" === n4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? s(e4, t4) : void 0;
        }
      }(e3)) || t3 && e3 && "number" == typeof e3.length) {
        n3 && (e3 = n3);
        var r3 = 0;
        return function() {
          return r3 >= e3.length ? { done: true } : { done: false, value: e3[r3++] };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function n2(e3) {
      return c2[e3];
    }
    var e2, t2 = (function(t3) {
      function e3() {
        return { baseUrl: null, breaks: false, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartLists: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
      }
      t3.exports = { defaults: e3(), getDefaults: e3, changeDefaults: function(e4) {
        t3.exports.defaults = e4;
      } };
    }(e2 = { exports: {} }), e2.exports), r2 = (t2.defaults, t2.getDefaults, t2.changeDefaults, /[&<>"']/), l = /[&<>"']/g, a2 = /[<>"']|&(?!#?\w+;)/, o2 = /[<>"']|&(?!#?\w+;)/g, c2 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    var u2 = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
    function h(e3) {
      return e3.replace(u2, function(e4, t3) {
        return "colon" === (t3 = t3.toLowerCase()) ? ":" : "#" === t3.charAt(0) ? "x" === t3.charAt(1) ? String.fromCharCode(parseInt(t3.substring(2), 16)) : String.fromCharCode(+t3.substring(1)) : "";
      });
    }
    var g = /(^|[^\[])\^/g;
    var f = /[^\w:]/g, d = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
    var k = {}, b = /^[^:]+:\/*[^/]*$/, m = /^([^:]+:)[\s\S]*$/, x = /^([^:]+:\/*[^/]*)[\s\S]*$/;
    function w(e3, t3) {
      k[" " + e3] || (b.test(e3) ? k[" " + e3] = e3 + "/" : k[" " + e3] = v(e3, "/", true));
      var n3 = -1 === (e3 = k[" " + e3]).indexOf(":");
      return "//" === t3.substring(0, 2) ? n3 ? t3 : e3.replace(m, "$1") + t3 : "/" === t3.charAt(0) ? n3 ? t3 : e3.replace(x, "$1") + t3 : e3 + t3;
    }
    function v(e3, t3, n3) {
      var r3 = e3.length;
      if (0 === r3)
        return "";
      for (var i3 = 0; i3 < r3; ) {
        var s2 = e3.charAt(r3 - i3 - 1);
        if (s2 !== t3 || n3) {
          if (s2 === t3 || !n3)
            break;
          i3++;
        } else
          i3++;
      }
      return e3.substr(0, r3 - i3);
    }
    var _ = function(e3, t3) {
      if (t3) {
        if (r2.test(e3))
          return e3.replace(l, n2);
      } else if (a2.test(e3))
        return e3.replace(o2, n2);
      return e3;
    }, y = h, z = function(n3, e3) {
      n3 = n3.source || n3, e3 = e3 || "";
      var r3 = { replace: function(e4, t3) {
        return t3 = (t3 = t3.source || t3).replace(g, "$1"), n3 = n3.replace(e4, t3), r3;
      }, getRegex: function() {
        return new RegExp(n3, e3);
      } };
      return r3;
    }, S = function(e3, t3, n3) {
      if (e3) {
        var r3;
        try {
          r3 = decodeURIComponent(h(n3)).replace(f, "").toLowerCase();
        } catch (e4) {
          return null;
        }
        if (0 === r3.indexOf("javascript:") || 0 === r3.indexOf("vbscript:") || 0 === r3.indexOf("data:"))
          return null;
      }
      t3 && !d.test(n3) && (n3 = w(t3, n3));
      try {
        n3 = encodeURI(n3).replace(/%25/g, "%");
      } catch (e4) {
        return null;
      }
      return n3;
    }, $ = { exec: function() {
    } }, A = function(e3) {
      for (var t3, n3, r3 = 1; r3 < arguments.length; r3++)
        for (n3 in t3 = arguments[r3])
          Object.prototype.hasOwnProperty.call(t3, n3) && (e3[n3] = t3[n3]);
      return e3;
    }, R = function(e3, t3) {
      var n3 = e3.replace(/\|/g, function(e4, t4, n4) {
        for (var r4 = false, i3 = t4; 0 <= --i3 && "\\" === n4[i3]; )
          r4 = !r4;
        return r4 ? "|" : " |";
      }).split(/ \|/), r3 = 0;
      if (n3.length > t3)
        n3.splice(t3);
      else
        for (; n3.length < t3; )
          n3.push("");
      for (; r3 < n3.length; r3++)
        n3[r3] = n3[r3].trim().replace(/\\\|/g, "|");
      return n3;
    }, T = function(e3, t3) {
      if (-1 === e3.indexOf(t3[1]))
        return -1;
      for (var n3 = e3.length, r3 = 0, i3 = 0; i3 < n3; i3++)
        if ("\\" === e3[i3])
          i3++;
        else if (e3[i3] === t3[0])
          r3++;
        else if (e3[i3] === t3[1] && --r3 < 0)
          return i3;
      return -1;
    }, I = function(e3) {
      e3 && e3.sanitize && !e3.silent && formatAppLog("warn", "at uni_modules/mp-html/components/mp-html/markdown/marked.min.js:6", "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
    }, Z = function(e3, t3) {
      if (t3 < 1)
        return "";
      for (var n3 = ""; 1 < t3; )
        1 & t3 && (n3 += e3), t3 >>= 1, e3 += e3;
      return n3 + e3;
    }, q = t2.defaults, O = v, C = R, U = _, j = T;
    function E(e3, t3, n3) {
      var r3 = t3.href, i3 = t3.title ? U(t3.title) : null, t3 = e3[1].replace(/\\([\[\]])/g, "$1");
      return "!" !== e3[0].charAt(0) ? { type: "link", raw: n3, href: r3, title: i3, text: t3 } : { type: "image", raw: n3, href: r3, title: i3, text: U(t3) };
    }
    var D = function() {
      function e3(e4) {
        this.options = e4 || q;
      }
      var t3 = e3.prototype;
      return t3.space = function(e4) {
        e4 = this.rules.block.newline.exec(e4);
        if (e4)
          return 1 < e4[0].length ? { type: "space", raw: e4[0] } : { raw: "\n" };
      }, t3.code = function(e4, t4) {
        e4 = this.rules.block.code.exec(e4);
        if (e4) {
          t4 = t4[t4.length - 1];
          if (t4 && "paragraph" === t4.type)
            return { raw: e4[0], text: e4[0].trimRight() };
          t4 = e4[0].replace(/^ {4}/gm, "");
          return { type: "code", raw: e4[0], codeBlockStyle: "indented", text: this.options.pedantic ? t4 : O(t4, "\n") };
        }
      }, t3.fences = function(e4) {
        var t4 = this.rules.block.fences.exec(e4);
        if (t4) {
          var n3 = t4[0], e4 = function(e5, t5) {
            if (null === (e5 = e5.match(/^(\s+)(?:```)/)))
              return t5;
            var n4 = e5[1];
            return t5.split("\n").map(function(e6) {
              var t6 = e6.match(/^\s+/);
              return null !== t6 && t6[0].length >= n4.length ? e6.slice(n4.length) : e6;
            }).join("\n");
          }(n3, t4[3] || "");
          return { type: "code", raw: n3, lang: t4[2] && t4[2].trim(), text: e4 };
        }
      }, t3.heading = function(e4) {
        e4 = this.rules.block.heading.exec(e4);
        if (e4)
          return { type: "heading", raw: e4[0], depth: e4[1].length, text: e4[2] };
      }, t3.nptable = function(e4) {
        e4 = this.rules.block.nptable.exec(e4);
        if (e4) {
          var t4 = { type: "table", header: C(e4[1].replace(/^ *| *\| *$/g, "")), align: e4[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: e4[3] ? e4[3].replace(/\n$/, "").split("\n") : [], raw: e4[0] };
          if (t4.header.length === t4.align.length) {
            for (var n3 = t4.align.length, r3 = 0; r3 < n3; r3++)
              /^ *-+: *$/.test(t4.align[r3]) ? t4.align[r3] = "right" : /^ *:-+: *$/.test(t4.align[r3]) ? t4.align[r3] = "center" : /^ *:-+ *$/.test(t4.align[r3]) ? t4.align[r3] = "left" : t4.align[r3] = null;
            for (n3 = t4.cells.length, r3 = 0; r3 < n3; r3++)
              t4.cells[r3] = C(t4.cells[r3], t4.header.length);
            return t4;
          }
        }
      }, t3.hr = function(e4) {
        e4 = this.rules.block.hr.exec(e4);
        if (e4)
          return { type: "hr", raw: e4[0] };
      }, t3.blockquote = function(e4) {
        var t4 = this.rules.block.blockquote.exec(e4);
        if (t4) {
          e4 = t4[0].replace(/^ *> ?/gm, "");
          return { type: "blockquote", raw: t4[0], text: e4 };
        }
      }, t3.list = function(e4) {
        e4 = this.rules.block.list.exec(e4);
        if (e4) {
          for (var t4, n3, r3, i3, s2, l2 = e4[0], a3 = e4[2], o3 = 1 < a3.length, c3 = { type: "list", raw: l2, ordered: o3, start: o3 ? +a3.slice(0, -1) : "", loose: false, items: [] }, u3 = e4[0].match(this.rules.block.item), p2 = false, h2 = u3.length, g2 = this.rules.block.listItemStart.exec(u3[0]), f2 = 0; f2 < h2; f2++) {
            if (l2 = t4 = u3[f2], f2 !== h2 - 1) {
              if ((r3 = this.rules.block.listItemStart.exec(u3[f2 + 1]))[1].length > g2[0].length || 3 < r3[1].length) {
                u3.splice(f2, 2, u3[f2] + "\n" + u3[f2 + 1]), f2--, h2--;
                continue;
              }
              (!this.options.pedantic || this.options.smartLists ? r3[2][r3[2].length - 1] !== a3[a3.length - 1] : o3 == (1 === r3[2].length)) && (n3 = u3.slice(f2 + 1).join("\n"), c3.raw = c3.raw.substring(0, c3.raw.length - n3.length), f2 = h2 - 1), g2 = r3;
            }
            r3 = t4.length, ~(t4 = t4.replace(/^ *([*+-]|\d+[.)]) ?/, "")).indexOf("\n ") && (r3 -= t4.length, t4 = this.options.pedantic ? t4.replace(/^ {1,4}/gm, "") : t4.replace(new RegExp("^ {1," + r3 + "}", "gm"), "")), r3 = p2 || /\n\n(?!\s*$)/.test(t4), f2 !== h2 - 1 && (p2 = "\n" === t4.charAt(t4.length - 1), r3 = r3 || p2), r3 && (c3.loose = true), this.options.gfm && (s2 = void 0, (i3 = /^\[[ xX]\] /.test(t4)) && (s2 = " " !== t4[1], t4 = t4.replace(/^\[[ xX]\] +/, ""))), c3.items.push({ type: "list_item", raw: l2, task: i3, checked: s2, loose: r3, text: t4 });
          }
          return c3;
        }
      }, t3.html = function(e4) {
        e4 = this.rules.block.html.exec(e4);
        if (e4)
          return { type: this.options.sanitize ? "paragraph" : "html", raw: e4[0], pre: !this.options.sanitizer && ("pre" === e4[1] || "script" === e4[1] || "style" === e4[1]), text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e4[0]) : U(e4[0]) : e4[0] };
      }, t3.def = function(e4) {
        e4 = this.rules.block.def.exec(e4);
        if (e4)
          return e4[3] && (e4[3] = e4[3].substring(1, e4[3].length - 1)), { tag: e4[1].toLowerCase().replace(/\s+/g, " "), raw: e4[0], href: e4[2], title: e4[3] };
      }, t3.table = function(e4) {
        e4 = this.rules.block.table.exec(e4);
        if (e4) {
          var t4 = { type: "table", header: C(e4[1].replace(/^ *| *\| *$/g, "")), align: e4[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: e4[3] ? e4[3].replace(/\n$/, "").split("\n") : [] };
          if (t4.header.length === t4.align.length) {
            t4.raw = e4[0];
            for (var n3 = t4.align.length, r3 = 0; r3 < n3; r3++)
              /^ *-+: *$/.test(t4.align[r3]) ? t4.align[r3] = "right" : /^ *:-+: *$/.test(t4.align[r3]) ? t4.align[r3] = "center" : /^ *:-+ *$/.test(t4.align[r3]) ? t4.align[r3] = "left" : t4.align[r3] = null;
            for (n3 = t4.cells.length, r3 = 0; r3 < n3; r3++)
              t4.cells[r3] = C(t4.cells[r3].replace(/^ *\| *| *\| *$/g, ""), t4.header.length);
            return t4;
          }
        }
      }, t3.lheading = function(e4) {
        e4 = this.rules.block.lheading.exec(e4);
        if (e4)
          return { type: "heading", raw: e4[0], depth: "=" === e4[2].charAt(0) ? 1 : 2, text: e4[1] };
      }, t3.paragraph = function(e4) {
        e4 = this.rules.block.paragraph.exec(e4);
        if (e4)
          return { type: "paragraph", raw: e4[0], text: "\n" === e4[1].charAt(e4[1].length - 1) ? e4[1].slice(0, -1) : e4[1] };
      }, t3.text = function(e4, t4) {
        e4 = this.rules.block.text.exec(e4);
        if (e4) {
          t4 = t4[t4.length - 1];
          return t4 && "text" === t4.type ? { raw: e4[0], text: e4[0] } : { type: "text", raw: e4[0], text: e4[0] };
        }
      }, t3.escape = function(e4) {
        e4 = this.rules.inline.escape.exec(e4);
        if (e4)
          return { type: "escape", raw: e4[0], text: U(e4[1]) };
      }, t3.tag = function(e4, t4, n3) {
        e4 = this.rules.inline.tag.exec(e4);
        if (e4)
          return !t4 && /^<a /i.test(e4[0]) ? t4 = true : t4 && /^<\/a>/i.test(e4[0]) && (t4 = false), !n3 && /^<(pre|code|kbd|script)(\s|>)/i.test(e4[0]) ? n3 = true : n3 && /^<\/(pre|code|kbd|script)(\s|>)/i.test(e4[0]) && (n3 = false), { type: this.options.sanitize ? "text" : "html", raw: e4[0], inLink: t4, inRawBlock: n3, text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e4[0]) : U(e4[0]) : e4[0] };
      }, t3.link = function(e4) {
        var t4 = this.rules.inline.link.exec(e4);
        if (t4) {
          e4 = j(t4[2], "()");
          -1 < e4 && (r3 = (0 === t4[0].indexOf("!") ? 5 : 4) + t4[1].length + e4, t4[2] = t4[2].substring(0, e4), t4[0] = t4[0].substring(0, r3).trim(), t4[3] = "");
          var n3, e4 = t4[2], r3 = "";
          return r3 = this.options.pedantic ? (n3 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(e4), n3 ? (e4 = n3[1], n3[3]) : "") : t4[3] ? t4[3].slice(1, -1) : "", E(t4, { href: (e4 = e4.trim().replace(/^<([\s\S]*)>$/, "$1")) && e4.replace(this.rules.inline._escapes, "$1"), title: r3 && r3.replace(this.rules.inline._escapes, "$1") }, t4[0]);
        }
      }, t3.reflink = function(e4, t4) {
        if ((n3 = this.rules.inline.reflink.exec(e4)) || (n3 = this.rules.inline.nolink.exec(e4))) {
          e4 = (n3[2] || n3[1]).replace(/\s+/g, " ");
          if ((e4 = t4[e4.toLowerCase()]) && e4.href)
            return E(n3, e4, n3[0]);
          var n3 = n3[0].charAt(0);
          return { type: "text", raw: n3, text: n3 };
        }
      }, t3.strong = function(e4, t4, n3) {
        void 0 === n3 && (n3 = "");
        var r3 = this.rules.inline.strong.start.exec(e4);
        if (r3 && (!r3[1] || r3[1] && ("" === n3 || this.rules.inline.punctuation.exec(n3)))) {
          t4 = t4.slice(-1 * e4.length);
          var i3, s2 = "**" === r3[0] ? this.rules.inline.strong.endAst : this.rules.inline.strong.endUnd;
          for (s2.lastIndex = 0; null != (r3 = s2.exec(t4)); )
            if (i3 = this.rules.inline.strong.middle.exec(t4.slice(0, r3.index + 3)))
              return { type: "strong", raw: e4.slice(0, i3[0].length), text: e4.slice(2, i3[0].length - 2) };
        }
      }, t3.em = function(e4, t4, n3) {
        void 0 === n3 && (n3 = "");
        var r3 = this.rules.inline.em.start.exec(e4);
        if (r3 && (!r3[1] || r3[1] && ("" === n3 || this.rules.inline.punctuation.exec(n3)))) {
          t4 = t4.slice(-1 * e4.length);
          var i3, s2 = "*" === r3[0] ? this.rules.inline.em.endAst : this.rules.inline.em.endUnd;
          for (s2.lastIndex = 0; null != (r3 = s2.exec(t4)); )
            if (i3 = this.rules.inline.em.middle.exec(t4.slice(0, r3.index + 2)))
              return { type: "em", raw: e4.slice(0, i3[0].length), text: e4.slice(1, i3[0].length - 1) };
        }
      }, t3.codespan = function(e4) {
        var t4 = this.rules.inline.code.exec(e4);
        if (t4) {
          var n3 = t4[2].replace(/\n/g, " "), r3 = /[^ ]/.test(n3), e4 = n3.startsWith(" ") && n3.endsWith(" ");
          return r3 && e4 && (n3 = n3.substring(1, n3.length - 1)), n3 = U(n3, true), { type: "codespan", raw: t4[0], text: n3 };
        }
      }, t3.br = function(e4) {
        e4 = this.rules.inline.br.exec(e4);
        if (e4)
          return { type: "br", raw: e4[0] };
      }, t3.del = function(e4) {
        e4 = this.rules.inline.del.exec(e4);
        if (e4)
          return { type: "del", raw: e4[0], text: e4[2] };
      }, t3.autolink = function(e4, t4) {
        e4 = this.rules.inline.autolink.exec(e4);
        if (e4) {
          var n3, t4 = "@" === e4[2] ? "mailto:" + (n3 = U(this.options.mangle ? t4(e4[1]) : e4[1])) : n3 = U(e4[1]);
          return { type: "link", raw: e4[0], text: n3, href: t4, tokens: [{ type: "text", raw: n3, text: n3 }] };
        }
      }, t3.url = function(e4, t4) {
        var n3, r3, i3, s2;
        if (n3 = this.rules.inline.url.exec(e4)) {
          if ("@" === n3[2])
            i3 = "mailto:" + (r3 = U(this.options.mangle ? t4(n3[0]) : n3[0]));
          else {
            for (; s2 = n3[0], n3[0] = this.rules.inline._backpedal.exec(n3[0])[0], s2 !== n3[0]; )
              ;
            r3 = U(n3[0]), i3 = "www." === n3[1] ? "http://" + r3 : r3;
          }
          return { type: "link", raw: n3[0], text: r3, href: i3, tokens: [{ type: "text", raw: r3, text: r3 }] };
        }
      }, t3.inlineText = function(e4, t4, n3) {
        e4 = this.rules.inline.text.exec(e4);
        if (e4) {
          n3 = t4 ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e4[0]) : U(e4[0]) : e4[0] : U(this.options.smartypants ? n3(e4[0]) : e4[0]);
          return { type: "text", raw: e4[0], text: n3 };
        }
      }, e3;
    }(), R = $, T = z, $ = A, z = { newline: /^\n+/, code: /^( {4}[^\n]+\n*)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/, hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/, html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))", def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/, nptable: R, table: R, lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/, text: /^[^\n]+/, _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/, _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/ };
    z.def = T(z.def).replace("label", z._label).replace("title", z._title).getRegex(), z.bullet = /(?:[*+-]|\d{1,9}[.)])/, z.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/, z.item = T(z.item, "gm").replace(/bull/g, z.bullet).getRegex(), z.listItemStart = T(/^( *)(bull)/).replace("bull", z.bullet).getRegex(), z.list = T(z.list).replace(/bull/g, z.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + z.def.source + ")").getRegex(), z._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", z._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, z.html = T(z.html, "i").replace("comment", z._comment).replace("tag", z._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), z.paragraph = T(z._paragraph).replace("hr", z.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", z._tag).getRegex(), z.blockquote = T(z.blockquote).replace("paragraph", z.paragraph).getRegex(), z.normal = $({}, z), z.gfm = $({}, z.normal, { nptable: "^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)", table: "^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" }), z.gfm.nptable = T(z.gfm.nptable).replace("hr", z.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", z._tag).getRegex(), z.gfm.table = T(z.gfm.table).replace("hr", z.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", z._tag).getRegex(), z.pedantic = $({}, z.normal, { html: T(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", z._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/, fences: R, paragraph: T(z.normal._paragraph).replace("hr", z.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", z.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() });
    R = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: R, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/, nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", strong: { start: /^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/, middle: /^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/, endAst: /[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/, endUnd: /[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/ }, em: { start: /^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/, middle: /^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/, endAst: /[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/, endUnd: /[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: R, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^([\s*punctuation])/, _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~" };
    R.punctuation = T(R.punctuation).replace(/punctuation/g, R._punctuation).getRegex(), R._blockSkip = "\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>", R._overlapSkip = "__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*", R._comment = T(z._comment).replace("(?:-->|$)", "-->").getRegex(), R.em.start = T(R.em.start).replace(/punctuation/g, R._punctuation).getRegex(), R.em.middle = T(R.em.middle).replace(/punctuation/g, R._punctuation).replace(/overlapSkip/g, R._overlapSkip).getRegex(), R.em.endAst = T(R.em.endAst, "g").replace(/punctuation/g, R._punctuation).getRegex(), R.em.endUnd = T(R.em.endUnd, "g").replace(/punctuation/g, R._punctuation).getRegex(), R.strong.start = T(R.strong.start).replace(/punctuation/g, R._punctuation).getRegex(), R.strong.middle = T(R.strong.middle).replace(/punctuation/g, R._punctuation).replace(/overlapSkip/g, R._overlapSkip).getRegex(), R.strong.endAst = T(R.strong.endAst, "g").replace(/punctuation/g, R._punctuation).getRegex(), R.strong.endUnd = T(R.strong.endUnd, "g").replace(/punctuation/g, R._punctuation).getRegex(), R.blockSkip = T(R._blockSkip, "g").getRegex(), R.overlapSkip = T(R._overlapSkip, "g").getRegex(), R._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, R._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, R._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, R.autolink = T(R.autolink).replace("scheme", R._scheme).replace("email", R._email).getRegex(), R._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, R.tag = T(R.tag).replace("comment", R._comment).replace("attribute", R._attribute).getRegex(), R._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, R._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/, R._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, R.link = T(R.link).replace("label", R._label).replace("href", R._href).replace("title", R._title).getRegex(), R.reflink = T(R.reflink).replace("label", R._label).getRegex(), R.reflinkSearch = T(R.reflinkSearch, "g").replace("reflink", R.reflink).replace("nolink", R.nolink).getRegex(), R.normal = $({}, R), R.pedantic = $({}, R.normal, { strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: T(/^!?\[(label)\]\((.*?)\)/).replace("label", R._label).getRegex(), reflink: T(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", R._label).getRegex() }), R.gfm = $({}, R.normal, { escape: T(R.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/ }), R.gfm.url = T(R.gfm.url, "i").replace("email", R.gfm._extended_email).getRegex(), R.breaks = $({}, R.gfm, { br: T(R.br).replace("{2,}", "*").getRegex(), text: T(R.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() });
    var R = { block: z, inline: R }, P = t2.defaults, L = R.block, N = R.inline, B = Z;
    function F(e3) {
      return e3.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
    }
    function M(e3) {
      for (var t3, n3 = "", r3 = e3.length, i3 = 0; i3 < r3; i3++)
        t3 = e3.charCodeAt(i3), 0.5 < Math.random() && (t3 = "x" + t3.toString(16)), n3 += "&#" + t3 + ";";
      return n3;
    }
    var W = function() {
      function n3(e4) {
        this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e4 || P, this.options.tokenizer = this.options.tokenizer || new D(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options;
        e4 = { block: L.normal, inline: N.normal };
        this.options.pedantic ? (e4.block = L.pedantic, e4.inline = N.pedantic) : this.options.gfm && (e4.block = L.gfm, this.options.breaks ? e4.inline = N.breaks : e4.inline = N.gfm), this.tokenizer.rules = e4;
      }
      n3.lex = function(e4, t4) {
        return new n3(t4).lex(e4);
      }, n3.lexInline = function(e4, t4) {
        return new n3(t4).inlineTokens(e4);
      };
      var e3, t3, r3 = n3.prototype;
      return r3.lex = function(e4) {
        return e4 = e4.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e4, this.tokens, true), this.inline(this.tokens), this.tokens;
      }, r3.blockTokens = function(e4, t4, n4) {
        var r4, i3, s2, l2;
        for (void 0 === t4 && (t4 = []), void 0 === n4 && (n4 = true), e4 = e4.replace(/^ +$/gm, ""); e4; )
          if (r4 = this.tokenizer.space(e4))
            e4 = e4.substring(r4.raw.length), r4.type && t4.push(r4);
          else if (r4 = this.tokenizer.code(e4, t4))
            e4 = e4.substring(r4.raw.length), r4.type ? t4.push(r4) : ((l2 = t4[t4.length - 1]).raw += "\n" + r4.raw, l2.text += "\n" + r4.text);
          else if (r4 = this.tokenizer.fences(e4))
            e4 = e4.substring(r4.raw.length), t4.push(r4);
          else if (r4 = this.tokenizer.heading(e4))
            e4 = e4.substring(r4.raw.length), t4.push(r4);
          else if (r4 = this.tokenizer.nptable(e4))
            e4 = e4.substring(r4.raw.length), t4.push(r4);
          else if (r4 = this.tokenizer.hr(e4))
            e4 = e4.substring(r4.raw.length), t4.push(r4);
          else if (r4 = this.tokenizer.blockquote(e4))
            e4 = e4.substring(r4.raw.length), r4.tokens = this.blockTokens(r4.text, [], n4), t4.push(r4);
          else if (r4 = this.tokenizer.list(e4)) {
            for (e4 = e4.substring(r4.raw.length), s2 = r4.items.length, i3 = 0; i3 < s2; i3++)
              r4.items[i3].tokens = this.blockTokens(r4.items[i3].text, [], false);
            t4.push(r4);
          } else if (r4 = this.tokenizer.html(e4))
            e4 = e4.substring(r4.raw.length), t4.push(r4);
          else if (n4 && (r4 = this.tokenizer.def(e4)))
            e4 = e4.substring(r4.raw.length), this.tokens.links[r4.tag] || (this.tokens.links[r4.tag] = { href: r4.href, title: r4.title });
          else if (r4 = this.tokenizer.table(e4))
            e4 = e4.substring(r4.raw.length), t4.push(r4);
          else if (r4 = this.tokenizer.lheading(e4))
            e4 = e4.substring(r4.raw.length), t4.push(r4);
          else if (n4 && (r4 = this.tokenizer.paragraph(e4)))
            e4 = e4.substring(r4.raw.length), t4.push(r4);
          else if (r4 = this.tokenizer.text(e4, t4))
            e4 = e4.substring(r4.raw.length), r4.type ? t4.push(r4) : ((l2 = t4[t4.length - 1]).raw += "\n" + r4.raw, l2.text += "\n" + r4.text);
          else if (e4) {
            var a3 = "Infinite loop on byte: " + e4.charCodeAt(0);
            if (this.options.silent) {
              formatAppLog("error", "at uni_modules/mp-html/components/mp-html/markdown/marked.min.js:6", a3);
              break;
            }
            throw new Error(a3);
          }
        return t4;
      }, r3.inline = function(e4) {
        for (var t4, n4, r4, i3, s2, l2 = e4.length, a3 = 0; a3 < l2; a3++)
          switch ((s2 = e4[a3]).type) {
            case "paragraph":
            case "text":
            case "heading":
              s2.tokens = [], this.inlineTokens(s2.text, s2.tokens);
              break;
            case "table":
              for (s2.tokens = { header: [], cells: [] }, r4 = s2.header.length, t4 = 0; t4 < r4; t4++)
                s2.tokens.header[t4] = [], this.inlineTokens(s2.header[t4], s2.tokens.header[t4]);
              for (r4 = s2.cells.length, t4 = 0; t4 < r4; t4++)
                for (i3 = s2.cells[t4], s2.tokens.cells[t4] = [], n4 = 0; n4 < i3.length; n4++)
                  s2.tokens.cells[t4][n4] = [], this.inlineTokens(i3[n4], s2.tokens.cells[t4][n4]);
              break;
            case "blockquote":
              this.inline(s2.tokens);
              break;
            case "list":
              for (r4 = s2.items.length, t4 = 0; t4 < r4; t4++)
                this.inline(s2.items[t4].tokens);
          }
        return e4;
      }, r3.inlineTokens = function(e4, t4, n4, r4) {
        var i3;
        void 0 === t4 && (t4 = []), void 0 === n4 && (n4 = false), void 0 === r4 && (r4 = false);
        var s2, l2, a3, o3 = e4;
        if (this.tokens.links) {
          var c3 = Object.keys(this.tokens.links);
          if (0 < c3.length)
            for (; null != (s2 = this.tokenizer.rules.inline.reflinkSearch.exec(o3)); )
              c3.includes(s2[0].slice(s2[0].lastIndexOf("[") + 1, -1)) && (o3 = o3.slice(0, s2.index) + "[" + B("a", s2[0].length - 2) + "]" + o3.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
        }
        for (; null != (s2 = this.tokenizer.rules.inline.blockSkip.exec(o3)); )
          o3 = o3.slice(0, s2.index) + "[" + B("a", s2[0].length - 2) + "]" + o3.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        for (; e4; )
          if (l2 || (a3 = ""), l2 = false, i3 = this.tokenizer.escape(e4))
            e4 = e4.substring(i3.raw.length), t4.push(i3);
          else if (i3 = this.tokenizer.tag(e4, n4, r4))
            e4 = e4.substring(i3.raw.length), n4 = i3.inLink, r4 = i3.inRawBlock, t4.push(i3);
          else if (i3 = this.tokenizer.link(e4))
            e4 = e4.substring(i3.raw.length), "link" === i3.type && (i3.tokens = this.inlineTokens(i3.text, [], true, r4)), t4.push(i3);
          else if (i3 = this.tokenizer.reflink(e4, this.tokens.links))
            e4 = e4.substring(i3.raw.length), "link" === i3.type && (i3.tokens = this.inlineTokens(i3.text, [], true, r4)), t4.push(i3);
          else if (i3 = this.tokenizer.strong(e4, o3, a3))
            e4 = e4.substring(i3.raw.length), i3.tokens = this.inlineTokens(i3.text, [], n4, r4), t4.push(i3);
          else if (i3 = this.tokenizer.em(e4, o3, a3))
            e4 = e4.substring(i3.raw.length), i3.tokens = this.inlineTokens(i3.text, [], n4, r4), t4.push(i3);
          else if (i3 = this.tokenizer.codespan(e4))
            e4 = e4.substring(i3.raw.length), t4.push(i3);
          else if (i3 = this.tokenizer.br(e4))
            e4 = e4.substring(i3.raw.length), t4.push(i3);
          else if (i3 = this.tokenizer.del(e4))
            e4 = e4.substring(i3.raw.length), i3.tokens = this.inlineTokens(i3.text, [], n4, r4), t4.push(i3);
          else if (i3 = this.tokenizer.autolink(e4, M))
            e4 = e4.substring(i3.raw.length), t4.push(i3);
          else if (n4 || !(i3 = this.tokenizer.url(e4, M))) {
            if (i3 = this.tokenizer.inlineText(e4, r4, F))
              e4 = e4.substring(i3.raw.length), a3 = i3.raw.slice(-1), l2 = true, t4.push(i3);
            else if (e4) {
              var u3 = "Infinite loop on byte: " + e4.charCodeAt(0);
              if (this.options.silent) {
                formatAppLog("error", "at uni_modules/mp-html/components/mp-html/markdown/marked.min.js:6", u3);
                break;
              }
              throw new Error(u3);
            }
          } else
            e4 = e4.substring(i3.raw.length), t4.push(i3);
        return t4;
      }, e3 = n3, t3 = [{ key: "rules", get: function() {
        return { block: L, inline: N };
      } }], (r3 = null) && i2(e3.prototype, r3), t3 && i2(e3, t3), n3;
    }(), X = t2.defaults, G = S, V = _, H = function() {
      function e3(e4) {
        this.options = e4 || X;
      }
      var t3 = e3.prototype;
      return t3.code = function(e4, t4, n3) {
        var r3 = (t4 || "").match(/\S*/)[0];
        return !this.options.highlight || null != (t4 = this.options.highlight(e4, r3)) && t4 !== e4 && (n3 = true, e4 = t4), r3 ? '<pre><code class="' + this.options.langPrefix + V(r3, true) + '">' + (n3 ? e4 : V(e4, true)) + "</code></pre>\n" : "<pre><code>" + (n3 ? e4 : V(e4, true)) + "</code></pre>\n";
      }, t3.blockquote = function(e4) {
        return "<blockquote>\n" + e4 + "</blockquote>\n";
      }, t3.html = function(e4) {
        return e4;
      }, t3.heading = function(e4, t4, n3, r3) {
        return this.options.headerIds ? "<h" + t4 + ' id="' + this.options.headerPrefix + r3.slug(n3) + '">' + e4 + "</h" + t4 + ">\n" : "<h" + t4 + ">" + e4 + "</h" + t4 + ">\n";
      }, t3.hr = function() {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
      }, t3.list = function(e4, t4, n3) {
        var r3 = t4 ? "ol" : "ul";
        return "<" + r3 + (t4 && 1 !== n3 ? ' start="' + n3 + '"' : "") + ">\n" + e4 + "</" + r3 + ">\n";
      }, t3.listitem = function(e4) {
        return "<li>" + e4 + "</li>\n";
      }, t3.checkbox = function(e4) {
        return "<input " + (e4 ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
      }, t3.paragraph = function(e4) {
        return "<p>" + e4 + "</p>\n";
      }, t3.table = function(e4, t4) {
        return "<table>\n<thead>\n" + e4 + "</thead>\n" + (t4 = t4 && "<tbody>" + t4 + "</tbody>") + "</table>\n";
      }, t3.tablerow = function(e4) {
        return "<tr>\n" + e4 + "</tr>\n";
      }, t3.tablecell = function(e4, t4) {
        var n3 = t4.header ? "th" : "td";
        return (t4.align ? "<" + n3 + ' align="' + t4.align + '">' : "<" + n3 + ">") + e4 + "</" + n3 + ">\n";
      }, t3.strong = function(e4) {
        return "<strong>" + e4 + "</strong>";
      }, t3.em = function(e4) {
        return "<em>" + e4 + "</em>";
      }, t3.codespan = function(e4) {
        return "<code>" + e4 + "</code>";
      }, t3.br = function() {
        return this.options.xhtml ? "<br/>" : "<br>";
      }, t3.del = function(e4) {
        return "<del>" + e4 + "</del>";
      }, t3.link = function(e4, t4, n3) {
        if (null === (e4 = G(this.options.sanitize, this.options.baseUrl, e4)))
          return n3;
        e4 = '<a href="' + V(e4) + '"';
        return t4 && (e4 += ' title="' + t4 + '"'), e4 += ">" + n3 + "</a>";
      }, t3.image = function(e4, t4, n3) {
        if (null === (e4 = G(this.options.sanitize, this.options.baseUrl, e4)))
          return n3;
        n3 = '<img src="' + e4 + '" alt="' + n3 + '"';
        return t4 && (n3 += ' title="' + t4 + '"'), n3 += this.options.xhtml ? "/>" : ">";
      }, t3.text = function(e4) {
        return e4;
      }, e3;
    }(), J = function() {
      function e3() {
      }
      var t3 = e3.prototype;
      return t3.strong = function(e4) {
        return e4;
      }, t3.em = function(e4) {
        return e4;
      }, t3.codespan = function(e4) {
        return e4;
      }, t3.del = function(e4) {
        return e4;
      }, t3.html = function(e4) {
        return e4;
      }, t3.text = function(e4) {
        return e4;
      }, t3.link = function(e4, t4, n3) {
        return "" + n3;
      }, t3.image = function(e4, t4, n3) {
        return "" + n3;
      }, t3.br = function() {
        return "";
      }, e3;
    }(), K = function() {
      function e3() {
        this.seen = {};
      }
      var t3 = e3.prototype;
      return t3.serialize = function(e4) {
        return e4.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
      }, t3.getNextSafeSlug = function(e4, t4) {
        var n3 = e4, r3 = 0;
        if (this.seen.hasOwnProperty(n3))
          for (r3 = this.seen[e4]; n3 = e4 + "-" + ++r3, this.seen.hasOwnProperty(n3); )
            ;
        return t4 || (this.seen[e4] = r3, this.seen[n3] = 0), n3;
      }, t3.slug = function(e4, t4) {
        void 0 === t4 && (t4 = {});
        var n3 = this.serialize(e4);
        return this.getNextSafeSlug(n3, t4.dryrun);
      }, e3;
    }(), Q = t2.defaults, Y = y, ee = function() {
      function n3(e4) {
        this.options = e4 || Q, this.options.renderer = this.options.renderer || new H(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new J(), this.slugger = new K();
      }
      n3.parse = function(e4, t3) {
        return new n3(t3).parse(e4);
      }, n3.parseInline = function(e4, t3) {
        return new n3(t3).parseInline(e4);
      };
      var e3 = n3.prototype;
      return e3.parse = function(e4, t3) {
        void 0 === t3 && (t3 = true);
        for (var n4, r3, i3, s2, l2, a3, o3, c3, u3, p2, h2, g2, f2, d2, k2, b2 = "", m2 = e4.length, x2 = 0; x2 < m2; x2++)
          switch ((c3 = e4[x2]).type) {
            case "space":
              continue;
            case "hr":
              b2 += this.renderer.hr();
              continue;
            case "heading":
              b2 += this.renderer.heading(this.parseInline(c3.tokens), c3.depth, Y(this.parseInline(c3.tokens, this.textRenderer)), this.slugger);
              continue;
            case "code":
              b2 += this.renderer.code(c3.text, c3.lang, c3.escaped);
              continue;
            case "table":
              for (a3 = u3 = "", i3 = c3.header.length, n4 = 0; n4 < i3; n4++)
                a3 += this.renderer.tablecell(this.parseInline(c3.tokens.header[n4]), { header: true, align: c3.align[n4] });
              for (u3 += this.renderer.tablerow(a3), o3 = "", i3 = c3.cells.length, n4 = 0; n4 < i3; n4++) {
                for (a3 = "", s2 = (l2 = c3.tokens.cells[n4]).length, r3 = 0; r3 < s2; r3++)
                  a3 += this.renderer.tablecell(this.parseInline(l2[r3]), { header: false, align: c3.align[r3] });
                o3 += this.renderer.tablerow(a3);
              }
              b2 += this.renderer.table(u3, o3);
              continue;
            case "blockquote":
              o3 = this.parse(c3.tokens), b2 += this.renderer.blockquote(o3);
              continue;
            case "list":
              for (u3 = c3.ordered, w2 = c3.start, p2 = c3.loose, i3 = c3.items.length, o3 = "", n4 = 0; n4 < i3; n4++)
                f2 = (g2 = c3.items[n4]).checked, d2 = g2.task, h2 = "", g2.task && (k2 = this.renderer.checkbox(f2), p2 ? 0 < g2.tokens.length && "text" === g2.tokens[0].type ? (g2.tokens[0].text = k2 + " " + g2.tokens[0].text, g2.tokens[0].tokens && 0 < g2.tokens[0].tokens.length && "text" === g2.tokens[0].tokens[0].type && (g2.tokens[0].tokens[0].text = k2 + " " + g2.tokens[0].tokens[0].text)) : g2.tokens.unshift({ type: "text", text: k2 }) : h2 += k2), h2 += this.parse(g2.tokens, p2), o3 += this.renderer.listitem(h2, d2, f2);
              b2 += this.renderer.list(o3, u3, w2);
              continue;
            case "html":
              b2 += this.renderer.html(c3.text);
              continue;
            case "paragraph":
              b2 += this.renderer.paragraph(this.parseInline(c3.tokens));
              continue;
            case "text":
              for (o3 = c3.tokens ? this.parseInline(c3.tokens) : c3.text; x2 + 1 < m2 && "text" === e4[x2 + 1].type; )
                o3 += "\n" + ((c3 = e4[++x2]).tokens ? this.parseInline(c3.tokens) : c3.text);
              b2 += t3 ? this.renderer.paragraph(o3) : o3;
              continue;
            default:
              var w2 = 'Token with "' + c3.type + '" type was not found.';
              if (this.options.silent)
                return void formatAppLog("error", "at uni_modules/mp-html/components/mp-html/markdown/marked.min.js:6", w2);
              throw new Error(w2);
          }
        return b2;
      }, e3.parseInline = function(e4, t3) {
        t3 = t3 || this.renderer;
        for (var n4, r3 = "", i3 = e4.length, s2 = 0; s2 < i3; s2++)
          switch ((n4 = e4[s2]).type) {
            case "escape":
              r3 += t3.text(n4.text);
              break;
            case "html":
              r3 += t3.html(n4.text);
              break;
            case "link":
              r3 += t3.link(n4.href, n4.title, this.parseInline(n4.tokens, t3));
              break;
            case "image":
              r3 += t3.image(n4.href, n4.title, n4.text);
              break;
            case "strong":
              r3 += t3.strong(this.parseInline(n4.tokens, t3));
              break;
            case "em":
              r3 += t3.em(this.parseInline(n4.tokens, t3));
              break;
            case "codespan":
              r3 += t3.codespan(n4.text);
              break;
            case "br":
              r3 += t3.br();
              break;
            case "del":
              r3 += t3.del(this.parseInline(n4.tokens, t3));
              break;
            case "text":
              r3 += t3.text(n4.text);
              break;
            default:
              var l2 = 'Token with "' + n4.type + '" type was not found.';
              if (this.options.silent)
                return void formatAppLog("error", "at uni_modules/mp-html/components/mp-html/markdown/marked.min.js:6", l2);
              throw new Error(l2);
          }
        return r3;
      }, n3;
    }(), te = A, ne = I, re = _, _ = t2.getDefaults, ie = t2.changeDefaults, t2 = t2.defaults;
    function se(e3, n3, r3) {
      if (null == e3)
        throw new Error("marked(): input parameter is undefined or null");
      if ("string" != typeof e3)
        throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e3) + ", string expected");
      if ("function" == typeof n3 && (r3 = n3, n3 = null), n3 = te({}, se.defaults, n3 || {}), ne(n3), r3) {
        var i3, s2 = n3.highlight;
        try {
          i3 = W.lex(e3, n3);
        } catch (e4) {
          return r3(e4);
        }
        var l2 = function(t4) {
          var e4;
          if (!t4)
            try {
              e4 = ee.parse(i3, n3);
            } catch (e5) {
              t4 = e5;
            }
          return n3.highlight = s2, t4 ? r3(t4) : r3(null, e4);
        };
        if (!s2 || s2.length < 3)
          return l2();
        if (delete n3.highlight, !i3.length)
          return l2();
        var a3 = 0;
        return se.walkTokens(i3, function(n4) {
          "code" === n4.type && (a3++, setTimeout(function() {
            s2(n4.text, n4.lang, function(e4, t4) {
              return e4 ? l2(e4) : (null != t4 && t4 !== n4.text && (n4.text = t4, n4.escaped = true), void (0 === --a3 && l2()));
            });
          }, 0));
        }), void (0 === a3 && l2());
      }
      try {
        var t3 = W.lex(e3, n3);
        return n3.walkTokens && se.walkTokens(t3, n3.walkTokens), ee.parse(t3, n3);
      } catch (e4) {
        if (e4.message += "\nPlease report this to https://github.com/markedjs/marked.", n3.silent)
          return "<p>An error occurred:</p><pre>" + re(e4.message + "", true) + "</pre>";
        throw e4;
      }
    }
    return se.options = se.setOptions = function(e3) {
      return te(se.defaults, e3), ie(se.defaults), se;
    }, se.getDefaults = _, se.defaults = t2, se.use = function(a3) {
      var t3, n3 = te({}, a3);
      a3.renderer && function() {
        var e3, l2 = se.defaults.renderer || new H();
        for (e3 in a3.renderer)
          !function(i3) {
            var s2 = l2[i3];
            l2[i3] = function() {
              for (var e4 = arguments.length, t4 = new Array(e4), n4 = 0; n4 < e4; n4++)
                t4[n4] = arguments[n4];
              var r3 = a3.renderer[i3].apply(l2, t4);
              return false === r3 && (r3 = s2.apply(l2, t4)), r3;
            };
          }(e3);
        n3.renderer = l2;
      }(), a3.tokenizer && function() {
        var e3, l2 = se.defaults.tokenizer || new D();
        for (e3 in a3.tokenizer)
          !function(i3) {
            var s2 = l2[i3];
            l2[i3] = function() {
              for (var e4 = arguments.length, t4 = new Array(e4), n4 = 0; n4 < e4; n4++)
                t4[n4] = arguments[n4];
              var r3 = a3.tokenizer[i3].apply(l2, t4);
              return false === r3 && (r3 = s2.apply(l2, t4)), r3;
            };
          }(e3);
        n3.tokenizer = l2;
      }(), a3.walkTokens && (t3 = se.defaults.walkTokens, n3.walkTokens = function(e3) {
        a3.walkTokens(e3), t3 && t3(e3);
      }), se.setOptions(n3);
    }, se.walkTokens = function(e3, t3) {
      for (var n3, r3 = p(e3); !(n3 = r3()).done; ) {
        var i3 = n3.value;
        switch (t3(i3), i3.type) {
          case "table":
            for (var s2 = p(i3.tokens.header); !(l2 = s2()).done; ) {
              var l2 = l2.value;
              se.walkTokens(l2, t3);
            }
            for (var a3, o3 = p(i3.tokens.cells); !(a3 = o3()).done; )
              for (var c3 = p(a3.value); !(u3 = c3()).done; ) {
                var u3 = u3.value;
                se.walkTokens(u3, t3);
              }
            break;
          case "list":
            se.walkTokens(i3.items, t3);
            break;
          default:
            i3.tokens && se.walkTokens(i3.tokens, t3);
        }
      }
    }, se.parseInline = function(e3, t3) {
      if (null == e3)
        throw new Error("marked.parseInline(): input parameter is undefined or null");
      if ("string" != typeof e3)
        throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e3) + ", string expected");
      t3 = te({}, se.defaults, t3 || {}), ne(t3);
      try {
        var n3 = W.lexInline(e3, t3);
        return t3.walkTokens && se.walkTokens(n3, t3.walkTokens), ee.parseInline(n3, t3);
      } catch (e4) {
        if (e4.message += "\nPlease report this to https://github.com/markedjs/marked.", t3.silent)
          return "<p>An error occurred:</p><pre>" + re(e4.message + "", true) + "</pre>";
        throw e4;
      }
    }, se.Parser = ee, se.parser = ee.parse, se.Renderer = H, se.TextRenderer = J, se.Lexer = W, se.lexer = W.lex, se.Tokenizer = D, se.Slugger = K, se.parse = se;
  }
  const marked = t$1();
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
  var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}, Prism = function(e2) {
    var n2 = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, t2 = 0, r2 = {}, a2 = { manual: e2.Prism && e2.Prism.manual, disableWorkerMessageHandler: e2.Prism && e2.Prism.disableWorkerMessageHandler, util: { encode: function e3(n3) {
      return n3 instanceof i2 ? new i2(n3.type, e3(n3.content), n3.alias) : Array.isArray(n3) ? n3.map(e3) : n3.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(e3) {
      return Object.prototype.toString.call(e3).slice(8, -1);
    }, objId: function(e3) {
      return e3.__id || Object.defineProperty(e3, "__id", { value: ++t2 }), e3.__id;
    }, clone: function e3(n3, t3) {
      var r3, i3;
      switch (t3 = t3 || {}, a2.util.type(n3)) {
        case "Object":
          if (i3 = a2.util.objId(n3), t3[i3])
            return t3[i3];
          for (var l2 in r3 = {}, t3[i3] = r3, n3)
            n3.hasOwnProperty(l2) && (r3[l2] = e3(n3[l2], t3));
          return r3;
        case "Array":
          return i3 = a2.util.objId(n3), t3[i3] ? t3[i3] : (r3 = [], t3[i3] = r3, n3.forEach(function(n4, a3) {
            r3[a3] = e3(n4, t3);
          }), r3);
        default:
          return n3;
      }
    }, getLanguage: function(e3) {
      for (; e3; ) {
        var t3 = n2.exec(e3.className);
        if (t3)
          return t3[1].toLowerCase();
        e3 = e3.parentElement;
      }
      return "none";
    }, setLanguage: function(e3, t3) {
      e3.className = e3.className.replace(RegExp(n2, "gi"), ""), e3.classList.add("language-" + t3);
    }, currentScript: function() {
      if ("undefined" == typeof document)
        return null;
      if ("currentScript" in document)
        return document.currentScript;
      try {
        throw new Error();
      } catch (r3) {
        var e3 = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r3.stack) || [])[1];
        if (e3) {
          var n3 = document.getElementsByTagName("script");
          for (var t3 in n3)
            if (n3[t3].src == e3)
              return n3[t3];
        }
        return null;
      }
    }, isActive: function(e3, n3, t3) {
      for (var r3 = "no-" + n3; e3; ) {
        var a3 = e3.classList;
        if (a3.contains(n3))
          return true;
        if (a3.contains(r3))
          return false;
        e3 = e3.parentElement;
      }
      return !!t3;
    } }, languages: { plain: r2, plaintext: r2, text: r2, txt: r2, extend: function(e3, n3) {
      var t3 = a2.util.clone(a2.languages[e3]);
      for (var r3 in n3)
        t3[r3] = n3[r3];
      return t3;
    }, insertBefore: function(e3, n3, t3, r3) {
      var i3 = (r3 = r3 || a2.languages)[e3], l2 = {};
      for (var o3 in i3)
        if (i3.hasOwnProperty(o3)) {
          if (o3 == n3)
            for (var s2 in t3)
              t3.hasOwnProperty(s2) && (l2[s2] = t3[s2]);
          t3.hasOwnProperty(o3) || (l2[o3] = i3[o3]);
        }
      var u3 = r3[e3];
      return r3[e3] = l2, a2.languages.DFS(a2.languages, function(n4, t4) {
        t4 === u3 && n4 != e3 && (this[n4] = l2);
      }), l2;
    }, DFS: function e3(n3, t3, r3, i3) {
      i3 = i3 || {};
      var l2 = a2.util.objId;
      for (var o3 in n3)
        if (n3.hasOwnProperty(o3)) {
          t3.call(n3, o3, n3[o3], r3 || o3);
          var s2 = n3[o3], u3 = a2.util.type(s2);
          "Object" !== u3 || i3[l2(s2)] ? "Array" !== u3 || i3[l2(s2)] || (i3[l2(s2)] = true, e3(s2, t3, o3, i3)) : (i3[l2(s2)] = true, e3(s2, t3, null, i3));
        }
    } }, plugins: {}, highlightAll: function(e3, n3) {
      a2.highlightAllUnder(document, e3, n3);
    }, highlightAllUnder: function(e3, n3, t3) {
      var r3 = { callback: t3, container: e3, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
      a2.hooks.run("before-highlightall", r3), r3.elements = Array.prototype.slice.apply(r3.container.querySelectorAll(r3.selector)), a2.hooks.run("before-all-elements-highlight", r3);
      for (var i3, l2 = 0; i3 = r3.elements[l2++]; )
        a2.highlightElement(i3, true === n3, r3.callback);
    }, highlightElement: function(n3, t3, r3) {
      var i3 = a2.util.getLanguage(n3), l2 = a2.languages[i3];
      a2.util.setLanguage(n3, i3);
      var o3 = n3.parentElement;
      o3 && "pre" === o3.nodeName.toLowerCase() && a2.util.setLanguage(o3, i3);
      var s2 = { element: n3, language: i3, grammar: l2, code: n3.textContent };
      function u3(e3) {
        s2.highlightedCode = e3, a2.hooks.run("before-insert", s2), s2.element.innerHTML = s2.highlightedCode, a2.hooks.run("after-highlight", s2), a2.hooks.run("complete", s2), r3 && r3.call(s2.element);
      }
      if (a2.hooks.run("before-sanity-check", s2), (o3 = s2.element.parentElement) && "pre" === o3.nodeName.toLowerCase() && !o3.hasAttribute("tabindex") && o3.setAttribute("tabindex", "0"), !s2.code)
        return a2.hooks.run("complete", s2), void (r3 && r3.call(s2.element));
      if (a2.hooks.run("before-highlight", s2), s2.grammar)
        if (t3 && e2.Worker) {
          var c3 = new Worker(a2.filename);
          c3.onmessage = function(e3) {
            u3(e3.data);
          }, c3.postMessage(JSON.stringify({ language: s2.language, code: s2.code, immediateClose: true }));
        } else
          u3(a2.highlight(s2.code, s2.grammar, s2.language));
      else
        u3(a2.util.encode(s2.code));
    }, highlight: function(e3, n3, t3) {
      var r3 = { code: e3, grammar: n3, language: t3 };
      if (a2.hooks.run("before-tokenize", r3), !r3.grammar)
        throw new Error('The language "' + r3.language + '" has no grammar.');
      return r3.tokens = a2.tokenize(r3.code, r3.grammar), a2.hooks.run("after-tokenize", r3), i2.stringify(a2.util.encode(r3.tokens), r3.language);
    }, tokenize: function(e3, n3) {
      var t3 = n3.rest;
      if (t3) {
        for (var r3 in t3)
          n3[r3] = t3[r3];
        delete n3.rest;
      }
      var a3 = new s();
      return u2(a3, a3.head, e3), o2(e3, a3, n3, a3.head, 0), function(e4) {
        for (var n4 = [], t4 = e4.head.next; t4 !== e4.tail; )
          n4.push(t4.value), t4 = t4.next;
        return n4;
      }(a3);
    }, hooks: { all: {}, add: function(e3, n3) {
      var t3 = a2.hooks.all;
      t3[e3] = t3[e3] || [], t3[e3].push(n3);
    }, run: function(e3, n3) {
      var t3 = a2.hooks.all[e3];
      if (t3 && t3.length)
        for (var r3, i3 = 0; r3 = t3[i3++]; )
          r3(n3);
    } }, Token: i2 };
    function i2(e3, n3, t3, r3) {
      this.type = e3, this.content = n3, this.alias = t3, this.length = 0 | (r3 || "").length;
    }
    function l(e3, n3, t3, r3) {
      e3.lastIndex = n3;
      var a3 = e3.exec(t3);
      if (a3 && r3 && a3[1]) {
        var i3 = a3[1].length;
        a3.index += i3, a3[0] = a3[0].slice(i3);
      }
      return a3;
    }
    function o2(e3, n3, t3, r3, s2, g2) {
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
            for (var b = v.pattern || v, w = r3.next, A = s2; w !== n3.tail && !(g2 && A >= g2.reach); A += w.value.length, w = w.next) {
              var E = w.value;
              if (n3.length > e3.length)
                return;
              if (!(E instanceof i2)) {
                var P, L = 1;
                if (y) {
                  if (!(P = l(b, A, e3, m)) || P.index >= e3.length)
                    break;
                  var S = P.index, O = P.index + P[0].length, j = A;
                  for (j += w.value.length; S >= j; )
                    j += (w = w.next).value.length;
                  if (A = j -= w.value.length, w.value instanceof i2)
                    continue;
                  for (var C = w; C !== n3.tail && (j < O || "string" == typeof C.value); C = C.next)
                    L++, j += C.value.length;
                  L--, E = e3.slice(A, j), P.index -= A;
                } else if (!(P = l(b, 0, E, m)))
                  continue;
                S = P.index;
                var N = P[0], _ = E.slice(0, S), M = E.slice(S + N.length), W = A + E.length;
                g2 && W > g2.reach && (g2.reach = W);
                var z = w.prev;
                if (_ && (z = u2(n3, z, _), A += _.length), c2(n3, z, L), w = u2(n3, z, new i2(f2, p ? a2.tokenize(N, p) : N, k, N)), M && u2(n3, w, M), L > 1) {
                  var I = { cause: f2 + "," + d, reach: W };
                  o2(e3, n3, t3, w.prev, A, I), g2 && I.reach > g2.reach && (g2.reach = I.reach);
                }
              }
            }
          }
        }
    }
    function s() {
      var e3 = { value: null, prev: null, next: null }, n3 = { value: null, prev: e3, next: null };
      e3.next = n3, this.head = e3, this.tail = n3, this.length = 0;
    }
    function u2(e3, n3, t3) {
      var r3 = n3.next, a3 = { value: t3, prev: n3, next: r3 };
      return n3.next = a3, r3.prev = a3, e3.length++, a3;
    }
    function c2(e3, n3, t3) {
      for (var r3 = n3.next, a3 = 0; a3 < t3 && r3 !== e3.tail; a3++)
        r3 = r3.next;
      n3.next = r3, r3.prev = n3, e3.length -= a3;
    }
    if (e2.Prism = a2, i2.stringify = function e3(n3, t3) {
      if ("string" == typeof n3)
        return n3;
      if (Array.isArray(n3)) {
        var r3 = "";
        return n3.forEach(function(n4) {
          r3 += e3(n4, t3);
        }), r3;
      }
      var i3 = { type: n3.type, content: e3(n3.content, t3), tag: "span", classes: ["token", n3.type], attributes: {}, language: t3 }, l2 = n3.alias;
      l2 && (Array.isArray(l2) ? Array.prototype.push.apply(i3.classes, l2) : i3.classes.push(l2)), a2.hooks.run("wrap", i3);
      var o3 = "";
      for (var s2 in i3.attributes)
        o3 += " " + s2 + '="' + (i3.attributes[s2] || "").replace(/"/g, "&quot;") + '"';
      return "<" + i3.tag + ' class="' + i3.classes.join(" ") + '"' + o3 + ">" + i3.content + "</" + i3.tag + ">";
    }, !e2.document)
      return e2.addEventListener ? (a2.disableWorkerMessageHandler || e2.addEventListener("message", function(n3) {
        var t3 = JSON.parse(n3.data), r3 = t3.language, i3 = t3.code, l2 = t3.immediateClose;
        e2.postMessage(a2.highlight(i3, a2.languages[r3], r3)), l2 && e2.close();
      }, false), a2) : a2;
    var g = a2.util.currentScript();
    function f() {
      a2.manual || a2.highlightAll();
    }
    if (g && (a2.filename = g.src, g.hasAttribute("data-manual") && (a2.manual = true)), !a2.manual) {
      var h = document.readyState;
      "loading" === h || "interactive" === h && g && g.defer ? document.addEventListener("DOMContentLoaded", f) : window.requestAnimationFrame ? window.requestAnimationFrame(f) : window.setTimeout(f, 16);
    }
    return a2;
  }(_self);
  "undefined" != typeof global && (global.Prism = Prism);
  Prism.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: true }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: true }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: true, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: true, greedy: true, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: true }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: true }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: true, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, { pattern: /^(\s*)["']|["']$/, lookbehind: true }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function(a2) {
    "entity" === a2.type && (a2.attributes.title = a2.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function(a2, e2) {
    var s = {};
    s["language-" + e2] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: true, inside: Prism.languages[e2] }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var t2 = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } };
    t2["language-" + e2] = { pattern: /[\s\S]+/, inside: Prism.languages[e2] };
    var n2 = {};
    n2[a2] = { pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function() {
      return a2;
    }), "i"), lookbehind: true, greedy: true, inside: t2 }, Prism.languages.insertBefore("markup", "cdata", n2);
  } }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", { value: function(a2, e2) {
    Prism.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(`(^|["'\\s])(?:` + a2 + `)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`, "i"), lookbehind: true, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: true, alias: [e2, "language-" + e2], inside: Prism.languages[e2] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
  } }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
  !function(s) {
    var e2 = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    s.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|` + e2.source + ")*?(?:;|(?=\\s*\\{))"), inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: true, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: true } } }, url: { pattern: RegExp("\\burl\\((?:" + e2.source + `|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`, "i"), greedy: true, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + e2.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + e2.source + ")*(?=\\s*\\{)"), lookbehind: true }, string: { pattern: e2, greedy: true }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: true }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: true }, punctuation: /[(){};:,]/ }, s.languages.css.atrule.inside.rest = s.languages.css;
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
  !function(e2) {
    var n2 = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, t2 = "(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*", s = { pattern: RegExp("(^|[^\\w.])" + t2 + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"), lookbehind: true, inside: { namespace: { pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/, inside: { punctuation: /\./ } }, punctuation: /\./ } };
    e2.languages.java = e2.languages.extend("clike", { string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/, lookbehind: true, greedy: true }, "class-name": [s, { pattern: RegExp("(^|[^\\w.])" + t2 + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)"), lookbehind: true, inside: s.inside }, { pattern: RegExp("(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)" + t2 + "[A-Z]\\w*\\b"), lookbehind: true, inside: s.inside }], keyword: n2, function: [e2.languages.clike.function, { pattern: /(::\s*)[a-z_]\w*/, lookbehind: true }], number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i, operator: { pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m, lookbehind: true } }), e2.languages.insertBefore("java", "string", { "triple-quoted-string": { pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/, greedy: true, alias: "string" }, char: { pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/, greedy: true } }), e2.languages.insertBefore("java", "class-name", { annotation: { pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/, lookbehind: true, alias: "punctuation" }, generics: { pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/, inside: { "class-name": s, keyword: n2, punctuation: /[<>(),.:]/, operator: /[?&|]/ } }, import: [{ pattern: RegExp("(\\bimport\\s+)" + t2 + "(?:[A-Z]\\w*|\\*)(?=\\s*;)"), lookbehind: true, inside: { namespace: s.inside.namespace, punctuation: /\./, operator: /\*/, "class-name": /\w+/ } }, { pattern: RegExp("(\\bimport\\s+static\\s+)" + t2 + "(?:\\w+|\\*)(?=\\s*;)"), lookbehind: true, alias: "static", inside: { namespace: s.inside.namespace, static: /\b\w+$/, punctuation: /\./, operator: /\*/, "class-name": /\w+/ } }], namespace: { pattern: RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g, function() {
      return n2.source;
    })), lookbehind: true, inside: { punctuation: /\./ } } });
  }(Prism);
  !function(e2) {
    function n2(e3, n3) {
      return "___" + e3.toUpperCase() + n3 + "___";
    }
    Object.defineProperties(e2.languages["markup-templating"] = {}, { buildPlaceholders: { value: function(t2, a2, r2, o2) {
      if (t2.language === a2) {
        var c2 = t2.tokenStack = [];
        t2.code = t2.code.replace(r2, function(e3) {
          if ("function" == typeof o2 && !o2(e3))
            return e3;
          for (var r3, i2 = c2.length; -1 !== t2.code.indexOf(r3 = n2(a2, i2)); )
            ++i2;
          return c2[i2] = e3, r3;
        }), t2.grammar = e2.languages.markup;
      }
    } }, tokenizePlaceholders: { value: function(t2, a2) {
      if (t2.language === a2 && t2.tokenStack) {
        t2.grammar = e2.languages[a2];
        var r2 = 0, o2 = Object.keys(t2.tokenStack);
        !function c2(i2) {
          for (var u2 = 0; u2 < i2.length && !(r2 >= o2.length); u2++) {
            var g = i2[u2];
            if ("string" == typeof g || g.content && "string" == typeof g.content) {
              var l = o2[r2], s = t2.tokenStack[l], f = "string" == typeof g ? g : g.content, p = n2(a2, l), k = f.indexOf(p);
              if (k > -1) {
                ++r2;
                var m = f.substring(0, k), d = new e2.Token(a2, e2.tokenize(s, t2.grammar), "language-" + a2, s), h = f.substring(k + p.length), v = [];
                m && v.push.apply(v, c2([m])), v.push(d), h && v.push.apply(v, c2([h])), "string" == typeof g ? i2.splice.apply(i2, [u2, 1].concat(v)) : g.content = v;
              }
            } else
              g.content && c2(g.content);
          }
          return i2;
        }(t2.tokens);
      }
    } } });
  }(Prism);
  !function(e2) {
    var a2 = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/, t2 = [{ pattern: /\b(?:false|true)\b/i, alias: "boolean" }, { pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i, greedy: true, lookbehind: true }, { pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i, greedy: true, lookbehind: true }, /\b(?:null)\b/i, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/], i2 = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i, n2 = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/, s = /[{}\[\](),:;]/;
    e2.languages.php = { delimiter: { pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i, alias: "important" }, comment: a2, variable: /\$+(?:\w+\b|(?=\{))/, package: { pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, lookbehind: true, inside: { punctuation: /\\/ } }, "class-name-definition": { pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i, lookbehind: true, alias: "class-name" }, "function-definition": { pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i, lookbehind: true, alias: "function" }, keyword: [{ pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i, alias: "type-casting", greedy: true, lookbehind: true }, { pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i, alias: "type-hint", greedy: true, lookbehind: true }, { pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i, alias: "return-type", greedy: true, lookbehind: true }, { pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i, alias: "type-declaration", greedy: true }, { pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i, alias: "type-declaration", greedy: true, lookbehind: true }, { pattern: /\b(?:parent|self|static)(?=\s*::)/i, alias: "static-context", greedy: true }, { pattern: /(\byield\s+)from\b/i, lookbehind: true }, /\bclass\b/i, { pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i, lookbehind: true }], "argument-name": { pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i, lookbehind: true }, "class-name": [{ pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i, greedy: true, lookbehind: true }, { pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i, greedy: true, lookbehind: true }, { pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i, greedy: true }, { pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i, alias: "class-name-fully-qualified", greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }, { pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i, alias: "class-name-fully-qualified", greedy: true, inside: { punctuation: /\\/ } }, { pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, alias: "class-name-fully-qualified", greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }, { pattern: /\b[a-z_]\w*(?=\s*\$)/i, alias: "type-declaration", greedy: true }, { pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i, alias: ["class-name-fully-qualified", "type-declaration"], greedy: true, inside: { punctuation: /\\/ } }, { pattern: /\b[a-z_]\w*(?=\s*::)/i, alias: "static-context", greedy: true }, { pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i, alias: ["class-name-fully-qualified", "static-context"], greedy: true, inside: { punctuation: /\\/ } }, { pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i, alias: "type-hint", greedy: true, lookbehind: true }, { pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i, alias: ["class-name-fully-qualified", "type-hint"], greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }, { pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i, alias: "return-type", greedy: true, lookbehind: true }, { pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, alias: ["class-name-fully-qualified", "return-type"], greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }], constant: t2, function: { pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i, lookbehind: true, inside: { punctuation: /\\/ } }, property: { pattern: /(->\s*)\w+/, lookbehind: true }, number: i2, operator: n2, punctuation: s };
    var l = { pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/, lookbehind: true, inside: e2.languages.php }, r2 = [{ pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/, alias: "nowdoc-string", greedy: true, inside: { delimiter: { pattern: /^<<<'[^']+'|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<'?|[';]$/ } } } }, { pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i, alias: "heredoc-string", greedy: true, inside: { delimiter: { pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<"?|[";]$/ } }, interpolation: l } }, { pattern: /`(?:\\[\s\S]|[^\\`])*`/, alias: "backtick-quoted-string", greedy: true }, { pattern: /'(?:\\[\s\S]|[^\\'])*'/, alias: "single-quoted-string", greedy: true }, { pattern: /"(?:\\[\s\S]|[^\\"])*"/, alias: "double-quoted-string", greedy: true, inside: { interpolation: l } }];
    e2.languages.insertBefore("php", "variable", { string: r2, attribute: { pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im, greedy: true, inside: { "attribute-content": { pattern: /^(#\[)[\s\S]+(?=\]$)/, lookbehind: true, inside: { comment: a2, string: r2, "attribute-class-name": [{ pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i, alias: "class-name", greedy: true, lookbehind: true }, { pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i, alias: ["class-name", "class-name-fully-qualified"], greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }], constant: t2, number: i2, operator: n2, punctuation: s } }, delimiter: { pattern: /^#\[|\]$/, alias: "punctuation" } } } }), e2.hooks.add("before-tokenize", function(a3) {
      /<\?/.test(a3.code) && e2.languages["markup-templating"].buildPlaceholders(a3, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g);
    }), e2.hooks.add("after-tokenize", function(a3) {
      e2.languages["markup-templating"].tokenizePlaceholders(a3, "php");
    });
  }(Prism);
  Prism.languages.python = { comment: { pattern: /(^|[^\\])#.*/, lookbehind: true, greedy: true }, "string-interpolation": { pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i, greedy: true, inside: { interpolation: { pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/, lookbehind: true, inside: { "format-spec": { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: true }, "conversion-option": { pattern: /![sra](?=[:}]$)/, alias: "punctuation" }, rest: null } }, string: /[\s\S]+/ } }, "triple-quoted-string": { pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i, greedy: true, alias: "string" }, string: { pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: true }, function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: true }, "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: true }, decorator: { pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m, lookbehind: true, alias: ["annotation", "punctuation"], inside: { punctuation: /\./ } }, keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/, builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/, boolean: /\b(?:False|None|True)\b/, number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i, operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, punctuation: /[{}[\];(),.:]/ }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python;
  function Highlight(vm) {
    this.vm = vm;
  }
  Highlight.prototype.onParse = function(node2, vm) {
    if (node2.name === "pre") {
      if (vm.options.editable) {
        node2.attrs.class = (node2.attrs.class || "") + " hl-pre";
        return;
      }
      let i2;
      for (i2 = node2.children.length; i2--; ) {
        if (node2.children[i2].name === "code")
          break;
      }
      if (i2 === -1)
        return;
      const code = node2.children[i2];
      let className = code.attrs.class + " " + node2.attrs.class;
      i2 = className.indexOf("language-");
      if (i2 === -1) {
        i2 = className.indexOf("lang-");
        if (i2 === -1) {
          className = "language-text";
          i2 = 9;
        } else {
          i2 += 5;
        }
      } else {
        i2 += 9;
      }
      let j;
      for (j = i2; j < className.length; j++) {
        if (className[j] === " ")
          break;
      }
      const lang = className.substring(i2, j);
      if (code.children.length) {
        const text = this.vm.getText(code.children).replace(/&amp;/g, "&");
        if (!text)
          return;
        if (node2.c) {
          node2.c = void 0;
        }
        if (Prism.languages[lang]) {
          code.children = new Parser$1(this.vm).parse(
            "<pre>" + Prism.highlight(text, Prism.languages[lang], lang).replace(/token /g, "hl-") + "</pre>"
          )[0].children;
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
        for (let i2 = 0; i2 < nodes.length; i2++) {
          let node2 = nodes[i2];
          if (node2.type === "text" && key) {
            const text = node2.text;
            const arr = text.split(key);
            if (arr.length > 1) {
              node2 = {
                name: "span",
                attrs: {},
                type: "node",
                c: 1,
                s: 1,
                children: []
              };
              vm.$set(nodes, i2, node2);
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
                    c: 1,
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
            vm.$set(nodes, i2, {
              type: "text",
              text
            });
            if (key && (key instanceof RegExp ? key.test(text) : text.includes(key))) {
              i2--;
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
            highlight(i2, hlstyle = "background-color:#FF9632") {
              if (i2 < 1 || i2 > res.length)
                return;
              if (this.last) {
                res[this.last - 1].style = style;
              }
              this.last = i2;
              res[i2 - 1].style = hlstyle;
            },
            jump: anchor ? (i2, offset) => {
              if (i2 > 0 && i2 <= res.length) {
                vm.navigateTo("search" + i2, offset);
              }
            } : void 0
          });
        }, 200);
      });
    };
  }
  const blank = {
    " ": true,
    "\n": true,
    "	": true,
    "\r": true,
    "\f": true
  };
  function Parser() {
    this.styles = [];
    this.selectors = [];
  }
  Parser.prototype.parse = function(content) {
    new Lexer(this).parse(content);
    return this.styles;
  };
  Parser.prototype.onSelector = function(name) {
    if (name.includes("[") || name.includes("*") || name.includes("@"))
      return;
    const selector = {};
    if (name.includes(":")) {
      const info = name.split(":");
      const pseudo = info.pop();
      if (pseudo === "before" || pseudo === "after") {
        selector.pseudo = pseudo;
        name = info[0];
      } else
        return;
    }
    function splitItem(str) {
      const arr = [];
      let i2, start;
      for (i2 = 1, start = 0; i2 < str.length; i2++) {
        if (str[i2] === "." || str[i2] === "#") {
          arr.push(str.substring(start, i2));
          start = i2;
        }
      }
      if (!arr.length) {
        return str;
      } else {
        arr.push(str.substring(start, i2));
        return arr;
      }
    }
    if (name.includes(" ")) {
      selector.list = [];
      const list = name.split(" ");
      for (let i2 = 0; i2 < list.length; i2++) {
        if (list[i2].length) {
          const arr = list[i2].split(">");
          for (let j = 0; j < arr.length; j++) {
            selector.list.push(splitItem(arr[j]));
            if (j < arr.length - 1) {
              selector.list.push(">");
            }
          }
        }
      }
    } else {
      selector.key = splitItem(name);
    }
    this.selectors.push(selector);
  };
  Parser.prototype.onContent = function(content) {
    for (let i2 = 0; i2 < this.selectors.length; i2++) {
      this.selectors[i2].style = content;
    }
    this.styles = this.styles.concat(this.selectors);
    this.selectors = [];
  };
  function Lexer(handler) {
    this.selector = "";
    this.style = "";
    this.handler = handler;
  }
  Lexer.prototype.parse = function(content) {
    this.i = 0;
    this.content = content;
    this.state = this.blank;
    for (let len = content.length; this.i < len; this.i++) {
      this.state(content[this.i]);
    }
  };
  Lexer.prototype.comment = function() {
    this.i = this.content.indexOf("*/", this.i) + 1;
    if (!this.i) {
      this.i = this.content.length;
    }
  };
  Lexer.prototype.blank = function(c2) {
    if (!blank[c2]) {
      if (c2 === "/" && this.content[this.i + 1] === "*") {
        this.comment();
        return;
      }
      this.selector += c2;
      this.state = this.name;
    }
  };
  Lexer.prototype.name = function(c2) {
    if (c2 === "/" && this.content[this.i + 1] === "*") {
      this.comment();
      return;
    }
    if (c2 === "{" || c2 === "," || c2 === ";") {
      this.handler.onSelector(this.selector.trimEnd());
      this.selector = "";
      if (c2 !== "{") {
        while (blank[this.content[++this.i]])
          ;
      }
      if (this.content[this.i] === "{") {
        this.floor = 1;
        this.state = this.val;
      } else {
        this.selector += this.content[this.i];
      }
    } else if (blank[c2]) {
      this.selector += " ";
    } else {
      this.selector += c2;
    }
  };
  Lexer.prototype.val = function(c2) {
    if (c2 === "/" && this.content[this.i + 1] === "*") {
      this.comment();
      return;
    }
    if (c2 === "{") {
      this.floor++;
    } else if (c2 === "}") {
      this.floor--;
      if (!this.floor) {
        this.handler.onContent(this.style);
        this.style = "";
        this.state = this.blank;
        return;
      }
    }
    this.style += c2;
  };
  function Style() {
    this.styles = [];
  }
  Style.prototype.onParse = function(node2, vm) {
    if (node2.name === "style" && node2.children.length && node2.children[0].type === "text") {
      this.styles = this.styles.concat(new Parser().parse(node2.children[0].text));
    } else if (node2.name) {
      let matched = ["", "", "", ""];
      for (let i2 = 0, len = this.styles.length; i2 < len; i2++) {
        const item = this.styles[i2];
        let res = match(node2, item.key || item.list[item.list.length - 1]);
        let j;
        if (res) {
          if (!item.key) {
            j = item.list.length - 2;
            for (let k = vm.stack.length; j >= 0 && k--; ) {
              if (item.list[j] === ">") {
                if (j < 1 || j > item.list.length - 2)
                  break;
                if (match(vm.stack[k], item.list[j - 1])) {
                  j -= 2;
                } else {
                  j++;
                }
              } else if (match(vm.stack[k], item.list[j])) {
                j--;
              }
            }
            res = 4;
          }
          if (item.key || j < 0) {
            if (item.pseudo && node2.children) {
              let text;
              item.style = item.style.replace(/content:([^;]+)/, (_, $1) => {
                text = $1.replace(/['"]/g, "").replace(/attr\((.+?)\)/, (_2, $12) => node2.attrs[$12.trim()] || "").replace(/\\(\w{4})/, (_2, $12) => String.fromCharCode(parseInt($12, 16)));
                return "";
              });
              const pseudo = {
                name: "span",
                attrs: {
                  style: item.style
                },
                children: [{
                  type: "text",
                  text
                }]
              };
              if (item.pseudo === "before") {
                node2.children.unshift(pseudo);
              } else {
                node2.children.push(pseudo);
              }
            } else {
              matched[res - 1] += item.style + (item.style[item.style.length - 1] === ";" ? "" : ";");
            }
          }
        }
      }
      matched = matched.join("");
      if (matched.length > 2) {
        node2.attrs.style = matched + (node2.attrs.style || "");
      }
    }
  };
  function match(node2, keys) {
    function matchItem(key) {
      if (key[0] === "#") {
        if (node2.attrs.id && node2.attrs.id.trim() === key.substr(1))
          return 3;
      } else if (key[0] === ".") {
        key = key.substr(1);
        const selectors = (node2.attrs.class || "").split(" ");
        for (let i2 = 0; i2 < selectors.length; i2++) {
          if (selectors[i2].trim() === key)
            return 2;
        }
      } else if (node2.name === key) {
        return 1;
      }
      return 0;
    }
    if (keys instanceof Array) {
      let res = 0;
      for (let j = 0; j < keys.length; j++) {
        const tmp = matchItem(keys[j]);
        if (!tmp)
          return 0;
        if (tmp > res) {
          res = tmp;
        }
      }
      return res;
    }
    return matchItem(keys);
  }
  const plugins = [Markdown, Emoji, Highlight, Search, Style];
  const _sfc_main$i = {
    name: "mp-html",
    data() {
      return {
        nodes: []
      };
    },
    props: {
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
      content(content) {
        this.setContent(content);
      }
    },
    created() {
      this.plugins = [];
      for (let i2 = plugins.length; i2--; ) {
        this.plugins.push(new plugins[i2](this));
      }
    },
    mounted() {
      if (this.content && !this.nodes.length) {
        this.setContent(this.content);
      }
    },
    beforeDestroy() {
      this._hook("onDetached");
    },
    methods: {
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
          for (let i2 = 0; i2 < nodes2.length; i2++) {
            const node2 = nodes2[i2];
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
        for (let i2 = (this._videos || []).length; i2--; ) {
          this._videos[i2].pause();
        }
        const command = 'for(var e=document.getElementsByTagName("video"),i=e.length;i--;)e[i].pause()';
        let page = this.$parent;
        while (!page.$scope)
          page = page.$parent;
        page.$scope.$getAppWebview().evalJS(command);
      },
      setPlaybackRate(rate) {
        this.playbackRate = rate;
        for (let i2 = (this._videos || []).length; i2--; ) {
          this._videos[i2].playbackRate(rate);
        }
        const command = 'for(var e=document.getElementsByTagName("video"),i=e.length;i--;)e[i].playbackRate=' + rate;
        let page = this.$parent;
        while (!page.$scope)
          page = page.$parent;
        page.$scope.$getAppWebview().evalJS(command);
      },
      setContent(content, append) {
        if (!append || !this.imgList) {
          this.imgList = [];
        }
        const nodes = new Parser$1(this).parse(content);
        this.$set(this, "nodes", append ? (this.nodes || []).concat(nodes) : nodes);
        this._videos = [];
        this.$nextTick(() => {
          this._hook("onLoad");
          this.$emit("load");
        });
        if (this.lazyLoad || this.imgList._unloadimgs < this.imgList.length / 2) {
          let height = 0;
          const callback = (rect) => {
            if (!rect || !rect.height)
              rect = {};
            if (rect.height === height) {
              this.$emit("ready", rect);
            } else {
              height = rect.height;
              setTimeout(() => {
                this.getRect().then(callback).catch(callback);
              }, 350);
            }
          };
          this.getRect().then(callback).catch(callback);
        } else {
          if (!this.imgList._unloadimgs) {
            this.getRect().then((rect) => {
              this.$emit("ready", rect);
            }).catch(() => {
              this.$emit("ready", {});
            });
          }
        }
      },
      _hook(name) {
        for (let i2 = plugins.length; i2--; ) {
          if (this.plugins[i2][name]) {
            this.plugins[i2][name]();
          }
        }
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_node = vue.resolveComponent("node");
    return vue.openBlock(), vue.createElementBlock("view", {
      id: "_root",
      class: vue.normalizeClass(($props.selectable ? "_select " : "") + "_root"),
      style: vue.normalizeStyle($props.containerStyle)
    }, [
      !$data.nodes[0] ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createBlock(_component_node, {
        key: 1,
        childs: $data.nodes,
        opts: [$props.lazyLoad, $props.loadingImg, $props.errorImg, $props.showImgMenu, $props.selectable],
        name: "span"
      }, null, 8, ["childs", "opts"]))
    ], 6);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-a290f043"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/uni_modules/mp-html/components/mp-html/mp-html.vue"]]);
  const _sfc_main$h = {
    name: "uniCollapseItems",
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
    updated(e2) {
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
        formatAppLog("warn", "at uni_modules/uni-collapses/components/uni-collapse-items/uni-collapse-items.vue:155", `name \u503C ${this.nameSync} \u91CD\u590D`);
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
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$3);
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
              vue.createVNode(_component_uni_icons, {
                type: "paperclip",
                color: "#fff",
                size: "25"
              }),
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
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-c3bf187e"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/uni_modules/uni-collapses/components/uni-collapse-items/uni-collapse-items.vue"]]);
  const _sfc_main$g = {
    name: "uniCollapses",
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
                formatAppLog("warn", "at uni_modules/uni-collapses/components/uni-collapses/uni-collapses.vue:75", "accordion \u5C5E\u6027\u4E3A false ,v-model \u7C7B\u578B\u5E94\u8BE5\u4E3A array");
                return;
              }
              vm.isOpen = true;
            }
          }
          if (arr) {
            val.forEach((v) => {
              if (v === vm.nameSync) {
                if (this.accordion) {
                  formatAppLog("warn", "at uni_modules/uni-collapses/components/uni-collapses/uni-collapses.vue:85", "accordion \u5C5E\u6027\u4E3A true ,v-model \u7C7B\u578B\u5E94\u8BE5\u4E3A string");
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
  const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-b091aba3"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/uni_modules/uni-collapses/components/uni-collapses/uni-collapses.vue"]]);
  const _sfc_main$f = {
    data() {
      return {
        tagStyle: {
          blockquote: "max-width:100%;background:#f9f9f9;padding:5px 10px;border-left:3px solid #42b883;margin:10px 0px;",
          table: "width:100%;border:1px #eee solid;",
          td: "border:1px #eee solid;text-align:center;",
          th: "border:1px #eee solid;background-color:#ffc09f;"
        },
        height: "350px",
        data: {},
        haibao: "",
        html: false,
        url: "",
        status: "loading",
        id: "",
        page: 1,
        comment: "",
        downTitle: "",
        downUrl: "",
        appData: {
          data: {
            auditing: "0"
          }
        },
        arrays: [0],
        content: "<div style='background:#eee;height:25px;width:50%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:20px;width:80%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:20px;width:70%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:20px;width:50%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:20px;width:90%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:20px;width:30%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:25px;width:50%;border-radius:5px;margin-top:10px;'></div><div style='background:#eee;height:250px;width:100%;border-radius:5px;margin:10px auto;'></div>"
      };
    },
    onLoad(option) {
      this.id = option.id;
      var that = this;
      uni.getStorage({
        key: "set_data",
        success: function(res) {
          that.appData = res.data;
        },
        fail() {
          that.getData();
        }
      });
      this.blog(option.id);
      this.url = decodeURIComponent(option.url);
      this.show = !this.show;
      this.modeClass = "fade";
      this.addll(option.id);
    },
    onReachBottom() {
      this.page = this.page + 1;
      this.getComments(this.page, this.id);
    },
    onShow() {
      this.page = 0;
      this.comment = "";
      this.getComments(this.page, this.id);
      var that = this;
      uni.getStorage({
        key: "set_data",
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
        formatAppLog("log", "at pages/blog-info/blog-info.vue:253", res.target);
      }
      return {
        title: this.data.title,
        imageUrl: this.data.cover || this.appData.data.shareImg,
        path: "pages/blog-info/blog-info?id=" + this.data.id + "&url=" + this.url
      };
    },
    methods: {
      async getData() {
        const res = await htRequest({
          url: "/content/plugins/ApiSetting/api.php",
          method: "GET",
          data: {
            route: "getSetting"
          }
        });
        if (res.data.state > 0) {
          this.appData = res.data;
          uni.setStorage({
            key: "set_data",
            data: res.data
          });
        }
      },
      async getComments(page, gid) {
        const res = await htRequest({
          url: "/content/plugins/ApiSetting/manyApi.php?route=comments",
          method: "get",
          data: {
            gid,
            page
          }
        });
        if (res.data.data.list == "") {
          this.status = "no-more";
        } else {
          this.comment = [...this.comment, ...res.data.data.list];
        }
      },
      copy(e2) {
        uni.setClipboardData({
          data: e2,
          success: function() {
            uni.showModal({
              title: "\u6E29\u99A8\u63D0\u793A",
              content: "\u83B7\u53D6\u6210\u529F\uFF0C\u8BBE\u7F6E\u5230\u526A\u8D34\u677F"
            });
          }
        });
      },
      toComment(id, rid) {
        uni.navigateTo({
          url: "/pages/about/help?id=" + id + "&rid=" + rid
        });
      },
      openHtml() {
        this.height = "100%";
        this.html = !this.html;
      },
      closeHtml() {
        this.height = "350px";
        this.html = !this.html;
      },
      addll(e2) {
        uni.request({
          url: set.url + "/" + e2,
          method: "GET",
          timeout: "1000"
        });
      },
      weixin(scene) {
        uni.share({
          provider: "weixin",
          scene,
          title: this.data.title,
          type: 0,
          href: this.url,
          imageUrl: this.data.cover || this.appData.data.shareImg,
          summary: "\u6211\u6B63\u5728\u67E5\u770B\u6587\u7AE0" + this.data.title + "\uFF0C\u8D76\u7D27\u8DDF\u6211\u4E00\u8D77\u6765\u4F53\u9A8C\uFF01",
          success: function(res) {
            formatAppLog("log", "at pages/blog-info/blog-info.vue:340", "success:" + JSON.stringify(res));
          },
          fail: function(err) {
            formatAppLog("log", "at pages/blog-info/blog-info.vue:343", "fail:" + JSON.stringify(err));
          }
        });
      },
      qq() {
        uni.share({
          provider: "qq",
          type: 0,
          title: this.data.title,
          summary: "\u6211\u6B63\u5728\u67E5\u770B\u6587\u7AE0" + this.data.title + "\uFF0C\u8D76\u7D27\u8DDF\u6211\u4E00\u8D77\u6765\u4F53\u9A8C\uFF01",
          imageUrl: this.data.cover || this.appData.data.shareImg,
          href: this.url,
          success: function(res) {
            formatAppLog("log", "at pages/blog-info/blog-info.vue:356", "success:" + JSON.stringify(res));
          },
          fail: function(err) {
            formatAppLog("log", "at pages/blog-info/blog-info.vue:359", "fail:" + JSON.stringify(err));
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
      search(res) {
        uni.reLaunch({
          url: "../search/search?tag=1&keyword=" + res
        });
      },
      async blog(e2) {
        this.arrays;
        const res = await myRequest({
          url: "/?rest-api=article_detail",
          method: "GET",
          data: {
            id: e2
          }
        });
        res.data.data.article.content = res.data.data.article.content.replace(
          /\<img/gi,
          '<img class="rich-img" '
        );
        res.data.data.article.content = res.data.data.article.content.replace(
          /\<h1/gi,
          '<h1 class="rich-h1" '
        );
        res.data.data.article.content = res.data.data.article.content.replace(
          /\<h2/gi,
          '<h2 class="rich-h2" '
        );
        res.data.data.article.content = res.data.data.article.content.replace(
          /\<h3/gi,
          '<h3 class="rich-h3" '
        );
        res.data.data.article.content = res.data.data.article.content.replace(
          /\<h4/gi,
          '<h4 class="rich-h4" '
        );
        res.data.data.article.content = res.data.data.article.content.replace(
          /\<h5/gi,
          '<h5 class="rich-h5" '
        );
        res.data.data.article.content = res.data.data.article.content.replace(
          /\<h6/gi,
          '<h6 class="rich-h6" '
        );
        res.data.data.article.content = res.data.data.article.content.replace(
          /\.\.\/content\/upload/gi,
          set.url + "/content/upload"
        );
        var reg2 = /<miniTitle>(.*)<\/miniTitle>/;
        var regUrl = /<miniUrl>(.*)<\/miniUrl>/;
        this.downTitle = res.data.data.article.content.match(reg2) ? res.data.data.article.content.match(reg2)[1] : "";
        this.downUrl = res.data.data.article.content.match(regUrl) ? res.data.data.article.content.match(
          regUrl
        )[1] : "";
        res.data.data.article.content = res.data.data.article.content.replace(/百度网盘/gi, "****");
        this.data = res.data.data.article;
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$3);
    const _component_mp_html = resolveEasycom(vue.resolveDynamicComponent("mp-html"), __easycom_0$1);
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_1$1);
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_3);
    const _component_uni_collapse_items = resolveEasycom(vue.resolveDynamicComponent("uni-collapse-items"), __easycom_4);
    const _component_uni_collapses = resolveEasycom(vue.resolveDynamicComponent("uni-collapses"), __easycom_5);
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
            vue.createElementVNode("view", { class: "title" }, vue.toDisplayString($data.data.title || "\u6CA1\u6709\u8BE5\u6587\u7AE0\u6216\u52A0\u8F7D\u5931\u8D25..."), 1),
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
            vue.createElementVNode("view", {
              class: "openhtml",
              style: vue.normalizeStyle("height: " + $data.height + ";overflow: hidden;")
            }, [
              vue.createVNode(_component_mp_html, {
                "lozy-load": "true",
                "container-style": "overflow: hidden;",
                selectable: "true",
                "tag-style": $data.tagStyle,
                content: $data.data.content || $data.content
              }, null, 8, ["tag-style", "content"]),
              vue.createElementVNode("view", { class: "over" }, "\u2014\u2014 The End \u2014\u2014")
            ], 4),
            $data.html ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "htmlbtn",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.closeHtml && $options.closeHtml(...args))
            }, [
              vue.createTextVNode("\u6536\u8D77"),
              vue.createVNode(_component_uni_icons, {
                style: { "margin-left": "5px" },
                type: "top",
                size: "16"
              })
            ])) : vue.createCommentVNode("v-if", true),
            !$data.html ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "htmlbtn",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.openHtml && $options.openHtml(...args))
            }, [
              vue.createTextVNode("\u67E5\u770B\u66F4\u591A"),
              vue.createVNode(_component_uni_icons, {
                style: { "margin-left": "5px" },
                type: "bottom",
                size: "16"
              })
            ])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" \u6587\u7AE0\u9644\u4EF6"),
            $data.downTitle != "" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "Info-File"
            }, [
              vue.createElementVNode("view", { class: "File-title" }, " \u6587\u7AE0\u9644\u4EF6 "),
              vue.createElementVNode("view", { class: "File-content" }, [
                vue.createElementVNode("view", { class: "File-left" }, [
                  vue.createVNode(_component_uni_icons, {
                    color: "#23c1aa",
                    type: "circle-filled",
                    size: "20"
                  }),
                  vue.createTextVNode("\u8D44\u6E90\u540D\u79F0\uFF1A" + vue.toDisplayString($data.downTitle), 1)
                ]),
                vue.createElementVNode("view", { class: "File-right" }, [
                  vue.createElementVNode("view", {
                    class: "File-btn",
                    onClick: _cache[2] || (_cache[2] = ($event) => $options.copy($data.downUrl))
                  }, "\u7ACB\u5373\u83B7\u53D6")
                ])
              ])
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "Copyright-box" }, [
              vue.createElementVNode("view", { class: "Copyright-item" }, [
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
                ])
              ])
            ]),
            $data.data.tags != "" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 3,
              class: "tags"
            }, [
              vue.createElementVNode("view", { class: "tag-title" }, "\u6587\u7AE0\u6807\u7B7E"),
              vue.createElementVNode("view", { class: "tag-item" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.data.tags, (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", null, [
                    vue.createElementVNode("view", {
                      class: "tag",
                      onClick: ($event) => $options.search(item.name)
                    }, vue.toDisplayString(item.name), 9, ["onClick"])
                  ]);
                }), 256))
              ])
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createElementVNode("view", { class: "comment" }, [
            vue.createElementVNode("view", { class: "Cheader" }, [
              vue.createElementVNode("view", { class: "Ctitle" }, " \u95EE\u9898\u53CD\u9988 "),
              vue.createElementVNode("view", {
                style: { "display": "flex", "align-items": "center" },
                onClick: _cache[3] || (_cache[3] = ($event) => $options.toComment($data.id))
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "compose",
                  size: "18"
                }),
                vue.createTextVNode("\u53BB\u53CD\u9988 ")
              ])
            ]),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.comment, (item) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "comment-box",
                style: vue.normalizeStyle(item.parent ? "border:none" : "")
              }, [
                vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between" } }, [
                  vue.createElementVNode("view", {
                    class: "comment-header",
                    style: vue.normalizeStyle(item.parent ? "margin-left:40px;" : "")
                  }, [
                    vue.createElementVNode("image", {
                      src: "http://q2.qlogo.cn/headimg_dl?dst_uin=" + item.url.host + "&spec=100",
                      mode: ""
                    }, null, 8, ["src"]),
                    vue.createElementVNode("view", { class: "comment-title-box" }, [
                      vue.createElementVNode("view", { class: "comment-title" }, vue.toDisplayString(item.poster), 1),
                      vue.createElementVNode("view", { class: "comment-data" }, vue.toDisplayString(item.date), 1)
                    ])
                  ], 4),
                  vue.createElementVNode("view", { style: { "display": "flex", "align-items": "center", "margin-right": "10px" } }, [
                    vue.createElementVNode("view", {
                      class: "Chuifu",
                      onClick: ($event) => $options.toComment($data.id, item.cid)
                    }, [
                      vue.createVNode(_component_uni_icons, {
                        type: "more-filled",
                        size: "18"
                      })
                    ], 8, ["onClick"])
                  ])
                ]),
                vue.createElementVNode("view", { class: "comment-content" }, [
                  vue.createElementVNode("view", {
                    class: "comment-content-text",
                    style: vue.normalizeStyle(item.parent ? "margin-left:40px;" : "")
                  }, vue.toDisplayString(item.comment), 5)
                ])
              ], 4);
            }), 256)),
            vue.createVNode(_component_uni_load_more, {
              color: "#007AFF",
              status: $data.status,
              style: { "border-top": "5px solid #f9f9f9", "padding": "10px 0px" }
            }, null, 8, ["status"])
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
                    onClick: _cache[4] || (_cache[4] = ($event) => $options.qq())
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
                    onClick: _cache[5] || (_cache[5] = ($event) => $options.weixin("WXSceneSession"))
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
                    onClick: _cache[6] || (_cache[6] = ($event) => $options.weixin("WXSceneTimeline"))
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
  const PagesBlogInfoBlogInfo = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/pages/blog-info/blog-info.vue"]]);
  const _sfc_main$e = {
    data() {
      return {
        value: "",
        page: 1,
        list: "",
        flg: false
      };
    },
    onReachBottom() {
      this.page = this.page + 1;
      this.blog(this.page);
    },
    onShow() {
    },
    onLoad() {
      this.blog(1);
      var that = this;
      uni.getStorage({
        key: "apikey",
        success: function(res) {
          that.http(res.data);
        }
      });
    },
    methods: {
      async http(key) {
        const res = await myRequest({
          url: "/content/plugins/ApiSetting/api.php",
          method: "post",
          data: {
            admin: "getAdmin",
            key
          }
        });
        if (res.data.state == 200) {
          this.flg = true;
          this.value = res.data.data;
        } else {
          this.flg = false;
          uni.showModal({
            title: "\u63D0\u793A",
            content: "\u60A8\u4E0D\u662F\u7BA1\u7406\u5458",
            success: function(res2) {
              if (res2.confirm) {
                uni.navigateBack(1);
              } else if (res2.cancel) {
                uni.navigateBack(1);
              }
            }
          });
        }
      },
      async getBaidu(id, u2) {
        const res = await get({
          url: "https://data.zz.baidu.com/urls?site=" + u2 + "&token=" + this.value.baidu
        });
        if (res.data.error >= 400) {
          uni.showModal({
            title: "\u94FE\u63A5\u63D0\u4EA4\u5931\u8D25",
            content: `${res.data.message}`
          });
        } else if (res.data.error <= 400) {
          uni.showModal({
            title: "\u63D0\u4EA4\u6210\u529F",
            content: `\u5269\u4F59\u7684\u53EF\u63A8\u9001${res.data.remain}\u6761`
          });
        } else {
          uni.showModal({
            title: "\u63D0\u4EA4\u5931\u8D25",
            content: "\u8BF7\u68C0\u67E5\u914D\u7F6E\u662F\u5426\u6B63\u5E38"
          });
        }
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
          this.list = [...this.list, ...res.data.data.articles];
        }
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_list = resolveEasycom(vue.resolveDynamicComponent("list"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "baidu" }, [
      vue.createVNode(_component_list, {
        onEditBlog: $options.getBaidu,
        List: $data.list,
        xiangqing: "\u63D0\u4EA4\u94FE\u63A5",
        desc: "\u6765\u81EA\u6587\u7AE0\u5206\u7C7B:"
      }, null, 8, ["onEditBlog", "List"])
    ]);
  }
  const PagesBaiduBaidu = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/pages/baidu/baidu.vue"]]);
  const _sfc_main$d = {
    data() {
      return {
        data: "",
        status: false,
        swiperCurrent: 0,
        sexs: [{
          text: "\u5F00\u542F",
          value: 1
        }, {
          text: "\u5173\u95ED",
          value: 0
        }],
        value: "",
        model: {
          appkey: "",
          lbid: "",
          sortid: "",
          ridingLantern: "",
          shareImg: "",
          about: "",
          auditing: "",
          qq: "",
          videoAd: "",
          BannerAd: "",
          appVersion: "",
          appUrl: "",
          appContent: "",
          qiniuUrl: "",
          qiniukj: "",
          qiniuak: "",
          qiniusk: "",
          tianapi: "",
          baidu: ""
        }
      };
    },
    onLoad() {
      var that = this;
      uni.getStorage({
        key: "apikey",
        success: function(res) {
          that.value = res.data;
          that.http(res.data);
        }
      });
    },
    methods: {
      swiperChangeCustom(e2) {
        this.swiperCurrent = e2.detail.current;
      },
      auditing(e2) {
        if (e2.detail.value) {
          this.model.auditing = 1;
        } else {
          this.model.auditing = 0;
        }
      },
      async http(key) {
        const res = await myRequest({
          url: "/content/plugins/ApiSetting/api.php",
          method: "post",
          data: {
            admin: "getAdmin",
            key
          }
        });
        if (res.data.state == 0) {
          this.status = false;
        } else if (res.data.state == 200) {
          this.status = true;
          this.model = res.data.data;
        }
      },
      setting() {
        uni.navigateTo({
          url: "../setting/admin"
        });
      },
      async upDataAdmin() {
        Object.assign(this.model, {
          admin: "upDataAdmin"
        });
        const res = await myRequest({
          url: "/content/plugins/ApiSetting/api.php",
          method: "post",
          data: this.model
        });
        if (res.data.state == 201) {
          uni.showToast({
            title: "\u4E0D\u662F\u7BA1\u7406\u5458",
            icon: "error"
          });
        } else if (res.data.state == 200) {
          uni.showModal({
            title: "\u6E29\u99A8\u63D0\u793A\uFF01",
            content: "\u4FDD\u5B58\u6210\u529F\uFF01\u5DF2\u4E3A\u60A8\u66F4\u65B0\u672C\u5730\u8BBE\u7F6E\uFF01"
          });
          this.http();
        } else if (res.data.state == 204) {
          uni.showToast({
            title: "\u4FDD\u5B58\u5931\u8D25\u4E86",
            icon: "error"
          });
        } else {
          uni.showToast({
            title: `\u7F51\u7EDC\u9519\u8BEFx`,
            icon: "error"
          });
        }
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "admin" }, [
      vue.createElementVNode("view", { class: "tab" }, [
        vue.createElementVNode("view", {
          onClick: _cache[0] || (_cache[0] = ($event) => $data.swiperCurrent = 0),
          class: vue.normalizeClass("tab1 " + (0 == $data.swiperCurrent ? " active" : ""))
        }, "\u57FA\u7840", 2),
        vue.createElementVNode("view", {
          onClick: _cache[1] || (_cache[1] = ($event) => $data.swiperCurrent = 1),
          class: vue.normalizeClass("tab2 " + (1 == $data.swiperCurrent ? " active" : ""))
        }, "\u5E7F\u544A", 2),
        vue.createElementVNode("view", {
          onClick: _cache[2] || (_cache[2] = ($event) => $data.swiperCurrent = 2),
          class: vue.normalizeClass("tab3 " + (2 == $data.swiperCurrent ? " active" : ""))
        }, "App", 2),
        vue.createElementVNode("view", {
          onClick: _cache[3] || (_cache[3] = ($event) => $data.swiperCurrent = 3),
          class: vue.normalizeClass("tab4 " + (3 == $data.swiperCurrent ? " active" : ""))
        }, "\u66F4\u591A", 2)
      ]),
      vue.createElementVNode("swiper", {
        class: "swiper",
        current: $data.swiperCurrent,
        "easing-function": "easeInOutCubic",
        duration: 500,
        onChange: _cache[35] || (_cache[35] = (...args) => $options.swiperChangeCustom && $options.swiperChangeCustom(...args))
      }, [
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("scroll-view", {
            "scroll-top": _ctx.scrollTop,
            "scroll-y": true,
            class: "scroll-Y",
            onScrolltoupper: _cache[12] || (_cache[12] = (...args) => _ctx.upper && _ctx.upper(...args)),
            onScrolltolower: _cache[13] || (_cache[13] = (...args) => _ctx.lower && _ctx.lower(...args)),
            onScroll: _cache[14] || (_cache[14] = (...args) => _ctx.scroll && _ctx.scroll(...args))
          }, [
            vue.createElementVNode("view", { class: "page-body" }, [
              vue.createElementVNode("view", { class: "title" }, "APPkey:"),
              vue.createVNode(_component_uni_easyinput, {
                onClick: $options.setting,
                modelValue: $data.model.appkey,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.model.appkey = $event),
                disabled: "",
                placeholder: "\u8BF7\u5148\u8BBE\u7F6E\u7BA1\u7406\u5458\u4FE1\u606F,\u8BF7\u70B9\u51FB\u7BA1\u7406\u5458\u8BBE\u7F6E"
              }, null, 8, ["onClick", "modelValue"]),
              vue.createElementVNode("view", { class: "title" }, "\u8F6E\u64AD\u56FE:"),
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.model.lbid,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.model.lbid = $event),
                placeholder: "\u8BF7\u8F93\u5165\u6587\u7AE0ID\u7528\u82F1\u6587,\u9694\u5F00"
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "title" }, "\u9996\u9875\u4E13\u9898:"),
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.model.sortid,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.model.sortid = $event),
                placeholder: "\u8BF7\u8F93\u5165\u5206\u7C7BID\u7528\u82F1\u6587,\u9694\u5F00"
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "title" }, "\u9996\u9875\u516C\u544A:"),
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.model.ridingLantern,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.model.ridingLantern = $event),
                placeholder: "\u8BF7\u8F93\u5165\u516C\u544A\u5185\u5BB9"
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "title" }, "\u7AD9\u957FQQ:"),
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.model.qq,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.model.qq = $event),
                placeholder: "\u8BF7\u8F93\u5165QQ"
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "title" }, "\u5206\u4EAB\u56FE\u7247:"),
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.model.shareImg,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.model.shareImg = $event),
                placeholder: "\u8BF7\u8F93\u5165Url"
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "title" }, "\u5173\u4E8E\u6211\u4EEC:"),
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.model.about,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.model.about = $event),
                placeholder: "\u8BF7\u8F93\u5165\u6587\u7AE0ID"
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "title flex" }, [
                vue.createTextVNode("\u5BA1\u6838\u6A21\u5F0F: "),
                vue.createElementVNode("switch", {
                  checked: $data.model.auditing == 1 ? true : false,
                  onChange: _cache[11] || (_cache[11] = (...args) => $options.auditing && $options.auditing(...args))
                }, null, 40, ["checked"])
              ])
            ])
          ], 40, ["scroll-top"])
        ]),
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("scroll-view", {
            "scroll-top": _ctx.scrollTop,
            "scroll-y": true,
            class: "scroll-Y",
            onScrolltoupper: _cache[17] || (_cache[17] = (...args) => _ctx.upper && _ctx.upper(...args)),
            onScrolltolower: _cache[18] || (_cache[18] = (...args) => _ctx.lower && _ctx.lower(...args)),
            onScroll: _cache[19] || (_cache[19] = (...args) => _ctx.scroll && _ctx.scroll(...args))
          }, [
            vue.createElementVNode("view", { class: "page-body" }, [
              vue.createElementVNode("view", { class: "title" }, "\u89C6\u9891\u5E7F\u544A:"),
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.model.videoAd,
                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $data.model.videoAd = $event),
                placeholder: "\u8BF7\u8F93\u5165\u89C6\u9891\u5E7F\u544AID"
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "title" }, "Banner\u5E7F\u544A:"),
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.model.BannerAd,
                "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $data.model.BannerAd = $event),
                placeholder: "\u8BF7\u8F93\u5165BannerID"
              }, null, 8, ["modelValue"])
            ])
          ], 40, ["scroll-top"])
        ]),
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("scroll-view", {
            "scroll-top": _ctx.scrollTop,
            "scroll-y": true,
            class: "scroll-Y",
            onScrolltoupper: _cache[23] || (_cache[23] = (...args) => _ctx.upper && _ctx.upper(...args)),
            onScrolltolower: _cache[24] || (_cache[24] = (...args) => _ctx.lower && _ctx.lower(...args)),
            onScroll: _cache[25] || (_cache[25] = (...args) => _ctx.scroll && _ctx.scroll(...args))
          }, [
            vue.createElementVNode("view", { class: "page-body" }, [
              vue.createElementVNode("view", { class: "title" }, "app\u7248\u672C\u53F7:"),
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.model.appVersion,
                "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => $data.model.appVersion = $event),
                placeholder: "\u8BF7\u8F93\u5165\u7248\u672C\u53F7"
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "title" }, "App\u4E0B\u8F7D\u94FE\u63A5:"),
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.model.appUrl,
                "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => $data.model.appUrl = $event),
                placeholder: "\u8BF7\u8F93\u5165\u4E0B\u8F7D\u94FE\u63A5"
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "title" }, "\u66F4\u65B0\u5185\u5BB9:"),
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.model.appContent,
                "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => $data.model.appContent = $event),
                placeholder: "\u8BF7\u8F93\u5165\u4E0B\u8F7D\u66F4\u65B0\u5185\u5BB9,\u5C3D\u91CF\u7B80\u77ED"
              }, null, 8, ["modelValue"])
            ])
          ], 40, ["scroll-top"])
        ]),
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("scroll-view", {
            "scroll-top": _ctx.scrollTop,
            "scroll-y": true,
            class: "scroll-Y",
            onScrolltoupper: _cache[32] || (_cache[32] = (...args) => _ctx.upper && _ctx.upper(...args)),
            onScrolltolower: _cache[33] || (_cache[33] = (...args) => _ctx.lower && _ctx.lower(...args)),
            onScroll: _cache[34] || (_cache[34] = (...args) => _ctx.scroll && _ctx.scroll(...args))
          }, [
            vue.createElementVNode("view", { class: "page-body" }, [
              vue.createElementVNode("view", { class: "title" }, "\u4E03\u725B\u7A7A\u95F4\u540D:"),
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.model.qiniukj,
                "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => $data.model.qiniukj = $event),
                placeholder: "\u8BF7\u8F93\u5165\u7A7A\u95F4\u540D"
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "title" }, "\u4E03\u725B\u7ED1\u5B9A\u7684\u57DF\u540D:"),
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.model.qiniuUrl,
                "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => $data.model.qiniuUrl = $event),
                placeholder: "\u8BF7\u8F93\u5165\u94FE\u63A5"
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "title" }, "\u4E03\u725BAK:"),
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.model.qiniuak,
                "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => $data.model.qiniuak = $event),
                placeholder: "\u8BF7\u8F93\u5165\u4E03\u725BAK"
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "title" }, "\u4E03\u725BSK:"),
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.model.qiniusk,
                "onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => $data.model.qiniusk = $event),
                placeholder: "\u8BF7\u8F93\u5165\u4E03\u725BSK"
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "title" }, "\u5929\u884C\u6570\u636E\u5BC6\u94A5:"),
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.model.tianapi,
                "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => $data.model.tianapi = $event),
                placeholder: "\u8BF7\u8F93\u5165\u5BC6\u94A5"
              }, null, 8, ["modelValue"]),
              vue.createElementVNode("view", { class: "title" }, "\u767E\u5EA6\u94FE\u63A5\u63D0\u4EA4token:"),
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.model.baidu,
                "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => $data.model.baidu = $event),
                placeholder: "\u8BF7\u8F93\u5165\u767E\u5EA6token"
              }, null, 8, ["modelValue"])
            ])
          ], 40, ["scroll-top"])
        ])
      ], 40, ["current"]),
      $data.status ? (vue.openBlock(), vue.createElementBlock("button", {
        key: 0,
        class: "active fixed",
        onClick: _cache[36] || (_cache[36] = (...args) => $options.upDataAdmin && $options.upDataAdmin(...args))
      }, "\u4FDD\u5B58\u8BBE\u7F6E")) : (vue.openBlock(), vue.createElementBlock("button", {
        key: 1,
        class: "active fixed",
        onClick: _cache[37] || (_cache[37] = (...args) => $options.setting && $options.setting(...args))
      }, "\u7BA1\u7406\u5458\u8BBE\u7F6E"))
    ]);
  }
  const PagesSettingSetting = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/pages/setting/setting.vue"]]);
  const _sfc_main$c = {
    data() {
      return {
        description: "",
        sorts: [],
        appData: "",
        sid: "",
        sortname: ""
      };
    },
    onLoad: function(options) {
      this.getSorts();
      this.getSetting();
    },
    onShareAppMessage: function(res) {
      return {
        title: "",
        imageUrl: "https://api.ixiaowai.cn/api/api.php",
        path: ""
      };
    },
    onShow() {
      this.getSetting();
    },
    methods: {
      async getSorts() {
        const res = await myRequest({
          url: "/?rest-api=sort_list",
          method: "GET"
        });
        this.sorts = res.data.data.sorts;
      },
      getSetting() {
        var that = this;
        uni.getStorage({
          key: "set_data",
          success: function(res) {
            that.appData = res.data;
          }
        });
      },
      goSortLogs: function(sid, sortname) {
        uni.navigateTo({
          url: "../sort-info/sort-info?id=" + sid + "&sortname=" + sortname
        });
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_null = resolveEasycom(vue.resolveDynamicComponent("null"), __easycom_3$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" pages/sorts/sorts.wxml  emlog\u535A\u5BA2\u5C0F\u7A0B\u5E8FBrief\u4F5C\u8005QQ\uFF1A6283354\uFF0C\u8BF7\u4FDD\u7559\u8BE5\u7248\u6743\uFF01 "),
      vue.createElementVNode("view", { class: "categorie-header" }, [
        vue.createElementVNode("view", { class: "categorie-text" }, [
          vue.createElementVNode("text", null, "\u535A\u5BA2\u5206\u7C7B"),
          vue.createElementVNode("view", null, "\u6210\u5C31\u66F4\u597D\u7684\u6211\uFF0C\u9047\u4E0A\u66F4\u597D\u7684\u4F60\uFF01")
        ]),
        vue.createElementVNode("image", {
          src: "https://cdn.hkiii.cn/cg/10.jpeg",
          mode: "aspectFill"
        })
      ]),
      $data.appData.state == 200 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "sorts"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.sorts, (item) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "sortbox",
            onClick: ($event) => $options.goSortLogs(item.sid, item.sortname)
          }, [
            vue.createElementVNode("view", { class: "item-link" }, [
              vue.createElementVNode("view", { class: "sortimage" }, [
                vue.createElementVNode("image", {
                  src: "https://cdn.hkiii.cn/cg/" + item.sid + ".jpeg"
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("view", { class: "sorttitle" }, vue.toDisplayString(item.sortname), 1),
              vue.createElementVNode("view", { class: "sortsummary" }, vue.toDisplayString(item.description), 1)
            ])
          ], 8, ["onClick"]);
        }), 256))
      ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
        vue.createVNode(_component_null)
      ]))
    ]);
  }
  const PagesSortsSorts = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/pages/sorts/sorts.vue"]]);
  const _sfc_main$b = {
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
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_mp_html = resolveEasycom(vue.resolveDynamicComponent("mp-html"), __easycom_0$1);
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
  const PagesAboutAbout = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/pages/about/about.vue"]]);
  const _sfc_main$a = {
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
      async blog(e2) {
        var gid = this.gid || gid;
        const res = await myRequest({
          url: "/?rest-api=article_detail",
          method: "GET",
          data: {
            id: e2
          }
        });
        var success = res.data.data.article.content;
        var nr = success.match(/<a (.*)a>/gi);
        this.data = nr;
        formatAppLog("log", "at pages/down/down.vue:46", this.data);
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_mp_html = resolveEasycom(vue.resolveDynamicComponent("mp-html"), __easycom_0$1);
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
  const PagesDownDown = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/pages/down/down.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {
        id: "",
        page: 1,
        dataa: "",
        status: "loading"
      };
    },
    onLoad(option) {
      this.blog(1, option.id);
      this.id = option.id;
      uni.setNavigationBarTitle({
        title: option.sortname
      });
    },
    onReachBottom() {
      this.page = this.page + 1;
      this.blog(this.page, this.id);
    },
    onPullDownRefresh() {
      this.dataa = "";
      this.status = "loading";
      this.page = 1;
      this.blog(this.page, this.id);
      uni.stopPullDownRefresh();
    },
    methods: {
      delHtmlTag(str) {
        var reg2 = RegExp("<.*?>+|\n|\r", "ig");
        var result = str.replace(reg2, "");
        return result;
      },
      imageError(e2, index2) {
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
      toInfo(e2, u2) {
        uni.navigateTo({
          url: "/pages/blog-info/blog-info?id=" + e2 + "&url=" + u2
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
      },
      getDateBeforeNow(stringTime) {
        stringTime = new Date(stringTime.replace(/-/g, "/"));
        var minute = 1e3 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var week = day * 7;
        var month = day * 30;
        var year = month * 12;
        var time1 = new Date().getTime();
        var time2 = new Date(stringTime).getTime();
        var time = time1 - time2;
        var result = null;
        if (time < 0) {
          result = stringTime;
        } else if (time / year >= 1) {
          result = parseInt(time / year) + "\u5E74\u524D";
        } else if (time / month >= 1) {
          result = parseInt(time / month) + "\u6708\u524D";
        } else if (time / week >= 1) {
          result = parseInt(time / week) + "\u5468\u524D";
        } else if (time / day >= 1) {
          result = parseInt(time / day) + "\u5929\u524D";
        } else if (time / hour >= 1) {
          result = parseInt(time / hour) + "\u5C0F\u65F6\u524D";
        } else if (time / minute >= 1) {
          result = parseInt(time / minute) + "\u5206\u949F\u524D";
        } else {
          result = "\u521A\u521A";
        }
        return result;
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$3);
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_1$1);
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
                  vue.createElementVNode("view", { class: "comments" }, vue.toDisplayString($options.getDateBeforeNow(item.date)), 1)
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
                  vue.createElementVNode("view", { class: "comments" }, vue.toDisplayString($options.getDateBeforeNow(item.date)), 1)
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
    ], 64);
  }
  const PagesSortInfoSortInfo = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/pages/sort-info/sort-info.vue"]]);
  const _sfc_main$8 = {
    name: "cmd-circle",
    props: {
      cid: {
        type: String,
        default: "defaultCanvas"
      },
      type: {
        type: String,
        validator: (val) => {
          return ["circle", "dashboard"].includes(val);
        },
        default: "circle"
      },
      percent: {
        type: Number,
        validator: (val) => {
          return val >= 0 && val <= 100;
        },
        default: 0
      },
      showInfo: {
        type: Boolean,
        default: true
      },
      fontColor: {
        type: String,
        default: "#595959"
      },
      fontSize: {
        type: Number,
        default: 14
      },
      status: {
        type: String,
        validator: (val) => {
          return ["normal", "success", "exception"].includes(val);
        },
        default: "normal"
      },
      strokeWidth: {
        type: Number,
        default: 6
      },
      strokeColor: {
        type: String,
        default: ""
      },
      strokeBackground: {
        type: String,
        default: "#eeeeee"
      },
      strokeShape: {
        type: String,
        validator: (val) => {
          return ["round", "square"].includes(val);
        },
        default: "round"
      },
      width: {
        type: Number,
        default: 80
      },
      gapDegree: {
        type: Number,
        validator: (val) => {
          return val >= 0 && val <= 360;
        },
        default: 360
      },
      gapPosition: {
        type: String,
        validator: (val) => {
          return ["top", "bottom", "left", "right"].includes(val);
        },
        default: "top"
      }
    },
    data() {
      return {
        ctx: {},
        width2px: ""
      };
    },
    computed: {
      calCircleStyle() {
        return `width: ${this.width}px;
				height: ${this.width}px;`;
      },
      calStatus() {
        let status = {};
        switch (this.status) {
          case "normal":
            status = {
              color: "#1890ff",
              value: 1
            };
            break;
          case "success":
            status = {
              color: "#52c41a",
              value: 2
            };
            break;
          case "exception":
            status = {
              color: "#f5222d",
              value: 3
            };
            break;
        }
        return status;
      },
      calGapDegree() {
        return this.gapDegree <= 0 ? 360 : this.gapDegree;
      },
      calGapPosition() {
        let gapPosition = 0;
        switch (this.gapPosition) {
          case "bottom":
            gapPosition = 90;
            break;
          case "left":
            gapPosition = 180;
            break;
          case "top":
            gapPosition = 270;
            break;
          case "right":
            gapPosition = 360;
            break;
        }
        return gapPosition;
      }
    },
    watch: {
      percent(val) {
        this.drawStroke(val);
      }
    },
    mounted() {
      this.ctx = uni.createCanvasContext(this.cid, this);
      this.width2px = uni.upx2px(this.width);
      this.$nextTick(() => {
        this.drawStroke(this.percent);
      });
    },
    methods: {
      drawStroke(percent) {
        percent = percent >= 100 ? 100 : percent < 0 ? 0 : percent;
        let color = this.strokeColor || this.calStatus.color;
        if (this.showInfo) {
          switch (this.calStatus.value) {
            case 1:
              if (percent >= 100) {
                this.drawSuccess();
                percent = 100;
                color = "#52c41a";
              } else {
                this.drawText(percent);
              }
              break;
            case 2:
              this.drawSuccess();
              percent = 100;
              color = "#52c41a";
              break;
            case 3:
              this.drawException();
              percent = 0;
              color = "#f5222d";
              break;
          }
        }
        let gapPosition = this.calGapPosition;
        let gapDegree = this.calGapDegree;
        if (this.type === "dashboard") {
          gapPosition = 135;
          gapDegree = 270;
        }
        this.ctx.setLineCap(this.strokeShape);
        this.ctx.setLineWidth(this.strokeWidth);
        this.ctx.translate(this.width2px, this.width2px);
        this.ctx.rotate(gapPosition * Math.PI / 180);
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.width2px - this.strokeWidth, 0, gapDegree * Math.PI / 180);
        this.ctx.setStrokeStyle(this.strokeBackground);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.width2px - this.strokeWidth, 0, percent * gapDegree * Math.PI / 18e3);
        this.ctx.setStrokeStyle(color);
        this.ctx.stroke();
        this.ctx.draw();
      },
      drawText(percent) {
        this.ctx.beginPath();
        this.ctx.setFontSize(this.fontSize);
        this.ctx.setFillStyle(this.fontColor);
        this.ctx.setTextAlign("center");
        this.ctx.fillText(`${percent}%`, this.width2px, this.width2px + this.fontSize / 2);
        this.ctx.stroke();
      },
      drawSuccess() {
        let x = this.width2px - this.fontSize / 2;
        let y = this.width2px + this.fontSize / 2;
        this.ctx.beginPath();
        this.ctx.setLineCap("round");
        this.ctx.setLineWidth(this.fontSize / 4);
        this.ctx.moveTo(this.width2px, y);
        this.ctx.lineTo(y, x);
        this.ctx.moveTo(this.width2px, y);
        this.ctx.lineTo(x, this.width2px);
        this.ctx.setStrokeStyle("#52c41a");
        this.ctx.stroke();
      },
      drawException() {
        let x = this.width2px - this.fontSize / 2;
        let y = this.width2px + this.fontSize / 2;
        this.ctx.beginPath();
        this.ctx.setLineCap("round");
        this.ctx.setLineWidth(this.fontSize / 4);
        this.ctx.moveTo(x, x);
        this.ctx.lineTo(y, y);
        this.ctx.moveTo(y, x);
        this.ctx.lineTo(x, y);
        this.ctx.setStrokeStyle("#f5222d");
        this.ctx.stroke();
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "cmd-circle" }, [
      vue.createElementVNode("canvas", {
        "canvas-id": $props.cid,
        style: vue.normalizeStyle($options.calCircleStyle)
      }, null, 12, ["canvas-id"])
    ]);
  }
  const cmdCircle = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-0affc4f6"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/components/cmd-circle/cmd-circle.vue"]]);
  const _sfc_main$7 = {
    components: {
      cmdCircle
    },
    data() {
      return {
        dshow: false,
        visible: false,
        progress: 0,
        contents: "",
        downloading: false,
        success: true,
        forceupgrade: false,
        downloadTask: []
      };
    },
    props: {
      newVersion: String,
      currentVersion: String,
      theme: {
        type: String,
        default: "red"
      },
      type: {
        type: String,
        default: "pkg"
      },
      url: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: "\u7248\u672C\u66F4\u65B0"
      },
      content: {
        type: String,
        default: ""
      }
    },
    watch: {},
    methods: {
      upgrade_break() {
        this.downloadTask.abort();
        this.downloading = false;
      },
      upgrade_cancel() {
        this.dshow = false;
      },
      show() {
        if (this.success) {
          this.dshow = true;
        }
      },
      hide() {
        this.dshow = false;
      },
      onCancelClick() {
        this.hide();
      },
      async postPlatformAndNewVersion(platform2) {
        let res = await getApp().globalData.request.post("common/versioncount", {
          platform: platform2,
          versionnum: this.newVersion
        });
        formatAppLog("log", "at components/yomol-upgrade/yomol-upgrade.vue:135", "\u7248\u672C\u53F7\u53D1\u9001\uFF1A", res);
      },
      onSureClick() {
        var that = this;
        var platform2 = uni.getSystemInfoSync().platform;
        this.postPlatformAndNewVersion(platform2);
        if (platform2 == "ios" && this.type == "pkg") {
          plus.runtime.openURL(this.url);
        } else {
          this.downloading = true;
          this.dshow = true;
          this.downloadTask = uni.downloadFile({
            url: this.url,
            success: (downloadResult) => {
              formatAppLog("log", "at components/yomol-upgrade/yomol-upgrade.vue:155", downloadResult);
              if (downloadResult.statusCode === 200) {
                plus.runtime.install(downloadResult.tempFilePath, {
                  force: false
                }, function() {
                  plus.runtime.restart();
                }, (e2) => {
                  formatAppLog("log", "at components/yomol-upgrade/yomol-upgrade.vue:162", e2);
                  this.success = false;
                  uni.showToast({
                    title: "\u5B89\u88C5\u5347\u7EA7\u5305\u5931\u8D25",
                    icon: "none"
                  });
                });
              }
            }
          });
          this.downloadTask.onProgressUpdate((res) => {
            that.progress = res.progress;
            if (res.progress == Infinity) {
              let progress = res.totalBytesWritten / this.size * 100;
              if (progress > 100) {
                progress = 100;
              }
              that.progress = progress;
            }
          });
        }
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["zy-modal", $data.dshow ? "show" : ""])
      }, [
        vue.createElementVNode("view", {
          class: "zy-dialog",
          style: { "background-color": "transparent" }
        }, [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["padding-top text-white", "zy-upgrade-topbg-" + $props.theme])
          }, [
            vue.createElementVNode("view", null, [
              vue.createElementVNode("text", { class: "zy-upgrade-title" }, " \u53D1\u73B0\u65B0\u7248\u672C ")
            ]),
            vue.createElementVNode("text", { class: "flex-wrap" }, vue.toDisplayString($props.currentVersion) + "->" + vue.toDisplayString($props.newVersion), 1)
          ], 2),
          vue.createElementVNode("view", { class: "padding-xl bg-white text-left" }, [
            !$data.downloading ? (vue.openBlock(), vue.createElementBlock("scroll-view", {
              key: 0,
              style: { "max-height": "200rpx" },
              "scroll-y": "auto"
            }, [
              vue.createElementVNode("text", null, vue.toDisplayString($props.content), 1)
            ])) : vue.createCommentVNode("v-if", true),
            $data.downloading ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "zy-progress radius striped active"
            }, [
              vue.createElementVNode("view", {
                class: vue.normalizeClass("bg-" + $props.theme),
                style: vue.normalizeStyle("width: " + $data.progress + "%;")
              }, vue.toDisplayString($data.progress), 7)
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createElementVNode("view", { class: "zy-bar bg-white justify-end" }, [
            !$data.downloading ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "action"
            }, [
              vue.createElementVNode("button", {
                class: vue.normalizeClass(["zy-btn", "bg-" + $props.theme]),
                onClick: _cache[0] || (_cache[0] = (...args) => $options.onSureClick && $options.onSureClick(...args))
              }, "\u786E\u8BA4\u5347\u7EA7", 2),
              !$data.downloading ? (vue.openBlock(), vue.createElementBlock("button", {
                key: 0,
                class: vue.normalizeClass(["zy-btn margin-left", "line-" + $props.theme]),
                onClick: _cache[1] || (_cache[1] = (...args) => $options.upgrade_cancel && $options.upgrade_cancel(...args))
              }, "\u53D6\u6D88\u5347\u7EA7", 2)) : vue.createCommentVNode("v-if", true)
            ])) : vue.createCommentVNode("v-if", true),
            $data.downloading ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "action text-center"
            }, [
              vue.createElementVNode("button", {
                class: vue.normalizeClass(["zy-btn", "bg-" + $props.theme]),
                onClick: _cache[2] || (_cache[2] = (...args) => $options.upgrade_break && $options.upgrade_break(...args))
              }, "\u4E2D\u65AD\u5347\u7EA7", 2)
            ])) : vue.createCommentVNode("v-if", true)
          ])
        ])
      ], 2),
      vue.createCommentVNode(' <view v-if="visible" class="mark">\r\n		<view class="view">\r\n			<text class="title">{{title}}</text>\r\n			<view class="tip">\u65B0\u7248\u66F4\u65B0\u5185\u5BB9</view>\r\n			<scroll-view class="scroll" scroll-y>\r\n				<view class="item" v-for="(item,index) in contents" :key="index">\r\n					{{item}}\r\n				</view>\r\n			</scroll-view>\r\n			<view v-if="!downloading" class="btns">\r\n				<image class="icon" src="/static/images/system/user/upgrade.png"></image>\r\n				<view class="sure" @click="onSureClick()">\u9A6C\u4E0A\u5347\u7EA7</view>\r\n			</view>\r\n			<cmd-circle v-else class="progress" type="circle" stroke-color="#5D79F7" :percent="progress"></cmd-circle>\r\n		</view>\r\n	</view> ')
    ], 2112);
  }
  const yomolUpgrade = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-2f28e2a0"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/components/yomol-upgrade/yomol-upgrade.vue"]]);
  const _sfc_main$6 = {
    components: {
      yomolUpgrade
    },
    data() {
      return {
        banbenhao: "1.1.0",
        shoulu: "",
        sogo: "",
        upgradeType: "",
        upgradeContent: "",
        upgradeUrl: "",
        avatarUrl: "http://cdn.hkiii.cn//img/_2022/06/30/12/54/49/747/6483441/7812966043841394587",
        homelist: [
          {
            img: "../../static/home/bangzhuzhongxin.png",
            text: "\u95EE\u9898\u53CD\u9988",
            url: "../about/help"
          },
          {
            img: "../../static/home/guanyuwomen.png",
            text: "\u94FE\u63A5\u63D0\u4EA4",
            url: "../baidu/baidu"
          },
          {
            img: "../../static/home/zhanghuguanli.png",
            text: "\u7A0B\u5E8F\u7BA1\u7406",
            url: "../setting/admin"
          }
        ],
        appData: {
          data: {
            tianapi: ""
          }
        }
      };
    },
    computed: {
      ...mapState(["isLogin"])
    },
    mounted() {
    },
    onShow() {
      var that = this;
      uni.getStorage({
        key: "set_data",
        success: function(res) {
          that.appData = res.data;
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
      ...mapMutations(["login", "loginOut"]),
      toLogin() {
        uni.navigateTo({
          url: "/pages/login/login"
        });
      },
      compare(curV, reqV) {
        if (curV && reqV) {
          var arr1 = curV.split("."), arr2 = reqV.split(".");
          var minLength = Math.min(arr1.length, arr2.length), position = 0, diff = 0;
          while (position < minLength && (diff = parseInt(arr1[position]) - parseInt(arr2[position])) == 0) {
            position++;
          }
          diff = diff != 0 ? diff : arr1.length - arr2.length;
          return diff > 0;
        } else {
          return false;
        }
      },
      version() {
        var flg = this.compare(this.appData.data.appVersion, this.banbenhao);
        if (flg) {
          this.upgradeType = "pkg";
          this.upgradeUrl = this.appData.data.appUrl;
          this.$refs.yomolUpgrade.show();
        } else {
          uni.showToast({
            title: "\u5DF2\u7ECF\u662F\u6700\u65B0\u7248\u672C",
            icon: "success"
          });
        }
      },
      edit() {
        var that = this;
        uni.showModal({
          title: "\u63D0\u793A",
          content: "\u786E\u5B9A\u8981\u9000\u51FA\u767B\u5F55\u5417\uFF1F",
          success: function(res) {
            if (res.confirm) {
              that.editt();
            } else if (res.cancel)
              ;
          }
        });
      },
      async editt() {
        await htRequest({
          url: "/admin/account.php?action=logout"
        });
        uni.showModal({
          title: "\u6E29\u99A8\u63D0\u793A",
          content: "\u9000\u51FA\u6210\u529F\uFF01"
        });
        this.loginOut();
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
              formatAppLog("log", "at pages/home/home.vue:265", "\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
            }
          }
        });
      },
      about(e2) {
        uni.navigateTo({
          url: "/pages/blog-info/blog-info?id=" + e2
        });
      },
      ys() {
        uni.showModal({
          title: "\u6E29\u99A8\u63D0\u793A",
          content: "\u672C\u7A0B\u5E8F\u627F\u8BFA\u4E0D\u4FDD\u7559\u4EFB\u4F55\u7528\u6237\u4FE1\u606F\uFF0C\u7528\u6237\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u5B58\u7559\u7684\u6570\u636E\u53EF\u5728\u672C\u9875\u9762\uFF08\u6E05\u9664\u7F13\u5B58\uFF09\u4E2D\u6E05\u7406\uFF01"
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
              formatAppLog("log", "at pages/home/home.vue:294", "\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
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
      async baidu(u2, k) {
        var that = this;
        var urlNoProtocol = set.url.replace(/^https?\:\/\//i, "");
        const res = await apiRequest({
          url: u2,
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
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$3);
    const _component_yomolUpgrade = vue.resolveComponent("yomolUpgrade");
    return vue.openBlock(), vue.createElementBlock("view", { class: "centent" }, [
      _ctx.isLogin == false ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "banner-box",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.toLogin && $options.toLogin(...args))
      }, [
        vue.createElementVNode("view", { class: "box-img" }, [
          vue.createElementVNode("image", { src: $data.avatarUrl }, null, 8, ["src"])
        ]),
        vue.createElementVNode("view", { class: "user-nick" }, "\u60A8\u597D\uFF0C\u8BF7\u767B\u5F55")
      ])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "banner-box"
      }, [
        vue.createElementVNode("view", { class: "box-img" }, [
          vue.createElementVNode("image", { src: $data.avatarUrl }, null, 8, ["src"])
        ]),
        vue.createElementVNode("view", { class: "user-nick" }, "\u60A8\u597D\uFF0C\u5DF2\u767B\u9646")
      ])),
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
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.homelist, (i2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "homelist-item",
            onClick: ($event) => $options.go(i2.url)
          }, [
            vue.createElementVNode("image", {
              class: "homelist-img",
              src: i2.img
            }, null, 8, ["src"]),
            vue.createElementVNode("view", { style: { "font-size": "12px", "font-weight": "200" } }, vue.toDisplayString(i2.text), 1)
          ], 8, ["onClick"]);
        }), 256))
      ]),
      ($data.appData.data.tianapi == "" ? false : true) ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "baidu-box"
      }, [
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
            vue.createElementVNode("view", { class: "sl-content" }, vue.toDisplayString($data.sogo == "" ? "\u6682\u65E0\u6536\u5F55" : "\u83B7\u53D6\u4E2D..."), 1)
          ]),
          vue.createVNode(_component_uni_icons, {
            onClick: _cache[3] || (_cache[3] = ($event) => $options.shua("sogo")),
            color: "#aaa",
            type: "refreshempty",
            size: "20"
          })
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { class: "home-item" }, [
        vue.createElementVNode("view", { class: "home-a" }, [
          vue.createElementVNode("view", { class: "home-a-a" }, "\u7248\u672C\u4FE1\u606F"),
          vue.createElementVNode("view", { class: "home-a-b" }, "V" + vue.toDisplayString($data.banbenhao), 1)
        ]),
        vue.createElementVNode("view", { class: "home-a" }, [
          vue.createElementVNode("view", { class: "home-a-a" }, "\u9875\u9762\u5F00\u53D1"),
          vue.createElementVNode("view", { class: "home-a-b" }, "\u5927\u5F6DSir")
        ]),
        vue.createElementVNode("view", {
          class: "home-b",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.about($data.appData.data.about))
        }, [
          vue.createElementVNode("view", { class: "home-a-a" }, "\u5173\u4E8E\u6211\u4EEC"),
          vue.createElementVNode("view", { class: "home-a-c" }, [
            vue.createVNode(_component_uni_icons, {
              type: "info-filled",
              color: "#666",
              size: "20"
            })
          ])
        ]),
        vue.createElementVNode("view", {
          class: "home-b",
          onClick: _cache[5] || (_cache[5] = ($event) => $options.go("../setting/setting"))
        }, [
          vue.createElementVNode("view", { class: "home-a-a" }, "\u63A5\u53E3\u8BBE\u7F6E"),
          vue.createElementVNode("view", { class: "home-a-c" }, [
            vue.createVNode(_component_uni_icons, {
              type: "gear-filled",
              size: "20",
              color: "#666"
            })
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "home-item" }, [
        vue.createElementVNode("view", {
          class: "home-a",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.version && $options.version(...args))
        }, [
          vue.createElementVNode("view", { class: "home-a-a" }, "\u5E94\u7528\u66F4\u65B0"),
          vue.createElementVNode("view", { class: "home-a-b" }, [
            vue.createVNode(_component_uni_icons, {
              type: "cloud-upload-filled",
              size: "20"
            })
          ])
        ]),
        vue.createElementVNode("view", {
          class: "home-a",
          onClick: _cache[7] || (_cache[7] = (...args) => $options.ys && $options.ys(...args))
        }, [
          vue.createElementVNode("view", { class: "home-a-a" }, "\u9690\u79C1\u534F\u8BAE"),
          vue.createElementVNode("view", { class: "home-a-b" }, [
            vue.createVNode(_component_uni_icons, {
              type: "map-filled",
              size: "20"
            })
          ])
        ]),
        vue.createElementVNode("view", {
          class: "home-a",
          onClick: _cache[8] || (_cache[8] = ($event) => $options.clear())
        }, [
          vue.createElementVNode("view", { class: "home-a-a" }, "\u6E05\u9664\u7F13\u5B58"),
          vue.createElementVNode("view", { class: "home-a-b" }, [
            vue.createVNode(_component_uni_icons, {
              type: "refresh-filled",
              size: "20"
            })
          ])
        ]),
        _ctx.isLogin == true ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "home-a",
          onClick: _cache[9] || (_cache[9] = ($event) => $options.edit())
        }, [
          vue.createElementVNode("view", { class: "home-a-a" }, "\u9000\u51FA\u767B\u5F55"),
          vue.createElementVNode("view", { class: "home-a-b" }, [
            vue.createVNode(_component_uni_icons, {
              type: "clear",
              size: "20"
            })
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_yomolUpgrade, {
          type: $data.upgradeType,
          theme: "red",
          url: $data.upgradeUrl,
          title: "\u53D1\u73B0\u65B0\u7248\u672C",
          content: $data.appData.data.appContent,
          ref: "yomolUpgrade",
          currentVersion: $data.banbenhao,
          newVersion: $data.appData.data.appVersion
        }, null, 8, ["type", "url", "content", "currentVersion", "newVersion"])
      ])
    ]);
  }
  const PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/pages/home/home.vue"]]);
  const _sfc_main$5 = {
    name: "UniSegmentedControl",
    emits: ["clickItem"],
    props: {
      current: {
        type: Number,
        default: 0
      },
      values: {
        type: Array,
        default() {
          return [];
        }
      },
      activeColor: {
        type: String,
        default: "#2979FF"
      },
      styleType: {
        type: String,
        default: "button"
      }
    },
    data() {
      return {
        currentIndex: 0
      };
    },
    watch: {
      current(val) {
        if (val !== this.currentIndex) {
          this.currentIndex = val;
        }
      }
    },
    created() {
      this.currentIndex = this.current;
    },
    methods: {
      _onClick(index2) {
        if (this.currentIndex !== index2) {
          this.currentIndex = index2;
          this.$emit("clickItem", {
            currentIndex: index2
          });
        }
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass([[$props.styleType === "text" ? "segmented-control--text" : "segmented-control--button"], "segmented-control"]),
      style: vue.normalizeStyle({ borderColor: $props.styleType === "text" ? "" : $props.activeColor })
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.values, (item, index2) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass([[
            $props.styleType === "text" ? "" : "segmented-control__item--button",
            index2 === $data.currentIndex && $props.styleType === "button" ? "segmented-control__item--button--active" : "",
            index2 === 0 && $props.styleType === "button" ? "segmented-control__item--button--first" : "",
            index2 === $props.values.length - 1 && $props.styleType === "button" ? "segmented-control__item--button--last" : ""
          ], "segmented-control__item"]),
          key: index2,
          style: vue.normalizeStyle({ backgroundColor: index2 === $data.currentIndex && $props.styleType === "button" ? $props.activeColor : "", borderColor: index2 === $data.currentIndex && $props.styleType === "text" || $props.styleType === "button" ? $props.activeColor : "transparent" }),
          onClick: ($event) => $options._onClick(index2)
        }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("text", {
              style: vue.normalizeStyle({ color: index2 === $data.currentIndex ? $props.styleType === "text" ? $props.activeColor : "#fff" : $props.styleType === "text" ? "#000" : $props.activeColor }),
              class: vue.normalizeClass(["segmented-control__text", $props.styleType === "text" && index2 === $data.currentIndex ? "segmented-control__item--text" : ""])
            }, vue.toDisplayString(item), 7)
          ])
        ], 14, ["onClick"]);
      }), 128))
    ], 6);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-86aa1171"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {};
    },
    onLoad() {
    },
    onReady() {
    },
    onShow() {
    },
    onHide() {
    },
    onUnload() {
    },
    onPullDownRefresh() {
    },
    onReachBottom() {
    },
    onShareAppMessage() {
    },
    methods: {}
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "toot-box" }, [
      vue.createElementVNode("view", { class: "root" }, [
        vue.createElementVNode("image", {
          style: { "width": "60%", "margin": "auto" },
          src: "/static/null.png",
          mode: "widthFix"
        }),
        vue.createElementVNode("view", { style: { "margin": "10px", "font-weight": "800" } }, "\u641C\u7D22\u7ED3\u679C\uFF1A\u7A7A"),
        vue.createElementVNode("view", { style: { "margin": "10px", "font-size": "13px", "color": "#666" } }, "\u627E\u4E0D\u5230\u60A8\u641C\u7D22\u7684\u6587\u7AE0\u54E6\uFF0C\u6362\u4E2A\u8BCD\u5427")
      ])
    ]);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-0f04f2a4"], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/components/over/over.vue"]]);
  getApp();
  const _sfc_main$3 = {
    data() {
      return {
        current: 0,
        history: ["Brief", "Emlog", "\u5C0F\u7A0B\u5E8F", "bug\u4FEE\u590D", "\u524D\u7AEF", "\u8DE8\u57DF", "\u6E38\u620F", "PHP", "VUE", "\u722C\u866B", "JAVA"],
        key: "",
        items: ["\u6587\u7AE0\u641C\u7D22", "\u6807\u7B7E\u641C\u7D22"],
        showActionSheet: false,
        searchList: [],
        isend: false,
        appData: ""
      };
    },
    onLoad: function(options) {
      if (options.tag == "1") {
        this.current = 1;
      }
      if (options.keyword != "") {
        this.key = options.keyword;
        this.getData();
      }
    },
    onReady: function() {
    },
    onShow: function() {
      var that = this;
      uni.getStorage({
        key: "set_data",
        success: function(res) {
          that.appData = res.data;
        }
      });
    },
    onHide: function() {
    },
    onUnload: function() {
    },
    onPullDownRefresh: function() {
    },
    onReachBottom: function() {
    },
    onShareAppMessage: function() {
    },
    methods: {
      onClickItem(e2) {
        if (this.current !== e2.currentIndex) {
          this.current = e2.currentIndex;
          this.key = "";
        }
      },
      async getData() {
        if (this.key) {
          var that = this;
          if (this.current == 0) {
            var data2 = {
              keyword: that.key
            };
          } else {
            var data2 = {
              tag: that.key
            };
          }
          const res = await myRequest({
            url: "/?rest-api=article_list",
            method: "GET",
            data: data2
          });
          if (res.data.data.articles == "") {
            this.isend = true;
          } else {
            this.searchList = res.data.data.articles;
          }
        }
      },
      toInfo(id, url2) {
        uni.navigateTo({
          url: "/pages/blog-info/blog-info?id=" + id + "&url=" + encodeURIComponent(url2)
        });
      },
      bindinput(e2) {
        this.key = e2.detail.value;
        this.getData();
      },
      setKey(key) {
        this.searchList = "";
        this.key = key;
        this.getData();
      },
      selectResult: function(e2) {
        var gid = e2.detail.item.value;
        uni.navigateTo({
          url: "../blog-info/blog-info?gid=" + gid
        });
      },
      delHtmlTag(str) {
        var reg2 = RegExp("<.*?>+|\n|\r", "ig");
        var result = str.replace(reg2, "");
        return result;
      },
      imageError(e2, index2) {
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
      getDateBeforeNow(stringTime) {
        stringTime = new Date(stringTime.replace(/-/g, "/"));
        var minute = 1e3 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var week = day * 7;
        var month = day * 30;
        var year = month * 12;
        var time1 = new Date().getTime();
        var time2 = new Date(stringTime).getTime();
        var time = time1 - time2;
        var result = null;
        if (time < 0) {
          result = stringTime;
        } else if (time / year >= 1) {
          result = parseInt(time / year) + "\u5E74\u524D";
        } else if (time / month >= 1) {
          result = parseInt(time / month) + "\u6708\u524D";
        } else if (time / week >= 1) {
          result = parseInt(time / week) + "\u5468\u524D";
        } else if (time / day >= 1) {
          result = parseInt(time / day) + "\u5929\u524D";
        } else if (time / hour >= 1) {
          result = parseInt(time / hour) + "\u5C0F\u65F6\u524D";
        } else if (time / minute >= 1) {
          result = parseInt(time / minute) + "\u5206\u949F\u524D";
        } else {
          result = "\u521A\u521A";
        }
        return result;
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_segmented_control = resolveEasycom(vue.resolveDynamicComponent("uni-segmented-control"), __easycom_0);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$3);
    const _component_over = resolveEasycom(vue.resolveDynamicComponent("over"), __easycom_2);
    const _component_null = resolveEasycom(vue.resolveDynamicComponent("null"), __easycom_3$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      $data.appData.state == 200 ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
        vue.createElementVNode("view", { class: "uni-padding-wrap uni-common-mt" }, [
          vue.createVNode(_component_uni_segmented_control, {
            current: $data.current,
            values: $data.items,
            onClickItem: $options.onClickItem,
            styleType: "text"
          }, null, 8, ["current", "values", "onClickItem"])
        ]),
        vue.createElementVNode("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "tui-searchbox" }, [
            vue.createElementVNode("view", { class: "tui-search-input" }, [
              vue.createElementVNode("icon", {
                type: "search",
                size: 15,
                color: "#666"
              }),
              vue.createElementVNode("input", {
                "confirm-type": "search",
                placeholder: "\u5927\u5BB6\u90FD\u5728\u641C\uFF1ABrief",
                focus: false,
                "placeholder-class": "tui-input-plholder",
                class: "tui-input",
                value: $data.key,
                onInput: _cache[0] || (_cache[0] = (...args) => $options.bindinput && $options.bindinput(...args)),
                onConfirm: _cache[1] || (_cache[1] = ($event) => $options.setKey($data.key))
              }, null, 40, ["value"]),
              $data.key ? (vue.openBlock(), vue.createElementBlock("icon", {
                key: 0,
                type: "clear",
                size: 13,
                color: "#ccc",
                onClick: _cache[2] || (_cache[2] = ($event) => $options.setKey(""))
              })) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createElementVNode("view", {
              class: "tui-cancle",
              onClick: _cache[3] || (_cache[3] = ($event) => $options.setKey($data.key))
            }, "\u641C\u7D22")
          ]),
          $data.history.length > 0 && !$data.key ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "tui-search-history"
          }, [
            vue.createElementVNode("view", { class: "tui-history-header" }, [
              vue.createElementVNode("view", { class: "tui-search-title" }, "\u5927\u5BB6\u90FD\u5728\u641C")
            ]),
            vue.createElementVNode("view", { class: "tui-history-content" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.history, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: _ctx.index,
                  class: "hot",
                  onClick: ($event) => $options.setKey(item),
                  margin: "0 24rpx 24rpx 0"
                }, vue.toDisplayString(item), 9, ["onClick"]);
              }), 128))
            ])
          ])) : vue.createCommentVNode("v-if", true),
          $data.key ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
            vue.createElementVNode("view", { class: "tui-header" }, [
              vue.createElementVNode("view", { class: "tui-header-left tui-noboredr" }, [
                $data.current == 0 ? (vue.openBlock(), vue.createElementBlock("text", {
                  key: 0,
                  style: { "font-weight": "600" }
                }, "\u6587\u7AE0")) : (vue.openBlock(), vue.createElementBlock("text", {
                  key: 1,
                  style: { "font-weight": "600" }
                }, "\u6807\u7B7E")),
                vue.createTextVNode(" \u641C\u7D22: "),
                vue.createElementVNode("text", { style: { "color": "red" } }, vue.toDisplayString($data.key), 1),
                vue.createTextVNode("\u7684\u7ED3\u679C ")
              ])
            ]),
            $data.searchList ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "tui-result-box"
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.searchList, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", { key: _ctx.index }, [
                  $options.getimg(item.description) || item.cover ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "list-items",
                    onClick: ($event) => $options.toInfo(item.id, item.url)
                  }, [
                    vue.createElementVNode("view", { class: "img-box" }, [
                      vue.createElementVNode("image", {
                        onError: _cache[4] || (_cache[4] = ($event) => $options.imageError($event, _ctx.index)),
                        class: "lists-img",
                        src: item.cover || $options.getimg(item.description),
                        mode: "scaleToFill"
                      }, null, 40, ["src"])
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
                          vue.createElementVNode("view", { class: "comments" }, vue.toDisplayString($options.getDateBeforeNow(item.date)), 1)
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
                          vue.createElementVNode("view", { class: "comments" }, vue.toDisplayString($options.getDateBeforeNow(item.date)), 1)
                        ])
                      ])
                    ])
                  ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                ]);
              }), 128))
            ])) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              style: { "margin-top": "100px" }
            }, [
              vue.createVNode(_component_over)
            ]))
          ])) : vue.createCommentVNode("v-if", true)
        ])
      ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
        vue.createVNode(_component_null)
      ]))
    ]);
  }
  const PagesSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/pages/search/search.vue"]]);
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
    const _component_uni_popup_message = resolveEasycom(vue.resolveDynamicComponent("uni-popup-message"), __easycom_0$2);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1);
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
  const PagesSettingAdmin = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/pages/setting/admin.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        id: "",
        rid: "",
        content: "",
        qq: "",
        userUrl: "",
        name: ""
      };
    },
    onLoad(o2) {
      this.id = o2.id;
      this.rid = o2.rid || "";
    },
    methods: {
      async addComment() {
        uni.showLoading({});
        const res = await htRequest({
          url: "/index.php?action=addcom",
          method: "POST",
          data: {
            gid: this.id,
            comname: this.name || "\u6E38\u5BA2",
            comment: this.content,
            commail: this.qq,
            pid: this.rid,
            comurl: this.userUrl,
            imgcode: "",
            resp: "json"
          }
        });
        if (res.data.code == 1) {
          uni.hideLoading();
          uni.showModal({
            title: "\u6E29\u99A8\u63D0\u793A",
            content: `${res.data.msg}`,
            showCancel: false
          });
        } else if (res.data.code == 0) {
          uni.hideLoading();
          uni.showModal({
            title: "\u6E29\u99A8\u63D0\u793A",
            content: `\u63D0\u4EA4\u6210\u529F`,
            showCancel: false,
            success(res2) {
              if (res2.confirm) {
                uni.navigateBack();
              }
            }
          });
        } else {
          uni.hideLoading();
          uni.showModal({
            title: "\u6E29\u99A8\u63D0\u793A",
            content: `\u672A\u77E5\u9519\u8BEF`,
            showCancel: false
          });
        }
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "two" }, [
          vue.withDirectives(vue.createElementVNode("input", {
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.name = $event),
            placeholder: "\u6635\u79F0,\u9ED8\u8BA4\u6E38\u5BA2"
          }, null, 512), [
            [vue.vModelText, $data.name]
          ]),
          vue.withDirectives(vue.createElementVNode("input", {
            type: "text",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.qq = $event),
            placeholder: "\u90AE\u7BB1(\u53EF\u7559\u7A7A)"
          }, null, 512), [
            [vue.vModelText, $data.qq]
          ])
        ]),
        vue.withDirectives(vue.createElementVNode("input", {
          class: "url",
          type: "text",
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.userUrl = $event),
          placeholder: "\u8BF7\u8F93\u5165\u4F01\u9E45\u53F7\u7801(\u7528\u4E8E\u663E\u793A\u60A8\u7684\u5934\u50CF)"
        }, null, 512), [
          [vue.vModelText, $data.userUrl]
        ]),
        vue.withDirectives(vue.createElementVNode("textarea", {
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.content = $event),
          cols: "30",
          rows: "10",
          placeholder: "\u8BF7\u8F93\u5165\u8981\u53CD\u9988\u7684\u5185\u5BB9!"
        }, null, 512), [
          [vue.vModelText, $data.content]
        ])
      ]),
      vue.createElementVNode("button", {
        class: "btn",
        type: "primary",
        onClick: _cache[4] || (_cache[4] = (...args) => $options.addComment && $options.addComment(...args))
      }, "\u63D0\u4EA4\u5185\u5BB9")
    ], 64);
  }
  const PagesAboutHelp = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/pengsir/Downloads/emlog-wxmini/pages/about/help.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/demo/demo", PagesDemoDemo);
  __definePage("pages/registering/registering", PagesRegisteringRegistering);
  __definePage("pages/xia-editor/xia-editor", PagesXiaEditorXiaEditor);
  __definePage("pages/blog-info/blog-info", PagesBlogInfoBlogInfo);
  __definePage("pages/baidu/baidu", PagesBaiduBaidu);
  __definePage("pages/setting/setting", PagesSettingSetting);
  __definePage("pages/sorts/sorts", PagesSortsSorts);
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
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/pengsir/Downloads/emlog-wxmini/App.vue"]]);
  var r = function(r2) {
    return function(r3) {
      return !!r3 && "object" == typeof r3;
    }(r2) && !function(r3) {
      var t2 = Object.prototype.toString.call(r3);
      return "[object RegExp]" === t2 || "[object Date]" === t2 || function(r4) {
        return r4.$$typeof === e;
      }(r3);
    }(r2);
  }, e = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
  function t(r2, e2) {
    return false !== e2.clone && e2.isMergeableObject(r2) ? u(Array.isArray(r2) ? [] : {}, r2, e2) : r2;
  }
  function n(r2, e2, n2) {
    return r2.concat(e2).map(function(r3) {
      return t(r3, n2);
    });
  }
  function o(r2) {
    return Object.keys(r2).concat(function(r3) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(r3).filter(function(e2) {
        return r3.propertyIsEnumerable(e2);
      }) : [];
    }(r2));
  }
  function c(r2, e2) {
    try {
      return e2 in r2;
    } catch (r3) {
      return false;
    }
  }
  function u(e2, i2, a2) {
    (a2 = a2 || {}).arrayMerge = a2.arrayMerge || n, a2.isMergeableObject = a2.isMergeableObject || r, a2.cloneUnlessOtherwiseSpecified = t;
    var f = Array.isArray(i2);
    return f === Array.isArray(e2) ? f ? a2.arrayMerge(e2, i2, a2) : function(r2, e3, n2) {
      var i3 = {};
      return n2.isMergeableObject(r2) && o(r2).forEach(function(e4) {
        i3[e4] = t(r2[e4], n2);
      }), o(e3).forEach(function(o2) {
        (function(r3, e4) {
          return c(r3, e4) && !(Object.hasOwnProperty.call(r3, e4) && Object.propertyIsEnumerable.call(r3, e4));
        })(r2, o2) || (i3[o2] = c(r2, o2) && n2.isMergeableObject(e3[o2]) ? function(r3, e4) {
          if (!e4.customMerge)
            return u;
          var t2 = e4.customMerge(r3);
          return "function" == typeof t2 ? t2 : u;
        }(o2, n2)(r2[o2], e3[o2], n2) : t(e3[o2], n2));
      }), i3;
    }(e2, i2, a2) : t(i2, a2);
  }
  u.all = function(r2, e2) {
    if (!Array.isArray(r2))
      throw new Error("first argument should be an array");
    return r2.reduce(function(r3, t2) {
      return u(r3, t2, e2);
    }, {});
  };
  var i = u;
  function a(r2) {
    var e2 = (r2 = r2 || {}).storage || window && window.localStorage, t2 = r2.key || "vuex";
    function n2(r3, e3) {
      var t3 = e3.getItem(r3);
      try {
        return "string" == typeof t3 ? JSON.parse(t3) : "object" == typeof t3 ? t3 : void 0;
      } catch (r4) {
      }
    }
    function o2() {
      return true;
    }
    function c2(r3, e3, t3) {
      return t3.setItem(r3, JSON.stringify(e3));
    }
    function u2(r3, e3) {
      return Array.isArray(e3) ? e3.reduce(function(e4, t3) {
        return function(r4, e5, t4, n4) {
          return !/^(__proto__|constructor|prototype)$/.test(e5) && ((e5 = e5.split ? e5.split(".") : e5.slice(0)).slice(0, -1).reduce(function(r5, e6) {
            return r5[e6] = r5[e6] || {};
          }, r4)[e5.pop()] = t4), r4;
        }(e4, t3, (n3 = r3, void 0 === (n3 = ((o3 = t3).split ? o3.split(".") : o3).reduce(function(r4, e5) {
          return r4 && r4[e5];
        }, n3)) ? void 0 : n3));
        var n3, o3;
      }, {}) : r3;
    }
    function a2(r3) {
      return function(e3) {
        return r3.subscribe(e3);
      };
    }
    (r2.assertStorage || function() {
      e2.setItem("@@", 1), e2.removeItem("@@");
    })(e2);
    var f, s = function() {
      return (r2.getState || n2)(t2, e2);
    };
    return r2.fetchBeforeUse && (f = s()), function(n3) {
      r2.fetchBeforeUse || (f = s()), "object" == typeof f && null !== f && (n3.replaceState(r2.overwrite ? f : i(n3.state, f, { arrayMerge: r2.arrayMerger || function(r3, e3) {
        return e3;
      }, clone: false })), (r2.rehydrated || function() {
      })(n3)), (r2.subscriber || a2)(n3)(function(n4, i2) {
        (r2.filter || o2)(n4) && (r2.setState || c2)(t2, (r2.reducer || u2)(i2, r2.paths), e2);
      });
    };
  }
  const store = createStore({
    plugins: [
      a({
        storage: {
          getItem: (key) => uni.getStorageSync(key),
          setItem: (key, value) => uni.setStorageSync(key, value),
          removeItem: (key) => uni.removeStorageSync(key)
        }
      })
    ],
    state: {
      isLogin: false
    },
    mutations: {
      login(state) {
        state.isLogin = true;
      },
      loginOut(state) {
        state.isLogin = false;
      }
    },
    actions: {},
    modules: {}
  });
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(store);
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
})(Vue, uni.VueShared);
