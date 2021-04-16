webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Timeline/Timeline.js":
/*!*********************************************!*\
  !*** ./src/components/Timeline/Timeline.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-tools */ \"./node_modules/styled-tools/dist/es/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ \"./src/constants/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/khathawut/Documents/My works/Portfolio/portfolio/src/components/Timeline/Timeline.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar data = [{\n  position: 10,\n  year: '1997',\n  title: 'Born',\n  detail: 'Bangkok'\n}, {\n  position: 25,\n  year: '2007',\n  title: 'School',\n  detail: 'Bunyawat Witthayalai School'\n}, {\n  position: 42,\n  year: '2013',\n  title: 'Computer Olympic (POSN)',\n  detail: 'Camp 1 - 2\\nChiang Mai University'\n}, {\n  position: 52,\n  year: '2015',\n  title: 'Computer Engineering',\n  detail: 'Kasetsart University'\n}, {\n  position: 62,\n  year: '2017',\n  title: 'Back-End Developer (internship)',\n  detail: 'Fungjai Co., Ltd.'\n}, {\n  position: 72,\n  year: '2019 - present',\n  title: 'Front-End Developer',\n  detail: 'AppMan Co.,Ltd'\n}];\n\nvar calcPositionFromYear = function calcPositionFromYear(year) {\n  var MinYear = 1995;\n  var MaxYear = 2025;\n  return (year - MinYear) * 100 / (MaxYear - MinYear);\n};\n\nvar Timeline = function Timeline(props) {\n  _s();\n\n  var isShowTimeline = props.isShowTimeline;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShowBulleLine = _useState[0],\n      setIsShowBulleLine = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      orderDisplay = _useState2[0],\n      setOrderDisplay = _useState2[1];\n\n  var handleOrderDisplay = function handleOrderDisplay(num) {\n    if (num <= data.length) {\n      setTimeout(function () {\n        setOrderDisplay(num);\n        handleOrderDisplay(num + 1);\n      }, 300);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (isShowTimeline) {\n      setTimeout(function () {\n        handleOrderDisplay(1);\n        setIsShowBulleLine(true);\n      }, 1000);\n    }\n  }, [isShowTimeline]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [data.map(function (val, index) {\n      var curDirection = index % 2 === 0 ? 'top' : 'bottom';\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n        position: val.position,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Bullet, {\n          isShowBulleLine: isShowBulleLine && index <= orderDisplay,\n          direction: curDirection,\n          position: val.position\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ContentContainer, {\n          isShowContent: isShowBulleLine && index + 1 <= orderDisplay,\n          direction: curDirection,\n          position: val.position + 1,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(YearContainer, {\n            children: val.year\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TitleContainer, {\n            children: val.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DetailContainer, {\n            children: val.detail\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 13\n        }, _this)]\n      }, \"Bullet-\".concat(index), true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 11\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Line, {\n      isShowTimeline: isShowTimeline\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Timeline, \"2wiT+0UZrNchC2eo6jihqs//CSQ=\");\n\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Timeline__Wrapper\",\n  componentId: \"sc-1lwl3sc-0\"\n})([\"min-width:1000px;position:relative;\"]);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Timeline__Container\",\n  componentId: \"sc-1lwl3sc-1\"\n})([\"position:absolute;left:\", \"%;top:-4px;\"], Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__[\"prop\"])('position', 0));\n_c2 = Container;\nvar YearContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Timeline__YearContainer\",\n  componentId: \"sc-1lwl3sc-2\"\n})([\"padding:6px 0 6px 12px;font-size:18px;font-weight:bold;\"]);\n_c3 = YearContainer;\nvar TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Timeline__TitleContainer\",\n  componentId: \"sc-1lwl3sc-3\"\n})([\"padding-left:12px;font-size:16px;font-weight:bold;\"]);\n_c4 = TitleContainer;\nvar DetailContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Timeline__DetailContainer\",\n  componentId: \"sc-1lwl3sc-4\"\n})([\"padding:6px 0 6px 12px;font-size:14px;white-space:pre-line;\"]);\n_c5 = DetailContainer;\nvar ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Timeline__ContentContainer\",\n  componentId: \"sc-1lwl3sc-5\"\n})([\"position:absolute;height:200px;width:200px;display:\", \";opacity:0;left:\", \"%;animation:fadeIn 2s both;> div{color:#2b2b2b;}@keyframes fadeIn{from{opacity:0;transform:translateX(-5px);}to{opacity:1;transform:translateX(0);}}\", \";\"], Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__[\"ifProp\"])('isShowContent', 'flex', 'none'), Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__[\"prop\"])('position', 0), Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__[\"ifProp\"])({\n  direction: 'top'\n}, Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"bottom:50%;flex-direction:column;\"]), Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"top:50%;flex-direction:column-reverse;\"])));\n_c6 = ContentContainer;\nvar Bullet = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Timeline__Bullet\",\n  componentId: \"sc-1lwl3sc-6\"\n})([\"position:relative;width:10px;height:10px;border-radius:50%;background:#2d2d2b;opacity:\", \";transition:opacity 2s;&::after{content:'';padding-left:10px;position:absolute;border-left:2px solid;border-color:#2d2d2b;left:4px;height:\", \"px;transition:height 2s;}\", \"\"], Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__[\"ifProp\"])('isShowBulleLine', 1, 0), Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__[\"ifProp\"])('isShowBulleLine', 200, 0), Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__[\"switchProp\"])('direction', {\n  top: Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"&::after{bottom:0;}\"]),\n  bottom: Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"&::after{top:0;}\"])\n}));\n_c7 = Bullet;\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.withConfig({\n  displayName: \"Timeline__Line\",\n  componentId: \"sc-1lwl3sc-7\"\n})([\"width:0;border-bottom:2px solid;border-color:#2d2d2b;animation:mymove 5s both;display:\", \";@keyframes mymove{from{width:0%;}to{width:100%;}}\"], Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__[\"ifProp\"])('isShowTimeline', 'block', 'none'));\n_c8 = Line;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"Timeline\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"YearContainer\");\n$RefreshReg$(_c4, \"TitleContainer\");\n$RefreshReg$(_c5, \"DetailContainer\");\n$RefreshReg$(_c6, \"ContentContainer\");\n$RefreshReg$(_c7, \"Bullet\");\n$RefreshReg$(_c8, \"Line\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZWxpbmUuanM/M2Y3ZCJdLCJuYW1lcyI6WyJkYXRhIiwicG9zaXRpb24iLCJ5ZWFyIiwidGl0bGUiLCJkZXRhaWwiLCJjYWxjUG9zaXRpb25Gcm9tWWVhciIsIk1pblllYXIiLCJNYXhZZWFyIiwiVGltZWxpbmUiLCJwcm9wcyIsImlzU2hvd1RpbWVsaW5lIiwidXNlU3RhdGUiLCJpc1Nob3dCdWxsZUxpbmUiLCJzZXRJc1Nob3dCdWxsZUxpbmUiLCJvcmRlckRpc3BsYXkiLCJzZXRPcmRlckRpc3BsYXkiLCJoYW5kbGVPcmRlckRpc3BsYXkiLCJudW0iLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwibWFwIiwidmFsIiwiaW5kZXgiLCJjdXJEaXJlY3Rpb24iLCJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiQ29udGFpbmVyIiwicHJvcCIsIlllYXJDb250YWluZXIiLCJUaXRsZUNvbnRhaW5lciIsIkRldGFpbENvbnRhaW5lciIsIkNvbnRlbnRDb250YWluZXIiLCJpZlByb3AiLCJkaXJlY3Rpb24iLCJjc3MiLCJCdWxsZXQiLCJzd2l0Y2hQcm9wIiwidG9wIiwiYm90dG9tIiwiTGluZSIsInNwYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsVUFBUSxFQUFFLEVBRFo7QUFFRUMsTUFBSSxFQUFFLE1BRlI7QUFHRUMsT0FBSyxFQUFFLE1BSFQ7QUFJRUMsUUFBTSxFQUFFO0FBSlYsQ0FEVyxFQU9YO0FBQ0VILFVBQVEsRUFBRSxFQURaO0FBRUVDLE1BQUksRUFBRSxNQUZSO0FBR0VDLE9BQUssRUFBRSxRQUhUO0FBSUVDLFFBQU0sRUFBRTtBQUpWLENBUFcsRUFhWDtBQUNFSCxVQUFRLEVBQUUsRUFEWjtBQUVFQyxNQUFJLEVBQUUsTUFGUjtBQUdFQyxPQUFL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QU1OQSw2REFOTSw2Q0F4QlksQ0FBdEI7TUFBTUgsZ0I7QUFxQ04sSUFBTUksTUFBTSxHQUFHWCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhRQU1DTywyREFBTSxDQUFDLGlCQUFELEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBTlAsRUFnQkVBLDJEQUFNLENBQUMsaUJBQUQsRUFBb0IsR0FBcEIsRUFBeUIsQ0FBekIsQ0FoQlIsRUFvQlJJLCtEQUFVLENBQUMsV0FBRCxFQUFjO0FBQ3hCQyxLQUFHLEVBQUVILDZEQUFGLHlCQURxQjtBQU14QkksUUFBTSxFQUFFSiw2REFBRjtBQU5rQixDQUFkLENBcEJGLENBQVo7TUFBTUMsTTtBQWtDTixJQUFNSSxJQUFJLEdBQUdmLHlEQUFNLENBQUNnQixJQUFWO0FBQUE7QUFBQTtBQUFBLHFKQUtHUiwyREFBTSxDQUFDLGdCQUFELEVBQW1CLE9BQW5CLEVBQTRCLE1BQTVCLENBTFQsQ0FBVjtNQUFNTyxJIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZWxpbmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgc3dpdGNoUHJvcCwgcHJvcCwgaWZQcm9wIH0gZnJvbSAnc3R5bGVkLXRvb2xzJ1xuaW1wb3J0IENPTlNUQU5UIGZyb20gJy4uLy4uL2NvbnN0YW50cydcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIHBvc2l0aW9uOiAxMCxcbiAgICB5ZWFyOiAnMTk5NycsXG4gICAgdGl0bGU6ICdCb3JuJyxcbiAgICBkZXRhaWw6ICdCYW5na29rJyxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAyNSxcbiAgICB5ZWFyOiAnMjAwNycsXG4gICAgdGl0bGU6ICdTY2hvb2wnLFxuICAgIGRldGFpbDogJ0J1bnlhd2F0IFdpdHRoYXlhbGFpIFNjaG9vbCcsXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogNDIsXG4gICAgeWVhcjogJzIwMTMnLFxuICAgIHRpdGxlOiAnQ29tcHV0ZXIgT2x5bXBpYyAoUE9TTiknLFxuICAgIGRldGFpbDogJ0NhbXAgMSAtIDJcXG5DaGlhbmcgTWFpIFVuaXZlcnNpdHknLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDUyLFxuICAgIHllYXI6ICcyMDE1JyxcbiAgICB0aXRsZTogJ0NvbXB1dGVyIEVuZ2luZWVyaW5nJyxcbiAgICBkZXRhaWw6ICdLYXNldHNhcnQgVW5pdmVyc2l0eScsXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogNjIsXG4gICAgeWVhcjogJzIwMTcnLFxuICAgIHRpdGxlOiAnQmFjay1FbmQgRGV2ZWxvcGVyIChpbnRlcm5zaGlwKScsXG4gICAgZGV0YWlsOiAnRnVuZ2phaSBDby4sIEx0ZC4nLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDcyLFxuICAgIHllYXI6ICcyMDE5IC0gcHJlc2VudCcsXG4gICAgdGl0bGU6ICdGcm9udC1FbmQgRGV2ZWxvcGVyJyxcbiAgICBkZXRhaWw6ICdBcHBNYW4gQ28uLEx0ZCcsXG4gIH0sXG5dXG5cbmNvbnN0IGNhbGNQb3NpdGlvbkZyb21ZZWFyID0gKHllYXIpID0+IHtcbiAgY29uc3QgTWluWWVhciA9IDE5OTVcbiAgY29uc3QgTWF4WWVhciA9IDIwMjVcblxuICByZXR1cm4gKCh5ZWFyIC0gTWluWWVhcikgKiAxMDApIC8gKE1heFllYXIgLSBNaW5ZZWFyKVxufVxuXG5jb25zdCBUaW1lbGluZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGlzU2hvd1RpbWVsaW5lIH0gPSBwcm9wc1xuICBjb25zdCBbaXNTaG93QnVsbGVMaW5lLCBzZXRJc1Nob3dCdWxsZUxpbmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtvcmRlckRpc3BsYXksIHNldE9yZGVyRGlzcGxheV0gPSB1c2VTdGF0ZSgwKVxuXG4gIGNvbnN0IGhhbmRsZU9yZGVyRGlzcGxheSA9IChudW0pID0+IHtcbiAgICBpZiAobnVtIDw9IGRhdGEubGVuZ3RoKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0T3JkZXJEaXNwbGF5KG51bSlcbiAgICAgICAgaGFuZGxlT3JkZXJEaXNwbGF5KG51bSArIDEpXG4gICAgICB9LCAzMDApXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNTaG93VGltZWxpbmUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBoYW5kbGVPcmRlckRpc3BsYXkoMSlcbiAgICAgICAgc2V0SXNTaG93QnVsbGVMaW5lKHRydWUpXG4gICAgICB9LCAxMDAwKVxuICAgIH1cbiAgfSwgW2lzU2hvd1RpbWVsaW5lXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZGF0YS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY3VyRGlyZWN0aW9uID0gaW5kZXggJSAyID09PSAwID8gJ3RvcCcgOiAnYm90dG9tJ1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxDb250YWluZXIga2V5PXtgQnVsbGV0LSR7aW5kZXh9YH0gcG9zaXRpb249e3ZhbC5wb3NpdGlvbn0+XG4gICAgICAgICAgICA8QnVsbGV0XG4gICAgICAgICAgICAgIGlzU2hvd0J1bGxlTGluZT17aXNTaG93QnVsbGVMaW5lICYmIGluZGV4IDw9IG9yZGVyRGlzcGxheX1cbiAgICAgICAgICAgICAgZGlyZWN0aW9uPXtjdXJEaXJlY3Rpb259XG4gICAgICAgICAgICAgIHBvc2l0aW9uPXt2YWwucG9zaXRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENvbnRlbnRDb250YWluZXJcbiAgICAgICAgICAgICAgaXNTaG93Q29udGVudD17aXNTaG93QnVsbGVMaW5lICYmIGluZGV4ICsgMSA8PSBvcmRlckRpc3BsYXl9XG4gICAgICAgICAgICAgIGRpcmVjdGlvbj17Y3VyRGlyZWN0aW9ufVxuICAgICAgICAgICAgICBwb3NpdGlvbj17dmFsLnBvc2l0aW9uICsgMX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFllYXJDb250YWluZXI+e3ZhbC55ZWFyfTwvWWVhckNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPFRpdGxlQ29udGFpbmVyPnt2YWwudGl0bGV9PC9UaXRsZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPERldGFpbENvbnRhaW5lcj57dmFsLmRldGFpbH08L0RldGFpbENvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQ29udGVudENvbnRhaW5lcj5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgICA8TGluZSBpc1Nob3dUaW1lbGluZT17aXNTaG93VGltZWxpbmV9IC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmVcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1pbi13aWR0aDogMTAwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogJHtwcm9wKCdwb3NpdGlvbicsIDApfSU7XG4gIHRvcDogLTRweDtcbmBcblxuY29uc3QgWWVhckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDZweCAwIDZweCAxMnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYFxuXG5jb25zdCBUaXRsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbmBcblxuY29uc3QgRGV0YWlsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogNnB4IDAgNnB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuYFxuXG5jb25zdCBDb250ZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGRpc3BsYXk6ICR7aWZQcm9wKCdpc1Nob3dDb250ZW50JywgJ2ZsZXgnLCAnbm9uZScpfTtcbiAgb3BhY2l0eTogMDtcbiAgbGVmdDogJHtwcm9wKCdwb3NpdGlvbicsIDApfSU7XG4gIGFuaW1hdGlvbjogZmFkZUluIDJzIGJvdGg7XG5cbiAgPiBkaXYge1xuICAgIGNvbG9yOiAjMmIyYjJiO1xuICB9XG5cbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gIH1cblxuICAke2lmUHJvcChcbiAgICB7IGRpcmVjdGlvbjogJ3RvcCcgfSxcbiAgICBjc3NgXG4gICAgICBib3R0b206IDUwJTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYCxcbiAgICBjc3NgXG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBgXG4gICl9O1xuYFxuXG5jb25zdCBCdWxsZXQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzJkMmQyYjtcbiAgb3BhY2l0eTogJHtpZlByb3AoJ2lzU2hvd0J1bGxlTGluZScsIDEsIDApfTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycztcblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzJkMmQyYjtcbiAgICBsZWZ0OiA0cHg7XG4gICAgaGVpZ2h0OiAke2lmUHJvcCgnaXNTaG93QnVsbGVMaW5lJywgMjAwLCAwKX1weDtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMnM7XG4gIH1cblxuICAke3N3aXRjaFByb3AoJ2RpcmVjdGlvbicsIHtcbiAgICB0b3A6IGNzc2BcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgfVxuICAgIGAsXG4gICAgYm90dG9tOiBjc3NgXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgIH1cbiAgICBgLFxuICB9KX1cbmBcblxuY29uc3QgTGluZSA9IHN0eWxlZC5zcGFuYFxuICB3aWR0aDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICMyZDJkMmI7XG4gIGFuaW1hdGlvbjogbXltb3ZlIDVzIGJvdGg7XG4gIGRpc3BsYXk6ICR7aWZQcm9wKCdpc1Nob3dUaW1lbGluZScsICdibG9jaycsICdub25lJyl9O1xuXG4gIEBrZXlmcmFtZXMgbXltb3ZlIHtcbiAgICBmcm9tIHtcbiAgICAgIHdpZHRoOiAwJTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Timeline/Timeline.js\n");

/***/ })

})