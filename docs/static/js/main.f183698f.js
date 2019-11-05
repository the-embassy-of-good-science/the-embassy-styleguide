/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _svgs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svgs/index */ \"./src/svgs/index.js\");\n// SCSS files from bootstrap\n // Import bootstrap logic\n// import 'bootstrap';\n// Import svgs\n\n\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/js/main.js");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/scss/main.scss");

/***/ }),

/***/ "./src/svgs/icon-arrow-down.svg":
/*!**************************************!*\
  !*** ./src/svgs/icon-arrow-down.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-arrow-down\",\n  \"use\": \"icon-arrow-down-usage\",\n  \"viewBox\": \"0 0 9 6\",\n  \"content\": \"<symbol viewBox=\\\"0 0 9 6\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-arrow-down\\\">\\n    <path d=\\\"M5.58499299,4.5211848 L2.92547252,7.18070527 L1.32976023,5.58499299 L3.9892807,2.92547252 L1.32976023,0.265952047 L2.92547252,-1.32976023 L7.18070527,2.92547252 L5.58499299,4.5211848 Z\\\" id=\\\"icon-arrow-down_arrow-down\\\" fill=\\\"currentColor\\\" fill-rule=\\\"nonzero\\\" transform=\\\"translate(4.255233, 2.925473) rotate(-270.000000) translate(-4.255233, -2.925473) \\\" />\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-arrow-down.svg");

/***/ }),

/***/ "./src/svgs/icon-arrow-right.svg":
/*!***************************************!*\
  !*** ./src/svgs/icon-arrow-right.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-arrow-right\",\n  \"use\": \"icon-arrow-right-usage\",\n  \"viewBox\": \"0 0 6 8\",\n  \"content\": \"<symbol viewBox=\\\"0 0 6 8\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-arrow-right\\\">\\n    <path d=\\\"M3.80662838,5.23411402 L1.42748564,7.61325676 L6.07103257e-11,6.18577112 L2.37914274,3.80662838 L2.12139195e-11,1.42748564 L1.42748564,-7.29551974e-11 L5.23411402,3.80662838 L3.80662838,5.23411402 Z\\\" fill=\\\"currentColor\\\" fill-rule=\\\"nonzero\\\" />\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-arrow-right.svg");

/***/ }),

/***/ "./src/svgs/icon-back.svg":
/*!********************************!*\
  !*** ./src/svgs/icon-back.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-back\",\n  \"use\": \"icon-back-usage\",\n  \"viewBox\": \"0 0 7 11\",\n  \"content\": \"<symbol viewBox=\\\"0 0 7 11\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-back\\\">\\n    <path fill=\\\"currentColor\\\" d=\\\"M1.94086154,4.14769601 L5.44419754,0.519885375 L6.88287714,1.90920212 L3.37954114,5.53701275 L6.94458072,8.97973145 L5.55526398,10.418411 L0.519885375,5.55580246 L1.90920212,4.11712286 L1.94086154,4.14769601 Z\\\" />\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-back.svg");

/***/ }),

/***/ "./src/svgs/icon-checkbox-lightbulb.svg":
/*!**********************************************!*\
  !*** ./src/svgs/icon-checkbox-lightbulb.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-checkbox-lightbulb\",\n  \"use\": \"icon-checkbox-lightbulb-usage\",\n  \"viewBox\": \"0 0 72 46\",\n  \"content\": \"<symbol viewBox=\\\"0 0 72 46\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-checkbox-lightbulb\\\">\\n    <defs>\\n        <path id=\\\"icon-checkbox-lightbulb_a\\\" d=\\\"M0 46h71.9491V.131H0z\\\" />\\n    </defs>\\n    <g fill=\\\"none\\\" fill-rule=\\\"evenodd\\\">\\n        <path fill=\\\"#000\\\" d=\\\"M60.9456 14.726L59.6135 14l-4.1675 8.0222L51.2777 14l-1.3321.726 4.746 9.1338V31h1.5087v-7.1402z\\\" />\\n        <g>\\n            <path d=\\\"M71.8586 14.8775C71.0619 7.2516 64.938 1.0946 57.2966.2394c-4.7943-.5326-9.3913.916-12.9545 4.09-1.933 1.7223-3.391 3.8625-4.3294 6.2132H10.7212v35.3428h33.185v-2.339H13.069V12.8816h26.1853a16.4873 16.4873 0 0 0-.4312 3.3634h1.5762c.1088-4.1057 1.9025-8.0079 4.986-10.753 3.2259-2.8747 7.3855-4.1907 11.7368-3.7027 6.9159.7742 12.459 6.3465 13.179 13.2496.465 4.4487-1.0572 8.8265-4.1736 12.0091-1.9768 2.0178-3.3574 5.7079-3.3574 8.9723 0 .6534-.374 1.2475-.9524 1.515-4.0907 1.8851-8.7824 1.8851-12.8723 0l-.6574 1.4142c2.2539 1.0393 4.6737 1.5593 7.0928 1.5593 1.7295 0 3.4575-.2705 5.126-.8007v2.6072c0 .902-.626 1.6708-1.4877 1.8283-2.8769.5224-5.8711.3532-8.6658-.495l-.4563 1.4922c1.8845.5715 3.852.8592 5.8203.8592 1.2005 0 2.4018-.1076 3.5835-.3228 1.606-.2931 2.7713-1.7074 2.7713-3.3619v-3.1927c.1346-.0585.27-.1115.403-.173 1.13-.5209 1.8603-1.6709 1.8603-2.9293 0-2.845 1.2247-6.16 2.912-7.8831 3.4427-3.5155 5.123-8.3486 4.6112-13.2597\\\" fill=\\\"#000\\\" />\\n            <path fill=\\\"#000\\\" d=\\\"M29.1759 34.5769l-5.4869-4.5236 1.4964-1.801 3.679 3.0305 6.8345-8.2293 1.8086 1.4907zM7.1299 8.9151L2.2785 4.0812 3.385 2.9788l4.8514 4.8339z\\\" />\\n            <mask id=\\\"icon-checkbox-lightbulb_b\\\" fill=\\\"#fff\\\">\\n                <use xlink:href=\\\"#icon-checkbox-lightbulb_a\\\" />\\n            </mask>\\n            <path fill=\\\"#000\\\" mask=\\\"url(#icon-checkbox-lightbulb_b)\\\" d=\\\"M15.0253 6.8049h1.5652V.2557h-1.5652zM0 16.401h6.5731v-1.5594H0z\\\" />\\n        </g>\\n    </g>\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-checkbox-lightbulb.svg");

/***/ }),

/***/ "./src/svgs/icon-discussions.svg":
/*!***************************************!*\
  !*** ./src/svgs/icon-discussions.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-discussions\",\n  \"use\": \"icon-discussions-usage\",\n  \"viewBox\": \"0 0 67 50\",\n  \"content\": \"<symbol viewBox=\\\"0 0 67 50\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-discussions\\\">\\n    <g fill=\\\"currentColor\\\">\\n        <path d=\\\"M31.3747599,37.658 C31.233841,37.9052727 31.2160031,38.2070909 31.3265977,38.4707273 L34.9601653,47.1325455 C34.9699761,47.1552727 34.9860302,47.1934545 34.9396518,47.2425455 C34.8932734,47.2898182 34.8549221,47.2725455 34.830841,47.2634545 L26.2053545,43.5752727 C26.0947599,43.5270909 25.9770302,43.5043636 25.8601923,43.5043636 C25.7112464,43.5043636 25.5631923,43.5425455 25.4294085,43.6170909 C22.4299761,45.3043636 19.0247329,45.9189091 15.5829221,45.3989091 C8.79294909,44.3716364 3.44427341,38.8025455 2.5764626,31.8552727 C1.96284098,26.9398182 3.55665179,22.1234545 6.94851666,18.6407273 C10.3403815,15.158 15.0504626,13.4925455 19.8747058,14.0898182 C26.679841,14.9225455 32.3237329,20.5552727 33.2941113,27.4816364 C33.7926788,31.0425455 33.1291113,34.5616364 31.3747599,37.658 L31.3747599,37.658 Z M17.9482194,0.699818182 L17.9482194,8.63709091 L20.623895,8.63709091 L20.623895,3.42709091 L56.5510842,3.42709091 L63.7192194,3.42709091 L63.7192194,31.8189091 L57.9879221,31.8189091 C56.9096248,31.8189091 55.8777058,32.2952727 55.1570572,33.1252727 L48.3412194,42.1852727 C48.2894896,42.2307273 48.1985167,42.2798182 48.0656248,42.2252727 C47.9710842,42.1870909 47.8587058,42.098 47.8587058,41.8916364 L47.8587058,34.9007273 C47.8587058,33.2016364 46.5199761,31.8189091 44.8744356,31.8189091 L35.1135707,31.8189091 C35.2865977,30.3107273 35.2767869,28.7725455 35.0600572,27.2234545 C33.9603545,19.3725455 27.8036248,13.2289091 20.0869761,12.2843636 C14.7133275,11.6270909 9.46454368,13.4761818 5.68203017,17.3598182 C1.90040855,21.2425455 0.122868009,26.6098182 0.80694909,32.0843636 C1.77465179,39.8361818 7.74319233,46.0507273 15.3207058,47.1970909 C19.0077869,47.7570909 22.6574085,47.1407273 25.9065707,45.4189091 L34.1405167,48.9398182 C34.3786518,49.0416364 34.6265977,49.0907273 34.8727599,49.0907273 C35.3624085,49.0907273 35.8431383,48.8943636 36.2043545,48.5234545 C36.7475167,47.9661818 36.9035977,47.1398182 36.6003545,46.4170909 L33.139814,38.1670909 C33.7596788,37.0052727 34.2350572,35.7925455 34.5820031,34.5461818 L44.8744356,34.5461818 C45.0447869,34.5461818 45.1830302,34.7052727 45.1830302,34.9007273 L45.1830302,41.8916364 C45.1830302,43.1652727 45.9241923,44.2898182 47.0720572,44.758 C47.4297058,44.9043636 47.8016248,44.9752727 48.170868,44.9752727 C48.9646518,44.9743636 49.7405977,44.6461818 50.315868,44.0307273 L57.1861113,34.9043636 C57.3974896,34.6761818 57.6873545,34.5461818 57.9879221,34.5461818 L66.394895,34.5461818 L66.394895,0.699818182 L56.5510842,0.699818182 L17.9482194,0.699818182 Z\\\" />\\n        <path d=\\\"M18.1632653,21 C15.1307867,21 12.6632653,23.1742851 12.6632653,25.8470776 L14.372667,25.8470776 C14.372667,24.1255888 16.0735217,22.7249386 18.1632653,22.7249386 C20.2530089,22.7249386 21.9538636,24.1255888 21.9538636,25.8470776 C21.9538636,26.7587076 21.4683935,27.6237643 20.621385,28.2197306 C18.6085645,29.6384927 17.3085645,31.906787 17.3085645,34 L19.0179662,34 C19.0179662,32.4777417 20.055573,30.7226166 21.6000174,29.6341803 C22.9111286,28.7096132 23.6632653,27.3296623 23.6632653,25.8470776 C23.6632653,23.1742851 21.1957439,21 18.1632653,21\\\" />\\n        <path d=\\\"M17.1632653,36 C16.3347144,36 15.6632653,36.6714491 15.6632653,37.501076 C15.6632653,38.3285509 16.3347144,39 17.1632653,39 C17.9918162,39 18.6632653,38.3285509 18.6632653,37.501076 C18.6632653,36.6714491 17.9918162,36 17.1632653,36\\\" />\\n        <polygon points=\\\"35.6632653 19 54.6632653 19 54.6632653 16 35.6632653 16\\\" />\\n    </g>\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-discussions.svg");

/***/ }),

/***/ "./src/svgs/icon-download.svg":
/*!************************************!*\
  !*** ./src/svgs/icon-download.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-download\",\n  \"use\": \"icon-download-usage\",\n  \"viewBox\": \"0 0 14 13\",\n  \"content\": \"<symbol viewBox=\\\"0 0 14 13\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-download\\\">\\n    <g stroke=\\\"none\\\" stroke-width=\\\"1\\\" fill=\\\"none\\\" fill-rule=\\\"evenodd\\\">\\n        <polyline id=\\\"icon-download_bottom-shape\\\" stroke=\\\"currentColor\\\" stroke-width=\\\"2\\\" points=\\\"13 8 13 12 1 12 1 8\\\" />\\n        <path d=\\\"M6,5.30594374 L6,0 L8,0 L8,5.17296761 L9.43013443,3.81197003 L10.9301344,5.23945567 L6.93013443,9.04608405 L5.43013443,7.61859841 L2.93013443,5.23945567 L4.43013443,3.81197003 L6,5.30594374 Z M6.72931339,6 L6.93013443,6.19111277 L7.13095547,6 L6.72931339,6 Z\\\" id=\\\"icon-download_arrow-down-shape\\\" fill=\\\"currentColor\\\" fill-rule=\\\"nonzero\\\" />\\n    </g>\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-download.svg");

/***/ }),

