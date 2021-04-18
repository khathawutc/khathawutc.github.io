webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/About.js":
/*!************************!*\
  !*** ./pages/About.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_components_Layout_DetailLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Layout/DetailLayout */ \"./src/components/Layout/DetailLayout.jsx\");\n/* harmony import */ var _src_components_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Timeline/Timeline */ \"./src/components/Timeline/Timeline.js\");\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/constants */ \"./src/constants/index.js\");\n\n\nvar _jsxFileName = \"/Users/khathawut/Documents/My works/Portfolio/portfolio/pages/About.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar About = function About(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShowTimeline = _useState[0],\n      setIsShowTimeline = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var listenScroll = function listenScroll(e) {\n      var scrollTop = e.target.scrollTop;\n      var scrollHeight = e.target.scrollHeight;\n      var clientHeight = e.target.clientHeight;\n\n      if (scrollTop + clientHeight >= scrollHeight - 5) {\n        setIsShowTimeline(true);\n      }\n    };\n\n    window.addEventListener('scroll', listenScroll, true);\n\n    if (isShowTimeline) {\n      window.removeEventListener('scroll', listenScroll, true);\n    }\n\n    return function () {\n      return window.removeEventListener('scroll', listenScroll, true);\n    };\n  }, [isShowTimeline]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Layout_DetailLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DetailContainer, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TextContainer, {\n          children: [\"My name is \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HilightText, {\n            children: \"Khathawut\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 24\n          }, _this), \" ,\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, _this), \"born on the 7th of March 1997.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this), \"I'm Web developer located at Bangkok.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, _this), \"Experience with React and Express\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RemarkLink, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              target: \"_blank\",\n              href: \"https://www.appman.co.th/\",\n              children: \"Developer at Appman Co., Ltd.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TimelineContainer, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TimelineWrapper, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            isShowTimeline: isShowTimeline\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(About, \"YwGa756Vg5zqdVbAmkfKMIdY1Y4=\");\n\n_c = About;\nvar HilightText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.withConfig({\n  displayName: \"About__HilightText\",\n  componentId: \"j1i91q-0\"\n})([\"color:#457c7a;font-style:italic;font-size:46px;\"]);\n_c2 = HilightText;\nvar RemarkLink = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.withConfig({\n  displayName: \"About__RemarkLink\",\n  componentId: \"j1i91q-1\"\n})([\"font-size:16px;font-style:italic;transition:font-size 1.2s;position:relative;@media only screen and (max-width:\", \"px){font-size:12px;&:hover{font-size:14px;}}&:hover{font-size:18px;}&::after{background:none repeat scroll 0 0 transparent;bottom:-8px;content:'';display:block;height:1px;left:50%;position:absolute;background:#2d2d2b;transition:width 1.5s ease 0s,left 1.5s ease 0s;width:0;}&:hover::after{width:100%;left:0;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c3 = RemarkLink;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__Container\",\n  componentId: \"j1i91q-2\"\n})([\"width:100%;position:relative;\"]);\n_c4 = Container;\nvar DetailContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__DetailContainer\",\n  componentId: \"j1i91q-3\"\n})([\"position:relative;width:100%;height:calc(var(--vh,1vh) * 100);display:flex;align-items:center;padding:0 40px;scroll-snap-align:center;@media only screen and (max-width:\", \"px){padding:0 20px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c5 = DetailContainer;\nvar TimelineContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(DetailContainer).withConfig({\n  displayName: \"About__TimelineContainer\",\n  componentId: \"j1i91q-4\"\n})([\"max-width:100vw;overflow-x:scroll;\"]);\n_c6 = TimelineContainer;\nvar TimelineWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__TimelineWrapper\",\n  componentId: \"j1i91q-5\"\n})([\"min-width:100%;position:relative;@media only screen and (max-width:\", \"px){min-width:1024px;padding-right:20px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c7 = TimelineWrapper;\nvar TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__TextContainer\",\n  componentId: \"j1i91q-6\"\n})([\"font-size:42px;line-height:1.6;@media only screen and (max-width:\", \"px){font-size:24px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c8 = TextContainer;\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.withConfig({\n  displayName: \"About__Line\",\n  componentId: \"j1i91q-7\"\n})([\"width:100%;border-bottom:2px solid;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"About\");\n$RefreshReg$(_c2, \"HilightText\");\n$RefreshReg$(_c3, \"RemarkLink\");\n$RefreshReg$(_c4, \"Container\");\n$RefreshReg$(_c5, \"DetailContainer\");\n$RefreshReg$(_c6, \"TimelineContainer\");\n$RefreshReg$(_c7, \"TimelineWrapper\");\n$RefreshReg$(_c8, \"TextContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQWJvdXQuanM/M2Q5NCJdLCJuYW1lcyI6WyJBYm91dCIsInByb3BzIiwidXNlU3RhdGUiLCJpc1Nob3dUaW1lbGluZSIsInNldElzU2hvd1RpbWVsaW5lIiwidXNlRWZmZWN0IiwibGlzdGVuU2Nyb2xsIiwiZSIsInNjcm9sbFRvcCIsInRhcmdldCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiSGlsaWdodFRleHQiLCJzdHlsZWQiLCJzcGFuIiwiUmVtYXJrTGluayIsIkNPTlNUQU5UIiwic2NyZWVuU2l6ZSIsInNtYWxsIiwiQ29udGFpbmVyIiwiZGl2IiwiRGV0YWlsQ29udGFpbmVyIiwiVGltZWxpbmVDb250YWluZXIiLCJUaW1lbGluZVdyYXBwZXIiLCJUZXh0Q29udGFpbmVyIiwiTGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDcUJDLHNEQUFRLENBQUMsS0FBRCxDQUQ3QjtBQUFBLE1BQ2hCQyxjQURnQjtBQUFBLE1BQ0FDLGlCQURBOztBQUV2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCLFVBQU1DLFNBQVMsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNELFNBQTNCO0FBQ0EsVUFBTUUsWUFBWSxHQUFHSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsWUFBOUI7QUFDQSxVQUFNQyxZQUFZLEdBQUdKLENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxZQUE5Qjs7QUFFQSxVQUFJSCxTQUFTLEdBQUdHLFlBQVosSUFBNEJELFlBQVksR0FBRyxDQUEvQyxFQUFrRDtB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b3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBDb250ZW50Q29udGFpbmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0xheW91dC9EZXRhaWxMYXlvdXQnXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZWxpbmUnXG5pbXBvcnQgQ09OU1RBTlQgZnJvbSAnLi4vc3JjL2NvbnN0YW50cydcblxuY29uc3QgQWJvdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2lzU2hvd1RpbWVsaW5lLCBzZXRJc1Nob3dUaW1lbGluZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsaXN0ZW5TY3JvbGwgPSAoZSkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZS50YXJnZXQuc2Nyb2xsVG9wXG4gICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBlLnRhcmdldC5zY3JvbGxIZWlnaHRcbiAgICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IGUudGFyZ2V0LmNsaWVudEhlaWdodFxuXG4gICAgICBpZiAoc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0ID49IHNjcm9sbEhlaWdodCAtIDUpIHtcbiAgICAgICAgc2V0SXNTaG93VGltZWxpbmUodHJ1ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbGlzdGVuU2Nyb2xsLCB0cnVlKVxuXG4gICAgaWYgKGlzU2hvd1RpbWVsaW5lKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbGlzdGVuU2Nyb2xsLCB0cnVlKVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbGlzdGVuU2Nyb2xsLCB0cnVlKVxuICB9LCBbaXNTaG93VGltZWxpbmVdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRlbnRDb250YWluZXI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8RGV0YWlsQ29udGFpbmVyPlxuICAgICAgICAgIDxUZXh0Q29udGFpbmVyPlxuICAgICAgICAgICAgTXkgbmFtZSBpcyA8SGlsaWdodFRleHQ+S2hhdGhhd3V0PC9IaWxpZ2h0VGV4dD4gLFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBib3JuIG9uIHRoZSA3dGggb2YgTWFyY2ggMTk5Ny5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgSSdtIFdlYiBkZXZlbG9wZXIgbG9jYXRlZCBhdCBCYW5na29rLlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBFeHBlcmllbmNlIHdpdGggUmVhY3QgYW5kIEV4cHJlc3NcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFJlbWFya0xpbms+XG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5hcHBtYW4uY28udGgvXCI+XG4gICAgICAgICAgICAgICAgRGV2ZWxvcGVyIGF0IEFwcG1hbiBDby4sIEx0ZC5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9SZW1hcmtMaW5rPlxuICAgICAgICAgIDwvVGV4dENvbnRhaW5lcj5cbiAgICAgICAgPC9EZXRhaWxDb250YWluZXI+XG4gICAgICAgIDxUaW1lbGluZUNvbnRhaW5lcj5cbiAgICAgICAgICA8VGltZWxpbmVXcmFwcGVyPlxuICAgICAgICAgICAgPFRpbWVsaW5lIGlzU2hvd1RpbWVsaW5lPXtpc1Nob3dUaW1lbGluZX0gLz5cbiAgICAgICAgICA8L1RpbWVsaW5lV3JhcHBlcj5cbiAgICAgICAgPC9UaW1lbGluZUNvbnRhaW5lcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQ29udGVudENvbnRhaW5lcj5cbiAgKVxufVxuXG5jb25zdCBIaWxpZ2h0VGV4dCA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogIzQ1N2M3YTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDQ2cHg7XG5gXG5cbmNvbnN0IFJlbWFya0xpbmsgPSBzdHlsZWQuc3BhbmBcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAxLjJzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke0NPTlNUQU5ULnNjcmVlblNpemUuc21hbGx9cHgpIHtcbiAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcbiAgICBib3R0b206IC04cHg7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjMmQyZDJiO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDEuNXMgZWFzZSAwcywgbGVmdCAxLjVzIGVhc2UgMHM7XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICAmOmhvdmVyOjphZnRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgfVxuYFxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYFxuXG5jb25zdCBEZXRhaWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXI7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke0NPTlNUQU5ULnNjcmVlblNpemUuc21hbGx9cHgpIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cbmBcblxuY29uc3QgVGltZWxpbmVDb250YWluZXIgPSBzdHlsZWQoRGV0YWlsQ29udGFpbmVyKWBcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuYFxuXG5jb25zdCBUaW1lbGluZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7Q09OU1RBTlQuc2NyZWVuU2l6ZS5zbWFsbH1weCkge1xuICAgIG1pbi13aWR0aDogMTAyNHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbmBcblxuY29uc3QgVGV4dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7Q09OU1RBTlQuc2NyZWVuU2l6ZS5zbWFsbH1weCkge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuYFxuXG5jb25zdCBMaW5lID0gc3R5bGVkLnNwYW5gXG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/About.js\n");

/***/ })

})