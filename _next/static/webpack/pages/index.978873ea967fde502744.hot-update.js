webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/work-detail.js":
/*!******************************!*\
  !*** ./pages/work-detail.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ \"./node_modules/ramda/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-tools */ \"./node_modules/styled-tools/dist/es/index.js\");\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/constants */ \"./src/constants/index.js\");\n/* harmony import */ var _src_components_Arrow_Arrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Arrow/Arrow */ \"./src/components/Arrow/Arrow.js\");\n/* harmony import */ var _public_icons_react_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/icons/react.svg */ \"./public/icons/react.svg\");\n/* harmony import */ var _public_icons_react_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_icons_react_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_icons_python_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/icons/python.svg */ \"./public/icons/python.svg\");\n/* harmony import */ var _public_icons_python_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_icons_python_svg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_images_docker_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/images/docker.png */ \"./public/images/docker.png\");\n/* harmony import */ var _public_images_docker_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_images_docker_png__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _public_images_mongo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/images/mongo.png */ \"./public/images/mongo.png\");\n/* harmony import */ var _public_images_mongo_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_images_mongo_png__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _public_images_node_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/images/node.png */ \"./public/images/node.png\");\n/* harmony import */ var _public_images_node_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_images_node_png__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _public_images_digital_ovean_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/images/digital_ovean.png */ \"./public/images/digital_ovean.png\");\n/* harmony import */ var _public_images_digital_ovean_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_images_digital_ovean_png__WEBPACK_IMPORTED_MODULE_12__);\n\n\nvar _jsxFileName = \"/Users/khathawut/Documents/My works/Portfolio/portfolio/pages/work-detail.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar workDetailData = [{\n  id: 1,\n  title: 'Senior Project',\n  description: '',\n  techStack: [_public_icons_react_svg__WEBPACK_IMPORTED_MODULE_7___default.a, _public_icons_python_svg__WEBPACK_IMPORTED_MODULE_8___default.a, _public_images_docker_png__WEBPACK_IMPORTED_MODULE_9___default.a, _public_images_mongo_png__WEBPACK_IMPORTED_MODULE_10___default.a, _public_images_node_png__WEBPACK_IMPORTED_MODULE_11___default.a],\n  workImages: ['senior_proj.003.png', 'senior_cover_2.png', 'senior_proj.001.png', 'senior_proj.002.png']\n}, {\n  id: 2,\n  title: 'Actis',\n  description: '',\n  techStack: [_public_images_node_png__WEBPACK_IMPORTED_MODULE_11___default.a, _public_images_docker_png__WEBPACK_IMPORTED_MODULE_9___default.a, _public_images_digital_ovean_png__WEBPACK_IMPORTED_MODULE_12___default.a, _public_images_mongo_png__WEBPACK_IMPORTED_MODULE_10___default.a],\n  workImages: ['actis_cover_4.png']\n}];\n\nvar WorkDetail = function WorkDetail(props) {\n  _s();\n\n  var workId = props.workId,\n      handleWorkId = props.handleWorkId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isShow = _useState[0],\n      setIsShow = _useState[1];\n\n  var handleBack = function handleBack() {\n    setIsShow(false);\n    setTimeout(function () {\n      setIsShow(true);\n      handleWorkId(0);\n    }, 1500);\n  };\n\n  var detailData = ramda__WEBPACK_IMPORTED_MODULE_2__[\"find\"](ramda__WEBPACK_IMPORTED_MODULE_2__[\"propEq\"]('id', workId))(workDetailData);\n  return workId !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    isShow: isShow,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(WrapperContainer, {\n      isShow: isShow,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(BackIcon, {\n        onClick: handleBack,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Arrow_Arrow__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          direction: \"left\",\n          lowerText: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n        children: detailData === null || detailData === void 0 ? void 0 : detailData.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ContentContainer, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Description, {\n          children: [\"Lorem ipsum dolor sit amet, pri ea duis probo alterum,\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 15\n          }, _this), \"vis ut movet omittam. Vix odio posse mazim ne,\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 15\n          }, _this), \"pri equidem accusamus salutatus ei. Alterum delenit at eam.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 15\n          }, _this), \"Nec ceteros placerat in. Apeirian hendrerit id has.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TectContainer, {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SubTitle, {\n            children: \"Technology Stack\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TechStackContainer, {\n            children: detailData.techStack.map(function (tech) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LogoContainer, {\n                src: tech\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 19\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ImageContainer, {\n          children: detailData.workImages.map(function (img) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ImageWork, {\n              src: \"/images/\".concat(img),\n              alt: \"work\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 7\n  }, _this);\n};\n\n_s(WorkDetail, \"VKeQRMS3cYCGmVzGMfdUDeRDOnc=\");\n\n_c = WorkDetail;\nvar BackIcon = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"work-detail__BackIcon\",\n  componentId: \"sc-101p5sx-0\"\n})([\"position:absolute;display:flex;justify-content:center;width:90px;top:75px;left:3%;@media only screen and (max-width:\", \"px){top:20px;left:0;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c2 = BackIcon;\nvar ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"work-detail__ImageContainer\",\n  componentId: \"sc-101p5sx-1\"\n})([\"width:100%;height:100%;margin:12px 0;> img{margin:12px 0;}\"]);\n_c3 = ImageContainer;\nvar ImageWork = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img.withConfig({\n  displayName: \"work-detail__ImageWork\",\n  componentId: \"sc-101p5sx-2\"\n})([\"width:100%;height:100%;object-fit:cover;animation:contentContainerFadeIn 1.5s;\"]);\n_c4 = ImageWork;\nvar TectContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"work-detail__TectContainer\",\n  componentId: \"sc-101p5sx-3\"\n})([\"animation:logoTechFadeIn 2s;display:flex;flex-direction:column;align-items:center;\"]);\n_c5 = TectContainer;\nvar TechStackContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"work-detail__TechStackContainer\",\n  componentId: \"sc-101p5sx-4\"\n})([\"display:flex;width:100%;flex-wrap:wrap;justify-content:center;margin-bottom:12px;\"]);\n_c6 = TechStackContainer;\nvar LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img.withConfig({\n  displayName: \"work-detail__LogoContainer\",\n  componentId: \"sc-101p5sx-5\"\n})([\"height:35px;margin:20px 20px;@media only screen and (max-width:\", \"px){height:25px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c7 = LogoContainer;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"work-detail__Title\",\n  componentId: \"sc-101p5sx-6\"\n})([\"font-size:54px;animation:titleFadeIn 2s;@media only screen and (max-width:\", \"px){font-size:44px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c8 = Title;\nvar SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span.withConfig({\n  displayName: \"work-detail__SubTitle\",\n  componentId: \"sc-101p5sx-7\"\n})([\"font-size:24px;position:relative;margin:12px 0;&::after{background:none repeat scroll 0 0 transparent;bottom:-5px;content:'';display:block;height:1px;position:absolute;background:#2d2d2b;transition:width 0.5s ease 0s,left 0.5s ease 0s;width:100%;}@media only screen and (max-width:\", \"px){font-size:18px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c9 = SubTitle;\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p.withConfig({\n  displayName: \"work-detail__Description\",\n  componentId: \"sc-101p5sx-8\"\n})([\"font-size:22px;font-style:italic;margin:54px auto;text-align:center;animation:logoTechFadeIn 2s;@media only screen and (max-width:\", \"px){font-size:16px;}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small);\n_c10 = Description;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"work-detail__Container\",\n  componentId: \"sc-101p5sx-9\"\n})([\"height:100%;width:100%;position:relative;z-index:999;background:#f0e4d8;opacity:\", \";transition:opacity 2s;\"], Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__[\"ifProp\"])('isShow', 1, 0));\n_c11 = Container;\nvar WrapperContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"work-detail__WrapperContainer\",\n  componentId: \"sc-101p5sx-10\"\n})([\"height:100%;width:100%;position:absolute;padding:60px 15%;@media only screen and (max-width:\", \"px){padding:85px 5%;}animation:\", \" 2s;@keyframes logoTechFadeIn{0%{opacity:0.2;transform:translateY(-20%);}100%{opacity:1;transform:translateX(0);}}@keyframes titleFadeIn{0%{opacity:0.2;transform:translateX(6%);}100%{opacity:1;transform:translateX(0);}}@keyframes pageFadeOut{0%{opacity:1;transform:translateX(0);}100%{opacity:0;transform:translateX(20%);}}\"], _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].screenSize.small, Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__[\"ifProp\"])('isShow', 'none', 'pageFadeOut'));\n_c12 = WrapperContainer;\nvar ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"work-detail__ContentContainer\",\n  componentId: \"sc-101p5sx-11\"\n})([\"display:flex;justify-content:center;flex-direction:column;align-items:center;\"]);\n_c13 = ContentContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkDetail);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;\n\n$RefreshReg$(_c, \"WorkDetail\");\n$RefreshReg$(_c2, \"BackIcon\");\n$RefreshReg$(_c3, \"ImageContainer\");\n$RefreshReg$(_c4, \"ImageWork\");\n$RefreshReg$(_c5, \"TectContainer\");\n$RefreshReg$(_c6, \"TechStackContainer\");\n$RefreshReg$(_c7, \"LogoContainer\");\n$RefreshReg$(_c8, \"Title\");\n$RefreshReg$(_c9, \"SubTitle\");\n$RefreshReg$(_c10, \"Description\");\n$RefreshReg$(_c11, \"Container\");\n$RefreshReg$(_c12, \"WrapperContainer\");\n$RefreshReg$(_c13, \"ContentContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd29yay1kZXRhaWwuanM/YWM0MSJdLCJuYW1lcyI6WyJ3b3JrRGV0YWlsRGF0YSIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRlY2hTdGFjayIsIlJlYWN0TG9nbyIsIlB5dGhvbkxvZ28iLCJEb2NrZXJMb2dvIiwiTW9uZ29Mb2dvIiwiTm9kZUxvZ28iLCJ3b3JrSW1hZ2VzIiwiRGlnaXRhbE9jZWFuIiwiV29ya0RldGFpbCIsInByb3BzIiwid29ya0lkIiwiaGFuZGxlV29ya0lkIiwidXNlU3RhdGUiLCJpc1Nob3ciLCJzZXRJc1Nob3ciLCJoYW5kbGVCYWNrIiwic2V0VGltZW91dCIsImRldGFpbERhdGEiLCJSIiwibWFwIiwidGVjaCIsImltZyIsIkJhY2tJY29uIiwic3R5bGVkIiwiZGl2IiwiQ09OU1RBTlQiLCJzY3JlZW5TaXplIiwic21hbGwiLCJJbWFnZUNvbnRhaW5lciIsIkltYWdlV29yayIsIlRlY3RDb250YWluZXIiLCJUZWNoU3RhY2tDb250YWluZXIiLCJMb2dvQ29udGFpbmVyIiwiVGl0bGUiLCJTdWJUaXRsZSIsInNwYW4iLCJEZXNjcmlwdGlvbiIsInAiLCJDb250YWluZXIiLCJpZlByb3AiLCJXcmFwcGVyQ29udGFpbmVyIiwiQ29udGVudENvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBRyxDQUNyQjtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsZ0JBRlQ7QUFHRUMsYUFBVyxFQUFFLEVBSGY7QUFJRUMsV0FBUyxFQUFFLENBQUNDLDhEQUFELEVBQVlDLCtEQUFaLEVBQXdCQyxnRUFBeEIsRUFBb0NDLGdFQUFwQyxFQUErQ0MsK0RBQS9DLENBSmI7QUFLRUMsWUFBVSxFQUFF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UyxHQUFHZix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9IQU1GZSwyREFBTSxDQUFDLFFBQUQsRUFBVyxDQUFYLEVBQWMsQ0FBZCxDQU5KLENBQWY7T0FBTUQsUztBQVVOLElBQU1FLGdCQUFnQixHQUFHakIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrY0FNaUJDLHNEQUFRLENBQUNDLFVBQVQsQ0FBb0JDLEtBTnJDLEVBVVBZLDJEQUFNLENBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsYUFBbkIsQ0FWQyxDQUF0QjtPQUFNQyxnQjtBQThDTixJQUFNQyxnQkFBZ0IsR0FBR2xCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscUZBQXRCO09BQU1pQixnQjtBQU9TakMseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy93b3JrLWRldGFpbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGlmUHJvcCB9IGZyb20gJ3N0eWxlZC10b29scydcbmltcG9ydCBDT05TVEFOVCBmcm9tICcuLi9zcmMvY29uc3RhbnRzJ1xuXG5pbXBvcnQgQXJyb3cgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQXJyb3cvQXJyb3cnXG5cbmltcG9ydCBSZWFjdExvZ28gZnJvbSAnLi4vcHVibGljL2ljb25zL3JlYWN0LnN2ZydcbmltcG9ydCBQeXRob25Mb2dvIGZyb20gJy4uL3B1YmxpYy9pY29ucy9weXRob24uc3ZnJ1xuaW1wb3J0IERvY2tlckxvZ28gZnJvbSAnLi4vcHVibGljL2ltYWdlcy9kb2NrZXIucG5nJ1xuaW1wb3J0IE1vbmdvTG9nbyBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL21vbmdvLnBuZydcbmltcG9ydCBOb2RlTG9nbyBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL25vZGUucG5nJ1xuaW1wb3J0IERpZ2l0YWxPY2VhbiBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL2RpZ2l0YWxfb3ZlYW4ucG5nJ1xuXG5jb25zdCB3b3JrRGV0YWlsRGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiAnU2VuaW9yIFByb2plY3QnLFxuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICB0ZWNoU3RhY2s6IFtSZWFjdExvZ28sIFB5dGhvbkxvZ28sIERvY2tlckxvZ28sIE1vbmdvTG9nbywgTm9kZUxvZ29dLFxuICAgIHdvcmtJbWFnZXM6IFtcbiAgICAgICdzZW5pb3JfcHJvai4wMDMucG5nJyxcbiAgICAgICdzZW5pb3JfY292ZXJfMi5wbmcnLFxuICAgICAgJ3Nlbmlvcl9wcm9qLjAwMS5wbmcnLFxuICAgICAgJ3Nlbmlvcl9wcm9qLjAwMi5wbmcnLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogJ0FjdGlzJyxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgdGVjaFN0YWNrOiBbTm9kZUxvZ28sIERvY2tlckxvZ28sIERpZ2l0YWxPY2VhbiwgTW9uZ29Mb2dvXSxcbiAgICB3b3JrSW1hZ2VzOiBbJ2FjdGlzX2NvdmVyXzQucG5nJ10sXG4gIH0sXG5dXG5cbmNvbnN0IFdvcmtEZXRhaWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB3b3JrSWQsIGhhbmRsZVdvcmtJZCB9ID0gcHJvcHNcbiAgY29uc3QgW2lzU2hvdywgc2V0SXNTaG93XSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcbiAgICBzZXRJc1Nob3coZmFsc2UpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc1Nob3codHJ1ZSlcbiAgICAgIGhhbmRsZVdvcmtJZCgwKVxuICAgIH0sIDE1MDApXG4gIH1cblxuICBjb25zdCBkZXRhaWxEYXRhID0gUi5maW5kKFIucHJvcEVxKCdpZCcsIHdvcmtJZCkpKHdvcmtEZXRhaWxEYXRhKVxuXG4gIHJldHVybiAoXG4gICAgd29ya0lkICE9PSAwICYmIChcbiAgICAgIDxDb250YWluZXIgaXNTaG93PXtpc1Nob3d9PlxuICAgICAgICA8V3JhcHBlckNvbnRhaW5lciBpc1Nob3c9e2lzU2hvd30+XG4gICAgICAgICAgPEJhY2tJY29uIG9uQ2xpY2s9e2hhbmRsZUJhY2t9PlxuICAgICAgICAgICAgPEFycm93IGRpcmVjdGlvbj1cImxlZnRcIiBsb3dlclRleHQ9XCJCYWNrXCIgLz5cbiAgICAgICAgICA8L0JhY2tJY29uPlxuICAgICAgICAgIDxUaXRsZT57ZGV0YWlsRGF0YT8udGl0bGV9PC9UaXRsZT5cbiAgICAgICAgICA8Q29udGVudENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIHByaSBlYSBkdWlzIHByb2JvIGFsdGVydW0sXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB2aXMgdXQgbW92ZXQgb21pdHRhbS4gVml4IG9kaW8gcG9zc2UgbWF6aW0gbmUsXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICBwcmkgZXF1aWRlbSBhY2N1c2FtdXMgc2FsdXRhdHVzIGVpLiBBbHRlcnVtIGRlbGVuaXQgYXQgZWFtLlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgTmVjIGNldGVyb3MgcGxhY2VyYXQgaW4uIEFwZWlyaWFuIGhlbmRyZXJpdCBpZCBoYXMuXG4gICAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPFRlY3RDb250YWluZXI+XG4gICAgICAgICAgICAgIDxTdWJUaXRsZT5UZWNobm9sb2d5IFN0YWNrPC9TdWJUaXRsZT5cbiAgICAgICAgICAgICAgPFRlY2hTdGFja0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICB7ZGV0YWlsRGF0YS50ZWNoU3RhY2subWFwKCh0ZWNoKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TG9nb0NvbnRhaW5lciBzcmM9e3RlY2h9IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvVGVjaFN0YWNrQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9UZWN0Q29udGFpbmVyPlxuICAgICAgICAgICAgPEltYWdlQ29udGFpbmVyPlxuICAgICAgICAgICAgICB7ZGV0YWlsRGF0YS53b3JrSW1hZ2VzLm1hcCgoaW1nKSA9PiAoXG4gICAgICAgICAgICAgICAgPEltYWdlV29yayBzcmM9e2AvaW1hZ2VzLyR7aW1nfWB9IGFsdD1cIndvcmtcIiAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvSW1hZ2VDb250YWluZXI+XG4gICAgICAgICAgPC9Db250ZW50Q29udGFpbmVyPlxuICAgICAgICA8L1dyYXBwZXJDb250YWluZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIClcbn1cblxuY29uc3QgQmFja0ljb24gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogOTBweDtcbiAgdG9wOiA3NXB4O1xuICBsZWZ0OiAzJTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7Q09OU1RBTlQuc2NyZWVuU2l6ZS5zbWFsbH1weCkge1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAwO1xuICB9XG5gXG5cbmNvbnN0IEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAxMnB4IDA7XG5cbiAgPiBpbWcge1xuICAgIG1hcmdpbjogMTJweCAwO1xuICB9XG5gXG5cbmNvbnN0IEltYWdlV29yayA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuXG4gIGFuaW1hdGlvbjogY29udGVudENvbnRhaW5lckZhZGVJbiAxLjVzO1xuYFxuXG5jb25zdCBUZWN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYW5pbWF0aW9uOiBsb2dvVGVjaEZhZGVJbiAycztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmBcblxuY29uc3QgVGVjaFN0YWNrQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG5gXG5cbmNvbnN0IExvZ29Db250YWluZXIgPSBzdHlsZWQuaW1nYFxuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbjogMjBweCAyMHB4O1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtDT05TVEFOVC5zY3JlZW5TaXplLnNtYWxsfXB4KSB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICB9XG5gXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiA1NHB4O1xuICBhbmltYXRpb246IHRpdGxlRmFkZUluIDJzO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtDT05TVEFOVC5zY3JlZW5TaXplLnNtYWxsfXB4KSB7XG4gICAgZm9udC1zaXplOiA0NHB4O1xuICB9XG5gXG5cbmNvbnN0IFN1YlRpdGxlID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEycHggMDtcblxuICAmOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcbiAgICBib3R0b206IC01cHg7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6ICMyZDJkMmI7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlIDBzLCBsZWZ0IDAuNXMgZWFzZSAwcztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtDT05TVEFOVC5zY3JlZW5TaXplLnNtYWxsfXB4KSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5gXG5cbmNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW46IDU0cHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGFuaW1hdGlvbjogbG9nb1RlY2hGYWRlSW4gMnM7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke0NPTlNUQU5ULnNjcmVlblNpemUuc21hbGx9cHgpIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbmBcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQ6ICNmMGU0ZDg7XG4gIG9wYWNpdHk6ICR7aWZQcm9wKCdpc1Nob3cnLCAxLCAwKX07XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMnM7XG5gXG5cbmNvbnN0IFdyYXBwZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDYwcHggMTUlO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtDT05TVEFOVC5zY3JlZW5TaXplLnNtYWxsfXB4KSB7XG4gICAgcGFkZGluZzogODVweCA1JTtcbiAgfVxuXG4gIGFuaW1hdGlvbjogJHtpZlByb3AoJ2lzU2hvdycsICdub25lJywgJ3BhZ2VGYWRlT3V0Jyl9IDJzO1xuXG4gIEBrZXlmcmFtZXMgbG9nb1RlY2hGYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgdGl0bGVGYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2JSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHBhZ2VGYWRlT3V0IHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcbiAgICB9XG4gIH1cbmBcblxuY29uc3QgQ29udGVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBXb3JrRGV0YWlsXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/work-detail.js\n");

/***/ })

})