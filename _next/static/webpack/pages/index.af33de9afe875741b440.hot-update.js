webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/About.js":
/*!************************!*\
  !*** ./pages/About.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_components_Layout_DetailLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Layout/DetailLayout */ \"./src/components/Layout/DetailLayout.jsx\");\n/* harmony import */ var _src_components_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Timeline/Timeline */ \"./src/components/Timeline/Timeline.js\");\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/constants */ \"./src/constants/index.js\");\n\n\nvar _jsxFileName = \"/Users/khathawut/Documents/My works/Portfolio/portfolio/pages/About.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar About = function About(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShowTimeline = _useState[0],\n      setIsShowTimeline = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var listenScroll = function listenScroll(e) {\n      var scrollTop = e.target.scrollTop;\n      var scrollHeight = e.target.scrollHeight;\n      var clientHeight = e.target.clientHeight;\n\n      if (scrollTop + clientHeight >= scrollHeight - 5) {\n        setIsShowTimeline(true);\n      }\n    };\n\n    window.addEventListener('scroll', listenScroll, true);\n\n    if (isShowTimeline) {\n      window.removeEventListener('scroll', listenScroll, true);\n    }\n\n    return function () {\n      return window.removeEventListener('scroll', listenScroll, true);\n    };\n  }, [isShowTimeline]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Layout_DetailLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DetailContainer, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TextContainer, {\n          children: [\"Lorem ipsum dolor sit amet, pri ea duis probo alterum,\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, _this), \"vis ut movet omittam. Vix odio posse mazim ne,\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this), \"pri equidem accusamus salutatus ei. Alterum delenit at eam.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, _this), \"Nec ceteros placerat in. Apeirian hendrerit id has.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TimelineContainer, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Test, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            isShowTimeline: isShowTimeline\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(About, \"YwGa756Vg5zqdVbAmkfKMIdY1Y4=\");\n\n_c = About;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__Container\",\n  componentId: \"j1i91q-0\"\n})([\"width:100%;position:relative;\"]);\n_c2 = Container;\nvar DetailContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__DetailContainer\",\n  componentId: \"j1i91q-1\"\n})([\"position:relative;width:100%;height:calc(var(--vh,1vh) * 100);display:flex;align-items:center;padding:0 40px;scroll-snap-align:center;\"]);\n_c3 = DetailContainer;\nvar TimelineContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(DetailContainer).withConfig({\n  displayName: \"About__TimelineContainer\",\n  componentId: \"j1i91q-2\"\n})([\"max-width:100vw;overflow-x:scroll;\"]);\n_c4 = TimelineContainer;\nvar Test = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__Test\",\n  componentId: \"j1i91q-3\"\n})([\"min-width:100%;position:relative;@media only screen and (max-width:\", \"px){min-width:1000px;padding-right:20px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c5 = Test;\nvar TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"About__TextContainer\",\n  componentId: \"j1i91q-4\"\n})([\"font-size:42px;line-height:1.6;@media only screen and (max-width:\", \"px){font-size:24px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c6 = TextContainer;\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.withConfig({\n  displayName: \"About__Line\",\n  componentId: \"j1i91q-5\"\n})([\"width:100%;border-bottom:2px solid;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"About\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"DetailContainer\");\n$RefreshReg$(_c4, \"TimelineContainer\");\n$RefreshReg$(_c5, \"Test\");\n$RefreshReg$(_c6, \"TextContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQWJvdXQuanM/M2Q5NCJdLCJuYW1lcyI6WyJBYm91dCIsInByb3BzIiwidXNlU3RhdGUiLCJpc1Nob3dUaW1lbGluZSIsInNldElzU2hvd1RpbWVsaW5lIiwidXNlRWZmZWN0IiwibGlzdGVuU2Nyb2xsIiwiZSIsInNjcm9sbFRvcCIsInRhcmdldCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiRGV0YWlsQ29udGFpbmVyIiwiVGltZWxpbmVDb250YWluZXIiLCJUZXN0IiwiQ09OU1RBTlQiLCJzY3JlZW5TaXplIiwic21hbGwiLCJUZXh0Q29udGFpbmVyIiwiTGluZSIsInNwYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ3FCQyxzREFBUSxDQUFDLEtBQUQsQ0FEN0I7QUFBQSxNQUNoQkMsY0FEZ0I7QUFBQSxNQUNBQyxpQkFEQTs7QUFFdkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUMxQixVQUFNQyxTQUFTLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTRCxTQUEzQjtBQUNBLFVBQU1FLFlBQVksR0FBR0gsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLFlBQTlCO0FBQ0EsVUFBTUMsWUFBWSxHQUFHSixDQUFDLENBQUNFLE1BQUYsQ0FBU0UsWUFBOUI7O0FBRUEsVUFBSUgsU0FBUyxHQUFHRyxZQUFaLElBQTRCRCxZQUFZLEdBQUcsQ0FBL0MsRUFBa0Q7QUFDaEROLHlCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDRDtBQUNGLEtBUkQ7O0FBVUFRLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NQLFlBQWxDLEVBQWdELElBQWhEOztBQUVBLFFBQUlILGNBQUosRUFBb0I7QUFDbEJTLFlBQU0sQ0FBQ0UsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNSLFlBQXJDLEVBQW1ELElBQW5EO0FBQ0Q7O0FBRUQsV0FBTztBQUFBLGFBQU1NLE1BQU0sQ0FBQ0UsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNSLFlBQXJDLEVBQW1ELElBQW5ELENBQU47QUFBQSxLQUFQO0FBQ0QsR0FsQlEsRUFrQk4sQ0FBQ0gsY0FBRCxDQWxCTSxDQUFUO0FBb0JBLHNCQUNFLHFFQUFDLDJFQUFEO0FBQUEsMkJBQ0UscUVBQUMsU0FBRDtBQUFBLDhCQUNFLHFFQUFDLGVBQUQ7QUFBQSwrQkFDRSxxRUFBQyxhQUFEO0FBQUEsNEZBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixpRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLDhFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBWUUscUVBQUMsaUJBQUQ7QUFBQSwrQkFDRSxxRUFBQyxJQUFEO0FBQUEsaUNBQ0UscUVBQUMseUVBQUQ7QUFBVSwwQkFBYyxFQUFFQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0E1Q0Q7O0dBQU1ILEs7O0tBQUFBLEs7QUE4Q04sSUFBTWUsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFDQUFmO01BQU1GLFM7QUFLTixJQUFNRyxlQUFlLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOElBQXJCO01BQU1DLGU7QUFVTixJQUFNQyxpQkFBaUIsR0FBR0gsaUVBQU0sQ0FBQ0UsZUFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDBDQUF2QjtNQUFNQyxpQjtBQU1OLElBQU1DLElBQUksR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5SEFJNkJJLHNEQUFRLENBQUNDLFVBQVQsQ0FBb0JDLEtBSmpELENBQVY7TUFBTUgsSTtBQVVOLElBQU1JLGFBQWEsR0FBR1IseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxrR0FJb0JJLHNEQUFRLENBQUNDLFVBQVQsQ0FBb0JDLEtBSnhDLENBQW5CO01BQU1DLGE7QUFTTixJQUFNQyxJQUFJLEdBQUdULHlEQUFNLENBQUNVLElBQVY7QUFBQTtBQUFBO0FBQUEsMkNBQVY7QUFLZTFCLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvQWJvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IENvbnRlbnRDb250YWluZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0RldGFpbExheW91dCdcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS9UaW1lbGluZSdcbmltcG9ydCBDT05TVEFOVCBmcm9tICcuLi9zcmMvY29uc3RhbnRzJ1xuXG5jb25zdCBBYm91dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaXNTaG93VGltZWxpbmUsIHNldElzU2hvd1RpbWVsaW5lXSA9IHVzZVN0YXRlKGZhbHNlKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxpc3RlblNjcm9sbCA9IChlKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSBlLnRhcmdldC5zY3JvbGxUb3BcbiAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGUudGFyZ2V0LnNjcm9sbEhlaWdodFxuICAgICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gZS50YXJnZXQuY2xpZW50SGVpZ2h0XG5cbiAgICAgIGlmIChzY3JvbGxUb3AgKyBjbGllbnRIZWlnaHQgPj0gc2Nyb2xsSGVpZ2h0IC0gNSkge1xuICAgICAgICBzZXRJc1Nob3dUaW1lbGluZSh0cnVlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBsaXN0ZW5TY3JvbGwsIHRydWUpXG5cbiAgICBpZiAoaXNTaG93VGltZWxpbmUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBsaXN0ZW5TY3JvbGwsIHRydWUpXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBsaXN0ZW5TY3JvbGwsIHRydWUpXG4gIH0sIFtpc1Nob3dUaW1lbGluZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGVudENvbnRhaW5lcj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxEZXRhaWxDb250YWluZXI+XG4gICAgICAgICAgPFRleHRDb250YWluZXI+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgcHJpIGVhIGR1aXMgcHJvYm8gYWx0ZXJ1bSxcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgdmlzIHV0IG1vdmV0IG9taXR0YW0uIFZpeCBvZGlvIHBvc3NlIG1hemltIG5lLFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBwcmkgZXF1aWRlbSBhY2N1c2FtdXMgc2FsdXRhdHVzIGVpLiBBbHRlcnVtIGRlbGVuaXQgYXQgZWFtLlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBOZWMgY2V0ZXJvcyBwbGFjZXJhdCBpbi4gQXBlaXJpYW4gaGVuZHJlcml0IGlkIGhhcy5cbiAgICAgICAgICA8L1RleHRDb250YWluZXI+XG4gICAgICAgIDwvRGV0YWlsQ29udGFpbmVyPlxuICAgICAgICA8VGltZWxpbmVDb250YWluZXI+XG4gICAgICAgICAgPFRlc3Q+XG4gICAgICAgICAgICA8VGltZWxpbmUgaXNTaG93VGltZWxpbmU9e2lzU2hvd1RpbWVsaW5lfSAvPlxuICAgICAgICAgIDwvVGVzdD5cbiAgICAgICAgPC9UaW1lbGluZUNvbnRhaW5lcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQ29udGVudENvbnRhaW5lcj5cbiAgKVxufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYFxuXG5jb25zdCBEZXRhaWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXI7XG5gXG5cbmNvbnN0IFRpbWVsaW5lQ29udGFpbmVyID0gc3R5bGVkKERldGFpbENvbnRhaW5lcilgXG4gIC8qIG1pbi13aWR0aDogMTAyNHB4OyAqL1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG5gXG5cbmNvbnN0IFRlc3QgPSBzdHlsZWQuZGl2YFxuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7Q09OU1RBTlQuc2NyZWVuU2l6ZS5zbWFsbH1weCkge1xuICAgIG1pbi13aWR0aDogMTAwMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbmBcblxuY29uc3QgVGV4dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7Q09OU1RBTlQuc2NyZWVuU2l6ZS5zbWFsbH1weCkge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuYFxuXG5jb25zdCBMaW5lID0gc3R5bGVkLnNwYW5gXG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/About.js\n");

/***/ })

})