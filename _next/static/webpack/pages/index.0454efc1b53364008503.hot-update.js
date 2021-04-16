webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/Detail.js":
/*!*************************!*\
  !*** ./pages/Detail.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-tools */ \"./node_modules/styled-tools/dist/es/index.js\");\n/* harmony import */ var _src_components_Header_HeaderDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Header/HeaderDetail */ \"./src/components/Header/HeaderDetail.js\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./About */ \"./pages/About.js\");\n/* harmony import */ var _Works__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Works */ \"./pages/Works.js\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Contact */ \"./pages/Contact.js\");\n\n\nvar _jsxFileName = \"/Users/khathawut/Documents/My works/Portfolio/portfolio/pages/Detail.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Detail = function Detail(props) {\n  _s();\n\n  var currPage = props.currPage,\n      handlePage = props.handlePage;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShow = _useState[0],\n      setIsShow = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (currPage !== 0) {\n      setIsShow(true);\n    }\n  }, []);\n\n  var handleRenderPage = function handleRenderPage(page) {\n    switch (page) {\n      case 1:\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_About__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 16\n        }, _this);\n\n      case 2:\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Works__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 16\n        }, _this);\n\n      case 3:\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Contact__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 16\n        }, _this);\n\n      default:\n        break;\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    isShow: isShow,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Header_HeaderDetail__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      currPage: currPage,\n      isBgShow: isShow,\n      handlePage: handlePage\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), handleRenderPage(currPage)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Detail, \"YYqJdMnYxaSkabpHgUT30+1ty8M=\");\n\n_c = Detail;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Detail__Container\",\n  componentId: \"jrhbah-0\"\n})([\"width:100%;height:100%;position:absolute;background:#f0e4d8;z-index:10;opacity:\", \";transition:opacity 1.5s;\"], Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__[\"ifProp\"])('isShow', '100%', '0%'));\n_c2 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Detail\");\n$RefreshReg$(_c2, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGV0YWlsLmpzP2NmODQiXSwibmFtZXMiOlsiRGV0YWlsIiwicHJvcHMiLCJjdXJyUGFnZSIsImhhbmRsZVBhZ2UiLCJ1c2VTdGF0ZSIsImlzU2hvdyIsInNldElzU2hvdyIsInVzZUVmZmVjdCIsImhhbmRsZVJlbmRlclBhZ2UiLCJwYWdlIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiaWZQcm9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BQ2hCQyxRQURnQixHQUNTRCxLQURULENBQ2hCQyxRQURnQjtBQUFBLE1BQ05DLFVBRE0sR0FDU0YsS0FEVCxDQUNORSxVQURNOztBQUFBLGtCQUVJQyxzREFBUSxDQUFDLEtBQUQsQ0FGWjtBQUFBLE1BRWpCQyxNQUZpQjtBQUFBLE1BRVRDLFNBRlM7O0FBR3hCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTCxRQUFRLEtBQUssQ0FBakIsRUFBb0I7QUFDbEJJLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDRDtBQUNGLEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBTUEsTUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQVU7QUFDakMsWUFBUUEsSUFBUjtBQUNFLFdBQUssQ0FBTDtBQUNFLDRCQUFPLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7O0FBQ0YsV0FBSyxDQUFMO0FBQ0UsNEJBQU8scUVBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDs7QUFDRixXQUFLLENBQUw7QUFDRSw0QkFBTyxxRUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQOztBQUNGO0FBQ0U7QUFSSjtBQVVELEdBWEQ7O0FBWUEsc0JBQ0UscUVBQUMsU0FBRDtBQUFXLFVBQU0sRUFBRUosTUFBbkI7QUFBQSw0QkFDRSxxRUFBQywyRUFBRDtBQUNFLGNBQVEsRUFBRUgsUUFEWjtBQUVFLGNBQVEsRUFBRUcsTUFGWjtBQUdFLGdCQUFVLEVBQUVGO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBTUdLLGdCQUFnQixDQUFDTixRQUFELENBTm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0EvQkQ7O0dBQU1GLE07O0tBQUFBLE07QUFpQ04sSUFBTVUsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFIQU1GQywyREFBTSxDQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLElBQW5CLENBTkosQ0FBZjtNQUFNSCxTO0FBVVNWLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvRGV0YWlsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGlmUHJvcCB9IGZyb20gJ3N0eWxlZC10b29scydcblxuaW1wb3J0IEhlYWRlckRldGFpbCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyRGV0YWlsJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQnXG5pbXBvcnQgV29ya3MgZnJvbSAnLi9Xb3JrcydcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCdcblxuY29uc3QgRGV0YWlsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY3VyclBhZ2UsIGhhbmRsZVBhZ2UgfSA9IHByb3BzXG4gIGNvbnN0IFtpc1Nob3csIHNldElzU2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY3VyclBhZ2UgIT09IDApIHtcbiAgICAgIHNldElzU2hvdyh0cnVlKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlUmVuZGVyUGFnZSA9IChwYWdlKSA9PiB7XG4gICAgc3dpdGNoIChwYWdlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiA8QWJvdXQgLz5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIDxXb3JrcyAvPlxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gPENvbnRhY3QgLz5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBpc1Nob3c9e2lzU2hvd30+XG4gICAgICA8SGVhZGVyRGV0YWlsXG4gICAgICAgIGN1cnJQYWdlPXtjdXJyUGFnZX1cbiAgICAgICAgaXNCZ1Nob3c9e2lzU2hvd31cbiAgICAgICAgaGFuZGxlUGFnZT17aGFuZGxlUGFnZX1cbiAgICAgIC8+XG4gICAgICB7aGFuZGxlUmVuZGVyUGFnZShjdXJyUGFnZSl9XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZjBlNGQ4O1xuICB6LWluZGV4OiAxMDtcbiAgb3BhY2l0eTogJHtpZlByb3AoJ2lzU2hvdycsICcxMDAlJywgJzAlJyl9O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXM7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Detail.js\n");

/***/ })

})