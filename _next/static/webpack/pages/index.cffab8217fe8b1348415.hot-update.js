webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/Detail.js":
/*!*************************!*\
  !*** ./pages/Detail.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-tools */ \"./node_modules/styled-tools/dist/es/index.js\");\n/* harmony import */ var _src_components_Header_HeaderDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Header/HeaderDetail */ \"./src/components/Header/HeaderDetail.js\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./About */ \"./pages/About.js\");\n/* harmony import */ var _Works__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Works */ \"./pages/Works.js\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Contact */ \"./pages/Contact.js\");\n\n\nvar _jsxFileName = \"/Users/khathawut/Documents/My works/Portfolio/portfolio/pages/Detail.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Detail = function Detail(props) {\n  _s();\n\n  var currPage = props.currPage,\n      handlePage = props.handlePage;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShow = _useState[0],\n      setIsShow = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (currPage !== 0) {\n      setIsShow(true);\n    }\n  }, []);\n\n  var handleRenderPage = function handleRenderPage(page) {\n    switch (page) {\n      case 1:\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_About__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 16\n        }, _this);\n\n      case 2:\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Works__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 16\n        }, _this);\n\n      case 3:\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Contact__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 16\n        }, _this);\n\n      default:\n        break;\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    isShow: isShow,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Header_HeaderDetail__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      currPage: currPage,\n      isBgShow: isShow,\n      handlePage: handlePage\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), handleRenderPage(currPage)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Detail, \"YYqJdMnYxaSkabpHgUT30+1ty8M=\");\n\n_c = Detail;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Detail__Container\",\n  componentId: \"jrhbah-0\"\n})([\"width:100%;height:100%;position:absolute;background:#f0e4d8;z-index:10;transition:opacity 1.5s;\"]);\n_c2 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Detail\");\n$RefreshReg$(_c2, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGV0YWlsLmpzP2NmODQiXSwibmFtZXMiOlsiRGV0YWlsIiwicHJvcHMiLCJjdXJyUGFnZSIsImhhbmRsZVBhZ2UiLCJ1c2VTdGF0ZSIsImlzU2hvdyIsInNldElzU2hvdyIsInVzZUVmZmVjdCIsImhhbmRsZVJlbmRlclBhZ2UiLCJwYWdlIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BQ2hCQyxRQURnQixHQUNTRCxLQURULENBQ2hCQyxRQURnQjtBQUFBLE1BQ05DLFVBRE0sR0FDU0YsS0FEVCxDQUNORSxVQURNOztBQUFBLGtCQUVJQyxzREFBUSxDQUFDLEtBQUQsQ0FGWjtBQUFBLE1BRWpCQyxNQUZpQjtBQUFBLE1BRVRDLFNBRlM7O0FBR3hCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTCxRQUFRLEtBQUssQ0FBakIsRUFBb0I7QUFDbEJJLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDRDtBQUNGLEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBTUEsTUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQVU7QUFDakMsWUFBUUEsSUFBUjtBQUNFLFdBQUssQ0FBTDtBQUNFLDRCQUFPLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7O0FBQ0YsV0FBSyxDQUFMO0FBQ0UsNEJBQU8scUVBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDs7QUFDRixXQUFLLENBQUw7QUFDRSw0QkFBTyxxRUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQOztBQUNGO0FBQ0U7QUFSSjtBQVVELEdBWEQ7O0FBWUEsc0JBQ0UscUVBQUMsU0FBRDtBQUFXLFVBQU0sRUFBRUosTUFBbkI7QUFBQSw0QkFDRSxxRUFBQywyRUFBRDtBQUNFLGNBQVEsRUFBRUgsUUFEWjtBQUVFLGNBQVEsRUFBRUcsTUFGWjtBQUdFLGdCQUFVLEVBQUVGO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBTUdLLGdCQUFnQixDQUFDTixRQUFELENBTm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0EvQkQ7O0dBQU1GLE07O0tBQUFBLE07QUFpQ04sSUFBTVUsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVHQUFmO01BQU1GLFM7QUFVU1YscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9EZXRhaWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgaWZQcm9wIH0gZnJvbSAnc3R5bGVkLXRvb2xzJ1xuXG5pbXBvcnQgSGVhZGVyRGV0YWlsIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJEZXRhaWwnXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9BYm91dCdcbmltcG9ydCBXb3JrcyBmcm9tICcuL1dvcmtzJ1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0J1xuXG5jb25zdCBEZXRhaWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjdXJyUGFnZSwgaGFuZGxlUGFnZSB9ID0gcHJvcHNcbiAgY29uc3QgW2lzU2hvdywgc2V0SXNTaG93XSA9IHVzZVN0YXRlKGZhbHNlKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjdXJyUGFnZSAhPT0gMCkge1xuICAgICAgc2V0SXNTaG93KHRydWUpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVSZW5kZXJQYWdlID0gKHBhZ2UpID0+IHtcbiAgICBzd2l0Y2ggKHBhZ2UpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIDxBYm91dCAvPlxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gPFdvcmtzIC8+XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiA8Q29udGFjdCAvPlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGlzU2hvdz17aXNTaG93fT5cbiAgICAgIDxIZWFkZXJEZXRhaWxcbiAgICAgICAgY3VyclBhZ2U9e2N1cnJQYWdlfVxuICAgICAgICBpc0JnU2hvdz17aXNTaG93fVxuICAgICAgICBoYW5kbGVQYWdlPXtoYW5kbGVQYWdlfVxuICAgICAgLz5cbiAgICAgIHtoYW5kbGVSZW5kZXJQYWdlKGN1cnJQYWdlKX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNmMGU0ZDg7XG4gIHotaW5kZXg6IDEwO1xuICAvKiBvcGFjaXR5OiAke2lmUHJvcCgnaXNTaG93JywgJzEwMCUnLCAnMCUnKX07ICovXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cztcbmBcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Detail.js\n");

/***/ })

})