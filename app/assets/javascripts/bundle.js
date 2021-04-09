/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/elec_arr.js":
/*!*************************!*\
  !*** ./src/elec_arr.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const fs = __webpack_require__(/*! fs */ "?569f");

function csvConverter(){
    fs.readFile('../data/elec.csv', function (err,data) {
        if (err) {
            return console.log(err);
        }
        bufferString = data.toString(); 
        arr = bufferString.split('\n');

        var jsonObj = [];
        var headers = arr[0].split(',');
        for(var i = 1; i < arr.length; i++) {
            var data = arr[i].split(',');
            var obj = {};
                for(var j = 0; j < data.length; j++) {
                    obj[headers[j].trim()] = data[j].trim();
                }
            jsonObj.push(obj);
        }
        return JSON.stringify(jsonObj);
    })
} 

const elecResults = csvConverter();

exports.elecResults = elecResults;


/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const elecResults = __webpack_require__(/*! ./elec_arr */ "./src/elec_arr.js");
const updateMap = () => {
    console.log('update map')
}
module.exports = {
    render(){
        updateMap();
        let map = document.createElement('div');
        map.className = 'map'
        map.innerHTML = `
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
        return map; 
    },
}

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

/***/ }),

/***/ "?569f":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

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