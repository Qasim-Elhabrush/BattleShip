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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheet.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body{\\r\\n    background-color: black;\\r\\n    margin:0 auto;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/stylesheet.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/stylesheet.css":
/*!****************************!*\
  !*** ./src/stylesheet.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./stylesheet.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesheet.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/stylesheet.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/factoryFunctions/computerFactory.js":
/*!*************************************************!*\
  !*** ./src/factoryFunctions/computerFactory.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Computer)\n/* harmony export */ });\n/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory */ \"./src/factoryFunctions/gameboardFactory.js\");\n\r\nclass Computer{\r\n    constructor(){\r\n        this.gameboard = new _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"computer\");\r\n        this.gameboard.initialize();\r\n    }\r\n    attack(playerName,coordinateX,coordinateY){\r\n        playerName.gameboard.receiveAttack(coordinateX,coordinateY);\r\n    }}\r\n\n\n//# sourceURL=webpack://battleship/./src/factoryFunctions/computerFactory.js?");

/***/ }),

/***/ "./src/factoryFunctions/gameboardFactory.js":
/*!**************************************************!*\
  !*** ./src/factoryFunctions/gameboardFactory.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ \"./src/factoryFunctions/shipFactory.js\");\n\r\n\r\nclass Gameboard {\r\n  constructor(playerOrComputer) {\r\n    this.board = [\r\n      [, , , , , , , , ,],\r\n      [, , , , , , , , ,],\r\n      [, , , , , , , , ,],\r\n      [, , , , , , , , ,],\r\n      [, , , , , , , , ,],\r\n      [, , , , , , , , ,],\r\n      [, , , , , , , , ,],\r\n      [, , , , , , , , ,],\r\n      [, , , , , , , , ,],\r\n      [, , , , , , , , ,],\r\n    ];\r\n    this.missedShots = [];\r\n    this.ships = [];\r\n    this.playerOrComputer = playerOrComputer;\r\n  }\r\n  initialize() {\r\n    for (let i = 0; i < 10; i++) {\r\n      for (let j = 0; j < 10; j++)\r\n        this.board[i][j] = { shipName: undefined, shipIndex: undefined };\r\n    }\r\n  }\r\n\r\n  placeShip(baseX, baseY, nameOfShip, lengthOfShip) {\r\n    if(this.playerOrComputer == \"player\"){\r\n        let currentShip = new _shipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"](nameOfShip, lengthOfShip);\r\n    if (lengthOfShip + baseY < 10) {\r\n      for (let h = 0; h < lengthOfShip; h++) {\r\n        if (\r\n          this.board[baseX][baseY + h].shipName != undefined &&\r\n          this.board[baseX][baseY + h].shipIndex != undefined\r\n        ) {\r\n          return false;\r\n        }\r\n      }\r\n      this.ships.push(currentShip);\r\n      currentShip.index = this.ships.length-1\r\n      for (let i = 0; i < lengthOfShip; i++) {\r\n        this.board[baseX][baseY + i].shipName = nameOfShip;\r\n        this.board[baseX][baseY + i].shipIndex = currentShip.index;\r\n      }\r\n    } else {\r\n      return false;\r\n    }\r\n    }\r\n\r\n    else if(this.playerOrComputer ==\"computer\"){\r\n        let currentShip = new _shipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"](nameOfShip, lengthOfShip);\r\n    if (lengthOfShip + baseY < 10) {\r\n      for (let h = 0; h < lengthOfShip; h++) {\r\n        if (\r\n          this.board[baseX][baseY + h].shipName != undefined &&\r\n          this.board[baseX][baseY + h].shipIndex != undefined\r\n        ) {\r\n         this.placeShip(baseX, baseY, nameOfShip, lengthOfShip)\r\n        }\r\n      }\r\n      this.ships.push(currentShip);\r\n      currentShip.index = this.ships.length-1\r\n      for (let i = 0; i < lengthOfShip; i++) {\r\n        this.board[baseX][baseY + i].shipName = nameOfShip;\r\n        this.board[baseX][baseY + i].shipIndex = currentShip.index;\r\n      }\r\n    } else {\r\n     this.placeShip(baseX, baseY, nameOfShip, lengthOfShip)\r\n    }\r\n\r\n    }\r\n  }\r\n\r\n  receiveAttack(coordinateX, coordinateY) {\r\n    if (\r\n      this.board[coordinateX][coordinateY].shipName == undefined &&\r\n      this.board[coordinateX][coordinateY].shipIndex == undefined\r\n    ) {\r\n      this.missedShots.push([coordinateX][coordinateY]);\r\n      return true;\r\n    } else {\r\n      let indexOfHitShip = this.board[coordinateX][coordinateY].shipIndex;\r\n      let hitShip = this.ships[indexOfHitShip];\r\n      hitShip.gotHit([coordinateX][coordinateY]);\r\n    }\r\n  }\r\n  allSunk() {\r\n    if (this.ships.length == 0) {\r\n      return \"no ships to sink\";\r\n    } else {\r\n      let allShipsSunk = true;\r\n      this.ships.forEach((ship) => {\r\n        if (ship.isSunk() != true) {\r\n          allShipsSunk = false;\r\n        }\r\n      });\r\n      return allShipsSunk;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/factoryFunctions/gameboardFactory.js?");

/***/ }),

/***/ "./src/factoryFunctions/playerFactory.js":
/*!***********************************************!*\
  !*** ./src/factoryFunctions/playerFactory.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory */ \"./src/factoryFunctions/gameboardFactory.js\");\n\r\nclass player{\r\n    constructor(){\r\n        this.gameboard = new _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"player\");\r\n        this.gameboard.initialize();\r\n    }\r\n    attack(playerName,coordinateX,coordinateY){\r\n        playerName.gameboard.receiveAttack(coordinateX,coordinateY);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/factoryFunctions/playerFactory.js?");

