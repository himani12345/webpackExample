/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "../build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = _big2.default;
document.body.appendChild(image);
var smallImage = document.createElement('img');
smallImage.src = _small2.default;
document.body.appendChild(smallImage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cae8aa0fa2749566eadd77b3653ea996.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 3);
console.log(total);

/***/ }
/******/ ]);