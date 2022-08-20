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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../backgroundImage.jpg */ \"./backgroundImage.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"::-webkit-scrollbar {\\r\\n  display: none;\\r\\n}\\r\\nbody {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  margin: 0 auto;\\r\\n  height: 100vh;\\r\\n  width: 100vw;\\r\\n  display: grid;\\r\\n  grid-template-rows: 10% 90%;\\r\\n  grid-template-columns: 30% 50% auto;\\r\\n}\\r\\n\\r\\n#backgroundOverlay{\\r\\n  position: absolute;\\r\\n  z-index: 1;\\r\\n  width:100vw;\\r\\n  height:100vh;\\r\\n  background-color: rgba(0, 255, 255, 0.146);\\r\\n  display: none;\\r\\n}\\r\\n#title {\\r\\n  color: white;\\r\\n  margin-top: 0;\\r\\n  margin-left: 5vw;\\r\\n  font-size: 4rem;\\r\\n}\\r\\nh4 {\\r\\n  grid-template-columns: 3/4;\\r\\n  justify-self: center;\\r\\n  align-self: center;\\r\\n  font-size: 2rem;\\r\\n  color: white;\\r\\n}\\r\\n#playerOneGameboardContainer {\\r\\n  grid-column: 2/3;\\r\\n  grid-row: 2/3;\\r\\n  justify-self: center;\\r\\n  align-self: center;\\r\\n  background-color: rgba(250, 235, 215, 0.378);\\r\\n  border-style: solid;\\r\\n  border-width: 2px;\\r\\n  opacity: 0.6;\\r\\n  width: 50vw;\\r\\n  height: 80vh;\\r\\n  display: grid;\\r\\n  grid-template-columns: 6% 90%;\\r\\n  grid-template-rows: 6% 90%;\\r\\n  font-weight: 600;\\r\\n}\\r\\n#coordinateRow {\\r\\n  min-width: 100%;\\r\\n  min-height: 100%;\\r\\n  grid-row: 1/2;\\r\\n  grid-column: 1/3;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(11, 1fr);\\r\\n  column-gap: 4%;\\r\\n  justify-content: center;\\r\\n  align-content: center;\\r\\n}\\r\\n#coordinateColumn {\\r\\n  min-width: 100%;\\r\\n  min-height: 100%;\\r\\n  grid-row: 1/3;\\r\\n  grid-column: 1/2;\\r\\n  display: grid;\\r\\n  grid-template-rows: repeat(11, 1fr);\\r\\n  justify-content: center;\\r\\n  align-content: center;\\r\\n  row-gap: 4%;\\r\\n}\\r\\n\\r\\n#grid {\\r\\n  grid-column: 2/3;\\r\\n  grid-row: 2/3;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(10, 1fr);\\r\\n  grid-template-rows: repeat(10, 1fr);\\r\\n  gap: 1%;\\r\\n  grid-auto-flow: column;\\r\\n  color: rgb(23, 234, 136);\\r\\n}\\r\\n.squares {\\r\\n  background-color: rgb(58, 58, 196);\\r\\n  cursor: pointer;\\r\\n  \\r\\n}\\r\\n\\r\\n#moveHistory {\\r\\n  grid-column: 3/4;\\r\\n  grid-row: 2/3;\\r\\n  margin-left: 20%;\\r\\n  margin-top: 90%;\\r\\n  width: 80%;\\r\\n  height: 60%;\\r\\n  align-content: center;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  flex-direction: column-reverse;\\r\\n}\\r\\n#moveHistoryTitle {\\r\\n  font-size: 2rem;\\r\\n  background-color: rgba(250, 235, 215, 0.378);\\r\\n  min-width: 101%;\\r\\n  border-style: none;\\r\\n  border-top-left-radius: 10px;\\r\\n  cursor: pointer;\\r\\n  border-style: solid;\\r\\n  border-width: 2px;\\r\\n\\r\\n}\\r\\n#history {\\r\\n  display: none;\\r\\n  flex-direction: column;\\r\\n  background-color: rgba(250, 235, 215, 0.378);\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  border-left-style: solid;\\r\\n  border-left-width: 2px;\\r\\n  align-content: center;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n#placeShips {\\r\\n  border: solid;\\r\\n  border-width: 2px;\\r\\n  background-color: rgba(250, 235, 215, 0.378);\\r\\n  grid-column: 1/2;\\r\\n  grid-row: 2/3;\\r\\n  justify-self: center;\\r\\n  align-self: center;\\r\\n  width: 90%;\\r\\n  height: 80%;\\r\\n\\r\\n  border-radius: 10px;\\r\\n  display: grid;\\r\\n  grid-template-rows: 10% 80% 10%;\\r\\n}\\r\\n#placeShipsTitle {\\r\\n    grid-row: 1/2;\\r\\n  font-size: 2rem;\\r\\n  justify-self: center;\\r\\n  align-self: center;\\r\\n}\\r\\n#ships{\\r\\n    grid-row:2/3 ;\\r\\n   display: flex;\\r\\n   flex-wrap: wrap;\\r\\n   justify-content: center;\\r\\n}\\r\\n.ship{\\r\\n    color: white;\\r\\n    padding: 5%;\\r\\n    background-color: rgb(9, 9, 43);\\r\\n    width:fit-content;\\r\\n    height: 3%;\\r\\n    margin: 4%;\\r\\n    justify-self: center;\\r\\n    text-align: center;\\r\\n    align-self: center;\\r\\n    border-radius: 40%;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.placed{\\r\\n    border-style: solid;\\r\\n    border-color: rgb(37, 185, 37);\\r\\n    border-width: 3px;\\r\\n}\\r\\n.selected{\\r\\n    border-style: solid;\\r\\n    border-color: rgb(37, 148, 185) ;\\r\\n    border-width: 3px;\\r\\n}\\r\\n\\r\\n#shipSubmit {\\r\\n  grid-row: 3/4;\\r\\n  align-self: center;\\r\\n  justify-self: center;\\r\\n  width: 30%;\\r\\n  height: 90%;\\r\\n  margin-bottom: 5%;\\r\\n  background-color: rgb(37, 177, 37);\\r\\n  border-radius: 10px;\\r\\n  cursor: pointer;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n#shipSubmit:hover {\\r\\n  background-color: rgb(37, 185, 37);\\r\\n}\\r\\n\\r\\n\\r\\n#winnerContainer{\\r\\n  position: absolute;\\r\\n  z-index: 2;\\r\\n  margin: 0 auto;\\r\\n  justify-self: center;\\r\\n  align-self: center;\\r\\n  margin-left: 10vw;\\r\\n  width: 30vw;\\r\\n  height:30vh;\\r\\n  background-color: blue;\\r\\n  border-radius: 15px;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  display: none;\\r\\n  grid-template-rows: 60% 40%;\\r\\n}\\r\\n#winnerTitle{\\r\\n  width: 80%;\\r\\n  font-size: 3rem;\\r\\n  text-align: center;\\r\\n  justify-self: center;\\r\\n  align-self: center;\\r\\n  font-weight: 600;\\r\\n\\r\\n}\\r\\n#restart{\\r\\n  width: 60%;\\r\\n  justify-self: center;\\r\\n  align-self: center;\\r\\n  height:50%;\\r\\n  cursor: pointer;\\r\\n  background-color:rgb(51, 208, 51);\\r\\n  border-style: none;\\r\\n  border-radius: 15px;\\r\\n  font-size: 1.75rem;\\r\\n}\\r\\n#restart:hover{\\r\\n  background-color: rgb(54, 214, 54);\\r\\n}\\r\\n.historyHit{\\r\\n  width: 80%;\\r\\n  text-align: center;\\r\\n  margin: 4%;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/stylesheet.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

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

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gridSquareHoverEventlistener\": () => (/* binding */ gridSquareHoverEventlistener),\n/* harmony export */   \"moveHistoryEventListener\": () => (/* binding */ moveHistoryEventListener),\n/* harmony export */   \"restartGameEventListener\": () => (/* binding */ restartGameEventListener),\n/* harmony export */   \"selectShipEventListener\": () => (/* binding */ selectShipEventListener),\n/* harmony export */   \"shipMap\": () => (/* binding */ shipMap),\n/* harmony export */   \"shipsPlaced\": () => (/* binding */ shipsPlaced)\n/* harmony export */ });\n/* harmony import */ var _gameplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameplay */ \"./src/gameplay.js\");\n\r\nconst shipMap = {\r\n  carrier: 5,\r\n  battleship: 4,\r\n  submarine: 3,\r\n  cruiser: 3,\r\n  destroyer: 2,\r\n};\r\nfunction moveHistoryEventListener() {\r\n  let moveHistoryTitle = document.getElementById(\"moveHistoryTitle\");\r\n  let history = document.getElementById(\"history\");\r\n  moveHistoryTitle.addEventListener(\"click\", () => {\r\n    if (history.classList.contains(\"active\")) {\r\n      history.className = \"\";\r\n      history.style.display = \"none\";\r\n    } else {\r\n      history.className = \"active\";\r\n      history.style.display = \"flex\";\r\n    }\r\n  });\r\n}\r\n\r\nfunction selectShipEventListener() {\r\n  const ships = document.querySelectorAll(\".ship\");\r\n  ships.forEach((ship) => {\r\n    ship.addEventListener(\"click\", () => {\r\n      if (ship.classList.contains(\"placed\")) {\r\n      } else {\r\n        let selectedShips = document.getElementsByClassName(\"selected\");\r\n        if (selectedShips.length == 1) {\r\n          selectedShips[0].classList.remove(\"selected\");\r\n        }\r\n        ship.classList.add(\"selected\");\r\n      }\r\n    });\r\n  });\r\n}\r\n\r\nfunction gridSquareHoverEventlistener() {\r\n  let gridSquares = document.querySelectorAll(\".squares\");\r\n  gridSquares.forEach((square) => {\r\n    square.addEventListener(\"mouseover\", () => {\r\n      let selectedShips = document.querySelectorAll(\".selected\");\r\n      if (selectedShips.length == 0) {\r\n        return;\r\n      }\r\n      let selectedShip = selectedShips[0];\r\n      let nameOfShip = selectedShip.id;\r\n      let squareID = square.id;\r\n      let length = shipMap[nameOfShip];\r\n      let affiliatedSquares = [];\r\n\r\n      if (square.classList.contains(\"taken\") != true) {\r\n        for (let i = 1; i < length; i++) {\r\n          affiliatedSquares.push(\r\n            document.getElementById(\r\n              `[${squareID[1]}][${parseInt(squareID[4]) - i}]`\r\n            )\r\n          );\r\n        }\r\n\r\n        if (parseInt(squareID[4]) - length + 1 < 0) {\r\n          square.style.backgroundColor = \"rgb(191, 49, 49)\";\r\n          affiliatedSquares.forEach((affiliatedSquare) => {\r\n            if (affiliatedSquare.classList.contains(\"taken\") != true) {\r\n              affiliatedSquare.style.backgroundColor = \"rgb(191, 49, 49)\";\r\n            }\r\n          });\r\n        } else {\r\n          affiliatedSquares.forEach((affiliatedSquare) => {\r\n            if (affiliatedSquare.classList.contains(\"taken\") != true) {\r\n              affiliatedSquare.style.backgroundColor = \"rgb(37, 185, 37)\";\r\n            }\r\n          });\r\n          square.style.backgroundColor = \"rgb(37, 185, 37)\";\r\n        }\r\n      }\r\n    });\r\n\r\n    square.addEventListener(\"mouseout\", () => {\r\n      let selectedShips = document.querySelectorAll(\".selected\");\r\n      if (selectedShips.length == 0) {\r\n        return;\r\n      }\r\n      let selectedShip = selectedShips[0];\r\n      let nameOfShip = selectedShip.id;\r\n      let squareID = square.id;\r\n      let length = shipMap[nameOfShip];\r\n      let affiliatedSquares = [];\r\n\r\n      if (square.classList.contains(\"taken\") != true) {\r\n        for (let i = 1; i < length; i++) {\r\n          affiliatedSquares.push(\r\n            document.getElementById(\r\n              `[${squareID[1]}][${parseInt(squareID[4]) - i}]`\r\n            )\r\n          );\r\n        }\r\n        if (parseInt(squareID[4]) - length + 1 < 0) {\r\n          square.style.backgroundColor = \"rgb(58, 58, 196)\";\r\n          affiliatedSquares.forEach((affiliatedSquare) => {\r\n            if (affiliatedSquare.classList.contains(\"taken\") != true) {\r\n              affiliatedSquare.style.backgroundColor = \"rgb(58, 58, 196)\";\r\n            }\r\n          });\r\n        } else {\r\n          affiliatedSquares.forEach((affiliatedSquare) => {\r\n            if (affiliatedSquare.classList.contains(\"taken\") != true) {\r\n              affiliatedSquare.style.backgroundColor = \"rgb(58, 58, 196)\";\r\n            }\r\n          });\r\n          square.style.backgroundColor = \"rgb(58, 58, 196)\";\r\n        }\r\n      }\r\n    });\r\n  });\r\n}\r\n\r\n\r\nfunction shipsPlaced() {\r\n  const carrier = document.getElementById(\"carrier\");\r\n  const battleship = document.getElementById(\"battleship\");\r\n  const cruiser = document.getElementById(\"cruiser\");\r\n  const submarine = document.getElementById(\"submarine\");\r\n  const destroyer = document.getElementById(\"destroyer\");\r\n  const ships = [carrier, battleship, cruiser, submarine, destroyer];\r\n  const shipsPlaced = ships.map((ship) => {\r\n    return ship.classList.contains(\"placed\");\r\n  });\r\n\r\n  function allShipsPlaced() {\r\n    return shipsPlaced.every((ship) => ship == true);\r\n  }\r\n  return allShipsPlaced();\r\n}\r\n\r\nfunction restartGameEventListener(){\r\n  let restartButton = document.getElementById(\"restart\");\r\n  restartButton.addEventListener(\"click\",()=>{\r\n    window.location.reload();\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/eventListeners.js?");

