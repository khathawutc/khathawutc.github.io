webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/About.js":
/*!************************!*\
  !*** ./pages/About.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_components_Layout_DetailLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Layout/DetailLayout */ \"./src/components/Layout/DetailLayout.jsx\");\n/* harmony import */ var _src_components_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Timeline/Timeline */ \"./src/components/Timeline/Timeline.js\");\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/constants */ \"./src/constants/index.js\");\n/* harmony import */ var _src_components_MouseAnimation_MouseAnimation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/MouseAnimation/MouseAnimation */ \"./src/components/MouseAnimation/MouseAnimation.js\");\n\n\nvar _jsxFileName = \"/Users/khathawut/Documents/My works/Portfolio/portfolio/pages/About.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar About = function About(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShowTimeline = _useState[0],\n      setIsShowTimeline = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var listenScroll = function listenScroll(e) {\n      var scrollTop = e.target.scrollTop;\n      var scrollHeight = e.target.scrollHeight;\n      var clientHeight = e.target.clientHeight;\n\n      if (scrollTop + clientHeight >= scrollHeight - 5) {\n        setIsShowTimeline(true);\n      }\n    };\n\n    window.addEventListener('scroll', listenScroll, true);\n\n    if (isShowTimeline) {\n      window.removeEventListener('scroll', listenScroll, true);\n    }\n\n    return function () {\n      return window.removeEventListener('scroll', listenScroll, true);\n    };\n  }, [isShowTimeline]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Layout_DetailLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DetailContainer, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TextContainer, {\n          children: [\"My name is \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HilightText, {\n            children: \"Khathawut\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 24\n          }, _this), \" ,\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this), \"born on the 7th of March 1997.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this), \"I'm Web developer located at Bangkok.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, _this), \"Experience with \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HilightText, {\n            children: \"React\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 29\n          }, _this), \" and\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HilightText, {\n            children: \"Express\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RemarkLink, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              target: \"_blank\",\n              href: \"https://www.appman.co.th/\",\n              children: \"Developer at Appman Co., Ltd.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MouseContainer, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_MouseAnimation_MouseAnimation__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TimelineContainer, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TimelineWrapper, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            isShowTimeline: isShowTimeline\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(About, \"YwGa756Vg5zqdVbAmkfKMIdY1Y4=\");\n\n_c = About;\nvar MouseContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__MouseContainer\",\n  componentId: \"j1i91q-0\"\n})([\"position:absolute;width:100%;height:100%;\"]);\n_c2 = MouseContainer;\nvar HilightText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.withConfig({\n  displayName: \"About__HilightText\",\n  componentId: \"j1i91q-1\"\n})([\"color:#4ca708;font-style:italic;font-size:52px;font-weight:500;@media only screen and (max-width:\", \"px){font-size:28px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c3 = HilightText;\nvar RemarkLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.withConfig({\n  displayName: \"About__RemarkLink\",\n  componentId: \"j1i91q-2\"\n})([\"font-size:16px;font-style:italic;transition:font-size 1.2s;position:relative;@media only screen and (max-width:\", \"px){font-size:12px;&:hover{font-size:14px;}}&:hover{font-size:18px;}&::after{background:none repeat scroll 0 0 transparent;bottom:-8px;content:'';display:block;height:1px;left:50%;position:absolute;background:#2d2d2b;transition:width 1.5s ease 0s,left 1.5s ease 0s;width:0;}&:hover::after{width:100%;left:0;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c4 = RemarkLink;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__Container\",\n  componentId: \"j1i91q-3\"\n})([\"width:100%;position:relative;\"]);\n_c5 = Container;\nvar DetailContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__DetailContainer\",\n  componentId: \"j1i91q-4\"\n})([\"position:relative;width:100%;height:calc(var(--vh,1vh) * 100);display:flex;align-items:center;padding:0 40px;scroll-snap-align:center;@media only screen and (max-width:\", \"px){padding:0 20px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c6 = DetailContainer;\nvar TimelineContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(DetailContainer).withConfig({\n  displayName: \"About__TimelineContainer\",\n  componentId: \"j1i91q-5\"\n})([\"max-width:100vw;overflow-x:scroll;\"]);\n_c7 = TimelineContainer;\nvar TimelineWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__TimelineWrapper\",\n  componentId: \"j1i91q-6\"\n})([\"min-width:100%;position:relative;@media only screen and (max-width:\", \"px){min-width:1024px;padding-right:20px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c8 = TimelineWrapper;\nvar TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__TextContainer\",\n  componentId: \"j1i91q-7\"\n})([\"font-size:42px;line-height:1.6;@media only screen and (max-width:\", \"px){font-size:24px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c9 = TextContainer;\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.withConfig({\n  displayName: \"About__Line\",\n  componentId: \"j1i91q-8\"\n})([\"width:100%;border-bottom:2px solid;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"About\");\n$RefreshReg$(_c2, \"MouseContainer\");\n$RefreshReg$(_c3, \"HilightText\");\n$RefreshReg$(_c4, \"RemarkLink\");\n$RefreshReg$(_c5, \"Container\");\n$RefreshReg$(_c6, \"DetailContainer\");\n$RefreshReg$(_c7, \"TimelineContainer\");\n$RefreshReg$(_c8, \"TimelineWrapper\");\n$RefreshReg$(_c9, \"TextContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQWJvdXQuanM/M2Q5NCJdLCJuYW1lcyI6WyJBYm91dCIsInByb3BzIiwidXNlU3RhdGUiLCJpc1Nob3dUaW1lbGluZSIsInNldElzU2hvd1RpbWVsaW5lIiwidXNlRWZmZWN0IiwibGlzdGVuU2Nyb2xsIiwiZSIsInNjcm9sbFRvcCIsInRhcmdldCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTW91c2VDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJIaWxpZ2h0VGV4dCIsInNwYW4iLCJDT05TVEFOVCIsInNjcmVlblNpemUiLCJzbWFsbCIsIlJlbWFya0xpbmsiLCJDb250YWluZXIiLCJEZXRhaWxDb250YWluZXIiLCJUaW1lbGluZUNvbnRhaW5lciIsIlRpbWVsaW5lV3JhcHBlciIsIlRleHRDb250YWluZXIiLCJMaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNxQkMsc0RBQVEsQ0FBQyxLQUFELENBRDdCO0FBQUEsTUFDaEJDLGNBRGdCO0FBQUEsTUFDQUMsaUJBREE7O0FBRXZCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDMUIsVUFBTUMsU0FBUyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0QsU0FBM0I7QUFDQSxVQUFNRSxZQUFZLEdBQUdILENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxZQUE5QjtBQUNBLFVBQU1DLFlBQVksR0FBR0osQ0FBQyxDQUFDRSxNQUFGLENBQVNFLFlBQTlCOztBQUVBLFVBQUlILFNBQVMsR0FBR0csWUFBWixJQUE0QkQs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QUFNQyxpQjtBQUtOLElBQU1DLGVBQWUsR0FBR1gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5SEFJa0JHLHNEQUFRLENBQUNDLFVBQVQsQ0FBb0JDLEtBSnRDLENBQXJCO01BQU1LLGU7QUFVTixJQUFNQyxhQUFhLEdBQUdaLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0dBSW9CRyxzREFBUSxDQUFDQyxVQUFULENBQW9CQyxLQUp4QyxDQUFuQjtNQUFNTSxhO0FBU04sSUFBTUMsSUFBSSxHQUFHYix5REFBTSxDQUFDRyxJQUFWO0FBQUE7QUFBQTtBQUFBLDJDQUFWO0FBS2VuQixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL0Fib3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBDb250ZW50Q29udGFpbmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0xheW91dC9EZXRhaWxMYXlvdXQnXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZWxpbmUnXG5pbXBvcnQgQ09OU1RBTlQgZnJvbSAnLi4vc3JjL2NvbnN0YW50cydcbmltcG9ydCBNb3VzZUFuaW1hdGlvbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Nb3VzZUFuaW1hdGlvbi9Nb3VzZUFuaW1hdGlvbidcblxuY29uc3QgQWJvdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2lzU2hvd1RpbWVsaW5lLCBzZXRJc1Nob3dUaW1lbGluZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsaXN0ZW5TY3JvbGwgPSAoZSkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZS50YXJnZXQuc2Nyb2xsVG9wXG4gICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBlLnRhcmdldC5zY3JvbGxIZWlnaHRcbiAgICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IGUudGFyZ2V0LmNsaWVudEhlaWdodFxuXG4gICAgICBpZiAoc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0ID49IHNjcm9sbEhlaWdodCAtIDUpIHtcbiAgICAgICAgc2V0SXNTaG93VGltZWxpbmUodHJ1ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbGlzdGVuU2Nyb2xsLCB0cnVlKVxuXG4gICAgaWYgKGlzU2hvd1RpbWVsaW5lKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbGlzdGVuU2Nyb2xsLCB0cnVlKVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbGlzdGVuU2Nyb2xsLCB0cnVlKVxuICB9LCBbaXNTaG93VGltZWxpbmVdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRlbnRDb250YWluZXI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8RGV0YWlsQ29udGFpbmVyPlxuICAgICAgICAgIDxUZXh0Q29udGFpbmVyPlxuICAgICAgICAgICAgTXkgbmFtZSBpcyA8SGlsaWdodFRleHQ+S2hhdGhhd3V0PC9IaWxpZ2h0VGV4dD4gLFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBib3JuIG9uIHRoZSA3dGggb2YgTWFyY2ggMTk5Ny5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgSSdtIFdlYiBkZXZlbG9wZXIgbG9jYXRlZCBhdCBCYW5na29rLlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBFeHBlcmllbmNlIHdpdGggPEhpbGlnaHRUZXh0PlJlYWN0PC9IaWxpZ2h0VGV4dD4gYW5keycgJ31cbiAgICAgICAgICAgIDxIaWxpZ2h0VGV4dD5FeHByZXNzPC9IaWxpZ2h0VGV4dD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFJlbWFya0xpbms+XG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5hcHBtYW4uY28udGgvXCI+XG4gICAgICAgICAgICAgICAgRGV2ZWxvcGVyIGF0IEFwcG1hbiBDby4sIEx0ZC5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9SZW1hcmtMaW5rPlxuICAgICAgICAgIDwvVGV4dENvbnRhaW5lcj5cbiAgICAgICAgICA8TW91c2VDb250YWluZXI+XG4gICAgICAgICAgICA8TW91c2VBbmltYXRpb24gLz5cbiAgICAgICAgICA8L01vdXNlQ29udGFpbmVyPlxuICAgICAgICA8L0RldGFpbENvbnRhaW5lcj5cbiAgICAgICAgPFRpbWVsaW5lQ29udGFpbmVyPlxuICAgICAgICAgIDxUaW1lbGluZVdyYXBwZXI+XG4gICAgICAgICAgICA8VGltZWxpbmUgaXNTaG93VGltZWxpbmU9e2lzU2hvd1RpbWVsaW5lfSAvPlxuICAgICAgICAgIDwvVGltZWxpbmVXcmFwcGVyPlxuICAgICAgICA8L1RpbWVsaW5lQ29udGFpbmVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Db250ZW50Q29udGFpbmVyPlxuICApXG59XG5cbmNvbnN0IE1vdXNlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBib3R0b206IDA7ICovXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5gXG5cbmNvbnN0IEhpbGlnaHRUZXh0ID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAjNGNhNzA4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogNTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7Q09OU1RBTlQuc2NyZWVuU2l6ZS5zbWFsbH1weCkge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuYFxuXG5jb25zdCBSZW1hcmtMaW5rID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMS4ycztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtDT05TVEFOVC5zY3JlZW5TaXplLnNtYWxsfXB4KSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XG4gICAgYm90dG9tOiAtOHB4O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogIzJkMmQyYjtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAxLjVzIGVhc2UgMHMsIGxlZnQgMS41cyBlYXNlIDBzO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgJjpob3Zlcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gIH1cbmBcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmBcblxuY29uc3QgRGV0YWlsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtDT05TVEFOVC5zY3JlZW5TaXplLnNtYWxsfXB4KSB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG5gXG5cbmNvbnN0IFRpbWVsaW5lQ29udGFpbmVyID0gc3R5bGVkKERldGFpbENvbnRhaW5lcilgXG4gIG1heC13aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbmBcblxuY29uc3QgVGltZWxpbmVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke0NPTlNUQU5ULnNjcmVlblNpemUuc21hbGx9cHgpIHtcbiAgICBtaW4td2lkdGg6IDEwMjRweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG5gXG5cbmNvbnN0IFRleHRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke0NPTlNUQU5ULnNjcmVlblNpemUuc21hbGx9cHgpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbmBcblxuY29uc3QgTGluZSA9IHN0eWxlZC5zcGFuYFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBBYm91dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/About.js\n");

/***/ })

})