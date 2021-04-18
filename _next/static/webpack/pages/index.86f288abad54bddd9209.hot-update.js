webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/Works.js":
/*!************************!*\
  !*** ./pages/Works.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-tools */ \"./node_modules/styled-tools/dist/es/index.js\");\n/* harmony import */ var _src_components_Layout_DetailLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Layout/DetailLayout */ \"./src/components/Layout/DetailLayout.jsx\");\n/* harmony import */ var _src_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Pagination/Pagination */ \"./src/components/Pagination/Pagination.jsx\");\n/* harmony import */ var _work_detail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work-detail */ \"./pages/work-detail.js\");\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/constants */ \"./src/constants/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/khathawut/Documents/My works/Portfolio/portfolio/pages/Works.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar worksData = [{\n  id: 1,\n  title: 'senior project',\n  description: 'Travel budget calculator and planner Mobile Application',\n  stackList: '#React-Native, #MongoDB',\n  coverImg: '/images/senior_cover_2.png'\n}, {\n  id: 2,\n  title: 'Actis',\n  description: 'Event management website',\n  stackList: '#NodeJs, #MongoDB',\n  coverImg: '/images/actis_cover_4.png'\n}];\n\nvar Works = function Works(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      workId = _useState[0],\n      setWorkId = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isFadeOut = _useState2[0],\n      setIsFadeOut = _useState2[1];\n\n  var handleClickDetail = function handleClickDetail(id) {\n    setIsFadeOut(true);\n    setTimeout(function () {\n      setWorkId(id);\n      setIsFadeOut(false);\n    }, 500);\n  };\n\n  console.log({\n    workId: workId,\n    isHide: workId !== 0\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_work_detail__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      workId: workId,\n      handleWorkId: setWorkId\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Layout_DetailLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      isHide: workId !== 0,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n        children: worksData.map(function (work, idx) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(WorkContainer, {\n            onClick: function onClick() {\n              return handleClickDetail(work.id);\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(WorkCardContainer, {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LeftContainer, {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TitleContainer, {\n                    children: work === null || work === void 0 ? void 0 : work.title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 50,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DescriptionContainer, {\n                    children: work === null || work === void 0 ? void 0 : work.description\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 51,\n                    columnNumber: 21\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 49,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StackContainer, {\n                  children: work === null || work === void 0 ? void 0 : work.stackList\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 55,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ImageContainer, {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ImageWork, {\n                  src: work === null || work === void 0 ? void 0 : work.coverImg,\n                  alt: work === null || work === void 0 ? void 0 : work.title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 58,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 57,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RightContainer, {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SmallText, {\n                  children: \"view\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 61,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SmallText, {\n                  children: \"project\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 63,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n              idx: idx + 1,\n              listLength: worksData.length\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Works, \"i+a6KTzEcMF6qSlqp+OsZGpew34=\");\n\n_c = Works;\nvar ImageWork = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img.withConfig({\n  displayName: \"Works__ImageWork\",\n  componentId: \"sc-1seb4ea-0\"\n})([\"width:100%;height:100%;object-fit:cover;transition:transform 1.2s;&:hover{transform:scale(1.05);}\"]);\n_c2 = ImageWork;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__Container\",\n  componentId: \"sc-1seb4ea-1\"\n})([\"width:100%;position:relative;opacity:\", \";transition:opacity 2s ease 0s;\"], Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__[\"ifProp\"])('isFadeOut', 0, 1));\n_c3 = Container;\nvar WorkContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__WorkContainer\",\n  componentId: \"sc-1seb4ea-2\"\n})([\"position:relative;width:100%;height:calc(var(--vh,1vh) * 100);display:flex;padding:0 40px;align-items:center;scroll-snap-align:center;justify-content:center;@media only screen and (max-width:\", \"px){padding:0 10px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_7__[\"default\"].screenSize.small);\n_c4 = WorkContainer;\nvar Arrow = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__Arrow\",\n  componentId: \"sc-1seb4ea-3\"\n})([\"background:#2d2d2b;height:1px;width:40px;margin:22px auto;position:relative;cursor:pointer;transition:width 1s ease 0s;&:before,&:after{content:'';background:#2d2d2b;position:absolute;height:1px;width:8px;}&:before{right:-1px;bottom:-3px;transform:rotate(-45deg);}&:after{right:-1px;top:-3px;transform:rotate(45deg);}\"]);\n_c5 = Arrow;\nvar DescriptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__DescriptionContainer\",\n  componentId: \"sc-1seb4ea-4\"\n})([\"font-size:16px;margin-bottom:18px;@media only screen and (max-width:\", \"px){font-size:14px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_7__[\"default\"].screenSize.small);\n_c6 = DescriptionContainer;\nvar StackContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__StackContainer\",\n  componentId: \"sc-1seb4ea-5\"\n})([\"font-size:16px;margin-top:18px;\"]);\n_c7 = StackContainer;\nvar LeftContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__LeftContainer\",\n  componentId: \"sc-1seb4ea-6\"\n})([\"width:25%;height:100%;display:flex;flex-direction:column;justify-content:space-between;@media only screen and (max-width:\", \"px){width:100%;height:auto;flex-direction:row;\", \"{display:none;}}\"], _src_constants__WEBPACK_IMPORTED_MODULE_7__[\"default\"].screenSize.small, StackContainer);\n_c8 = LeftContainer;\nvar RightContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__RightContainer\",\n  componentId: \"sc-1seb4ea-7\"\n})([\"width:15%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;@media only screen and (max-width:\", \"px){margin-top:12px;width:100%;height:auto;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_7__[\"default\"].screenSize.small);\n_c9 = RightContainer;\nvar TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__TitleContainer\",\n  componentId: \"sc-1seb4ea-8\"\n})([\"font-size:38px;text-transform:uppercase;margin-bottom:24px;font-weight:500;\"]);\n_c10 = TitleContainer;\nvar SmallText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__SmallText\",\n  componentId: \"sc-1seb4ea-9\"\n})([\"font-size:14px;font-style:italic;opacity:0;transition:opacity 1s ease 0s;\"]);\n_c11 = SmallText;\nvar ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__ImageContainer\",\n  componentId: \"sc-1seb4ea-10\"\n})([\"width:60%;height:100%;overflow:hidden;@media only screen and (max-width:\", \"px){width:100%;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_7__[\"default\"].screenSize.small);\n_c12 = ImageContainer;\nvar WorkCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Works__WorkCardContainer\",\n  componentId: \"sc-1seb4ea-11\"\n})([\"cursor:pointer;width:100%;height:55vh;position:relative;display:flex;flex-direction:row;padding:0 40px;&:hover{\", \"{width:80px;transition:width 1s ease 0s;}\", \"{opacity:1;transition:opacity 2s ease 0s;}}@media only screen and (max-width:\", \"px){flex-direction:column;padding:0 10px;}\"], Arrow, SmallText, _src_constants__WEBPACK_IMPORTED_MODULE_7__[\"default\"].screenSize.small);\n_c13 = WorkCardContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Works);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;\n\n$RefreshReg$(_c, \"Works\");\n$RefreshReg$(_c2, \"ImageWork\");\n$RefreshReg$(_c3, \"Container\");\n$RefreshReg$(_c4, \"WorkContainer\");\n$RefreshReg$(_c5, \"Arrow\");\n$RefreshReg$(_c6, \"DescriptionContainer\");\n$RefreshReg$(_c7, \"StackContainer\");\n$RefreshReg$(_c8, \"LeftContainer\");\n$RefreshReg$(_c9, \"RightContainer\");\n$RefreshReg$(_c10, \"TitleContainer\");\n$RefreshReg$(_c11, \"SmallText\");\n$RefreshReg$(_c12, \"ImageContainer\");\n$RefreshReg$(_c13, \"WorkCardContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV29ya3MuanM/MDMwZSJdLCJuYW1lcyI6WyJ3b3Jrc0RhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGFja0xpc3QiLCJjb3ZlckltZyIsIldvcmtzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIndvcmtJZCIsInNldFdvcmtJZCIsImlzRmFkZU91dCIsInNldElzRmFkZU91dCIsImhhbmRsZUNsaWNrRGV0YWlsIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJpc0hpZGUiLCJtYXAiLCJ3b3JrIiwiaWR4IiwibGVuZ3RoIiwiSW1hZ2VXb3JrIiwic3R5bGVkIiwiaW1nIiwiQ29udGFpbmVyIiwiZGl2IiwiaWZQcm9wIiwiV29ya0NvbnRhaW5lciIsIkNPTlNUQU5UIiwic2NyZWVuU2l6ZSIsInNtYWxsIiwiQXJyb3ciLCJEZXNjcmlwdGlvbkNvbnRhaW5lciIsIlN0YWNrQ29udGFpbmVyIiwiTGVmdENvbnRhaW5lciIsIlJpZ2h0Q29udGFpbmVyIiwiVGl0bGVDb250YWluZXIiLCJTbWFsbFRleHQiLCJJbWFnZUNvbnRhaW5lciIsIldvcmtDYXJkQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUNoQjtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsZ0JBRlQ7QUFHRUMsYUFBVyxFQUFFLHlEQUhmO0FBSUVDLFdBQVMsRUFBRSx5QkFKYjtBQUtFQyxVQUFRLEVBQUU7QUFMWixDQURnQixFQVFoQjtBQUNFSixJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsT0FGVDtBQUdFQyxhQUFXLEVBQUUsMEJBSGY7QUFJRUMsV0FBUyxFQUFFLG1CQUpiO0FBS0VDLFVBQVEsRUFBRTtBQUxaLENBUmdCLENBQWxCOztBQWlCQSxJQUFNQyxLQUFLLEdBQUcs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QTtBQUFBLG1GQUFwQjtPQUFNVyxjO0FBT04sSUFBTUMsU0FBUyxHQUFHZix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlGQUFmO09BQU1ZLFM7QUFPTixJQUFNQyxjQUFjLEdBQUdoQix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFHQUttQkcsc0RBQVEsQ0FBQ0MsVUFBVCxDQUFvQkMsS0FMdkMsQ0FBcEI7T0FBTVEsYztBQVVOLElBQU1DLGlCQUFpQixHQUFHakIseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxvU0FVakJNLEtBVmlCLEVBZWpCTSxTQWZpQixFQXFCZ0JULHNEQUFRLENBQUNDLFVBQVQsQ0FBb0JDLEtBckJwQyxDQUF2QjtPQUFNUyxpQjtBQTJCU2xDLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvV29ya3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGlmUHJvcCB9IGZyb20gJ3N0eWxlZC10b29scydcbmltcG9ydCBDb250ZW50Q29udGFpbmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0xheW91dC9EZXRhaWxMYXlvdXQnXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uL1BhZ2luYXRpb24nXG5pbXBvcnQgV29ya0RldGFpbCBmcm9tICcuL3dvcmstZGV0YWlsJ1xuaW1wb3J0IENPTlNUQU5UIGZyb20gJy4uL3NyYy9jb25zdGFudHMnXG5cbmNvbnN0IHdvcmtzRGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiAnc2VuaW9yIHByb2plY3QnLFxuICAgIGRlc2NyaXB0aW9uOiAnVHJhdmVsIGJ1ZGdldCBjYWxjdWxhdG9yIGFuZCBwbGFubmVyIE1vYmlsZSBBcHBsaWNhdGlvbicsXG4gICAgc3RhY2tMaXN0OiAnI1JlYWN0LU5hdGl2ZSwgI01vbmdvREInLFxuICAgIGNvdmVySW1nOiAnL2ltYWdlcy9zZW5pb3JfY292ZXJfMi5wbmcnLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6ICdBY3RpcycsXG4gICAgZGVzY3JpcHRpb246ICdFdmVudCBtYW5hZ2VtZW50IHdlYnNpdGUnLFxuICAgIHN0YWNrTGlzdDogJyNOb2RlSnMsICNNb25nb0RCJyxcbiAgICBjb3ZlckltZzogJy9pbWFnZXMvYWN0aXNfY292ZXJfNC5wbmcnLFxuICB9LFxuXVxuXG5jb25zdCBXb3JrcyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbd29ya0lkLCBzZXRXb3JrSWRdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2lzRmFkZU91dCwgc2V0SXNGYWRlT3V0XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrRGV0YWlsID0gKGlkKSA9PiB7XG4gICAgc2V0SXNGYWRlT3V0KHRydWUpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRXb3JrSWQoaWQpXG4gICAgICBzZXRJc0ZhZGVPdXQoZmFsc2UpXG4gICAgfSwgNTAwKVxuICB9XG5cbiAgY29uc29sZS5sb2coeyB3b3JrSWQsIGlzSGlkZTogd29ya0lkICE9PSAwIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFdvcmtEZXRhaWwgd29ya0lkPXt3b3JrSWR9IGhhbmRsZVdvcmtJZD17c2V0V29ya0lkfSAvPlxuICAgICAgPENvbnRlbnRDb250YWluZXIgaXNIaWRlPXt3b3JrSWQgIT09IDB9PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIHt3b3Jrc0RhdGEubWFwKCh3b3JrLCBpZHgpID0+IChcbiAgICAgICAgICAgIDxXb3JrQ29udGFpbmVyIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrRGV0YWlsKHdvcmsuaWQpfT5cbiAgICAgICAgICAgICAgPFdvcmtDYXJkQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxMZWZ0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlQ29udGFpbmVyPnt3b3JrPy50aXRsZX08L1RpdGxlQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb25Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAge3dvcms/LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8U3RhY2tDb250YWluZXI+e3dvcms/LnN0YWNrTGlzdH08L1N0YWNrQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvTGVmdENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VXb3JrIHNyYz17d29yaz8uY292ZXJJbWd9IGFsdD17d29yaz8udGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgPC9JbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8UmlnaHRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8U21hbGxUZXh0PnZpZXc8L1NtYWxsVGV4dD5cbiAgICAgICAgICAgICAgICAgIDxBcnJvdyAvPlxuICAgICAgICAgICAgICAgICAgPFNtYWxsVGV4dD5wcm9qZWN0PC9TbWFsbFRleHQ+XG4gICAgICAgICAgICAgICAgPC9SaWdodENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9Xb3JrQ2FyZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24gaWR4PXtpZHggKyAxfSBsaXN0TGVuZ3RoPXt3b3Jrc0RhdGEubGVuZ3RofSAvPlxuICAgICAgICAgICAgPC9Xb3JrQ29udGFpbmVyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQ29udGVudENvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBJbWFnZVdvcmsgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuMnM7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxuYFxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIG9wYWNpdHk6ICR7aWZQcm9wKCdpc0ZhZGVPdXQnLCAwLCAxKX07XG5cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycyBlYXNlIDBzO1xuYFxuXG5jb25zdCBXb3JrQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7Q09OU1RBTlQuc2NyZWVuU2l6ZS5zbWFsbH1weCkge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxuYFxuXG5jb25zdCBBcnJvdyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICMyZDJkMmI7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luOiAyMnB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlIDBzO1xuXG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kOiAjMmQyZDJiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogOHB4O1xuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIHJpZ2h0OiAtMXB4O1xuICAgIGJvdHRvbTogLTNweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG5cbiAgJjphZnRlciB7XG4gICAgcmlnaHQ6IC0xcHg7XG4gICAgdG9wOiAtM3B4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuYFxuXG5jb25zdCBEZXNjcmlwdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7Q09OU1RBTlQuc2NyZWVuU2l6ZS5zbWFsbH1weCkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuYFxuXG5jb25zdCBTdGFja0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMThweDtcbmBcblxuY29uc3QgTGVmdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtDT05TVEFOVC5zY3JlZW5TaXplLnNtYWxsfXB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgJHtTdGFja0NvbnRhaW5lcn0ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbmBcbmNvbnN0IFJpZ2h0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtDT05TVEFOVC5zY3JlZW5TaXplLnNtYWxsfXB4KSB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbmBcblxuY29uc3QgVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDM4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5gXG5cbmNvbnN0IFNtYWxsVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UgMHM7XG5gXG5cbmNvbnN0IEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtDT05TVEFOVC5zY3JlZW5TaXplLnNtYWxsfXB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmBcblxuY29uc3QgV29ya0NhcmRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1dmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMCA0MHB4O1xuXG4gICY6aG92ZXIge1xuICAgICR7QXJyb3d9IHtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMXMgZWFzZSAwcztcbiAgICB9XG5cbiAgICAke1NtYWxsVGV4dH0ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMnMgZWFzZSAwcztcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7Q09OU1RBTlQuc2NyZWVuU2l6ZS5zbWFsbH1weCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Works.js\n");

/***/ })

})