"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./hooks/useAuthData.tsx":
/*!*******************************!*\
  !*** ./hooks/useAuthData.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie */ \"../../node_modules/react-cookie/es6/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nvar useAuthData = function() {\n    _s1();\n    var ref = _slicedToArray((0,react_cookie__WEBPACK_IMPORTED_MODULE_1__.useCookies)([\n        'accessToken',\n        'email',\n        'name',\n        'admin'\n    ]), 3), cookies = ref[0], setCookie = ref[1], removeCookie = ref[2];\n    var cookieScope = {\n        path: '/'\n    };\n    var loginUser = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(userData) {\n        setCookie(\"accessToken\", userData.accessToken, cookieScope);\n        setCookie(\"email\", userData.email, cookieScope);\n        setCookie(\"name\", userData.name, cookieScope);\n        setCookie(\"admin\", userData.admin, cookieScope);\n    }, []);\n    var logoutUser = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function() {\n        removeCookie(\"accessToken\", cookieScope);\n        removeCookie(\"email\", cookieScope);\n        removeCookie(\"name\", cookieScope);\n        removeCookie(\"admin\", cookieScope);\n    }, []);\n    return [\n        cookies.name,\n        cookies.email,\n        cookies.admin === 'true',\n        loginUser,\n        logoutUser\n    ];\n};\n_s1(useAuthData, \"2ixxTDsBC2fPeA+Y8Y7VIrQcM9k=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_1__.useCookies\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useAuthData);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VBdXRoRGF0YS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUM7QUFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXpDLEdBQUssQ0FBQ0UsV0FBVyxHQUFHLFFBQ25CLEdBS0ksQ0FBQzs7SUFFRixHQUFLLENBQXNDRCxHQUFxRCxrQkFBckRBLHdEQUFVLENBQUMsQ0FBQztRQUFBLENBQWE7UUFBRSxDQUFPO1FBQUUsQ0FBTTtRQUFFLENBQU87SUFBQSxDQUFDLE9BQXhGRSxPQUFPLEdBQTZCRixHQUFxRCxLQUFoRkcsU0FBUyxHQUFrQkgsR0FBcUQsS0FBckVJLFlBQVksR0FBSUosR0FBcUQ7SUFDaEcsR0FBSyxDQUFDSyxXQUFXLEdBQXFCLENBQUM7UUFBQ0MsSUFBSSxFQUFFLENBQUc7SUFBQSxDQUFDO0lBRWxELEdBQUssQ0FBQ0MsU0FBUyxHQUFHUixrREFBVyxDQUFDLFFBQVEsQ0FBUFMsUUFBa0IsRUFBSyxDQUFDO1FBQ25ETCxTQUFTLENBQUMsQ0FBYSxjQUFFSyxRQUFRLENBQUNDLFdBQVcsRUFBRUosV0FBVztRQUMxREYsU0FBUyxDQUFDLENBQU8sUUFBRUssUUFBUSxDQUFDRSxLQUFLLEVBQUVMLFdBQVc7UUFDOUNGLFNBQVMsQ0FBQyxDQUFNLE9BQUVLLFFBQVEsQ0FBQ0csSUFBSSxFQUFFTixXQUFXO1FBQzVDRixTQUFTLENBQUMsQ0FBTyxRQUFFSyxRQUFRLENBQUNJLEtBQUssRUFBRVAsV0FBVztJQUNsRCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsR0FBSyxDQUFDUSxVQUFVLEdBQUdkLGtEQUFXLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDbENLLFlBQVksQ0FBQyxDQUFhLGNBQUVDLFdBQVc7UUFDdkNELFlBQVksQ0FBQyxDQUFPLFFBQUVDLFdBQVc7UUFDakNELFlBQVksQ0FBQyxDQUFNLE9BQUVDLFdBQVc7UUFDaENELFlBQVksQ0FBQyxDQUFPLFFBQUVDLFdBQVc7SUFFckMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUlMLE1BQU0sQ0FBQyxDQUFDSDtRQUFBQSxPQUFPLENBQUNTLElBQUk7UUFBRVQsT0FBTyxDQUFDUSxLQUFLO1FBQUdSLE9BQU8sQ0FBQ1UsS0FBSyxLQUFLLENBQU07UUFBR0wsU0FBUztRQUFFTSxVQUFVO0lBQUEsQ0FBQztBQUMzRixDQUFDO0lBN0JLWixXQUFXOztRQVE4QkQsb0RBQVU7OztBQXVCekQsK0RBQWVDLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VBdXRoRGF0YS50c3g/MDhmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xyXG5pbXBvcnQgeyBDb29raWVTZXRPcHRpb25zIH0gZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIjtcclxuXHJcbnR5cGUgVXNlckRhdGEgPSB7XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBlbWFpbDogc3RyaW5nLFxyXG4gICAgYWRtaW46IGJvb2xlYW4sXHJcbiAgICBhY2Nlc3NUb2tlbjogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IHVzZUF1dGhEYXRhID0gKCk6IFtcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIGVtYWlsOiBzdHJpbmcsXHJcbiAgICBhZG1pbjogYm9vbGVhbixcclxuICAgIGxvZ2luVXNlcjogKHVzZXJEYXRhOiBVc2VyRGF0YSkgPT4gdm9pZCxcclxuICAgIGxvZ291dFVzZXI6ICgpID0+IHZvaWRcclxuXSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZSwgcmVtb3ZlQ29va2llXSA9IHVzZUNvb2tpZXMoWydhY2Nlc3NUb2tlbicsICdlbWFpbCcsICduYW1lJywgJ2FkbWluJ10pO1xyXG4gICAgY29uc3QgY29va2llU2NvcGU6IENvb2tpZVNldE9wdGlvbnMgPSB7IHBhdGg6ICcvJ307XHJcblxyXG4gICAgY29uc3QgbG9naW5Vc2VyID0gdXNlQ2FsbGJhY2soKHVzZXJEYXRhOiBVc2VyRGF0YSkgPT4ge1xyXG4gICAgICAgIHNldENvb2tpZShcImFjY2Vzc1Rva2VuXCIsIHVzZXJEYXRhLmFjY2Vzc1Rva2VuLCBjb29raWVTY29wZSk7XHJcbiAgICAgICAgc2V0Q29va2llKFwiZW1haWxcIiwgdXNlckRhdGEuZW1haWwsIGNvb2tpZVNjb3BlKVxyXG4gICAgICAgIHNldENvb2tpZShcIm5hbWVcIiwgdXNlckRhdGEubmFtZSwgY29va2llU2NvcGUpO1xyXG4gICAgICAgIHNldENvb2tpZShcImFkbWluXCIsIHVzZXJEYXRhLmFkbWluLCBjb29raWVTY29wZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgbG9nb3V0VXNlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICByZW1vdmVDb29raWUoXCJhY2Nlc3NUb2tlblwiLCBjb29raWVTY29wZSk7XHJcbiAgICAgICAgcmVtb3ZlQ29va2llKFwiZW1haWxcIiwgY29va2llU2NvcGUpO1xyXG4gICAgICAgIHJlbW92ZUNvb2tpZShcIm5hbWVcIiwgY29va2llU2NvcGUpO1xyXG4gICAgICAgIHJlbW92ZUNvb2tpZShcImFkbWluXCIsIGNvb2tpZVNjb3BlKTtcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gW2Nvb2tpZXMubmFtZSwgY29va2llcy5lbWFpbCwgKGNvb2tpZXMuYWRtaW4gPT09ICd0cnVlJyksIGxvZ2luVXNlciwgbG9nb3V0VXNlcl07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUF1dGhEYXRhOyJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUNvb2tpZXMiLCJ1c2VBdXRoRGF0YSIsImNvb2tpZXMiLCJzZXRDb29raWUiLCJyZW1vdmVDb29raWUiLCJjb29raWVTY29wZSIsInBhdGgiLCJsb2dpblVzZXIiLCJ1c2VyRGF0YSIsImFjY2Vzc1Rva2VuIiwiZW1haWwiLCJuYW1lIiwiYWRtaW4iLCJsb2dvdXRVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useAuthData.tsx\n");

/***/ })

});