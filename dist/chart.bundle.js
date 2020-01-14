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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/expenseChart.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/expenseChart.js":
/*!*****************************!*\
  !*** ./src/expenseChart.js ***!
  \*****************************/
/*! exports provided: expensesChart, updateChart, resetChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expensesChart\", function() { return expensesChart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateChart\", function() { return updateChart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetChart\", function() { return resetChart; });\n/* harmony import */ var _indexdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexdb */ \"./src/indexdb.js\");\n\n\nconst ctx = document.getElementById(\"myChart\").getContext(\"2d\");\nconst expensesChart = new Chart(ctx, {\n  type: \"bar\",\n  data: {\n    labels: [],\n    datasets: [\n      {\n        label: \"Expense cost in $\",\n        data: [],\n        backgroundColor: [\n          \"rgba(255, 99, 132, 0.2)\",\n          \"rgba(54, 162, 235, 0.2)\",\n          \"rgba(255, 206, 86, 0.2)\",\n          \"rgba(75, 192, 192, 0.2)\",\n          \"rgba(153, 102, 255, 0.2)\",\n          \"rgba(255, 159, 64, 0.2)\"\n        ],\n        borderColor: [\n          \"rgba(255, 99, 132, 1)\",\n          \"rgba(54, 162, 235, 1)\",\n          \"rgba(255, 206, 86, 1)\",\n          \"rgba(75, 192, 192, 1)\",\n          \"rgba(153, 102, 255, 1)\",\n          \"rgba(255, 159, 64, 1)\"\n        ],\n        borderWidth: 1\n      }\n    ]\n  },\n  options: {\n    title: {\n      text: \"Expenses Chart\"\n    },\n    scales: {\n      yAxes: [\n        {\n          ticks: {\n            beginAtZero: true\n          }\n        }\n      ]\n    }\n  }\n});\n\nfunction updateChart(expenseChart, name, value) {\n  expenseChart.data.labels.push(name);\n  expenseChart.data.datasets.forEach(dataset => {\n    dataset.data.push(value);\n  });\n  expenseChart.update();\n}\n\nfunction resetChart(expenseChart) {\n  expenseChart.data.labels = [];\n  expenseChart.data.datasets.forEach(dataset => {\n    dataset.data = [];\n  });\n  expenseChart.update();\n}\n\nObject(_indexdb__WEBPACK_IMPORTED_MODULE_0__[\"useIndexedDb\"])(\"budget\", \"budgetStore\", \"get\").then(results => {\n  results.forEach(expense => {\n    updateChart(expensesChart, expense.name, expense.value);\n  });\n});\n\n\n//# sourceURL=webpack:///./src/expenseChart.js?");

/***/ }),

/***/ "./src/indexdb.js":
/*!************************!*\
  !*** ./src/indexdb.js ***!
  \************************/
/*! exports provided: useIndexedDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useIndexedDb\", function() { return useIndexedDb; });\nfunction useIndexedDb(databaseName, storeName, method, object) {\r\n    return new Promise((resolve, reject) => {\r\n      const request = window.indexedDB.open(databaseName, 1);\r\n      let db,\r\n        tx,\r\n        store;\r\n      request.onupgradeneeded = function(e) {\r\n        const db = request.result;\r\n        db.createObjectStore(storeName, { keyPath: \"id\", autoIncrement:true});\r\n      };\r\n      request.onerror = function(e) {\r\n        console.log(\"There was an error\");\r\n      };\r\n      request.onsuccess = function(e) {\r\n        db = request.result;\r\n        tx = db.transaction(storeName, \"readwrite\");\r\n        store = tx.objectStore(storeName);\r\n        db.onerror = function(e) {\r\n          console.log(\"error\");\r\n        };\r\n        if (method === \"put\") {\r\n          store.put(object);\r\n        }\r\n        if (method === \"clear\") {\r\n          store.clear();\r\n        }\r\n        if (method === \"get\") {\r\n          const all = store.getAll();\r\n          all.onsuccess = function() {\r\n            resolve(all.result);\r\n          };\r\n        }\r\n        tx.oncomplete = function() {\r\n          db.close();\r\n        };\r\n      };\r\n    });\r\n  }\n\n//# sourceURL=webpack:///./src/indexdb.js?");

/***/ })

/******/ });