/***/ }),

/***/ "./src/factoryFunctions/computerFactory.js":
/*!*************************************************!*\
  !*** ./src/factoryFunctions/computerFactory.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Computer)\n/* harmony export */ });\n/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory */ \"./src/factoryFunctions/gameboardFactory.js\");\n\r\nclass Computer{\r\n    constructor(){\r\n        this.gameboard = new _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"computer\");\r\n    }\r\n    attack(playerName,coordinateX,coordinateY){\r\n        playerName.gameboard.receiveAttack(coordinateX,coordinateY);\r\n    }}\r\n\n\n//# sourceURL=webpack://battleship/./src/factoryFunctions/computerFactory.js?");

/***/ }),

/***/ "./src/factoryFunctions/gameboardFactory.js":
/*!**************************************************!*\
  !*** ./src/factoryFunctions/gameboardFactory.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ \"./src/factoryFunctions/shipFactory.js\");\n/* harmony import */ var _supporting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supporting */ \"./src/supporting.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eventListeners */ \"./src/eventListeners.js\");\n/* harmony import */ var _gameplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gameplay */ \"./src/gameplay.js\");\n\r\n\r\n\r\n\r\nclass Gameboard {\r\n  constructor(playerOrComputer) {\r\n    this.board = [\r\n      [, , , , , , , , ,],\r\n      [, , , , , , , , ,],\r\n      [, , , , , , , , ,],\r\n      [, , , , , , , , ,],\r\n      [, , , , , , , , ,],\r\n      [, , , , , , , , ,],\r\n      [, , , , , , , , ,],\r\n      [, , , , , , , , ,],\r\n      [, , , , , , , , ,],\r\n      [, , , , , , , , ,],\r\n    ];\r\n    this.missedShots = [];\r\n    this.ships = [];\r\n    this.playerOrComputer = playerOrComputer;\r\n    this.attacked = false;\r\n  }\r\n  initialize() {\r\n    for (let i = 0; i < 10; i++) {\r\n      for (let j = 0; j < 10; j++) {\r\n        this.board[i][j] = {\r\n          shipName: undefined,\r\n          shipIndex: undefined,\r\n          placed: false,\r\n          hit: false,\r\n          sunk: false,\r\n          missedAttack: false,\r\n        };\r\n        (0,_supporting__WEBPACK_IMPORTED_MODULE_1__.createSquare)(`[${i}][${j}]`);\r\n      }\r\n    }\r\n    this.placeShipEventListener();\r\n  }\r\n\r\n  placeShipEventListener() {\r\n    if (this.playerOrComputer == \"computer\") {\r\n      return;\r\n    }\r\n    let gridSquares = document.querySelectorAll(\".squares\");\r\n    gridSquares.forEach((square) => {\r\n      square.addEventListener(\"click\", () => {\r\n        let selectedShips = document.querySelectorAll(\".selected\");\r\n        let selectedShip = selectedShips[0];\r\n        let nameOfShip = selectedShip.id;\r\n        let length = _eventListeners__WEBPACK_IMPORTED_MODULE_2__.shipMap[nameOfShip];\r\n        if (square.style.backgroundColor == \"rgb(37, 185, 37)\") {\r\n          let squareID = square.id;\r\n          this.placeShip(\r\n            parseInt(squareID[1]),\r\n            parseInt(squareID[4]),\r\n            nameOfShip,\r\n            length\r\n          );\r\n          selectedShip.classList.remove(\"selected\");\r\n          selectedShip.classList.add(\"placed\");\r\n          this.updateBoard();\r\n        }\r\n      });\r\n    });\r\n  }\r\n  updateBoard() {\r\n    for (let i = 0; i < 10; i++) {\r\n      for (let j = 0; j < 10; j++) {\r\n        if (this.board[i][j].hit == true && this.board[i][j].sunk != true) {\r\n          let boardSquare = document.getElementById(`[${i}][${j}]`);\r\n          boardSquare.style.backgroundColor = \"rgb(205, 92, 27)\";\r\n        } else if (this.board[i][j].sunk == true) {\r\n          let boardSquare = document.getElementById(`[${i}][${j}]`);\r\n          boardSquare.style.backgroundColor = \"rgb(180,20,20)\";\r\n        } else if (this.board[i][j].missedAttack == true) {\r\n          let boardSquare = document.getElementById(`[${i}][${j}]`);\r\n          boardSquare.style.backgroundColor = \"rgb(0,0,0)\";\r\n        } else if (\r\n          this.board[i][j].placed == true &&\r\n          this.playerOrComputer == \"player\" &&\r\n          this.board[i][j].hit != true &&\r\n          this.board[i][j].sunk != true\r\n        ) {\r\n          let boardSquare = document.getElementById(`[${i}][${j}]`);\r\n          boardSquare.style.backgroundColor = \"rgb(23, 234, 136)\";\r\n          boardSquare.classList.add(\"taken\");\r\n        } else {\r\n          let boardSquare = document.getElementById(`[${i}][${j}]`);\r\n          boardSquare.style.backgroundColor = \"rgb(58, 58, 196)\";\r\n        }\r\n      }\r\n    }\r\n    if (this.allSunk()) {\r\n      _gameplay__WEBPACK_IMPORTED_MODULE_3__.playGame.winner(this.playerOrComputer);\r\n    }\r\n  }\r\n\r\n  placeShip(baseX, baseY, nameOfShip, lengthOfShip) {\r\n    if (this.playerOrComputer == \"player\") {\r\n      let currentShip = new _shipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"](nameOfShip, lengthOfShip);\r\n      for (let h = 0; h < lengthOfShip; h++) {\r\n        if (\r\n          this.board[baseX][baseY - h].shipName != undefined &&\r\n          this.board[baseX][baseY - h].shipIndex != undefined\r\n        ) {\r\n          return false;\r\n        }\r\n      }\r\n      this.ships.push(currentShip);\r\n      currentShip.index = this.ships.length - 1;\r\n      for (let i = 0; i < lengthOfShip; i++) {\r\n        this.board[baseX][baseY - i].shipName = nameOfShip;\r\n        this.board[baseX][baseY - i].shipIndex = currentShip.index;\r\n        this.board[baseX][baseY - i].placed = true;\r\n      }\r\n    } else if (this.playerOrComputer == \"computer\") {\r\n      let currentShip = new _shipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"](nameOfShip, lengthOfShip);\r\n      if (baseY - lengthOfShip < 0) {\r\n        return this.placeShip(\r\n          (0,_supporting__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(0, 9),\r\n          (0,_supporting__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(0, 9),\r\n          nameOfShip,\r\n          lengthOfShip\r\n        );\r\n      } else if (baseY - lengthOfShip + 1 >= 0) {\r\n        for (let h = 0; h < lengthOfShip; h++) {\r\n          if (\r\n            this.board[baseX][baseY - h].shipName != undefined &&\r\n            this.board[baseX][baseY - h].shipIndex != undefined\r\n          ) {\r\n            return this.placeShip(\r\n              (0,_supporting__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(0, 9),\r\n              (0,_supporting__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(0, 9),\r\n              nameOfShip,\r\n              lengthOfShip\r\n            );\r\n          }\r\n        }\r\n\r\n        this.ships.push(currentShip);\r\n        currentShip.index = this.ships.length - 1;\r\n        for (let i = 0; i < lengthOfShip; i++) {\r\n          this.board[baseX][baseY - i].shipName = nameOfShip;\r\n          this.board[baseX][baseY - i].shipIndex = currentShip.index;\r\n        }\r\n      }\r\n    } else {\r\n      return this.placeShip(\r\n        (0,_supporting__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(0, 9),\r\n        (0,_supporting__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(0, 9),\r\n        nameOfShip,\r\n        lengthOfShip\r\n      );\r\n    }\r\n    this.updateBoard();\r\n  }\r\n\r\n  receiveAttack(coordinateX, coordinateY) {\r\n    const positionArr = [coordinateX, coordinateY];\r\n    if (\r\n      this.board[coordinateX][coordinateY].missedAttack == true ||\r\n      this.board[coordinateX][coordinateY].hit == true ||\r\n      this.board[coordinateX][coordinateY].sunk == true\r\n    ) {\r\n      _gameplay__WEBPACK_IMPORTED_MODULE_3__.playGame.computerPlayer.attack(\r\n        _gameplay__WEBPACK_IMPORTED_MODULE_3__.playGame.playerOne,\r\n        (0,_supporting__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(0, 9),\r\n        (0,_supporting__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(0, 9)\r\n      );\r\n    }\r\n    if (\r\n      this.board[coordinateX][coordinateY].shipName == undefined &&\r\n      this.board[coordinateX][coordinateY].shipIndex == undefined\r\n    ) {\r\n      this.missedShots.push(positionArr);\r\n      this.board[coordinateX][coordinateY].missedAttack = true;\r\n    } else {\r\n      let indexOfHitShip = this.board[coordinateX][coordinateY].shipIndex;\r\n      this.board[coordinateX][coordinateY].hit = true;\r\n      let hitShip = this.ships[indexOfHitShip];\r\n      (0,_supporting__WEBPACK_IMPORTED_MODULE_1__.logHitShip)(this.playerOrComputer,hitShip.name);\r\n      hitShip.gotHit(positionArr);\r\n      if (hitShip.isSunk()) {\r\n        (0,_supporting__WEBPACK_IMPORTED_MODULE_1__.logSunkShip)(this.playerOrComputer,hitShip.name)\r\n        for (let i = 0; i < hitShip.hits.length; i++) {\r\n          const x = hitShip.hits[i][0];\r\n          const y = hitShip.hits[i][1];\r\n          this.board[x][y].sunk = true;\r\n        }\r\n      }\r\n    }\r\n    this.updateBoard();\r\n  }\r\n  allSunk() {\r\n    if (this.ships.length == 0) {\r\n      return false;\r\n    } else {\r\n      let allShipsSunk = true;\r\n      this.ships.forEach((ship) => {\r\n        if (ship.isSunk() != true) {\r\n          allShipsSunk = false;\r\n        }\r\n      });\r\n      return allShipsSunk;\r\n    }\r\n  }\r\n  removeBoard() {\r\n    let parent = document.getElementById(\"grid\");\r\n    while (parent.firstElementChild != null) {\r\n      parent.firstElementChild.remove();\r\n    }\r\n  }\r\n  displayBoard() {\r\n    for (let i = 0; i < 10; i++) {\r\n      for (let j = 0; j < 10; j++) {\r\n        (0,_supporting__WEBPACK_IMPORTED_MODULE_1__.createSquare)(`[${i}][${j}]`);\r\n      }\r\n    }\r\n    this.updateBoard();\r\n    const boardName = document.getElementById(\"boardName\");\r\n    if (this.playerOrComputer == \"player\") {\r\n      boardName.innerText = \"Player Board\";\r\n    } else {\r\n      boardName.innerText = \"Computer Board\";\r\n    }\r\n  }\r\n\r\n  waitForAttack() {\r\n    this.attacked = false;\r\n    let gridSquares = document.querySelectorAll(\".squares\");\r\n    gridSquares.forEach((square) => {\r\n      square.addEventListener(\"click\", () => {\r\n        if(square.style.backgroundColor != \"rgb(58, 58, 196)\"){return}\r\n        if (this.attacked == true) {\r\n          return;\r\n        } else {\r\n          this.attacked = true;\r\n          let squareID = square.id;\r\n          this.receiveAttack(squareID[1], squareID[4]);\r\n          setTimeout(() => {\r\n            _gameplay__WEBPACK_IMPORTED_MODULE_3__.playGame.play();\r\n          }, 500);\r\n        }\r\n      });\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/factoryFunctions/gameboardFactory.js?");

/***/ }),

/***/ "./src/factoryFunctions/playerFactory.js":
/*!***********************************************!*\
  !*** ./src/factoryFunctions/playerFactory.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory */ \"./src/factoryFunctions/gameboardFactory.js\");\n\r\nclass player{\r\n    constructor(){\r\n        this.gameboard = new _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"player\");\r\n        this.gameboard.initialize();\r\n    \r\n    }\r\n    attack(playerName,coordinateX,coordinateY){\r\n        playerName.gameboard.receiveAttack(coordinateX,coordinateY);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/factoryFunctions/playerFactory.js?");

/***/ }),

/***/ "./src/factoryFunctions/shipFactory.js":
/*!*********************************************!*\
  !*** ./src/factoryFunctions/shipFactory.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\r\n  constructor(name, lengthOfShip) {\r\n    this.name = name;\r\n    this.lengthOfShip = lengthOfShip;\r\n    this.hits = [];\r\n    this.index;\r\n  }\r\n\r\n  gotHit(positionOfHit) {\r\n    let positionAlreadyRecorded = false;\r\n    for (let i = 0; i < this.hits.length; i++) {\r\n      if (JSON.stringify(this.hits[i]) == JSON.stringify(positionOfHit)) {\r\n        positionAlreadyRecorded = true;\r\n      }\r\n    }\r\n    if (positionAlreadyRecorded != true) {\r\n      this.hits.push(positionOfHit);\r\n      console.log(this.hits);\r\n    }\r\n  }\r\n\r\n  isSunk() {\r\n    if (this.hits.length == this.lengthOfShip) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/factoryFunctions/shipFactory.js?");

/***/ }),

