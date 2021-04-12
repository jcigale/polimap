/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/elec_arr.js":
/*!*************************!*\
  !*** ./src/elec_arr.js ***!
  \*************************/
/***/ (() => {

eval("// const http = require('http');\n// const fs = require('fs');\n\n// function csvConverter(){\n//     fs.readFile('../data/elec.csv', function (err,data) {\n//         if (err) {\n//             return console.log(err);\n//         }\n//         bufferString = data.toString(); \n//         arr = bufferString.split('\\n');\n\n//         var jsonObj = [];\n//         var headers = arr[0].split(',');\n//         for(var i = 1; i < arr.length; i++) {\n//             var data = arr[i].split(',');\n//             var obj = {};\n//                 for(var j = 0; j < data.length; j++) {\n//                     obj[headers[j].trim()] = data[j].trim();\n//                 }\n//             jsonObj.push(obj);\n//         }\n//         return JSON.stringify(jsonObj);\n//     })\n// } \n\n// const elecResults = csvConverter();\n\n// exports.elecResults = elecResults;\n\n\n//# sourceURL=webpack://polimap/./src/elec_arr.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("let Router = __webpack_require__(/*! ./router */ \"./src/router.js\");\nlet Map = __webpack_require__(/*! ./map */ \"./src/map.js\");\n\nlet routes = {\n    map: Map,\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    let main = document.querySelector('.main');\n    router = new Router(main, routes);\n    router.start();\n    window.location.hash = \"#map\"\n})\n\n//# sourceURL=webpack://polimap/./src/index.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const elecResults = __webpack_require__(/*! ./elec_arr */ \"./src/elec_arr.js\");\n\nmodule.exports = {\n    render(){\n        let map = document.createElement('div');\n        map.className = 'map'\n        map.innerHTML = `\n        <ul class=\"stately\"> \n            <li data-state=\"al\" class=\"al\">A</li>\n            <li data-state=\"ak\" class=\"ak\">B</li>\n            <li data-state=\"ar\" class=\"ar\">C</li>\t\t\t\t\t\t\n            <li data-state=\"az\" class=\"az\">D</li>\n            <li data-state=\"ca\" class=\"ca\">E</li>\n            <li data-state=\"co\" class=\"co\">F</li>\n            <li data-state=\"ct\" class=\"ct\">G</li>\n            <li data-state=\"de\" class=\"de\">H</li>\n            <li data-state=\"dc\" class=\"dc\">I</li>\n            <li data-state=\"fl\" class=\"fl\">J</li>\n            <li data-state=\"ga\" class=\"ga\">K</li>\n            <li data-state=\"hi\" class=\"hi\">L</li>\n            <li data-state=\"id\" class=\"id\">M</li>\n            <li data-state=\"il\" class=\"il\">N</li>\n            <li data-state=\"in\" class=\"in\">O</li>\n            <li data-state=\"ia\" class=\"ia\">P</li>\n            <li data-state=\"ks\" class=\"ks\">Q</li>\n            <li data-state=\"ky\" class=\"ky\">R</li>\n            <li data-state=\"la\" class=\"la\">S</li>\n            <li data-state=\"me\" class=\"me\">T</li>\n            <li data-state=\"md\" class=\"md\">U</li>\n            <li data-state=\"ma\" class=\"ma\">V</li>\n            <li data-state=\"mi\" class=\"mi\">W</li>\n            <li data-state=\"mn\" class=\"mn\">X</li>\n            <li data-state=\"ms\" class=\"ms\">Y</li>\n            <li data-state=\"mo\" class=\"mo\">Z</li>\n            <li data-state=\"mt\" class=\"mt\">a</li>\n            <li data-state=\"ne\" class=\"ne\">b</li>\n            <li data-state=\"nv\" class=\"nv\">c</li>\n            <li data-state=\"nh\" class=\"nh\">d</li>\n            <li data-state=\"nj\" class=\"nj\">e</li>\n            <li data-state=\"nm\" class=\"nm\">f</li>\n            <li data-state=\"ny\" class=\"ny\">g</li>\n            <li data-state=\"nc\" class=\"nc\">h</li>\n            <li data-state=\"nd\" class=\"nd\">i</li>\n            <li data-state=\"oh\" class=\"oh\">j</li>\t\t\t\n            <li data-state=\"ok\" class=\"ok\">k</li>\n            <li data-state=\"or\" class=\"or\">l</li>\n            <li data-state=\"pa\" class=\"pa\">m</li>\n            <li data-state=\"ri\" class=\"ri\">n</li>\n            <li data-state=\"sc\" class=\"sc\">o</li>\n            <li data-state=\"sd\" class=\"sd\">p</li>\n            <li data-state=\"tn\" class=\"tn\">q</li>\n            <li data-state=\"tx\" class=\"tx\">r</li>\n            <li data-state=\"ut\" class=\"ut\">s</li>\n            <li data-state=\"va\" class=\"va\">t</li>\n            <li data-state=\"vt\" class=\"vt\">u</li>\t\t\t\n            <li data-state=\"wa\" class=\"wa\">v</li>\n            <li data-state=\"wv\" class=\"wv\">w</li>\n            <li data-state=\"wi\" class=\"wi\">x</li>\n            <li data-state=\"wy\" class=\"wy\">y</li>\n        </ul>\n        `\n        return map; \n    },\n}\n\n//# sourceURL=webpack://polimap/./src/map.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((module) => {

eval("class Router {\n  constructor(node, routes) {\n    this.node = node;\n    this.routes = routes;\n  }\n\n  start() {\n    this.render();\n    window.addEventListener(\"hashchange\", () => {\n      this.render();\n    });\n  }\n\n  render() {\n    this.node.innerHTML = \"\";\n    let component = this.activeRoute();\n    if(component) {\n      this.node.appendChild(component.render());\n    }\n  }\n\n  activeRoute() {\n    let hash = window.location.hash.substr(1);\n    let component = this.routes[hash];\n    return component;\n  }\n}\n\nmodule.exports = Router;\n\n//# sourceURL=webpack://polimap/./src/router.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;