/***/ "./src/svgs/icon-error.svg":
/*!*********************************!*\
  !*** ./src/svgs/icon-error.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-error\",\n  \"use\": \"icon-error-usage\",\n  \"viewBox\": \"0 0 17 16\",\n  \"content\": \"<symbol viewBox=\\\"0 0 17 16\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-error\\\">\\n        <path d=\\\"M9.71361377,1.0524147 L16.7731012,13.0582497 C17.1650143,13.7247632 16.9424067,14.5827875 16.2758931,14.9747006 C16.0607943,15.1011797 15.8158002,15.1678711 15.5662717,15.1678711 L1.44729682,15.1678711 C0.674098168,15.1678711 0.047296818,14.5410698 0.047296818,13.7678711 C0.047296818,13.5183426 0.113988196,13.2733485 0.24046732,13.0582497 L7.29995477,1.0524147 C7.69186786,0.385901172 8.54989216,0.163293534 9.21640569,0.555206624 C9.42174159,0.675945096 9.59287529,0.847078804 9.71361377,1.0524147 Z\\\" id=\\\"icon-error_triangle-shape\\\" fill=\\\"currentColor\\\" />\\n        <path d=\\\"M7.45692251,4.82027753 L9.55664603,4.82027753 L9.55664603,9.64082998 L7.45692251,9.64082998 L7.45692251,4.82027753 Z M7.45692251,10.710262 L9.55664603,10.710262 L9.55664603,12.806848 L7.45692251,12.806848 L7.45692251,10.710262 Z\\\" id=\\\"icon-error_exclamation-shape\\\" fill=\\\"#FFFFFF\\\" />\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-error.svg");

/***/ }),

/***/ "./src/svgs/icon-form-submit.svg":
/*!***************************************!*\
  !*** ./src/svgs/icon-form-submit.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-form-submit\",\n  \"use\": \"icon-form-submit-usage\",\n  \"viewBox\": \"0 0 7 11\",\n  \"content\": \"<symbol viewBox=\\\"0 0 7 11\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"icon-form-submit\\\">\\n    <g>\\n        <path d=\\\"M.206 9.396l5.069-5.069 1.493 1.494L1.7 10.889z\\\" />\\n        <path d=\\\"M1.7.752l5.068 5.069-1.493 1.493L.206 2.246z\\\" />\\n    </g>\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-form-submit.svg");

/***/ }),

/***/ "./src/svgs/icon-forward.svg":
/*!***********************************!*\
  !*** ./src/svgs/icon-forward.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-forward\",\n  \"use\": \"icon-forward-usage\",\n  \"viewBox\": \"0 0 6 9\",\n  \"content\": \"<symbol viewBox=\\\"0 0 6 9\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-forward\\\">\\n    <path fill=\\\"currentColor\\\" d=\\\"M4.36363636,6.1875 L1.63636364,9 L4.15152357e-11,7.3125 L2.72727273,4.5 L1.21323784e-12,1.6875 L1.63636364,-7.1683548e-11 L6,4.5 L4.36363636,6.1875 Z\\\" />\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-forward.svg");

/***/ }),

/***/ "./src/svgs/icon-hyperlink.svg":
/*!*************************************!*\
  !*** ./src/svgs/icon-hyperlink.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-hyperlink\",\n  \"use\": \"icon-hyperlink-usage\",\n  \"viewBox\": \"0 0 13 13\",\n  \"content\": \"<symbol viewBox=\\\"0 0 13 13\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-hyperlink\\\">\\n    <g stroke=\\\"none\\\" stroke-width=\\\"1\\\" fill=\\\"none\\\" fill-rule=\\\"evenodd\\\">\\n        <g transform=\\\"translate(-916.000000, -567.000000)\\\" fill=\\\"currentColor\\\" fill-rule=\\\"nonzero\\\">\\n            <path d=\\\"M928.219529,573.094836 L926.442047,573.094836 L926.442047,570.847261 L922.245323,575.043985 L920.988454,573.787115 L925.185178,569.590391 L922.937603,569.590391 L922.937603,567.81291 L928.219529,567.81291 L928.219529,573.094836 Z M928.219529,575.316688 L928.219529,579.920931 L916.111508,579.920931 L916.111508,567.81291 L920.715751,567.81291 L920.715751,569.590391 L917.888989,569.590391 L917.888989,578.14345 L926.442047,578.14345 L926.442047,575.316688 L928.219529,575.316688 L928.219529,575.316688 Z\\\" />\\n        </g>\\n    </g>\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-hyperlink.svg");

/***/ }),

/***/ "./src/svgs/icon-info.svg":
/*!********************************!*\
  !*** ./src/svgs/icon-info.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-info\",\n  \"use\": \"icon-info-usage\",\n  \"viewBox\": \"0 0 16 16\",\n  \"content\": \"<symbol viewBox=\\\"0 0 16 16\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-info\\\">\\n    <path d=\\\"M8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,0 C12.418278,0 16,3.581722 16,8 C16,12.418278 12.418278,16 8,16 Z M7,3 L7,5 L9,5 L9,3 L7,3 Z M6,7 L6,7.8 L7,7.8 L7,10.2 L6,10.2 L6,11 L10,11 L10,10.2 L9,10.2 L9,7 L6,7 Z\\\" id=\\\"icon-info_info-shape\\\" fill=\\\"currentColor\\\" fill-rule=\\\"nonzero\\\" />\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-info.svg");

/***/ }),

/***/ "./src/svgs/icon-minus.svg":
/*!*********************************!*\
  !*** ./src/svgs/icon-minus.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-minus\",\n  \"use\": \"icon-minus-usage\",\n  \"viewBox\": \"0 0 9 3\",\n  \"content\": \"<symbol viewBox=\\\"0 0 9 3\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-minus\\\">\\n    <polygon fill=\\\"currentColor\\\" fill-rule=\\\"nonzero\\\" points=\\\"5.38338548 2.38338548 3.36461593 2.38338548 3.34480863 2.38338548 0 2.38160812 0 0.362838563 3.34480863 0.362838563 5.36357818 0.362838563 5.38338548 0.362838563 8.72819411 0.364615926 8.72819411 2.38338548\\\" />\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-minus.svg");

/***/ }),

/***/ "./src/svgs/icon-pencil.svg":
/*!**********************************!*\
  !*** ./src/svgs/icon-pencil.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-pencil\",\n  \"use\": \"icon-pencil-usage\",\n  \"viewBox\": \"0 0 17 18\",\n  \"content\": \"<symbol viewBox=\\\"0 0 17 18\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-pencil\\\">\\n    <path d=\\\"M5.45475786,17.0959916 L0.800022937,17.0959916 L0.800022937,12.4412567 C0.800022937,12.0155551 0.969065,11.6070559 1.27022135,11.3058996 L8.99844833,3.5776726 L11.8797325,6.45941545 L10.8808475,7.45852974 L9.13446183,5.71237339 L2.53998643,12.3070782 C2.45397452,12.3930901 2.40557849,12.5098369 2.40557849,12.6316297 L2.40557849,15.7198012 L5.02584516,15.7198012 C5.14763802,15.7198012 5.26415548,15.6714051 5.35016738,15.5853932 L14.7153729,6.22959165 C14.8947364,6.05022815 14.8947364,5.75985196 14.7153729,5.58071784 L10.8501126,1.71522815 L11.9852404,0.580100375 L16.1752817,4.76968291 C16.8023658,5.39676704 16.8023658,6.41331307 16.1752817,7.0403972 L6.590115,16.6257932 C6.28895865,16.9269496 5.88045944,17.0959916 5.45475786,17.0959916\\\" fill=\\\"currentColor\\\" />\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-pencil.svg");

/***/ }),

