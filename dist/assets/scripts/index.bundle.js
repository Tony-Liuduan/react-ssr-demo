(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./src/client/pages/index.tsx":
/*!************************************!*\
  !*** ./src/client/pages/index.tsx ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _shared_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/shared/store */ \"./src/shared/store/index.ts\");\n/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shared/App */ \"./src/shared/App.tsx\");\n/**\n * @fileoverview page-index-entry\n * @author liuduan\n * @Date 2020-06-26 11:52:21\n * @LastEditTime 2020-06-26 14:09:55\n */\n\n\n\n\n\n\nconst store = Object(_shared_store__WEBPACK_IMPORTED_MODULE_4__[\"createClientStore\"])();\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n  store: store\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null))), document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/client/pages/index.tsx?");

/***/ }),

/***/ "./src/shared/App.tsx":
/*!****************************!*\
  !*** ./src/shared/App.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/isomorphic-unfetch/browser.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"./node_modules/react-router-config/esm/react-router-config.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/shared/routes.ts\");\n/**\n * @fileoverview App Component\n * @author liuduan\n * @Date 2020-06-26 11:55:59\n * @LastEditTime 2020-06-26 14:16:56\n */\n\n\n\n\n\n\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/about\"\n  }, \"About\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"hr\", null), Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"renderRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"]));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/shared/App.tsx?");

/***/ }),

/***/ "./src/shared/components/About.tsx":
/*!*****************************************!*\
  !*** ./src/shared/components/About.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/**\n * @fileoverview \n * @author liuduan\n * @Date 2020-06-25 11:21:44\n * @LastEditTime 2020-06-26 14:28:57\n */\n\n\n\nfunction About(props) {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (!props.aboutData) {\n      console.log('执行init');\n      init();\n    }\n  }, []);\n\n  function init() {\n    fetch('http://localhost:6027/api/about').then(res => res.json()).then(res => {\n      props.updateAboutData(res.data);\n      return res;\n    }).catch(e => e);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"About\"), props.aboutData);\n}\n\nconst updateAboutData = payload => {\n  return {\n    type: 'UPDATE_ABOUT_DATA',\n    payload\n  };\n};\n\nAbout.loadData = store => {\n  return fetch('http://localhost:6027/api/about').then(res => res.json()).then(res => {\n    console.log('-----');\n    console.log(res.data);\n    store.dispatch(updateAboutData(res.data));\n    return res;\n  }).catch(e => e);\n};\n\nfunction mapStateToProps(state) {\n  return {\n    aboutData: state.aboutData\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    updateAboutData: payload => {\n      dispatch(updateAboutData(payload));\n    }\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(About));\n\n//# sourceURL=webpack:///./src/shared/components/About.tsx?");

/***/ }),

/***/ "./src/shared/components/Home.tsx":
/*!****************************************!*\
  !*** ./src/shared/components/Home.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * @fileoverview \n * @author liuduan\n * @Date 2020-06-25 11:21:44\n * @LastEditTime 2020-06-25 11:22:34\n */\n\n\nfunction Home() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Home\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/shared/components/Home.tsx?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createServerStore\", function() { return createServerStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createClientStore\", function() { return createClientStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/**\n * @fileoverview redux store for client and server\n * @author liuduan\n * @Date 2020-06-26 13:54:41\n * @LastEditTime 2020-06-26 14:19:34\n */\n\nconst initialState = {};\n\nfunction reducer(preState = initialState, action) {\n  switch (action.type) {\n    case 'UPDATE_ABOUT_DATA':\n      return { ...preState,\n        aboutData: action.payload\n      };\n\n    default:\n      return preState;\n  }\n}\n\nfunction createServerStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer);\n}\nfunction createClientStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, window.__SSR_REDUX_STOR__);\n}\n\n//# sourceURL=webpack:///./src/shared/store/index.ts?");

/***/ })

},[["./src/client/pages/index.tsx","runtime","vendor"]]]);