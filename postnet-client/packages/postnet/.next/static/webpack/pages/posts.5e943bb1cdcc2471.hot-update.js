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

/***/ "./components/NavBar.tsx":
/*!*******************************!*\
  !*** ./components/NavBar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"../../node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ \"../../node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks */ \"./hooks/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar NavBar = function() {\n    _s1();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = _slicedToArray((0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAuthData)(), 5), admin = ref[2], logoutUser = ref[4];\n    var SubMenu = antd__WEBPACK_IMPORTED_MODULE_4__.Menu.SubMenu;\n    var handleLogout = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        logoutUser();\n        router.push(\"/login\");\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n        style: {\n            float: 'right'\n        },\n        theme: \"dark\",\n        mode: \"horizontal\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\components\\\\NavBar.tsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                onClick: function() {\n                    return router.push('/posts');\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.HomeOutlined, {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 70\n                        },\n                        __self: _this\n                    }),\n                    \" Domů\"\n                ]\n            }, \"1\"),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                onClick: function() {\n                    return router.push('/friends');\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.TeamOutlined, {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 72\n                        },\n                        __self: _this\n                    }),\n                    \" Př\\xe1tel\\xe9\"\n                ]\n            }, \"2\"),\n            admin === 'true' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                onClick: function() {\n                    return router.push('/admin');\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 37\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.SettingOutlined, {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 94\n                        },\n                        __self: _this\n                    }),\n                    \" Administrace\"\n                ]\n            }, \"3\"),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubMenu, {\n                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.UserOutlined, {\n                }),\n                title: \"\\xdačet\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                    onClick: function() {\n                        return handleLogout();\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\components\\\\NavBar.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"Odhl\\xe1sit se\"\n                }, \"setting:2\")\n            }, \"account\")\n        ]\n    }));\n};\n_s1(NavBar, \"tYhN0dbr+7q6CC7T3t7gnf5MAQ8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAuthData\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2Y7QUFDa0U7QUFDdEQ7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdwQyxHQUFLLENBQUNTLE1BQU0sR0FBRyxRQUFRLEdBQUYsQ0FBQzs7SUFFbEIsR0FBSyxDQUFDQyxNQUFNLEdBQUdILHNEQUFTO0lBQ3hCLEdBQUssQ0FBeUJDLEdBQWEsa0JBQWJBLG1EQUFXLFFBQWhDRyxLQUFLLEdBQWdCSCxHQUFhLEtBQTNCSSxVQUFVLEdBQUlKLEdBQWE7SUFDM0MsR0FBSyxDQUFFSyxPQUFPLEdBQUlYLDhDQUFKO0lBRWQsR0FBSyxDQUFDWSxZQUFZLEdBQUdiLGtEQUFXLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDcENXLFVBQVU7UUFDVkYsTUFBTSxDQUFDSyxJQUFJLENBQUMsQ0FBUTtJQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSx1RUFDRGIsc0NBQUk7UUFBQ2MsS0FBSyxFQUFFLENBQUNDO1lBQUFBLEtBQUssRUFBRSxDQUFPO1FBQUEsQ0FBQztRQUFFQyxLQUFLLEVBQUMsQ0FBTTtRQUFDQyxJQUFJLEVBQUMsQ0FBWTs7Ozs7Ozs7a0ZBQ3hEakIsMkNBQVM7Z0JBQVNtQixPQUFPLEVBQUUsUUFBUTtvQkFBRlgsTUFBTSxDQUFOQSxNQUFNLENBQUNLLElBQUksQ0FBQyxDQUFROzs7Ozs7Ozs7eUZBQUlaLDJEQUFZOzs7Ozs7OztvQkFBRSxDQUFLOztlQUE5RCxDQUFHO2tGQUNoQkQsMkNBQVE7Z0JBQVNtQixPQUFPLEVBQUUsUUFBUTtvQkFBRlgsTUFBTSxDQUFOQSxNQUFNLENBQUNLLElBQUksQ0FBQyxDQUFVOzs7Ozs7Ozs7eUZBQUlWLDJEQUFZOzs7Ozs7OztvQkFBRSxDQUFROztlQUFuRSxDQUFHO1lBQ2JNLEtBQUUsS0FBSyxDQUFNLCtFQUFPVCwyQ0FBUztnQkFBU21CLE9BQU8sRUFBRSxRQUFRO29CQUFGWCxNQUFNLENBQU5BLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLENBQVE7Ozs7Ozs7Ozt5RkFBSVgsOERBQWU7Ozs7Ozs7O29CQUFFLENBQWE7O2VBQXpFLENBQUc7aUZBRXpDUyxPQUFPO2dCQUFlUyxJQUFJLHVFQUFHaEIsMkRBQVk7O2dCQUFJaUIsS0FBSyxFQUFDLENBQU07Ozs7Ozs7K0ZBQ25EckIsMkNBQU87b0JBQWlCbUIsT0FBTyxFQUFFLFFBQVE7d0JBQUZQLE1BQU0sQ0FBTkEsWUFBWTs7Ozs7Ozs7OEJBQUksQ0FBVzttQkFBdEQsQ0FBVztlQURqQixDQUFTOzs7QUFNbEMsQ0FBQztJQXZCS0wsTUFBTTs7UUFFT0Ysa0RBQVM7UUFDTUMsK0NBQVc7OztLQUh2Q0MsTUFBTTtBQXlCWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdkJhci50c3g/MzAyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TWVudX0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHtIb21lT3V0bGluZWQsIFNldHRpbmdPdXRsaW5lZCwgVGVhbU91dGxpbmVkLCBVc2VyT3V0bGluZWR9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7dXNlQXV0aERhdGF9IGZyb20gXCIuLi9ob29rc1wiO1xyXG5cclxuXHJcbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFssLGFkbWluLCxsb2dvdXRVc2VyXSA9IHVzZUF1dGhEYXRhKCk7XHJcbiAgICBjb25zdCB7U3ViTWVudX0gPSBNZW51O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBsb2dvdXRVc2VyKCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIilcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPE1lbnUgc3R5bGU9e3tmbG9hdDogJ3JpZ2h0J319IHRoZW1lPVwiZGFya1wiIG1vZGU9XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvcG9zdHMnKX0+PEhvbWVPdXRsaW5lZC8+IERvbcWvPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMlwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvZnJpZW5kcycpfT48VGVhbU91dGxpbmVkLz4gUMWZw6F0ZWzDqTwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICB7KGFkbWluID09PSAndHJ1ZScpICAmJiA8TWVudS5JdGVtIGtleT1cIjNcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2FkbWluJyl9PjxTZXR0aW5nT3V0bGluZWQvPiBBZG1pbmlzdHJhY2U8L01lbnUuSXRlbT59XHJcblxyXG4gICAgICAgICAgICA8U3ViTWVudSBrZXk9XCJhY2NvdW50XCIgaWNvbj17PFVzZXJPdXRsaW5lZC8+fSB0aXRsZT1cIsOaxI1ldFwiPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJzZXR0aW5nOjJcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMb2dvdXQoKX0+T2RobMOhc2l0IHNlPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDwvU3ViTWVudT5cclxuXHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsIk1lbnUiLCJIb21lT3V0bGluZWQiLCJTZXR0aW5nT3V0bGluZWQiLCJUZWFtT3V0bGluZWQiLCJVc2VyT3V0bGluZWQiLCJ1c2VSb3V0ZXIiLCJ1c2VBdXRoRGF0YSIsIk5hdkJhciIsInJvdXRlciIsImFkbWluIiwibG9nb3V0VXNlciIsIlN1Yk1lbnUiLCJoYW5kbGVMb2dvdXQiLCJwdXNoIiwic3R5bGUiLCJmbG9hdCIsInRoZW1lIiwibW9kZSIsIkl0ZW0iLCJvbkNsaWNrIiwiaWNvbiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavBar.tsx\n");

/***/ })

});