/***/ "./src/svgs/icon-play.svg":
/*!********************************!*\
  !*** ./src/svgs/icon-play.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-play\",\n  \"use\": \"icon-play-usage\",\n  \"viewBox\": \"0 0 14 16\",\n  \"content\": \"<symbol viewBox=\\\"0 0 14 16\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-play\\\">\\n    <polygon fill=\\\"currentColor\\\" transform=\\\"translate(7.000000, 8.000000) rotate(-270.000000) translate(-7.000000, -8.000000) \\\" points=\\\"7 1.22388837 14.6231256 14.7761116 -0.623125584 14.7761116\\\" />\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-play.svg");

/***/ }),

/***/ "./src/svgs/icon-plus.svg":
/*!********************************!*\
  !*** ./src/svgs/icon-plus.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-plus\",\n  \"use\": \"icon-plus-usage\",\n  \"viewBox\": \"0 0 9 9\",\n  \"content\": \"<symbol viewBox=\\\"0 0 9 9\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-plus\\\">\\n    <polygon fill=\\\"currentColor\\\" fill-rule=\\\"nonzero\\\" points=\\\"5.55103023 5.53958704 5.55103023 9 3.46939389 9 3.46939389 5.53958704 3.44896977 5.53958704 0 5.5377581 0 3.46041296 3.44896977 3.46041296 3.44896977 0 5.53060611 0 5.53060611 3.46041296 5.55103023 3.46041296 9 3.4622419 9 5.53958704\\\" />\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-plus.svg");

/***/ }),

/***/ "./src/svgs/icon-resources-cases.svg":
/*!*******************************************!*\
  !*** ./src/svgs/icon-resources-cases.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-resources-cases\",\n  \"use\": \"icon-resources-cases-usage\",\n  \"viewBox\": \"0 0 44 33\",\n  \"content\": \"<symbol viewBox=\\\"0 0 44 33\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-resources-cases\\\">\\n    <path d=\\\"M35.2662511,33 L0,33 L0.0332962245,0 L19.6805911,0 L22.2302747,3.15876785 C22.2968672,3.24166718 22.3957469,3.28918265 22.5016894,3.28918265 L39.6850637,3.28918265 L39.6850637,6.92816004 L22.5016894,6.92816004 C21.29344,6.92816004 20.1643953,6.38830341 19.405645,5.44658722 L17.9461605,3.63897739 L3.6620802,3.63897739 L3.63584681,29.3610226 L35.2662511,29.3610226 C35.418102,29.3610226 35.5512869,29.2629588 35.5987088,29.1183904 L40.3545196,14.6893573 C40.3968966,14.5589425 40.3494747,14.4512744 40.3020528,14.3855615 C40.2541264,14.3193432 40.1663455,14.2409932 40.0195394,14.2409932 L9.54996256,14.2409932 L9.54996256,10.6015103 L40.0195394,10.6015103 C41.2893363,10.6015103 42.4935497,11.2161785 43.2401924,12.2453434 C43.986835,13.2750138 44.19872,14.6120183 43.8067327,15.8221463 L39.0504174,30.2511795 C38.5186868,31.8919797 36.9966458,33 35.2662511,33\\\" fill=\\\"currentColor\\\" />\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-resources-cases.svg");

/***/ }),

/***/ "./src/svgs/icon-resources-education.svg":
/*!***********************************************!*\
  !*** ./src/svgs/icon-resources-education.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-resources-education\",\n  \"use\": \"icon-resources-education-usage\",\n  \"viewBox\": \"0 0 48 43\",\n  \"content\": \"<symbol viewBox=\\\"0 0 48 43\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-resources-education\\\">\\n    <path d=\\\"M5.72302114,20.1310404 L0.138007157,20.1310404 L0.138007157,16.5182343 L8.35029962,16.5182343 L22.8083507,24.6387809 L42.1045978,14.4197309 L22.7779486,4.18493429 L7.88733477,12.0661319 L4.17881561,9.84480465 L22.7779486,0 L47.1380072,12.9007042 L47.1380072,15.9387576 L22.7475465,28.8552085 L9.9805551,21.6849754 L9.9805551,32.5728849 C9.9805551,33.0400086 10.2466841,33.4662125 10.6660228,33.6702802 L21.6955327,39.0302457 C22.3656264,39.3554785 23.1475792,39.3554785 23.8176729,39.0302457 L34.8466526,33.6708116 C35.2659914,33.4672753 35.5321204,33.04054 35.5321204,32.5734163 L35.5321204,28.1179383 L39.7896543,25.7796627 L39.7896543,32.7269985 C39.7896543,34.3627286 38.8571425,35.8539108 37.3891919,36.5676163 L25.4096757,42.3893912 C23.7344413,43.2035363 21.7792944,43.2035363 20.1035299,42.3893912 L8.12348356,36.5681477 C6.65500279,35.8544422 5.72302114,34.3627286 5.72302114,32.7275299 L5.72302114,20.1310404 Z\\\" fill=\\\"currentColor\\\" fill-rule=\\\"nonzero\\\" />\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-resources-education.svg");

/***/ }),

