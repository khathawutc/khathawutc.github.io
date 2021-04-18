webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/About.js":
/*!************************!*\
  !*** ./pages/About.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_components_Layout_DetailLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Layout/DetailLayout */ \"./src/components/Layout/DetailLayout.jsx\");\n/* harmony import */ var _src_components_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Timeline/Timeline */ \"./src/components/Timeline/Timeline.js\");\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/constants */ \"./src/constants/index.js\");\n\n\nvar _jsxFileName = \"/Users/khathawut/Documents/My works/Portfolio/portfolio/pages/About.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar About = function About(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShowTimeline = _useState[0],\n      setIsShowTimeline = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var listenScroll = function listenScroll(e) {\n      var scrollTop = e.target.scrollTop;\n      var scrollHeight = e.target.scrollHeight;\n      var clientHeight = e.target.clientHeight;\n\n      if (scrollTop + clientHeight >= scrollHeight - 5) {\n        setIsShowTimeline(true);\n      }\n    };\n\n    window.addEventListener('scroll', listenScroll, true);\n\n    if (isShowTimeline) {\n      window.removeEventListener('scroll', listenScroll, true);\n    }\n\n    return function () {\n      return window.removeEventListener('scroll', listenScroll, true);\n    };\n  }, [isShowTimeline]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Layout_DetailLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DetailContainer, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TextContainer, {\n          children: [\"My name is Khathawut ,\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, _this), \"born on the 7th of March 1997.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this), \"I'm Web developer located at Bangkok.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, _this), \"Experience with React and Express\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this), \"interested in Devo\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TimelineContainer, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TimelineWrapper, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            isShowTimeline: isShowTimeline\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(About, \"YwGa756Vg5zqdVbAmkfKMIdY1Y4=\");\n\n_c = About;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__Container\",\n  componentId: \"j1i91q-0\"\n})([\"width:100%;position:relative;\"]);\n_c2 = Container;\nvar DetailContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__DetailContainer\",\n  componentId: \"j1i91q-1\"\n})([\"position:relative;width:100%;height:calc(var(--vh,1vh) * 100);display:flex;align-items:center;padding:0 40px;scroll-snap-align:center;@media only screen and (max-width:\", \"px){padding:0 20px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c3 = DetailContainer;\nvar TimelineContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(DetailContainer).withConfig({\n  displayName: \"About__TimelineContainer\",\n  componentId: \"j1i91q-2\"\n})([\"max-width:100vw;overflow-x:scroll;\"]);\n_c4 = TimelineContainer;\nvar TimelineWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__TimelineWrapper\",\n  componentId: \"j1i91q-3\"\n})([\"min-width:100%;position:relative;@media only screen and (max-width:\", \"px){min-width:1024px;padding-right:20px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c5 = TimelineWrapper;\nvar TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__TextContainer\",\n  componentId: \"j1i91q-4\"\n})([\"font-size:42px;line-height:1.6;@media only screen and (max-width:\", \"px){font-size:24px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c6 = TextContainer;\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.withConfig({\n  displayName: \"About__Line\",\n  componentId: \"j1i91q-5\"\n})([\"width:100%;border-bottom:2px solid;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"About\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"DetailContainer\");\n$RefreshReg$(_c4, \"TimelineContainer\");\n$RefreshReg$(_c5, \"TimelineWrapper\");\n$RefreshReg$(_c6, \"TextContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQWJvdXQuanM/M2Q5NCJdLCJuYW1lcyI6WyJBYm91dCIsInByb3BzIiwidXNlU3RhdGUiLCJpc1Nob3dUaW1lbGluZSIsInNldElzU2hvd1RpbWVsaW5lIiwidXNlRWZmZWN0IiwibGlzdGVuU2Nyb2xsIiwiZSIsInNjcm9sbFRvcCIsInRhcmdldCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiRGV0YWlsQ29udGFpbmVyIiwiQ09OU1RBTlQiLCJzY3JlZW5TaXplIiwic21hbGwiLCJUaW1lbGluZUNvbnRhaW5lciIsIlRpbWVsaW5lV3JhcHBlciIsIlRleHRDb250YWluZXIiLCJMaW5lIiwic3BhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDcUJDLHNEQUFRLENBQUMsS0FBRCxDQUQ3QjtBQUFBLE1BQ2hCQyxjQURnQjtBQUFBLE1BQ0FDLGlCQURBOztBQUV2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCLFVBQU1DLFNBQVMsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNELFNBQTNCO0FBQ0EsVUFBTUUsWUFBWSxHQUFHSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsWUFBOUI7QUFDQSxVQUFNQyxZQUFZLEdBQUdKLENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxZQUE5Qjs7QUFFQSxVQUFJSCxTQUFTLEdBQUdHLFlBQVosSUFBNEJELFlBQVksR0FBRyxDQUEvQyxFQUFrRDtBQUNoRE4seUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNEO0FBQ0YsS0FSRDs7QUFVQVEsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1AsWUFBbEMsRUFBZ0QsSUFBaEQ7O0FBRUEsUUFBSUgsY0FBSixFQUFvQjtBQUNsQlMsWUFBTSxDQUFDRSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1IsWUFBckMsRUFBbUQsSUFBbkQ7QUFDRDs7QUFFRCxXQUFPO0FBQUEsYUFBTU0sTUFBTSxDQUFDRSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1IsWUFBckMsRUFBbUQsSUFBbkQsQ0FBTjtBQUFBLEtBQVA7QUFDRCxHQWxCUSxFQWtCTixDQUFDSCxjQUFELENBbEJNLENBQVQ7QUFvQkEsc0JBQ0UscUVBQUMsMkVBQUQ7QUFBQSwyQkFDRSxxRUFBQyxTQUFEO0FBQUEsOEJBQ0UscUVBQUMsZUFBRDtBQUFBLCtCQUNFLHFFQUFDLGFBQUQ7QUFBQSw0REFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGlEQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsd0RBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixvREFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWNFLHFFQUFDLGlCQUFEO0FBQUEsK0JBQ0UscUVBQUMsZUFBRDtBQUFBLGlDQUNFLHFFQUFDLHlFQUFEO0FBQVUsMEJBQWMsRUFBRUE7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0JELENBOUNEOztHQUFNSCxLOztLQUFBQSxLO0FBZ0ROLElBQU1lLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxQ0FBZjtNQUFNRixTO0FBS04sSUFBTUcsZUFBZSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlNQVNrQkUsc0RBQVEsQ0FBQ0MsVUFBVCxDQUFvQkMsS0FUdEMsQ0FBckI7TUFBTUgsZTtBQWNOLElBQU1JLGlCQUFpQixHQUFHTixpRUFBTSxDQUFDRSxlQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsMENBQXZCO01BQU1JLGlCO0FBS04sSUFBTUMsZUFBZSxHQUFHUCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlIQUlrQkUsc0RBQVEsQ0FBQ0MsVUFBVCxDQUFvQkMsS0FKdEMsQ0FBckI7TUFBTUUsZTtBQVVOLElBQU1DLGFBQWEsR0FBR1IseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxrR0FJb0JFLHNEQUFRLENBQUNDLFVBQVQsQ0FBb0JDLEtBSnhDLENBQW5CO01BQU1HLGE7QUFTTixJQUFNQyxJQUFJLEdBQUdULHlEQUFNLENBQUNVLElBQVY7QUFBQTtBQUFBO0FBQUEsMkNBQVY7QUFLZTFCLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvQWJvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IENvbnRlbnRDb250YWluZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0RldGFpbExheW91dCdcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS9UaW1lbGluZSdcbmltcG9ydCBDT05TVEFOVCBmcm9tICcuLi9zcmMvY29uc3RhbnRzJ1xuXG5jb25zdCBBYm91dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaXNTaG93VGltZWxpbmUsIHNldElzU2hvd1RpbWVsaW5lXSA9IHVzZVN0YXRlKGZhbHNlKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxpc3RlblNjcm9sbCA9IChlKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSBlLnRhcmdldC5zY3JvbGxUb3BcbiAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGUudGFyZ2V0LnNjcm9sbEhlaWdodFxuICAgICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gZS50YXJnZXQuY2xpZW50SGVpZ2h0XG5cbiAgICAgIGlmIChzY3JvbGxUb3AgKyBjbGllbnRIZWlnaHQgPj0gc2Nyb2xsSGVpZ2h0IC0gNSkge1xuICAgICAgICBzZXRJc1Nob3dUaW1lbGluZSh0cnVlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBsaXN0ZW5TY3JvbGwsIHRydWUpXG5cbiAgICBpZiAoaXNTaG93VGltZWxpbmUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBsaXN0ZW5TY3JvbGwsIHRydWUpXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBsaXN0ZW5TY3JvbGwsIHRydWUpXG4gIH0sIFtpc1Nob3dUaW1lbGluZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGVudENvbnRhaW5lcj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxEZXRhaWxDb250YWluZXI+XG4gICAgICAgICAgPFRleHRDb250YWluZXI+XG4gICAgICAgICAgICBNeSBuYW1lIGlzIEtoYXRoYXd1dCAsXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIGJvcm4gb24gdGhlIDd0aCBvZiBNYXJjaCAxOTk3LlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBJJ20gV2ViIGRldmVsb3BlciBsb2NhdGVkIGF0IEJhbmdrb2suXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIEV4cGVyaWVuY2Ugd2l0aCBSZWFjdCBhbmQgRXhwcmVzc1xuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBpbnRlcmVzdGVkIGluIERldm9cbiAgICAgICAgICA8L1RleHRDb250YWluZXI+XG4gICAgICAgIDwvRGV0YWlsQ29udGFpbmVyPlxuICAgICAgICA8VGltZWxpbmVDb250YWluZXI+XG4gICAgICAgICAgPFRpbWVsaW5lV3JhcHBlcj5cbiAgICAgICAgICAgIDxUaW1lbGluZSBpc1Nob3dUaW1lbGluZT17aXNTaG93VGltZWxpbmV9IC8+XG4gICAgICAgICAgPC9UaW1lbGluZVdyYXBwZXI+XG4gICAgICAgIDwvVGltZWxpbmVDb250YWluZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0NvbnRlbnRDb250YWluZXI+XG4gIClcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmBcblxuY29uc3QgRGV0YWlsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtDT05TVEFOVC5zY3JlZW5TaXplLnNtYWxsfXB4KSB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG5gXG5cbmNvbnN0IFRpbWVsaW5lQ29udGFpbmVyID0gc3R5bGVkKERldGFpbENvbnRhaW5lcilgXG4gIG1heC13aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbmBcblxuY29uc3QgVGltZWxpbmVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke0NPTlNUQU5ULnNjcmVlblNpemUuc21hbGx9cHgpIHtcbiAgICBtaW4td2lkdGg6IDEwMjRweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG5gXG5cbmNvbnN0IFRleHRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke0NPTlNUQU5ULnNjcmVlblNpemUuc21hbGx9cHgpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbmBcblxuY29uc3QgTGluZSA9IHN0eWxlZC5zcGFuYFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBBYm91dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/About.js\n");

/***/ })

})