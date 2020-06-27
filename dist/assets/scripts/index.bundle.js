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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"./node_modules/react-router-config/esm/react-router-config.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ \"./src/shared/routes.ts\");\n/**\n * @fileoverview App Component\n * @author liuduan\n * @Date 2020-06-26 11:55:59\n * @LastEditTime 2020-06-27 10:17:31\n */\n\n\n\n\n\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/about\"\n  }, \"About\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"renderRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/shared/App.tsx?");

/***/ }),

/***/ "./src/shared/components/About.tsx":
/*!*****************************************!*\
  !*** ./src/shared/components/About.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/**\n * @fileoverview \n * @author liuduan\n * @Date 2020-06-25 11:21:44\n * @LastEditTime 2020-06-26 17:06:53\n */\n\n\n\nfunction About(props) {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (!props.aboutData) {\n      console.log('执行init');\n      init();\n    }\n  }, []);\n\n  function init() {\n    fetch('http://localhost:6027/api/about').then(res => res.json()).then(res => {\n      props.updateAboutData(res.data);\n      return res;\n    }).catch(e => e);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"About\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, props.aboutData));\n}\n\nconst updateAboutData = payload => {\n  return {\n    type: 'UPDATE_ABOUT_DATA',\n    payload\n  };\n};\n\nAbout.loadData = store => {\n  return fetch('http://localhost:6027/api/about').then(res => res.json()).then(res => {\n    store.dispatch(updateAboutData(res.data));\n    return res;\n  }).catch(e => e);\n};\n\nfunction mapStateToProps(state) {\n  return {\n    aboutData: state.aboutData\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    updateAboutData: payload => {\n      dispatch(updateAboutData(payload));\n    }\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(About));\n\n//# sourceURL=webpack:///./src/shared/components/About.tsx?");

/***/ }),

/***/ "./src/shared/components/CheckboxGroup.tsx":
/*!*************************************************!*\
  !*** ./src/shared/components/CheckboxGroup.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n/**\n * @fileoverview \n * @author liuduan\n * @Date 2020-06-26 22:33:23\n * @LastEditTime 2020-06-26 23:33:00\n */\n\n\nclass CheckboxGroup extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {\n  constructor(props) {\n    super(props);\n    this.handleChangeAll = this.handleChangeAll.bind(this);\n    this.handleChange = this.handleChange.bind(this);\n  }\n\n  handleChangeAll(e) {\n    const {\n      list,\n      onChange\n    } = this.props;\n    const {\n      checked\n    } = e.target;\n    let newSelected = [];\n\n    if (checked) {\n      newSelected = list.map(({\n        id\n      }) => id);\n    }\n\n    onChange(newSelected);\n  }\n\n  handleChange(e) {\n    const {\n      selected,\n      onChange\n    } = this.props;\n    const {\n      checked,\n      value\n    } = e.target;\n    let newSelected = [];\n\n    if (checked) {\n      newSelected = [...selected, value];\n    } else {\n      newSelected = selected.filter(s => s !== value);\n    }\n\n    onChange(newSelected);\n  }\n\n  render() {\n    const {\n      selected,\n      list\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Checkbox, {\n      value: \"\\u5168\\u9009\",\n      id: \"all\",\n      checked: selected.length === list.length,\n      onChange: this.handleChangeAll\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), list.map(({\n      id,\n      value\n    }) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Checkbox, {\n        key: id,\n        value: value,\n        id: id,\n        checked: selected.includes(id),\n        onChange: this.handleChange\n      });\n    }));\n  }\n\n}\n\nconst CheckboxGroupHooks = ({\n  selected,\n  list,\n  onChange\n}) => {\n  function handleChangeAll(e) {\n    const {\n      checked\n    } = e.target;\n    let newSelected = [];\n\n    if (checked) {\n      newSelected = list.map(({\n        id\n      }) => id);\n    }\n\n    onChange(newSelected);\n  }\n\n  const handleChange = e => {\n    const {\n      checked,\n      value\n    } = e.target;\n    let newSelected = [];\n\n    if (checked) {\n      newSelected = [...selected, value];\n    } else {\n      newSelected = selected.filter(s => s !== value);\n    }\n\n    onChange(newSelected);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Checkbox, {\n    value: \"\\u5168\\u9009\",\n    id: \"all\",\n    checked: selected.length === list.length,\n    onChange: handleChangeAll\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), list.map(({\n    id,\n    value\n  }) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Checkbox, {\n      key: id,\n      value: value,\n      id: id,\n      checked: selected.includes(id),\n      onChange: handleChange\n    });\n  }));\n};\n\nconst Checkbox = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(({\n  id,\n  value,\n  checked,\n  ...otherProps\n}) => {\n  console.log('Checkbox render', id);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({\n    id: id,\n    type: \"checkbox\",\n    value: id,\n    checked: checked\n  }, otherProps)), value);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckboxGroup);\n\n//# sourceURL=webpack:///./src/shared/components/CheckboxGroup.tsx?");

/***/ }),

/***/ "./src/shared/components/Home.tsx":
/*!****************************************!*\
  !*** ./src/shared/components/Home.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CheckboxGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxGroup */ \"./src/shared/components/CheckboxGroup.tsx\");\n/**\n * @fileoverview \n * @author liuduan\n * @Date 2020-06-25 11:21:44\n * @LastEditTime 2020-06-26 23:07:22\n */\n\n\nconst list = [{\n  id: '1',\n  value: '苹果'\n}, {\n  id: '2',\n  value: '鸡蛋'\n}, {\n  id: '3',\n  value: '鸭梨'\n}];\n\nfunction Home() {\n  const [selected, setSelected] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(['1', '2', '3']);\n\n  function handleChange(newSelected) {\n    setSelected(newSelected);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CheckboxGroup__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    list: list,\n    onChange: handleChange,\n    selected: selected\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/shared/components/Home.tsx?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createServerStore\", function() { return createServerStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createClientStore\", function() { return createClientStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/**\n * @fileoverview redux store for client and server\n * @author liuduan\n * @Date 2020-06-26 13:54:41\n * @LastEditTime 2020-06-26 18:58:07\n */\n\nconst initialState = {};\n\nfunction reducer(preState = initialState, action) {\n  switch (action.type) {\n    case 'UPDATE_ABOUT_DATA':\n      return { ...preState,\n        aboutData: action.payload\n      };\n\n    default:\n      return preState;\n  }\n}\n\nfunction createServerStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer);\n}\nfunction createClientStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, window.__SSR_REDUX_STORE__);\n}\n\n//# sourceURL=webpack:///./src/shared/store/index.ts?");

/***/ })

},[["./src/client/pages/index.tsx","runtime","vendor"]]]);