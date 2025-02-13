/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./modules/smoothScroll.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('15 february 2025 18:12');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\r\n  const menuBtn = document.querySelector('.menu');\r\n  const menu = document.querySelector('menu');\r\n  const closeBtn = menu.querySelector('.close-btn');\r\n  const menuItems = menu.querySelectorAll('ul>li>a');\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu');\r\n  };\r\n\r\n  document.body.addEventListener('click', (e) => {\r\n    if (\r\n      e.target.closest('menu') ||\r\n      e.target.matches('.close-btn') ||\r\n      e.target.closest('.menu') ||\r\n      (menu.classList.contains('active-menu') && !e.target.closest('menu'))\r\n    ) {\r\n      handleMenu();\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector('.popup');\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n  const close = modal.querySelector('.popup-close');\r\n\r\n  function animateOpacity(element, start, end, duration, callback) {\r\n    let startTime = null;\r\n\r\n    function step(timestamp) {\r\n      if (!startTime) startTime = timestamp;\r\n      let progress = (timestamp - startTime) / duration;\r\n      if (progress > 1) progress = 1;\r\n\r\n      element.style.opacity = start + (end - start) * progress;\r\n\r\n      if (progress < 1) {\r\n        requestAnimationFrame(step);\r\n      } else if (callback) {\r\n        callback();\r\n      }\r\n    }\r\n\r\n    requestAnimationFrame(step);\r\n  }\r\n\r\n  function showModal() {\r\n    if (window.innerWidth > 768) {\r\n      modal.style.display = 'block';\r\n      modal.style.visibility = 'visible';\r\n      animateOpacity(modal, 0, 1, 500);\r\n    } else {\r\n      modal.style.display = modal.style.display === 'block' ? 'none' : 'block';\r\n    }\r\n  }\r\n\r\n  function hideModal() {\r\n    if (window.innerWidth > 768) {\r\n      animateOpacity(modal, 1, 0, 500, () => {\r\n        modal.style.visibility = 'hidden';\r\n        modal.style.display = 'none';\r\n      });\r\n    } else {\r\n      modal.style.display = 'none';\r\n    }\r\n  }\r\n\r\n  buttons.forEach((button) => button.addEventListener('click', showModal));\r\n  modal.addEventListener('click', (e) => {\r\n    if (\r\n      !e.target.closest('.popup-content') ||\r\n      e.target.classList.contains('popup-close')\r\n    ) {\r\n      hideModal();\r\n    }\r\n  });\r\n\r\n  modal.style.opacity = '0';\r\n  modal.style.visibility = 'hidden';\r\n  modal.style.display = 'none';\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/smoothScroll.js":
/*!*********************************!*\
  !*** ./modules/smoothScroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n  const links = document.querySelectorAll('a[href^=\"#\"]:not(.close-btn)');\r\n\r\n  links.forEach((link) => {\r\n    link.addEventListener('click', function (event) {\r\n      event.preventDefault();\r\n\r\n      const id = this.getAttribute('href').substring(1);\r\n\r\n      document.getElementById(id).scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start',\r\n      });\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\r\n\n\n//# sourceURL=webpack:///./modules/smoothScroll.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector('.service-header');\r\n  const tabs = document.querySelectorAll('.service-header-tab');\r\n  const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n  tabPanel.addEventListener('click', (e) => {\r\n    if (e.target.closest('.service-header-tab')) {\r\n      const tabBtn = e.target.closest('.service-header-tab');\r\n      tabs.forEach((tab, i) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add('active');\r\n          tabContent[i].classList.remove('d-none');\r\n        } else {\r\n          tab.classList.remove('active');\r\n          tabContent[i].classList.add('d-none');\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ timer)\n/* harmony export */ });\nfunction timer(deadline) {\r\n  const timerHours = document.querySelector('#timer-hours');\r\n  const timerMinutes = document.querySelector('#timer-minutes');\r\n  const timerSeconds = document.querySelector('#timer-seconds');\r\n  let idInterval;\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let hours = Math.floor(timeRemaining / 3600);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n    return {\r\n      timeRemaining,\r\n      hours,\r\n      minutes,\r\n      seconds,\r\n    };\r\n  };\r\n\r\n  const addZero = (value) => {\r\n    return value < 10 ? '0' + value : value;\r\n  };\r\n\r\n  const updateCLock = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    if (getTime.timeRemaining < 0) {\r\n      clearInterval(idInterval);\r\n      getTime.hours = '0';\r\n      getTime.minutes = '0';\r\n      getTime.seconds = '0';\r\n    }\r\n    timerHours.textContent = addZero(getTime.hours);\r\n    timerMinutes.textContent = addZero(getTime.minutes);\r\n    timerSeconds.textContent = addZero(getTime.seconds);\r\n  };\r\n  idInterval = setInterval(updateCLock, 1000);\r\n  updateCLock();\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n  const calcItems = document.querySelectorAll('.calc-item');\r\n  const textArea = document.querySelector(\r\n    'input[placeholder=\"Ваше сообщение\"]',\r\n  );\r\n  const emailInputs = document.querySelectorAll('input[type=\"email\"]');\r\n  const telInputs = document.querySelectorAll('input[type=\"tel\"]');\r\n  const textInputs = document.querySelectorAll(\r\n    'input[type=\"text\"]:not(.calc-item)',\r\n  );\r\n\r\n  calcItems.forEach((item) => {\r\n    item.addEventListener('input', (e) => {\r\n      if (\r\n        e.target.matches('.calc-square') ||\r\n        e.target.matches('.calc-count') ||\r\n        e.target.matches('.calc-day')\r\n      ) {\r\n        e.target.value = e.target.value.replace(/\\D/g, '');\r\n      }\r\n    });\r\n  });\r\n\r\n  textArea.addEventListener('input', (e) => {\r\n    e.target.value = e.target.value.replace(/[^а-яё\\s-]/gi, '');\r\n  });\r\n\r\n  emailInputs.forEach((input) => {\r\n    input.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^\\w@\\-.!~*']/gi, '');\r\n    });\r\n\r\n    input.addEventListener('blur', (e) => {\r\n      e.target.value = e.target.value.trim();\r\n    });\r\n  });\r\n\r\n  telInputs.forEach((input) => {\r\n    input.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^+0-9()\\-\\s]/g, '');\r\n    });\r\n\r\n    input.addEventListener('blur', (e) => {\r\n      e.target.value = e.target.value.trim();\r\n    });\r\n  });\r\n\r\n  textInputs.forEach((input) => {\r\n    input.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ\\s-]/g, '');\r\n    });\r\n\r\n    input.addEventListener('blur', (e) => {\r\n      let value = e.target.value.trim();\r\n\r\n      value = value.replace(/[\\s-]+/g, ' ');\r\n\r\n      value = value.replace(/\\b\\w/g, (char) => char.toUpperCase());\r\n      value = value.replace(/\\B\\w/g, (char) => char.toLowerCase());\r\n\r\n      e.target.value = value;\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\r\n\n\n//# sourceURL=webpack:///./modules/validation.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;