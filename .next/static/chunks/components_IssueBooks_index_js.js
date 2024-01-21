"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_IssueBooks_index_js"],{

/***/ "./components/IssueBooks/index.js":
/*!****************************************!*\
  !*** ./components/IssueBooks/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reselect */ \"./node_modules/reselect/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _Auth_redux_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Auth/redux/selectors */ \"./components/Auth/redux/selectors.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/actions */ \"./components/IssueBooks/redux/actions.js\");\n/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redux/selectors */ \"./components/IssueBooks/redux/selectors.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar BookTable = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"components_IssueBooks_BookTable_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./BookTable */ \"./components/IssueBooks/BookTable.js\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"..\\\\components\\\\IssueBooks\\\\index.js -> \" + \"./BookTable\"\n        ]\n    },\n    ssr: false\n});\n_c = BookTable;\nvar Mybooks = function(props) {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        props.getIssueBooksRequest(1);\n    }, []);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BookTable, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, props), void 0, false, {\n        fileName: \"C:\\\\nodejs\\\\Rk Library\\\\client\\\\components\\\\IssueBooks\\\\index.js\",\n        lineNumber: 16,\n        columnNumber: 12\n    }, _this);\n};\n_s(Mybooks, \"CuHC/gmkH7n0V0sJOkcbkPBFVeg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c1 = Mybooks;\nvar mapStateToProps = (0,reselect__WEBPACK_IMPORTED_MODULE_9__.createStructuredSelector)({\n    userDetails: (0,_Auth_redux_selectors__WEBPACK_IMPORTED_MODULE_2__.selectUserDetails)(),\n    issueBooks: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_6__.selectIssueBooks)()\n});\nvar mapDispatchToProps = function(dispatch) {\n    return {\n        getIssueBooksRequest: (0,redux__WEBPACK_IMPORTED_MODULE_10__.bindActionCreators)(_redux_actions__WEBPACK_IMPORTED_MODULE_5__.getIssueBooksRequest, dispatch),\n        issueActionRequest: (0,redux__WEBPACK_IMPORTED_MODULE_10__.bindActionCreators)(_redux_actions__WEBPACK_IMPORTED_MODULE_5__.issueActionRequest, dispatch)\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Mybooks));\nvar _c, _c1;\n$RefreshReg$(_c, \"BookTable\");\n$RefreshReg$(_c1, \"Mybooks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lzc3VlQm9va3MvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQXNDO0FBQ2M7QUFDVDtBQUNpQjtBQUNwQjtBQUNMO0FBQ3dDO0FBQ3RCO0FBQ25CO0FBQ2xDLElBQU1VLFNBQVMsR0FBR0wsbURBQU8sQ0FBQztXQUFNLDBMQUFxQjtDQUFBOzs7Ozs7SUFBR00sR0FBRyxFQUFDLEtBQUs7RUFBRztBQUE5REQsS0FBQUEsU0FBUztBQUNmLElBQU1FLE9BQU8sR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQ3ZCSixnREFBUyxDQUFDLFdBQUk7UUFDVkksS0FBSyxDQUFDUCxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztJQUNMLElBQU1RLE1BQU0sR0FBR1Ysc0RBQVMsRUFBRTtJQUMxQixxQkFBTyw4REFBQ00sU0FBUyxxRkFBS0csS0FBSzs7OzthQUFJO0FBQ25DLENBQUM7R0FOS0QsT0FBTzs7UUFJTVIsa0RBQVM7OztBQUp0QlEsTUFBQUEsT0FBTztBQVFiLElBQU1HLGVBQWUsR0FBR2Qsa0VBQXdCLENBQUM7SUFDN0NlLFdBQVcsRUFBR2Isd0VBQWlCLEVBQUU7SUFDakNjLFVBQVUsRUFBR1Qsa0VBQWdCLEVBQUU7Q0FDbEMsQ0FBQztBQUNGLElBQU1VLGtCQUFrQixHQUFHQyxTQUFBQSxRQUFRO1dBQUs7UUFDcENiLG9CQUFvQixFQUFHSiwwREFBa0IsQ0FBQ0ksZ0VBQW9CLEVBQUVhLFFBQVEsQ0FBQztRQUN6RVosa0JBQWtCLEVBQUdMLDBEQUFrQixDQUFDSyw4REFBa0IsRUFBRVksUUFBUSxDQUFDO0tBQ3hFO0NBQUM7QUFFRiwrREFBZW5CLG9EQUFPLENBQUNlLGVBQWUsRUFBRUcsa0JBQWtCLENBQUMsQ0FBQ04sT0FBTyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Jc3N1ZUJvb2tzL2luZGV4LmpzPzhlYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgfSBmcm9tIFwicmVzZWxlY3RcIjtcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdFVzZXJEZXRhaWxzIH0gZnJvbSBcIi4uL0F1dGgvcmVkdXgvc2VsZWN0b3JzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCB7IGdldElzc3VlQm9va3NSZXF1ZXN0LCBpc3N1ZUFjdGlvblJlcXVlc3QgfSBmcm9tIFwiLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IHNlbGVjdElzc3VlQm9va3MgfSBmcm9tIFwiLi9yZWR1eC9zZWxlY3RvcnNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IEJvb2tUYWJsZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9Cb29rVGFibGVcIiksIHtzc3I6ZmFsc2V9IClcclxuY29uc3QgTXlib29rcyA9IChwcm9wcykgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgcHJvcHMuZ2V0SXNzdWVCb29rc1JlcXVlc3QoMSlcclxuICAgIH0sW10pXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIHJldHVybiA8Qm9va1RhYmxlIHsuLi5wcm9wc30gLz5cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHtcclxuICAgIHVzZXJEZXRhaWxzIDogc2VsZWN0VXNlckRldGFpbHMoKSxcclxuICAgIGlzc3VlQm9va3MgOiBzZWxlY3RJc3N1ZUJvb2tzKClcclxufSlcclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICAgIGdldElzc3VlQm9va3NSZXF1ZXN0IDogYmluZEFjdGlvbkNyZWF0b3JzKGdldElzc3VlQm9va3NSZXF1ZXN0LCBkaXNwYXRjaCksXHJcbiAgICBpc3N1ZUFjdGlvblJlcXVlc3QgOiBiaW5kQWN0aW9uQ3JlYXRvcnMoaXNzdWVBY3Rpb25SZXF1ZXN0LCBkaXNwYXRjaCksXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNeWJvb2tzKTsiXSwibmFtZXMiOlsiY29ubmVjdCIsImNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciIsImJpbmRBY3Rpb25DcmVhdG9ycyIsInNlbGVjdFVzZXJEZXRhaWxzIiwidXNlUm91dGVyIiwiZHluYW1pYyIsImdldElzc3VlQm9va3NSZXF1ZXN0IiwiaXNzdWVBY3Rpb25SZXF1ZXN0Iiwic2VsZWN0SXNzdWVCb29rcyIsInVzZUVmZmVjdCIsIkJvb2tUYWJsZSIsInNzciIsIk15Ym9va3MiLCJwcm9wcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInVzZXJEZXRhaWxzIiwiaXNzdWVCb29rcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/IssueBooks/index.js\n"));