/***/ "./src/svgs/icon-resources-experts-committees.svg":
/*!********************************************************!*\
  !*** ./src/svgs/icon-resources-experts-committees.svg ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-resources-experts-committees\",\n  \"use\": \"icon-resources-experts-committees-usage\",\n  \"viewBox\": \"0 0 32 44\",\n  \"content\": \"<symbol viewBox=\\\"0 0 32 44\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-resources-experts-committees\\\">\\n    <g transform=\\\"translate(-849.000000, -464.000000)\\\" fill=\\\"currentColor\\\">\\n        <path d=\\\"M865.891355,495.156483 C873.791622,494.732393 880.217514,488.581805 880.838937,480.850238 C881.206877,476.274475 879.529194,471.797171 876.2355,468.565472 C872.942328,465.334798 868.378612,463.685615 863.715594,464.049707 C855.837277,464.659433 849.569223,470.963863 849.13543,478.714404 C849.08212,479.667709 849.116615,480.626655 849.237345,481.564576 L853.385561,481.048694 C853.296189,480.356406 853.271102,479.646171 853.3103,478.939012 C853.629635,473.230975 858.24457,468.588035 864.044859,468.138818 C867.486461,467.873184 870.85228,469.085456 873.279432,471.466925 C875.706063,473.84788 876.942113,477.150347 876.670861,480.527683 C876.213549,486.219311 871.481019,490.747382 865.662438,491.060194 C862.878843,491.207882 860.129219,490.387393 857.924712,488.743852 L857.064443,488.102845 L853.133647,489.906382 L853.134169,503.504955 C853.134169,505.260801 854.139734,506.81614 855.758358,507.564836 C856.389188,507.856622 857.057126,507.999695 857.719314,507.999695 C858.724356,507.999695 859.715809,507.669448 860.54263,507.027928 L863.661761,504.683382 L863.801307,504.579795 C864.496422,504.016735 865.504077,504.017248 866.199192,504.579283 L869.457346,507.027416 C870.829283,508.092512 872.653307,508.300199 874.241618,507.564323 C875.860765,506.81614 876.866329,505.260288 876.866329,503.504443 L876.866329,498.048706 L872.685188,499.921984 L872.685188,503.562902 C872.685188,503.623413 872.685188,503.807511 872.459406,503.91161 C872.233102,504.014684 872.088852,503.898277 872.041292,503.860329 L868.786273,501.571679 C866.577062,499.838909 863.423959,499.838909 861.214226,501.571679 L858.09823,503.756743 L857.959207,503.860842 C857.911646,503.89879 857.768442,504.017761 857.54057,503.91161 C857.315311,503.807511 857.315311,503.623413 857.315311,503.563415 L857.314788,493.23654 C859.913368,494.643678 862.885114,495.313915 865.891355,495.156483\\\" id=\\\"icon-resources-experts-committees_Fill-18\\\" />\\n    </g>\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-resources-experts-committees.svg");

/***/ }),

/***/ "./src/svgs/icon-resources-guidelines.svg":
/*!************************************************!*\
  !*** ./src/svgs/icon-resources-guidelines.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-resources-guidelines\",\n  \"use\": \"icon-resources-guidelines-usage\",\n  \"viewBox\": \"0 0 48 35\",\n  \"content\": \"<symbol viewBox=\\\"0 0 48 35\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-resources-guidelines\\\">\\n    <path fill=\\\"currentColor\\\" d=\\\"M4.47556526,3.24468004 L5.08386267,7.06160922 L24.0763196,4.0559587 L24.0763196,21.6050276 L27.9550911,21.6050276 L27.9550911,4.0844152 L43.7352635,6.78295031 L43.7352635,30.1419771 C43.7352635,30.5237237 43.3904359,30.8136578 43.012742,30.749228 L28.106492,28.2004922 C26.7228713,27.9642496 25.3090782,27.9642496 23.9254575,28.2004922 L9.0192075,30.749228 C8.64151354,30.8136578 8.29614716,30.5237237 8.29614716,30.1419771 L8.29614716,13.2511661 L0.614035088,13.2511661 L0.614035088,17.1164176 L4.4173756,17.1164176 L4.4173756,32.5355444 C4.4173756,34.0625309 5.79776354,35.2217305 7.3080006,34.9640113 L24.9707161,31.943864 C25.6619877,31.8252058 26.369423,31.8252058 27.0612334,31.943864 L44.7234101,34.9640113 C46.2341859,35.2217305 47.6140351,34.0625309 47.6140351,32.5355444 L47.6140351,3.52387587 L28.0407592,0.177284276 C26.7077851,-0.0503677108 25.3467937,-0.0589583518 24.0111256,0.152586183 L4.47556526,3.24468004 Z\\\" />\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-resources-guidelines.svg");

/***/ }),

/***/ "./src/svgs/icon-resources-training-materials.svg":
/*!********************************************************!*\
  !*** ./src/svgs/icon-resources-training-materials.svg ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-resources-training-materials\",\n  \"use\": \"icon-resources-training-materials-usage\",\n  \"viewBox\": \"0 0 48 43\",\n  \"content\": \"<symbol viewBox=\\\"0 0 48 43\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-resources-training-materials\\\">\\n    <path d=\\\"M6.22302114,20.1310404 L0.638007157,20.1310404 L0.638007157,16.5182343 L8.85029962,16.5182343 L23.3083507,24.6387809 L42.6045978,14.4197309 L23.2779486,4.18493429 L8.38733477,12.0661319 L4.67881561,9.84480465 L23.2779486,0 L47.6380072,12.9007042 L47.6380072,15.9387576 L23.2475465,28.8552085 L10.4805551,21.6849754 L10.4805551,32.5728849 C10.4805551,33.0400086 10.7466841,33.4662125 11.1660228,33.6702802 L22.1955327,39.0302457 C22.8656264,39.3554785 23.6475792,39.3554785 24.3176729,39.0302457 L35.3466526,33.6708116 C35.7659914,33.4672753 36.0321204,33.04054 36.0321204,32.5734163 L36.0321204,28.1179383 L40.2896543,25.7796627 L40.2896543,32.7269985 C40.2896543,34.3627286 39.3571425,35.8539108 37.8891919,36.5676163 L25.9096757,42.3893912 C24.2344413,43.2035363 22.2792944,43.2035363 20.6035299,42.3893912 L8.62348356,36.5681477 C7.15500279,35.8544422 6.22302114,34.3627286 6.22302114,32.7275299 L6.22302114,20.1310404 Z\\\" fill=\\\"currentColor\\\" />\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-resources-training-materials.svg");

/***/ }),

