(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
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

  // node_modules/theme-change/index.js
  var require_theme_change = __commonJS({
    "node_modules/theme-change/index.js"(exports, module) {
      function themeToggle() {
        var toggleEl = document.querySelector("[data-toggle-theme]");
        var dataKey = toggleEl ? toggleEl.getAttribute("data-key") : null;
        (function(theme = localStorage.getItem(dataKey ? dataKey : "theme")) {
          if (localStorage.getItem(dataKey ? dataKey : "theme")) {
            document.documentElement.setAttribute("data-theme", theme);
            if (toggleEl) {
              [...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
                el.classList.add(toggleEl.getAttribute("data-act-class"));
              });
            }
          }
        })();
        if (toggleEl) {
          [...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
            el.addEventListener("click", function() {
              var themesList = el.getAttribute("data-toggle-theme");
              if (themesList) {
                var themesArray = themesList.split(",");
                if (document.documentElement.getAttribute("data-theme") == themesArray[0]) {
                  if (themesArray.length == 1) {
                    document.documentElement.removeAttribute("data-theme");
                    localStorage.removeItem(dataKey ? dataKey : "theme");
                  } else {
                    document.documentElement.setAttribute("data-theme", themesArray[1]);
                    localStorage.setItem(dataKey ? dataKey : "theme", themesArray[1]);
                  }
                } else {
                  document.documentElement.setAttribute("data-theme", themesArray[0]);
                  localStorage.setItem(dataKey ? dataKey : "theme", themesArray[0]);
                }
              }
              [...document.querySelectorAll("[data-toggle-theme]")].forEach((el2) => {
                el2.classList.toggle(this.getAttribute("data-act-class"));
              });
            });
          });
        }
      }
      function themeBtn() {
        var btnEl = document.querySelector("[data-set-theme='']");
        var dataKey = btnEl ? btnEl.getAttribute("data-key") : null;
        (function(theme = localStorage.getItem(dataKey ? dataKey : "theme")) {
          if (theme != void 0 && theme != "") {
            if (localStorage.getItem(dataKey ? dataKey : "theme") && localStorage.getItem(dataKey ? dataKey : "theme") != "") {
              document.documentElement.setAttribute("data-theme", theme);
              var btnEl2 = document.querySelector("[data-set-theme='" + theme.toString() + "']");
              if (btnEl2) {
                [...document.querySelectorAll("[data-set-theme]")].forEach((el) => {
                  el.classList.remove(el.getAttribute("data-act-class"));
                });
                if (btnEl2.getAttribute("data-act-class")) {
                  btnEl2.classList.add(btnEl2.getAttribute("data-act-class"));
                }
              }
            } else {
              var btnEl2 = document.querySelector("[data-set-theme='']");
              if (btnEl2.getAttribute("data-act-class")) {
                btnEl2.classList.add(btnEl2.getAttribute("data-act-class"));
              }
            }
          }
        })();
        [...document.querySelectorAll("[data-set-theme]")].forEach((el) => {
          el.addEventListener("click", function() {
            document.documentElement.setAttribute("data-theme", this.getAttribute("data-set-theme"));
            localStorage.setItem(dataKey ? dataKey : "theme", document.documentElement.getAttribute("data-theme"));
            [...document.querySelectorAll("[data-set-theme]")].forEach((el2) => {
              el2.classList.remove(el2.getAttribute("data-act-class"));
            });
            if (el.getAttribute("data-act-class")) {
              el.classList.add(el.getAttribute("data-act-class"));
            }
          });
        });
      }
      function themeSelect() {
        var selectEl = document.querySelector("select[data-choose-theme]");
        var dataKey = selectEl ? selectEl.getAttribute("data-key") : null;
        (function(theme = localStorage.getItem(dataKey ? dataKey : "theme")) {
          if (localStorage.getItem(dataKey ? dataKey : "theme")) {
            document.documentElement.setAttribute("data-theme", theme);
            var optionToggler = document.querySelector("select[data-choose-theme] [value='" + theme.toString() + "']");
            if (optionToggler) {
              [...document.querySelectorAll("select[data-choose-theme] [value='" + theme.toString() + "']")].forEach((el) => {
                el.selected = true;
              });
            }
          }
        })();
        if (selectEl) {
          [...document.querySelectorAll("select[data-choose-theme]")].forEach((el) => {
            el.addEventListener("change", function() {
              document.documentElement.setAttribute("data-theme", this.value);
              localStorage.setItem(dataKey ? dataKey : "theme", document.documentElement.getAttribute("data-theme"));
              [...document.querySelectorAll("select[data-choose-theme] [value='" + localStorage.getItem(dataKey ? dataKey : "theme") + "']")].forEach((el2) => {
                el2.selected = true;
              });
            });
          });
        }
      }
      function themeChange2(attach = true) {
        if (attach === true) {
          document.addEventListener("DOMContentLoaded", function(event) {
            themeToggle();
            themeSelect();
            themeBtn();
          });
        } else {
          themeToggle();
          themeSelect();
          themeBtn();
        }
      }
      if (typeof exports != "undefined") {
        module.exports = { themeChange: themeChange2 };
      } else {
        themeChange2();
      }
    }
  });

  // node_modules/htmx.org/dist/htmx.esm.js
  var htmx2 = function() {
    "use strict";
    const htmx = {
      // Tsc madness here, assigning the functions directly results in an invalid TypeScript output, but reassigning is fine
      /* Event processing */
      /** @type {typeof onLoadHelper} */
      onLoad: null,
      /** @type {typeof processNode} */
      process: null,
      /** @type {typeof addEventListenerImpl} */
      on: null,
      /** @type {typeof removeEventListenerImpl} */
      off: null,
      /** @type {typeof triggerEvent} */
      trigger: null,
      /** @type {typeof ajaxHelper} */
      ajax: null,
      /* DOM querying helpers */
      /** @type {typeof find} */
      find: null,
      /** @type {typeof findAll} */
      findAll: null,
      /** @type {typeof closest} */
      closest: null,
      /**
       * Returns the input values that would resolve for a given element via the htmx value resolution mechanism
       *
       * @see https://htmx.org/api/#values
       *
       * @param {Element} elt the element to resolve values on
       * @param {HttpVerb} type the request type (e.g. **get** or **post**) non-GET's will include the enclosing form of the element. Defaults to **post**
       * @returns {Object}
       */
      values: function(elt, type) {
        const inputValues = getInputValues(elt, type || "post");
        return inputValues.values;
      },
      /* DOM manipulation helpers */
      /** @type {typeof removeElement} */
      remove: null,
      /** @type {typeof addClassToElement} */
      addClass: null,
      /** @type {typeof removeClassFromElement} */
      removeClass: null,
      /** @type {typeof toggleClassOnElement} */
      toggleClass: null,
      /** @type {typeof takeClassForElement} */
      takeClass: null,
      /** @type {typeof swap} */
      swap: null,
      /* Extension entrypoints */
      /** @type {typeof defineExtension} */
      defineExtension: null,
      /** @type {typeof removeExtension} */
      removeExtension: null,
      /* Debugging */
      /** @type {typeof logAll} */
      logAll: null,
      /** @type {typeof logNone} */
      logNone: null,
      /* Debugging */
      /**
       * The logger htmx uses to log with
       *
       * @see https://htmx.org/api/#logger
       */
      logger: null,
      /**
       * A property holding the configuration htmx uses at runtime.
       *
       * Note that using a [meta tag](https://htmx.org/docs/#config) is the preferred mechanism for setting these properties.
       *
       * @see https://htmx.org/api/#config
       */
      config: {
        /**
         * Whether to use history.
         * @type boolean
         * @default true
         */
        historyEnabled: true,
        /**
         * The number of pages to keep in **localStorage** for history support.
         * @type number
         * @default 10
         */
        historyCacheSize: 10,
        /**
         * @type boolean
         * @default false
         */
        refreshOnHistoryMiss: false,
        /**
         * The default swap style to use if **[hx-swap](https://htmx.org/attributes/hx-swap)** is omitted.
         * @type HtmxSwapStyle
         * @default 'innerHTML'
         */
        defaultSwapStyle: "innerHTML",
        /**
         * The default delay between receiving a response from the server and doing the swap.
         * @type number
         * @default 0
         */
        defaultSwapDelay: 0,
        /**
         * The default delay between completing the content swap and settling attributes.
         * @type number
         * @default 20
         */
        defaultSettleDelay: 20,
        /**
         * If true, htmx will inject a small amount of CSS into the page to make indicators invisible unless the **htmx-indicator** class is present.
         * @type boolean
         * @default true
         */
        includeIndicatorStyles: true,
        /**
         * The class to place on indicators when a request is in flight.
         * @type string
         * @default 'htmx-indicator'
         */
        indicatorClass: "htmx-indicator",
        /**
         * The class to place on triggering elements when a request is in flight.
         * @type string
         * @default 'htmx-request'
         */
        requestClass: "htmx-request",
        /**
         * The class to temporarily place on elements that htmx has added to the DOM.
         * @type string
         * @default 'htmx-added'
         */
        addedClass: "htmx-added",
        /**
         * The class to place on target elements when htmx is in the settling phase.
         * @type string
         * @default 'htmx-settling'
         */
        settlingClass: "htmx-settling",
        /**
         * The class to place on target elements when htmx is in the swapping phase.
         * @type string
         * @default 'htmx-swapping'
         */
        swappingClass: "htmx-swapping",
        /**
         * Allows the use of eval-like functionality in htmx, to enable **hx-vars**, trigger conditions & script tag evaluation. Can be set to **false** for CSP compatibility.
         * @type boolean
         * @default true
         */
        allowEval: true,
        /**
         * If set to false, disables the interpretation of script tags.
         * @type boolean
         * @default true
         */
        allowScriptTags: true,
        /**
         * If set, the nonce will be added to inline scripts.
         * @type string
         * @default ''
         */
        inlineScriptNonce: "",
        /**
         * If set, the nonce will be added to inline styles.
         * @type string
         * @default ''
         */
        inlineStyleNonce: "",
        /**
         * The attributes to settle during the settling phase.
         * @type string[]
         * @default ['class', 'style', 'width', 'height']
         */
        attributesToSettle: ["class", "style", "width", "height"],
        /**
         * Allow cross-site Access-Control requests using credentials such as cookies, authorization headers or TLS client certificates.
         * @type boolean
         * @default false
         */
        withCredentials: false,
        /**
         * @type number
         * @default 0
         */
        timeout: 0,
        /**
         * The default implementation of **getWebSocketReconnectDelay** for reconnecting after unexpected connection loss by the event code **Abnormal Closure**, **Service Restart** or **Try Again Later**.
         * @type {'full-jitter' | ((retryCount:number) => number)}
         * @default "full-jitter"
         */
        wsReconnectDelay: "full-jitter",
        /**
         * The type of binary data being received over the WebSocket connection
         * @type BinaryType
         * @default 'blob'
         */
        wsBinaryType: "blob",
        /**
         * @type string
         * @default '[hx-disable], [data-hx-disable]'
         */
        disableSelector: "[hx-disable], [data-hx-disable]",
        /**
         * @type {'auto' | 'instant' | 'smooth'}
         * @default 'instant'
         */
        scrollBehavior: "instant",
        /**
         * If the focused element should be scrolled into view.
         * @type boolean
         * @default false
         */
        defaultFocusScroll: false,
        /**
         * If set to true htmx will include a cache-busting parameter in GET requests to avoid caching partial responses by the browser
         * @type boolean
         * @default false
         */
        getCacheBusterParam: false,
        /**
         * If set to true, htmx will use the View Transition API when swapping in new content.
         * @type boolean
         * @default false
         */
        globalViewTransitions: false,
        /**
         * htmx will format requests with these methods by encoding their parameters in the URL, not the request body
         * @type {(HttpVerb)[]}
         * @default ['get', 'delete']
         */
        methodsThatUseUrlParams: ["get", "delete"],
        /**
         * If set to true, disables htmx-based requests to non-origin hosts.
         * @type boolean
         * @default false
         */
        selfRequestsOnly: true,
        /**
         * If set to true htmx will not update the title of the document when a title tag is found in new content
         * @type boolean
         * @default false
         */
        ignoreTitle: false,
        /**
         * Whether the target of a boosted element is scrolled into the viewport.
         * @type boolean
         * @default true
         */
        scrollIntoViewOnBoost: true,
        /**
         * The cache to store evaluated trigger specifications into.
         * You may define a simple object to use a never-clearing cache, or implement your own system using a [proxy object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
         * @type {Object|null}
         * @default null
         */
        triggerSpecsCache: null,
        /** @type boolean */
        disableInheritance: false,
        /** @type HtmxResponseHandlingConfig[] */
        responseHandling: [
          { code: "204", swap: false },
          { code: "[23]..", swap: true },
          { code: "[45]..", swap: false, error: true }
        ],
        /**
         * Whether to process OOB swaps on elements that are nested within the main response element.
         * @type boolean
         * @default true
         */
        allowNestedOobSwaps: true
      },
      /** @type {typeof parseInterval} */
      parseInterval: null,
      /** @type {typeof internalEval} */
      _: null,
      version: "2.0.2"
    };
    htmx.onLoad = onLoadHelper;
    htmx.process = processNode;
    htmx.on = addEventListenerImpl;
    htmx.off = removeEventListenerImpl;
    htmx.trigger = triggerEvent;
    htmx.ajax = ajaxHelper;
    htmx.find = find;
    htmx.findAll = findAll;
    htmx.closest = closest;
    htmx.remove = removeElement;
    htmx.addClass = addClassToElement;
    htmx.removeClass = removeClassFromElement;
    htmx.toggleClass = toggleClassOnElement;
    htmx.takeClass = takeClassForElement;
    htmx.swap = swap;
    htmx.defineExtension = defineExtension;
    htmx.removeExtension = removeExtension;
    htmx.logAll = logAll;
    htmx.logNone = logNone;
    htmx.parseInterval = parseInterval;
    htmx._ = internalEval;
    const internalAPI = {
      addTriggerHandler,
      bodyContains,
      canAccessLocalStorage,
      findThisElement,
      filterValues,
      swap,
      hasAttribute,
      getAttributeValue,
      getClosestAttributeValue,
      getClosestMatch,
      getExpressionVars,
      getHeaders,
      getInputValues,
      getInternalData,
      getSwapSpecification,
      getTriggerSpecs,
      getTarget,
      makeFragment,
      mergeObjects,
      makeSettleInfo,
      oobSwap,
      querySelectorExt,
      settleImmediately,
      shouldCancel,
      triggerEvent,
      triggerErrorEvent,
      withExtensions
    };
    const VERBS = ["get", "post", "put", "delete", "patch"];
    const VERB_SELECTOR = VERBS.map(function(verb) {
      return "[hx-" + verb + "], [data-hx-" + verb + "]";
    }).join(", ");
    const HEAD_TAG_REGEX = makeTagRegEx("head");
    function makeTagRegEx(tag, global = false) {
      return new RegExp(
        `<${tag}(\\s[^>]*>|>)([\\s\\S]*?)<\\/${tag}>`,
        global ? "gim" : "im"
      );
    }
    function parseInterval(str2) {
      if (str2 == void 0) {
        return void 0;
      }
      let interval = NaN;
      if (str2.slice(-2) == "ms") {
        interval = parseFloat(str2.slice(0, -2));
      } else if (str2.slice(-1) == "s") {
        interval = parseFloat(str2.slice(0, -1)) * 1e3;
      } else if (str2.slice(-1) == "m") {
        interval = parseFloat(str2.slice(0, -1)) * 1e3 * 60;
      } else {
        interval = parseFloat(str2);
      }
      return isNaN(interval) ? void 0 : interval;
    }
    function getRawAttribute(elt, name) {
      return elt instanceof Element && elt.getAttribute(name);
    }
    function hasAttribute(elt, qualifiedName) {
      return !!elt.hasAttribute && (elt.hasAttribute(qualifiedName) || elt.hasAttribute("data-" + qualifiedName));
    }
    function getAttributeValue(elt, qualifiedName) {
      return getRawAttribute(elt, qualifiedName) || getRawAttribute(elt, "data-" + qualifiedName);
    }
    function parentElt(elt) {
      const parent = elt.parentElement;
      if (!parent && elt.parentNode instanceof ShadowRoot) return elt.parentNode;
      return parent;
    }
    function getDocument() {
      return document;
    }
    function getRootNode(elt, global) {
      return elt.getRootNode ? elt.getRootNode({ composed: global }) : getDocument();
    }
    function getClosestMatch(elt, condition) {
      while (elt && !condition(elt)) {
        elt = parentElt(elt);
      }
      return elt || null;
    }
    function getAttributeValueWithDisinheritance(initialElement, ancestor, attributeName) {
      const attributeValue = getAttributeValue(ancestor, attributeName);
      const disinherit = getAttributeValue(ancestor, "hx-disinherit");
      var inherit = getAttributeValue(ancestor, "hx-inherit");
      if (initialElement !== ancestor) {
        if (htmx.config.disableInheritance) {
          if (inherit && (inherit === "*" || inherit.split(" ").indexOf(attributeName) >= 0)) {
            return attributeValue;
          } else {
            return null;
          }
        }
        if (disinherit && (disinherit === "*" || disinherit.split(" ").indexOf(attributeName) >= 0)) {
          return "unset";
        }
      }
      return attributeValue;
    }
    function getClosestAttributeValue(elt, attributeName) {
      let closestAttr = null;
      getClosestMatch(elt, function(e) {
        return !!(closestAttr = getAttributeValueWithDisinheritance(elt, asElement(e), attributeName));
      });
      if (closestAttr !== "unset") {
        return closestAttr;
      }
    }
    function matches(elt, selector) {
      const matchesFunction = elt instanceof Element && (elt.matches || elt.matchesSelector || elt.msMatchesSelector || elt.mozMatchesSelector || elt.webkitMatchesSelector || elt.oMatchesSelector);
      return !!matchesFunction && matchesFunction.call(elt, selector);
    }
    function getStartTag(str2) {
      const tagMatcher = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      const match = tagMatcher.exec(str2);
      if (match) {
        return match[1].toLowerCase();
      } else {
        return "";
      }
    }
    function parseHTML(resp) {
      const parser = new DOMParser();
      return parser.parseFromString(resp, "text/html");
    }
    function takeChildrenFor(fragment, elt) {
      while (elt.childNodes.length > 0) {
        fragment.append(elt.childNodes[0]);
      }
    }
    function duplicateScript(script) {
      const newScript = getDocument().createElement("script");
      forEach(script.attributes, function(attr) {
        newScript.setAttribute(attr.name, attr.value);
      });
      newScript.textContent = script.textContent;
      newScript.async = false;
      if (htmx.config.inlineScriptNonce) {
        newScript.nonce = htmx.config.inlineScriptNonce;
      }
      return newScript;
    }
    function isJavaScriptScriptNode(script) {
      return script.matches("script") && (script.type === "text/javascript" || script.type === "module" || script.type === "");
    }
    function normalizeScriptTags(fragment) {
      Array.from(fragment.querySelectorAll("script")).forEach(
        /** @param {HTMLScriptElement} script */
        (script) => {
          if (isJavaScriptScriptNode(script)) {
            const newScript = duplicateScript(script);
            const parent = script.parentNode;
            try {
              parent.insertBefore(newScript, script);
            } catch (e) {
              logError(e);
            } finally {
              script.remove();
            }
          }
        }
      );
    }
    function makeFragment(response) {
      const responseWithNoHead = response.replace(HEAD_TAG_REGEX, "");
      const startTag = getStartTag(responseWithNoHead);
      let fragment;
      if (startTag === "html") {
        fragment = /** @type DocumentFragmentWithTitle */
        new DocumentFragment();
        const doc = parseHTML(response);
        takeChildrenFor(fragment, doc.body);
        fragment.title = doc.title;
      } else if (startTag === "body") {
        fragment = /** @type DocumentFragmentWithTitle */
        new DocumentFragment();
        const doc = parseHTML(responseWithNoHead);
        takeChildrenFor(fragment, doc.body);
        fragment.title = doc.title;
      } else {
        const doc = parseHTML('<body><template class="internal-htmx-wrapper">' + responseWithNoHead + "</template></body>");
        fragment = /** @type DocumentFragmentWithTitle */
        doc.querySelector("template").content;
        fragment.title = doc.title;
        var titleElement = fragment.querySelector("title");
        if (titleElement && titleElement.parentNode === fragment) {
          titleElement.remove();
          fragment.title = titleElement.innerText;
        }
      }
      if (fragment) {
        if (htmx.config.allowScriptTags) {
          normalizeScriptTags(fragment);
        } else {
          fragment.querySelectorAll("script").forEach((script) => script.remove());
        }
      }
      return fragment;
    }
    function maybeCall(func) {
      if (func) {
        func();
      }
    }
    function isType(o, type) {
      return Object.prototype.toString.call(o) === "[object " + type + "]";
    }
    function isFunction(o) {
      return typeof o === "function";
    }
    function isRawObject(o) {
      return isType(o, "Object");
    }
    function getInternalData(elt) {
      const dataProp = "htmx-internal-data";
      let data = elt[dataProp];
      if (!data) {
        data = elt[dataProp] = {};
      }
      return data;
    }
    function toArray(arr) {
      const returnArr = [];
      if (arr) {
        for (let i = 0; i < arr.length; i++) {
          returnArr.push(arr[i]);
        }
      }
      return returnArr;
    }
    function forEach(arr, func) {
      if (arr) {
        for (let i = 0; i < arr.length; i++) {
          func(arr[i]);
        }
      }
    }
    function isScrolledIntoView(el) {
      const rect = el.getBoundingClientRect();
      const elemTop = rect.top;
      const elemBottom = rect.bottom;
      return elemTop < window.innerHeight && elemBottom >= 0;
    }
    function bodyContains(elt) {
      const rootNode = elt.getRootNode && elt.getRootNode();
      if (rootNode && rootNode instanceof window.ShadowRoot) {
        return getDocument().body.contains(rootNode.host);
      } else {
        return getDocument().body.contains(elt);
      }
    }
    function splitOnWhitespace(trigger) {
      return trigger.trim().split(/\s+/);
    }
    function mergeObjects(obj1, obj2) {
      for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
          obj1[key] = obj2[key];
        }
      }
      return obj1;
    }
    function parseJSON(jString) {
      try {
        return JSON.parse(jString);
      } catch (error) {
        logError(error);
        return null;
      }
    }
    function canAccessLocalStorage() {
      const test = "htmx:localStorageTest";
      try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch (e) {
        return false;
      }
    }
    function normalizePath(path) {
      try {
        const url = new URL(path);
        if (url) {
          path = url.pathname + url.search;
        }
        if (!/^\/$/.test(path)) {
          path = path.replace(/\/+$/, "");
        }
        return path;
      } catch (e) {
        return path;
      }
    }
    function internalEval(str) {
      return maybeEval(getDocument().body, function() {
        return eval(str);
      });
    }
    function onLoadHelper(callback) {
      const value = htmx.on(
        "htmx:load",
        /** @param {CustomEvent} evt */
        function(evt) {
          callback(evt.detail.elt);
        }
      );
      return value;
    }
    function logAll() {
      htmx.logger = function(elt, event, data) {
        if (console) {
          console.log(event, elt, data);
        }
      };
    }
    function logNone() {
      htmx.logger = null;
    }
    function find(eltOrSelector, selector) {
      if (typeof eltOrSelector !== "string") {
        return eltOrSelector.querySelector(selector);
      } else {
        return find(getDocument(), eltOrSelector);
      }
    }
    function findAll(eltOrSelector, selector) {
      if (typeof eltOrSelector !== "string") {
        return eltOrSelector.querySelectorAll(selector);
      } else {
        return findAll(getDocument(), eltOrSelector);
      }
    }
    function getWindow() {
      return window;
    }
    function removeElement(elt, delay) {
      elt = resolveTarget(elt);
      if (delay) {
        getWindow().setTimeout(function() {
          removeElement(elt);
          elt = null;
        }, delay);
      } else {
        parentElt(elt).removeChild(elt);
      }
    }
    function asElement(elt) {
      return elt instanceof Element ? elt : null;
    }
    function asHtmlElement(elt) {
      return elt instanceof HTMLElement ? elt : null;
    }
    function asString(value) {
      return typeof value === "string" ? value : null;
    }
    function asParentNode(elt) {
      return elt instanceof Element || elt instanceof Document || elt instanceof DocumentFragment ? elt : null;
    }
    function addClassToElement(elt, clazz, delay) {
      elt = asElement(resolveTarget(elt));
      if (!elt) {
        return;
      }
      if (delay) {
        getWindow().setTimeout(function() {
          addClassToElement(elt, clazz);
          elt = null;
        }, delay);
      } else {
        elt.classList && elt.classList.add(clazz);
      }
    }
    function removeClassFromElement(node, clazz, delay) {
      let elt = asElement(resolveTarget(node));
      if (!elt) {
        return;
      }
      if (delay) {
        getWindow().setTimeout(function() {
          removeClassFromElement(elt, clazz);
          elt = null;
        }, delay);
      } else {
        if (elt.classList) {
          elt.classList.remove(clazz);
          if (elt.classList.length === 0) {
            elt.removeAttribute("class");
          }
        }
      }
    }
    function toggleClassOnElement(elt, clazz) {
      elt = resolveTarget(elt);
      elt.classList.toggle(clazz);
    }
    function takeClassForElement(elt, clazz) {
      elt = resolveTarget(elt);
      forEach(elt.parentElement.children, function(child) {
        removeClassFromElement(child, clazz);
      });
      addClassToElement(asElement(elt), clazz);
    }
    function closest(elt, selector) {
      elt = asElement(resolveTarget(elt));
      if (elt && elt.closest) {
        return elt.closest(selector);
      } else {
        do {
          if (elt == null || matches(elt, selector)) {
            return elt;
          }
        } while (elt = elt && asElement(parentElt(elt)));
        return null;
      }
    }
    function startsWith(str2, prefix) {
      return str2.substring(0, prefix.length) === prefix;
    }
    function endsWith(str2, suffix) {
      return str2.substring(str2.length - suffix.length) === suffix;
    }
    function normalizeSelector(selector) {
      const trimmedSelector = selector.trim();
      if (startsWith(trimmedSelector, "<") && endsWith(trimmedSelector, "/>")) {
        return trimmedSelector.substring(1, trimmedSelector.length - 2);
      } else {
        return trimmedSelector;
      }
    }
    function querySelectorAllExt(elt, selector, global) {
      elt = resolveTarget(elt);
      if (selector.indexOf("closest ") === 0) {
        return [closest(asElement(elt), normalizeSelector(selector.substr(8)))];
      } else if (selector.indexOf("find ") === 0) {
        return [find(asParentNode(elt), normalizeSelector(selector.substr(5)))];
      } else if (selector === "next") {
        return [asElement(elt).nextElementSibling];
      } else if (selector.indexOf("next ") === 0) {
        return [scanForwardQuery(elt, normalizeSelector(selector.substr(5)), !!global)];
      } else if (selector === "previous") {
        return [asElement(elt).previousElementSibling];
      } else if (selector.indexOf("previous ") === 0) {
        return [scanBackwardsQuery(elt, normalizeSelector(selector.substr(9)), !!global)];
      } else if (selector === "document") {
        return [document];
      } else if (selector === "window") {
        return [window];
      } else if (selector === "body") {
        return [document.body];
      } else if (selector === "root") {
        return [getRootNode(elt, !!global)];
      } else if (selector.indexOf("global ") === 0) {
        return querySelectorAllExt(elt, selector.slice(7), true);
      } else {
        return toArray(asParentNode(getRootNode(elt, !!global)).querySelectorAll(normalizeSelector(selector)));
      }
    }
    var scanForwardQuery = function(start, match, global) {
      const results = asParentNode(getRootNode(start, global)).querySelectorAll(match);
      for (let i = 0; i < results.length; i++) {
        const elt = results[i];
        if (elt.compareDocumentPosition(start) === Node.DOCUMENT_POSITION_PRECEDING) {
          return elt;
        }
      }
    };
    var scanBackwardsQuery = function(start, match, global) {
      const results = asParentNode(getRootNode(start, global)).querySelectorAll(match);
      for (let i = results.length - 1; i >= 0; i--) {
        const elt = results[i];
        if (elt.compareDocumentPosition(start) === Node.DOCUMENT_POSITION_FOLLOWING) {
          return elt;
        }
      }
    };
    function querySelectorExt(eltOrSelector, selector) {
      if (typeof eltOrSelector !== "string") {
        return querySelectorAllExt(eltOrSelector, selector)[0];
      } else {
        return querySelectorAllExt(getDocument().body, eltOrSelector)[0];
      }
    }
    function resolveTarget(eltOrSelector, context) {
      if (typeof eltOrSelector === "string") {
        return find(asParentNode(context) || document, eltOrSelector);
      } else {
        return eltOrSelector;
      }
    }
    function processEventArgs(arg1, arg2, arg3) {
      if (isFunction(arg2)) {
        return {
          target: getDocument().body,
          event: asString(arg1),
          listener: arg2
        };
      } else {
        return {
          target: resolveTarget(arg1),
          event: asString(arg2),
          listener: arg3
        };
      }
    }
    function addEventListenerImpl(arg1, arg2, arg3) {
      ready(function() {
        const eventArgs = processEventArgs(arg1, arg2, arg3);
        eventArgs.target.addEventListener(eventArgs.event, eventArgs.listener);
      });
      const b = isFunction(arg2);
      return b ? arg2 : arg3;
    }
    function removeEventListenerImpl(arg1, arg2, arg3) {
      ready(function() {
        const eventArgs = processEventArgs(arg1, arg2, arg3);
        eventArgs.target.removeEventListener(eventArgs.event, eventArgs.listener);
      });
      return isFunction(arg2) ? arg2 : arg3;
    }
    const DUMMY_ELT = getDocument().createElement("output");
    function findAttributeTargets(elt, attrName) {
      const attrTarget = getClosestAttributeValue(elt, attrName);
      if (attrTarget) {
        if (attrTarget === "this") {
          return [findThisElement(elt, attrName)];
        } else {
          const result = querySelectorAllExt(elt, attrTarget);
          if (result.length === 0) {
            logError('The selector "' + attrTarget + '" on ' + attrName + " returned no matches!");
            return [DUMMY_ELT];
          } else {
            return result;
          }
        }
      }
    }
    function findThisElement(elt, attribute) {
      return asElement(getClosestMatch(elt, function(elt2) {
        return getAttributeValue(asElement(elt2), attribute) != null;
      }));
    }
    function getTarget(elt) {
      const targetStr = getClosestAttributeValue(elt, "hx-target");
      if (targetStr) {
        if (targetStr === "this") {
          return findThisElement(elt, "hx-target");
        } else {
          return querySelectorExt(elt, targetStr);
        }
      } else {
        const data = getInternalData(elt);
        if (data.boosted) {
          return getDocument().body;
        } else {
          return elt;
        }
      }
    }
    function shouldSettleAttribute(name) {
      const attributesToSettle = htmx.config.attributesToSettle;
      for (let i = 0; i < attributesToSettle.length; i++) {
        if (name === attributesToSettle[i]) {
          return true;
        }
      }
      return false;
    }
    function cloneAttributes(mergeTo, mergeFrom) {
      forEach(mergeTo.attributes, function(attr) {
        if (!mergeFrom.hasAttribute(attr.name) && shouldSettleAttribute(attr.name)) {
          mergeTo.removeAttribute(attr.name);
        }
      });
      forEach(mergeFrom.attributes, function(attr) {
        if (shouldSettleAttribute(attr.name)) {
          mergeTo.setAttribute(attr.name, attr.value);
        }
      });
    }
    function isInlineSwap(swapStyle, target) {
      const extensions2 = getExtensions(target);
      for (let i = 0; i < extensions2.length; i++) {
        const extension = extensions2[i];
        try {
          if (extension.isInlineSwap(swapStyle)) {
            return true;
          }
        } catch (e) {
          logError(e);
        }
      }
      return swapStyle === "outerHTML";
    }
    function oobSwap(oobValue, oobElement, settleInfo) {
      let selector = "#" + getRawAttribute(oobElement, "id");
      let swapStyle = "outerHTML";
      if (oobValue === "true") {
      } else if (oobValue.indexOf(":") > 0) {
        swapStyle = oobValue.substr(0, oobValue.indexOf(":"));
        selector = oobValue.substr(oobValue.indexOf(":") + 1, oobValue.length);
      } else {
        swapStyle = oobValue;
      }
      const targets = getDocument().querySelectorAll(selector);
      if (targets) {
        forEach(
          targets,
          function(target) {
            let fragment;
            const oobElementClone = oobElement.cloneNode(true);
            fragment = getDocument().createDocumentFragment();
            fragment.appendChild(oobElementClone);
            if (!isInlineSwap(swapStyle, target)) {
              fragment = asParentNode(oobElementClone);
            }
            const beforeSwapDetails = { shouldSwap: true, target, fragment };
            if (!triggerEvent(target, "htmx:oobBeforeSwap", beforeSwapDetails)) return;
            target = beforeSwapDetails.target;
            if (beforeSwapDetails.shouldSwap) {
              swapWithStyle(swapStyle, target, target, fragment, settleInfo);
            }
            forEach(settleInfo.elts, function(elt) {
              triggerEvent(elt, "htmx:oobAfterSwap", beforeSwapDetails);
            });
          }
        );
        oobElement.parentNode.removeChild(oobElement);
      } else {
        oobElement.parentNode.removeChild(oobElement);
        triggerErrorEvent(getDocument().body, "htmx:oobErrorNoTarget", { content: oobElement });
      }
      return oobValue;
    }
    function handlePreservedElements(fragment) {
      forEach(findAll(fragment, "[hx-preserve], [data-hx-preserve]"), function(preservedElt) {
        const id = getAttributeValue(preservedElt, "id");
        const oldElt = getDocument().getElementById(id);
        if (oldElt != null) {
          preservedElt.parentNode.replaceChild(oldElt, preservedElt);
        }
      });
    }
    function handleAttributes(parentNode, fragment, settleInfo) {
      forEach(fragment.querySelectorAll("[id]"), function(newNode) {
        const id = getRawAttribute(newNode, "id");
        if (id && id.length > 0) {
          const normalizedId = id.replace("'", "\\'");
          const normalizedTag = newNode.tagName.replace(":", "\\:");
          const parentElt2 = asParentNode(parentNode);
          const oldNode = parentElt2 && parentElt2.querySelector(normalizedTag + "[id='" + normalizedId + "']");
          if (oldNode && oldNode !== parentElt2) {
            const newAttributes = newNode.cloneNode();
            cloneAttributes(newNode, oldNode);
            settleInfo.tasks.push(function() {
              cloneAttributes(newNode, newAttributes);
            });
          }
        }
      });
    }
    function makeAjaxLoadTask(child) {
      return function() {
        removeClassFromElement(child, htmx.config.addedClass);
        processNode(asElement(child));
        processFocus(asParentNode(child));
        triggerEvent(child, "htmx:load");
      };
    }
    function processFocus(child) {
      const autofocus = "[autofocus]";
      const autoFocusedElt = asHtmlElement(matches(child, autofocus) ? child : child.querySelector(autofocus));
      if (autoFocusedElt != null) {
        autoFocusedElt.focus();
      }
    }
    function insertNodesBefore(parentNode, insertBefore, fragment, settleInfo) {
      handleAttributes(parentNode, fragment, settleInfo);
      while (fragment.childNodes.length > 0) {
        const child = fragment.firstChild;
        addClassToElement(asElement(child), htmx.config.addedClass);
        parentNode.insertBefore(child, insertBefore);
        if (child.nodeType !== Node.TEXT_NODE && child.nodeType !== Node.COMMENT_NODE) {
          settleInfo.tasks.push(makeAjaxLoadTask(child));
        }
      }
    }
    function stringHash(string, hash) {
      let char = 0;
      while (char < string.length) {
        hash = (hash << 5) - hash + string.charCodeAt(char++) | 0;
      }
      return hash;
    }
    function attributeHash(elt) {
      let hash = 0;
      if (elt.attributes) {
        for (let i = 0; i < elt.attributes.length; i++) {
          const attribute = elt.attributes[i];
          if (attribute.value) {
            hash = stringHash(attribute.name, hash);
            hash = stringHash(attribute.value, hash);
          }
        }
      }
      return hash;
    }
    function deInitOnHandlers(elt) {
      const internalData = getInternalData(elt);
      if (internalData.onHandlers) {
        for (let i = 0; i < internalData.onHandlers.length; i++) {
          const handlerInfo = internalData.onHandlers[i];
          removeEventListenerImpl(elt, handlerInfo.event, handlerInfo.listener);
        }
        delete internalData.onHandlers;
      }
    }
    function deInitNode(element) {
      const internalData = getInternalData(element);
      if (internalData.timeout) {
        clearTimeout(internalData.timeout);
      }
      if (internalData.listenerInfos) {
        forEach(internalData.listenerInfos, function(info) {
          if (info.on) {
            removeEventListenerImpl(info.on, info.trigger, info.listener);
          }
        });
      }
      deInitOnHandlers(element);
      forEach(Object.keys(internalData), function(key) {
        delete internalData[key];
      });
    }
    function cleanUpElement(element) {
      triggerEvent(element, "htmx:beforeCleanupElement");
      deInitNode(element);
      if (element.children) {
        forEach(element.children, function(child) {
          cleanUpElement(child);
        });
      }
    }
    function swapOuterHTML(target, fragment, settleInfo) {
      if (target instanceof Element && target.tagName === "BODY") {
        return swapInnerHTML(target, fragment, settleInfo);
      }
      let newElt;
      const eltBeforeNewContent = target.previousSibling;
      insertNodesBefore(parentElt(target), target, fragment, settleInfo);
      if (eltBeforeNewContent == null) {
        newElt = parentElt(target).firstChild;
      } else {
        newElt = eltBeforeNewContent.nextSibling;
      }
      settleInfo.elts = settleInfo.elts.filter(function(e) {
        return e !== target;
      });
      while (newElt && newElt !== target) {
        if (newElt instanceof Element) {
          settleInfo.elts.push(newElt);
        }
        newElt = newElt.nextSibling;
      }
      cleanUpElement(target);
      if (target instanceof Element) {
        target.remove();
      } else {
        target.parentNode.removeChild(target);
      }
    }
    function swapAfterBegin(target, fragment, settleInfo) {
      return insertNodesBefore(target, target.firstChild, fragment, settleInfo);
    }
    function swapBeforeBegin(target, fragment, settleInfo) {
      return insertNodesBefore(parentElt(target), target, fragment, settleInfo);
    }
    function swapBeforeEnd(target, fragment, settleInfo) {
      return insertNodesBefore(target, null, fragment, settleInfo);
    }
    function swapAfterEnd(target, fragment, settleInfo) {
      return insertNodesBefore(parentElt(target), target.nextSibling, fragment, settleInfo);
    }
    function swapDelete(target) {
      cleanUpElement(target);
      return parentElt(target).removeChild(target);
    }
    function swapInnerHTML(target, fragment, settleInfo) {
      const firstChild = target.firstChild;
      insertNodesBefore(target, firstChild, fragment, settleInfo);
      if (firstChild) {
        while (firstChild.nextSibling) {
          cleanUpElement(firstChild.nextSibling);
          target.removeChild(firstChild.nextSibling);
        }
        cleanUpElement(firstChild);
        target.removeChild(firstChild);
      }
    }
    function swapWithStyle(swapStyle, elt, target, fragment, settleInfo) {
      switch (swapStyle) {
        case "none":
          return;
        case "outerHTML":
          swapOuterHTML(target, fragment, settleInfo);
          return;
        case "afterbegin":
          swapAfterBegin(target, fragment, settleInfo);
          return;
        case "beforebegin":
          swapBeforeBegin(target, fragment, settleInfo);
          return;
        case "beforeend":
          swapBeforeEnd(target, fragment, settleInfo);
          return;
        case "afterend":
          swapAfterEnd(target, fragment, settleInfo);
          return;
        case "delete":
          swapDelete(target);
          return;
        default:
          var extensions2 = getExtensions(elt);
          for (let i = 0; i < extensions2.length; i++) {
            const ext = extensions2[i];
            try {
              const newElements = ext.handleSwap(swapStyle, target, fragment, settleInfo);
              if (newElements) {
                if (Array.isArray(newElements)) {
                  for (let j = 0; j < newElements.length; j++) {
                    const child = newElements[j];
                    if (child.nodeType !== Node.TEXT_NODE && child.nodeType !== Node.COMMENT_NODE) {
                      settleInfo.tasks.push(makeAjaxLoadTask(child));
                    }
                  }
                }
                return;
              }
            } catch (e) {
              logError(e);
            }
          }
          if (swapStyle === "innerHTML") {
            swapInnerHTML(target, fragment, settleInfo);
          } else {
            swapWithStyle(htmx.config.defaultSwapStyle, elt, target, fragment, settleInfo);
          }
      }
    }
    function findAndSwapOobElements(fragment, settleInfo) {
      var oobElts = findAll(fragment, "[hx-swap-oob], [data-hx-swap-oob]");
      forEach(oobElts, function(oobElement) {
        if (htmx.config.allowNestedOobSwaps || oobElement.parentElement === null) {
          const oobValue = getAttributeValue(oobElement, "hx-swap-oob");
          if (oobValue != null) {
            oobSwap(oobValue, oobElement, settleInfo);
          }
        } else {
          oobElement.removeAttribute("hx-swap-oob");
          oobElement.removeAttribute("data-hx-swap-oob");
        }
      });
      return oobElts.length > 0;
    }
    function swap(target, content, swapSpec, swapOptions) {
      if (!swapOptions) {
        swapOptions = {};
      }
      target = resolveTarget(target);
      const activeElt = document.activeElement;
      let selectionInfo = {};
      try {
        selectionInfo = {
          elt: activeElt,
          // @ts-ignore
          start: activeElt ? activeElt.selectionStart : null,
          // @ts-ignore
          end: activeElt ? activeElt.selectionEnd : null
        };
      } catch (e) {
      }
      const settleInfo = makeSettleInfo(target);
      if (swapSpec.swapStyle === "textContent") {
        target.textContent = content;
      } else {
        let fragment = makeFragment(content);
        settleInfo.title = fragment.title;
        if (swapOptions.selectOOB) {
          const oobSelectValues = swapOptions.selectOOB.split(",");
          for (let i = 0; i < oobSelectValues.length; i++) {
            const oobSelectValue = oobSelectValues[i].split(":", 2);
            let id = oobSelectValue[0].trim();
            if (id.indexOf("#") === 0) {
              id = id.substring(1);
            }
            const oobValue = oobSelectValue[1] || "true";
            const oobElement = fragment.querySelector("#" + id);
            if (oobElement) {
              oobSwap(oobValue, oobElement, settleInfo);
            }
          }
        }
        findAndSwapOobElements(fragment, settleInfo);
        forEach(
          findAll(fragment, "template"),
          /** @param {HTMLTemplateElement} template */
          function(template) {
            if (findAndSwapOobElements(template.content, settleInfo)) {
              template.remove();
            }
          }
        );
        if (swapOptions.select) {
          const newFragment = getDocument().createDocumentFragment();
          forEach(fragment.querySelectorAll(swapOptions.select), function(node) {
            newFragment.appendChild(node);
          });
          fragment = newFragment;
        }
        handlePreservedElements(fragment);
        swapWithStyle(swapSpec.swapStyle, swapOptions.contextElement, target, fragment, settleInfo);
      }
      if (selectionInfo.elt && !bodyContains(selectionInfo.elt) && getRawAttribute(selectionInfo.elt, "id")) {
        const newActiveElt = document.getElementById(getRawAttribute(selectionInfo.elt, "id"));
        const focusOptions = { preventScroll: swapSpec.focusScroll !== void 0 ? !swapSpec.focusScroll : !htmx.config.defaultFocusScroll };
        if (newActiveElt) {
          if (selectionInfo.start && newActiveElt.setSelectionRange) {
            try {
              newActiveElt.setSelectionRange(selectionInfo.start, selectionInfo.end);
            } catch (e) {
            }
          }
          newActiveElt.focus(focusOptions);
        }
      }
      target.classList.remove(htmx.config.swappingClass);
      forEach(settleInfo.elts, function(elt) {
        if (elt.classList) {
          elt.classList.add(htmx.config.settlingClass);
        }
        triggerEvent(elt, "htmx:afterSwap", swapOptions.eventInfo);
      });
      if (swapOptions.afterSwapCallback) {
        swapOptions.afterSwapCallback();
      }
      if (!swapSpec.ignoreTitle) {
        handleTitle(settleInfo.title);
      }
      const doSettle = function() {
        forEach(settleInfo.tasks, function(task) {
          task.call();
        });
        forEach(settleInfo.elts, function(elt) {
          if (elt.classList) {
            elt.classList.remove(htmx.config.settlingClass);
          }
          triggerEvent(elt, "htmx:afterSettle", swapOptions.eventInfo);
        });
        if (swapOptions.anchor) {
          const anchorTarget = asElement(resolveTarget("#" + swapOptions.anchor));
          if (anchorTarget) {
            anchorTarget.scrollIntoView({ block: "start", behavior: "auto" });
          }
        }
        updateScrollState(settleInfo.elts, swapSpec);
        if (swapOptions.afterSettleCallback) {
          swapOptions.afterSettleCallback();
        }
      };
      if (swapSpec.settleDelay > 0) {
        getWindow().setTimeout(doSettle, swapSpec.settleDelay);
      } else {
        doSettle();
      }
    }
    function handleTriggerHeader(xhr, header, elt) {
      const triggerBody = xhr.getResponseHeader(header);
      if (triggerBody.indexOf("{") === 0) {
        const triggers = parseJSON(triggerBody);
        for (const eventName in triggers) {
          if (triggers.hasOwnProperty(eventName)) {
            let detail = triggers[eventName];
            if (isRawObject(detail)) {
              elt = detail.target !== void 0 ? detail.target : elt;
            } else {
              detail = { value: detail };
            }
            triggerEvent(elt, eventName, detail);
          }
        }
      } else {
        const eventNames = triggerBody.split(",");
        for (let i = 0; i < eventNames.length; i++) {
          triggerEvent(elt, eventNames[i].trim(), []);
        }
      }
    }
    const WHITESPACE = /\s/;
    const WHITESPACE_OR_COMMA = /[\s,]/;
    const SYMBOL_START = /[_$a-zA-Z]/;
    const SYMBOL_CONT = /[_$a-zA-Z0-9]/;
    const STRINGISH_START = ['"', "'", "/"];
    const NOT_WHITESPACE = /[^\s]/;
    const COMBINED_SELECTOR_START = /[{(]/;
    const COMBINED_SELECTOR_END = /[})]/;
    function tokenizeString(str2) {
      const tokens = [];
      let position = 0;
      while (position < str2.length) {
        if (SYMBOL_START.exec(str2.charAt(position))) {
          var startPosition = position;
          while (SYMBOL_CONT.exec(str2.charAt(position + 1))) {
            position++;
          }
          tokens.push(str2.substr(startPosition, position - startPosition + 1));
        } else if (STRINGISH_START.indexOf(str2.charAt(position)) !== -1) {
          const startChar = str2.charAt(position);
          var startPosition = position;
          position++;
          while (position < str2.length && str2.charAt(position) !== startChar) {
            if (str2.charAt(position) === "\\") {
              position++;
            }
            position++;
          }
          tokens.push(str2.substr(startPosition, position - startPosition + 1));
        } else {
          const symbol = str2.charAt(position);
          tokens.push(symbol);
        }
        position++;
      }
      return tokens;
    }
    function isPossibleRelativeReference(token, last, paramName) {
      return SYMBOL_START.exec(token.charAt(0)) && token !== "true" && token !== "false" && token !== "this" && token !== paramName && last !== ".";
    }
    function maybeGenerateConditional(elt, tokens, paramName) {
      if (tokens[0] === "[") {
        tokens.shift();
        let bracketCount = 1;
        let conditionalSource = " return (function(" + paramName + "){ return (";
        let last = null;
        while (tokens.length > 0) {
          const token = tokens[0];
          if (token === "]") {
            bracketCount--;
            if (bracketCount === 0) {
              if (last === null) {
                conditionalSource = conditionalSource + "true";
              }
              tokens.shift();
              conditionalSource += ")})";
              try {
                const conditionFunction = maybeEval(
                  elt,
                  function() {
                    return Function(conditionalSource)();
                  },
                  function() {
                    return true;
                  }
                );
                conditionFunction.source = conditionalSource;
                return conditionFunction;
              } catch (e) {
                triggerErrorEvent(getDocument().body, "htmx:syntax:error", { error: e, source: conditionalSource });
                return null;
              }
            }
          } else if (token === "[") {
            bracketCount++;
          }
          if (isPossibleRelativeReference(token, last, paramName)) {
            conditionalSource += "((" + paramName + "." + token + ") ? (" + paramName + "." + token + ") : (window." + token + "))";
          } else {
            conditionalSource = conditionalSource + token;
          }
          last = tokens.shift();
        }
      }
    }
    function consumeUntil(tokens, match) {
      let result = "";
      while (tokens.length > 0 && !match.test(tokens[0])) {
        result += tokens.shift();
      }
      return result;
    }
    function consumeCSSSelector(tokens) {
      let result;
      if (tokens.length > 0 && COMBINED_SELECTOR_START.test(tokens[0])) {
        tokens.shift();
        result = consumeUntil(tokens, COMBINED_SELECTOR_END).trim();
        tokens.shift();
      } else {
        result = consumeUntil(tokens, WHITESPACE_OR_COMMA);
      }
      return result;
    }
    const INPUT_SELECTOR = "input, textarea, select";
    function parseAndCacheTrigger(elt, explicitTrigger, cache) {
      const triggerSpecs = [];
      const tokens = tokenizeString(explicitTrigger);
      do {
        consumeUntil(tokens, NOT_WHITESPACE);
        const initialLength = tokens.length;
        const trigger = consumeUntil(tokens, /[,\[\s]/);
        if (trigger !== "") {
          if (trigger === "every") {
            const every = { trigger: "every" };
            consumeUntil(tokens, NOT_WHITESPACE);
            every.pollInterval = parseInterval(consumeUntil(tokens, /[,\[\s]/));
            consumeUntil(tokens, NOT_WHITESPACE);
            var eventFilter = maybeGenerateConditional(elt, tokens, "event");
            if (eventFilter) {
              every.eventFilter = eventFilter;
            }
            triggerSpecs.push(every);
          } else {
            const triggerSpec = { trigger };
            var eventFilter = maybeGenerateConditional(elt, tokens, "event");
            if (eventFilter) {
              triggerSpec.eventFilter = eventFilter;
            }
            while (tokens.length > 0 && tokens[0] !== ",") {
              consumeUntil(tokens, NOT_WHITESPACE);
              const token = tokens.shift();
              if (token === "changed") {
                triggerSpec.changed = true;
              } else if (token === "once") {
                triggerSpec.once = true;
              } else if (token === "consume") {
                triggerSpec.consume = true;
              } else if (token === "delay" && tokens[0] === ":") {
                tokens.shift();
                triggerSpec.delay = parseInterval(consumeUntil(tokens, WHITESPACE_OR_COMMA));
              } else if (token === "from" && tokens[0] === ":") {
                tokens.shift();
                if (COMBINED_SELECTOR_START.test(tokens[0])) {
                  var from_arg = consumeCSSSelector(tokens);
                } else {
                  var from_arg = consumeUntil(tokens, WHITESPACE_OR_COMMA);
                  if (from_arg === "closest" || from_arg === "find" || from_arg === "next" || from_arg === "previous") {
                    tokens.shift();
                    const selector = consumeCSSSelector(tokens);
                    if (selector.length > 0) {
                      from_arg += " " + selector;
                    }
                  }
                }
                triggerSpec.from = from_arg;
              } else if (token === "target" && tokens[0] === ":") {
                tokens.shift();
                triggerSpec.target = consumeCSSSelector(tokens);
              } else if (token === "throttle" && tokens[0] === ":") {
                tokens.shift();
                triggerSpec.throttle = parseInterval(consumeUntil(tokens, WHITESPACE_OR_COMMA));
              } else if (token === "queue" && tokens[0] === ":") {
                tokens.shift();
                triggerSpec.queue = consumeUntil(tokens, WHITESPACE_OR_COMMA);
              } else if (token === "root" && tokens[0] === ":") {
                tokens.shift();
                triggerSpec[token] = consumeCSSSelector(tokens);
              } else if (token === "threshold" && tokens[0] === ":") {
                tokens.shift();
                triggerSpec[token] = consumeUntil(tokens, WHITESPACE_OR_COMMA);
              } else {
                triggerErrorEvent(elt, "htmx:syntax:error", { token: tokens.shift() });
              }
            }
            triggerSpecs.push(triggerSpec);
          }
        }
        if (tokens.length === initialLength) {
          triggerErrorEvent(elt, "htmx:syntax:error", { token: tokens.shift() });
        }
        consumeUntil(tokens, NOT_WHITESPACE);
      } while (tokens[0] === "," && tokens.shift());
      if (cache) {
        cache[explicitTrigger] = triggerSpecs;
      }
      return triggerSpecs;
    }
    function getTriggerSpecs(elt) {
      const explicitTrigger = getAttributeValue(elt, "hx-trigger");
      let triggerSpecs = [];
      if (explicitTrigger) {
        const cache = htmx.config.triggerSpecsCache;
        triggerSpecs = cache && cache[explicitTrigger] || parseAndCacheTrigger(elt, explicitTrigger, cache);
      }
      if (triggerSpecs.length > 0) {
        return triggerSpecs;
      } else if (matches(elt, "form")) {
        return [{ trigger: "submit" }];
      } else if (matches(elt, 'input[type="button"], input[type="submit"]')) {
        return [{ trigger: "click" }];
      } else if (matches(elt, INPUT_SELECTOR)) {
        return [{ trigger: "change" }];
      } else {
        return [{ trigger: "click" }];
      }
    }
    function cancelPolling(elt) {
      getInternalData(elt).cancelled = true;
    }
    function processPolling(elt, handler, spec) {
      const nodeData = getInternalData(elt);
      nodeData.timeout = getWindow().setTimeout(function() {
        if (bodyContains(elt) && nodeData.cancelled !== true) {
          if (!maybeFilterEvent(spec, elt, makeEvent("hx:poll:trigger", {
            triggerSpec: spec,
            target: elt
          }))) {
            handler(elt);
          }
          processPolling(elt, handler, spec);
        }
      }, spec.pollInterval);
    }
    function isLocalLink(elt) {
      return location.hostname === elt.hostname && getRawAttribute(elt, "href") && getRawAttribute(elt, "href").indexOf("#") !== 0;
    }
    function eltIsDisabled(elt) {
      return closest(elt, htmx.config.disableSelector);
    }
    function boostElement(elt, nodeData, triggerSpecs) {
      if (elt instanceof HTMLAnchorElement && isLocalLink(elt) && (elt.target === "" || elt.target === "_self") || elt.tagName === "FORM" && String(getRawAttribute(elt, "method")).toLowerCase() !== "dialog") {
        nodeData.boosted = true;
        let verb, path;
        if (elt.tagName === "A") {
          verb = "get";
          path = getRawAttribute(elt, "href");
        } else {
          const rawAttribute = getRawAttribute(elt, "method");
          verb = rawAttribute ? rawAttribute.toLowerCase() : "get";
          if (verb === "get") {
          }
          path = getRawAttribute(elt, "action");
        }
        triggerSpecs.forEach(function(triggerSpec) {
          addEventListener(elt, function(node, evt) {
            const elt2 = asElement(node);
            if (eltIsDisabled(elt2)) {
              cleanUpElement(elt2);
              return;
            }
            issueAjaxRequest(verb, path, elt2, evt);
          }, nodeData, triggerSpec, true);
        });
      }
    }
    function shouldCancel(evt, node) {
      const elt = asElement(node);
      if (!elt) {
        return false;
      }
      if (evt.type === "submit" || evt.type === "click") {
        if (elt.tagName === "FORM") {
          return true;
        }
        if (matches(elt, 'input[type="submit"], button') && closest(elt, "form") !== null) {
          return true;
        }
        if (elt instanceof HTMLAnchorElement && elt.href && (elt.getAttribute("href") === "#" || elt.getAttribute("href").indexOf("#") !== 0)) {
          return true;
        }
      }
      return false;
    }
    function ignoreBoostedAnchorCtrlClick(elt, evt) {
      return getInternalData(elt).boosted && elt instanceof HTMLAnchorElement && evt.type === "click" && // @ts-ignore this will resolve to undefined for events that don't define those properties, which is fine
      (evt.ctrlKey || evt.metaKey);
    }
    function maybeFilterEvent(triggerSpec, elt, evt) {
      const eventFilter = triggerSpec.eventFilter;
      if (eventFilter) {
        try {
          return eventFilter.call(elt, evt) !== true;
        } catch (e) {
          const source = eventFilter.source;
          triggerErrorEvent(getDocument().body, "htmx:eventFilter:error", { error: e, source });
          return true;
        }
      }
      return false;
    }
    function addEventListener(elt, handler, nodeData, triggerSpec, explicitCancel) {
      const elementData = getInternalData(elt);
      let eltsToListenOn;
      if (triggerSpec.from) {
        eltsToListenOn = querySelectorAllExt(elt, triggerSpec.from);
      } else {
        eltsToListenOn = [elt];
      }
      if (triggerSpec.changed) {
        eltsToListenOn.forEach(function(eltToListenOn) {
          const eltToListenOnData = getInternalData(eltToListenOn);
          eltToListenOnData.lastValue = eltToListenOn.value;
        });
      }
      forEach(eltsToListenOn, function(eltToListenOn) {
        const eventListener = function(evt) {
          if (!bodyContains(elt)) {
            eltToListenOn.removeEventListener(triggerSpec.trigger, eventListener);
            return;
          }
          if (ignoreBoostedAnchorCtrlClick(elt, evt)) {
            return;
          }
          if (explicitCancel || shouldCancel(evt, elt)) {
            evt.preventDefault();
          }
          if (maybeFilterEvent(triggerSpec, elt, evt)) {
            return;
          }
          const eventData = getInternalData(evt);
          eventData.triggerSpec = triggerSpec;
          if (eventData.handledFor == null) {
            eventData.handledFor = [];
          }
          if (eventData.handledFor.indexOf(elt) < 0) {
            eventData.handledFor.push(elt);
            if (triggerSpec.consume) {
              evt.stopPropagation();
            }
            if (triggerSpec.target && evt.target) {
              if (!matches(asElement(evt.target), triggerSpec.target)) {
                return;
              }
            }
            if (triggerSpec.once) {
              if (elementData.triggeredOnce) {
                return;
              } else {
                elementData.triggeredOnce = true;
              }
            }
            if (triggerSpec.changed) {
              const eltToListenOnData = getInternalData(eltToListenOn);
              const value = eltToListenOn.value;
              if (eltToListenOnData.lastValue === value) {
                return;
              }
              eltToListenOnData.lastValue = value;
            }
            if (elementData.delayed) {
              clearTimeout(elementData.delayed);
            }
            if (elementData.throttle) {
              return;
            }
            if (triggerSpec.throttle > 0) {
              if (!elementData.throttle) {
                triggerEvent(elt, "htmx:trigger");
                handler(elt, evt);
                elementData.throttle = getWindow().setTimeout(function() {
                  elementData.throttle = null;
                }, triggerSpec.throttle);
              }
            } else if (triggerSpec.delay > 0) {
              elementData.delayed = getWindow().setTimeout(function() {
                triggerEvent(elt, "htmx:trigger");
                handler(elt, evt);
              }, triggerSpec.delay);
            } else {
              triggerEvent(elt, "htmx:trigger");
              handler(elt, evt);
            }
          }
        };
        if (nodeData.listenerInfos == null) {
          nodeData.listenerInfos = [];
        }
        nodeData.listenerInfos.push({
          trigger: triggerSpec.trigger,
          listener: eventListener,
          on: eltToListenOn
        });
        eltToListenOn.addEventListener(triggerSpec.trigger, eventListener);
      });
    }
    let windowIsScrolling = false;
    let scrollHandler = null;
    function initScrollHandler() {
      if (!scrollHandler) {
        scrollHandler = function() {
          windowIsScrolling = true;
        };
        window.addEventListener("scroll", scrollHandler);
        setInterval(function() {
          if (windowIsScrolling) {
            windowIsScrolling = false;
            forEach(getDocument().querySelectorAll("[hx-trigger*='revealed'],[data-hx-trigger*='revealed']"), function(elt) {
              maybeReveal(elt);
            });
          }
        }, 200);
      }
    }
    function maybeReveal(elt) {
      if (!hasAttribute(elt, "data-hx-revealed") && isScrolledIntoView(elt)) {
        elt.setAttribute("data-hx-revealed", "true");
        const nodeData = getInternalData(elt);
        if (nodeData.initHash) {
          triggerEvent(elt, "revealed");
        } else {
          elt.addEventListener("htmx:afterProcessNode", function() {
            triggerEvent(elt, "revealed");
          }, { once: true });
        }
      }
    }
    function loadImmediately(elt, handler, nodeData, delay) {
      const load = function() {
        if (!nodeData.loaded) {
          nodeData.loaded = true;
          handler(elt);
        }
      };
      if (delay > 0) {
        getWindow().setTimeout(load, delay);
      } else {
        load();
      }
    }
    function processVerbs(elt, nodeData, triggerSpecs) {
      let explicitAction = false;
      forEach(VERBS, function(verb) {
        if (hasAttribute(elt, "hx-" + verb)) {
          const path = getAttributeValue(elt, "hx-" + verb);
          explicitAction = true;
          nodeData.path = path;
          nodeData.verb = verb;
          triggerSpecs.forEach(function(triggerSpec) {
            addTriggerHandler(elt, triggerSpec, nodeData, function(node, evt) {
              const elt2 = asElement(node);
              if (closest(elt2, htmx.config.disableSelector)) {
                cleanUpElement(elt2);
                return;
              }
              issueAjaxRequest(verb, path, elt2, evt);
            });
          });
        }
      });
      return explicitAction;
    }
    function addTriggerHandler(elt, triggerSpec, nodeData, handler) {
      if (triggerSpec.trigger === "revealed") {
        initScrollHandler();
        addEventListener(elt, handler, nodeData, triggerSpec);
        maybeReveal(asElement(elt));
      } else if (triggerSpec.trigger === "intersect") {
        const observerOptions = {};
        if (triggerSpec.root) {
          observerOptions.root = querySelectorExt(elt, triggerSpec.root);
        }
        if (triggerSpec.threshold) {
          observerOptions.threshold = parseFloat(triggerSpec.threshold);
        }
        const observer = new IntersectionObserver(function(entries) {
          for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            if (entry.isIntersecting) {
              triggerEvent(elt, "intersect");
              break;
            }
          }
        }, observerOptions);
        observer.observe(asElement(elt));
        addEventListener(asElement(elt), handler, nodeData, triggerSpec);
      } else if (triggerSpec.trigger === "load") {
        if (!maybeFilterEvent(triggerSpec, elt, makeEvent("load", { elt }))) {
          loadImmediately(asElement(elt), handler, nodeData, triggerSpec.delay);
        }
      } else if (triggerSpec.pollInterval > 0) {
        nodeData.polling = true;
        processPolling(asElement(elt), handler, triggerSpec);
      } else {
        addEventListener(elt, handler, nodeData, triggerSpec);
      }
    }
    function shouldProcessHxOn(node) {
      const elt = asElement(node);
      if (!elt) {
        return false;
      }
      const attributes = elt.attributes;
      for (let j = 0; j < attributes.length; j++) {
        const attrName = attributes[j].name;
        if (startsWith(attrName, "hx-on:") || startsWith(attrName, "data-hx-on:") || startsWith(attrName, "hx-on-") || startsWith(attrName, "data-hx-on-")) {
          return true;
        }
      }
      return false;
    }
    const HX_ON_QUERY = new XPathEvaluator().createExpression('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]');
    function processHXOnRoot(elt, elements) {
      if (shouldProcessHxOn(elt)) {
        elements.push(asElement(elt));
      }
      const iter = HX_ON_QUERY.evaluate(elt);
      let node = null;
      while (node = iter.iterateNext()) elements.push(asElement(node));
    }
    function findHxOnWildcardElements(elt) {
      const elements = [];
      if (elt instanceof DocumentFragment) {
        for (const child of elt.childNodes) {
          processHXOnRoot(child, elements);
        }
      } else {
        processHXOnRoot(elt, elements);
      }
      return elements;
    }
    function findElementsToProcess(elt) {
      if (elt.querySelectorAll) {
        const boostedSelector = ", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]";
        const extensionSelectors = [];
        for (const e in extensions) {
          const extension = extensions[e];
          if (extension.getSelectors) {
            var selectors = extension.getSelectors();
            if (selectors) {
              extensionSelectors.push(selectors);
            }
          }
        }
        const results = elt.querySelectorAll(VERB_SELECTOR + boostedSelector + ", form, [type='submit'], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger]" + extensionSelectors.flat().map((s) => ", " + s).join(""));
        return results;
      } else {
        return [];
      }
    }
    function maybeSetLastButtonClicked(evt) {
      const elt = (
        /** @type {HTMLButtonElement|HTMLInputElement} */
        closest(asElement(evt.target), "button, input[type='submit']")
      );
      const internalData = getRelatedFormData(evt);
      if (internalData) {
        internalData.lastButtonClicked = elt;
      }
    }
    function maybeUnsetLastButtonClicked(evt) {
      const internalData = getRelatedFormData(evt);
      if (internalData) {
        internalData.lastButtonClicked = null;
      }
    }
    function getRelatedFormData(evt) {
      const elt = closest(asElement(evt.target), "button, input[type='submit']");
      if (!elt) {
        return;
      }
      const form = resolveTarget("#" + getRawAttribute(elt, "form"), elt.getRootNode()) || closest(elt, "form");
      if (!form) {
        return;
      }
      return getInternalData(form);
    }
    function initButtonTracking(elt) {
      elt.addEventListener("click", maybeSetLastButtonClicked);
      elt.addEventListener("focusin", maybeSetLastButtonClicked);
      elt.addEventListener("focusout", maybeUnsetLastButtonClicked);
    }
    function addHxOnEventHandler(elt, eventName, code) {
      const nodeData = getInternalData(elt);
      if (!Array.isArray(nodeData.onHandlers)) {
        nodeData.onHandlers = [];
      }
      let func;
      const listener = function(e) {
        maybeEval(elt, function() {
          if (eltIsDisabled(elt)) {
            return;
          }
          if (!func) {
            func = new Function("event", code);
          }
          func.call(elt, e);
        });
      };
      elt.addEventListener(eventName, listener);
      nodeData.onHandlers.push({ event: eventName, listener });
    }
    function processHxOnWildcard(elt) {
      deInitOnHandlers(elt);
      for (let i = 0; i < elt.attributes.length; i++) {
        const name = elt.attributes[i].name;
        const value = elt.attributes[i].value;
        if (startsWith(name, "hx-on") || startsWith(name, "data-hx-on")) {
          const afterOnPosition = name.indexOf("-on") + 3;
          const nextChar = name.slice(afterOnPosition, afterOnPosition + 1);
          if (nextChar === "-" || nextChar === ":") {
            let eventName = name.slice(afterOnPosition + 1);
            if (startsWith(eventName, ":")) {
              eventName = "htmx" + eventName;
            } else if (startsWith(eventName, "-")) {
              eventName = "htmx:" + eventName.slice(1);
            } else if (startsWith(eventName, "htmx-")) {
              eventName = "htmx:" + eventName.slice(5);
            }
            addHxOnEventHandler(elt, eventName, value);
          }
        }
      }
    }
    function initNode(elt) {
      if (closest(elt, htmx.config.disableSelector)) {
        cleanUpElement(elt);
        return;
      }
      const nodeData = getInternalData(elt);
      if (nodeData.initHash !== attributeHash(elt)) {
        deInitNode(elt);
        nodeData.initHash = attributeHash(elt);
        triggerEvent(elt, "htmx:beforeProcessNode");
        if (elt.value) {
          nodeData.lastValue = elt.value;
        }
        const triggerSpecs = getTriggerSpecs(elt);
        const hasExplicitHttpAction = processVerbs(elt, nodeData, triggerSpecs);
        if (!hasExplicitHttpAction) {
          if (getClosestAttributeValue(elt, "hx-boost") === "true") {
            boostElement(elt, nodeData, triggerSpecs);
          } else if (hasAttribute(elt, "hx-trigger")) {
            triggerSpecs.forEach(function(triggerSpec) {
              addTriggerHandler(elt, triggerSpec, nodeData, function() {
              });
            });
          }
        }
        if (elt.tagName === "FORM" || getRawAttribute(elt, "type") === "submit" && hasAttribute(elt, "form")) {
          initButtonTracking(elt);
        }
        triggerEvent(elt, "htmx:afterProcessNode");
      }
    }
    function processNode(elt) {
      elt = resolveTarget(elt);
      if (closest(elt, htmx.config.disableSelector)) {
        cleanUpElement(elt);
        return;
      }
      initNode(elt);
      forEach(findElementsToProcess(elt), function(child) {
        initNode(child);
      });
      forEach(findHxOnWildcardElements(elt), processHxOnWildcard);
    }
    function kebabEventName(str2) {
      return str2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    }
    function makeEvent(eventName, detail) {
      let evt;
      if (window.CustomEvent && typeof window.CustomEvent === "function") {
        evt = new CustomEvent(eventName, { bubbles: true, cancelable: true, composed: true, detail });
      } else {
        evt = getDocument().createEvent("CustomEvent");
        evt.initCustomEvent(eventName, true, true, detail);
      }
      return evt;
    }
    function triggerErrorEvent(elt, eventName, detail) {
      triggerEvent(elt, eventName, mergeObjects({ error: eventName }, detail));
    }
    function ignoreEventForLogging(eventName) {
      return eventName === "htmx:afterProcessNode";
    }
    function withExtensions(elt, toDo) {
      forEach(getExtensions(elt), function(extension) {
        try {
          toDo(extension);
        } catch (e) {
          logError(e);
        }
      });
    }
    function logError(msg) {
      if (console.error) {
        console.error(msg);
      } else if (console.log) {
        console.log("ERROR: ", msg);
      }
    }
    function triggerEvent(elt, eventName, detail) {
      elt = resolveTarget(elt);
      if (detail == null) {
        detail = {};
      }
      detail.elt = elt;
      const event = makeEvent(eventName, detail);
      if (htmx.logger && !ignoreEventForLogging(eventName)) {
        htmx.logger(elt, eventName, detail);
      }
      if (detail.error) {
        logError(detail.error);
        triggerEvent(elt, "htmx:error", { errorInfo: detail });
      }
      let eventResult = elt.dispatchEvent(event);
      const kebabName = kebabEventName(eventName);
      if (eventResult && kebabName !== eventName) {
        const kebabedEvent = makeEvent(kebabName, event.detail);
        eventResult = eventResult && elt.dispatchEvent(kebabedEvent);
      }
      withExtensions(asElement(elt), function(extension) {
        eventResult = eventResult && (extension.onEvent(eventName, event) !== false && !event.defaultPrevented);
      });
      return eventResult;
    }
    let currentPathForHistory = location.pathname + location.search;
    function getHistoryElement() {
      const historyElt = getDocument().querySelector("[hx-history-elt],[data-hx-history-elt]");
      return historyElt || getDocument().body;
    }
    function saveToHistoryCache(url, rootElt) {
      if (!canAccessLocalStorage()) {
        return;
      }
      const innerHTML = cleanInnerHtmlForHistory(rootElt);
      const title = getDocument().title;
      const scroll = window.scrollY;
      if (htmx.config.historyCacheSize <= 0) {
        localStorage.removeItem("htmx-history-cache");
        return;
      }
      url = normalizePath(url);
      const historyCache = parseJSON(localStorage.getItem("htmx-history-cache")) || [];
      for (let i = 0; i < historyCache.length; i++) {
        if (historyCache[i].url === url) {
          historyCache.splice(i, 1);
          break;
        }
      }
      const newHistoryItem = { url, content: innerHTML, title, scroll };
      triggerEvent(getDocument().body, "htmx:historyItemCreated", { item: newHistoryItem, cache: historyCache });
      historyCache.push(newHistoryItem);
      while (historyCache.length > htmx.config.historyCacheSize) {
        historyCache.shift();
      }
      while (historyCache.length > 0) {
        try {
          localStorage.setItem("htmx-history-cache", JSON.stringify(historyCache));
          break;
        } catch (e) {
          triggerErrorEvent(getDocument().body, "htmx:historyCacheError", { cause: e, cache: historyCache });
          historyCache.shift();
        }
      }
    }
    function getCachedHistory(url) {
      if (!canAccessLocalStorage()) {
        return null;
      }
      url = normalizePath(url);
      const historyCache = parseJSON(localStorage.getItem("htmx-history-cache")) || [];
      for (let i = 0; i < historyCache.length; i++) {
        if (historyCache[i].url === url) {
          return historyCache[i];
        }
      }
      return null;
    }
    function cleanInnerHtmlForHistory(elt) {
      const className = htmx.config.requestClass;
      const clone = (
        /** @type Element */
        elt.cloneNode(true)
      );
      forEach(findAll(clone, "." + className), function(child) {
        removeClassFromElement(child, className);
      });
      forEach(findAll(clone, "[data-disabled-by-htmx]"), function(child) {
        child.removeAttribute("disabled");
      });
      return clone.innerHTML;
    }
    function saveCurrentPageToHistory() {
      const elt = getHistoryElement();
      const path = currentPathForHistory || location.pathname + location.search;
      let disableHistoryCache;
      try {
        disableHistoryCache = getDocument().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
      } catch (e) {
        disableHistoryCache = getDocument().querySelector('[hx-history="false"],[data-hx-history="false"]');
      }
      if (!disableHistoryCache) {
        triggerEvent(getDocument().body, "htmx:beforeHistorySave", { path, historyElt: elt });
        saveToHistoryCache(path, elt);
      }
      if (htmx.config.historyEnabled) history.replaceState({ htmx: true }, getDocument().title, window.location.href);
    }
    function pushUrlIntoHistory(path) {
      if (htmx.config.getCacheBusterParam) {
        path = path.replace(/org\.htmx\.cache-buster=[^&]*&?/, "");
        if (endsWith(path, "&") || endsWith(path, "?")) {
          path = path.slice(0, -1);
        }
      }
      if (htmx.config.historyEnabled) {
        history.pushState({ htmx: true }, "", path);
      }
      currentPathForHistory = path;
    }
    function replaceUrlInHistory(path) {
      if (htmx.config.historyEnabled) history.replaceState({ htmx: true }, "", path);
      currentPathForHistory = path;
    }
    function settleImmediately(tasks) {
      forEach(tasks, function(task) {
        task.call(void 0);
      });
    }
    function loadHistoryFromServer(path) {
      const request = new XMLHttpRequest();
      const details = { path, xhr: request };
      triggerEvent(getDocument().body, "htmx:historyCacheMiss", details);
      request.open("GET", path, true);
      request.setRequestHeader("HX-Request", "true");
      request.setRequestHeader("HX-History-Restore-Request", "true");
      request.setRequestHeader("HX-Current-URL", getDocument().location.href);
      request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          triggerEvent(getDocument().body, "htmx:historyCacheMissLoad", details);
          const fragment = makeFragment(this.response);
          const content = fragment.querySelector("[hx-history-elt],[data-hx-history-elt]") || fragment;
          const historyElement = getHistoryElement();
          const settleInfo = makeSettleInfo(historyElement);
          handleTitle(fragment.title);
          swapInnerHTML(historyElement, content, settleInfo);
          settleImmediately(settleInfo.tasks);
          currentPathForHistory = path;
          triggerEvent(getDocument().body, "htmx:historyRestore", { path, cacheMiss: true, serverResponse: this.response });
        } else {
          triggerErrorEvent(getDocument().body, "htmx:historyCacheMissLoadError", details);
        }
      };
      request.send();
    }
    function restoreHistory(path) {
      saveCurrentPageToHistory();
      path = path || location.pathname + location.search;
      const cached = getCachedHistory(path);
      if (cached) {
        const fragment = makeFragment(cached.content);
        const historyElement = getHistoryElement();
        const settleInfo = makeSettleInfo(historyElement);
        handleTitle(fragment.title);
        swapInnerHTML(historyElement, fragment, settleInfo);
        settleImmediately(settleInfo.tasks);
        getWindow().setTimeout(function() {
          window.scrollTo(0, cached.scroll);
        }, 0);
        currentPathForHistory = path;
        triggerEvent(getDocument().body, "htmx:historyRestore", { path, item: cached });
      } else {
        if (htmx.config.refreshOnHistoryMiss) {
          window.location.reload(true);
        } else {
          loadHistoryFromServer(path);
        }
      }
    }
    function addRequestIndicatorClasses(elt) {
      let indicators = (
        /** @type Element[] */
        findAttributeTargets(elt, "hx-indicator")
      );
      if (indicators == null) {
        indicators = [elt];
      }
      forEach(indicators, function(ic) {
        const internalData = getInternalData(ic);
        internalData.requestCount = (internalData.requestCount || 0) + 1;
        ic.classList.add.call(ic.classList, htmx.config.requestClass);
      });
      return indicators;
    }
    function disableElements(elt) {
      let disabledElts = (
        /** @type Element[] */
        findAttributeTargets(elt, "hx-disabled-elt")
      );
      if (disabledElts == null) {
        disabledElts = [];
      }
      forEach(disabledElts, function(disabledElement) {
        const internalData = getInternalData(disabledElement);
        internalData.requestCount = (internalData.requestCount || 0) + 1;
        disabledElement.setAttribute("disabled", "");
        disabledElement.setAttribute("data-disabled-by-htmx", "");
      });
      return disabledElts;
    }
    function removeRequestIndicators(indicators, disabled) {
      forEach(indicators, function(ic) {
        const internalData = getInternalData(ic);
        internalData.requestCount = (internalData.requestCount || 0) - 1;
        if (internalData.requestCount === 0) {
          ic.classList.remove.call(ic.classList, htmx.config.requestClass);
        }
      });
      forEach(disabled, function(disabledElement) {
        const internalData = getInternalData(disabledElement);
        internalData.requestCount = (internalData.requestCount || 0) - 1;
        if (internalData.requestCount === 0) {
          disabledElement.removeAttribute("disabled");
          disabledElement.removeAttribute("data-disabled-by-htmx");
        }
      });
    }
    function haveSeenNode(processed, elt) {
      for (let i = 0; i < processed.length; i++) {
        const node = processed[i];
        if (node.isSameNode(elt)) {
          return true;
        }
      }
      return false;
    }
    function shouldInclude(element) {
      const elt = (
        /** @type {HTMLInputElement} */
        element
      );
      if (elt.name === "" || elt.name == null || elt.disabled || closest(elt, "fieldset[disabled]")) {
        return false;
      }
      if (elt.type === "button" || elt.type === "submit" || elt.tagName === "image" || elt.tagName === "reset" || elt.tagName === "file") {
        return false;
      }
      if (elt.type === "checkbox" || elt.type === "radio") {
        return elt.checked;
      }
      return true;
    }
    function addValueToFormData(name, value, formData) {
      if (name != null && value != null) {
        if (Array.isArray(value)) {
          value.forEach(function(v) {
            formData.append(name, v);
          });
        } else {
          formData.append(name, value);
        }
      }
    }
    function removeValueFromFormData(name, value, formData) {
      if (name != null && value != null) {
        let values = formData.getAll(name);
        if (Array.isArray(value)) {
          values = values.filter((v) => value.indexOf(v) < 0);
        } else {
          values = values.filter((v) => v !== value);
        }
        formData.delete(name);
        forEach(values, (v) => formData.append(name, v));
      }
    }
    function processInputValue(processed, formData, errors, elt, validate) {
      if (elt == null || haveSeenNode(processed, elt)) {
        return;
      } else {
        processed.push(elt);
      }
      if (shouldInclude(elt)) {
        const name = getRawAttribute(elt, "name");
        let value = elt.value;
        if (elt instanceof HTMLSelectElement && elt.multiple) {
          value = toArray(elt.querySelectorAll("option:checked")).map(function(e) {
            return (
              /** @type HTMLOptionElement */
              e.value
            );
          });
        }
        if (elt instanceof HTMLInputElement && elt.files) {
          value = toArray(elt.files);
        }
        addValueToFormData(name, value, formData);
        if (validate) {
          validateElement(elt, errors);
        }
      }
      if (elt instanceof HTMLFormElement) {
        forEach(elt.elements, function(input) {
          if (processed.indexOf(input) >= 0) {
            removeValueFromFormData(input.name, input.value, formData);
          } else {
            processed.push(input);
          }
          if (validate) {
            validateElement(input, errors);
          }
        });
        new FormData(elt).forEach(function(value, name) {
          if (value instanceof File && value.name === "") {
            return;
          }
          addValueToFormData(name, value, formData);
        });
      }
    }
    function validateElement(elt, errors) {
      const element = (
        /** @type {HTMLElement & ElementInternals} */
        elt
      );
      if (element.willValidate) {
        triggerEvent(element, "htmx:validation:validate");
        if (!element.checkValidity()) {
          errors.push({ elt: element, message: element.validationMessage, validity: element.validity });
          triggerEvent(element, "htmx:validation:failed", { message: element.validationMessage, validity: element.validity });
        }
      }
    }
    function overrideFormData(receiver, donor) {
      for (const key of donor.keys()) {
        receiver.delete(key);
      }
      donor.forEach(function(value, key) {
        receiver.append(key, value);
      });
      return receiver;
    }
    function getInputValues(elt, verb) {
      const processed = [];
      const formData = new FormData();
      const priorityFormData = new FormData();
      const errors = [];
      const internalData = getInternalData(elt);
      if (internalData.lastButtonClicked && !bodyContains(internalData.lastButtonClicked)) {
        internalData.lastButtonClicked = null;
      }
      let validate = elt instanceof HTMLFormElement && elt.noValidate !== true || getAttributeValue(elt, "hx-validate") === "true";
      if (internalData.lastButtonClicked) {
        validate = validate && internalData.lastButtonClicked.formNoValidate !== true;
      }
      if (verb !== "get") {
        processInputValue(processed, priorityFormData, errors, closest(elt, "form"), validate);
      }
      processInputValue(processed, formData, errors, elt, validate);
      if (internalData.lastButtonClicked || elt.tagName === "BUTTON" || elt.tagName === "INPUT" && getRawAttribute(elt, "type") === "submit") {
        const button = internalData.lastButtonClicked || /** @type HTMLInputElement|HTMLButtonElement */
        elt;
        const name = getRawAttribute(button, "name");
        addValueToFormData(name, button.value, priorityFormData);
      }
      const includes = findAttributeTargets(elt, "hx-include");
      forEach(includes, function(node) {
        processInputValue(processed, formData, errors, asElement(node), validate);
        if (!matches(node, "form")) {
          forEach(asParentNode(node).querySelectorAll(INPUT_SELECTOR), function(descendant) {
            processInputValue(processed, formData, errors, descendant, validate);
          });
        }
      });
      overrideFormData(formData, priorityFormData);
      return { errors, formData, values: formDataProxy(formData) };
    }
    function appendParam(returnStr, name, realValue) {
      if (returnStr !== "") {
        returnStr += "&";
      }
      if (String(realValue) === "[object Object]") {
        realValue = JSON.stringify(realValue);
      }
      const s = encodeURIComponent(realValue);
      returnStr += encodeURIComponent(name) + "=" + s;
      return returnStr;
    }
    function urlEncode(values) {
      values = formDataFromObject(values);
      let returnStr = "";
      values.forEach(function(value, key) {
        returnStr = appendParam(returnStr, key, value);
      });
      return returnStr;
    }
    function getHeaders(elt, target, prompt2) {
      const headers = {
        "HX-Request": "true",
        "HX-Trigger": getRawAttribute(elt, "id"),
        "HX-Trigger-Name": getRawAttribute(elt, "name"),
        "HX-Target": getAttributeValue(target, "id"),
        "HX-Current-URL": getDocument().location.href
      };
      getValuesForElement(elt, "hx-headers", false, headers);
      if (prompt2 !== void 0) {
        headers["HX-Prompt"] = prompt2;
      }
      if (getInternalData(elt).boosted) {
        headers["HX-Boosted"] = "true";
      }
      return headers;
    }
    function filterValues(inputValues, elt) {
      const paramsValue = getClosestAttributeValue(elt, "hx-params");
      if (paramsValue) {
        if (paramsValue === "none") {
          return new FormData();
        } else if (paramsValue === "*") {
          return inputValues;
        } else if (paramsValue.indexOf("not ") === 0) {
          forEach(paramsValue.substr(4).split(","), function(name) {
            name = name.trim();
            inputValues.delete(name);
          });
          return inputValues;
        } else {
          const newValues = new FormData();
          forEach(paramsValue.split(","), function(name) {
            name = name.trim();
            if (inputValues.has(name)) {
              inputValues.getAll(name).forEach(function(value) {
                newValues.append(name, value);
              });
            }
          });
          return newValues;
        }
      } else {
        return inputValues;
      }
    }
    function isAnchorLink(elt) {
      return !!getRawAttribute(elt, "href") && getRawAttribute(elt, "href").indexOf("#") >= 0;
    }
    function getSwapSpecification(elt, swapInfoOverride) {
      const swapInfo = swapInfoOverride || getClosestAttributeValue(elt, "hx-swap");
      const swapSpec = {
        swapStyle: getInternalData(elt).boosted ? "innerHTML" : htmx.config.defaultSwapStyle,
        swapDelay: htmx.config.defaultSwapDelay,
        settleDelay: htmx.config.defaultSettleDelay
      };
      if (htmx.config.scrollIntoViewOnBoost && getInternalData(elt).boosted && !isAnchorLink(elt)) {
        swapSpec.show = "top";
      }
      if (swapInfo) {
        const split = splitOnWhitespace(swapInfo);
        if (split.length > 0) {
          for (let i = 0; i < split.length; i++) {
            const value = split[i];
            if (value.indexOf("swap:") === 0) {
              swapSpec.swapDelay = parseInterval(value.substr(5));
            } else if (value.indexOf("settle:") === 0) {
              swapSpec.settleDelay = parseInterval(value.substr(7));
            } else if (value.indexOf("transition:") === 0) {
              swapSpec.transition = value.substr(11) === "true";
            } else if (value.indexOf("ignoreTitle:") === 0) {
              swapSpec.ignoreTitle = value.substr(12) === "true";
            } else if (value.indexOf("scroll:") === 0) {
              const scrollSpec = value.substr(7);
              var splitSpec = scrollSpec.split(":");
              const scrollVal = splitSpec.pop();
              var selectorVal = splitSpec.length > 0 ? splitSpec.join(":") : null;
              swapSpec.scroll = scrollVal;
              swapSpec.scrollTarget = selectorVal;
            } else if (value.indexOf("show:") === 0) {
              const showSpec = value.substr(5);
              var splitSpec = showSpec.split(":");
              const showVal = splitSpec.pop();
              var selectorVal = splitSpec.length > 0 ? splitSpec.join(":") : null;
              swapSpec.show = showVal;
              swapSpec.showTarget = selectorVal;
            } else if (value.indexOf("focus-scroll:") === 0) {
              const focusScrollVal = value.substr("focus-scroll:".length);
              swapSpec.focusScroll = focusScrollVal == "true";
            } else if (i == 0) {
              swapSpec.swapStyle = value;
            } else {
              logError("Unknown modifier in hx-swap: " + value);
            }
          }
        }
      }
      return swapSpec;
    }
    function usesFormData(elt) {
      return getClosestAttributeValue(elt, "hx-encoding") === "multipart/form-data" || matches(elt, "form") && getRawAttribute(elt, "enctype") === "multipart/form-data";
    }
    function encodeParamsForBody(xhr, elt, filteredParameters) {
      let encodedParameters = null;
      withExtensions(elt, function(extension) {
        if (encodedParameters == null) {
          encodedParameters = extension.encodeParameters(xhr, filteredParameters, elt);
        }
      });
      if (encodedParameters != null) {
        return encodedParameters;
      } else {
        if (usesFormData(elt)) {
          return overrideFormData(new FormData(), formDataFromObject(filteredParameters));
        } else {
          return urlEncode(filteredParameters);
        }
      }
    }
    function makeSettleInfo(target) {
      return { tasks: [], elts: [target] };
    }
    function updateScrollState(content, swapSpec) {
      const first = content[0];
      const last = content[content.length - 1];
      if (swapSpec.scroll) {
        var target = null;
        if (swapSpec.scrollTarget) {
          target = asElement(querySelectorExt(first, swapSpec.scrollTarget));
        }
        if (swapSpec.scroll === "top" && (first || target)) {
          target = target || first;
          target.scrollTop = 0;
        }
        if (swapSpec.scroll === "bottom" && (last || target)) {
          target = target || last;
          target.scrollTop = target.scrollHeight;
        }
      }
      if (swapSpec.show) {
        var target = null;
        if (swapSpec.showTarget) {
          let targetStr = swapSpec.showTarget;
          if (swapSpec.showTarget === "window") {
            targetStr = "body";
          }
          target = asElement(querySelectorExt(first, targetStr));
        }
        if (swapSpec.show === "top" && (first || target)) {
          target = target || first;
          target.scrollIntoView({ block: "start", behavior: htmx.config.scrollBehavior });
        }
        if (swapSpec.show === "bottom" && (last || target)) {
          target = target || last;
          target.scrollIntoView({ block: "end", behavior: htmx.config.scrollBehavior });
        }
      }
    }
    function getValuesForElement(elt, attr, evalAsDefault, values) {
      if (values == null) {
        values = {};
      }
      if (elt == null) {
        return values;
      }
      const attributeValue = getAttributeValue(elt, attr);
      if (attributeValue) {
        let str2 = attributeValue.trim();
        let evaluateValue = evalAsDefault;
        if (str2 === "unset") {
          return null;
        }
        if (str2.indexOf("javascript:") === 0) {
          str2 = str2.substr(11);
          evaluateValue = true;
        } else if (str2.indexOf("js:") === 0) {
          str2 = str2.substr(3);
          evaluateValue = true;
        }
        if (str2.indexOf("{") !== 0) {
          str2 = "{" + str2 + "}";
        }
        let varsValues;
        if (evaluateValue) {
          varsValues = maybeEval(elt, function() {
            return Function("return (" + str2 + ")")();
          }, {});
        } else {
          varsValues = parseJSON(str2);
        }
        for (const key in varsValues) {
          if (varsValues.hasOwnProperty(key)) {
            if (values[key] == null) {
              values[key] = varsValues[key];
            }
          }
        }
      }
      return getValuesForElement(asElement(parentElt(elt)), attr, evalAsDefault, values);
    }
    function maybeEval(elt, toEval, defaultVal) {
      if (htmx.config.allowEval) {
        return toEval();
      } else {
        triggerErrorEvent(elt, "htmx:evalDisallowedError");
        return defaultVal;
      }
    }
    function getHXVarsForElement(elt, expressionVars) {
      return getValuesForElement(elt, "hx-vars", true, expressionVars);
    }
    function getHXValsForElement(elt, expressionVars) {
      return getValuesForElement(elt, "hx-vals", false, expressionVars);
    }
    function getExpressionVars(elt) {
      return mergeObjects(getHXVarsForElement(elt), getHXValsForElement(elt));
    }
    function safelySetHeaderValue(xhr, header, headerValue) {
      if (headerValue !== null) {
        try {
          xhr.setRequestHeader(header, headerValue);
        } catch (e) {
          xhr.setRequestHeader(header, encodeURIComponent(headerValue));
          xhr.setRequestHeader(header + "-URI-AutoEncoded", "true");
        }
      }
    }
    function getPathFromResponse(xhr) {
      if (xhr.responseURL && typeof URL !== "undefined") {
        try {
          const url = new URL(xhr.responseURL);
          return url.pathname + url.search;
        } catch (e) {
          triggerErrorEvent(getDocument().body, "htmx:badResponseUrl", { url: xhr.responseURL });
        }
      }
    }
    function hasHeader(xhr, regexp) {
      return regexp.test(xhr.getAllResponseHeaders());
    }
    function ajaxHelper(verb, path, context) {
      verb = /** @type HttpVerb */
      verb.toLowerCase();
      if (context) {
        if (context instanceof Element || typeof context === "string") {
          return issueAjaxRequest(verb, path, null, null, {
            targetOverride: resolveTarget(context),
            returnPromise: true
          });
        } else {
          return issueAjaxRequest(
            verb,
            path,
            resolveTarget(context.source),
            context.event,
            {
              handler: context.handler,
              headers: context.headers,
              values: context.values,
              targetOverride: resolveTarget(context.target),
              swapOverride: context.swap,
              select: context.select,
              returnPromise: true
            }
          );
        }
      } else {
        return issueAjaxRequest(verb, path, null, null, {
          returnPromise: true
        });
      }
    }
    function hierarchyForElt(elt) {
      const arr = [];
      while (elt) {
        arr.push(elt);
        elt = elt.parentElement;
      }
      return arr;
    }
    function verifyPath(elt, path, requestConfig) {
      let sameHost;
      let url;
      if (typeof URL === "function") {
        url = new URL(path, document.location.href);
        const origin = document.location.origin;
        sameHost = origin === url.origin;
      } else {
        url = path;
        sameHost = startsWith(path, document.location.origin);
      }
      if (htmx.config.selfRequestsOnly) {
        if (!sameHost) {
          return false;
        }
      }
      return triggerEvent(elt, "htmx:validateUrl", mergeObjects({ url, sameHost }, requestConfig));
    }
    function formDataFromObject(obj) {
      if (obj instanceof FormData) return obj;
      const formData = new FormData();
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key].forEach === "function") {
            obj[key].forEach(function(v) {
              formData.append(key, v);
            });
          } else if (typeof obj[key] === "object" && !(obj[key] instanceof Blob)) {
            formData.append(key, JSON.stringify(obj[key]));
          } else {
            formData.append(key, obj[key]);
          }
        }
      }
      return formData;
    }
    function formDataArrayProxy(formData, name, array) {
      return new Proxy(array, {
        get: function(target, key) {
          if (typeof key === "number") return target[key];
          if (key === "length") return target.length;
          if (key === "push") {
            return function(value) {
              target.push(value);
              formData.append(name, value);
            };
          }
          if (typeof target[key] === "function") {
            return function() {
              target[key].apply(target, arguments);
              formData.delete(name);
              target.forEach(function(v) {
                formData.append(name, v);
              });
            };
          }
          if (target[key] && target[key].length === 1) {
            return target[key][0];
          } else {
            return target[key];
          }
        },
        set: function(target, index, value) {
          target[index] = value;
          formData.delete(name);
          target.forEach(function(v) {
            formData.append(name, v);
          });
          return true;
        }
      });
    }
    function formDataProxy(formData) {
      return new Proxy(formData, {
        get: function(target, name) {
          if (typeof name === "symbol") {
            return Reflect.get(target, name);
          }
          if (name === "toJSON") {
            return () => Object.fromEntries(formData);
          }
          if (name in target) {
            if (typeof target[name] === "function") {
              return function() {
                return formData[name].apply(formData, arguments);
              };
            } else {
              return target[name];
            }
          }
          const array = formData.getAll(name);
          if (array.length === 0) {
            return void 0;
          } else if (array.length === 1) {
            return array[0];
          } else {
            return formDataArrayProxy(target, name, array);
          }
        },
        set: function(target, name, value) {
          if (typeof name !== "string") {
            return false;
          }
          target.delete(name);
          if (typeof value.forEach === "function") {
            value.forEach(function(v) {
              target.append(name, v);
            });
          } else if (typeof value === "object" && !(value instanceof Blob)) {
            target.append(name, JSON.stringify(value));
          } else {
            target.append(name, value);
          }
          return true;
        },
        deleteProperty: function(target, name) {
          if (typeof name === "string") {
            target.delete(name);
          }
          return true;
        },
        // Support Object.assign call from proxy
        ownKeys: function(target) {
          return Reflect.ownKeys(Object.fromEntries(target));
        },
        getOwnPropertyDescriptor: function(target, prop) {
          return Reflect.getOwnPropertyDescriptor(Object.fromEntries(target), prop);
        }
      });
    }
    function issueAjaxRequest(verb, path, elt, event, etc, confirmed) {
      let resolve = null;
      let reject = null;
      etc = etc != null ? etc : {};
      if (etc.returnPromise && typeof Promise !== "undefined") {
        var promise = new Promise(function(_resolve, _reject) {
          resolve = _resolve;
          reject = _reject;
        });
      }
      if (elt == null) {
        elt = getDocument().body;
      }
      const responseHandler = etc.handler || handleAjaxResponse;
      const select = etc.select || null;
      if (!bodyContains(elt)) {
        maybeCall(resolve);
        return promise;
      }
      const target = etc.targetOverride || asElement(getTarget(elt));
      if (target == null || target == DUMMY_ELT) {
        triggerErrorEvent(elt, "htmx:targetError", { target: getAttributeValue(elt, "hx-target") });
        maybeCall(reject);
        return promise;
      }
      let eltData = getInternalData(elt);
      const submitter = eltData.lastButtonClicked;
      if (submitter) {
        const buttonPath = getRawAttribute(submitter, "formaction");
        if (buttonPath != null) {
          path = buttonPath;
        }
        const buttonVerb = getRawAttribute(submitter, "formmethod");
        if (buttonVerb != null) {
          if (buttonVerb.toLowerCase() !== "dialog") {
            verb = /** @type HttpVerb */
            buttonVerb;
          }
        }
      }
      const confirmQuestion = getClosestAttributeValue(elt, "hx-confirm");
      if (confirmed === void 0) {
        const issueRequest = function(skipConfirmation) {
          return issueAjaxRequest(verb, path, elt, event, etc, !!skipConfirmation);
        };
        const confirmDetails = { target, elt, path, verb, triggeringEvent: event, etc, issueRequest, question: confirmQuestion };
        if (triggerEvent(elt, "htmx:confirm", confirmDetails) === false) {
          maybeCall(resolve);
          return promise;
        }
      }
      let syncElt = elt;
      let syncStrategy = getClosestAttributeValue(elt, "hx-sync");
      let queueStrategy = null;
      let abortable = false;
      if (syncStrategy) {
        const syncStrings = syncStrategy.split(":");
        const selector = syncStrings[0].trim();
        if (selector === "this") {
          syncElt = findThisElement(elt, "hx-sync");
        } else {
          syncElt = asElement(querySelectorExt(elt, selector));
        }
        syncStrategy = (syncStrings[1] || "drop").trim();
        eltData = getInternalData(syncElt);
        if (syncStrategy === "drop" && eltData.xhr && eltData.abortable !== true) {
          maybeCall(resolve);
          return promise;
        } else if (syncStrategy === "abort") {
          if (eltData.xhr) {
            maybeCall(resolve);
            return promise;
          } else {
            abortable = true;
          }
        } else if (syncStrategy === "replace") {
          triggerEvent(syncElt, "htmx:abort");
        } else if (syncStrategy.indexOf("queue") === 0) {
          const queueStrArray = syncStrategy.split(" ");
          queueStrategy = (queueStrArray[1] || "last").trim();
        }
      }
      if (eltData.xhr) {
        if (eltData.abortable) {
          triggerEvent(syncElt, "htmx:abort");
        } else {
          if (queueStrategy == null) {
            if (event) {
              const eventData = getInternalData(event);
              if (eventData && eventData.triggerSpec && eventData.triggerSpec.queue) {
                queueStrategy = eventData.triggerSpec.queue;
              }
            }
            if (queueStrategy == null) {
              queueStrategy = "last";
            }
          }
          if (eltData.queuedRequests == null) {
            eltData.queuedRequests = [];
          }
          if (queueStrategy === "first" && eltData.queuedRequests.length === 0) {
            eltData.queuedRequests.push(function() {
              issueAjaxRequest(verb, path, elt, event, etc);
            });
          } else if (queueStrategy === "all") {
            eltData.queuedRequests.push(function() {
              issueAjaxRequest(verb, path, elt, event, etc);
            });
          } else if (queueStrategy === "last") {
            eltData.queuedRequests = [];
            eltData.queuedRequests.push(function() {
              issueAjaxRequest(verb, path, elt, event, etc);
            });
          }
          maybeCall(resolve);
          return promise;
        }
      }
      const xhr = new XMLHttpRequest();
      eltData.xhr = xhr;
      eltData.abortable = abortable;
      const endRequestLock = function() {
        eltData.xhr = null;
        eltData.abortable = false;
        if (eltData.queuedRequests != null && eltData.queuedRequests.length > 0) {
          const queuedRequest = eltData.queuedRequests.shift();
          queuedRequest();
        }
      };
      const promptQuestion = getClosestAttributeValue(elt, "hx-prompt");
      if (promptQuestion) {
        var promptResponse = prompt(promptQuestion);
        if (promptResponse === null || !triggerEvent(elt, "htmx:prompt", { prompt: promptResponse, target })) {
          maybeCall(resolve);
          endRequestLock();
          return promise;
        }
      }
      if (confirmQuestion && !confirmed) {
        if (!confirm(confirmQuestion)) {
          maybeCall(resolve);
          endRequestLock();
          return promise;
        }
      }
      let headers = getHeaders(elt, target, promptResponse);
      if (verb !== "get" && !usesFormData(elt)) {
        headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (etc.headers) {
        headers = mergeObjects(headers, etc.headers);
      }
      const results = getInputValues(elt, verb);
      let errors = results.errors;
      const rawFormData = results.formData;
      if (etc.values) {
        overrideFormData(rawFormData, formDataFromObject(etc.values));
      }
      const expressionVars = formDataFromObject(getExpressionVars(elt));
      const allFormData = overrideFormData(rawFormData, expressionVars);
      let filteredFormData = filterValues(allFormData, elt);
      if (htmx.config.getCacheBusterParam && verb === "get") {
        filteredFormData.set("org.htmx.cache-buster", getRawAttribute(target, "id") || "true");
      }
      if (path == null || path === "") {
        path = getDocument().location.href;
      }
      const requestAttrValues = getValuesForElement(elt, "hx-request");
      const eltIsBoosted = getInternalData(elt).boosted;
      let useUrlParams = htmx.config.methodsThatUseUrlParams.indexOf(verb) >= 0;
      const requestConfig = {
        boosted: eltIsBoosted,
        useUrlParams,
        formData: filteredFormData,
        parameters: formDataProxy(filteredFormData),
        unfilteredFormData: allFormData,
        unfilteredParameters: formDataProxy(allFormData),
        headers,
        target,
        verb,
        errors,
        withCredentials: etc.credentials || requestAttrValues.credentials || htmx.config.withCredentials,
        timeout: etc.timeout || requestAttrValues.timeout || htmx.config.timeout,
        path,
        triggeringEvent: event
      };
      if (!triggerEvent(elt, "htmx:configRequest", requestConfig)) {
        maybeCall(resolve);
        endRequestLock();
        return promise;
      }
      path = requestConfig.path;
      verb = requestConfig.verb;
      headers = requestConfig.headers;
      filteredFormData = formDataFromObject(requestConfig.parameters);
      errors = requestConfig.errors;
      useUrlParams = requestConfig.useUrlParams;
      if (errors && errors.length > 0) {
        triggerEvent(elt, "htmx:validation:halted", requestConfig);
        maybeCall(resolve);
        endRequestLock();
        return promise;
      }
      const splitPath = path.split("#");
      const pathNoAnchor = splitPath[0];
      const anchor = splitPath[1];
      let finalPath = path;
      if (useUrlParams) {
        finalPath = pathNoAnchor;
        const hasValues = !filteredFormData.keys().next().done;
        if (hasValues) {
          if (finalPath.indexOf("?") < 0) {
            finalPath += "?";
          } else {
            finalPath += "&";
          }
          finalPath += urlEncode(filteredFormData);
          if (anchor) {
            finalPath += "#" + anchor;
          }
        }
      }
      if (!verifyPath(elt, finalPath, requestConfig)) {
        triggerErrorEvent(elt, "htmx:invalidPath", requestConfig);
        maybeCall(reject);
        return promise;
      }
      xhr.open(verb.toUpperCase(), finalPath, true);
      xhr.overrideMimeType("text/html");
      xhr.withCredentials = requestConfig.withCredentials;
      xhr.timeout = requestConfig.timeout;
      if (requestAttrValues.noHeaders) {
      } else {
        for (const header in headers) {
          if (headers.hasOwnProperty(header)) {
            const headerValue = headers[header];
            safelySetHeaderValue(xhr, header, headerValue);
          }
        }
      }
      const responseInfo = {
        xhr,
        target,
        requestConfig,
        etc,
        boosted: eltIsBoosted,
        select,
        pathInfo: {
          requestPath: path,
          finalRequestPath: finalPath,
          responsePath: null,
          anchor
        }
      };
      xhr.onload = function() {
        try {
          const hierarchy = hierarchyForElt(elt);
          responseInfo.pathInfo.responsePath = getPathFromResponse(xhr);
          responseHandler(elt, responseInfo);
          if (responseInfo.keepIndicators !== true) {
            removeRequestIndicators(indicators, disableElts);
          }
          triggerEvent(elt, "htmx:afterRequest", responseInfo);
          triggerEvent(elt, "htmx:afterOnLoad", responseInfo);
          if (!bodyContains(elt)) {
            let secondaryTriggerElt = null;
            while (hierarchy.length > 0 && secondaryTriggerElt == null) {
              const parentEltInHierarchy = hierarchy.shift();
              if (bodyContains(parentEltInHierarchy)) {
                secondaryTriggerElt = parentEltInHierarchy;
              }
            }
            if (secondaryTriggerElt) {
              triggerEvent(secondaryTriggerElt, "htmx:afterRequest", responseInfo);
              triggerEvent(secondaryTriggerElt, "htmx:afterOnLoad", responseInfo);
            }
          }
          maybeCall(resolve);
          endRequestLock();
        } catch (e) {
          triggerErrorEvent(elt, "htmx:onLoadError", mergeObjects({ error: e }, responseInfo));
          throw e;
        }
      };
      xhr.onerror = function() {
        removeRequestIndicators(indicators, disableElts);
        triggerErrorEvent(elt, "htmx:afterRequest", responseInfo);
        triggerErrorEvent(elt, "htmx:sendError", responseInfo);
        maybeCall(reject);
        endRequestLock();
      };
      xhr.onabort = function() {
        removeRequestIndicators(indicators, disableElts);
        triggerErrorEvent(elt, "htmx:afterRequest", responseInfo);
        triggerErrorEvent(elt, "htmx:sendAbort", responseInfo);
        maybeCall(reject);
        endRequestLock();
      };
      xhr.ontimeout = function() {
        removeRequestIndicators(indicators, disableElts);
        triggerErrorEvent(elt, "htmx:afterRequest", responseInfo);
        triggerErrorEvent(elt, "htmx:timeout", responseInfo);
        maybeCall(reject);
        endRequestLock();
      };
      if (!triggerEvent(elt, "htmx:beforeRequest", responseInfo)) {
        maybeCall(resolve);
        endRequestLock();
        return promise;
      }
      var indicators = addRequestIndicatorClasses(elt);
      var disableElts = disableElements(elt);
      forEach(["loadstart", "loadend", "progress", "abort"], function(eventName) {
        forEach([xhr, xhr.upload], function(target2) {
          target2.addEventListener(eventName, function(event2) {
            triggerEvent(elt, "htmx:xhr:" + eventName, {
              lengthComputable: event2.lengthComputable,
              loaded: event2.loaded,
              total: event2.total
            });
          });
        });
      });
      triggerEvent(elt, "htmx:beforeSend", responseInfo);
      const params = useUrlParams ? null : encodeParamsForBody(xhr, elt, filteredFormData);
      xhr.send(params);
      return promise;
    }
    function determineHistoryUpdates(elt, responseInfo) {
      const xhr = responseInfo.xhr;
      let pathFromHeaders = null;
      let typeFromHeaders = null;
      if (hasHeader(xhr, /HX-Push:/i)) {
        pathFromHeaders = xhr.getResponseHeader("HX-Push");
        typeFromHeaders = "push";
      } else if (hasHeader(xhr, /HX-Push-Url:/i)) {
        pathFromHeaders = xhr.getResponseHeader("HX-Push-Url");
        typeFromHeaders = "push";
      } else if (hasHeader(xhr, /HX-Replace-Url:/i)) {
        pathFromHeaders = xhr.getResponseHeader("HX-Replace-Url");
        typeFromHeaders = "replace";
      }
      if (pathFromHeaders) {
        if (pathFromHeaders === "false") {
          return {};
        } else {
          return {
            type: typeFromHeaders,
            path: pathFromHeaders
          };
        }
      }
      const requestPath = responseInfo.pathInfo.finalRequestPath;
      const responsePath = responseInfo.pathInfo.responsePath;
      const pushUrl = getClosestAttributeValue(elt, "hx-push-url");
      const replaceUrl = getClosestAttributeValue(elt, "hx-replace-url");
      const elementIsBoosted = getInternalData(elt).boosted;
      let saveType = null;
      let path = null;
      if (pushUrl) {
        saveType = "push";
        path = pushUrl;
      } else if (replaceUrl) {
        saveType = "replace";
        path = replaceUrl;
      } else if (elementIsBoosted) {
        saveType = "push";
        path = responsePath || requestPath;
      }
      if (path) {
        if (path === "false") {
          return {};
        }
        if (path === "true") {
          path = responsePath || requestPath;
        }
        if (responseInfo.pathInfo.anchor && path.indexOf("#") === -1) {
          path = path + "#" + responseInfo.pathInfo.anchor;
        }
        return {
          type: saveType,
          path
        };
      } else {
        return {};
      }
    }
    function codeMatches(responseHandlingConfig, status) {
      var regExp = new RegExp(responseHandlingConfig.code);
      return regExp.test(status.toString(10));
    }
    function resolveResponseHandling(xhr) {
      for (var i = 0; i < htmx.config.responseHandling.length; i++) {
        var responseHandlingElement = htmx.config.responseHandling[i];
        if (codeMatches(responseHandlingElement, xhr.status)) {
          return responseHandlingElement;
        }
      }
      return {
        swap: false
      };
    }
    function handleTitle(title) {
      if (title) {
        const titleElt = find("title");
        if (titleElt) {
          titleElt.innerHTML = title;
        } else {
          window.document.title = title;
        }
      }
    }
    function handleAjaxResponse(elt, responseInfo) {
      const xhr = responseInfo.xhr;
      let target = responseInfo.target;
      const etc = responseInfo.etc;
      const responseInfoSelect = responseInfo.select;
      if (!triggerEvent(elt, "htmx:beforeOnLoad", responseInfo)) return;
      if (hasHeader(xhr, /HX-Trigger:/i)) {
        handleTriggerHeader(xhr, "HX-Trigger", elt);
      }
      if (hasHeader(xhr, /HX-Location:/i)) {
        saveCurrentPageToHistory();
        let redirectPath = xhr.getResponseHeader("HX-Location");
        var redirectSwapSpec;
        if (redirectPath.indexOf("{") === 0) {
          redirectSwapSpec = parseJSON(redirectPath);
          redirectPath = redirectSwapSpec.path;
          delete redirectSwapSpec.path;
        }
        ajaxHelper("get", redirectPath, redirectSwapSpec).then(function() {
          pushUrlIntoHistory(redirectPath);
        });
        return;
      }
      const shouldRefresh = hasHeader(xhr, /HX-Refresh:/i) && xhr.getResponseHeader("HX-Refresh") === "true";
      if (hasHeader(xhr, /HX-Redirect:/i)) {
        responseInfo.keepIndicators = true;
        location.href = xhr.getResponseHeader("HX-Redirect");
        shouldRefresh && location.reload();
        return;
      }
      if (shouldRefresh) {
        responseInfo.keepIndicators = true;
        location.reload();
        return;
      }
      if (hasHeader(xhr, /HX-Retarget:/i)) {
        if (xhr.getResponseHeader("HX-Retarget") === "this") {
          responseInfo.target = elt;
        } else {
          responseInfo.target = asElement(querySelectorExt(elt, xhr.getResponseHeader("HX-Retarget")));
        }
      }
      const historyUpdate = determineHistoryUpdates(elt, responseInfo);
      const responseHandling = resolveResponseHandling(xhr);
      const shouldSwap = responseHandling.swap;
      let isError = !!responseHandling.error;
      let ignoreTitle = htmx.config.ignoreTitle || responseHandling.ignoreTitle;
      let selectOverride = responseHandling.select;
      if (responseHandling.target) {
        responseInfo.target = asElement(querySelectorExt(elt, responseHandling.target));
      }
      var swapOverride = etc.swapOverride;
      if (swapOverride == null && responseHandling.swapOverride) {
        swapOverride = responseHandling.swapOverride;
      }
      if (hasHeader(xhr, /HX-Retarget:/i)) {
        if (xhr.getResponseHeader("HX-Retarget") === "this") {
          responseInfo.target = elt;
        } else {
          responseInfo.target = asElement(querySelectorExt(elt, xhr.getResponseHeader("HX-Retarget")));
        }
      }
      if (hasHeader(xhr, /HX-Reswap:/i)) {
        swapOverride = xhr.getResponseHeader("HX-Reswap");
      }
      var serverResponse = xhr.response;
      var beforeSwapDetails = mergeObjects({
        shouldSwap,
        serverResponse,
        isError,
        ignoreTitle,
        selectOverride
      }, responseInfo);
      if (responseHandling.event && !triggerEvent(target, responseHandling.event, beforeSwapDetails)) return;
      if (!triggerEvent(target, "htmx:beforeSwap", beforeSwapDetails)) return;
      target = beforeSwapDetails.target;
      serverResponse = beforeSwapDetails.serverResponse;
      isError = beforeSwapDetails.isError;
      ignoreTitle = beforeSwapDetails.ignoreTitle;
      selectOverride = beforeSwapDetails.selectOverride;
      responseInfo.target = target;
      responseInfo.failed = isError;
      responseInfo.successful = !isError;
      if (beforeSwapDetails.shouldSwap) {
        if (xhr.status === 286) {
          cancelPolling(elt);
        }
        withExtensions(elt, function(extension) {
          serverResponse = extension.transformResponse(serverResponse, xhr, elt);
        });
        if (historyUpdate.type) {
          saveCurrentPageToHistory();
        }
        if (hasHeader(xhr, /HX-Reswap:/i)) {
          swapOverride = xhr.getResponseHeader("HX-Reswap");
        }
        var swapSpec = getSwapSpecification(elt, swapOverride);
        if (!swapSpec.hasOwnProperty("ignoreTitle")) {
          swapSpec.ignoreTitle = ignoreTitle;
        }
        target.classList.add(htmx.config.swappingClass);
        let settleResolve = null;
        let settleReject = null;
        if (responseInfoSelect) {
          selectOverride = responseInfoSelect;
        }
        if (hasHeader(xhr, /HX-Reselect:/i)) {
          selectOverride = xhr.getResponseHeader("HX-Reselect");
        }
        const selectOOB = getClosestAttributeValue(elt, "hx-select-oob");
        const select = getClosestAttributeValue(elt, "hx-select");
        let doSwap = function() {
          try {
            if (historyUpdate.type) {
              triggerEvent(getDocument().body, "htmx:beforeHistoryUpdate", mergeObjects({ history: historyUpdate }, responseInfo));
              if (historyUpdate.type === "push") {
                pushUrlIntoHistory(historyUpdate.path);
                triggerEvent(getDocument().body, "htmx:pushedIntoHistory", { path: historyUpdate.path });
              } else {
                replaceUrlInHistory(historyUpdate.path);
                triggerEvent(getDocument().body, "htmx:replacedInHistory", { path: historyUpdate.path });
              }
            }
            swap(target, serverResponse, swapSpec, {
              select: selectOverride || select,
              selectOOB,
              eventInfo: responseInfo,
              anchor: responseInfo.pathInfo.anchor,
              contextElement: elt,
              afterSwapCallback: function() {
                if (hasHeader(xhr, /HX-Trigger-After-Swap:/i)) {
                  let finalElt = elt;
                  if (!bodyContains(elt)) {
                    finalElt = getDocument().body;
                  }
                  handleTriggerHeader(xhr, "HX-Trigger-After-Swap", finalElt);
                }
              },
              afterSettleCallback: function() {
                if (hasHeader(xhr, /HX-Trigger-After-Settle:/i)) {
                  let finalElt = elt;
                  if (!bodyContains(elt)) {
                    finalElt = getDocument().body;
                  }
                  handleTriggerHeader(xhr, "HX-Trigger-After-Settle", finalElt);
                }
                maybeCall(settleResolve);
              }
            });
          } catch (e) {
            triggerErrorEvent(elt, "htmx:swapError", responseInfo);
            maybeCall(settleReject);
            throw e;
          }
        };
        let shouldTransition = htmx.config.globalViewTransitions;
        if (swapSpec.hasOwnProperty("transition")) {
          shouldTransition = swapSpec.transition;
        }
        if (shouldTransition && triggerEvent(elt, "htmx:beforeTransition", responseInfo) && typeof Promise !== "undefined" && // @ts-ignore experimental feature atm
        document.startViewTransition) {
          const settlePromise = new Promise(function(_resolve, _reject) {
            settleResolve = _resolve;
            settleReject = _reject;
          });
          const innerDoSwap = doSwap;
          doSwap = function() {
            document.startViewTransition(function() {
              innerDoSwap();
              return settlePromise;
            });
          };
        }
        if (swapSpec.swapDelay > 0) {
          getWindow().setTimeout(doSwap, swapSpec.swapDelay);
        } else {
          doSwap();
        }
      }
      if (isError) {
        triggerErrorEvent(elt, "htmx:responseError", mergeObjects({ error: "Response Status Error Code " + xhr.status + " from " + responseInfo.pathInfo.requestPath }, responseInfo));
      }
    }
    const extensions = {};
    function extensionBase() {
      return {
        init: function(api) {
          return null;
        },
        getSelectors: function() {
          return null;
        },
        onEvent: function(name, evt) {
          return true;
        },
        transformResponse: function(text, xhr, elt) {
          return text;
        },
        isInlineSwap: function(swapStyle) {
          return false;
        },
        handleSwap: function(swapStyle, target, fragment, settleInfo) {
          return false;
        },
        encodeParameters: function(xhr, parameters, elt) {
          return null;
        }
      };
    }
    function defineExtension(name, extension) {
      if (extension.init) {
        extension.init(internalAPI);
      }
      extensions[name] = mergeObjects(extensionBase(), extension);
    }
    function removeExtension(name) {
      delete extensions[name];
    }
    function getExtensions(elt, extensionsToReturn, extensionsToIgnore) {
      if (extensionsToReturn == void 0) {
        extensionsToReturn = [];
      }
      if (elt == void 0) {
        return extensionsToReturn;
      }
      if (extensionsToIgnore == void 0) {
        extensionsToIgnore = [];
      }
      const extensionsForElement = getAttributeValue(elt, "hx-ext");
      if (extensionsForElement) {
        forEach(extensionsForElement.split(","), function(extensionName) {
          extensionName = extensionName.replace(/ /g, "");
          if (extensionName.slice(0, 7) == "ignore:") {
            extensionsToIgnore.push(extensionName.slice(7));
            return;
          }
          if (extensionsToIgnore.indexOf(extensionName) < 0) {
            const extension = extensions[extensionName];
            if (extension && extensionsToReturn.indexOf(extension) < 0) {
              extensionsToReturn.push(extension);
            }
          }
        });
      }
      return getExtensions(asElement(parentElt(elt)), extensionsToReturn, extensionsToIgnore);
    }
    var isReady = false;
    getDocument().addEventListener("DOMContentLoaded", function() {
      isReady = true;
    });
    function ready(fn) {
      if (isReady || getDocument().readyState === "complete") {
        fn();
      } else {
        getDocument().addEventListener("DOMContentLoaded", fn);
      }
    }
    function insertIndicatorStyles() {
      if (htmx.config.includeIndicatorStyles !== false) {
        const nonceAttribute = htmx.config.inlineStyleNonce ? ` nonce="${htmx.config.inlineStyleNonce}"` : "";
        getDocument().head.insertAdjacentHTML(
          "beforeend",
          "<style" + nonceAttribute + ">      ." + htmx.config.indicatorClass + "{opacity:0}      ." + htmx.config.requestClass + " ." + htmx.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}      ." + htmx.config.requestClass + "." + htmx.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}      </style>"
        );
      }
    }
    function getMetaConfig() {
      const element = getDocument().querySelector('meta[name="htmx-config"]');
      if (element) {
        return parseJSON(element.content);
      } else {
        return null;
      }
    }
    function mergeMetaConfig() {
      const metaConfig = getMetaConfig();
      if (metaConfig) {
        htmx.config = mergeObjects(htmx.config, metaConfig);
      }
    }
    ready(function() {
      mergeMetaConfig();
      insertIndicatorStyles();
      let body = getDocument().body;
      processNode(body);
      const restoredElts = getDocument().querySelectorAll(
        "[hx-trigger='restored'],[data-hx-trigger='restored']"
      );
      body.addEventListener("htmx:abort", function(evt) {
        const target = evt.target;
        const internalData = getInternalData(target);
        if (internalData && internalData.xhr) {
          internalData.xhr.abort();
        }
      });
      const originalPopstate = window.onpopstate ? window.onpopstate.bind(window) : null;
      window.onpopstate = function(event) {
        if (event.state && event.state.htmx) {
          restoreHistory();
          forEach(restoredElts, function(elt) {
            triggerEvent(elt, "htmx:restored", {
              document: getDocument(),
              triggerEvent
            });
          });
        } else {
          if (originalPopstate) {
            originalPopstate(event);
          }
        }
      };
      getWindow().setTimeout(function() {
        triggerEvent(body, "htmx:load", {});
        body = null;
      }, 0);
    });
    return htmx;
  }();
  var htmx_esm_default = htmx2;

  // assets/main.ts
  var import_theme_change = __toESM(require_theme_change(), 1);
  (0, import_theme_change.themeChange)();
  document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM is loaded!");
  });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL3RoZW1lLWNoYW5nZS9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvaHRteC5vcmcvZGlzdC9odG14LmVzbS5qcyIsICIuLi9hc3NldHMvbWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZnVuY3Rpb24gdGhlbWVUb2dnbGUoKXt2YXIgdG9nZ2xlRWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZ2dsZS10aGVtZV1cIik7dmFyIGRhdGFLZXk9dG9nZ2xlRWw/dG9nZ2xlRWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIik6bnVsbDsoZnVuY3Rpb24odGhlbWU9bG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikpe2lmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoZW1lKTtpZih0b2dnbGVFbCl7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10b2dnbGUtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuY2xhc3NMaXN0LmFkZCh0b2dnbGVFbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9KX19fSkoKTtpZih0b2dnbGVFbCl7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10b2dnbGUtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXt2YXIgdGhlbWVzTGlzdD1lbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZ2dsZS10aGVtZVwiKTtpZih0aGVtZXNMaXN0KXt2YXIgdGhlbWVzQXJyYXk9dGhlbWVzTGlzdC5zcGxpdChcIixcIik7aWYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIik9PXRoZW1lc0FycmF5WzBdKXtpZih0aGVtZXNBcnJheS5sZW5ndGg9PTEpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpO2xvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpfWVsc2V7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGVtZXNBcnJheVsxXSk7bG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIix0aGVtZXNBcnJheVsxXSl9fWVsc2V7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIix0aGVtZXNBcnJheVswXSk7bG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIix0aGVtZXNBcnJheVswXSl9fVsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdG9nZ2xlLXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmNsYXNzTGlzdC50b2dnbGUodGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdC1jbGFzc1wiKSl9KX0pfSl9fWZ1bmN0aW9uIHRoZW1lQnRuKCl7dmFyIGJ0bkVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zZXQtdGhlbWU9JyddXCIpO3ZhciBkYXRhS2V5PWJ0bkVsP2J0bkVsLmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpOm51bGw7KGZ1bmN0aW9uKHRoZW1lPWxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpKXtpZih0aGVtZSE9dW5kZWZpbmVkJiZ0aGVtZSE9XCJcIil7aWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikmJmxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpIT1cIlwiKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoZW1lKTt2YXIgYnRuRWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNldC10aGVtZT0nXCIrdGhlbWUudG9TdHJpbmcoKStcIiddXCIpO2lmKGJ0bkVsKXtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXNldC10aGVtZV1cIildLmZvckVhY2goZWw9PntlbC5jbGFzc0xpc3QucmVtb3ZlKGVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX0pO2lmKGJ0bkVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKXtidG5FbC5jbGFzc0xpc3QuYWRkKGJ0bkVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX19fWVsc2V7dmFyIGJ0bkVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zZXQtdGhlbWU9JyddXCIpO2lmKGJ0bkVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKXtidG5FbC5jbGFzc0xpc3QuYWRkKGJ0bkVsLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0LWNsYXNzXCIpKX19fX0pKCk7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zZXQtdGhlbWVdXCIpXS5mb3JFYWNoKGVsPT57ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1zZXQtdGhlbWVcIikpO2xvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIikpO1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2V0LXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmNsYXNzTGlzdC5yZW1vdmUoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfSk7aWYoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpe2VsLmNsYXNzTGlzdC5hZGQoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3QtY2xhc3NcIikpfX0pfSl9ZnVuY3Rpb24gdGhlbWVTZWxlY3QoKXt2YXIgc2VsZWN0RWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdFtkYXRhLWNob29zZS10aGVtZV1cIik7dmFyIGRhdGFLZXk9c2VsZWN0RWw/c2VsZWN0RWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIik6bnVsbDsoZnVuY3Rpb24odGhlbWU9bG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikpe2lmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGFLZXk/ZGF0YUtleTpcInRoZW1lXCIpKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLHRoZW1lKTt2YXIgb3B0aW9uVG9nZ2xlcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0W2RhdGEtY2hvb3NlLXRoZW1lXSBbdmFsdWU9J1wiK3RoZW1lLnRvU3RyaW5nKCkrXCInXVwiKTtpZihvcHRpb25Ub2dnbGVyKXtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFtkYXRhLWNob29zZS10aGVtZV0gW3ZhbHVlPSdcIit0aGVtZS50b1N0cmluZygpK1wiJ11cIildLmZvckVhY2goZWw9PntlbC5zZWxlY3RlZD10cnVlfSl9fX0pKCk7aWYoc2VsZWN0RWwpe1suLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0W2RhdGEtY2hvb3NlLXRoZW1lXVwiKV0uZm9yRWFjaChlbD0+e2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixmdW5jdGlvbigpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsdGhpcy52YWx1ZSk7bG9jYWxTdG9yYWdlLnNldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIixkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKSk7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RbZGF0YS1jaG9vc2UtdGhlbWVdIFt2YWx1ZT0nXCIrbG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YUtleT9kYXRhS2V5OlwidGhlbWVcIikrXCInXVwiKV0uZm9yRWFjaChlbD0+e2VsLnNlbGVjdGVkPXRydWV9KX0pfSl9fWZ1bmN0aW9uIHRoZW1lQ2hhbmdlKGF0dGFjaD10cnVlKXtpZihhdHRhY2g9PT10cnVlKXtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uKGV2ZW50KXt0aGVtZVRvZ2dsZSgpO3RoZW1lU2VsZWN0KCk7dGhlbWVCdG4oKX0pfWVsc2V7dGhlbWVUb2dnbGUoKTt0aGVtZVNlbGVjdCgpO3RoZW1lQnRuKCl9fWlmKHR5cGVvZiBleHBvcnRzIT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz17dGhlbWVDaGFuZ2U6dGhlbWVDaGFuZ2V9fWVsc2V7dGhlbWVDaGFuZ2UoKX0iLCAidmFyIGh0bXggPSAoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIC8vIFB1YmxpYyBBUElcbiAgY29uc3QgaHRteCA9IHtcbiAgICAvLyBUc2MgbWFkbmVzcyBoZXJlLCBhc3NpZ25pbmcgdGhlIGZ1bmN0aW9ucyBkaXJlY3RseSByZXN1bHRzIGluIGFuIGludmFsaWQgVHlwZVNjcmlwdCBvdXRwdXQsIGJ1dCByZWFzc2lnbmluZyBpcyBmaW5lXG4gICAgLyogRXZlbnQgcHJvY2Vzc2luZyAqL1xuICAgIC8qKiBAdHlwZSB7dHlwZW9mIG9uTG9hZEhlbHBlcn0gKi9cbiAgICBvbkxvYWQ6IG51bGwsXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgcHJvY2Vzc05vZGV9ICovXG4gICAgcHJvY2VzczogbnVsbCxcbiAgICAvKiogQHR5cGUge3R5cGVvZiBhZGRFdmVudExpc3RlbmVySW1wbH0gKi9cbiAgICBvbjogbnVsbCxcbiAgICAvKiogQHR5cGUge3R5cGVvZiByZW1vdmVFdmVudExpc3RlbmVySW1wbH0gKi9cbiAgICBvZmY6IG51bGwsXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgdHJpZ2dlckV2ZW50fSAqL1xuICAgIHRyaWdnZXI6IG51bGwsXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgYWpheEhlbHBlcn0gKi9cbiAgICBhamF4OiBudWxsLFxuICAgIC8qIERPTSBxdWVyeWluZyBoZWxwZXJzICovXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgZmluZH0gKi9cbiAgICBmaW5kOiBudWxsLFxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIGZpbmRBbGx9ICovXG4gICAgZmluZEFsbDogbnVsbCxcbiAgICAvKiogQHR5cGUge3R5cGVvZiBjbG9zZXN0fSAqL1xuICAgIGNsb3Nlc3Q6IG51bGwsXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW5wdXQgdmFsdWVzIHRoYXQgd291bGQgcmVzb2x2ZSBmb3IgYSBnaXZlbiBlbGVtZW50IHZpYSB0aGUgaHRteCB2YWx1ZSByZXNvbHV0aW9uIG1lY2hhbmlzbVxuICAgICAqXG4gICAgICogQHNlZSBodHRwczovL2h0bXgub3JnL2FwaS8jdmFsdWVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdCB0aGUgZWxlbWVudCB0byByZXNvbHZlIHZhbHVlcyBvblxuICAgICAqIEBwYXJhbSB7SHR0cFZlcmJ9IHR5cGUgdGhlIHJlcXVlc3QgdHlwZSAoZS5nLiAqKmdldCoqIG9yICoqcG9zdCoqKSBub24tR0VUJ3Mgd2lsbCBpbmNsdWRlIHRoZSBlbmNsb3NpbmcgZm9ybSBvZiB0aGUgZWxlbWVudC4gRGVmYXVsdHMgdG8gKipwb3N0KipcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhbHVlczogZnVuY3Rpb24oZWx0LCB0eXBlKSB7XG4gICAgICBjb25zdCBpbnB1dFZhbHVlcyA9IGdldElucHV0VmFsdWVzKGVsdCwgdHlwZSB8fCAncG9zdCcpXG4gICAgICByZXR1cm4gaW5wdXRWYWx1ZXMudmFsdWVzXG4gICAgfSxcbiAgICAvKiBET00gbWFuaXB1bGF0aW9uIGhlbHBlcnMgKi9cbiAgICAvKiogQHR5cGUge3R5cGVvZiByZW1vdmVFbGVtZW50fSAqL1xuICAgIHJlbW92ZTogbnVsbCxcbiAgICAvKiogQHR5cGUge3R5cGVvZiBhZGRDbGFzc1RvRWxlbWVudH0gKi9cbiAgICBhZGRDbGFzczogbnVsbCxcbiAgICAvKiogQHR5cGUge3R5cGVvZiByZW1vdmVDbGFzc0Zyb21FbGVtZW50fSAqL1xuICAgIHJlbW92ZUNsYXNzOiBudWxsLFxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIHRvZ2dsZUNsYXNzT25FbGVtZW50fSAqL1xuICAgIHRvZ2dsZUNsYXNzOiBudWxsLFxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIHRha2VDbGFzc0ZvckVsZW1lbnR9ICovXG4gICAgdGFrZUNsYXNzOiBudWxsLFxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIHN3YXB9ICovXG4gICAgc3dhcDogbnVsbCxcbiAgICAvKiBFeHRlbnNpb24gZW50cnlwb2ludHMgKi9cbiAgICAvKiogQHR5cGUge3R5cGVvZiBkZWZpbmVFeHRlbnNpb259ICovXG4gICAgZGVmaW5lRXh0ZW5zaW9uOiBudWxsLFxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIHJlbW92ZUV4dGVuc2lvbn0gKi9cbiAgICByZW1vdmVFeHRlbnNpb246IG51bGwsXG4gICAgLyogRGVidWdnaW5nICovXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgbG9nQWxsfSAqL1xuICAgIGxvZ0FsbDogbnVsbCxcbiAgICAvKiogQHR5cGUge3R5cGVvZiBsb2dOb25lfSAqL1xuICAgIGxvZ05vbmU6IG51bGwsXG4gICAgLyogRGVidWdnaW5nICovXG4gICAgLyoqXG4gICAgICogVGhlIGxvZ2dlciBodG14IHVzZXMgdG8gbG9nIHdpdGhcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI2xvZ2dlclxuICAgICAqL1xuICAgIGxvZ2dlcjogbnVsbCxcbiAgICAvKipcbiAgICAgKiBBIHByb3BlcnR5IGhvbGRpbmcgdGhlIGNvbmZpZ3VyYXRpb24gaHRteCB1c2VzIGF0IHJ1bnRpbWUuXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgdXNpbmcgYSBbbWV0YSB0YWddKGh0dHBzOi8vaHRteC5vcmcvZG9jcy8jY29uZmlnKSBpcyB0aGUgcHJlZmVycmVkIG1lY2hhbmlzbSBmb3Igc2V0dGluZyB0aGVzZSBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogQHNlZSBodHRwczovL2h0bXgub3JnL2FwaS8jY29uZmlnXG4gICAgICovXG4gICAgY29uZmlnOiB7XG4gICAgICAvKipcbiAgICAgICAqIFdoZXRoZXIgdG8gdXNlIGhpc3RvcnkuXG4gICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICAgKi9cbiAgICAgIGhpc3RvcnlFbmFibGVkOiB0cnVlLFxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbnVtYmVyIG9mIHBhZ2VzIHRvIGtlZXAgaW4gKipsb2NhbFN0b3JhZ2UqKiBmb3IgaGlzdG9yeSBzdXBwb3J0LlxuICAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAgKiBAZGVmYXVsdCAxMFxuICAgICAgICovXG4gICAgICBoaXN0b3J5Q2FjaGVTaXplOiAxMCxcbiAgICAgIC8qKlxuICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgICAqL1xuICAgICAgcmVmcmVzaE9uSGlzdG9yeU1pc3M6IGZhbHNlLFxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZGVmYXVsdCBzd2FwIHN0eWxlIHRvIHVzZSBpZiAqKltoeC1zd2FwXShodHRwczovL2h0bXgub3JnL2F0dHJpYnV0ZXMvaHgtc3dhcCkqKiBpcyBvbWl0dGVkLlxuICAgICAgICogQHR5cGUgSHRteFN3YXBTdHlsZVxuICAgICAgICogQGRlZmF1bHQgJ2lubmVySFRNTCdcbiAgICAgICAqL1xuICAgICAgZGVmYXVsdFN3YXBTdHlsZTogJ2lubmVySFRNTCcsXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBkZWZhdWx0IGRlbGF5IGJldHdlZW4gcmVjZWl2aW5nIGEgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyIGFuZCBkb2luZyB0aGUgc3dhcC5cbiAgICAgICAqIEB0eXBlIG51bWJlclxuICAgICAgICogQGRlZmF1bHQgMFxuICAgICAgICovXG4gICAgICBkZWZhdWx0U3dhcERlbGF5OiAwLFxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZGVmYXVsdCBkZWxheSBiZXR3ZWVuIGNvbXBsZXRpbmcgdGhlIGNvbnRlbnQgc3dhcCBhbmQgc2V0dGxpbmcgYXR0cmlidXRlcy5cbiAgICAgICAqIEB0eXBlIG51bWJlclxuICAgICAgICogQGRlZmF1bHQgMjBcbiAgICAgICAqL1xuICAgICAgZGVmYXVsdFNldHRsZURlbGF5OiAyMCxcbiAgICAgIC8qKlxuICAgICAgICogSWYgdHJ1ZSwgaHRteCB3aWxsIGluamVjdCBhIHNtYWxsIGFtb3VudCBvZiBDU1MgaW50byB0aGUgcGFnZSB0byBtYWtlIGluZGljYXRvcnMgaW52aXNpYmxlIHVubGVzcyB0aGUgKipodG14LWluZGljYXRvcioqIGNsYXNzIGlzIHByZXNlbnQuXG4gICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICAgKi9cbiAgICAgIGluY2x1ZGVJbmRpY2F0b3JTdHlsZXM6IHRydWUsXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBjbGFzcyB0byBwbGFjZSBvbiBpbmRpY2F0b3JzIHdoZW4gYSByZXF1ZXN0IGlzIGluIGZsaWdodC5cbiAgICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAgICogQGRlZmF1bHQgJ2h0bXgtaW5kaWNhdG9yJ1xuICAgICAgICovXG4gICAgICBpbmRpY2F0b3JDbGFzczogJ2h0bXgtaW5kaWNhdG9yJyxcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGNsYXNzIHRvIHBsYWNlIG9uIHRyaWdnZXJpbmcgZWxlbWVudHMgd2hlbiBhIHJlcXVlc3QgaXMgaW4gZmxpZ2h0LlxuICAgICAgICogQHR5cGUgc3RyaW5nXG4gICAgICAgKiBAZGVmYXVsdCAnaHRteC1yZXF1ZXN0J1xuICAgICAgICovXG4gICAgICByZXF1ZXN0Q2xhc3M6ICdodG14LXJlcXVlc3QnLFxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgY2xhc3MgdG8gdGVtcG9yYXJpbHkgcGxhY2Ugb24gZWxlbWVudHMgdGhhdCBodG14IGhhcyBhZGRlZCB0byB0aGUgRE9NLlxuICAgICAgICogQHR5cGUgc3RyaW5nXG4gICAgICAgKiBAZGVmYXVsdCAnaHRteC1hZGRlZCdcbiAgICAgICAqL1xuICAgICAgYWRkZWRDbGFzczogJ2h0bXgtYWRkZWQnLFxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgY2xhc3MgdG8gcGxhY2Ugb24gdGFyZ2V0IGVsZW1lbnRzIHdoZW4gaHRteCBpcyBpbiB0aGUgc2V0dGxpbmcgcGhhc2UuXG4gICAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgICAqIEBkZWZhdWx0ICdodG14LXNldHRsaW5nJ1xuICAgICAgICovXG4gICAgICBzZXR0bGluZ0NsYXNzOiAnaHRteC1zZXR0bGluZycsXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBjbGFzcyB0byBwbGFjZSBvbiB0YXJnZXQgZWxlbWVudHMgd2hlbiBodG14IGlzIGluIHRoZSBzd2FwcGluZyBwaGFzZS5cbiAgICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAgICogQGRlZmF1bHQgJ2h0bXgtc3dhcHBpbmcnXG4gICAgICAgKi9cbiAgICAgIHN3YXBwaW5nQ2xhc3M6ICdodG14LXN3YXBwaW5nJyxcbiAgICAgIC8qKlxuICAgICAgICogQWxsb3dzIHRoZSB1c2Ugb2YgZXZhbC1saWtlIGZ1bmN0aW9uYWxpdHkgaW4gaHRteCwgdG8gZW5hYmxlICoqaHgtdmFycyoqLCB0cmlnZ2VyIGNvbmRpdGlvbnMgJiBzY3JpcHQgdGFnIGV2YWx1YXRpb24uIENhbiBiZSBzZXQgdG8gKipmYWxzZSoqIGZvciBDU1AgY29tcGF0aWJpbGl0eS5cbiAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgICAqL1xuICAgICAgYWxsb3dFdmFsOiB0cnVlLFxuICAgICAgLyoqXG4gICAgICAgKiBJZiBzZXQgdG8gZmFsc2UsIGRpc2FibGVzIHRoZSBpbnRlcnByZXRhdGlvbiBvZiBzY3JpcHQgdGFncy5cbiAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgICAqL1xuICAgICAgYWxsb3dTY3JpcHRUYWdzOiB0cnVlLFxuICAgICAgLyoqXG4gICAgICAgKiBJZiBzZXQsIHRoZSBub25jZSB3aWxsIGJlIGFkZGVkIHRvIGlubGluZSBzY3JpcHRzLlxuICAgICAgICogQHR5cGUgc3RyaW5nXG4gICAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAgICovXG4gICAgICBpbmxpbmVTY3JpcHROb25jZTogJycsXG4gICAgICAvKipcbiAgICAgICAqIElmIHNldCwgdGhlIG5vbmNlIHdpbGwgYmUgYWRkZWQgdG8gaW5saW5lIHN0eWxlcy5cbiAgICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAgICogQGRlZmF1bHQgJydcbiAgICAgICAqL1xuICAgICAgaW5saW5lU3R5bGVOb25jZTogJycsXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBhdHRyaWJ1dGVzIHRvIHNldHRsZSBkdXJpbmcgdGhlIHNldHRsaW5nIHBoYXNlLlxuICAgICAgICogQHR5cGUgc3RyaW5nW11cbiAgICAgICAqIEBkZWZhdWx0IFsnY2xhc3MnLCAnc3R5bGUnLCAnd2lkdGgnLCAnaGVpZ2h0J11cbiAgICAgICAqL1xuICAgICAgYXR0cmlidXRlc1RvU2V0dGxlOiBbJ2NsYXNzJywgJ3N0eWxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICAgICAgLyoqXG4gICAgICAgKiBBbGxvdyBjcm9zcy1zaXRlIEFjY2Vzcy1Db250cm9sIHJlcXVlc3RzIHVzaW5nIGNyZWRlbnRpYWxzIHN1Y2ggYXMgY29va2llcywgYXV0aG9yaXphdGlvbiBoZWFkZXJzIG9yIFRMUyBjbGllbnQgY2VydGlmaWNhdGVzLlxuICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgICAqL1xuICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICAgIC8qKlxuICAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAgKiBAZGVmYXVsdCAwXG4gICAgICAgKi9cbiAgICAgIHRpbWVvdXQ6IDAsXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mICoqZ2V0V2ViU29ja2V0UmVjb25uZWN0RGVsYXkqKiBmb3IgcmVjb25uZWN0aW5nIGFmdGVyIHVuZXhwZWN0ZWQgY29ubmVjdGlvbiBsb3NzIGJ5IHRoZSBldmVudCBjb2RlICoqQWJub3JtYWwgQ2xvc3VyZSoqLCAqKlNlcnZpY2UgUmVzdGFydCoqIG9yICoqVHJ5IEFnYWluIExhdGVyKiouXG4gICAgICAgKiBAdHlwZSB7J2Z1bGwtaml0dGVyJyB8ICgocmV0cnlDb3VudDpudW1iZXIpID0+IG51bWJlcil9XG4gICAgICAgKiBAZGVmYXVsdCBcImZ1bGwtaml0dGVyXCJcbiAgICAgICAqL1xuICAgICAgd3NSZWNvbm5lY3REZWxheTogJ2Z1bGwtaml0dGVyJyxcbiAgICAgIC8qKlxuICAgICAgICogVGhlIHR5cGUgb2YgYmluYXJ5IGRhdGEgYmVpbmcgcmVjZWl2ZWQgb3ZlciB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb25cbiAgICAgICAqIEB0eXBlIEJpbmFyeVR5cGVcbiAgICAgICAqIEBkZWZhdWx0ICdibG9iJ1xuICAgICAgICovXG4gICAgICB3c0JpbmFyeVR5cGU6ICdibG9iJyxcbiAgICAgIC8qKlxuICAgICAgICogQHR5cGUgc3RyaW5nXG4gICAgICAgKiBAZGVmYXVsdCAnW2h4LWRpc2FibGVdLCBbZGF0YS1oeC1kaXNhYmxlXSdcbiAgICAgICAqL1xuICAgICAgZGlzYWJsZVNlbGVjdG9yOiAnW2h4LWRpc2FibGVdLCBbZGF0YS1oeC1kaXNhYmxlXScsXG4gICAgICAvKipcbiAgICAgICAqIEB0eXBlIHsnYXV0bycgfCAnaW5zdGFudCcgfCAnc21vb3RoJ31cbiAgICAgICAqIEBkZWZhdWx0ICdpbnN0YW50J1xuICAgICAgICovXG4gICAgICBzY3JvbGxCZWhhdmlvcjogJ2luc3RhbnQnLFxuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGUgZm9jdXNlZCBlbGVtZW50IHNob3VsZCBiZSBzY3JvbGxlZCBpbnRvIHZpZXcuXG4gICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAgICovXG4gICAgICBkZWZhdWx0Rm9jdXNTY3JvbGw6IGZhbHNlLFxuICAgICAgLyoqXG4gICAgICAgKiBJZiBzZXQgdG8gdHJ1ZSBodG14IHdpbGwgaW5jbHVkZSBhIGNhY2hlLWJ1c3RpbmcgcGFyYW1ldGVyIGluIEdFVCByZXF1ZXN0cyB0byBhdm9pZCBjYWNoaW5nIHBhcnRpYWwgcmVzcG9uc2VzIGJ5IHRoZSBicm93c2VyXG4gICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAgICovXG4gICAgICBnZXRDYWNoZUJ1c3RlclBhcmFtOiBmYWxzZSxcbiAgICAgIC8qKlxuICAgICAgICogSWYgc2V0IHRvIHRydWUsIGh0bXggd2lsbCB1c2UgdGhlIFZpZXcgVHJhbnNpdGlvbiBBUEkgd2hlbiBzd2FwcGluZyBpbiBuZXcgY29udGVudC5cbiAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICAgKi9cbiAgICAgIGdsb2JhbFZpZXdUcmFuc2l0aW9uczogZmFsc2UsXG4gICAgICAvKipcbiAgICAgICAqIGh0bXggd2lsbCBmb3JtYXQgcmVxdWVzdHMgd2l0aCB0aGVzZSBtZXRob2RzIGJ5IGVuY29kaW5nIHRoZWlyIHBhcmFtZXRlcnMgaW4gdGhlIFVSTCwgbm90IHRoZSByZXF1ZXN0IGJvZHlcbiAgICAgICAqIEB0eXBlIHsoSHR0cFZlcmIpW119XG4gICAgICAgKiBAZGVmYXVsdCBbJ2dldCcsICdkZWxldGUnXVxuICAgICAgICovXG4gICAgICBtZXRob2RzVGhhdFVzZVVybFBhcmFtczogWydnZXQnLCAnZGVsZXRlJ10sXG4gICAgICAvKipcbiAgICAgICAqIElmIHNldCB0byB0cnVlLCBkaXNhYmxlcyBodG14LWJhc2VkIHJlcXVlc3RzIHRvIG5vbi1vcmlnaW4gaG9zdHMuXG4gICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAgICovXG4gICAgICBzZWxmUmVxdWVzdHNPbmx5OiB0cnVlLFxuICAgICAgLyoqXG4gICAgICAgKiBJZiBzZXQgdG8gdHJ1ZSBodG14IHdpbGwgbm90IHVwZGF0ZSB0aGUgdGl0bGUgb2YgdGhlIGRvY3VtZW50IHdoZW4gYSB0aXRsZSB0YWcgaXMgZm91bmQgaW4gbmV3IGNvbnRlbnRcbiAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICAgKi9cbiAgICAgIGlnbm9yZVRpdGxlOiBmYWxzZSxcbiAgICAgIC8qKlxuICAgICAgICogV2hldGhlciB0aGUgdGFyZ2V0IG9mIGEgYm9vc3RlZCBlbGVtZW50IGlzIHNjcm9sbGVkIGludG8gdGhlIHZpZXdwb3J0LlxuICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAgICovXG4gICAgICBzY3JvbGxJbnRvVmlld09uQm9vc3Q6IHRydWUsXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBjYWNoZSB0byBzdG9yZSBldmFsdWF0ZWQgdHJpZ2dlciBzcGVjaWZpY2F0aW9ucyBpbnRvLlxuICAgICAgICogWW91IG1heSBkZWZpbmUgYSBzaW1wbGUgb2JqZWN0IHRvIHVzZSBhIG5ldmVyLWNsZWFyaW5nIGNhY2hlLCBvciBpbXBsZW1lbnQgeW91ciBvd24gc3lzdGVtIHVzaW5nIGEgW3Byb3h5IG9iamVjdF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvUHJveHkpXG4gICAgICAgKiBAdHlwZSB7T2JqZWN0fG51bGx9XG4gICAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICAgKi9cbiAgICAgIHRyaWdnZXJTcGVjc0NhY2hlOiBudWxsLFxuICAgICAgLyoqIEB0eXBlIGJvb2xlYW4gKi9cbiAgICAgIGRpc2FibGVJbmhlcml0YW5jZTogZmFsc2UsXG4gICAgICAvKiogQHR5cGUgSHRteFJlc3BvbnNlSGFuZGxpbmdDb25maWdbXSAqL1xuICAgICAgcmVzcG9uc2VIYW5kbGluZzogW1xuICAgICAgICB7IGNvZGU6ICcyMDQnLCBzd2FwOiBmYWxzZSB9LFxuICAgICAgICB7IGNvZGU6ICdbMjNdLi4nLCBzd2FwOiB0cnVlIH0sXG4gICAgICAgIHsgY29kZTogJ1s0NV0uLicsIHN3YXA6IGZhbHNlLCBlcnJvcjogdHJ1ZSB9XG4gICAgICBdLFxuICAgICAgLyoqXG4gICAgICAgKiBXaGV0aGVyIHRvIHByb2Nlc3MgT09CIHN3YXBzIG9uIGVsZW1lbnRzIHRoYXQgYXJlIG5lc3RlZCB3aXRoaW4gdGhlIG1haW4gcmVzcG9uc2UgZWxlbWVudC5cbiAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgICAqL1xuICAgICAgYWxsb3dOZXN0ZWRPb2JTd2FwczogdHJ1ZVxuICAgIH0sXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgcGFyc2VJbnRlcnZhbH0gKi9cbiAgICBwYXJzZUludGVydmFsOiBudWxsLFxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIGludGVybmFsRXZhbH0gKi9cbiAgICBfOiBudWxsLFxuICAgIHZlcnNpb246ICcyLjAuMidcbiAgfVxuICAvLyBUc2MgbWFkbmVzcyBwYXJ0IDJcbiAgaHRteC5vbkxvYWQgPSBvbkxvYWRIZWxwZXJcbiAgaHRteC5wcm9jZXNzID0gcHJvY2Vzc05vZGVcbiAgaHRteC5vbiA9IGFkZEV2ZW50TGlzdGVuZXJJbXBsXG4gIGh0bXgub2ZmID0gcmVtb3ZlRXZlbnRMaXN0ZW5lckltcGxcbiAgaHRteC50cmlnZ2VyID0gdHJpZ2dlckV2ZW50XG4gIGh0bXguYWpheCA9IGFqYXhIZWxwZXJcbiAgaHRteC5maW5kID0gZmluZFxuICBodG14LmZpbmRBbGwgPSBmaW5kQWxsXG4gIGh0bXguY2xvc2VzdCA9IGNsb3Nlc3RcbiAgaHRteC5yZW1vdmUgPSByZW1vdmVFbGVtZW50XG4gIGh0bXguYWRkQ2xhc3MgPSBhZGRDbGFzc1RvRWxlbWVudFxuICBodG14LnJlbW92ZUNsYXNzID0gcmVtb3ZlQ2xhc3NGcm9tRWxlbWVudFxuICBodG14LnRvZ2dsZUNsYXNzID0gdG9nZ2xlQ2xhc3NPbkVsZW1lbnRcbiAgaHRteC50YWtlQ2xhc3MgPSB0YWtlQ2xhc3NGb3JFbGVtZW50XG4gIGh0bXguc3dhcCA9IHN3YXBcbiAgaHRteC5kZWZpbmVFeHRlbnNpb24gPSBkZWZpbmVFeHRlbnNpb25cbiAgaHRteC5yZW1vdmVFeHRlbnNpb24gPSByZW1vdmVFeHRlbnNpb25cbiAgaHRteC5sb2dBbGwgPSBsb2dBbGxcbiAgaHRteC5sb2dOb25lID0gbG9nTm9uZVxuICBodG14LnBhcnNlSW50ZXJ2YWwgPSBwYXJzZUludGVydmFsXG4gIGh0bXguXyA9IGludGVybmFsRXZhbFxuXG4gIGNvbnN0IGludGVybmFsQVBJID0ge1xuICAgIGFkZFRyaWdnZXJIYW5kbGVyLFxuICAgIGJvZHlDb250YWlucyxcbiAgICBjYW5BY2Nlc3NMb2NhbFN0b3JhZ2UsXG4gICAgZmluZFRoaXNFbGVtZW50LFxuICAgIGZpbHRlclZhbHVlcyxcbiAgICBzd2FwLFxuICAgIGhhc0F0dHJpYnV0ZSxcbiAgICBnZXRBdHRyaWJ1dGVWYWx1ZSxcbiAgICBnZXRDbG9zZXN0QXR0cmlidXRlVmFsdWUsXG4gICAgZ2V0Q2xvc2VzdE1hdGNoLFxuICAgIGdldEV4cHJlc3Npb25WYXJzLFxuICAgIGdldEhlYWRlcnMsXG4gICAgZ2V0SW5wdXRWYWx1ZXMsXG4gICAgZ2V0SW50ZXJuYWxEYXRhLFxuICAgIGdldFN3YXBTcGVjaWZpY2F0aW9uLFxuICAgIGdldFRyaWdnZXJTcGVjcyxcbiAgICBnZXRUYXJnZXQsXG4gICAgbWFrZUZyYWdtZW50LFxuICAgIG1lcmdlT2JqZWN0cyxcbiAgICBtYWtlU2V0dGxlSW5mbyxcbiAgICBvb2JTd2FwLFxuICAgIHF1ZXJ5U2VsZWN0b3JFeHQsXG4gICAgc2V0dGxlSW1tZWRpYXRlbHksXG4gICAgc2hvdWxkQ2FuY2VsLFxuICAgIHRyaWdnZXJFdmVudCxcbiAgICB0cmlnZ2VyRXJyb3JFdmVudCxcbiAgICB3aXRoRXh0ZW5zaW9uc1xuICB9XG5cbiAgY29uc3QgVkVSQlMgPSBbJ2dldCcsICdwb3N0JywgJ3B1dCcsICdkZWxldGUnLCAncGF0Y2gnXVxuICBjb25zdCBWRVJCX1NFTEVDVE9SID0gVkVSQlMubWFwKGZ1bmN0aW9uKHZlcmIpIHtcbiAgICByZXR1cm4gJ1toeC0nICsgdmVyYiArICddLCBbZGF0YS1oeC0nICsgdmVyYiArICddJ1xuICB9KS5qb2luKCcsICcpXG5cbiAgY29uc3QgSEVBRF9UQUdfUkVHRVggPSBtYWtlVGFnUmVnRXgoJ2hlYWQnKVxuXG4gIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFV0aWxpdGllc1xuICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZ2xvYmFsXG4gICAqIEByZXR1cm5zIHtSZWdFeHB9XG4gICAqL1xuICBmdW5jdGlvbiBtYWtlVGFnUmVnRXgodGFnLCBnbG9iYWwgPSBmYWxzZSkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKGA8JHt0YWd9KFxcXFxzW14+XSo+fD4pKFtcXFxcc1xcXFxTXSo/KTxcXFxcLyR7dGFnfT5gLFxuICAgICAgZ2xvYmFsID8gJ2dpbScgOiAnaW0nKVxuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnRlcnZhbCBzdHJpbmcgY29uc2lzdGVudCB3aXRoIHRoZSB3YXkgaHRteCBkb2VzLiBVc2VmdWwgZm9yIHBsdWdpbnMgdGhhdCBoYXZlIHRpbWluZy1yZWxhdGVkIGF0dHJpYnV0ZXMuXG4gICAqXG4gICAqIENhdXRpb246IEFjY2VwdHMgYW4gaW50IGZvbGxvd2VkIGJ5IGVpdGhlciAqKnMqKiBvciAqKm1zKiouIEFsbCBvdGhlciB2YWx1ZXMgdXNlICoqcGFyc2VGbG9hdCoqXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI3BhcnNlSW50ZXJ2YWxcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciB0aW1pbmcgc3RyaW5nXG4gICAqIEByZXR1cm5zIHtudW1iZXJ8dW5kZWZpbmVkfVxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VJbnRlcnZhbChzdHIpIHtcbiAgICBpZiAoc3RyID09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGxldCBpbnRlcnZhbCA9IE5hTlxuICAgIGlmIChzdHIuc2xpY2UoLTIpID09ICdtcycpIHtcbiAgICAgIGludGVydmFsID0gcGFyc2VGbG9hdChzdHIuc2xpY2UoMCwgLTIpKVxuICAgIH0gZWxzZSBpZiAoc3RyLnNsaWNlKC0xKSA9PSAncycpIHtcbiAgICAgIGludGVydmFsID0gcGFyc2VGbG9hdChzdHIuc2xpY2UoMCwgLTEpKSAqIDEwMDBcbiAgICB9IGVsc2UgaWYgKHN0ci5zbGljZSgtMSkgPT0gJ20nKSB7XG4gICAgICBpbnRlcnZhbCA9IHBhcnNlRmxvYXQoc3RyLnNsaWNlKDAsIC0xKSkgKiAxMDAwICogNjBcbiAgICB9IGVsc2Uge1xuICAgICAgaW50ZXJ2YWwgPSBwYXJzZUZsb2F0KHN0cilcbiAgICB9XG4gICAgcmV0dXJuIGlzTmFOKGludGVydmFsKSA/IHVuZGVmaW5lZCA6IGludGVydmFsXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBlbHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHJldHVybnMgeyhzdHJpbmcgfCBudWxsKX1cbiAgICovXG4gIGZ1bmN0aW9uIGdldFJhd0F0dHJpYnV0ZShlbHQsIG5hbWUpIHtcbiAgICByZXR1cm4gZWx0IGluc3RhbmNlb2YgRWxlbWVudCAmJiBlbHQuZ2V0QXR0cmlidXRlKG5hbWUpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1YWxpZmllZE5hbWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICAvLyByZXNvbHZlIHdpdGggYm90aCBoeCBhbmQgZGF0YS1oeCBwcmVmaXhlc1xuICBmdW5jdGlvbiBoYXNBdHRyaWJ1dGUoZWx0LCBxdWFsaWZpZWROYW1lKSB7XG4gICAgcmV0dXJuICEhZWx0Lmhhc0F0dHJpYnV0ZSAmJiAoZWx0Lmhhc0F0dHJpYnV0ZShxdWFsaWZpZWROYW1lKSB8fFxuICAgICAgZWx0Lmhhc0F0dHJpYnV0ZSgnZGF0YS0nICsgcXVhbGlmaWVkTmFtZSkpXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBlbHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1YWxpZmllZE5hbWVcbiAgICogQHJldHVybnMgeyhzdHJpbmcgfCBudWxsKX1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEF0dHJpYnV0ZVZhbHVlKGVsdCwgcXVhbGlmaWVkTmFtZSkge1xuICAgIHJldHVybiBnZXRSYXdBdHRyaWJ1dGUoZWx0LCBxdWFsaWZpZWROYW1lKSB8fCBnZXRSYXdBdHRyaWJ1dGUoZWx0LCAnZGF0YS0nICsgcXVhbGlmaWVkTmFtZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IGVsdFxuICAgKiBAcmV0dXJucyB7Tm9kZSB8IG51bGx9XG4gICAqL1xuICBmdW5jdGlvbiBwYXJlbnRFbHQoZWx0KSB7XG4gICAgY29uc3QgcGFyZW50ID0gZWx0LnBhcmVudEVsZW1lbnRcbiAgICBpZiAoIXBhcmVudCAmJiBlbHQucGFyZW50Tm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHJldHVybiBlbHQucGFyZW50Tm9kZVxuICAgIHJldHVybiBwYXJlbnRcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7RG9jdW1lbnR9XG4gICAqL1xuICBmdW5jdGlvbiBnZXREb2N1bWVudCgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnRcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IGVsdFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGdsb2JhbFxuICAgKiBAcmV0dXJucyB7Tm9kZXxEb2N1bWVudH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldFJvb3ROb2RlKGVsdCwgZ2xvYmFsKSB7XG4gICAgcmV0dXJuIGVsdC5nZXRSb290Tm9kZSA/IGVsdC5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiBnbG9iYWwgfSkgOiBnZXREb2N1bWVudCgpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBlbHRcbiAgICogQHBhcmFtIHsoZTpOb2RlKSA9PiBib29sZWFufSBjb25kaXRpb25cbiAgICogQHJldHVybnMge05vZGUgfCBudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Q2xvc2VzdE1hdGNoKGVsdCwgY29uZGl0aW9uKSB7XG4gICAgd2hpbGUgKGVsdCAmJiAhY29uZGl0aW9uKGVsdCkpIHtcbiAgICAgIGVsdCA9IHBhcmVudEVsdChlbHQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsdCB8fCBudWxsXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBpbml0aWFsRWxlbWVudFxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGFuY2VzdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVOYW1lXG4gICAqIEByZXR1cm5zIHtzdHJpbmd8bnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEF0dHJpYnV0ZVZhbHVlV2l0aERpc2luaGVyaXRhbmNlKGluaXRpYWxFbGVtZW50LCBhbmNlc3RvciwgYXR0cmlidXRlTmFtZSkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gZ2V0QXR0cmlidXRlVmFsdWUoYW5jZXN0b3IsIGF0dHJpYnV0ZU5hbWUpXG4gICAgY29uc3QgZGlzaW5oZXJpdCA9IGdldEF0dHJpYnV0ZVZhbHVlKGFuY2VzdG9yLCAnaHgtZGlzaW5oZXJpdCcpXG4gICAgdmFyIGluaGVyaXQgPSBnZXRBdHRyaWJ1dGVWYWx1ZShhbmNlc3RvciwgJ2h4LWluaGVyaXQnKVxuICAgIGlmIChpbml0aWFsRWxlbWVudCAhPT0gYW5jZXN0b3IpIHtcbiAgICAgIGlmIChodG14LmNvbmZpZy5kaXNhYmxlSW5oZXJpdGFuY2UpIHtcbiAgICAgICAgaWYgKGluaGVyaXQgJiYgKGluaGVyaXQgPT09ICcqJyB8fCBpbmhlcml0LnNwbGl0KCcgJykuaW5kZXhPZihhdHRyaWJ1dGVOYW1lKSA+PSAwKSkge1xuICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChkaXNpbmhlcml0ICYmIChkaXNpbmhlcml0ID09PSAnKicgfHwgZGlzaW5oZXJpdC5zcGxpdCgnICcpLmluZGV4T2YoYXR0cmlidXRlTmFtZSkgPj0gMCkpIHtcbiAgICAgICAgcmV0dXJuICd1bnNldCdcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZU5hbWVcbiAgICogQHJldHVybnMge3N0cmluZyB8IG51bGx9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRDbG9zZXN0QXR0cmlidXRlVmFsdWUoZWx0LCBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgbGV0IGNsb3Nlc3RBdHRyID0gbnVsbFxuICAgIGdldENsb3Nlc3RNYXRjaChlbHQsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiAhIShjbG9zZXN0QXR0ciA9IGdldEF0dHJpYnV0ZVZhbHVlV2l0aERpc2luaGVyaXRhbmNlKGVsdCwgYXNFbGVtZW50KGUpLCBhdHRyaWJ1dGVOYW1lKSlcbiAgICB9KVxuICAgIGlmIChjbG9zZXN0QXR0ciAhPT0gJ3Vuc2V0Jykge1xuICAgICAgcmV0dXJuIGNsb3Nlc3RBdHRyXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIG1hdGNoZXMoZWx0LCBzZWxlY3Rvcikge1xuICAgIC8vIEB0cy1pZ25vcmU6IG5vbi1zdGFuZGFyZCBwcm9wZXJ0aWVzIGZvciBicm93c2VyIGNvbXBhdGliaWxpdHlcbiAgICAvLyBub2luc3BlY3Rpb24gSlNVbnJlc29sdmVkVmFyaWFibGVcbiAgICBjb25zdCBtYXRjaGVzRnVuY3Rpb24gPSBlbHQgaW5zdGFuY2VvZiBFbGVtZW50ICYmIChlbHQubWF0Y2hlcyB8fCBlbHQubWF0Y2hlc1NlbGVjdG9yIHx8IGVsdC5tc01hdGNoZXNTZWxlY3RvciB8fCBlbHQubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGVsdC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZWx0Lm9NYXRjaGVzU2VsZWN0b3IpXG4gICAgcmV0dXJuICEhbWF0Y2hlc0Z1bmN0aW9uICYmIG1hdGNoZXNGdW5jdGlvbi5jYWxsKGVsdCwgc2VsZWN0b3IpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3RhcnRUYWcoc3RyKSB7XG4gICAgY29uc3QgdGFnTWF0Y2hlciA9IC88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKikvaVxuICAgIGNvbnN0IG1hdGNoID0gdGFnTWF0Y2hlci5leGVjKHN0cilcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVzcFxuICAgKiBAcmV0dXJucyB7RG9jdW1lbnR9XG4gICAqL1xuICBmdW5jdGlvbiBwYXJzZUhUTUwocmVzcCkge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKVxuICAgIHJldHVybiBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHJlc3AsICd0ZXh0L2h0bWwnKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gZnJhZ21lbnRcbiAgICogQHBhcmFtIHtOb2RlfSBlbHRcbiAgICovXG4gIGZ1bmN0aW9uIHRha2VDaGlsZHJlbkZvcihmcmFnbWVudCwgZWx0KSB7XG4gICAgd2hpbGUgKGVsdC5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZyYWdtZW50LmFwcGVuZChlbHQuY2hpbGROb2Rlc1swXSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MU2NyaXB0RWxlbWVudH0gc2NyaXB0XG4gICAqIEByZXR1cm5zIHtIVE1MU2NyaXB0RWxlbWVudH1cbiAgICovXG4gIGZ1bmN0aW9uIGR1cGxpY2F0ZVNjcmlwdChzY3JpcHQpIHtcbiAgICBjb25zdCBuZXdTY3JpcHQgPSBnZXREb2N1bWVudCgpLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgZm9yRWFjaChzY3JpcHQuYXR0cmlidXRlcywgZnVuY3Rpb24oYXR0cikge1xuICAgICAgbmV3U2NyaXB0LnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpXG4gICAgfSlcbiAgICBuZXdTY3JpcHQudGV4dENvbnRlbnQgPSBzY3JpcHQudGV4dENvbnRlbnRcbiAgICBuZXdTY3JpcHQuYXN5bmMgPSBmYWxzZVxuICAgIGlmIChodG14LmNvbmZpZy5pbmxpbmVTY3JpcHROb25jZSkge1xuICAgICAgbmV3U2NyaXB0Lm5vbmNlID0gaHRteC5jb25maWcuaW5saW5lU2NyaXB0Tm9uY2VcbiAgICB9XG4gICAgcmV0dXJuIG5ld1NjcmlwdFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTFNjcmlwdEVsZW1lbnR9IHNjcmlwdFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzSmF2YVNjcmlwdFNjcmlwdE5vZGUoc2NyaXB0KSB7XG4gICAgcmV0dXJuIHNjcmlwdC5tYXRjaGVzKCdzY3JpcHQnKSAmJiAoc2NyaXB0LnR5cGUgPT09ICd0ZXh0L2phdmFzY3JpcHQnIHx8IHNjcmlwdC50eXBlID09PSAnbW9kdWxlJyB8fCBzY3JpcHQudHlwZSA9PT0gJycpXG4gIH1cblxuICAvKipcbiAgICogd2UgaGF2ZSB0byBtYWtlIG5ldyBjb3BpZXMgb2Ygc2NyaXB0IHRhZ3MgdGhhdCB3ZSBhcmUgZ29pbmcgdG8gaW5zZXJ0IGJlY2F1c2VcbiAgICogU09NRSBicm93c2VycyAobm90IHNheWluZyB3aG8sIGJ1dCBpdCBpbnZvbHZlcyBhbiBlbGVtZW50IGFuZCBhbiBhbmltYWwpIGRvbid0XG4gICAqIGV4ZWN1dGUgc2NyaXB0cyBjcmVhdGVkIGluIDx0ZW1wbGF0ZT4gdGFncyB3aGVuIHRoZXkgYXJlIGluc2VydGVkIGludG8gdGhlIERPTVxuICAgKiBhbmQgYWxsIHRoZSBvdGhlcnMgZG8gbG1hb1xuICAgKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdtZW50XG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxpemVTY3JpcHRUYWdzKGZyYWdtZW50KSB7XG4gICAgQXJyYXkuZnJvbShmcmFnbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKSkuZm9yRWFjaCgvKiogQHBhcmFtIHtIVE1MU2NyaXB0RWxlbWVudH0gc2NyaXB0ICovIChzY3JpcHQpID0+IHtcbiAgICAgIGlmIChpc0phdmFTY3JpcHRTY3JpcHROb2RlKHNjcmlwdCkpIHtcbiAgICAgICAgY29uc3QgbmV3U2NyaXB0ID0gZHVwbGljYXRlU2NyaXB0KHNjcmlwdClcbiAgICAgICAgY29uc3QgcGFyZW50ID0gc2NyaXB0LnBhcmVudE5vZGVcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld1NjcmlwdCwgc2NyaXB0KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbG9nRXJyb3IoZSlcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBzY3JpcHQucmVtb3ZlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQHR5cGVkZWYge0RvY3VtZW50RnJhZ21lbnQgJiB7dGl0bGU/OiBzdHJpbmd9fSBEb2N1bWVudEZyYWdtZW50V2l0aFRpdGxlXG4gICAqIEBkZXNjcmlwdGlvbiAgYSBkb2N1bWVudCBmcmFnbWVudCByZXByZXNlbnRpbmcgdGhlIHJlc3BvbnNlIEhUTUwsIGluY2x1ZGluZ1xuICAgKiBhIGB0aXRsZWAgcHJvcGVydHkgZm9yIGFueSB0aXRsZSBpbmZvcm1hdGlvbiBmb3VuZFxuICAgKi9cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc3BvbnNlIEhUTUxcbiAgICogQHJldHVybnMge0RvY3VtZW50RnJhZ21lbnRXaXRoVGl0bGV9XG4gICAqL1xuICBmdW5jdGlvbiBtYWtlRnJhZ21lbnQocmVzcG9uc2UpIHtcbiAgICAvLyBzdHJpcCBoZWFkIHRhZyB0byBkZXRlcm1pbmUgc2hhcGUgb2YgcmVzcG9uc2Ugd2UgYXJlIGRlYWxpbmcgd2l0aFxuICAgIGNvbnN0IHJlc3BvbnNlV2l0aE5vSGVhZCA9IHJlc3BvbnNlLnJlcGxhY2UoSEVBRF9UQUdfUkVHRVgsICcnKVxuICAgIGNvbnN0IHN0YXJ0VGFnID0gZ2V0U3RhcnRUYWcocmVzcG9uc2VXaXRoTm9IZWFkKVxuICAgIC8qKiBAdHlwZSBEb2N1bWVudEZyYWdtZW50V2l0aFRpdGxlICovXG4gICAgbGV0IGZyYWdtZW50XG4gICAgaWYgKHN0YXJ0VGFnID09PSAnaHRtbCcpIHtcbiAgICAgIC8vIGlmIGl0IGlzIGEgZnVsbCBkb2N1bWVudCwgcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgYm9keVxuICAgICAgZnJhZ21lbnQgPSAvKiogQHR5cGUgRG9jdW1lbnRGcmFnbWVudFdpdGhUaXRsZSAqLyAobmV3IERvY3VtZW50RnJhZ21lbnQoKSlcbiAgICAgIGNvbnN0IGRvYyA9IHBhcnNlSFRNTChyZXNwb25zZSlcbiAgICAgIHRha2VDaGlsZHJlbkZvcihmcmFnbWVudCwgZG9jLmJvZHkpXG4gICAgICBmcmFnbWVudC50aXRsZSA9IGRvYy50aXRsZVxuICAgIH0gZWxzZSBpZiAoc3RhcnRUYWcgPT09ICdib2R5Jykge1xuICAgICAgLy8gcGFyc2UgYm9keSB3L28gd3JhcHBpbmcgaW4gdGVtcGxhdGVcbiAgICAgIGZyYWdtZW50ID0gLyoqIEB0eXBlIERvY3VtZW50RnJhZ21lbnRXaXRoVGl0bGUgKi8gKG5ldyBEb2N1bWVudEZyYWdtZW50KCkpXG4gICAgICBjb25zdCBkb2MgPSBwYXJzZUhUTUwocmVzcG9uc2VXaXRoTm9IZWFkKVxuICAgICAgdGFrZUNoaWxkcmVuRm9yKGZyYWdtZW50LCBkb2MuYm9keSlcbiAgICAgIGZyYWdtZW50LnRpdGxlID0gZG9jLnRpdGxlXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG90aGVyd2lzZSB3ZSBoYXZlIG5vbi1ib2R5IHBhcnRpYWwgSFRNTCBjb250ZW50LCBzbyB3cmFwIGl0IGluIGEgdGVtcGxhdGUgdG8gbWF4aW1pemUgcGFyc2luZyBmbGV4aWJpbGl0eVxuICAgICAgY29uc3QgZG9jID0gcGFyc2VIVE1MKCc8Ym9keT48dGVtcGxhdGUgY2xhc3M9XCJpbnRlcm5hbC1odG14LXdyYXBwZXJcIj4nICsgcmVzcG9uc2VXaXRoTm9IZWFkICsgJzwvdGVtcGxhdGU+PC9ib2R5PicpXG4gICAgICBmcmFnbWVudCA9IC8qKiBAdHlwZSBEb2N1bWVudEZyYWdtZW50V2l0aFRpdGxlICovIChkb2MucXVlcnlTZWxlY3RvcigndGVtcGxhdGUnKS5jb250ZW50KVxuICAgICAgLy8gZXh0cmFjdCB0aXRsZSBpbnRvIGZyYWdtZW50IGZvciBsYXRlciBwcm9jZXNzaW5nXG4gICAgICBmcmFnbWVudC50aXRsZSA9IGRvYy50aXRsZVxuXG4gICAgICAvLyBmb3IgbGVnYWN5IHJlYXNvbnMgd2Ugc3VwcG9ydCBhIHRpdGxlIHRhZyBhdCB0aGUgcm9vdCBsZXZlbCBvZiBub24tYm9keSByZXNwb25zZXMsIHNvIHdlIG5lZWQgdG8gaGFuZGxlIGl0XG4gICAgICB2YXIgdGl0bGVFbGVtZW50ID0gZnJhZ21lbnQucXVlcnlTZWxlY3RvcigndGl0bGUnKVxuICAgICAgaWYgKHRpdGxlRWxlbWVudCAmJiB0aXRsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gZnJhZ21lbnQpIHtcbiAgICAgICAgdGl0bGVFbGVtZW50LnJlbW92ZSgpXG4gICAgICAgIGZyYWdtZW50LnRpdGxlID0gdGl0bGVFbGVtZW50LmlubmVyVGV4dFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZnJhZ21lbnQpIHtcbiAgICAgIGlmIChodG14LmNvbmZpZy5hbGxvd1NjcmlwdFRhZ3MpIHtcbiAgICAgICAgbm9ybWFsaXplU2NyaXB0VGFncyhmcmFnbWVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJlbW92ZSBhbGwgc2NyaXB0IHRhZ3MgaWYgc2NyaXB0cyBhcmUgZGlzYWJsZWRcbiAgICAgICAgZnJhZ21lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0JykuZm9yRWFjaCgoc2NyaXB0KSA9PiBzY3JpcHQucmVtb3ZlKCkpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmcmFnbWVudFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmNcbiAgICovXG4gIGZ1bmN0aW9uIG1heWJlQ2FsbChmdW5jKSB7XG4gICAgaWYgKGZ1bmMpIHtcbiAgICAgIGZ1bmMoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2FueX0gb1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgZnVuY3Rpb24gaXNUeXBlKG8sIHR5cGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCAnICsgdHlwZSArICddJ1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Kn0gb1xuICAgKiBAcmV0dXJucyB7byBpcyBGdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24obykge1xuICAgIHJldHVybiB0eXBlb2YgbyA9PT0gJ2Z1bmN0aW9uJ1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Kn0gb1xuICAgKiBAcmV0dXJucyB7byBpcyBPYmplY3R9XG4gICAqL1xuICBmdW5jdGlvbiBpc1Jhd09iamVjdChvKSB7XG4gICAgcmV0dXJuIGlzVHlwZShvLCAnT2JqZWN0JylcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBPbkhhbmRsZXJcbiAgICogQHByb3BlcnR5IHsoa2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcCl8c3RyaW5nfSBldmVudFxuICAgKiBAcHJvcGVydHkge0V2ZW50TGlzdGVuZXJ9IGxpc3RlbmVyXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBMaXN0ZW5lckluZm9cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHRyaWdnZXJcbiAgICogQHByb3BlcnR5IHtFdmVudExpc3RlbmVyfSBsaXN0ZW5lclxuICAgKiBAcHJvcGVydHkge0V2ZW50VGFyZ2V0fSBvblxuICAgKi9cblxuICAvKipcbiAgICogQHR5cGVkZWYge09iamVjdH0gSHRteE5vZGVJbnRlcm5hbERhdGFcbiAgICogRWxlbWVudCBkYXRhXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbaW5pdEhhc2hdXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2Jvb3N0ZWRdXG4gICAqIEBwcm9wZXJ0eSB7T25IYW5kbGVyW119IFtvbkhhbmRsZXJzXVxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW3RpbWVvdXRdXG4gICAqIEBwcm9wZXJ0eSB7TGlzdGVuZXJJbmZvW119IFtsaXN0ZW5lckluZm9zXVxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFtjYW5jZWxsZWRdXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3RyaWdnZXJlZE9uY2VdXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZGVsYXllZF1cbiAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW3Rocm90dGxlXVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gW2xhc3RWYWx1ZV1cbiAgICogQHByb3BlcnR5IHtib29sZWFufSBbbG9hZGVkXVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gW3BhdGhdXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbdmVyYl1cbiAgICogQHByb3BlcnR5IHtib29sZWFufSBbcG9sbGluZ11cbiAgICogQHByb3BlcnR5IHtIVE1MQnV0dG9uRWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fG51bGx9IFtsYXN0QnV0dG9uQ2xpY2tlZF1cbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IFtyZXF1ZXN0Q291bnRdXG4gICAqIEBwcm9wZXJ0eSB7WE1MSHR0cFJlcXVlc3R9IFt4aHJdXG4gICAqIEBwcm9wZXJ0eSB7KCgpID0+IHZvaWQpW119IFtxdWV1ZWRSZXF1ZXN0c11cbiAgICogQHByb3BlcnR5IHtib29sZWFufSBbYWJvcnRhYmxlXVxuICAgKlxuICAgKiBFdmVudCBkYXRhXG4gICAqIEBwcm9wZXJ0eSB7SHRteFRyaWdnZXJTcGVjaWZpY2F0aW9ufSBbdHJpZ2dlclNwZWNdXG4gICAqIEBwcm9wZXJ0eSB7RXZlbnRUYXJnZXRbXX0gW2hhbmRsZWRGb3JdXG4gICAqL1xuXG4gIC8qKlxuICAgKiBnZXRJbnRlcm5hbERhdGEgcmV0cmlldmVzIFwicHJpdmF0ZVwiIGRhdGEgc3RvcmVkIGJ5IGh0bXggd2l0aGluIGFuIGVsZW1lbnRcbiAgICogQHBhcmFtIHtFdmVudFRhcmdldHxFdmVudH0gZWx0XG4gICAqIEByZXR1cm5zIHtIdG14Tm9kZUludGVybmFsRGF0YX1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEludGVybmFsRGF0YShlbHQpIHtcbiAgICBjb25zdCBkYXRhUHJvcCA9ICdodG14LWludGVybmFsLWRhdGEnXG4gICAgbGV0IGRhdGEgPSBlbHRbZGF0YVByb3BdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBkYXRhID0gZWx0W2RhdGFQcm9wXSA9IHt9XG4gICAgfVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICAvKipcbiAgICogdG9BcnJheSBjb252ZXJ0cyBhbiBBcnJheUxpa2Ugb2JqZWN0IGludG8gYSByZWFsIGFycmF5LlxuICAgKiBAdGVtcGxhdGUgVFxuICAgKiBAcGFyYW0ge0FycmF5TGlrZTxUPn0gYXJyXG4gICAqIEByZXR1cm5zIHtUW119XG4gICAqL1xuICBmdW5jdGlvbiB0b0FycmF5KGFycikge1xuICAgIGNvbnN0IHJldHVybkFyciA9IFtdXG4gICAgaWYgKGFycikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmV0dXJuQXJyLnB1c2goYXJyW2ldKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuQXJyXG4gIH1cblxuICAvKipcbiAgICogQHRlbXBsYXRlIFRcbiAgICogQHBhcmFtIHtUW118TmFtZWROb2RlTWFwfEhUTUxDb2xsZWN0aW9ufEhUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9ufEFycmF5TGlrZTxUPn0gYXJyXG4gICAqIEBwYXJhbSB7KFQpID0+IHZvaWR9IGZ1bmNcbiAgICovXG4gIGZ1bmN0aW9uIGZvckVhY2goYXJyLCBmdW5jKSB7XG4gICAgaWYgKGFycikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZnVuYyhhcnJbaV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc1Njcm9sbGVkSW50b1ZpZXcoZWwpIHtcbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBlbGVtVG9wID0gcmVjdC50b3BcbiAgICBjb25zdCBlbGVtQm90dG9tID0gcmVjdC5ib3R0b21cbiAgICByZXR1cm4gZWxlbVRvcCA8IHdpbmRvdy5pbm5lckhlaWdodCAmJiBlbGVtQm90dG9tID49IDBcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IGVsdFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGJvZHlDb250YWlucyhlbHQpIHtcbiAgICAvLyBJRSBGaXhcbiAgICBjb25zdCByb290Tm9kZSA9IGVsdC5nZXRSb290Tm9kZSAmJiBlbHQuZ2V0Um9vdE5vZGUoKVxuICAgIGlmIChyb290Tm9kZSAmJiByb290Tm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5TaGFkb3dSb290KSB7XG4gICAgICByZXR1cm4gZ2V0RG9jdW1lbnQoKS5ib2R5LmNvbnRhaW5zKHJvb3ROb2RlLmhvc3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXREb2N1bWVudCgpLmJvZHkuY29udGFpbnMoZWx0KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHJpZ2dlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBmdW5jdGlvbiBzcGxpdE9uV2hpdGVzcGFjZSh0cmlnZ2VyKSB7XG4gICAgcmV0dXJuIHRyaWdnZXIudHJpbSgpLnNwbGl0KC9cXHMrLylcbiAgfVxuXG4gIC8qKlxuICAgKiBtZXJnZU9iamVjdHMgdGFrZXMgYWxsIHRoZSBrZXlzIGZyb21cbiAgICogb2JqMiBhbmQgZHVwbGljYXRlcyB0aGVtIGludG8gb2JqMVxuICAgKiBAdGVtcGxhdGUgVDFcbiAgICogQHRlbXBsYXRlIFQyXG4gICAqIEBwYXJhbSB7VDF9IG9iajFcbiAgICogQHBhcmFtIHtUMn0gb2JqMlxuICAgKiBAcmV0dXJucyB7VDEgJiBUMn1cbiAgICovXG4gIGZ1bmN0aW9uIG1lcmdlT2JqZWN0cyhvYmoxLCBvYmoyKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqMikge1xuICAgICAgaWYgKG9iajIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlIHRzYyBkb2Vzbid0IHNlZW0gdG8gcHJvcGVybHkgaGFuZGxlIHR5cGVzIG1lcmdpbmdcbiAgICAgICAgb2JqMVtrZXldID0gb2JqMltrZXldXG4gICAgICB9XG4gICAgfVxuICAgIC8vIEB0cy1pZ25vcmUgdHNjIGRvZXNuJ3Qgc2VlbSB0byBwcm9wZXJseSBoYW5kbGUgdHlwZXMgbWVyZ2luZ1xuICAgIHJldHVybiBvYmoxXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGpTdHJpbmdcbiAgICogQHJldHVybnMge2FueXxudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VKU09OKGpTdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoalN0cmluZylcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nRXJyb3IoZXJyb3IpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGNhbkFjY2Vzc0xvY2FsU3RvcmFnZSgpIHtcbiAgICBjb25zdCB0ZXN0ID0gJ2h0bXg6bG9jYWxTdG9yYWdlVGVzdCdcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGVzdCwgdGVzdClcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRlc3QpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gbm9ybWFsaXplUGF0aChwYXRoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocGF0aClcbiAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgcGF0aCA9IHVybC5wYXRobmFtZSArIHVybC5zZWFyY2hcbiAgICAgIH1cbiAgICAgIC8vIHJlbW92ZSB0cmFpbGluZyBzbGFzaCwgdW5sZXNzIGluZGV4IHBhZ2VcbiAgICAgIGlmICghKC9eXFwvJC8udGVzdChwYXRoKSkpIHtcbiAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvKyQvLCAnJylcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXRoXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gYmUga2luZCB0byBJRTExLCB3aGljaCBkb2Vzbid0IHN1cHBvcnQgVVJMKClcbiAgICAgIHJldHVybiBwYXRoXG4gICAgfVxuICB9XG5cbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIHB1YmxpYyBBUElcbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge2FueX1cbiAgICovXG4gIGZ1bmN0aW9uIGludGVybmFsRXZhbChzdHIpIHtcbiAgICByZXR1cm4gbWF5YmVFdmFsKGdldERvY3VtZW50KCkuYm9keSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXZhbChzdHIpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2FsbGJhY2sgZm9yIHRoZSAqKmh0bXg6bG9hZCoqIGV2ZW50LiBUaGlzIGNhbiBiZSB1c2VkIHRvIHByb2Nlc3MgbmV3IGNvbnRlbnQsIGZvciBleGFtcGxlIGluaXRpYWxpemluZyB0aGUgY29udGVudCB3aXRoIGEgamF2YXNjcmlwdCBsaWJyYXJ5XG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI29uTG9hZFxuICAgKlxuICAgKiBAcGFyYW0geyhlbHQ6IE5vZGUpID0+IHZvaWR9IGNhbGxiYWNrIHRoZSBjYWxsYmFjayB0byBjYWxsIG9uIG5ld2x5IGxvYWRlZCBjb250ZW50XG4gICAqIEByZXR1cm5zIHtFdmVudExpc3RlbmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gb25Mb2FkSGVscGVyKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmFsdWUgPSBodG14Lm9uKCdodG14OmxvYWQnLCAvKiogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZ0ICovIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgY2FsbGJhY2soZXZ0LmRldGFpbC5lbHQpXG4gICAgfSlcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgYWxsIGh0bXggZXZlbnRzLCB1c2VmdWwgZm9yIGRlYnVnZ2luZy5cbiAgICpcbiAgICogQHNlZSBodHRwczovL2h0bXgub3JnL2FwaS8jbG9nQWxsXG4gICAqL1xuICBmdW5jdGlvbiBsb2dBbGwoKSB7XG4gICAgaHRteC5sb2dnZXIgPSBmdW5jdGlvbihlbHQsIGV2ZW50LCBkYXRhKSB7XG4gICAgICBpZiAoY29uc29sZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCwgZWx0LCBkYXRhKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxvZ05vbmUoKSB7XG4gICAgaHRteC5sb2dnZXIgPSBudWxsXG4gIH1cblxuICAvKipcbiAgICogRmluZHMgYW4gZWxlbWVudCBtYXRjaGluZyB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHNlZSBodHRwczovL2h0bXgub3JnL2FwaS8jZmluZFxuICAgKlxuICAgKiBAcGFyYW0ge1BhcmVudE5vZGV8c3RyaW5nfSBlbHRPclNlbGVjdG9yICB0aGUgcm9vdCBlbGVtZW50IHRvIGZpbmQgdGhlIG1hdGNoaW5nIGVsZW1lbnQgaW4sIGluY2x1c2l2ZSB8IHRoZSBzZWxlY3RvciB0byBtYXRjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yXSB0aGUgc2VsZWN0b3IgdG8gbWF0Y2hcbiAgICogQHJldHVybnMge0VsZW1lbnR8bnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIGZpbmQoZWx0T3JTZWxlY3Rvciwgc2VsZWN0b3IpIHtcbiAgICBpZiAodHlwZW9mIGVsdE9yU2VsZWN0b3IgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZWx0T3JTZWxlY3Rvci5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmluZChnZXREb2N1bWVudCgpLCBlbHRPclNlbGVjdG9yKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyBhbGwgZWxlbWVudHMgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI2ZpbmRBbGxcbiAgICpcbiAgICogQHBhcmFtIHtQYXJlbnROb2RlfHN0cmluZ30gZWx0T3JTZWxlY3RvciB0aGUgcm9vdCBlbGVtZW50IHRvIGZpbmQgdGhlIG1hdGNoaW5nIGVsZW1lbnRzIGluLCBpbmNsdXNpdmUgfCB0aGUgc2VsZWN0b3IgdG8gbWF0Y2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcl0gdGhlIHNlbGVjdG9yIHRvIG1hdGNoXG4gICAqIEByZXR1cm5zIHtOb2RlTGlzdE9mPEVsZW1lbnQ+fVxuICAgKi9cbiAgZnVuY3Rpb24gZmluZEFsbChlbHRPclNlbGVjdG9yLCBzZWxlY3Rvcikge1xuICAgIGlmICh0eXBlb2YgZWx0T3JTZWxlY3RvciAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBlbHRPclNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmaW5kQWxsKGdldERvY3VtZW50KCksIGVsdE9yU2VsZWN0b3IpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFdpbmRvd1xuICAgKi9cbiAgZnVuY3Rpb24gZ2V0V2luZG93KCkge1xuICAgIHJldHVybiB3aW5kb3dcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGVsZW1lbnQgZnJvbSB0aGUgRE9NXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI3JlbW92ZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IGVsdFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5XVxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbHQsIGRlbGF5KSB7XG4gICAgZWx0ID0gcmVzb2x2ZVRhcmdldChlbHQpXG4gICAgaWYgKGRlbGF5KSB7XG4gICAgICBnZXRXaW5kb3coKS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZW1vdmVFbGVtZW50KGVsdClcbiAgICAgICAgZWx0ID0gbnVsbFxuICAgICAgfSwgZGVsYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudEVsdChlbHQpLnJlbW92ZUNoaWxkKGVsdClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHthbnl9IGVsdFxuICAgKiBAcmV0dXJuIHtFbGVtZW50fG51bGx9XG4gICAqL1xuICBmdW5jdGlvbiBhc0VsZW1lbnQoZWx0KSB7XG4gICAgcmV0dXJuIGVsdCBpbnN0YW5jZW9mIEVsZW1lbnQgPyBlbHQgOiBudWxsXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHthbnl9IGVsdFxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudHxudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gYXNIdG1sRWxlbWVudChlbHQpIHtcbiAgICByZXR1cm4gZWx0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBlbHQgOiBudWxsXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAqIEByZXR1cm4ge3N0cmluZ3xudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gYXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGVsdFxuICAgKiBAcmV0dXJuIHtQYXJlbnROb2RlfG51bGx9XG4gICAqL1xuICBmdW5jdGlvbiBhc1BhcmVudE5vZGUoZWx0KSB7XG4gICAgcmV0dXJuIGVsdCBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgZWx0IGluc3RhbmNlb2YgRG9jdW1lbnQgfHwgZWx0IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCA/IGVsdCA6IG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBhZGRzIGEgY2xhc3MgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI2FkZENsYXNzXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudHxzdHJpbmd9IGVsdCB0aGUgZWxlbWVudCB0byBhZGQgdGhlIGNsYXNzIHRvXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGF6eiB0aGUgY2xhc3MgdG8gYWRkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsYXldIHRoZSBkZWxheSAoaW4gbWlsbGlzZWNvbmRzKSBiZWZvcmUgY2xhc3MgaXMgYWRkZWRcbiAgICovXG4gIGZ1bmN0aW9uIGFkZENsYXNzVG9FbGVtZW50KGVsdCwgY2xhenosIGRlbGF5KSB7XG4gICAgZWx0ID0gYXNFbGVtZW50KHJlc29sdmVUYXJnZXQoZWx0KSlcbiAgICBpZiAoIWVsdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChkZWxheSkge1xuICAgICAgZ2V0V2luZG93KCkuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgYWRkQ2xhc3NUb0VsZW1lbnQoZWx0LCBjbGF6eilcbiAgICAgICAgZWx0ID0gbnVsbFxuICAgICAgfSwgZGVsYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsdC5jbGFzc0xpc3QgJiYgZWx0LmNsYXNzTGlzdC5hZGQoY2xhenopXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBjbGFzcyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50XG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI3JlbW92ZUNsYXNzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZXxzdHJpbmd9IG5vZGUgZWxlbWVudCB0byByZW1vdmUgdGhlIGNsYXNzIGZyb21cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXp6IHRoZSBjbGFzcyB0byByZW1vdmVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWxheV0gdGhlIGRlbGF5IChpbiBtaWxsaXNlY29uZHMgYmVmb3JlIGNsYXNzIGlzIHJlbW92ZWQpXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVDbGFzc0Zyb21FbGVtZW50KG5vZGUsIGNsYXp6LCBkZWxheSkge1xuICAgIGxldCBlbHQgPSBhc0VsZW1lbnQocmVzb2x2ZVRhcmdldChub2RlKSlcbiAgICBpZiAoIWVsdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChkZWxheSkge1xuICAgICAgZ2V0V2luZG93KCkuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3NGcm9tRWxlbWVudChlbHQsIGNsYXp6KVxuICAgICAgICBlbHQgPSBudWxsXG4gICAgICB9LCBkZWxheSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsdC5jbGFzc0xpc3QpIHtcbiAgICAgICAgZWx0LmNsYXNzTGlzdC5yZW1vdmUoY2xhenopXG4gICAgICAgIC8vIGlmIHRoZXJlIGFyZSBubyBjbGFzc2VzIGxlZnQsIHJlbW92ZSB0aGUgY2xhc3MgYXR0cmlidXRlXG4gICAgICAgIGlmIChlbHQuY2xhc3NMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGVsdC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBnaXZlbiBjbGFzcyBvbiBhbiBlbGVtZW50XG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI3RvZ2dsZUNsYXNzXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudHxzdHJpbmd9IGVsdCB0aGUgZWxlbWVudCB0byB0b2dnbGUgdGhlIGNsYXNzIG9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGF6eiB0aGUgY2xhc3MgdG8gdG9nZ2xlXG4gICAqL1xuICBmdW5jdGlvbiB0b2dnbGVDbGFzc09uRWxlbWVudChlbHQsIGNsYXp6KSB7XG4gICAgZWx0ID0gcmVzb2x2ZVRhcmdldChlbHQpXG4gICAgZWx0LmNsYXNzTGlzdC50b2dnbGUoY2xhenopXG4gIH1cblxuICAvKipcbiAgICogVGFrZXMgdGhlIGdpdmVuIGNsYXNzIGZyb20gaXRzIHNpYmxpbmdzLCBzbyB0aGF0IGFtb25nIGl0cyBzaWJsaW5ncywgb25seSB0aGUgZ2l2ZW4gZWxlbWVudCB3aWxsIGhhdmUgdGhlIGNsYXNzLlxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyN0YWtlQ2xhc3NcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfHN0cmluZ30gZWx0IHRoZSBlbGVtZW50IHRoYXQgd2lsbCB0YWtlIHRoZSBjbGFzc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhenogdGhlIGNsYXNzIHRvIHRha2VcbiAgICovXG4gIGZ1bmN0aW9uIHRha2VDbGFzc0ZvckVsZW1lbnQoZWx0LCBjbGF6eikge1xuICAgIGVsdCA9IHJlc29sdmVUYXJnZXQoZWx0KVxuICAgIGZvckVhY2goZWx0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW4sIGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICByZW1vdmVDbGFzc0Zyb21FbGVtZW50KGNoaWxkLCBjbGF6eilcbiAgICB9KVxuICAgIGFkZENsYXNzVG9FbGVtZW50KGFzRWxlbWVudChlbHQpLCBjbGF6eilcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyB0aGUgY2xvc2VzdCBtYXRjaGluZyBlbGVtZW50IGluIHRoZSBnaXZlbiBlbGVtZW50cyBwYXJlbnRhZ2UsIGluY2x1c2l2ZSBvZiB0aGUgZWxlbWVudFxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNjbG9zZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudHxzdHJpbmd9IGVsdCB0aGUgZWxlbWVudCB0byBmaW5kIHRoZSBzZWxlY3RvciBmcm9tXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgc2VsZWN0b3IgdG8gZmluZFxuICAgKiBAcmV0dXJucyB7RWxlbWVudHxudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gY2xvc2VzdChlbHQsIHNlbGVjdG9yKSB7XG4gICAgZWx0ID0gYXNFbGVtZW50KHJlc29sdmVUYXJnZXQoZWx0KSlcbiAgICBpZiAoZWx0ICYmIGVsdC5jbG9zZXN0KSB7XG4gICAgICByZXR1cm4gZWx0LmNsb3Nlc3Qoc2VsZWN0b3IpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE8gcmVtb3ZlIHdoZW4gSUUgZ29lcyBhd2F5XG4gICAgICBkbyB7XG4gICAgICAgIGlmIChlbHQgPT0gbnVsbCB8fCBtYXRjaGVzKGVsdCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3aGlsZSAoZWx0ID0gZWx0ICYmIGFzRWxlbWVudChwYXJlbnRFbHQoZWx0KSkpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBzdGFydHNXaXRoKHN0ciwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgcHJlZml4Lmxlbmd0aCkgPT09IHByZWZpeFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN1ZmZpeFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGVuZHNXaXRoKHN0ciwgc3VmZml4KSB7XG4gICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoc3RyLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpID09PSBzdWZmaXhcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgdHJpbW1lZFNlbGVjdG9yID0gc2VsZWN0b3IudHJpbSgpXG4gICAgaWYgKHN0YXJ0c1dpdGgodHJpbW1lZFNlbGVjdG9yLCAnPCcpICYmIGVuZHNXaXRoKHRyaW1tZWRTZWxlY3RvciwgJy8+JykpIHtcbiAgICAgIHJldHVybiB0cmltbWVkU2VsZWN0b3Iuc3Vic3RyaW5nKDEsIHRyaW1tZWRTZWxlY3Rvci5sZW5ndGggLSAyKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJpbW1lZFNlbGVjdG9yXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZXxFbGVtZW50fERvY3VtZW50fHN0cmluZ30gZWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBnbG9iYWxcbiAgICogQHJldHVybnMgeyhOb2RlfFdpbmRvdylbXX1cbiAgICovXG4gIGZ1bmN0aW9uIHF1ZXJ5U2VsZWN0b3JBbGxFeHQoZWx0LCBzZWxlY3RvciwgZ2xvYmFsKSB7XG4gICAgZWx0ID0gcmVzb2x2ZVRhcmdldChlbHQpXG4gICAgaWYgKHNlbGVjdG9yLmluZGV4T2YoJ2Nsb3Nlc3QgJykgPT09IDApIHtcbiAgICAgIHJldHVybiBbY2xvc2VzdChhc0VsZW1lbnQoZWx0KSwgbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3Iuc3Vic3RyKDgpKSldXG4gICAgfSBlbHNlIGlmIChzZWxlY3Rvci5pbmRleE9mKCdmaW5kICcpID09PSAwKSB7XG4gICAgICByZXR1cm4gW2ZpbmQoYXNQYXJlbnROb2RlKGVsdCksIG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yLnN1YnN0cig1KSkpXVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IgPT09ICduZXh0Jykge1xuICAgICAgcmV0dXJuIFthc0VsZW1lbnQoZWx0KS5uZXh0RWxlbWVudFNpYmxpbmddXG4gICAgfSBlbHNlIGlmIChzZWxlY3Rvci5pbmRleE9mKCduZXh0ICcpID09PSAwKSB7XG4gICAgICByZXR1cm4gW3NjYW5Gb3J3YXJkUXVlcnkoZWx0LCBub3JtYWxpemVTZWxlY3RvcihzZWxlY3Rvci5zdWJzdHIoNSkpLCAhIWdsb2JhbCldXG4gICAgfSBlbHNlIGlmIChzZWxlY3RvciA9PT0gJ3ByZXZpb3VzJykge1xuICAgICAgcmV0dXJuIFthc0VsZW1lbnQoZWx0KS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IuaW5kZXhPZigncHJldmlvdXMgJykgPT09IDApIHtcbiAgICAgIHJldHVybiBbc2NhbkJhY2t3YXJkc1F1ZXJ5KGVsdCwgbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3Iuc3Vic3RyKDkpKSwgISFnbG9iYWwpXVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IgPT09ICdkb2N1bWVudCcpIHtcbiAgICAgIHJldHVybiBbZG9jdW1lbnRdXG4gICAgfSBlbHNlIGlmIChzZWxlY3RvciA9PT0gJ3dpbmRvdycpIHtcbiAgICAgIHJldHVybiBbd2luZG93XVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IgPT09ICdib2R5Jykge1xuICAgICAgcmV0dXJuIFtkb2N1bWVudC5ib2R5XVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IgPT09ICdyb290Jykge1xuICAgICAgcmV0dXJuIFtnZXRSb290Tm9kZShlbHQsICEhZ2xvYmFsKV1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yLmluZGV4T2YoJ2dsb2JhbCAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHF1ZXJ5U2VsZWN0b3JBbGxFeHQoZWx0LCBzZWxlY3Rvci5zbGljZSg3KSwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRvQXJyYXkoYXNQYXJlbnROb2RlKGdldFJvb3ROb2RlKGVsdCwgISFnbG9iYWwpKS5xdWVyeVNlbGVjdG9yQWxsKG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yKSkpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gc3RhcnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGNoXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZ2xvYmFsXG4gICAqIEByZXR1cm5zIHtFbGVtZW50fVxuICAgKi9cbiAgdmFyIHNjYW5Gb3J3YXJkUXVlcnkgPSBmdW5jdGlvbihzdGFydCwgbWF0Y2gsIGdsb2JhbCkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhc1BhcmVudE5vZGUoZ2V0Um9vdE5vZGUoc3RhcnQsIGdsb2JhbCkpLnF1ZXJ5U2VsZWN0b3JBbGwobWF0Y2gpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbHQgPSByZXN1bHRzW2ldXG4gICAgICBpZiAoZWx0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHN0YXJ0KSA9PT0gTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9QUkVDRURJTkcpIHtcbiAgICAgICAgcmV0dXJuIGVsdFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IHN0YXJ0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRjaFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGdsb2JhbFxuICAgKiBAcmV0dXJucyB7RWxlbWVudH1cbiAgICovXG4gIHZhciBzY2FuQmFja3dhcmRzUXVlcnkgPSBmdW5jdGlvbihzdGFydCwgbWF0Y2gsIGdsb2JhbCkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhc1BhcmVudE5vZGUoZ2V0Um9vdE5vZGUoc3RhcnQsIGdsb2JhbCkpLnF1ZXJ5U2VsZWN0b3JBbGwobWF0Y2gpXG4gICAgZm9yIChsZXQgaSA9IHJlc3VsdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGVsdCA9IHJlc3VsdHNbaV1cbiAgICAgIGlmIChlbHQuY29tcGFyZURvY3VtZW50UG9zaXRpb24oc3RhcnQpID09PSBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORykge1xuICAgICAgICByZXR1cm4gZWx0XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZXxzdHJpbmd9IGVsdE9yU2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7Tm9kZXxXaW5kb3d9XG4gICAqL1xuICBmdW5jdGlvbiBxdWVyeVNlbGVjdG9yRXh0KGVsdE9yU2VsZWN0b3IsIHNlbGVjdG9yKSB7XG4gICAgaWYgKHR5cGVvZiBlbHRPclNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHF1ZXJ5U2VsZWN0b3JBbGxFeHQoZWx0T3JTZWxlY3Rvciwgc2VsZWN0b3IpWzBdXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBxdWVyeVNlbGVjdG9yQWxsRXh0KGdldERvY3VtZW50KCkuYm9keSwgZWx0T3JTZWxlY3RvcilbMF1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHRlbXBsYXRlIHtFdmVudFRhcmdldH0gVFxuICAgKiBAcGFyYW0ge1R8c3RyaW5nfSBlbHRPclNlbGVjdG9yXG4gICAqIEBwYXJhbSB7VH0gW2NvbnRleHRdXG4gICAqIEByZXR1cm5zIHtFbGVtZW50fFR8bnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIHJlc29sdmVUYXJnZXQoZWx0T3JTZWxlY3RvciwgY29udGV4dCkge1xuICAgIGlmICh0eXBlb2YgZWx0T3JTZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBmaW5kKGFzUGFyZW50Tm9kZShjb250ZXh0KSB8fCBkb2N1bWVudCwgZWx0T3JTZWxlY3RvcilcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsdE9yU2VsZWN0b3JcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHR5cGVkZWYge2tleW9mIEhUTUxFbGVtZW50RXZlbnRNYXB8c3RyaW5nfSBBbnlFdmVudE5hbWVcbiAgICovXG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IEV2ZW50QXJnc1xuICAgKiBAcHJvcGVydHkge0V2ZW50VGFyZ2V0fSB0YXJnZXRcbiAgICogQHByb3BlcnR5IHtBbnlFdmVudE5hbWV9IGV2ZW50XG4gICAqIEBwcm9wZXJ0eSB7RXZlbnRMaXN0ZW5lcn0gbGlzdGVuZXJcbiAgICovXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8QW55RXZlbnROYW1lfSBhcmcxXG4gICAqIEBwYXJhbSB7QW55RXZlbnROYW1lfEV2ZW50TGlzdGVuZXJ9IGFyZzJcbiAgICogQHBhcmFtIHtFdmVudExpc3RlbmVyfSBbYXJnM11cbiAgICogQHJldHVybnMge0V2ZW50QXJnc31cbiAgICovXG4gIGZ1bmN0aW9uIHByb2Nlc3NFdmVudEFyZ3MoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGFyZzIpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0YXJnZXQ6IGdldERvY3VtZW50KCkuYm9keSxcbiAgICAgICAgZXZlbnQ6IGFzU3RyaW5nKGFyZzEpLFxuICAgICAgICBsaXN0ZW5lcjogYXJnMlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0YXJnZXQ6IHJlc29sdmVUYXJnZXQoYXJnMSksXG4gICAgICAgIGV2ZW50OiBhc1N0cmluZyhhcmcyKSxcbiAgICAgICAgbGlzdGVuZXI6IGFyZzNcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciB0byBhbiBlbGVtZW50XG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI29uXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8c3RyaW5nfSBhcmcxIHRoZSBlbGVtZW50IHRvIGFkZCB0aGUgbGlzdGVuZXIgdG8gfCB0aGUgZXZlbnQgbmFtZSB0byBhZGQgdGhlIGxpc3RlbmVyIGZvclxuICAgKiBAcGFyYW0ge3N0cmluZ3xFdmVudExpc3RlbmVyfSBhcmcyIHRoZSBldmVudCBuYW1lIHRvIGFkZCB0aGUgbGlzdGVuZXIgZm9yIHwgdGhlIGxpc3RlbmVyIHRvIGFkZFxuICAgKiBAcGFyYW0ge0V2ZW50TGlzdGVuZXJ9IFthcmczXSB0aGUgbGlzdGVuZXIgdG8gYWRkXG4gICAqIEByZXR1cm5zIHtFdmVudExpc3RlbmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lckltcGwoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIHJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgZXZlbnRBcmdzID0gcHJvY2Vzc0V2ZW50QXJncyhhcmcxLCBhcmcyLCBhcmczKVxuICAgICAgZXZlbnRBcmdzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50QXJncy5ldmVudCwgZXZlbnRBcmdzLmxpc3RlbmVyKVxuICAgIH0pXG4gICAgY29uc3QgYiA9IGlzRnVuY3Rpb24oYXJnMilcbiAgICByZXR1cm4gYiA/IGFyZzIgOiBhcmczXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBldmVudCBsaXN0ZW5lciBmcm9tIGFuIGVsZW1lbnRcbiAgICpcbiAgICogQHNlZSBodHRwczovL2h0bXgub3JnL2FwaS8jb2ZmXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8c3RyaW5nfSBhcmcxIHRoZSBlbGVtZW50IHRvIHJlbW92ZSB0aGUgbGlzdGVuZXIgZnJvbSB8IHRoZSBldmVudCBuYW1lIHRvIHJlbW92ZSB0aGUgbGlzdGVuZXIgZnJvbVxuICAgKiBAcGFyYW0ge3N0cmluZ3xFdmVudExpc3RlbmVyfSBhcmcyIHRoZSBldmVudCBuYW1lIHRvIHJlbW92ZSB0aGUgbGlzdGVuZXIgZnJvbSB8IHRoZSBsaXN0ZW5lciB0byByZW1vdmVcbiAgICogQHBhcmFtIHtFdmVudExpc3RlbmVyfSBbYXJnM10gdGhlIGxpc3RlbmVyIHRvIHJlbW92ZVxuICAgKiBAcmV0dXJucyB7RXZlbnRMaXN0ZW5lcn1cbiAgICovXG4gIGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJJbXBsKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICByZWFkeShmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGV2ZW50QXJncyA9IHByb2Nlc3NFdmVudEFyZ3MoYXJnMSwgYXJnMiwgYXJnMylcbiAgICAgIGV2ZW50QXJncy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudEFyZ3MuZXZlbnQsIGV2ZW50QXJncy5saXN0ZW5lcilcbiAgICB9KVxuICAgIHJldHVybiBpc0Z1bmN0aW9uKGFyZzIpID8gYXJnMiA6IGFyZzNcbiAgfVxuXG4gIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIE5vZGUgcHJvY2Vzc2luZ1xuICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGNvbnN0IERVTU1ZX0VMVCA9IGdldERvY3VtZW50KCkuY3JlYXRlRWxlbWVudCgnb3V0cHV0JykgLy8gZHVtbXkgZWxlbWVudCBmb3IgYmFkIHNlbGVjdG9yc1xuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJOYW1lXG4gICAqIEByZXR1cm5zIHsoTm9kZXxXaW5kb3cpW119XG4gICAqL1xuICBmdW5jdGlvbiBmaW5kQXR0cmlidXRlVGFyZ2V0cyhlbHQsIGF0dHJOYW1lKSB7XG4gICAgY29uc3QgYXR0clRhcmdldCA9IGdldENsb3Nlc3RBdHRyaWJ1dGVWYWx1ZShlbHQsIGF0dHJOYW1lKVxuICAgIGlmIChhdHRyVGFyZ2V0KSB7XG4gICAgICBpZiAoYXR0clRhcmdldCA9PT0gJ3RoaXMnKSB7XG4gICAgICAgIHJldHVybiBbZmluZFRoaXNFbGVtZW50KGVsdCwgYXR0ck5hbWUpXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcXVlcnlTZWxlY3RvckFsbEV4dChlbHQsIGF0dHJUYXJnZXQpXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgbG9nRXJyb3IoJ1RoZSBzZWxlY3RvciBcIicgKyBhdHRyVGFyZ2V0ICsgJ1wiIG9uICcgKyBhdHRyTmFtZSArICcgcmV0dXJuZWQgbm8gbWF0Y2hlcyEnKVxuICAgICAgICAgIHJldHVybiBbRFVNTVlfRUxUXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlXG4gICAqIEByZXR1cm5zIHtFbGVtZW50fG51bGx9XG4gICAqL1xuICBmdW5jdGlvbiBmaW5kVGhpc0VsZW1lbnQoZWx0LCBhdHRyaWJ1dGUpIHtcbiAgICByZXR1cm4gYXNFbGVtZW50KGdldENsb3Nlc3RNYXRjaChlbHQsIGZ1bmN0aW9uKGVsdCkge1xuICAgICAgcmV0dXJuIGdldEF0dHJpYnV0ZVZhbHVlKGFzRWxlbWVudChlbHQpLCBhdHRyaWJ1dGUpICE9IG51bGxcbiAgICB9KSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcmV0dXJucyB7Tm9kZXxXaW5kb3d8bnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldFRhcmdldChlbHQpIHtcbiAgICBjb25zdCB0YXJnZXRTdHIgPSBnZXRDbG9zZXN0QXR0cmlidXRlVmFsdWUoZWx0LCAnaHgtdGFyZ2V0JylcbiAgICBpZiAodGFyZ2V0U3RyKSB7XG4gICAgICBpZiAodGFyZ2V0U3RyID09PSAndGhpcycpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRUaGlzRWxlbWVudChlbHQsICdoeC10YXJnZXQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5U2VsZWN0b3JFeHQoZWx0LCB0YXJnZXRTdHIpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBnZXRJbnRlcm5hbERhdGEoZWx0KVxuICAgICAgaWYgKGRhdGEuYm9vc3RlZCkge1xuICAgICAgICByZXR1cm4gZ2V0RG9jdW1lbnQoKS5ib2R5XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZWx0XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gc2hvdWxkU2V0dGxlQXR0cmlidXRlKG5hbWUpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVzVG9TZXR0bGUgPSBodG14LmNvbmZpZy5hdHRyaWJ1dGVzVG9TZXR0bGVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZXNUb1NldHRsZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG5hbWUgPT09IGF0dHJpYnV0ZXNUb1NldHRsZVtpXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IG1lcmdlVG9cbiAgICogQHBhcmFtIHtFbGVtZW50fSBtZXJnZUZyb21cbiAgICovXG4gIGZ1bmN0aW9uIGNsb25lQXR0cmlidXRlcyhtZXJnZVRvLCBtZXJnZUZyb20pIHtcbiAgICBmb3JFYWNoKG1lcmdlVG8uYXR0cmlidXRlcywgZnVuY3Rpb24oYXR0cikge1xuICAgICAgaWYgKCFtZXJnZUZyb20uaGFzQXR0cmlidXRlKGF0dHIubmFtZSkgJiYgc2hvdWxkU2V0dGxlQXR0cmlidXRlKGF0dHIubmFtZSkpIHtcbiAgICAgICAgbWVyZ2VUby5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5uYW1lKVxuICAgICAgfVxuICAgIH0pXG4gICAgZm9yRWFjaChtZXJnZUZyb20uYXR0cmlidXRlcywgZnVuY3Rpb24oYXR0cikge1xuICAgICAgaWYgKHNob3VsZFNldHRsZUF0dHJpYnV0ZShhdHRyLm5hbWUpKSB7XG4gICAgICAgIG1lcmdlVG8uc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYXR0ci52YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SHRteFN3YXBTdHlsZX0gc3dhcFN0eWxlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNJbmxpbmVTd2FwKHN3YXBTdHlsZSwgdGFyZ2V0KSB7XG4gICAgY29uc3QgZXh0ZW5zaW9ucyA9IGdldEV4dGVuc2lvbnModGFyZ2V0KVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1tpXVxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbi5pc0lubGluZVN3YXAoc3dhcFN0eWxlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nRXJyb3IoZSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN3YXBTdHlsZSA9PT0gJ291dGVySFRNTCdcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb29iVmFsdWVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBvb2JFbGVtZW50XG4gICAqIEBwYXJhbSB7SHRteFNldHRsZUluZm99IHNldHRsZUluZm9cbiAgICogQHJldHVybnNcbiAgICovXG4gIGZ1bmN0aW9uIG9vYlN3YXAob29iVmFsdWUsIG9vYkVsZW1lbnQsIHNldHRsZUluZm8pIHtcbiAgICBsZXQgc2VsZWN0b3IgPSAnIycgKyBnZXRSYXdBdHRyaWJ1dGUob29iRWxlbWVudCwgJ2lkJylcbiAgICAvKiogQHR5cGUgSHRteFN3YXBTdHlsZSAqL1xuICAgIGxldCBzd2FwU3R5bGUgPSAnb3V0ZXJIVE1MJ1xuICAgIGlmIChvb2JWYWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAvLyBkbyBub3RoaW5nXG4gICAgfSBlbHNlIGlmIChvb2JWYWx1ZS5pbmRleE9mKCc6JykgPiAwKSB7XG4gICAgICBzd2FwU3R5bGUgPSBvb2JWYWx1ZS5zdWJzdHIoMCwgb29iVmFsdWUuaW5kZXhPZignOicpKVxuICAgICAgc2VsZWN0b3IgPSBvb2JWYWx1ZS5zdWJzdHIob29iVmFsdWUuaW5kZXhPZignOicpICsgMSwgb29iVmFsdWUubGVuZ3RoKVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2FwU3R5bGUgPSBvb2JWYWx1ZVxuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldHMgPSBnZXREb2N1bWVudCgpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgaWYgKHRhcmdldHMpIHtcbiAgICAgIGZvckVhY2goXG4gICAgICAgIHRhcmdldHMsXG4gICAgICAgIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgIGxldCBmcmFnbWVudFxuICAgICAgICAgIGNvbnN0IG9vYkVsZW1lbnRDbG9uZSA9IG9vYkVsZW1lbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgZnJhZ21lbnQgPSBnZXREb2N1bWVudCgpLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG9vYkVsZW1lbnRDbG9uZSlcbiAgICAgICAgICBpZiAoIWlzSW5saW5lU3dhcChzd2FwU3R5bGUsIHRhcmdldCkpIHtcbiAgICAgICAgICAgIGZyYWdtZW50ID0gYXNQYXJlbnROb2RlKG9vYkVsZW1lbnRDbG9uZSkgLy8gaWYgdGhpcyBpcyBub3QgYW4gaW5saW5lIHN3YXAsIHdlIHVzZSB0aGUgY29udGVudCBvZiB0aGUgbm9kZSwgbm90IHRoZSBub2RlIGl0c2VsZlxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGJlZm9yZVN3YXBEZXRhaWxzID0geyBzaG91bGRTd2FwOiB0cnVlLCB0YXJnZXQsIGZyYWdtZW50IH1cbiAgICAgICAgICBpZiAoIXRyaWdnZXJFdmVudCh0YXJnZXQsICdodG14Om9vYkJlZm9yZVN3YXAnLCBiZWZvcmVTd2FwRGV0YWlscykpIHJldHVyblxuXG4gICAgICAgICAgdGFyZ2V0ID0gYmVmb3JlU3dhcERldGFpbHMudGFyZ2V0IC8vIGFsbG93IHJlLXRhcmdldGluZ1xuICAgICAgICAgIGlmIChiZWZvcmVTd2FwRGV0YWlscy5zaG91bGRTd2FwKSB7XG4gICAgICAgICAgICBzd2FwV2l0aFN0eWxlKHN3YXBTdHlsZSwgdGFyZ2V0LCB0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JFYWNoKHNldHRsZUluZm8uZWx0cywgZnVuY3Rpb24oZWx0KSB7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDpvb2JBZnRlclN3YXAnLCBiZWZvcmVTd2FwRGV0YWlscylcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICApXG4gICAgICBvb2JFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob29iRWxlbWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgb29iRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9vYkVsZW1lbnQpXG4gICAgICB0cmlnZ2VyRXJyb3JFdmVudChnZXREb2N1bWVudCgpLmJvZHksICdodG14Om9vYkVycm9yTm9UYXJnZXQnLCB7IGNvbnRlbnQ6IG9vYkVsZW1lbnQgfSlcbiAgICB9XG4gICAgcmV0dXJuIG9vYlZhbHVlXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSBmcmFnbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlUHJlc2VydmVkRWxlbWVudHMoZnJhZ21lbnQpIHtcbiAgICBmb3JFYWNoKGZpbmRBbGwoZnJhZ21lbnQsICdbaHgtcHJlc2VydmVdLCBbZGF0YS1oeC1wcmVzZXJ2ZV0nKSwgZnVuY3Rpb24ocHJlc2VydmVkRWx0KSB7XG4gICAgICBjb25zdCBpZCA9IGdldEF0dHJpYnV0ZVZhbHVlKHByZXNlcnZlZEVsdCwgJ2lkJylcbiAgICAgIGNvbnN0IG9sZEVsdCA9IGdldERvY3VtZW50KCkuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgICBpZiAob2xkRWx0ICE9IG51bGwpIHtcbiAgICAgICAgcHJlc2VydmVkRWx0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG9sZEVsdCwgcHJlc2VydmVkRWx0KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBwYXJlbnROb2RlXG4gICAqIEBwYXJhbSB7UGFyZW50Tm9kZX0gZnJhZ21lbnRcbiAgICogQHBhcmFtIHtIdG14U2V0dGxlSW5mb30gc2V0dGxlSW5mb1xuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlQXR0cmlidXRlcyhwYXJlbnROb2RlLCBmcmFnbWVudCwgc2V0dGxlSW5mbykge1xuICAgIGZvckVhY2goZnJhZ21lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXScpLCBmdW5jdGlvbihuZXdOb2RlKSB7XG4gICAgICBjb25zdCBpZCA9IGdldFJhd0F0dHJpYnV0ZShuZXdOb2RlLCAnaWQnKVxuICAgICAgaWYgKGlkICYmIGlkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZElkID0gaWQucmVwbGFjZShcIidcIiwgXCJcXFxcJ1wiKVxuICAgICAgICBjb25zdCBub3JtYWxpemVkVGFnID0gbmV3Tm9kZS50YWdOYW1lLnJlcGxhY2UoJzonLCAnXFxcXDonKVxuICAgICAgICBjb25zdCBwYXJlbnRFbHQgPSBhc1BhcmVudE5vZGUocGFyZW50Tm9kZSlcbiAgICAgICAgY29uc3Qgb2xkTm9kZSA9IHBhcmVudEVsdCAmJiBwYXJlbnRFbHQucXVlcnlTZWxlY3Rvcihub3JtYWxpemVkVGFnICsgXCJbaWQ9J1wiICsgbm9ybWFsaXplZElkICsgXCInXVwiKVxuICAgICAgICBpZiAob2xkTm9kZSAmJiBvbGROb2RlICE9PSBwYXJlbnRFbHQpIHtcbiAgICAgICAgICBjb25zdCBuZXdBdHRyaWJ1dGVzID0gbmV3Tm9kZS5jbG9uZU5vZGUoKVxuICAgICAgICAgIGNsb25lQXR0cmlidXRlcyhuZXdOb2RlLCBvbGROb2RlKVxuICAgICAgICAgIHNldHRsZUluZm8udGFza3MucHVzaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNsb25lQXR0cmlidXRlcyhuZXdOb2RlLCBuZXdBdHRyaWJ1dGVzKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gY2hpbGRcbiAgICogQHJldHVybnMge0h0bXhTZXR0bGVUYXNrfVxuICAgKi9cbiAgZnVuY3Rpb24gbWFrZUFqYXhMb2FkVGFzayhjaGlsZCkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoY2hpbGQsIGh0bXguY29uZmlnLmFkZGVkQ2xhc3MpXG4gICAgICBwcm9jZXNzTm9kZShhc0VsZW1lbnQoY2hpbGQpKVxuICAgICAgcHJvY2Vzc0ZvY3VzKGFzUGFyZW50Tm9kZShjaGlsZCkpXG4gICAgICB0cmlnZ2VyRXZlbnQoY2hpbGQsICdodG14OmxvYWQnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1BhcmVudE5vZGV9IGNoaWxkXG4gICAqL1xuICBmdW5jdGlvbiBwcm9jZXNzRm9jdXMoY2hpbGQpIHtcbiAgICBjb25zdCBhdXRvZm9jdXMgPSAnW2F1dG9mb2N1c10nXG4gICAgY29uc3QgYXV0b0ZvY3VzZWRFbHQgPSBhc0h0bWxFbGVtZW50KG1hdGNoZXMoY2hpbGQsIGF1dG9mb2N1cykgPyBjaGlsZCA6IGNoaWxkLnF1ZXJ5U2VsZWN0b3IoYXV0b2ZvY3VzKSlcbiAgICBpZiAoYXV0b0ZvY3VzZWRFbHQgIT0gbnVsbCkge1xuICAgICAgYXV0b0ZvY3VzZWRFbHQuZm9jdXMoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IHBhcmVudE5vZGVcbiAgICogQHBhcmFtIHtOb2RlfSBpbnNlcnRCZWZvcmVcbiAgICogQHBhcmFtIHtQYXJlbnROb2RlfSBmcmFnbWVudFxuICAgKiBAcGFyYW0ge0h0bXhTZXR0bGVJbmZvfSBzZXR0bGVJbmZvXG4gICAqL1xuICBmdW5jdGlvbiBpbnNlcnROb2Rlc0JlZm9yZShwYXJlbnROb2RlLCBpbnNlcnRCZWZvcmUsIGZyYWdtZW50LCBzZXR0bGVJbmZvKSB7XG4gICAgaGFuZGxlQXR0cmlidXRlcyhwYXJlbnROb2RlLCBmcmFnbWVudCwgc2V0dGxlSW5mbylcbiAgICB3aGlsZSAoZnJhZ21lbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IGZyYWdtZW50LmZpcnN0Q2hpbGRcbiAgICAgIGFkZENsYXNzVG9FbGVtZW50KGFzRWxlbWVudChjaGlsZCksIGh0bXguY29uZmlnLmFkZGVkQ2xhc3MpXG4gICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShjaGlsZCwgaW5zZXJ0QmVmb3JlKVxuICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSAmJiBjaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5DT01NRU5UX05PREUpIHtcbiAgICAgICAgc2V0dGxlSW5mby50YXNrcy5wdXNoKG1ha2VBamF4TG9hZFRhc2soY2hpbGQpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBiYXNlZCBvbiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9oeWFtYW1vdG8vZmQ0MzU1MDVkMjllYmZhM2Q5NzE2ZmQyYmU4ZDQyZjAsXG4gICAqIGRlcml2ZWQgZnJvbSBKYXZhJ3Mgc3RyaW5nIGhhc2hjb2RlIGltcGxlbWVudGF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhhc2hcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGZ1bmN0aW9uIHN0cmluZ0hhc2goc3RyaW5nLCBoYXNoKSB7XG4gICAgbGV0IGNoYXIgPSAwXG4gICAgd2hpbGUgKGNoYXIgPCBzdHJpbmcubGVuZ3RoKSB7XG4gICAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgc3RyaW5nLmNoYXJDb2RlQXQoY2hhcisrKSB8IDAgLy8gYml0d2lzZSBvciBlbnN1cmVzIHdlIGhhdmUgYSAzMi1iaXQgaW50XG4gICAgfVxuICAgIHJldHVybiBoYXNoXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGZ1bmN0aW9uIGF0dHJpYnV0ZUhhc2goZWx0KSB7XG4gICAgbGV0IGhhc2ggPSAwXG4gICAgLy8gSUUgZml4XG4gICAgaWYgKGVsdC5hdHRyaWJ1dGVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsdC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGVsdC5hdHRyaWJ1dGVzW2ldXG4gICAgICAgIGlmIChhdHRyaWJ1dGUudmFsdWUpIHsgLy8gb25seSBpbmNsdWRlIGF0dHJpYnV0ZXMgdy8gYWN0dWFsIHZhbHVlcyAoZW1wdHkgaXMgc2FtZSBhcyBub24tZXhpc3RlbnQpXG4gICAgICAgICAgaGFzaCA9IHN0cmluZ0hhc2goYXR0cmlidXRlLm5hbWUsIGhhc2gpXG4gICAgICAgICAgaGFzaCA9IHN0cmluZ0hhc2goYXR0cmlidXRlLnZhbHVlLCBoYXNoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBoYXNoXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFdmVudFRhcmdldH0gZWx0XG4gICAqL1xuICBmdW5jdGlvbiBkZUluaXRPbkhhbmRsZXJzKGVsdCkge1xuICAgIGNvbnN0IGludGVybmFsRGF0YSA9IGdldEludGVybmFsRGF0YShlbHQpXG4gICAgaWYgKGludGVybmFsRGF0YS5vbkhhbmRsZXJzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVybmFsRGF0YS5vbkhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJJbmZvID0gaW50ZXJuYWxEYXRhLm9uSGFuZGxlcnNbaV1cbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lckltcGwoZWx0LCBoYW5kbGVySW5mby5ldmVudCwgaGFuZGxlckluZm8ubGlzdGVuZXIpXG4gICAgICB9XG4gICAgICBkZWxldGUgaW50ZXJuYWxEYXRhLm9uSGFuZGxlcnNcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBkZUluaXROb2RlKGVsZW1lbnQpIHtcbiAgICBjb25zdCBpbnRlcm5hbERhdGEgPSBnZXRJbnRlcm5hbERhdGEoZWxlbWVudClcbiAgICBpZiAoaW50ZXJuYWxEYXRhLnRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dChpbnRlcm5hbERhdGEudGltZW91dClcbiAgICB9XG4gICAgaWYgKGludGVybmFsRGF0YS5saXN0ZW5lckluZm9zKSB7XG4gICAgICBmb3JFYWNoKGludGVybmFsRGF0YS5saXN0ZW5lckluZm9zLCBmdW5jdGlvbihpbmZvKSB7XG4gICAgICAgIGlmIChpbmZvLm9uKSB7XG4gICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lckltcGwoaW5mby5vbiwgaW5mby50cmlnZ2VyLCBpbmZvLmxpc3RlbmVyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBkZUluaXRPbkhhbmRsZXJzKGVsZW1lbnQpXG4gICAgZm9yRWFjaChPYmplY3Qua2V5cyhpbnRlcm5hbERhdGEpLCBmdW5jdGlvbihrZXkpIHsgZGVsZXRlIGludGVybmFsRGF0YVtrZXldIH0pXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBjbGVhblVwRWxlbWVudChlbGVtZW50KSB7XG4gICAgdHJpZ2dlckV2ZW50KGVsZW1lbnQsICdodG14OmJlZm9yZUNsZWFudXBFbGVtZW50JylcbiAgICBkZUluaXROb2RlKGVsZW1lbnQpXG4gICAgLy8gQHRzLWlnbm9yZSBJRTExIGNvZGVcbiAgICAvLyBub2luc3BlY3Rpb24gSlNVbnJlc29sdmVkUmVmZXJlbmNlXG4gICAgaWYgKGVsZW1lbnQuY2hpbGRyZW4pIHsgLy8gSUVcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGZvckVhY2goZWxlbWVudC5jaGlsZHJlbiwgZnVuY3Rpb24oY2hpbGQpIHsgY2xlYW5VcEVsZW1lbnQoY2hpbGQpIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7UGFyZW50Tm9kZX0gZnJhZ21lbnRcbiAgICogQHBhcmFtIHtIdG14U2V0dGxlSW5mb30gc2V0dGxlSW5mb1xuICAgKi9cbiAgZnVuY3Rpb24gc3dhcE91dGVySFRNTCh0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKSB7XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgdGFyZ2V0LnRhZ05hbWUgPT09ICdCT0RZJykgeyAvLyBzcGVjaWFsIGNhc2UgdGhlIGJvZHkgdG8gaW5uZXJIVE1MIGJlY2F1c2UgRG9jdW1lbnRGcmFnbWVudHMgY2FuJ3QgY29udGFpbiBhIGJvZHkgZWx0IHVuZm9ydHVuYXRlbHlcbiAgICAgIHJldHVybiBzd2FwSW5uZXJIVE1MKHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gICAgfVxuICAgIC8qKiBAdHlwZSB7Tm9kZX0gKi9cbiAgICBsZXQgbmV3RWx0XG4gICAgY29uc3QgZWx0QmVmb3JlTmV3Q29udGVudCA9IHRhcmdldC5wcmV2aW91c1NpYmxpbmdcbiAgICBpbnNlcnROb2Rlc0JlZm9yZShwYXJlbnRFbHQodGFyZ2V0KSwgdGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbylcbiAgICBpZiAoZWx0QmVmb3JlTmV3Q29udGVudCA9PSBudWxsKSB7XG4gICAgICBuZXdFbHQgPSBwYXJlbnRFbHQodGFyZ2V0KS5maXJzdENoaWxkXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0VsdCA9IGVsdEJlZm9yZU5ld0NvbnRlbnQubmV4dFNpYmxpbmdcbiAgICB9XG4gICAgc2V0dGxlSW5mby5lbHRzID0gc2V0dGxlSW5mby5lbHRzLmZpbHRlcihmdW5jdGlvbihlKSB7IHJldHVybiBlICE9PSB0YXJnZXQgfSlcbiAgICAvLyBzY2FuIHRocm91Z2ggYWxsIG5ld2x5IGFkZGVkIGNvbnRlbnQgYW5kIGFkZCBhbGwgZWxlbWVudHMgdG8gdGhlIHNldHRsZSBpbmZvIHNvIHdlIHRyaWdnZXJcbiAgICAvLyBldmVudHMgcHJvcGVybHkgb24gdGhlbVxuICAgIHdoaWxlIChuZXdFbHQgJiYgbmV3RWx0ICE9PSB0YXJnZXQpIHtcbiAgICAgIGlmIChuZXdFbHQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgIHNldHRsZUluZm8uZWx0cy5wdXNoKG5ld0VsdClcbiAgICAgIH1cbiAgICAgIG5ld0VsdCA9IG5ld0VsdC5uZXh0U2libGluZ1xuICAgIH1cbiAgICBjbGVhblVwRWxlbWVudCh0YXJnZXQpXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgIHRhcmdldC5yZW1vdmUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YXJnZXQpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7UGFyZW50Tm9kZX0gZnJhZ21lbnRcbiAgICogQHBhcmFtIHtIdG14U2V0dGxlSW5mb30gc2V0dGxlSW5mb1xuICAgKi9cbiAgZnVuY3Rpb24gc3dhcEFmdGVyQmVnaW4odGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbykge1xuICAgIHJldHVybiBpbnNlcnROb2Rlc0JlZm9yZSh0YXJnZXQsIHRhcmdldC5maXJzdENoaWxkLCBmcmFnbWVudCwgc2V0dGxlSW5mbylcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICAgKiBAcGFyYW0ge1BhcmVudE5vZGV9IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7SHRteFNldHRsZUluZm99IHNldHRsZUluZm9cbiAgICovXG4gIGZ1bmN0aW9uIHN3YXBCZWZvcmVCZWdpbih0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKSB7XG4gICAgcmV0dXJuIGluc2VydE5vZGVzQmVmb3JlKHBhcmVudEVsdCh0YXJnZXQpLCB0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7UGFyZW50Tm9kZX0gZnJhZ21lbnRcbiAgICogQHBhcmFtIHtIdG14U2V0dGxlSW5mb30gc2V0dGxlSW5mb1xuICAgKi9cbiAgZnVuY3Rpb24gc3dhcEJlZm9yZUVuZCh0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKSB7XG4gICAgcmV0dXJuIGluc2VydE5vZGVzQmVmb3JlKHRhcmdldCwgbnVsbCwgZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAgICogQHBhcmFtIHtQYXJlbnROb2RlfSBmcmFnbWVudFxuICAgKiBAcGFyYW0ge0h0bXhTZXR0bGVJbmZvfSBzZXR0bGVJbmZvXG4gICAqL1xuICBmdW5jdGlvbiBzd2FwQWZ0ZXJFbmQodGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbykge1xuICAgIHJldHVybiBpbnNlcnROb2Rlc0JlZm9yZShwYXJlbnRFbHQodGFyZ2V0KSwgdGFyZ2V0Lm5leHRTaWJsaW5nLCBmcmFnbWVudCwgc2V0dGxlSW5mbylcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICAgKi9cbiAgZnVuY3Rpb24gc3dhcERlbGV0ZSh0YXJnZXQpIHtcbiAgICBjbGVhblVwRWxlbWVudCh0YXJnZXQpXG4gICAgcmV0dXJuIHBhcmVudEVsdCh0YXJnZXQpLnJlbW92ZUNoaWxkKHRhcmdldClcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICAgKiBAcGFyYW0ge1BhcmVudE5vZGV9IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7SHRteFNldHRsZUluZm99IHNldHRsZUluZm9cbiAgICovXG4gIGZ1bmN0aW9uIHN3YXBJbm5lckhUTUwodGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbykge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSB0YXJnZXQuZmlyc3RDaGlsZFxuICAgIGluc2VydE5vZGVzQmVmb3JlKHRhcmdldCwgZmlyc3RDaGlsZCwgZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gICAgaWYgKGZpcnN0Q2hpbGQpIHtcbiAgICAgIHdoaWxlIChmaXJzdENoaWxkLm5leHRTaWJsaW5nKSB7XG4gICAgICAgIGNsZWFuVXBFbGVtZW50KGZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpXG4gICAgICAgIHRhcmdldC5yZW1vdmVDaGlsZChmaXJzdENoaWxkLm5leHRTaWJsaW5nKVxuICAgICAgfVxuICAgICAgY2xlYW5VcEVsZW1lbnQoZmlyc3RDaGlsZClcbiAgICAgIHRhcmdldC5yZW1vdmVDaGlsZChmaXJzdENoaWxkKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0h0bXhTd2FwU3R5bGV9IHN3YXBTdHlsZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICAgKiBAcGFyYW0ge1BhcmVudE5vZGV9IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7SHRteFNldHRsZUluZm99IHNldHRsZUluZm9cbiAgICovXG4gIGZ1bmN0aW9uIHN3YXBXaXRoU3R5bGUoc3dhcFN0eWxlLCBlbHQsIHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pIHtcbiAgICBzd2l0Y2ggKHN3YXBTdHlsZSkge1xuICAgICAgY2FzZSAnbm9uZSc6XG4gICAgICAgIHJldHVyblxuICAgICAgY2FzZSAnb3V0ZXJIVE1MJzpcbiAgICAgICAgc3dhcE91dGVySFRNTCh0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICAgICAgICByZXR1cm5cbiAgICAgIGNhc2UgJ2FmdGVyYmVnaW4nOlxuICAgICAgICBzd2FwQWZ0ZXJCZWdpbih0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICAgICAgICByZXR1cm5cbiAgICAgIGNhc2UgJ2JlZm9yZWJlZ2luJzpcbiAgICAgICAgc3dhcEJlZm9yZUJlZ2luKHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gICAgICAgIHJldHVyblxuICAgICAgY2FzZSAnYmVmb3JlZW5kJzpcbiAgICAgICAgc3dhcEJlZm9yZUVuZCh0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICAgICAgICByZXR1cm5cbiAgICAgIGNhc2UgJ2FmdGVyZW5kJzpcbiAgICAgICAgc3dhcEFmdGVyRW5kKHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gICAgICAgIHJldHVyblxuICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgc3dhcERlbGV0ZSh0YXJnZXQpXG4gICAgICAgIHJldHVyblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFyIGV4dGVuc2lvbnMgPSBnZXRFeHRlbnNpb25zKGVsdClcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgZXh0ID0gZXh0ZW5zaW9uc1tpXVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50cyA9IGV4dC5oYW5kbGVTd2FwKHN3YXBTdHlsZSwgdGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbylcbiAgICAgICAgICAgIGlmIChuZXdFbGVtZW50cykge1xuICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShuZXdFbGVtZW50cykpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBoYW5kbGVTd2FwIHJldHVybnMgYW4gYXJyYXkgKGxpa2UpIG9mIGVsZW1lbnRzLCB3ZSBoYW5kbGUgdGhlbVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3RWxlbWVudHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gbmV3RWxlbWVudHNbal1cbiAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5URVhUX05PREUgJiYgY2hpbGQubm9kZVR5cGUgIT09IE5vZGUuQ09NTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHRsZUluZm8udGFza3MucHVzaChtYWtlQWpheExvYWRUYXNrKGNoaWxkKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgbG9nRXJyb3IoZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN3YXBTdHlsZSA9PT0gJ2lubmVySFRNTCcpIHtcbiAgICAgICAgICBzd2FwSW5uZXJIVE1MKHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dhcFdpdGhTdHlsZShodG14LmNvbmZpZy5kZWZhdWx0U3dhcFN0eWxlLCBlbHQsIHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSBmcmFnbWVudFxuICAgKiBAcGFyYW0ge0h0bXhTZXR0bGVJbmZvfSBzZXR0bGVJbmZvXG4gICAqL1xuICBmdW5jdGlvbiBmaW5kQW5kU3dhcE9vYkVsZW1lbnRzKGZyYWdtZW50LCBzZXR0bGVJbmZvKSB7XG4gICAgdmFyIG9vYkVsdHMgPSBmaW5kQWxsKGZyYWdtZW50LCAnW2h4LXN3YXAtb29iXSwgW2RhdGEtaHgtc3dhcC1vb2JdJylcbiAgICBmb3JFYWNoKG9vYkVsdHMsIGZ1bmN0aW9uKG9vYkVsZW1lbnQpIHtcbiAgICAgIGlmIChodG14LmNvbmZpZy5hbGxvd05lc3RlZE9vYlN3YXBzIHx8IG9vYkVsZW1lbnQucGFyZW50RWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBvb2JWYWx1ZSA9IGdldEF0dHJpYnV0ZVZhbHVlKG9vYkVsZW1lbnQsICdoeC1zd2FwLW9vYicpXG4gICAgICAgIGlmIChvb2JWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgb29iU3dhcChvb2JWYWx1ZSwgb29iRWxlbWVudCwgc2V0dGxlSW5mbylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb29iRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2h4LXN3YXAtb29iJylcbiAgICAgICAgb29iRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaHgtc3dhcC1vb2InKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIG9vYkVsdHMubGVuZ3RoID4gMFxuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudHMgY29tcGxldGUgc3dhcHBpbmcgcGlwZWxpbmUsIGluY2x1ZGluZzogZm9jdXMgYW5kIHNlbGVjdGlvbiBwcmVzZXJ2YXRpb24sXG4gICAqIHRpdGxlIHVwZGF0ZXMsIHNjcm9sbCwgT09CIHN3YXBwaW5nLCBub3JtYWwgc3dhcHBpbmcgYW5kIHNldHRsaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfEVsZW1lbnR9IHRhcmdldFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICAgKiBAcGFyYW0ge0h0bXhTd2FwU3BlY2lmaWNhdGlvbn0gc3dhcFNwZWNcbiAgICogQHBhcmFtIHtTd2FwT3B0aW9uc30gW3N3YXBPcHRpb25zXVxuICAgKi9cbiAgZnVuY3Rpb24gc3dhcCh0YXJnZXQsIGNvbnRlbnQsIHN3YXBTcGVjLCBzd2FwT3B0aW9ucykge1xuICAgIGlmICghc3dhcE9wdGlvbnMpIHtcbiAgICAgIHN3YXBPcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0YXJnZXQgPSByZXNvbHZlVGFyZ2V0KHRhcmdldClcblxuICAgIC8vIHByZXNlcnZlIGZvY3VzIGFuZCBzZWxlY3Rpb25cbiAgICBjb25zdCBhY3RpdmVFbHQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgbGV0IHNlbGVjdGlvbkluZm8gPSB7fVxuICAgIHRyeSB7XG4gICAgICBzZWxlY3Rpb25JbmZvID0ge1xuICAgICAgICBlbHQ6IGFjdGl2ZUVsdCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBzdGFydDogYWN0aXZlRWx0ID8gYWN0aXZlRWx0LnNlbGVjdGlvblN0YXJ0IDogbnVsbCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBlbmQ6IGFjdGl2ZUVsdCA/IGFjdGl2ZUVsdC5zZWxlY3Rpb25FbmQgOiBudWxsXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gc2FmYXJpIGlzc3VlIC0gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvcGxheXdyaWdodC9pc3N1ZXMvNTg5NFxuICAgIH1cbiAgICBjb25zdCBzZXR0bGVJbmZvID0gbWFrZVNldHRsZUluZm8odGFyZ2V0KVxuXG4gICAgLy8gRm9yIHRleHQgY29udGVudCBzd2FwcywgZG9uJ3QgcGFyc2UgdGhlIHJlc3BvbnNlIGFzIEhUTUwsIGp1c3QgaW5zZXJ0IGl0XG4gICAgaWYgKHN3YXBTcGVjLnN3YXBTdHlsZSA9PT0gJ3RleHRDb250ZW50Jykge1xuICAgICAgdGFyZ2V0LnRleHRDb250ZW50ID0gY29udGVudFxuICAgIC8vIE90aGVyd2lzZSwgbWFrZSB0aGUgZnJhZ21lbnQgYW5kIHByb2Nlc3MgaXRcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGZyYWdtZW50ID0gbWFrZUZyYWdtZW50KGNvbnRlbnQpXG5cbiAgICAgIHNldHRsZUluZm8udGl0bGUgPSBmcmFnbWVudC50aXRsZVxuXG4gICAgICAvLyBzZWxlY3Qtb29iIHN3YXBzXG4gICAgICBpZiAoc3dhcE9wdGlvbnMuc2VsZWN0T09CKSB7XG4gICAgICAgIGNvbnN0IG9vYlNlbGVjdFZhbHVlcyA9IHN3YXBPcHRpb25zLnNlbGVjdE9PQi5zcGxpdCgnLCcpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb29iU2VsZWN0VmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgb29iU2VsZWN0VmFsdWUgPSBvb2JTZWxlY3RWYWx1ZXNbaV0uc3BsaXQoJzonLCAyKVxuICAgICAgICAgIGxldCBpZCA9IG9vYlNlbGVjdFZhbHVlWzBdLnRyaW0oKVxuICAgICAgICAgIGlmIChpZC5pbmRleE9mKCcjJykgPT09IDApIHtcbiAgICAgICAgICAgIGlkID0gaWQuc3Vic3RyaW5nKDEpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG9vYlZhbHVlID0gb29iU2VsZWN0VmFsdWVbMV0gfHwgJ3RydWUnXG4gICAgICAgICAgY29uc3Qgb29iRWxlbWVudCA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgaWQpXG4gICAgICAgICAgaWYgKG9vYkVsZW1lbnQpIHtcbiAgICAgICAgICAgIG9vYlN3YXAob29iVmFsdWUsIG9vYkVsZW1lbnQsIHNldHRsZUluZm8pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBvb2Igc3dhcHNcbiAgICAgIGZpbmRBbmRTd2FwT29iRWxlbWVudHMoZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gICAgICBmb3JFYWNoKGZpbmRBbGwoZnJhZ21lbnQsICd0ZW1wbGF0ZScpLCAvKiogQHBhcmFtIHtIVE1MVGVtcGxhdGVFbGVtZW50fSB0ZW1wbGF0ZSAqL2Z1bmN0aW9uKHRlbXBsYXRlKSB7XG4gICAgICAgIGlmIChmaW5kQW5kU3dhcE9vYkVsZW1lbnRzKHRlbXBsYXRlLmNvbnRlbnQsIHNldHRsZUluZm8pKSB7XG4gICAgICAgICAgLy8gQXZvaWQgcG9sbHV0aW5nIHRoZSBET00gd2l0aCBlbXB0eSB0ZW1wbGF0ZXMgdGhhdCB3ZXJlIG9ubHkgdXNlZCB0byBlbmNhcHN1bGF0ZSBvb2Igc3dhcFxuICAgICAgICAgIHRlbXBsYXRlLnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIG5vcm1hbCBzd2FwXG4gICAgICBpZiAoc3dhcE9wdGlvbnMuc2VsZWN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0ZyYWdtZW50ID0gZ2V0RG9jdW1lbnQoKS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgICAgICAgZm9yRWFjaChmcmFnbWVudC5xdWVyeVNlbGVjdG9yQWxsKHN3YXBPcHRpb25zLnNlbGVjdCksIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICBuZXdGcmFnbWVudC5hcHBlbmRDaGlsZChub2RlKVxuICAgICAgICB9KVxuICAgICAgICBmcmFnbWVudCA9IG5ld0ZyYWdtZW50XG4gICAgICB9XG4gICAgICBoYW5kbGVQcmVzZXJ2ZWRFbGVtZW50cyhmcmFnbWVudClcbiAgICAgIHN3YXBXaXRoU3R5bGUoc3dhcFNwZWMuc3dhcFN0eWxlLCBzd2FwT3B0aW9ucy5jb250ZXh0RWxlbWVudCwgdGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbylcbiAgICB9XG5cbiAgICAvLyBhcHBseSBzYXZlZCBmb2N1cyBhbmQgc2VsZWN0aW9uIGluZm9ybWF0aW9uIHRvIHN3YXBwZWQgY29udGVudFxuICAgIGlmIChzZWxlY3Rpb25JbmZvLmVsdCAmJlxuICAgICAgIWJvZHlDb250YWlucyhzZWxlY3Rpb25JbmZvLmVsdCkgJiZcbiAgICAgIGdldFJhd0F0dHJpYnV0ZShzZWxlY3Rpb25JbmZvLmVsdCwgJ2lkJykpIHtcbiAgICAgIGNvbnN0IG5ld0FjdGl2ZUVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldFJhd0F0dHJpYnV0ZShzZWxlY3Rpb25JbmZvLmVsdCwgJ2lkJykpXG4gICAgICBjb25zdCBmb2N1c09wdGlvbnMgPSB7IHByZXZlbnRTY3JvbGw6IHN3YXBTcGVjLmZvY3VzU2Nyb2xsICE9PSB1bmRlZmluZWQgPyAhc3dhcFNwZWMuZm9jdXNTY3JvbGwgOiAhaHRteC5jb25maWcuZGVmYXVsdEZvY3VzU2Nyb2xsIH1cbiAgICAgIGlmIChuZXdBY3RpdmVFbHQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoc2VsZWN0aW9uSW5mby5zdGFydCAmJiBuZXdBY3RpdmVFbHQuc2V0U2VsZWN0aW9uUmFuZ2UpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgbmV3QWN0aXZlRWx0LnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvbkluZm8uc3RhcnQsIHNlbGVjdGlvbkluZm8uZW5kKVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIHRoZSBzZXRTZWxlY3Rpb25SYW5nZSBtZXRob2QgaXMgcHJlc2VudCBvbiBmaWVsZHMgdGhhdCBkb24ndCBzdXBwb3J0IGl0LCBzbyBqdXN0IGxldCB0aGlzIGZhaWxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmV3QWN0aXZlRWx0LmZvY3VzKGZvY3VzT3B0aW9ucylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShodG14LmNvbmZpZy5zd2FwcGluZ0NsYXNzKVxuICAgIGZvckVhY2goc2V0dGxlSW5mby5lbHRzLCBmdW5jdGlvbihlbHQpIHtcbiAgICAgIGlmIChlbHQuY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsdC5jbGFzc0xpc3QuYWRkKGh0bXguY29uZmlnLnNldHRsaW5nQ2xhc3MpXG4gICAgICB9XG4gICAgICB0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDphZnRlclN3YXAnLCBzd2FwT3B0aW9ucy5ldmVudEluZm8pXG4gICAgfSlcbiAgICBpZiAoc3dhcE9wdGlvbnMuYWZ0ZXJTd2FwQ2FsbGJhY2spIHtcbiAgICAgIHN3YXBPcHRpb25zLmFmdGVyU3dhcENhbGxiYWNrKClcbiAgICB9XG5cbiAgICAvLyBtZXJnZSBpbiBuZXcgdGl0bGUgYWZ0ZXIgc3dhcCBidXQgYmVmb3JlIHNldHRsZVxuICAgIGlmICghc3dhcFNwZWMuaWdub3JlVGl0bGUpIHtcbiAgICAgIGhhbmRsZVRpdGxlKHNldHRsZUluZm8udGl0bGUpXG4gICAgfVxuXG4gICAgLy8gc2V0dGxlXG4gICAgY29uc3QgZG9TZXR0bGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGZvckVhY2goc2V0dGxlSW5mby50YXNrcywgZnVuY3Rpb24odGFzaykge1xuICAgICAgICB0YXNrLmNhbGwoKVxuICAgICAgfSlcbiAgICAgIGZvckVhY2goc2V0dGxlSW5mby5lbHRzLCBmdW5jdGlvbihlbHQpIHtcbiAgICAgICAgaWYgKGVsdC5jbGFzc0xpc3QpIHtcbiAgICAgICAgICBlbHQuY2xhc3NMaXN0LnJlbW92ZShodG14LmNvbmZpZy5zZXR0bGluZ0NsYXNzKVxuICAgICAgICB9XG4gICAgICAgIHRyaWdnZXJFdmVudChlbHQsICdodG14OmFmdGVyU2V0dGxlJywgc3dhcE9wdGlvbnMuZXZlbnRJbmZvKVxuICAgICAgfSlcblxuICAgICAgaWYgKHN3YXBPcHRpb25zLmFuY2hvcikge1xuICAgICAgICBjb25zdCBhbmNob3JUYXJnZXQgPSBhc0VsZW1lbnQocmVzb2x2ZVRhcmdldCgnIycgKyBzd2FwT3B0aW9ucy5hbmNob3IpKVxuICAgICAgICBpZiAoYW5jaG9yVGFyZ2V0KSB7XG4gICAgICAgICAgYW5jaG9yVGFyZ2V0LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdzdGFydCcsIGJlaGF2aW9yOiAnYXV0bycgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB1cGRhdGVTY3JvbGxTdGF0ZShzZXR0bGVJbmZvLmVsdHMsIHN3YXBTcGVjKVxuICAgICAgaWYgKHN3YXBPcHRpb25zLmFmdGVyU2V0dGxlQ2FsbGJhY2spIHtcbiAgICAgICAgc3dhcE9wdGlvbnMuYWZ0ZXJTZXR0bGVDYWxsYmFjaygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN3YXBTcGVjLnNldHRsZURlbGF5ID4gMCkge1xuICAgICAgZ2V0V2luZG93KCkuc2V0VGltZW91dChkb1NldHRsZSwgc3dhcFNwZWMuc2V0dGxlRGVsYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvU2V0dGxlKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoZWFkZXJcbiAgICogQHBhcmFtIHtFdmVudFRhcmdldH0gZWx0XG4gICAqL1xuICBmdW5jdGlvbiBoYW5kbGVUcmlnZ2VySGVhZGVyKHhociwgaGVhZGVyLCBlbHQpIHtcbiAgICBjb25zdCB0cmlnZ2VyQm9keSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcihoZWFkZXIpXG4gICAgaWYgKHRyaWdnZXJCb2R5LmluZGV4T2YoJ3snKSA9PT0gMCkge1xuICAgICAgY29uc3QgdHJpZ2dlcnMgPSBwYXJzZUpTT04odHJpZ2dlckJvZHkpXG4gICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBpbiB0cmlnZ2Vycykge1xuICAgICAgICBpZiAodHJpZ2dlcnMuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lKSkge1xuICAgICAgICAgIGxldCBkZXRhaWwgPSB0cmlnZ2Vyc1tldmVudE5hbWVdXG4gICAgICAgICAgaWYgKGlzUmF3T2JqZWN0KGRldGFpbCkpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGVsdCA9IGRldGFpbC50YXJnZXQgIT09IHVuZGVmaW5lZCA/IGRldGFpbC50YXJnZXQgOiBlbHRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGV0YWlsID0geyB2YWx1ZTogZGV0YWlsIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgZXZlbnROYW1lLCBkZXRhaWwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXZlbnROYW1lcyA9IHRyaWdnZXJCb2R5LnNwbGl0KCcsJylcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnROYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0cmlnZ2VyRXZlbnQoZWx0LCBldmVudE5hbWVzW2ldLnRyaW0oKSwgW10pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgV0hJVEVTUEFDRSA9IC9cXHMvXG4gIGNvbnN0IFdISVRFU1BBQ0VfT1JfQ09NTUEgPSAvW1xccyxdL1xuICBjb25zdCBTWU1CT0xfU1RBUlQgPSAvW18kYS16QS1aXS9cbiAgY29uc3QgU1lNQk9MX0NPTlQgPSAvW18kYS16QS1aMC05XS9cbiAgY29uc3QgU1RSSU5HSVNIX1NUQVJUID0gWydcIicsIFwiJ1wiLCAnLyddXG4gIGNvbnN0IE5PVF9XSElURVNQQUNFID0gL1teXFxzXS9cbiAgY29uc3QgQ09NQklORURfU0VMRUNUT1JfU1RBUlQgPSAvW3soXS9cbiAgY29uc3QgQ09NQklORURfU0VMRUNUT1JfRU5EID0gL1t9KV0vXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgZnVuY3Rpb24gdG9rZW5pemVTdHJpbmcoc3RyKSB7XG4gICAgLyoqIEB0eXBlIHN0cmluZ1tdICovXG4gICAgY29uc3QgdG9rZW5zID0gW11cbiAgICBsZXQgcG9zaXRpb24gPSAwXG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc3RyLmxlbmd0aCkge1xuICAgICAgaWYgKFNZTUJPTF9TVEFSVC5leGVjKHN0ci5jaGFyQXQocG9zaXRpb24pKSkge1xuICAgICAgICB2YXIgc3RhcnRQb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgIHdoaWxlIChTWU1CT0xfQ09OVC5leGVjKHN0ci5jaGFyQXQocG9zaXRpb24gKyAxKSkpIHtcbiAgICAgICAgICBwb3NpdGlvbisrXG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goc3RyLnN1YnN0cihzdGFydFBvc2l0aW9uLCBwb3NpdGlvbiAtIHN0YXJ0UG9zaXRpb24gKyAxKSlcbiAgICAgIH0gZWxzZSBpZiAoU1RSSU5HSVNIX1NUQVJULmluZGV4T2Yoc3RyLmNoYXJBdChwb3NpdGlvbikpICE9PSAtMSkge1xuICAgICAgICBjb25zdCBzdGFydENoYXIgPSBzdHIuY2hhckF0KHBvc2l0aW9uKVxuICAgICAgICB2YXIgc3RhcnRQb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgIHBvc2l0aW9uKytcbiAgICAgICAgd2hpbGUgKHBvc2l0aW9uIDwgc3RyLmxlbmd0aCAmJiBzdHIuY2hhckF0KHBvc2l0aW9uKSAhPT0gc3RhcnRDaGFyKSB7XG4gICAgICAgICAgaWYgKHN0ci5jaGFyQXQocG9zaXRpb24pID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uKytcbiAgICAgICAgICB9XG4gICAgICAgICAgcG9zaXRpb24rK1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHN0ci5zdWJzdHIoc3RhcnRQb3NpdGlvbiwgcG9zaXRpb24gLSBzdGFydFBvc2l0aW9uICsgMSkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzeW1ib2wgPSBzdHIuY2hhckF0KHBvc2l0aW9uKVxuICAgICAgICB0b2tlbnMucHVzaChzeW1ib2wpXG4gICAgICB9XG4gICAgICBwb3NpdGlvbisrXG4gICAgfVxuICAgIHJldHVybiB0b2tlbnNcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9rZW5cbiAgICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gbGFzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1OYW1lXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNQb3NzaWJsZVJlbGF0aXZlUmVmZXJlbmNlKHRva2VuLCBsYXN0LCBwYXJhbU5hbWUpIHtcbiAgICByZXR1cm4gU1lNQk9MX1NUQVJULmV4ZWModG9rZW4uY2hhckF0KDApKSAmJlxuICAgICAgdG9rZW4gIT09ICd0cnVlJyAmJlxuICAgICAgdG9rZW4gIT09ICdmYWxzZScgJiZcbiAgICAgIHRva2VuICE9PSAndGhpcycgJiZcbiAgICAgIHRva2VuICE9PSBwYXJhbU5hbWUgJiZcbiAgICAgIGxhc3QgIT09ICcuJ1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8c3RyaW5nfSBlbHRcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdG9rZW5zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbU5hbWVcbiAgICogQHJldHVybnMge0NvbmRpdGlvbmFsRnVuY3Rpb258bnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIG1heWJlR2VuZXJhdGVDb25kaXRpb25hbChlbHQsIHRva2VucywgcGFyYW1OYW1lKSB7XG4gICAgaWYgKHRva2Vuc1swXSA9PT0gJ1snKSB7XG4gICAgICB0b2tlbnMuc2hpZnQoKVxuICAgICAgbGV0IGJyYWNrZXRDb3VudCA9IDFcbiAgICAgIGxldCBjb25kaXRpb25hbFNvdXJjZSA9ICcgcmV0dXJuIChmdW5jdGlvbignICsgcGFyYW1OYW1lICsgJyl7IHJldHVybiAoJ1xuICAgICAgbGV0IGxhc3QgPSBudWxsXG4gICAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbMF1cbiAgICAgICAgLy8gQHRzLWlnbm9yZSBGb3Igc29tZSByZWFzb24gdHNjIGRvZXNuJ3QgdW5kZXJzdGFuZCB0aGUgc2hpZnQgY2FsbCwgYW5kIHRoaW5rcyB3ZSdyZSBjb21wYXJpbmcgdGhlIHNhbWUgdmFsdWUgaGVyZSwgaS5lLiAnWycgdnMgJ10nXG4gICAgICAgIGlmICh0b2tlbiA9PT0gJ10nKSB7XG4gICAgICAgICAgYnJhY2tldENvdW50LS1cbiAgICAgICAgICBpZiAoYnJhY2tldENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICBpZiAobGFzdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25kaXRpb25hbFNvdXJjZSA9IGNvbmRpdGlvbmFsU291cmNlICsgJ3RydWUnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2tlbnMuc2hpZnQoKVxuICAgICAgICAgICAgY29uZGl0aW9uYWxTb3VyY2UgKz0gJyl9KSdcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbkZ1bmN0aW9uID0gbWF5YmVFdmFsKGVsdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZ1bmN0aW9uKGNvbmRpdGlvbmFsU291cmNlKSgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZSB9KVxuICAgICAgICAgICAgICBjb25kaXRpb25GdW5jdGlvbi5zb3VyY2UgPSBjb25kaXRpb25hbFNvdXJjZVxuICAgICAgICAgICAgICByZXR1cm4gY29uZGl0aW9uRnVuY3Rpb25cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZ2V0RG9jdW1lbnQoKS5ib2R5LCAnaHRteDpzeW50YXg6ZXJyb3InLCB7IGVycm9yOiBlLCBzb3VyY2U6IGNvbmRpdGlvbmFsU291cmNlIH0pXG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnWycpIHtcbiAgICAgICAgICBicmFja2V0Q291bnQrK1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1Bvc3NpYmxlUmVsYXRpdmVSZWZlcmVuY2UodG9rZW4sIGxhc3QsIHBhcmFtTmFtZSkpIHtcbiAgICAgICAgICBjb25kaXRpb25hbFNvdXJjZSArPSAnKCgnICsgcGFyYW1OYW1lICsgJy4nICsgdG9rZW4gKyAnKSA/ICgnICsgcGFyYW1OYW1lICsgJy4nICsgdG9rZW4gKyAnKSA6ICh3aW5kb3cuJyArIHRva2VuICsgJykpJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbmRpdGlvbmFsU291cmNlID0gY29uZGl0aW9uYWxTb3VyY2UgKyB0b2tlblxuICAgICAgICB9XG4gICAgICAgIGxhc3QgPSB0b2tlbnMuc2hpZnQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0b2tlbnNcbiAgICogQHBhcmFtIHtSZWdFeHB9IG1hdGNoXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBjb25zdW1lVW50aWwodG9rZW5zLCBtYXRjaCkge1xuICAgIGxldCByZXN1bHQgPSAnJ1xuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoID4gMCAmJiAhbWF0Y2gudGVzdCh0b2tlbnNbMF0pKSB7XG4gICAgICByZXN1bHQgKz0gdG9rZW5zLnNoaWZ0KClcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRva2Vuc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gY29uc3VtZUNTU1NlbGVjdG9yKHRva2Vucykge1xuICAgIGxldCByZXN1bHRcbiAgICBpZiAodG9rZW5zLmxlbmd0aCA+IDAgJiYgQ09NQklORURfU0VMRUNUT1JfU1RBUlQudGVzdCh0b2tlbnNbMF0pKSB7XG4gICAgICB0b2tlbnMuc2hpZnQoKVxuICAgICAgcmVzdWx0ID0gY29uc3VtZVVudGlsKHRva2VucywgQ09NQklORURfU0VMRUNUT1JfRU5EKS50cmltKClcbiAgICAgIHRva2Vucy5zaGlmdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGNvbnN1bWVVbnRpbCh0b2tlbnMsIFdISVRFU1BBQ0VfT1JfQ09NTUEpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGNvbnN0IElOUFVUX1NFTEVDVE9SID0gJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0J1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwbGljaXRUcmlnZ2VyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBmb3IgdHJpZ2dlciBzcGVjc1xuICAgKiBAcmV0dXJucyB7SHRteFRyaWdnZXJTcGVjaWZpY2F0aW9uW119XG4gICAqL1xuICBmdW5jdGlvbiBwYXJzZUFuZENhY2hlVHJpZ2dlcihlbHQsIGV4cGxpY2l0VHJpZ2dlciwgY2FjaGUpIHtcbiAgICAvKiogQHR5cGUgSHRteFRyaWdnZXJTcGVjaWZpY2F0aW9uW10gKi9cbiAgICBjb25zdCB0cmlnZ2VyU3BlY3MgPSBbXVxuICAgIGNvbnN0IHRva2VucyA9IHRva2VuaXplU3RyaW5nKGV4cGxpY2l0VHJpZ2dlcilcbiAgICBkbyB7XG4gICAgICBjb25zdW1lVW50aWwodG9rZW5zLCBOT1RfV0hJVEVTUEFDRSlcbiAgICAgIGNvbnN0IGluaXRpYWxMZW5ndGggPSB0b2tlbnMubGVuZ3RoXG4gICAgICBjb25zdCB0cmlnZ2VyID0gY29uc3VtZVVudGlsKHRva2VucywgL1ssXFxbXFxzXS8pXG4gICAgICBpZiAodHJpZ2dlciAhPT0gJycpIHtcbiAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdldmVyeScpIHtcbiAgICAgICAgICAvKiogQHR5cGUgSHRteFRyaWdnZXJTcGVjaWZpY2F0aW9uICovXG4gICAgICAgICAgY29uc3QgZXZlcnkgPSB7IHRyaWdnZXI6ICdldmVyeScgfVxuICAgICAgICAgIGNvbnN1bWVVbnRpbCh0b2tlbnMsIE5PVF9XSElURVNQQUNFKVxuICAgICAgICAgIGV2ZXJ5LnBvbGxJbnRlcnZhbCA9IHBhcnNlSW50ZXJ2YWwoY29uc3VtZVVudGlsKHRva2VucywgL1ssXFxbXFxzXS8pKVxuICAgICAgICAgIGNvbnN1bWVVbnRpbCh0b2tlbnMsIE5PVF9XSElURVNQQUNFKVxuICAgICAgICAgIHZhciBldmVudEZpbHRlciA9IG1heWJlR2VuZXJhdGVDb25kaXRpb25hbChlbHQsIHRva2VucywgJ2V2ZW50JylcbiAgICAgICAgICBpZiAoZXZlbnRGaWx0ZXIpIHtcbiAgICAgICAgICAgIGV2ZXJ5LmV2ZW50RmlsdGVyID0gZXZlbnRGaWx0ZXJcbiAgICAgICAgICB9XG4gICAgICAgICAgdHJpZ2dlclNwZWNzLnB1c2goZXZlcnkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyoqIEB0eXBlIEh0bXhUcmlnZ2VyU3BlY2lmaWNhdGlvbiAqL1xuICAgICAgICAgIGNvbnN0IHRyaWdnZXJTcGVjID0geyB0cmlnZ2VyIH1cbiAgICAgICAgICB2YXIgZXZlbnRGaWx0ZXIgPSBtYXliZUdlbmVyYXRlQ29uZGl0aW9uYWwoZWx0LCB0b2tlbnMsICdldmVudCcpXG4gICAgICAgICAgaWYgKGV2ZW50RmlsdGVyKSB7XG4gICAgICAgICAgICB0cmlnZ2VyU3BlYy5ldmVudEZpbHRlciA9IGV2ZW50RmlsdGVyXG4gICAgICAgICAgfVxuICAgICAgICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoID4gMCAmJiB0b2tlbnNbMF0gIT09ICcsJykge1xuICAgICAgICAgICAgY29uc3VtZVVudGlsKHRva2VucywgTk9UX1dISVRFU1BBQ0UpXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRva2Vucy5zaGlmdCgpXG4gICAgICAgICAgICBpZiAodG9rZW4gPT09ICdjaGFuZ2VkJykge1xuICAgICAgICAgICAgICB0cmlnZ2VyU3BlYy5jaGFuZ2VkID0gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ29uY2UnKSB7XG4gICAgICAgICAgICAgIHRyaWdnZXJTcGVjLm9uY2UgPSB0cnVlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnY29uc3VtZScpIHtcbiAgICAgICAgICAgICAgdHJpZ2dlclNwZWMuY29uc3VtZSA9IHRydWVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICdkZWxheScgJiYgdG9rZW5zWzBdID09PSAnOicpIHtcbiAgICAgICAgICAgICAgdG9rZW5zLnNoaWZ0KClcbiAgICAgICAgICAgICAgdHJpZ2dlclNwZWMuZGVsYXkgPSBwYXJzZUludGVydmFsKGNvbnN1bWVVbnRpbCh0b2tlbnMsIFdISVRFU1BBQ0VfT1JfQ09NTUEpKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ2Zyb20nICYmIHRva2Vuc1swXSA9PT0gJzonKSB7XG4gICAgICAgICAgICAgIHRva2Vucy5zaGlmdCgpXG4gICAgICAgICAgICAgIGlmIChDT01CSU5FRF9TRUxFQ1RPUl9TVEFSVC50ZXN0KHRva2Vuc1swXSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJvbV9hcmcgPSBjb25zdW1lQ1NTU2VsZWN0b3IodG9rZW5zKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBmcm9tX2FyZyA9IGNvbnN1bWVVbnRpbCh0b2tlbnMsIFdISVRFU1BBQ0VfT1JfQ09NTUEpXG4gICAgICAgICAgICAgICAgaWYgKGZyb21fYXJnID09PSAnY2xvc2VzdCcgfHwgZnJvbV9hcmcgPT09ICdmaW5kJyB8fCBmcm9tX2FyZyA9PT0gJ25leHQnIHx8IGZyb21fYXJnID09PSAncHJldmlvdXMnKSB7XG4gICAgICAgICAgICAgICAgICB0b2tlbnMuc2hpZnQoKVxuICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBjb25zdW1lQ1NTU2VsZWN0b3IodG9rZW5zKVxuICAgICAgICAgICAgICAgICAgLy8gYG5leHRgIGFuZCBgcHJldmlvdXNgIGFsbG93IGEgc2VsZWN0b3ItbGVzcyBzeW50YXhcbiAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21fYXJnICs9ICcgJyArIHNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRyaWdnZXJTcGVjLmZyb20gPSBmcm9tX2FyZ1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ3RhcmdldCcgJiYgdG9rZW5zWzBdID09PSAnOicpIHtcbiAgICAgICAgICAgICAgdG9rZW5zLnNoaWZ0KClcbiAgICAgICAgICAgICAgdHJpZ2dlclNwZWMudGFyZ2V0ID0gY29uc3VtZUNTU1NlbGVjdG9yKHRva2VucylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICd0aHJvdHRsZScgJiYgdG9rZW5zWzBdID09PSAnOicpIHtcbiAgICAgICAgICAgICAgdG9rZW5zLnNoaWZ0KClcbiAgICAgICAgICAgICAgdHJpZ2dlclNwZWMudGhyb3R0bGUgPSBwYXJzZUludGVydmFsKGNvbnN1bWVVbnRpbCh0b2tlbnMsIFdISVRFU1BBQ0VfT1JfQ09NTUEpKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ3F1ZXVlJyAmJiB0b2tlbnNbMF0gPT09ICc6Jykge1xuICAgICAgICAgICAgICB0b2tlbnMuc2hpZnQoKVxuICAgICAgICAgICAgICB0cmlnZ2VyU3BlYy5xdWV1ZSA9IGNvbnN1bWVVbnRpbCh0b2tlbnMsIFdISVRFU1BBQ0VfT1JfQ09NTUEpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRva2VuID09PSAncm9vdCcgJiYgdG9rZW5zWzBdID09PSAnOicpIHtcbiAgICAgICAgICAgICAgdG9rZW5zLnNoaWZ0KClcbiAgICAgICAgICAgICAgdHJpZ2dlclNwZWNbdG9rZW5dID0gY29uc3VtZUNTU1NlbGVjdG9yKHRva2VucylcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICd0aHJlc2hvbGQnICYmIHRva2Vuc1swXSA9PT0gJzonKSB7XG4gICAgICAgICAgICAgIHRva2Vucy5zaGlmdCgpXG4gICAgICAgICAgICAgIHRyaWdnZXJTcGVjW3Rva2VuXSA9IGNvbnN1bWVVbnRpbCh0b2tlbnMsIFdISVRFU1BBQ0VfT1JfQ09NTUEpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0cmlnZ2VyRXJyb3JFdmVudChlbHQsICdodG14OnN5bnRheDplcnJvcicsIHsgdG9rZW46IHRva2Vucy5zaGlmdCgpIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRyaWdnZXJTcGVjcy5wdXNoKHRyaWdnZXJTcGVjKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodG9rZW5zLmxlbmd0aCA9PT0gaW5pdGlhbExlbmd0aCkge1xuICAgICAgICB0cmlnZ2VyRXJyb3JFdmVudChlbHQsICdodG14OnN5bnRheDplcnJvcicsIHsgdG9rZW46IHRva2Vucy5zaGlmdCgpIH0pXG4gICAgICB9XG4gICAgICBjb25zdW1lVW50aWwodG9rZW5zLCBOT1RfV0hJVEVTUEFDRSlcbiAgICB9IHdoaWxlICh0b2tlbnNbMF0gPT09ICcsJyAmJiB0b2tlbnMuc2hpZnQoKSlcbiAgICBpZiAoY2FjaGUpIHtcbiAgICAgIGNhY2hlW2V4cGxpY2l0VHJpZ2dlcl0gPSB0cmlnZ2VyU3BlY3NcbiAgICB9XG4gICAgcmV0dXJuIHRyaWdnZXJTcGVjc1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEByZXR1cm5zIHtIdG14VHJpZ2dlclNwZWNpZmljYXRpb25bXX1cbiAgICovXG4gIGZ1bmN0aW9uIGdldFRyaWdnZXJTcGVjcyhlbHQpIHtcbiAgICBjb25zdCBleHBsaWNpdFRyaWdnZXIgPSBnZXRBdHRyaWJ1dGVWYWx1ZShlbHQsICdoeC10cmlnZ2VyJylcbiAgICBsZXQgdHJpZ2dlclNwZWNzID0gW11cbiAgICBpZiAoZXhwbGljaXRUcmlnZ2VyKSB7XG4gICAgICBjb25zdCBjYWNoZSA9IGh0bXguY29uZmlnLnRyaWdnZXJTcGVjc0NhY2hlXG4gICAgICB0cmlnZ2VyU3BlY3MgPSAoY2FjaGUgJiYgY2FjaGVbZXhwbGljaXRUcmlnZ2VyXSkgfHwgcGFyc2VBbmRDYWNoZVRyaWdnZXIoZWx0LCBleHBsaWNpdFRyaWdnZXIsIGNhY2hlKVxuICAgIH1cblxuICAgIGlmICh0cmlnZ2VyU3BlY3MubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRyaWdnZXJTcGVjc1xuICAgIH0gZWxzZSBpZiAobWF0Y2hlcyhlbHQsICdmb3JtJykpIHtcbiAgICAgIHJldHVybiBbeyB0cmlnZ2VyOiAnc3VibWl0JyB9XVxuICAgIH0gZWxzZSBpZiAobWF0Y2hlcyhlbHQsICdpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdJykpIHtcbiAgICAgIHJldHVybiBbeyB0cmlnZ2VyOiAnY2xpY2snIH1dXG4gICAgfSBlbHNlIGlmIChtYXRjaGVzKGVsdCwgSU5QVVRfU0VMRUNUT1IpKSB7XG4gICAgICByZXR1cm4gW3sgdHJpZ2dlcjogJ2NoYW5nZScgfV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFt7IHRyaWdnZXI6ICdjbGljaycgfV1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICovXG4gIGZ1bmN0aW9uIGNhbmNlbFBvbGxpbmcoZWx0KSB7XG4gICAgZ2V0SW50ZXJuYWxEYXRhKGVsdCkuY2FuY2VsbGVkID0gdHJ1ZVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7VHJpZ2dlckhhbmRsZXJ9IGhhbmRsZXJcbiAgICogQHBhcmFtIHtIdG14VHJpZ2dlclNwZWNpZmljYXRpb259IHNwZWNcbiAgICovXG4gIGZ1bmN0aW9uIHByb2Nlc3NQb2xsaW5nKGVsdCwgaGFuZGxlciwgc3BlYykge1xuICAgIGNvbnN0IG5vZGVEYXRhID0gZ2V0SW50ZXJuYWxEYXRhKGVsdClcbiAgICBub2RlRGF0YS50aW1lb3V0ID0gZ2V0V2luZG93KCkuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmIChib2R5Q29udGFpbnMoZWx0KSAmJiBub2RlRGF0YS5jYW5jZWxsZWQgIT09IHRydWUpIHtcbiAgICAgICAgaWYgKCFtYXliZUZpbHRlckV2ZW50KHNwZWMsIGVsdCwgbWFrZUV2ZW50KCdoeDpwb2xsOnRyaWdnZXInLCB7XG4gICAgICAgICAgdHJpZ2dlclNwZWM6IHNwZWMsXG4gICAgICAgICAgdGFyZ2V0OiBlbHRcbiAgICAgICAgfSkpKSB7XG4gICAgICAgICAgaGFuZGxlcihlbHQpXG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzc1BvbGxpbmcoZWx0LCBoYW5kbGVyLCBzcGVjKVxuICAgICAgfVxuICAgIH0sIHNwZWMucG9sbEludGVydmFsKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEFuY2hvckVsZW1lbnR9IGVsdFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzTG9jYWxMaW5rKGVsdCkge1xuICAgIHJldHVybiBsb2NhdGlvbi5ob3N0bmFtZSA9PT0gZWx0Lmhvc3RuYW1lICYmXG4gICAgICBnZXRSYXdBdHRyaWJ1dGUoZWx0LCAnaHJlZicpICYmXG4gICAgICBnZXRSYXdBdHRyaWJ1dGUoZWx0LCAnaHJlZicpLmluZGV4T2YoJyMnKSAhPT0gMFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqL1xuICBmdW5jdGlvbiBlbHRJc0Rpc2FibGVkKGVsdCkge1xuICAgIHJldHVybiBjbG9zZXN0KGVsdCwgaHRteC5jb25maWcuZGlzYWJsZVNlbGVjdG9yKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7SHRteE5vZGVJbnRlcm5hbERhdGF9IG5vZGVEYXRhXG4gICAqIEBwYXJhbSB7SHRteFRyaWdnZXJTcGVjaWZpY2F0aW9uW119IHRyaWdnZXJTcGVjc1xuICAgKi9cbiAgZnVuY3Rpb24gYm9vc3RFbGVtZW50KGVsdCwgbm9kZURhdGEsIHRyaWdnZXJTcGVjcykge1xuICAgIGlmICgoZWx0IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQgJiYgaXNMb2NhbExpbmsoZWx0KSAmJiAoZWx0LnRhcmdldCA9PT0gJycgfHwgZWx0LnRhcmdldCA9PT0gJ19zZWxmJykpIHx8IChlbHQudGFnTmFtZSA9PT0gJ0ZPUk0nICYmIFN0cmluZyhnZXRSYXdBdHRyaWJ1dGUoZWx0LCAnbWV0aG9kJykpLnRvTG93ZXJDYXNlKCkgIT09ICdkaWFsb2cnKSkge1xuICAgICAgbm9kZURhdGEuYm9vc3RlZCA9IHRydWVcbiAgICAgIGxldCB2ZXJiLCBwYXRoXG4gICAgICBpZiAoZWx0LnRhZ05hbWUgPT09ICdBJykge1xuICAgICAgICB2ZXJiID0gJ2dldCdcbiAgICAgICAgcGF0aCA9IGdldFJhd0F0dHJpYnV0ZShlbHQsICdocmVmJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJhd0F0dHJpYnV0ZSA9IGdldFJhd0F0dHJpYnV0ZShlbHQsICdtZXRob2QnKVxuICAgICAgICB2ZXJiID0gcmF3QXR0cmlidXRlID8gcmF3QXR0cmlidXRlLnRvTG93ZXJDYXNlKCkgOiAnZ2V0J1xuICAgICAgICBpZiAodmVyYiA9PT0gJ2dldCcpIHtcbiAgICAgICAgfVxuICAgICAgICBwYXRoID0gZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ2FjdGlvbicpXG4gICAgICB9XG4gICAgICB0cmlnZ2VyU3BlY3MuZm9yRWFjaChmdW5jdGlvbih0cmlnZ2VyU3BlYykge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKGVsdCwgZnVuY3Rpb24obm9kZSwgZXZ0KSB7XG4gICAgICAgICAgY29uc3QgZWx0ID0gYXNFbGVtZW50KG5vZGUpXG4gICAgICAgICAgaWYgKGVsdElzRGlzYWJsZWQoZWx0KSkge1xuICAgICAgICAgICAgY2xlYW5VcEVsZW1lbnQoZWx0KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlzc3VlQWpheFJlcXVlc3QodmVyYiwgcGF0aCwgZWx0LCBldnQpXG4gICAgICAgIH0sIG5vZGVEYXRhLCB0cmlnZ2VyU3BlYywgdHJ1ZSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBzaG91bGRDYW5jZWwoZXZ0LCBub2RlKSB7XG4gICAgY29uc3QgZWx0ID0gYXNFbGVtZW50KG5vZGUpXG4gICAgaWYgKCFlbHQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAoZXZ0LnR5cGUgPT09ICdzdWJtaXQnIHx8IGV2dC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICBpZiAoZWx0LnRhZ05hbWUgPT09ICdGT1JNJykge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKG1hdGNoZXMoZWx0LCAnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgYnV0dG9uJykgJiYgY2xvc2VzdChlbHQsICdmb3JtJykgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIGlmIChlbHQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCAmJiBlbHQuaHJlZiAmJlxuICAgICAgICAoZWx0LmdldEF0dHJpYnV0ZSgnaHJlZicpID09PSAnIycgfHwgZWx0LmdldEF0dHJpYnV0ZSgnaHJlZicpLmluZGV4T2YoJyMnKSAhPT0gMCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBlbHRcbiAgICogQHBhcmFtIHtFdmVudHxNb3VzZUV2ZW50fEtleWJvYXJkRXZlbnR8VG91Y2hFdmVudH0gZXZ0XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaWdub3JlQm9vc3RlZEFuY2hvckN0cmxDbGljayhlbHQsIGV2dCkge1xuICAgIHJldHVybiBnZXRJbnRlcm5hbERhdGEoZWx0KS5ib29zdGVkICYmIGVsdCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50ICYmIGV2dC50eXBlID09PSAnY2xpY2snICYmXG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgd2lsbCByZXNvbHZlIHRvIHVuZGVmaW5lZCBmb3IgZXZlbnRzIHRoYXQgZG9uJ3QgZGVmaW5lIHRob3NlIHByb3BlcnRpZXMsIHdoaWNoIGlzIGZpbmVcbiAgICAgIChldnQuY3RybEtleSB8fCBldnQubWV0YUtleSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0h0bXhUcmlnZ2VyU3BlY2lmaWNhdGlvbn0gdHJpZ2dlclNwZWNcbiAgICogQHBhcmFtIHtOb2RlfSBlbHRcbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gbWF5YmVGaWx0ZXJFdmVudCh0cmlnZ2VyU3BlYywgZWx0LCBldnQpIHtcbiAgICBjb25zdCBldmVudEZpbHRlciA9IHRyaWdnZXJTcGVjLmV2ZW50RmlsdGVyXG4gICAgaWYgKGV2ZW50RmlsdGVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZXZlbnRGaWx0ZXIuY2FsbChlbHQsIGV2dCkgIT09IHRydWVcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3Qgc291cmNlID0gZXZlbnRGaWx0ZXIuc291cmNlXG4gICAgICAgIHRyaWdnZXJFcnJvckV2ZW50KGdldERvY3VtZW50KCkuYm9keSwgJ2h0bXg6ZXZlbnRGaWx0ZXI6ZXJyb3InLCB7IGVycm9yOiBlLCBzb3VyY2UgfSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBlbHRcbiAgICogQHBhcmFtIHtUcmlnZ2VySGFuZGxlcn0gaGFuZGxlclxuICAgKiBAcGFyYW0ge0h0bXhOb2RlSW50ZXJuYWxEYXRhfSBub2RlRGF0YVxuICAgKiBAcGFyYW0ge0h0bXhUcmlnZ2VyU3BlY2lmaWNhdGlvbn0gdHJpZ2dlclNwZWNcbiAgICogQHBhcmFtIHtib29sZWFufSBbZXhwbGljaXRDYW5jZWxdXG4gICAqL1xuICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGVsdCwgaGFuZGxlciwgbm9kZURhdGEsIHRyaWdnZXJTcGVjLCBleHBsaWNpdENhbmNlbCkge1xuICAgIGNvbnN0IGVsZW1lbnREYXRhID0gZ2V0SW50ZXJuYWxEYXRhKGVsdClcbiAgICAvKiogQHR5cGUgeyhOb2RlfFdpbmRvdylbXX0gKi9cbiAgICBsZXQgZWx0c1RvTGlzdGVuT25cbiAgICBpZiAodHJpZ2dlclNwZWMuZnJvbSkge1xuICAgICAgZWx0c1RvTGlzdGVuT24gPSBxdWVyeVNlbGVjdG9yQWxsRXh0KGVsdCwgdHJpZ2dlclNwZWMuZnJvbSlcbiAgICB9IGVsc2Uge1xuICAgICAgZWx0c1RvTGlzdGVuT24gPSBbZWx0XVxuICAgIH1cbiAgICAvLyBzdG9yZSB0aGUgaW5pdGlhbCB2YWx1ZXMgb2YgdGhlIGVsZW1lbnRzLCBzbyB3ZSBjYW4gdGVsbCBpZiB0aGV5IGNoYW5nZVxuICAgIGlmICh0cmlnZ2VyU3BlYy5jaGFuZ2VkKSB7XG4gICAgICBlbHRzVG9MaXN0ZW5Pbi5mb3JFYWNoKGZ1bmN0aW9uKGVsdFRvTGlzdGVuT24pIHtcbiAgICAgICAgY29uc3QgZWx0VG9MaXN0ZW5PbkRhdGEgPSBnZXRJbnRlcm5hbERhdGEoZWx0VG9MaXN0ZW5PbilcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB2YWx1ZSB3aWxsIGJlIHVuZGVmaW5lZCBmb3Igbm9uLWlucHV0IGVsZW1lbnRzLCB3aGljaCBpcyBmaW5lXG4gICAgICAgIGVsdFRvTGlzdGVuT25EYXRhLmxhc3RWYWx1ZSA9IGVsdFRvTGlzdGVuT24udmFsdWVcbiAgICAgIH0pXG4gICAgfVxuICAgIGZvckVhY2goZWx0c1RvTGlzdGVuT24sIGZ1bmN0aW9uKGVsdFRvTGlzdGVuT24pIHtcbiAgICAgIC8qKiBAdHlwZSBFdmVudExpc3RlbmVyICovXG4gICAgICBjb25zdCBldmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIGlmICghYm9keUNvbnRhaW5zKGVsdCkpIHtcbiAgICAgICAgICBlbHRUb0xpc3Rlbk9uLnJlbW92ZUV2ZW50TGlzdGVuZXIodHJpZ2dlclNwZWMudHJpZ2dlciwgZXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoaWdub3JlQm9vc3RlZEFuY2hvckN0cmxDbGljayhlbHQsIGV2dCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXhwbGljaXRDYW5jZWwgfHwgc2hvdWxkQ2FuY2VsKGV2dCwgZWx0KSkge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heWJlRmlsdGVyRXZlbnQodHJpZ2dlclNwZWMsIGVsdCwgZXZ0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV2ZW50RGF0YSA9IGdldEludGVybmFsRGF0YShldnQpXG4gICAgICAgIGV2ZW50RGF0YS50cmlnZ2VyU3BlYyA9IHRyaWdnZXJTcGVjXG4gICAgICAgIGlmIChldmVudERhdGEuaGFuZGxlZEZvciA9PSBudWxsKSB7XG4gICAgICAgICAgZXZlbnREYXRhLmhhbmRsZWRGb3IgPSBbXVxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudERhdGEuaGFuZGxlZEZvci5pbmRleE9mKGVsdCkgPCAwKSB7XG4gICAgICAgICAgZXZlbnREYXRhLmhhbmRsZWRGb3IucHVzaChlbHQpXG4gICAgICAgICAgaWYgKHRyaWdnZXJTcGVjLmNvbnN1bWUpIHtcbiAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHJpZ2dlclNwZWMudGFyZ2V0ICYmIGV2dC50YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICghbWF0Y2hlcyhhc0VsZW1lbnQoZXZ0LnRhcmdldCksIHRyaWdnZXJTcGVjLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0cmlnZ2VyU3BlYy5vbmNlKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudERhdGEudHJpZ2dlcmVkT25jZSkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsZW1lbnREYXRhLnRyaWdnZXJlZE9uY2UgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0cmlnZ2VyU3BlYy5jaGFuZ2VkKSB7XG4gICAgICAgICAgICBjb25zdCBlbHRUb0xpc3Rlbk9uRGF0YSA9IGdldEludGVybmFsRGF0YShlbHRUb0xpc3Rlbk9uKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB2YWx1ZSB3aWxsIGJlIHVuZGVmaW5lZCBmb3Igbm9uLWlucHV0IGVsZW1lbnRzLCB3aGljaCBpcyBmaW5lXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsdFRvTGlzdGVuT24udmFsdWVcbiAgICAgICAgICAgIGlmIChlbHRUb0xpc3Rlbk9uRGF0YS5sYXN0VmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWx0VG9MaXN0ZW5PbkRhdGEubGFzdFZhbHVlID0gdmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVsZW1lbnREYXRhLmRlbGF5ZWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChlbGVtZW50RGF0YS5kZWxheWVkKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZWxlbWVudERhdGEudGhyb3R0bGUpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0cmlnZ2VyU3BlYy50aHJvdHRsZSA+IDApIHtcbiAgICAgICAgICAgIGlmICghZWxlbWVudERhdGEudGhyb3R0bGUpIHtcbiAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6dHJpZ2dlcicpXG4gICAgICAgICAgICAgIGhhbmRsZXIoZWx0LCBldnQpXG4gICAgICAgICAgICAgIGVsZW1lbnREYXRhLnRocm90dGxlID0gZ2V0V2luZG93KCkuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50RGF0YS50aHJvdHRsZSA9IG51bGxcbiAgICAgICAgICAgICAgfSwgdHJpZ2dlclNwZWMudGhyb3R0bGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyU3BlYy5kZWxheSA+IDApIHtcbiAgICAgICAgICAgIGVsZW1lbnREYXRhLmRlbGF5ZWQgPSBnZXRXaW5kb3coKS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDp0cmlnZ2VyJylcbiAgICAgICAgICAgICAgaGFuZGxlcihlbHQsIGV2dClcbiAgICAgICAgICAgIH0sIHRyaWdnZXJTcGVjLmRlbGF5KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDp0cmlnZ2VyJylcbiAgICAgICAgICAgIGhhbmRsZXIoZWx0LCBldnQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobm9kZURhdGEubGlzdGVuZXJJbmZvcyA9PSBudWxsKSB7XG4gICAgICAgIG5vZGVEYXRhLmxpc3RlbmVySW5mb3MgPSBbXVxuICAgICAgfVxuICAgICAgbm9kZURhdGEubGlzdGVuZXJJbmZvcy5wdXNoKHtcbiAgICAgICAgdHJpZ2dlcjogdHJpZ2dlclNwZWMudHJpZ2dlcixcbiAgICAgICAgbGlzdGVuZXI6IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgIG9uOiBlbHRUb0xpc3Rlbk9uXG4gICAgICB9KVxuICAgICAgZWx0VG9MaXN0ZW5Pbi5hZGRFdmVudExpc3RlbmVyKHRyaWdnZXJTcGVjLnRyaWdnZXIsIGV2ZW50TGlzdGVuZXIpXG4gICAgfSlcbiAgfVxuXG4gIGxldCB3aW5kb3dJc1Njcm9sbGluZyA9IGZhbHNlIC8vIHVzZWQgYnkgaW5pdFNjcm9sbEhhbmRsZXJcbiAgbGV0IHNjcm9sbEhhbmRsZXIgPSBudWxsXG4gIGZ1bmN0aW9uIGluaXRTY3JvbGxIYW5kbGVyKCkge1xuICAgIGlmICghc2Nyb2xsSGFuZGxlcikge1xuICAgICAgc2Nyb2xsSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB3aW5kb3dJc1Njcm9sbGluZyA9IHRydWVcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKVxuICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh3aW5kb3dJc1Njcm9sbGluZykge1xuICAgICAgICAgIHdpbmRvd0lzU2Nyb2xsaW5nID0gZmFsc2VcbiAgICAgICAgICBmb3JFYWNoKGdldERvY3VtZW50KCkucXVlcnlTZWxlY3RvckFsbChcIltoeC10cmlnZ2VyKj0ncmV2ZWFsZWQnXSxbZGF0YS1oeC10cmlnZ2VyKj0ncmV2ZWFsZWQnXVwiKSwgZnVuY3Rpb24oZWx0KSB7XG4gICAgICAgICAgICBtYXliZVJldmVhbChlbHQpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSwgMjAwKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKi9cbiAgZnVuY3Rpb24gbWF5YmVSZXZlYWwoZWx0KSB7XG4gICAgaWYgKCFoYXNBdHRyaWJ1dGUoZWx0LCAnZGF0YS1oeC1yZXZlYWxlZCcpICYmIGlzU2Nyb2xsZWRJbnRvVmlldyhlbHQpKSB7XG4gICAgICBlbHQuc2V0QXR0cmlidXRlKCdkYXRhLWh4LXJldmVhbGVkJywgJ3RydWUnKVxuICAgICAgY29uc3Qgbm9kZURhdGEgPSBnZXRJbnRlcm5hbERhdGEoZWx0KVxuICAgICAgaWYgKG5vZGVEYXRhLmluaXRIYXNoKSB7XG4gICAgICAgIHRyaWdnZXJFdmVudChlbHQsICdyZXZlYWxlZCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiB0aGUgbm9kZSBpc24ndCBpbml0aWFsaXplZCwgd2FpdCBmb3IgaXQgYmVmb3JlIHRyaWdnZXJpbmcgdGhlIHJlcXVlc3RcbiAgICAgICAgZWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2h0bXg6YWZ0ZXJQcm9jZXNzTm9kZScsIGZ1bmN0aW9uKCkgeyB0cmlnZ2VyRXZlbnQoZWx0LCAncmV2ZWFsZWQnKSB9LCB7IG9uY2U6IHRydWUgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcGFyYW0ge1RyaWdnZXJIYW5kbGVyfSBoYW5kbGVyXG4gICAqIEBwYXJhbSB7SHRteE5vZGVJbnRlcm5hbERhdGF9IG5vZGVEYXRhXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxuICAgKi9cbiAgZnVuY3Rpb24gbG9hZEltbWVkaWF0ZWx5KGVsdCwgaGFuZGxlciwgbm9kZURhdGEsIGRlbGF5KSB7XG4gICAgY29uc3QgbG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFub2RlRGF0YS5sb2FkZWQpIHtcbiAgICAgICAgbm9kZURhdGEubG9hZGVkID0gdHJ1ZVxuICAgICAgICBoYW5kbGVyKGVsdClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRlbGF5ID4gMCkge1xuICAgICAgZ2V0V2luZG93KCkuc2V0VGltZW91dChsb2FkLCBkZWxheSlcbiAgICB9IGVsc2Uge1xuICAgICAgbG9hZCgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7SHRteE5vZGVJbnRlcm5hbERhdGF9IG5vZGVEYXRhXG4gICAqIEBwYXJhbSB7SHRteFRyaWdnZXJTcGVjaWZpY2F0aW9uW119IHRyaWdnZXJTcGVjc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIHByb2Nlc3NWZXJicyhlbHQsIG5vZGVEYXRhLCB0cmlnZ2VyU3BlY3MpIHtcbiAgICBsZXQgZXhwbGljaXRBY3Rpb24gPSBmYWxzZVxuICAgIGZvckVhY2goVkVSQlMsIGZ1bmN0aW9uKHZlcmIpIHtcbiAgICAgIGlmIChoYXNBdHRyaWJ1dGUoZWx0LCAnaHgtJyArIHZlcmIpKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBnZXRBdHRyaWJ1dGVWYWx1ZShlbHQsICdoeC0nICsgdmVyYilcbiAgICAgICAgZXhwbGljaXRBY3Rpb24gPSB0cnVlXG4gICAgICAgIG5vZGVEYXRhLnBhdGggPSBwYXRoXG4gICAgICAgIG5vZGVEYXRhLnZlcmIgPSB2ZXJiXG4gICAgICAgIHRyaWdnZXJTcGVjcy5mb3JFYWNoKGZ1bmN0aW9uKHRyaWdnZXJTcGVjKSB7XG4gICAgICAgICAgYWRkVHJpZ2dlckhhbmRsZXIoZWx0LCB0cmlnZ2VyU3BlYywgbm9kZURhdGEsIGZ1bmN0aW9uKG5vZGUsIGV2dCkge1xuICAgICAgICAgICAgY29uc3QgZWx0ID0gYXNFbGVtZW50KG5vZGUpXG4gICAgICAgICAgICBpZiAoY2xvc2VzdChlbHQsIGh0bXguY29uZmlnLmRpc2FibGVTZWxlY3RvcikpIHtcbiAgICAgICAgICAgICAgY2xlYW5VcEVsZW1lbnQoZWx0KVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzc3VlQWpheFJlcXVlc3QodmVyYiwgcGF0aCwgZWx0LCBldnQpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBleHBsaWNpdEFjdGlvblxuICB9XG5cbiAgLyoqXG4gICAqIEBjYWxsYmFjayBUcmlnZ2VySGFuZGxlclxuICAgKiBAcGFyYW0ge05vZGV9IGVsdFxuICAgKiBAcGFyYW0ge0V2ZW50fSBbZXZ0XVxuICAgKi9cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBlbHRcbiAgICogQHBhcmFtIHtIdG14VHJpZ2dlclNwZWNpZmljYXRpb259IHRyaWdnZXJTcGVjXG4gICAqIEBwYXJhbSB7SHRteE5vZGVJbnRlcm5hbERhdGF9IG5vZGVEYXRhXG4gICAqIEBwYXJhbSB7VHJpZ2dlckhhbmRsZXJ9IGhhbmRsZXJcbiAgICovXG4gIGZ1bmN0aW9uIGFkZFRyaWdnZXJIYW5kbGVyKGVsdCwgdHJpZ2dlclNwZWMsIG5vZGVEYXRhLCBoYW5kbGVyKSB7XG4gICAgaWYgKHRyaWdnZXJTcGVjLnRyaWdnZXIgPT09ICdyZXZlYWxlZCcpIHtcbiAgICAgIGluaXRTY3JvbGxIYW5kbGVyKClcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIoZWx0LCBoYW5kbGVyLCBub2RlRGF0YSwgdHJpZ2dlclNwZWMpXG4gICAgICBtYXliZVJldmVhbChhc0VsZW1lbnQoZWx0KSlcbiAgICB9IGVsc2UgaWYgKHRyaWdnZXJTcGVjLnRyaWdnZXIgPT09ICdpbnRlcnNlY3QnKSB7XG4gICAgICBjb25zdCBvYnNlcnZlck9wdGlvbnMgPSB7fVxuICAgICAgaWYgKHRyaWdnZXJTcGVjLnJvb3QpIHtcbiAgICAgICAgb2JzZXJ2ZXJPcHRpb25zLnJvb3QgPSBxdWVyeVNlbGVjdG9yRXh0KGVsdCwgdHJpZ2dlclNwZWMucm9vdClcbiAgICAgIH1cbiAgICAgIGlmICh0cmlnZ2VyU3BlYy50aHJlc2hvbGQpIHtcbiAgICAgICAgb2JzZXJ2ZXJPcHRpb25zLnRocmVzaG9sZCA9IHBhcnNlRmxvYXQodHJpZ2dlclNwZWMudGhyZXNob2xkKVxuICAgICAgfVxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZW50cmllcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBlbnRyeSA9IGVudHJpZXNbaV1cbiAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChlbHQsICdpbnRlcnNlY3QnKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIG9ic2VydmVyT3B0aW9ucylcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoYXNFbGVtZW50KGVsdCkpXG4gICAgICBhZGRFdmVudExpc3RlbmVyKGFzRWxlbWVudChlbHQpLCBoYW5kbGVyLCBub2RlRGF0YSwgdHJpZ2dlclNwZWMpXG4gICAgfSBlbHNlIGlmICh0cmlnZ2VyU3BlYy50cmlnZ2VyID09PSAnbG9hZCcpIHtcbiAgICAgIGlmICghbWF5YmVGaWx0ZXJFdmVudCh0cmlnZ2VyU3BlYywgZWx0LCBtYWtlRXZlbnQoJ2xvYWQnLCB7IGVsdCB9KSkpIHtcbiAgICAgICAgbG9hZEltbWVkaWF0ZWx5KGFzRWxlbWVudChlbHQpLCBoYW5kbGVyLCBub2RlRGF0YSwgdHJpZ2dlclNwZWMuZGVsYXkpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0cmlnZ2VyU3BlYy5wb2xsSW50ZXJ2YWwgPiAwKSB7XG4gICAgICBub2RlRGF0YS5wb2xsaW5nID0gdHJ1ZVxuICAgICAgcHJvY2Vzc1BvbGxpbmcoYXNFbGVtZW50KGVsdCksIGhhbmRsZXIsIHRyaWdnZXJTcGVjKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKGVsdCwgaGFuZGxlciwgbm9kZURhdGEsIHRyaWdnZXJTcGVjKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBzaG91bGRQcm9jZXNzSHhPbihub2RlKSB7XG4gICAgY29uc3QgZWx0ID0gYXNFbGVtZW50KG5vZGUpXG4gICAgaWYgKCFlbHQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gZWx0LmF0dHJpYnV0ZXNcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IGF0dHJOYW1lID0gYXR0cmlidXRlc1tqXS5uYW1lXG4gICAgICBpZiAoc3RhcnRzV2l0aChhdHRyTmFtZSwgJ2h4LW9uOicpIHx8IHN0YXJ0c1dpdGgoYXR0ck5hbWUsICdkYXRhLWh4LW9uOicpIHx8XG4gICAgICAgIHN0YXJ0c1dpdGgoYXR0ck5hbWUsICdoeC1vbi0nKSB8fCBzdGFydHNXaXRoKGF0dHJOYW1lLCAnZGF0YS1oeC1vbi0nKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IGVsdFxuICAgKiBAcmV0dXJucyB7RWxlbWVudFtdfVxuICAgKi9cbiAgY29uc3QgSFhfT05fUVVFUlkgPSBuZXcgWFBhdGhFdmFsdWF0b3IoKVxuICAgIC5jcmVhdGVFeHByZXNzaW9uKCcuLy8qW0AqWyBzdGFydHMtd2l0aChuYW1lKCksIFwiaHgtb246XCIpIG9yIHN0YXJ0cy13aXRoKG5hbWUoKSwgXCJkYXRhLWh4LW9uOlwiKSBvcicgK1xuICAgICAgJyBzdGFydHMtd2l0aChuYW1lKCksIFwiaHgtb24tXCIpIG9yIHN0YXJ0cy13aXRoKG5hbWUoKSwgXCJkYXRhLWh4LW9uLVwiKSBdXScpXG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0hYT25Sb290KGVsdCwgZWxlbWVudHMpIHtcbiAgICBpZiAoc2hvdWxkUHJvY2Vzc0h4T24oZWx0KSkge1xuICAgICAgZWxlbWVudHMucHVzaChhc0VsZW1lbnQoZWx0KSlcbiAgICB9XG4gICAgY29uc3QgaXRlciA9IEhYX09OX1FVRVJZLmV2YWx1YXRlKGVsdClcbiAgICBsZXQgbm9kZSA9IG51bGxcbiAgICB3aGlsZSAobm9kZSA9IGl0ZXIuaXRlcmF0ZU5leHQoKSkgZWxlbWVudHMucHVzaChhc0VsZW1lbnQobm9kZSkpXG4gIH1cblxuICBmdW5jdGlvbiBmaW5kSHhPbldpbGRjYXJkRWxlbWVudHMoZWx0KSB7XG4gICAgLyoqIEB0eXBlIHtFbGVtZW50W119ICovXG4gICAgY29uc3QgZWxlbWVudHMgPSBbXVxuICAgIGlmIChlbHQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGVsdC5jaGlsZE5vZGVzKSB7XG4gICAgICAgIHByb2Nlc3NIWE9uUm9vdChjaGlsZCwgZWxlbWVudHMpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2Nlc3NIWE9uUm9vdChlbHQsIGVsZW1lbnRzKVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHNcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcmV0dXJucyB7Tm9kZUxpc3RPZjxFbGVtZW50PnxbXX1cbiAgICovXG4gIGZ1bmN0aW9uIGZpbmRFbGVtZW50c1RvUHJvY2VzcyhlbHQpIHtcbiAgICBpZiAoZWx0LnF1ZXJ5U2VsZWN0b3JBbGwpIHtcbiAgICAgIGNvbnN0IGJvb3N0ZWRTZWxlY3RvciA9ICcsIFtoeC1ib29zdF0gYSwgW2RhdGEtaHgtYm9vc3RdIGEsIGFbaHgtYm9vc3RdLCBhW2RhdGEtaHgtYm9vc3RdJ1xuXG4gICAgICBjb25zdCBleHRlbnNpb25TZWxlY3RvcnMgPSBbXVxuICAgICAgZm9yIChjb25zdCBlIGluIGV4dGVuc2lvbnMpIHtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1tlXVxuICAgICAgICBpZiAoZXh0ZW5zaW9uLmdldFNlbGVjdG9ycykge1xuICAgICAgICAgIHZhciBzZWxlY3RvcnMgPSBleHRlbnNpb24uZ2V0U2VsZWN0b3JzKClcbiAgICAgICAgICBpZiAoc2VsZWN0b3JzKSB7XG4gICAgICAgICAgICBleHRlbnNpb25TZWxlY3RvcnMucHVzaChzZWxlY3RvcnMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBlbHQucXVlcnlTZWxlY3RvckFsbChWRVJCX1NFTEVDVE9SICsgYm9vc3RlZFNlbGVjdG9yICsgXCIsIGZvcm0sIFt0eXBlPSdzdWJtaXQnXSxcIiArXG4gICAgICAgICcgW2h4LWV4dF0sIFtkYXRhLWh4LWV4dF0sIFtoeC10cmlnZ2VyXSwgW2RhdGEtaHgtdHJpZ2dlcl0nICsgZXh0ZW5zaW9uU2VsZWN0b3JzLmZsYXQoKS5tYXAocyA9PiAnLCAnICsgcykuam9pbignJykpXG5cbiAgICAgIHJldHVybiByZXN1bHRzXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgc3VibWl0IGJ1dHRvbnMvaW5wdXRzIHRoYXQgaGF2ZSB0aGUgZm9ybSBhdHRyaWJ1dGUgc2V0XG4gICAqIHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvYnV0dG9uXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKi9cbiAgZnVuY3Rpb24gbWF5YmVTZXRMYXN0QnV0dG9uQ2xpY2tlZChldnQpIHtcbiAgICBjb25zdCBlbHQgPSAvKiogQHR5cGUge0hUTUxCdXR0b25FbGVtZW50fEhUTUxJbnB1dEVsZW1lbnR9ICovIChjbG9zZXN0KGFzRWxlbWVudChldnQudGFyZ2V0KSwgXCJidXR0b24sIGlucHV0W3R5cGU9J3N1Ym1pdCddXCIpKVxuICAgIGNvbnN0IGludGVybmFsRGF0YSA9IGdldFJlbGF0ZWRGb3JtRGF0YShldnQpXG4gICAgaWYgKGludGVybmFsRGF0YSkge1xuICAgICAgaW50ZXJuYWxEYXRhLmxhc3RCdXR0b25DbGlja2VkID0gZWx0XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKi9cbiAgZnVuY3Rpb24gbWF5YmVVbnNldExhc3RCdXR0b25DbGlja2VkKGV2dCkge1xuICAgIGNvbnN0IGludGVybmFsRGF0YSA9IGdldFJlbGF0ZWRGb3JtRGF0YShldnQpXG4gICAgaWYgKGludGVybmFsRGF0YSkge1xuICAgICAgaW50ZXJuYWxEYXRhLmxhc3RCdXR0b25DbGlja2VkID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHJldHVybnMge0h0bXhOb2RlSW50ZXJuYWxEYXRhfHVuZGVmaW5lZH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldFJlbGF0ZWRGb3JtRGF0YShldnQpIHtcbiAgICBjb25zdCBlbHQgPSBjbG9zZXN0KGFzRWxlbWVudChldnQudGFyZ2V0KSwgXCJidXR0b24sIGlucHV0W3R5cGU9J3N1Ym1pdCddXCIpXG4gICAgaWYgKCFlbHQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBmb3JtID0gcmVzb2x2ZVRhcmdldCgnIycgKyBnZXRSYXdBdHRyaWJ1dGUoZWx0LCAnZm9ybScpLCBlbHQuZ2V0Um9vdE5vZGUoKSkgfHwgY2xvc2VzdChlbHQsICdmb3JtJylcbiAgICBpZiAoIWZvcm0pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICByZXR1cm4gZ2V0SW50ZXJuYWxEYXRhKGZvcm0pXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFdmVudFRhcmdldH0gZWx0XG4gICAqL1xuICBmdW5jdGlvbiBpbml0QnV0dG9uVHJhY2tpbmcoZWx0KSB7XG4gICAgLy8gbmVlZCB0byBoYW5kbGUgYm90aCBjbGljayBhbmQgZm9jdXMgaW46XG4gICAgLy8gICBmb2N1c2luIC0gaW4gY2FzZSBzb21lb25lIHRhYnMgaW4gdG8gYSBidXR0b24gYW5kIGhpdHMgdGhlIHNwYWNlIGJhclxuICAgIC8vICAgY2xpY2sgLSBvbiBPU1ggYnV0dG9ucyBkbyBub3QgZm9jdXMgb24gY2xpY2sgc2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzcyNFxuICAgIGVsdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1heWJlU2V0TGFzdEJ1dHRvbkNsaWNrZWQpXG4gICAgZWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBtYXliZVNldExhc3RCdXR0b25DbGlja2VkKVxuICAgIGVsdC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIG1heWJlVW5zZXRMYXN0QnV0dG9uQ2xpY2tlZClcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlXG4gICAqL1xuICBmdW5jdGlvbiBhZGRIeE9uRXZlbnRIYW5kbGVyKGVsdCwgZXZlbnROYW1lLCBjb2RlKSB7XG4gICAgY29uc3Qgbm9kZURhdGEgPSBnZXRJbnRlcm5hbERhdGEoZWx0KVxuICAgIGlmICghQXJyYXkuaXNBcnJheShub2RlRGF0YS5vbkhhbmRsZXJzKSkge1xuICAgICAgbm9kZURhdGEub25IYW5kbGVycyA9IFtdXG4gICAgfVxuICAgIGxldCBmdW5jXG4gICAgLyoqIEB0eXBlIEV2ZW50TGlzdGVuZXIgKi9cbiAgICBjb25zdCBsaXN0ZW5lciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIG1heWJlRXZhbChlbHQsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoZWx0SXNEaXNhYmxlZChlbHQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmdW5jKSB7XG4gICAgICAgICAgZnVuYyA9IG5ldyBGdW5jdGlvbignZXZlbnQnLCBjb2RlKVxuICAgICAgICB9XG4gICAgICAgIGZ1bmMuY2FsbChlbHQsIGUpXG4gICAgICB9KVxuICAgIH1cbiAgICBlbHQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKVxuICAgIG5vZGVEYXRhLm9uSGFuZGxlcnMucHVzaCh7IGV2ZW50OiBldmVudE5hbWUsIGxpc3RlbmVyIH0pXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICovXG4gIGZ1bmN0aW9uIHByb2Nlc3NIeE9uV2lsZGNhcmQoZWx0KSB7XG4gICAgLy8gd2lwZSBhbnkgcHJldmlvdXMgb24gaGFuZGxlcnMgc28gdGhhdCB0aGlzIGZ1bmN0aW9uIHRha2VzIHByZWNlZGVuY2VcbiAgICBkZUluaXRPbkhhbmRsZXJzKGVsdClcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWx0LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBlbHQuYXR0cmlidXRlc1tpXS5uYW1lXG4gICAgICBjb25zdCB2YWx1ZSA9IGVsdC5hdHRyaWJ1dGVzW2ldLnZhbHVlXG4gICAgICBpZiAoc3RhcnRzV2l0aChuYW1lLCAnaHgtb24nKSB8fCBzdGFydHNXaXRoKG5hbWUsICdkYXRhLWh4LW9uJykpIHtcbiAgICAgICAgY29uc3QgYWZ0ZXJPblBvc2l0aW9uID0gbmFtZS5pbmRleE9mKCctb24nKSArIDNcbiAgICAgICAgY29uc3QgbmV4dENoYXIgPSBuYW1lLnNsaWNlKGFmdGVyT25Qb3NpdGlvbiwgYWZ0ZXJPblBvc2l0aW9uICsgMSlcbiAgICAgICAgaWYgKG5leHRDaGFyID09PSAnLScgfHwgbmV4dENoYXIgPT09ICc6Jykge1xuICAgICAgICAgIGxldCBldmVudE5hbWUgPSBuYW1lLnNsaWNlKGFmdGVyT25Qb3NpdGlvbiArIDEpXG4gICAgICAgICAgLy8gaWYgdGhlIGV2ZW50TmFtZSBzdGFydHMgd2l0aCBhIGNvbG9uIG9yIGRhc2gsIHByZXBlbmQgXCJodG14XCIgZm9yIHNob3J0aGFuZCBzdXBwb3J0XG4gICAgICAgICAgaWYgKHN0YXJ0c1dpdGgoZXZlbnROYW1lLCAnOicpKSB7XG4gICAgICAgICAgICBldmVudE5hbWUgPSAnaHRteCcgKyBldmVudE5hbWVcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YXJ0c1dpdGgoZXZlbnROYW1lLCAnLScpKSB7XG4gICAgICAgICAgICBldmVudE5hbWUgPSAnaHRteDonICsgZXZlbnROYW1lLnNsaWNlKDEpXG4gICAgICAgICAgfSBlbHNlIGlmIChzdGFydHNXaXRoKGV2ZW50TmFtZSwgJ2h0bXgtJykpIHtcbiAgICAgICAgICAgIGV2ZW50TmFtZSA9ICdodG14OicgKyBldmVudE5hbWUuc2xpY2UoNSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhZGRIeE9uRXZlbnRIYW5kbGVyKGVsdCwgZXZlbnROYW1lLCB2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR8SFRNTElucHV0RWxlbWVudH0gZWx0XG4gICAqL1xuICBmdW5jdGlvbiBpbml0Tm9kZShlbHQpIHtcbiAgICBpZiAoY2xvc2VzdChlbHQsIGh0bXguY29uZmlnLmRpc2FibGVTZWxlY3RvcikpIHtcbiAgICAgIGNsZWFuVXBFbGVtZW50KGVsdClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBub2RlRGF0YSA9IGdldEludGVybmFsRGF0YShlbHQpXG4gICAgaWYgKG5vZGVEYXRhLmluaXRIYXNoICE9PSBhdHRyaWJ1dGVIYXNoKGVsdCkpIHtcbiAgICAgIC8vIGNsZWFuIHVwIGFueSBwcmV2aW91c2x5IHByb2Nlc3NlZCBpbmZvXG4gICAgICBkZUluaXROb2RlKGVsdClcblxuICAgICAgbm9kZURhdGEuaW5pdEhhc2ggPSBhdHRyaWJ1dGVIYXNoKGVsdClcblxuICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6YmVmb3JlUHJvY2Vzc05vZGUnKVxuXG4gICAgICAvLyBAdHMtaWdub3JlIHZhbHVlIHdpbGwgYmUgdW5kZWZpbmVkIGZvciBub24taW5wdXQgZWxlbWVudHMsIHdoaWNoIGlzIGZpbmVcbiAgICAgIGlmIChlbHQudmFsdWUpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBub2RlRGF0YS5sYXN0VmFsdWUgPSBlbHQudmFsdWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgdHJpZ2dlclNwZWNzID0gZ2V0VHJpZ2dlclNwZWNzKGVsdClcbiAgICAgIGNvbnN0IGhhc0V4cGxpY2l0SHR0cEFjdGlvbiA9IHByb2Nlc3NWZXJicyhlbHQsIG5vZGVEYXRhLCB0cmlnZ2VyU3BlY3MpXG5cbiAgICAgIGlmICghaGFzRXhwbGljaXRIdHRwQWN0aW9uKSB7XG4gICAgICAgIGlmIChnZXRDbG9zZXN0QXR0cmlidXRlVmFsdWUoZWx0LCAnaHgtYm9vc3QnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgYm9vc3RFbGVtZW50KGVsdCwgbm9kZURhdGEsIHRyaWdnZXJTcGVjcylcbiAgICAgICAgfSBlbHNlIGlmIChoYXNBdHRyaWJ1dGUoZWx0LCAnaHgtdHJpZ2dlcicpKSB7XG4gICAgICAgICAgdHJpZ2dlclNwZWNzLmZvckVhY2goZnVuY3Rpb24odHJpZ2dlclNwZWMpIHtcbiAgICAgICAgICAgIC8vIEZvciBcIm5ha2VkXCIgdHJpZ2dlcnMsIGRvbid0IGRvIGFueXRoaW5nIGF0IGFsbFxuICAgICAgICAgICAgYWRkVHJpZ2dlckhhbmRsZXIoZWx0LCB0cmlnZ2VyU3BlYywgbm9kZURhdGEsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEhhbmRsZSBzdWJtaXQgYnV0dG9ucy9pbnB1dHMgdGhhdCBoYXZlIHRoZSBmb3JtIGF0dHJpYnV0ZSBzZXRcbiAgICAgIC8vIHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvYnV0dG9uXG4gICAgICBpZiAoZWx0LnRhZ05hbWUgPT09ICdGT1JNJyB8fCAoZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ3R5cGUnKSA9PT0gJ3N1Ym1pdCcgJiYgaGFzQXR0cmlidXRlKGVsdCwgJ2Zvcm0nKSkpIHtcbiAgICAgICAgaW5pdEJ1dHRvblRyYWNraW5nKGVsdClcbiAgICAgIH1cblxuICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6YWZ0ZXJQcm9jZXNzTm9kZScpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByb2Nlc3NlcyBuZXcgY29udGVudCwgZW5hYmxpbmcgaHRteCBiZWhhdmlvci4gVGhpcyBjYW4gYmUgdXNlZnVsIGlmIHlvdSBoYXZlIGNvbnRlbnQgdGhhdCBpcyBhZGRlZCB0byB0aGUgRE9NIG91dHNpZGUgb2YgdGhlIG5vcm1hbCBodG14IHJlcXVlc3QgY3ljbGUgYnV0IHN0aWxsIHdhbnQgaHRteCBhdHRyaWJ1dGVzIHRvIHdvcmsuXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI3Byb2Nlc3NcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fHN0cmluZ30gZWx0IGVsZW1lbnQgdG8gcHJvY2Vzc1xuICAgKi9cbiAgZnVuY3Rpb24gcHJvY2Vzc05vZGUoZWx0KSB7XG4gICAgZWx0ID0gcmVzb2x2ZVRhcmdldChlbHQpXG4gICAgaWYgKGNsb3Nlc3QoZWx0LCBodG14LmNvbmZpZy5kaXNhYmxlU2VsZWN0b3IpKSB7XG4gICAgICBjbGVhblVwRWxlbWVudChlbHQpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaW5pdE5vZGUoZWx0KVxuICAgIGZvckVhY2goZmluZEVsZW1lbnRzVG9Qcm9jZXNzKGVsdCksIGZ1bmN0aW9uKGNoaWxkKSB7IGluaXROb2RlKGNoaWxkKSB9KVxuICAgIGZvckVhY2goZmluZEh4T25XaWxkY2FyZEVsZW1lbnRzKGVsdCksIHByb2Nlc3NIeE9uV2lsZGNhcmQpXG4gIH1cblxuICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBFdmVudC9Mb2cgU3VwcG9ydFxuICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBrZWJhYkV2ZW50TmFtZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSB7YW55fSBkZXRhaWxcbiAgICogQHJldHVybnMge0N1c3RvbUV2ZW50fVxuICAgKi9cbiAgZnVuY3Rpb24gbWFrZUV2ZW50KGV2ZW50TmFtZSwgZGV0YWlsKSB7XG4gICAgbGV0IGV2dFxuICAgIGlmICh3aW5kb3cuQ3VzdG9tRXZlbnQgJiYgdHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gVE9ETzogYGNvbXBvc2VkOiB0cnVlYCBoZXJlIGlzIGEgaGFjayB0byBtYWtlIGdsb2JhbCBldmVudCBoYW5kbGVycyB3b3JrIHdpdGggZXZlbnRzIGluIHNoYWRvdyBET01cbiAgICAgIC8vIFRoaXMgYnJlYWtzIGV4cGVjdGVkIGVuY2Fwc3VsYXRpb24gYnV0IG5lZWRzIHRvIGJlIGhlcmUgdW50aWwgZGVjaWRlZCBvdGhlcndpc2UgYnkgY29yZSBkZXZzXG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGNvbXBvc2VkOiB0cnVlLCBkZXRhaWwgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgZXZ0ID0gZ2V0RG9jdW1lbnQoKS5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChldmVudE5hbWUsIHRydWUsIHRydWUsIGRldGFpbClcbiAgICB9XG4gICAgcmV0dXJuIGV2dFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8c3RyaW5nfSBlbHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgKiBAcGFyYW0ge2FueT19IGRldGFpbFxuICAgKi9cbiAgZnVuY3Rpb24gdHJpZ2dlckVycm9yRXZlbnQoZWx0LCBldmVudE5hbWUsIGRldGFpbCkge1xuICAgIHRyaWdnZXJFdmVudChlbHQsIGV2ZW50TmFtZSwgbWVyZ2VPYmplY3RzKHsgZXJyb3I6IGV2ZW50TmFtZSB9LCBkZXRhaWwpKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpZ25vcmVFdmVudEZvckxvZ2dpbmcoZXZlbnROYW1lKSB7XG4gICAgcmV0dXJuIGV2ZW50TmFtZSA9PT0gJ2h0bXg6YWZ0ZXJQcm9jZXNzTm9kZSdcbiAgfVxuXG4gIC8qKlxuICAgKiBgd2l0aEV4dGVuc2lvbnNgIGxvY2F0ZXMgYWxsIGFjdGl2ZSBleHRlbnNpb25zIGZvciBhIHByb3ZpZGVkIGVsZW1lbnQsIHRoZW5cbiAgICogZXhlY3V0ZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIHVzaW5nIGVhY2ggb2YgdGhlIGFjdGl2ZSBleHRlbnNpb25zLiAgSXQgc2hvdWxkXG4gICAqIGJlIGNhbGxlZCBpbnRlcm5hbGx5IGF0IGV2ZXJ5IGV4dGVuZGFibGUgZXhlY3V0aW9uIHBvaW50IGluIGh0bXguXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7KGV4dGVuc2lvbjpIdG14RXh0ZW5zaW9uKSA9PiB2b2lkfSB0b0RvXG4gICAqIEByZXR1cm5zIHZvaWRcbiAgICovXG4gIGZ1bmN0aW9uIHdpdGhFeHRlbnNpb25zKGVsdCwgdG9Ebykge1xuICAgIGZvckVhY2goZ2V0RXh0ZW5zaW9ucyhlbHQpLCBmdW5jdGlvbihleHRlbnNpb24pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRvRG8oZXh0ZW5zaW9uKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2dFcnJvcihlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBsb2dFcnJvcihtc2cpIHtcbiAgICBpZiAoY29uc29sZS5lcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihtc2cpXG4gICAgfSBlbHNlIGlmIChjb25zb2xlLmxvZykge1xuICAgICAgY29uc29sZS5sb2coJ0VSUk9SOiAnLCBtc2cpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIGEgZ2l2ZW4gZXZlbnQgb24gYW4gZWxlbWVudFxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyN0cmlnZ2VyXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8c3RyaW5nfSBlbHQgdGhlIGVsZW1lbnQgdG8gdHJpZ2dlciB0aGUgZXZlbnQgb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSB0aGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gdHJpZ2dlclxuICAgKiBAcGFyYW0ge2FueT19IGRldGFpbCBkZXRhaWxzIGZvciB0aGUgZXZlbnRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiB0cmlnZ2VyRXZlbnQoZWx0LCBldmVudE5hbWUsIGRldGFpbCkge1xuICAgIGVsdCA9IHJlc29sdmVUYXJnZXQoZWx0KVxuICAgIGlmIChkZXRhaWwgPT0gbnVsbCkge1xuICAgICAgZGV0YWlsID0ge31cbiAgICB9XG4gICAgZGV0YWlsLmVsdCA9IGVsdFxuICAgIGNvbnN0IGV2ZW50ID0gbWFrZUV2ZW50KGV2ZW50TmFtZSwgZGV0YWlsKVxuICAgIGlmIChodG14LmxvZ2dlciAmJiAhaWdub3JlRXZlbnRGb3JMb2dnaW5nKGV2ZW50TmFtZSkpIHtcbiAgICAgIGh0bXgubG9nZ2VyKGVsdCwgZXZlbnROYW1lLCBkZXRhaWwpXG4gICAgfVxuICAgIGlmIChkZXRhaWwuZXJyb3IpIHtcbiAgICAgIGxvZ0Vycm9yKGRldGFpbC5lcnJvcilcbiAgICAgIHRyaWdnZXJFdmVudChlbHQsICdodG14OmVycm9yJywgeyBlcnJvckluZm86IGRldGFpbCB9KVxuICAgIH1cbiAgICBsZXQgZXZlbnRSZXN1bHQgPSBlbHQuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICBjb25zdCBrZWJhYk5hbWUgPSBrZWJhYkV2ZW50TmFtZShldmVudE5hbWUpXG4gICAgaWYgKGV2ZW50UmVzdWx0ICYmIGtlYmFiTmFtZSAhPT0gZXZlbnROYW1lKSB7XG4gICAgICBjb25zdCBrZWJhYmVkRXZlbnQgPSBtYWtlRXZlbnQoa2ViYWJOYW1lLCBldmVudC5kZXRhaWwpXG4gICAgICBldmVudFJlc3VsdCA9IGV2ZW50UmVzdWx0ICYmIGVsdC5kaXNwYXRjaEV2ZW50KGtlYmFiZWRFdmVudClcbiAgICB9XG4gICAgd2l0aEV4dGVuc2lvbnMoYXNFbGVtZW50KGVsdCksIGZ1bmN0aW9uKGV4dGVuc2lvbikge1xuICAgICAgZXZlbnRSZXN1bHQgPSBldmVudFJlc3VsdCAmJiAoZXh0ZW5zaW9uLm9uRXZlbnQoZXZlbnROYW1lLCBldmVudCkgIT09IGZhbHNlICYmICFldmVudC5kZWZhdWx0UHJldmVudGVkKVxuICAgIH0pXG4gICAgcmV0dXJuIGV2ZW50UmVzdWx0XG4gIH1cblxuICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBIaXN0b3J5IFN1cHBvcnRcbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgbGV0IGN1cnJlbnRQYXRoRm9ySGlzdG9yeSA9IGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoXG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtFbGVtZW50fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SGlzdG9yeUVsZW1lbnQoKSB7XG4gICAgY29uc3QgaGlzdG9yeUVsdCA9IGdldERvY3VtZW50KCkucXVlcnlTZWxlY3RvcignW2h4LWhpc3RvcnktZWx0XSxbZGF0YS1oeC1oaXN0b3J5LWVsdF0nKVxuICAgIHJldHVybiBoaXN0b3J5RWx0IHx8IGdldERvY3VtZW50KCkuYm9keVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtFbGVtZW50fSByb290RWx0XG4gICAqL1xuICBmdW5jdGlvbiBzYXZlVG9IaXN0b3J5Q2FjaGUodXJsLCByb290RWx0KSB7XG4gICAgaWYgKCFjYW5BY2Nlc3NMb2NhbFN0b3JhZ2UoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gZ2V0IHN0YXRlIHRvIHNhdmVcbiAgICBjb25zdCBpbm5lckhUTUwgPSBjbGVhbklubmVySHRtbEZvckhpc3Rvcnkocm9vdEVsdClcbiAgICBjb25zdCB0aXRsZSA9IGdldERvY3VtZW50KCkudGl0bGVcbiAgICBjb25zdCBzY3JvbGwgPSB3aW5kb3cuc2Nyb2xsWVxuXG4gICAgaWYgKGh0bXguY29uZmlnLmhpc3RvcnlDYWNoZVNpemUgPD0gMCkge1xuICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgYW4gZXZlbnR1YWxseSBhbHJlYWR5IGV4aXN0aW5nIGNhY2hlIGlzIHB1cmdlZFxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2h0bXgtaGlzdG9yeS1jYWNoZScpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB1cmwgPSBub3JtYWxpemVQYXRoKHVybClcblxuICAgIGNvbnN0IGhpc3RvcnlDYWNoZSA9IHBhcnNlSlNPTihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaHRteC1oaXN0b3J5LWNhY2hlJykpIHx8IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaXN0b3J5Q2FjaGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChoaXN0b3J5Q2FjaGVbaV0udXJsID09PSB1cmwpIHtcbiAgICAgICAgaGlzdG9yeUNhY2hlLnNwbGljZShpLCAxKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAdHlwZSBIdG14SGlzdG9yeUl0ZW0gKi9cbiAgICBjb25zdCBuZXdIaXN0b3J5SXRlbSA9IHsgdXJsLCBjb250ZW50OiBpbm5lckhUTUwsIHRpdGxlLCBzY3JvbGwgfVxuXG4gICAgdHJpZ2dlckV2ZW50KGdldERvY3VtZW50KCkuYm9keSwgJ2h0bXg6aGlzdG9yeUl0ZW1DcmVhdGVkJywgeyBpdGVtOiBuZXdIaXN0b3J5SXRlbSwgY2FjaGU6IGhpc3RvcnlDYWNoZSB9KVxuXG4gICAgaGlzdG9yeUNhY2hlLnB1c2gobmV3SGlzdG9yeUl0ZW0pXG4gICAgd2hpbGUgKGhpc3RvcnlDYWNoZS5sZW5ndGggPiBodG14LmNvbmZpZy5oaXN0b3J5Q2FjaGVTaXplKSB7XG4gICAgICBoaXN0b3J5Q2FjaGUuc2hpZnQoKVxuICAgIH1cblxuICAgIC8vIGtlZXAgdHJ5aW5nIHRvIHNhdmUgdGhlIGNhY2hlIHVudGlsIGl0IHN1Y2NlZWRzIG9yIGlzIGVtcHR5XG4gICAgd2hpbGUgKGhpc3RvcnlDYWNoZS5sZW5ndGggPiAwKSB7XG4gICAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaHRteC1oaXN0b3J5LWNhY2hlJywgSlNPTi5zdHJpbmdpZnkoaGlzdG9yeUNhY2hlKSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZ2V0RG9jdW1lbnQoKS5ib2R5LCAnaHRteDpoaXN0b3J5Q2FjaGVFcnJvcicsIHsgY2F1c2U6IGUsIGNhY2hlOiBoaXN0b3J5Q2FjaGUgfSlcbiAgICAgICAgaGlzdG9yeUNhY2hlLnNoaWZ0KCkgLy8gc2hyaW5rIHRoZSBjYWNoZSBhbmQgcmV0cnlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHR5cGVkZWYge09iamVjdH0gSHRteEhpc3RvcnlJdGVtXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1cmxcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGNvbnRlbnRcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHRpdGxlXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzY3JvbGxcbiAgICovXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHJldHVybnMge0h0bXhIaXN0b3J5SXRlbXxudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Q2FjaGVkSGlzdG9yeSh1cmwpIHtcbiAgICBpZiAoIWNhbkFjY2Vzc0xvY2FsU3RvcmFnZSgpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHVybCA9IG5vcm1hbGl6ZVBhdGgodXJsKVxuXG4gICAgY29uc3QgaGlzdG9yeUNhY2hlID0gcGFyc2VKU09OKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdodG14LWhpc3RvcnktY2FjaGUnKSkgfHwgW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpc3RvcnlDYWNoZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGhpc3RvcnlDYWNoZVtpXS51cmwgPT09IHVybCkge1xuICAgICAgICByZXR1cm4gaGlzdG9yeUNhY2hlW2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGNsZWFuSW5uZXJIdG1sRm9ySGlzdG9yeShlbHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBodG14LmNvbmZpZy5yZXF1ZXN0Q2xhc3NcbiAgICBjb25zdCBjbG9uZSA9IC8qKiBAdHlwZSBFbGVtZW50ICovIChlbHQuY2xvbmVOb2RlKHRydWUpKVxuICAgIGZvckVhY2goZmluZEFsbChjbG9uZSwgJy4nICsgY2xhc3NOYW1lKSwgZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoY2hpbGQsIGNsYXNzTmFtZSlcbiAgICB9KVxuICAgIC8vIHJlbW92ZSB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIGZvciBhbnkgZWxlbWVudCBkaXNhYmxlZCBkdWUgdG8gYW4gaHRteCByZXF1ZXN0XG4gICAgZm9yRWFjaChmaW5kQWxsKGNsb25lLCAnW2RhdGEtZGlzYWJsZWQtYnktaHRteF0nKSwgZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH0pXG4gICAgcmV0dXJuIGNsb25lLmlubmVySFRNTFxuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZUN1cnJlbnRQYWdlVG9IaXN0b3J5KCkge1xuICAgIGNvbnN0IGVsdCA9IGdldEhpc3RvcnlFbGVtZW50KClcbiAgICBjb25zdCBwYXRoID0gY3VycmVudFBhdGhGb3JIaXN0b3J5IHx8IGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoXG5cbiAgICAvLyBBbGxvdyBoaXN0b3J5IHNuYXBzaG90IGZlYXR1cmUgdG8gYmUgZGlzYWJsZWQgd2hlcmUgaHgtaGlzdG9yeT1cImZhbHNlXCJcbiAgICAvLyBpcyBwcmVzZW50ICphbnl3aGVyZSogaW4gdGhlIGN1cnJlbnQgZG9jdW1lbnQgd2UncmUgYWJvdXQgdG8gc2F2ZSxcbiAgICAvLyBzbyB3ZSBjYW4gcHJldmVudCBwcml2aWxlZ2VkIGRhdGEgZW50ZXJpbmcgdGhlIGNhY2hlLlxuICAgIC8vIFRoZSBwYWdlIHdpbGwgc3RpbGwgYmUgcmVhY2hhYmxlIGFzIGEgaGlzdG9yeSBlbnRyeSwgYnV0IGh0bXggd2lsbCBmZXRjaCBpdFxuICAgIC8vIGxpdmUgZnJvbSB0aGUgc2VydmVyIG9ucG9wc3RhdGUgcmF0aGVyIHRoYW4gbG9vayBpbiB0aGUgbG9jYWxTdG9yYWdlIGNhY2hlXG4gICAgbGV0IGRpc2FibGVIaXN0b3J5Q2FjaGVcbiAgICB0cnkge1xuICAgICAgZGlzYWJsZUhpc3RvcnlDYWNoZSA9IGdldERvY3VtZW50KCkucXVlcnlTZWxlY3RvcignW2h4LWhpc3Rvcnk9XCJmYWxzZVwiIGldLFtkYXRhLWh4LWhpc3Rvcnk9XCJmYWxzZVwiIGldJylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgLy8gSUUxMTogaW5zZW5zaXRpdmUgbW9kaWZpZXIgbm90IHN1cHBvcnRlZCBzbyBmYWxsYmFjayB0byBjYXNlIHNlbnNpdGl2ZSBzZWxlY3RvclxuICAgICAgZGlzYWJsZUhpc3RvcnlDYWNoZSA9IGdldERvY3VtZW50KCkucXVlcnlTZWxlY3RvcignW2h4LWhpc3Rvcnk9XCJmYWxzZVwiXSxbZGF0YS1oeC1oaXN0b3J5PVwiZmFsc2VcIl0nKVxuICAgIH1cbiAgICBpZiAoIWRpc2FibGVIaXN0b3J5Q2FjaGUpIHtcbiAgICAgIHRyaWdnZXJFdmVudChnZXREb2N1bWVudCgpLmJvZHksICdodG14OmJlZm9yZUhpc3RvcnlTYXZlJywgeyBwYXRoLCBoaXN0b3J5RWx0OiBlbHQgfSlcbiAgICAgIHNhdmVUb0hpc3RvcnlDYWNoZShwYXRoLCBlbHQpXG4gICAgfVxuXG4gICAgaWYgKGh0bXguY29uZmlnLmhpc3RvcnlFbmFibGVkKSBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGh0bXg6IHRydWUgfSwgZ2V0RG9jdW1lbnQoKS50aXRsZSwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICovXG4gIGZ1bmN0aW9uIHB1c2hVcmxJbnRvSGlzdG9yeShwYXRoKSB7XG4gIC8vIHJlbW92ZSB0aGUgY2FjaGUgYnVzdGVyIHBhcmFtZXRlciwgaWYgYW55XG4gICAgaWYgKGh0bXguY29uZmlnLmdldENhY2hlQnVzdGVyUGFyYW0pIHtcbiAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL29yZ1xcLmh0bXhcXC5jYWNoZS1idXN0ZXI9W14mXSomPy8sICcnKVxuICAgICAgaWYgKGVuZHNXaXRoKHBhdGgsICcmJykgfHwgZW5kc1dpdGgocGF0aCwgJz8nKSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zbGljZSgwLCAtMSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGh0bXguY29uZmlnLmhpc3RvcnlFbmFibGVkKSB7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7IGh0bXg6IHRydWUgfSwgJycsIHBhdGgpXG4gICAgfVxuICAgIGN1cnJlbnRQYXRoRm9ySGlzdG9yeSA9IHBhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgKi9cbiAgZnVuY3Rpb24gcmVwbGFjZVVybEluSGlzdG9yeShwYXRoKSB7XG4gICAgaWYgKGh0bXguY29uZmlnLmhpc3RvcnlFbmFibGVkKSBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGh0bXg6IHRydWUgfSwgJycsIHBhdGgpXG4gICAgY3VycmVudFBhdGhGb3JIaXN0b3J5ID0gcGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SHRteFNldHRsZVRhc2tbXX0gdGFza3NcbiAgICovXG4gIGZ1bmN0aW9uIHNldHRsZUltbWVkaWF0ZWx5KHRhc2tzKSB7XG4gICAgZm9yRWFjaCh0YXNrcywgZnVuY3Rpb24odGFzaykge1xuICAgICAgdGFzay5jYWxsKHVuZGVmaW5lZClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAqL1xuICBmdW5jdGlvbiBsb2FkSGlzdG9yeUZyb21TZXJ2ZXIocGF0aCkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgIGNvbnN0IGRldGFpbHMgPSB7IHBhdGgsIHhocjogcmVxdWVzdCB9XG4gICAgdHJpZ2dlckV2ZW50KGdldERvY3VtZW50KCkuYm9keSwgJ2h0bXg6aGlzdG9yeUNhY2hlTWlzcycsIGRldGFpbHMpXG4gICAgcmVxdWVzdC5vcGVuKCdHRVQnLCBwYXRoLCB0cnVlKVxuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignSFgtUmVxdWVzdCcsICd0cnVlJylcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0hYLUhpc3RvcnktUmVzdG9yZS1SZXF1ZXN0JywgJ3RydWUnKVxuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignSFgtQ3VycmVudC1VUkwnLCBnZXREb2N1bWVudCgpLmxvY2F0aW9uLmhyZWYpXG4gICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgdHJpZ2dlckV2ZW50KGdldERvY3VtZW50KCkuYm9keSwgJ2h0bXg6aGlzdG9yeUNhY2hlTWlzc0xvYWQnLCBkZXRhaWxzKVxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IG1ha2VGcmFnbWVudCh0aGlzLnJlc3BvbnNlKVxuICAgICAgICAvKiogQHR5cGUgUGFyZW50Tm9kZSAqL1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZnJhZ21lbnQucXVlcnlTZWxlY3RvcignW2h4LWhpc3RvcnktZWx0XSxbZGF0YS1oeC1oaXN0b3J5LWVsdF0nKSB8fCBmcmFnbWVudFxuICAgICAgICBjb25zdCBoaXN0b3J5RWxlbWVudCA9IGdldEhpc3RvcnlFbGVtZW50KClcbiAgICAgICAgY29uc3Qgc2V0dGxlSW5mbyA9IG1ha2VTZXR0bGVJbmZvKGhpc3RvcnlFbGVtZW50KVxuICAgICAgICBoYW5kbGVUaXRsZShmcmFnbWVudC50aXRsZSlcblxuICAgICAgICBzd2FwSW5uZXJIVE1MKGhpc3RvcnlFbGVtZW50LCBjb250ZW50LCBzZXR0bGVJbmZvKVxuICAgICAgICBzZXR0bGVJbW1lZGlhdGVseShzZXR0bGVJbmZvLnRhc2tzKVxuICAgICAgICBjdXJyZW50UGF0aEZvckhpc3RvcnkgPSBwYXRoXG4gICAgICAgIHRyaWdnZXJFdmVudChnZXREb2N1bWVudCgpLmJvZHksICdodG14Omhpc3RvcnlSZXN0b3JlJywgeyBwYXRoLCBjYWNoZU1pc3M6IHRydWUsIHNlcnZlclJlc3BvbnNlOiB0aGlzLnJlc3BvbnNlIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmlnZ2VyRXJyb3JFdmVudChnZXREb2N1bWVudCgpLmJvZHksICdodG14Omhpc3RvcnlDYWNoZU1pc3NMb2FkRXJyb3InLCBkZXRhaWxzKVxuICAgICAgfVxuICAgIH1cbiAgICByZXF1ZXN0LnNlbmQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbcGF0aF1cbiAgICovXG4gIGZ1bmN0aW9uIHJlc3RvcmVIaXN0b3J5KHBhdGgpIHtcbiAgICBzYXZlQ3VycmVudFBhZ2VUb0hpc3RvcnkoKVxuICAgIHBhdGggPSBwYXRoIHx8IGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoXG4gICAgY29uc3QgY2FjaGVkID0gZ2V0Q2FjaGVkSGlzdG9yeShwYXRoKVxuICAgIGlmIChjYWNoZWQpIHtcbiAgICAgIGNvbnN0IGZyYWdtZW50ID0gbWFrZUZyYWdtZW50KGNhY2hlZC5jb250ZW50KVxuICAgICAgY29uc3QgaGlzdG9yeUVsZW1lbnQgPSBnZXRIaXN0b3J5RWxlbWVudCgpXG4gICAgICBjb25zdCBzZXR0bGVJbmZvID0gbWFrZVNldHRsZUluZm8oaGlzdG9yeUVsZW1lbnQpXG4gICAgICBoYW5kbGVUaXRsZShmcmFnbWVudC50aXRsZSlcbiAgICAgIHN3YXBJbm5lckhUTUwoaGlzdG9yeUVsZW1lbnQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICAgICAgc2V0dGxlSW1tZWRpYXRlbHkoc2V0dGxlSW5mby50YXNrcylcbiAgICAgIGdldFdpbmRvdygpLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBjYWNoZWQuc2Nyb2xsKVxuICAgICAgfSwgMCkgLy8gbmV4dCAndGljaycsIHNvIGJyb3dzZXIgaGFzIHRpbWUgdG8gcmVuZGVyIGxheW91dFxuICAgICAgY3VycmVudFBhdGhGb3JIaXN0b3J5ID0gcGF0aFxuICAgICAgdHJpZ2dlckV2ZW50KGdldERvY3VtZW50KCkuYm9keSwgJ2h0bXg6aGlzdG9yeVJlc3RvcmUnLCB7IHBhdGgsIGl0ZW06IGNhY2hlZCB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaHRteC5jb25maWcucmVmcmVzaE9uSGlzdG9yeU1pc3MpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogb3B0aW9uYWwgcGFyYW1ldGVyIGluIHJlbG9hZCgpIGZ1bmN0aW9uIHRocm93cyBlcnJvclxuICAgICAgICAvLyBub2luc3BlY3Rpb24gSlNVbnJlc29sdmVkUmVmZXJlbmNlXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvYWRIaXN0b3J5RnJvbVNlcnZlcihwYXRoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcmV0dXJucyB7RWxlbWVudFtdfVxuICAgKi9cbiAgZnVuY3Rpb24gYWRkUmVxdWVzdEluZGljYXRvckNsYXNzZXMoZWx0KSB7XG4gICAgbGV0IGluZGljYXRvcnMgPSAvKiogQHR5cGUgRWxlbWVudFtdICovIChmaW5kQXR0cmlidXRlVGFyZ2V0cyhlbHQsICdoeC1pbmRpY2F0b3InKSlcbiAgICBpZiAoaW5kaWNhdG9ycyA9PSBudWxsKSB7XG4gICAgICBpbmRpY2F0b3JzID0gW2VsdF1cbiAgICB9XG4gICAgZm9yRWFjaChpbmRpY2F0b3JzLCBmdW5jdGlvbihpYykge1xuICAgICAgY29uc3QgaW50ZXJuYWxEYXRhID0gZ2V0SW50ZXJuYWxEYXRhKGljKVxuICAgICAgaW50ZXJuYWxEYXRhLnJlcXVlc3RDb3VudCA9IChpbnRlcm5hbERhdGEucmVxdWVzdENvdW50IHx8IDApICsgMVxuICAgICAgaWMuY2xhc3NMaXN0LmFkZC5jYWxsKGljLmNsYXNzTGlzdCwgaHRteC5jb25maWcucmVxdWVzdENsYXNzKVxuICAgIH0pXG4gICAgcmV0dXJuIGluZGljYXRvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcmV0dXJucyB7RWxlbWVudFtdfVxuICAgKi9cbiAgZnVuY3Rpb24gZGlzYWJsZUVsZW1lbnRzKGVsdCkge1xuICAgIGxldCBkaXNhYmxlZEVsdHMgPSAvKiogQHR5cGUgRWxlbWVudFtdICovIChmaW5kQXR0cmlidXRlVGFyZ2V0cyhlbHQsICdoeC1kaXNhYmxlZC1lbHQnKSlcbiAgICBpZiAoZGlzYWJsZWRFbHRzID09IG51bGwpIHtcbiAgICAgIGRpc2FibGVkRWx0cyA9IFtdXG4gICAgfVxuICAgIGZvckVhY2goZGlzYWJsZWRFbHRzLCBmdW5jdGlvbihkaXNhYmxlZEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGludGVybmFsRGF0YSA9IGdldEludGVybmFsRGF0YShkaXNhYmxlZEVsZW1lbnQpXG4gICAgICBpbnRlcm5hbERhdGEucmVxdWVzdENvdW50ID0gKGludGVybmFsRGF0YS5yZXF1ZXN0Q291bnQgfHwgMCkgKyAxXG4gICAgICBkaXNhYmxlZEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgZGlzYWJsZWRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1kaXNhYmxlZC1ieS1odG14JywgJycpXG4gICAgfSlcbiAgICByZXR1cm4gZGlzYWJsZWRFbHRzXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50W119IGluZGljYXRvcnNcbiAgICogQHBhcmFtIHtFbGVtZW50W119IGRpc2FibGVkXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVSZXF1ZXN0SW5kaWNhdG9ycyhpbmRpY2F0b3JzLCBkaXNhYmxlZCkge1xuICAgIGZvckVhY2goaW5kaWNhdG9ycywgZnVuY3Rpb24oaWMpIHtcbiAgICAgIGNvbnN0IGludGVybmFsRGF0YSA9IGdldEludGVybmFsRGF0YShpYylcbiAgICAgIGludGVybmFsRGF0YS5yZXF1ZXN0Q291bnQgPSAoaW50ZXJuYWxEYXRhLnJlcXVlc3RDb3VudCB8fCAwKSAtIDFcbiAgICAgIGlmIChpbnRlcm5hbERhdGEucmVxdWVzdENvdW50ID09PSAwKSB7XG4gICAgICAgIGljLmNsYXNzTGlzdC5yZW1vdmUuY2FsbChpYy5jbGFzc0xpc3QsIGh0bXguY29uZmlnLnJlcXVlc3RDbGFzcylcbiAgICAgIH1cbiAgICB9KVxuICAgIGZvckVhY2goZGlzYWJsZWQsIGZ1bmN0aW9uKGRpc2FibGVkRWxlbWVudCkge1xuICAgICAgY29uc3QgaW50ZXJuYWxEYXRhID0gZ2V0SW50ZXJuYWxEYXRhKGRpc2FibGVkRWxlbWVudClcbiAgICAgIGludGVybmFsRGF0YS5yZXF1ZXN0Q291bnQgPSAoaW50ZXJuYWxEYXRhLnJlcXVlc3RDb3VudCB8fCAwKSAtIDFcbiAgICAgIGlmIChpbnRlcm5hbERhdGEucmVxdWVzdENvdW50ID09PSAwKSB7XG4gICAgICAgIGRpc2FibGVkRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgZGlzYWJsZWRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1kaXNhYmxlZC1ieS1odG14JylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gSW5wdXQgVmFsdWUgUHJvY2Vzc2luZ1xuICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnRbXX0gcHJvY2Vzc2VkXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaGF2ZVNlZW5Ob2RlKHByb2Nlc3NlZCwgZWx0KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9jZXNzZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBwcm9jZXNzZWRbaV1cbiAgICAgIGlmIChub2RlLmlzU2FtZU5vZGUoZWx0KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIHNob3VsZEluY2x1ZGUoZWxlbWVudCkge1xuICAgIC8vIENhc3QgdG8gdHJpY2sgdHNjLCB1bmRlZmluZWQgdmFsdWVzIHdpbGwgd29yayBmaW5lIGhlcmVcbiAgICBjb25zdCBlbHQgPSAvKiogQHR5cGUge0hUTUxJbnB1dEVsZW1lbnR9ICovIChlbGVtZW50KVxuICAgIGlmIChlbHQubmFtZSA9PT0gJycgfHwgZWx0Lm5hbWUgPT0gbnVsbCB8fCBlbHQuZGlzYWJsZWQgfHwgY2xvc2VzdChlbHQsICdmaWVsZHNldFtkaXNhYmxlZF0nKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIC8vIGlnbm9yZSBcInN1Ym1pdHRlclwiIHR5cGVzIChzZWUgalF1ZXJ5IHNyYy9zZXJpYWxpemUuanMpXG4gICAgaWYgKGVsdC50eXBlID09PSAnYnV0dG9uJyB8fCBlbHQudHlwZSA9PT0gJ3N1Ym1pdCcgfHwgZWx0LnRhZ05hbWUgPT09ICdpbWFnZScgfHwgZWx0LnRhZ05hbWUgPT09ICdyZXNldCcgfHwgZWx0LnRhZ05hbWUgPT09ICdmaWxlJykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmIChlbHQudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBlbHQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgcmV0dXJuIGVsdC5jaGVja2VkXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8QXJyYXl8Rm9ybURhdGFFbnRyeVZhbHVlfSB2YWx1ZVxuICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBmb3JtRGF0YSAqL1xuICBmdW5jdGlvbiBhZGRWYWx1ZVRvRm9ybURhdGEobmFtZSwgdmFsdWUsIGZvcm1EYXRhKSB7XG4gICAgaWYgKG5hbWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSBudWxsKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbih2KSB7IGZvcm1EYXRhLmFwcGVuZChuYW1lLCB2KSB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0gdmFsdWVcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGEgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlVmFsdWVGcm9tRm9ybURhdGEobmFtZSwgdmFsdWUsIGZvcm1EYXRhKSB7XG4gICAgaWYgKG5hbWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSBudWxsKSB7XG4gICAgICBsZXQgdmFsdWVzID0gZm9ybURhdGEuZ2V0QWxsKG5hbWUpXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWVzID0gdmFsdWVzLmZpbHRlcih2ID0+IHZhbHVlLmluZGV4T2YodikgPCAwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWVzID0gdmFsdWVzLmZpbHRlcih2ID0+IHYgIT09IHZhbHVlKVxuICAgICAgfVxuICAgICAgZm9ybURhdGEuZGVsZXRlKG5hbWUpXG4gICAgICBmb3JFYWNoKHZhbHVlcywgdiA9PiBmb3JtRGF0YS5hcHBlbmQobmFtZSwgdikpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudFtdfSBwcm9jZXNzZWRcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGFcbiAgICogQHBhcmFtIHtIdG14RWxlbWVudFZhbGlkYXRpb25FcnJvcltdfSBlcnJvcnNcbiAgICogQHBhcmFtIHtFbGVtZW50fEhUTUxJbnB1dEVsZW1lbnR8SFRNTFNlbGVjdEVsZW1lbnR8SFRNTEZvcm1FbGVtZW50fSBlbHRcbiAgICogQHBhcmFtIHtib29sZWFufSB2YWxpZGF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gcHJvY2Vzc0lucHV0VmFsdWUocHJvY2Vzc2VkLCBmb3JtRGF0YSwgZXJyb3JzLCBlbHQsIHZhbGlkYXRlKSB7XG4gICAgaWYgKGVsdCA9PSBudWxsIHx8IGhhdmVTZWVuTm9kZShwcm9jZXNzZWQsIGVsdCkpIHtcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzZWQucHVzaChlbHQpXG4gICAgfVxuICAgIGlmIChzaG91bGRJbmNsdWRlKGVsdCkpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBnZXRSYXdBdHRyaWJ1dGUoZWx0LCAnbmFtZScpXG4gICAgICAvLyBAdHMtaWdub3JlIHZhbHVlIHdpbGwgYmUgdW5kZWZpbmVkIGZvciBub24taW5wdXQgZWxlbWVudHMsIHdoaWNoIGlzIGZpbmVcbiAgICAgIGxldCB2YWx1ZSA9IGVsdC52YWx1ZVxuICAgICAgaWYgKGVsdCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50ICYmIGVsdC5tdWx0aXBsZSkge1xuICAgICAgICB2YWx1ZSA9IHRvQXJyYXkoZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbjpjaGVja2VkJykpLm1hcChmdW5jdGlvbihlKSB7IHJldHVybiAoLyoqIEB0eXBlIEhUTUxPcHRpb25FbGVtZW50ICovKGUpKS52YWx1ZSB9KVxuICAgICAgfVxuICAgICAgLy8gaW5jbHVkZSBmaWxlIGlucHV0c1xuICAgICAgaWYgKGVsdCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZWx0LmZpbGVzKSB7XG4gICAgICAgIHZhbHVlID0gdG9BcnJheShlbHQuZmlsZXMpXG4gICAgICB9XG4gICAgICBhZGRWYWx1ZVRvRm9ybURhdGEobmFtZSwgdmFsdWUsIGZvcm1EYXRhKVxuICAgICAgaWYgKHZhbGlkYXRlKSB7XG4gICAgICAgIHZhbGlkYXRlRWxlbWVudChlbHQsIGVycm9ycylcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVsdCBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgICAgZm9yRWFjaChlbHQuZWxlbWVudHMsIGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgIGlmIChwcm9jZXNzZWQuaW5kZXhPZihpbnB1dCkgPj0gMCkge1xuICAgICAgICAgIC8vIFRoZSBpbnB1dCBoYXMgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZCBhbmQgYWRkZWQgdG8gdGhlIHZhbHVlcywgYnV0IHRoZSBGb3JtRGF0YSB0aGF0IHdpbGwgYmVcbiAgICAgICAgICAvLyAgY29uc3RydWN0ZWQgcmlnaHQgYWZ0ZXIgb24gdGhlIGZvcm0sIHdpbGwgaW5jbHVkZSBpdCBvbmNlIGFnYWluLiBTbyByZW1vdmUgdGhhdCBpbnB1dCdzIHZhbHVlXG4gICAgICAgICAgLy8gIG5vdyB0byBhdm9pZCBkdXBsaWNhdGVzXG4gICAgICAgICAgcmVtb3ZlVmFsdWVGcm9tRm9ybURhdGEoaW5wdXQubmFtZSwgaW5wdXQudmFsdWUsIGZvcm1EYXRhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2Nlc3NlZC5wdXNoKGlucHV0KVxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWxpZGF0ZSkge1xuICAgICAgICAgIHZhbGlkYXRlRWxlbWVudChpbnB1dCwgZXJyb3JzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgbmV3IEZvcm1EYXRhKGVsdCkuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGaWxlICYmIHZhbHVlLm5hbWUgPT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuIC8vIGlnbm9yZSBuby1uYW1lIGZpbGVzXG4gICAgICAgIH1cbiAgICAgICAgYWRkVmFsdWVUb0Zvcm1EYXRhKG5hbWUsIHZhbHVlLCBmb3JtRGF0YSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7SHRteEVsZW1lbnRWYWxpZGF0aW9uRXJyb3JbXX0gZXJyb3JzXG4gICAqL1xuICBmdW5jdGlvbiB2YWxpZGF0ZUVsZW1lbnQoZWx0LCBlcnJvcnMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudCAmIEVsZW1lbnRJbnRlcm5hbHN9ICovIChlbHQpXG4gICAgaWYgKGVsZW1lbnQud2lsbFZhbGlkYXRlKSB7XG4gICAgICB0cmlnZ2VyRXZlbnQoZWxlbWVudCwgJ2h0bXg6dmFsaWRhdGlvbjp2YWxpZGF0ZScpXG4gICAgICBpZiAoIWVsZW1lbnQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHsgZWx0OiBlbGVtZW50LCBtZXNzYWdlOiBlbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlLCB2YWxpZGl0eTogZWxlbWVudC52YWxpZGl0eSB9KVxuICAgICAgICB0cmlnZ2VyRXZlbnQoZWxlbWVudCwgJ2h0bXg6dmFsaWRhdGlvbjpmYWlsZWQnLCB7IG1lc3NhZ2U6IGVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UsIHZhbGlkaXR5OiBlbGVtZW50LnZhbGlkaXR5IH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHZhbHVlcyBpbiB0aGUgb25lIEZvcm1EYXRhIHdpdGggdGhvc2UgZnJvbSBhbm90aGVyLlxuICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSByZWNlaXZlciB0aGUgZm9ybWRhdGEgdGhhdCB3aWxsIGJlIG11dGF0ZWRcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gZG9ub3IgdGhlIGZvcm1kYXRhIHRoYXQgd2lsbCBwcm92aWRlIHRoZSBvdmVycmlkaW5nIHZhbHVlc1xuICAgKiBAcmV0dXJucyB7Rm9ybURhdGF9IHRoZSB7QGxpbmtjb2RlIHJlY2VpdmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gb3ZlcnJpZGVGb3JtRGF0YShyZWNlaXZlciwgZG9ub3IpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBkb25vci5rZXlzKCkpIHtcbiAgICAgIHJlY2VpdmVyLmRlbGV0ZShrZXkpXG4gICAgfVxuICAgIGRvbm9yLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgcmVjZWl2ZXIuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjZWl2ZXJcbiAgfVxuXG4gIC8qKlxuICogQHBhcmFtIHtFbGVtZW50fEhUTUxGb3JtRWxlbWVudH0gZWx0XG4gKiBAcGFyYW0ge0h0dHBWZXJifSB2ZXJiXG4gKiBAcmV0dXJucyB7e2Vycm9yczogSHRteEVsZW1lbnRWYWxpZGF0aW9uRXJyb3JbXSwgZm9ybURhdGE6IEZvcm1EYXRhLCB2YWx1ZXM6IE9iamVjdH19XG4gKi9cbiAgZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZXMoZWx0LCB2ZXJiKSB7XG4gICAgLyoqIEB0eXBlIEVsZW1lbnRbXSAqL1xuICAgIGNvbnN0IHByb2Nlc3NlZCA9IFtdXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgIGNvbnN0IHByaW9yaXR5Rm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgIC8qKiBAdHlwZSBIdG14RWxlbWVudFZhbGlkYXRpb25FcnJvcltdICovXG4gICAgY29uc3QgZXJyb3JzID0gW11cbiAgICBjb25zdCBpbnRlcm5hbERhdGEgPSBnZXRJbnRlcm5hbERhdGEoZWx0KVxuICAgIGlmIChpbnRlcm5hbERhdGEubGFzdEJ1dHRvbkNsaWNrZWQgJiYgIWJvZHlDb250YWlucyhpbnRlcm5hbERhdGEubGFzdEJ1dHRvbkNsaWNrZWQpKSB7XG4gICAgICBpbnRlcm5hbERhdGEubGFzdEJ1dHRvbkNsaWNrZWQgPSBudWxsXG4gICAgfVxuXG4gICAgLy8gb25seSB2YWxpZGF0ZSB3aGVuIGZvcm0gaXMgZGlyZWN0bHkgc3VibWl0dGVkIGFuZCBub3ZhbGlkYXRlIG9yIGZvcm1ub3ZhbGlkYXRlIGFyZSBub3Qgc2V0XG4gICAgLy8gb3IgaWYgdGhlIGVsZW1lbnQgaGFzIGFuIGV4cGxpY2l0IGh4LXZhbGlkYXRlPVwidHJ1ZVwiIG9uIGl0XG4gICAgbGV0IHZhbGlkYXRlID0gKGVsdCBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCAmJiBlbHQubm9WYWxpZGF0ZSAhPT0gdHJ1ZSkgfHwgZ2V0QXR0cmlidXRlVmFsdWUoZWx0LCAnaHgtdmFsaWRhdGUnKSA9PT0gJ3RydWUnXG4gICAgaWYgKGludGVybmFsRGF0YS5sYXN0QnV0dG9uQ2xpY2tlZCkge1xuICAgICAgdmFsaWRhdGUgPSB2YWxpZGF0ZSAmJiBpbnRlcm5hbERhdGEubGFzdEJ1dHRvbkNsaWNrZWQuZm9ybU5vVmFsaWRhdGUgIT09IHRydWVcbiAgICB9XG5cbiAgICAvLyBmb3IgYSBub24tR0VUIGluY2x1ZGUgdGhlIGNsb3Nlc3QgZm9ybVxuICAgIGlmICh2ZXJiICE9PSAnZ2V0Jykge1xuICAgICAgcHJvY2Vzc0lucHV0VmFsdWUocHJvY2Vzc2VkLCBwcmlvcml0eUZvcm1EYXRhLCBlcnJvcnMsIGNsb3Nlc3QoZWx0LCAnZm9ybScpLCB2YWxpZGF0ZSlcbiAgICB9XG5cbiAgICAvLyBpbmNsdWRlIHRoZSBlbGVtZW50IGl0c2VsZlxuICAgIHByb2Nlc3NJbnB1dFZhbHVlKHByb2Nlc3NlZCwgZm9ybURhdGEsIGVycm9ycywgZWx0LCB2YWxpZGF0ZSlcblxuICAgIC8vIGlmIGEgYnV0dG9uIG9yIHN1Ym1pdCB3YXMgY2xpY2tlZCBsYXN0LCBpbmNsdWRlIGl0cyB2YWx1ZVxuICAgIGlmIChpbnRlcm5hbERhdGEubGFzdEJ1dHRvbkNsaWNrZWQgfHwgZWx0LnRhZ05hbWUgPT09ICdCVVRUT04nIHx8XG4gICAgKGVsdC50YWdOYW1lID09PSAnSU5QVVQnICYmIGdldFJhd0F0dHJpYnV0ZShlbHQsICd0eXBlJykgPT09ICdzdWJtaXQnKSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gaW50ZXJuYWxEYXRhLmxhc3RCdXR0b25DbGlja2VkIHx8ICgvKiogQHR5cGUgSFRNTElucHV0RWxlbWVudHxIVE1MQnV0dG9uRWxlbWVudCAqLyhlbHQpKVxuICAgICAgY29uc3QgbmFtZSA9IGdldFJhd0F0dHJpYnV0ZShidXR0b24sICduYW1lJylcbiAgICAgIGFkZFZhbHVlVG9Gb3JtRGF0YShuYW1lLCBidXR0b24udmFsdWUsIHByaW9yaXR5Rm9ybURhdGEpXG4gICAgfVxuXG4gICAgLy8gaW5jbHVkZSBhbnkgZXhwbGljaXQgaW5jbHVkZXNcbiAgICBjb25zdCBpbmNsdWRlcyA9IGZpbmRBdHRyaWJ1dGVUYXJnZXRzKGVsdCwgJ2h4LWluY2x1ZGUnKVxuICAgIGZvckVhY2goaW5jbHVkZXMsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHByb2Nlc3NJbnB1dFZhbHVlKHByb2Nlc3NlZCwgZm9ybURhdGEsIGVycm9ycywgYXNFbGVtZW50KG5vZGUpLCB2YWxpZGF0ZSlcbiAgICAgIC8vIGlmIGEgbm9uLWZvcm0gaXMgaW5jbHVkZWQsIGluY2x1ZGUgYW55IGlucHV0IHZhbHVlcyB3aXRoaW4gaXRcbiAgICAgIGlmICghbWF0Y2hlcyhub2RlLCAnZm9ybScpKSB7XG4gICAgICAgIGZvckVhY2goYXNQYXJlbnROb2RlKG5vZGUpLnF1ZXJ5U2VsZWN0b3JBbGwoSU5QVVRfU0VMRUNUT1IpLCBmdW5jdGlvbihkZXNjZW5kYW50KSB7XG4gICAgICAgICAgcHJvY2Vzc0lucHV0VmFsdWUocHJvY2Vzc2VkLCBmb3JtRGF0YSwgZXJyb3JzLCBkZXNjZW5kYW50LCB2YWxpZGF0ZSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gdmFsdWVzIGZyb20gYSA8Zm9ybT4gdGFrZSBwcmVjZWRlbmNlLCBvdmVycmlkaW5nIHRoZSByZWd1bGFyIHZhbHVlc1xuICAgIG92ZXJyaWRlRm9ybURhdGEoZm9ybURhdGEsIHByaW9yaXR5Rm9ybURhdGEpXG5cbiAgICByZXR1cm4geyBlcnJvcnMsIGZvcm1EYXRhLCB2YWx1ZXM6IGZvcm1EYXRhUHJveHkoZm9ybURhdGEpIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmV0dXJuU3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7YW55fSByZWFsVmFsdWVcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGFwcGVuZFBhcmFtKHJldHVyblN0ciwgbmFtZSwgcmVhbFZhbHVlKSB7XG4gICAgaWYgKHJldHVyblN0ciAhPT0gJycpIHtcbiAgICAgIHJldHVyblN0ciArPSAnJidcbiAgICB9XG4gICAgaWYgKFN0cmluZyhyZWFsVmFsdWUpID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgcmVhbFZhbHVlID0gSlNPTi5zdHJpbmdpZnkocmVhbFZhbHVlKVxuICAgIH1cbiAgICBjb25zdCBzID0gZW5jb2RlVVJJQ29tcG9uZW50KHJlYWxWYWx1ZSlcbiAgICByZXR1cm5TdHIgKz0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgJz0nICsgc1xuICAgIHJldHVybiByZXR1cm5TdHJcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Zvcm1EYXRhfE9iamVjdH0gdmFsdWVzXG4gICAqIEByZXR1cm5zIHN0cmluZ1xuICAgKi9cbiAgZnVuY3Rpb24gdXJsRW5jb2RlKHZhbHVlcykge1xuICAgIHZhbHVlcyA9IGZvcm1EYXRhRnJvbU9iamVjdCh2YWx1ZXMpXG4gICAgbGV0IHJldHVyblN0ciA9ICcnXG4gICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgcmV0dXJuU3RyID0gYXBwZW5kUGFyYW0ocmV0dXJuU3RyLCBrZXksIHZhbHVlKVxuICAgIH0pXG4gICAgcmV0dXJuIHJldHVyblN0clxuICB9XG5cbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gQWpheFxuICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvbXB0XG4gKiBAcmV0dXJucyB7SHRteEhlYWRlclNwZWNpZmljYXRpb259XG4gKi9cbiAgZnVuY3Rpb24gZ2V0SGVhZGVycyhlbHQsIHRhcmdldCwgcHJvbXB0KSB7XG4gICAgLyoqIEB0eXBlIEh0bXhIZWFkZXJTcGVjaWZpY2F0aW9uICovXG4gICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICdIWC1SZXF1ZXN0JzogJ3RydWUnLFxuICAgICAgJ0hYLVRyaWdnZXInOiBnZXRSYXdBdHRyaWJ1dGUoZWx0LCAnaWQnKSxcbiAgICAgICdIWC1UcmlnZ2VyLU5hbWUnOiBnZXRSYXdBdHRyaWJ1dGUoZWx0LCAnbmFtZScpLFxuICAgICAgJ0hYLVRhcmdldCc6IGdldEF0dHJpYnV0ZVZhbHVlKHRhcmdldCwgJ2lkJyksXG4gICAgICAnSFgtQ3VycmVudC1VUkwnOiBnZXREb2N1bWVudCgpLmxvY2F0aW9uLmhyZWZcbiAgICB9XG4gICAgZ2V0VmFsdWVzRm9yRWxlbWVudChlbHQsICdoeC1oZWFkZXJzJywgZmFsc2UsIGhlYWRlcnMpXG4gICAgaWYgKHByb21wdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoZWFkZXJzWydIWC1Qcm9tcHQnXSA9IHByb21wdFxuICAgIH1cbiAgICBpZiAoZ2V0SW50ZXJuYWxEYXRhKGVsdCkuYm9vc3RlZCkge1xuICAgICAgaGVhZGVyc1snSFgtQm9vc3RlZCddID0gJ3RydWUnXG4gICAgfVxuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICAvKipcbiAqIGZpbHRlclZhbHVlcyB0YWtlcyBhbiBvYmplY3QgY29udGFpbmluZyBmb3JtIGlucHV0IHZhbHVlc1xuICogYW5kIHJldHVybnMgYSBuZXcgb2JqZWN0IHRoYXQgb25seSBjb250YWlucyBrZXlzIHRoYXQgYXJlXG4gKiBzcGVjaWZpZWQgYnkgdGhlIGNsb3Nlc3QgXCJoeC1wYXJhbXNcIiBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7Rm9ybURhdGF9IGlucHV0VmFsdWVzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICogQHJldHVybnMge0Zvcm1EYXRhfVxuICovXG4gIGZ1bmN0aW9uIGZpbHRlclZhbHVlcyhpbnB1dFZhbHVlcywgZWx0KSB7XG4gICAgY29uc3QgcGFyYW1zVmFsdWUgPSBnZXRDbG9zZXN0QXR0cmlidXRlVmFsdWUoZWx0LCAnaHgtcGFyYW1zJylcbiAgICBpZiAocGFyYW1zVmFsdWUpIHtcbiAgICAgIGlmIChwYXJhbXNWYWx1ZSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHJldHVybiBuZXcgRm9ybURhdGEoKVxuICAgICAgfSBlbHNlIGlmIChwYXJhbXNWYWx1ZSA9PT0gJyonKSB7XG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlc1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXNWYWx1ZS5pbmRleE9mKCdub3QgJykgPT09IDApIHtcbiAgICAgICAgZm9yRWFjaChwYXJhbXNWYWx1ZS5zdWJzdHIoNCkuc3BsaXQoJywnKSwgZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgIG5hbWUgPSBuYW1lLnRyaW0oKVxuICAgICAgICAgIGlucHV0VmFsdWVzLmRlbGV0ZShuYW1lKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZXNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlcyA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGZvckVhY2gocGFyYW1zVmFsdWUuc3BsaXQoJywnKSwgZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgIG5hbWUgPSBuYW1lLnRyaW0oKVxuICAgICAgICAgIGlmIChpbnB1dFZhbHVlcy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIGlucHV0VmFsdWVzLmdldEFsbChuYW1lKS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7IG5ld1ZhbHVlcy5hcHBlbmQobmFtZSwgdmFsdWUpIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbmV3VmFsdWVzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpbnB1dFZhbHVlc1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNBbmNob3JMaW5rKGVsdCkge1xuICAgIHJldHVybiAhIWdldFJhd0F0dHJpYnV0ZShlbHQsICdocmVmJykgJiYgZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ2hyZWYnKS5pbmRleE9mKCcjJykgPj0gMFxuICB9XG5cbiAgLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICogQHBhcmFtIHtIdG14U3dhcFN0eWxlfSBbc3dhcEluZm9PdmVycmlkZV1cbiAqIEByZXR1cm5zIHtIdG14U3dhcFNwZWNpZmljYXRpb259XG4gKi9cbiAgZnVuY3Rpb24gZ2V0U3dhcFNwZWNpZmljYXRpb24oZWx0LCBzd2FwSW5mb092ZXJyaWRlKSB7XG4gICAgY29uc3Qgc3dhcEluZm8gPSBzd2FwSW5mb092ZXJyaWRlIHx8IGdldENsb3Nlc3RBdHRyaWJ1dGVWYWx1ZShlbHQsICdoeC1zd2FwJylcbiAgICAvKiogQHR5cGUgSHRteFN3YXBTcGVjaWZpY2F0aW9uICovXG4gICAgY29uc3Qgc3dhcFNwZWMgPSB7XG4gICAgICBzd2FwU3R5bGU6IGdldEludGVybmFsRGF0YShlbHQpLmJvb3N0ZWQgPyAnaW5uZXJIVE1MJyA6IGh0bXguY29uZmlnLmRlZmF1bHRTd2FwU3R5bGUsXG4gICAgICBzd2FwRGVsYXk6IGh0bXguY29uZmlnLmRlZmF1bHRTd2FwRGVsYXksXG4gICAgICBzZXR0bGVEZWxheTogaHRteC5jb25maWcuZGVmYXVsdFNldHRsZURlbGF5XG4gICAgfVxuICAgIGlmIChodG14LmNvbmZpZy5zY3JvbGxJbnRvVmlld09uQm9vc3QgJiYgZ2V0SW50ZXJuYWxEYXRhKGVsdCkuYm9vc3RlZCAmJiAhaXNBbmNob3JMaW5rKGVsdCkpIHtcbiAgICAgIHN3YXBTcGVjLnNob3cgPSAndG9wJ1xuICAgIH1cbiAgICBpZiAoc3dhcEluZm8pIHtcbiAgICAgIGNvbnN0IHNwbGl0ID0gc3BsaXRPbldoaXRlc3BhY2Uoc3dhcEluZm8pXG4gICAgICBpZiAoc3BsaXQubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBzcGxpdFtpXVxuICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKCdzd2FwOicpID09PSAwKSB7XG4gICAgICAgICAgICBzd2FwU3BlYy5zd2FwRGVsYXkgPSBwYXJzZUludGVydmFsKHZhbHVlLnN1YnN0cig1KSlcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmluZGV4T2YoJ3NldHRsZTonKSA9PT0gMCkge1xuICAgICAgICAgICAgc3dhcFNwZWMuc2V0dGxlRGVsYXkgPSBwYXJzZUludGVydmFsKHZhbHVlLnN1YnN0cig3KSlcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmluZGV4T2YoJ3RyYW5zaXRpb246JykgPT09IDApIHtcbiAgICAgICAgICAgIHN3YXBTcGVjLnRyYW5zaXRpb24gPSB2YWx1ZS5zdWJzdHIoMTEpID09PSAndHJ1ZSdcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmluZGV4T2YoJ2lnbm9yZVRpdGxlOicpID09PSAwKSB7XG4gICAgICAgICAgICBzd2FwU3BlYy5pZ25vcmVUaXRsZSA9IHZhbHVlLnN1YnN0cigxMikgPT09ICd0cnVlJ1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaW5kZXhPZignc2Nyb2xsOicpID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxTcGVjID0gdmFsdWUuc3Vic3RyKDcpXG4gICAgICAgICAgICB2YXIgc3BsaXRTcGVjID0gc2Nyb2xsU3BlYy5zcGxpdCgnOicpXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxWYWwgPSBzcGxpdFNwZWMucG9wKClcbiAgICAgICAgICAgIHZhciBzZWxlY3RvclZhbCA9IHNwbGl0U3BlYy5sZW5ndGggPiAwID8gc3BsaXRTcGVjLmpvaW4oJzonKSA6IG51bGxcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHN3YXBTcGVjLnNjcm9sbCA9IHNjcm9sbFZhbFxuICAgICAgICAgICAgc3dhcFNwZWMuc2Nyb2xsVGFyZ2V0ID0gc2VsZWN0b3JWYWxcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmluZGV4T2YoJ3Nob3c6JykgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dTcGVjID0gdmFsdWUuc3Vic3RyKDUpXG4gICAgICAgICAgICB2YXIgc3BsaXRTcGVjID0gc2hvd1NwZWMuc3BsaXQoJzonKVxuICAgICAgICAgICAgY29uc3Qgc2hvd1ZhbCA9IHNwbGl0U3BlYy5wb3AoKVxuICAgICAgICAgICAgdmFyIHNlbGVjdG9yVmFsID0gc3BsaXRTcGVjLmxlbmd0aCA+IDAgPyBzcGxpdFNwZWMuam9pbignOicpIDogbnVsbFxuICAgICAgICAgICAgc3dhcFNwZWMuc2hvdyA9IHNob3dWYWxcbiAgICAgICAgICAgIHN3YXBTcGVjLnNob3dUYXJnZXQgPSBzZWxlY3RvclZhbFxuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaW5kZXhPZignZm9jdXMtc2Nyb2xsOicpID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBmb2N1c1Njcm9sbFZhbCA9IHZhbHVlLnN1YnN0cignZm9jdXMtc2Nyb2xsOicubGVuZ3RoKVxuICAgICAgICAgICAgc3dhcFNwZWMuZm9jdXNTY3JvbGwgPSBmb2N1c1Njcm9sbFZhbCA9PSAndHJ1ZSdcbiAgICAgICAgICB9IGVsc2UgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgc3dhcFNwZWMuc3dhcFN0eWxlID0gdmFsdWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9nRXJyb3IoJ1Vua25vd24gbW9kaWZpZXIgaW4gaHgtc3dhcDogJyArIHZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3dhcFNwZWNcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gdXNlc0Zvcm1EYXRhKGVsdCkge1xuICAgIHJldHVybiBnZXRDbG9zZXN0QXR0cmlidXRlVmFsdWUoZWx0LCAnaHgtZW5jb2RpbmcnKSA9PT0gJ211bHRpcGFydC9mb3JtLWRhdGEnIHx8XG4gICAgKG1hdGNoZXMoZWx0LCAnZm9ybScpICYmIGdldFJhd0F0dHJpYnV0ZShlbHQsICdlbmN0eXBlJykgPT09ICdtdWx0aXBhcnQvZm9ybS1kYXRhJylcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fSB4aHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gZmlsdGVyZWRQYXJhbWV0ZXJzXG4gICAqIEByZXR1cm5zIHsqfHN0cmluZ3xudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gZW5jb2RlUGFyYW1zRm9yQm9keSh4aHIsIGVsdCwgZmlsdGVyZWRQYXJhbWV0ZXJzKSB7XG4gICAgbGV0IGVuY29kZWRQYXJhbWV0ZXJzID0gbnVsbFxuICAgIHdpdGhFeHRlbnNpb25zKGVsdCwgZnVuY3Rpb24oZXh0ZW5zaW9uKSB7XG4gICAgICBpZiAoZW5jb2RlZFBhcmFtZXRlcnMgPT0gbnVsbCkge1xuICAgICAgICBlbmNvZGVkUGFyYW1ldGVycyA9IGV4dGVuc2lvbi5lbmNvZGVQYXJhbWV0ZXJzKHhociwgZmlsdGVyZWRQYXJhbWV0ZXJzLCBlbHQpXG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAoZW5jb2RlZFBhcmFtZXRlcnMgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVuY29kZWRQYXJhbWV0ZXJzXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh1c2VzRm9ybURhdGEoZWx0KSkge1xuICAgICAgICAvLyBGb3JjZSBjb252ZXJzaW9uIHRvIGFuIGFjdHVhbCBGb3JtRGF0YSBvYmplY3QgaW4gY2FzZSBmaWx0ZXJlZFBhcmFtZXRlcnMgaXMgYSBmb3JtRGF0YVByb3h5XG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYmlnc2t5c29mdHdhcmUvaHRteC9pc3N1ZXMvMjMxN1xuICAgICAgICByZXR1cm4gb3ZlcnJpZGVGb3JtRGF0YShuZXcgRm9ybURhdGEoKSwgZm9ybURhdGFGcm9tT2JqZWN0KGZpbHRlcmVkUGFyYW1ldGVycykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdXJsRW5jb2RlKGZpbHRlcmVkUGFyYW1ldGVycylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICogQHJldHVybnMge0h0bXhTZXR0bGVJbmZvfVxuICovXG4gIGZ1bmN0aW9uIG1ha2VTZXR0bGVJbmZvKHRhcmdldCkge1xuICAgIHJldHVybiB7IHRhc2tzOiBbXSwgZWx0czogW3RhcmdldF0gfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudFtdfSBjb250ZW50XG4gICAqIEBwYXJhbSB7SHRteFN3YXBTcGVjaWZpY2F0aW9ufSBzd2FwU3BlY1xuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsU3RhdGUoY29udGVudCwgc3dhcFNwZWMpIHtcbiAgICBjb25zdCBmaXJzdCA9IGNvbnRlbnRbMF1cbiAgICBjb25zdCBsYXN0ID0gY29udGVudFtjb250ZW50Lmxlbmd0aCAtIDFdXG4gICAgaWYgKHN3YXBTcGVjLnNjcm9sbCkge1xuICAgICAgdmFyIHRhcmdldCA9IG51bGxcbiAgICAgIGlmIChzd2FwU3BlYy5zY3JvbGxUYXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0ID0gYXNFbGVtZW50KHF1ZXJ5U2VsZWN0b3JFeHQoZmlyc3QsIHN3YXBTcGVjLnNjcm9sbFRhcmdldCkpXG4gICAgICB9XG4gICAgICBpZiAoc3dhcFNwZWMuc2Nyb2xsID09PSAndG9wJyAmJiAoZmlyc3QgfHwgdGFyZ2V0KSkge1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXQgfHwgZmlyc3RcbiAgICAgICAgdGFyZ2V0LnNjcm9sbFRvcCA9IDBcbiAgICAgIH1cbiAgICAgIGlmIChzd2FwU3BlYy5zY3JvbGwgPT09ICdib3R0b20nICYmIChsYXN0IHx8IHRhcmdldCkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IGxhc3RcbiAgICAgICAgdGFyZ2V0LnNjcm9sbFRvcCA9IHRhcmdldC5zY3JvbGxIZWlnaHRcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN3YXBTcGVjLnNob3cpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBudWxsXG4gICAgICBpZiAoc3dhcFNwZWMuc2hvd1RhcmdldCkge1xuICAgICAgICBsZXQgdGFyZ2V0U3RyID0gc3dhcFNwZWMuc2hvd1RhcmdldFxuICAgICAgICBpZiAoc3dhcFNwZWMuc2hvd1RhcmdldCA9PT0gJ3dpbmRvdycpIHtcbiAgICAgICAgICB0YXJnZXRTdHIgPSAnYm9keSdcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQgPSBhc0VsZW1lbnQocXVlcnlTZWxlY3RvckV4dChmaXJzdCwgdGFyZ2V0U3RyKSlcbiAgICAgIH1cbiAgICAgIGlmIChzd2FwU3BlYy5zaG93ID09PSAndG9wJyAmJiAoZmlyc3QgfHwgdGFyZ2V0KSkge1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXQgfHwgZmlyc3RcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBGb3Igc29tZSByZWFzb24gdHNjIGRvZXNuJ3QgcmVjb2duaXplIFwiaW5zdGFudFwiIGFzIGEgdmFsaWQgb3B0aW9uIGZvciBub3dcbiAgICAgICAgdGFyZ2V0LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdzdGFydCcsIGJlaGF2aW9yOiBodG14LmNvbmZpZy5zY3JvbGxCZWhhdmlvciB9KVxuICAgICAgfVxuICAgICAgaWYgKHN3YXBTcGVjLnNob3cgPT09ICdib3R0b20nICYmIChsYXN0IHx8IHRhcmdldCkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IGxhc3RcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBGb3Igc29tZSByZWFzb24gdHNjIGRvZXNuJ3QgcmVjb2duaXplIFwiaW5zdGFudFwiIGFzIGEgdmFsaWQgb3B0aW9uIGZvciBub3dcbiAgICAgICAgdGFyZ2V0LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdlbmQnLCBiZWhhdmlvcjogaHRteC5jb25maWcuc2Nyb2xsQmVoYXZpb3IgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICogQHBhcmFtIHtib29sZWFuPX0gZXZhbEFzRGVmYXVsdFxuICogQHBhcmFtIHtPYmplY3Q9fSB2YWx1ZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbiAgZnVuY3Rpb24gZ2V0VmFsdWVzRm9yRWxlbWVudChlbHQsIGF0dHIsIGV2YWxBc0RlZmF1bHQsIHZhbHVlcykge1xuICAgIGlmICh2YWx1ZXMgPT0gbnVsbCkge1xuICAgICAgdmFsdWVzID0ge31cbiAgICB9XG4gICAgaWYgKGVsdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdmFsdWVzXG4gICAgfVxuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gZ2V0QXR0cmlidXRlVmFsdWUoZWx0LCBhdHRyKVxuICAgIGlmIChhdHRyaWJ1dGVWYWx1ZSkge1xuICAgICAgbGV0IHN0ciA9IGF0dHJpYnV0ZVZhbHVlLnRyaW0oKVxuICAgICAgbGV0IGV2YWx1YXRlVmFsdWUgPSBldmFsQXNEZWZhdWx0XG4gICAgICBpZiAoc3RyID09PSAndW5zZXQnKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ2phdmFzY3JpcHQ6JykgPT09IDApIHtcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cigxMSlcbiAgICAgICAgZXZhbHVhdGVWYWx1ZSA9IHRydWVcbiAgICAgIH0gZWxzZSBpZiAoc3RyLmluZGV4T2YoJ2pzOicpID09PSAwKSB7XG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHIoMylcbiAgICAgICAgZXZhbHVhdGVWYWx1ZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZigneycpICE9PSAwKSB7XG4gICAgICAgIHN0ciA9ICd7JyArIHN0ciArICd9J1xuICAgICAgfVxuICAgICAgbGV0IHZhcnNWYWx1ZXNcbiAgICAgIGlmIChldmFsdWF0ZVZhbHVlKSB7XG4gICAgICAgIHZhcnNWYWx1ZXMgPSBtYXliZUV2YWwoZWx0LCBmdW5jdGlvbigpIHsgcmV0dXJuIEZ1bmN0aW9uKCdyZXR1cm4gKCcgKyBzdHIgKyAnKScpKCkgfSwge30pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXJzVmFsdWVzID0gcGFyc2VKU09OKHN0cilcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhcnNWYWx1ZXMpIHtcbiAgICAgICAgaWYgKHZhcnNWYWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmICh2YWx1ZXNba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICB2YWx1ZXNba2V5XSA9IHZhcnNWYWx1ZXNba2V5XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ2V0VmFsdWVzRm9yRWxlbWVudChhc0VsZW1lbnQocGFyZW50RWx0KGVsdCkpLCBhdHRyLCBldmFsQXNEZWZhdWx0LCB2YWx1ZXMpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFdmVudFRhcmdldHxzdHJpbmd9IGVsdFxuICAgKiBAcGFyYW0geygpID0+IGFueX0gdG9FdmFsXG4gICAqIEBwYXJhbSB7YW55PX0gZGVmYXVsdFZhbFxuICAgKiBAcmV0dXJucyB7YW55fVxuICAgKi9cbiAgZnVuY3Rpb24gbWF5YmVFdmFsKGVsdCwgdG9FdmFsLCBkZWZhdWx0VmFsKSB7XG4gICAgaWYgKGh0bXguY29uZmlnLmFsbG93RXZhbCkge1xuICAgICAgcmV0dXJuIHRvRXZhbCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyaWdnZXJFcnJvckV2ZW50KGVsdCwgJ2h0bXg6ZXZhbERpc2FsbG93ZWRFcnJvcicpXG4gICAgICByZXR1cm4gZGVmYXVsdFZhbFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAqIEBwYXJhbSB7Kj99IGV4cHJlc3Npb25WYXJzXG4gKiBAcmV0dXJuc1xuICovXG4gIGZ1bmN0aW9uIGdldEhYVmFyc0ZvckVsZW1lbnQoZWx0LCBleHByZXNzaW9uVmFycykge1xuICAgIHJldHVybiBnZXRWYWx1ZXNGb3JFbGVtZW50KGVsdCwgJ2h4LXZhcnMnLCB0cnVlLCBleHByZXNzaW9uVmFycylcbiAgfVxuXG4gIC8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAqIEBwYXJhbSB7Kj99IGV4cHJlc3Npb25WYXJzXG4gKiBAcmV0dXJuc1xuICovXG4gIGZ1bmN0aW9uIGdldEhYVmFsc0ZvckVsZW1lbnQoZWx0LCBleHByZXNzaW9uVmFycykge1xuICAgIHJldHVybiBnZXRWYWx1ZXNGb3JFbGVtZW50KGVsdCwgJ2h4LXZhbHMnLCBmYWxzZSwgZXhwcmVzc2lvblZhcnMpXG4gIH1cblxuICAvKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gKiBAcmV0dXJucyB7Rm9ybURhdGF9XG4gKi9cbiAgZnVuY3Rpb24gZ2V0RXhwcmVzc2lvblZhcnMoZWx0KSB7XG4gICAgcmV0dXJuIG1lcmdlT2JqZWN0cyhnZXRIWFZhcnNGb3JFbGVtZW50KGVsdCksIGdldEhYVmFsc0ZvckVsZW1lbnQoZWx0KSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fSB4aHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhlYWRlclxuICAgKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBoZWFkZXJWYWx1ZVxuICAgKi9cbiAgZnVuY3Rpb24gc2FmZWx5U2V0SGVhZGVyVmFsdWUoeGhyLCBoZWFkZXIsIGhlYWRlclZhbHVlKSB7XG4gICAgaWYgKGhlYWRlclZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXIsIGhlYWRlclZhbHVlKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gT24gYW4gZXhjZXB0aW9uLCB0cnkgdG8gc2V0IHRoZSBoZWFkZXIgVVJJIGVuY29kZWQgaW5zdGVhZFxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXIsIGVuY29kZVVSSUNvbXBvbmVudChoZWFkZXJWYWx1ZSkpXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlciArICctVVJJLUF1dG9FbmNvZGVkJywgJ3RydWUnKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fSB4aHJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UGF0aEZyb21SZXNwb25zZSh4aHIpIHtcbiAgLy8gTkI6IElFMTEgZG9lcyBub3Qgc3VwcG9ydCB0aGlzIHN0dWZmXG4gICAgaWYgKHhoci5yZXNwb25zZVVSTCAmJiB0eXBlb2YgKFVSTCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHhoci5yZXNwb25zZVVSTClcbiAgICAgICAgcmV0dXJuIHVybC5wYXRobmFtZSArIHVybC5zZWFyY2hcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZ2V0RG9jdW1lbnQoKS5ib2R5LCAnaHRteDpiYWRSZXNwb25zZVVybCcsIHsgdXJsOiB4aHIucmVzcG9uc2VVUkwgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEBwYXJhbSB7UmVnRXhwfSByZWdleHBcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGhhc0hlYWRlcih4aHIsIHJlZ2V4cCkge1xuICAgIHJldHVybiByZWdleHAudGVzdCh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpXG4gIH1cblxuICAvKipcbiAgICogSXNzdWVzIGFuIGh0bXgtc3R5bGUgQUpBWCByZXF1ZXN0XG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI2FqYXhcbiAgICpcbiAgICogQHBhcmFtIHtIdHRwVmVyYn0gdmVyYlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCB0aGUgVVJMIHBhdGggdG8gbWFrZSB0aGUgQUpBWFxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfEh0bXhBamF4SGVscGVyQ29udGV4dH0gY29udGV4dCB0aGUgZWxlbWVudCB0byB0YXJnZXQgKGRlZmF1bHRzIHRvIHRoZSAqKmJvZHkqKikgfCBhIHNlbGVjdG9yIGZvciB0aGUgdGFyZ2V0IHwgYSBjb250ZXh0IG9iamVjdCB0aGF0IGNvbnRhaW5zIGFueSBvZiB0aGUgZm9sbG93aW5nXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59IFByb21pc2UgdGhhdCByZXNvbHZlcyBpbW1lZGlhdGVseSBpZiBubyByZXF1ZXN0IGlzIHNlbnQsIG9yIHdoZW4gdGhlIHJlcXVlc3QgaXMgY29tcGxldGVcbiAgICovXG4gIGZ1bmN0aW9uIGFqYXhIZWxwZXIodmVyYiwgcGF0aCwgY29udGV4dCkge1xuICAgIHZlcmIgPSAoLyoqIEB0eXBlIEh0dHBWZXJiICovKHZlcmIudG9Mb3dlckNhc2UoKSkpXG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIGlmIChjb250ZXh0IGluc3RhbmNlb2YgRWxlbWVudCB8fCB0eXBlb2YgY29udGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGlzc3VlQWpheFJlcXVlc3QodmVyYiwgcGF0aCwgbnVsbCwgbnVsbCwge1xuICAgICAgICAgIHRhcmdldE92ZXJyaWRlOiByZXNvbHZlVGFyZ2V0KGNvbnRleHQpLFxuICAgICAgICAgIHJldHVyblByb21pc2U6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpc3N1ZUFqYXhSZXF1ZXN0KHZlcmIsIHBhdGgsIHJlc29sdmVUYXJnZXQoY29udGV4dC5zb3VyY2UpLCBjb250ZXh0LmV2ZW50LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhhbmRsZXI6IGNvbnRleHQuaGFuZGxlcixcbiAgICAgICAgICAgIGhlYWRlcnM6IGNvbnRleHQuaGVhZGVycyxcbiAgICAgICAgICAgIHZhbHVlczogY29udGV4dC52YWx1ZXMsXG4gICAgICAgICAgICB0YXJnZXRPdmVycmlkZTogcmVzb2x2ZVRhcmdldChjb250ZXh0LnRhcmdldCksXG4gICAgICAgICAgICBzd2FwT3ZlcnJpZGU6IGNvbnRleHQuc3dhcCxcbiAgICAgICAgICAgIHNlbGVjdDogY29udGV4dC5zZWxlY3QsXG4gICAgICAgICAgICByZXR1cm5Qcm9taXNlOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlzc3VlQWpheFJlcXVlc3QodmVyYiwgcGF0aCwgbnVsbCwgbnVsbCwge1xuICAgICAgICByZXR1cm5Qcm9taXNlOiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcmV0dXJuIHtFbGVtZW50W119XG4gICAqL1xuICBmdW5jdGlvbiBoaWVyYXJjaHlGb3JFbHQoZWx0KSB7XG4gICAgY29uc3QgYXJyID0gW11cbiAgICB3aGlsZSAoZWx0KSB7XG4gICAgICBhcnIucHVzaChlbHQpXG4gICAgICBlbHQgPSBlbHQucGFyZW50RWxlbWVudFxuICAgIH1cbiAgICByZXR1cm4gYXJyXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtIdG14UmVxdWVzdENvbmZpZ30gcmVxdWVzdENvbmZpZ1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gdmVyaWZ5UGF0aChlbHQsIHBhdGgsIHJlcXVlc3RDb25maWcpIHtcbiAgICBsZXQgc2FtZUhvc3RcbiAgICBsZXQgdXJsXG4gICAgaWYgKHR5cGVvZiBVUkwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHVybCA9IG5ldyBVUkwocGF0aCwgZG9jdW1lbnQubG9jYXRpb24uaHJlZilcbiAgICAgIGNvbnN0IG9yaWdpbiA9IGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpblxuICAgICAgc2FtZUhvc3QgPSBvcmlnaW4gPT09IHVybC5vcmlnaW5cbiAgICB9IGVsc2Uge1xuICAgIC8vIElFMTEgZG9lc24ndCBzdXBwb3J0IFVSTFxuICAgICAgdXJsID0gcGF0aFxuICAgICAgc2FtZUhvc3QgPSBzdGFydHNXaXRoKHBhdGgsIGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbilcbiAgICB9XG5cbiAgICBpZiAoaHRteC5jb25maWcuc2VsZlJlcXVlc3RzT25seSkge1xuICAgICAgaWYgKCFzYW1lSG9zdCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRyaWdnZXJFdmVudChlbHQsICdodG14OnZhbGlkYXRlVXJsJywgbWVyZ2VPYmplY3RzKHsgdXJsLCBzYW1lSG9zdCB9LCByZXF1ZXN0Q29uZmlnKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdHxGb3JtRGF0YX0gb2JqXG4gICAqIEByZXR1cm4ge0Zvcm1EYXRhfVxuICAgKi9cbiAgZnVuY3Rpb24gZm9ybURhdGFGcm9tT2JqZWN0KG9iaikge1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBGb3JtRGF0YSkgcmV0dXJuIG9ialxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBpZiAodHlwZW9mIG9ialtrZXldLmZvckVhY2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvYmpba2V5XS5mb3JFYWNoKGZ1bmN0aW9uKHYpIHsgZm9ybURhdGEuYXBwZW5kKGtleSwgdikgfSlcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICdvYmplY3QnICYmICEob2JqW2tleV0gaW5zdGFuY2VvZiBCbG9iKSkge1xuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIEpTT04uc3RyaW5naWZ5KG9ialtrZXldKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBvYmpba2V5XSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZm9ybURhdGFcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBmb3JtRGF0YVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheVxuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqL1xuICBmdW5jdGlvbiBmb3JtRGF0YUFycmF5UHJveHkoZm9ybURhdGEsIG5hbWUsIGFycmF5KSB7XG4gICAgLy8gbXV0YXRpbmcgdGhlIGFycmF5IHNob3VsZCBtdXRhdGUgdGhlIHVuZGVybHlpbmcgZm9ybSBkYXRhXG4gICAgcmV0dXJuIG5ldyBQcm94eShhcnJheSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ251bWJlcicpIHJldHVybiB0YXJnZXRba2V5XVxuICAgICAgICBpZiAoa2V5ID09PSAnbGVuZ3RoJykgcmV0dXJuIHRhcmdldC5sZW5ndGhcbiAgICAgICAgaWYgKGtleSA9PT0gJ3B1c2gnKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICB0YXJnZXQucHVzaCh2YWx1ZSlcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldLmFwcGx5KHRhcmdldCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgZm9ybURhdGEuZGVsZXRlKG5hbWUpXG4gICAgICAgICAgICB0YXJnZXQuZm9yRWFjaChmdW5jdGlvbih2KSB7IGZvcm1EYXRhLmFwcGVuZChuYW1lLCB2KSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRba2V5XSAmJiB0YXJnZXRba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV1bMF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odGFyZ2V0LCBpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgdGFyZ2V0W2luZGV4XSA9IHZhbHVlXG4gICAgICAgIGZvcm1EYXRhLmRlbGV0ZShuYW1lKVxuICAgICAgICB0YXJnZXQuZm9yRWFjaChmdW5jdGlvbih2KSB7IGZvcm1EYXRhLmFwcGVuZChuYW1lLCB2KSB9KVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGFcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIGZ1bmN0aW9uIGZvcm1EYXRhUHJveHkoZm9ybURhdGEpIHtcbiAgICByZXR1cm4gbmV3IFByb3h5KGZvcm1EYXRhLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKHRhcmdldCwgbmFtZSkge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgLy8gRm9yd2FyZCBzeW1ib2wgY2FsbHMgdG8gdGhlIEZvcm1EYXRhIGl0c2VsZiBkaXJlY3RseVxuICAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIG5hbWUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgPT09ICd0b0pTT04nKSB7XG4gICAgICAgICAgLy8gU3VwcG9ydCBKU09OLnN0cmluZ2lmeSBjYWxsIG9uIHByb3h5XG4gICAgICAgICAgcmV0dXJuICgpID0+IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSlcbiAgICAgICAgfVxuICAgICAgICBpZiAobmFtZSBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAvLyBXcmFwIGluIGZ1bmN0aW9uIHdpdGggYXBwbHkgdG8gY29ycmVjdGx5IGJpbmQgdGhlIEZvcm1EYXRhIGNvbnRleHQsIGFzIGEgZGlyZWN0IGNhbGwgd291bGQgcmVzdWx0IGluIGFuIGlsbGVnYWwgaW52b2NhdGlvbiBlcnJvclxuICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmb3JtRGF0YVtuYW1lXS5hcHBseShmb3JtRGF0YSwgYXJndW1lbnRzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W25hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFycmF5ID0gZm9ybURhdGEuZ2V0QWxsKG5hbWUpXG4gICAgICAgIC8vIFRob3NlIDIgdW5kZWZpbmVkICYgc2luZ2xlIHZhbHVlIHJldHVybnMgYXJlIGZvciByZXRyby1jb21wYXRpYmlsaXR5IGFzIHdlIHdlcmVuJ3QgdXNpbmcgRm9ybURhdGEgYmVmb3JlXG4gICAgICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIH0gZWxzZSBpZiAoYXJyYXkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIGFycmF5WzBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZvcm1EYXRhQXJyYXlQcm94eSh0YXJnZXQsIG5hbWUsIGFycmF5KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQuZGVsZXRlKG5hbWUpXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24odikgeyB0YXJnZXQuYXBwZW5kKG5hbWUsIHYpIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhKHZhbHVlIGluc3RhbmNlb2YgQmxvYikpIHtcbiAgICAgICAgICB0YXJnZXQuYXBwZW5kKG5hbWUsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXQuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uKHRhcmdldCwgbmFtZSkge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGFyZ2V0LmRlbGV0ZShuYW1lKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9LFxuICAgICAgLy8gU3VwcG9ydCBPYmplY3QuYXNzaWduIGNhbGwgZnJvbSBwcm94eVxuICAgICAgb3duS2V5czogZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBSZWZsZWN0Lm93bktleXMoT2JqZWN0LmZyb21FbnRyaWVzKHRhcmdldCkpXG4gICAgICB9LFxuICAgICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbih0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5mcm9tRW50cmllcyh0YXJnZXQpLCBwcm9wKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtIdHRwVmVyYn0gdmVyYlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgKiBAcGFyYW0ge0h0bXhBamF4RXRjfSBbZXRjXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtjb25maXJtZWRdXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBmdW5jdGlvbiBpc3N1ZUFqYXhSZXF1ZXN0KHZlcmIsIHBhdGgsIGVsdCwgZXZlbnQsIGV0YywgY29uZmlybWVkKSB7XG4gICAgbGV0IHJlc29sdmUgPSBudWxsXG4gICAgbGV0IHJlamVjdCA9IG51bGxcbiAgICBldGMgPSBldGMgIT0gbnVsbCA/IGV0YyA6IHt9XG4gICAgaWYgKGV0Yy5yZXR1cm5Qcm9taXNlICYmIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihfcmVzb2x2ZSwgX3JlamVjdCkge1xuICAgICAgICByZXNvbHZlID0gX3Jlc29sdmVcbiAgICAgICAgcmVqZWN0ID0gX3JlamVjdFxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKGVsdCA9PSBudWxsKSB7XG4gICAgICBlbHQgPSBnZXREb2N1bWVudCgpLmJvZHlcbiAgICB9XG4gICAgY29uc3QgcmVzcG9uc2VIYW5kbGVyID0gZXRjLmhhbmRsZXIgfHwgaGFuZGxlQWpheFJlc3BvbnNlXG4gICAgY29uc3Qgc2VsZWN0ID0gZXRjLnNlbGVjdCB8fCBudWxsXG5cbiAgICBpZiAoIWJvZHlDb250YWlucyhlbHQpKSB7XG4gICAgLy8gZG8gbm90IGlzc3VlIHJlcXVlc3RzIGZvciBlbGVtZW50cyByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgICAgbWF5YmVDYWxsKHJlc29sdmUpXG4gICAgICByZXR1cm4gcHJvbWlzZVxuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBldGMudGFyZ2V0T3ZlcnJpZGUgfHwgYXNFbGVtZW50KGdldFRhcmdldChlbHQpKVxuICAgIGlmICh0YXJnZXQgPT0gbnVsbCB8fCB0YXJnZXQgPT0gRFVNTVlfRUxUKSB7XG4gICAgICB0cmlnZ2VyRXJyb3JFdmVudChlbHQsICdodG14OnRhcmdldEVycm9yJywgeyB0YXJnZXQ6IGdldEF0dHJpYnV0ZVZhbHVlKGVsdCwgJ2h4LXRhcmdldCcpIH0pXG4gICAgICBtYXliZUNhbGwocmVqZWN0KVxuICAgICAgcmV0dXJuIHByb21pc2VcbiAgICB9XG5cbiAgICBsZXQgZWx0RGF0YSA9IGdldEludGVybmFsRGF0YShlbHQpXG4gICAgY29uc3Qgc3VibWl0dGVyID0gZWx0RGF0YS5sYXN0QnV0dG9uQ2xpY2tlZFxuXG4gICAgaWYgKHN1Ym1pdHRlcikge1xuICAgICAgY29uc3QgYnV0dG9uUGF0aCA9IGdldFJhd0F0dHJpYnV0ZShzdWJtaXR0ZXIsICdmb3JtYWN0aW9uJylcbiAgICAgIGlmIChidXR0b25QYXRoICE9IG51bGwpIHtcbiAgICAgICAgcGF0aCA9IGJ1dHRvblBhdGhcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnV0dG9uVmVyYiA9IGdldFJhd0F0dHJpYnV0ZShzdWJtaXR0ZXIsICdmb3JtbWV0aG9kJylcbiAgICAgIGlmIChidXR0b25WZXJiICE9IG51bGwpIHtcbiAgICAgIC8vIGlnbm9yZSBidXR0b25zIHdpdGggZm9ybW1ldGhvZD1cImRpYWxvZ1wiXG4gICAgICAgIGlmIChidXR0b25WZXJiLnRvTG93ZXJDYXNlKCkgIT09ICdkaWFsb2cnKSB7XG4gICAgICAgICAgdmVyYiA9ICgvKiogQHR5cGUgSHR0cFZlcmIgKi8oYnV0dG9uVmVyYikpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb25maXJtUXVlc3Rpb24gPSBnZXRDbG9zZXN0QXR0cmlidXRlVmFsdWUoZWx0LCAnaHgtY29uZmlybScpXG4gICAgLy8gYWxsb3cgZXZlbnQtYmFzZWQgY29uZmlybWF0aW9uIHcvIGEgY2FsbGJhY2tcbiAgICBpZiAoY29uZmlybWVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGlzc3VlUmVxdWVzdCA9IGZ1bmN0aW9uKHNraXBDb25maXJtYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGlzc3VlQWpheFJlcXVlc3QodmVyYiwgcGF0aCwgZWx0LCBldmVudCwgZXRjLCAhIXNraXBDb25maXJtYXRpb24pXG4gICAgICB9XG4gICAgICBjb25zdCBjb25maXJtRGV0YWlscyA9IHsgdGFyZ2V0LCBlbHQsIHBhdGgsIHZlcmIsIHRyaWdnZXJpbmdFdmVudDogZXZlbnQsIGV0YywgaXNzdWVSZXF1ZXN0LCBxdWVzdGlvbjogY29uZmlybVF1ZXN0aW9uIH1cbiAgICAgIGlmICh0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDpjb25maXJtJywgY29uZmlybURldGFpbHMpID09PSBmYWxzZSkge1xuICAgICAgICBtYXliZUNhbGwocmVzb2x2ZSlcbiAgICAgICAgcmV0dXJuIHByb21pc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgc3luY0VsdCA9IGVsdFxuICAgIGxldCBzeW5jU3RyYXRlZ3kgPSBnZXRDbG9zZXN0QXR0cmlidXRlVmFsdWUoZWx0LCAnaHgtc3luYycpXG4gICAgbGV0IHF1ZXVlU3RyYXRlZ3kgPSBudWxsXG4gICAgbGV0IGFib3J0YWJsZSA9IGZhbHNlXG4gICAgaWYgKHN5bmNTdHJhdGVneSkge1xuICAgICAgY29uc3Qgc3luY1N0cmluZ3MgPSBzeW5jU3RyYXRlZ3kuc3BsaXQoJzonKVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBzeW5jU3RyaW5nc1swXS50cmltKClcbiAgICAgIGlmIChzZWxlY3RvciA9PT0gJ3RoaXMnKSB7XG4gICAgICAgIHN5bmNFbHQgPSBmaW5kVGhpc0VsZW1lbnQoZWx0LCAnaHgtc3luYycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzeW5jRWx0ID0gYXNFbGVtZW50KHF1ZXJ5U2VsZWN0b3JFeHQoZWx0LCBzZWxlY3RvcikpXG4gICAgICB9XG4gICAgICAvLyBkZWZhdWx0IHRvIHRoZSBkcm9wIHN0cmF0ZWd5XG4gICAgICBzeW5jU3RyYXRlZ3kgPSAoc3luY1N0cmluZ3NbMV0gfHwgJ2Ryb3AnKS50cmltKClcbiAgICAgIGVsdERhdGEgPSBnZXRJbnRlcm5hbERhdGEoc3luY0VsdClcbiAgICAgIGlmIChzeW5jU3RyYXRlZ3kgPT09ICdkcm9wJyAmJiBlbHREYXRhLnhociAmJiBlbHREYXRhLmFib3J0YWJsZSAhPT0gdHJ1ZSkge1xuICAgICAgICBtYXliZUNhbGwocmVzb2x2ZSlcbiAgICAgICAgcmV0dXJuIHByb21pc2VcbiAgICAgIH0gZWxzZSBpZiAoc3luY1N0cmF0ZWd5ID09PSAnYWJvcnQnKSB7XG4gICAgICAgIGlmIChlbHREYXRhLnhocikge1xuICAgICAgICAgIG1heWJlQ2FsbChyZXNvbHZlKVxuICAgICAgICAgIHJldHVybiBwcm9taXNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWJvcnRhYmxlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHN5bmNTdHJhdGVneSA9PT0gJ3JlcGxhY2UnKSB7XG4gICAgICAgIHRyaWdnZXJFdmVudChzeW5jRWx0LCAnaHRteDphYm9ydCcpIC8vIGFib3J0IHRoZSBjdXJyZW50IHJlcXVlc3QgYW5kIGNvbnRpbnVlXG4gICAgICB9IGVsc2UgaWYgKHN5bmNTdHJhdGVneS5pbmRleE9mKCdxdWV1ZScpID09PSAwKSB7XG4gICAgICAgIGNvbnN0IHF1ZXVlU3RyQXJyYXkgPSBzeW5jU3RyYXRlZ3kuc3BsaXQoJyAnKVxuICAgICAgICBxdWV1ZVN0cmF0ZWd5ID0gKHF1ZXVlU3RyQXJyYXlbMV0gfHwgJ2xhc3QnKS50cmltKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZWx0RGF0YS54aHIpIHtcbiAgICAgIGlmIChlbHREYXRhLmFib3J0YWJsZSkge1xuICAgICAgICB0cmlnZ2VyRXZlbnQoc3luY0VsdCwgJ2h0bXg6YWJvcnQnKSAvLyBhYm9ydCB0aGUgY3VycmVudCByZXF1ZXN0IGFuZCBjb250aW51ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHF1ZXVlU3RyYXRlZ3kgPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnREYXRhID0gZ2V0SW50ZXJuYWxEYXRhKGV2ZW50KVxuICAgICAgICAgICAgaWYgKGV2ZW50RGF0YSAmJiBldmVudERhdGEudHJpZ2dlclNwZWMgJiYgZXZlbnREYXRhLnRyaWdnZXJTcGVjLnF1ZXVlKSB7XG4gICAgICAgICAgICAgIHF1ZXVlU3RyYXRlZ3kgPSBldmVudERhdGEudHJpZ2dlclNwZWMucXVldWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHF1ZXVlU3RyYXRlZ3kgPT0gbnVsbCkge1xuICAgICAgICAgICAgcXVldWVTdHJhdGVneSA9ICdsYXN0J1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZWx0RGF0YS5xdWV1ZWRSZXF1ZXN0cyA9PSBudWxsKSB7XG4gICAgICAgICAgZWx0RGF0YS5xdWV1ZWRSZXF1ZXN0cyA9IFtdXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHF1ZXVlU3RyYXRlZ3kgPT09ICdmaXJzdCcgJiYgZWx0RGF0YS5xdWV1ZWRSZXF1ZXN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBlbHREYXRhLnF1ZXVlZFJlcXVlc3RzLnB1c2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpc3N1ZUFqYXhSZXF1ZXN0KHZlcmIsIHBhdGgsIGVsdCwgZXZlbnQsIGV0YylcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKHF1ZXVlU3RyYXRlZ3kgPT09ICdhbGwnKSB7XG4gICAgICAgICAgZWx0RGF0YS5xdWV1ZWRSZXF1ZXN0cy5wdXNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaXNzdWVBamF4UmVxdWVzdCh2ZXJiLCBwYXRoLCBlbHQsIGV2ZW50LCBldGMpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChxdWV1ZVN0cmF0ZWd5ID09PSAnbGFzdCcpIHtcbiAgICAgICAgICBlbHREYXRhLnF1ZXVlZFJlcXVlc3RzID0gW10gLy8gZHVtcCBleGlzdGluZyBxdWV1ZVxuICAgICAgICAgIGVsdERhdGEucXVldWVkUmVxdWVzdHMucHVzaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlzc3VlQWpheFJlcXVlc3QodmVyYiwgcGF0aCwgZWx0LCBldmVudCwgZXRjKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWF5YmVDYWxsKHJlc29sdmUpXG4gICAgICAgIHJldHVybiBwcm9taXNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICBlbHREYXRhLnhociA9IHhoclxuICAgIGVsdERhdGEuYWJvcnRhYmxlID0gYWJvcnRhYmxlXG4gICAgY29uc3QgZW5kUmVxdWVzdExvY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIGVsdERhdGEueGhyID0gbnVsbFxuICAgICAgZWx0RGF0YS5hYm9ydGFibGUgPSBmYWxzZVxuICAgICAgaWYgKGVsdERhdGEucXVldWVkUmVxdWVzdHMgIT0gbnVsbCAmJlxuICAgICAgZWx0RGF0YS5xdWV1ZWRSZXF1ZXN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHF1ZXVlZFJlcXVlc3QgPSBlbHREYXRhLnF1ZXVlZFJlcXVlc3RzLnNoaWZ0KClcbiAgICAgICAgcXVldWVkUmVxdWVzdCgpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHByb21wdFF1ZXN0aW9uID0gZ2V0Q2xvc2VzdEF0dHJpYnV0ZVZhbHVlKGVsdCwgJ2h4LXByb21wdCcpXG4gICAgaWYgKHByb21wdFF1ZXN0aW9uKSB7XG4gICAgICB2YXIgcHJvbXB0UmVzcG9uc2UgPSBwcm9tcHQocHJvbXB0UXVlc3Rpb24pXG4gICAgICAvLyBwcm9tcHQgcmV0dXJucyBudWxsIGlmIGNhbmNlbGxlZCBhbmQgZW1wdHkgc3RyaW5nIGlmIGFjY2VwdGVkIHdpdGggbm8gZW50cnlcbiAgICAgIGlmIChwcm9tcHRSZXNwb25zZSA9PT0gbnVsbCB8fFxuICAgICAgIXRyaWdnZXJFdmVudChlbHQsICdodG14OnByb21wdCcsIHsgcHJvbXB0OiBwcm9tcHRSZXNwb25zZSwgdGFyZ2V0IH0pKSB7XG4gICAgICAgIG1heWJlQ2FsbChyZXNvbHZlKVxuICAgICAgICBlbmRSZXF1ZXN0TG9jaygpXG4gICAgICAgIHJldHVybiBwcm9taXNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpcm1RdWVzdGlvbiAmJiAhY29uZmlybWVkKSB7XG4gICAgICBpZiAoIWNvbmZpcm0oY29uZmlybVF1ZXN0aW9uKSkge1xuICAgICAgICBtYXliZUNhbGwocmVzb2x2ZSlcbiAgICAgICAgZW5kUmVxdWVzdExvY2soKVxuICAgICAgICByZXR1cm4gcHJvbWlzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBoZWFkZXJzID0gZ2V0SGVhZGVycyhlbHQsIHRhcmdldCwgcHJvbXB0UmVzcG9uc2UpXG5cbiAgICBpZiAodmVyYiAhPT0gJ2dldCcgJiYgIXVzZXNGb3JtRGF0YShlbHQpKSB7XG4gICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgfVxuXG4gICAgaWYgKGV0Yy5oZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzID0gbWVyZ2VPYmplY3RzKGhlYWRlcnMsIGV0Yy5oZWFkZXJzKVxuICAgIH1cbiAgICBjb25zdCByZXN1bHRzID0gZ2V0SW5wdXRWYWx1ZXMoZWx0LCB2ZXJiKVxuICAgIGxldCBlcnJvcnMgPSByZXN1bHRzLmVycm9yc1xuICAgIGNvbnN0IHJhd0Zvcm1EYXRhID0gcmVzdWx0cy5mb3JtRGF0YVxuICAgIGlmIChldGMudmFsdWVzKSB7XG4gICAgICBvdmVycmlkZUZvcm1EYXRhKHJhd0Zvcm1EYXRhLCBmb3JtRGF0YUZyb21PYmplY3QoZXRjLnZhbHVlcykpXG4gICAgfVxuICAgIGNvbnN0IGV4cHJlc3Npb25WYXJzID0gZm9ybURhdGFGcm9tT2JqZWN0KGdldEV4cHJlc3Npb25WYXJzKGVsdCkpXG4gICAgY29uc3QgYWxsRm9ybURhdGEgPSBvdmVycmlkZUZvcm1EYXRhKHJhd0Zvcm1EYXRhLCBleHByZXNzaW9uVmFycylcbiAgICBsZXQgZmlsdGVyZWRGb3JtRGF0YSA9IGZpbHRlclZhbHVlcyhhbGxGb3JtRGF0YSwgZWx0KVxuXG4gICAgaWYgKGh0bXguY29uZmlnLmdldENhY2hlQnVzdGVyUGFyYW0gJiYgdmVyYiA9PT0gJ2dldCcpIHtcbiAgICAgIGZpbHRlcmVkRm9ybURhdGEuc2V0KCdvcmcuaHRteC5jYWNoZS1idXN0ZXInLCBnZXRSYXdBdHRyaWJ1dGUodGFyZ2V0LCAnaWQnKSB8fCAndHJ1ZScpXG4gICAgfVxuXG4gICAgLy8gYmVoYXZpb3Igb2YgYW5jaG9ycyB3LyBlbXB0eSBocmVmIGlzIHRvIHVzZSB0aGUgY3VycmVudCBVUkxcbiAgICBpZiAocGF0aCA9PSBudWxsIHx8IHBhdGggPT09ICcnKSB7XG4gICAgICBwYXRoID0gZ2V0RG9jdW1lbnQoKS5sb2NhdGlvbi5ocmVmXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFtjcmVkZW50aWFsc11cbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gW3RpbWVvdXRdXG4gICAgICogQHByb3BlcnR5IHtib29sZWFufSBbbm9IZWFkZXJzXVxuICAgICAqL1xuICAgIGNvbnN0IHJlcXVlc3RBdHRyVmFsdWVzID0gZ2V0VmFsdWVzRm9yRWxlbWVudChlbHQsICdoeC1yZXF1ZXN0JylcblxuICAgIGNvbnN0IGVsdElzQm9vc3RlZCA9IGdldEludGVybmFsRGF0YShlbHQpLmJvb3N0ZWRcblxuICAgIGxldCB1c2VVcmxQYXJhbXMgPSBodG14LmNvbmZpZy5tZXRob2RzVGhhdFVzZVVybFBhcmFtcy5pbmRleE9mKHZlcmIpID49IDBcblxuICAgIC8qKiBAdHlwZSBIdG14UmVxdWVzdENvbmZpZyAqL1xuICAgIGNvbnN0IHJlcXVlc3RDb25maWcgPSB7XG4gICAgICBib29zdGVkOiBlbHRJc0Jvb3N0ZWQsXG4gICAgICB1c2VVcmxQYXJhbXMsXG4gICAgICBmb3JtRGF0YTogZmlsdGVyZWRGb3JtRGF0YSxcbiAgICAgIHBhcmFtZXRlcnM6IGZvcm1EYXRhUHJveHkoZmlsdGVyZWRGb3JtRGF0YSksXG4gICAgICB1bmZpbHRlcmVkRm9ybURhdGE6IGFsbEZvcm1EYXRhLFxuICAgICAgdW5maWx0ZXJlZFBhcmFtZXRlcnM6IGZvcm1EYXRhUHJveHkoYWxsRm9ybURhdGEpLFxuICAgICAgaGVhZGVycyxcbiAgICAgIHRhcmdldCxcbiAgICAgIHZlcmIsXG4gICAgICBlcnJvcnMsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IGV0Yy5jcmVkZW50aWFscyB8fCByZXF1ZXN0QXR0clZhbHVlcy5jcmVkZW50aWFscyB8fCBodG14LmNvbmZpZy53aXRoQ3JlZGVudGlhbHMsXG4gICAgICB0aW1lb3V0OiBldGMudGltZW91dCB8fCByZXF1ZXN0QXR0clZhbHVlcy50aW1lb3V0IHx8IGh0bXguY29uZmlnLnRpbWVvdXQsXG4gICAgICBwYXRoLFxuICAgICAgdHJpZ2dlcmluZ0V2ZW50OiBldmVudFxuICAgIH1cblxuICAgIGlmICghdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6Y29uZmlnUmVxdWVzdCcsIHJlcXVlc3RDb25maWcpKSB7XG4gICAgICBtYXliZUNhbGwocmVzb2x2ZSlcbiAgICAgIGVuZFJlcXVlc3RMb2NrKClcbiAgICAgIHJldHVybiBwcm9taXNlXG4gICAgfVxuXG4gICAgLy8gY29weSBvdXQgaW4gY2FzZSB0aGUgb2JqZWN0IHdhcyBvdmVyd3JpdHRlblxuICAgIHBhdGggPSByZXF1ZXN0Q29uZmlnLnBhdGhcbiAgICB2ZXJiID0gcmVxdWVzdENvbmZpZy52ZXJiXG4gICAgaGVhZGVycyA9IHJlcXVlc3RDb25maWcuaGVhZGVyc1xuICAgIGZpbHRlcmVkRm9ybURhdGEgPSBmb3JtRGF0YUZyb21PYmplY3QocmVxdWVzdENvbmZpZy5wYXJhbWV0ZXJzKVxuICAgIGVycm9ycyA9IHJlcXVlc3RDb25maWcuZXJyb3JzXG4gICAgdXNlVXJsUGFyYW1zID0gcmVxdWVzdENvbmZpZy51c2VVcmxQYXJhbXNcblxuICAgIGlmIChlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRyaWdnZXJFdmVudChlbHQsICdodG14OnZhbGlkYXRpb246aGFsdGVkJywgcmVxdWVzdENvbmZpZylcbiAgICAgIG1heWJlQ2FsbChyZXNvbHZlKVxuICAgICAgZW5kUmVxdWVzdExvY2soKVxuICAgICAgcmV0dXJuIHByb21pc2VcbiAgICB9XG5cbiAgICBjb25zdCBzcGxpdFBhdGggPSBwYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBwYXRoTm9BbmNob3IgPSBzcGxpdFBhdGhbMF1cbiAgICBjb25zdCBhbmNob3IgPSBzcGxpdFBhdGhbMV1cblxuICAgIGxldCBmaW5hbFBhdGggPSBwYXRoXG4gICAgaWYgKHVzZVVybFBhcmFtcykge1xuICAgICAgZmluYWxQYXRoID0gcGF0aE5vQW5jaG9yXG4gICAgICBjb25zdCBoYXNWYWx1ZXMgPSAhZmlsdGVyZWRGb3JtRGF0YS5rZXlzKCkubmV4dCgpLmRvbmVcbiAgICAgIGlmIChoYXNWYWx1ZXMpIHtcbiAgICAgICAgaWYgKGZpbmFsUGF0aC5pbmRleE9mKCc/JykgPCAwKSB7XG4gICAgICAgICAgZmluYWxQYXRoICs9ICc/J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbmFsUGF0aCArPSAnJidcbiAgICAgICAgfVxuICAgICAgICBmaW5hbFBhdGggKz0gdXJsRW5jb2RlKGZpbHRlcmVkRm9ybURhdGEpXG4gICAgICAgIGlmIChhbmNob3IpIHtcbiAgICAgICAgICBmaW5hbFBhdGggKz0gJyMnICsgYW5jaG9yXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXZlcmlmeVBhdGgoZWx0LCBmaW5hbFBhdGgsIHJlcXVlc3RDb25maWcpKSB7XG4gICAgICB0cmlnZ2VyRXJyb3JFdmVudChlbHQsICdodG14OmludmFsaWRQYXRoJywgcmVxdWVzdENvbmZpZylcbiAgICAgIG1heWJlQ2FsbChyZWplY3QpXG4gICAgICByZXR1cm4gcHJvbWlzZVxuICAgIH1cblxuICAgIHhoci5vcGVuKHZlcmIudG9VcHBlckNhc2UoKSwgZmluYWxQYXRoLCB0cnVlKVxuICAgIHhoci5vdmVycmlkZU1pbWVUeXBlKCd0ZXh0L2h0bWwnKVxuICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSByZXF1ZXN0Q29uZmlnLndpdGhDcmVkZW50aWFsc1xuICAgIHhoci50aW1lb3V0ID0gcmVxdWVzdENvbmZpZy50aW1lb3V0XG5cbiAgICAvLyByZXF1ZXN0IGhlYWRlcnNcbiAgICBpZiAocmVxdWVzdEF0dHJWYWx1ZXMubm9IZWFkZXJzKSB7XG4gICAgLy8gaWdub3JlIGFsbCBoZWFkZXJzXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3QgaGVhZGVyIGluIGhlYWRlcnMpIHtcbiAgICAgICAgaWYgKGhlYWRlcnMuaGFzT3duUHJvcGVydHkoaGVhZGVyKSkge1xuICAgICAgICAgIGNvbnN0IGhlYWRlclZhbHVlID0gaGVhZGVyc1toZWFkZXJdXG4gICAgICAgICAgc2FmZWx5U2V0SGVhZGVyVmFsdWUoeGhyLCBoZWFkZXIsIGhlYWRlclZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIHtIdG14UmVzcG9uc2VJbmZvfSAqL1xuICAgIGNvbnN0IHJlc3BvbnNlSW5mbyA9IHtcbiAgICAgIHhocixcbiAgICAgIHRhcmdldCxcbiAgICAgIHJlcXVlc3RDb25maWcsXG4gICAgICBldGMsXG4gICAgICBib29zdGVkOiBlbHRJc0Jvb3N0ZWQsXG4gICAgICBzZWxlY3QsXG4gICAgICBwYXRoSW5mbzoge1xuICAgICAgICByZXF1ZXN0UGF0aDogcGF0aCxcbiAgICAgICAgZmluYWxSZXF1ZXN0UGF0aDogZmluYWxQYXRoLFxuICAgICAgICByZXNwb25zZVBhdGg6IG51bGwsXG4gICAgICAgIGFuY2hvclxuICAgICAgfVxuICAgIH1cblxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGhpZXJhcmNoeSA9IGhpZXJhcmNoeUZvckVsdChlbHQpXG4gICAgICAgIHJlc3BvbnNlSW5mby5wYXRoSW5mby5yZXNwb25zZVBhdGggPSBnZXRQYXRoRnJvbVJlc3BvbnNlKHhocilcbiAgICAgICAgcmVzcG9uc2VIYW5kbGVyKGVsdCwgcmVzcG9uc2VJbmZvKVxuICAgICAgICBpZiAocmVzcG9uc2VJbmZvLmtlZXBJbmRpY2F0b3JzICE9PSB0cnVlKSB7XG4gICAgICAgICAgcmVtb3ZlUmVxdWVzdEluZGljYXRvcnMoaW5kaWNhdG9ycywgZGlzYWJsZUVsdHMpXG4gICAgICAgIH1cbiAgICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6YWZ0ZXJSZXF1ZXN0JywgcmVzcG9uc2VJbmZvKVxuICAgICAgICB0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDphZnRlck9uTG9hZCcsIHJlc3BvbnNlSW5mbylcbiAgICAgICAgLy8gaWYgdGhlIGJvZHkgbm8gbG9uZ2VyIGNvbnRhaW5zIHRoZSBlbGVtZW50LCB0cmlnZ2VyIHRoZSBldmVudCBvbiB0aGUgY2xvc2VzdCBwYXJlbnRcbiAgICAgICAgLy8gcmVtYWluaW5nIGluIHRoZSBET01cbiAgICAgICAgaWYgKCFib2R5Q29udGFpbnMoZWx0KSkge1xuICAgICAgICAgIGxldCBzZWNvbmRhcnlUcmlnZ2VyRWx0ID0gbnVsbFxuICAgICAgICAgIHdoaWxlIChoaWVyYXJjaHkubGVuZ3RoID4gMCAmJiBzZWNvbmRhcnlUcmlnZ2VyRWx0ID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEVsdEluSGllcmFyY2h5ID0gaGllcmFyY2h5LnNoaWZ0KClcbiAgICAgICAgICAgIGlmIChib2R5Q29udGFpbnMocGFyZW50RWx0SW5IaWVyYXJjaHkpKSB7XG4gICAgICAgICAgICAgIHNlY29uZGFyeVRyaWdnZXJFbHQgPSBwYXJlbnRFbHRJbkhpZXJhcmNoeVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2Vjb25kYXJ5VHJpZ2dlckVsdCkge1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KHNlY29uZGFyeVRyaWdnZXJFbHQsICdodG14OmFmdGVyUmVxdWVzdCcsIHJlc3BvbnNlSW5mbylcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChzZWNvbmRhcnlUcmlnZ2VyRWx0LCAnaHRteDphZnRlck9uTG9hZCcsIHJlc3BvbnNlSW5mbylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWF5YmVDYWxsKHJlc29sdmUpXG4gICAgICAgIGVuZFJlcXVlc3RMb2NrKClcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZWx0LCAnaHRteDpvbkxvYWRFcnJvcicsIG1lcmdlT2JqZWN0cyh7IGVycm9yOiBlIH0sIHJlc3BvbnNlSW5mbykpXG4gICAgICAgIHRocm93IGVcbiAgICAgIH1cbiAgICB9XG4gICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlbW92ZVJlcXVlc3RJbmRpY2F0b3JzKGluZGljYXRvcnMsIGRpc2FibGVFbHRzKVxuICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZWx0LCAnaHRteDphZnRlclJlcXVlc3QnLCByZXNwb25zZUluZm8pXG4gICAgICB0cmlnZ2VyRXJyb3JFdmVudChlbHQsICdodG14OnNlbmRFcnJvcicsIHJlc3BvbnNlSW5mbylcbiAgICAgIG1heWJlQ2FsbChyZWplY3QpXG4gICAgICBlbmRSZXF1ZXN0TG9jaygpXG4gICAgfVxuICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZW1vdmVSZXF1ZXN0SW5kaWNhdG9ycyhpbmRpY2F0b3JzLCBkaXNhYmxlRWx0cylcbiAgICAgIHRyaWdnZXJFcnJvckV2ZW50KGVsdCwgJ2h0bXg6YWZ0ZXJSZXF1ZXN0JywgcmVzcG9uc2VJbmZvKVxuICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZWx0LCAnaHRteDpzZW5kQWJvcnQnLCByZXNwb25zZUluZm8pXG4gICAgICBtYXliZUNhbGwocmVqZWN0KVxuICAgICAgZW5kUmVxdWVzdExvY2soKVxuICAgIH1cbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZW1vdmVSZXF1ZXN0SW5kaWNhdG9ycyhpbmRpY2F0b3JzLCBkaXNhYmxlRWx0cylcbiAgICAgIHRyaWdnZXJFcnJvckV2ZW50KGVsdCwgJ2h0bXg6YWZ0ZXJSZXF1ZXN0JywgcmVzcG9uc2VJbmZvKVxuICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZWx0LCAnaHRteDp0aW1lb3V0JywgcmVzcG9uc2VJbmZvKVxuICAgICAgbWF5YmVDYWxsKHJlamVjdClcbiAgICAgIGVuZFJlcXVlc3RMb2NrKClcbiAgICB9XG4gICAgaWYgKCF0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDpiZWZvcmVSZXF1ZXN0JywgcmVzcG9uc2VJbmZvKSkge1xuICAgICAgbWF5YmVDYWxsKHJlc29sdmUpXG4gICAgICBlbmRSZXF1ZXN0TG9jaygpXG4gICAgICByZXR1cm4gcHJvbWlzZVxuICAgIH1cbiAgICB2YXIgaW5kaWNhdG9ycyA9IGFkZFJlcXVlc3RJbmRpY2F0b3JDbGFzc2VzKGVsdClcbiAgICB2YXIgZGlzYWJsZUVsdHMgPSBkaXNhYmxlRWxlbWVudHMoZWx0KVxuXG4gICAgZm9yRWFjaChbJ2xvYWRzdGFydCcsICdsb2FkZW5kJywgJ3Byb2dyZXNzJywgJ2Fib3J0J10sIGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgICAgZm9yRWFjaChbeGhyLCB4aHIudXBsb2FkXSwgZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICB0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDp4aHI6JyArIGV2ZW50TmFtZSwge1xuICAgICAgICAgICAgbGVuZ3RoQ29tcHV0YWJsZTogZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSxcbiAgICAgICAgICAgIGxvYWRlZDogZXZlbnQubG9hZGVkLFxuICAgICAgICAgICAgdG90YWw6IGV2ZW50LnRvdGFsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgICB0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDpiZWZvcmVTZW5kJywgcmVzcG9uc2VJbmZvKVxuICAgIGNvbnN0IHBhcmFtcyA9IHVzZVVybFBhcmFtcyA/IG51bGwgOiBlbmNvZGVQYXJhbXNGb3JCb2R5KHhociwgZWx0LCBmaWx0ZXJlZEZvcm1EYXRhKVxuICAgIHhoci5zZW5kKHBhcmFtcylcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IEh0bXhIaXN0b3J5VXBkYXRlXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFt0eXBlXVxuICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbcGF0aF1cbiAgICovXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7SHRteFJlc3BvbnNlSW5mb30gcmVzcG9uc2VJbmZvXG4gICAqIEByZXR1cm4ge0h0bXhIaXN0b3J5VXBkYXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gZGV0ZXJtaW5lSGlzdG9yeVVwZGF0ZXMoZWx0LCByZXNwb25zZUluZm8pIHtcbiAgICBjb25zdCB4aHIgPSByZXNwb25zZUluZm8ueGhyXG5cbiAgICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gRmlyc3QgY29uc3VsdCByZXNwb25zZSBoZWFkZXJzXG4gICAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGxldCBwYXRoRnJvbUhlYWRlcnMgPSBudWxsXG4gICAgbGV0IHR5cGVGcm9tSGVhZGVycyA9IG51bGxcbiAgICBpZiAoaGFzSGVhZGVyKHhociwgL0hYLVB1c2g6L2kpKSB7XG4gICAgICBwYXRoRnJvbUhlYWRlcnMgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0hYLVB1c2gnKVxuICAgICAgdHlwZUZyb21IZWFkZXJzID0gJ3B1c2gnXG4gICAgfSBlbHNlIGlmIChoYXNIZWFkZXIoeGhyLCAvSFgtUHVzaC1Vcmw6L2kpKSB7XG4gICAgICBwYXRoRnJvbUhlYWRlcnMgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0hYLVB1c2gtVXJsJylcbiAgICAgIHR5cGVGcm9tSGVhZGVycyA9ICdwdXNoJ1xuICAgIH0gZWxzZSBpZiAoaGFzSGVhZGVyKHhociwgL0hYLVJlcGxhY2UtVXJsOi9pKSkge1xuICAgICAgcGF0aEZyb21IZWFkZXJzID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdIWC1SZXBsYWNlLVVybCcpXG4gICAgICB0eXBlRnJvbUhlYWRlcnMgPSAncmVwbGFjZSdcbiAgICB9XG5cbiAgICAvLyBpZiB0aGVyZSB3YXMgYSByZXNwb25zZSBoZWFkZXIsIHRoYXQgaGFzIHByaW9yaXR5XG4gICAgaWYgKHBhdGhGcm9tSGVhZGVycykge1xuICAgICAgaWYgKHBhdGhGcm9tSGVhZGVycyA9PT0gJ2ZhbHNlJykge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogdHlwZUZyb21IZWFkZXJzLFxuICAgICAgICAgIHBhdGg6IHBhdGhGcm9tSGVhZGVyc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIE5leHQgcmVzb2x2ZSB2aWEgRE9NIHZhbHVlc1xuICAgIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjb25zdCByZXF1ZXN0UGF0aCA9IHJlc3BvbnNlSW5mby5wYXRoSW5mby5maW5hbFJlcXVlc3RQYXRoXG4gICAgY29uc3QgcmVzcG9uc2VQYXRoID0gcmVzcG9uc2VJbmZvLnBhdGhJbmZvLnJlc3BvbnNlUGF0aFxuXG4gICAgY29uc3QgcHVzaFVybCA9IGdldENsb3Nlc3RBdHRyaWJ1dGVWYWx1ZShlbHQsICdoeC1wdXNoLXVybCcpXG4gICAgY29uc3QgcmVwbGFjZVVybCA9IGdldENsb3Nlc3RBdHRyaWJ1dGVWYWx1ZShlbHQsICdoeC1yZXBsYWNlLXVybCcpXG4gICAgY29uc3QgZWxlbWVudElzQm9vc3RlZCA9IGdldEludGVybmFsRGF0YShlbHQpLmJvb3N0ZWRcblxuICAgIGxldCBzYXZlVHlwZSA9IG51bGxcbiAgICBsZXQgcGF0aCA9IG51bGxcblxuICAgIGlmIChwdXNoVXJsKSB7XG4gICAgICBzYXZlVHlwZSA9ICdwdXNoJ1xuICAgICAgcGF0aCA9IHB1c2hVcmxcbiAgICB9IGVsc2UgaWYgKHJlcGxhY2VVcmwpIHtcbiAgICAgIHNhdmVUeXBlID0gJ3JlcGxhY2UnXG4gICAgICBwYXRoID0gcmVwbGFjZVVybFxuICAgIH0gZWxzZSBpZiAoZWxlbWVudElzQm9vc3RlZCkge1xuICAgICAgc2F2ZVR5cGUgPSAncHVzaCdcbiAgICAgIHBhdGggPSByZXNwb25zZVBhdGggfHwgcmVxdWVzdFBhdGggLy8gaWYgdGhlcmUgaXMgbm8gcmVzcG9uc2UgcGF0aCwgZ28gd2l0aCB0aGUgb3JpZ2luYWwgcmVxdWVzdCBwYXRoXG4gICAgfVxuXG4gICAgaWYgKHBhdGgpIHtcbiAgICAvLyBmYWxzZSBpbmRpY2F0ZXMgbm8gcHVzaCwgcmV0dXJuIGVtcHR5IG9iamVjdFxuICAgICAgaWYgKHBhdGggPT09ICdmYWxzZScpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgICB9XG5cbiAgICAgIC8vIHRydWUgaW5kaWNhdGVzIHdlIHdhbnQgdG8gZm9sbG93IHdoZXJldmVyIHRoZSBzZXJ2ZXIgZW5kZWQgdXAgc2VuZGluZyB1c1xuICAgICAgaWYgKHBhdGggPT09ICd0cnVlJykge1xuICAgICAgICBwYXRoID0gcmVzcG9uc2VQYXRoIHx8IHJlcXVlc3RQYXRoIC8vIGlmIHRoZXJlIGlzIG5vIHJlc3BvbnNlIHBhdGgsIGdvIHdpdGggdGhlIG9yaWdpbmFsIHJlcXVlc3QgcGF0aFxuICAgICAgfVxuXG4gICAgICAvLyByZXN0b3JlIGFueSBhbmNob3IgYXNzb2NpYXRlZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAgICBpZiAocmVzcG9uc2VJbmZvLnBhdGhJbmZvLmFuY2hvciAmJiBwYXRoLmluZGV4T2YoJyMnKSA9PT0gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGggKyAnIycgKyByZXNwb25zZUluZm8ucGF0aEluZm8uYW5jaG9yXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHNhdmVUeXBlLFxuICAgICAgICBwYXRoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0h0bXhSZXNwb25zZUhhbmRsaW5nQ29uZmlnfSByZXNwb25zZUhhbmRsaW5nQ29uZmlnXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGF0dXNcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGNvZGVNYXRjaGVzKHJlc3BvbnNlSGFuZGxpbmdDb25maWcsIHN0YXR1cykge1xuICAgIHZhciByZWdFeHAgPSBuZXcgUmVnRXhwKHJlc3BvbnNlSGFuZGxpbmdDb25maWcuY29kZSlcbiAgICByZXR1cm4gcmVnRXhwLnRlc3Qoc3RhdHVzLnRvU3RyaW5nKDEwKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fSB4aHJcbiAgICogQHJldHVybiB7SHRteFJlc3BvbnNlSGFuZGxpbmdDb25maWd9XG4gICAqL1xuICBmdW5jdGlvbiByZXNvbHZlUmVzcG9uc2VIYW5kbGluZyh4aHIpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGh0bXguY29uZmlnLnJlc3BvbnNlSGFuZGxpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8qKiBAdHlwZSBIdG14UmVzcG9uc2VIYW5kbGluZ0NvbmZpZyAqL1xuICAgICAgdmFyIHJlc3BvbnNlSGFuZGxpbmdFbGVtZW50ID0gaHRteC5jb25maWcucmVzcG9uc2VIYW5kbGluZ1tpXVxuICAgICAgaWYgKGNvZGVNYXRjaGVzKHJlc3BvbnNlSGFuZGxpbmdFbGVtZW50LCB4aHIuc3RhdHVzKSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VIYW5kbGluZ0VsZW1lbnRcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gbm8gbWF0Y2hlcywgcmV0dXJuIG5vIHN3YXBcbiAgICByZXR1cm4ge1xuICAgICAgc3dhcDogZmFsc2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG4gICAqL1xuICBmdW5jdGlvbiBoYW5kbGVUaXRsZSh0aXRsZSkge1xuICAgIGlmICh0aXRsZSkge1xuICAgICAgY29uc3QgdGl0bGVFbHQgPSBmaW5kKCd0aXRsZScpXG4gICAgICBpZiAodGl0bGVFbHQpIHtcbiAgICAgICAgdGl0bGVFbHQuaW5uZXJIVE1MID0gdGl0bGVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7SHRteFJlc3BvbnNlSW5mb30gcmVzcG9uc2VJbmZvXG4gICAqL1xuICBmdW5jdGlvbiBoYW5kbGVBamF4UmVzcG9uc2UoZWx0LCByZXNwb25zZUluZm8pIHtcbiAgICBjb25zdCB4aHIgPSByZXNwb25zZUluZm8ueGhyXG4gICAgbGV0IHRhcmdldCA9IHJlc3BvbnNlSW5mby50YXJnZXRcbiAgICBjb25zdCBldGMgPSByZXNwb25zZUluZm8uZXRjXG4gICAgY29uc3QgcmVzcG9uc2VJbmZvU2VsZWN0ID0gcmVzcG9uc2VJbmZvLnNlbGVjdFxuXG4gICAgaWYgKCF0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDpiZWZvcmVPbkxvYWQnLCByZXNwb25zZUluZm8pKSByZXR1cm5cblxuICAgIGlmIChoYXNIZWFkZXIoeGhyLCAvSFgtVHJpZ2dlcjovaSkpIHtcbiAgICAgIGhhbmRsZVRyaWdnZXJIZWFkZXIoeGhyLCAnSFgtVHJpZ2dlcicsIGVsdClcbiAgICB9XG5cbiAgICBpZiAoaGFzSGVhZGVyKHhociwgL0hYLUxvY2F0aW9uOi9pKSkge1xuICAgICAgc2F2ZUN1cnJlbnRQYWdlVG9IaXN0b3J5KClcbiAgICAgIGxldCByZWRpcmVjdFBhdGggPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0hYLUxvY2F0aW9uJylcbiAgICAgIC8qKiBAdHlwZSB7SHRteEFqYXhIZWxwZXJDb250ZXh0JntwYXRoOnN0cmluZ319ICovXG4gICAgICB2YXIgcmVkaXJlY3RTd2FwU3BlY1xuICAgICAgaWYgKHJlZGlyZWN0UGF0aC5pbmRleE9mKCd7JykgPT09IDApIHtcbiAgICAgICAgcmVkaXJlY3RTd2FwU3BlYyA9IHBhcnNlSlNPTihyZWRpcmVjdFBhdGgpXG4gICAgICAgIC8vIHdoYXQncyB0aGUgYmVzdCB3YXkgdG8gdGhyb3cgYW4gZXJyb3IgaWYgdGhlIHVzZXIgZGlkbid0IGluY2x1ZGUgdGhpc1xuICAgICAgICByZWRpcmVjdFBhdGggPSByZWRpcmVjdFN3YXBTcGVjLnBhdGhcbiAgICAgICAgZGVsZXRlIHJlZGlyZWN0U3dhcFNwZWMucGF0aFxuICAgICAgfVxuICAgICAgYWpheEhlbHBlcignZ2V0JywgcmVkaXJlY3RQYXRoLCByZWRpcmVjdFN3YXBTcGVjKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBwdXNoVXJsSW50b0hpc3RvcnkocmVkaXJlY3RQYXRoKVxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3VsZFJlZnJlc2ggPSBoYXNIZWFkZXIoeGhyLCAvSFgtUmVmcmVzaDovaSkgJiYgeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdIWC1SZWZyZXNoJykgPT09ICd0cnVlJ1xuXG4gICAgaWYgKGhhc0hlYWRlcih4aHIsIC9IWC1SZWRpcmVjdDovaSkpIHtcbiAgICAgIHJlc3BvbnNlSW5mby5rZWVwSW5kaWNhdG9ycyA9IHRydWVcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0hYLVJlZGlyZWN0JylcbiAgICAgIHNob3VsZFJlZnJlc2ggJiYgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzaG91bGRSZWZyZXNoKSB7XG4gICAgICByZXNwb25zZUluZm8ua2VlcEluZGljYXRvcnMgPSB0cnVlXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGhhc0hlYWRlcih4aHIsIC9IWC1SZXRhcmdldDovaSkpIHtcbiAgICAgIGlmICh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0hYLVJldGFyZ2V0JykgPT09ICd0aGlzJykge1xuICAgICAgICByZXNwb25zZUluZm8udGFyZ2V0ID0gZWx0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNwb25zZUluZm8udGFyZ2V0ID0gYXNFbGVtZW50KHF1ZXJ5U2VsZWN0b3JFeHQoZWx0LCB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0hYLVJldGFyZ2V0JykpKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhpc3RvcnlVcGRhdGUgPSBkZXRlcm1pbmVIaXN0b3J5VXBkYXRlcyhlbHQsIHJlc3BvbnNlSW5mbylcblxuICAgIGNvbnN0IHJlc3BvbnNlSGFuZGxpbmcgPSByZXNvbHZlUmVzcG9uc2VIYW5kbGluZyh4aHIpXG4gICAgY29uc3Qgc2hvdWxkU3dhcCA9IHJlc3BvbnNlSGFuZGxpbmcuc3dhcFxuICAgIGxldCBpc0Vycm9yID0gISFyZXNwb25zZUhhbmRsaW5nLmVycm9yXG4gICAgbGV0IGlnbm9yZVRpdGxlID0gaHRteC5jb25maWcuaWdub3JlVGl0bGUgfHwgcmVzcG9uc2VIYW5kbGluZy5pZ25vcmVUaXRsZVxuICAgIGxldCBzZWxlY3RPdmVycmlkZSA9IHJlc3BvbnNlSGFuZGxpbmcuc2VsZWN0XG4gICAgaWYgKHJlc3BvbnNlSGFuZGxpbmcudGFyZ2V0KSB7XG4gICAgICByZXNwb25zZUluZm8udGFyZ2V0ID0gYXNFbGVtZW50KHF1ZXJ5U2VsZWN0b3JFeHQoZWx0LCByZXNwb25zZUhhbmRsaW5nLnRhcmdldCkpXG4gICAgfVxuICAgIHZhciBzd2FwT3ZlcnJpZGUgPSBldGMuc3dhcE92ZXJyaWRlXG4gICAgaWYgKHN3YXBPdmVycmlkZSA9PSBudWxsICYmIHJlc3BvbnNlSGFuZGxpbmcuc3dhcE92ZXJyaWRlKSB7XG4gICAgICBzd2FwT3ZlcnJpZGUgPSByZXNwb25zZUhhbmRsaW5nLnN3YXBPdmVycmlkZVxuICAgIH1cblxuICAgIC8vIHJlc3BvbnNlIGhlYWRlcnMgb3ZlcnJpZGUgcmVzcG9uc2UgaGFuZGxpbmcgY29uZmlnXG4gICAgaWYgKGhhc0hlYWRlcih4aHIsIC9IWC1SZXRhcmdldDovaSkpIHtcbiAgICAgIGlmICh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0hYLVJldGFyZ2V0JykgPT09ICd0aGlzJykge1xuICAgICAgICByZXNwb25zZUluZm8udGFyZ2V0ID0gZWx0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNwb25zZUluZm8udGFyZ2V0ID0gYXNFbGVtZW50KHF1ZXJ5U2VsZWN0b3JFeHQoZWx0LCB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0hYLVJldGFyZ2V0JykpKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzSGVhZGVyKHhociwgL0hYLVJlc3dhcDovaSkpIHtcbiAgICAgIHN3YXBPdmVycmlkZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignSFgtUmVzd2FwJylcbiAgICB9XG5cbiAgICB2YXIgc2VydmVyUmVzcG9uc2UgPSB4aHIucmVzcG9uc2VcbiAgICAvKiogQHR5cGUgSHRteEJlZm9yZVN3YXBEZXRhaWxzICovXG4gICAgdmFyIGJlZm9yZVN3YXBEZXRhaWxzID0gbWVyZ2VPYmplY3RzKHtcbiAgICAgIHNob3VsZFN3YXAsXG4gICAgICBzZXJ2ZXJSZXNwb25zZSxcbiAgICAgIGlzRXJyb3IsXG4gICAgICBpZ25vcmVUaXRsZSxcbiAgICAgIHNlbGVjdE92ZXJyaWRlXG4gICAgfSwgcmVzcG9uc2VJbmZvKVxuXG4gICAgaWYgKHJlc3BvbnNlSGFuZGxpbmcuZXZlbnQgJiYgIXRyaWdnZXJFdmVudCh0YXJnZXQsIHJlc3BvbnNlSGFuZGxpbmcuZXZlbnQsIGJlZm9yZVN3YXBEZXRhaWxzKSkgcmV0dXJuXG5cbiAgICBpZiAoIXRyaWdnZXJFdmVudCh0YXJnZXQsICdodG14OmJlZm9yZVN3YXAnLCBiZWZvcmVTd2FwRGV0YWlscykpIHJldHVyblxuXG4gICAgdGFyZ2V0ID0gYmVmb3JlU3dhcERldGFpbHMudGFyZ2V0IC8vIGFsbG93IHJlLXRhcmdldGluZ1xuICAgIHNlcnZlclJlc3BvbnNlID0gYmVmb3JlU3dhcERldGFpbHMuc2VydmVyUmVzcG9uc2UgLy8gYWxsb3cgdXBkYXRpbmcgY29udGVudFxuICAgIGlzRXJyb3IgPSBiZWZvcmVTd2FwRGV0YWlscy5pc0Vycm9yIC8vIGFsbG93IHVwZGF0aW5nIGVycm9yXG4gICAgaWdub3JlVGl0bGUgPSBiZWZvcmVTd2FwRGV0YWlscy5pZ25vcmVUaXRsZSAvLyBhbGxvdyB1cGRhdGluZyBpZ25vcmluZyB0aXRsZVxuICAgIHNlbGVjdE92ZXJyaWRlID0gYmVmb3JlU3dhcERldGFpbHMuc2VsZWN0T3ZlcnJpZGUgLy8gYWxsb3cgdXBkYXRpbmcgc2VsZWN0IG92ZXJyaWRlXG5cbiAgICByZXNwb25zZUluZm8udGFyZ2V0ID0gdGFyZ2V0IC8vIE1ha2UgdXBkYXRlZCB0YXJnZXQgYXZhaWxhYmxlIHRvIHJlc3BvbnNlIGV2ZW50c1xuICAgIHJlc3BvbnNlSW5mby5mYWlsZWQgPSBpc0Vycm9yIC8vIE1ha2UgZmFpbGVkIHByb3BlcnR5IGF2YWlsYWJsZSB0byByZXNwb25zZSBldmVudHNcbiAgICByZXNwb25zZUluZm8uc3VjY2Vzc2Z1bCA9ICFpc0Vycm9yIC8vIE1ha2Ugc3VjY2Vzc2Z1bCBwcm9wZXJ0eSBhdmFpbGFibGUgdG8gcmVzcG9uc2UgZXZlbnRzXG5cbiAgICBpZiAoYmVmb3JlU3dhcERldGFpbHMuc2hvdWxkU3dhcCkge1xuICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDI4Nikge1xuICAgICAgICBjYW5jZWxQb2xsaW5nKGVsdClcbiAgICAgIH1cblxuICAgICAgd2l0aEV4dGVuc2lvbnMoZWx0LCBmdW5jdGlvbihleHRlbnNpb24pIHtcbiAgICAgICAgc2VydmVyUmVzcG9uc2UgPSBleHRlbnNpb24udHJhbnNmb3JtUmVzcG9uc2Uoc2VydmVyUmVzcG9uc2UsIHhociwgZWx0KVxuICAgICAgfSlcblxuICAgICAgLy8gU2F2ZSBjdXJyZW50IHBhZ2UgaWYgdGhlcmUgd2lsbCBiZSBhIGhpc3RvcnkgdXBkYXRlXG4gICAgICBpZiAoaGlzdG9yeVVwZGF0ZS50eXBlKSB7XG4gICAgICAgIHNhdmVDdXJyZW50UGFnZVRvSGlzdG9yeSgpXG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNIZWFkZXIoeGhyLCAvSFgtUmVzd2FwOi9pKSkge1xuICAgICAgICBzd2FwT3ZlcnJpZGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0hYLVJlc3dhcCcpXG4gICAgICB9XG4gICAgICB2YXIgc3dhcFNwZWMgPSBnZXRTd2FwU3BlY2lmaWNhdGlvbihlbHQsIHN3YXBPdmVycmlkZSlcblxuICAgICAgaWYgKCFzd2FwU3BlYy5oYXNPd25Qcm9wZXJ0eSgnaWdub3JlVGl0bGUnKSkge1xuICAgICAgICBzd2FwU3BlYy5pZ25vcmVUaXRsZSA9IGlnbm9yZVRpdGxlXG4gICAgICB9XG5cbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGh0bXguY29uZmlnLnN3YXBwaW5nQ2xhc3MpXG5cbiAgICAgIC8vIG9wdGlvbmFsIHRyYW5zaXRpb24gQVBJIHByb21pc2UgY2FsbGJhY2tzXG4gICAgICBsZXQgc2V0dGxlUmVzb2x2ZSA9IG51bGxcbiAgICAgIGxldCBzZXR0bGVSZWplY3QgPSBudWxsXG5cbiAgICAgIGlmIChyZXNwb25zZUluZm9TZWxlY3QpIHtcbiAgICAgICAgc2VsZWN0T3ZlcnJpZGUgPSByZXNwb25zZUluZm9TZWxlY3RcbiAgICAgIH1cblxuICAgICAgaWYgKGhhc0hlYWRlcih4aHIsIC9IWC1SZXNlbGVjdDovaSkpIHtcbiAgICAgICAgc2VsZWN0T3ZlcnJpZGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0hYLVJlc2VsZWN0JylcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2VsZWN0T09CID0gZ2V0Q2xvc2VzdEF0dHJpYnV0ZVZhbHVlKGVsdCwgJ2h4LXNlbGVjdC1vb2InKVxuICAgICAgY29uc3Qgc2VsZWN0ID0gZ2V0Q2xvc2VzdEF0dHJpYnV0ZVZhbHVlKGVsdCwgJ2h4LXNlbGVjdCcpXG5cbiAgICAgIGxldCBkb1N3YXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBpZiB3ZSBuZWVkIHRvIHNhdmUgaGlzdG9yeSwgZG8gc28sIGJlZm9yZSBzd2FwcGluZyBzbyB0aGF0IHJlbGF0aXZlIHJlc291cmNlcyBoYXZlIHRoZSBjb3JyZWN0IGJhc2UgVVJMXG4gICAgICAgICAgaWYgKGhpc3RvcnlVcGRhdGUudHlwZSkge1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KGdldERvY3VtZW50KCkuYm9keSwgJ2h0bXg6YmVmb3JlSGlzdG9yeVVwZGF0ZScsIG1lcmdlT2JqZWN0cyh7IGhpc3Rvcnk6IGhpc3RvcnlVcGRhdGUgfSwgcmVzcG9uc2VJbmZvKSlcbiAgICAgICAgICAgIGlmIChoaXN0b3J5VXBkYXRlLnR5cGUgPT09ICdwdXNoJykge1xuICAgICAgICAgICAgICBwdXNoVXJsSW50b0hpc3RvcnkoaGlzdG9yeVVwZGF0ZS5wYXRoKVxuICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQoZ2V0RG9jdW1lbnQoKS5ib2R5LCAnaHRteDpwdXNoZWRJbnRvSGlzdG9yeScsIHsgcGF0aDogaGlzdG9yeVVwZGF0ZS5wYXRoIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXBsYWNlVXJsSW5IaXN0b3J5KGhpc3RvcnlVcGRhdGUucGF0aClcbiAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KGdldERvY3VtZW50KCkuYm9keSwgJ2h0bXg6cmVwbGFjZWRJbkhpc3RvcnknLCB7IHBhdGg6IGhpc3RvcnlVcGRhdGUucGF0aCB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHN3YXAodGFyZ2V0LCBzZXJ2ZXJSZXNwb25zZSwgc3dhcFNwZWMsIHtcbiAgICAgICAgICAgIHNlbGVjdDogc2VsZWN0T3ZlcnJpZGUgfHwgc2VsZWN0LFxuICAgICAgICAgICAgc2VsZWN0T09CLFxuICAgICAgICAgICAgZXZlbnRJbmZvOiByZXNwb25zZUluZm8sXG4gICAgICAgICAgICBhbmNob3I6IHJlc3BvbnNlSW5mby5wYXRoSW5mby5hbmNob3IsXG4gICAgICAgICAgICBjb250ZXh0RWxlbWVudDogZWx0LFxuICAgICAgICAgICAgYWZ0ZXJTd2FwQ2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoaGFzSGVhZGVyKHhociwgL0hYLVRyaWdnZXItQWZ0ZXItU3dhcDovaSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmluYWxFbHQgPSBlbHRcbiAgICAgICAgICAgICAgICBpZiAoIWJvZHlDb250YWlucyhlbHQpKSB7XG4gICAgICAgICAgICAgICAgICBmaW5hbEVsdCA9IGdldERvY3VtZW50KCkuYm9keVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoYW5kbGVUcmlnZ2VySGVhZGVyKHhociwgJ0hYLVRyaWdnZXItQWZ0ZXItU3dhcCcsIGZpbmFsRWx0KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWZ0ZXJTZXR0bGVDYWxsYmFjazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChoYXNIZWFkZXIoeGhyLCAvSFgtVHJpZ2dlci1BZnRlci1TZXR0bGU6L2kpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbmFsRWx0ID0gZWx0XG4gICAgICAgICAgICAgICAgaWYgKCFib2R5Q29udGFpbnMoZWx0KSkge1xuICAgICAgICAgICAgICAgICAgZmluYWxFbHQgPSBnZXREb2N1bWVudCgpLmJvZHlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGFuZGxlVHJpZ2dlckhlYWRlcih4aHIsICdIWC1UcmlnZ2VyLUFmdGVyLVNldHRsZScsIGZpbmFsRWx0KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG1heWJlQ2FsbChzZXR0bGVSZXNvbHZlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0cmlnZ2VyRXJyb3JFdmVudChlbHQsICdodG14OnN3YXBFcnJvcicsIHJlc3BvbnNlSW5mbylcbiAgICAgICAgICBtYXliZUNhbGwoc2V0dGxlUmVqZWN0KVxuICAgICAgICAgIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgc2hvdWxkVHJhbnNpdGlvbiA9IGh0bXguY29uZmlnLmdsb2JhbFZpZXdUcmFuc2l0aW9uc1xuICAgICAgaWYgKHN3YXBTcGVjLmhhc093blByb3BlcnR5KCd0cmFuc2l0aW9uJykpIHtcbiAgICAgICAgc2hvdWxkVHJhbnNpdGlvbiA9IHN3YXBTcGVjLnRyYW5zaXRpb25cbiAgICAgIH1cblxuICAgICAgaWYgKHNob3VsZFRyYW5zaXRpb24gJiZcbiAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6YmVmb3JlVHJhbnNpdGlvbicsIHJlc3BvbnNlSW5mbykgJiZcbiAgICAgICAgICAgICAgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgZXhwZXJpbWVudGFsIGZlYXR1cmUgYXRtXG4gICAgICAgICAgICAgIGRvY3VtZW50LnN0YXJ0Vmlld1RyYW5zaXRpb24pIHtcbiAgICAgICAgY29uc3Qgc2V0dGxlUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKF9yZXNvbHZlLCBfcmVqZWN0KSB7XG4gICAgICAgICAgc2V0dGxlUmVzb2x2ZSA9IF9yZXNvbHZlXG4gICAgICAgICAgc2V0dGxlUmVqZWN0ID0gX3JlamVjdFxuICAgICAgICB9KVxuICAgICAgICAvLyB3cmFwIHRoZSBvcmlnaW5hbCBkb1N3YXAoKSBpbiBhIGNhbGwgdG8gc3RhcnRWaWV3VHJhbnNpdGlvbigpXG4gICAgICAgIGNvbnN0IGlubmVyRG9Td2FwID0gZG9Td2FwXG4gICAgICAgIGRvU3dhcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgZXhwZXJpbWVudGFsIGZlYXR1cmUgYXRtXG4gICAgICAgICAgZG9jdW1lbnQuc3RhcnRWaWV3VHJhbnNpdGlvbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlubmVyRG9Td2FwKClcbiAgICAgICAgICAgIHJldHVybiBzZXR0bGVQcm9taXNlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3dhcFNwZWMuc3dhcERlbGF5ID4gMCkge1xuICAgICAgICBnZXRXaW5kb3coKS5zZXRUaW1lb3V0KGRvU3dhcCwgc3dhcFNwZWMuc3dhcERlbGF5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9Td2FwKClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzRXJyb3IpIHtcbiAgICAgIHRyaWdnZXJFcnJvckV2ZW50KGVsdCwgJ2h0bXg6cmVzcG9uc2VFcnJvcicsIG1lcmdlT2JqZWN0cyh7IGVycm9yOiAnUmVzcG9uc2UgU3RhdHVzIEVycm9yIENvZGUgJyArIHhoci5zdGF0dXMgKyAnIGZyb20gJyArIHJlc3BvbnNlSW5mby5wYXRoSW5mby5yZXF1ZXN0UGF0aCB9LCByZXNwb25zZUluZm8pKVxuICAgIH1cbiAgfVxuXG4gIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIEV4dGVuc2lvbnMgQVBJXG4gIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgLyoqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBIdG14RXh0ZW5zaW9uPn0gKi9cbiAgY29uc3QgZXh0ZW5zaW9ucyA9IHt9XG5cbiAgLyoqXG4gICAqIGV4dGVuc2lvbkJhc2UgZGVmaW5lcyB0aGUgZGVmYXVsdCBmdW5jdGlvbnMgZm9yIGFsbCBleHRlbnNpb25zLlxuICAgKiBAcmV0dXJucyB7SHRteEV4dGVuc2lvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGV4dGVuc2lvbkJhc2UoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uKGFwaSkgeyByZXR1cm4gbnVsbCB9LFxuICAgICAgZ2V0U2VsZWN0b3JzOiBmdW5jdGlvbigpIHsgcmV0dXJuIG51bGwgfSxcbiAgICAgIG9uRXZlbnQ6IGZ1bmN0aW9uKG5hbWUsIGV2dCkgeyByZXR1cm4gdHJ1ZSB9LFxuICAgICAgdHJhbnNmb3JtUmVzcG9uc2U6IGZ1bmN0aW9uKHRleHQsIHhociwgZWx0KSB7IHJldHVybiB0ZXh0IH0sXG4gICAgICBpc0lubGluZVN3YXA6IGZ1bmN0aW9uKHN3YXBTdHlsZSkgeyByZXR1cm4gZmFsc2UgfSxcbiAgICAgIGhhbmRsZVN3YXA6IGZ1bmN0aW9uKHN3YXBTdHlsZSwgdGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbykgeyByZXR1cm4gZmFsc2UgfSxcbiAgICAgIGVuY29kZVBhcmFtZXRlcnM6IGZ1bmN0aW9uKHhociwgcGFyYW1ldGVycywgZWx0KSB7IHJldHVybiBudWxsIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogZGVmaW5lRXh0ZW5zaW9uIGluaXRpYWxpemVzIHRoZSBleHRlbnNpb24gYW5kIGFkZHMgaXQgdG8gdGhlIGh0bXggcmVnaXN0cnlcbiAgICpcbiAgICogQHNlZSBodHRwczovL2h0bXgub3JnL2FwaS8jZGVmaW5lRXh0ZW5zaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHRoZSBleHRlbnNpb24gbmFtZVxuICAgKiBAcGFyYW0ge0h0bXhFeHRlbnNpb259IGV4dGVuc2lvbiB0aGUgZXh0ZW5zaW9uIGRlZmluaXRpb25cbiAgICovXG4gIGZ1bmN0aW9uIGRlZmluZUV4dGVuc2lvbihuYW1lLCBleHRlbnNpb24pIHtcbiAgICBpZiAoZXh0ZW5zaW9uLmluaXQpIHtcbiAgICAgIGV4dGVuc2lvbi5pbml0KGludGVybmFsQVBJKVxuICAgIH1cbiAgICBleHRlbnNpb25zW25hbWVdID0gbWVyZ2VPYmplY3RzKGV4dGVuc2lvbkJhc2UoKSwgZXh0ZW5zaW9uKVxuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZUV4dGVuc2lvbiByZW1vdmVzIGFuIGV4dGVuc2lvbiBmcm9tIHRoZSBodG14IHJlZ2lzdHJ5XG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI3JlbW92ZUV4dGVuc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlRXh0ZW5zaW9uKG5hbWUpIHtcbiAgICBkZWxldGUgZXh0ZW5zaW9uc1tuYW1lXVxuICB9XG5cbiAgLyoqXG4gICAqIGdldEV4dGVuc2lvbnMgc2VhcmNoZXMgdXAgdGhlIERPTSB0cmVlIHRvIHJldHVybiBhbGwgZXh0ZW5zaW9ucyB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIGEgZ2l2ZW4gZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcGFyYW0ge0h0bXhFeHRlbnNpb25bXT19IGV4dGVuc2lvbnNUb1JldHVyblxuICAgKiBAcGFyYW0ge3N0cmluZ1tdPX0gZXh0ZW5zaW9uc1RvSWdub3JlXG4gICAqIEByZXR1cm5zIHtIdG14RXh0ZW5zaW9uW119XG4gICAqL1xuICBmdW5jdGlvbiBnZXRFeHRlbnNpb25zKGVsdCwgZXh0ZW5zaW9uc1RvUmV0dXJuLCBleHRlbnNpb25zVG9JZ25vcmUpIHtcbiAgICBpZiAoZXh0ZW5zaW9uc1RvUmV0dXJuID09IHVuZGVmaW5lZCkge1xuICAgICAgZXh0ZW5zaW9uc1RvUmV0dXJuID0gW11cbiAgICB9XG4gICAgaWYgKGVsdCA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBleHRlbnNpb25zVG9SZXR1cm5cbiAgICB9XG4gICAgaWYgKGV4dGVuc2lvbnNUb0lnbm9yZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGV4dGVuc2lvbnNUb0lnbm9yZSA9IFtdXG4gICAgfVxuICAgIGNvbnN0IGV4dGVuc2lvbnNGb3JFbGVtZW50ID0gZ2V0QXR0cmlidXRlVmFsdWUoZWx0LCAnaHgtZXh0JylcbiAgICBpZiAoZXh0ZW5zaW9uc0ZvckVsZW1lbnQpIHtcbiAgICAgIGZvckVhY2goZXh0ZW5zaW9uc0ZvckVsZW1lbnQuc3BsaXQoJywnKSwgZnVuY3Rpb24oZXh0ZW5zaW9uTmFtZSkge1xuICAgICAgICBleHRlbnNpb25OYW1lID0gZXh0ZW5zaW9uTmFtZS5yZXBsYWNlKC8gL2csICcnKVxuICAgICAgICBpZiAoZXh0ZW5zaW9uTmFtZS5zbGljZSgwLCA3KSA9PSAnaWdub3JlOicpIHtcbiAgICAgICAgICBleHRlbnNpb25zVG9JZ25vcmUucHVzaChleHRlbnNpb25OYW1lLnNsaWNlKDcpKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChleHRlbnNpb25zVG9JZ25vcmUuaW5kZXhPZihleHRlbnNpb25OYW1lKSA8IDApIHtcbiAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBleHRlbnNpb25zW2V4dGVuc2lvbk5hbWVdXG4gICAgICAgICAgaWYgKGV4dGVuc2lvbiAmJiBleHRlbnNpb25zVG9SZXR1cm4uaW5kZXhPZihleHRlbnNpb24pIDwgMCkge1xuICAgICAgICAgICAgZXh0ZW5zaW9uc1RvUmV0dXJuLnB1c2goZXh0ZW5zaW9uKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGdldEV4dGVuc2lvbnMoYXNFbGVtZW50KHBhcmVudEVsdChlbHQpKSwgZXh0ZW5zaW9uc1RvUmV0dXJuLCBleHRlbnNpb25zVG9JZ25vcmUpXG4gIH1cblxuICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBJbml0aWFsaXphdGlvblxuICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICB2YXIgaXNSZWFkeSA9IGZhbHNlXG4gIGdldERvY3VtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGlzUmVhZHkgPSB0cnVlXG4gIH0pXG5cbiAgLyoqXG4gICAqIEV4ZWN1dGUgYSBmdW5jdGlvbiBub3cgaWYgRE9NQ29udGVudExvYWRlZCBoYXMgZmlyZWQsIG90aGVyd2lzZSBsaXN0ZW4gZm9yIGl0LlxuICAgKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHVzZXMgaXNSZWFkeSBiZWNhdXNlIHRoZXJlIGlzIG5vIHJlbGlhYmxlIHdheSB0byBhc2sgdGhlIGJyb3dzZXIgd2hldGhlclxuICAgKiB0aGUgRE9NQ29udGVudExvYWRlZCBldmVudCBoYXMgYWxyZWFkeSBiZWVuIGZpcmVkOyB0aGVyZSdzIGEgZ2FwIGJldHdlZW4gRE9NQ29udGVudExvYWRlZFxuICAgKiBmaXJpbmcgYW5kIHJlYWR5c3RhdGU9Y29tcGxldGUuXG4gICAqL1xuICBmdW5jdGlvbiByZWFkeShmbikge1xuICAgIC8vIENoZWNraW5nIHJlYWR5U3RhdGUgaGVyZSBpcyBhIGZhaWxzYWZlIGluIGNhc2UgdGhlIGh0bXggc2NyaXB0IHRhZyBlbnRlcmVkIHRoZSBET00gYnlcbiAgICAvLyBzb21lIG1lYW5zIG90aGVyIHRoYW4gdGhlIGluaXRpYWwgcGFnZSBsb2FkLlxuICAgIGlmIChpc1JlYWR5IHx8IGdldERvY3VtZW50KCkucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgZm4oKVxuICAgIH0gZWxzZSB7XG4gICAgICBnZXREb2N1bWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbilcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbnNlcnRJbmRpY2F0b3JTdHlsZXMoKSB7XG4gICAgaWYgKGh0bXguY29uZmlnLmluY2x1ZGVJbmRpY2F0b3JTdHlsZXMgIT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBub25jZUF0dHJpYnV0ZSA9IGh0bXguY29uZmlnLmlubGluZVN0eWxlTm9uY2UgPyBgIG5vbmNlPVwiJHtodG14LmNvbmZpZy5pbmxpbmVTdHlsZU5vbmNlfVwiYCA6ICcnXG4gICAgICBnZXREb2N1bWVudCgpLmhlYWQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLFxuICAgICAgICAnPHN0eWxlJyArIG5vbmNlQXR0cmlidXRlICsgJz5cXFxuICAgICAgLicgKyBodG14LmNvbmZpZy5pbmRpY2F0b3JDbGFzcyArICd7b3BhY2l0eTowfVxcXG4gICAgICAuJyArIGh0bXguY29uZmlnLnJlcXVlc3RDbGFzcyArICcgLicgKyBodG14LmNvbmZpZy5pbmRpY2F0b3JDbGFzcyArICd7b3BhY2l0eToxOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2UtaW47fVxcXG4gICAgICAuJyArIGh0bXguY29uZmlnLnJlcXVlc3RDbGFzcyArICcuJyArIGh0bXguY29uZmlnLmluZGljYXRvckNsYXNzICsgJ3tvcGFjaXR5OjE7IHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbjt9XFxcbiAgICAgIDwvc3R5bGU+JylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNZXRhQ29uZmlnKCkge1xuICAgIC8qKiBAdHlwZSBIVE1MTWV0YUVsZW1lbnQgKi9cbiAgICBjb25zdCBlbGVtZW50ID0gZ2V0RG9jdW1lbnQoKS5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJodG14LWNvbmZpZ1wiXScpXG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBwYXJzZUpTT04oZWxlbWVudC5jb250ZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlTWV0YUNvbmZpZygpIHtcbiAgICBjb25zdCBtZXRhQ29uZmlnID0gZ2V0TWV0YUNvbmZpZygpXG4gICAgaWYgKG1ldGFDb25maWcpIHtcbiAgICAgIGh0bXguY29uZmlnID0gbWVyZ2VPYmplY3RzKGh0bXguY29uZmlnLCBtZXRhQ29uZmlnKVxuICAgIH1cbiAgfVxuXG4gIC8vIGluaXRpYWxpemUgdGhlIGRvY3VtZW50XG4gIHJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIG1lcmdlTWV0YUNvbmZpZygpXG4gICAgaW5zZXJ0SW5kaWNhdG9yU3R5bGVzKClcbiAgICBsZXQgYm9keSA9IGdldERvY3VtZW50KCkuYm9keVxuICAgIHByb2Nlc3NOb2RlKGJvZHkpXG4gICAgY29uc3QgcmVzdG9yZWRFbHRzID0gZ2V0RG9jdW1lbnQoKS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCJbaHgtdHJpZ2dlcj0ncmVzdG9yZWQnXSxbZGF0YS1oeC10cmlnZ2VyPSdyZXN0b3JlZCddXCJcbiAgICApXG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdodG14OmFib3J0JywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0XG4gICAgICBjb25zdCBpbnRlcm5hbERhdGEgPSBnZXRJbnRlcm5hbERhdGEodGFyZ2V0KVxuICAgICAgaWYgKGludGVybmFsRGF0YSAmJiBpbnRlcm5hbERhdGEueGhyKSB7XG4gICAgICAgIGludGVybmFsRGF0YS54aHIuYWJvcnQoKVxuICAgICAgfVxuICAgIH0pXG4gICAgLyoqIEB0eXBlIHsoZXY6IFBvcFN0YXRlRXZlbnQpID0+IGFueX0gKi9cbiAgICBjb25zdCBvcmlnaW5hbFBvcHN0YXRlID0gd2luZG93Lm9ucG9wc3RhdGUgPyB3aW5kb3cub25wb3BzdGF0ZS5iaW5kKHdpbmRvdykgOiBudWxsXG4gICAgLyoqIEB0eXBlIHsoZXY6IFBvcFN0YXRlRXZlbnQpID0+IGFueX0gKi9cbiAgICB3aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuc3RhdGUgJiYgZXZlbnQuc3RhdGUuaHRteCkge1xuICAgICAgICByZXN0b3JlSGlzdG9yeSgpXG4gICAgICAgIGZvckVhY2gocmVzdG9yZWRFbHRzLCBmdW5jdGlvbihlbHQpIHtcbiAgICAgICAgICB0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDpyZXN0b3JlZCcsIHtcbiAgICAgICAgICAgIGRvY3VtZW50OiBnZXREb2N1bWVudCgpLFxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChvcmlnaW5hbFBvcHN0YXRlKSB7XG4gICAgICAgICAgb3JpZ2luYWxQb3BzdGF0ZShldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBnZXRXaW5kb3coKS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgdHJpZ2dlckV2ZW50KGJvZHksICdodG14OmxvYWQnLCB7fSkgLy8gZ2l2ZSByZWFkeSBoYW5kbGVycyBhIGNoYW5jZSB0byBsb2FkIHVwIGJlZm9yZSBmaXJpbmcgdGhpcyBldmVudFxuICAgICAgYm9keSA9IG51bGwgLy8ga2lsbCByZWZlcmVuY2UgZm9yIGdjXG4gICAgfSwgMClcbiAgfSlcblxuICByZXR1cm4gaHRteFxufSkoKVxuXG4vKiogQHR5cGVkZWYgeydnZXQnfCdoZWFkJ3wncG9zdCd8J3B1dCd8J2RlbGV0ZSd8J2Nvbm5lY3QnfCdvcHRpb25zJ3wndHJhY2UnfCdwYXRjaCd9IEh0dHBWZXJiICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU3dhcE9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbc2VsZWN0XVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtzZWxlY3RPT0JdXG4gKiBAcHJvcGVydHkgeyp9IFtldmVudEluZm9dXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2FuY2hvcl1cbiAqIEBwcm9wZXJ0eSB7RWxlbWVudH0gW2NvbnRleHRFbGVtZW50XVxuICogQHByb3BlcnR5IHtzd2FwQ2FsbGJhY2t9IFthZnRlclN3YXBDYWxsYmFja11cbiAqIEBwcm9wZXJ0eSB7c3dhcENhbGxiYWNrfSBbYWZ0ZXJTZXR0bGVDYWxsYmFja11cbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBzd2FwQ2FsbGJhY2tcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsnaW5uZXJIVE1MJyB8ICdvdXRlckhUTUwnIHwgJ2JlZm9yZWJlZ2luJyB8ICdhZnRlcmJlZ2luJyB8ICdiZWZvcmVlbmQnIHwgJ2FmdGVyZW5kJyB8ICdkZWxldGUnIHwgJ25vbmUnIHwgc3RyaW5nfSBIdG14U3dhcFN0eWxlXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBIdG14U3dhcFNwZWNpZmljYXRpb25cbiAqIEBwcm9wZXJ0eSB7SHRteFN3YXBTdHlsZX0gc3dhcFN0eWxlXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3dhcERlbGF5XG4gKiBAcHJvcGVydHkge251bWJlcn0gc2V0dGxlRGVsYXlcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3RyYW5zaXRpb25dXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtpZ25vcmVUaXRsZV1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbaGVhZF1cbiAqIEBwcm9wZXJ0eSB7J3RvcCcgfCAnYm90dG9tJ30gW3Njcm9sbF1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbc2Nyb2xsVGFyZ2V0XVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtzaG93XVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtzaG93VGFyZ2V0XVxuICogQHByb3BlcnR5IHtib29sZWFufSBbZm9jdXNTY3JvbGxdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KCh0aGlzOk5vZGUsIGV2dDpFdmVudCkgPT4gYm9vbGVhbikgJiB7c291cmNlOiBzdHJpbmd9fSBDb25kaXRpb25hbEZ1bmN0aW9uXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBIdG14VHJpZ2dlclNwZWNpZmljYXRpb25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0cmlnZ2VyXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3BvbGxJbnRlcnZhbF1cbiAqIEBwcm9wZXJ0eSB7Q29uZGl0aW9uYWxGdW5jdGlvbn0gW2V2ZW50RmlsdGVyXVxuICogQHByb3BlcnR5IHtib29sZWFufSBbY2hhbmdlZF1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW29uY2VdXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtjb25zdW1lXVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtkZWxheV1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbZnJvbV1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbdGFyZ2V0XVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt0aHJvdHRsZV1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbcXVldWVdXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3Jvb3RdXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3RocmVzaG9sZF1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7ZWx0OiBFbGVtZW50LCBtZXNzYWdlOiBzdHJpbmcsIHZhbGlkaXR5OiBWYWxpZGl0eVN0YXRlfX0gSHRteEVsZW1lbnRWYWxpZGF0aW9uRXJyb3JcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSBIdG14SGVhZGVyU3BlY2lmaWNhdGlvblxuICogQHByb3BlcnR5IHsndHJ1ZSd9IEhYLVJlcXVlc3RcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IEhYLVRyaWdnZXJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IEhYLVRyaWdnZXItTmFtZVxuICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gSFgtVGFyZ2V0XG4gKiBAcHJvcGVydHkge3N0cmluZ30gSFgtQ3VycmVudC1VUkxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbSFgtUHJvbXB0XVxuICogQHByb3BlcnR5IHsndHJ1ZSd9IFtIWC1Cb29zdGVkXVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtDb250ZW50LVR5cGVdXG4gKiBAcHJvcGVydHkgeyd0cnVlJ30gW0hYLUhpc3RvcnktUmVzdG9yZS1SZXF1ZXN0XVxuICovXG5cbi8qKiBAdHlwZWRlZiBIdG14QWpheEhlbHBlckNvbnRleHRcbiAqIEBwcm9wZXJ0eSB7RWxlbWVudHxzdHJpbmd9IFtzb3VyY2VdXG4gKiBAcHJvcGVydHkge0V2ZW50fSBbZXZlbnRdXG4gKiBAcHJvcGVydHkge0h0bXhBamF4SGFuZGxlcn0gW2hhbmRsZXJdXG4gKiBAcHJvcGVydHkge0VsZW1lbnR8c3RyaW5nfSBbdGFyZ2V0XVxuICogQHByb3BlcnR5IHtIdG14U3dhcFN0eWxlfSBbc3dhcF1cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fEZvcm1EYXRhfSBbdmFsdWVzXVxuICogQHByb3BlcnR5IHtSZWNvcmQ8c3RyaW5nLHN0cmluZz59IFtoZWFkZXJzXVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtzZWxlY3RdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBIdG14UmVxdWVzdENvbmZpZ1xuICogQHByb3BlcnR5IHtib29sZWFufSBib29zdGVkXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHVzZVVybFBhcmFtc1xuICogQHByb3BlcnR5IHtGb3JtRGF0YX0gZm9ybURhdGFcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBwYXJhbWV0ZXJzIGZvcm1EYXRhIHByb3h5XG4gKiBAcHJvcGVydHkge0Zvcm1EYXRhfSB1bmZpbHRlcmVkRm9ybURhdGFcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSB1bmZpbHRlcmVkUGFyYW1ldGVycyB1bmZpbHRlcmVkRm9ybURhdGEgcHJveHlcbiAqIEBwcm9wZXJ0eSB7SHRteEhlYWRlclNwZWNpZmljYXRpb259IGhlYWRlcnNcbiAqIEBwcm9wZXJ0eSB7RWxlbWVudH0gdGFyZ2V0XG4gKiBAcHJvcGVydHkge0h0dHBWZXJifSB2ZXJiXG4gKiBAcHJvcGVydHkge0h0bXhFbGVtZW50VmFsaWRhdGlvbkVycm9yW119IGVycm9yc1xuICogQHByb3BlcnR5IHtib29sZWFufSB3aXRoQ3JlZGVudGlhbHNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0aW1lb3V0XG4gKiBAcHJvcGVydHkge3N0cmluZ30gcGF0aFxuICogQHByb3BlcnR5IHtFdmVudH0gdHJpZ2dlcmluZ0V2ZW50XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBIdG14UmVzcG9uc2VJbmZvXG4gKiBAcHJvcGVydHkge1hNTEh0dHBSZXF1ZXN0fSB4aHJcbiAqIEBwcm9wZXJ0eSB7RWxlbWVudH0gdGFyZ2V0XG4gKiBAcHJvcGVydHkge0h0bXhSZXF1ZXN0Q29uZmlnfSByZXF1ZXN0Q29uZmlnXG4gKiBAcHJvcGVydHkge0h0bXhBamF4RXRjfSBldGNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYm9vc3RlZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHNlbGVjdFxuICogQHByb3BlcnR5IHt7cmVxdWVzdFBhdGg6IHN0cmluZywgZmluYWxSZXF1ZXN0UGF0aDogc3RyaW5nLCByZXNwb25zZVBhdGg6IHN0cmluZ3xudWxsLCBhbmNob3I6IHN0cmluZ319IHBhdGhJbmZvXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtmYWlsZWRdXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtzdWNjZXNzZnVsXVxuICogQHByb3BlcnR5IHtib29sZWFufSBba2VlcEluZGljYXRvcnNdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBIdG14QWpheEV0Y1xuICogQHByb3BlcnR5IHtib29sZWFufSBbcmV0dXJuUHJvbWlzZV1cbiAqIEBwcm9wZXJ0eSB7SHRteEFqYXhIYW5kbGVyfSBbaGFuZGxlcl1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbc2VsZWN0XVxuICogQHByb3BlcnR5IHtFbGVtZW50fSBbdGFyZ2V0T3ZlcnJpZGVdXG4gKiBAcHJvcGVydHkge0h0bXhTd2FwU3R5bGV9IFtzd2FwT3ZlcnJpZGVdXG4gKiBAcHJvcGVydHkge1JlY29yZDxzdHJpbmcsc3RyaW5nPn0gW2hlYWRlcnNdXG4gKiBAcHJvcGVydHkge09iamVjdHxGb3JtRGF0YX0gW3ZhbHVlc11cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2NyZWRlbnRpYWxzXVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt0aW1lb3V0XVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gSHRteFJlc3BvbnNlSGFuZGxpbmdDb25maWdcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbY29kZV1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc3dhcFxuICogQHByb3BlcnR5IHtib29sZWFufSBbZXJyb3JdXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtpZ25vcmVUaXRsZV1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbc2VsZWN0XVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFt0YXJnZXRdXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3N3YXBPdmVycmlkZV1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbZXZlbnRdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7SHRteFJlc3BvbnNlSW5mbyAmIHtzaG91bGRTd2FwOiBib29sZWFuLCBzZXJ2ZXJSZXNwb25zZTogYW55LCBpc0Vycm9yOiBib29sZWFuLCBpZ25vcmVUaXRsZTogYm9vbGVhbiwgc2VsZWN0T3ZlcnJpZGU6c3RyaW5nfX0gSHRteEJlZm9yZVN3YXBEZXRhaWxzXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgSHRteEFqYXhIYW5kbGVyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICogQHBhcmFtIHtIdG14UmVzcG9uc2VJbmZvfSByZXNwb25zZUluZm9cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoKCkgPT4gdm9pZCl9IEh0bXhTZXR0bGVUYXNrXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBIdG14U2V0dGxlSW5mb1xuICogQHByb3BlcnR5IHtIdG14U2V0dGxlVGFza1tdfSB0YXNrc1xuICogQHByb3BlcnR5IHtFbGVtZW50W119IGVsdHNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbdGl0bGVdXG4gKi9cblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9iaWdza3lzb2Z0d2FyZS9odG14LWV4dGVuc2lvbnMvYmxvYi9tYWluL1JFQURNRS5tZFxuICogQHR5cGVkZWYge09iamVjdH0gSHRteEV4dGVuc2lvblxuICogQHByb3BlcnR5IHsoYXBpOiBhbnkpID0+IHZvaWR9IGluaXRcbiAqIEBwcm9wZXJ0eSB7KG5hbWU6IHN0cmluZywgZXZlbnQ6IEV2ZW50fEN1c3RvbUV2ZW50KSA9PiBib29sZWFufSBvbkV2ZW50XG4gKiBAcHJvcGVydHkgeyh0ZXh0OiBzdHJpbmcsIHhocjogWE1MSHR0cFJlcXVlc3QsIGVsdDogRWxlbWVudCkgPT4gc3RyaW5nfSB0cmFuc2Zvcm1SZXNwb25zZVxuICogQHByb3BlcnR5IHsoc3dhcFN0eWxlOiBIdG14U3dhcFN0eWxlKSA9PiBib29sZWFufSBpc0lubGluZVN3YXBcbiAqIEBwcm9wZXJ0eSB7KHN3YXBTdHlsZTogSHRteFN3YXBTdHlsZSwgdGFyZ2V0OiBOb2RlLCBmcmFnbWVudDogTm9kZSwgc2V0dGxlSW5mbzogSHRteFNldHRsZUluZm8pID0+IGJvb2xlYW58Tm9kZVtdfSBoYW5kbGVTd2FwXG4gKiBAcHJvcGVydHkgeyh4aHI6IFhNTEh0dHBSZXF1ZXN0LCBwYXJhbWV0ZXJzOiBGb3JtRGF0YSwgZWx0OiBOb2RlKSA9PiAqfHN0cmluZ3xudWxsfSBlbmNvZGVQYXJhbWV0ZXJzXG4gKiBAcHJvcGVydHkgeygpID0+IHN0cmluZ1tdfG51bGx9IGdldFNlbGVjdG9yc1xuICovXG5leHBvcnQgZGVmYXVsdCBodG14XG4iLCAiaW1wb3J0IFwiaHRteC5vcmdcIjtcbmltcG9ydCB7IHRoZW1lQ2hhbmdlIH0gZnJvbSBcInRoZW1lLWNoYW5nZVwiO1xudGhlbWVDaGFuZ2UoKTtcblxuLy8gQ29kZSB0byBydW4gd2hlbiBET00gaXMgbG9hZGVkXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUubG9nKFwiRE9NIGlzIGxvYWRlZCFcIik7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsZUFBUyxjQUFhO0FBQUMsWUFBSSxXQUFTLFNBQVMsY0FBYyxxQkFBcUI7QUFBRSxZQUFJLFVBQVEsV0FBUyxTQUFTLGFBQWEsVUFBVSxJQUFFO0FBQUssU0FBQyxTQUFTLFFBQU0sYUFBYSxRQUFRLFVBQVEsVUFBUSxPQUFPLEdBQUU7QUFBQyxjQUFHLGFBQWEsUUFBUSxVQUFRLFVBQVEsT0FBTyxHQUFFO0FBQUMscUJBQVMsZ0JBQWdCLGFBQWEsY0FBYSxLQUFLO0FBQUUsZ0JBQUcsVUFBUztBQUFDLGVBQUMsR0FBRyxTQUFTLGlCQUFpQixxQkFBcUIsQ0FBQyxFQUFFLFFBQVEsUUFBSTtBQUFDLG1CQUFHLFVBQVUsSUFBSSxTQUFTLGFBQWEsZ0JBQWdCLENBQUM7QUFBQSxjQUFDLENBQUM7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFBLFFBQUMsR0FB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QUFNLElBQUk7QUFFOUUsYUFBTyxhQUFhLFNBQVMsT0FBTztBQUNsQyxZQUFJLE1BQU0sU0FBUyxNQUFNLE1BQU0sTUFBTTtBQUNuQyx5QkFBZTtBQUNmLGtCQUFRLGNBQWMsU0FBUyxLQUFLO0FBQ2xDLHlCQUFhLEtBQUssaUJBQWlCO0FBQUEsY0FDakMsVUFBVSxZQUFZO0FBQUEsY0FDdEI7QUFBQSxZQUNGLENBQUM7QUFBQSxVQUNILENBQUM7QUFBQSxRQUNILE9BQU87QUFDTCxjQUFJLGtCQUFrQjtBQUNwQiw2QkFBaUIsS0FBSztBQUFBLFVBQ3hCO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFDQSxnQkFBVSxFQUFFLFdBQVcsV0FBVztBQUNoQyxxQkFBYSxNQUFNLGFBQWEsQ0FBQyxDQUFDO0FBQ2xDLGVBQU87QUFBQSxNQUNULEdBQUcsQ0FBQztBQUFBLElBQ04sQ0FBQztBQUVELFdBQU87QUFBQSxFQUNULEVBQUc7QUFnTEgsTUFBTyxtQkFBUVA7OztBQ2ppS2YsNEJBQTRCO0FBQzVCLHVDQUFZO0FBR1osV0FBUyxpQkFBaUIsb0JBQW9CLFdBQVk7QUFDeEQsWUFBUSxJQUFJLGdCQUFnQjtBQUFBLEVBQzlCLENBQUM7IiwKICAibmFtZXMiOiBbImVsIiwgImJ0bkVsIiwgInRoZW1lQ2hhbmdlIiwgImh0bXgiLCAic3RyIiwgImVsdCIsICJleHRlbnNpb25zIiwgInBhcmVudEVsdCIsICJwcm9tcHQiLCAidGFyZ2V0IiwgImV2ZW50Il0KfQo=
