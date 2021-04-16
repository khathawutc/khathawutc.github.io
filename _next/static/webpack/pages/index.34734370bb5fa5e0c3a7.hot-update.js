webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/Works.js":
/*!************************!*\
  !*** ./pages/Works.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-tools */ \"./node_modules/styled-tools/dist/es/index.js\");\n/* harmony import */ var _src_components_Layout_DetailLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Layout/DetailLayout */ \"./src/components/Layout/DetailLayout.jsx\");\n/* harmony import */ var _src_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Pagination/Pagination */ \"./src/components/Pagination/Pagination.jsx\");\n/* harmony import */ var _work_detail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work-detail */ \"./pages/work-detail.js\");\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/constants */ \"./src/constants/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/khathawut/Documents/My works/Portfolio/portfolio/pages/Works.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar worksData = [{\n  id: 1,\n  title: 'senior project',\n  description: 'Lorem ipsum dolor sit amet, pri ea duis probo alterum,',\n  stackList: '#React-Native, #MongoDB',\n  coverImg: '/images/senior_cover_2.png'\n}, {\n  id: 2,\n  title: 'Actis',\n  description: 'Lorem ipsum dolor sit amet, pri ea duis probo alterum,',\n  stackList: '#NodeJs, #MongoDB',\n  coverImg: '/images/actis_cover_4.png'\n}];\n\nvar Works = function Works(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      workId = _useState[0],\n      setWorkId = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isFadeOut = _useState2[0],\n      setIsFadeOut = _useState2[1];\n\n  var handleClickDetail = function handleClickDetail(id) {\n    setIsFadeOut(true);\n    setTimeout(function () {\n      setWorkId(id);\n      setIsFadeOut(false);\n    }, 500);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_work_detail__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      workId: workId,\n      handleWorkId: setWorkId\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Layout_DetailLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      isHide: workId !== 0,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n        children: worksData.map(function (work, idx) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(WorkContainer, {\n            onClick: function onClick() {\n              return handleClickDetail(work.id);\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(WorkCardContainer, {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LeftContainer, {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TitleContainer, {\n                    children: work === null || work === void 0 ? void 0 : work.title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 48,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DescriptionContainer, {\n                    children: work === null || work === void 0 ? void 0 : work.description\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 49,\n                    columnNumber: 21\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 47,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StackContainer, {\n                  children: work === null || work === void 0 ? void 0 : work.stackList\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 53,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ImageContainer, {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ImageWork, {\n                  src: work === null || work === void 0 ? void 0 : work.coverImg,\n                  alt: work === null || work === void 0 ? void 0 : work.title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 56,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RightContainer, {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SmallText, {\n                  children: \"view\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 59,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 60,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SmallText, {\n                  children: \"project\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 61,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n              idx: idx + 1,\n              listLength: worksData.length\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Works, \"i+a6KTzEcMF6qSlqp+OsZGpew34=\");\n\n_c = Works;\nvar ImageWork = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img.withConfig({\n  displayName: \"Works__ImageWork\",\n  componentId: \"sc-1seb4ea-0\"\n})([\"width:100%;height:100%;object-fit:cover;transition:transform 1.2s;&:hover{transform:scale(1.05);}\"]);\n_c2 = ImageWork;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__Container\",\n  componentId: \"sc-1seb4ea-1\"\n})([\"width:100%;position:relative;opacity:\", \";transition:opacity 2s ease 0s;\"], Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__[\"ifProp\"])('isFadeOut', 0, 1));\n_c3 = Container;\nvar WorkContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__WorkContainer\",\n  componentId: \"sc-1seb4ea-2\"\n})([\"position:relative;width:100%;height:100vh;display:flex;padding:0 40px;align-items:center;scroll-snap-align:center;justify-content:center;@media only screen and (max-width:\", \"px){flex-direction:row;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_7__[\"default\"].screenSize.small);\n_c4 = WorkContainer;\nvar Arrow = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__Arrow\",\n  componentId: \"sc-1seb4ea-3\"\n})([\"background:#2d2d2b;height:1px;width:40px;margin:22px auto;position:relative;cursor:pointer;transition:width 1s ease 0s;&:before,&:after{content:'';background:#2d2d2b;position:absolute;height:1px;width:8px;}&:before{right:-1px;bottom:-3px;transform:rotate(-45deg);}&:after{right:-1px;top:-3px;transform:rotate(45deg);}\"]);\n_c5 = Arrow;\nvar LeftContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__LeftContainer\",\n  componentId: \"sc-1seb4ea-4\"\n})([\"width:25%;height:100%;display:flex;flex-direction:column;justify-content:space-between;\"]);\n_c6 = LeftContainer;\nvar RightContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__RightContainer\",\n  componentId: \"sc-1seb4ea-5\"\n})([\"width:15%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;\"]);\n_c7 = RightContainer;\nvar TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__TitleContainer\",\n  componentId: \"sc-1seb4ea-6\"\n})([\"font-size:28px;text-transform:uppercase;margin-bottom:24px;\"]);\n_c8 = TitleContainer;\nvar DescriptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__DescriptionContainer\",\n  componentId: \"sc-1seb4ea-7\"\n})([\"font-size:16px;margin-bottom:18px;\"]);\n_c9 = DescriptionContainer;\nvar StackContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__StackContainer\",\n  componentId: \"sc-1seb4ea-8\"\n})([\"font-size:16px;margin-top:18px;\"]);\n_c10 = StackContainer;\nvar SmallText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__SmallText\",\n  componentId: \"sc-1seb4ea-9\"\n})([\"font-size:14px;font-style:italic;opacity:0;transition:opacity 1s ease 0s;\"]);\n_c11 = SmallText;\nvar ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__ImageContainer\",\n  componentId: \"sc-1seb4ea-10\"\n})([\"width:60%;height:100%;overflow:hidden;\"]);\n_c12 = ImageContainer;\nvar WorkCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__WorkCardContainer\",\n  componentId: \"sc-1seb4ea-11\"\n})([\"cursor:pointer;width:100%;height:55vh;position:relative;display:flex;flex-direction:row;padding:0 40px;&:hover{\", \"{width:80px;transition:width 1s ease 0s;}\", \"{opacity:1;transition:opacity 2s ease 0s;}}\"], Arrow, SmallText);\n_c13 = WorkCardContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Works);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;\n\n$RefreshReg$(_c, \"Works\");\n$RefreshReg$(_c2, \"ImageWork\");\n$RefreshReg$(_c3, \"Container\");\n$RefreshReg$(_c4, \"WorkContainer\");\n$RefreshReg$(_c5, \"Arrow\");\n$RefreshReg$(_c6, \"LeftContainer\");\n$RefreshReg$(_c7, \"RightContainer\");\n$RefreshReg$(_c8, \"TitleContainer\");\n$RefreshReg$(_c9, \"DescriptionContainer\");\n$RefreshReg$(_c10, \"StackContainer\");\n$RefreshReg$(_c11, \"SmallText\");\n$RefreshReg$(_c12, \"ImageContainer\");\n$RefreshReg$(_c13, \"WorkCardContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV29ya3MuanM/MDMwZSJdLCJuYW1lcyI6WyJ3b3Jrc0RhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGFja0xpc3QiLCJjb3ZlckltZyIsIldvcmtzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIndvcmtJZCIsInNldFdvcmtJZCIsImlzRmFkZU91dCIsInNldElzRmFkZU91dCIsImhhbmRsZUNsaWNrRGV0YWlsIiwic2V0VGltZW91dCIsIm1hcCIsIndvcmsiLCJpZHgiLCJsZW5ndGgiLCJJbWFnZVdvcmsiLCJzdHlsZWQiLCJpbWciLCJDb250YWluZXIiLCJkaXYiLCJpZlByb3AiLCJXb3JrQ29udGFpbmVyIiwiQ09OU1RBTlQiLCJzY3JlZW5TaXplIiwic21hbGwiLCJBcnJvdyIsIkxlZnRDb250YWluZXIiLCJSaWdodENvbnRhaW5lciIsIlRpdGxlQ29udGFpbmVyIiwiRGVzY3JpcHRpb25Db250YWluZXIiLCJTdGFja0NvbnRhaW5lciIsIlNtYWxsVGV4dCIsIkltYWdlQ29udGFpbmVyIiwiV29ya0NhcmRDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLENBQ2hCO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSxnQkFGVDtBQUdFQyxhQUFXLEVBQUUsd0RBSGY7QUFJRUMsV0FBUyxFQUFFLHlCQUpiO0FBS0VDLFVBQVEsRUFBRTtBQUxaLENBRGdCLEVBUWhCO0FBQ0VKLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSxPQUZUO0FBR0VDLGFBQVcsRUFBRSx3REFIZjtBQUlFQyxXQUFTLEVBQUUsbUJBSmI7QUFLRUMsVUFBUSxFQUFFO0FBTFosQ0FSZ0IsQ0FBbEI7O0FBaUJBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFB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QUF2QjtPQUFNRSxpQjtBQXNCUy9CLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvV29ya3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGlmUHJvcCB9IGZyb20gJ3N0eWxlZC10b29scydcbmltcG9ydCBDb250ZW50Q29udGFpbmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0xheW91dC9EZXRhaWxMYXlvdXQnXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uL1BhZ2luYXRpb24nXG5pbXBvcnQgV29ya0RldGFpbCBmcm9tICcuL3dvcmstZGV0YWlsJ1xuaW1wb3J0IENPTlNUQU5UIGZyb20gJy4uL3NyYy9jb25zdGFudHMnXG5cbmNvbnN0IHdvcmtzRGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiAnc2VuaW9yIHByb2plY3QnLFxuICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIHByaSBlYSBkdWlzIHByb2JvIGFsdGVydW0sJyxcbiAgICBzdGFja0xpc3Q6ICcjUmVhY3QtTmF0aXZlLCAjTW9uZ29EQicsXG4gICAgY292ZXJJbWc6ICcvaW1hZ2VzL3Nlbmlvcl9jb3Zlcl8yLnBuZycsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogJ0FjdGlzJyxcbiAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBwcmkgZWEgZHVpcyBwcm9ibyBhbHRlcnVtLCcsXG4gICAgc3RhY2tMaXN0OiAnI05vZGVKcywgI01vbmdvREInLFxuICAgIGNvdmVySW1nOiAnL2ltYWdlcy9hY3Rpc19jb3Zlcl80LnBuZycsXG4gIH0sXG5dXG5cbmNvbnN0IFdvcmtzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFt3b3JrSWQsIHNldFdvcmtJZF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbaXNGYWRlT3V0LCBzZXRJc0ZhZGVPdXRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tEZXRhaWwgPSAoaWQpID0+IHtcbiAgICBzZXRJc0ZhZGVPdXQodHJ1ZSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFdvcmtJZChpZClcbiAgICAgIHNldElzRmFkZU91dChmYWxzZSlcbiAgICB9LCA1MDApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8V29ya0RldGFpbCB3b3JrSWQ9e3dvcmtJZH0gaGFuZGxlV29ya0lkPXtzZXRXb3JrSWR9IC8+XG4gICAgICA8Q29udGVudENvbnRhaW5lciBpc0hpZGU9e3dvcmtJZCAhPT0gMH0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAge3dvcmtzRGF0YS5tYXAoKHdvcmssIGlkeCkgPT4gKFxuICAgICAgICAgICAgPFdvcmtDb250YWluZXIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2tEZXRhaWwod29yay5pZCl9PlxuICAgICAgICAgICAgICA8V29ya0NhcmRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPExlZnRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVDb250YWluZXI+e3dvcms/LnRpdGxlfTwvVGl0bGVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICB7d29yaz8uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvRGVzY3JpcHRpb25Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxTdGFja0NvbnRhaW5lcj57d29yaz8uc3RhY2tMaXN0fTwvU3RhY2tDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9MZWZ0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVdvcmsgc3JjPXt3b3JrPy5jb3ZlckltZ30gYWx0PXt3b3JrPy50aXRsZX0gLz5cbiAgICAgICAgICAgICAgICA8L0ltYWdlQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxSaWdodENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxTbWFsbFRleHQ+dmlldzwvU21hbGxUZXh0PlxuICAgICAgICAgICAgICAgICAgPEFycm93IC8+XG4gICAgICAgICAgICAgICAgICA8U21hbGxUZXh0PnByb2plY3Q8L1NtYWxsVGV4dD5cbiAgICAgICAgICAgICAgICA8L1JpZ2h0Q29udGFpbmVyPlxuICAgICAgICAgICAgICA8L1dvcmtDYXJkQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBpZHg9e2lkeCArIDF9IGxpc3RMZW5ndGg9e3dvcmtzRGF0YS5sZW5ndGh9IC8+XG4gICAgICAgICAgICA8L1dvcmtDb250YWluZXI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Db250ZW50Q29udGFpbmVyPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IEltYWdlV29yayA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4ycztcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB9XG5gXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgb3BhY2l0eTogJHtpZlByb3AoJ2lzRmFkZU91dCcsIDAsIDEpfTtcblxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzIGVhc2UgMHM7XG5gXG5cbmNvbnN0IFdvcmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtDT05TVEFOVC5zY3JlZW5TaXplLnNtYWxsfXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuYFxuXG5jb25zdCBBcnJvdyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICMyZDJkMmI7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luOiAyMnB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlIDBzO1xuXG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kOiAjMmQyZDJiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogOHB4O1xuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIHJpZ2h0OiAtMXB4O1xuICAgIGJvdHRvbTogLTNweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG5cbiAgJjphZnRlciB7XG4gICAgcmlnaHQ6IC0xcHg7XG4gICAgdG9wOiAtM3B4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuYFxuXG5jb25zdCBMZWZ0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gXG5jb25zdCBSaWdodENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmBcblxuY29uc3QgVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDI4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG5gXG5cbmNvbnN0IERlc2NyaXB0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuYFxuXG5jb25zdCBTdGFja0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMThweDtcbmBcblxuY29uc3QgU21hbGxUZXh0ID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSAwcztcbmBcblxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gXG5cbmNvbnN0IFdvcmtDYXJkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NXZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDAgNDBweDtcblxuICAmOmhvdmVyIHtcbiAgICAke0Fycm93fSB7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDFzIGVhc2UgMHM7XG4gICAgfVxuXG4gICAgJHtTbWFsbFRleHR9IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzIGVhc2UgMHM7XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Works.js\n");

/***/ })

})