/***/ "./src/svgs/icon-resources.svg":
/*!*************************************!*\
  !*** ./src/svgs/icon-resources.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-resources\",\n  \"use\": \"icon-resources-usage\",\n  \"viewBox\": \"0 0 58 47\",\n  \"content\": \"<symbol viewBox=\\\"0 0 58 47\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-resources\\\">\\n    <g fill=\\\"currentColor\\\">\\n        <path d=\\\"M26.7308421,23.3523142 L9.81454968,23.3523142 L9.81454968,25.7319859 L46.4099333,25.7319859 C46.7946469,25.7319859 47.1452518,25.9112545 47.3721139,26.2221982 C47.5989759,26.5339352 47.6600541,26.9226149 47.5410706,27.2906708 L42.3176913,43.4565734 C42.1582533,43.9483722 41.7029428,44.2791466 41.1857608,44.2791466 L40.5353173,44.2791466 L2.50657809,44.2791466 L2.50657809,13.4108394 L13.2952161,13.4108394 L15.141048,15.6937377 C15.8224273,16.5353482 16.8337878,17.0192148 17.9165384,17.0192148 L25.1293231,17.0192148 C25.2292693,19.2331026 25.770248,21.3803597 26.7308421,23.3523142 M41.2738087,0.109268136 C32.9108493,0.109268136 26.0105948,6.48996101 25.185642,14.6395431 L17.9165384,14.6395431 C17.5556215,14.6395431 17.2185014,14.4777255 16.9916393,14.1969242 L14.4319059,11.0311677 L0.126906451,11.0311677 L0.126906451,46.6588182 L1.31674227,46.6588182 L40.5353173,46.6588182 L41.1857608,46.6588182 C42.7373068,46.6588182 44.1016518,45.6672884 44.5815523,44.1895123 L49.8049315,28.0236096 C50.1618823,26.9249946 49.9762679,25.7581622 49.2972682,24.8229513 C48.6174754,23.8885336 47.5656605,23.3523142 46.4099333,23.3523142 L28.5203552,23.3523142 C27.3225871,21.1955385 26.6888012,18.7769989 26.6888012,16.2807233 C26.6888012,8.23822644 33.2313118,1.69571589 41.2738087,1.69571589 C49.3163056,1.69571589 55.8588161,8.23822644 55.8588161,16.2807233 C55.8588161,19.6376468 54.7498892,22.7938846 52.651812,25.4067641 L53.888448,26.3998804 C56.1824515,23.5442744 57.4452639,19.950177 57.4452639,16.2807233 C57.4452639,7.36409373 50.1912315,0.109268136 41.2738087,0.109268136\\\" />\\n        <path d=\\\"M38.9437136,11.9442477 L45.3378912,15.6359117 L38.9437136,19.3283688 L38.9437136,11.9442477 Z M37.3572658,10.2419893 L37.3572658,21.029834 L38.2647139,21.5517753 L47.6073048,16.157853 L47.6073048,15.1147636 L38.2647139,9.72004797 L37.3572658,10.2419893 Z\\\" />\\n    </g>\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-resources.svg");

/***/ }),

/***/ "./src/svgs/icon-share.svg":
/*!*********************************!*\
  !*** ./src/svgs/icon-share.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-share\",\n  \"use\": \"icon-share-usage\",\n  \"viewBox\": \"0 0 17 16\",\n  \"content\": \"<symbol viewBox=\\\"0 0 17 16\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-share\\\">\\n    <path d=\\\"M11.94555,8.20775 L11.94555,9.70775 L9.57505,9.70775 C8.6083,9.70775 7.82505,8.92425 7.82505,7.95775 L7.82505,3.8175 L9.57505,3.8175 L9.57505,7.70775 C9.57505,7.98375 9.7988,8.20775 10.07505,8.20775 L11.94555,8.20775 Z M9.2373,0.25 C13.43005,0.25 16.84155,3.66125 16.84155,7.854 C16.84155,12.047 13.43005,15.458 9.2373,15.458 C5.6838,15.458 2.6933,13.0075 1.8633,9.70775 L5e-05,9.70775 L5e-05,8.20775 L1.6423,8.20775 L3.3943,8.20775 C3.5783,11.4095 5.99055,13.958 9.2373,13.958 C12.60305,13.958 15.09155,11.21975 15.09155,7.854 C15.09155,4.48825 12.60305,1.75 9.2373,1.75 C6.58005,1.75 4.37855,3.473 3.7333,5.83425 L2.0368,5.41125 C3.05655,2.413 5.8988,0.25 9.2373,0.25 Z\\\" fill=\\\"currentColor\\\" />\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-share.svg");

/***/ }),

/***/ "./src/svgs/icon-themes.svg":
/*!**********************************!*\
  !*** ./src/svgs/icon-themes.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-themes\",\n  \"use\": \"icon-themes-usage\",\n  \"viewBox\": \"0 0 62 48\",\n  \"content\": \"<symbol viewBox=\\\"0 0 62 48\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-themes\\\">\\n    <g fill-rule=\\\"evenodd\\\">\\n        <path d=\\\"M16.8128265,38 L31.1871735,38 C32.7374427,38 34,36.8623188 34,35.4637681 L34,33 L31.5890059,33 L31.5890059,35.4637681 C31.5890059,35.6630435 31.408985,35.826087 31.1871735,35.826087 L16.8128265,35.826087 C16.591015,35.826087 16.4109941,35.6630435 16.4109941,35.4637681 L16.4109941,33 L14,33 L14,35.4637681 C14,36.8623188 15.2617536,38 16.8128265,38 M44.8774519,23.20392 L44.8774519,43.59992 C44.8774519,44.70312 43.9740234,45.59992 42.8644649,45.59992 L4.42849091,45.59992 C3.31893247,45.59992 2.4155039,44.70312 2.4155039,43.59992 L2.4155039,23.20392 L44.8774519,23.20392 Z M54.7161273,25.41832 L61.0127506,33.87272 C61.5884649,34.64552 61.8268026,35.59512 61.6834779,36.54632 C61.5401532,37.49752 61.0328805,38.33592 60.2550623,38.90792 C59.6245948,39.37192 58.8781792,39.61512 58.1076078,39.61512 C57.9280494,39.61512 57.7460753,39.60152 57.5641013,39.57512 C56.6075299,39.43272 55.7628805,38.92872 55.1871662,38.15512 L50.5935299,31.98712 L51.8874779,31.03512 L56.4819195,37.20392 C56.8015818,37.63352 57.2710104,37.91352 57.802439,37.99192 C58.3330623,38.06952 58.8652961,37.93992 59.2968805,37.62152 C59.7292701,37.30392 60.0110883,36.83832 60.0908026,36.30952 C60.1705169,35.78152 60.0376597,35.25432 59.7179974,34.82392 L53.6041532,26.61512 C52.9261792,27.26712 52.181374,27.86152 51.3761792,28.38872 L50.4904649,27.05352 C54.3392961,24.53192 56.6373221,20.29592 56.6373221,15.72152 C56.6373221,8.24392 50.5138156,2.15912 42.9868545,2.15912 C35.4606987,2.15912 29.3371922,8.24392 29.3371922,15.72152 C29.3371922,17.49272 29.6890623,19.19352 30.3485169,20.80392 L47.2930364,20.80392 L47.2930364,43.59992 C47.2930364,46.02552 45.3066208,47.99992 42.8644649,47.99992 L4.42849091,47.99992 C1.98633506,47.99992 -8.05194805e-05,46.02552 -8.05194805e-05,43.59992 L-8.05194805e-05,20.80392 L28.6060753,20.80392 C28.0231143,19.18312 27.7268026,17.48072 27.7268026,15.72152 C27.7268026,15.54712 27.7469325,15.37752 27.7525688,15.20392 L7.24667273,15.20392 L7.24667273,17.99992 L4.83108831,17.99992 L4.83108831,12.80392 L28.0166727,12.80392 C29.3903351,5.83512 35.5774519,0.55912 42.9868545,0.55912 C51.4019455,0.55912 58.2477117,7.36072 58.2477117,15.72152 C58.2477117,19.32072 56.9706727,22.72952 54.7161273,25.41832 Z M43.4250563,8 C48.1534384,8 52,11.5890641 52,16 L50.3995999,16 C50.3995999,12.4116824 47.2708177,9.49295512 43.4250563,9.49295512 C40.9444361,9.49295512 38.6294574,10.7388262 37.3843461,12.7431184 L36,11.9958944 C37.5299825,9.53102547 40.3746937,8 43.4250563,8 Z\\\" id=\\\"icon-themes_folder\\\" fill=\\\"currentColor\\\" />\\n    </g>\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-themes.svg");

/***/ }),

