"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"../../node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"../../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"../../node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"../../node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction Home() {\n    _s1();\n    var ref = _slicedToArray((0,react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies)([\n        'accessToken'\n    ]), 1), cookies = ref[0];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    if (cookies.accessToken) {\n        router.push('/posts');\n    }\n    return cookies.accessToken ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__.Layout, {\n        style: {\n            minHeight: \"100vh\"\n        },\n        __source: {\n            fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\pages\\\\index.tsx\",\n            lineNumber: 17,\n            columnNumber: 9\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__.Space, {\n            size: 100,\n            direction: \"vertical\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\pages\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__.Layout.Header, {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\pages\\\\index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__.Layout.Content, {\n                    style: {\n                        marginLeft: 20\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\pages\\\\index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__.Typography.Title, {\n                            level: 2,\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\pages\\\\index.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 21\n                            },\n                            __self: this,\n                            children: \"V\\xedtejte v PostNet\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                            gutter: {\n                                xs: 8,\n                                sm: 16,\n                                md: 24,\n                                lg: 102\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\pages\\\\index.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 21\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                type: \"primary\",\n                                onClick: function() {\n                                    return router.push(\"/login\");\n                                },\n                                style: {\n                                    marginTop: 20,\n                                    marginLeft: 10,\n                                    marginBottom: 20,\n                                    width: '200px'\n                                },\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\pages\\\\index.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 25\n                                },\n                                __self: this,\n                                children: \"Přihl\\xe1sit se\"\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            type: \"primary\",\n                            onClick: function() {\n                                return router.push(\"/register\");\n                            },\n                            style: {\n                                width: '200px',\n                                marginLeft: 10,\n                                background: 'rgb(36,224,15)',\n                                borderColor: 'rgb(36,224,15)'\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\pages\\\\index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            },\n                            __self: this,\n                            children: \"Vytvořit nov\\xfd \\xfačet\"\n                        })\n                    ]\n                })\n            ]\n        })\n    });\n}\n_s1(Home, \"n7/AUuND60Xh8nwd65Po1zUxcq4=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNGO0FBQzJCO0FBRXZDO0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUVsQlEsSUFBSSxHQUFHLENBQUM7O0lBQ2IsR0FBSyxDQUFhUixHQUEyQixrQkFBM0JBLHdEQUFVLENBQUMsQ0FBQztRQUFBLENBQWE7SUFBQSxDQUFDLE9BQXJDUyxPQUFPLEdBQUlULEdBQTJCO0lBQzdDLEdBQUssQ0FBQ1UsTUFBTSxHQUFHVCxzREFBUztJQUV4QixFQUFFLEVBQUVRLE9BQU8sQ0FBQ0UsV0FBVyxFQUFFLENBQUM7UUFDdEJELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLENBQVE7SUFDeEIsQ0FBQztJQUVELE1BQU0sQ0FBQ0gsT0FBTyxDQUFDRSxXQUFXLEdBQUcsSUFBSSx3RUFDNUJSLHdDQUFNO1FBQUNVLEtBQUssRUFBRSxDQUFDQztZQUFBQSxTQUFTLEVBQUUsQ0FBTztRQUFBLENBQUM7Ozs7Ozs7d0ZBQzlCVCx1Q0FBSztZQUFDVSxJQUFJLEVBQUUsR0FBRztZQUFFQyxTQUFTLEVBQUMsQ0FBVTs7Ozs7Ozs7cUZBQ2pDYiwrQ0FBYTs7Ozs7Ozs7c0ZBRWJBLGdEQUFjO29CQUFDVSxLQUFLLEVBQUUsQ0FBQzt3QkFBQ00sVUFBVSxFQUFFLEVBQUU7b0JBQUEsQ0FBQzs7Ozs7Ozs7NkZBQ25DYixrREFBZ0I7NEJBQUNlLEtBQUssRUFBRSxDQUFDOzs7Ozs7O3NDQUFFLENBQWlCOzs2RkFDM0NqQixxQ0FBRTs0QkFBQ2tCLE1BQU0sRUFBRSxDQUFDO2dDQUFDQyxFQUFFLEVBQUUsQ0FBQztnQ0FBRUMsRUFBRSxFQUFFLEVBQUU7Z0NBQUVDLEVBQUUsRUFBRSxFQUFFO2dDQUFFQyxFQUFFLEVBQUUsR0FBRzs0QkFBQyxDQUFDOzs7Ozs7OzJHQUMxQ3hCLHdDQUFNO2dDQUFDeUIsSUFBSSxFQUFDLENBQVM7Z0NBQ2RDLE9BQU8sRUFBRSxRQUFRO29DQUFGbEIsTUFBTSxDQUFOQSxNQUFNLENBQUNFLElBQUksQ0FBQyxDQUFROztnQ0FDbkNDLEtBQUssRUFBRSxDQUFDO29DQUNKZ0IsU0FBUyxFQUFFLEVBQUU7b0NBQUVWLFVBQVUsRUFBRSxFQUFFO29DQUM3QlcsWUFBWSxFQUFFLEVBQUU7b0NBQUVDLEtBQUssRUFBRSxDQUFPO2dDQUNwQyxDQUFDOzs7Ozs7OzBDQUFFLENBRVg7Ozs2RkFFSDdCLHdDQUFNOzRCQUFDeUIsSUFBSSxFQUFDLENBQVM7NEJBQ2RDLE9BQU8sRUFBRSxRQUFRO2dDQUFGbEIsTUFBTSxDQUFOQSxNQUFNLENBQUNFLElBQUksQ0FBQyxDQUFXOzs0QkFDdENDLEtBQUssRUFBRSxDQUFDO2dDQUNKa0IsS0FBSyxFQUFFLENBQU87Z0NBQUVaLFVBQVUsRUFBRSxFQUFFO2dDQUM5QmEsVUFBVSxFQUFFLENBQWdCO2dDQUM1QkMsV0FBVyxFQUFFLENBQWdCOzRCQUNqQyxDQUFDOzs7Ozs7O3NDQUFFLENBRVg7Ozs7Ozs7QUFNcEIsQ0FBQztJQXZDUXpCLElBQUk7O1FBQ1NSLG9EQUFVO1FBQ2JDLGtEQUFTOzs7S0FGbkJPLElBQUk7QUF5Q2IsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge0J1dHRvbiwgQ29sLCBMYXlvdXQsIFJvdywgU3BhY2UsIFR5cG9ncmFwaHl9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IFtjb29raWVzXSA9IHVzZUNvb2tpZXMoWydhY2Nlc3NUb2tlbiddKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGlmIChjb29raWVzLmFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9wb3N0cycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb29raWVzLmFjY2Vzc1Rva2VuID8gbnVsbCA6IChcclxuICAgICAgICA8TGF5b3V0IHN0eWxlPXt7bWluSGVpZ2h0OiBcIjEwMHZoXCJ9fT5cclxuICAgICAgICAgICAgPFNwYWNlIHNpemU9ezEwMH0gZGlyZWN0aW9uPVwidmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPExheW91dC5Db250ZW50IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDIwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkuVGl0bGUgbGV2ZWw9ezJ9PlbDrXRlanRlIHYgUG9zdE5ldDwvVHlwb2dyYXBoeS5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17eyB4czogOCwgc206IDE2LCBtZDogMjQsIGxnOiAxMDIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMjAsIG1hcmdpbkxlZnQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDIwLCB3aWR0aDogJzIwMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUMWZaWhsw6FzaXQgc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9yZWdpc3RlclwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyMDBweCcsIG1hcmdpbkxlZnQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMzYsMjI0LDE1KScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoMzYsMjI0LDE1KSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWeXR2b8WZaXQgbm92w70gw7rEjWV0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dC5Db250ZW50PlxyXG4gICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbInVzZUNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJCdXR0b24iLCJMYXlvdXQiLCJSb3ciLCJTcGFjZSIsIlR5cG9ncmFwaHkiLCJSZWFjdCIsIkhvbWUiLCJjb29raWVzIiwicm91dGVyIiwiYWNjZXNzVG9rZW4iLCJwdXNoIiwic3R5bGUiLCJtaW5IZWlnaHQiLCJzaXplIiwiZGlyZWN0aW9uIiwiSGVhZGVyIiwiQ29udGVudCIsIm1hcmdpbkxlZnQiLCJUaXRsZSIsImxldmVsIiwiZ3V0dGVyIiwieHMiLCJzbSIsIm1kIiwibGciLCJ0eXBlIiwib25DbGljayIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwiYmFja2dyb3VuZCIsImJvcmRlckNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});