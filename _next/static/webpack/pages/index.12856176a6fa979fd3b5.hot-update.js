webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/MouseAnimation/MouseAnimation.js":
/*!*********************************************************!*\
  !*** ./src/components/MouseAnimation/MouseAnimation.js ***!
  \*********************************************************/
/*! exports provided: MouseAnimation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MouseAnimation\", function() { return MouseAnimation; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/khathawut/Documents/My works/Portfolio/portfolio/src/components/MouseAnimation/MouseAnimation.js\",\n    _this = undefined;\n\n\nvar MouseAnimation = function MouseAnimation() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n      \"class\": \"arrows\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n        \"class\": \"a1\",\n        d: \"M0 0 L30 32 L60 0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n        \"class\": \"a2\",\n        d: \"M0 20 L30 52 L60 20\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n        \"class\": \"a3\",\n        d: \"M0 40 L30 72 L60 40\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, _this);\n};\n_c = MouseAnimation;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"MouseAnimation__Container\",\n  componentId: \"cr3n0x-0\"\n})([\".arrows{width:60px;height:72px;position:absolute;left:50%;margin-left:-30px;bottom:20px;}.arrows path{stroke:#2994d1;fill:transparent;stroke-width:1px;animation:arrow 2s infinite;-webkit-animation:arrow 2s infinite;}@keyframes arrow{0%{opacity:0;}40%{opacity:1;}80%{opacity:0;}100%{opacity:0;}}@-webkit-keyframes arrow{0%{opacity:0;}40%{opacity:1;}80%{opacity:0;}100%{opacity:0;}}.arrows path.a1{animation-delay:-1s;-webkit-animation-delay:-1s;}.arrows path.a2{animation-delay:-0.5s;-webkit-animation-delay:-0.5s;}.arrows path.a3{animation-delay:0s;-webkit-animation-delay:0s;}\"]);\n_c2 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MouseAnimation);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MouseAnimation\");\n$RefreshReg$(_c2, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW91c2VBbmltYXRpb24vTW91c2VBbmltYXRpb24uanM/YWExZiJdLCJuYW1lcyI6WyJNb3VzZUFuaW1hdGlvbiIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ2xDLHNCQUNFLHFFQUFDLFNBQUQ7QUFBQSwyQkFDRTtBQUFLLGVBQU0sUUFBWDtBQUFBLDhCQUNFO0FBQU0saUJBQU0sSUFBWjtBQUFpQixTQUFDLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBTSxpQkFBTSxJQUFaO0FBQWlCLFNBQUMsRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFNLGlCQUFNLElBQVo7QUFBaUIsU0FBQyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQVZNO0tBQU1BLGM7QUFZYixJQUFNQyxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseWtCQUFmO01BQU1GLFM7QUFnRVNELDZFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTW91c2VBbmltYXRpb24vTW91c2VBbmltYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgTW91c2VBbmltYXRpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxzdmcgY2xhc3M9XCJhcnJvd3NcIj5cbiAgICAgICAgPHBhdGggY2xhc3M9XCJhMVwiIGQ9XCJNMCAwIEwzMCAzMiBMNjAgMFwiPjwvcGF0aD5cbiAgICAgICAgPHBhdGggY2xhc3M9XCJhMlwiIGQ9XCJNMCAyMCBMMzAgNTIgTDYwIDIwXCI+PC9wYXRoPlxuICAgICAgICA8cGF0aCBjbGFzcz1cImEzXCIgZD1cIk0wIDQwIEwzMCA3MiBMNjAgNDBcIj48L3BhdGg+XG4gICAgICA8L3N2Zz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAuYXJyb3dzIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gICAgYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmFycm93cyBwYXRoIHtcbiAgICBzdHJva2U6ICMyOTk0ZDE7XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgYW5pbWF0aW9uOiBhcnJvdyAycyBpbmZpbml0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYXJyb3cgMnMgaW5maW5pdGU7XG4gIH1cblxuICBAa2V5ZnJhbWVzIGFycm93IHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgYXJyb3cgLypTYWZhcmkgYW5kIENocm9tZSovIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICAuYXJyb3dzIHBhdGguYTEge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTFzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7IC8qIFNhZmFyaSDlkowgQ2hyb21lICovXG4gIH1cblxuICAuYXJyb3dzIHBhdGguYTIge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjVzOyAvKiBTYWZhcmkg5ZKMIENocm9tZSAqL1xuICB9XG5cbiAgLmFycm93cyBwYXRoLmEzIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwczsgLyogU2FmYXJpIOWSjCBDaHJvbWUgKi9cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBNb3VzZUFuaW1hdGlvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MouseAnimation/MouseAnimation.js\n");

/***/ })

})