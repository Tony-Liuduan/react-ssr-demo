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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/app.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/app.tsx":
/*!****************************!*\
  !*** ./src/server/app.tsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ \"config\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_favicon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-favicon */ \"koa-favicon\");\n/* harmony import */ var koa_favicon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_favicon__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _shared_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/shared/store */ \"./src/shared/store/index.ts\");\n/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/shared/App */ \"./src/shared/App.tsx\");\n/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/shared/routes */ \"./src/shared/routes.ts\");\n/**\n * @fileoverview node server entry\n * @author liuduan\n * @Date 2020-06-26 11:57:12\n * @LastEditTime 2020-06-26 14:20:38\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst PORT = config__WEBPACK_IMPORTED_MODULE_0___default.a.get('port');\nconst app = new koa__WEBPACK_IMPORTED_MODULE_1___default.a();\nconst router = new koa_router__WEBPACK_IMPORTED_MODULE_4___default.a();\napp.use(koa_favicon__WEBPACK_IMPORTED_MODULE_2___default()('favicon.ico'));\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_3___default()('dist/assets'));\nrouter.get('/api/about', (ctx, next) => {\n  ctx.body = {\n    code: 0,\n    msg: 'success',\n    data: '我是api接口后端返回的about数据内容'\n  };\n}).get(['/', '/about'], async (ctx, next) => {\n  const store = Object(_shared_store__WEBPACK_IMPORTED_MODULE_10__[\"createServerStore\"])();\n  const branch = Object(react_router_config__WEBPACK_IMPORTED_MODULE_8__[\"matchRoutes\"])(_shared_routes__WEBPACK_IMPORTED_MODULE_12__[\"default\"], ctx.req.url);\n  const promises = branch.map(({\n    route,\n    match\n  }) => {\n    return route.loadData ? route.loadData(store) : Promise.resolve(null);\n  });\n  await Promise.all(promises);\n  const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_6___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"StaticRouter\"], {\n    location: ctx.req.url,\n    context: ctx\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_shared_App__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null))));\n  ctx.body = `\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>react-ssr-demo</title>\n</head>\n<body>\n    <div id=\"root\">${markup}</div>\n    <script>window.__SSR_REDUX_STOR__=${JSON.stringify(store.getState())};</script>\n    <script src=\"/scripts/runtime.bundle.js\"></script><script src=\"/scripts/vendor.bundle.js\"></script><script src=\"/scripts/index.bundle.js\"></script></body>\n</body>\n</html>\n`;\n});\napp.use(router.routes()).use(router.allowedMethods());\napp.listen(PORT, () => {\n  console.log(`🍻🍻 node server is running on http://localhost/${PORT}`);\n});\n\n//# sourceURL=webpack:///./src/server/app.tsx?");

/***/ }),

/***/ "./src/shared/App.tsx":
/*!****************************!*\
  !*** ./src/shared/App.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/shared/routes.ts\");\n/**\n * @fileoverview App Component\n * @author liuduan\n * @Date 2020-06-26 11:55:59\n * @LastEditTime 2020-06-26 14:16:56\n */\n\n\n\n\n\n\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/about\"\n  }, \"About\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"hr\", null), Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"renderRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"]));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/shared/App.tsx?");

/***/ }),

/***/ "./src/shared/components/About.tsx":
/*!*****************************************!*\
  !*** ./src/shared/components/About.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * @fileoverview \n * @author liuduan\n * @Date 2020-06-25 11:21:44\n * @LastEditTime 2020-06-26 14:28:57\n */\n\n\n\nfunction About(props) {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (!props.aboutData) {\n      console.log('执行init');\n      init();\n    }\n  }, []);\n\n  function init() {\n    fetch('http://localhost:6027/api/about').then(res => res.json()).then(res => {\n      props.updateAboutData(res.data);\n      return res;\n    }).catch(e => e);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"About\"), props.aboutData);\n}\n\nconst updateAboutData = payload => {\n  return {\n    type: 'UPDATE_ABOUT_DATA',\n    payload\n  };\n};\n\nAbout.loadData = store => {\n  return fetch('http://localhost:6027/api/about').then(res => res.json()).then(res => {\n    console.log('-----');\n    console.log(res.data);\n    store.dispatch(updateAboutData(res.data));\n    return res;\n  }).catch(e => e);\n};\n\nfunction mapStateToProps(state) {\n  return {\n    aboutData: state.aboutData\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    updateAboutData: payload => {\n      dispatch(updateAboutData(payload));\n    }\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(About));\n\n//# sourceURL=webpack:///./src/shared/components/About.tsx?");

/***/ }),

/***/ "./src/shared/components/Home.tsx":
/*!****************************************!*\
  !*** ./src/shared/components/Home.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * @fileoverview \n * @author liuduan\n * @Date 2020-06-25 11:21:44\n * @LastEditTime 2020-06-25 11:22:34\n */\n\n\nfunction Home() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Home\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/shared/components/Home.tsx?");

/***/ }),

/***/ "./src/shared/routes.ts":
/*!******************************!*\
  !*** ./src/shared/routes.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Home */ \"./src/shared/components/Home.tsx\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/About */ \"./src/shared/components/About.tsx\");\n/**\n * @fileoverview 路由配置表\n * @author liuduan\n * @Date 2020-06-26 12:08:26\n * @LastEditTime 2020-06-26 13:54:25\n */\n\n\nconst routes = [{\n  path: '/',\n  exact: true,\n  component: _components_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/about',\n  component: _components_About__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  loadData: _components_About__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadData\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/shared/routes.ts?");

/***/ }),

/***/ "./src/shared/store/index.ts":
/*!***********************************!*\
  !*** ./src/shared/store/index.ts ***!
  \***********************************/
/*! exports provided: createServerStore, createClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createServerStore\", function() { return createServerStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createClientStore\", function() { return createClientStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * @fileoverview redux store for client and server\n * @author liuduan\n * @Date 2020-06-26 13:54:41\n * @LastEditTime 2020-06-26 14:19:34\n */\n\nconst initialState = {};\n\nfunction reducer(preState = initialState, action) {\n  switch (action.type) {\n    case 'UPDATE_ABOUT_DATA':\n      return { ...preState,\n        aboutData: action.payload\n      };\n\n    default:\n      return preState;\n  }\n}\n\nfunction createServerStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer);\n}\nfunction createClientStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, window.__SSR_REDUX_STOR__);\n}\n\n//# sourceURL=webpack:///./src/shared/store/index.ts?");

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"config\");\n\n//# sourceURL=webpack:///external_%22config%22?");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-unfetch%22?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");\n\n//# sourceURL=webpack:///external_%22koa%22?");

/***/ }),

/***/ "koa-favicon":
/*!******************************!*\
  !*** external "koa-favicon" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-favicon\");\n\n//# sourceURL=webpack:///external_%22koa-favicon%22?");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");\n\n//# sourceURL=webpack:///external_%22koa-router%22?");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");\n\n//# sourceURL=webpack:///external_%22koa-static%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ })

/******/ });