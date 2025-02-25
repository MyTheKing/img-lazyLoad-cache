"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
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
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // Z:/1A公司/Joshua-lazyLoad-cache/unpackage/dist/dev/.nvue/pages/nvue/nvue.js
  var import_vue = __toESM(require_vue());
  var fontData = [
    {
      "font_class": "arrow-down",
      "unicode": "\uE6BE"
    },
    {
      "font_class": "arrow-left",
      "unicode": "\uE6BC"
    },
    {
      "font_class": "arrow-right",
      "unicode": "\uE6BB"
    },
    {
      "font_class": "arrow-up",
      "unicode": "\uE6BD"
    },
    {
      "font_class": "auth",
      "unicode": "\uE6AB"
    },
    {
      "font_class": "auth-filled",
      "unicode": "\uE6CC"
    },
    {
      "font_class": "back",
      "unicode": "\uE6B9"
    },
    {
      "font_class": "bars",
      "unicode": "\uE627"
    },
    {
      "font_class": "calendar",
      "unicode": "\uE6A0"
    },
    {
      "font_class": "calendar-filled",
      "unicode": "\uE6C0"
    },
    {
      "font_class": "camera",
      "unicode": "\uE65A"
    },
    {
      "font_class": "camera-filled",
      "unicode": "\uE658"
    },
    {
      "font_class": "cart",
      "unicode": "\uE631"
    },
    {
      "font_class": "cart-filled",
      "unicode": "\uE6D0"
    },
    {
      "font_class": "chat",
      "unicode": "\uE65D"
    },
    {
      "font_class": "chat-filled",
      "unicode": "\uE659"
    },
    {
      "font_class": "chatboxes",
      "unicode": "\uE696"
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": "\uE692"
    },
    {
      "font_class": "chatbubble",
      "unicode": "\uE697"
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": "\uE694"
    },
    {
      "font_class": "checkbox",
      "unicode": "\uE62B"
    },
    {
      "font_class": "checkbox-filled",
      "unicode": "\uE62C"
    },
    {
      "font_class": "checkmarkempty",
      "unicode": "\uE65C"
    },
    {
      "font_class": "circle",
      "unicode": "\uE65B"
    },
    {
      "font_class": "circle-filled",
      "unicode": "\uE65E"
    },
    {
      "font_class": "clear",
      "unicode": "\uE66D"
    },
    {
      "font_class": "close",
      "unicode": "\uE673"
    },
    {
      "font_class": "closeempty",
      "unicode": "\uE66C"
    },
    {
      "font_class": "cloud-download",
      "unicode": "\uE647"
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": "\uE646"
    },
    {
      "font_class": "cloud-upload",
      "unicode": "\uE645"
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": "\uE648"
    },
    {
      "font_class": "color",
      "unicode": "\uE6CF"
    },
    {
      "font_class": "color-filled",
      "unicode": "\uE6C9"
    },
    {
      "font_class": "compose",
      "unicode": "\uE67F"
    },
    {
      "font_class": "contact",
      "unicode": "\uE693"
    },
    {
      "font_class": "contact-filled",
      "unicode": "\uE695"
    },
    {
      "font_class": "down",
      "unicode": "\uE6B8"
    },
    {
      "font_class": "bottom",
      "unicode": "\uE6B8"
    },
    {
      "font_class": "download",
      "unicode": "\uE68D"
    },
    {
      "font_class": "download-filled",
      "unicode": "\uE681"
    },
    {
      "font_class": "email",
      "unicode": "\uE69E"
    },
    {
      "font_class": "email-filled",
      "unicode": "\uE69A"
    },
    {
      "font_class": "eye",
      "unicode": "\uE651"
    },
    {
      "font_class": "eye-filled",
      "unicode": "\uE66A"
    },
    {
      "font_class": "eye-slash",
      "unicode": "\uE6B3"
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": "\uE6B4"
    },
    {
      "font_class": "fire",
      "unicode": "\uE6A1"
    },
    {
      "font_class": "fire-filled",
      "unicode": "\uE6C5"
    },
    {
      "font_class": "flag",
      "unicode": "\uE65F"
    },
    {
      "font_class": "flag-filled",
      "unicode": "\uE660"
    },
    {
      "font_class": "folder-add",
      "unicode": "\uE6A9"
    },
    {
      "font_class": "folder-add-filled",
      "unicode": "\uE6C8"
    },
    {
      "font_class": "font",
      "unicode": "\uE6A3"
    },
    {
      "font_class": "forward",
      "unicode": "\uE6BA"
    },
    {
      "font_class": "gear",
      "unicode": "\uE664"
    },
    {
      "font_class": "gear-filled",
      "unicode": "\uE661"
    },
    {
      "font_class": "gift",
      "unicode": "\uE6A4"
    },
    {
      "font_class": "gift-filled",
      "unicode": "\uE6C4"
    },
    {
      "font_class": "hand-down",
      "unicode": "\uE63D"
    },
    {
      "font_class": "hand-down-filled",
      "unicode": "\uE63C"
    },
    {
      "font_class": "hand-up",
      "unicode": "\uE63F"
    },
    {
      "font_class": "hand-up-filled",
      "unicode": "\uE63E"
    },
    {
      "font_class": "headphones",
      "unicode": "\uE630"
    },
    {
      "font_class": "heart",
      "unicode": "\uE639"
    },
    {
      "font_class": "heart-filled",
      "unicode": "\uE641"
    },
    {
      "font_class": "help",
      "unicode": "\uE679"
    },
    {
      "font_class": "help-filled",
      "unicode": "\uE674"
    },
    {
      "font_class": "home",
      "unicode": "\uE662"
    },
    {
      "font_class": "home-filled",
      "unicode": "\uE663"
    },
    {
      "font_class": "image",
      "unicode": "\uE670"
    },
    {
      "font_class": "image-filled",
      "unicode": "\uE678"
    },
    {
      "font_class": "images",
      "unicode": "\uE650"
    },
    {
      "font_class": "images-filled",
      "unicode": "\uE64B"
    },
    {
      "font_class": "info",
      "unicode": "\uE669"
    },
    {
      "font_class": "info-filled",
      "unicode": "\uE649"
    },
    {
      "font_class": "left",
      "unicode": "\uE6B7"
    },
    {
      "font_class": "link",
      "unicode": "\uE6A5"
    },
    {
      "font_class": "list",
      "unicode": "\uE644"
    },
    {
      "font_class": "location",
      "unicode": "\uE6AE"
    },
    {
      "font_class": "location-filled",
      "unicode": "\uE6AF"
    },
    {
      "font_class": "locked",
      "unicode": "\uE66B"
    },
    {
      "font_class": "locked-filled",
      "unicode": "\uE668"
    },
    {
      "font_class": "loop",
      "unicode": "\uE633"
    },
    {
      "font_class": "mail-open",
      "unicode": "\uE643"
    },
    {
      "font_class": "mail-open-filled",
      "unicode": "\uE63A"
    },
    {
      "font_class": "map",
      "unicode": "\uE667"
    },
    {
      "font_class": "map-filled",
      "unicode": "\uE666"
    },
    {
      "font_class": "map-pin",
      "unicode": "\uE6AD"
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": "\uE6AC"
    },
    {
      "font_class": "medal",
      "unicode": "\uE6A2"
    },
    {
      "font_class": "medal-filled",
      "unicode": "\uE6C3"
    },
    {
      "font_class": "mic",
      "unicode": "\uE671"
    },
    {
      "font_class": "mic-filled",
      "unicode": "\uE677"
    },
    {
      "font_class": "micoff",
      "unicode": "\uE67E"
    },
    {
      "font_class": "micoff-filled",
      "unicode": "\uE6B0"
    },
    {
      "font_class": "minus",
      "unicode": "\uE66F"
    },
    {
      "font_class": "minus-filled",
      "unicode": "\uE67D"
    },
    {
      "font_class": "more",
      "unicode": "\uE64D"
    },
    {
      "font_class": "more-filled",
      "unicode": "\uE64E"
    },
    {
      "font_class": "navigate",
      "unicode": "\uE66E"
    },
    {
      "font_class": "navigate-filled",
      "unicode": "\uE67A"
    },
    {
      "font_class": "notification",
      "unicode": "\uE6A6"
    },
    {
      "font_class": "notification-filled",
      "unicode": "\uE6C1"
    },
    {
      "font_class": "paperclip",
      "unicode": "\uE652"
    },
    {
      "font_class": "paperplane",
      "unicode": "\uE672"
    },
    {
      "font_class": "paperplane-filled",
      "unicode": "\uE675"
    },
    {
      "font_class": "person",
      "unicode": "\uE699"
    },
    {
      "font_class": "person-filled",
      "unicode": "\uE69D"
    },
    {
      "font_class": "personadd",
      "unicode": "\uE69F"
    },
    {
      "font_class": "personadd-filled",
      "unicode": "\uE698"
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": "\uE6D1"
    },
    {
      "font_class": "phone",
      "unicode": "\uE69C"
    },
    {
      "font_class": "phone-filled",
      "unicode": "\uE69B"
    },
    {
      "font_class": "plus",
      "unicode": "\uE676"
    },
    {
      "font_class": "plus-filled",
      "unicode": "\uE6C7"
    },
    {
      "font_class": "plusempty",
      "unicode": "\uE67B"
    },
    {
      "font_class": "pulldown",
      "unicode": "\uE632"
    },
    {
      "font_class": "pyq",
      "unicode": "\uE682"
    },
    {
      "font_class": "qq",
      "unicode": "\uE680"
    },
    {
      "font_class": "redo",
      "unicode": "\uE64A"
    },
    {
      "font_class": "redo-filled",
      "unicode": "\uE655"
    },
    {
      "font_class": "refresh",
      "unicode": "\uE657"
    },
    {
      "font_class": "refresh-filled",
      "unicode": "\uE656"
    },
    {
      "font_class": "refreshempty",
      "unicode": "\uE6BF"
    },
    {
      "font_class": "reload",
      "unicode": "\uE6B2"
    },
    {
      "font_class": "right",
      "unicode": "\uE6B5"
    },
    {
      "font_class": "scan",
      "unicode": "\uE62A"
    },
    {
      "font_class": "search",
      "unicode": "\uE654"
    },
    {
      "font_class": "settings",
      "unicode": "\uE653"
    },
    {
      "font_class": "settings-filled",
      "unicode": "\uE6CE"
    },
    {
      "font_class": "shop",
      "unicode": "\uE62F"
    },
    {
      "font_class": "shop-filled",
      "unicode": "\uE6CD"
    },
    {
      "font_class": "smallcircle",
      "unicode": "\uE67C"
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": "\uE665"
    },
    {
      "font_class": "sound",
      "unicode": "\uE684"
    },
    {
      "font_class": "sound-filled",
      "unicode": "\uE686"
    },
    {
      "font_class": "spinner-cycle",
      "unicode": "\uE68A"
    },
    {
      "font_class": "staff",
      "unicode": "\uE6A7"
    },
    {
      "font_class": "staff-filled",
      "unicode": "\uE6CB"
    },
    {
      "font_class": "star",
      "unicode": "\uE688"
    },
    {
      "font_class": "star-filled",
      "unicode": "\uE68F"
    },
    {
      "font_class": "starhalf",
      "unicode": "\uE683"
    },
    {
      "font_class": "trash",
      "unicode": "\uE687"
    },
    {
      "font_class": "trash-filled",
      "unicode": "\uE685"
    },
    {
      "font_class": "tune",
      "unicode": "\uE6AA"
    },
    {
      "font_class": "tune-filled",
      "unicode": "\uE6CA"
    },
    {
      "font_class": "undo",
      "unicode": "\uE64F"
    },
    {
      "font_class": "undo-filled",
      "unicode": "\uE64C"
    },
    {
      "font_class": "up",
      "unicode": "\uE6B6"
    },
    {
      "font_class": "top",
      "unicode": "\uE6B6"
    },
    {
      "font_class": "upload",
      "unicode": "\uE690"
    },
    {
      "font_class": "upload-filled",
      "unicode": "\uE68E"
    },
    {
      "font_class": "videocam",
      "unicode": "\uE68C"
    },
    {
      "font_class": "videocam-filled",
      "unicode": "\uE689"
    },
    {
      "font_class": "vip",
      "unicode": "\uE6A8"
    },
    {
      "font_class": "vip-filled",
      "unicode": "\uE6C6"
    },
    {
      "font_class": "wallet",
      "unicode": "\uE6B1"
    },
    {
      "font_class": "wallet-filled",
      "unicode": "\uE6C2"
    },
    {
      "font_class": "weibo",
      "unicode": "\uE68B"
    },
    {
      "font_class": "weixin",
      "unicode": "\uE691"
    }
  ];
  var iconUrl = "/assets/uniicons.32e978a5.ttf";
  var _style_0$2 = { "uni-icons": { "": { "fontFamily": "uniicons", "textDecoration": "none", "textAlign": "center" } } };
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  var getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "uniicons",
    "src": "url('" + iconUrl + "')"
  });
  var _sfc_main$2 = {
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
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "u-text",
      {
        style: (0, import_vue.normalizeStyle)($options.styleObj),
        class: "uni-icons",
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      (0, import_vue.toDisplayString)($options.unicode),
      5
      /* TEXT, STYLE */
    );
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["styles", [_style_0$2]], ["__file", "Z:/1A\u516C\u53F8/Joshua-lazyLoad-cache/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  var isString = (val) => typeof val === "string";
  function resolveEasycom(component, easycom) {
    return isString(component) ? easycom : component;
  }
  var _style_0$1 = { "img": { "": { "transform": "transition3d(0, 0, 0)", "willChange": "transform" } }, "Joshua_lazyLoadCache": { "": { "display": "flex", "alignItems": "center", "justifyContent": "center", "position": "relative", "transitionDuration": 700 } }, "icon": { "": { "position": "absolute", "top": 50, "left": 50, "transform": "translate(-50%, -50%)" } }, "@TRANSITION": { "Joshua_lazyLoadCache": { "duration": 700 } } };
  var _sfc_main$1 = {
    __name: "Joshua-lazyLoad-cache-image",
    props: {
      mode: {
        type: String,
        default: "widthFix"
      },
      src: {
        type: String,
        default: ""
      },
      ratio: {
        type: Number,
        default: 0
      },
      duration: {
        type: Number,
        default: 0
      },
      selector: {
        type: String,
        default: ""
      },
      bottomNumber: {
        type: Number,
        default: 0
      },
      bgColor: {
        type: String,
        default: "rgba(255, 255, 255, .2)"
      },
      width: {
        type: String,
        default: "100%"
      },
      height: {
        type: String,
        default: "auto"
      },
      bgHeight: {
        type: String,
        default: "100px"
      },
      borderRadius: {
        type: String,
        default: "5px"
      },
      customPrefix: {
        type: String,
        default: "type"
      },
      defaultIcon: {
        type: String,
        default: "image"
      },
      errorIcon: {
        type: String,
        default: "info"
      },
      iconSize: {
        type: Number,
        default: 30
      },
      iconColor: {
        type: String,
        default: "rgba(255, 255, 255, .5)"
      },
      cache: {
        type: Boolean,
        default: true
      },
      lazyLoad: {
        type: Boolean,
        default: false
      },
      delayCache: {
        type: Number,
        default: 500
      },
      cacheTime: {
        type: Number,
        default: 5
      },
      listInfo: {
        type: Object,
        default: () => ({
          h: 0,
          y: 0
        })
      },
      fatherTop: {
        default: ""
      },
      nvueLazyLoadBottomNumber: {
        type: Number,
        default: 0
      },
      nvueLazyLoadThrottleNum: {
        type: Number,
        default: 1e3
      }
    },
    emits: ["error", "load"],
    setup(__props, { emit }) {
      const props = __props;
      const {
        width,
        hedith,
        src,
        fade,
        duration,
        lazyLoad,
        cache,
        cacheTime,
        delayCache,
        ratio,
        selector,
        bottomNumber,
        defaultIcon,
        errorIcon,
        iconSize,
        bgHeight,
        listInfo,
        fatherTop,
        nvueLazyLoadBottomNumber,
        nvueLazyLoadThrottleNum
      } = (0, import_vue.toRefs)(props);
      (0, import_vue.shallowRef)(true);
      let Joshua_lazyLoadCache = (0, import_vue.ref)(null);
      const imgStatusIcon = (0, import_vue.shallowRef)("");
      const srcImage = (0, import_vue.shallowRef)("");
      const id_key = (0, import_vue.shallowRef)("image_" + (/* @__PURE__ */ new Date()).getTime() + "_" + parseInt(Math.random() * 1e4));
      (0, import_vue.ref)(null);
      (0, import_vue.shallowRef)("");
      const srcImageFlag = (0, import_vue.shallowRef)(true);
      const styleBgH = (0, import_vue.ref)({
        height: bgHeight.value
      });
      let nvueLazyWatcch = null;
      let throttleFlag = (0, import_vue.ref)(true);
      imgStatusIcon.value = defaultIcon.value;
      const useCache = (0, import_vue.computed)(() => {
        let inH5 = false;
        return !inH5 && cache.value;
      });
      const handleCache = (src2) => __async(this, null, function* () {
        let srcName = src2.split("/").pop();
        const sign = "demo-cached-image";
        let keyName = src2 + sign;
        function start() {
          setTimeout(() => {
            uni.downloadFile({
              url: src2
            }).then((res) => {
              if (res.statusCode == 200) {
                return uni.saveFile({
                  tempFilePath: res.tempFilePath
                });
              } else {
                srcImage.value = "";
                return Promise.reject("error");
              }
            }).then((res) => {
              uni.setStorage({
                key: keyName,
                data: {
                  url: res.savedFilePath,
                  name: srcName
                },
                fail: (err) => {
                },
                success: (res2) => __async(this, null, function* () {
                  if (srcImageFlag.value) {
                    const {
                      data: cachedRes
                    } = yield uni.getStorage({
                      key: keyName
                    });
                    srcImage.value = cachedRes.url;
                  }
                })
              });
            }).catch((error) => {
            });
          }, delayCache.value);
        }
        function removeStore(file) {
          uni.removeSavedFile({
            filePath: file
          });
          uni.removeStorage({
            key: keyName
          });
        }
        try {
          const {
            data: cachedRes
          } = yield uni.getStorage({
            key: keyName
          });
          const cachedUrl = cachedRes && cachedRes.url;
          if (srcName !== cachedRes.name) {
            removeStore(cachedUrl, keyName);
            start();
            return;
          }
          if (cachedUrl && cacheTime.value) {
            const cachedUrlInfo = yield uni.getSavedFileInfo({
              filePath: cachedUrl
            });
            const createTime = cachedUrlInfo && cachedUrlInfo.createTime;
            const expiredTime = createTime + cacheTime.value * 24 * 60 * 60 * 1e3;
            if (expiredTime > +/* @__PURE__ */ new Date()) {
              assignment(cachedUrl);
              return;
            } else if (expiredTime) {
              removeStore(cachedUrl, keyName);
            } else {
            }
          } else if (cachedUrl && !cacheTime.value) {
            assignment(cachedUrl);
            return;
          }
          start();
        } catch (error) {
          start();
        }
      });
      function nvueLazyLoad() {
        const dom = weex.requireModule("dom");
        dom.getComponentRect(Joshua_lazyLoadCache.value, ({
          result,
          size
        }) => {
          if (result) {
            let top = Math.ceil(size.top > 0 ? size.top - Number(fatherTop.value) : size.top + listInfo.value.h);
            if (listInfo.value.h > top - nvueLazyLoadBottomNumber.value) {
              setTimeout(() => {
                assignment(src.value);
                nvueLazyWatcch();
                if (!useCache.value)
                  return;
                handleCache(src.value);
              }, duration.value);
            }
          }
        });
      }
      if (lazyLoad.value) {
        nvueLazyWatcch = (0, import_vue.watch)(listInfo.value, (newValue, oldValue) => {
          if (src.value && lazyLoad.value) {
            (0, import_vue.nextTick)(() => {
              if (!throttleFlag.value)
                return;
              throttleFlag.value = false;
              setTimeout(() => {
                nvueLazyLoad();
                throttleFlag.value = true;
              }, nvueLazyLoadThrottleNum.value);
            });
          }
        }, {
          immediate: true
        });
      }
      const assignment = (e) => {
        if (srcImageFlag.value) {
          srcImage.value = e;
        }
      };
      const loadFn = (e) => {
        srcImageFlag.value = false;
        emit("load", e);
      };
      const errorFn = (e) => {
        imgStatusIcon.value = errorIcon.value;
        emit("error", e);
      };
      (0, import_vue.watch)(src, (newValue, oldValue) => {
        srcImageFlag.value = true;
        imgDispose();
      });
      (0, import_vue.onMounted)(() => {
        imgDispose();
      });
      function imgDispose() {
        if (!lazyLoad.value) {
          assignment(src.value);
          if (!useCache.value)
            return;
          handleCache(src.value);
        }
      }
      (0, import_vue.watch)(srcImageFlag, (newVal) => {
        if (!newVal) {
          styleBgH.value = {
            minHeight: bgHeight.value
          };
        }
      });
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom((0, import_vue.resolveDynamicComponent)("uni-icons"), __easycom_0$1);
        return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
          "view",
          {
            ref_key: "Joshua_lazyLoadCache",
            ref: Joshua_lazyLoadCache,
            class: "Joshua_lazyLoadCache",
            style: (0, import_vue.normalizeStyle)([
              { backgroundColor: (0, import_vue.unref)(srcImageFlag) ? __props.bgColor : "transparent" },
              { width: (0, import_vue.unref)(srcImageFlag) ? (0, import_vue.unref)(width) : "100%" },
              { borderRadius: __props.borderRadius },
              styleBgH.value
            ]),
            renderWhole: true
          },
          [
            (0, import_vue.unref)(srcImageFlag) ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_uni_icons, {
              key: 0,
              class: "icon",
              "custom-prefix": __props.customPrefix == "type" ? "" : __props.customPrefix,
              type: (0, import_vue.unref)(imgStatusIcon),
              style: (0, import_vue.normalizeStyle)([{ "position": "absolute" }, [
                { top: (parseInt(__props.height) - (0, import_vue.unref)(iconSize)) / 2 + "px" },
                { left: (parseInt((0, import_vue.unref)(width)) - (0, import_vue.unref)(iconSize)) / 2 + "px" }
              ]]),
              size: (0, import_vue.unref)(iconSize) + "px",
              color: __props.iconColor
            }, null, 8, ["custom-prefix", "type", "size", "color", "style"])) : (0, import_vue.createCommentVNode)("v-if", true),
            (0, import_vue.createElementVNode)("u-image", {
              id: (0, import_vue.unref)(id_key),
              style: (0, import_vue.normalizeStyle)([{ width: (0, import_vue.unref)(width) }, { height: __props.height == "auto" ? " " : __props.height }, { borderRadius: __props.borderRadius }]),
              mode: __props.mode,
              src: (0, import_vue.unref)(srcImage),
              onError: errorFn,
              onLoad: loadFn
            }, null, 44, ["id", "mode", "src"])
          ],
          4
          /* STYLE */
        );
      };
    }
  };
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["styles", [_style_0$1]], ["__file", "Z:/1A\u516C\u53F8/Joshua-lazyLoad-cache/uni_modules/Joshua-lazyLoad-cache-image/components/Joshua-lazyLoad-cache-image/Joshua-lazyLoad-cache-image.vue"]]);
  function screenSizeGrid() {
    let column = 0;
    let windowWidth = 0;
    const state = {
      getColumn: () => column,
      getWindowWidth: () => windowWidth
    };
    let systemInfo = uni.getSystemInfoSync();
    let screenWidth = systemInfo.screenWidth;
    const windowResizeCallback = (res = {
      size: {}
    }) => {
      windowWidth = res.size.windowWidth || screenWidth;
      if (windowWidth < 539) {
        column = 1;
      } else if (windowWidth < 970 && windowWidth > 539) {
        column = 2;
      } else if (windowWidth > 970) {
        column = 3;
      }
      uni.$emit("windowResizeUpdate");
    };
    windowResizeCallback();
    uni.onWindowResize(windowResizeCallback);
    return __spreadProps(__spreadValues({}, state), {
      subscribeToUpdates: (callback) => {
        uni.$on("windowResizeUpdate", callback);
      }
    });
  }
  function dynamicGrouping(data, i) {
    if (i <= 0)
      return;
    const groups = [];
    for (let j = 0; j < i; j++) {
      groups.push([]);
    }
    for (let k = 0; k < data.length; k++) {
      const groupIndex = k % i;
      groups[groupIndex].push(data[k]);
    }
    return groups;
  }
  var imgArr = [
    "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg",
    "https://gratisography.com/wp-content/uploads/2023/10/gratisography-pumpkin-scarecrow-800x525.jpg",
    "https://cdn.pixabay.com/photo/2022/11/17/08/47/brown-bear-7597616_640.jpg",
    "https://gratisography.com/wp-content/uploads/2023/sography-evening-sky-free-stock-photo-800x525.jpg",
    "https://cdn.pixabay.com/photo/2024/05/11/06/47/tropical-8754092_640.jpg",
    "https://gratisography.com/wp-content/uploads/2023/y-luminescent-flower-free-stock-photo-800x525.jpg",
    "https://gratisography.com/wp-content/uploads/2018/05/gratisography-395H-free-stock-photo-800x525.jpg",
    "https://gratisography.com/wp-content/uploads/2018/05/gratisography-443H-free-stock-photo-800x525.jpg",
    "https://gratisography.com/wp-content/uploads/2018/05/gratisography-44HH-free-stock-photo-800x525.jpg",
    "https://gratisography.com/wp-content/uploads/2018/05/gratisography-52H-free-stock-photo-800x525.jpg",
    "https://gratisography.com/wp-content/uploads/2023/05/gratisography-cool-colorful-door-free-stock-photo-800x525.jpg",
    "https://cdn.pixabay.com/photo/2021/08/23/01/05/shoes-6566418_640.jpg",
    "https://cdn.pixabay.com/photo/2020/10/22/10/28/cow-5675684_640.jpg",
    "https://cdn.pixabay.com/photo/2020/11/20/16/26/labrador-5762115_640.jpg",
    "https://cdn.pixabay.com/photo/2024/04/16/16/25/ai-generated-8700383_640.jpg",
    "https://cdn.pixabay.com/photo/2023/05/29/00/24/blue-tit-8024809_640.jpg",
    "https://cdn.pixabay.com/photo/2018/09/18/16/45/forest-3686632_640.jpg",
    "https://cdn.pixabay.com/photo/2024/05/09/12/06/fruit-8750860_640.jpg",
    "https://cdn.pixabay.com/photo/2022/11/29/11/30/lake-7624330_640.jpg",
    "https://cdn.pixabay.com/photo/2023/06/18/20/08/spruce-8072652_640.jpg",
    "https://cdn.pixabay.com/photo/2024/05/05/05/55/goose-8740266_640.jpg",
    "https://cdn.pixabay.com/photo/2021/08/12/12/54/love-in-a-mist-6540738_640.jpg",
    "https://cdn.pixabay.com/photo/2023/01/13/14/58/snake-7716269_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/04/13/10/20/peacock-8693634_640.jpg",
    "https://cdn.pixabay.com/photo/2024/05/07/03/49/agave-8744705_640.jpg",
    "https://cdn.pixabay.com/photo/2024/01/09/20/41/wheat-8498380_640.jpg",
    "https://cdn.pixabay.com/photo/2024/04/25/06/50/banana-8719086_640.jpg",
    "https://cdn.pixabay.com/photo/2024/02/14/16/45/leaves-8573845_640.jpg",
    "https://cdn.pixabay.com/photo/2024/01/14/12/30/baseball-8507868_640.jpg",
    "https://cdn.pixabay.com/photo/2019/10/13/20/35/orange-4547207_640.png",
    "https://cdn.pixabay.com/photo/2024/04/15/15/02/ai-generated-8698024_640.jpg",
    "https://cdn.pixabay.com/photo/2022/03/08/13/22/fan-7055740_640.jpg",
    "https://cdn.pixabay.com/photo/2024/04/15/17/51/ai-generated-8698374_640.png",
    "https://cdn.pixabay.com/photo/2022/07/23/16/06/jellyfish-7340188_640.jpg",
    "https://cdn.pixabay.com/photo/2024/02/05/16/07/gas-8554849_640.jpg",
    "https://cdn.pixabay.com/photo/2021/11/14/06/15/colored-pencils-6792979_640.jpg",
    "https://cdn.pixabay.com/photo/2024/03/08/09/47/ai-generated-8620359_640.png",
    "https://cdn.pixabay.com/photo/2016/03/27/19/29/birds-1283854_640.jpg",
    "https://cdn.pixabay.com/photo/2015/07/16/12/29/beach-847641_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/02/09/16/17/outdoors-8563340_640.png",
    "https://cdn.pixabay.com/photo/2024/03/08/16/43/star-magnolia-8621246_640.jpg",
    "https://cdn.pixabay.com/photo/2023/08/11/03/35/deer-8182756_640.jpg",
    "https://cdn.pixabay.com/photo/2024/03/05/22/04/bird-8615360_640.jpg",
    "https://cdn.pixabay.com/photo/2023/12/03/18/34/dragonfly-8428001_640.jpg",
    "https://cdn.pixabay.com/photo/2023/07/11/13/03/dachshund-8120554_640.jpg",
    "https://cdn.pixabay.com/photo/2023/10/02/09/07/spider-8288816_640.jpg",
    "https://cdn.pixabay.com/photo/2023/08/03/21/04/poppy-8167943_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/03/17/11/39/mountain-7858482_640.jpg",
    "https://cdn.pixabay.com/photo/2024/03/06/11/09/plane-8616271_640.jpg",
    "https://cdn.pixabay.com/photo/2023/11/07/22/56/skyscraper-8373617_640.jpg",
    "https://cdn.pixabay.com/photo/2024/03/04/21/49/tracks-8613278_640.jpg",
    "https://cdn.pixabay.com/photo/2023/10/03/09/59/bridge-8291058_640.jpg",
    "https://cdn.pixabay.com/photo/2023/06/13/11/45/landscape-8060760_640.jpg",
    "https://cdn.pixabay.com/photo/2023/08/19/08/27/butterfly-8200041_640.jpg",
    "https://cdn.pixabay.com/photo/2023/04/29/09/51/polana-kalatowki-7958161_640.jpg",
    "https://cdn.pixabay.com/photo/2024/02/17/15/14/birds-8579528_640.jpg",
    "https://cdn.pixabay.com/photo/2023/10/16/01/40/aviation-8318208_640.jpg",
    "https://cdn.pixabay.com/photo/2024/02/19/22/58/forest-8584311_640.jpg",
    "https://cdn.pixabay.com/photo/2023/10/30/11/50/bulls-8352687_640.jpg",
    "https://cdn.pixabay.com/photo/2023/09/29/08/38/sea-8283340_640.jpg",
    "https://cdn.pixabay.com/photo/2023/03/06/16/17/narcissus-7833840_640.jpg",
    "https://cdn.pixabay.com/photo/2023/12/07/10/52/snow-8435305_640.jpg",
    "https://cdn.pixabay.com/photo/2023/09/25/19/58/piran-8275931_640.jpg",
    "https://cdn.pixabay.com/photo/2024/02/25/13/30/shoes-8595773_640.jpg",
    "https://cdn.pixabay.com/photo/2023/10/13/08/45/geese-8312440_640.jpg",
    "https://cdn.pixabay.com/photo/2024/02/29/02/39/egret-8603229_640.jpg",
    "https://cdn.pixabay.com/photo/2023/09/16/09/12/chrysanthemum-8256282_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/04/11/13/27/bird-7917250_640.jpg",
    "https://cdn.pixabay.com/photo/2024/02/26/15/03/narzissen-8598191_640.jpg",
    "https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_640.jpg",
    "https://cdn.pixabay.com/photo/2024/02/25/02/24/insect-8595107_640.png",
    "https://cdn.pixabay.com/photo/2024/02/27/00/13/heliconia-8599119_640.jpg",
    "https://cdn.pixabay.com/photo/2023/10/30/05/19/sunflowers-8351807_640.jpg",
    "https://cdn.pixabay.com/photo/2023/11/06/06/53/watermelon-8368960_640.png",
    "https://cdn.pixabay.com/photo/2024/02/23/21/25/landscape-8592826_640.jpg",
    "https://cdn.pixabay.com/photo/2023/04/29/22/39/cherry-blossom-7959408_640.jpg",
    "https://cdn.pixabay.com/photo/2023/07/07/18/45/flowers-8113229_640.jpg",
    "https://cdn.pixabay.com/photo/2023/07/22/08/54/european-shorthair-8142959_640.jpg",
    "https://cdn.pixabay.com/photo/2023/05/25/18/10/flowers-8017976_640.jpg",
    "https://cdn.pixabay.com/photo/2024/02/14/14/57/mountains-8573646_640.jpg",
    "https://cdn.pixabay.com/photo/2024/01/07/15/12/bald-eagles-8493350_640.jpg",
    "https://cdn.pixabay.com/photo/2023/06/03/13/44/bird-8037744_640.jpg",
    "https://cdn.pixabay.com/photo/2024/02/05/16/23/labrador-8554882_640.jpg",
    "https://cdn.pixabay.com/photo/2023/09/30/10/53/common-blue-8285440_640.jpg",
    "https://cdn.pixabay.com/photo/2023/07/06/08/32/hydrangea-8109935_640.jpg",
    "https://cdn.pixabay.com/photo/2023/11/20/10/40/vietnam-8400803_640.jpg",
    "https://cdn.pixabay.com/photo/2024/02/09/14/54/butterfly-8563213_640.jpg",
    "https://cdn.pixabay.com/photo/2023/07/22/09/04/european-shorthair-8142967_640.jpg",
    "https://cdn.pixabay.com/photo/2023/09/03/15/19/annas-hummingbird-8230888_640.jpg",
    "https://cdn.pixabay.com/photo/2023/08/28/20/32/flower-8220018_640.jpg",
    "https://cdn.pixabay.com/photo/2023/04/27/08/45/australian-king-parrot-7954026_640.jpg",
    "https://cdn.pixabay.com/photo/2023/04/14/08/47/moss-7924522_640.jpg",
    "https://cdn.pixabay.com/photo/2024/02/05/20/06/great-white-heron-8555232_640.jpg",
    "https://cdn.pixabay.com/photo/2024/02/01/12/19/grasses-8545863_640.jpg",
    "https://cdn.pixabay.com/photo/2023/10/17/09/37/honey-bee-8320764_640.jpg",
    "https://cdn.pixabay.com/photo/2023/11/04/15/01/maple-8365123_640.jpg",
    "https://cdn.pixabay.com/photo/2024/01/17/17/22/bee-8515123_640.jpg",
    "https://cdn.pixabay.com/photo/2024/02/01/18/53/cosmos-8546570_640.jpg",
    "https://cdn.pixabay.com/photo/2024/01/29/19/45/mountains-8540709_640.jpg",
    "https://cdn.pixabay.com/photo/2023/11/29/17/51/clouds-8420083_640.jpg",
    "https://cdn.pixabay.com/photo/2023/10/26/11/17/flower-8342448_640.jpg",
    "https://cdn.pixabay.com/photo/2023/09/26/15/49/rosa-rubiginosa-8277700_640.jpg",
    "https://cdn.pixabay.com/photo/2023/12/17/10/58/spider-8453990_640.jpg",
    "https://cdn.pixabay.com/photo/2024/01/15/14/59/bird-8510323_640.jpg",
    "https://cdn.pixabay.com/photo/2023/09/09/09/03/cheetah-8242729_640.png",
    "https://cdn.pixabay.com/photo/2023/09/29/10/20/sunset-8283538_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/07/18/17/28/hover-fly-8135298_640.jpg",
    "https://cdn.pixabay.com/photo/2024/01/06/08/30/lavender-8490878_640.jpg",
    "https://cdn.pixabay.com/photo/2023/10/12/07/34/mountain-8310076_640.jpg",
    "https://cdn.pixabay.com/photo/2023/12/15/15/52/bird-8450958_640.png",
    "https://cdn.pixabay.com/photo/2023/12/19/09/22/berries-8457383_640.jpg",
    "https://cdn.pixabay.com/photo/2023/04/16/22/44/flower-7931290_640.jpg",
    "https://cdn.pixabay.com/photo/2023/12/20/22/35/desert-8460850_640.jpg",
    "https://cdn.pixabay.com/photo/2023/10/23/17/10/landscape-8336496_640.jpg",
    "https://cdn.pixabay.com/photo/2023/07/22/04/15/motorbike-8142649_640.jpg",
    "https://cdn.pixabay.com/photo/2023/10/31/10/24/pond-8354797_640.jpg",
    "https://cdn.pixabay.com/photo/2023/06/10/14/48/giraffe-8054174_640.jpg",
    "https://cdn.pixabay.com/photo/2023/12/02/11/21/winter-8425500_640.jpg",
    "https://cdn.pixabay.com/photo/2024/01/03/11/35/coaster-8485316_640.jpg",
    "https://cdn.pixabay.com/photo/2023/11/08/23/24/bird-8376009_640.jpg",
    "https://cdn.pixabay.com/photo/2023/12/13/06/47/footprints-8446394_640.jpg",
    "https://cdn.pixabay.com/photo/2023/12/12/15/47/yellow-mongoose-8445457_640.jpg",
    "https://cdn.pixabay.com/photo/2023/08/19/19/59/mountains-8201132_640.jpg",
    "https://cdn.pixabay.com/photo/2023/12/12/21/20/dog-8445917_640.jpg"
  ];
  var _style_0 = { "imgBox": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#000000", "overflow": "hidden" } }, "area": { "": { "display": "flex", "justifyContent": "space-around", "flexDirection": "row", "flexWrap": "wrap", "height": 60 } }, "gallEry": { "": { "display": "flex", "justifyContent": "space-between", "flexDirection": "row", "width": "750rpx", "paddingTop": 0, "paddingRight": "10rpx", "paddingBottom": 0, "paddingLeft": "10rpx" } }, "gallEryBox": { "": { "display": "flex", "flexDirection": "column" } }, "gallEryBox_item": { "": { "marginBottom": 10 } } };
  var _sfc_main = {
    data() {
      return {
        imageList: [],
        lazyLoad: uni.getStorageSync("lazyLoad"),
        cache: uni.getStorageSync("cache"),
        flowData: {
          column: 2
        },
        pageW: 0,
        listInfo: {
          y: 0,
          h: 0
        }
      };
    },
    onLoad() {
      this.getData();
      this.listInfo.h = uni.getSystemInfoSync().windowHeight - 60;
    },
    onShow() {
      this.getColnum();
    },
    computed: {
      imgW() {
        return (this.pageW - 10 - (this.flowData.column - 1) * 10) / this.flowData.column;
      }
    },
    methods: {
      listScroll(e) {
        this.listInfo.y = e.detail.scrollTop;
      },
      getColnum() {
        const screenState = screenSizeGrid();
        screenState.subscribeToUpdates(() => {
          this.pageW = screenState.getWindowWidth();
          this.flowData.column = screenState.getColumn() + 1;
          this.changeColumn();
        });
      },
      changeColumn() {
        let groupList = dynamicGrouping(this.imageList, this.flowData.column);
        groupList.forEach((item, i) => this.flowData[`column_${i + 1}`] = item);
      },
      changeCache() {
        this.cache = !this.cache;
        uni.setStorageSync("cache", this.cache);
        plus.runtime.restart();
      },
      changeLazyLoad() {
        this.lazyLoad = !this.lazyLoad;
        uni.setStorageSync("lazyLoad", this.lazyLoad);
        plus.runtime.restart();
      },
      getData() {
        this.imageList = imgArr.map((url) => ({
          src: url
        }));
        this.getColnum();
      },
      removeImageCache() {
        return __async(this, null, function* () {
          uni.clearStorage();
          uni.setStorageSync("lazyLoad", this.lazyLoad);
          uni.setStorageSync("cache", this.cache);
          const res = yield uni.getSavedFileList();
          const fileList = res && res.fileList;
          if (!fileList.length)
            return;
          fileList.forEach((file, index) => {
            uni.removeSavedFile({
              filePath: file.filePath
            }).then((res2) => {
              if (index == fileList.length - 1) {
                plus.runtime.restart();
              }
            });
          });
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_button = (0, import_vue.resolveComponent)("button");
    const _component_Joshua_lazyLoad_cache_image = resolveEasycom((0, import_vue.resolveDynamicComponent)("Joshua-lazyLoad-cache-image"), __easycom_0);
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "content" }, [
        (0, import_vue.createElementVNode)("view", { class: "area" }, [
          (0, import_vue.createVNode)(_component_button, {
            type: "primary",
            onClick: $options.changeLazyLoad
          }, {
            default: (0, import_vue.withCtx)(() => [
              (0, import_vue.createTextVNode)(
                "\u61D2\u52A0\u8F7D\u5F00\u5173\uFF1A" + (0, import_vue.toDisplayString)($data.lazyLoad ? "\u5F00\u542F\u4E2D" : "\u5173\u95ED\u4E2D"),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          (0, import_vue.createVNode)(_component_button, {
            type: "primary",
            onClick: $options.changeCache
          }, {
            default: (0, import_vue.withCtx)(() => [
              (0, import_vue.createTextVNode)(
                "\u7F13\u5B58\u5F00\u5173\uFF1A" + (0, import_vue.toDisplayString)($data.cache ? "\u5F00\u542F\u4E2D" : "\u5173\u95ED\u4E2D"),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          (0, import_vue.createVNode)(_component_button, {
            type: "primary",
            onClick: $options.removeImageCache
          }, {
            default: (0, import_vue.withCtx)(() => [
              (0, import_vue.createTextVNode)("\u6E05\u695A\u7F13\u5B58")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"])
        ]),
        (0, import_vue.createElementVNode)(
          "scroll-view",
          {
            scrollWithAnimation: true,
            showScrollbar: false,
            onScroll: _cache[0] || (_cache[0] = (...args) => $options.listScroll && $options.listScroll(...args)),
            scrollY: true,
            style: (0, import_vue.normalizeStyle)([{ height: $data.listInfo.h + "px" }, { "background-color": "palegoldenrod" }])
          },
          [
            (0, import_vue.createElementVNode)("view", { class: "gallEry" }, [
              ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                import_vue.Fragment,
                null,
                (0, import_vue.renderList)($data.flowData.column, (numVal, index) => {
                  return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                    "view",
                    {
                      style: (0, import_vue.normalizeStyle)("width:" + $options.imgW + "px"),
                      class: "gallEryBox",
                      key: numVal
                    },
                    [
                      ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                        import_vue.Fragment,
                        null,
                        (0, import_vue.renderList)($data.flowData[`column_${index + 1}`], (item, j) => {
                          return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                            "view",
                            {
                              style: (0, import_vue.normalizeStyle)("width:" + $options.imgW + "px"),
                              class: "gallEryBox_item",
                              key: item.src.split("/").pop()
                            },
                            [
                              (0, import_vue.createVNode)(_component_Joshua_lazyLoad_cache_image, {
                                bgColor: "rgba(0,0,0,.2)",
                                duration: 1e3,
                                lazyLoad: $data.lazyLoad,
                                listInfo: $data.listInfo,
                                bgHeight: "100px",
                                width: $options.imgW + "px",
                                cache: $data.cache,
                                fatherTop: "60",
                                className: "imgBox",
                                src: item.src,
                                nvueLazyLoadBottomNumber: 300
                              }, null, 8, ["lazyLoad", "listInfo", "width", "cache", "src"])
                            ],
                            4
                            /* STYLE */
                          );
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ],
          36
          /* STYLE, HYDRATE_EVENTS */
        )
      ])
    ]);
  }
  var nvue = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "Z:/1A\u516C\u53F8/Joshua-lazyLoad-cache/pages/nvue/nvue.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/nvue/nvue";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    nvue.mpType = "page";
    const app = Vue.createPageApp(nvue, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...nvue.styles || []]));
    app.mount("#root");
  }
})();
