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
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$4 = {
    data() {
      return {};
    },
    methods: {
      toUrl(e) {
        uni.navigateTo({
          url: e
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "title" }, [
        vue.createElementVNode("view", {
          class: "",
          style: { "display": "flex", "justify-content": "space-around", "align-items": "center" }
        }, [
          vue.createElementVNode("button", {
            type: "primary",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.toUrl("/pages/vue/vue"))
          }, "VUE页面"),
          vue.createElementVNode("button", {
            type: "primary",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.toUrl("/pages/nvue/nvue"))
          }, "NVue页面")
        ])
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2], ["__file", "Z:/1A公司/Joshua-lazyLoad-cache/pages/index/index.vue"]]);
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$3 = {
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
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1], ["__scopeId", "data-v-d31e1c47"], ["__file", "Z:/1A公司/Joshua-lazyLoad-cache/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
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
  const _sfc_main$2 = {
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
      } = vue.toRefs(props);
      vue.shallowRef(true);
      let Joshua_lazyLoadCache = vue.ref(null);
      const imgStatusIcon = vue.shallowRef("");
      const srcImage = vue.shallowRef("");
      const id_key = vue.shallowRef("image_" + (/* @__PURE__ */ new Date()).getTime() + "_" + parseInt(Math.random() * 1e4));
      let thisUniPage = vue.ref(null);
      vue.shallowRef("");
      const srcImageFlag = vue.shallowRef(true);
      const styleBgH = vue.ref({
        height: bgHeight.value
      });
      vue.ref(true);
      imgStatusIcon.value = defaultIcon.value;
      const useCache = vue.computed(() => {
        let inH5 = false;
        return !inH5 && cache.value;
      });
      const pageView = ({
        ratio: ratio2 = 0,
        el = "",
        selectorView = null
      }, cb) => {
        var _a;
        const thresholds = [0];
        if (ratio2 > 0) {
          thresholds.push(ratio2);
        }
        thisUniPage.value = uni.createIntersectionObserver((_a = vue.getCurrentInstance()) == null ? void 0 : _a.proxy, {
          thresholds,
          initialRatio: 0
        });
        function observeCallback() {
          return (res) => {
            if (cb)
              cb({
                data: res,
                isShow: res.intersectionRatio > ratio2
              });
          };
        }
        let margins = {
          bottom: bottomNumber.value || uni.getSystemInfoSync().windowHeight
        };
        if (selectorView && selectorView != "") {
          thisUniPage.value.relativeTo(selectorView, margins).observe(el, observeCallback());
        } else {
          thisUniPage.value.relativeToViewport(margins).observe(el, observeCallback());
        }
      };
      const handleCache = async (src2) => {
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
                success: async (res2) => {
                  if (srcImageFlag.value) {
                    const {
                      data: cachedRes
                    } = await uni.getStorage({
                      key: keyName
                    });
                    srcImage.value = cachedRes.url;
                  }
                }
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
          } = await uni.getStorage({
            key: keyName
          });
          const cachedUrl = cachedRes && cachedRes.url;
          if (srcName !== cachedRes.name) {
            removeStore(cachedUrl, keyName);
            start();
            return;
          }
          if (cachedUrl && cacheTime.value) {
            const cachedUrlInfo = await uni.getSavedFileInfo({
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
      };
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
      vue.watch(src, (newValue, oldValue) => {
        srcImageFlag.value = true;
        imgDispose();
      });
      vue.onMounted(() => {
        imgDispose();
      });
      function imgDispose() {
        if (!lazyLoad.value) {
          assignment(src.value);
          if (!useCache.value)
            return;
          handleCache(src.value);
        } else {
          pageView({
            ratio: ratio.value,
            el: `#${id_key.value}`,
            selectorView: selector.value
          }, (res) => {
            if (res.isShow) {
              setTimeout(() => {
                assignment(src.value);
                thisUniPage.value.disconnect();
                if (!useCache.value)
                  return;
                handleCache(src.value);
              }, duration.value);
            }
          });
        }
      }
      vue.watch(srcImageFlag, (newVal) => {
        if (!newVal) {
          styleBgH.value = {
            minHeight: bgHeight.value
          };
        }
      });
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            ref_key: "Joshua_lazyLoadCache",
            ref: Joshua_lazyLoadCache,
            class: "Joshua_lazyLoadCache",
            style: vue.normalizeStyle([
              { backgroundColor: vue.unref(srcImageFlag) ? __props.bgColor : "transparent" },
              { width: vue.unref(srcImageFlag) ? vue.unref(width) : "100%" },
              { borderRadius: __props.borderRadius },
              { height: vue.unref(srcImageFlag) ? vue.unref(bgHeight) : "fit-content" }
            ])
          },
          [
            vue.unref(srcImageFlag) ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 0,
              class: "icon",
              "custom-prefix": __props.customPrefix == "type" ? "" : __props.customPrefix,
              type: vue.unref(imgStatusIcon),
              style: vue.normalizeStyle([{ "position": "absolute" }, []]),
              size: vue.unref(iconSize) + "px",
              color: __props.iconColor
            }, null, 8, ["custom-prefix", "type", "size", "color"])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("image", {
              id: vue.unref(id_key),
              style: vue.normalizeStyle([{ width: vue.unref(width) }, { height: __props.height == "auto" ? " " : __props.height }, { borderRadius: __props.borderRadius }]),
              mode: __props.mode,
              src: vue.unref(srcImage),
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
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-fe247411"], ["__file", "Z:/1A公司/Joshua-lazyLoad-cache/uni_modules/Joshua-lazyLoad-cache-image/components/Joshua-lazyLoad-cache-image/Joshua-lazyLoad-cache-image.vue"]]);
  const imgArr = [
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
    return {
      ...state,
      subscribeToUpdates: (callback) => {
        uni.$on("windowResizeUpdate", callback);
      }
    };
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
  const _sfc_main$1 = {
    data() {
      return {
        imageList: [],
        lazyLoad: uni.getStorageSync("lazyLoad"),
        cache: uni.getStorageSync("cache"),
        flowData: {
          column: 2
        }
      };
    },
    onLoad() {
      this.getData();
    },
    onShow() {
      this.getColnum();
    },
    methods: {
      getColnum() {
        const screenState = screenSizeGrid();
        screenState.subscribeToUpdates(() => {
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
      async removeImageCache() {
        uni.clearStorage();
        uni.setStorageSync("lazyLoad", this.lazyLoad);
        uni.setStorageSync("cache", this.cache);
        const res = await uni.getSavedFileList();
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
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Joshua_lazyLoad_cache_image = resolveEasycom(vue.resolveDynamicComponent("Joshua-lazyLoad-cache-image"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "area" }, [
        vue.createElementVNode(
          "button",
          {
            size: "mini",
            type: "primary",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.changeLazyLoad && $options.changeLazyLoad(...args))
          },
          "懒加载开关：" + vue.toDisplayString($data.lazyLoad ? "开启中" : "关闭中"),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "button",
          {
            size: "mini",
            type: "primary",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.changeCache && $options.changeCache(...args))
          },
          "缓存开关：" + vue.toDisplayString($data.cache ? "开启中" : "关闭中"),
          1
          /* TEXT */
        ),
        vue.createElementVNode("button", {
          size: "mini",
          type: "primary",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.removeImageCache && $options.removeImageCache(...args))
        }, "清楚缓存")
      ]),
      vue.createElementVNode(
        "view",
        {
          class: "gallEry",
          style: vue.normalizeStyle("grid-template-columns: repeat(" + $data.flowData.column + ",1fr);")
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.flowData.column, (numVal, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "gallEryBox",
                style: { "gap": "10px" },
                key: numVal
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.flowData[`column_${index + 1}`], (item, j) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: item.src.split("/").pop()
                    }, [
                      vue.createVNode(_component_Joshua_lazyLoad_cache_image, {
                        bgColor: "rgba(0,0,0,.2)",
                        duration: 1e3,
                        bottomNumber: 100,
                        lazyLoad: $data.lazyLoad,
                        cache: $data.cache,
                        selector: ".content",
                        src: item.src
                      }, null, 8, ["lazyLoad", "cache", "src"])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const PagesVueVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "Z:/1A公司/Joshua-lazyLoad-cache/pages/vue/vue.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/vue/vue", PagesVueVue);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Z:/1A公司/Joshua-lazyLoad-cache/App.vue"]]);
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
})(Vue, uni.VueShared);
