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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _indexdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexdb */ \"./src/indexdb.js\");\n\n\n\nconst balanceEl = document.getElementById(\"balance\");\nconst budgetName = document.getElementById(\"budgetName\");\nconst dollarAmount = document.getElementById(\"dollarAmount\");\nconst expenseEl = document.getElementById(\"expense\");\nconst priceEl = document.getElementById(\"price\");\n\n//Where the info will be shown\nconst expensesListEl = document.getElementById(\"expenses-list\");\nconst budgetListEl = document.getElementById(\"budget-list\");\n\n//submit buttons\nconst submit1 = document.getElementById(\"submit1\");\nconst submit2 = document.getElementById(\"submit2\");\nconst submit3 = document.getElementById(\"submit3\");\n\n// require functions here\nconst calc = __webpack_require__(/*! ./calculations */ \"./src/calculations.js\");\n\nfunction addToList(name, price) {\n  expensesListEl.innerHTML += `<li class=\"list-group-item\" placeholder=\"unamed\">Name: ${name}\n    <span class=\"ml-4\">Price: ${price}</span></li>`;\n}\n//still need to build this out\nfunction addToMoneyList(name, price) {\n  budgetListEl.innerHTML += `<li class=\"list-group-item\">Name: ${name}\n    <span class=\"ml-4\">Price: ${price}</span></li>`;\n}\n\nfunction currentBal(price) {\n  balanceEl.innerHTML = `${price}`;\n}\n\n\n\n\nfunction deposit(e) {\n  e.preventDefault();\n  addToMoneyList(budgetName.value, dollarAmount.value);\n  var bal = parseInt(balanceEl.innerText);\n  var dollAm = parseInt(dollarAmount.value);\n  const total = calc.add(Number(bal), dollAm);\n  balanceEl.innerText = total;\n  Object(_indexdb__WEBPACK_IMPORTED_MODULE_0__[\"useIndexedDb\"])(\"budget\", \"budgetStore\", \"put\", {\n    name: budgetName.value,\n    value: dollarAmount.value,\n    type: \"deposit\",\n    balance: total\n  });\n  budgetName.value = \"\";\n  dollarAmount.value = \"\";\n}\n\n\nfunction expense(e) {\n  e.preventDefault();\n  addToList(expenseEl.value, priceEl.value);\n  const total = calc.subtract(Number(balanceEl.innerText), priceEl.value);\n  balanceEl.innerText = total;\n  Object(_indexdb__WEBPACK_IMPORTED_MODULE_0__[\"useIndexedDb\"])(\"budget\", \"budgetStore\", \"put\", {\n    name: expenseEl.value,\n    value: priceEl.value,\n    type: \"expense\",\n    balance: total\n  });\n  expenseEl.value = \"\";\n  priceEl.value = \"\";\n  \n}\n\nfunction reset(e) {\n  Object(_indexdb__WEBPACK_IMPORTED_MODULE_0__[\"useIndexedDb\"])(\"budget\", \"budgetStore\", \"clear\")\n  location.reload();\n}\n\nsubmit1.onclick = deposit;\nsubmit2.onclick = expense;\nsubmit3.onclick = reset;\n\nObject(_indexdb__WEBPACK_IMPORTED_MODULE_0__[\"useIndexedDb\"])(\"budget\", \"budgetStore\", \"get\").then(results => {\n  results.forEach(expense => {\n    if (expense.type === \"expense\"){\n      addToList(expense.name, expense.value);\n    } else if (expense.type === \"deposit\") {\n      addToMoneyList(expense.name, expense.value);\n    } \n    currentBal(expense.balance);\n  });\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/calculations.js":
/*!*****************************!*\
  !*** ./src/calculations.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function subtract(a,b) {\r\n    return a - b;\r\n}\r\n\r\nfunction add(a,b) {\r\n    return a + b;\r\n}\r\n\r\n\r\nmodule.exports = {subtract, add}\n\n//# sourceURL=webpack:///./src/calculations.js?");

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