/***/ "./src/gameplay.js":
/*!*************************!*\
  !*** ./src/gameplay.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"playGame\": () => (/* binding */ playGame)\n/* harmony export */ });\n/* harmony import */ var _factoryFunctions_gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factoryFunctions/gameboardFactory */ \"./src/factoryFunctions/gameboardFactory.js\");\n/* harmony import */ var _factoryFunctions_playerFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factoryFunctions/playerFactory */ \"./src/factoryFunctions/playerFactory.js\");\n/* harmony import */ var _factoryFunctions_shipFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factoryFunctions/shipFactory */ \"./src/factoryFunctions/shipFactory.js\");\n/* harmony import */ var _supporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./supporting */ \"./src/supporting.js\");\n/* harmony import */ var _factoryFunctions_computerFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factoryFunctions/computerFactory */ \"./src/factoryFunctions/computerFactory.js\");\n/* harmony import */ var _stylesheet_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stylesheet.css */ \"./src/stylesheet.css\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Gameplay {\r\n  constructor() {\r\n    this.playerOne = new _factoryFunctions_playerFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n    this.computerPlayer = new _factoryFunctions_computerFactory__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\n    _supporting__WEBPACK_IMPORTED_MODULE_3__.createEventListeners();\r\n    this.placeShipsSubmit();\r\n  }\r\n\r\n  //event listener that closes the playerone grid, the place ships display, and then calls the function that allows the computer to randomly place five ships\r\n  placeShipsSubmit() {\r\n    let shipSubmit = document.getElementById(\"shipSubmit\");\r\n    shipSubmit.addEventListener(\"click\", () => {\r\n      if ((0,_eventListeners__WEBPACK_IMPORTED_MODULE_6__.shipsPlaced)()) {\r\n        let shipContainer = document.getElementById(\"placeShips\");\r\n        shipContainer.remove();\r\n        this.playerOne.gameboard.removeBoard();\r\n        this.computerPlayer.gameboard.initialize();\r\n\r\n        this.computerPlaceShips();\r\n      }\r\n    });\r\n  }\r\n  //places five ships  gameplay logic in this function for accessiblity purposes\r\n  computerPlaceShips() {\r\n    this.computerPlaceShip(\"carrier\", 5);\r\n    this.computerPlaceShip(\"battleship\", 4);\r\n    this.computerPlaceShip(\"submarine\", 3);\r\n    this.computerPlaceShip(\"cruiser\", 3);\r\n    this.computerPlaceShip(\"destroyer\", 2);\r\n    console.log(this.computerPlayer.gameboard.board);\r\n    console.log(this.computerPlayer.gameboard.ships);\r\n    this.computerPlayer.gameboard.waitForAttack();\r\n  }\r\n  play() {\r\n    this.computerPlayer.gameboard.removeBoard();\r\n    this.playerOne.gameboard.displayBoard();\r\n    setTimeout(() => {\r\n      this.computerPlayer.attack(\r\n        this.playerOne,\r\n        (0,_supporting__WEBPACK_IMPORTED_MODULE_3__.getRandomInt)(0, 9),\r\n        (0,_supporting__WEBPACK_IMPORTED_MODULE_3__.getRandomInt)(0, 9)\r\n      );\r\n    }, 1000);\r\n\r\n    setTimeout(() => {\r\n      this.playerOne.gameboard.removeBoard();\r\n      this.computerPlayer.gameboard.displayBoard();\r\n      this.computerPlayer.gameboard.waitForAttack();\r\n    }, 2000);\r\n  }\r\n\r\n  computerPlaceShip(name, length) {\r\n    this.computerPlayer.gameboard.placeShip(\r\n      (0,_supporting__WEBPACK_IMPORTED_MODULE_3__.getRandomInt)(0, 9),\r\n      (0,_supporting__WEBPACK_IMPORTED_MODULE_3__.getRandomInt)(0, 9),\r\n      name,\r\n      length\r\n    );\r\n  }\r\n\r\n  winner(nameOfLoser){\r\n    _supporting__WEBPACK_IMPORTED_MODULE_3__.displayWinner(nameOfLoser);\r\n     (0,_eventListeners__WEBPACK_IMPORTED_MODULE_6__.restartGameEventListener)();\r\n  }\r\n\r\n}\r\n\r\nlet playGame = new Gameplay();\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/gameplay.js?");

