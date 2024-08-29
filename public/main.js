(() => {
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
  document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM is loaded!");
  });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2h0bXgub3JnL2Rpc3QvaHRteC5lc20uanMiLCAiLi4vYXNzZXRzL21haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbInZhciBodG14ID0gKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCdcblxuICAvLyBQdWJsaWMgQVBJXG4gIGNvbnN0IGh0bXggPSB7XG4gICAgLy8gVHNjIG1hZG5lc3MgaGVyZSwgYXNzaWduaW5nIHRoZSBmdW5jdGlvbnMgZGlyZWN0bHkgcmVzdWx0cyBpbiBhbiBpbnZhbGlkIFR5cGVTY3JpcHQgb3V0cHV0LCBidXQgcmVhc3NpZ25pbmcgaXMgZmluZVxuICAgIC8qIEV2ZW50IHByb2Nlc3NpbmcgKi9cbiAgICAvKiogQHR5cGUge3R5cGVvZiBvbkxvYWRIZWxwZXJ9ICovXG4gICAgb25Mb2FkOiBudWxsLFxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIHByb2Nlc3NOb2RlfSAqL1xuICAgIHByb2Nlc3M6IG51bGwsXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lckltcGx9ICovXG4gICAgb246IG51bGwsXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgcmVtb3ZlRXZlbnRMaXN0ZW5lckltcGx9ICovXG4gICAgb2ZmOiBudWxsLFxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIHRyaWdnZXJFdmVudH0gKi9cbiAgICB0cmlnZ2VyOiBudWxsLFxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIGFqYXhIZWxwZXJ9ICovXG4gICAgYWpheDogbnVsbCxcbiAgICAvKiBET00gcXVlcnlpbmcgaGVscGVycyAqL1xuICAgIC8qKiBAdHlwZSB7dHlwZW9mIGZpbmR9ICovXG4gICAgZmluZDogbnVsbCxcbiAgICAvKiogQHR5cGUge3R5cGVvZiBmaW5kQWxsfSAqL1xuICAgIGZpbmRBbGw6IG51bGwsXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgY2xvc2VzdH0gKi9cbiAgICBjbG9zZXN0OiBudWxsLFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGlucHV0IHZhbHVlcyB0aGF0IHdvdWxkIHJlc29sdmUgZm9yIGEgZ2l2ZW4gZWxlbWVudCB2aWEgdGhlIGh0bXggdmFsdWUgcmVzb2x1dGlvbiBtZWNoYW5pc21cbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI3ZhbHVlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbHQgdGhlIGVsZW1lbnQgdG8gcmVzb2x2ZSB2YWx1ZXMgb25cbiAgICAgKiBAcGFyYW0ge0h0dHBWZXJifSB0eXBlIHRoZSByZXF1ZXN0IHR5cGUgKGUuZy4gKipnZXQqKiBvciAqKnBvc3QqKikgbm9uLUdFVCdzIHdpbGwgaW5jbHVkZSB0aGUgZW5jbG9zaW5nIGZvcm0gb2YgdGhlIGVsZW1lbnQuIERlZmF1bHRzIHRvICoqcG9zdCoqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICB2YWx1ZXM6IGZ1bmN0aW9uKGVsdCwgdHlwZSkge1xuICAgICAgY29uc3QgaW5wdXRWYWx1ZXMgPSBnZXRJbnB1dFZhbHVlcyhlbHQsIHR5cGUgfHwgJ3Bvc3QnKVxuICAgICAgcmV0dXJuIGlucHV0VmFsdWVzLnZhbHVlc1xuICAgIH0sXG4gICAgLyogRE9NIG1hbmlwdWxhdGlvbiBoZWxwZXJzICovXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgcmVtb3ZlRWxlbWVudH0gKi9cbiAgICByZW1vdmU6IG51bGwsXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgYWRkQ2xhc3NUb0VsZW1lbnR9ICovXG4gICAgYWRkQ2xhc3M6IG51bGwsXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgcmVtb3ZlQ2xhc3NGcm9tRWxlbWVudH0gKi9cbiAgICByZW1vdmVDbGFzczogbnVsbCxcbiAgICAvKiogQHR5cGUge3R5cGVvZiB0b2dnbGVDbGFzc09uRWxlbWVudH0gKi9cbiAgICB0b2dnbGVDbGFzczogbnVsbCxcbiAgICAvKiogQHR5cGUge3R5cGVvZiB0YWtlQ2xhc3NGb3JFbGVtZW50fSAqL1xuICAgIHRha2VDbGFzczogbnVsbCxcbiAgICAvKiogQHR5cGUge3R5cGVvZiBzd2FwfSAqL1xuICAgIHN3YXA6IG51bGwsXG4gICAgLyogRXh0ZW5zaW9uIGVudHJ5cG9pbnRzICovXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgZGVmaW5lRXh0ZW5zaW9ufSAqL1xuICAgIGRlZmluZUV4dGVuc2lvbjogbnVsbCxcbiAgICAvKiogQHR5cGUge3R5cGVvZiByZW1vdmVFeHRlbnNpb259ICovXG4gICAgcmVtb3ZlRXh0ZW5zaW9uOiBudWxsLFxuICAgIC8qIERlYnVnZ2luZyAqL1xuICAgIC8qKiBAdHlwZSB7dHlwZW9mIGxvZ0FsbH0gKi9cbiAgICBsb2dBbGw6IG51bGwsXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgbG9nTm9uZX0gKi9cbiAgICBsb2dOb25lOiBudWxsLFxuICAgIC8qIERlYnVnZ2luZyAqL1xuICAgIC8qKlxuICAgICAqIFRoZSBsb2dnZXIgaHRteCB1c2VzIHRvIGxvZyB3aXRoXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNsb2dnZXJcbiAgICAgKi9cbiAgICBsb2dnZXI6IG51bGwsXG4gICAgLyoqXG4gICAgICogQSBwcm9wZXJ0eSBob2xkaW5nIHRoZSBjb25maWd1cmF0aW9uIGh0bXggdXNlcyBhdCBydW50aW1lLlxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IHVzaW5nIGEgW21ldGEgdGFnXShodHRwczovL2h0bXgub3JnL2RvY3MvI2NvbmZpZykgaXMgdGhlIHByZWZlcnJlZCBtZWNoYW5pc20gZm9yIHNldHRpbmcgdGhlc2UgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI2NvbmZpZ1xuICAgICAqL1xuICAgIGNvbmZpZzoge1xuICAgICAgLyoqXG4gICAgICAgKiBXaGV0aGVyIHRvIHVzZSBoaXN0b3J5LlxuICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAgICovXG4gICAgICBoaXN0b3J5RW5hYmxlZDogdHJ1ZSxcbiAgICAgIC8qKlxuICAgICAgICogVGhlIG51bWJlciBvZiBwYWdlcyB0byBrZWVwIGluICoqbG9jYWxTdG9yYWdlKiogZm9yIGhpc3Rvcnkgc3VwcG9ydC5cbiAgICAgICAqIEB0eXBlIG51bWJlclxuICAgICAgICogQGRlZmF1bHQgMTBcbiAgICAgICAqL1xuICAgICAgaGlzdG9yeUNhY2hlU2l6ZTogMTAsXG4gICAgICAvKipcbiAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICAgKi9cbiAgICAgIHJlZnJlc2hPbkhpc3RvcnlNaXNzOiBmYWxzZSxcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGRlZmF1bHQgc3dhcCBzdHlsZSB0byB1c2UgaWYgKipbaHgtc3dhcF0oaHR0cHM6Ly9odG14Lm9yZy9hdHRyaWJ1dGVzL2h4LXN3YXApKiogaXMgb21pdHRlZC5cbiAgICAgICAqIEB0eXBlIEh0bXhTd2FwU3R5bGVcbiAgICAgICAqIEBkZWZhdWx0ICdpbm5lckhUTUwnXG4gICAgICAgKi9cbiAgICAgIGRlZmF1bHRTd2FwU3R5bGU6ICdpbm5lckhUTUwnLFxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZGVmYXVsdCBkZWxheSBiZXR3ZWVuIHJlY2VpdmluZyBhIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlciBhbmQgZG9pbmcgdGhlIHN3YXAuXG4gICAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgICAqIEBkZWZhdWx0IDBcbiAgICAgICAqL1xuICAgICAgZGVmYXVsdFN3YXBEZWxheTogMCxcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGRlZmF1bHQgZGVsYXkgYmV0d2VlbiBjb21wbGV0aW5nIHRoZSBjb250ZW50IHN3YXAgYW5kIHNldHRsaW5nIGF0dHJpYnV0ZXMuXG4gICAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgICAqIEBkZWZhdWx0IDIwXG4gICAgICAgKi9cbiAgICAgIGRlZmF1bHRTZXR0bGVEZWxheTogMjAsXG4gICAgICAvKipcbiAgICAgICAqIElmIHRydWUsIGh0bXggd2lsbCBpbmplY3QgYSBzbWFsbCBhbW91bnQgb2YgQ1NTIGludG8gdGhlIHBhZ2UgdG8gbWFrZSBpbmRpY2F0b3JzIGludmlzaWJsZSB1bmxlc3MgdGhlICoqaHRteC1pbmRpY2F0b3IqKiBjbGFzcyBpcyBwcmVzZW50LlxuICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAgICovXG4gICAgICBpbmNsdWRlSW5kaWNhdG9yU3R5bGVzOiB0cnVlLFxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgY2xhc3MgdG8gcGxhY2Ugb24gaW5kaWNhdG9ycyB3aGVuIGEgcmVxdWVzdCBpcyBpbiBmbGlnaHQuXG4gICAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgICAqIEBkZWZhdWx0ICdodG14LWluZGljYXRvcidcbiAgICAgICAqL1xuICAgICAgaW5kaWNhdG9yQ2xhc3M6ICdodG14LWluZGljYXRvcicsXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBjbGFzcyB0byBwbGFjZSBvbiB0cmlnZ2VyaW5nIGVsZW1lbnRzIHdoZW4gYSByZXF1ZXN0IGlzIGluIGZsaWdodC5cbiAgICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAgICogQGRlZmF1bHQgJ2h0bXgtcmVxdWVzdCdcbiAgICAgICAqL1xuICAgICAgcmVxdWVzdENsYXNzOiAnaHRteC1yZXF1ZXN0JyxcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGNsYXNzIHRvIHRlbXBvcmFyaWx5IHBsYWNlIG9uIGVsZW1lbnRzIHRoYXQgaHRteCBoYXMgYWRkZWQgdG8gdGhlIERPTS5cbiAgICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAgICogQGRlZmF1bHQgJ2h0bXgtYWRkZWQnXG4gICAgICAgKi9cbiAgICAgIGFkZGVkQ2xhc3M6ICdodG14LWFkZGVkJyxcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGNsYXNzIHRvIHBsYWNlIG9uIHRhcmdldCBlbGVtZW50cyB3aGVuIGh0bXggaXMgaW4gdGhlIHNldHRsaW5nIHBoYXNlLlxuICAgICAgICogQHR5cGUgc3RyaW5nXG4gICAgICAgKiBAZGVmYXVsdCAnaHRteC1zZXR0bGluZydcbiAgICAgICAqL1xuICAgICAgc2V0dGxpbmdDbGFzczogJ2h0bXgtc2V0dGxpbmcnLFxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgY2xhc3MgdG8gcGxhY2Ugb24gdGFyZ2V0IGVsZW1lbnRzIHdoZW4gaHRteCBpcyBpbiB0aGUgc3dhcHBpbmcgcGhhc2UuXG4gICAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgICAqIEBkZWZhdWx0ICdodG14LXN3YXBwaW5nJ1xuICAgICAgICovXG4gICAgICBzd2FwcGluZ0NsYXNzOiAnaHRteC1zd2FwcGluZycsXG4gICAgICAvKipcbiAgICAgICAqIEFsbG93cyB0aGUgdXNlIG9mIGV2YWwtbGlrZSBmdW5jdGlvbmFsaXR5IGluIGh0bXgsIHRvIGVuYWJsZSAqKmh4LXZhcnMqKiwgdHJpZ2dlciBjb25kaXRpb25zICYgc2NyaXB0IHRhZyBldmFsdWF0aW9uLiBDYW4gYmUgc2V0IHRvICoqZmFsc2UqKiBmb3IgQ1NQIGNvbXBhdGliaWxpdHkuXG4gICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICAgKi9cbiAgICAgIGFsbG93RXZhbDogdHJ1ZSxcbiAgICAgIC8qKlxuICAgICAgICogSWYgc2V0IHRvIGZhbHNlLCBkaXNhYmxlcyB0aGUgaW50ZXJwcmV0YXRpb24gb2Ygc2NyaXB0IHRhZ3MuXG4gICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICAgKi9cbiAgICAgIGFsbG93U2NyaXB0VGFnczogdHJ1ZSxcbiAgICAgIC8qKlxuICAgICAgICogSWYgc2V0LCB0aGUgbm9uY2Ugd2lsbCBiZSBhZGRlZCB0byBpbmxpbmUgc2NyaXB0cy5cbiAgICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAgICogQGRlZmF1bHQgJydcbiAgICAgICAqL1xuICAgICAgaW5saW5lU2NyaXB0Tm9uY2U6ICcnLFxuICAgICAgLyoqXG4gICAgICAgKiBJZiBzZXQsIHRoZSBub25jZSB3aWxsIGJlIGFkZGVkIHRvIGlubGluZSBzdHlsZXMuXG4gICAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICAgKi9cbiAgICAgIGlubGluZVN0eWxlTm9uY2U6ICcnLFxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgYXR0cmlidXRlcyB0byBzZXR0bGUgZHVyaW5nIHRoZSBzZXR0bGluZyBwaGFzZS5cbiAgICAgICAqIEB0eXBlIHN0cmluZ1tdXG4gICAgICAgKiBAZGVmYXVsdCBbJ2NsYXNzJywgJ3N0eWxlJywgJ3dpZHRoJywgJ2hlaWdodCddXG4gICAgICAgKi9cbiAgICAgIGF0dHJpYnV0ZXNUb1NldHRsZTogWydjbGFzcycsICdzdHlsZScsICd3aWR0aCcsICdoZWlnaHQnXSxcbiAgICAgIC8qKlxuICAgICAgICogQWxsb3cgY3Jvc3Mtc2l0ZSBBY2Nlc3MtQ29udHJvbCByZXF1ZXN0cyB1c2luZyBjcmVkZW50aWFscyBzdWNoIGFzIGNvb2tpZXMsIGF1dGhvcml6YXRpb24gaGVhZGVycyBvciBUTFMgY2xpZW50IGNlcnRpZmljYXRlcy5cbiAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICAgKi9cbiAgICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gICAgICAvKipcbiAgICAgICAqIEB0eXBlIG51bWJlclxuICAgICAgICogQGRlZmF1bHQgMFxuICAgICAgICovXG4gICAgICB0aW1lb3V0OiAwLFxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiAqKmdldFdlYlNvY2tldFJlY29ubmVjdERlbGF5KiogZm9yIHJlY29ubmVjdGluZyBhZnRlciB1bmV4cGVjdGVkIGNvbm5lY3Rpb24gbG9zcyBieSB0aGUgZXZlbnQgY29kZSAqKkFibm9ybWFsIENsb3N1cmUqKiwgKipTZXJ2aWNlIFJlc3RhcnQqKiBvciAqKlRyeSBBZ2FpbiBMYXRlcioqLlxuICAgICAgICogQHR5cGUgeydmdWxsLWppdHRlcicgfCAoKHJldHJ5Q291bnQ6bnVtYmVyKSA9PiBudW1iZXIpfVxuICAgICAgICogQGRlZmF1bHQgXCJmdWxsLWppdHRlclwiXG4gICAgICAgKi9cbiAgICAgIHdzUmVjb25uZWN0RGVsYXk6ICdmdWxsLWppdHRlcicsXG4gICAgICAvKipcbiAgICAgICAqIFRoZSB0eXBlIG9mIGJpbmFyeSBkYXRhIGJlaW5nIHJlY2VpdmVkIG92ZXIgdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uXG4gICAgICAgKiBAdHlwZSBCaW5hcnlUeXBlXG4gICAgICAgKiBAZGVmYXVsdCAnYmxvYidcbiAgICAgICAqL1xuICAgICAgd3NCaW5hcnlUeXBlOiAnYmxvYicsXG4gICAgICAvKipcbiAgICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAgICogQGRlZmF1bHQgJ1toeC1kaXNhYmxlXSwgW2RhdGEtaHgtZGlzYWJsZV0nXG4gICAgICAgKi9cbiAgICAgIGRpc2FibGVTZWxlY3RvcjogJ1toeC1kaXNhYmxlXSwgW2RhdGEtaHgtZGlzYWJsZV0nLFxuICAgICAgLyoqXG4gICAgICAgKiBAdHlwZSB7J2F1dG8nIHwgJ2luc3RhbnQnIHwgJ3Ntb290aCd9XG4gICAgICAgKiBAZGVmYXVsdCAnaW5zdGFudCdcbiAgICAgICAqL1xuICAgICAgc2Nyb2xsQmVoYXZpb3I6ICdpbnN0YW50JyxcbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhlIGZvY3VzZWQgZWxlbWVudCBzaG91bGQgYmUgc2Nyb2xsZWQgaW50byB2aWV3LlxuICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgICAqL1xuICAgICAgZGVmYXVsdEZvY3VzU2Nyb2xsOiBmYWxzZSxcbiAgICAgIC8qKlxuICAgICAgICogSWYgc2V0IHRvIHRydWUgaHRteCB3aWxsIGluY2x1ZGUgYSBjYWNoZS1idXN0aW5nIHBhcmFtZXRlciBpbiBHRVQgcmVxdWVzdHMgdG8gYXZvaWQgY2FjaGluZyBwYXJ0aWFsIHJlc3BvbnNlcyBieSB0aGUgYnJvd3NlclxuICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgICAqL1xuICAgICAgZ2V0Q2FjaGVCdXN0ZXJQYXJhbTogZmFsc2UsXG4gICAgICAvKipcbiAgICAgICAqIElmIHNldCB0byB0cnVlLCBodG14IHdpbGwgdXNlIHRoZSBWaWV3IFRyYW5zaXRpb24gQVBJIHdoZW4gc3dhcHBpbmcgaW4gbmV3IGNvbnRlbnQuXG4gICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAgICovXG4gICAgICBnbG9iYWxWaWV3VHJhbnNpdGlvbnM6IGZhbHNlLFxuICAgICAgLyoqXG4gICAgICAgKiBodG14IHdpbGwgZm9ybWF0IHJlcXVlc3RzIHdpdGggdGhlc2UgbWV0aG9kcyBieSBlbmNvZGluZyB0aGVpciBwYXJhbWV0ZXJzIGluIHRoZSBVUkwsIG5vdCB0aGUgcmVxdWVzdCBib2R5XG4gICAgICAgKiBAdHlwZSB7KEh0dHBWZXJiKVtdfVxuICAgICAgICogQGRlZmF1bHQgWydnZXQnLCAnZGVsZXRlJ11cbiAgICAgICAqL1xuICAgICAgbWV0aG9kc1RoYXRVc2VVcmxQYXJhbXM6IFsnZ2V0JywgJ2RlbGV0ZSddLFxuICAgICAgLyoqXG4gICAgICAgKiBJZiBzZXQgdG8gdHJ1ZSwgZGlzYWJsZXMgaHRteC1iYXNlZCByZXF1ZXN0cyB0byBub24tb3JpZ2luIGhvc3RzLlxuICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgICAqL1xuICAgICAgc2VsZlJlcXVlc3RzT25seTogdHJ1ZSxcbiAgICAgIC8qKlxuICAgICAgICogSWYgc2V0IHRvIHRydWUgaHRteCB3aWxsIG5vdCB1cGRhdGUgdGhlIHRpdGxlIG9mIHRoZSBkb2N1bWVudCB3aGVuIGEgdGl0bGUgdGFnIGlzIGZvdW5kIGluIG5ldyBjb250ZW50XG4gICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAgICovXG4gICAgICBpZ25vcmVUaXRsZTogZmFsc2UsXG4gICAgICAvKipcbiAgICAgICAqIFdoZXRoZXIgdGhlIHRhcmdldCBvZiBhIGJvb3N0ZWQgZWxlbWVudCBpcyBzY3JvbGxlZCBpbnRvIHRoZSB2aWV3cG9ydC5cbiAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgICAqL1xuICAgICAgc2Nyb2xsSW50b1ZpZXdPbkJvb3N0OiB0cnVlLFxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgY2FjaGUgdG8gc3RvcmUgZXZhbHVhdGVkIHRyaWdnZXIgc3BlY2lmaWNhdGlvbnMgaW50by5cbiAgICAgICAqIFlvdSBtYXkgZGVmaW5lIGEgc2ltcGxlIG9iamVjdCB0byB1c2UgYSBuZXZlci1jbGVhcmluZyBjYWNoZSwgb3IgaW1wbGVtZW50IHlvdXIgb3duIHN5c3RlbSB1c2luZyBhIFtwcm94eSBvYmplY3RdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1Byb3h5KVxuICAgICAgICogQHR5cGUge09iamVjdHxudWxsfVxuICAgICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAgICovXG4gICAgICB0cmlnZ2VyU3BlY3NDYWNoZTogbnVsbCxcbiAgICAgIC8qKiBAdHlwZSBib29sZWFuICovXG4gICAgICBkaXNhYmxlSW5oZXJpdGFuY2U6IGZhbHNlLFxuICAgICAgLyoqIEB0eXBlIEh0bXhSZXNwb25zZUhhbmRsaW5nQ29uZmlnW10gKi9cbiAgICAgIHJlc3BvbnNlSGFuZGxpbmc6IFtcbiAgICAgICAgeyBjb2RlOiAnMjA0Jywgc3dhcDogZmFsc2UgfSxcbiAgICAgICAgeyBjb2RlOiAnWzIzXS4uJywgc3dhcDogdHJ1ZSB9LFxuICAgICAgICB7IGNvZGU6ICdbNDVdLi4nLCBzd2FwOiBmYWxzZSwgZXJyb3I6IHRydWUgfVxuICAgICAgXSxcbiAgICAgIC8qKlxuICAgICAgICogV2hldGhlciB0byBwcm9jZXNzIE9PQiBzd2FwcyBvbiBlbGVtZW50cyB0aGF0IGFyZSBuZXN0ZWQgd2l0aGluIHRoZSBtYWluIHJlc3BvbnNlIGVsZW1lbnQuXG4gICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICAgKi9cbiAgICAgIGFsbG93TmVzdGVkT29iU3dhcHM6IHRydWVcbiAgICB9LFxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIHBhcnNlSW50ZXJ2YWx9ICovXG4gICAgcGFyc2VJbnRlcnZhbDogbnVsbCxcbiAgICAvKiogQHR5cGUge3R5cGVvZiBpbnRlcm5hbEV2YWx9ICovXG4gICAgXzogbnVsbCxcbiAgICB2ZXJzaW9uOiAnMi4wLjInXG4gIH1cbiAgLy8gVHNjIG1hZG5lc3MgcGFydCAyXG4gIGh0bXgub25Mb2FkID0gb25Mb2FkSGVscGVyXG4gIGh0bXgucHJvY2VzcyA9IHByb2Nlc3NOb2RlXG4gIGh0bXgub24gPSBhZGRFdmVudExpc3RlbmVySW1wbFxuICBodG14Lm9mZiA9IHJlbW92ZUV2ZW50TGlzdGVuZXJJbXBsXG4gIGh0bXgudHJpZ2dlciA9IHRyaWdnZXJFdmVudFxuICBodG14LmFqYXggPSBhamF4SGVscGVyXG4gIGh0bXguZmluZCA9IGZpbmRcbiAgaHRteC5maW5kQWxsID0gZmluZEFsbFxuICBodG14LmNsb3Nlc3QgPSBjbG9zZXN0XG4gIGh0bXgucmVtb3ZlID0gcmVtb3ZlRWxlbWVudFxuICBodG14LmFkZENsYXNzID0gYWRkQ2xhc3NUb0VsZW1lbnRcbiAgaHRteC5yZW1vdmVDbGFzcyA9IHJlbW92ZUNsYXNzRnJvbUVsZW1lbnRcbiAgaHRteC50b2dnbGVDbGFzcyA9IHRvZ2dsZUNsYXNzT25FbGVtZW50XG4gIGh0bXgudGFrZUNsYXNzID0gdGFrZUNsYXNzRm9yRWxlbWVudFxuICBodG14LnN3YXAgPSBzd2FwXG4gIGh0bXguZGVmaW5lRXh0ZW5zaW9uID0gZGVmaW5lRXh0ZW5zaW9uXG4gIGh0bXgucmVtb3ZlRXh0ZW5zaW9uID0gcmVtb3ZlRXh0ZW5zaW9uXG4gIGh0bXgubG9nQWxsID0gbG9nQWxsXG4gIGh0bXgubG9nTm9uZSA9IGxvZ05vbmVcbiAgaHRteC5wYXJzZUludGVydmFsID0gcGFyc2VJbnRlcnZhbFxuICBodG14Ll8gPSBpbnRlcm5hbEV2YWxcblxuICBjb25zdCBpbnRlcm5hbEFQSSA9IHtcbiAgICBhZGRUcmlnZ2VySGFuZGxlcixcbiAgICBib2R5Q29udGFpbnMsXG4gICAgY2FuQWNjZXNzTG9jYWxTdG9yYWdlLFxuICAgIGZpbmRUaGlzRWxlbWVudCxcbiAgICBmaWx0ZXJWYWx1ZXMsXG4gICAgc3dhcCxcbiAgICBoYXNBdHRyaWJ1dGUsXG4gICAgZ2V0QXR0cmlidXRlVmFsdWUsXG4gICAgZ2V0Q2xvc2VzdEF0dHJpYnV0ZVZhbHVlLFxuICAgIGdldENsb3Nlc3RNYXRjaCxcbiAgICBnZXRFeHByZXNzaW9uVmFycyxcbiAgICBnZXRIZWFkZXJzLFxuICAgIGdldElucHV0VmFsdWVzLFxuICAgIGdldEludGVybmFsRGF0YSxcbiAgICBnZXRTd2FwU3BlY2lmaWNhdGlvbixcbiAgICBnZXRUcmlnZ2VyU3BlY3MsXG4gICAgZ2V0VGFyZ2V0LFxuICAgIG1ha2VGcmFnbWVudCxcbiAgICBtZXJnZU9iamVjdHMsXG4gICAgbWFrZVNldHRsZUluZm8sXG4gICAgb29iU3dhcCxcbiAgICBxdWVyeVNlbGVjdG9yRXh0LFxuICAgIHNldHRsZUltbWVkaWF0ZWx5LFxuICAgIHNob3VsZENhbmNlbCxcbiAgICB0cmlnZ2VyRXZlbnQsXG4gICAgdHJpZ2dlckVycm9yRXZlbnQsXG4gICAgd2l0aEV4dGVuc2lvbnNcbiAgfVxuXG4gIGNvbnN0IFZFUkJTID0gWydnZXQnLCAncG9zdCcsICdwdXQnLCAnZGVsZXRlJywgJ3BhdGNoJ11cbiAgY29uc3QgVkVSQl9TRUxFQ1RPUiA9IFZFUkJTLm1hcChmdW5jdGlvbih2ZXJiKSB7XG4gICAgcmV0dXJuICdbaHgtJyArIHZlcmIgKyAnXSwgW2RhdGEtaHgtJyArIHZlcmIgKyAnXSdcbiAgfSkuam9pbignLCAnKVxuXG4gIGNvbnN0IEhFQURfVEFHX1JFR0VYID0gbWFrZVRhZ1JlZ0V4KCdoZWFkJylcblxuICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBVdGlsaXRpZXNcbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGdsb2JhbFxuICAgKiBAcmV0dXJucyB7UmVnRXhwfVxuICAgKi9cbiAgZnVuY3Rpb24gbWFrZVRhZ1JlZ0V4KHRhZywgZ2xvYmFsID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChgPCR7dGFnfShcXFxcc1tePl0qPnw+KShbXFxcXHNcXFxcU10qPyk8XFxcXC8ke3RhZ30+YCxcbiAgICAgIGdsb2JhbCA/ICdnaW0nIDogJ2ltJylcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaW50ZXJ2YWwgc3RyaW5nIGNvbnNpc3RlbnQgd2l0aCB0aGUgd2F5IGh0bXggZG9lcy4gVXNlZnVsIGZvciBwbHVnaW5zIHRoYXQgaGF2ZSB0aW1pbmctcmVsYXRlZCBhdHRyaWJ1dGVzLlxuICAgKlxuICAgKiBDYXV0aW9uOiBBY2NlcHRzIGFuIGludCBmb2xsb3dlZCBieSBlaXRoZXIgKipzKiogb3IgKiptcyoqLiBBbGwgb3RoZXIgdmFsdWVzIHVzZSAqKnBhcnNlRmxvYXQqKlxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNwYXJzZUludGVydmFsXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgdGltaW5nIHN0cmluZ1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfHVuZGVmaW5lZH1cbiAgICovXG4gIGZ1bmN0aW9uIHBhcnNlSW50ZXJ2YWwoc3RyKSB7XG4gICAgaWYgKHN0ciA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBsZXQgaW50ZXJ2YWwgPSBOYU5cbiAgICBpZiAoc3RyLnNsaWNlKC0yKSA9PSAnbXMnKSB7XG4gICAgICBpbnRlcnZhbCA9IHBhcnNlRmxvYXQoc3RyLnNsaWNlKDAsIC0yKSlcbiAgICB9IGVsc2UgaWYgKHN0ci5zbGljZSgtMSkgPT0gJ3MnKSB7XG4gICAgICBpbnRlcnZhbCA9IHBhcnNlRmxvYXQoc3RyLnNsaWNlKDAsIC0xKSkgKiAxMDAwXG4gICAgfSBlbHNlIGlmIChzdHIuc2xpY2UoLTEpID09ICdtJykge1xuICAgICAgaW50ZXJ2YWwgPSBwYXJzZUZsb2F0KHN0ci5zbGljZSgwLCAtMSkpICogMTAwMCAqIDYwXG4gICAgfSBlbHNlIHtcbiAgICAgIGludGVydmFsID0gcGFyc2VGbG9hdChzdHIpXG4gICAgfVxuICAgIHJldHVybiBpc05hTihpbnRlcnZhbCkgPyB1bmRlZmluZWQgOiBpbnRlcnZhbFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEByZXR1cm5zIHsoc3RyaW5nIHwgbnVsbCl9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRSYXdBdHRyaWJ1dGUoZWx0LCBuYW1lKSB7XG4gICAgcmV0dXJuIGVsdCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgZWx0LmdldEF0dHJpYnV0ZShuYW1lKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWFsaWZpZWROYW1lXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgLy8gcmVzb2x2ZSB3aXRoIGJvdGggaHggYW5kIGRhdGEtaHggcHJlZml4ZXNcbiAgZnVuY3Rpb24gaGFzQXR0cmlidXRlKGVsdCwgcXVhbGlmaWVkTmFtZSkge1xuICAgIHJldHVybiAhIWVsdC5oYXNBdHRyaWJ1dGUgJiYgKGVsdC5oYXNBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSkgfHxcbiAgICAgIGVsdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtJyArIHF1YWxpZmllZE5hbWUpKVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWFsaWZpZWROYW1lXG4gICAqIEByZXR1cm5zIHsoc3RyaW5nIHwgbnVsbCl9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVWYWx1ZShlbHQsIHF1YWxpZmllZE5hbWUpIHtcbiAgICByZXR1cm4gZ2V0UmF3QXR0cmlidXRlKGVsdCwgcXVhbGlmaWVkTmFtZSkgfHwgZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ2RhdGEtJyArIHF1YWxpZmllZE5hbWUpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBlbHRcbiAgICogQHJldHVybnMge05vZGUgfCBudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gcGFyZW50RWx0KGVsdCkge1xuICAgIGNvbnN0IHBhcmVudCA9IGVsdC5wYXJlbnRFbGVtZW50XG4gICAgaWYgKCFwYXJlbnQgJiYgZWx0LnBhcmVudE5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290KSByZXR1cm4gZWx0LnBhcmVudE5vZGVcbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge0RvY3VtZW50fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0RG9jdW1lbnQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBlbHRcbiAgICogQHBhcmFtIHtib29sZWFufSBnbG9iYWxcbiAgICogQHJldHVybnMge05vZGV8RG9jdW1lbnR9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRSb290Tm9kZShlbHQsIGdsb2JhbCkge1xuICAgIHJldHVybiBlbHQuZ2V0Um9vdE5vZGUgPyBlbHQuZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogZ2xvYmFsIH0pIDogZ2V0RG9jdW1lbnQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWx0XG4gICAqIEBwYXJhbSB7KGU6Tm9kZSkgPT4gYm9vbGVhbn0gY29uZGl0aW9uXG4gICAqIEByZXR1cm5zIHtOb2RlIHwgbnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldENsb3Nlc3RNYXRjaChlbHQsIGNvbmRpdGlvbikge1xuICAgIHdoaWxlIChlbHQgJiYgIWNvbmRpdGlvbihlbHQpKSB7XG4gICAgICBlbHQgPSBwYXJlbnRFbHQoZWx0KVxuICAgIH1cblxuICAgIHJldHVybiBlbHQgfHwgbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gaW5pdGlhbEVsZW1lbnRcbiAgICogQHBhcmFtIHtFbGVtZW50fSBhbmNlc3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlTmFtZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVWYWx1ZVdpdGhEaXNpbmhlcml0YW5jZShpbml0aWFsRWxlbWVudCwgYW5jZXN0b3IsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGdldEF0dHJpYnV0ZVZhbHVlKGFuY2VzdG9yLCBhdHRyaWJ1dGVOYW1lKVxuICAgIGNvbnN0IGRpc2luaGVyaXQgPSBnZXRBdHRyaWJ1dGVWYWx1ZShhbmNlc3RvciwgJ2h4LWRpc2luaGVyaXQnKVxuICAgIHZhciBpbmhlcml0ID0gZ2V0QXR0cmlidXRlVmFsdWUoYW5jZXN0b3IsICdoeC1pbmhlcml0JylcbiAgICBpZiAoaW5pdGlhbEVsZW1lbnQgIT09IGFuY2VzdG9yKSB7XG4gICAgICBpZiAoaHRteC5jb25maWcuZGlzYWJsZUluaGVyaXRhbmNlKSB7XG4gICAgICAgIGlmIChpbmhlcml0ICYmIChpbmhlcml0ID09PSAnKicgfHwgaW5oZXJpdC5zcGxpdCgnICcpLmluZGV4T2YoYXR0cmlidXRlTmFtZSkgPj0gMCkpIHtcbiAgICAgICAgICByZXR1cm4gYXR0cmlidXRlVmFsdWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZGlzaW5oZXJpdCAmJiAoZGlzaW5oZXJpdCA9PT0gJyonIHx8IGRpc2luaGVyaXQuc3BsaXQoJyAnKS5pbmRleE9mKGF0dHJpYnV0ZU5hbWUpID49IDApKSB7XG4gICAgICAgIHJldHVybiAndW5zZXQnXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVOYW1lXG4gICAqIEByZXR1cm5zIHtzdHJpbmcgfCBudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Q2xvc2VzdEF0dHJpYnV0ZVZhbHVlKGVsdCwgYXR0cmlidXRlTmFtZSkge1xuICAgIGxldCBjbG9zZXN0QXR0ciA9IG51bGxcbiAgICBnZXRDbG9zZXN0TWF0Y2goZWx0LCBmdW5jdGlvbihlKSB7XG4gICAgICByZXR1cm4gISEoY2xvc2VzdEF0dHIgPSBnZXRBdHRyaWJ1dGVWYWx1ZVdpdGhEaXNpbmhlcml0YW5jZShlbHQsIGFzRWxlbWVudChlKSwgYXR0cmlidXRlTmFtZSkpXG4gICAgfSlcbiAgICBpZiAoY2xvc2VzdEF0dHIgIT09ICd1bnNldCcpIHtcbiAgICAgIHJldHVybiBjbG9zZXN0QXR0clxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IGVsdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBtYXRjaGVzKGVsdCwgc2VsZWN0b3IpIHtcbiAgICAvLyBAdHMtaWdub3JlOiBub24tc3RhbmRhcmQgcHJvcGVydGllcyBmb3IgYnJvd3NlciBjb21wYXRpYmlsaXR5XG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5yZXNvbHZlZFZhcmlhYmxlXG4gICAgY29uc3QgbWF0Y2hlc0Z1bmN0aW9uID0gZWx0IGluc3RhbmNlb2YgRWxlbWVudCAmJiAoZWx0Lm1hdGNoZXMgfHwgZWx0Lm1hdGNoZXNTZWxlY3RvciB8fCBlbHQubXNNYXRjaGVzU2VsZWN0b3IgfHwgZWx0Lm1vek1hdGNoZXNTZWxlY3RvciB8fCBlbHQud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsdC5vTWF0Y2hlc1NlbGVjdG9yKVxuICAgIHJldHVybiAhIW1hdGNoZXNGdW5jdGlvbiAmJiBtYXRjaGVzRnVuY3Rpb24uY2FsbChlbHQsIHNlbGVjdG9yKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0YXJ0VGFnKHN0cikge1xuICAgIGNvbnN0IHRhZ01hdGNoZXIgPSAvPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopL2lcbiAgICBjb25zdCBtYXRjaCA9IHRhZ01hdGNoZXIuZXhlYyhzdHIpXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc3BcbiAgICogQHJldHVybnMge0RvY3VtZW50fVxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VIVE1MKHJlc3ApIHtcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKClcbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhyZXNwLCAndGV4dC9odG1sJylcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7Tm9kZX0gZWx0XG4gICAqL1xuICBmdW5jdGlvbiB0YWtlQ2hpbGRyZW5Gb3IoZnJhZ21lbnQsIGVsdCkge1xuICAgIHdoaWxlIChlbHQuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmcmFnbWVudC5hcHBlbmQoZWx0LmNoaWxkTm9kZXNbMF0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTFNjcmlwdEVsZW1lbnR9IHNjcmlwdFxuICAgKiBAcmV0dXJucyB7SFRNTFNjcmlwdEVsZW1lbnR9XG4gICAqL1xuICBmdW5jdGlvbiBkdXBsaWNhdGVTY3JpcHQoc2NyaXB0KSB7XG4gICAgY29uc3QgbmV3U2NyaXB0ID0gZ2V0RG9jdW1lbnQoKS5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgIGZvckVhY2goc2NyaXB0LmF0dHJpYnV0ZXMsIGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgIG5ld1NjcmlwdC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKVxuICAgIH0pXG4gICAgbmV3U2NyaXB0LnRleHRDb250ZW50ID0gc2NyaXB0LnRleHRDb250ZW50XG4gICAgbmV3U2NyaXB0LmFzeW5jID0gZmFsc2VcbiAgICBpZiAoaHRteC5jb25maWcuaW5saW5lU2NyaXB0Tm9uY2UpIHtcbiAgICAgIG5ld1NjcmlwdC5ub25jZSA9IGh0bXguY29uZmlnLmlubGluZVNjcmlwdE5vbmNlXG4gICAgfVxuICAgIHJldHVybiBuZXdTY3JpcHRcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxTY3JpcHRFbGVtZW50fSBzY3JpcHRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc0phdmFTY3JpcHRTY3JpcHROb2RlKHNjcmlwdCkge1xuICAgIHJldHVybiBzY3JpcHQubWF0Y2hlcygnc2NyaXB0JykgJiYgKHNjcmlwdC50eXBlID09PSAndGV4dC9qYXZhc2NyaXB0JyB8fCBzY3JpcHQudHlwZSA9PT0gJ21vZHVsZScgfHwgc2NyaXB0LnR5cGUgPT09ICcnKVxuICB9XG5cbiAgLyoqXG4gICAqIHdlIGhhdmUgdG8gbWFrZSBuZXcgY29waWVzIG9mIHNjcmlwdCB0YWdzIHRoYXQgd2UgYXJlIGdvaW5nIHRvIGluc2VydCBiZWNhdXNlXG4gICAqIFNPTUUgYnJvd3NlcnMgKG5vdCBzYXlpbmcgd2hvLCBidXQgaXQgaW52b2x2ZXMgYW4gZWxlbWVudCBhbmQgYW4gYW5pbWFsKSBkb24ndFxuICAgKiBleGVjdXRlIHNjcmlwdHMgY3JlYXRlZCBpbiA8dGVtcGxhdGU+IHRhZ3Mgd2hlbiB0aGV5IGFyZSBpbnNlcnRlZCBpbnRvIHRoZSBET01cbiAgICogYW5kIGFsbCB0aGUgb3RoZXJzIGRvIGxtYW9cbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSBmcmFnbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gbm9ybWFsaXplU2NyaXB0VGFncyhmcmFnbWVudCkge1xuICAgIEFycmF5LmZyb20oZnJhZ21lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0JykpLmZvckVhY2goLyoqIEBwYXJhbSB7SFRNTFNjcmlwdEVsZW1lbnR9IHNjcmlwdCAqLyAoc2NyaXB0KSA9PiB7XG4gICAgICBpZiAoaXNKYXZhU2NyaXB0U2NyaXB0Tm9kZShzY3JpcHQpKSB7XG4gICAgICAgIGNvbnN0IG5ld1NjcmlwdCA9IGR1cGxpY2F0ZVNjcmlwdChzY3JpcHQpXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHNjcmlwdC5wYXJlbnROb2RlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShuZXdTY3JpcHQsIHNjcmlwdClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxvZ0Vycm9yKGUpXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgc2NyaXB0LnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtEb2N1bWVudEZyYWdtZW50ICYge3RpdGxlPzogc3RyaW5nfX0gRG9jdW1lbnRGcmFnbWVudFdpdGhUaXRsZVxuICAgKiBAZGVzY3JpcHRpb24gIGEgZG9jdW1lbnQgZnJhZ21lbnQgcmVwcmVzZW50aW5nIHRoZSByZXNwb25zZSBIVE1MLCBpbmNsdWRpbmdcbiAgICogYSBgdGl0bGVgIHByb3BlcnR5IGZvciBhbnkgdGl0bGUgaW5mb3JtYXRpb24gZm91bmRcbiAgICovXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZXNwb25zZSBIVE1MXG4gICAqIEByZXR1cm5zIHtEb2N1bWVudEZyYWdtZW50V2l0aFRpdGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gbWFrZUZyYWdtZW50KHJlc3BvbnNlKSB7XG4gICAgLy8gc3RyaXAgaGVhZCB0YWcgdG8gZGV0ZXJtaW5lIHNoYXBlIG9mIHJlc3BvbnNlIHdlIGFyZSBkZWFsaW5nIHdpdGhcbiAgICBjb25zdCByZXNwb25zZVdpdGhOb0hlYWQgPSByZXNwb25zZS5yZXBsYWNlKEhFQURfVEFHX1JFR0VYLCAnJylcbiAgICBjb25zdCBzdGFydFRhZyA9IGdldFN0YXJ0VGFnKHJlc3BvbnNlV2l0aE5vSGVhZClcbiAgICAvKiogQHR5cGUgRG9jdW1lbnRGcmFnbWVudFdpdGhUaXRsZSAqL1xuICAgIGxldCBmcmFnbWVudFxuICAgIGlmIChzdGFydFRhZyA9PT0gJ2h0bWwnKSB7XG4gICAgICAvLyBpZiBpdCBpcyBhIGZ1bGwgZG9jdW1lbnQsIHBhcnNlIGl0IGFuZCByZXR1cm4gdGhlIGJvZHlcbiAgICAgIGZyYWdtZW50ID0gLyoqIEB0eXBlIERvY3VtZW50RnJhZ21lbnRXaXRoVGl0bGUgKi8gKG5ldyBEb2N1bWVudEZyYWdtZW50KCkpXG4gICAgICBjb25zdCBkb2MgPSBwYXJzZUhUTUwocmVzcG9uc2UpXG4gICAgICB0YWtlQ2hpbGRyZW5Gb3IoZnJhZ21lbnQsIGRvYy5ib2R5KVxuICAgICAgZnJhZ21lbnQudGl0bGUgPSBkb2MudGl0bGVcbiAgICB9IGVsc2UgaWYgKHN0YXJ0VGFnID09PSAnYm9keScpIHtcbiAgICAgIC8vIHBhcnNlIGJvZHkgdy9vIHdyYXBwaW5nIGluIHRlbXBsYXRlXG4gICAgICBmcmFnbWVudCA9IC8qKiBAdHlwZSBEb2N1bWVudEZyYWdtZW50V2l0aFRpdGxlICovIChuZXcgRG9jdW1lbnRGcmFnbWVudCgpKVxuICAgICAgY29uc3QgZG9jID0gcGFyc2VIVE1MKHJlc3BvbnNlV2l0aE5vSGVhZClcbiAgICAgIHRha2VDaGlsZHJlbkZvcihmcmFnbWVudCwgZG9jLmJvZHkpXG4gICAgICBmcmFnbWVudC50aXRsZSA9IGRvYy50aXRsZVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdGhlcndpc2Ugd2UgaGF2ZSBub24tYm9keSBwYXJ0aWFsIEhUTUwgY29udGVudCwgc28gd3JhcCBpdCBpbiBhIHRlbXBsYXRlIHRvIG1heGltaXplIHBhcnNpbmcgZmxleGliaWxpdHlcbiAgICAgIGNvbnN0IGRvYyA9IHBhcnNlSFRNTCgnPGJvZHk+PHRlbXBsYXRlIGNsYXNzPVwiaW50ZXJuYWwtaHRteC13cmFwcGVyXCI+JyArIHJlc3BvbnNlV2l0aE5vSGVhZCArICc8L3RlbXBsYXRlPjwvYm9keT4nKVxuICAgICAgZnJhZ21lbnQgPSAvKiogQHR5cGUgRG9jdW1lbnRGcmFnbWVudFdpdGhUaXRsZSAqLyAoZG9jLnF1ZXJ5U2VsZWN0b3IoJ3RlbXBsYXRlJykuY29udGVudClcbiAgICAgIC8vIGV4dHJhY3QgdGl0bGUgaW50byBmcmFnbWVudCBmb3IgbGF0ZXIgcHJvY2Vzc2luZ1xuICAgICAgZnJhZ21lbnQudGl0bGUgPSBkb2MudGl0bGVcblxuICAgICAgLy8gZm9yIGxlZ2FjeSByZWFzb25zIHdlIHN1cHBvcnQgYSB0aXRsZSB0YWcgYXQgdGhlIHJvb3QgbGV2ZWwgb2Ygbm9uLWJvZHkgcmVzcG9uc2VzLCBzbyB3ZSBuZWVkIHRvIGhhbmRsZSBpdFxuICAgICAgdmFyIHRpdGxlRWxlbWVudCA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJylcbiAgICAgIGlmICh0aXRsZUVsZW1lbnQgJiYgdGl0bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IGZyYWdtZW50KSB7XG4gICAgICAgIHRpdGxlRWxlbWVudC5yZW1vdmUoKVxuICAgICAgICBmcmFnbWVudC50aXRsZSA9IHRpdGxlRWxlbWVudC5pbm5lclRleHRcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZyYWdtZW50KSB7XG4gICAgICBpZiAoaHRteC5jb25maWcuYWxsb3dTY3JpcHRUYWdzKSB7XG4gICAgICAgIG5vcm1hbGl6ZVNjcmlwdFRhZ3MoZnJhZ21lbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZW1vdmUgYWxsIHNjcmlwdCB0YWdzIGlmIHNjcmlwdHMgYXJlIGRpc2FibGVkXG4gICAgICAgIGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpLmZvckVhY2goKHNjcmlwdCkgPT4gc2NyaXB0LnJlbW92ZSgpKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnJhZ21lbnRcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jXG4gICAqL1xuICBmdW5jdGlvbiBtYXliZUNhbGwoZnVuYykge1xuICAgIGlmIChmdW5jKSB7XG4gICAgICBmdW5jKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHthbnl9IG9cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHJldHVybnNcbiAgICovXG4gIGZ1bmN0aW9uIGlzVHlwZShvLCB0eXBlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgJyArIHR5cGUgKyAnXSdcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyp9IG9cbiAgICogQHJldHVybnMge28gaXMgRnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBpc0Z1bmN0aW9uKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdmdW5jdGlvbidcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyp9IG9cbiAgICogQHJldHVybnMge28gaXMgT2JqZWN0fVxuICAgKi9cbiAgZnVuY3Rpb24gaXNSYXdPYmplY3Qobykge1xuICAgIHJldHVybiBpc1R5cGUobywgJ09iamVjdCcpXG4gIH1cblxuICAvKipcbiAgICogQHR5cGVkZWYge09iamVjdH0gT25IYW5kbGVyXG4gICAqIEBwcm9wZXJ0eSB7KGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXApfHN0cmluZ30gZXZlbnRcbiAgICogQHByb3BlcnR5IHtFdmVudExpc3RlbmVyfSBsaXN0ZW5lclxuICAgKi9cblxuICAvKipcbiAgICogQHR5cGVkZWYge09iamVjdH0gTGlzdGVuZXJJbmZvXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0cmlnZ2VyXG4gICAqIEBwcm9wZXJ0eSB7RXZlbnRMaXN0ZW5lcn0gbGlzdGVuZXJcbiAgICogQHByb3BlcnR5IHtFdmVudFRhcmdldH0gb25cbiAgICovXG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IEh0bXhOb2RlSW50ZXJuYWxEYXRhXG4gICAqIEVsZW1lbnQgZGF0YVxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW2luaXRIYXNoXVxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFtib29zdGVkXVxuICAgKiBAcHJvcGVydHkge09uSGFuZGxlcltdfSBbb25IYW5kbGVyc11cbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IFt0aW1lb3V0XVxuICAgKiBAcHJvcGVydHkge0xpc3RlbmVySW5mb1tdfSBbbGlzdGVuZXJJbmZvc11cbiAgICogQHByb3BlcnR5IHtib29sZWFufSBbY2FuY2VsbGVkXVxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFt0cmlnZ2VyZWRPbmNlXVxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW2RlbGF5ZWRdXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IFt0aHJvdHRsZV1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IFtsYXN0VmFsdWVdXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2xvYWRlZF1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IFtwYXRoXVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gW3ZlcmJdXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3BvbGxpbmddXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEJ1dHRvbkVsZW1lbnR8SFRNTElucHV0RWxlbWVudHxudWxsfSBbbGFzdEJ1dHRvbkNsaWNrZWRdXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbcmVxdWVzdENvdW50XVxuICAgKiBAcHJvcGVydHkge1hNTEh0dHBSZXF1ZXN0fSBbeGhyXVxuICAgKiBAcHJvcGVydHkgeygoKSA9PiB2b2lkKVtdfSBbcXVldWVkUmVxdWVzdHNdXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2Fib3J0YWJsZV1cbiAgICpcbiAgICogRXZlbnQgZGF0YVxuICAgKiBAcHJvcGVydHkge0h0bXhUcmlnZ2VyU3BlY2lmaWNhdGlvbn0gW3RyaWdnZXJTcGVjXVxuICAgKiBAcHJvcGVydHkge0V2ZW50VGFyZ2V0W119IFtoYW5kbGVkRm9yXVxuICAgKi9cblxuICAvKipcbiAgICogZ2V0SW50ZXJuYWxEYXRhIHJldHJpZXZlcyBcInByaXZhdGVcIiBkYXRhIHN0b3JlZCBieSBodG14IHdpdGhpbiBhbiBlbGVtZW50XG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RXZlbnR9IGVsdFxuICAgKiBAcmV0dXJucyB7SHRteE5vZGVJbnRlcm5hbERhdGF9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJbnRlcm5hbERhdGEoZWx0KSB7XG4gICAgY29uc3QgZGF0YVByb3AgPSAnaHRteC1pbnRlcm5hbC1kYXRhJ1xuICAgIGxldCBkYXRhID0gZWx0W2RhdGFQcm9wXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgZGF0YSA9IGVsdFtkYXRhUHJvcF0gPSB7fVxuICAgIH1cbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgLyoqXG4gICAqIHRvQXJyYXkgY29udmVydHMgYW4gQXJyYXlMaWtlIG9iamVjdCBpbnRvIGEgcmVhbCBhcnJheS5cbiAgICogQHRlbXBsYXRlIFRcbiAgICogQHBhcmFtIHtBcnJheUxpa2U8VD59IGFyclxuICAgKiBAcmV0dXJucyB7VFtdfVxuICAgKi9cbiAgZnVuY3Rpb24gdG9BcnJheShhcnIpIHtcbiAgICBjb25zdCByZXR1cm5BcnIgPSBbXVxuICAgIGlmIChhcnIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJldHVybkFyci5wdXNoKGFycltpXSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldHVybkFyclxuICB9XG5cbiAgLyoqXG4gICAqIEB0ZW1wbGF0ZSBUXG4gICAqIEBwYXJhbSB7VFtdfE5hbWVkTm9kZU1hcHxIVE1MQ29sbGVjdGlvbnxIVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbnxBcnJheUxpa2U8VD59IGFyclxuICAgKiBAcGFyYW0geyhUKSA9PiB2b2lkfSBmdW5jXG4gICAqL1xuICBmdW5jdGlvbiBmb3JFYWNoKGFyciwgZnVuYykge1xuICAgIGlmIChhcnIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZ1bmMoYXJyW2ldKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNTY3JvbGxlZEludG9WaWV3KGVsKSB7XG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgZWxlbVRvcCA9IHJlY3QudG9wXG4gICAgY29uc3QgZWxlbUJvdHRvbSA9IHJlY3QuYm90dG9tXG4gICAgcmV0dXJuIGVsZW1Ub3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgZWxlbUJvdHRvbSA+PSAwXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBlbHRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBib2R5Q29udGFpbnMoZWx0KSB7XG4gICAgLy8gSUUgRml4XG4gICAgY29uc3Qgcm9vdE5vZGUgPSBlbHQuZ2V0Um9vdE5vZGUgJiYgZWx0LmdldFJvb3ROb2RlKClcbiAgICBpZiAocm9vdE5vZGUgJiYgcm9vdE5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuU2hhZG93Um9vdCkge1xuICAgICAgcmV0dXJuIGdldERvY3VtZW50KCkuYm9keS5jb250YWlucyhyb290Tm9kZS5ob3N0KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0RG9jdW1lbnQoKS5ib2R5LmNvbnRhaW5zKGVsdClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyaWdnZXJcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgZnVuY3Rpb24gc3BsaXRPbldoaXRlc3BhY2UodHJpZ2dlcikge1xuICAgIHJldHVybiB0cmlnZ2VyLnRyaW0oKS5zcGxpdCgvXFxzKy8pXG4gIH1cblxuICAvKipcbiAgICogbWVyZ2VPYmplY3RzIHRha2VzIGFsbCB0aGUga2V5cyBmcm9tXG4gICAqIG9iajIgYW5kIGR1cGxpY2F0ZXMgdGhlbSBpbnRvIG9iajFcbiAgICogQHRlbXBsYXRlIFQxXG4gICAqIEB0ZW1wbGF0ZSBUMlxuICAgKiBAcGFyYW0ge1QxfSBvYmoxXG4gICAqIEBwYXJhbSB7VDJ9IG9iajJcbiAgICogQHJldHVybnMge1QxICYgVDJ9XG4gICAqL1xuICBmdW5jdGlvbiBtZXJnZU9iamVjdHMob2JqMSwgb2JqMikge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iajIpIHtcbiAgICAgIGlmIChvYmoyLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0c2MgZG9lc24ndCBzZWVtIHRvIHByb3Blcmx5IGhhbmRsZSB0eXBlcyBtZXJnaW5nXG4gICAgICAgIG9iajFba2V5XSA9IG9iajJba2V5XVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBAdHMtaWdub3JlIHRzYyBkb2Vzbid0IHNlZW0gdG8gcHJvcGVybHkgaGFuZGxlIHR5cGVzIG1lcmdpbmdcbiAgICByZXR1cm4gb2JqMVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBqU3RyaW5nXG4gICAqIEByZXR1cm5zIHthbnl8bnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIHBhcnNlSlNPTihqU3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGpTdHJpbmcpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZ0Vycm9yKGVycm9yKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBjYW5BY2Nlc3NMb2NhbFN0b3JhZ2UoKSB7XG4gICAgY29uc3QgdGVzdCA9ICdodG14OmxvY2FsU3RvcmFnZVRlc3QnXG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRlc3QsIHRlc3QpXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0KVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVBhdGgocGF0aCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHBhdGgpXG4gICAgICBpZiAodXJsKSB7XG4gICAgICAgIHBhdGggPSB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoXG4gICAgICB9XG4gICAgICAvLyByZW1vdmUgdHJhaWxpbmcgc2xhc2gsIHVubGVzcyBpbmRleCBwYWdlXG4gICAgICBpZiAoISgvXlxcLyQvLnRlc3QocGF0aCkpKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyskLywgJycpXG4gICAgICB9XG4gICAgICByZXR1cm4gcGF0aFxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGJlIGtpbmQgdG8gSUUxMSwgd2hpY2ggZG9lc24ndCBzdXBwb3J0IFVSTCgpXG4gICAgICByZXR1cm4gcGF0aFxuICAgIH1cbiAgfVxuXG4gIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBwdWJsaWMgQVBJXG4gIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEByZXR1cm5zIHthbnl9XG4gICAqL1xuICBmdW5jdGlvbiBpbnRlcm5hbEV2YWwoc3RyKSB7XG4gICAgcmV0dXJuIG1heWJlRXZhbChnZXREb2N1bWVudCgpLmJvZHksIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV2YWwoc3RyKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNhbGxiYWNrIGZvciB0aGUgKipodG14OmxvYWQqKiBldmVudC4gVGhpcyBjYW4gYmUgdXNlZCB0byBwcm9jZXNzIG5ldyBjb250ZW50LCBmb3IgZXhhbXBsZSBpbml0aWFsaXppbmcgdGhlIGNvbnRlbnQgd2l0aCBhIGphdmFzY3JpcHQgbGlicmFyeVxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNvbkxvYWRcbiAgICpcbiAgICogQHBhcmFtIHsoZWx0OiBOb2RlKSA9PiB2b2lkfSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgdG8gY2FsbCBvbiBuZXdseSBsb2FkZWQgY29udGVudFxuICAgKiBAcmV0dXJucyB7RXZlbnRMaXN0ZW5lcn1cbiAgICovXG4gIGZ1bmN0aW9uIG9uTG9hZEhlbHBlcihjYWxsYmFjaykge1xuICAgIGNvbnN0IHZhbHVlID0gaHRteC5vbignaHRteDpsb2FkJywgLyoqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2dCAqLyBmdW5jdGlvbihldnQpIHtcbiAgICAgIGNhbGxiYWNrKGV2dC5kZXRhaWwuZWx0KVxuICAgIH0pXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogTG9nIGFsbCBodG14IGV2ZW50cywgdXNlZnVsIGZvciBkZWJ1Z2dpbmcuXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI2xvZ0FsbFxuICAgKi9cbiAgZnVuY3Rpb24gbG9nQWxsKCkge1xuICAgIGh0bXgubG9nZ2VyID0gZnVuY3Rpb24oZWx0LCBldmVudCwgZGF0YSkge1xuICAgICAgaWYgKGNvbnNvbGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQsIGVsdCwgZGF0YSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsb2dOb25lKCkge1xuICAgIGh0bXgubG9nZ2VyID0gbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIGFuIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI2ZpbmRcbiAgICpcbiAgICogQHBhcmFtIHtQYXJlbnROb2RlfHN0cmluZ30gZWx0T3JTZWxlY3RvciAgdGhlIHJvb3QgZWxlbWVudCB0byBmaW5kIHRoZSBtYXRjaGluZyBlbGVtZW50IGluLCBpbmNsdXNpdmUgfCB0aGUgc2VsZWN0b3IgdG8gbWF0Y2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcl0gdGhlIHNlbGVjdG9yIHRvIG1hdGNoXG4gICAqIEByZXR1cm5zIHtFbGVtZW50fG51bGx9XG4gICAqL1xuICBmdW5jdGlvbiBmaW5kKGVsdE9yU2VsZWN0b3IsIHNlbGVjdG9yKSB7XG4gICAgaWYgKHR5cGVvZiBlbHRPclNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGVsdE9yU2VsZWN0b3IucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZpbmQoZ2V0RG9jdW1lbnQoKSwgZWx0T3JTZWxlY3RvcilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgYWxsIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBzZWxlY3RvclxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNmaW5kQWxsXG4gICAqXG4gICAqIEBwYXJhbSB7UGFyZW50Tm9kZXxzdHJpbmd9IGVsdE9yU2VsZWN0b3IgdGhlIHJvb3QgZWxlbWVudCB0byBmaW5kIHRoZSBtYXRjaGluZyBlbGVtZW50cyBpbiwgaW5jbHVzaXZlIHwgdGhlIHNlbGVjdG9yIHRvIG1hdGNoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3JdIHRoZSBzZWxlY3RvciB0byBtYXRjaFxuICAgKiBAcmV0dXJucyB7Tm9kZUxpc3RPZjxFbGVtZW50Pn1cbiAgICovXG4gIGZ1bmN0aW9uIGZpbmRBbGwoZWx0T3JTZWxlY3Rvciwgc2VsZWN0b3IpIHtcbiAgICBpZiAodHlwZW9mIGVsdE9yU2VsZWN0b3IgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZWx0T3JTZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmluZEFsbChnZXREb2N1bWVudCgpLCBlbHRPclNlbGVjdG9yKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBXaW5kb3dcbiAgICovXG4gIGZ1bmN0aW9uIGdldFdpbmRvdygpIHtcbiAgICByZXR1cm4gd2luZG93XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBlbGVtZW50IGZyb20gdGhlIERPTVxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNyZW1vdmVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBlbHRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWxheV1cbiAgICovXG4gIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWx0LCBkZWxheSkge1xuICAgIGVsdCA9IHJlc29sdmVUYXJnZXQoZWx0KVxuICAgIGlmIChkZWxheSkge1xuICAgICAgZ2V0V2luZG93KCkuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmVtb3ZlRWxlbWVudChlbHQpXG4gICAgICAgIGVsdCA9IG51bGxcbiAgICAgIH0sIGRlbGF5KVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnRFbHQoZWx0KS5yZW1vdmVDaGlsZChlbHQpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7YW55fSBlbHRcbiAgICogQHJldHVybiB7RWxlbWVudHxudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gYXNFbGVtZW50KGVsdCkge1xuICAgIHJldHVybiBlbHQgaW5zdGFuY2VvZiBFbGVtZW50ID8gZWx0IDogbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7YW55fSBlbHRcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR8bnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIGFzSHRtbEVsZW1lbnQoZWx0KSB7XG4gICAgcmV0dXJuIGVsdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZWx0IDogbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIGFzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBlbHRcbiAgICogQHJldHVybiB7UGFyZW50Tm9kZXxudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gYXNQYXJlbnROb2RlKGVsdCkge1xuICAgIHJldHVybiBlbHQgaW5zdGFuY2VvZiBFbGVtZW50IHx8IGVsdCBpbnN0YW5jZW9mIERvY3VtZW50IHx8IGVsdCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQgPyBlbHQgOiBudWxsXG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgYWRkcyBhIGNsYXNzIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNhZGRDbGFzc1xuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfSBlbHQgdGhlIGVsZW1lbnQgdG8gYWRkIHRoZSBjbGFzcyB0b1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhenogdGhlIGNsYXNzIHRvIGFkZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5XSB0aGUgZGVsYXkgKGluIG1pbGxpc2Vjb25kcykgYmVmb3JlIGNsYXNzIGlzIGFkZGVkXG4gICAqL1xuICBmdW5jdGlvbiBhZGRDbGFzc1RvRWxlbWVudChlbHQsIGNsYXp6LCBkZWxheSkge1xuICAgIGVsdCA9IGFzRWxlbWVudChyZXNvbHZlVGFyZ2V0KGVsdCkpXG4gICAgaWYgKCFlbHQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIGdldFdpbmRvdygpLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGFkZENsYXNzVG9FbGVtZW50KGVsdCwgY2xhenopXG4gICAgICAgIGVsdCA9IG51bGxcbiAgICAgIH0sIGRlbGF5KVxuICAgIH0gZWxzZSB7XG4gICAgICBlbHQuY2xhc3NMaXN0ICYmIGVsdC5jbGFzc0xpc3QuYWRkKGNsYXp6KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2xhc3MgZnJvbSB0aGUgZ2l2ZW4gZWxlbWVudFxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNyZW1vdmVDbGFzc1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV8c3RyaW5nfSBub2RlIGVsZW1lbnQgdG8gcmVtb3ZlIHRoZSBjbGFzcyBmcm9tXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGF6eiB0aGUgY2xhc3MgdG8gcmVtb3ZlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsYXldIHRoZSBkZWxheSAoaW4gbWlsbGlzZWNvbmRzIGJlZm9yZSBjbGFzcyBpcyByZW1vdmVkKVxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NGcm9tRWxlbWVudChub2RlLCBjbGF6eiwgZGVsYXkpIHtcbiAgICBsZXQgZWx0ID0gYXNFbGVtZW50KHJlc29sdmVUYXJnZXQobm9kZSkpXG4gICAgaWYgKCFlbHQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIGdldFdpbmRvdygpLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoZWx0LCBjbGF6eilcbiAgICAgICAgZWx0ID0gbnVsbFxuICAgICAgfSwgZGVsYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbHQuY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsdC5jbGFzc0xpc3QucmVtb3ZlKGNsYXp6KVxuICAgICAgICAvLyBpZiB0aGVyZSBhcmUgbm8gY2xhc3NlcyBsZWZ0LCByZW1vdmUgdGhlIGNsYXNzIGF0dHJpYnV0ZVxuICAgICAgICBpZiAoZWx0LmNsYXNzTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBlbHQucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZ2l2ZW4gY2xhc3Mgb24gYW4gZWxlbWVudFxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyN0b2dnbGVDbGFzc1xuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfSBlbHQgdGhlIGVsZW1lbnQgdG8gdG9nZ2xlIHRoZSBjbGFzcyBvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhenogdGhlIGNsYXNzIHRvIHRvZ2dsZVxuICAgKi9cbiAgZnVuY3Rpb24gdG9nZ2xlQ2xhc3NPbkVsZW1lbnQoZWx0LCBjbGF6eikge1xuICAgIGVsdCA9IHJlc29sdmVUYXJnZXQoZWx0KVxuICAgIGVsdC5jbGFzc0xpc3QudG9nZ2xlKGNsYXp6KVxuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIHRoZSBnaXZlbiBjbGFzcyBmcm9tIGl0cyBzaWJsaW5ncywgc28gdGhhdCBhbW9uZyBpdHMgc2libGluZ3MsIG9ubHkgdGhlIGdpdmVuIGVsZW1lbnQgd2lsbCBoYXZlIHRoZSBjbGFzcy5cbiAgICpcbiAgICogQHNlZSBodHRwczovL2h0bXgub3JnL2FwaS8jdGFrZUNsYXNzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZXxzdHJpbmd9IGVsdCB0aGUgZWxlbWVudCB0aGF0IHdpbGwgdGFrZSB0aGUgY2xhc3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXp6IHRoZSBjbGFzcyB0byB0YWtlXG4gICAqL1xuICBmdW5jdGlvbiB0YWtlQ2xhc3NGb3JFbGVtZW50KGVsdCwgY2xhenopIHtcbiAgICBlbHQgPSByZXNvbHZlVGFyZ2V0KGVsdClcbiAgICBmb3JFYWNoKGVsdC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuLCBmdW5jdGlvbihjaGlsZCkge1xuICAgICAgcmVtb3ZlQ2xhc3NGcm9tRWxlbWVudChjaGlsZCwgY2xhenopXG4gICAgfSlcbiAgICBhZGRDbGFzc1RvRWxlbWVudChhc0VsZW1lbnQoZWx0KSwgY2xhenopXG4gIH1cblxuICAvKipcbiAgICogRmluZHMgdGhlIGNsb3Nlc3QgbWF0Y2hpbmcgZWxlbWVudCBpbiB0aGUgZ2l2ZW4gZWxlbWVudHMgcGFyZW50YWdlLCBpbmNsdXNpdmUgb2YgdGhlIGVsZW1lbnRcbiAgICpcbiAgICogQHNlZSBodHRwczovL2h0bXgub3JnL2FwaS8jY2xvc2VzdFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfSBlbHQgdGhlIGVsZW1lbnQgdG8gZmluZCB0aGUgc2VsZWN0b3IgZnJvbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgdGhlIHNlbGVjdG9yIHRvIGZpbmRcbiAgICogQHJldHVybnMge0VsZW1lbnR8bnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIGNsb3Nlc3QoZWx0LCBzZWxlY3Rvcikge1xuICAgIGVsdCA9IGFzRWxlbWVudChyZXNvbHZlVGFyZ2V0KGVsdCkpXG4gICAgaWYgKGVsdCAmJiBlbHQuY2xvc2VzdCkge1xuICAgICAgcmV0dXJuIGVsdC5jbG9zZXN0KHNlbGVjdG9yKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPIHJlbW92ZSB3aGVuIElFIGdvZXMgYXdheVxuICAgICAgZG8ge1xuICAgICAgICBpZiAoZWx0ID09IG51bGwgfHwgbWF0Y2hlcyhlbHQsIHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBlbHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2hpbGUgKGVsdCA9IGVsdCAmJiBhc0VsZW1lbnQocGFyZW50RWx0KGVsdCkpKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnRzV2l0aChzdHIsIHByZWZpeCkge1xuICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKDAsIHByZWZpeC5sZW5ndGgpID09PSBwcmVmaXhcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdWZmaXhcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBlbmRzV2l0aChzdHIsIHN1ZmZpeCkge1xuICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKHN0ci5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKSA9PT0gc3VmZml4XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxpemVTZWxlY3RvcihzZWxlY3Rvcikge1xuICAgIGNvbnN0IHRyaW1tZWRTZWxlY3RvciA9IHNlbGVjdG9yLnRyaW0oKVxuICAgIGlmIChzdGFydHNXaXRoKHRyaW1tZWRTZWxlY3RvciwgJzwnKSAmJiBlbmRzV2l0aCh0cmltbWVkU2VsZWN0b3IsICcvPicpKSB7XG4gICAgICByZXR1cm4gdHJpbW1lZFNlbGVjdG9yLnN1YnN0cmluZygxLCB0cmltbWVkU2VsZWN0b3IubGVuZ3RoIC0gMilcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRyaW1tZWRTZWxlY3RvclxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV8RWxlbWVudHxEb2N1bWVudHxzdHJpbmd9IGVsdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAgICogQHBhcmFtIHtib29sZWFuPX0gZ2xvYmFsXG4gICAqIEByZXR1cm5zIHsoTm9kZXxXaW5kb3cpW119XG4gICAqL1xuICBmdW5jdGlvbiBxdWVyeVNlbGVjdG9yQWxsRXh0KGVsdCwgc2VsZWN0b3IsIGdsb2JhbCkge1xuICAgIGVsdCA9IHJlc29sdmVUYXJnZXQoZWx0KVxuICAgIGlmIChzZWxlY3Rvci5pbmRleE9mKCdjbG9zZXN0ICcpID09PSAwKSB7XG4gICAgICByZXR1cm4gW2Nsb3Nlc3QoYXNFbGVtZW50KGVsdCksIG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yLnN1YnN0cig4KSkpXVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IuaW5kZXhPZignZmluZCAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtmaW5kKGFzUGFyZW50Tm9kZShlbHQpLCBub3JtYWxpemVTZWxlY3RvcihzZWxlY3Rvci5zdWJzdHIoNSkpKV1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yID09PSAnbmV4dCcpIHtcbiAgICAgIHJldHVybiBbYXNFbGVtZW50KGVsdCkubmV4dEVsZW1lbnRTaWJsaW5nXVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IuaW5kZXhPZignbmV4dCAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtzY2FuRm9yd2FyZFF1ZXJ5KGVsdCwgbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3Iuc3Vic3RyKDUpKSwgISFnbG9iYWwpXVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IgPT09ICdwcmV2aW91cycpIHtcbiAgICAgIHJldHVybiBbYXNFbGVtZW50KGVsdCkucHJldmlvdXNFbGVtZW50U2libGluZ11cbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yLmluZGV4T2YoJ3ByZXZpb3VzICcpID09PSAwKSB7XG4gICAgICByZXR1cm4gW3NjYW5CYWNrd2FyZHNRdWVyeShlbHQsIG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yLnN1YnN0cig5KSksICEhZ2xvYmFsKV1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yID09PSAnZG9jdW1lbnQnKSB7XG4gICAgICByZXR1cm4gW2RvY3VtZW50XVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IgPT09ICd3aW5kb3cnKSB7XG4gICAgICByZXR1cm4gW3dpbmRvd11cbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yID09PSAnYm9keScpIHtcbiAgICAgIHJldHVybiBbZG9jdW1lbnQuYm9keV1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yID09PSAncm9vdCcpIHtcbiAgICAgIHJldHVybiBbZ2V0Um9vdE5vZGUoZWx0LCAhIWdsb2JhbCldXG4gICAgfSBlbHNlIGlmIChzZWxlY3Rvci5pbmRleE9mKCdnbG9iYWwgJykgPT09IDApIHtcbiAgICAgIHJldHVybiBxdWVyeVNlbGVjdG9yQWxsRXh0KGVsdCwgc2VsZWN0b3Iuc2xpY2UoNyksIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0b0FycmF5KGFzUGFyZW50Tm9kZShnZXRSb290Tm9kZShlbHQsICEhZ2xvYmFsKSkucXVlcnlTZWxlY3RvckFsbChub3JtYWxpemVTZWxlY3RvcihzZWxlY3RvcikpKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IHN0YXJ0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRjaFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGdsb2JhbFxuICAgKiBAcmV0dXJucyB7RWxlbWVudH1cbiAgICovXG4gIHZhciBzY2FuRm9yd2FyZFF1ZXJ5ID0gZnVuY3Rpb24oc3RhcnQsIG1hdGNoLCBnbG9iYWwpIHtcbiAgICBjb25zdCByZXN1bHRzID0gYXNQYXJlbnROb2RlKGdldFJvb3ROb2RlKHN0YXJ0LCBnbG9iYWwpKS5xdWVyeVNlbGVjdG9yQWxsKG1hdGNoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZWx0ID0gcmVzdWx0c1tpXVxuICAgICAgaWYgKGVsdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihzdGFydCkgPT09IE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fUFJFQ0VESU5HKSB7XG4gICAgICAgIHJldHVybiBlbHRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBzdGFydFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0Y2hcbiAgICogQHBhcmFtIHtib29sZWFufSBnbG9iYWxcbiAgICogQHJldHVybnMge0VsZW1lbnR9XG4gICAqL1xuICB2YXIgc2NhbkJhY2t3YXJkc1F1ZXJ5ID0gZnVuY3Rpb24oc3RhcnQsIG1hdGNoLCBnbG9iYWwpIHtcbiAgICBjb25zdCByZXN1bHRzID0gYXNQYXJlbnROb2RlKGdldFJvb3ROb2RlKHN0YXJ0LCBnbG9iYWwpKS5xdWVyeVNlbGVjdG9yQWxsKG1hdGNoKVxuICAgIGZvciAobGV0IGkgPSByZXN1bHRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBlbHQgPSByZXN1bHRzW2ldXG4gICAgICBpZiAoZWx0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHN0YXJ0KSA9PT0gTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkcpIHtcbiAgICAgICAgcmV0dXJuIGVsdFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV8c3RyaW5nfSBlbHRPclNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge05vZGV8V2luZG93fVxuICAgKi9cbiAgZnVuY3Rpb24gcXVlcnlTZWxlY3RvckV4dChlbHRPclNlbGVjdG9yLCBzZWxlY3Rvcikge1xuICAgIGlmICh0eXBlb2YgZWx0T3JTZWxlY3RvciAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBxdWVyeVNlbGVjdG9yQWxsRXh0KGVsdE9yU2VsZWN0b3IsIHNlbGVjdG9yKVswXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcXVlcnlTZWxlY3RvckFsbEV4dChnZXREb2N1bWVudCgpLmJvZHksIGVsdE9yU2VsZWN0b3IpWzBdXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEB0ZW1wbGF0ZSB7RXZlbnRUYXJnZXR9IFRcbiAgICogQHBhcmFtIHtUfHN0cmluZ30gZWx0T3JTZWxlY3RvclxuICAgKiBAcGFyYW0ge1R9IFtjb250ZXh0XVxuICAgKiBAcmV0dXJucyB7RWxlbWVudHxUfG51bGx9XG4gICAqL1xuICBmdW5jdGlvbiByZXNvbHZlVGFyZ2V0KGVsdE9yU2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAodHlwZW9mIGVsdE9yU2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZmluZChhc1BhcmVudE5vZGUoY29udGV4dCkgfHwgZG9jdW1lbnQsIGVsdE9yU2VsZWN0b3IpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbHRPclNlbGVjdG9yXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwfHN0cmluZ30gQW55RXZlbnROYW1lXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBFdmVudEFyZ3NcbiAgICogQHByb3BlcnR5IHtFdmVudFRhcmdldH0gdGFyZ2V0XG4gICAqIEBwcm9wZXJ0eSB7QW55RXZlbnROYW1lfSBldmVudFxuICAgKiBAcHJvcGVydHkge0V2ZW50TGlzdGVuZXJ9IGxpc3RlbmVyXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEFueUV2ZW50TmFtZX0gYXJnMVxuICAgKiBAcGFyYW0ge0FueUV2ZW50TmFtZXxFdmVudExpc3RlbmVyfSBhcmcyXG4gICAqIEBwYXJhbSB7RXZlbnRMaXN0ZW5lcn0gW2FyZzNdXG4gICAqIEByZXR1cm5zIHtFdmVudEFyZ3N9XG4gICAqL1xuICBmdW5jdGlvbiBwcm9jZXNzRXZlbnRBcmdzKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihhcmcyKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGFyZ2V0OiBnZXREb2N1bWVudCgpLmJvZHksXG4gICAgICAgIGV2ZW50OiBhc1N0cmluZyhhcmcxKSxcbiAgICAgICAgbGlzdGVuZXI6IGFyZzJcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGFyZ2V0OiByZXNvbHZlVGFyZ2V0KGFyZzEpLFxuICAgICAgICBldmVudDogYXNTdHJpbmcoYXJnMiksXG4gICAgICAgIGxpc3RlbmVyOiBhcmczXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYW4gZWxlbWVudFxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNvblxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fHN0cmluZ30gYXJnMSB0aGUgZWxlbWVudCB0byBhZGQgdGhlIGxpc3RlbmVyIHRvIHwgdGhlIGV2ZW50IG5hbWUgdG8gYWRkIHRoZSBsaXN0ZW5lciBmb3JcbiAgICogQHBhcmFtIHtzdHJpbmd8RXZlbnRMaXN0ZW5lcn0gYXJnMiB0aGUgZXZlbnQgbmFtZSB0byBhZGQgdGhlIGxpc3RlbmVyIGZvciB8IHRoZSBsaXN0ZW5lciB0byBhZGRcbiAgICogQHBhcmFtIHtFdmVudExpc3RlbmVyfSBbYXJnM10gdGhlIGxpc3RlbmVyIHRvIGFkZFxuICAgKiBAcmV0dXJucyB7RXZlbnRMaXN0ZW5lcn1cbiAgICovXG4gIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJJbXBsKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICByZWFkeShmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGV2ZW50QXJncyA9IHByb2Nlc3NFdmVudEFyZ3MoYXJnMSwgYXJnMiwgYXJnMylcbiAgICAgIGV2ZW50QXJncy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudEFyZ3MuZXZlbnQsIGV2ZW50QXJncy5saXN0ZW5lcilcbiAgICB9KVxuICAgIGNvbnN0IGIgPSBpc0Z1bmN0aW9uKGFyZzIpXG4gICAgcmV0dXJuIGIgPyBhcmcyIDogYXJnM1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIgZnJvbSBhbiBlbGVtZW50XG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI29mZlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fHN0cmluZ30gYXJnMSB0aGUgZWxlbWVudCB0byByZW1vdmUgdGhlIGxpc3RlbmVyIGZyb20gfCB0aGUgZXZlbnQgbmFtZSB0byByZW1vdmUgdGhlIGxpc3RlbmVyIGZyb21cbiAgICogQHBhcmFtIHtzdHJpbmd8RXZlbnRMaXN0ZW5lcn0gYXJnMiB0aGUgZXZlbnQgbmFtZSB0byByZW1vdmUgdGhlIGxpc3RlbmVyIGZyb20gfCB0aGUgbGlzdGVuZXIgdG8gcmVtb3ZlXG4gICAqIEBwYXJhbSB7RXZlbnRMaXN0ZW5lcn0gW2FyZzNdIHRoZSBsaXN0ZW5lciB0byByZW1vdmVcbiAgICogQHJldHVybnMge0V2ZW50TGlzdGVuZXJ9XG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVySW1wbChhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgcmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBldmVudEFyZ3MgPSBwcm9jZXNzRXZlbnRBcmdzKGFyZzEsIGFyZzIsIGFyZzMpXG4gICAgICBldmVudEFyZ3MudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRBcmdzLmV2ZW50LCBldmVudEFyZ3MubGlzdGVuZXIpXG4gICAgfSlcbiAgICByZXR1cm4gaXNGdW5jdGlvbihhcmcyKSA/IGFyZzIgOiBhcmczXG4gIH1cblxuICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBOb2RlIHByb2Nlc3NpbmdcbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBjb25zdCBEVU1NWV9FTFQgPSBnZXREb2N1bWVudCgpLmNyZWF0ZUVsZW1lbnQoJ291dHB1dCcpIC8vIGR1bW15IGVsZW1lbnQgZm9yIGJhZCBzZWxlY3RvcnNcbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyTmFtZVxuICAgKiBAcmV0dXJucyB7KE5vZGV8V2luZG93KVtdfVxuICAgKi9cbiAgZnVuY3Rpb24gZmluZEF0dHJpYnV0ZVRhcmdldHMoZWx0LCBhdHRyTmFtZSkge1xuICAgIGNvbnN0IGF0dHJUYXJnZXQgPSBnZXRDbG9zZXN0QXR0cmlidXRlVmFsdWUoZWx0LCBhdHRyTmFtZSlcbiAgICBpZiAoYXR0clRhcmdldCkge1xuICAgICAgaWYgKGF0dHJUYXJnZXQgPT09ICd0aGlzJykge1xuICAgICAgICByZXR1cm4gW2ZpbmRUaGlzRWxlbWVudChlbHQsIGF0dHJOYW1lKV1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHF1ZXJ5U2VsZWN0b3JBbGxFeHQoZWx0LCBhdHRyVGFyZ2V0KVxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGxvZ0Vycm9yKCdUaGUgc2VsZWN0b3IgXCInICsgYXR0clRhcmdldCArICdcIiBvbiAnICsgYXR0ck5hbWUgKyAnIHJldHVybmVkIG5vIG1hdGNoZXMhJylcbiAgICAgICAgICByZXR1cm4gW0RVTU1ZX0VMVF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICAgKiBAcmV0dXJucyB7RWxlbWVudHxudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gZmluZFRoaXNFbGVtZW50KGVsdCwgYXR0cmlidXRlKSB7XG4gICAgcmV0dXJuIGFzRWxlbWVudChnZXRDbG9zZXN0TWF0Y2goZWx0LCBmdW5jdGlvbihlbHQpIHtcbiAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGVWYWx1ZShhc0VsZW1lbnQoZWx0KSwgYXR0cmlidXRlKSAhPSBudWxsXG4gICAgfSkpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHJldHVybnMge05vZGV8V2luZG93fG51bGx9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRUYXJnZXQoZWx0KSB7XG4gICAgY29uc3QgdGFyZ2V0U3RyID0gZ2V0Q2xvc2VzdEF0dHJpYnV0ZVZhbHVlKGVsdCwgJ2h4LXRhcmdldCcpXG4gICAgaWYgKHRhcmdldFN0cikge1xuICAgICAgaWYgKHRhcmdldFN0ciA9PT0gJ3RoaXMnKSB7XG4gICAgICAgIHJldHVybiBmaW5kVGhpc0VsZW1lbnQoZWx0LCAnaHgtdGFyZ2V0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBxdWVyeVNlbGVjdG9yRXh0KGVsdCwgdGFyZ2V0U3RyKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkYXRhID0gZ2V0SW50ZXJuYWxEYXRhKGVsdClcbiAgICAgIGlmIChkYXRhLmJvb3N0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGdldERvY3VtZW50KCkuYm9keVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVsdFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIHNob3VsZFNldHRsZUF0dHJpYnV0ZShuYW1lKSB7XG4gICAgY29uc3QgYXR0cmlidXRlc1RvU2V0dGxlID0gaHRteC5jb25maWcuYXR0cmlidXRlc1RvU2V0dGxlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzVG9TZXR0bGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChuYW1lID09PSBhdHRyaWJ1dGVzVG9TZXR0bGVbaV0pIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBtZXJnZVRvXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gbWVyZ2VGcm9tXG4gICAqL1xuICBmdW5jdGlvbiBjbG9uZUF0dHJpYnV0ZXMobWVyZ2VUbywgbWVyZ2VGcm9tKSB7XG4gICAgZm9yRWFjaChtZXJnZVRvLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgIGlmICghbWVyZ2VGcm9tLmhhc0F0dHJpYnV0ZShhdHRyLm5hbWUpICYmIHNob3VsZFNldHRsZUF0dHJpYnV0ZShhdHRyLm5hbWUpKSB7XG4gICAgICAgIG1lcmdlVG8ucmVtb3ZlQXR0cmlidXRlKGF0dHIubmFtZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIGZvckVhY2gobWVyZ2VGcm9tLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgIGlmIChzaG91bGRTZXR0bGVBdHRyaWJ1dGUoYXR0ci5uYW1lKSkge1xuICAgICAgICBtZXJnZVRvLnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0h0bXhTd2FwU3R5bGV9IHN3YXBTdHlsZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzSW5saW5lU3dhcChzd2FwU3R5bGUsIHRhcmdldCkge1xuICAgIGNvbnN0IGV4dGVuc2lvbnMgPSBnZXRFeHRlbnNpb25zKHRhcmdldClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbaV1cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChleHRlbnNpb24uaXNJbmxpbmVTd2FwKHN3YXBTdHlsZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxvZ0Vycm9yKGUpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzd2FwU3R5bGUgPT09ICdvdXRlckhUTUwnXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9vYlZhbHVlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gb29iRWxlbWVudFxuICAgKiBAcGFyYW0ge0h0bXhTZXR0bGVJbmZvfSBzZXR0bGVJbmZvXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBmdW5jdGlvbiBvb2JTd2FwKG9vYlZhbHVlLCBvb2JFbGVtZW50LCBzZXR0bGVJbmZvKSB7XG4gICAgbGV0IHNlbGVjdG9yID0gJyMnICsgZ2V0UmF3QXR0cmlidXRlKG9vYkVsZW1lbnQsICdpZCcpXG4gICAgLyoqIEB0eXBlIEh0bXhTd2FwU3R5bGUgKi9cbiAgICBsZXQgc3dhcFN0eWxlID0gJ291dGVySFRNTCdcbiAgICBpZiAob29iVmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH0gZWxzZSBpZiAob29iVmFsdWUuaW5kZXhPZignOicpID4gMCkge1xuICAgICAgc3dhcFN0eWxlID0gb29iVmFsdWUuc3Vic3RyKDAsIG9vYlZhbHVlLmluZGV4T2YoJzonKSlcbiAgICAgIHNlbGVjdG9yID0gb29iVmFsdWUuc3Vic3RyKG9vYlZhbHVlLmluZGV4T2YoJzonKSArIDEsIG9vYlZhbHVlLmxlbmd0aClcbiAgICB9IGVsc2Uge1xuICAgICAgc3dhcFN0eWxlID0gb29iVmFsdWVcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXRzID0gZ2V0RG9jdW1lbnQoKS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICBmb3JFYWNoKFxuICAgICAgICB0YXJnZXRzLFxuICAgICAgICBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICBsZXQgZnJhZ21lbnRcbiAgICAgICAgICBjb25zdCBvb2JFbGVtZW50Q2xvbmUgPSBvb2JFbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgIGZyYWdtZW50ID0gZ2V0RG9jdW1lbnQoKS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChvb2JFbGVtZW50Q2xvbmUpXG4gICAgICAgICAgaWYgKCFpc0lubGluZVN3YXAoc3dhcFN0eWxlLCB0YXJnZXQpKSB7XG4gICAgICAgICAgICBmcmFnbWVudCA9IGFzUGFyZW50Tm9kZShvb2JFbGVtZW50Q2xvbmUpIC8vIGlmIHRoaXMgaXMgbm90IGFuIGlubGluZSBzd2FwLCB3ZSB1c2UgdGhlIGNvbnRlbnQgb2YgdGhlIG5vZGUsIG5vdCB0aGUgbm9kZSBpdHNlbGZcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBiZWZvcmVTd2FwRGV0YWlscyA9IHsgc2hvdWxkU3dhcDogdHJ1ZSwgdGFyZ2V0LCBmcmFnbWVudCB9XG4gICAgICAgICAgaWYgKCF0cmlnZ2VyRXZlbnQodGFyZ2V0LCAnaHRteDpvb2JCZWZvcmVTd2FwJywgYmVmb3JlU3dhcERldGFpbHMpKSByZXR1cm5cblxuICAgICAgICAgIHRhcmdldCA9IGJlZm9yZVN3YXBEZXRhaWxzLnRhcmdldCAvLyBhbGxvdyByZS10YXJnZXRpbmdcbiAgICAgICAgICBpZiAoYmVmb3JlU3dhcERldGFpbHMuc2hvdWxkU3dhcCkge1xuICAgICAgICAgICAgc3dhcFdpdGhTdHlsZShzd2FwU3R5bGUsIHRhcmdldCwgdGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbylcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yRWFjaChzZXR0bGVJbmZvLmVsdHMsIGZ1bmN0aW9uKGVsdCkge1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6b29iQWZ0ZXJTd2FwJywgYmVmb3JlU3dhcERldGFpbHMpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgb29iRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9vYkVsZW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIG9vYkVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvb2JFbGVtZW50KVxuICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZ2V0RG9jdW1lbnQoKS5ib2R5LCAnaHRteDpvb2JFcnJvck5vVGFyZ2V0JywgeyBjb250ZW50OiBvb2JFbGVtZW50IH0pXG4gICAgfVxuICAgIHJldHVybiBvb2JWYWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gZnJhZ21lbnRcbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZVByZXNlcnZlZEVsZW1lbnRzKGZyYWdtZW50KSB7XG4gICAgZm9yRWFjaChmaW5kQWxsKGZyYWdtZW50LCAnW2h4LXByZXNlcnZlXSwgW2RhdGEtaHgtcHJlc2VydmVdJyksIGZ1bmN0aW9uKHByZXNlcnZlZEVsdCkge1xuICAgICAgY29uc3QgaWQgPSBnZXRBdHRyaWJ1dGVWYWx1ZShwcmVzZXJ2ZWRFbHQsICdpZCcpXG4gICAgICBjb25zdCBvbGRFbHQgPSBnZXREb2N1bWVudCgpLmdldEVsZW1lbnRCeUlkKGlkKVxuICAgICAgaWYgKG9sZEVsdCAhPSBudWxsKSB7XG4gICAgICAgIHByZXNlcnZlZEVsdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChvbGRFbHQsIHByZXNlcnZlZEVsdClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50Tm9kZVxuICAgKiBAcGFyYW0ge1BhcmVudE5vZGV9IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7SHRteFNldHRsZUluZm99IHNldHRsZUluZm9cbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZUF0dHJpYnV0ZXMocGFyZW50Tm9kZSwgZnJhZ21lbnQsIHNldHRsZUluZm8pIHtcbiAgICBmb3JFYWNoKGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF0nKSwgZnVuY3Rpb24obmV3Tm9kZSkge1xuICAgICAgY29uc3QgaWQgPSBnZXRSYXdBdHRyaWJ1dGUobmV3Tm9kZSwgJ2lkJylcbiAgICAgIGlmIChpZCAmJiBpZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRJZCA9IGlkLnJlcGxhY2UoXCInXCIsIFwiXFxcXCdcIilcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFRhZyA9IG5ld05vZGUudGFnTmFtZS5yZXBsYWNlKCc6JywgJ1xcXFw6JylcbiAgICAgICAgY29uc3QgcGFyZW50RWx0ID0gYXNQYXJlbnROb2RlKHBhcmVudE5vZGUpXG4gICAgICAgIGNvbnN0IG9sZE5vZGUgPSBwYXJlbnRFbHQgJiYgcGFyZW50RWx0LnF1ZXJ5U2VsZWN0b3Iobm9ybWFsaXplZFRhZyArIFwiW2lkPSdcIiArIG5vcm1hbGl6ZWRJZCArIFwiJ11cIilcbiAgICAgICAgaWYgKG9sZE5vZGUgJiYgb2xkTm9kZSAhPT0gcGFyZW50RWx0KSB7XG4gICAgICAgICAgY29uc3QgbmV3QXR0cmlidXRlcyA9IG5ld05vZGUuY2xvbmVOb2RlKClcbiAgICAgICAgICBjbG9uZUF0dHJpYnV0ZXMobmV3Tm9kZSwgb2xkTm9kZSlcbiAgICAgICAgICBzZXR0bGVJbmZvLnRhc2tzLnB1c2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjbG9uZUF0dHJpYnV0ZXMobmV3Tm9kZSwgbmV3QXR0cmlidXRlcylcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IGNoaWxkXG4gICAqIEByZXR1cm5zIHtIdG14U2V0dGxlVGFza31cbiAgICovXG4gIGZ1bmN0aW9uIG1ha2VBamF4TG9hZFRhc2soY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZW1vdmVDbGFzc0Zyb21FbGVtZW50KGNoaWxkLCBodG14LmNvbmZpZy5hZGRlZENsYXNzKVxuICAgICAgcHJvY2Vzc05vZGUoYXNFbGVtZW50KGNoaWxkKSlcbiAgICAgIHByb2Nlc3NGb2N1cyhhc1BhcmVudE5vZGUoY2hpbGQpKVxuICAgICAgdHJpZ2dlckV2ZW50KGNoaWxkLCAnaHRteDpsb2FkJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtQYXJlbnROb2RlfSBjaGlsZFxuICAgKi9cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZvY3VzKGNoaWxkKSB7XG4gICAgY29uc3QgYXV0b2ZvY3VzID0gJ1thdXRvZm9jdXNdJ1xuICAgIGNvbnN0IGF1dG9Gb2N1c2VkRWx0ID0gYXNIdG1sRWxlbWVudChtYXRjaGVzKGNoaWxkLCBhdXRvZm9jdXMpID8gY2hpbGQgOiBjaGlsZC5xdWVyeVNlbGVjdG9yKGF1dG9mb2N1cykpXG4gICAgaWYgKGF1dG9Gb2N1c2VkRWx0ICE9IG51bGwpIHtcbiAgICAgIGF1dG9Gb2N1c2VkRWx0LmZvY3VzKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBwYXJlbnROb2RlXG4gICAqIEBwYXJhbSB7Tm9kZX0gaW5zZXJ0QmVmb3JlXG4gICAqIEBwYXJhbSB7UGFyZW50Tm9kZX0gZnJhZ21lbnRcbiAgICogQHBhcmFtIHtIdG14U2V0dGxlSW5mb30gc2V0dGxlSW5mb1xuICAgKi9cbiAgZnVuY3Rpb24gaW5zZXJ0Tm9kZXNCZWZvcmUocGFyZW50Tm9kZSwgaW5zZXJ0QmVmb3JlLCBmcmFnbWVudCwgc2V0dGxlSW5mbykge1xuICAgIGhhbmRsZUF0dHJpYnV0ZXMocGFyZW50Tm9kZSwgZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gICAgd2hpbGUgKGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY2hpbGQgPSBmcmFnbWVudC5maXJzdENoaWxkXG4gICAgICBhZGRDbGFzc1RvRWxlbWVudChhc0VsZW1lbnQoY2hpbGQpLCBodG14LmNvbmZpZy5hZGRlZENsYXNzKVxuICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2hpbGQsIGluc2VydEJlZm9yZSlcbiAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5URVhUX05PREUgJiYgY2hpbGQubm9kZVR5cGUgIT09IE5vZGUuQ09NTUVOVF9OT0RFKSB7XG4gICAgICAgIHNldHRsZUluZm8udGFza3MucHVzaChtYWtlQWpheExvYWRUYXNrKGNoaWxkKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYmFzZWQgb24gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vaHlhbWFtb3RvL2ZkNDM1NTA1ZDI5ZWJmYTNkOTcxNmZkMmJlOGQ0MmYwLFxuICAgKiBkZXJpdmVkIGZyb20gSmF2YSdzIHN0cmluZyBoYXNoY29kZSBpbXBsZW1lbnRhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoYXNoXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBmdW5jdGlvbiBzdHJpbmdIYXNoKHN0cmluZywgaGFzaCkge1xuICAgIGxldCBjaGFyID0gMFxuICAgIHdoaWxlIChjaGFyIDwgc3RyaW5nLmxlbmd0aCkge1xuICAgICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIHN0cmluZy5jaGFyQ29kZUF0KGNoYXIrKykgfCAwIC8vIGJpdHdpc2Ugb3IgZW5zdXJlcyB3ZSBoYXZlIGEgMzItYml0IGludFxuICAgIH1cbiAgICByZXR1cm4gaGFzaFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBmdW5jdGlvbiBhdHRyaWJ1dGVIYXNoKGVsdCkge1xuICAgIGxldCBoYXNoID0gMFxuICAgIC8vIElFIGZpeFxuICAgIGlmIChlbHQuYXR0cmlidXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbHQuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBlbHQuYXR0cmlidXRlc1tpXVxuICAgICAgICBpZiAoYXR0cmlidXRlLnZhbHVlKSB7IC8vIG9ubHkgaW5jbHVkZSBhdHRyaWJ1dGVzIHcvIGFjdHVhbCB2YWx1ZXMgKGVtcHR5IGlzIHNhbWUgYXMgbm9uLWV4aXN0ZW50KVxuICAgICAgICAgIGhhc2ggPSBzdHJpbmdIYXNoKGF0dHJpYnV0ZS5uYW1lLCBoYXNoKVxuICAgICAgICAgIGhhc2ggPSBzdHJpbmdIYXNoKGF0dHJpYnV0ZS52YWx1ZSwgaGFzaClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGFzaFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGVsdFxuICAgKi9cbiAgZnVuY3Rpb24gZGVJbml0T25IYW5kbGVycyhlbHQpIHtcbiAgICBjb25zdCBpbnRlcm5hbERhdGEgPSBnZXRJbnRlcm5hbERhdGEoZWx0KVxuICAgIGlmIChpbnRlcm5hbERhdGEub25IYW5kbGVycykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlcm5hbERhdGEub25IYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBoYW5kbGVySW5mbyA9IGludGVybmFsRGF0YS5vbkhhbmRsZXJzW2ldXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJJbXBsKGVsdCwgaGFuZGxlckluZm8uZXZlbnQsIGhhbmRsZXJJbmZvLmxpc3RlbmVyKVxuICAgICAgfVxuICAgICAgZGVsZXRlIGludGVybmFsRGF0YS5vbkhhbmRsZXJzXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gZGVJbml0Tm9kZShlbGVtZW50KSB7XG4gICAgY29uc3QgaW50ZXJuYWxEYXRhID0gZ2V0SW50ZXJuYWxEYXRhKGVsZW1lbnQpXG4gICAgaWYgKGludGVybmFsRGF0YS50aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQoaW50ZXJuYWxEYXRhLnRpbWVvdXQpXG4gICAgfVxuICAgIGlmIChpbnRlcm5hbERhdGEubGlzdGVuZXJJbmZvcykge1xuICAgICAgZm9yRWFjaChpbnRlcm5hbERhdGEubGlzdGVuZXJJbmZvcywgZnVuY3Rpb24oaW5mbykge1xuICAgICAgICBpZiAoaW5mby5vbikge1xuICAgICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJJbXBsKGluZm8ub24sIGluZm8udHJpZ2dlciwgaW5mby5saXN0ZW5lcilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgZGVJbml0T25IYW5kbGVycyhlbGVtZW50KVxuICAgIGZvckVhY2goT2JqZWN0LmtleXMoaW50ZXJuYWxEYXRhKSwgZnVuY3Rpb24oa2V5KSB7IGRlbGV0ZSBpbnRlcm5hbERhdGFba2V5XSB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gY2xlYW5VcEVsZW1lbnQoZWxlbWVudCkge1xuICAgIHRyaWdnZXJFdmVudChlbGVtZW50LCAnaHRteDpiZWZvcmVDbGVhbnVwRWxlbWVudCcpXG4gICAgZGVJbml0Tm9kZShlbGVtZW50KVxuICAgIC8vIEB0cy1pZ25vcmUgSUUxMSBjb2RlXG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5yZXNvbHZlZFJlZmVyZW5jZVxuICAgIGlmIChlbGVtZW50LmNoaWxkcmVuKSB7IC8vIElFXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBmb3JFYWNoKGVsZW1lbnQuY2hpbGRyZW4sIGZ1bmN0aW9uKGNoaWxkKSB7IGNsZWFuVXBFbGVtZW50KGNoaWxkKSB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICAgKiBAcGFyYW0ge1BhcmVudE5vZGV9IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7SHRteFNldHRsZUluZm99IHNldHRsZUluZm9cbiAgICovXG4gIGZ1bmN0aW9uIHN3YXBPdXRlckhUTUwodGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbykge1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50ICYmIHRhcmdldC50YWdOYW1lID09PSAnQk9EWScpIHsgLy8gc3BlY2lhbCBjYXNlIHRoZSBib2R5IHRvIGlubmVySFRNTCBiZWNhdXNlIERvY3VtZW50RnJhZ21lbnRzIGNhbid0IGNvbnRhaW4gYSBib2R5IGVsdCB1bmZvcnR1bmF0ZWx5XG4gICAgICByZXR1cm4gc3dhcElubmVySFRNTCh0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICAgIH1cbiAgICAvKiogQHR5cGUge05vZGV9ICovXG4gICAgbGV0IG5ld0VsdFxuICAgIGNvbnN0IGVsdEJlZm9yZU5ld0NvbnRlbnQgPSB0YXJnZXQucHJldmlvdXNTaWJsaW5nXG4gICAgaW5zZXJ0Tm9kZXNCZWZvcmUocGFyZW50RWx0KHRhcmdldCksIHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gICAgaWYgKGVsdEJlZm9yZU5ld0NvbnRlbnQgPT0gbnVsbCkge1xuICAgICAgbmV3RWx0ID0gcGFyZW50RWx0KHRhcmdldCkuZmlyc3RDaGlsZFxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdFbHQgPSBlbHRCZWZvcmVOZXdDb250ZW50Lm5leHRTaWJsaW5nXG4gICAgfVxuICAgIHNldHRsZUluZm8uZWx0cyA9IHNldHRsZUluZm8uZWx0cy5maWx0ZXIoZnVuY3Rpb24oZSkgeyByZXR1cm4gZSAhPT0gdGFyZ2V0IH0pXG4gICAgLy8gc2NhbiB0aHJvdWdoIGFsbCBuZXdseSBhZGRlZCBjb250ZW50IGFuZCBhZGQgYWxsIGVsZW1lbnRzIHRvIHRoZSBzZXR0bGUgaW5mbyBzbyB3ZSB0cmlnZ2VyXG4gICAgLy8gZXZlbnRzIHByb3Blcmx5IG9uIHRoZW1cbiAgICB3aGlsZSAobmV3RWx0ICYmIG5ld0VsdCAhPT0gdGFyZ2V0KSB7XG4gICAgICBpZiAobmV3RWx0IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICBzZXR0bGVJbmZvLmVsdHMucHVzaChuZXdFbHQpXG4gICAgICB9XG4gICAgICBuZXdFbHQgPSBuZXdFbHQubmV4dFNpYmxpbmdcbiAgICB9XG4gICAgY2xlYW5VcEVsZW1lbnQodGFyZ2V0KVxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICB0YXJnZXQucmVtb3ZlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFyZ2V0KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICAgKiBAcGFyYW0ge1BhcmVudE5vZGV9IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7SHRteFNldHRsZUluZm99IHNldHRsZUluZm9cbiAgICovXG4gIGZ1bmN0aW9uIHN3YXBBZnRlckJlZ2luKHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pIHtcbiAgICByZXR1cm4gaW5zZXJ0Tm9kZXNCZWZvcmUodGFyZ2V0LCB0YXJnZXQuZmlyc3RDaGlsZCwgZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAgICogQHBhcmFtIHtQYXJlbnROb2RlfSBmcmFnbWVudFxuICAgKiBAcGFyYW0ge0h0bXhTZXR0bGVJbmZvfSBzZXR0bGVJbmZvXG4gICAqL1xuICBmdW5jdGlvbiBzd2FwQmVmb3JlQmVnaW4odGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbykge1xuICAgIHJldHVybiBpbnNlcnROb2Rlc0JlZm9yZShwYXJlbnRFbHQodGFyZ2V0KSwgdGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbylcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICAgKiBAcGFyYW0ge1BhcmVudE5vZGV9IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7SHRteFNldHRsZUluZm99IHNldHRsZUluZm9cbiAgICovXG4gIGZ1bmN0aW9uIHN3YXBCZWZvcmVFbmQodGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbykge1xuICAgIHJldHVybiBpbnNlcnROb2Rlc0JlZm9yZSh0YXJnZXQsIG51bGwsIGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7UGFyZW50Tm9kZX0gZnJhZ21lbnRcbiAgICogQHBhcmFtIHtIdG14U2V0dGxlSW5mb30gc2V0dGxlSW5mb1xuICAgKi9cbiAgZnVuY3Rpb24gc3dhcEFmdGVyRW5kKHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pIHtcbiAgICByZXR1cm4gaW5zZXJ0Tm9kZXNCZWZvcmUocGFyZW50RWx0KHRhcmdldCksIHRhcmdldC5uZXh0U2libGluZywgZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAgICovXG4gIGZ1bmN0aW9uIHN3YXBEZWxldGUodGFyZ2V0KSB7XG4gICAgY2xlYW5VcEVsZW1lbnQodGFyZ2V0KVxuICAgIHJldHVybiBwYXJlbnRFbHQodGFyZ2V0KS5yZW1vdmVDaGlsZCh0YXJnZXQpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAgICogQHBhcmFtIHtQYXJlbnROb2RlfSBmcmFnbWVudFxuICAgKiBAcGFyYW0ge0h0bXhTZXR0bGVJbmZvfSBzZXR0bGVJbmZvXG4gICAqL1xuICBmdW5jdGlvbiBzd2FwSW5uZXJIVE1MKHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gdGFyZ2V0LmZpcnN0Q2hpbGRcbiAgICBpbnNlcnROb2Rlc0JlZm9yZSh0YXJnZXQsIGZpcnN0Q2hpbGQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICAgIGlmIChmaXJzdENoaWxkKSB7XG4gICAgICB3aGlsZSAoZmlyc3RDaGlsZC5uZXh0U2libGluZykge1xuICAgICAgICBjbGVhblVwRWxlbWVudChmaXJzdENoaWxkLm5leHRTaWJsaW5nKVxuICAgICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQoZmlyc3RDaGlsZC5uZXh0U2libGluZylcbiAgICAgIH1cbiAgICAgIGNsZWFuVXBFbGVtZW50KGZpcnN0Q2hpbGQpXG4gICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQoZmlyc3RDaGlsZClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtIdG14U3dhcFN0eWxlfSBzd2FwU3R5bGVcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAgICogQHBhcmFtIHtQYXJlbnROb2RlfSBmcmFnbWVudFxuICAgKiBAcGFyYW0ge0h0bXhTZXR0bGVJbmZvfSBzZXR0bGVJbmZvXG4gICAqL1xuICBmdW5jdGlvbiBzd2FwV2l0aFN0eWxlKHN3YXBTdHlsZSwgZWx0LCB0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKSB7XG4gICAgc3dpdGNoIChzd2FwU3R5bGUpIHtcbiAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICByZXR1cm5cbiAgICAgIGNhc2UgJ291dGVySFRNTCc6XG4gICAgICAgIHN3YXBPdXRlckhUTUwodGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbylcbiAgICAgICAgcmV0dXJuXG4gICAgICBjYXNlICdhZnRlcmJlZ2luJzpcbiAgICAgICAgc3dhcEFmdGVyQmVnaW4odGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbylcbiAgICAgICAgcmV0dXJuXG4gICAgICBjYXNlICdiZWZvcmViZWdpbic6XG4gICAgICAgIHN3YXBCZWZvcmVCZWdpbih0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICAgICAgICByZXR1cm5cbiAgICAgIGNhc2UgJ2JlZm9yZWVuZCc6XG4gICAgICAgIHN3YXBCZWZvcmVFbmQodGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbylcbiAgICAgICAgcmV0dXJuXG4gICAgICBjYXNlICdhZnRlcmVuZCc6XG4gICAgICAgIHN3YXBBZnRlckVuZCh0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICAgICAgICByZXR1cm5cbiAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgIHN3YXBEZWxldGUodGFyZ2V0KVxuICAgICAgICByZXR1cm5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciBleHRlbnNpb25zID0gZ2V0RXh0ZW5zaW9ucyhlbHQpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGV4dCA9IGV4dGVuc2lvbnNbaV1cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudHMgPSBleHQuaGFuZGxlU3dhcChzd2FwU3R5bGUsIHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gICAgICAgICAgICBpZiAobmV3RWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmV3RWxlbWVudHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgaGFuZGxlU3dhcCByZXR1cm5zIGFuIGFycmF5IChsaWtlKSBvZiBlbGVtZW50cywgd2UgaGFuZGxlIHRoZW1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5ld0VsZW1lbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IG5ld0VsZW1lbnRzW2pdXG4gICAgICAgICAgICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFICYmIGNoaWxkLm5vZGVUeXBlICE9PSBOb2RlLkNPTU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICBzZXR0bGVJbmZvLnRhc2tzLnB1c2gobWFrZUFqYXhMb2FkVGFzayhjaGlsZCkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGxvZ0Vycm9yKGUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzd2FwU3R5bGUgPT09ICdpbm5lckhUTUwnKSB7XG4gICAgICAgICAgc3dhcElubmVySFRNTCh0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3YXBXaXRoU3R5bGUoaHRteC5jb25maWcuZGVmYXVsdFN3YXBTdHlsZSwgZWx0LCB0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gZnJhZ21lbnRcbiAgICogQHBhcmFtIHtIdG14U2V0dGxlSW5mb30gc2V0dGxlSW5mb1xuICAgKi9cbiAgZnVuY3Rpb24gZmluZEFuZFN3YXBPb2JFbGVtZW50cyhmcmFnbWVudCwgc2V0dGxlSW5mbykge1xuICAgIHZhciBvb2JFbHRzID0gZmluZEFsbChmcmFnbWVudCwgJ1toeC1zd2FwLW9vYl0sIFtkYXRhLWh4LXN3YXAtb29iXScpXG4gICAgZm9yRWFjaChvb2JFbHRzLCBmdW5jdGlvbihvb2JFbGVtZW50KSB7XG4gICAgICBpZiAoaHRteC5jb25maWcuYWxsb3dOZXN0ZWRPb2JTd2FwcyB8fCBvb2JFbGVtZW50LnBhcmVudEVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgb29iVmFsdWUgPSBnZXRBdHRyaWJ1dGVWYWx1ZShvb2JFbGVtZW50LCAnaHgtc3dhcC1vb2InKVxuICAgICAgICBpZiAob29iVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIG9vYlN3YXAob29iVmFsdWUsIG9vYkVsZW1lbnQsIHNldHRsZUluZm8pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9vYkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdoeC1zd2FwLW9vYicpXG4gICAgICAgIG9vYkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWh4LXN3YXAtb29iJylcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBvb2JFbHRzLmxlbmd0aCA+IDBcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRzIGNvbXBsZXRlIHN3YXBwaW5nIHBpcGVsaW5lLCBpbmNsdWRpbmc6IGZvY3VzIGFuZCBzZWxlY3Rpb24gcHJlc2VydmF0aW9uLFxuICAgKiB0aXRsZSB1cGRhdGVzLCBzY3JvbGwsIE9PQiBzd2FwcGluZywgbm9ybWFsIHN3YXBwaW5nIGFuZCBzZXR0bGluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ3xFbGVtZW50fSB0YXJnZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAgICogQHBhcmFtIHtIdG14U3dhcFNwZWNpZmljYXRpb259IHN3YXBTcGVjXG4gICAqIEBwYXJhbSB7U3dhcE9wdGlvbnN9IFtzd2FwT3B0aW9uc11cbiAgICovXG4gIGZ1bmN0aW9uIHN3YXAodGFyZ2V0LCBjb250ZW50LCBzd2FwU3BlYywgc3dhcE9wdGlvbnMpIHtcbiAgICBpZiAoIXN3YXBPcHRpb25zKSB7XG4gICAgICBzd2FwT3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGFyZ2V0ID0gcmVzb2x2ZVRhcmdldCh0YXJnZXQpXG5cbiAgICAvLyBwcmVzZXJ2ZSBmb2N1cyBhbmQgc2VsZWN0aW9uXG4gICAgY29uc3QgYWN0aXZlRWx0ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgIGxldCBzZWxlY3Rpb25JbmZvID0ge31cbiAgICB0cnkge1xuICAgICAgc2VsZWN0aW9uSW5mbyA9IHtcbiAgICAgICAgZWx0OiBhY3RpdmVFbHQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc3RhcnQ6IGFjdGl2ZUVsdCA/IGFjdGl2ZUVsdC5zZWxlY3Rpb25TdGFydCA6IG51bGwsXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZW5kOiBhY3RpdmVFbHQgPyBhY3RpdmVFbHQuc2VsZWN0aW9uRW5kIDogbnVsbFxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIHNhZmFyaSBpc3N1ZSAtIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L3BsYXl3cmlnaHQvaXNzdWVzLzU4OTRcbiAgICB9XG4gICAgY29uc3Qgc2V0dGxlSW5mbyA9IG1ha2VTZXR0bGVJbmZvKHRhcmdldClcblxuICAgIC8vIEZvciB0ZXh0IGNvbnRlbnQgc3dhcHMsIGRvbid0IHBhcnNlIHRoZSByZXNwb25zZSBhcyBIVE1MLCBqdXN0IGluc2VydCBpdFxuICAgIGlmIChzd2FwU3BlYy5zd2FwU3R5bGUgPT09ICd0ZXh0Q29udGVudCcpIHtcbiAgICAgIHRhcmdldC50ZXh0Q29udGVudCA9IGNvbnRlbnRcbiAgICAvLyBPdGhlcndpc2UsIG1ha2UgdGhlIGZyYWdtZW50IGFuZCBwcm9jZXNzIGl0XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBmcmFnbWVudCA9IG1ha2VGcmFnbWVudChjb250ZW50KVxuXG4gICAgICBzZXR0bGVJbmZvLnRpdGxlID0gZnJhZ21lbnQudGl0bGVcblxuICAgICAgLy8gc2VsZWN0LW9vYiBzd2Fwc1xuICAgICAgaWYgKHN3YXBPcHRpb25zLnNlbGVjdE9PQikge1xuICAgICAgICBjb25zdCBvb2JTZWxlY3RWYWx1ZXMgPSBzd2FwT3B0aW9ucy5zZWxlY3RPT0Iuc3BsaXQoJywnKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9vYlNlbGVjdFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IG9vYlNlbGVjdFZhbHVlID0gb29iU2VsZWN0VmFsdWVzW2ldLnNwbGl0KCc6JywgMilcbiAgICAgICAgICBsZXQgaWQgPSBvb2JTZWxlY3RWYWx1ZVswXS50cmltKClcbiAgICAgICAgICBpZiAoaWQuaW5kZXhPZignIycpID09PSAwKSB7XG4gICAgICAgICAgICBpZCA9IGlkLnN1YnN0cmluZygxKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBvb2JWYWx1ZSA9IG9vYlNlbGVjdFZhbHVlWzFdIHx8ICd0cnVlJ1xuICAgICAgICAgIGNvbnN0IG9vYkVsZW1lbnQgPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGlkKVxuICAgICAgICAgIGlmIChvb2JFbGVtZW50KSB7XG4gICAgICAgICAgICBvb2JTd2FwKG9vYlZhbHVlLCBvb2JFbGVtZW50LCBzZXR0bGVJbmZvKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gb29iIHN3YXBzXG4gICAgICBmaW5kQW5kU3dhcE9vYkVsZW1lbnRzKGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICAgICAgZm9yRWFjaChmaW5kQWxsKGZyYWdtZW50LCAndGVtcGxhdGUnKSwgLyoqIEBwYXJhbSB7SFRNTFRlbXBsYXRlRWxlbWVudH0gdGVtcGxhdGUgKi9mdW5jdGlvbih0ZW1wbGF0ZSkge1xuICAgICAgICBpZiAoZmluZEFuZFN3YXBPb2JFbGVtZW50cyh0ZW1wbGF0ZS5jb250ZW50LCBzZXR0bGVJbmZvKSkge1xuICAgICAgICAgIC8vIEF2b2lkIHBvbGx1dGluZyB0aGUgRE9NIHdpdGggZW1wdHkgdGVtcGxhdGVzIHRoYXQgd2VyZSBvbmx5IHVzZWQgdG8gZW5jYXBzdWxhdGUgb29iIHN3YXBcbiAgICAgICAgICB0ZW1wbGF0ZS5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyBub3JtYWwgc3dhcFxuICAgICAgaWYgKHN3YXBPcHRpb25zLnNlbGVjdCkge1xuICAgICAgICBjb25zdCBuZXdGcmFnbWVudCA9IGdldERvY3VtZW50KCkuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgICAgIGZvckVhY2goZnJhZ21lbnQucXVlcnlTZWxlY3RvckFsbChzd2FwT3B0aW9ucy5zZWxlY3QpLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgbmV3RnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZSlcbiAgICAgICAgfSlcbiAgICAgICAgZnJhZ21lbnQgPSBuZXdGcmFnbWVudFxuICAgICAgfVxuICAgICAgaGFuZGxlUHJlc2VydmVkRWxlbWVudHMoZnJhZ21lbnQpXG4gICAgICBzd2FwV2l0aFN0eWxlKHN3YXBTcGVjLnN3YXBTdHlsZSwgc3dhcE9wdGlvbnMuY29udGV4dEVsZW1lbnQsIHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gICAgfVxuXG4gICAgLy8gYXBwbHkgc2F2ZWQgZm9jdXMgYW5kIHNlbGVjdGlvbiBpbmZvcm1hdGlvbiB0byBzd2FwcGVkIGNvbnRlbnRcbiAgICBpZiAoc2VsZWN0aW9uSW5mby5lbHQgJiZcbiAgICAgICFib2R5Q29udGFpbnMoc2VsZWN0aW9uSW5mby5lbHQpICYmXG4gICAgICBnZXRSYXdBdHRyaWJ1dGUoc2VsZWN0aW9uSW5mby5lbHQsICdpZCcpKSB7XG4gICAgICBjb25zdCBuZXdBY3RpdmVFbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnZXRSYXdBdHRyaWJ1dGUoc2VsZWN0aW9uSW5mby5lbHQsICdpZCcpKVxuICAgICAgY29uc3QgZm9jdXNPcHRpb25zID0geyBwcmV2ZW50U2Nyb2xsOiBzd2FwU3BlYy5mb2N1c1Njcm9sbCAhPT0gdW5kZWZpbmVkID8gIXN3YXBTcGVjLmZvY3VzU2Nyb2xsIDogIWh0bXguY29uZmlnLmRlZmF1bHRGb2N1c1Njcm9sbCB9XG4gICAgICBpZiAobmV3QWN0aXZlRWx0KSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKHNlbGVjdGlvbkluZm8uc3RhcnQgJiYgbmV3QWN0aXZlRWx0LnNldFNlbGVjdGlvblJhbmdlKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG5ld0FjdGl2ZUVsdC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25JbmZvLnN0YXJ0LCBzZWxlY3Rpb25JbmZvLmVuZClcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyB0aGUgc2V0U2VsZWN0aW9uUmFuZ2UgbWV0aG9kIGlzIHByZXNlbnQgb24gZmllbGRzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBpdCwgc28ganVzdCBsZXQgdGhpcyBmYWlsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG5ld0FjdGl2ZUVsdC5mb2N1cyhmb2N1c09wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoaHRteC5jb25maWcuc3dhcHBpbmdDbGFzcylcbiAgICBmb3JFYWNoKHNldHRsZUluZm8uZWx0cywgZnVuY3Rpb24oZWx0KSB7XG4gICAgICBpZiAoZWx0LmNsYXNzTGlzdCkge1xuICAgICAgICBlbHQuY2xhc3NMaXN0LmFkZChodG14LmNvbmZpZy5zZXR0bGluZ0NsYXNzKVxuICAgICAgfVxuICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6YWZ0ZXJTd2FwJywgc3dhcE9wdGlvbnMuZXZlbnRJbmZvKVxuICAgIH0pXG4gICAgaWYgKHN3YXBPcHRpb25zLmFmdGVyU3dhcENhbGxiYWNrKSB7XG4gICAgICBzd2FwT3B0aW9ucy5hZnRlclN3YXBDYWxsYmFjaygpXG4gICAgfVxuXG4gICAgLy8gbWVyZ2UgaW4gbmV3IHRpdGxlIGFmdGVyIHN3YXAgYnV0IGJlZm9yZSBzZXR0bGVcbiAgICBpZiAoIXN3YXBTcGVjLmlnbm9yZVRpdGxlKSB7XG4gICAgICBoYW5kbGVUaXRsZShzZXR0bGVJbmZvLnRpdGxlKVxuICAgIH1cblxuICAgIC8vIHNldHRsZVxuICAgIGNvbnN0IGRvU2V0dGxlID0gZnVuY3Rpb24oKSB7XG4gICAgICBmb3JFYWNoKHNldHRsZUluZm8udGFza3MsIGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgdGFzay5jYWxsKClcbiAgICAgIH0pXG4gICAgICBmb3JFYWNoKHNldHRsZUluZm8uZWx0cywgZnVuY3Rpb24oZWx0KSB7XG4gICAgICAgIGlmIChlbHQuY2xhc3NMaXN0KSB7XG4gICAgICAgICAgZWx0LmNsYXNzTGlzdC5yZW1vdmUoaHRteC5jb25maWcuc2V0dGxpbmdDbGFzcylcbiAgICAgICAgfVxuICAgICAgICB0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDphZnRlclNldHRsZScsIHN3YXBPcHRpb25zLmV2ZW50SW5mbylcbiAgICAgIH0pXG5cbiAgICAgIGlmIChzd2FwT3B0aW9ucy5hbmNob3IpIHtcbiAgICAgICAgY29uc3QgYW5jaG9yVGFyZ2V0ID0gYXNFbGVtZW50KHJlc29sdmVUYXJnZXQoJyMnICsgc3dhcE9wdGlvbnMuYW5jaG9yKSlcbiAgICAgICAgaWYgKGFuY2hvclRhcmdldCkge1xuICAgICAgICAgIGFuY2hvclRhcmdldC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnc3RhcnQnLCBiZWhhdmlvcjogJ2F1dG8nIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdXBkYXRlU2Nyb2xsU3RhdGUoc2V0dGxlSW5mby5lbHRzLCBzd2FwU3BlYylcbiAgICAgIGlmIChzd2FwT3B0aW9ucy5hZnRlclNldHRsZUNhbGxiYWNrKSB7XG4gICAgICAgIHN3YXBPcHRpb25zLmFmdGVyU2V0dGxlQ2FsbGJhY2soKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzd2FwU3BlYy5zZXR0bGVEZWxheSA+IDApIHtcbiAgICAgIGdldFdpbmRvdygpLnNldFRpbWVvdXQoZG9TZXR0bGUsIHN3YXBTcGVjLnNldHRsZURlbGF5KVxuICAgIH0gZWxzZSB7XG4gICAgICBkb1NldHRsZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGVhZGVyXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGVsdFxuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlVHJpZ2dlckhlYWRlcih4aHIsIGhlYWRlciwgZWx0KSB7XG4gICAgY29uc3QgdHJpZ2dlckJvZHkgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoaGVhZGVyKVxuICAgIGlmICh0cmlnZ2VyQm9keS5pbmRleE9mKCd7JykgPT09IDApIHtcbiAgICAgIGNvbnN0IHRyaWdnZXJzID0gcGFyc2VKU09OKHRyaWdnZXJCb2R5KVxuICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgaW4gdHJpZ2dlcnMpIHtcbiAgICAgICAgaWYgKHRyaWdnZXJzLmhhc093blByb3BlcnR5KGV2ZW50TmFtZSkpIHtcbiAgICAgICAgICBsZXQgZGV0YWlsID0gdHJpZ2dlcnNbZXZlbnROYW1lXVxuICAgICAgICAgIGlmIChpc1Jhd09iamVjdChkZXRhaWwpKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBlbHQgPSBkZXRhaWwudGFyZ2V0ICE9PSB1bmRlZmluZWQgPyBkZXRhaWwudGFyZ2V0IDogZWx0XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRldGFpbCA9IHsgdmFsdWU6IGRldGFpbCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRyaWdnZXJFdmVudChlbHQsIGV2ZW50TmFtZSwgZGV0YWlsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGV2ZW50TmFtZXMgPSB0cmlnZ2VyQm9keS5zcGxpdCgnLCcpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgZXZlbnROYW1lc1tpXS50cmltKCksIFtdKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IFdISVRFU1BBQ0UgPSAvXFxzL1xuICBjb25zdCBXSElURVNQQUNFX09SX0NPTU1BID0gL1tcXHMsXS9cbiAgY29uc3QgU1lNQk9MX1NUQVJUID0gL1tfJGEtekEtWl0vXG4gIGNvbnN0IFNZTUJPTF9DT05UID0gL1tfJGEtekEtWjAtOV0vXG4gIGNvbnN0IFNUUklOR0lTSF9TVEFSVCA9IFsnXCInLCBcIidcIiwgJy8nXVxuICBjb25zdCBOT1RfV0hJVEVTUEFDRSA9IC9bXlxcc10vXG4gIGNvbnN0IENPTUJJTkVEX1NFTEVDVE9SX1NUQVJUID0gL1t7KF0vXG4gIGNvbnN0IENPTUJJTkVEX1NFTEVDVE9SX0VORCA9IC9bfSldL1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICovXG4gIGZ1bmN0aW9uIHRva2VuaXplU3RyaW5nKHN0cikge1xuICAgIC8qKiBAdHlwZSBzdHJpbmdbXSAqL1xuICAgIGNvbnN0IHRva2VucyA9IFtdXG4gICAgbGV0IHBvc2l0aW9uID0gMFxuICAgIHdoaWxlIChwb3NpdGlvbiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgIGlmIChTWU1CT0xfU1RBUlQuZXhlYyhzdHIuY2hhckF0KHBvc2l0aW9uKSkpIHtcbiAgICAgICAgdmFyIHN0YXJ0UG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICB3aGlsZSAoU1lNQk9MX0NPTlQuZXhlYyhzdHIuY2hhckF0KHBvc2l0aW9uICsgMSkpKSB7XG4gICAgICAgICAgcG9zaXRpb24rK1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHN0ci5zdWJzdHIoc3RhcnRQb3NpdGlvbiwgcG9zaXRpb24gLSBzdGFydFBvc2l0aW9uICsgMSkpXG4gICAgICB9IGVsc2UgaWYgKFNUUklOR0lTSF9TVEFSVC5pbmRleE9mKHN0ci5jaGFyQXQocG9zaXRpb24pKSAhPT0gLTEpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRDaGFyID0gc3RyLmNoYXJBdChwb3NpdGlvbilcbiAgICAgICAgdmFyIHN0YXJ0UG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICBwb3NpdGlvbisrXG4gICAgICAgIHdoaWxlIChwb3NpdGlvbiA8IHN0ci5sZW5ndGggJiYgc3RyLmNoYXJBdChwb3NpdGlvbikgIT09IHN0YXJ0Q2hhcikge1xuICAgICAgICAgIGlmIChzdHIuY2hhckF0KHBvc2l0aW9uKSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICBwb3NpdGlvbisrXG4gICAgICAgICAgfVxuICAgICAgICAgIHBvc2l0aW9uKytcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaChzdHIuc3Vic3RyKHN0YXJ0UG9zaXRpb24sIHBvc2l0aW9uIC0gc3RhcnRQb3NpdGlvbiArIDEpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3ltYm9sID0gc3RyLmNoYXJBdChwb3NpdGlvbilcbiAgICAgICAgdG9rZW5zLnB1c2goc3ltYm9sKVxuICAgICAgfVxuICAgICAgcG9zaXRpb24rK1xuICAgIH1cbiAgICByZXR1cm4gdG9rZW5zXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRva2VuXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IGxhc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtTmFtZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzUG9zc2libGVSZWxhdGl2ZVJlZmVyZW5jZSh0b2tlbiwgbGFzdCwgcGFyYW1OYW1lKSB7XG4gICAgcmV0dXJuIFNZTUJPTF9TVEFSVC5leGVjKHRva2VuLmNoYXJBdCgwKSkgJiZcbiAgICAgIHRva2VuICE9PSAndHJ1ZScgJiZcbiAgICAgIHRva2VuICE9PSAnZmFsc2UnICYmXG4gICAgICB0b2tlbiAhPT0gJ3RoaXMnICYmXG4gICAgICB0b2tlbiAhPT0gcGFyYW1OYW1lICYmXG4gICAgICBsYXN0ICE9PSAnLidcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fHN0cmluZ30gZWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRva2Vuc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1OYW1lXG4gICAqIEByZXR1cm5zIHtDb25kaXRpb25hbEZ1bmN0aW9ufG51bGx9XG4gICAqL1xuICBmdW5jdGlvbiBtYXliZUdlbmVyYXRlQ29uZGl0aW9uYWwoZWx0LCB0b2tlbnMsIHBhcmFtTmFtZSkge1xuICAgIGlmICh0b2tlbnNbMF0gPT09ICdbJykge1xuICAgICAgdG9rZW5zLnNoaWZ0KClcbiAgICAgIGxldCBicmFja2V0Q291bnQgPSAxXG4gICAgICBsZXQgY29uZGl0aW9uYWxTb3VyY2UgPSAnIHJldHVybiAoZnVuY3Rpb24oJyArIHBhcmFtTmFtZSArICcpeyByZXR1cm4gKCdcbiAgICAgIGxldCBsYXN0ID0gbnVsbFxuICAgICAgd2hpbGUgKHRva2Vucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zWzBdXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgRm9yIHNvbWUgcmVhc29uIHRzYyBkb2Vzbid0IHVuZGVyc3RhbmQgdGhlIHNoaWZ0IGNhbGwsIGFuZCB0aGlua3Mgd2UncmUgY29tcGFyaW5nIHRoZSBzYW1lIHZhbHVlIGhlcmUsIGkuZS4gJ1snIHZzICddJ1xuICAgICAgICBpZiAodG9rZW4gPT09ICddJykge1xuICAgICAgICAgIGJyYWNrZXRDb3VudC0tXG4gICAgICAgICAgaWYgKGJyYWNrZXRDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGxhc3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9uYWxTb3VyY2UgPSBjb25kaXRpb25hbFNvdXJjZSArICd0cnVlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9rZW5zLnNoaWZ0KClcbiAgICAgICAgICAgIGNvbmRpdGlvbmFsU291cmNlICs9ICcpfSknXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCBjb25kaXRpb25GdW5jdGlvbiA9IG1heWJlRXZhbChlbHQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBGdW5jdGlvbihjb25kaXRpb25hbFNvdXJjZSkoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWUgfSlcbiAgICAgICAgICAgICAgY29uZGl0aW9uRnVuY3Rpb24uc291cmNlID0gY29uZGl0aW9uYWxTb3VyY2VcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbmRpdGlvbkZ1bmN0aW9uXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHRyaWdnZXJFcnJvckV2ZW50KGdldERvY3VtZW50KCkuYm9keSwgJ2h0bXg6c3ludGF4OmVycm9yJywgeyBlcnJvcjogZSwgc291cmNlOiBjb25kaXRpb25hbFNvdXJjZSB9KVxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1snKSB7XG4gICAgICAgICAgYnJhY2tldENvdW50KytcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQb3NzaWJsZVJlbGF0aXZlUmVmZXJlbmNlKHRva2VuLCBsYXN0LCBwYXJhbU5hbWUpKSB7XG4gICAgICAgICAgY29uZGl0aW9uYWxTb3VyY2UgKz0gJygoJyArIHBhcmFtTmFtZSArICcuJyArIHRva2VuICsgJykgPyAoJyArIHBhcmFtTmFtZSArICcuJyArIHRva2VuICsgJykgOiAod2luZG93LicgKyB0b2tlbiArICcpKSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25kaXRpb25hbFNvdXJjZSA9IGNvbmRpdGlvbmFsU291cmNlICsgdG9rZW5cbiAgICAgICAgfVxuICAgICAgICBsYXN0ID0gdG9rZW5zLnNoaWZ0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdG9rZW5zXG4gICAqIEBwYXJhbSB7UmVnRXhwfSBtYXRjaFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gY29uc3VtZVVudGlsKHRva2VucywgbWF0Y2gpIHtcbiAgICBsZXQgcmVzdWx0ID0gJydcbiAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCA+IDAgJiYgIW1hdGNoLnRlc3QodG9rZW5zWzBdKSkge1xuICAgICAgcmVzdWx0ICs9IHRva2Vucy5zaGlmdCgpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0b2tlbnNcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGNvbnN1bWVDU1NTZWxlY3Rvcih0b2tlbnMpIHtcbiAgICBsZXQgcmVzdWx0XG4gICAgaWYgKHRva2Vucy5sZW5ndGggPiAwICYmIENPTUJJTkVEX1NFTEVDVE9SX1NUQVJULnRlc3QodG9rZW5zWzBdKSkge1xuICAgICAgdG9rZW5zLnNoaWZ0KClcbiAgICAgIHJlc3VsdCA9IGNvbnN1bWVVbnRpbCh0b2tlbnMsIENPTUJJTkVEX1NFTEVDVE9SX0VORCkudHJpbSgpXG4gICAgICB0b2tlbnMuc2hpZnQoKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBjb25zdW1lVW50aWwodG9rZW5zLCBXSElURVNQQUNFX09SX0NPTU1BKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBjb25zdCBJTlBVVF9TRUxFQ1RPUiA9ICdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCdcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cGxpY2l0VHJpZ2dlclxuICAgKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgZm9yIHRyaWdnZXIgc3BlY3NcbiAgICogQHJldHVybnMge0h0bXhUcmlnZ2VyU3BlY2lmaWNhdGlvbltdfVxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VBbmRDYWNoZVRyaWdnZXIoZWx0LCBleHBsaWNpdFRyaWdnZXIsIGNhY2hlKSB7XG4gICAgLyoqIEB0eXBlIEh0bXhUcmlnZ2VyU3BlY2lmaWNhdGlvbltdICovXG4gICAgY29uc3QgdHJpZ2dlclNwZWNzID0gW11cbiAgICBjb25zdCB0b2tlbnMgPSB0b2tlbml6ZVN0cmluZyhleHBsaWNpdFRyaWdnZXIpXG4gICAgZG8ge1xuICAgICAgY29uc3VtZVVudGlsKHRva2VucywgTk9UX1dISVRFU1BBQ0UpXG4gICAgICBjb25zdCBpbml0aWFsTGVuZ3RoID0gdG9rZW5zLmxlbmd0aFxuICAgICAgY29uc3QgdHJpZ2dlciA9IGNvbnN1bWVVbnRpbCh0b2tlbnMsIC9bLFxcW1xcc10vKVxuICAgICAgaWYgKHRyaWdnZXIgIT09ICcnKSB7XG4gICAgICAgIGlmICh0cmlnZ2VyID09PSAnZXZlcnknKSB7XG4gICAgICAgICAgLyoqIEB0eXBlIEh0bXhUcmlnZ2VyU3BlY2lmaWNhdGlvbiAqL1xuICAgICAgICAgIGNvbnN0IGV2ZXJ5ID0geyB0cmlnZ2VyOiAnZXZlcnknIH1cbiAgICAgICAgICBjb25zdW1lVW50aWwodG9rZW5zLCBOT1RfV0hJVEVTUEFDRSlcbiAgICAgICAgICBldmVyeS5wb2xsSW50ZXJ2YWwgPSBwYXJzZUludGVydmFsKGNvbnN1bWVVbnRpbCh0b2tlbnMsIC9bLFxcW1xcc10vKSlcbiAgICAgICAgICBjb25zdW1lVW50aWwodG9rZW5zLCBOT1RfV0hJVEVTUEFDRSlcbiAgICAgICAgICB2YXIgZXZlbnRGaWx0ZXIgPSBtYXliZUdlbmVyYXRlQ29uZGl0aW9uYWwoZWx0LCB0b2tlbnMsICdldmVudCcpXG4gICAgICAgICAgaWYgKGV2ZW50RmlsdGVyKSB7XG4gICAgICAgICAgICBldmVyeS5ldmVudEZpbHRlciA9IGV2ZW50RmlsdGVyXG4gICAgICAgICAgfVxuICAgICAgICAgIHRyaWdnZXJTcGVjcy5wdXNoKGV2ZXJ5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKiBAdHlwZSBIdG14VHJpZ2dlclNwZWNpZmljYXRpb24gKi9cbiAgICAgICAgICBjb25zdCB0cmlnZ2VyU3BlYyA9IHsgdHJpZ2dlciB9XG4gICAgICAgICAgdmFyIGV2ZW50RmlsdGVyID0gbWF5YmVHZW5lcmF0ZUNvbmRpdGlvbmFsKGVsdCwgdG9rZW5zLCAnZXZlbnQnKVxuICAgICAgICAgIGlmIChldmVudEZpbHRlcikge1xuICAgICAgICAgICAgdHJpZ2dlclNwZWMuZXZlbnRGaWx0ZXIgPSBldmVudEZpbHRlclxuICAgICAgICAgIH1cbiAgICAgICAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCA+IDAgJiYgdG9rZW5zWzBdICE9PSAnLCcpIHtcbiAgICAgICAgICAgIGNvbnN1bWVVbnRpbCh0b2tlbnMsIE5PVF9XSElURVNQQUNFKVxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnMuc2hpZnQoKVxuICAgICAgICAgICAgaWYgKHRva2VuID09PSAnY2hhbmdlZCcpIHtcbiAgICAgICAgICAgICAgdHJpZ2dlclNwZWMuY2hhbmdlZCA9IHRydWVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICdvbmNlJykge1xuICAgICAgICAgICAgICB0cmlnZ2VyU3BlYy5vbmNlID0gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ2NvbnN1bWUnKSB7XG4gICAgICAgICAgICAgIHRyaWdnZXJTcGVjLmNvbnN1bWUgPSB0cnVlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnZGVsYXknICYmIHRva2Vuc1swXSA9PT0gJzonKSB7XG4gICAgICAgICAgICAgIHRva2Vucy5zaGlmdCgpXG4gICAgICAgICAgICAgIHRyaWdnZXJTcGVjLmRlbGF5ID0gcGFyc2VJbnRlcnZhbChjb25zdW1lVW50aWwodG9rZW5zLCBXSElURVNQQUNFX09SX0NPTU1BKSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICdmcm9tJyAmJiB0b2tlbnNbMF0gPT09ICc6Jykge1xuICAgICAgICAgICAgICB0b2tlbnMuc2hpZnQoKVxuICAgICAgICAgICAgICBpZiAoQ09NQklORURfU0VMRUNUT1JfU1RBUlQudGVzdCh0b2tlbnNbMF0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZyb21fYXJnID0gY29uc3VtZUNTU1NlbGVjdG9yKHRva2VucylcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJvbV9hcmcgPSBjb25zdW1lVW50aWwodG9rZW5zLCBXSElURVNQQUNFX09SX0NPTU1BKVxuICAgICAgICAgICAgICAgIGlmIChmcm9tX2FyZyA9PT0gJ2Nsb3Nlc3QnIHx8IGZyb21fYXJnID09PSAnZmluZCcgfHwgZnJvbV9hcmcgPT09ICduZXh0JyB8fCBmcm9tX2FyZyA9PT0gJ3ByZXZpb3VzJykge1xuICAgICAgICAgICAgICAgICAgdG9rZW5zLnNoaWZ0KClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gY29uc3VtZUNTU1NlbGVjdG9yKHRva2VucylcbiAgICAgICAgICAgICAgICAgIC8vIGBuZXh0YCBhbmQgYHByZXZpb3VzYCBhbGxvdyBhIHNlbGVjdG9yLWxlc3Mgc3ludGF4XG4gICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tX2FyZyArPSAnICcgKyBzZWxlY3RvclxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0cmlnZ2VyU3BlYy5mcm9tID0gZnJvbV9hcmdcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICd0YXJnZXQnICYmIHRva2Vuc1swXSA9PT0gJzonKSB7XG4gICAgICAgICAgICAgIHRva2Vucy5zaGlmdCgpXG4gICAgICAgICAgICAgIHRyaWdnZXJTcGVjLnRhcmdldCA9IGNvbnN1bWVDU1NTZWxlY3Rvcih0b2tlbnMpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRva2VuID09PSAndGhyb3R0bGUnICYmIHRva2Vuc1swXSA9PT0gJzonKSB7XG4gICAgICAgICAgICAgIHRva2Vucy5zaGlmdCgpXG4gICAgICAgICAgICAgIHRyaWdnZXJTcGVjLnRocm90dGxlID0gcGFyc2VJbnRlcnZhbChjb25zdW1lVW50aWwodG9rZW5zLCBXSElURVNQQUNFX09SX0NPTU1BKSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICdxdWV1ZScgJiYgdG9rZW5zWzBdID09PSAnOicpIHtcbiAgICAgICAgICAgICAgdG9rZW5zLnNoaWZ0KClcbiAgICAgICAgICAgICAgdHJpZ2dlclNwZWMucXVldWUgPSBjb25zdW1lVW50aWwodG9rZW5zLCBXSElURVNQQUNFX09SX0NPTU1BKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ3Jvb3QnICYmIHRva2Vuc1swXSA9PT0gJzonKSB7XG4gICAgICAgICAgICAgIHRva2Vucy5zaGlmdCgpXG4gICAgICAgICAgICAgIHRyaWdnZXJTcGVjW3Rva2VuXSA9IGNvbnN1bWVDU1NTZWxlY3Rvcih0b2tlbnMpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRva2VuID09PSAndGhyZXNob2xkJyAmJiB0b2tlbnNbMF0gPT09ICc6Jykge1xuICAgICAgICAgICAgICB0b2tlbnMuc2hpZnQoKVxuICAgICAgICAgICAgICB0cmlnZ2VyU3BlY1t0b2tlbl0gPSBjb25zdW1lVW50aWwodG9rZW5zLCBXSElURVNQQUNFX09SX0NPTU1BKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZWx0LCAnaHRteDpzeW50YXg6ZXJyb3InLCB7IHRva2VuOiB0b2tlbnMuc2hpZnQoKSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0cmlnZ2VyU3BlY3MucHVzaCh0cmlnZ2VyU3BlYylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRva2Vucy5sZW5ndGggPT09IGluaXRpYWxMZW5ndGgpIHtcbiAgICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZWx0LCAnaHRteDpzeW50YXg6ZXJyb3InLCB7IHRva2VuOiB0b2tlbnMuc2hpZnQoKSB9KVxuICAgICAgfVxuICAgICAgY29uc3VtZVVudGlsKHRva2VucywgTk9UX1dISVRFU1BBQ0UpXG4gICAgfSB3aGlsZSAodG9rZW5zWzBdID09PSAnLCcgJiYgdG9rZW5zLnNoaWZ0KCkpXG4gICAgaWYgKGNhY2hlKSB7XG4gICAgICBjYWNoZVtleHBsaWNpdFRyaWdnZXJdID0gdHJpZ2dlclNwZWNzXG4gICAgfVxuICAgIHJldHVybiB0cmlnZ2VyU3BlY3NcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcmV0dXJucyB7SHRteFRyaWdnZXJTcGVjaWZpY2F0aW9uW119XG4gICAqL1xuICBmdW5jdGlvbiBnZXRUcmlnZ2VyU3BlY3MoZWx0KSB7XG4gICAgY29uc3QgZXhwbGljaXRUcmlnZ2VyID0gZ2V0QXR0cmlidXRlVmFsdWUoZWx0LCAnaHgtdHJpZ2dlcicpXG4gICAgbGV0IHRyaWdnZXJTcGVjcyA9IFtdXG4gICAgaWYgKGV4cGxpY2l0VHJpZ2dlcikge1xuICAgICAgY29uc3QgY2FjaGUgPSBodG14LmNvbmZpZy50cmlnZ2VyU3BlY3NDYWNoZVxuICAgICAgdHJpZ2dlclNwZWNzID0gKGNhY2hlICYmIGNhY2hlW2V4cGxpY2l0VHJpZ2dlcl0pIHx8IHBhcnNlQW5kQ2FjaGVUcmlnZ2VyKGVsdCwgZXhwbGljaXRUcmlnZ2VyLCBjYWNoZSlcbiAgICB9XG5cbiAgICBpZiAodHJpZ2dlclNwZWNzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0cmlnZ2VyU3BlY3NcbiAgICB9IGVsc2UgaWYgKG1hdGNoZXMoZWx0LCAnZm9ybScpKSB7XG4gICAgICByZXR1cm4gW3sgdHJpZ2dlcjogJ3N1Ym1pdCcgfV1cbiAgICB9IGVsc2UgaWYgKG1hdGNoZXMoZWx0LCAnaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpKSB7XG4gICAgICByZXR1cm4gW3sgdHJpZ2dlcjogJ2NsaWNrJyB9XVxuICAgIH0gZWxzZSBpZiAobWF0Y2hlcyhlbHQsIElOUFVUX1NFTEVDVE9SKSkge1xuICAgICAgcmV0dXJuIFt7IHRyaWdnZXI6ICdjaGFuZ2UnIH1dXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbeyB0cmlnZ2VyOiAnY2xpY2snIH1dXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqL1xuICBmdW5jdGlvbiBjYW5jZWxQb2xsaW5nKGVsdCkge1xuICAgIGdldEludGVybmFsRGF0YShlbHQpLmNhbmNlbGxlZCA9IHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcGFyYW0ge1RyaWdnZXJIYW5kbGVyfSBoYW5kbGVyXG4gICAqIEBwYXJhbSB7SHRteFRyaWdnZXJTcGVjaWZpY2F0aW9ufSBzcGVjXG4gICAqL1xuICBmdW5jdGlvbiBwcm9jZXNzUG9sbGluZyhlbHQsIGhhbmRsZXIsIHNwZWMpIHtcbiAgICBjb25zdCBub2RlRGF0YSA9IGdldEludGVybmFsRGF0YShlbHQpXG4gICAgbm9kZURhdGEudGltZW91dCA9IGdldFdpbmRvdygpLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoYm9keUNvbnRhaW5zKGVsdCkgJiYgbm9kZURhdGEuY2FuY2VsbGVkICE9PSB0cnVlKSB7XG4gICAgICAgIGlmICghbWF5YmVGaWx0ZXJFdmVudChzcGVjLCBlbHQsIG1ha2VFdmVudCgnaHg6cG9sbDp0cmlnZ2VyJywge1xuICAgICAgICAgIHRyaWdnZXJTcGVjOiBzcGVjLFxuICAgICAgICAgIHRhcmdldDogZWx0XG4gICAgICAgIH0pKSkge1xuICAgICAgICAgIGhhbmRsZXIoZWx0KVxuICAgICAgICB9XG4gICAgICAgIHByb2Nlc3NQb2xsaW5nKGVsdCwgaGFuZGxlciwgc3BlYylcbiAgICAgIH1cbiAgICB9LCBzcGVjLnBvbGxJbnRlcnZhbClcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxBbmNob3JFbGVtZW50fSBlbHRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc0xvY2FsTGluayhlbHQpIHtcbiAgICByZXR1cm4gbG9jYXRpb24uaG9zdG5hbWUgPT09IGVsdC5ob3N0bmFtZSAmJlxuICAgICAgZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ2hyZWYnKSAmJlxuICAgICAgZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ2hyZWYnKS5pbmRleE9mKCcjJykgIT09IDBcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKi9cbiAgZnVuY3Rpb24gZWx0SXNEaXNhYmxlZChlbHQpIHtcbiAgICByZXR1cm4gY2xvc2VzdChlbHQsIGh0bXguY29uZmlnLmRpc2FibGVTZWxlY3RvcilcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcGFyYW0ge0h0bXhOb2RlSW50ZXJuYWxEYXRhfSBub2RlRGF0YVxuICAgKiBAcGFyYW0ge0h0bXhUcmlnZ2VyU3BlY2lmaWNhdGlvbltdfSB0cmlnZ2VyU3BlY3NcbiAgICovXG4gIGZ1bmN0aW9uIGJvb3N0RWxlbWVudChlbHQsIG5vZGVEYXRhLCB0cmlnZ2VyU3BlY3MpIHtcbiAgICBpZiAoKGVsdCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50ICYmIGlzTG9jYWxMaW5rKGVsdCkgJiYgKGVsdC50YXJnZXQgPT09ICcnIHx8IGVsdC50YXJnZXQgPT09ICdfc2VsZicpKSB8fCAoZWx0LnRhZ05hbWUgPT09ICdGT1JNJyAmJiBTdHJpbmcoZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ21ldGhvZCcpKS50b0xvd2VyQ2FzZSgpICE9PSAnZGlhbG9nJykpIHtcbiAgICAgIG5vZGVEYXRhLmJvb3N0ZWQgPSB0cnVlXG4gICAgICBsZXQgdmVyYiwgcGF0aFxuICAgICAgaWYgKGVsdC50YWdOYW1lID09PSAnQScpIHtcbiAgICAgICAgdmVyYiA9ICdnZXQnXG4gICAgICAgIHBhdGggPSBnZXRSYXdBdHRyaWJ1dGUoZWx0LCAnaHJlZicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByYXdBdHRyaWJ1dGUgPSBnZXRSYXdBdHRyaWJ1dGUoZWx0LCAnbWV0aG9kJylcbiAgICAgICAgdmVyYiA9IHJhd0F0dHJpYnV0ZSA/IHJhd0F0dHJpYnV0ZS50b0xvd2VyQ2FzZSgpIDogJ2dldCdcbiAgICAgICAgaWYgKHZlcmIgPT09ICdnZXQnKSB7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aCA9IGdldFJhd0F0dHJpYnV0ZShlbHQsICdhY3Rpb24nKVxuICAgICAgfVxuICAgICAgdHJpZ2dlclNwZWNzLmZvckVhY2goZnVuY3Rpb24odHJpZ2dlclNwZWMpIHtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihlbHQsIGZ1bmN0aW9uKG5vZGUsIGV2dCkge1xuICAgICAgICAgIGNvbnN0IGVsdCA9IGFzRWxlbWVudChub2RlKVxuICAgICAgICAgIGlmIChlbHRJc0Rpc2FibGVkKGVsdCkpIHtcbiAgICAgICAgICAgIGNsZWFuVXBFbGVtZW50KGVsdClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpc3N1ZUFqYXhSZXF1ZXN0KHZlcmIsIHBhdGgsIGVsdCwgZXZ0KVxuICAgICAgICB9LCBub2RlRGF0YSwgdHJpZ2dlclNwZWMsIHRydWUpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gc2hvdWxkQ2FuY2VsKGV2dCwgbm9kZSkge1xuICAgIGNvbnN0IGVsdCA9IGFzRWxlbWVudChub2RlKVxuICAgIGlmICghZWx0KSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYgKGV2dC50eXBlID09PSAnc3VibWl0JyB8fCBldnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgaWYgKGVsdC50YWdOYW1lID09PSAnRk9STScpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIGlmIChtYXRjaGVzKGVsdCwgJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0sIGJ1dHRvbicpICYmIGNsb3Nlc3QoZWx0LCAnZm9ybScpICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICBpZiAoZWx0IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQgJiYgZWx0LmhyZWYgJiZcbiAgICAgICAgKGVsdC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA9PT0gJyMnIHx8IGVsdC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5pbmRleE9mKCcjJykgIT09IDApKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWx0XG4gICAqIEBwYXJhbSB7RXZlbnR8TW91c2VFdmVudHxLZXlib2FyZEV2ZW50fFRvdWNoRXZlbnR9IGV2dFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlnbm9yZUJvb3N0ZWRBbmNob3JDdHJsQ2xpY2soZWx0LCBldnQpIHtcbiAgICByZXR1cm4gZ2V0SW50ZXJuYWxEYXRhKGVsdCkuYm9vc3RlZCAmJiBlbHQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCAmJiBldnQudHlwZSA9PT0gJ2NsaWNrJyAmJlxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIHdpbGwgcmVzb2x2ZSB0byB1bmRlZmluZWQgZm9yIGV2ZW50cyB0aGF0IGRvbid0IGRlZmluZSB0aG9zZSBwcm9wZXJ0aWVzLCB3aGljaCBpcyBmaW5lXG4gICAgICAoZXZ0LmN0cmxLZXkgfHwgZXZ0Lm1ldGFLZXkpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtIdG14VHJpZ2dlclNwZWNpZmljYXRpb259IHRyaWdnZXJTcGVjXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWx0XG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIG1heWJlRmlsdGVyRXZlbnQodHJpZ2dlclNwZWMsIGVsdCwgZXZ0KSB7XG4gICAgY29uc3QgZXZlbnRGaWx0ZXIgPSB0cmlnZ2VyU3BlYy5ldmVudEZpbHRlclxuICAgIGlmIChldmVudEZpbHRlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGV2ZW50RmlsdGVyLmNhbGwoZWx0LCBldnQpICE9PSB0cnVlXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IGV2ZW50RmlsdGVyLnNvdXJjZVxuICAgICAgICB0cmlnZ2VyRXJyb3JFdmVudChnZXREb2N1bWVudCgpLmJvZHksICdodG14OmV2ZW50RmlsdGVyOmVycm9yJywgeyBlcnJvcjogZSwgc291cmNlIH0pXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWx0XG4gICAqIEBwYXJhbSB7VHJpZ2dlckhhbmRsZXJ9IGhhbmRsZXJcbiAgICogQHBhcmFtIHtIdG14Tm9kZUludGVybmFsRGF0YX0gbm9kZURhdGFcbiAgICogQHBhcmFtIHtIdG14VHJpZ2dlclNwZWNpZmljYXRpb259IHRyaWdnZXJTcGVjXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V4cGxpY2l0Q2FuY2VsXVxuICAgKi9cbiAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbHQsIGhhbmRsZXIsIG5vZGVEYXRhLCB0cmlnZ2VyU3BlYywgZXhwbGljaXRDYW5jZWwpIHtcbiAgICBjb25zdCBlbGVtZW50RGF0YSA9IGdldEludGVybmFsRGF0YShlbHQpXG4gICAgLyoqIEB0eXBlIHsoTm9kZXxXaW5kb3cpW119ICovXG4gICAgbGV0IGVsdHNUb0xpc3Rlbk9uXG4gICAgaWYgKHRyaWdnZXJTcGVjLmZyb20pIHtcbiAgICAgIGVsdHNUb0xpc3Rlbk9uID0gcXVlcnlTZWxlY3RvckFsbEV4dChlbHQsIHRyaWdnZXJTcGVjLmZyb20pXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsdHNUb0xpc3Rlbk9uID0gW2VsdF1cbiAgICB9XG4gICAgLy8gc3RvcmUgdGhlIGluaXRpYWwgdmFsdWVzIG9mIHRoZSBlbGVtZW50cywgc28gd2UgY2FuIHRlbGwgaWYgdGhleSBjaGFuZ2VcbiAgICBpZiAodHJpZ2dlclNwZWMuY2hhbmdlZCkge1xuICAgICAgZWx0c1RvTGlzdGVuT24uZm9yRWFjaChmdW5jdGlvbihlbHRUb0xpc3Rlbk9uKSB7XG4gICAgICAgIGNvbnN0IGVsdFRvTGlzdGVuT25EYXRhID0gZ2V0SW50ZXJuYWxEYXRhKGVsdFRvTGlzdGVuT24pXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdmFsdWUgd2lsbCBiZSB1bmRlZmluZWQgZm9yIG5vbi1pbnB1dCBlbGVtZW50cywgd2hpY2ggaXMgZmluZVxuICAgICAgICBlbHRUb0xpc3Rlbk9uRGF0YS5sYXN0VmFsdWUgPSBlbHRUb0xpc3Rlbk9uLnZhbHVlXG4gICAgICB9KVxuICAgIH1cbiAgICBmb3JFYWNoKGVsdHNUb0xpc3Rlbk9uLCBmdW5jdGlvbihlbHRUb0xpc3Rlbk9uKSB7XG4gICAgICAvKiogQHR5cGUgRXZlbnRMaXN0ZW5lciAqL1xuICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICBpZiAoIWJvZHlDb250YWlucyhlbHQpKSB7XG4gICAgICAgICAgZWx0VG9MaXN0ZW5Pbi5yZW1vdmVFdmVudExpc3RlbmVyKHRyaWdnZXJTcGVjLnRyaWdnZXIsIGV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlnbm9yZUJvb3N0ZWRBbmNob3JDdHJsQ2xpY2soZWx0LCBldnQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV4cGxpY2l0Q2FuY2VsIHx8IHNob3VsZENhbmNlbChldnQsIGVsdCkpIHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXliZUZpbHRlckV2ZW50KHRyaWdnZXJTcGVjLCBlbHQsIGV2dCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBldmVudERhdGEgPSBnZXRJbnRlcm5hbERhdGEoZXZ0KVxuICAgICAgICBldmVudERhdGEudHJpZ2dlclNwZWMgPSB0cmlnZ2VyU3BlY1xuICAgICAgICBpZiAoZXZlbnREYXRhLmhhbmRsZWRGb3IgPT0gbnVsbCkge1xuICAgICAgICAgIGV2ZW50RGF0YS5oYW5kbGVkRm9yID0gW11cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnREYXRhLmhhbmRsZWRGb3IuaW5kZXhPZihlbHQpIDwgMCkge1xuICAgICAgICAgIGV2ZW50RGF0YS5oYW5kbGVkRm9yLnB1c2goZWx0KVxuICAgICAgICAgIGlmICh0cmlnZ2VyU3BlYy5jb25zdW1lKSB7XG4gICAgICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRyaWdnZXJTcGVjLnRhcmdldCAmJiBldnQudGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAoIW1hdGNoZXMoYXNFbGVtZW50KGV2dC50YXJnZXQpLCB0cmlnZ2VyU3BlYy50YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHJpZ2dlclNwZWMub25jZSkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnREYXRhLnRyaWdnZXJlZE9uY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbGVtZW50RGF0YS50cmlnZ2VyZWRPbmNlID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHJpZ2dlclNwZWMuY2hhbmdlZCkge1xuICAgICAgICAgICAgY29uc3QgZWx0VG9MaXN0ZW5PbkRhdGEgPSBnZXRJbnRlcm5hbERhdGEoZWx0VG9MaXN0ZW5PbilcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdmFsdWUgd2lsbCBiZSB1bmRlZmluZWQgZm9yIG5vbi1pbnB1dCBlbGVtZW50cywgd2hpY2ggaXMgZmluZVxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbHRUb0xpc3Rlbk9uLnZhbHVlXG4gICAgICAgICAgICBpZiAoZWx0VG9MaXN0ZW5PbkRhdGEubGFzdFZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsdFRvTGlzdGVuT25EYXRhLmxhc3RWYWx1ZSA9IHZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlbGVtZW50RGF0YS5kZWxheWVkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoZWxlbWVudERhdGEuZGVsYXllZClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVsZW1lbnREYXRhLnRocm90dGxlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHJpZ2dlclNwZWMudGhyb3R0bGUgPiAwKSB7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnREYXRhLnRocm90dGxlKSB7XG4gICAgICAgICAgICAgIHRyaWdnZXJFdmVudChlbHQsICdodG14OnRyaWdnZXInKVxuICAgICAgICAgICAgICBoYW5kbGVyKGVsdCwgZXZ0KVxuICAgICAgICAgICAgICBlbGVtZW50RGF0YS50aHJvdHRsZSA9IGdldFdpbmRvdygpLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudERhdGEudGhyb3R0bGUgPSBudWxsXG4gICAgICAgICAgICAgIH0sIHRyaWdnZXJTcGVjLnRocm90dGxlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodHJpZ2dlclNwZWMuZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICBlbGVtZW50RGF0YS5kZWxheWVkID0gZ2V0V2luZG93KCkuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6dHJpZ2dlcicpXG4gICAgICAgICAgICAgIGhhbmRsZXIoZWx0LCBldnQpXG4gICAgICAgICAgICB9LCB0cmlnZ2VyU3BlYy5kZWxheSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6dHJpZ2dlcicpXG4gICAgICAgICAgICBoYW5kbGVyKGVsdCwgZXZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG5vZGVEYXRhLmxpc3RlbmVySW5mb3MgPT0gbnVsbCkge1xuICAgICAgICBub2RlRGF0YS5saXN0ZW5lckluZm9zID0gW11cbiAgICAgIH1cbiAgICAgIG5vZGVEYXRhLmxpc3RlbmVySW5mb3MucHVzaCh7XG4gICAgICAgIHRyaWdnZXI6IHRyaWdnZXJTcGVjLnRyaWdnZXIsXG4gICAgICAgIGxpc3RlbmVyOiBldmVudExpc3RlbmVyLFxuICAgICAgICBvbjogZWx0VG9MaXN0ZW5PblxuICAgICAgfSlcbiAgICAgIGVsdFRvTGlzdGVuT24uYWRkRXZlbnRMaXN0ZW5lcih0cmlnZ2VyU3BlYy50cmlnZ2VyLCBldmVudExpc3RlbmVyKVxuICAgIH0pXG4gIH1cblxuICBsZXQgd2luZG93SXNTY3JvbGxpbmcgPSBmYWxzZSAvLyB1c2VkIGJ5IGluaXRTY3JvbGxIYW5kbGVyXG4gIGxldCBzY3JvbGxIYW5kbGVyID0gbnVsbFxuICBmdW5jdGlvbiBpbml0U2Nyb2xsSGFuZGxlcigpIHtcbiAgICBpZiAoIXNjcm9sbEhhbmRsZXIpIHtcbiAgICAgIHNjcm9sbEhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgd2luZG93SXNTY3JvbGxpbmcgPSB0cnVlXG4gICAgICB9XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcilcbiAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAod2luZG93SXNTY3JvbGxpbmcpIHtcbiAgICAgICAgICB3aW5kb3dJc1Njcm9sbGluZyA9IGZhbHNlXG4gICAgICAgICAgZm9yRWFjaChnZXREb2N1bWVudCgpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaHgtdHJpZ2dlcio9J3JldmVhbGVkJ10sW2RhdGEtaHgtdHJpZ2dlcio9J3JldmVhbGVkJ11cIiksIGZ1bmN0aW9uKGVsdCkge1xuICAgICAgICAgICAgbWF5YmVSZXZlYWwoZWx0KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sIDIwMClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICovXG4gIGZ1bmN0aW9uIG1heWJlUmV2ZWFsKGVsdCkge1xuICAgIGlmICghaGFzQXR0cmlidXRlKGVsdCwgJ2RhdGEtaHgtcmV2ZWFsZWQnKSAmJiBpc1Njcm9sbGVkSW50b1ZpZXcoZWx0KSkge1xuICAgICAgZWx0LnNldEF0dHJpYnV0ZSgnZGF0YS1oeC1yZXZlYWxlZCcsICd0cnVlJylcbiAgICAgIGNvbnN0IG5vZGVEYXRhID0gZ2V0SW50ZXJuYWxEYXRhKGVsdClcbiAgICAgIGlmIChub2RlRGF0YS5pbml0SGFzaCkge1xuICAgICAgICB0cmlnZ2VyRXZlbnQoZWx0LCAncmV2ZWFsZWQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgdGhlIG5vZGUgaXNuJ3QgaW5pdGlhbGl6ZWQsIHdhaXQgZm9yIGl0IGJlZm9yZSB0cmlnZ2VyaW5nIHRoZSByZXF1ZXN0XG4gICAgICAgIGVsdC5hZGRFdmVudExpc3RlbmVyKCdodG14OmFmdGVyUHJvY2Vzc05vZGUnLCBmdW5jdGlvbigpIHsgdHJpZ2dlckV2ZW50KGVsdCwgJ3JldmVhbGVkJykgfSwgeyBvbmNlOiB0cnVlIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHBhcmFtIHtUcmlnZ2VySGFuZGxlcn0gaGFuZGxlclxuICAgKiBAcGFyYW0ge0h0bXhOb2RlSW50ZXJuYWxEYXRhfSBub2RlRGF0YVxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcbiAgICovXG4gIGZ1bmN0aW9uIGxvYWRJbW1lZGlhdGVseShlbHQsIGhhbmRsZXIsIG5vZGVEYXRhLCBkZWxheSkge1xuICAgIGNvbnN0IGxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghbm9kZURhdGEubG9hZGVkKSB7XG4gICAgICAgIG5vZGVEYXRhLmxvYWRlZCA9IHRydWVcbiAgICAgICAgaGFuZGxlcihlbHQpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkZWxheSA+IDApIHtcbiAgICAgIGdldFdpbmRvdygpLnNldFRpbWVvdXQobG9hZCwgZGVsYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvYWQoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcGFyYW0ge0h0bXhOb2RlSW50ZXJuYWxEYXRhfSBub2RlRGF0YVxuICAgKiBAcGFyYW0ge0h0bXhUcmlnZ2VyU3BlY2lmaWNhdGlvbltdfSB0cmlnZ2VyU3BlY3NcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBwcm9jZXNzVmVyYnMoZWx0LCBub2RlRGF0YSwgdHJpZ2dlclNwZWNzKSB7XG4gICAgbGV0IGV4cGxpY2l0QWN0aW9uID0gZmFsc2VcbiAgICBmb3JFYWNoKFZFUkJTLCBmdW5jdGlvbih2ZXJiKSB7XG4gICAgICBpZiAoaGFzQXR0cmlidXRlKGVsdCwgJ2h4LScgKyB2ZXJiKSkge1xuICAgICAgICBjb25zdCBwYXRoID0gZ2V0QXR0cmlidXRlVmFsdWUoZWx0LCAnaHgtJyArIHZlcmIpXG4gICAgICAgIGV4cGxpY2l0QWN0aW9uID0gdHJ1ZVxuICAgICAgICBub2RlRGF0YS5wYXRoID0gcGF0aFxuICAgICAgICBub2RlRGF0YS52ZXJiID0gdmVyYlxuICAgICAgICB0cmlnZ2VyU3BlY3MuZm9yRWFjaChmdW5jdGlvbih0cmlnZ2VyU3BlYykge1xuICAgICAgICAgIGFkZFRyaWdnZXJIYW5kbGVyKGVsdCwgdHJpZ2dlclNwZWMsIG5vZGVEYXRhLCBmdW5jdGlvbihub2RlLCBldnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsdCA9IGFzRWxlbWVudChub2RlKVxuICAgICAgICAgICAgaWYgKGNsb3Nlc3QoZWx0LCBodG14LmNvbmZpZy5kaXNhYmxlU2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAgIGNsZWFuVXBFbGVtZW50KGVsdClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc3N1ZUFqYXhSZXF1ZXN0KHZlcmIsIHBhdGgsIGVsdCwgZXZ0KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZXhwbGljaXRBY3Rpb25cbiAgfVxuXG4gIC8qKlxuICAgKiBAY2FsbGJhY2sgVHJpZ2dlckhhbmRsZXJcbiAgICogQHBhcmFtIHtOb2RlfSBlbHRcbiAgICogQHBhcmFtIHtFdmVudH0gW2V2dF1cbiAgICovXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWx0XG4gICAqIEBwYXJhbSB7SHRteFRyaWdnZXJTcGVjaWZpY2F0aW9ufSB0cmlnZ2VyU3BlY1xuICAgKiBAcGFyYW0ge0h0bXhOb2RlSW50ZXJuYWxEYXRhfSBub2RlRGF0YVxuICAgKiBAcGFyYW0ge1RyaWdnZXJIYW5kbGVyfSBoYW5kbGVyXG4gICAqL1xuICBmdW5jdGlvbiBhZGRUcmlnZ2VySGFuZGxlcihlbHQsIHRyaWdnZXJTcGVjLCBub2RlRGF0YSwgaGFuZGxlcikge1xuICAgIGlmICh0cmlnZ2VyU3BlYy50cmlnZ2VyID09PSAncmV2ZWFsZWQnKSB7XG4gICAgICBpbml0U2Nyb2xsSGFuZGxlcigpXG4gICAgICBhZGRFdmVudExpc3RlbmVyKGVsdCwgaGFuZGxlciwgbm9kZURhdGEsIHRyaWdnZXJTcGVjKVxuICAgICAgbWF5YmVSZXZlYWwoYXNFbGVtZW50KGVsdCkpXG4gICAgfSBlbHNlIGlmICh0cmlnZ2VyU3BlYy50cmlnZ2VyID09PSAnaW50ZXJzZWN0Jykge1xuICAgICAgY29uc3Qgb2JzZXJ2ZXJPcHRpb25zID0ge31cbiAgICAgIGlmICh0cmlnZ2VyU3BlYy5yb290KSB7XG4gICAgICAgIG9ic2VydmVyT3B0aW9ucy5yb290ID0gcXVlcnlTZWxlY3RvckV4dChlbHQsIHRyaWdnZXJTcGVjLnJvb3QpXG4gICAgICB9XG4gICAgICBpZiAodHJpZ2dlclNwZWMudGhyZXNob2xkKSB7XG4gICAgICAgIG9ic2VydmVyT3B0aW9ucy50aHJlc2hvbGQgPSBwYXJzZUZsb2F0KHRyaWdnZXJTcGVjLnRocmVzaG9sZClcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGVudHJpZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgZW50cnkgPSBlbnRyaWVzW2ldXG4gICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoZWx0LCAnaW50ZXJzZWN0JylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBvYnNlcnZlck9wdGlvbnMpXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGFzRWxlbWVudChlbHQpKVxuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihhc0VsZW1lbnQoZWx0KSwgaGFuZGxlciwgbm9kZURhdGEsIHRyaWdnZXJTcGVjKVxuICAgIH0gZWxzZSBpZiAodHJpZ2dlclNwZWMudHJpZ2dlciA9PT0gJ2xvYWQnKSB7XG4gICAgICBpZiAoIW1heWJlRmlsdGVyRXZlbnQodHJpZ2dlclNwZWMsIGVsdCwgbWFrZUV2ZW50KCdsb2FkJywgeyBlbHQgfSkpKSB7XG4gICAgICAgIGxvYWRJbW1lZGlhdGVseShhc0VsZW1lbnQoZWx0KSwgaGFuZGxlciwgbm9kZURhdGEsIHRyaWdnZXJTcGVjLmRlbGF5KVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHJpZ2dlclNwZWMucG9sbEludGVydmFsID4gMCkge1xuICAgICAgbm9kZURhdGEucG9sbGluZyA9IHRydWVcbiAgICAgIHByb2Nlc3NQb2xsaW5nKGFzRWxlbWVudChlbHQpLCBoYW5kbGVyLCB0cmlnZ2VyU3BlYylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihlbHQsIGhhbmRsZXIsIG5vZGVEYXRhLCB0cmlnZ2VyU3BlYylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gc2hvdWxkUHJvY2Vzc0h4T24obm9kZSkge1xuICAgIGNvbnN0IGVsdCA9IGFzRWxlbWVudChub2RlKVxuICAgIGlmICghZWx0KSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGVsdC5hdHRyaWJ1dGVzXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBhdHRyTmFtZSA9IGF0dHJpYnV0ZXNbal0ubmFtZVxuICAgICAgaWYgKHN0YXJ0c1dpdGgoYXR0ck5hbWUsICdoeC1vbjonKSB8fCBzdGFydHNXaXRoKGF0dHJOYW1lLCAnZGF0YS1oeC1vbjonKSB8fFxuICAgICAgICBzdGFydHNXaXRoKGF0dHJOYW1lLCAnaHgtb24tJykgfHwgc3RhcnRzV2l0aChhdHRyTmFtZSwgJ2RhdGEtaHgtb24tJykpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBlbHRcbiAgICogQHJldHVybnMge0VsZW1lbnRbXX1cbiAgICovXG4gIGNvbnN0IEhYX09OX1FVRVJZID0gbmV3IFhQYXRoRXZhbHVhdG9yKClcbiAgICAuY3JlYXRlRXhwcmVzc2lvbignLi8vKltAKlsgc3RhcnRzLXdpdGgobmFtZSgpLCBcImh4LW9uOlwiKSBvciBzdGFydHMtd2l0aChuYW1lKCksIFwiZGF0YS1oeC1vbjpcIikgb3InICtcbiAgICAgICcgc3RhcnRzLXdpdGgobmFtZSgpLCBcImh4LW9uLVwiKSBvciBzdGFydHMtd2l0aChuYW1lKCksIFwiZGF0YS1oeC1vbi1cIikgXV0nKVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NIWE9uUm9vdChlbHQsIGVsZW1lbnRzKSB7XG4gICAgaWYgKHNob3VsZFByb2Nlc3NIeE9uKGVsdCkpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goYXNFbGVtZW50KGVsdCkpXG4gICAgfVxuICAgIGNvbnN0IGl0ZXIgPSBIWF9PTl9RVUVSWS5ldmFsdWF0ZShlbHQpXG4gICAgbGV0IG5vZGUgPSBudWxsXG4gICAgd2hpbGUgKG5vZGUgPSBpdGVyLml0ZXJhdGVOZXh0KCkpIGVsZW1lbnRzLnB1c2goYXNFbGVtZW50KG5vZGUpKVxuICB9XG5cbiAgZnVuY3Rpb24gZmluZEh4T25XaWxkY2FyZEVsZW1lbnRzKGVsdCkge1xuICAgIC8qKiBAdHlwZSB7RWxlbWVudFtdfSAqL1xuICAgIGNvbnN0IGVsZW1lbnRzID0gW11cbiAgICBpZiAoZWx0IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBlbHQuY2hpbGROb2Rlcykge1xuICAgICAgICBwcm9jZXNzSFhPblJvb3QoY2hpbGQsIGVsZW1lbnRzKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzSFhPblJvb3QoZWx0LCBlbGVtZW50cylcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRzXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHJldHVybnMge05vZGVMaXN0T2Y8RWxlbWVudD58W119XG4gICAqL1xuICBmdW5jdGlvbiBmaW5kRWxlbWVudHNUb1Byb2Nlc3MoZWx0KSB7XG4gICAgaWYgKGVsdC5xdWVyeVNlbGVjdG9yQWxsKSB7XG4gICAgICBjb25zdCBib29zdGVkU2VsZWN0b3IgPSAnLCBbaHgtYm9vc3RdIGEsIFtkYXRhLWh4LWJvb3N0XSBhLCBhW2h4LWJvb3N0XSwgYVtkYXRhLWh4LWJvb3N0XSdcblxuICAgICAgY29uc3QgZXh0ZW5zaW9uU2VsZWN0b3JzID0gW11cbiAgICAgIGZvciAoY29uc3QgZSBpbiBleHRlbnNpb25zKSB7XG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbZV1cbiAgICAgICAgaWYgKGV4dGVuc2lvbi5nZXRTZWxlY3RvcnMpIHtcbiAgICAgICAgICB2YXIgc2VsZWN0b3JzID0gZXh0ZW5zaW9uLmdldFNlbGVjdG9ycygpXG4gICAgICAgICAgaWYgKHNlbGVjdG9ycykge1xuICAgICAgICAgICAgZXh0ZW5zaW9uU2VsZWN0b3JzLnB1c2goc2VsZWN0b3JzKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHRzID0gZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoVkVSQl9TRUxFQ1RPUiArIGJvb3N0ZWRTZWxlY3RvciArIFwiLCBmb3JtLCBbdHlwZT0nc3VibWl0J10sXCIgK1xuICAgICAgICAnIFtoeC1leHRdLCBbZGF0YS1oeC1leHRdLCBbaHgtdHJpZ2dlcl0sIFtkYXRhLWh4LXRyaWdnZXJdJyArIGV4dGVuc2lvblNlbGVjdG9ycy5mbGF0KCkubWFwKHMgPT4gJywgJyArIHMpLmpvaW4oJycpKVxuXG4gICAgICByZXR1cm4gcmVzdWx0c1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIHN1Ym1pdCBidXR0b25zL2lucHV0cyB0aGF0IGhhdmUgdGhlIGZvcm0gYXR0cmlidXRlIHNldFxuICAgKiBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2J1dHRvblxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICovXG4gIGZ1bmN0aW9uIG1heWJlU2V0TGFzdEJ1dHRvbkNsaWNrZWQoZXZ0KSB7XG4gICAgY29uc3QgZWx0ID0gLyoqIEB0eXBlIHtIVE1MQnV0dG9uRWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fSAqLyAoY2xvc2VzdChhc0VsZW1lbnQoZXZ0LnRhcmdldCksIFwiYnV0dG9uLCBpbnB1dFt0eXBlPSdzdWJtaXQnXVwiKSlcbiAgICBjb25zdCBpbnRlcm5hbERhdGEgPSBnZXRSZWxhdGVkRm9ybURhdGEoZXZ0KVxuICAgIGlmIChpbnRlcm5hbERhdGEpIHtcbiAgICAgIGludGVybmFsRGF0YS5sYXN0QnV0dG9uQ2xpY2tlZCA9IGVsdFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICovXG4gIGZ1bmN0aW9uIG1heWJlVW5zZXRMYXN0QnV0dG9uQ2xpY2tlZChldnQpIHtcbiAgICBjb25zdCBpbnRlcm5hbERhdGEgPSBnZXRSZWxhdGVkRm9ybURhdGEoZXZ0KVxuICAgIGlmIChpbnRlcm5hbERhdGEpIHtcbiAgICAgIGludGVybmFsRGF0YS5sYXN0QnV0dG9uQ2xpY2tlZCA9IG51bGxcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqIEByZXR1cm5zIHtIdG14Tm9kZUludGVybmFsRGF0YXx1bmRlZmluZWR9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRSZWxhdGVkRm9ybURhdGEoZXZ0KSB7XG4gICAgY29uc3QgZWx0ID0gY2xvc2VzdChhc0VsZW1lbnQoZXZ0LnRhcmdldCksIFwiYnV0dG9uLCBpbnB1dFt0eXBlPSdzdWJtaXQnXVwiKVxuICAgIGlmICghZWx0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgZm9ybSA9IHJlc29sdmVUYXJnZXQoJyMnICsgZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ2Zvcm0nKSwgZWx0LmdldFJvb3ROb2RlKCkpIHx8IGNsb3Nlc3QoZWx0LCAnZm9ybScpXG4gICAgaWYgKCFmb3JtKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgcmV0dXJuIGdldEludGVybmFsRGF0YShmb3JtKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGVsdFxuICAgKi9cbiAgZnVuY3Rpb24gaW5pdEJ1dHRvblRyYWNraW5nKGVsdCkge1xuICAgIC8vIG5lZWQgdG8gaGFuZGxlIGJvdGggY2xpY2sgYW5kIGZvY3VzIGluOlxuICAgIC8vICAgZm9jdXNpbiAtIGluIGNhc2Ugc29tZW9uZSB0YWJzIGluIHRvIGEgYnV0dG9uIGFuZCBoaXRzIHRoZSBzcGFjZSBiYXJcbiAgICAvLyAgIGNsaWNrIC0gb24gT1NYIGJ1dHRvbnMgZG8gbm90IGZvY3VzIG9uIGNsaWNrIHNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM3MjRcbiAgICBlbHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYXliZVNldExhc3RCdXR0b25DbGlja2VkKVxuICAgIGVsdC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgbWF5YmVTZXRMYXN0QnV0dG9uQ2xpY2tlZClcbiAgICBlbHQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBtYXliZVVuc2V0TGFzdEJ1dHRvbkNsaWNrZWQpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZVxuICAgKi9cbiAgZnVuY3Rpb24gYWRkSHhPbkV2ZW50SGFuZGxlcihlbHQsIGV2ZW50TmFtZSwgY29kZSkge1xuICAgIGNvbnN0IG5vZGVEYXRhID0gZ2V0SW50ZXJuYWxEYXRhKGVsdClcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobm9kZURhdGEub25IYW5kbGVycykpIHtcbiAgICAgIG5vZGVEYXRhLm9uSGFuZGxlcnMgPSBbXVxuICAgIH1cbiAgICBsZXQgZnVuY1xuICAgIC8qKiBAdHlwZSBFdmVudExpc3RlbmVyICovXG4gICAgY29uc3QgbGlzdGVuZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICBtYXliZUV2YWwoZWx0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGVsdElzRGlzYWJsZWQoZWx0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICghZnVuYykge1xuICAgICAgICAgIGZ1bmMgPSBuZXcgRnVuY3Rpb24oJ2V2ZW50JywgY29kZSlcbiAgICAgICAgfVxuICAgICAgICBmdW5jLmNhbGwoZWx0LCBlKVxuICAgICAgfSlcbiAgICB9XG4gICAgZWx0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcilcbiAgICBub2RlRGF0YS5vbkhhbmRsZXJzLnB1c2goeyBldmVudDogZXZlbnROYW1lLCBsaXN0ZW5lciB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqL1xuICBmdW5jdGlvbiBwcm9jZXNzSHhPbldpbGRjYXJkKGVsdCkge1xuICAgIC8vIHdpcGUgYW55IHByZXZpb3VzIG9uIGhhbmRsZXJzIHNvIHRoYXQgdGhpcyBmdW5jdGlvbiB0YWtlcyBwcmVjZWRlbmNlXG4gICAgZGVJbml0T25IYW5kbGVycyhlbHQpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsdC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBuYW1lID0gZWx0LmF0dHJpYnV0ZXNbaV0ubmFtZVxuICAgICAgY29uc3QgdmFsdWUgPSBlbHQuYXR0cmlidXRlc1tpXS52YWx1ZVxuICAgICAgaWYgKHN0YXJ0c1dpdGgobmFtZSwgJ2h4LW9uJykgfHwgc3RhcnRzV2l0aChuYW1lLCAnZGF0YS1oeC1vbicpKSB7XG4gICAgICAgIGNvbnN0IGFmdGVyT25Qb3NpdGlvbiA9IG5hbWUuaW5kZXhPZignLW9uJykgKyAzXG4gICAgICAgIGNvbnN0IG5leHRDaGFyID0gbmFtZS5zbGljZShhZnRlck9uUG9zaXRpb24sIGFmdGVyT25Qb3NpdGlvbiArIDEpXG4gICAgICAgIGlmIChuZXh0Q2hhciA9PT0gJy0nIHx8IG5leHRDaGFyID09PSAnOicpIHtcbiAgICAgICAgICBsZXQgZXZlbnROYW1lID0gbmFtZS5zbGljZShhZnRlck9uUG9zaXRpb24gKyAxKVxuICAgICAgICAgIC8vIGlmIHRoZSBldmVudE5hbWUgc3RhcnRzIHdpdGggYSBjb2xvbiBvciBkYXNoLCBwcmVwZW5kIFwiaHRteFwiIGZvciBzaG9ydGhhbmQgc3VwcG9ydFxuICAgICAgICAgIGlmIChzdGFydHNXaXRoKGV2ZW50TmFtZSwgJzonKSkge1xuICAgICAgICAgICAgZXZlbnROYW1lID0gJ2h0bXgnICsgZXZlbnROYW1lXG4gICAgICAgICAgfSBlbHNlIGlmIChzdGFydHNXaXRoKGV2ZW50TmFtZSwgJy0nKSkge1xuICAgICAgICAgICAgZXZlbnROYW1lID0gJ2h0bXg6JyArIGV2ZW50TmFtZS5zbGljZSgxKVxuICAgICAgICAgIH0gZWxzZSBpZiAoc3RhcnRzV2l0aChldmVudE5hbWUsICdodG14LScpKSB7XG4gICAgICAgICAgICBldmVudE5hbWUgPSAnaHRteDonICsgZXZlbnROYW1lLnNsaWNlKDUpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYWRkSHhPbkV2ZW50SGFuZGxlcihlbHQsIGV2ZW50TmFtZSwgdmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fEhUTUxJbnB1dEVsZW1lbnR9IGVsdFxuICAgKi9cbiAgZnVuY3Rpb24gaW5pdE5vZGUoZWx0KSB7XG4gICAgaWYgKGNsb3Nlc3QoZWx0LCBodG14LmNvbmZpZy5kaXNhYmxlU2VsZWN0b3IpKSB7XG4gICAgICBjbGVhblVwRWxlbWVudChlbHQpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qgbm9kZURhdGEgPSBnZXRJbnRlcm5hbERhdGEoZWx0KVxuICAgIGlmIChub2RlRGF0YS5pbml0SGFzaCAhPT0gYXR0cmlidXRlSGFzaChlbHQpKSB7XG4gICAgICAvLyBjbGVhbiB1cCBhbnkgcHJldmlvdXNseSBwcm9jZXNzZWQgaW5mb1xuICAgICAgZGVJbml0Tm9kZShlbHQpXG5cbiAgICAgIG5vZGVEYXRhLmluaXRIYXNoID0gYXR0cmlidXRlSGFzaChlbHQpXG5cbiAgICAgIHRyaWdnZXJFdmVudChlbHQsICdodG14OmJlZm9yZVByb2Nlc3NOb2RlJylcblxuICAgICAgLy8gQHRzLWlnbm9yZSB2YWx1ZSB3aWxsIGJlIHVuZGVmaW5lZCBmb3Igbm9uLWlucHV0IGVsZW1lbnRzLCB3aGljaCBpcyBmaW5lXG4gICAgICBpZiAoZWx0LnZhbHVlKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgbm9kZURhdGEubGFzdFZhbHVlID0gZWx0LnZhbHVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRyaWdnZXJTcGVjcyA9IGdldFRyaWdnZXJTcGVjcyhlbHQpXG4gICAgICBjb25zdCBoYXNFeHBsaWNpdEh0dHBBY3Rpb24gPSBwcm9jZXNzVmVyYnMoZWx0LCBub2RlRGF0YSwgdHJpZ2dlclNwZWNzKVxuXG4gICAgICBpZiAoIWhhc0V4cGxpY2l0SHR0cEFjdGlvbikge1xuICAgICAgICBpZiAoZ2V0Q2xvc2VzdEF0dHJpYnV0ZVZhbHVlKGVsdCwgJ2h4LWJvb3N0JykgPT09ICd0cnVlJykge1xuICAgICAgICAgIGJvb3N0RWxlbWVudChlbHQsIG5vZGVEYXRhLCB0cmlnZ2VyU3BlY3MpXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzQXR0cmlidXRlKGVsdCwgJ2h4LXRyaWdnZXInKSkge1xuICAgICAgICAgIHRyaWdnZXJTcGVjcy5mb3JFYWNoKGZ1bmN0aW9uKHRyaWdnZXJTcGVjKSB7XG4gICAgICAgICAgICAvLyBGb3IgXCJuYWtlZFwiIHRyaWdnZXJzLCBkb24ndCBkbyBhbnl0aGluZyBhdCBhbGxcbiAgICAgICAgICAgIGFkZFRyaWdnZXJIYW5kbGVyKGVsdCwgdHJpZ2dlclNwZWMsIG5vZGVEYXRhLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBIYW5kbGUgc3VibWl0IGJ1dHRvbnMvaW5wdXRzIHRoYXQgaGF2ZSB0aGUgZm9ybSBhdHRyaWJ1dGUgc2V0XG4gICAgICAvLyBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2J1dHRvblxuICAgICAgaWYgKGVsdC50YWdOYW1lID09PSAnRk9STScgfHwgKGdldFJhd0F0dHJpYnV0ZShlbHQsICd0eXBlJykgPT09ICdzdWJtaXQnICYmIGhhc0F0dHJpYnV0ZShlbHQsICdmb3JtJykpKSB7XG4gICAgICAgIGluaXRCdXR0b25UcmFja2luZyhlbHQpXG4gICAgICB9XG5cbiAgICAgIHRyaWdnZXJFdmVudChlbHQsICdodG14OmFmdGVyUHJvY2Vzc05vZGUnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9jZXNzZXMgbmV3IGNvbnRlbnQsIGVuYWJsaW5nIGh0bXggYmVoYXZpb3IuIFRoaXMgY2FuIGJlIHVzZWZ1bCBpZiB5b3UgaGF2ZSBjb250ZW50IHRoYXQgaXMgYWRkZWQgdG8gdGhlIERPTSBvdXRzaWRlIG9mIHRoZSBub3JtYWwgaHRteCByZXF1ZXN0IGN5Y2xlIGJ1dCBzdGlsbCB3YW50IGh0bXggYXR0cmlidXRlcyB0byB3b3JrLlxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNwcm9jZXNzXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudHxzdHJpbmd9IGVsdCBlbGVtZW50IHRvIHByb2Nlc3NcbiAgICovXG4gIGZ1bmN0aW9uIHByb2Nlc3NOb2RlKGVsdCkge1xuICAgIGVsdCA9IHJlc29sdmVUYXJnZXQoZWx0KVxuICAgIGlmIChjbG9zZXN0KGVsdCwgaHRteC5jb25maWcuZGlzYWJsZVNlbGVjdG9yKSkge1xuICAgICAgY2xlYW5VcEVsZW1lbnQoZWx0KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGluaXROb2RlKGVsdClcbiAgICBmb3JFYWNoKGZpbmRFbGVtZW50c1RvUHJvY2VzcyhlbHQpLCBmdW5jdGlvbihjaGlsZCkgeyBpbml0Tm9kZShjaGlsZCkgfSlcbiAgICBmb3JFYWNoKGZpbmRIeE9uV2lsZGNhcmRFbGVtZW50cyhlbHQpLCBwcm9jZXNzSHhPbldpbGRjYXJkKVxuICB9XG5cbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gRXZlbnQvTG9nIFN1cHBvcnRcbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24ga2ViYWJFdmVudE5hbWUoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW2EtejAtOV0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgKiBAcGFyYW0ge2FueX0gZGV0YWlsXG4gICAqIEByZXR1cm5zIHtDdXN0b21FdmVudH1cbiAgICovXG4gIGZ1bmN0aW9uIG1ha2VFdmVudChldmVudE5hbWUsIGRldGFpbCkge1xuICAgIGxldCBldnRcbiAgICBpZiAod2luZG93LkN1c3RvbUV2ZW50ICYmIHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFRPRE86IGBjb21wb3NlZDogdHJ1ZWAgaGVyZSBpcyBhIGhhY2sgdG8gbWFrZSBnbG9iYWwgZXZlbnQgaGFuZGxlcnMgd29yayB3aXRoIGV2ZW50cyBpbiBzaGFkb3cgRE9NXG4gICAgICAvLyBUaGlzIGJyZWFrcyBleHBlY3RlZCBlbmNhcHN1bGF0aW9uIGJ1dCBuZWVkcyB0byBiZSBoZXJlIHVudGlsIGRlY2lkZWQgb3RoZXJ3aXNlIGJ5IGNvcmUgZGV2c1xuICAgICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlLCBjb21wb3NlZDogdHJ1ZSwgZGV0YWlsIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dCA9IGdldERvY3VtZW50KCkuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlLCBkZXRhaWwpXG4gICAgfVxuICAgIHJldHVybiBldnRcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fHN0cmluZ30gZWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHthbnk9fSBkZXRhaWxcbiAgICovXG4gIGZ1bmN0aW9uIHRyaWdnZXJFcnJvckV2ZW50KGVsdCwgZXZlbnROYW1lLCBkZXRhaWwpIHtcbiAgICB0cmlnZ2VyRXZlbnQoZWx0LCBldmVudE5hbWUsIG1lcmdlT2JqZWN0cyh7IGVycm9yOiBldmVudE5hbWUgfSwgZGV0YWlsKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaWdub3JlRXZlbnRGb3JMb2dnaW5nKGV2ZW50TmFtZSkge1xuICAgIHJldHVybiBldmVudE5hbWUgPT09ICdodG14OmFmdGVyUHJvY2Vzc05vZGUnXG4gIH1cblxuICAvKipcbiAgICogYHdpdGhFeHRlbnNpb25zYCBsb2NhdGVzIGFsbCBhY3RpdmUgZXh0ZW5zaW9ucyBmb3IgYSBwcm92aWRlZCBlbGVtZW50LCB0aGVuXG4gICAqIGV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiB1c2luZyBlYWNoIG9mIHRoZSBhY3RpdmUgZXh0ZW5zaW9ucy4gIEl0IHNob3VsZFxuICAgKiBiZSBjYWxsZWQgaW50ZXJuYWxseSBhdCBldmVyeSBleHRlbmRhYmxlIGV4ZWN1dGlvbiBwb2ludCBpbiBodG14LlxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcGFyYW0geyhleHRlbnNpb246SHRteEV4dGVuc2lvbikgPT4gdm9pZH0gdG9Eb1xuICAgKiBAcmV0dXJucyB2b2lkXG4gICAqL1xuICBmdW5jdGlvbiB3aXRoRXh0ZW5zaW9ucyhlbHQsIHRvRG8pIHtcbiAgICBmb3JFYWNoKGdldEV4dGVuc2lvbnMoZWx0KSwgZnVuY3Rpb24oZXh0ZW5zaW9uKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0b0RvKGV4dGVuc2lvbilcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nRXJyb3IoZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gbG9nRXJyb3IobXNnKSB7XG4gICAgaWYgKGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobXNnKVxuICAgIH0gZWxzZSBpZiAoY29uc29sZS5sb2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjogJywgbXNnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBhIGdpdmVuIGV2ZW50IG9uIGFuIGVsZW1lbnRcbiAgICpcbiAgICogQHNlZSBodHRwczovL2h0bXgub3JnL2FwaS8jdHJpZ2dlclxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fHN0cmluZ30gZWx0IHRoZSBlbGVtZW50IHRvIHRyaWdnZXIgdGhlIGV2ZW50IG9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgdGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIHRyaWdnZXJcbiAgICogQHBhcmFtIHthbnk9fSBkZXRhaWwgZGV0YWlscyBmb3IgdGhlIGV2ZW50XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gdHJpZ2dlckV2ZW50KGVsdCwgZXZlbnROYW1lLCBkZXRhaWwpIHtcbiAgICBlbHQgPSByZXNvbHZlVGFyZ2V0KGVsdClcbiAgICBpZiAoZGV0YWlsID09IG51bGwpIHtcbiAgICAgIGRldGFpbCA9IHt9XG4gICAgfVxuICAgIGRldGFpbC5lbHQgPSBlbHRcbiAgICBjb25zdCBldmVudCA9IG1ha2VFdmVudChldmVudE5hbWUsIGRldGFpbClcbiAgICBpZiAoaHRteC5sb2dnZXIgJiYgIWlnbm9yZUV2ZW50Rm9yTG9nZ2luZyhldmVudE5hbWUpKSB7XG4gICAgICBodG14LmxvZ2dlcihlbHQsIGV2ZW50TmFtZSwgZGV0YWlsKVxuICAgIH1cbiAgICBpZiAoZGV0YWlsLmVycm9yKSB7XG4gICAgICBsb2dFcnJvcihkZXRhaWwuZXJyb3IpXG4gICAgICB0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDplcnJvcicsIHsgZXJyb3JJbmZvOiBkZXRhaWwgfSlcbiAgICB9XG4gICAgbGV0IGV2ZW50UmVzdWx0ID0gZWx0LmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgY29uc3Qga2ViYWJOYW1lID0ga2ViYWJFdmVudE5hbWUoZXZlbnROYW1lKVxuICAgIGlmIChldmVudFJlc3VsdCAmJiBrZWJhYk5hbWUgIT09IGV2ZW50TmFtZSkge1xuICAgICAgY29uc3Qga2ViYWJlZEV2ZW50ID0gbWFrZUV2ZW50KGtlYmFiTmFtZSwgZXZlbnQuZGV0YWlsKVxuICAgICAgZXZlbnRSZXN1bHQgPSBldmVudFJlc3VsdCAmJiBlbHQuZGlzcGF0Y2hFdmVudChrZWJhYmVkRXZlbnQpXG4gICAgfVxuICAgIHdpdGhFeHRlbnNpb25zKGFzRWxlbWVudChlbHQpLCBmdW5jdGlvbihleHRlbnNpb24pIHtcbiAgICAgIGV2ZW50UmVzdWx0ID0gZXZlbnRSZXN1bHQgJiYgKGV4dGVuc2lvbi5vbkV2ZW50KGV2ZW50TmFtZSwgZXZlbnQpICE9PSBmYWxzZSAmJiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZClcbiAgICB9KVxuICAgIHJldHVybiBldmVudFJlc3VsdFxuICB9XG5cbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gSGlzdG9yeSBTdXBwb3J0XG4gIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGxldCBjdXJyZW50UGF0aEZvckhpc3RvcnkgPSBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaFxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7RWxlbWVudH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEhpc3RvcnlFbGVtZW50KCkge1xuICAgIGNvbnN0IGhpc3RvcnlFbHQgPSBnZXREb2N1bWVudCgpLnF1ZXJ5U2VsZWN0b3IoJ1toeC1oaXN0b3J5LWVsdF0sW2RhdGEtaHgtaGlzdG9yeS1lbHRdJylcbiAgICByZXR1cm4gaGlzdG9yeUVsdCB8fCBnZXREb2N1bWVudCgpLmJvZHlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcm9vdEVsdFxuICAgKi9cbiAgZnVuY3Rpb24gc2F2ZVRvSGlzdG9yeUNhY2hlKHVybCwgcm9vdEVsdCkge1xuICAgIGlmICghY2FuQWNjZXNzTG9jYWxTdG9yYWdlKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGdldCBzdGF0ZSB0byBzYXZlXG4gICAgY29uc3QgaW5uZXJIVE1MID0gY2xlYW5Jbm5lckh0bWxGb3JIaXN0b3J5KHJvb3RFbHQpXG4gICAgY29uc3QgdGl0bGUgPSBnZXREb2N1bWVudCgpLnRpdGxlXG4gICAgY29uc3Qgc2Nyb2xsID0gd2luZG93LnNjcm9sbFlcblxuICAgIGlmIChodG14LmNvbmZpZy5oaXN0b3J5Q2FjaGVTaXplIDw9IDApIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IGFuIGV2ZW50dWFsbHkgYWxyZWFkeSBleGlzdGluZyBjYWNoZSBpcyBwdXJnZWRcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdodG14LWhpc3RvcnktY2FjaGUnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdXJsID0gbm9ybWFsaXplUGF0aCh1cmwpXG5cbiAgICBjb25zdCBoaXN0b3J5Q2FjaGUgPSBwYXJzZUpTT04obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2h0bXgtaGlzdG9yeS1jYWNoZScpKSB8fCBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGlzdG9yeUNhY2hlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaGlzdG9yeUNhY2hlW2ldLnVybCA9PT0gdXJsKSB7XG4gICAgICAgIGhpc3RvcnlDYWNoZS5zcGxpY2UoaSwgMSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQHR5cGUgSHRteEhpc3RvcnlJdGVtICovXG4gICAgY29uc3QgbmV3SGlzdG9yeUl0ZW0gPSB7IHVybCwgY29udGVudDogaW5uZXJIVE1MLCB0aXRsZSwgc2Nyb2xsIH1cblxuICAgIHRyaWdnZXJFdmVudChnZXREb2N1bWVudCgpLmJvZHksICdodG14Omhpc3RvcnlJdGVtQ3JlYXRlZCcsIHsgaXRlbTogbmV3SGlzdG9yeUl0ZW0sIGNhY2hlOiBoaXN0b3J5Q2FjaGUgfSlcblxuICAgIGhpc3RvcnlDYWNoZS5wdXNoKG5ld0hpc3RvcnlJdGVtKVxuICAgIHdoaWxlIChoaXN0b3J5Q2FjaGUubGVuZ3RoID4gaHRteC5jb25maWcuaGlzdG9yeUNhY2hlU2l6ZSkge1xuICAgICAgaGlzdG9yeUNhY2hlLnNoaWZ0KClcbiAgICB9XG5cbiAgICAvLyBrZWVwIHRyeWluZyB0byBzYXZlIHRoZSBjYWNoZSB1bnRpbCBpdCBzdWNjZWVkcyBvciBpcyBlbXB0eVxuICAgIHdoaWxlIChoaXN0b3J5Q2FjaGUubGVuZ3RoID4gMCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2h0bXgtaGlzdG9yeS1jYWNoZScsIEpTT04uc3RyaW5naWZ5KGhpc3RvcnlDYWNoZSkpXG4gICAgICAgIGJyZWFrXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRyaWdnZXJFcnJvckV2ZW50KGdldERvY3VtZW50KCkuYm9keSwgJ2h0bXg6aGlzdG9yeUNhY2hlRXJyb3InLCB7IGNhdXNlOiBlLCBjYWNoZTogaGlzdG9yeUNhY2hlIH0pXG4gICAgICAgIGhpc3RvcnlDYWNoZS5zaGlmdCgpIC8vIHNocmluayB0aGUgY2FjaGUgYW5kIHJldHJ5XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IEh0bXhIaXN0b3J5SXRlbVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gdXJsXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjb250ZW50XG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0aXRsZVxuICAgKiBAcHJvcGVydHkge251bWJlcn0gc2Nyb2xsXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEByZXR1cm5zIHtIdG14SGlzdG9yeUl0ZW18bnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldENhY2hlZEhpc3RvcnkodXJsKSB7XG4gICAgaWYgKCFjYW5BY2Nlc3NMb2NhbFN0b3JhZ2UoKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICB1cmwgPSBub3JtYWxpemVQYXRoKHVybClcblxuICAgIGNvbnN0IGhpc3RvcnlDYWNoZSA9IHBhcnNlSlNPTihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaHRteC1oaXN0b3J5LWNhY2hlJykpIHx8IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaXN0b3J5Q2FjaGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChoaXN0b3J5Q2FjaGVbaV0udXJsID09PSB1cmwpIHtcbiAgICAgICAgcmV0dXJuIGhpc3RvcnlDYWNoZVtpXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBjbGVhbklubmVySHRtbEZvckhpc3RvcnkoZWx0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gaHRteC5jb25maWcucmVxdWVzdENsYXNzXG4gICAgY29uc3QgY2xvbmUgPSAvKiogQHR5cGUgRWxlbWVudCAqLyAoZWx0LmNsb25lTm9kZSh0cnVlKSlcbiAgICBmb3JFYWNoKGZpbmRBbGwoY2xvbmUsICcuJyArIGNsYXNzTmFtZSksIGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICByZW1vdmVDbGFzc0Zyb21FbGVtZW50KGNoaWxkLCBjbGFzc05hbWUpXG4gICAgfSlcbiAgICAvLyByZW1vdmUgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSBmb3IgYW55IGVsZW1lbnQgZGlzYWJsZWQgZHVlIHRvIGFuIGh0bXggcmVxdWVzdFxuICAgIGZvckVhY2goZmluZEFsbChjbG9uZSwgJ1tkYXRhLWRpc2FibGVkLWJ5LWh0bXhdJyksIGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICB9KVxuICAgIHJldHVybiBjbG9uZS5pbm5lckhUTUxcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhdmVDdXJyZW50UGFnZVRvSGlzdG9yeSgpIHtcbiAgICBjb25zdCBlbHQgPSBnZXRIaXN0b3J5RWxlbWVudCgpXG4gICAgY29uc3QgcGF0aCA9IGN1cnJlbnRQYXRoRm9ySGlzdG9yeSB8fCBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaFxuXG4gICAgLy8gQWxsb3cgaGlzdG9yeSBzbmFwc2hvdCBmZWF0dXJlIHRvIGJlIGRpc2FibGVkIHdoZXJlIGh4LWhpc3Rvcnk9XCJmYWxzZVwiXG4gICAgLy8gaXMgcHJlc2VudCAqYW55d2hlcmUqIGluIHRoZSBjdXJyZW50IGRvY3VtZW50IHdlJ3JlIGFib3V0IHRvIHNhdmUsXG4gICAgLy8gc28gd2UgY2FuIHByZXZlbnQgcHJpdmlsZWdlZCBkYXRhIGVudGVyaW5nIHRoZSBjYWNoZS5cbiAgICAvLyBUaGUgcGFnZSB3aWxsIHN0aWxsIGJlIHJlYWNoYWJsZSBhcyBhIGhpc3RvcnkgZW50cnksIGJ1dCBodG14IHdpbGwgZmV0Y2ggaXRcbiAgICAvLyBsaXZlIGZyb20gdGhlIHNlcnZlciBvbnBvcHN0YXRlIHJhdGhlciB0aGFuIGxvb2sgaW4gdGhlIGxvY2FsU3RvcmFnZSBjYWNoZVxuICAgIGxldCBkaXNhYmxlSGlzdG9yeUNhY2hlXG4gICAgdHJ5IHtcbiAgICAgIGRpc2FibGVIaXN0b3J5Q2FjaGUgPSBnZXREb2N1bWVudCgpLnF1ZXJ5U2VsZWN0b3IoJ1toeC1oaXN0b3J5PVwiZmFsc2VcIiBpXSxbZGF0YS1oeC1oaXN0b3J5PVwiZmFsc2VcIiBpXScpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgIC8vIElFMTE6IGluc2Vuc2l0aXZlIG1vZGlmaWVyIG5vdCBzdXBwb3J0ZWQgc28gZmFsbGJhY2sgdG8gY2FzZSBzZW5zaXRpdmUgc2VsZWN0b3JcbiAgICAgIGRpc2FibGVIaXN0b3J5Q2FjaGUgPSBnZXREb2N1bWVudCgpLnF1ZXJ5U2VsZWN0b3IoJ1toeC1oaXN0b3J5PVwiZmFsc2VcIl0sW2RhdGEtaHgtaGlzdG9yeT1cImZhbHNlXCJdJylcbiAgICB9XG4gICAgaWYgKCFkaXNhYmxlSGlzdG9yeUNhY2hlKSB7XG4gICAgICB0cmlnZ2VyRXZlbnQoZ2V0RG9jdW1lbnQoKS5ib2R5LCAnaHRteDpiZWZvcmVIaXN0b3J5U2F2ZScsIHsgcGF0aCwgaGlzdG9yeUVsdDogZWx0IH0pXG4gICAgICBzYXZlVG9IaXN0b3J5Q2FjaGUocGF0aCwgZWx0KVxuICAgIH1cblxuICAgIGlmIChodG14LmNvbmZpZy5oaXN0b3J5RW5hYmxlZCkgaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBodG14OiB0cnVlIH0sIGdldERvY3VtZW50KCkudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAqL1xuICBmdW5jdGlvbiBwdXNoVXJsSW50b0hpc3RvcnkocGF0aCkge1xuICAvLyByZW1vdmUgdGhlIGNhY2hlIGJ1c3RlciBwYXJhbWV0ZXIsIGlmIGFueVxuICAgIGlmIChodG14LmNvbmZpZy5nZXRDYWNoZUJ1c3RlclBhcmFtKSB7XG4gICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9vcmdcXC5odG14XFwuY2FjaGUtYnVzdGVyPVteJl0qJj8vLCAnJylcbiAgICAgIGlmIChlbmRzV2l0aChwYXRoLCAnJicpIHx8IGVuZHNXaXRoKHBhdGgsICc/JykpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgLTEpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChodG14LmNvbmZpZy5oaXN0b3J5RW5hYmxlZCkge1xuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoeyBodG14OiB0cnVlIH0sICcnLCBwYXRoKVxuICAgIH1cbiAgICBjdXJyZW50UGF0aEZvckhpc3RvcnkgPSBwYXRoXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICovXG4gIGZ1bmN0aW9uIHJlcGxhY2VVcmxJbkhpc3RvcnkocGF0aCkge1xuICAgIGlmIChodG14LmNvbmZpZy5oaXN0b3J5RW5hYmxlZCkgaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBodG14OiB0cnVlIH0sICcnLCBwYXRoKVxuICAgIGN1cnJlbnRQYXRoRm9ySGlzdG9yeSA9IHBhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0h0bXhTZXR0bGVUYXNrW119IHRhc2tzXG4gICAqL1xuICBmdW5jdGlvbiBzZXR0bGVJbW1lZGlhdGVseSh0YXNrcykge1xuICAgIGZvckVhY2godGFza3MsIGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgIHRhc2suY2FsbCh1bmRlZmluZWQpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgKi9cbiAgZnVuY3Rpb24gbG9hZEhpc3RvcnlGcm9tU2VydmVyKHBhdGgpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICBjb25zdCBkZXRhaWxzID0geyBwYXRoLCB4aHI6IHJlcXVlc3QgfVxuICAgIHRyaWdnZXJFdmVudChnZXREb2N1bWVudCgpLmJvZHksICdodG14Omhpc3RvcnlDYWNoZU1pc3MnLCBkZXRhaWxzKVxuICAgIHJlcXVlc3Qub3BlbignR0VUJywgcGF0aCwgdHJ1ZSlcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0hYLVJlcXVlc3QnLCAndHJ1ZScpXG4gICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdIWC1IaXN0b3J5LVJlc3RvcmUtUmVxdWVzdCcsICd0cnVlJylcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0hYLUN1cnJlbnQtVVJMJywgZ2V0RG9jdW1lbnQoKS5sb2NhdGlvbi5ocmVmKVxuICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgIHRyaWdnZXJFdmVudChnZXREb2N1bWVudCgpLmJvZHksICdodG14Omhpc3RvcnlDYWNoZU1pc3NMb2FkJywgZGV0YWlscylcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBtYWtlRnJhZ21lbnQodGhpcy5yZXNwb25zZSlcbiAgICAgICAgLyoqIEB0eXBlIFBhcmVudE5vZGUgKi9cbiAgICAgICAgY29uc3QgY29udGVudCA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJ1toeC1oaXN0b3J5LWVsdF0sW2RhdGEtaHgtaGlzdG9yeS1lbHRdJykgfHwgZnJhZ21lbnRcbiAgICAgICAgY29uc3QgaGlzdG9yeUVsZW1lbnQgPSBnZXRIaXN0b3J5RWxlbWVudCgpXG4gICAgICAgIGNvbnN0IHNldHRsZUluZm8gPSBtYWtlU2V0dGxlSW5mbyhoaXN0b3J5RWxlbWVudClcbiAgICAgICAgaGFuZGxlVGl0bGUoZnJhZ21lbnQudGl0bGUpXG5cbiAgICAgICAgc3dhcElubmVySFRNTChoaXN0b3J5RWxlbWVudCwgY29udGVudCwgc2V0dGxlSW5mbylcbiAgICAgICAgc2V0dGxlSW1tZWRpYXRlbHkoc2V0dGxlSW5mby50YXNrcylcbiAgICAgICAgY3VycmVudFBhdGhGb3JIaXN0b3J5ID0gcGF0aFxuICAgICAgICB0cmlnZ2VyRXZlbnQoZ2V0RG9jdW1lbnQoKS5ib2R5LCAnaHRteDpoaXN0b3J5UmVzdG9yZScsIHsgcGF0aCwgY2FjaGVNaXNzOiB0cnVlLCBzZXJ2ZXJSZXNwb25zZTogdGhpcy5yZXNwb25zZSB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZ2V0RG9jdW1lbnQoKS5ib2R5LCAnaHRteDpoaXN0b3J5Q2FjaGVNaXNzTG9hZEVycm9yJywgZGV0YWlscylcbiAgICAgIH1cbiAgICB9XG4gICAgcmVxdWVzdC5zZW5kKClcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3BhdGhdXG4gICAqL1xuICBmdW5jdGlvbiByZXN0b3JlSGlzdG9yeShwYXRoKSB7XG4gICAgc2F2ZUN1cnJlbnRQYWdlVG9IaXN0b3J5KClcbiAgICBwYXRoID0gcGF0aCB8fCBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaFxuICAgIGNvbnN0IGNhY2hlZCA9IGdldENhY2hlZEhpc3RvcnkocGF0aClcbiAgICBpZiAoY2FjaGVkKSB7XG4gICAgICBjb25zdCBmcmFnbWVudCA9IG1ha2VGcmFnbWVudChjYWNoZWQuY29udGVudClcbiAgICAgIGNvbnN0IGhpc3RvcnlFbGVtZW50ID0gZ2V0SGlzdG9yeUVsZW1lbnQoKVxuICAgICAgY29uc3Qgc2V0dGxlSW5mbyA9IG1ha2VTZXR0bGVJbmZvKGhpc3RvcnlFbGVtZW50KVxuICAgICAgaGFuZGxlVGl0bGUoZnJhZ21lbnQudGl0bGUpXG4gICAgICBzd2FwSW5uZXJIVE1MKGhpc3RvcnlFbGVtZW50LCBmcmFnbWVudCwgc2V0dGxlSW5mbylcbiAgICAgIHNldHRsZUltbWVkaWF0ZWx5KHNldHRsZUluZm8udGFza3MpXG4gICAgICBnZXRXaW5kb3coKS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgY2FjaGVkLnNjcm9sbClcbiAgICAgIH0sIDApIC8vIG5leHQgJ3RpY2snLCBzbyBicm93c2VyIGhhcyB0aW1lIHRvIHJlbmRlciBsYXlvdXRcbiAgICAgIGN1cnJlbnRQYXRoRm9ySGlzdG9yeSA9IHBhdGhcbiAgICAgIHRyaWdnZXJFdmVudChnZXREb2N1bWVudCgpLmJvZHksICdodG14Omhpc3RvcnlSZXN0b3JlJywgeyBwYXRoLCBpdGVtOiBjYWNoZWQgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGh0bXguY29uZmlnLnJlZnJlc2hPbkhpc3RvcnlNaXNzKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IG9wdGlvbmFsIHBhcmFtZXRlciBpbiByZWxvYWQoKSBmdW5jdGlvbiB0aHJvd3MgZXJyb3JcbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5yZXNvbHZlZFJlZmVyZW5jZVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2FkSGlzdG9yeUZyb21TZXJ2ZXIocGF0aClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHJldHVybnMge0VsZW1lbnRbXX1cbiAgICovXG4gIGZ1bmN0aW9uIGFkZFJlcXVlc3RJbmRpY2F0b3JDbGFzc2VzKGVsdCkge1xuICAgIGxldCBpbmRpY2F0b3JzID0gLyoqIEB0eXBlIEVsZW1lbnRbXSAqLyAoZmluZEF0dHJpYnV0ZVRhcmdldHMoZWx0LCAnaHgtaW5kaWNhdG9yJykpXG4gICAgaWYgKGluZGljYXRvcnMgPT0gbnVsbCkge1xuICAgICAgaW5kaWNhdG9ycyA9IFtlbHRdXG4gICAgfVxuICAgIGZvckVhY2goaW5kaWNhdG9ycywgZnVuY3Rpb24oaWMpIHtcbiAgICAgIGNvbnN0IGludGVybmFsRGF0YSA9IGdldEludGVybmFsRGF0YShpYylcbiAgICAgIGludGVybmFsRGF0YS5yZXF1ZXN0Q291bnQgPSAoaW50ZXJuYWxEYXRhLnJlcXVlc3RDb3VudCB8fCAwKSArIDFcbiAgICAgIGljLmNsYXNzTGlzdC5hZGQuY2FsbChpYy5jbGFzc0xpc3QsIGh0bXguY29uZmlnLnJlcXVlc3RDbGFzcylcbiAgICB9KVxuICAgIHJldHVybiBpbmRpY2F0b3JzXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHJldHVybnMge0VsZW1lbnRbXX1cbiAgICovXG4gIGZ1bmN0aW9uIGRpc2FibGVFbGVtZW50cyhlbHQpIHtcbiAgICBsZXQgZGlzYWJsZWRFbHRzID0gLyoqIEB0eXBlIEVsZW1lbnRbXSAqLyAoZmluZEF0dHJpYnV0ZVRhcmdldHMoZWx0LCAnaHgtZGlzYWJsZWQtZWx0JykpXG4gICAgaWYgKGRpc2FibGVkRWx0cyA9PSBudWxsKSB7XG4gICAgICBkaXNhYmxlZEVsdHMgPSBbXVxuICAgIH1cbiAgICBmb3JFYWNoKGRpc2FibGVkRWx0cywgZnVuY3Rpb24oZGlzYWJsZWRFbGVtZW50KSB7XG4gICAgICBjb25zdCBpbnRlcm5hbERhdGEgPSBnZXRJbnRlcm5hbERhdGEoZGlzYWJsZWRFbGVtZW50KVxuICAgICAgaW50ZXJuYWxEYXRhLnJlcXVlc3RDb3VudCA9IChpbnRlcm5hbERhdGEucmVxdWVzdENvdW50IHx8IDApICsgMVxuICAgICAgZGlzYWJsZWRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgIGRpc2FibGVkRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGlzYWJsZWQtYnktaHRteCcsICcnKVxuICAgIH0pXG4gICAgcmV0dXJuIGRpc2FibGVkRWx0c1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudFtdfSBpbmRpY2F0b3JzXG4gICAqIEBwYXJhbSB7RWxlbWVudFtdfSBkaXNhYmxlZFxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlUmVxdWVzdEluZGljYXRvcnMoaW5kaWNhdG9ycywgZGlzYWJsZWQpIHtcbiAgICBmb3JFYWNoKGluZGljYXRvcnMsIGZ1bmN0aW9uKGljKSB7XG4gICAgICBjb25zdCBpbnRlcm5hbERhdGEgPSBnZXRJbnRlcm5hbERhdGEoaWMpXG4gICAgICBpbnRlcm5hbERhdGEucmVxdWVzdENvdW50ID0gKGludGVybmFsRGF0YS5yZXF1ZXN0Q291bnQgfHwgMCkgLSAxXG4gICAgICBpZiAoaW50ZXJuYWxEYXRhLnJlcXVlc3RDb3VudCA9PT0gMCkge1xuICAgICAgICBpYy5jbGFzc0xpc3QucmVtb3ZlLmNhbGwoaWMuY2xhc3NMaXN0LCBodG14LmNvbmZpZy5yZXF1ZXN0Q2xhc3MpXG4gICAgICB9XG4gICAgfSlcbiAgICBmb3JFYWNoKGRpc2FibGVkLCBmdW5jdGlvbihkaXNhYmxlZEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGludGVybmFsRGF0YSA9IGdldEludGVybmFsRGF0YShkaXNhYmxlZEVsZW1lbnQpXG4gICAgICBpbnRlcm5hbERhdGEucmVxdWVzdENvdW50ID0gKGludGVybmFsRGF0YS5yZXF1ZXN0Q291bnQgfHwgMCkgLSAxXG4gICAgICBpZiAoaW50ZXJuYWxEYXRhLnJlcXVlc3RDb3VudCA9PT0gMCkge1xuICAgICAgICBkaXNhYmxlZEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIGRpc2FibGVkRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZGlzYWJsZWQtYnktaHRteCcpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIElucHV0IFZhbHVlIFByb2Nlc3NpbmdcbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50W119IHByb2Nlc3NlZFxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGhhdmVTZWVuTm9kZShwcm9jZXNzZWQsIGVsdCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvY2Vzc2VkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBub2RlID0gcHJvY2Vzc2VkW2ldXG4gICAgICBpZiAobm9kZS5pc1NhbWVOb2RlKGVsdCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBzaG91bGRJbmNsdWRlKGVsZW1lbnQpIHtcbiAgICAvLyBDYXN0IHRvIHRyaWNrIHRzYywgdW5kZWZpbmVkIHZhbHVlcyB3aWxsIHdvcmsgZmluZSBoZXJlXG4gICAgY29uc3QgZWx0ID0gLyoqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50fSAqLyAoZWxlbWVudClcbiAgICBpZiAoZWx0Lm5hbWUgPT09ICcnIHx8IGVsdC5uYW1lID09IG51bGwgfHwgZWx0LmRpc2FibGVkIHx8IGNsb3Nlc3QoZWx0LCAnZmllbGRzZXRbZGlzYWJsZWRdJykpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICAvLyBpZ25vcmUgXCJzdWJtaXR0ZXJcIiB0eXBlcyAoc2VlIGpRdWVyeSBzcmMvc2VyaWFsaXplLmpzKVxuICAgIGlmIChlbHQudHlwZSA9PT0gJ2J1dHRvbicgfHwgZWx0LnR5cGUgPT09ICdzdWJtaXQnIHx8IGVsdC50YWdOYW1lID09PSAnaW1hZ2UnIHx8IGVsdC50YWdOYW1lID09PSAncmVzZXQnIHx8IGVsdC50YWdOYW1lID09PSAnZmlsZScpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAoZWx0LnR5cGUgPT09ICdjaGVja2JveCcgfHwgZWx0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIHJldHVybiBlbHQuY2hlY2tlZFxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fEZvcm1EYXRhRW50cnlWYWx1ZX0gdmFsdWVcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGEgKi9cbiAgZnVuY3Rpb24gYWRkVmFsdWVUb0Zvcm1EYXRhKG5hbWUsIHZhbHVlLCBmb3JtRGF0YSkge1xuICAgIGlmIChuYW1lICE9IG51bGwgJiYgdmFsdWUgIT0gbnVsbCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24odikgeyBmb3JtRGF0YS5hcHBlbmQobmFtZSwgdikgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IHZhbHVlXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhICovXG4gIGZ1bmN0aW9uIHJlbW92ZVZhbHVlRnJvbUZvcm1EYXRhKG5hbWUsIHZhbHVlLCBmb3JtRGF0YSkge1xuICAgIGlmIChuYW1lICE9IG51bGwgJiYgdmFsdWUgIT0gbnVsbCkge1xuICAgICAgbGV0IHZhbHVlcyA9IGZvcm1EYXRhLmdldEFsbChuYW1lKVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlcyA9IHZhbHVlcy5maWx0ZXIodiA9PiB2YWx1ZS5pbmRleE9mKHYpIDwgMClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlcyA9IHZhbHVlcy5maWx0ZXIodiA9PiB2ICE9PSB2YWx1ZSlcbiAgICAgIH1cbiAgICAgIGZvcm1EYXRhLmRlbGV0ZShuYW1lKVxuICAgICAgZm9yRWFjaCh2YWx1ZXMsIHYgPT4gZm9ybURhdGEuYXBwZW5kKG5hbWUsIHYpKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnRbXX0gcHJvY2Vzc2VkXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhXG4gICAqIEBwYXJhbSB7SHRteEVsZW1lbnRWYWxpZGF0aW9uRXJyb3JbXX0gZXJyb3JzXG4gICAqIEBwYXJhbSB7RWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fEhUTUxTZWxlY3RFbGVtZW50fEhUTUxGb3JtRWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsaWRhdGVcbiAgICovXG4gIGZ1bmN0aW9uIHByb2Nlc3NJbnB1dFZhbHVlKHByb2Nlc3NlZCwgZm9ybURhdGEsIGVycm9ycywgZWx0LCB2YWxpZGF0ZSkge1xuICAgIGlmIChlbHQgPT0gbnVsbCB8fCBoYXZlU2Vlbk5vZGUocHJvY2Vzc2VkLCBlbHQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzc2VkLnB1c2goZWx0KVxuICAgIH1cbiAgICBpZiAoc2hvdWxkSW5jbHVkZShlbHQpKSB7XG4gICAgICBjb25zdCBuYW1lID0gZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ25hbWUnKVxuICAgICAgLy8gQHRzLWlnbm9yZSB2YWx1ZSB3aWxsIGJlIHVuZGVmaW5lZCBmb3Igbm9uLWlucHV0IGVsZW1lbnRzLCB3aGljaCBpcyBmaW5lXG4gICAgICBsZXQgdmFsdWUgPSBlbHQudmFsdWVcbiAgICAgIGlmIChlbHQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJiBlbHQubXVsdGlwbGUpIHtcbiAgICAgICAgdmFsdWUgPSB0b0FycmF5KGVsdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb246Y2hlY2tlZCcpKS5tYXAoZnVuY3Rpb24oZSkgeyByZXR1cm4gKC8qKiBAdHlwZSBIVE1MT3B0aW9uRWxlbWVudCAqLyhlKSkudmFsdWUgfSlcbiAgICAgIH1cbiAgICAgIC8vIGluY2x1ZGUgZmlsZSBpbnB1dHNcbiAgICAgIGlmIChlbHQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsdC5maWxlcykge1xuICAgICAgICB2YWx1ZSA9IHRvQXJyYXkoZWx0LmZpbGVzKVxuICAgICAgfVxuICAgICAgYWRkVmFsdWVUb0Zvcm1EYXRhKG5hbWUsIHZhbHVlLCBmb3JtRGF0YSlcbiAgICAgIGlmICh2YWxpZGF0ZSkge1xuICAgICAgICB2YWxpZGF0ZUVsZW1lbnQoZWx0LCBlcnJvcnMpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbHQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgIGZvckVhY2goZWx0LmVsZW1lbnRzLCBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICBpZiAocHJvY2Vzc2VkLmluZGV4T2YoaW5wdXQpID49IDApIHtcbiAgICAgICAgICAvLyBUaGUgaW5wdXQgaGFzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQgYW5kIGFkZGVkIHRvIHRoZSB2YWx1ZXMsIGJ1dCB0aGUgRm9ybURhdGEgdGhhdCB3aWxsIGJlXG4gICAgICAgICAgLy8gIGNvbnN0cnVjdGVkIHJpZ2h0IGFmdGVyIG9uIHRoZSBmb3JtLCB3aWxsIGluY2x1ZGUgaXQgb25jZSBhZ2Fpbi4gU28gcmVtb3ZlIHRoYXQgaW5wdXQncyB2YWx1ZVxuICAgICAgICAgIC8vICBub3cgdG8gYXZvaWQgZHVwbGljYXRlc1xuICAgICAgICAgIHJlbW92ZVZhbHVlRnJvbUZvcm1EYXRhKGlucHV0Lm5hbWUsIGlucHV0LnZhbHVlLCBmb3JtRGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzZWQucHVzaChpbnB1dClcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsaWRhdGUpIHtcbiAgICAgICAgICB2YWxpZGF0ZUVsZW1lbnQoaW5wdXQsIGVycm9ycylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIG5ldyBGb3JtRGF0YShlbHQpLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRmlsZSAmJiB2YWx1ZS5uYW1lID09PSAnJykge1xuICAgICAgICAgIHJldHVybiAvLyBpZ25vcmUgbm8tbmFtZSBmaWxlc1xuICAgICAgICB9XG4gICAgICAgIGFkZFZhbHVlVG9Gb3JtRGF0YShuYW1lLCB2YWx1ZSwgZm9ybURhdGEpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcGFyYW0ge0h0bXhFbGVtZW50VmFsaWRhdGlvbkVycm9yW119IGVycm9yc1xuICAgKi9cbiAgZnVuY3Rpb24gdmFsaWRhdGVFbGVtZW50KGVsdCwgZXJyb3JzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnQgJiBFbGVtZW50SW50ZXJuYWxzfSAqLyAoZWx0KVxuICAgIGlmIChlbGVtZW50LndpbGxWYWxpZGF0ZSkge1xuICAgICAgdHJpZ2dlckV2ZW50KGVsZW1lbnQsICdodG14OnZhbGlkYXRpb246dmFsaWRhdGUnKVxuICAgICAgaWYgKCFlbGVtZW50LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBlcnJvcnMucHVzaCh7IGVsdDogZWxlbWVudCwgbWVzc2FnZTogZWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZSwgdmFsaWRpdHk6IGVsZW1lbnQudmFsaWRpdHkgfSlcbiAgICAgICAgdHJpZ2dlckV2ZW50KGVsZW1lbnQsICdodG14OnZhbGlkYXRpb246ZmFpbGVkJywgeyBtZXNzYWdlOiBlbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlLCB2YWxpZGl0eTogZWxlbWVudC52YWxpZGl0eSB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB2YWx1ZXMgaW4gdGhlIG9uZSBGb3JtRGF0YSB3aXRoIHRob3NlIGZyb20gYW5vdGhlci5cbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gcmVjZWl2ZXIgdGhlIGZvcm1kYXRhIHRoYXQgd2lsbCBiZSBtdXRhdGVkXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IGRvbm9yIHRoZSBmb3JtZGF0YSB0aGF0IHdpbGwgcHJvdmlkZSB0aGUgb3ZlcnJpZGluZyB2YWx1ZXNcbiAgICogQHJldHVybnMge0Zvcm1EYXRhfSB0aGUge0BsaW5rY29kZSByZWNlaXZlcn1cbiAgICovXG4gIGZ1bmN0aW9uIG92ZXJyaWRlRm9ybURhdGEocmVjZWl2ZXIsIGRvbm9yKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgZG9ub3Iua2V5cygpKSB7XG4gICAgICByZWNlaXZlci5kZWxldGUoa2V5KVxuICAgIH1cbiAgICBkb25vci5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgIHJlY2VpdmVyLmFwcGVuZChrZXksIHZhbHVlKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY2VpdmVyXG4gIH1cblxuICAvKipcbiAqIEBwYXJhbSB7RWxlbWVudHxIVE1MRm9ybUVsZW1lbnR9IGVsdFxuICogQHBhcmFtIHtIdHRwVmVyYn0gdmVyYlxuICogQHJldHVybnMge3tlcnJvcnM6IEh0bXhFbGVtZW50VmFsaWRhdGlvbkVycm9yW10sIGZvcm1EYXRhOiBGb3JtRGF0YSwgdmFsdWVzOiBPYmplY3R9fVxuICovXG4gIGZ1bmN0aW9uIGdldElucHV0VmFsdWVzKGVsdCwgdmVyYikge1xuICAgIC8qKiBAdHlwZSBFbGVtZW50W10gKi9cbiAgICBjb25zdCBwcm9jZXNzZWQgPSBbXVxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICBjb25zdCBwcmlvcml0eUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAvKiogQHR5cGUgSHRteEVsZW1lbnRWYWxpZGF0aW9uRXJyb3JbXSAqL1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG4gICAgY29uc3QgaW50ZXJuYWxEYXRhID0gZ2V0SW50ZXJuYWxEYXRhKGVsdClcbiAgICBpZiAoaW50ZXJuYWxEYXRhLmxhc3RCdXR0b25DbGlja2VkICYmICFib2R5Q29udGFpbnMoaW50ZXJuYWxEYXRhLmxhc3RCdXR0b25DbGlja2VkKSkge1xuICAgICAgaW50ZXJuYWxEYXRhLmxhc3RCdXR0b25DbGlja2VkID0gbnVsbFxuICAgIH1cblxuICAgIC8vIG9ubHkgdmFsaWRhdGUgd2hlbiBmb3JtIGlzIGRpcmVjdGx5IHN1Ym1pdHRlZCBhbmQgbm92YWxpZGF0ZSBvciBmb3Jtbm92YWxpZGF0ZSBhcmUgbm90IHNldFxuICAgIC8vIG9yIGlmIHRoZSBlbGVtZW50IGhhcyBhbiBleHBsaWNpdCBoeC12YWxpZGF0ZT1cInRydWVcIiBvbiBpdFxuICAgIGxldCB2YWxpZGF0ZSA9IChlbHQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQgJiYgZWx0Lm5vVmFsaWRhdGUgIT09IHRydWUpIHx8IGdldEF0dHJpYnV0ZVZhbHVlKGVsdCwgJ2h4LXZhbGlkYXRlJykgPT09ICd0cnVlJ1xuICAgIGlmIChpbnRlcm5hbERhdGEubGFzdEJ1dHRvbkNsaWNrZWQpIHtcbiAgICAgIHZhbGlkYXRlID0gdmFsaWRhdGUgJiYgaW50ZXJuYWxEYXRhLmxhc3RCdXR0b25DbGlja2VkLmZvcm1Ob1ZhbGlkYXRlICE9PSB0cnVlXG4gICAgfVxuXG4gICAgLy8gZm9yIGEgbm9uLUdFVCBpbmNsdWRlIHRoZSBjbG9zZXN0IGZvcm1cbiAgICBpZiAodmVyYiAhPT0gJ2dldCcpIHtcbiAgICAgIHByb2Nlc3NJbnB1dFZhbHVlKHByb2Nlc3NlZCwgcHJpb3JpdHlGb3JtRGF0YSwgZXJyb3JzLCBjbG9zZXN0KGVsdCwgJ2Zvcm0nKSwgdmFsaWRhdGUpXG4gICAgfVxuXG4gICAgLy8gaW5jbHVkZSB0aGUgZWxlbWVudCBpdHNlbGZcbiAgICBwcm9jZXNzSW5wdXRWYWx1ZShwcm9jZXNzZWQsIGZvcm1EYXRhLCBlcnJvcnMsIGVsdCwgdmFsaWRhdGUpXG5cbiAgICAvLyBpZiBhIGJ1dHRvbiBvciBzdWJtaXQgd2FzIGNsaWNrZWQgbGFzdCwgaW5jbHVkZSBpdHMgdmFsdWVcbiAgICBpZiAoaW50ZXJuYWxEYXRhLmxhc3RCdXR0b25DbGlja2VkIHx8IGVsdC50YWdOYW1lID09PSAnQlVUVE9OJyB8fFxuICAgIChlbHQudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBnZXRSYXdBdHRyaWJ1dGUoZWx0LCAndHlwZScpID09PSAnc3VibWl0JykpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGludGVybmFsRGF0YS5sYXN0QnV0dG9uQ2xpY2tlZCB8fCAoLyoqIEB0eXBlIEhUTUxJbnB1dEVsZW1lbnR8SFRNTEJ1dHRvbkVsZW1lbnQgKi8oZWx0KSlcbiAgICAgIGNvbnN0IG5hbWUgPSBnZXRSYXdBdHRyaWJ1dGUoYnV0dG9uLCAnbmFtZScpXG4gICAgICBhZGRWYWx1ZVRvRm9ybURhdGEobmFtZSwgYnV0dG9uLnZhbHVlLCBwcmlvcml0eUZvcm1EYXRhKVxuICAgIH1cblxuICAgIC8vIGluY2x1ZGUgYW55IGV4cGxpY2l0IGluY2x1ZGVzXG4gICAgY29uc3QgaW5jbHVkZXMgPSBmaW5kQXR0cmlidXRlVGFyZ2V0cyhlbHQsICdoeC1pbmNsdWRlJylcbiAgICBmb3JFYWNoKGluY2x1ZGVzLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICBwcm9jZXNzSW5wdXRWYWx1ZShwcm9jZXNzZWQsIGZvcm1EYXRhLCBlcnJvcnMsIGFzRWxlbWVudChub2RlKSwgdmFsaWRhdGUpXG4gICAgICAvLyBpZiBhIG5vbi1mb3JtIGlzIGluY2x1ZGVkLCBpbmNsdWRlIGFueSBpbnB1dCB2YWx1ZXMgd2l0aGluIGl0XG4gICAgICBpZiAoIW1hdGNoZXMobm9kZSwgJ2Zvcm0nKSkge1xuICAgICAgICBmb3JFYWNoKGFzUGFyZW50Tm9kZShub2RlKS5xdWVyeVNlbGVjdG9yQWxsKElOUFVUX1NFTEVDVE9SKSwgZnVuY3Rpb24oZGVzY2VuZGFudCkge1xuICAgICAgICAgIHByb2Nlc3NJbnB1dFZhbHVlKHByb2Nlc3NlZCwgZm9ybURhdGEsIGVycm9ycywgZGVzY2VuZGFudCwgdmFsaWRhdGUpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIHZhbHVlcyBmcm9tIGEgPGZvcm0+IHRha2UgcHJlY2VkZW5jZSwgb3ZlcnJpZGluZyB0aGUgcmVndWxhciB2YWx1ZXNcbiAgICBvdmVycmlkZUZvcm1EYXRhKGZvcm1EYXRhLCBwcmlvcml0eUZvcm1EYXRhKVxuXG4gICAgcmV0dXJuIHsgZXJyb3JzLCBmb3JtRGF0YSwgdmFsdWVzOiBmb3JtRGF0YVByb3h5KGZvcm1EYXRhKSB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJldHVyblN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge2FueX0gcmVhbFZhbHVlXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBhcHBlbmRQYXJhbShyZXR1cm5TdHIsIG5hbWUsIHJlYWxWYWx1ZSkge1xuICAgIGlmIChyZXR1cm5TdHIgIT09ICcnKSB7XG4gICAgICByZXR1cm5TdHIgKz0gJyYnXG4gICAgfVxuICAgIGlmIChTdHJpbmcocmVhbFZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgIHJlYWxWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KHJlYWxWYWx1ZSlcbiAgICB9XG4gICAgY29uc3QgcyA9IGVuY29kZVVSSUNvbXBvbmVudChyZWFsVmFsdWUpXG4gICAgcmV0dXJuU3RyICs9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSArICc9JyArIHNcbiAgICByZXR1cm4gcmV0dXJuU3RyXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtGb3JtRGF0YXxPYmplY3R9IHZhbHVlc1xuICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICovXG4gIGZ1bmN0aW9uIHVybEVuY29kZSh2YWx1ZXMpIHtcbiAgICB2YWx1ZXMgPSBmb3JtRGF0YUZyb21PYmplY3QodmFsdWVzKVxuICAgIGxldCByZXR1cm5TdHIgPSAnJ1xuICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgIHJldHVyblN0ciA9IGFwcGVuZFBhcmFtKHJldHVyblN0ciwga2V5LCB2YWx1ZSlcbiAgICB9KVxuICAgIHJldHVybiByZXR1cm5TdHJcbiAgfVxuXG4gIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIEFqYXhcbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAvKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IHByb21wdFxuICogQHJldHVybnMge0h0bXhIZWFkZXJTcGVjaWZpY2F0aW9ufVxuICovXG4gIGZ1bmN0aW9uIGdldEhlYWRlcnMoZWx0LCB0YXJnZXQsIHByb21wdCkge1xuICAgIC8qKiBAdHlwZSBIdG14SGVhZGVyU3BlY2lmaWNhdGlvbiAqL1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAnSFgtUmVxdWVzdCc6ICd0cnVlJyxcbiAgICAgICdIWC1UcmlnZ2VyJzogZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ2lkJyksXG4gICAgICAnSFgtVHJpZ2dlci1OYW1lJzogZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ25hbWUnKSxcbiAgICAgICdIWC1UYXJnZXQnOiBnZXRBdHRyaWJ1dGVWYWx1ZSh0YXJnZXQsICdpZCcpLFxuICAgICAgJ0hYLUN1cnJlbnQtVVJMJzogZ2V0RG9jdW1lbnQoKS5sb2NhdGlvbi5ocmVmXG4gICAgfVxuICAgIGdldFZhbHVlc0ZvckVsZW1lbnQoZWx0LCAnaHgtaGVhZGVycycsIGZhbHNlLCBoZWFkZXJzKVxuICAgIGlmIChwcm9tcHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaGVhZGVyc1snSFgtUHJvbXB0J10gPSBwcm9tcHRcbiAgICB9XG4gICAgaWYgKGdldEludGVybmFsRGF0YShlbHQpLmJvb3N0ZWQpIHtcbiAgICAgIGhlYWRlcnNbJ0hYLUJvb3N0ZWQnXSA9ICd0cnVlJ1xuICAgIH1cbiAgICByZXR1cm4gaGVhZGVyc1xuICB9XG5cbiAgLyoqXG4gKiBmaWx0ZXJWYWx1ZXMgdGFrZXMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgZm9ybSBpbnB1dCB2YWx1ZXNcbiAqIGFuZCByZXR1cm5zIGEgbmV3IG9iamVjdCB0aGF0IG9ubHkgY29udGFpbnMga2V5cyB0aGF0IGFyZVxuICogc3BlY2lmaWVkIGJ5IHRoZSBjbG9zZXN0IFwiaHgtcGFyYW1zXCIgYXR0cmlidXRlXG4gKiBAcGFyYW0ge0Zvcm1EYXRhfSBpbnB1dFZhbHVlc1xuICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAqIEByZXR1cm5zIHtGb3JtRGF0YX1cbiAqL1xuICBmdW5jdGlvbiBmaWx0ZXJWYWx1ZXMoaW5wdXRWYWx1ZXMsIGVsdCkge1xuICAgIGNvbnN0IHBhcmFtc1ZhbHVlID0gZ2V0Q2xvc2VzdEF0dHJpYnV0ZVZhbHVlKGVsdCwgJ2h4LXBhcmFtcycpXG4gICAgaWYgKHBhcmFtc1ZhbHVlKSB7XG4gICAgICBpZiAocGFyYW1zVmFsdWUgPT09ICdub25lJykge1xuICAgICAgICByZXR1cm4gbmV3IEZvcm1EYXRhKClcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zVmFsdWUgPT09ICcqJykge1xuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZXNcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zVmFsdWUuaW5kZXhPZignbm90ICcpID09PSAwKSB7XG4gICAgICAgIGZvckVhY2gocGFyYW1zVmFsdWUuc3Vic3RyKDQpLnNwbGl0KCcsJyksIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICBuYW1lID0gbmFtZS50cmltKClcbiAgICAgICAgICBpbnB1dFZhbHVlcy5kZWxldGUobmFtZSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWVzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdWYWx1ZXMgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICBmb3JFYWNoKHBhcmFtc1ZhbHVlLnNwbGl0KCcsJyksIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICBuYW1lID0gbmFtZS50cmltKClcbiAgICAgICAgICBpZiAoaW5wdXRWYWx1ZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICBpbnB1dFZhbHVlcy5nZXRBbGwobmFtZSkuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBuZXdWYWx1ZXMuYXBwZW5kKG5hbWUsIHZhbHVlKSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaW5wdXRWYWx1ZXNcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzQW5jaG9yTGluayhlbHQpIHtcbiAgICByZXR1cm4gISFnZXRSYXdBdHRyaWJ1dGUoZWx0LCAnaHJlZicpICYmIGdldFJhd0F0dHJpYnV0ZShlbHQsICdocmVmJykuaW5kZXhPZignIycpID49IDBcbiAgfVxuXG4gIC8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAqIEBwYXJhbSB7SHRteFN3YXBTdHlsZX0gW3N3YXBJbmZvT3ZlcnJpZGVdXG4gKiBAcmV0dXJucyB7SHRteFN3YXBTcGVjaWZpY2F0aW9ufVxuICovXG4gIGZ1bmN0aW9uIGdldFN3YXBTcGVjaWZpY2F0aW9uKGVsdCwgc3dhcEluZm9PdmVycmlkZSkge1xuICAgIGNvbnN0IHN3YXBJbmZvID0gc3dhcEluZm9PdmVycmlkZSB8fCBnZXRDbG9zZXN0QXR0cmlidXRlVmFsdWUoZWx0LCAnaHgtc3dhcCcpXG4gICAgLyoqIEB0eXBlIEh0bXhTd2FwU3BlY2lmaWNhdGlvbiAqL1xuICAgIGNvbnN0IHN3YXBTcGVjID0ge1xuICAgICAgc3dhcFN0eWxlOiBnZXRJbnRlcm5hbERhdGEoZWx0KS5ib29zdGVkID8gJ2lubmVySFRNTCcgOiBodG14LmNvbmZpZy5kZWZhdWx0U3dhcFN0eWxlLFxuICAgICAgc3dhcERlbGF5OiBodG14LmNvbmZpZy5kZWZhdWx0U3dhcERlbGF5LFxuICAgICAgc2V0dGxlRGVsYXk6IGh0bXguY29uZmlnLmRlZmF1bHRTZXR0bGVEZWxheVxuICAgIH1cbiAgICBpZiAoaHRteC5jb25maWcuc2Nyb2xsSW50b1ZpZXdPbkJvb3N0ICYmIGdldEludGVybmFsRGF0YShlbHQpLmJvb3N0ZWQgJiYgIWlzQW5jaG9yTGluayhlbHQpKSB7XG4gICAgICBzd2FwU3BlYy5zaG93ID0gJ3RvcCdcbiAgICB9XG4gICAgaWYgKHN3YXBJbmZvKSB7XG4gICAgICBjb25zdCBzcGxpdCA9IHNwbGl0T25XaGl0ZXNwYWNlKHN3YXBJbmZvKVxuICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxpdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3BsaXRbaV1cbiAgICAgICAgICBpZiAodmFsdWUuaW5kZXhPZignc3dhcDonKSA9PT0gMCkge1xuICAgICAgICAgICAgc3dhcFNwZWMuc3dhcERlbGF5ID0gcGFyc2VJbnRlcnZhbCh2YWx1ZS5zdWJzdHIoNSkpXG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKCdzZXR0bGU6JykgPT09IDApIHtcbiAgICAgICAgICAgIHN3YXBTcGVjLnNldHRsZURlbGF5ID0gcGFyc2VJbnRlcnZhbCh2YWx1ZS5zdWJzdHIoNykpXG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKCd0cmFuc2l0aW9uOicpID09PSAwKSB7XG4gICAgICAgICAgICBzd2FwU3BlYy50cmFuc2l0aW9uID0gdmFsdWUuc3Vic3RyKDExKSA9PT0gJ3RydWUnXG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKCdpZ25vcmVUaXRsZTonKSA9PT0gMCkge1xuICAgICAgICAgICAgc3dhcFNwZWMuaWdub3JlVGl0bGUgPSB2YWx1ZS5zdWJzdHIoMTIpID09PSAndHJ1ZSdcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmluZGV4T2YoJ3Njcm9sbDonKSA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsU3BlYyA9IHZhbHVlLnN1YnN0cig3KVxuICAgICAgICAgICAgdmFyIHNwbGl0U3BlYyA9IHNjcm9sbFNwZWMuc3BsaXQoJzonKVxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVmFsID0gc3BsaXRTcGVjLnBvcCgpXG4gICAgICAgICAgICB2YXIgc2VsZWN0b3JWYWwgPSBzcGxpdFNwZWMubGVuZ3RoID4gMCA/IHNwbGl0U3BlYy5qb2luKCc6JykgOiBudWxsXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBzd2FwU3BlYy5zY3JvbGwgPSBzY3JvbGxWYWxcbiAgICAgICAgICAgIHN3YXBTcGVjLnNjcm9sbFRhcmdldCA9IHNlbGVjdG9yVmFsXG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKCdzaG93OicpID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBzaG93U3BlYyA9IHZhbHVlLnN1YnN0cig1KVxuICAgICAgICAgICAgdmFyIHNwbGl0U3BlYyA9IHNob3dTcGVjLnNwbGl0KCc6JylcbiAgICAgICAgICAgIGNvbnN0IHNob3dWYWwgPSBzcGxpdFNwZWMucG9wKClcbiAgICAgICAgICAgIHZhciBzZWxlY3RvclZhbCA9IHNwbGl0U3BlYy5sZW5ndGggPiAwID8gc3BsaXRTcGVjLmpvaW4oJzonKSA6IG51bGxcbiAgICAgICAgICAgIHN3YXBTcGVjLnNob3cgPSBzaG93VmFsXG4gICAgICAgICAgICBzd2FwU3BlYy5zaG93VGFyZ2V0ID0gc2VsZWN0b3JWYWxcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmluZGV4T2YoJ2ZvY3VzLXNjcm9sbDonKSA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgZm9jdXNTY3JvbGxWYWwgPSB2YWx1ZS5zdWJzdHIoJ2ZvY3VzLXNjcm9sbDonLmxlbmd0aClcbiAgICAgICAgICAgIHN3YXBTcGVjLmZvY3VzU2Nyb2xsID0gZm9jdXNTY3JvbGxWYWwgPT0gJ3RydWUnXG4gICAgICAgICAgfSBlbHNlIGlmIChpID09IDApIHtcbiAgICAgICAgICAgIHN3YXBTcGVjLnN3YXBTdHlsZSA9IHZhbHVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvZ0Vycm9yKCdVbmtub3duIG1vZGlmaWVyIGluIGh4LXN3YXA6ICcgKyB2YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN3YXBTcGVjXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIHVzZXNGb3JtRGF0YShlbHQpIHtcbiAgICByZXR1cm4gZ2V0Q2xvc2VzdEF0dHJpYnV0ZVZhbHVlKGVsdCwgJ2h4LWVuY29kaW5nJykgPT09ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyB8fFxuICAgIChtYXRjaGVzKGVsdCwgJ2Zvcm0nKSAmJiBnZXRSYXdBdHRyaWJ1dGUoZWx0LCAnZW5jdHlwZScpID09PSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZpbHRlcmVkUGFyYW1ldGVyc1xuICAgKiBAcmV0dXJucyB7KnxzdHJpbmd8bnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIGVuY29kZVBhcmFtc0ZvckJvZHkoeGhyLCBlbHQsIGZpbHRlcmVkUGFyYW1ldGVycykge1xuICAgIGxldCBlbmNvZGVkUGFyYW1ldGVycyA9IG51bGxcbiAgICB3aXRoRXh0ZW5zaW9ucyhlbHQsIGZ1bmN0aW9uKGV4dGVuc2lvbikge1xuICAgICAgaWYgKGVuY29kZWRQYXJhbWV0ZXJzID09IG51bGwpIHtcbiAgICAgICAgZW5jb2RlZFBhcmFtZXRlcnMgPSBleHRlbnNpb24uZW5jb2RlUGFyYW1ldGVycyh4aHIsIGZpbHRlcmVkUGFyYW1ldGVycywgZWx0KVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKGVuY29kZWRQYXJhbWV0ZXJzICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBlbmNvZGVkUGFyYW1ldGVyc1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodXNlc0Zvcm1EYXRhKGVsdCkpIHtcbiAgICAgICAgLy8gRm9yY2UgY29udmVyc2lvbiB0byBhbiBhY3R1YWwgRm9ybURhdGEgb2JqZWN0IGluIGNhc2UgZmlsdGVyZWRQYXJhbWV0ZXJzIGlzIGEgZm9ybURhdGFQcm94eVxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2JpZ3NreXNvZnR3YXJlL2h0bXgvaXNzdWVzLzIzMTdcbiAgICAgICAgcmV0dXJuIG92ZXJyaWRlRm9ybURhdGEobmV3IEZvcm1EYXRhKCksIGZvcm1EYXRhRnJvbU9iamVjdChmaWx0ZXJlZFBhcmFtZXRlcnMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVybEVuY29kZShmaWx0ZXJlZFBhcmFtZXRlcnMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAqIEByZXR1cm5zIHtIdG14U2V0dGxlSW5mb31cbiAqL1xuICBmdW5jdGlvbiBtYWtlU2V0dGxlSW5mbyh0YXJnZXQpIHtcbiAgICByZXR1cm4geyB0YXNrczogW10sIGVsdHM6IFt0YXJnZXRdIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnRbXX0gY29udGVudFxuICAgKiBAcGFyYW0ge0h0bXhTd2FwU3BlY2lmaWNhdGlvbn0gc3dhcFNwZWNcbiAgICovXG4gIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbFN0YXRlKGNvbnRlbnQsIHN3YXBTcGVjKSB7XG4gICAgY29uc3QgZmlyc3QgPSBjb250ZW50WzBdXG4gICAgY29uc3QgbGFzdCA9IGNvbnRlbnRbY29udGVudC5sZW5ndGggLSAxXVxuICAgIGlmIChzd2FwU3BlYy5zY3JvbGwpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBudWxsXG4gICAgICBpZiAoc3dhcFNwZWMuc2Nyb2xsVGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldCA9IGFzRWxlbWVudChxdWVyeVNlbGVjdG9yRXh0KGZpcnN0LCBzd2FwU3BlYy5zY3JvbGxUYXJnZXQpKVxuICAgICAgfVxuICAgICAgaWYgKHN3YXBTcGVjLnNjcm9sbCA9PT0gJ3RvcCcgJiYgKGZpcnN0IHx8IHRhcmdldCkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IGZpcnN0XG4gICAgICAgIHRhcmdldC5zY3JvbGxUb3AgPSAwXG4gICAgICB9XG4gICAgICBpZiAoc3dhcFNwZWMuc2Nyb2xsID09PSAnYm90dG9tJyAmJiAobGFzdCB8fCB0YXJnZXQpKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldCB8fCBsYXN0XG4gICAgICAgIHRhcmdldC5zY3JvbGxUb3AgPSB0YXJnZXQuc2Nyb2xsSGVpZ2h0XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzd2FwU3BlYy5zaG93KSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gbnVsbFxuICAgICAgaWYgKHN3YXBTcGVjLnNob3dUYXJnZXQpIHtcbiAgICAgICAgbGV0IHRhcmdldFN0ciA9IHN3YXBTcGVjLnNob3dUYXJnZXRcbiAgICAgICAgaWYgKHN3YXBTcGVjLnNob3dUYXJnZXQgPT09ICd3aW5kb3cnKSB7XG4gICAgICAgICAgdGFyZ2V0U3RyID0gJ2JvZHknXG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0ID0gYXNFbGVtZW50KHF1ZXJ5U2VsZWN0b3JFeHQoZmlyc3QsIHRhcmdldFN0cikpXG4gICAgICB9XG4gICAgICBpZiAoc3dhcFNwZWMuc2hvdyA9PT0gJ3RvcCcgJiYgKGZpcnN0IHx8IHRhcmdldCkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IGZpcnN0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgRm9yIHNvbWUgcmVhc29uIHRzYyBkb2Vzbid0IHJlY29nbml6ZSBcImluc3RhbnRcIiBhcyBhIHZhbGlkIG9wdGlvbiBmb3Igbm93XG4gICAgICAgIHRhcmdldC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnc3RhcnQnLCBiZWhhdmlvcjogaHRteC5jb25maWcuc2Nyb2xsQmVoYXZpb3IgfSlcbiAgICAgIH1cbiAgICAgIGlmIChzd2FwU3BlYy5zaG93ID09PSAnYm90dG9tJyAmJiAobGFzdCB8fCB0YXJnZXQpKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldCB8fCBsYXN0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgRm9yIHNvbWUgcmVhc29uIHRzYyBkb2Vzbid0IHJlY29nbml6ZSBcImluc3RhbnRcIiBhcyBhIHZhbGlkIG9wdGlvbiBmb3Igbm93XG4gICAgICAgIHRhcmdldC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnZW5kJywgYmVoYXZpb3I6IGh0bXguY29uZmlnLnNjcm9sbEJlaGF2aW9yIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGV2YWxBc0RlZmF1bHRcbiAqIEBwYXJhbSB7T2JqZWN0PX0gdmFsdWVzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG4gIGZ1bmN0aW9uIGdldFZhbHVlc0ZvckVsZW1lbnQoZWx0LCBhdHRyLCBldmFsQXNEZWZhdWx0LCB2YWx1ZXMpIHtcbiAgICBpZiAodmFsdWVzID09IG51bGwpIHtcbiAgICAgIHZhbHVlcyA9IHt9XG4gICAgfVxuICAgIGlmIChlbHQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHZhbHVlc1xuICAgIH1cbiAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGdldEF0dHJpYnV0ZVZhbHVlKGVsdCwgYXR0cilcbiAgICBpZiAoYXR0cmlidXRlVmFsdWUpIHtcbiAgICAgIGxldCBzdHIgPSBhdHRyaWJ1dGVWYWx1ZS50cmltKClcbiAgICAgIGxldCBldmFsdWF0ZVZhbHVlID0gZXZhbEFzRGVmYXVsdFxuICAgICAgaWYgKHN0ciA9PT0gJ3Vuc2V0Jykge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdqYXZhc2NyaXB0OicpID09PSAwKSB7XG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHIoMTEpXG4gICAgICAgIGV2YWx1YXRlVmFsdWUgPSB0cnVlXG4gICAgICB9IGVsc2UgaWYgKHN0ci5pbmRleE9mKCdqczonKSA9PT0gMCkge1xuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKDMpXG4gICAgICAgIGV2YWx1YXRlVmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ3snKSAhPT0gMCkge1xuICAgICAgICBzdHIgPSAneycgKyBzdHIgKyAnfSdcbiAgICAgIH1cbiAgICAgIGxldCB2YXJzVmFsdWVzXG4gICAgICBpZiAoZXZhbHVhdGVWYWx1ZSkge1xuICAgICAgICB2YXJzVmFsdWVzID0gbWF5YmVFdmFsKGVsdCwgZnVuY3Rpb24oKSB7IHJldHVybiBGdW5jdGlvbigncmV0dXJuICgnICsgc3RyICsgJyknKSgpIH0sIHt9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyc1ZhbHVlcyA9IHBhcnNlSlNPTihzdHIpXG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YXJzVmFsdWVzKSB7XG4gICAgICAgIGlmICh2YXJzVmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpZiAodmFsdWVzW2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsdWVzW2tleV0gPSB2YXJzVmFsdWVzW2tleV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdldFZhbHVlc0ZvckVsZW1lbnQoYXNFbGVtZW50KHBhcmVudEVsdChlbHQpKSwgYXR0ciwgZXZhbEFzRGVmYXVsdCwgdmFsdWVzKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8c3RyaW5nfSBlbHRcbiAgICogQHBhcmFtIHsoKSA9PiBhbnl9IHRvRXZhbFxuICAgKiBAcGFyYW0ge2FueT19IGRlZmF1bHRWYWxcbiAgICogQHJldHVybnMge2FueX1cbiAgICovXG4gIGZ1bmN0aW9uIG1heWJlRXZhbChlbHQsIHRvRXZhbCwgZGVmYXVsdFZhbCkge1xuICAgIGlmIChodG14LmNvbmZpZy5hbGxvd0V2YWwpIHtcbiAgICAgIHJldHVybiB0b0V2YWwoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmlnZ2VyRXJyb3JFdmVudChlbHQsICdodG14OmV2YWxEaXNhbGxvd2VkRXJyb3InKVxuICAgICAgcmV0dXJuIGRlZmF1bHRWYWxcbiAgICB9XG4gIH1cblxuICAvKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gKiBAcGFyYW0geyo/fSBleHByZXNzaW9uVmFyc1xuICogQHJldHVybnNcbiAqL1xuICBmdW5jdGlvbiBnZXRIWFZhcnNGb3JFbGVtZW50KGVsdCwgZXhwcmVzc2lvblZhcnMpIHtcbiAgICByZXR1cm4gZ2V0VmFsdWVzRm9yRWxlbWVudChlbHQsICdoeC12YXJzJywgdHJ1ZSwgZXhwcmVzc2lvblZhcnMpXG4gIH1cblxuICAvKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gKiBAcGFyYW0geyo/fSBleHByZXNzaW9uVmFyc1xuICogQHJldHVybnNcbiAqL1xuICBmdW5jdGlvbiBnZXRIWFZhbHNGb3JFbGVtZW50KGVsdCwgZXhwcmVzc2lvblZhcnMpIHtcbiAgICByZXR1cm4gZ2V0VmFsdWVzRm9yRWxlbWVudChlbHQsICdoeC12YWxzJywgZmFsc2UsIGV4cHJlc3Npb25WYXJzKVxuICB9XG5cbiAgLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICogQHJldHVybnMge0Zvcm1EYXRhfVxuICovXG4gIGZ1bmN0aW9uIGdldEV4cHJlc3Npb25WYXJzKGVsdCkge1xuICAgIHJldHVybiBtZXJnZU9iamVjdHMoZ2V0SFhWYXJzRm9yRWxlbWVudChlbHQpLCBnZXRIWFZhbHNGb3JFbGVtZW50KGVsdCkpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoZWFkZXJcbiAgICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gaGVhZGVyVmFsdWVcbiAgICovXG4gIGZ1bmN0aW9uIHNhZmVseVNldEhlYWRlclZhbHVlKHhociwgaGVhZGVyLCBoZWFkZXJWYWx1ZSkge1xuICAgIGlmIChoZWFkZXJWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyLCBoZWFkZXJWYWx1ZSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIE9uIGFuIGV4Y2VwdGlvbiwgdHJ5IHRvIHNldCB0aGUgaGVhZGVyIFVSSSBlbmNvZGVkIGluc3RlYWRcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyLCBlbmNvZGVVUklDb21wb25lbnQoaGVhZGVyVmFsdWUpKVxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXIgKyAnLVVSSS1BdXRvRW5jb2RlZCcsICd0cnVlJylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdldFBhdGhGcm9tUmVzcG9uc2UoeGhyKSB7XG4gIC8vIE5COiBJRTExIGRvZXMgbm90IHN1cHBvcnQgdGhpcyBzdHVmZlxuICAgIGlmICh4aHIucmVzcG9uc2VVUkwgJiYgdHlwZW9mIChVUkwpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh4aHIucmVzcG9uc2VVUkwpXG4gICAgICAgIHJldHVybiB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRyaWdnZXJFcnJvckV2ZW50KGdldERvY3VtZW50KCkuYm9keSwgJ2h0bXg6YmFkUmVzcG9uc2VVcmwnLCB7IHVybDogeGhyLnJlc3BvbnNlVVJMIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICAgKiBAcGFyYW0ge1JlZ0V4cH0gcmVnZXhwXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBoYXNIZWFkZXIoeGhyLCByZWdleHApIHtcbiAgICByZXR1cm4gcmVnZXhwLnRlc3QoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKVxuICB9XG5cbiAgLyoqXG4gICAqIElzc3VlcyBhbiBodG14LXN0eWxlIEFKQVggcmVxdWVzdFxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNhamF4XG4gICAqXG4gICAqIEBwYXJhbSB7SHR0cFZlcmJ9IHZlcmJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggdGhlIFVSTCBwYXRoIHRvIG1ha2UgdGhlIEFKQVhcbiAgICogQHBhcmFtIHtFbGVtZW50fHN0cmluZ3xIdG14QWpheEhlbHBlckNvbnRleHR9IGNvbnRleHQgdGhlIGVsZW1lbnQgdG8gdGFyZ2V0IChkZWZhdWx0cyB0byB0aGUgKipib2R5KiopIHwgYSBzZWxlY3RvciBmb3IgdGhlIHRhcmdldCB8IGEgY29udGV4dCBvYmplY3QgdGhhdCBjb250YWlucyBhbnkgb2YgdGhlIGZvbGxvd2luZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgaW1tZWRpYXRlbHkgaWYgbm8gcmVxdWVzdCBpcyBzZW50LCBvciB3aGVuIHRoZSByZXF1ZXN0IGlzIGNvbXBsZXRlXG4gICAqL1xuICBmdW5jdGlvbiBhamF4SGVscGVyKHZlcmIsIHBhdGgsIGNvbnRleHQpIHtcbiAgICB2ZXJiID0gKC8qKiBAdHlwZSBIdHRwVmVyYiAqLyh2ZXJiLnRvTG93ZXJDYXNlKCkpKVxuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICBpZiAoY29udGV4dCBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgdHlwZW9mIGNvbnRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBpc3N1ZUFqYXhSZXF1ZXN0KHZlcmIsIHBhdGgsIG51bGwsIG51bGwsIHtcbiAgICAgICAgICB0YXJnZXRPdmVycmlkZTogcmVzb2x2ZVRhcmdldChjb250ZXh0KSxcbiAgICAgICAgICByZXR1cm5Qcm9taXNlOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaXNzdWVBamF4UmVxdWVzdCh2ZXJiLCBwYXRoLCByZXNvbHZlVGFyZ2V0KGNvbnRleHQuc291cmNlKSwgY29udGV4dC5ldmVudCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoYW5kbGVyOiBjb250ZXh0LmhhbmRsZXIsXG4gICAgICAgICAgICBoZWFkZXJzOiBjb250ZXh0LmhlYWRlcnMsXG4gICAgICAgICAgICB2YWx1ZXM6IGNvbnRleHQudmFsdWVzLFxuICAgICAgICAgICAgdGFyZ2V0T3ZlcnJpZGU6IHJlc29sdmVUYXJnZXQoY29udGV4dC50YXJnZXQpLFxuICAgICAgICAgICAgc3dhcE92ZXJyaWRlOiBjb250ZXh0LnN3YXAsXG4gICAgICAgICAgICBzZWxlY3Q6IGNvbnRleHQuc2VsZWN0LFxuICAgICAgICAgICAgcmV0dXJuUHJvbWlzZTogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpc3N1ZUFqYXhSZXF1ZXN0KHZlcmIsIHBhdGgsIG51bGwsIG51bGwsIHtcbiAgICAgICAgcmV0dXJuUHJvbWlzZTogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHJldHVybiB7RWxlbWVudFtdfVxuICAgKi9cbiAgZnVuY3Rpb24gaGllcmFyY2h5Rm9yRWx0KGVsdCkge1xuICAgIGNvbnN0IGFyciA9IFtdXG4gICAgd2hpbGUgKGVsdCkge1xuICAgICAgYXJyLnB1c2goZWx0KVxuICAgICAgZWx0ID0gZWx0LnBhcmVudEVsZW1lbnRcbiAgICB9XG4gICAgcmV0dXJuIGFyclxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7SHRteFJlcXVlc3RDb25maWd9IHJlcXVlc3RDb25maWdcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIHZlcmlmeVBhdGgoZWx0LCBwYXRoLCByZXF1ZXN0Q29uZmlnKSB7XG4gICAgbGV0IHNhbWVIb3N0XG4gICAgbGV0IHVybFxuICAgIGlmICh0eXBlb2YgVVJMID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB1cmwgPSBuZXcgVVJMKHBhdGgsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpXG4gICAgICBjb25zdCBvcmlnaW4gPSBkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW5cbiAgICAgIHNhbWVIb3N0ID0gb3JpZ2luID09PSB1cmwub3JpZ2luXG4gICAgfSBlbHNlIHtcbiAgICAvLyBJRTExIGRvZXNuJ3Qgc3VwcG9ydCBVUkxcbiAgICAgIHVybCA9IHBhdGhcbiAgICAgIHNhbWVIb3N0ID0gc3RhcnRzV2l0aChwYXRoLCBkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW4pXG4gICAgfVxuXG4gICAgaWYgKGh0bXguY29uZmlnLnNlbGZSZXF1ZXN0c09ubHkpIHtcbiAgICAgIGlmICghc2FtZUhvc3QpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDp2YWxpZGF0ZVVybCcsIG1lcmdlT2JqZWN0cyh7IHVybCwgc2FtZUhvc3QgfSwgcmVxdWVzdENvbmZpZykpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R8Rm9ybURhdGF9IG9ialxuICAgKiBAcmV0dXJuIHtGb3JtRGF0YX1cbiAgICovXG4gIGZ1bmN0aW9uIGZvcm1EYXRhRnJvbU9iamVjdChvYmopIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgRm9ybURhdGEpIHJldHVybiBvYmpcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XS5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgb2JqW2tleV0uZm9yRWFjaChmdW5jdGlvbih2KSB7IGZvcm1EYXRhLmFwcGVuZChrZXksIHYpIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9ialtrZXldID09PSAnb2JqZWN0JyAmJiAhKG9ialtrZXldIGluc3RhbmNlb2YgQmxvYikpIHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBKU09OLnN0cmluZ2lmeShvYmpba2V5XSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgb2JqW2tleV0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZvcm1EYXRhXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGFcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24gZm9ybURhdGFBcnJheVByb3h5KGZvcm1EYXRhLCBuYW1lLCBhcnJheSkge1xuICAgIC8vIG11dGF0aW5nIHRoZSBhcnJheSBzaG91bGQgbXV0YXRlIHRoZSB1bmRlcmx5aW5nIGZvcm0gZGF0YVxuICAgIHJldHVybiBuZXcgUHJveHkoYXJyYXksIHtcbiAgICAgIGdldDogZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdudW1iZXInKSByZXR1cm4gdGFyZ2V0W2tleV1cbiAgICAgICAgaWYgKGtleSA9PT0gJ2xlbmd0aCcpIHJldHVybiB0YXJnZXQubGVuZ3RoXG4gICAgICAgIGlmIChrZXkgPT09ICdwdXNoJykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2godmFsdWUpXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XS5hcHBseSh0YXJnZXQsIGFyZ3VtZW50cylcbiAgICAgICAgICAgIGZvcm1EYXRhLmRlbGV0ZShuYW1lKVxuICAgICAgICAgICAgdGFyZ2V0LmZvckVhY2goZnVuY3Rpb24odikgeyBmb3JtRGF0YS5hcHBlbmQobmFtZSwgdikgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0W2tleV0gJiYgdGFyZ2V0W2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldWzBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHRhcmdldCwgaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtpbmRleF0gPSB2YWx1ZVxuICAgICAgICBmb3JtRGF0YS5kZWxldGUobmFtZSlcbiAgICAgICAgdGFyZ2V0LmZvckVhY2goZnVuY3Rpb24odikgeyBmb3JtRGF0YS5hcHBlbmQobmFtZSwgdikgfSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBmdW5jdGlvbiBmb3JtRGF0YVByb3h5KGZvcm1EYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShmb3JtRGF0YSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbih0YXJnZXQsIG5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIC8vIEZvcndhcmQgc3ltYm9sIGNhbGxzIHRvIHRoZSBGb3JtRGF0YSBpdHNlbGYgZGlyZWN0bHlcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBuYW1lKVxuICAgICAgICB9XG4gICAgICAgIGlmIChuYW1lID09PSAndG9KU09OJykge1xuICAgICAgICAgIC8vIFN1cHBvcnQgSlNPTi5zdHJpbmdpZnkgY2FsbCBvbiBwcm94eVxuICAgICAgICAgIHJldHVybiAoKSA9PiBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgLy8gV3JhcCBpbiBmdW5jdGlvbiB3aXRoIGFwcGx5IHRvIGNvcnJlY3RseSBiaW5kIHRoZSBGb3JtRGF0YSBjb250ZXh0LCBhcyBhIGRpcmVjdCBjYWxsIHdvdWxkIHJlc3VsdCBpbiBhbiBpbGxlZ2FsIGludm9jYXRpb24gZXJyb3JcbiAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtuYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gZm9ybURhdGFbbmFtZV0uYXBwbHkoZm9ybURhdGEsIGFyZ3VtZW50cylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtuYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhcnJheSA9IGZvcm1EYXRhLmdldEFsbChuYW1lKVxuICAgICAgICAvLyBUaG9zZSAyIHVuZGVmaW5lZCAmIHNpbmdsZSB2YWx1ZSByZXR1cm5zIGFyZSBmb3IgcmV0cm8tY29tcGF0aWJpbGl0eSBhcyB3ZSB3ZXJlbid0IHVzaW5nIEZvcm1EYXRhIGJlZm9yZVxuICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICB9IGVsc2UgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHJldHVybiBhcnJheVswXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmb3JtRGF0YUFycmF5UHJveHkodGFyZ2V0LCBuYW1lLCBhcnJheSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0LmRlbGV0ZShuYW1lKVxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlLmZvckVhY2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uKHYpIHsgdGFyZ2V0LmFwcGVuZChuYW1lLCB2KSB9KVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEJsb2IpKSB7XG4gICAgICAgICAgdGFyZ2V0LmFwcGVuZChuYW1lLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0LmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbih0YXJnZXQsIG5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRhcmdldC5kZWxldGUobmFtZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSxcbiAgICAgIC8vIFN1cHBvcnQgT2JqZWN0LmFzc2lnbiBjYWxsIGZyb20gcHJveHlcbiAgICAgIG93bktleXM6IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKE9iamVjdC5mcm9tRW50cmllcyh0YXJnZXQpKVxuICAgICAgfSxcbiAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24odGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QuZnJvbUVudHJpZXModGFyZ2V0KSwgcHJvcClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SHR0cFZlcmJ9IHZlcmJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICogQHBhcmFtIHtIdG14QWpheEV0Y30gW2V0Y11cbiAgICogQHBhcmFtIHtib29sZWFufSBbY29uZmlybWVkXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgZnVuY3Rpb24gaXNzdWVBamF4UmVxdWVzdCh2ZXJiLCBwYXRoLCBlbHQsIGV2ZW50LCBldGMsIGNvbmZpcm1lZCkge1xuICAgIGxldCByZXNvbHZlID0gbnVsbFxuICAgIGxldCByZWplY3QgPSBudWxsXG4gICAgZXRjID0gZXRjICE9IG51bGwgPyBldGMgOiB7fVxuICAgIGlmIChldGMucmV0dXJuUHJvbWlzZSAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24oX3Jlc29sdmUsIF9yZWplY3QpIHtcbiAgICAgICAgcmVzb2x2ZSA9IF9yZXNvbHZlXG4gICAgICAgIHJlamVjdCA9IF9yZWplY3RcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChlbHQgPT0gbnVsbCkge1xuICAgICAgZWx0ID0gZ2V0RG9jdW1lbnQoKS5ib2R5XG4gICAgfVxuICAgIGNvbnN0IHJlc3BvbnNlSGFuZGxlciA9IGV0Yy5oYW5kbGVyIHx8IGhhbmRsZUFqYXhSZXNwb25zZVxuICAgIGNvbnN0IHNlbGVjdCA9IGV0Yy5zZWxlY3QgfHwgbnVsbFxuXG4gICAgaWYgKCFib2R5Q29udGFpbnMoZWx0KSkge1xuICAgIC8vIGRvIG5vdCBpc3N1ZSByZXF1ZXN0cyBmb3IgZWxlbWVudHMgcmVtb3ZlZCBmcm9tIHRoZSBET01cbiAgICAgIG1heWJlQ2FsbChyZXNvbHZlKVxuICAgICAgcmV0dXJuIHByb21pc2VcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZXRjLnRhcmdldE92ZXJyaWRlIHx8IGFzRWxlbWVudChnZXRUYXJnZXQoZWx0KSlcbiAgICBpZiAodGFyZ2V0ID09IG51bGwgfHwgdGFyZ2V0ID09IERVTU1ZX0VMVCkge1xuICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZWx0LCAnaHRteDp0YXJnZXRFcnJvcicsIHsgdGFyZ2V0OiBnZXRBdHRyaWJ1dGVWYWx1ZShlbHQsICdoeC10YXJnZXQnKSB9KVxuICAgICAgbWF5YmVDYWxsKHJlamVjdClcbiAgICAgIHJldHVybiBwcm9taXNlXG4gICAgfVxuXG4gICAgbGV0IGVsdERhdGEgPSBnZXRJbnRlcm5hbERhdGEoZWx0KVxuICAgIGNvbnN0IHN1Ym1pdHRlciA9IGVsdERhdGEubGFzdEJ1dHRvbkNsaWNrZWRcblxuICAgIGlmIChzdWJtaXR0ZXIpIHtcbiAgICAgIGNvbnN0IGJ1dHRvblBhdGggPSBnZXRSYXdBdHRyaWJ1dGUoc3VibWl0dGVyLCAnZm9ybWFjdGlvbicpXG4gICAgICBpZiAoYnV0dG9uUGF0aCAhPSBudWxsKSB7XG4gICAgICAgIHBhdGggPSBidXR0b25QYXRoXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJ1dHRvblZlcmIgPSBnZXRSYXdBdHRyaWJ1dGUoc3VibWl0dGVyLCAnZm9ybW1ldGhvZCcpXG4gICAgICBpZiAoYnV0dG9uVmVyYiAhPSBudWxsKSB7XG4gICAgICAvLyBpZ25vcmUgYnV0dG9ucyB3aXRoIGZvcm1tZXRob2Q9XCJkaWFsb2dcIlxuICAgICAgICBpZiAoYnV0dG9uVmVyYi50b0xvd2VyQ2FzZSgpICE9PSAnZGlhbG9nJykge1xuICAgICAgICAgIHZlcmIgPSAoLyoqIEB0eXBlIEh0dHBWZXJiICovKGJ1dHRvblZlcmIpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlybVF1ZXN0aW9uID0gZ2V0Q2xvc2VzdEF0dHJpYnV0ZVZhbHVlKGVsdCwgJ2h4LWNvbmZpcm0nKVxuICAgIC8vIGFsbG93IGV2ZW50LWJhc2VkIGNvbmZpcm1hdGlvbiB3LyBhIGNhbGxiYWNrXG4gICAgaWYgKGNvbmZpcm1lZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpc3N1ZVJlcXVlc3QgPSBmdW5jdGlvbihza2lwQ29uZmlybWF0aW9uKSB7XG4gICAgICAgIHJldHVybiBpc3N1ZUFqYXhSZXF1ZXN0KHZlcmIsIHBhdGgsIGVsdCwgZXZlbnQsIGV0YywgISFza2lwQ29uZmlybWF0aW9uKVxuICAgICAgfVxuICAgICAgY29uc3QgY29uZmlybURldGFpbHMgPSB7IHRhcmdldCwgZWx0LCBwYXRoLCB2ZXJiLCB0cmlnZ2VyaW5nRXZlbnQ6IGV2ZW50LCBldGMsIGlzc3VlUmVxdWVzdCwgcXVlc3Rpb246IGNvbmZpcm1RdWVzdGlvbiB9XG4gICAgICBpZiAodHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6Y29uZmlybScsIGNvbmZpcm1EZXRhaWxzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgbWF5YmVDYWxsKHJlc29sdmUpXG4gICAgICAgIHJldHVybiBwcm9taXNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHN5bmNFbHQgPSBlbHRcbiAgICBsZXQgc3luY1N0cmF0ZWd5ID0gZ2V0Q2xvc2VzdEF0dHJpYnV0ZVZhbHVlKGVsdCwgJ2h4LXN5bmMnKVxuICAgIGxldCBxdWV1ZVN0cmF0ZWd5ID0gbnVsbFxuICAgIGxldCBhYm9ydGFibGUgPSBmYWxzZVxuICAgIGlmIChzeW5jU3RyYXRlZ3kpIHtcbiAgICAgIGNvbnN0IHN5bmNTdHJpbmdzID0gc3luY1N0cmF0ZWd5LnNwbGl0KCc6JylcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gc3luY1N0cmluZ3NbMF0udHJpbSgpXG4gICAgICBpZiAoc2VsZWN0b3IgPT09ICd0aGlzJykge1xuICAgICAgICBzeW5jRWx0ID0gZmluZFRoaXNFbGVtZW50KGVsdCwgJ2h4LXN5bmMnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3luY0VsdCA9IGFzRWxlbWVudChxdWVyeVNlbGVjdG9yRXh0KGVsdCwgc2VsZWN0b3IpKVxuICAgICAgfVxuICAgICAgLy8gZGVmYXVsdCB0byB0aGUgZHJvcCBzdHJhdGVneVxuICAgICAgc3luY1N0cmF0ZWd5ID0gKHN5bmNTdHJpbmdzWzFdIHx8ICdkcm9wJykudHJpbSgpXG4gICAgICBlbHREYXRhID0gZ2V0SW50ZXJuYWxEYXRhKHN5bmNFbHQpXG4gICAgICBpZiAoc3luY1N0cmF0ZWd5ID09PSAnZHJvcCcgJiYgZWx0RGF0YS54aHIgJiYgZWx0RGF0YS5hYm9ydGFibGUgIT09IHRydWUpIHtcbiAgICAgICAgbWF5YmVDYWxsKHJlc29sdmUpXG4gICAgICAgIHJldHVybiBwcm9taXNlXG4gICAgICB9IGVsc2UgaWYgKHN5bmNTdHJhdGVneSA9PT0gJ2Fib3J0Jykge1xuICAgICAgICBpZiAoZWx0RGF0YS54aHIpIHtcbiAgICAgICAgICBtYXliZUNhbGwocmVzb2x2ZSlcbiAgICAgICAgICByZXR1cm4gcHJvbWlzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFib3J0YWJsZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzeW5jU3RyYXRlZ3kgPT09ICdyZXBsYWNlJykge1xuICAgICAgICB0cmlnZ2VyRXZlbnQoc3luY0VsdCwgJ2h0bXg6YWJvcnQnKSAvLyBhYm9ydCB0aGUgY3VycmVudCByZXF1ZXN0IGFuZCBjb250aW51ZVxuICAgICAgfSBlbHNlIGlmIChzeW5jU3RyYXRlZ3kuaW5kZXhPZigncXVldWUnKSA9PT0gMCkge1xuICAgICAgICBjb25zdCBxdWV1ZVN0ckFycmF5ID0gc3luY1N0cmF0ZWd5LnNwbGl0KCcgJylcbiAgICAgICAgcXVldWVTdHJhdGVneSA9IChxdWV1ZVN0ckFycmF5WzFdIHx8ICdsYXN0JykudHJpbSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVsdERhdGEueGhyKSB7XG4gICAgICBpZiAoZWx0RGF0YS5hYm9ydGFibGUpIHtcbiAgICAgICAgdHJpZ2dlckV2ZW50KHN5bmNFbHQsICdodG14OmFib3J0JykgLy8gYWJvcnQgdGhlIGN1cnJlbnQgcmVxdWVzdCBhbmQgY29udGludWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChxdWV1ZVN0cmF0ZWd5ID09IG51bGwpIHtcbiAgICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RGF0YSA9IGdldEludGVybmFsRGF0YShldmVudClcbiAgICAgICAgICAgIGlmIChldmVudERhdGEgJiYgZXZlbnREYXRhLnRyaWdnZXJTcGVjICYmIGV2ZW50RGF0YS50cmlnZ2VyU3BlYy5xdWV1ZSkge1xuICAgICAgICAgICAgICBxdWV1ZVN0cmF0ZWd5ID0gZXZlbnREYXRhLnRyaWdnZXJTcGVjLnF1ZXVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChxdWV1ZVN0cmF0ZWd5ID09IG51bGwpIHtcbiAgICAgICAgICAgIHF1ZXVlU3RyYXRlZ3kgPSAnbGFzdCdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsdERhdGEucXVldWVkUmVxdWVzdHMgPT0gbnVsbCkge1xuICAgICAgICAgIGVsdERhdGEucXVldWVkUmVxdWVzdHMgPSBbXVxuICAgICAgICB9XG4gICAgICAgIGlmIChxdWV1ZVN0cmF0ZWd5ID09PSAnZmlyc3QnICYmIGVsdERhdGEucXVldWVkUmVxdWVzdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZWx0RGF0YS5xdWV1ZWRSZXF1ZXN0cy5wdXNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaXNzdWVBamF4UmVxdWVzdCh2ZXJiLCBwYXRoLCBlbHQsIGV2ZW50LCBldGMpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChxdWV1ZVN0cmF0ZWd5ID09PSAnYWxsJykge1xuICAgICAgICAgIGVsdERhdGEucXVldWVkUmVxdWVzdHMucHVzaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlzc3VlQWpheFJlcXVlc3QodmVyYiwgcGF0aCwgZWx0LCBldmVudCwgZXRjKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAocXVldWVTdHJhdGVneSA9PT0gJ2xhc3QnKSB7XG4gICAgICAgICAgZWx0RGF0YS5xdWV1ZWRSZXF1ZXN0cyA9IFtdIC8vIGR1bXAgZXhpc3RpbmcgcXVldWVcbiAgICAgICAgICBlbHREYXRhLnF1ZXVlZFJlcXVlc3RzLnB1c2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpc3N1ZUFqYXhSZXF1ZXN0KHZlcmIsIHBhdGgsIGVsdCwgZXZlbnQsIGV0YylcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG1heWJlQ2FsbChyZXNvbHZlKVxuICAgICAgICByZXR1cm4gcHJvbWlzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gICAgZWx0RGF0YS54aHIgPSB4aHJcbiAgICBlbHREYXRhLmFib3J0YWJsZSA9IGFib3J0YWJsZVxuICAgIGNvbnN0IGVuZFJlcXVlc3RMb2NrID0gZnVuY3Rpb24oKSB7XG4gICAgICBlbHREYXRhLnhociA9IG51bGxcbiAgICAgIGVsdERhdGEuYWJvcnRhYmxlID0gZmFsc2VcbiAgICAgIGlmIChlbHREYXRhLnF1ZXVlZFJlcXVlc3RzICE9IG51bGwgJiZcbiAgICAgIGVsdERhdGEucXVldWVkUmVxdWVzdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBxdWV1ZWRSZXF1ZXN0ID0gZWx0RGF0YS5xdWV1ZWRSZXF1ZXN0cy5zaGlmdCgpXG4gICAgICAgIHF1ZXVlZFJlcXVlc3QoKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwcm9tcHRRdWVzdGlvbiA9IGdldENsb3Nlc3RBdHRyaWJ1dGVWYWx1ZShlbHQsICdoeC1wcm9tcHQnKVxuICAgIGlmIChwcm9tcHRRdWVzdGlvbikge1xuICAgICAgdmFyIHByb21wdFJlc3BvbnNlID0gcHJvbXB0KHByb21wdFF1ZXN0aW9uKVxuICAgICAgLy8gcHJvbXB0IHJldHVybnMgbnVsbCBpZiBjYW5jZWxsZWQgYW5kIGVtcHR5IHN0cmluZyBpZiBhY2NlcHRlZCB3aXRoIG5vIGVudHJ5XG4gICAgICBpZiAocHJvbXB0UmVzcG9uc2UgPT09IG51bGwgfHxcbiAgICAgICF0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDpwcm9tcHQnLCB7IHByb21wdDogcHJvbXB0UmVzcG9uc2UsIHRhcmdldCB9KSkge1xuICAgICAgICBtYXliZUNhbGwocmVzb2x2ZSlcbiAgICAgICAgZW5kUmVxdWVzdExvY2soKVxuICAgICAgICByZXR1cm4gcHJvbWlzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb25maXJtUXVlc3Rpb24gJiYgIWNvbmZpcm1lZCkge1xuICAgICAgaWYgKCFjb25maXJtKGNvbmZpcm1RdWVzdGlvbikpIHtcbiAgICAgICAgbWF5YmVDYWxsKHJlc29sdmUpXG4gICAgICAgIGVuZFJlcXVlc3RMb2NrKClcbiAgICAgICAgcmV0dXJuIHByb21pc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgaGVhZGVycyA9IGdldEhlYWRlcnMoZWx0LCB0YXJnZXQsIHByb21wdFJlc3BvbnNlKVxuXG4gICAgaWYgKHZlcmIgIT09ICdnZXQnICYmICF1c2VzRm9ybURhdGEoZWx0KSkge1xuICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgIH1cblxuICAgIGlmIChldGMuaGVhZGVycykge1xuICAgICAgaGVhZGVycyA9IG1lcmdlT2JqZWN0cyhoZWFkZXJzLCBldGMuaGVhZGVycylcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0cyA9IGdldElucHV0VmFsdWVzKGVsdCwgdmVyYilcbiAgICBsZXQgZXJyb3JzID0gcmVzdWx0cy5lcnJvcnNcbiAgICBjb25zdCByYXdGb3JtRGF0YSA9IHJlc3VsdHMuZm9ybURhdGFcbiAgICBpZiAoZXRjLnZhbHVlcykge1xuICAgICAgb3ZlcnJpZGVGb3JtRGF0YShyYXdGb3JtRGF0YSwgZm9ybURhdGFGcm9tT2JqZWN0KGV0Yy52YWx1ZXMpKVxuICAgIH1cbiAgICBjb25zdCBleHByZXNzaW9uVmFycyA9IGZvcm1EYXRhRnJvbU9iamVjdChnZXRFeHByZXNzaW9uVmFycyhlbHQpKVxuICAgIGNvbnN0IGFsbEZvcm1EYXRhID0gb3ZlcnJpZGVGb3JtRGF0YShyYXdGb3JtRGF0YSwgZXhwcmVzc2lvblZhcnMpXG4gICAgbGV0IGZpbHRlcmVkRm9ybURhdGEgPSBmaWx0ZXJWYWx1ZXMoYWxsRm9ybURhdGEsIGVsdClcblxuICAgIGlmIChodG14LmNvbmZpZy5nZXRDYWNoZUJ1c3RlclBhcmFtICYmIHZlcmIgPT09ICdnZXQnKSB7XG4gICAgICBmaWx0ZXJlZEZvcm1EYXRhLnNldCgnb3JnLmh0bXguY2FjaGUtYnVzdGVyJywgZ2V0UmF3QXR0cmlidXRlKHRhcmdldCwgJ2lkJykgfHwgJ3RydWUnKVxuICAgIH1cblxuICAgIC8vIGJlaGF2aW9yIG9mIGFuY2hvcnMgdy8gZW1wdHkgaHJlZiBpcyB0byB1c2UgdGhlIGN1cnJlbnQgVVJMXG4gICAgaWYgKHBhdGggPT0gbnVsbCB8fCBwYXRoID09PSAnJykge1xuICAgICAgcGF0aCA9IGdldERvY3VtZW50KCkubG9jYXRpb24uaHJlZlxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByb3BlcnR5IHtib29sZWFufSBbY3JlZGVudGlhbHNdXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IFt0aW1lb3V0XVxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW25vSGVhZGVyc11cbiAgICAgKi9cbiAgICBjb25zdCByZXF1ZXN0QXR0clZhbHVlcyA9IGdldFZhbHVlc0ZvckVsZW1lbnQoZWx0LCAnaHgtcmVxdWVzdCcpXG5cbiAgICBjb25zdCBlbHRJc0Jvb3N0ZWQgPSBnZXRJbnRlcm5hbERhdGEoZWx0KS5ib29zdGVkXG5cbiAgICBsZXQgdXNlVXJsUGFyYW1zID0gaHRteC5jb25maWcubWV0aG9kc1RoYXRVc2VVcmxQYXJhbXMuaW5kZXhPZih2ZXJiKSA+PSAwXG5cbiAgICAvKiogQHR5cGUgSHRteFJlcXVlc3RDb25maWcgKi9cbiAgICBjb25zdCByZXF1ZXN0Q29uZmlnID0ge1xuICAgICAgYm9vc3RlZDogZWx0SXNCb29zdGVkLFxuICAgICAgdXNlVXJsUGFyYW1zLFxuICAgICAgZm9ybURhdGE6IGZpbHRlcmVkRm9ybURhdGEsXG4gICAgICBwYXJhbWV0ZXJzOiBmb3JtRGF0YVByb3h5KGZpbHRlcmVkRm9ybURhdGEpLFxuICAgICAgdW5maWx0ZXJlZEZvcm1EYXRhOiBhbGxGb3JtRGF0YSxcbiAgICAgIHVuZmlsdGVyZWRQYXJhbWV0ZXJzOiBmb3JtRGF0YVByb3h5KGFsbEZvcm1EYXRhKSxcbiAgICAgIGhlYWRlcnMsXG4gICAgICB0YXJnZXQsXG4gICAgICB2ZXJiLFxuICAgICAgZXJyb3JzLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBldGMuY3JlZGVudGlhbHMgfHwgcmVxdWVzdEF0dHJWYWx1ZXMuY3JlZGVudGlhbHMgfHwgaHRteC5jb25maWcud2l0aENyZWRlbnRpYWxzLFxuICAgICAgdGltZW91dDogZXRjLnRpbWVvdXQgfHwgcmVxdWVzdEF0dHJWYWx1ZXMudGltZW91dCB8fCBodG14LmNvbmZpZy50aW1lb3V0LFxuICAgICAgcGF0aCxcbiAgICAgIHRyaWdnZXJpbmdFdmVudDogZXZlbnRcbiAgICB9XG5cbiAgICBpZiAoIXRyaWdnZXJFdmVudChlbHQsICdodG14OmNvbmZpZ1JlcXVlc3QnLCByZXF1ZXN0Q29uZmlnKSkge1xuICAgICAgbWF5YmVDYWxsKHJlc29sdmUpXG4gICAgICBlbmRSZXF1ZXN0TG9jaygpXG4gICAgICByZXR1cm4gcHJvbWlzZVxuICAgIH1cblxuICAgIC8vIGNvcHkgb3V0IGluIGNhc2UgdGhlIG9iamVjdCB3YXMgb3ZlcndyaXR0ZW5cbiAgICBwYXRoID0gcmVxdWVzdENvbmZpZy5wYXRoXG4gICAgdmVyYiA9IHJlcXVlc3RDb25maWcudmVyYlxuICAgIGhlYWRlcnMgPSByZXF1ZXN0Q29uZmlnLmhlYWRlcnNcbiAgICBmaWx0ZXJlZEZvcm1EYXRhID0gZm9ybURhdGFGcm9tT2JqZWN0KHJlcXVlc3RDb25maWcucGFyYW1ldGVycylcbiAgICBlcnJvcnMgPSByZXF1ZXN0Q29uZmlnLmVycm9yc1xuICAgIHVzZVVybFBhcmFtcyA9IHJlcXVlc3RDb25maWcudXNlVXJsUGFyYW1zXG5cbiAgICBpZiAoZXJyb3JzICYmIGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICB0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDp2YWxpZGF0aW9uOmhhbHRlZCcsIHJlcXVlc3RDb25maWcpXG4gICAgICBtYXliZUNhbGwocmVzb2x2ZSlcbiAgICAgIGVuZFJlcXVlc3RMb2NrKClcbiAgICAgIHJldHVybiBwcm9taXNlXG4gICAgfVxuXG4gICAgY29uc3Qgc3BsaXRQYXRoID0gcGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgcGF0aE5vQW5jaG9yID0gc3BsaXRQYXRoWzBdXG4gICAgY29uc3QgYW5jaG9yID0gc3BsaXRQYXRoWzFdXG5cbiAgICBsZXQgZmluYWxQYXRoID0gcGF0aFxuICAgIGlmICh1c2VVcmxQYXJhbXMpIHtcbiAgICAgIGZpbmFsUGF0aCA9IHBhdGhOb0FuY2hvclxuICAgICAgY29uc3QgaGFzVmFsdWVzID0gIWZpbHRlcmVkRm9ybURhdGEua2V5cygpLm5leHQoKS5kb25lXG4gICAgICBpZiAoaGFzVmFsdWVzKSB7XG4gICAgICAgIGlmIChmaW5hbFBhdGguaW5kZXhPZignPycpIDwgMCkge1xuICAgICAgICAgIGZpbmFsUGF0aCArPSAnPydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaW5hbFBhdGggKz0gJyYnXG4gICAgICAgIH1cbiAgICAgICAgZmluYWxQYXRoICs9IHVybEVuY29kZShmaWx0ZXJlZEZvcm1EYXRhKVxuICAgICAgICBpZiAoYW5jaG9yKSB7XG4gICAgICAgICAgZmluYWxQYXRoICs9ICcjJyArIGFuY2hvclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF2ZXJpZnlQYXRoKGVsdCwgZmluYWxQYXRoLCByZXF1ZXN0Q29uZmlnKSkge1xuICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZWx0LCAnaHRteDppbnZhbGlkUGF0aCcsIHJlcXVlc3RDb25maWcpXG4gICAgICBtYXliZUNhbGwocmVqZWN0KVxuICAgICAgcmV0dXJuIHByb21pc2VcbiAgICB9XG5cbiAgICB4aHIub3Blbih2ZXJiLnRvVXBwZXJDYXNlKCksIGZpbmFsUGF0aCwgdHJ1ZSlcbiAgICB4aHIub3ZlcnJpZGVNaW1lVHlwZSgndGV4dC9odG1sJylcbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gcmVxdWVzdENvbmZpZy53aXRoQ3JlZGVudGlhbHNcbiAgICB4aHIudGltZW91dCA9IHJlcXVlc3RDb25maWcudGltZW91dFxuXG4gICAgLy8gcmVxdWVzdCBoZWFkZXJzXG4gICAgaWYgKHJlcXVlc3RBdHRyVmFsdWVzLm5vSGVhZGVycykge1xuICAgIC8vIGlnbm9yZSBhbGwgaGVhZGVyc1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGNvbnN0IGhlYWRlciBpbiBoZWFkZXJzKSB7XG4gICAgICAgIGlmIChoZWFkZXJzLmhhc093blByb3BlcnR5KGhlYWRlcikpIHtcbiAgICAgICAgICBjb25zdCBoZWFkZXJWYWx1ZSA9IGhlYWRlcnNbaGVhZGVyXVxuICAgICAgICAgIHNhZmVseVNldEhlYWRlclZhbHVlKHhociwgaGVhZGVyLCBoZWFkZXJWYWx1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAdHlwZSB7SHRteFJlc3BvbnNlSW5mb30gKi9cbiAgICBjb25zdCByZXNwb25zZUluZm8gPSB7XG4gICAgICB4aHIsXG4gICAgICB0YXJnZXQsXG4gICAgICByZXF1ZXN0Q29uZmlnLFxuICAgICAgZXRjLFxuICAgICAgYm9vc3RlZDogZWx0SXNCb29zdGVkLFxuICAgICAgc2VsZWN0LFxuICAgICAgcGF0aEluZm86IHtcbiAgICAgICAgcmVxdWVzdFBhdGg6IHBhdGgsXG4gICAgICAgIGZpbmFsUmVxdWVzdFBhdGg6IGZpbmFsUGF0aCxcbiAgICAgICAgcmVzcG9uc2VQYXRoOiBudWxsLFxuICAgICAgICBhbmNob3JcbiAgICAgIH1cbiAgICB9XG5cbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBoaWVyYXJjaHkgPSBoaWVyYXJjaHlGb3JFbHQoZWx0KVxuICAgICAgICByZXNwb25zZUluZm8ucGF0aEluZm8ucmVzcG9uc2VQYXRoID0gZ2V0UGF0aEZyb21SZXNwb25zZSh4aHIpXG4gICAgICAgIHJlc3BvbnNlSGFuZGxlcihlbHQsIHJlc3BvbnNlSW5mbylcbiAgICAgICAgaWYgKHJlc3BvbnNlSW5mby5rZWVwSW5kaWNhdG9ycyAhPT0gdHJ1ZSkge1xuICAgICAgICAgIHJlbW92ZVJlcXVlc3RJbmRpY2F0b3JzKGluZGljYXRvcnMsIGRpc2FibGVFbHRzKVxuICAgICAgICB9XG4gICAgICAgIHRyaWdnZXJFdmVudChlbHQsICdodG14OmFmdGVyUmVxdWVzdCcsIHJlc3BvbnNlSW5mbylcbiAgICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6YWZ0ZXJPbkxvYWQnLCByZXNwb25zZUluZm8pXG4gICAgICAgIC8vIGlmIHRoZSBib2R5IG5vIGxvbmdlciBjb250YWlucyB0aGUgZWxlbWVudCwgdHJpZ2dlciB0aGUgZXZlbnQgb24gdGhlIGNsb3Nlc3QgcGFyZW50XG4gICAgICAgIC8vIHJlbWFpbmluZyBpbiB0aGUgRE9NXG4gICAgICAgIGlmICghYm9keUNvbnRhaW5zKGVsdCkpIHtcbiAgICAgICAgICBsZXQgc2Vjb25kYXJ5VHJpZ2dlckVsdCA9IG51bGxcbiAgICAgICAgICB3aGlsZSAoaGllcmFyY2h5Lmxlbmd0aCA+IDAgJiYgc2Vjb25kYXJ5VHJpZ2dlckVsdCA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRFbHRJbkhpZXJhcmNoeSA9IGhpZXJhcmNoeS5zaGlmdCgpXG4gICAgICAgICAgICBpZiAoYm9keUNvbnRhaW5zKHBhcmVudEVsdEluSGllcmFyY2h5KSkge1xuICAgICAgICAgICAgICBzZWNvbmRhcnlUcmlnZ2VyRWx0ID0gcGFyZW50RWx0SW5IaWVyYXJjaHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNlY29uZGFyeVRyaWdnZXJFbHQpIHtcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChzZWNvbmRhcnlUcmlnZ2VyRWx0LCAnaHRteDphZnRlclJlcXVlc3QnLCByZXNwb25zZUluZm8pXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoc2Vjb25kYXJ5VHJpZ2dlckVsdCwgJ2h0bXg6YWZ0ZXJPbkxvYWQnLCByZXNwb25zZUluZm8pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1heWJlQ2FsbChyZXNvbHZlKVxuICAgICAgICBlbmRSZXF1ZXN0TG9jaygpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRyaWdnZXJFcnJvckV2ZW50KGVsdCwgJ2h0bXg6b25Mb2FkRXJyb3InLCBtZXJnZU9iamVjdHMoeyBlcnJvcjogZSB9LCByZXNwb25zZUluZm8pKVxuICAgICAgICB0aHJvdyBlXG4gICAgICB9XG4gICAgfVxuICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICByZW1vdmVSZXF1ZXN0SW5kaWNhdG9ycyhpbmRpY2F0b3JzLCBkaXNhYmxlRWx0cylcbiAgICAgIHRyaWdnZXJFcnJvckV2ZW50KGVsdCwgJ2h0bXg6YWZ0ZXJSZXF1ZXN0JywgcmVzcG9uc2VJbmZvKVxuICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZWx0LCAnaHRteDpzZW5kRXJyb3InLCByZXNwb25zZUluZm8pXG4gICAgICBtYXliZUNhbGwocmVqZWN0KVxuICAgICAgZW5kUmVxdWVzdExvY2soKVxuICAgIH1cbiAgICB4aHIub25hYm9ydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVtb3ZlUmVxdWVzdEluZGljYXRvcnMoaW5kaWNhdG9ycywgZGlzYWJsZUVsdHMpXG4gICAgICB0cmlnZ2VyRXJyb3JFdmVudChlbHQsICdodG14OmFmdGVyUmVxdWVzdCcsIHJlc3BvbnNlSW5mbylcbiAgICAgIHRyaWdnZXJFcnJvckV2ZW50KGVsdCwgJ2h0bXg6c2VuZEFib3J0JywgcmVzcG9uc2VJbmZvKVxuICAgICAgbWF5YmVDYWxsKHJlamVjdClcbiAgICAgIGVuZFJlcXVlc3RMb2NrKClcbiAgICB9XG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVtb3ZlUmVxdWVzdEluZGljYXRvcnMoaW5kaWNhdG9ycywgZGlzYWJsZUVsdHMpXG4gICAgICB0cmlnZ2VyRXJyb3JFdmVudChlbHQsICdodG14OmFmdGVyUmVxdWVzdCcsIHJlc3BvbnNlSW5mbylcbiAgICAgIHRyaWdnZXJFcnJvckV2ZW50KGVsdCwgJ2h0bXg6dGltZW91dCcsIHJlc3BvbnNlSW5mbylcbiAgICAgIG1heWJlQ2FsbChyZWplY3QpXG4gICAgICBlbmRSZXF1ZXN0TG9jaygpXG4gICAgfVxuICAgIGlmICghdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6YmVmb3JlUmVxdWVzdCcsIHJlc3BvbnNlSW5mbykpIHtcbiAgICAgIG1heWJlQ2FsbChyZXNvbHZlKVxuICAgICAgZW5kUmVxdWVzdExvY2soKVxuICAgICAgcmV0dXJuIHByb21pc2VcbiAgICB9XG4gICAgdmFyIGluZGljYXRvcnMgPSBhZGRSZXF1ZXN0SW5kaWNhdG9yQ2xhc3NlcyhlbHQpXG4gICAgdmFyIGRpc2FibGVFbHRzID0gZGlzYWJsZUVsZW1lbnRzKGVsdClcblxuICAgIGZvckVhY2goWydsb2Fkc3RhcnQnLCAnbG9hZGVuZCcsICdwcm9ncmVzcycsICdhYm9ydCddLCBmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgICAgIGZvckVhY2goW3hociwgeGhyLnVwbG9hZF0sIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6eGhyOicgKyBldmVudE5hbWUsIHtcbiAgICAgICAgICAgIGxlbmd0aENvbXB1dGFibGU6IGV2ZW50Lmxlbmd0aENvbXB1dGFibGUsXG4gICAgICAgICAgICBsb2FkZWQ6IGV2ZW50LmxvYWRlZCxcbiAgICAgICAgICAgIHRvdGFsOiBldmVudC50b3RhbFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG4gICAgdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6YmVmb3JlU2VuZCcsIHJlc3BvbnNlSW5mbylcbiAgICBjb25zdCBwYXJhbXMgPSB1c2VVcmxQYXJhbXMgPyBudWxsIDogZW5jb2RlUGFyYW1zRm9yQm9keSh4aHIsIGVsdCwgZmlsdGVyZWRGb3JtRGF0YSlcbiAgICB4aHIuc2VuZChwYXJhbXMpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBIdG14SGlzdG9yeVVwZGF0ZVxuICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbdHlwZV1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW3BhdGhdXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcGFyYW0ge0h0bXhSZXNwb25zZUluZm99IHJlc3BvbnNlSW5mb1xuICAgKiBAcmV0dXJuIHtIdG14SGlzdG9yeVVwZGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGRldGVybWluZUhpc3RvcnlVcGRhdGVzKGVsdCwgcmVzcG9uc2VJbmZvKSB7XG4gICAgY29uc3QgeGhyID0gcmVzcG9uc2VJbmZvLnhoclxuXG4gICAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIEZpcnN0IGNvbnN1bHQgcmVzcG9uc2UgaGVhZGVyc1xuICAgIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBsZXQgcGF0aEZyb21IZWFkZXJzID0gbnVsbFxuICAgIGxldCB0eXBlRnJvbUhlYWRlcnMgPSBudWxsXG4gICAgaWYgKGhhc0hlYWRlcih4aHIsIC9IWC1QdXNoOi9pKSkge1xuICAgICAgcGF0aEZyb21IZWFkZXJzID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdIWC1QdXNoJylcbiAgICAgIHR5cGVGcm9tSGVhZGVycyA9ICdwdXNoJ1xuICAgIH0gZWxzZSBpZiAoaGFzSGVhZGVyKHhociwgL0hYLVB1c2gtVXJsOi9pKSkge1xuICAgICAgcGF0aEZyb21IZWFkZXJzID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdIWC1QdXNoLVVybCcpXG4gICAgICB0eXBlRnJvbUhlYWRlcnMgPSAncHVzaCdcbiAgICB9IGVsc2UgaWYgKGhhc0hlYWRlcih4aHIsIC9IWC1SZXBsYWNlLVVybDovaSkpIHtcbiAgICAgIHBhdGhGcm9tSGVhZGVycyA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignSFgtUmVwbGFjZS1VcmwnKVxuICAgICAgdHlwZUZyb21IZWFkZXJzID0gJ3JlcGxhY2UnXG4gICAgfVxuXG4gICAgLy8gaWYgdGhlcmUgd2FzIGEgcmVzcG9uc2UgaGVhZGVyLCB0aGF0IGhhcyBwcmlvcml0eVxuICAgIGlmIChwYXRoRnJvbUhlYWRlcnMpIHtcbiAgICAgIGlmIChwYXRoRnJvbUhlYWRlcnMgPT09ICdmYWxzZScpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6IHR5cGVGcm9tSGVhZGVycyxcbiAgICAgICAgICBwYXRoOiBwYXRoRnJvbUhlYWRlcnNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBOZXh0IHJlc29sdmUgdmlhIERPTSB2YWx1ZXNcbiAgICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY29uc3QgcmVxdWVzdFBhdGggPSByZXNwb25zZUluZm8ucGF0aEluZm8uZmluYWxSZXF1ZXN0UGF0aFxuICAgIGNvbnN0IHJlc3BvbnNlUGF0aCA9IHJlc3BvbnNlSW5mby5wYXRoSW5mby5yZXNwb25zZVBhdGhcblxuICAgIGNvbnN0IHB1c2hVcmwgPSBnZXRDbG9zZXN0QXR0cmlidXRlVmFsdWUoZWx0LCAnaHgtcHVzaC11cmwnKVxuICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBnZXRDbG9zZXN0QXR0cmlidXRlVmFsdWUoZWx0LCAnaHgtcmVwbGFjZS11cmwnKVxuICAgIGNvbnN0IGVsZW1lbnRJc0Jvb3N0ZWQgPSBnZXRJbnRlcm5hbERhdGEoZWx0KS5ib29zdGVkXG5cbiAgICBsZXQgc2F2ZVR5cGUgPSBudWxsXG4gICAgbGV0IHBhdGggPSBudWxsXG5cbiAgICBpZiAocHVzaFVybCkge1xuICAgICAgc2F2ZVR5cGUgPSAncHVzaCdcbiAgICAgIHBhdGggPSBwdXNoVXJsXG4gICAgfSBlbHNlIGlmIChyZXBsYWNlVXJsKSB7XG4gICAgICBzYXZlVHlwZSA9ICdyZXBsYWNlJ1xuICAgICAgcGF0aCA9IHJlcGxhY2VVcmxcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnRJc0Jvb3N0ZWQpIHtcbiAgICAgIHNhdmVUeXBlID0gJ3B1c2gnXG4gICAgICBwYXRoID0gcmVzcG9uc2VQYXRoIHx8IHJlcXVlc3RQYXRoIC8vIGlmIHRoZXJlIGlzIG5vIHJlc3BvbnNlIHBhdGgsIGdvIHdpdGggdGhlIG9yaWdpbmFsIHJlcXVlc3QgcGF0aFxuICAgIH1cblxuICAgIGlmIChwYXRoKSB7XG4gICAgLy8gZmFsc2UgaW5kaWNhdGVzIG5vIHB1c2gsIHJldHVybiBlbXB0eSBvYmplY3RcbiAgICAgIGlmIChwYXRoID09PSAnZmFsc2UnKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfVxuXG4gICAgICAvLyB0cnVlIGluZGljYXRlcyB3ZSB3YW50IHRvIGZvbGxvdyB3aGVyZXZlciB0aGUgc2VydmVyIGVuZGVkIHVwIHNlbmRpbmcgdXNcbiAgICAgIGlmIChwYXRoID09PSAndHJ1ZScpIHtcbiAgICAgICAgcGF0aCA9IHJlc3BvbnNlUGF0aCB8fCByZXF1ZXN0UGF0aCAvLyBpZiB0aGVyZSBpcyBubyByZXNwb25zZSBwYXRoLCBnbyB3aXRoIHRoZSBvcmlnaW5hbCByZXF1ZXN0IHBhdGhcbiAgICAgIH1cblxuICAgICAgLy8gcmVzdG9yZSBhbnkgYW5jaG9yIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVxdWVzdFxuICAgICAgaWYgKHJlc3BvbnNlSW5mby5wYXRoSW5mby5hbmNob3IgJiYgcGF0aC5pbmRleE9mKCcjJykgPT09IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoICsgJyMnICsgcmVzcG9uc2VJbmZvLnBhdGhJbmZvLmFuY2hvclxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBzYXZlVHlwZSxcbiAgICAgICAgcGF0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtIdG14UmVzcG9uc2VIYW5kbGluZ0NvbmZpZ30gcmVzcG9uc2VIYW5kbGluZ0NvbmZpZ1xuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhdHVzXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBjb2RlTWF0Y2hlcyhyZXNwb25zZUhhbmRsaW5nQ29uZmlnLCBzdGF0dXMpIHtcbiAgICB2YXIgcmVnRXhwID0gbmV3IFJlZ0V4cChyZXNwb25zZUhhbmRsaW5nQ29uZmlnLmNvZGUpXG4gICAgcmV0dXJuIHJlZ0V4cC50ZXN0KHN0YXR1cy50b1N0cmluZygxMCkpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEByZXR1cm4ge0h0bXhSZXNwb25zZUhhbmRsaW5nQ29uZmlnfVxuICAgKi9cbiAgZnVuY3Rpb24gcmVzb2x2ZVJlc3BvbnNlSGFuZGxpbmcoeGhyKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBodG14LmNvbmZpZy5yZXNwb25zZUhhbmRsaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvKiogQHR5cGUgSHRteFJlc3BvbnNlSGFuZGxpbmdDb25maWcgKi9cbiAgICAgIHZhciByZXNwb25zZUhhbmRsaW5nRWxlbWVudCA9IGh0bXguY29uZmlnLnJlc3BvbnNlSGFuZGxpbmdbaV1cbiAgICAgIGlmIChjb2RlTWF0Y2hlcyhyZXNwb25zZUhhbmRsaW5nRWxlbWVudCwgeGhyLnN0YXR1cykpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlSGFuZGxpbmdFbGVtZW50XG4gICAgICB9XG4gICAgfVxuICAgIC8vIG5vIG1hdGNoZXMsIHJldHVybiBubyBzd2FwXG4gICAgcmV0dXJuIHtcbiAgICAgIHN3YXA6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlVGl0bGUodGl0bGUpIHtcbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIGNvbnN0IHRpdGxlRWx0ID0gZmluZCgndGl0bGUnKVxuICAgICAgaWYgKHRpdGxlRWx0KSB7XG4gICAgICAgIHRpdGxlRWx0LmlubmVySFRNTCA9IHRpdGxlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQudGl0bGUgPSB0aXRsZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcGFyYW0ge0h0bXhSZXNwb25zZUluZm99IHJlc3BvbnNlSW5mb1xuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlQWpheFJlc3BvbnNlKGVsdCwgcmVzcG9uc2VJbmZvKSB7XG4gICAgY29uc3QgeGhyID0gcmVzcG9uc2VJbmZvLnhoclxuICAgIGxldCB0YXJnZXQgPSByZXNwb25zZUluZm8udGFyZ2V0XG4gICAgY29uc3QgZXRjID0gcmVzcG9uc2VJbmZvLmV0Y1xuICAgIGNvbnN0IHJlc3BvbnNlSW5mb1NlbGVjdCA9IHJlc3BvbnNlSW5mby5zZWxlY3RcblxuICAgIGlmICghdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6YmVmb3JlT25Mb2FkJywgcmVzcG9uc2VJbmZvKSkgcmV0dXJuXG5cbiAgICBpZiAoaGFzSGVhZGVyKHhociwgL0hYLVRyaWdnZXI6L2kpKSB7XG4gICAgICBoYW5kbGVUcmlnZ2VySGVhZGVyKHhociwgJ0hYLVRyaWdnZXInLCBlbHQpXG4gICAgfVxuXG4gICAgaWYgKGhhc0hlYWRlcih4aHIsIC9IWC1Mb2NhdGlvbjovaSkpIHtcbiAgICAgIHNhdmVDdXJyZW50UGFnZVRvSGlzdG9yeSgpXG4gICAgICBsZXQgcmVkaXJlY3RQYXRoID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdIWC1Mb2NhdGlvbicpXG4gICAgICAvKiogQHR5cGUge0h0bXhBamF4SGVscGVyQ29udGV4dCZ7cGF0aDpzdHJpbmd9fSAqL1xuICAgICAgdmFyIHJlZGlyZWN0U3dhcFNwZWNcbiAgICAgIGlmIChyZWRpcmVjdFBhdGguaW5kZXhPZigneycpID09PSAwKSB7XG4gICAgICAgIHJlZGlyZWN0U3dhcFNwZWMgPSBwYXJzZUpTT04ocmVkaXJlY3RQYXRoKVxuICAgICAgICAvLyB3aGF0J3MgdGhlIGJlc3Qgd2F5IHRvIHRocm93IGFuIGVycm9yIGlmIHRoZSB1c2VyIGRpZG4ndCBpbmNsdWRlIHRoaXNcbiAgICAgICAgcmVkaXJlY3RQYXRoID0gcmVkaXJlY3RTd2FwU3BlYy5wYXRoXG4gICAgICAgIGRlbGV0ZSByZWRpcmVjdFN3YXBTcGVjLnBhdGhcbiAgICAgIH1cbiAgICAgIGFqYXhIZWxwZXIoJ2dldCcsIHJlZGlyZWN0UGF0aCwgcmVkaXJlY3RTd2FwU3BlYykudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgcHVzaFVybEludG9IaXN0b3J5KHJlZGlyZWN0UGF0aClcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzaG91bGRSZWZyZXNoID0gaGFzSGVhZGVyKHhociwgL0hYLVJlZnJlc2g6L2kpICYmIHhoci5nZXRSZXNwb25zZUhlYWRlcignSFgtUmVmcmVzaCcpID09PSAndHJ1ZSdcblxuICAgIGlmIChoYXNIZWFkZXIoeGhyLCAvSFgtUmVkaXJlY3Q6L2kpKSB7XG4gICAgICByZXNwb25zZUluZm8ua2VlcEluZGljYXRvcnMgPSB0cnVlXG4gICAgICBsb2NhdGlvbi5ocmVmID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdIWC1SZWRpcmVjdCcpXG4gICAgICBzaG91bGRSZWZyZXNoICYmIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkUmVmcmVzaCkge1xuICAgICAgcmVzcG9uc2VJbmZvLmtlZXBJbmRpY2F0b3JzID0gdHJ1ZVxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChoYXNIZWFkZXIoeGhyLCAvSFgtUmV0YXJnZXQ6L2kpKSB7XG4gICAgICBpZiAoeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdIWC1SZXRhcmdldCcpID09PSAndGhpcycpIHtcbiAgICAgICAgcmVzcG9uc2VJbmZvLnRhcmdldCA9IGVsdFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzcG9uc2VJbmZvLnRhcmdldCA9IGFzRWxlbWVudChxdWVyeVNlbGVjdG9yRXh0KGVsdCwgeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdIWC1SZXRhcmdldCcpKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoaXN0b3J5VXBkYXRlID0gZGV0ZXJtaW5lSGlzdG9yeVVwZGF0ZXMoZWx0LCByZXNwb25zZUluZm8pXG5cbiAgICBjb25zdCByZXNwb25zZUhhbmRsaW5nID0gcmVzb2x2ZVJlc3BvbnNlSGFuZGxpbmcoeGhyKVxuICAgIGNvbnN0IHNob3VsZFN3YXAgPSByZXNwb25zZUhhbmRsaW5nLnN3YXBcbiAgICBsZXQgaXNFcnJvciA9ICEhcmVzcG9uc2VIYW5kbGluZy5lcnJvclxuICAgIGxldCBpZ25vcmVUaXRsZSA9IGh0bXguY29uZmlnLmlnbm9yZVRpdGxlIHx8IHJlc3BvbnNlSGFuZGxpbmcuaWdub3JlVGl0bGVcbiAgICBsZXQgc2VsZWN0T3ZlcnJpZGUgPSByZXNwb25zZUhhbmRsaW5nLnNlbGVjdFxuICAgIGlmIChyZXNwb25zZUhhbmRsaW5nLnRhcmdldCkge1xuICAgICAgcmVzcG9uc2VJbmZvLnRhcmdldCA9IGFzRWxlbWVudChxdWVyeVNlbGVjdG9yRXh0KGVsdCwgcmVzcG9uc2VIYW5kbGluZy50YXJnZXQpKVxuICAgIH1cbiAgICB2YXIgc3dhcE92ZXJyaWRlID0gZXRjLnN3YXBPdmVycmlkZVxuICAgIGlmIChzd2FwT3ZlcnJpZGUgPT0gbnVsbCAmJiByZXNwb25zZUhhbmRsaW5nLnN3YXBPdmVycmlkZSkge1xuICAgICAgc3dhcE92ZXJyaWRlID0gcmVzcG9uc2VIYW5kbGluZy5zd2FwT3ZlcnJpZGVcbiAgICB9XG5cbiAgICAvLyByZXNwb25zZSBoZWFkZXJzIG92ZXJyaWRlIHJlc3BvbnNlIGhhbmRsaW5nIGNvbmZpZ1xuICAgIGlmIChoYXNIZWFkZXIoeGhyLCAvSFgtUmV0YXJnZXQ6L2kpKSB7XG4gICAgICBpZiAoeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdIWC1SZXRhcmdldCcpID09PSAndGhpcycpIHtcbiAgICAgICAgcmVzcG9uc2VJbmZvLnRhcmdldCA9IGVsdFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzcG9uc2VJbmZvLnRhcmdldCA9IGFzRWxlbWVudChxdWVyeVNlbGVjdG9yRXh0KGVsdCwgeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdIWC1SZXRhcmdldCcpKSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhc0hlYWRlcih4aHIsIC9IWC1SZXN3YXA6L2kpKSB7XG4gICAgICBzd2FwT3ZlcnJpZGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0hYLVJlc3dhcCcpXG4gICAgfVxuXG4gICAgdmFyIHNlcnZlclJlc3BvbnNlID0geGhyLnJlc3BvbnNlXG4gICAgLyoqIEB0eXBlIEh0bXhCZWZvcmVTd2FwRGV0YWlscyAqL1xuICAgIHZhciBiZWZvcmVTd2FwRGV0YWlscyA9IG1lcmdlT2JqZWN0cyh7XG4gICAgICBzaG91bGRTd2FwLFxuICAgICAgc2VydmVyUmVzcG9uc2UsXG4gICAgICBpc0Vycm9yLFxuICAgICAgaWdub3JlVGl0bGUsXG4gICAgICBzZWxlY3RPdmVycmlkZVxuICAgIH0sIHJlc3BvbnNlSW5mbylcblxuICAgIGlmIChyZXNwb25zZUhhbmRsaW5nLmV2ZW50ICYmICF0cmlnZ2VyRXZlbnQodGFyZ2V0LCByZXNwb25zZUhhbmRsaW5nLmV2ZW50LCBiZWZvcmVTd2FwRGV0YWlscykpIHJldHVyblxuXG4gICAgaWYgKCF0cmlnZ2VyRXZlbnQodGFyZ2V0LCAnaHRteDpiZWZvcmVTd2FwJywgYmVmb3JlU3dhcERldGFpbHMpKSByZXR1cm5cblxuICAgIHRhcmdldCA9IGJlZm9yZVN3YXBEZXRhaWxzLnRhcmdldCAvLyBhbGxvdyByZS10YXJnZXRpbmdcbiAgICBzZXJ2ZXJSZXNwb25zZSA9IGJlZm9yZVN3YXBEZXRhaWxzLnNlcnZlclJlc3BvbnNlIC8vIGFsbG93IHVwZGF0aW5nIGNvbnRlbnRcbiAgICBpc0Vycm9yID0gYmVmb3JlU3dhcERldGFpbHMuaXNFcnJvciAvLyBhbGxvdyB1cGRhdGluZyBlcnJvclxuICAgIGlnbm9yZVRpdGxlID0gYmVmb3JlU3dhcERldGFpbHMuaWdub3JlVGl0bGUgLy8gYWxsb3cgdXBkYXRpbmcgaWdub3JpbmcgdGl0bGVcbiAgICBzZWxlY3RPdmVycmlkZSA9IGJlZm9yZVN3YXBEZXRhaWxzLnNlbGVjdE92ZXJyaWRlIC8vIGFsbG93IHVwZGF0aW5nIHNlbGVjdCBvdmVycmlkZVxuXG4gICAgcmVzcG9uc2VJbmZvLnRhcmdldCA9IHRhcmdldCAvLyBNYWtlIHVwZGF0ZWQgdGFyZ2V0IGF2YWlsYWJsZSB0byByZXNwb25zZSBldmVudHNcbiAgICByZXNwb25zZUluZm8uZmFpbGVkID0gaXNFcnJvciAvLyBNYWtlIGZhaWxlZCBwcm9wZXJ0eSBhdmFpbGFibGUgdG8gcmVzcG9uc2UgZXZlbnRzXG4gICAgcmVzcG9uc2VJbmZvLnN1Y2Nlc3NmdWwgPSAhaXNFcnJvciAvLyBNYWtlIHN1Y2Nlc3NmdWwgcHJvcGVydHkgYXZhaWxhYmxlIHRvIHJlc3BvbnNlIGV2ZW50c1xuXG4gICAgaWYgKGJlZm9yZVN3YXBEZXRhaWxzLnNob3VsZFN3YXApIHtcbiAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyODYpIHtcbiAgICAgICAgY2FuY2VsUG9sbGluZyhlbHQpXG4gICAgICB9XG5cbiAgICAgIHdpdGhFeHRlbnNpb25zKGVsdCwgZnVuY3Rpb24oZXh0ZW5zaW9uKSB7XG4gICAgICAgIHNlcnZlclJlc3BvbnNlID0gZXh0ZW5zaW9uLnRyYW5zZm9ybVJlc3BvbnNlKHNlcnZlclJlc3BvbnNlLCB4aHIsIGVsdClcbiAgICAgIH0pXG5cbiAgICAgIC8vIFNhdmUgY3VycmVudCBwYWdlIGlmIHRoZXJlIHdpbGwgYmUgYSBoaXN0b3J5IHVwZGF0ZVxuICAgICAgaWYgKGhpc3RvcnlVcGRhdGUudHlwZSkge1xuICAgICAgICBzYXZlQ3VycmVudFBhZ2VUb0hpc3RvcnkoKVxuICAgICAgfVxuXG4gICAgICBpZiAoaGFzSGVhZGVyKHhociwgL0hYLVJlc3dhcDovaSkpIHtcbiAgICAgICAgc3dhcE92ZXJyaWRlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdIWC1SZXN3YXAnKVxuICAgICAgfVxuICAgICAgdmFyIHN3YXBTcGVjID0gZ2V0U3dhcFNwZWNpZmljYXRpb24oZWx0LCBzd2FwT3ZlcnJpZGUpXG5cbiAgICAgIGlmICghc3dhcFNwZWMuaGFzT3duUHJvcGVydHkoJ2lnbm9yZVRpdGxlJykpIHtcbiAgICAgICAgc3dhcFNwZWMuaWdub3JlVGl0bGUgPSBpZ25vcmVUaXRsZVxuICAgICAgfVxuXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChodG14LmNvbmZpZy5zd2FwcGluZ0NsYXNzKVxuXG4gICAgICAvLyBvcHRpb25hbCB0cmFuc2l0aW9uIEFQSSBwcm9taXNlIGNhbGxiYWNrc1xuICAgICAgbGV0IHNldHRsZVJlc29sdmUgPSBudWxsXG4gICAgICBsZXQgc2V0dGxlUmVqZWN0ID0gbnVsbFxuXG4gICAgICBpZiAocmVzcG9uc2VJbmZvU2VsZWN0KSB7XG4gICAgICAgIHNlbGVjdE92ZXJyaWRlID0gcmVzcG9uc2VJbmZvU2VsZWN0XG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNIZWFkZXIoeGhyLCAvSFgtUmVzZWxlY3Q6L2kpKSB7XG4gICAgICAgIHNlbGVjdE92ZXJyaWRlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdIWC1SZXNlbGVjdCcpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNlbGVjdE9PQiA9IGdldENsb3Nlc3RBdHRyaWJ1dGVWYWx1ZShlbHQsICdoeC1zZWxlY3Qtb29iJylcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGdldENsb3Nlc3RBdHRyaWJ1dGVWYWx1ZShlbHQsICdoeC1zZWxlY3QnKVxuXG4gICAgICBsZXQgZG9Td2FwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gaWYgd2UgbmVlZCB0byBzYXZlIGhpc3RvcnksIGRvIHNvLCBiZWZvcmUgc3dhcHBpbmcgc28gdGhhdCByZWxhdGl2ZSByZXNvdXJjZXMgaGF2ZSB0aGUgY29ycmVjdCBiYXNlIFVSTFxuICAgICAgICAgIGlmIChoaXN0b3J5VXBkYXRlLnR5cGUpIHtcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChnZXREb2N1bWVudCgpLmJvZHksICdodG14OmJlZm9yZUhpc3RvcnlVcGRhdGUnLCBtZXJnZU9iamVjdHMoeyBoaXN0b3J5OiBoaXN0b3J5VXBkYXRlIH0sIHJlc3BvbnNlSW5mbykpXG4gICAgICAgICAgICBpZiAoaGlzdG9yeVVwZGF0ZS50eXBlID09PSAncHVzaCcpIHtcbiAgICAgICAgICAgICAgcHVzaFVybEludG9IaXN0b3J5KGhpc3RvcnlVcGRhdGUucGF0aClcbiAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KGdldERvY3VtZW50KCkuYm9keSwgJ2h0bXg6cHVzaGVkSW50b0hpc3RvcnknLCB7IHBhdGg6IGhpc3RvcnlVcGRhdGUucGF0aCB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVwbGFjZVVybEluSGlzdG9yeShoaXN0b3J5VXBkYXRlLnBhdGgpXG4gICAgICAgICAgICAgIHRyaWdnZXJFdmVudChnZXREb2N1bWVudCgpLmJvZHksICdodG14OnJlcGxhY2VkSW5IaXN0b3J5JywgeyBwYXRoOiBoaXN0b3J5VXBkYXRlLnBhdGggfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzd2FwKHRhcmdldCwgc2VydmVyUmVzcG9uc2UsIHN3YXBTcGVjLCB7XG4gICAgICAgICAgICBzZWxlY3Q6IHNlbGVjdE92ZXJyaWRlIHx8IHNlbGVjdCxcbiAgICAgICAgICAgIHNlbGVjdE9PQixcbiAgICAgICAgICAgIGV2ZW50SW5mbzogcmVzcG9uc2VJbmZvLFxuICAgICAgICAgICAgYW5jaG9yOiByZXNwb25zZUluZm8ucGF0aEluZm8uYW5jaG9yLFxuICAgICAgICAgICAgY29udGV4dEVsZW1lbnQ6IGVsdCxcbiAgICAgICAgICAgIGFmdGVyU3dhcENhbGxiYWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKGhhc0hlYWRlcih4aHIsIC9IWC1UcmlnZ2VyLUFmdGVyLVN3YXA6L2kpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbmFsRWx0ID0gZWx0XG4gICAgICAgICAgICAgICAgaWYgKCFib2R5Q29udGFpbnMoZWx0KSkge1xuICAgICAgICAgICAgICAgICAgZmluYWxFbHQgPSBnZXREb2N1bWVudCgpLmJvZHlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGFuZGxlVHJpZ2dlckhlYWRlcih4aHIsICdIWC1UcmlnZ2VyLUFmdGVyLVN3YXAnLCBmaW5hbEVsdClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFmdGVyU2V0dGxlQ2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoaGFzSGVhZGVyKHhociwgL0hYLVRyaWdnZXItQWZ0ZXItU2V0dGxlOi9pKSkge1xuICAgICAgICAgICAgICAgIGxldCBmaW5hbEVsdCA9IGVsdFxuICAgICAgICAgICAgICAgIGlmICghYm9keUNvbnRhaW5zKGVsdCkpIHtcbiAgICAgICAgICAgICAgICAgIGZpbmFsRWx0ID0gZ2V0RG9jdW1lbnQoKS5ib2R5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhhbmRsZVRyaWdnZXJIZWFkZXIoeGhyLCAnSFgtVHJpZ2dlci1BZnRlci1TZXR0bGUnLCBmaW5hbEVsdClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBtYXliZUNhbGwoc2V0dGxlUmVzb2x2ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZWx0LCAnaHRteDpzd2FwRXJyb3InLCByZXNwb25zZUluZm8pXG4gICAgICAgICAgbWF5YmVDYWxsKHNldHRsZVJlamVjdClcbiAgICAgICAgICB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IHNob3VsZFRyYW5zaXRpb24gPSBodG14LmNvbmZpZy5nbG9iYWxWaWV3VHJhbnNpdGlvbnNcbiAgICAgIGlmIChzd2FwU3BlYy5oYXNPd25Qcm9wZXJ0eSgndHJhbnNpdGlvbicpKSB7XG4gICAgICAgIHNob3VsZFRyYW5zaXRpb24gPSBzd2FwU3BlYy50cmFuc2l0aW9uXG4gICAgICB9XG5cbiAgICAgIGlmIChzaG91bGRUcmFuc2l0aW9uICYmXG4gICAgICAgICAgICAgIHRyaWdnZXJFdmVudChlbHQsICdodG14OmJlZm9yZVRyYW5zaXRpb24nLCByZXNwb25zZUluZm8pICYmXG4gICAgICAgICAgICAgIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIGV4cGVyaW1lbnRhbCBmZWF0dXJlIGF0bVxuICAgICAgICAgICAgICBkb2N1bWVudC5zdGFydFZpZXdUcmFuc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNldHRsZVByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihfcmVzb2x2ZSwgX3JlamVjdCkge1xuICAgICAgICAgIHNldHRsZVJlc29sdmUgPSBfcmVzb2x2ZVxuICAgICAgICAgIHNldHRsZVJlamVjdCA9IF9yZWplY3RcbiAgICAgICAgfSlcbiAgICAgICAgLy8gd3JhcCB0aGUgb3JpZ2luYWwgZG9Td2FwKCkgaW4gYSBjYWxsIHRvIHN0YXJ0Vmlld1RyYW5zaXRpb24oKVxuICAgICAgICBjb25zdCBpbm5lckRvU3dhcCA9IGRvU3dhcFxuICAgICAgICBkb1N3YXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIGV4cGVyaW1lbnRhbCBmZWF0dXJlIGF0bVxuICAgICAgICAgIGRvY3VtZW50LnN0YXJ0Vmlld1RyYW5zaXRpb24oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbm5lckRvU3dhcCgpXG4gICAgICAgICAgICByZXR1cm4gc2V0dGxlUHJvbWlzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN3YXBTcGVjLnN3YXBEZWxheSA+IDApIHtcbiAgICAgICAgZ2V0V2luZG93KCkuc2V0VGltZW91dChkb1N3YXAsIHN3YXBTcGVjLnN3YXBEZWxheSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvU3dhcCgpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKSB7XG4gICAgICB0cmlnZ2VyRXJyb3JFdmVudChlbHQsICdodG14OnJlc3BvbnNlRXJyb3InLCBtZXJnZU9iamVjdHMoeyBlcnJvcjogJ1Jlc3BvbnNlIFN0YXR1cyBFcnJvciBDb2RlICcgKyB4aHIuc3RhdHVzICsgJyBmcm9tICcgKyByZXNwb25zZUluZm8ucGF0aEluZm8ucmVxdWVzdFBhdGggfSwgcmVzcG9uc2VJbmZvKSlcbiAgICB9XG4gIH1cblxuICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBFeHRlbnNpb25zIEFQSVxuICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8qKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgSHRteEV4dGVuc2lvbj59ICovXG4gIGNvbnN0IGV4dGVuc2lvbnMgPSB7fVxuXG4gIC8qKlxuICAgKiBleHRlbnNpb25CYXNlIGRlZmluZXMgdGhlIGRlZmF1bHQgZnVuY3Rpb25zIGZvciBhbGwgZXh0ZW5zaW9ucy5cbiAgICogQHJldHVybnMge0h0bXhFeHRlbnNpb259XG4gICAqL1xuICBmdW5jdGlvbiBleHRlbnNpb25CYXNlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbml0OiBmdW5jdGlvbihhcGkpIHsgcmV0dXJuIG51bGwgfSxcbiAgICAgIGdldFNlbGVjdG9yczogZnVuY3Rpb24oKSB7IHJldHVybiBudWxsIH0sXG4gICAgICBvbkV2ZW50OiBmdW5jdGlvbihuYW1lLCBldnQpIHsgcmV0dXJuIHRydWUgfSxcbiAgICAgIHRyYW5zZm9ybVJlc3BvbnNlOiBmdW5jdGlvbih0ZXh0LCB4aHIsIGVsdCkgeyByZXR1cm4gdGV4dCB9LFxuICAgICAgaXNJbmxpbmVTd2FwOiBmdW5jdGlvbihzd2FwU3R5bGUpIHsgcmV0dXJuIGZhbHNlIH0sXG4gICAgICBoYW5kbGVTd2FwOiBmdW5jdGlvbihzd2FwU3R5bGUsIHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pIHsgcmV0dXJuIGZhbHNlIH0sXG4gICAgICBlbmNvZGVQYXJhbWV0ZXJzOiBmdW5jdGlvbih4aHIsIHBhcmFtZXRlcnMsIGVsdCkgeyByZXR1cm4gbnVsbCB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGRlZmluZUV4dGVuc2lvbiBpbml0aWFsaXplcyB0aGUgZXh0ZW5zaW9uIGFuZCBhZGRzIGl0IHRvIHRoZSBodG14IHJlZ2lzdHJ5XG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI2RlZmluZUV4dGVuc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSB0aGUgZXh0ZW5zaW9uIG5hbWVcbiAgICogQHBhcmFtIHtIdG14RXh0ZW5zaW9ufSBleHRlbnNpb24gdGhlIGV4dGVuc2lvbiBkZWZpbml0aW9uXG4gICAqL1xuICBmdW5jdGlvbiBkZWZpbmVFeHRlbnNpb24obmFtZSwgZXh0ZW5zaW9uKSB7XG4gICAgaWYgKGV4dGVuc2lvbi5pbml0KSB7XG4gICAgICBleHRlbnNpb24uaW5pdChpbnRlcm5hbEFQSSlcbiAgICB9XG4gICAgZXh0ZW5zaW9uc1tuYW1lXSA9IG1lcmdlT2JqZWN0cyhleHRlbnNpb25CYXNlKCksIGV4dGVuc2lvbilcbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmVFeHRlbnNpb24gcmVtb3ZlcyBhbiBleHRlbnNpb24gZnJvbSB0aGUgaHRteCByZWdpc3RyeVxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNyZW1vdmVFeHRlbnNpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICovXG4gIGZ1bmN0aW9uIHJlbW92ZUV4dGVuc2lvbihuYW1lKSB7XG4gICAgZGVsZXRlIGV4dGVuc2lvbnNbbmFtZV1cbiAgfVxuXG4gIC8qKlxuICAgKiBnZXRFeHRlbnNpb25zIHNlYXJjaGVzIHVwIHRoZSBET00gdHJlZSB0byByZXR1cm4gYWxsIGV4dGVuc2lvbnMgdGhhdCBjYW4gYmUgYXBwbGllZCB0byBhIGdpdmVuIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHBhcmFtIHtIdG14RXh0ZW5zaW9uW109fSBleHRlbnNpb25zVG9SZXR1cm5cbiAgICogQHBhcmFtIHtzdHJpbmdbXT19IGV4dGVuc2lvbnNUb0lnbm9yZVxuICAgKiBAcmV0dXJucyB7SHRteEV4dGVuc2lvbltdfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0RXh0ZW5zaW9ucyhlbHQsIGV4dGVuc2lvbnNUb1JldHVybiwgZXh0ZW5zaW9uc1RvSWdub3JlKSB7XG4gICAgaWYgKGV4dGVuc2lvbnNUb1JldHVybiA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGV4dGVuc2lvbnNUb1JldHVybiA9IFtdXG4gICAgfVxuICAgIGlmIChlbHQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXh0ZW5zaW9uc1RvUmV0dXJuXG4gICAgfVxuICAgIGlmIChleHRlbnNpb25zVG9JZ25vcmUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICBleHRlbnNpb25zVG9JZ25vcmUgPSBbXVxuICAgIH1cbiAgICBjb25zdCBleHRlbnNpb25zRm9yRWxlbWVudCA9IGdldEF0dHJpYnV0ZVZhbHVlKGVsdCwgJ2h4LWV4dCcpXG4gICAgaWYgKGV4dGVuc2lvbnNGb3JFbGVtZW50KSB7XG4gICAgICBmb3JFYWNoKGV4dGVuc2lvbnNGb3JFbGVtZW50LnNwbGl0KCcsJyksIGZ1bmN0aW9uKGV4dGVuc2lvbk5hbWUpIHtcbiAgICAgICAgZXh0ZW5zaW9uTmFtZSA9IGV4dGVuc2lvbk5hbWUucmVwbGFjZSgvIC9nLCAnJylcbiAgICAgICAgaWYgKGV4dGVuc2lvbk5hbWUuc2xpY2UoMCwgNykgPT0gJ2lnbm9yZTonKSB7XG4gICAgICAgICAgZXh0ZW5zaW9uc1RvSWdub3JlLnB1c2goZXh0ZW5zaW9uTmFtZS5zbGljZSg3KSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXh0ZW5zaW9uc1RvSWdub3JlLmluZGV4T2YoZXh0ZW5zaW9uTmFtZSkgPCAwKSB7XG4gICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1tleHRlbnNpb25OYW1lXVxuICAgICAgICAgIGlmIChleHRlbnNpb24gJiYgZXh0ZW5zaW9uc1RvUmV0dXJuLmluZGV4T2YoZXh0ZW5zaW9uKSA8IDApIHtcbiAgICAgICAgICAgIGV4dGVuc2lvbnNUb1JldHVybi5wdXNoKGV4dGVuc2lvbilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBnZXRFeHRlbnNpb25zKGFzRWxlbWVudChwYXJlbnRFbHQoZWx0KSksIGV4dGVuc2lvbnNUb1JldHVybiwgZXh0ZW5zaW9uc1RvSWdub3JlKVxuICB9XG5cbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gSW5pdGlhbGl6YXRpb25cbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIGlzUmVhZHkgPSBmYWxzZVxuICBnZXREb2N1bWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBpc1JlYWR5ID0gdHJ1ZVxuICB9KVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlIGEgZnVuY3Rpb24gbm93IGlmIERPTUNvbnRlbnRMb2FkZWQgaGFzIGZpcmVkLCBvdGhlcndpc2UgbGlzdGVuIGZvciBpdC5cbiAgICpcbiAgICogVGhpcyBmdW5jdGlvbiB1c2VzIGlzUmVhZHkgYmVjYXVzZSB0aGVyZSBpcyBubyByZWxpYWJsZSB3YXkgdG8gYXNrIHRoZSBicm93c2VyIHdoZXRoZXJcbiAgICogdGhlIERPTUNvbnRlbnRMb2FkZWQgZXZlbnQgaGFzIGFscmVhZHkgYmVlbiBmaXJlZDsgdGhlcmUncyBhIGdhcCBiZXR3ZWVuIERPTUNvbnRlbnRMb2FkZWRcbiAgICogZmlyaW5nIGFuZCByZWFkeXN0YXRlPWNvbXBsZXRlLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVhZHkoZm4pIHtcbiAgICAvLyBDaGVja2luZyByZWFkeVN0YXRlIGhlcmUgaXMgYSBmYWlsc2FmZSBpbiBjYXNlIHRoZSBodG14IHNjcmlwdCB0YWcgZW50ZXJlZCB0aGUgRE9NIGJ5XG4gICAgLy8gc29tZSBtZWFucyBvdGhlciB0aGFuIHRoZSBpbml0aWFsIHBhZ2UgbG9hZC5cbiAgICBpZiAoaXNSZWFkeSB8fCBnZXREb2N1bWVudCgpLnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgIGZuKClcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0RG9jdW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5zZXJ0SW5kaWNhdG9yU3R5bGVzKCkge1xuICAgIGlmIChodG14LmNvbmZpZy5pbmNsdWRlSW5kaWNhdG9yU3R5bGVzICE9PSBmYWxzZSkge1xuICAgICAgY29uc3Qgbm9uY2VBdHRyaWJ1dGUgPSBodG14LmNvbmZpZy5pbmxpbmVTdHlsZU5vbmNlID8gYCBub25jZT1cIiR7aHRteC5jb25maWcuaW5saW5lU3R5bGVOb25jZX1cImAgOiAnJ1xuICAgICAgZ2V0RG9jdW1lbnQoKS5oZWFkLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJyxcbiAgICAgICAgJzxzdHlsZScgKyBub25jZUF0dHJpYnV0ZSArICc+XFxcbiAgICAgIC4nICsgaHRteC5jb25maWcuaW5kaWNhdG9yQ2xhc3MgKyAne29wYWNpdHk6MH1cXFxuICAgICAgLicgKyBodG14LmNvbmZpZy5yZXF1ZXN0Q2xhc3MgKyAnIC4nICsgaHRteC5jb25maWcuaW5kaWNhdG9yQ2xhc3MgKyAne29wYWNpdHk6MTsgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlLWluO31cXFxuICAgICAgLicgKyBodG14LmNvbmZpZy5yZXF1ZXN0Q2xhc3MgKyAnLicgKyBodG14LmNvbmZpZy5pbmRpY2F0b3JDbGFzcyArICd7b3BhY2l0eToxOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2UtaW47fVxcXG4gICAgICA8L3N0eWxlPicpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWV0YUNvbmZpZygpIHtcbiAgICAvKiogQHR5cGUgSFRNTE1ldGFFbGVtZW50ICovXG4gICAgY29uc3QgZWxlbWVudCA9IGdldERvY3VtZW50KCkucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiaHRteC1jb25maWdcIl0nKVxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gcGFyc2VKU09OKGVsZW1lbnQuY29udGVudClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZU1ldGFDb25maWcoKSB7XG4gICAgY29uc3QgbWV0YUNvbmZpZyA9IGdldE1ldGFDb25maWcoKVxuICAgIGlmIChtZXRhQ29uZmlnKSB7XG4gICAgICBodG14LmNvbmZpZyA9IG1lcmdlT2JqZWN0cyhodG14LmNvbmZpZywgbWV0YUNvbmZpZylcbiAgICB9XG4gIH1cblxuICAvLyBpbml0aWFsaXplIHRoZSBkb2N1bWVudFxuICByZWFkeShmdW5jdGlvbigpIHtcbiAgICBtZXJnZU1ldGFDb25maWcoKVxuICAgIGluc2VydEluZGljYXRvclN0eWxlcygpXG4gICAgbGV0IGJvZHkgPSBnZXREb2N1bWVudCgpLmJvZHlcbiAgICBwcm9jZXNzTm9kZShib2R5KVxuICAgIGNvbnN0IHJlc3RvcmVkRWx0cyA9IGdldERvY3VtZW50KCkucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiW2h4LXRyaWdnZXI9J3Jlc3RvcmVkJ10sW2RhdGEtaHgtdHJpZ2dlcj0ncmVzdG9yZWQnXVwiXG4gICAgKVxuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignaHRteDphYm9ydCcsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZ0LnRhcmdldFxuICAgICAgY29uc3QgaW50ZXJuYWxEYXRhID0gZ2V0SW50ZXJuYWxEYXRhKHRhcmdldClcbiAgICAgIGlmIChpbnRlcm5hbERhdGEgJiYgaW50ZXJuYWxEYXRhLnhocikge1xuICAgICAgICBpbnRlcm5hbERhdGEueGhyLmFib3J0KClcbiAgICAgIH1cbiAgICB9KVxuICAgIC8qKiBAdHlwZSB7KGV2OiBQb3BTdGF0ZUV2ZW50KSA9PiBhbnl9ICovXG4gICAgY29uc3Qgb3JpZ2luYWxQb3BzdGF0ZSA9IHdpbmRvdy5vbnBvcHN0YXRlID8gd2luZG93Lm9ucG9wc3RhdGUuYmluZCh3aW5kb3cpIDogbnVsbFxuICAgIC8qKiBAdHlwZSB7KGV2OiBQb3BTdGF0ZUV2ZW50KSA9PiBhbnl9ICovXG4gICAgd2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnN0YXRlICYmIGV2ZW50LnN0YXRlLmh0bXgpIHtcbiAgICAgICAgcmVzdG9yZUhpc3RvcnkoKVxuICAgICAgICBmb3JFYWNoKHJlc3RvcmVkRWx0cywgZnVuY3Rpb24oZWx0KSB7XG4gICAgICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6cmVzdG9yZWQnLCB7XG4gICAgICAgICAgICBkb2N1bWVudDogZ2V0RG9jdW1lbnQoKSxcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAob3JpZ2luYWxQb3BzdGF0ZSkge1xuICAgICAgICAgIG9yaWdpbmFsUG9wc3RhdGUoZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0V2luZG93KCkuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHRyaWdnZXJFdmVudChib2R5LCAnaHRteDpsb2FkJywge30pIC8vIGdpdmUgcmVhZHkgaGFuZGxlcnMgYSBjaGFuY2UgdG8gbG9hZCB1cCBiZWZvcmUgZmlyaW5nIHRoaXMgZXZlbnRcbiAgICAgIGJvZHkgPSBudWxsIC8vIGtpbGwgcmVmZXJlbmNlIGZvciBnY1xuICAgIH0sIDApXG4gIH0pXG5cbiAgcmV0dXJuIGh0bXhcbn0pKClcblxuLyoqIEB0eXBlZGVmIHsnZ2V0J3wnaGVhZCd8J3Bvc3QnfCdwdXQnfCdkZWxldGUnfCdjb25uZWN0J3wnb3B0aW9ucyd8J3RyYWNlJ3wncGF0Y2gnfSBIdHRwVmVyYiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFN3YXBPcHRpb25zXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3NlbGVjdF1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbc2VsZWN0T09CXVxuICogQHByb3BlcnR5IHsqfSBbZXZlbnRJbmZvXVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFthbmNob3JdXG4gKiBAcHJvcGVydHkge0VsZW1lbnR9IFtjb250ZXh0RWxlbWVudF1cbiAqIEBwcm9wZXJ0eSB7c3dhcENhbGxiYWNrfSBbYWZ0ZXJTd2FwQ2FsbGJhY2tdXG4gKiBAcHJvcGVydHkge3N3YXBDYWxsYmFja30gW2FmdGVyU2V0dGxlQ2FsbGJhY2tdXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgc3dhcENhbGxiYWNrXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7J2lubmVySFRNTCcgfCAnb3V0ZXJIVE1MJyB8ICdiZWZvcmViZWdpbicgfCAnYWZ0ZXJiZWdpbicgfCAnYmVmb3JlZW5kJyB8ICdhZnRlcmVuZCcgfCAnZGVsZXRlJyB8ICdub25lJyB8IHN0cmluZ30gSHRteFN3YXBTdHlsZVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgSHRteFN3YXBTcGVjaWZpY2F0aW9uXG4gKiBAcHJvcGVydHkge0h0bXhTd2FwU3R5bGV9IHN3YXBTdHlsZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IHN3YXBEZWxheVxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNldHRsZURlbGF5XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFt0cmFuc2l0aW9uXVxuICogQHByb3BlcnR5IHtib29sZWFufSBbaWdub3JlVGl0bGVdXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2hlYWRdXG4gKiBAcHJvcGVydHkgeyd0b3AnIHwgJ2JvdHRvbSd9IFtzY3JvbGxdXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3Njcm9sbFRhcmdldF1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbc2hvd11cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbc2hvd1RhcmdldF1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2ZvY3VzU2Nyb2xsXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeygodGhpczpOb2RlLCBldnQ6RXZlbnQpID0+IGJvb2xlYW4pICYge3NvdXJjZTogc3RyaW5nfX0gQ29uZGl0aW9uYWxGdW5jdGlvblxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gSHRteFRyaWdnZXJTcGVjaWZpY2F0aW9uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdHJpZ2dlclxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtwb2xsSW50ZXJ2YWxdXG4gKiBAcHJvcGVydHkge0NvbmRpdGlvbmFsRnVuY3Rpb259IFtldmVudEZpbHRlcl1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2NoYW5nZWRdXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtvbmNlXVxuICogQHByb3BlcnR5IHtib29sZWFufSBbY29uc3VtZV1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZGVsYXldXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2Zyb21dXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3RhcmdldF1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdGhyb3R0bGVdXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3F1ZXVlXVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtyb290XVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFt0aHJlc2hvbGRdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7e2VsdDogRWxlbWVudCwgbWVzc2FnZTogc3RyaW5nLCB2YWxpZGl0eTogVmFsaWRpdHlTdGF0ZX19IEh0bXhFbGVtZW50VmFsaWRhdGlvbkVycm9yXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7UmVjb3JkPHN0cmluZywgc3RyaW5nPn0gSHRteEhlYWRlclNwZWNpZmljYXRpb25cbiAqIEBwcm9wZXJ0eSB7J3RydWUnfSBIWC1SZXF1ZXN0XG4gKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBIWC1UcmlnZ2VyXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBIWC1UcmlnZ2VyLU5hbWVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IEhYLVRhcmdldFxuICogQHByb3BlcnR5IHtzdHJpbmd9IEhYLUN1cnJlbnQtVVJMXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW0hYLVByb21wdF1cbiAqIEBwcm9wZXJ0eSB7J3RydWUnfSBbSFgtQm9vc3RlZF1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbQ29udGVudC1UeXBlXVxuICogQHByb3BlcnR5IHsndHJ1ZSd9IFtIWC1IaXN0b3J5LVJlc3RvcmUtUmVxdWVzdF1cbiAqL1xuXG4vKiogQHR5cGVkZWYgSHRteEFqYXhIZWxwZXJDb250ZXh0XG4gKiBAcHJvcGVydHkge0VsZW1lbnR8c3RyaW5nfSBbc291cmNlXVxuICogQHByb3BlcnR5IHtFdmVudH0gW2V2ZW50XVxuICogQHByb3BlcnR5IHtIdG14QWpheEhhbmRsZXJ9IFtoYW5kbGVyXVxuICogQHByb3BlcnR5IHtFbGVtZW50fHN0cmluZ30gW3RhcmdldF1cbiAqIEBwcm9wZXJ0eSB7SHRteFN3YXBTdHlsZX0gW3N3YXBdXG4gKiBAcHJvcGVydHkge09iamVjdHxGb3JtRGF0YX0gW3ZhbHVlc11cbiAqIEBwcm9wZXJ0eSB7UmVjb3JkPHN0cmluZyxzdHJpbmc+fSBbaGVhZGVyc11cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbc2VsZWN0XVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gSHRteFJlcXVlc3RDb25maWdcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYm9vc3RlZFxuICogQHByb3BlcnR5IHtib29sZWFufSB1c2VVcmxQYXJhbXNcbiAqIEBwcm9wZXJ0eSB7Rm9ybURhdGF9IGZvcm1EYXRhXG4gKiBAcHJvcGVydHkge09iamVjdH0gcGFyYW1ldGVycyBmb3JtRGF0YSBwcm94eVxuICogQHByb3BlcnR5IHtGb3JtRGF0YX0gdW5maWx0ZXJlZEZvcm1EYXRhXG4gKiBAcHJvcGVydHkge09iamVjdH0gdW5maWx0ZXJlZFBhcmFtZXRlcnMgdW5maWx0ZXJlZEZvcm1EYXRhIHByb3h5XG4gKiBAcHJvcGVydHkge0h0bXhIZWFkZXJTcGVjaWZpY2F0aW9ufSBoZWFkZXJzXG4gKiBAcHJvcGVydHkge0VsZW1lbnR9IHRhcmdldFxuICogQHByb3BlcnR5IHtIdHRwVmVyYn0gdmVyYlxuICogQHByb3BlcnR5IHtIdG14RWxlbWVudFZhbGlkYXRpb25FcnJvcltdfSBlcnJvcnNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2l0aENyZWRlbnRpYWxzXG4gKiBAcHJvcGVydHkge251bWJlcn0gdGltZW91dFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHBhdGhcbiAqIEBwcm9wZXJ0eSB7RXZlbnR9IHRyaWdnZXJpbmdFdmVudFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gSHRteFJlc3BvbnNlSW5mb1xuICogQHByb3BlcnR5IHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gKiBAcHJvcGVydHkge0VsZW1lbnR9IHRhcmdldFxuICogQHByb3BlcnR5IHtIdG14UmVxdWVzdENvbmZpZ30gcmVxdWVzdENvbmZpZ1xuICogQHByb3BlcnR5IHtIdG14QWpheEV0Y30gZXRjXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGJvb3N0ZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzZWxlY3RcbiAqIEBwcm9wZXJ0eSB7e3JlcXVlc3RQYXRoOiBzdHJpbmcsIGZpbmFsUmVxdWVzdFBhdGg6IHN0cmluZywgcmVzcG9uc2VQYXRoOiBzdHJpbmd8bnVsbCwgYW5jaG9yOiBzdHJpbmd9fSBwYXRoSW5mb1xuICogQHByb3BlcnR5IHtib29sZWFufSBbZmFpbGVkXVxuICogQHByb3BlcnR5IHtib29sZWFufSBbc3VjY2Vzc2Z1bF1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2tlZXBJbmRpY2F0b3JzXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gSHRteEFqYXhFdGNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3JldHVyblByb21pc2VdXG4gKiBAcHJvcGVydHkge0h0bXhBamF4SGFuZGxlcn0gW2hhbmRsZXJdXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3NlbGVjdF1cbiAqIEBwcm9wZXJ0eSB7RWxlbWVudH0gW3RhcmdldE92ZXJyaWRlXVxuICogQHByb3BlcnR5IHtIdG14U3dhcFN0eWxlfSBbc3dhcE92ZXJyaWRlXVxuICogQHByb3BlcnR5IHtSZWNvcmQ8c3RyaW5nLHN0cmluZz59IFtoZWFkZXJzXVxuICogQHByb3BlcnR5IHtPYmplY3R8Rm9ybURhdGF9IFt2YWx1ZXNdXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtjcmVkZW50aWFsc11cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdGltZW91dF1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEh0bXhSZXNwb25zZUhhbmRsaW5nQ29uZmlnXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2NvZGVdXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHN3YXBcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2Vycm9yXVxuICogQHByb3BlcnR5IHtib29sZWFufSBbaWdub3JlVGl0bGVdXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3NlbGVjdF1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbdGFyZ2V0XVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtzd2FwT3ZlcnJpZGVdXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2V2ZW50XVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge0h0bXhSZXNwb25zZUluZm8gJiB7c2hvdWxkU3dhcDogYm9vbGVhbiwgc2VydmVyUmVzcG9uc2U6IGFueSwgaXNFcnJvcjogYm9vbGVhbiwgaWdub3JlVGl0bGU6IGJvb2xlYW4sIHNlbGVjdE92ZXJyaWRlOnN0cmluZ319IEh0bXhCZWZvcmVTd2FwRGV0YWlsc1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIEh0bXhBamF4SGFuZGxlclxuICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAqIEBwYXJhbSB7SHRteFJlc3BvbnNlSW5mb30gcmVzcG9uc2VJbmZvXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KCgpID0+IHZvaWQpfSBIdG14U2V0dGxlVGFza1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gSHRteFNldHRsZUluZm9cbiAqIEBwcm9wZXJ0eSB7SHRteFNldHRsZVRhc2tbXX0gdGFza3NcbiAqIEBwcm9wZXJ0eSB7RWxlbWVudFtdfSBlbHRzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3RpdGxlXVxuICovXG5cbi8qKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYmlnc2t5c29mdHdhcmUvaHRteC1leHRlbnNpb25zL2Jsb2IvbWFpbi9SRUFETUUubWRcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEh0bXhFeHRlbnNpb25cbiAqIEBwcm9wZXJ0eSB7KGFwaTogYW55KSA9PiB2b2lkfSBpbml0XG4gKiBAcHJvcGVydHkgeyhuYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudHxDdXN0b21FdmVudCkgPT4gYm9vbGVhbn0gb25FdmVudFxuICogQHByb3BlcnR5IHsodGV4dDogc3RyaW5nLCB4aHI6IFhNTEh0dHBSZXF1ZXN0LCBlbHQ6IEVsZW1lbnQpID0+IHN0cmluZ30gdHJhbnNmb3JtUmVzcG9uc2VcbiAqIEBwcm9wZXJ0eSB7KHN3YXBTdHlsZTogSHRteFN3YXBTdHlsZSkgPT4gYm9vbGVhbn0gaXNJbmxpbmVTd2FwXG4gKiBAcHJvcGVydHkgeyhzd2FwU3R5bGU6IEh0bXhTd2FwU3R5bGUsIHRhcmdldDogTm9kZSwgZnJhZ21lbnQ6IE5vZGUsIHNldHRsZUluZm86IEh0bXhTZXR0bGVJbmZvKSA9PiBib29sZWFufE5vZGVbXX0gaGFuZGxlU3dhcFxuICogQHByb3BlcnR5IHsoeGhyOiBYTUxIdHRwUmVxdWVzdCwgcGFyYW1ldGVyczogRm9ybURhdGEsIGVsdDogTm9kZSkgPT4gKnxzdHJpbmd8bnVsbH0gZW5jb2RlUGFyYW1ldGVyc1xuICogQHByb3BlcnR5IHsoKSA9PiBzdHJpbmdbXXxudWxsfSBnZXRTZWxlY3RvcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgaHRteFxuIiwgImltcG9ydCBcImh0bXgub3JnXCI7XG5cbi8vIENvZGUgdG8gcnVuIHdoZW4gRE9NIGlzIGxvYWRlZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyhcIkRPTSBpcyBsb2FkZWQhXCIpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOztBQUFBLE1BQUlBLFFBQVEsV0FBVztBQUNyQjtBQUdBLFVBQU0sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSVgsUUFBUTtBQUFBO0FBQUEsTUFFUixTQUFTO0FBQUE7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QUEsTUFDbEMsT0FBTztBQUNMLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUVBLGFBQVMsa0JBQWtCO0FBQ3pCLFlBQU0sYUFBYSxjQUFjO0FBQ2pDLFVBQUksWUFBWTtBQUNkLGFBQUssU0FBUyxhQUFhLEtBQUssUUFBUSxVQUFVO0FBQUEsTUFDcEQ7QUFBQSxJQUNGO0FBR0EsVUFBTSxXQUFXO0FBQ2Ysc0JBQWdCO0FBQ2hCLDRCQUFzQjtBQUN0QixVQUFJLE9BQU8sWUFBWSxFQUFFO0FBQ3pCLGtCQUFZLElBQUk7QUFDaEIsWUFBTSxlQUFlLFlBQVksRUFBRTtBQUFBLFFBQ2pDO0FBQUEsTUFDRjtBQUNBLFdBQUssaUJBQWlCLGNBQWMsU0FBUyxLQUFLO0FBQ2hELGNBQU0sU0FBUyxJQUFJO0FBQ25CLGNBQU0sZUFBZSxnQkFBZ0IsTUFBTTtBQUMzQyxZQUFJLGdCQUFnQixhQUFhLEtBQUs7QUFDcEMsdUJBQWEsSUFBSSxNQUFNO0FBQUEsUUFDekI7QUFBQSxNQUNGLENBQUM7QUFFRCxZQUFNLG1CQUFtQixPQUFPLGFBQWEsT0FBTyxXQUFXLEtBQUssTUFBTSxJQUFJO0FBRTlFLGFBQU8sYUFBYSxTQUFTLE9BQU87QUFDbEMsWUFBSSxNQUFNLFNBQVMsTUFBTSxNQUFNLE1BQU07QUFDbkMseUJBQWU7QUFDZixrQkFBUSxjQUFjLFNBQVMsS0FBSztBQUNsQyx5QkFBYSxLQUFLLGlCQUFpQjtBQUFBLGNBQ2pDLFVBQVUsWUFBWTtBQUFBLGNBQ3RCO0FBQUEsWUFDRixDQUFDO0FBQUEsVUFDSCxDQUFDO0FBQUEsUUFDSCxPQUFPO0FBQ0wsY0FBSSxrQkFBa0I7QUFDcEIsNkJBQWlCLEtBQUs7QUFBQSxVQUN4QjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQ0EsZ0JBQVUsRUFBRSxXQUFXLFdBQVc7QUFDaEMscUJBQWEsTUFBTSxhQUFhLENBQUMsQ0FBQztBQUNsQyxlQUFPO0FBQUEsTUFDVCxHQUFHLENBQUM7QUFBQSxJQUNOLENBQUM7QUFFRCxXQUFPO0FBQUEsRUFDVCxFQUFHO0FBZ0xILE1BQU8sbUJBQVFQOzs7QUMvaEtmLFdBQVMsaUJBQWlCLG9CQUFvQixXQUFZO0FBQ3hELFlBQVEsSUFBSSxnQkFBZ0I7QUFBQSxFQUM5QixDQUFDOyIsCiAgIm5hbWVzIjogWyJodG14IiwgInN0ciIsICJlbHQiLCAiZXh0ZW5zaW9ucyIsICJwYXJlbnRFbHQiLCAicHJvbXB0IiwgInRhcmdldCIsICJldmVudCJdCn0K