/***/ "./src/svgs/icon-trainings.svg":
/*!*************************************!*\
  !*** ./src/svgs/icon-trainings.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-trainings\",\n  \"use\": \"icon-trainings-usage\",\n  \"viewBox\": \"0 0 72 60\",\n  \"content\": \"<symbol viewBox=\\\"0 0 72 60\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" id=\\\"icon-trainings\\\">\\n    <g fill=\\\"currentColor\\\">\\n        <path d=\\\"M70.4044286,9.5904 C71.4608571,11.4457846 71.3998393,13.7147077 70.2450536,15.5128615 C69.7787679,16.2384 69.5438036,17.1633231 69.5465357,18.2636308 C69.5438036,19.4110154 69.7787679,20.3359385 70.2450536,21.0605538 C71.3998393,22.8596308 71.4608571,25.1294769 70.4044286,26.9839385 C69.41175,28.7257846 67.4637321,29.8039385 65.312625,29.8039385 L65.2780179,29.8039385 L65.287125,27.9577846 L65.3098929,27.9577846 C66.492,27.9577846 68.0292857,27.4602462 68.8270714,26.0608615 C69.53925,24.8110154 69.4973571,23.2805538 68.7186964,22.0676308 C68.0566071,21.0374769 67.722375,19.7719385 67.7251071,18.3070154 C67.722375,16.8014769 68.0566071,15.5368615 68.7186964,14.5048615 C69.4973571,13.2928615 69.53925,11.7633231 68.8270714,10.5134769 C68.1094286,9.2544 66.7816071,8.53163077 65.3372143,8.61378462 C64.1387143,8.6904 62.915625,8.37193846 61.8036429,7.70178462 C61.7034643,7.64270769 61.5996429,7.58086154 61.494,7.52270769 C60.3483214,6.8784 59.4567321,5.9544 58.9084821,4.84670769 C58.2646071,3.54793846 56.9750357,2.74024615 55.5433929,2.74024615 C54.11175,2.74024615 52.8221786,3.54793846 52.1783036,4.84670769 C51.6309643,5.95532308 50.7375536,6.8784 49.5973393,7.51993846 L49.2804107,7.70363077 C48.1711607,8.37101538 46.9517143,8.68578462 45.7504821,8.61378462 C44.3215714,8.5224 42.9773571,9.2544 42.2597143,10.5134769 C41.5475357,11.7633231 41.5894286,13.2937846 42.3680893,14.5057846 C43.0301786,15.5359385 43.3653214,16.8014769 43.3625893,18.2664 L43.3616786,18.2664 L43.3616786,18.2857846 C43.3625893,18.4528615 43.3352679,18.5950154 43.3279821,18.7547077 L61.0878214,27.8719385 L61.0878214,30.3974769 L50.9424643,35.6054769 L50.9424643,46.7857846 L52.7948571,44.4227077 C53.5288929,43.4857846 54.6272143,42.9485538 55.8084107,42.9485538 C56.9896071,42.9485538 58.0879286,43.4857846 58.8219643,44.4227077 L61.1260714,47.3617846 L61.1260714,35.0867077 L62.9475,35.0867077 L62.9475,50.3793231 L61.5878036,50.8630154 L61.14975,50.3580923 L57.3966964,45.5710154 C56.6225893,44.5842462 54.9951429,44.5824 54.220125,45.5710154 L50.8559464,49.8624 C50.5982143,51.1916308 49.719375,52.3325538 48.4580357,52.8790154 L33.0013929,59.5916308 C32.3748214,59.8639385 31.7018036,59.9996308 31.0287857,59.9996308 C30.3557679,59.9996308 29.6836607,59.8639385 29.0570893,59.5916308 L21.3597321,56.2491692 L22.4361964,53.7033231 L30.1326429,57.0457846 C30.7018393,57.2931692 31.3557321,57.2931692 31.9258393,57.0457846 L47.3824821,50.3340923 C47.8851964,50.1153231 48.2103214,49.6159385 48.2103214,49.0611692 L48.2103214,37.0076308 L33.2891786,44.6682462 C32.5797321,45.0328615 31.8019821,45.2147077 31.0251429,45.2147077 C30.250125,45.2147077 29.4760179,45.0328615 28.7693036,44.6719385 L30.0005893,42.1999385 C30.6435536,42.5285538 31.4112857,42.5267077 32.05425,42.1980923 L57.5014286,29.1347077 L32.0633571,16.0759385 C31.4158393,15.7427077 30.6444643,15.7445538 29.9996786,16.0787077 L28.758375,13.6122462 C30.18,12.8774769 31.8766607,12.8765538 33.2991964,13.6067077 L41.5156607,17.8242462 C41.457375,16.9039385 41.2388036,16.1313231 40.8426429,15.5137846 C39.6869464,13.7165538 39.6250179,11.4467077 40.6823571,9.5904 C41.7469821,7.72209231 43.726875,6.64763077 45.8588571,6.77132308 C46.6939821,6.82024615 47.5564286,6.59409231 48.3533036,6.11501538 C48.4735179,6.04301538 48.5928214,5.97286154 48.7130357,5.90547692 C49.5326786,5.44486154 50.1674464,4.79316923 50.5508571,4.01963077 C51.5061964,2.09132308 53.4186964,0.894092308 55.5433929,0.894092308 C57.6680893,0.894092308 59.5815,2.09132308 60.5359286,4.01963077 C60.9184286,4.79316923 61.5541071,5.44486154 62.37375,5.9064 C62.4912321,5.97101538 62.6114464,6.04116923 62.7316607,6.11316923 C63.5321786,6.59501538 64.3928036,6.8184 65.2279286,6.77132308 C67.352625,6.64393846 69.3398036,7.72209231 70.4044286,9.5904 Z M29.87775,16.1313333 L3.6924375,29.0985 L10.0430625,32.2445 L8.7718125,34.6975 L-0.000375,30.3534167 L-0.000375,27.8445 L28.6074375,13.6783333 L29.87775,16.1313333 Z M29.5521829,42.1093993 L28.2497597,44.5679152 L15.9223959,38.6007774 L15.9223959,53 L14,53 L14,35.84 L32.1262711,27 L33,28.6362544 L17.4180199,36.235053 L29.5521829,42.1093993 Z M60.7023203,24 L59.515626,22.7196073 C60.6274917,21.7224949 61.2393259,20.3693329 61.2393259,18.9096159 C61.2393259,16.0551545 58.8800226,13.7326018 55.9793121,13.7326018 C53.2846004,13.7326018 51.0370999,15.7181634 50.75011,18.3508519 L49,18.1671961 C49.3820663,14.651747 52.3831353,12 55.9793121,12 C59.8510344,12 63,15.1004909 63,18.9096159 C63,20.8345365 62.1627995,22.6892867 60.7023203,24 Z\\\" id=\\\"icon-trainings_shape\\\" />\\n    </g>\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-trainings.svg");

/***/ }),

