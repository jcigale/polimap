/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./data/elec.csv":
/*!***********************!*\
  !*** ./data/elec.csv ***!
  \***********************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:22)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> Year,State,total,party.1,%,EV,party.2,%,EV,party.3,%,EV,party.4,%,EV,Party,Notes\n| 1789 - Washington,Connecticut,,7.00,,,0.00,,,,,,,,,Other,Electoral votes only\n| 1789 - Washington,Delaware,,3.00,,,0.00,,,,,,,,,Other,Electoral votes only");

/***/ }),

/***/ "./src/elec_obj.js":
/*!*************************!*\
  !*** ./src/elec_obj.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elecResults": () => (/* binding */ _elecResults)
/* harmony export */ });
/* harmony import */ var _data_elec_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/elec.csv */ "./data/elec.csv");
/* harmony import */ var _data_elec_csv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_elec_csv__WEBPACK_IMPORTED_MODULE_0__);
// import fs from 'fs';

// function csvConverter(){
//     fs.readFile('../data/elec.csv', function (err,data) {
//         if (err) {
//             return console.log(err);
//         }
//         bufferString = data.toString(); 
//         arr = bufferString.split('\n');

//         var jsonObj = [];
//         var headers = arr[0].split(',');
//         for(var i = 1; i < arr.length; i++) {
//             var data = arr[i].split(',');
//             var obj = {};
//                 for(var j = 0; j < data.length; j++) {
//                     obj[headers[j].trim()] = data[j].trim();
//                 }
//             jsonObj.push(obj);
//         }
//         return JSON.stringify(jsonObj);
//     })
// } 


function csvJSON(csv){

  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);

  }

  return JSON.stringify(result); 
}

const elecResults = csvJSON(_data_elec_csv__WEBPACK_IMPORTED_MODULE_0__);

const _elecResults = elecResults;



/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const elecResults = __webpack_require__(/*! ./elec_obj.js */ "./src/elec_obj.js");

