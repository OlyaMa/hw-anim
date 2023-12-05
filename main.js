/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 866:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Widget_1 = __webpack_require__(437);
var heart_png_1 = __importDefault(__webpack_require__(90));
function app() {
    var _a;
    var content = document.querySelector(".text-box-wrapper");
    var wrapper = document.querySelector(".text-box-wrapper");
    var btnLike = document.querySelector(".btn-like");
    var animations = ["likemov1", "likemov2", "likemov3", "likemov4"];
    var collapseHandler = function () {
        if (wrapper.style.maxHeight) {
            wrapper.style.maxHeight = "";
        }
        else {
            wrapper.style.maxHeight = (content === null || content === void 0 ? void 0 : content.scrollHeight) + "px";
        }
    };
    var likeHandler = function () {
        var likeImg = document.createElement("img");
        likeImg.classList.add("like");
        likeImg.src = heart_png_1.default;
        likeImg.width = 30;
        likeImg.style.animationName =
            animations[Math.floor(Math.random() * animations.length)];
        document.body.appendChild(likeImg);
    };
    var animationEndHandler = function (event) {
        var targetElement = event.target;
        if (targetElement.classList.contains("like"))
            targetElement.remove();
    };
    (_a = document.querySelector(".btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", collapseHandler);
    btnLike === null || btnLike === void 0 ? void 0 : btnLike.addEventListener("click", likeHandler);
    document.body.addEventListener("animationend", animationEndHandler);
}
app();
new Widget_1.Widget();


/***/ }),