/***/ "./src/svgs/icon-twitter.svg":
/*!***********************************!*\
  !*** ./src/svgs/icon-twitter.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"icon-twitter\",\n  \"use\": \"icon-twitter-usage\",\n  \"viewBox\": \"0 0 20 17\",\n  \"content\": \"<symbol viewBox=\\\"0 0 20 17\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"icon-twitter\\\">\\n    <path fill=\\\"currentColor\\\" d=\\\"M6.2359 16.1124c7.4827 0 11.5755-6.1994 11.5755-11.5755 0-.176 0-.3514-.012-.5259a8.2775 8.2775 0 0 0 2.0298-2.1058 8.1205 8.1205 0 0 1-2.3367.64A4.0824 4.0824 0 0 0 19.2811.295a8.153 8.153 0 0 1-2.5833.9875c-1.2611-1.341-3.265-1.6691-4.8879-.8005-1.623.8685-2.4614 2.7179-2.0452 4.511A11.5501 11.5501 0 0 1 1.38.7424C.3003 2.6013.852 4.9794 2.6397 6.1732A4.038 4.038 0 0 1 .7932 5.664v.0515c.0005 1.9366 1.3656 3.6046 3.2639 3.988a4.0618 4.0618 0 0 1-1.837.0699c.533 1.6572 2.0603 2.7926 3.8008 2.8252A8.1633 8.1633 0 0 1 0 14.285a11.5176 11.5176 0 0 0 6.2359 1.8243\\\" />\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/icon-twitter.svg");

/***/ }),

/***/ "./src/svgs/index.js":
/*!***************************!*\
  !*** ./src/svgs/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _icon_resources_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-resources.svg */ \"./src/svgs/icon-resources.svg\");\n/* harmony import */ var _icon_form_submit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-form-submit.svg */ \"./src/svgs/icon-form-submit.svg\");\n/* harmony import */ var _icon_twitter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon-twitter.svg */ \"./src/svgs/icon-twitter.svg\");\n/* harmony import */ var _icon_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon-plus.svg */ \"./src/svgs/icon-plus.svg\");\n/* harmony import */ var _icon_resources_guidelines_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon-resources-guidelines.svg */ \"./src/svgs/icon-resources-guidelines.svg\");\n/* harmony import */ var _icon_resources_training_materials_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon-resources-training-materials.svg */ \"./src/svgs/icon-resources-training-materials.svg\");\n/* harmony import */ var _icon_resources_education_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon-resources-education.svg */ \"./src/svgs/icon-resources-education.svg\");\n/* harmony import */ var _icon_resources_cases_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon-resources-cases.svg */ \"./src/svgs/icon-resources-cases.svg\");\n/* harmony import */ var _icon_resources_experts_committees_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon-resources-experts-committees.svg */ \"./src/svgs/icon-resources-experts-committees.svg\");\n/* harmony import */ var _icon_themes_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icon-themes.svg */ \"./src/svgs/icon-themes.svg\");\n/* harmony import */ var _icon_back_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icon-back.svg */ \"./src/svgs/icon-back.svg\");\n/* harmony import */ var _icon_forward_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icon-forward.svg */ \"./src/svgs/icon-forward.svg\");\n/* harmony import */ var _icon_hyperlink_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icon-hyperlink.svg */ \"./src/svgs/icon-hyperlink.svg\");\n/* harmony import */ var _icon_checkbox_lightbulb_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icon-checkbox-lightbulb.svg */ \"./src/svgs/icon-checkbox-lightbulb.svg\");\n/* harmony import */ var _icon_play_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./icon-play.svg */ \"./src/svgs/icon-play.svg\");\n/* harmony import */ var _icon_discussions_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icon-discussions.svg */ \"./src/svgs/icon-discussions.svg\");\n/* harmony import */ var _icon_trainings_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./icon-trainings.svg */ \"./src/svgs/icon-trainings.svg\");\n/* harmony import */ var _icon_pencil_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./icon-pencil.svg */ \"./src/svgs/icon-pencil.svg\");\n/* harmony import */ var _icon_share_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./icon-share.svg */ \"./src/svgs/icon-share.svg\");\n/* harmony import */ var _icon_arrow_down_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./icon-arrow-down.svg */ \"./src/svgs/icon-arrow-down.svg\");\n/* harmony import */ var _icon_arrow_right_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./icon-arrow-right.svg */ \"./src/svgs/icon-arrow-right.svg\");\n/* harmony import */ var _icon_error_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./icon-error.svg */ \"./src/svgs/icon-error.svg\");\n/* harmony import */ var _icon_info_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./icon-info.svg */ \"./src/svgs/icon-info.svg\");\n/* harmony import */ var _icon_minus_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./icon-minus.svg */ \"./src/svgs/icon-minus.svg\");\n/* harmony import */ var _icon_download_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./icon-download.svg */ \"./src/svgs/icon-download.svg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/src/svgs/index.js");

/***/ }),

/***/ 1:
/*!*********************************************************************************************!*\
  !*** multi ./node_modules/error-overlay-webpack-plugin/lib/entry-basic.js ./src/js/main.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/rubennascimento/Projects/the-embassy-components/node_modules/error-overlay-webpack-plugin/lib/entry-basic.js */\"./node_modules/error-overlay-webpack-plugin/lib/entry-basic.js\");\nmodule.exports = __webpack_require__(/*! ./src/js/main.js */\"./src/js/main.js\");\n\n\n//# sourceURL=Users/rubennascimento/Projects/the-embassy-components/multi_/Users/rubennascimento/Projects/the-embassy-components/node_modules/error-overlay-webpack-plugin/lib/entry-basic.js_./src/js/main.js");

/***/ })

/******/ });