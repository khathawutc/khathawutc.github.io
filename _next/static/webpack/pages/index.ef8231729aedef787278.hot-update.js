webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Header/HeaderDetail.js":
/*!***********************************************!*\
  !*** ./src/components/Header/HeaderDetail.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-tools */ \"./node_modules/styled-tools/dist/es/index.js\");\n/* harmony import */ var _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MenuItem/MenuItem */ \"./src/components/MenuItem/MenuItem.js\");\n\n\nvar _jsxFileName = \"/Users/khathawut/Documents/My works/Portfolio/portfolio/src/components/Header/HeaderDetail.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar HeaderDetail = function HeaderDetail(props) {\n  _s();\n\n  var currPage = props.currPage,\n      handlePage = props.handlePage,\n      isBgShow = props.isBgShow;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShow = _useState[0],\n      setIsShow = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (isBgShow) {\n      setIsShow(true);\n    }\n  }, [isBgShow]);\n\n  var handleClick = function handleClick(pageId) {\n    return function () {\n      handlePage(pageId);\n    };\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Contianer, {\n    isShow: isShow,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LeftContentContainer, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LogoContainer, {\n        children: \"KHATHAWUT\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CloseIcon, {\n      onClick: handleClick(0),\n      children: \"X\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(HeaderDetail, \"YYqJdMnYxaSkabpHgUT30+1ty8M=\");\n\n_c = HeaderDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderDetail);\nvar Contianer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HeaderDetail__Contianer\",\n  componentId: \"sc-8q0f32-0\"\n})([\"position:absolute;top:0;left:0;width:100%;display:flex;align-items:center;flex-direction:row;z-index:11;padding:20px 40px;justify-content:space-between;background:#f0e4d8;\"]);\n_c2 = Contianer;\nvar LeftContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HeaderDetail__LeftContentContainer\",\n  componentId: \"sc-8q0f32-1\"\n})([\"display:flex;flex-direction:row;align-items:center;\"]);\n_c3 = LeftContentContainer;\nvar LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HeaderDetail__LogoContainer\",\n  componentId: \"sc-8q0f32-2\"\n})([\"height:fit-content;font-size:1rem;text-align:center;color:#f0e4d8;padding:4px 14px;background:#2d2d2b;animation:logoFadeIn 1.5s;@keyframes logoFadeIn{0%{opacity:0.5;transform:translateX(-20%);}100%{opacity:1;transform:translateX(0);}}\"]);\n_c4 = LogoContainer;\nvar MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HeaderDetail__MenuContainer\",\n  componentId: \"sc-8q0f32-3\"\n})([\"display:flex;flex-direction:row;margin-left:42px;\"]);\nvar CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HeaderDetail__CloseIcon\",\n  componentId: \"sc-8q0f32-4\"\n})([\"cursor:pointer;font-size:18px;font-weight:bold;\"]);\n_c5 = CloseIcon;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"HeaderDetail\");\n$RefreshReg$(_c2, \"Contianer\");\n$RefreshReg$(_c3, \"LeftContentContainer\");\n$RefreshReg$(_c4, \"LogoContainer\");\n$RefreshReg$(_c5, \"CloseIcon\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlckRldGFpbC5qcz9lNzliIl0sIm5hbWVzIjpbIkhlYWRlckRldGFpbCIsInByb3BzIiwiY3VyclBhZ2UiLCJoYW5kbGVQYWdlIiwiaXNCZ1Nob3ciLCJ1c2VTdGF0ZSIsImlzU2hvdyIsInNldElzU2hvdyIsInVzZUVmZmVjdCIsImhhbmRsZUNsaWNrIiwicGFnZUlkIiwiQ29udGlhbmVyIiwic3R5bGVkIiwiZGl2IiwiTGVmdENvbnRlbnRDb250YWluZXIiLCJMb2dvQ29udGFpbmVyIiwiTWVudUNvbnRhaW5lciIsIkNsb3NlSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUN0QkMsUUFEc0IsR0FDYUQsS0FEYixDQUN0QkMsUUFEc0I7QUFBQSxNQUNaQyxVQURZLEdBQ2FGLEtBRGIsQ0FDWkUsVUFEWTtBQUFBLE1BQ0FDLFFBREEsR0FDYUgsS0FEYixDQUNBRyxRQURBOztBQUFBLGtCQUVGQyxzREFBUSxDQUFDLEtBQUQsQ0FGTjtBQUFBLE1BRXZCQyxNQUZ1QjtBQUFBLE1BRWZDLFNBRmU7O0FBRzlCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJSixRQUFKLEVBQWM7QUFDWkcsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNILFFBQUQsQ0FKTSxDQUFUOztBQU1BLE1BQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE1BQUQ7QUFBQSxXQUFZLFlBQU07QUFDcENQLGdCQUFVLENBQUNPLE1BQUQsQ0FBVjtBQUNELEtBRm1CO0FBQUEsR0FBcEI7O0FBSUEsc0JBQ0UscUVBQUMsU0FBRDtBQUFXLFVBQU0sRUFBRUosTUFBbkI7QUFBQSw0QkFDRSxxRUFBQyxvQkFBRDtBQUFBLDZCQUNFLHFFQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFxQkUscUVBQUMsU0FBRDtBQUFXLGFBQU8sRUFBRUcsV0FBVyxDQUFDLENBQUQsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0F0Q0Q7O0dBQU1ULFk7O0tBQUFBLFk7QUF3Q1NBLDJFQUFmO0FBRUEsSUFBTVcsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1MQUFmO01BQU1GLFM7QUFjTixJQUFNRyxvQkFBb0IsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyREFBMUI7TUFBTUMsb0I7QUFNTixJQUFNQyxhQUFhLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa1BBQW5CO01BQU1FLGE7QUFzQk4sSUFBTUMsYUFBYSxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlEQUFuQjtBQU1BLElBQU1JLFNBQVMsR0FBR0wseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1REFBZjtNQUFNSSxTIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlckRldGFpbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBpZlByb3AgfSBmcm9tICdzdHlsZWQtdG9vbHMnXG5cbmltcG9ydCBNZW51SXRlbSBmcm9tICcuLi9NZW51SXRlbS9NZW51SXRlbSdcblxuY29uc3QgSGVhZGVyRGV0YWlsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY3VyclBhZ2UsIGhhbmRsZVBhZ2UsIGlzQmdTaG93IH0gPSBwcm9wc1xuICBjb25zdCBbaXNTaG93LCBzZXRJc1Nob3ddID0gdXNlU3RhdGUoZmFsc2UpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzQmdTaG93KSB7XG4gICAgICBzZXRJc1Nob3codHJ1ZSlcbiAgICB9XG4gIH0sIFtpc0JnU2hvd10pXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAocGFnZUlkKSA9PiAoKSA9PiB7XG4gICAgaGFuZGxlUGFnZShwYWdlSWQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250aWFuZXIgaXNTaG93PXtpc1Nob3d9PlxuICAgICAgPExlZnRDb250ZW50Q29udGFpbmVyPlxuICAgICAgICA8TG9nb0NvbnRhaW5lcj5LSEFUSEFXVVQ8L0xvZ29Db250YWluZXI+XG4gICAgICAgIHsvKiA8TWVudUNvbnRhaW5lcj5cbiAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgIGlzQWN0aXZlPXtjdXJyUGFnZSA9PT0gMX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrKDEpfVxuICAgICAgICAgICAgbGFiZWw9XCJBYm91dFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgIGlzQWN0aXZlPXtjdXJyUGFnZSA9PT0gMn1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrKDIpfVxuICAgICAgICAgICAgbGFiZWw9XCJXb3Jrc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgIGlzQWN0aXZlPXtjdXJyUGFnZSA9PT0gM31cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrKDMpfVxuICAgICAgICAgICAgbGFiZWw9XCJDb250YWN0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L01lbnVDb250YWluZXI+ICovfVxuICAgICAgPC9MZWZ0Q29udGVudENvbnRhaW5lcj5cbiAgICAgIDxDbG9zZUljb24gb25DbGljaz17aGFuZGxlQ2xpY2soMCl9Plg8L0Nsb3NlSWNvbj5cbiAgICA8L0NvbnRpYW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJEZXRhaWxcblxuY29uc3QgQ29udGlhbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB6LWluZGV4OiAxMTtcbiAgcGFkZGluZzogMjBweCA0MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6ICNmMGU0ZDg7XG5gXG5cbmNvbnN0IExlZnRDb250ZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmBcblxuY29uc3QgTG9nb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2YwZTRkODtcbiAgcGFkZGluZzogNHB4IDE0cHg7XG4gIGJhY2tncm91bmQ6ICMyZDJkMmI7XG5cbiAgYW5pbWF0aW9uOiBsb2dvRmFkZUluIDEuNXM7XG5cbiAgQGtleWZyYW1lcyBsb2dvRmFkZUluIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gIH1cbmBcblxuY29uc3QgTWVudUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1sZWZ0OiA0MnB4O1xuYFxuXG5jb25zdCBDbG9zZUljb24gPSBzdHlsZWQuZGl2YFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/HeaderDetail.js\n");

/***/ })

})