/***/ 437:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Widget = void 0;
var Widget = /** @class */ (function () {
    function Widget() {
        this.container = document.body;
        this.createWidget();
        this.createStyles();
        this.addEventListeners();
    }
    Widget.prototype.createWidget = function () {
        var widget = document.createElement("div");
        widget.classList.add("widget");
        widget.innerHTML = "\n      <div class=\"form\">\n        <form class=\"feedback\">\n          <div class=\"cancel_widget_btn_container\">\n            <h2>\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C</h2>\n          <button id=\"cancel_widget_btn\">X</button>\n          </div>\n          <textarea class=\"feedback-text\"></textarea>\n          <button id=\"submit-feedback-btn\" type=\"submit\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n        </form>\n      </div>\n      <button id=\"enable_widget_btn\" type=\"button\"></button>";
        this.container.appendChild(widget);
    };
    Widget.prototype.createStyles = function () {
        var style = document.createElement("style");
        document.head.appendChild(style);
        var sheet = style.sheet;
        sheet === null || sheet === void 0 ? void 0 : sheet.insertRule("\n      .widget { \n        position: fixed; \n        bottom: 2rem;\n        right: 2rem; \n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n        }", sheet.cssRules.length);
        sheet === null || sheet === void 0 ? void 0 : sheet.insertRule("\n      #enable_widget_btn { \n        background-color: #dc3545;\n        border: 0;\n        border-radius: 50%;\n        width: 50px; \n        height: 50px;\n        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.2);\n        }", sheet.cssRules.length);
        sheet === null || sheet === void 0 ? void 0 : sheet.insertRule("\n      .form { \n        width: 240px; \n        height: 280px;\n        position: absolute;\n        display: flex;\n        visibility: hidden;\n        padding: 15px;\n        flex-wrap: wrap;\n        right: 1.45rem; \n        bottom: 1.45rem;\n        border: 1px solid black;\n        border-radius: 3px;\n        background-color: white;   \n        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);\n        transition: box-shadow 0.3s ease;     \n        }", sheet.cssRules.length);
        sheet === null || sheet === void 0 ? void 0 : sheet.insertRule("\n      .cancel_widget_btn_container {\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        align-items: flex-start;\n      }", sheet.cssRules.length);
        sheet === null || sheet === void 0 ? void 0 : sheet.insertRule("\n      #cancel_widget_btn {\n        background-color: transparent;\n        padding-right: 0;\n        border: 0;\n      }", sheet.cssRules.length);
        sheet === null || sheet === void 0 ? void 0 : sheet.insertRule("\n      .form h2 {\n        margin: 0;\n        padding-bottom: 10px;\n      }", sheet.cssRules.length);
        sheet === null || sheet === void 0 ? void 0 : sheet.insertRule("\n      .feedback-text { width: calc(100% - 5px); height: 69%; border-radius: 10px;}", sheet.cssRules.length);
        sheet === null || sheet === void 0 ? void 0 : sheet.insertRule("\n      #submit-feedback-btn { width: 100%; padding: 0; height: 12%; margin-top: 10px; border: 0; background-color: lightgray; border-radius: 10px}", sheet.cssRules.length);
        sheet === null || sheet === void 0 ? void 0 : sheet.insertRule("\n      .hidden {\n        animation-name: hide;\n        animation-duration: 100ms;\n        animation-fill-mode: forwards;\n      }", sheet.cssRules.length);
        sheet === null || sheet === void 0 ? void 0 : sheet.insertRule("\n      .visible {\n        animation-name: show;\n        animation-duration: 100ms;\n        animation-fill-mode: forwards;\n      }", sheet.cssRules.length);
        sheet === null || sheet === void 0 ? void 0 : sheet.insertRule("\n      #enable_widget_btn {\n        transform: scale(1);\n        transition:\n          transform 0.2s,\n          box-shadow 0.3s ease;\n        transition-timing-function: ease-in-out;\n      }", sheet.cssRules.length);
        sheet === null || sheet === void 0 ? void 0 : sheet.insertRule("\n      #enable_widget_btn:hover {\n        transform: scale(1.2);\n      }", sheet.cssRules.length);
        sheet === null || sheet === void 0 ? void 0 : sheet.insertRule("\n      #enable_widget_btn:active {\n        transform: scale(1.2);\n      }", sheet.cssRules.length);
        sheet === null || sheet === void 0 ? void 0 : sheet.insertRule("\n      @keyframes hide {\n        from {\n          opacity: 1;\n          transform: scale(1);\n        }\n      \n        to {\n          opacity: 0;\n          transform: scale(0.8);\n        }\n      }", sheet.cssRules.length);
        sheet === null || sheet === void 0 ? void 0 : sheet.insertRule("\n      @keyframes show {\n        from {\n          opacity: 0;\n          transform: scale(0.8);\n        }\n      \n        to {\n          opacity: 1;\n          transform: scale(1);\n        }\n      }", sheet.cssRules.length);
    };
    Widget.prototype.addEventListeners = function () {
        var form = this.container.querySelector(".widget .form");
        var enableBtn = this.container.querySelector("#enable_widget_btn");
        var cancelBtn = this.container.querySelector("#cancel_widget_btn");
        var widgetHideHandler = function (event) {
            event.preventDefault();
            form.classList.add("hidden");
            enableBtn.classList.add("visible");
            form.classList.remove("visible");
            enableBtn.classList.remove("hidden");
        };
        var widgetVisibleHandler = function (event) {
            event.preventDefault();
            form.classList.add("visible");
            enableBtn.classList.add("hidden");
            form.classList.remove("hidden");
            enableBtn.classList.remove("visible");
        };
        enableBtn === null || enableBtn === void 0 ? void 0 : enableBtn.addEventListener("click", widgetVisibleHandler);
        cancelBtn === null || cancelBtn === void 0 ? void 0 : cancelBtn.addEventListener("click", widgetHideHandler);
        form === null || form === void 0 ? void 0 : form.addEventListener("animationend", function (event) {
            if (event.animationName === "hide") {
                form.style.visibility = "hidden";
                enableBtn.classList.remove("visible");
            }
        });
        form === null || form === void 0 ? void 0 : form.addEventListener("animationstart", function (event) {
            if (event.animationName === "show") {
                form.style.visibility = "visible";
            }
        });
    };
    return Widget;
}());
exports.Widget = Widget;


/***/ }),

/***/ 90:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be0d860e775accf30d67.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/* harmony import */ var _ts_app_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(866);
/* harmony import */ var _ts_app_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ts_app_ts__WEBPACK_IMPORTED_MODULE_0__);


})();

/******/ })()
;