module.exports = {
    constructor(year="") {
        this.year = year;
    },
    
    getYear() {
        
        console.log(elecResults)
        if (document.getElementById('year')) {
        this.year = document.getElementById('year').value }
    },

    updateMap() {
        
    },

    render() {
        let map = document.createElement('div');
        map.className = 'map'
        map.innerHTML = `
        <button>Description</button>
                <select id='years' onChange=${this.getYear()}>
                    <option value="1789">1789</option>
                    <option value="1792">1792</option>
                    <option value="1796">1796</option>
                    <option value="1800">1800</option>
                    <option value="1804">1804</option>
                    <option value="1808">1808</option>
                    <option value="1812">1812</option>
                    <option value="1816">1816</option>
                    <option value="1820">1820</option>
                    <option value="1824">1824</option>
                    <option value="1828">1828</option>
                    <option value="1832">1832</option>
                    <option value="1836">1836</option>
                    <option value="1840">1840</option>
                    <option value="1844">1844</option>
                    <option value="1848">1848</option>
                    <option value="1852">1852</option>
                    <option value="1856">1856</option>
                    <option value="1860">1864</option>
                    <option value="1868">1868</option>
                    <option value="1872">1872</option>
                    <option value="1876">1876</option>
                    <option value="1880">1880</option>
                    <option value="1884">1884</option>
                    <option value="1888">1888</option>
                    <option value="1892">1892</option>
                    <option value="1896">1896</option>
                    <option value="1900">1900</option>
                    <option value="1904">1904</option>
                    <option value="1908">1908</option>
                    <option value="1912">1912</option>
                    <option value="1916">1916</option>
                    <option value="1920">1920</option>
                    <option value="1924">1924</option>
                    <option value="1928">1928</option>
                    <option value="1932">1932</option>
                    <option value="1936">1936</option>
                    <option value="1940">1940</option>
                    <option value="1944">1944</option>
                    <option value="1948">1948</option>
                    <option value="1952">1952</option>
                    <option value="1956">1956</option>
                    <option value="1960">1960</option>
                    <option value="1964">1964</option>
                    <option value="1968">1968</option>
                    <option value="1972">1972</option>
                    <option value="1976">1976</option>
                    <option value="1980">1980</option>
                    <option value="1984">1984</option>
                    <option value="1988">1988</option>
                    <option value="1992">1992</option>
                    <option value="1996">1996</option>
                    <option value="2000">2000</option>
                    <option value="2004">2004</option>
                    <option value="2008">2008</option>
                    <option value="2012">2012</option>
                    <option value="2016">2016</option>
                    <option value="2020">2020</option>
                </select>
        <ul class="stately"> 
            <li data-state="al" class="al">A</li>
            <li data-state="ak" class="ak">B</li>
            <li data-state="ar" class="ar">C</li>						
            <li data-state="az" class="az">D</li>
            <li data-state="ca" class="ca">E</li>
            <li data-state="co" class="co">F</li>
            <li data-state="ct" class="ct">G</li>
            <li data-state="de" class="de">H</li>
            <li data-state="dc" class="dc">I</li>
            <li data-state="fl" class="fl">J</li>
            <li data-state="ga" class="ga">K</li>
            <li data-state="hi" class="hi">L</li>
            <li data-state="id" class="id">M</li>
            <li data-state="il" class="il">N</li>
            <li data-state="in" class="in">O</li>
            <li data-state="ia" class="ia">P</li>
            <li data-state="ks" class="ks">Q</li>
            <li data-state="ky" class="ky">R</li>
            <li data-state="la" class="la">S</li>
            <li data-state="me" class="me">T</li>
            <li data-state="md" class="md">U</li>
            <li data-state="ma" class="ma">V</li>
            <li data-state="mi" class="mi">W</li>
            <li data-state="mn" class="mn">X</li>
            <li data-state="ms" class="ms">Y</li>
            <li data-state="mo" class="mo">Z</li>
            <li data-state="mt" class="mt">a</li>
            <li data-state="ne" class="ne">b</li>
            <li data-state="nv" class="nv">c</li>
            <li data-state="nh" class="nh">d</li>
            <li data-state="nj" class="nj">e</li>
            <li data-state="nm" class="nm">f</li>
            <li data-state="ny" class="ny">g</li>
            <li data-state="nc" class="nc">h</li>
            <li data-state="nd" class="nd">i</li>
            <li data-state="oh" class="oh">j</li>			
            <li data-state="ok" class="ok">k</li>
            <li data-state="or" class="or">l</li>
            <li data-state="pa" class="pa">m</li>
            <li data-state="ri" class="ri">n</li>
            <li data-state="sc" class="sc">o</li>
            <li data-state="sd" class="sd">p</li>
            <li data-state="tn" class="tn">q</li>
            <li data-state="tx" class="tx">r</li>
            <li data-state="ut" class="ut">s</li>
            <li data-state="va" class="va">t</li>
            <li data-state="vt" class="vt">u</li>			
            <li data-state="wa" class="wa">v</li>
            <li data-state="wv" class="wv">w</li>
            <li data-state="wi" class="wi">x</li>
            <li data-state="wy" class="wy">y</li>
        </ul>
        `
        return map
    },
}

// module.exports = Map;

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((module) => {

class Router {
  constructor(node, routes) {
    this.node = node;
    this.routes = routes;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", () => {
      this.render();
    });
  }

  render() {
    //debugger
    this.node.innerHTML = "";
    let component = this.activeRoute();
    if(component) {
      this.node.appendChild(component.render());
    }
  }

  activeRoute() {
    let hash = window.location.hash.substr(1);
    let component = this.routes[hash];
    return component;
  }
}

module.exports = Router;

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
let Router = __webpack_require__(/*! ./router */ "./src/router.js");
let Map = __webpack_require__(/*! ./map */ "./src/map.js");

let routes = {
    map: Map,
}

document.addEventListener('DOMContentLoaded', () => {
    let main = document.querySelector('.main');
    router = new Router(main, routes);
    router.start();
    window.location.hash = "#map"
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map