/***/ }),

/***/ "./components/IssueBooks/redux/selectors.js":
/*!**************************************************!*\
  !*** ./components/IssueBooks/redux/selectors.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectIssueBooks\": function() { return /* binding */ selectIssueBooks; }\n/* harmony export */ });\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ \"./node_modules/reselect/es/index.js\");\n\nvar selectGlobal = function(state) {\n    return state;\n};\nvar selectIssueBooks = function() {\n    return (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectGlobal, function(globalState) {\n        return globalState.issueBooks;\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lzc3VlQm9va3MvcmVkdXgvc2VsZWN0b3JzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBDO0FBRTFDLElBQU1DLFlBQVksR0FBRyxTQUFDQyxLQUFLO1dBQUtBLEtBQUs7Q0FBQTtBQUU5QixJQUFNQyxnQkFBZ0IsR0FBRztXQUM5Qkgsd0RBQWMsQ0FBQ0MsWUFBWSxFQUFFLFNBQUNHLFdBQVc7ZUFBS0EsV0FBVyxDQUFDQyxVQUFVO0tBQUEsQ0FBQztDQUFBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Jc3N1ZUJvb2tzL3JlZHV4L3NlbGVjdG9ycy5qcz9jYzlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSBcInJlc2VsZWN0XCI7XG5cbmNvbnN0IHNlbGVjdEdsb2JhbCA9IChzdGF0ZSkgPT4gc3RhdGU7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RJc3N1ZUJvb2tzID0gKCkgPT5cbiAgY3JlYXRlU2VsZWN0b3Ioc2VsZWN0R2xvYmFsLCAoZ2xvYmFsU3RhdGUpID0+IGdsb2JhbFN0YXRlLmlzc3VlQm9va3MpO1xuXG5cbiJdLCJuYW1lcyI6WyJjcmVhdGVTZWxlY3RvciIsInNlbGVjdEdsb2JhbCIsInN0YXRlIiwic2VsZWN0SXNzdWVCb29rcyIsImdsb2JhbFN0YXRlIiwiaXNzdWVCb29rcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/IssueBooks/redux/selectors.js\n"));

/***/ })

}]);