/***/ }),

/***/ "./src/supporting.js":
/*!***************************!*\
  !*** ./src/supporting.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createEventListeners\": () => (/* binding */ createEventListeners),\n/* harmony export */   \"createSquare\": () => (/* binding */ createSquare),\n/* harmony export */   \"displayWinner\": () => (/* binding */ displayWinner),\n/* harmony export */   \"getRandomInt\": () => (/* binding */ getRandomInt),\n/* harmony export */   \"logHitShip\": () => (/* binding */ logHitShip),\n/* harmony export */   \"logSunkShip\": () => (/* binding */ logSunkShip)\n/* harmony export */ });\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n/* harmony import */ var _gameplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameplay */ \"./src/gameplay.js\");\n\r\n\r\nfunction getRandomInt(min, max) {  \r\n  return Math.floor(Math.random() * (max - min + 1) ) + min;\r\n  }\r\n\r\n\r\nfunction createSquare(id) {\r\n  const grid = document.getElementById(\"grid\");\r\n  let square = document.createElement(\"div\");\r\n  square.id = id;\r\n  square.className = \"squares\";\r\n  grid.appendChild(square);\r\n}\r\n\r\nfunction createEventListeners() {\r\n  _eventListeners__WEBPACK_IMPORTED_MODULE_0__.moveHistoryEventListener();\r\n  _eventListeners__WEBPACK_IMPORTED_MODULE_0__.selectShipEventListener();\r\n  _eventListeners__WEBPACK_IMPORTED_MODULE_0__.gridSquareHoverEventlistener();\r\n _eventListeners__WEBPACK_IMPORTED_MODULE_0__.shipsPlaced();\r\n}\r\nfunction displayWinner(nameOfLoser){\r\n  let winningPhrase;\r\n    if(nameOfLoser = \"computer\"){\r\n      winningPhrase = \"You Won! :)\"    \r\n    }\r\n    else{\r\n      winningPhrase = \"The Computer Won! :(\"\r\n      \r\n    }\r\n    const winnerContainer= document.getElementById(\"winnerContainer\");\r\n    const backgroundOverlay= document.getElementById(\"backgroundOverlay\");\r\n    const winnerTitle = document.getElementById(\"winnerTitle\");\r\n    winnerContainer.style.display = \"grid\";\r\n    backgroundOverlay.style.display=\"flex\";\r\n    winnerTitle.innerText=winningPhrase;\r\n}\r\n\r\nfunction logHitShip(player,shipName){\r\n const history = document.getElementById(\"history\");\r\n const newHit = document.createElement(\"div\");\r\n newHit.classList.add(\"historyHit\");\r\n newHit.innerText = `${player}'s ${shipName} was hit!`;\r\n history.appendChild(newHit);\r\n}\r\nfunction logSunkShip(player,shipName){\r\n  const history = document.getElementById(\"history\");\r\n  const newSink = document.createElement(\"div\");\r\n  newSink.classList.add(\"historyHit\");\r\n  newSink.innerText = `${player}'s ${shipName} was sunk!`;\r\n  history.appendChild(newSink);\r\n }\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/supporting.js?");

/***/ }),

/***/ "./backgroundImage.jpg":
/*!*****************************!*\
  !*** ./backgroundImage.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"45f35a4bac2c8221d113.jpg\";\n\n//# sourceURL=webpack://battleship/./backgroundImage.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/gameplay.js");
/******/ 	
/******/ })()
;