/***/ }),

/***/ "./src/factoryFunctions/shipFactory.js":
/*!*********************************************!*\
  !*** ./src/factoryFunctions/shipFactory.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship{\r\n    constructor(name,lengthOfShip){\r\n        this.name = name;        \r\n        this.lengthOfShip=lengthOfShip;\r\n        this.hits = [];\r\n        this.index;\r\n        \r\n        \r\n    }\r\n   \r\n    gotHit(positionOfHit){\r\n        this.hits.push(positionOfHit)\r\n    }\r\n    isSunk(){\r\n        if(this.hits.length==this.lengthOfShip){\r\n            return true\r\n        }\r\n        else{\r\n            return false\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/factoryFunctions/shipFactory.js?");

/***/ }),

/***/ "./src/gameplay.js":
/*!*************************!*\
  !*** ./src/gameplay.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factoryFunctions_gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factoryFunctions/gameboardFactory */ \"./src/factoryFunctions/gameboardFactory.js\");\n/* harmony import */ var _factoryFunctions_playerFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factoryFunctions/playerFactory */ \"./src/factoryFunctions/playerFactory.js\");\n/* harmony import */ var _factoryFunctions_shipFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factoryFunctions/shipFactory */ \"./src/factoryFunctions/shipFactory.js\");\n/* harmony import */ var _supporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./supporting */ \"./src/supporting.js\");\n/* harmony import */ var _factoryFunctions_computerFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factoryFunctions/computerFactory */ \"./src/factoryFunctions/computerFactory.js\");\n/* harmony import */ var _stylesheet_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stylesheet.css */ \"./src/stylesheet.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Gameplay{\r\n    constructor(){\r\n        this.playerOne = new _factoryFunctions_playerFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();        \r\n        this.computerPlayer = new _factoryFunctions_computerFactory__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();}\r\n    playerPlaceShip(x,y,name,length){      \r\n        this.playerOne.gameboard.placeShip(x,y,name,length);\r\n    }\r\n    computerPlaceShip(name,length){\r\n        this.computerPlayer.gameboard.placeShip((0,_supporting__WEBPACK_IMPORTED_MODULE_3__.getRandomInt)(0,9),(0,_supporting__WEBPACK_IMPORTED_MODULE_3__.getRandomInt)(0,9),name,length);\r\n    }\r\n    placeShips(){\r\n        let carrierX = prompt(\"Where would you like to place your carrier?(x)\");\r\n        let carrierY = prompt(\"Where would you like to place your carrier?(y)\");\r\n        this.playerPlaceShip(carrierX,carrierY,\"Carrier\",5);\r\n        let battleshipX = prompt(\"Where would you like to place your battleship?(x)\");\r\n        let battleshipY = prompt(\"Where would you like to place your battleship?(y)\");\r\n        this.playerPlaceShip(battleshipX,battleshipY,\"Battleship\",4);\r\n        let submarineX = prompt(\"Where would you like to place your submarine?(x)\");\r\n        let submarineY = prompt(\"Where would you like to place your submarine?(y)\");\r\n        this.playerPlaceShip(submarineX,submarineY,\"Carrier\",3);\r\n        let cruiserX = prompt(\"Where would you like to place your cruiser?(x)\");\r\n        let cruiserY = prompt(\"Where would you like to place your cruiser?(y)\");\r\n        this.playerPlaceShip(cruiserX,cruiserY,\"Carrier\",3);\r\n        let destroyerX = prompt(\"Where would you like to place your destroyer?(x)\");\r\n        let destroyerY = prompt(\"Where would you like to place your destroyer?(y)\");\r\n        this.playerPlaceShip(destroyerX,destroyerY,\"destroyer\",2);\r\n        this.computerPlaceShip(\"Carrier\",5);\r\n        this.computerPlaceShip(\"Battleship\", 4);\r\n        this.computerPlaceShip(\"Submarine\",3);\r\n        this.computerPlaceShip(\"Cruiser\",3);\r\n        this.computerPlaceShip(\"Destroyer\",2);\r\n    }\r\n    play(){\r\n        let gameEnded;\r\n        while(gameEnded==false){\r\n            let attackLocationX = prompt(\"Where would you like to attack the computer(x)\");\r\n            let attackLocationY = prompt(\"Where would you like to attack the computer(y)\");\r\n            this.playerOne.attack(this.computerPlayer,attackLocationX,attackLocationY);\r\n            if(this.computerPlayer.gameboard.allSunk()==true){\r\n                gameEnded==true\r\n            }\r\n            else{\r\n                this.computerPlayer.attack(this.playerOne,(0,_supporting__WEBPACK_IMPORTED_MODULE_3__.getRandomInt)(0,9),(0,_supporting__WEBPACK_IMPORTED_MODULE_3__.getRandomInt)(0,9));\r\n                if(this.playerOne.gameboard.allSunk()==true){\r\n                    gameEnded==true\r\n                }\r\n            }\r\n        }\r\n        \r\n\r\n    }\r\n        \r\n\r\n}\r\n\r\nlet playGame = new Gameplay();\r\nplayGame.placeShips();\r\nplayGame.play();\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/gameplay.js?");

/***/ }),

/***/ "./src/supporting.js":
/*!***************************!*\
  !*** ./src/supporting.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomInt\": () => (/* binding */ getRandomInt)\n/* harmony export */ });\nfunction getRandomInt(min, max) {\r\n    min = Math.ceil(min);\r\n    max = Math.floor(max);\r\n    return Math.floor(Math.random() * (max - min) + min);}\r\n\n\n//# sourceURL=webpack://battleship/./src/supporting.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/gameplay.js");
/******/ 	
/******/ })()
;