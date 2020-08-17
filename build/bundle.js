/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _customRedux_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customRedux/reducer */ \"./src/customRedux/reducer.js\");\n/* harmony import */ var _customRedux_customStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customRedux/customStore */ \"./src/customRedux/customStore.js\");\n\n\n\nconst store = Object(_customRedux_customStore__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_customRedux_reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nconsole.log(store);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/customRedux/constant.js":
/*!*************************************!*\
  !*** ./src/customRedux/constant.js ***!
  \*************************************/
/*! exports provided: ADDBUG, REMOVEBUG, RESOLVEBUG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADDBUG\", function() { return ADDBUG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVEBUG\", function() { return REMOVEBUG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RESOLVEBUG\", function() { return RESOLVEBUG; });\nconst ADDBUG = 'ADDBUG';\nconst REMOVEBUG = 'REMOVEBUG';\nconst RESOLVEBUG = 'RESOLVEBUG';\n\n//# sourceURL=webpack:///./src/customRedux/constant.js?");

/***/ }),

/***/ "./src/customRedux/customStore.js":
/*!****************************************!*\
  !*** ./src/customRedux/customStore.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createStore = (reducer) => {\n    let state; //the state of the store. updated be the reducer function\n\n    /**\n     * this returns the current state of the store\n     * @param   none\n     * @return  object  the current state of the store\n     */\n    const getState = () => {\n        return state;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createStore);\n\n//# sourceURL=webpack:///./src/customRedux/customStore.js?");

/***/ }),

/***/ "./src/customRedux/reducer.js":
/*!************************************!*\
  !*** ./src/customRedux/reducer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ \"./src/customRedux/constant.js\");\n\n\nconst INITIAL_STATE = [];\nconst uuid = 0;\n\nconst reducer = (state=INITIAL_STATE, action) => {\n    switch(action.type){\n        case _constant__WEBPACK_IMPORTED_MODULE_0__[\"ADDBUG\"]: \n            return [ ...state, { id: ++uuid, description: action.description } ]\n        case _constant__WEBPACK_IMPORTED_MODULE_0__[\"REMOVEBUG\"]:\n            return state.filter(bug => bug.id !== action.id )\n        case _constant__WEBPACK_IMPORTED_MODULE_0__[\"RESOLVEBUG\"]:\n            return state.map(bug => bug.id === action.id ? {...bug, resolved: true} : bug)\n        default:\n            return state\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n//# sourceURL=webpack:///./src/customRedux/reducer.js?");

/***/ })

/******/ });