webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/globals.css":
/*!****************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/globals.css ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@font-face {\\n  font-family: \\\"Lora\\\";\\n  src: url(\\\"/fonts/Lora/Lora-Regular.ttf\\\");\\n  font-style: normal;\\n  font-weight: 400;\\n  font-display: swap;\\n}\\n\\n@font-face {\\n  font-family: \\\"CormorantGaramond\\\";\\n  src: url(\\\"/fonts/CormorantGaramond/CormorantGaramond-Light.ttf\\\"),\\n       url(\\\"https://cdn.statically.io/gh/khathawutc/khathawutc.github.io/main/fonts/CormorantGaramond/CormorantGaramond-Light.ttf\\\");\\n}\\n\\n@font-face {\\n  font-family: \\\"CormorantGaramond\\\";\\n  src: url(\\\"/fonts/CormorantGaramond/CormorantGaramond-Bold.ttf\\\"),\\n       url(\\\"https://cdn.statically.io/gh/khathawutc/khathawutc.github.io/main/fonts/CormorantGaramond/CormorantGaramond-Bold.ttf\\\");\\n  font-style: bold;\\n  font-weight: 800;\\n}\\n\\n@font-face {\\n  font-family: \\\"CormorantGaramond\\\";\\n  src: url(\\\"/fonts/CormorantGaramond/CormorantGaramond-LightItalic.ttf\\\");\\n  font-style: italic;\\n  font-weight: normal;\\n}\\n\\nhtml,\\nbody {\\n  height: 100vh; /* Fallback for browsers that do not support Custom Properties */\\n  height: calc(var(--vh, 1vh) * 100);\\n\\n  padding: 0;\\n  margin: 0;\\n  /* background: #F6F5F0; */\\n  background: #F0E4D8;\\n  font-family: \\\"CormorantGaramond\\\";\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n.caret {\\n  height: 66px;\\n  border-right: 0.05em solid;\\n  animation: caret 1s steps(1) infinite;\\n  padding: 0 2px;\\n}\\n\\n@keyframes caret {\\n  50% {\\n    border-color: transparent;\\n  }\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,mBAAmB;EACnB,wCAAwC;EACxC,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gCAAgC;EAChC;mIACiI;AACnI;;AAEA;EACE,gCAAgC;EAChC;kIACgI;EAChI,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;EAChC,sEAAsE;EACtE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;;EAEE,aAAa,EAAE,gEAAgE;EAC/E,kCAAkC;;EAElC,UAAU;EACV,SAAS;EACT,yBAAyB;EACzB,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,0BAA0B;EAC1B,qCAAqC;EACrC,cAAc;AAChB;;AAEA;EACE;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,sBAAsB;AACxB\",\"sourcesContent\":[\"@font-face {\\n  font-family: \\\"Lora\\\";\\n  src: url(\\\"/fonts/Lora/Lora-Regular.ttf\\\");\\n  font-style: normal;\\n  font-weight: 400;\\n  font-display: swap;\\n}\\n\\n@font-face {\\n  font-family: \\\"CormorantGaramond\\\";\\n  src: url(\\\"/fonts/CormorantGaramond/CormorantGaramond-Light.ttf\\\"),\\n       url(\\\"https://cdn.statically.io/gh/khathawutc/khathawutc.github.io/main/fonts/CormorantGaramond/CormorantGaramond-Light.ttf\\\");\\n}\\n\\n@font-face {\\n  font-family: \\\"CormorantGaramond\\\";\\n  src: url(\\\"/fonts/CormorantGaramond/CormorantGaramond-Bold.ttf\\\"),\\n       url(\\\"https://cdn.statically.io/gh/khathawutc/khathawutc.github.io/main/fonts/CormorantGaramond/CormorantGaramond-Bold.ttf\\\");\\n  font-style: bold;\\n  font-weight: 800;\\n}\\n\\n@font-face {\\n  font-family: \\\"CormorantGaramond\\\";\\n  src: url(\\\"/fonts/CormorantGaramond/CormorantGaramond-LightItalic.ttf\\\");\\n  font-style: italic;\\n  font-weight: normal;\\n}\\n\\nhtml,\\nbody {\\n  height: 100vh; /* Fallback for browsers that do not support Custom Properties */\\n  height: calc(var(--vh, 1vh) * 100);\\n\\n  padding: 0;\\n  margin: 0;\\n  /* background: #F6F5F0; */\\n  background: #F0E4D8;\\n  font-family: \\\"CormorantGaramond\\\";\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n.caret {\\n  height: 66px;\\n  border-right: 0.05em solid;\\n  animation: caret 1s steps(1) infinite;\\n  padding: 0 2px;\\n}\\n\\n@keyframes caret {\\n  50% {\\n    border-color: transparent;\\n  }\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzE3MjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLGVBQWUsMEJBQTBCLCtDQUErQyx1QkFBdUIscUJBQXFCLHVCQUF1QixHQUFHLGdCQUFnQix1Q0FBdUMsK01BQStNLEdBQUcsZ0JBQWdCLHVDQUF1Qyw2TUFBNk0scUJBQXFCLHFCQUFxQixHQUFHLGdCQUFnQix1Q0FBdUMsNkVBQTZFLHVCQUF1Qix3QkFBd0IsR0FBRyxpQkFBaUIsa0JBQWtCLHlHQUF5RyxpQkFBaUIsY0FBYywyQkFBMkIsMkJBQTJCLHVDQUF1QyxHQUFHLE9BQU8sbUJBQW1CLDBCQUEwQixHQUFHLFlBQVksaUJBQWlCLCtCQUErQiwwQ0FBMEMsbUJBQW1CLEdBQUcsc0JBQXNCLFNBQVMsZ0NBQWdDLEtBQUssR0FBRyxPQUFPLDJCQUEyQixHQUFHLFNBQVMsbUZBQW1GLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sc0JBQXNCLGNBQWMsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLHNDQUFzQywwQkFBMEIsK0NBQStDLHVCQUF1QixxQkFBcUIsdUJBQXVCLEdBQUcsZ0JBQWdCLHVDQUF1QywrTUFBK00sR0FBRyxnQkFBZ0IsdUNBQXVDLDZNQUE2TSxxQkFBcUIscUJBQXFCLEdBQUcsZ0JBQWdCLHVDQUF1Qyw2RUFBNkUsdUJBQXVCLHdCQUF3QixHQUFHLGlCQUFpQixrQkFBa0IseUdBQXlHLGlCQUFpQixjQUFjLDJCQUEyQiwyQkFBMkIsdUNBQXVDLEdBQUcsT0FBTyxtQkFBbUIsMEJBQTBCLEdBQUcsWUFBWSxpQkFBaUIsK0JBQStCLDBDQUEwQyxtQkFBbUIsR0FBRyxzQkFBc0IsU0FBUyxnQ0FBZ0MsS0FBSyxHQUFHLE9BQU8sMkJBQTJCLEdBQUcscUJBQXFCO0FBQ3BnSDtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnRzL0xvcmEvTG9yYS1SZWd1bGFyLnR0ZlxcXCIpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkNvcm1vcmFudEdhcmFtb25kXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvQ29ybW9yYW50R2FyYW1vbmQvQ29ybW9yYW50R2FyYW1vbmQtTGlnaHQudHRmXFxcIiksXFxuICAgICAgIHVybChcXFwiaHR0cHM6Ly9jZG4uc3RhdGljYWxseS5pby9naC9raGF0aGF3dXRjL2toYXRoYXd1dGMuZ2l0aHViLmlvL21haW4vZm9udHMvQ29ybW9yYW50R2FyYW1vbmQvQ29ybW9yYW50R2FyYW1vbmQtTGlnaHQudHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3Jtb3JhbnRHYXJhbW9uZFxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnRzL0Nvcm1vcmFudEdhcmFtb25kL0Nvcm1vcmFudEdhcmFtb25kLUJvbGQudHRmXFxcIiksXFxuICAgICAgIHVybChcXFwiaHR0cHM6Ly9jZG4uc3RhdGljYWxseS5pby9naC9raGF0aGF3dXRjL2toYXRoYXd1dGMuZ2l0aHViLmlvL21haW4vZm9udHMvQ29ybW9yYW50R2FyYW1vbmQvQ29ybW9yYW50R2FyYW1vbmQtQm9sZC50dGZcXFwiKTtcXG4gIGZvbnQtc3R5bGU6IGJvbGQ7XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ29ybW9yYW50R2FyYW1vbmRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9Db3Jtb3JhbnRHYXJhbW9uZC9Db3Jtb3JhbnRHYXJhbW9uZC1MaWdodEl0YWxpYy50dGZcXFwiKTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoOyAvKiBGYWxsYmFjayBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBDdXN0b20gUHJvcGVydGllcyAqL1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcXG5cXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICAvKiBiYWNrZ3JvdW5kOiAjRjZGNUYwOyAqL1xcbiAgYmFja2dyb3VuZDogI0YwRTREODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ29ybW9yYW50R2FyYW1vbmRcXFwiO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY2FyZXQge1xcbiAgaGVpZ2h0OiA2NnB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAwLjA1ZW0gc29saWQ7XFxuICBhbmltYXRpb246IGNhcmV0IDFzIHN0ZXBzKDEpIGluZmluaXRlO1xcbiAgcGFkZGluZzogMCAycHg7XFxufVxcblxcbkBrZXlmcmFtZXMgY2FyZXQge1xcbiAgNTAlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQzttSUFDaUk7QUFDbkk7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEM7a0lBQ2dJO0VBQ2hJLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsc0VBQXNFO0VBQ3RFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsYUFBYSxFQUFFLGdFQUFnRTtFQUMvRSxrQ0FBa0M7O0VBRWxDLFVBQVU7RUFDVixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixxQ0FBcUM7RUFDckMsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9Mb3JhL0xvcmEtUmVndWxhci50dGZcXFwiKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3Jtb3JhbnRHYXJhbW9uZFxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnRzL0Nvcm1vcmFudEdhcmFtb25kL0Nvcm1vcmFudEdhcmFtb25kLUxpZ2h0LnR0ZlxcXCIpLFxcbiAgICAgICB1cmwoXFxcImh0dHBzOi8vY2RuLnN0YXRpY2FsbHkuaW8vZ2gva2hhdGhhd3V0Yy9raGF0aGF3dXRjLmdpdGh1Yi5pby9tYWluL2ZvbnRzL0Nvcm1vcmFudEdhcmFtb25kL0Nvcm1vcmFudEdhcmFtb25kLUxpZ2h0LnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ29ybW9yYW50R2FyYW1vbmRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9Db3Jtb3JhbnRHYXJhbW9uZC9Db3Jtb3JhbnRHYXJhbW9uZC1Cb2xkLnR0ZlxcXCIpLFxcbiAgICAgICB1cmwoXFxcImh0dHBzOi8vY2RuLnN0YXRpY2FsbHkuaW8vZ2gva2hhdGhhd3V0Yy9raGF0aGF3dXRjLmdpdGh1Yi5pby9tYWluL2ZvbnRzL0Nvcm1vcmFudEdhcmFtb25kL0Nvcm1vcmFudEdhcmFtb25kLUJvbGQudHRmXFxcIik7XFxuICBmb250LXN0eWxlOiBib2xkO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkNvcm1vcmFudEdhcmFtb25kXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udHMvQ29ybW9yYW50R2FyYW1vbmQvQ29ybW9yYW50R2FyYW1vbmQtTGlnaHRJdGFsaWMudHRmXFxcIik7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDsgLyogRmFsbGJhY2sgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgQ3VzdG9tIFByb3BlcnRpZXMgKi9cXG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XFxuXFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogYmFja2dyb3VuZDogI0Y2RjVGMDsgKi9cXG4gIGJhY2tncm91bmQ6ICNGMEU0RDg7XFxuICBmb250LWZhbWlseTogXFxcIkNvcm1vcmFudEdhcmFtb25kXFxcIjtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNhcmV0IHtcXG4gIGhlaWdodDogNjZweDtcXG4gIGJvcmRlci1yaWdodDogMC4wNWVtIHNvbGlkO1xcbiAgYW5pbWF0aW9uOiBjYXJldCAxcyBzdGVwcygxKSBpbmZpbml0ZTtcXG4gIHBhZGRpbmc6IDAgMnB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNhcmV0IHtcXG4gIDUwJSB7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/globals.css\n");

/***/ })

})