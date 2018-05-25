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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(array){\n    this.array = array;\n  }\n\n  html(string = null) {\n    if (typeof string !== \"string\" ) {\n      return this.array[0].innerHTML;\n    }\n    this.array.forEach( (el) => el.innerHTML = string);\n  }\n\n  empty() {\n    this.html(\"\");\n\n  }\n  append(collection){\n    if (collection instanceof HTMLElement || typeof collection === 'string') {\n      this.array.forEach( el => el.innerHTML += collection );\n      return;\n    }\n    for(let i = 0; i < collection.length; i++){\n      this.array.forEach((el2) => el2.innerHTML += collection[i].outerHTML);\n      }\n\n  }\n  attr(attribute, value = null) {\n    if (value === null){\n      return this.array[0].getAttribute(attribute);\n    }else {\n      this.array.forEach(el => el.setAttribute(attribute,value))\n    }\n  }\n\n  addClass(className) {\n    className = \" \" + className;\n    this.array.forEach( el => el.className += className);\n  }\n\n  removeClass(className) {\n    this.array.forEach( el => el.classList.remove(className));\n  }\n\n  children() {\n    let nodeChildren = [];\n    this.array.forEach( (el) => {\n      let arrChildren = Array.from(el.children);\n      arrChildren.forEach(el2 => nodeChildren.push(el2));\n    });\n    // let arrnodeChildren = Array.from(nodeChildren);\n    return new DOMNodeCollection(nodeChildren);\n  }\n  parent() {\n  let nodeParents = [];\n      this.array.forEach( (el) => {\n        if(!nodeParents.includes(el.parentElement)){\n          nodeParents.push(el.parentElement);\n        }\n      });\n      return new DOMNodeCollection(nodeParents);\n  }\n  find(selector){ul\n    let result = [];\n    this.array.forEach(el => {\n      let childArray = Array.from(el.querySelectorAll(selector));\n      result = result.concat(childArray);\n    });\n    return new DOMNodeCollection(result);\n  }\n  remove() {\n    this.array.forEach ( (el) => el.innerHTML = \"\");\n    this.array = [];\n  }\n\n  on(type, callback) {\n    this.array.forEach( el => {\n      el.callback = callback;\n      el.addEventListener(type, callback)\n    });\n  }\n\n  off(type) {\n  this.array.forEach( el => {\n    el.removeEventListener(type, el.callback)\n  });\n  }\n\n\n}\n\nmodule.exports = DOMNodeCollection;\n\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\n\nwindow.$l = function (selector) {\n  let result = [];\n\n  if (selector instanceof HTMLElement) {\n    result.push(selector);\n    return new DOMNodeCollection(result);\n  }\n\n  const test = document.querySelectorAll(selector);\n\n  return new DOMNodeCollection(test);\n}\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });