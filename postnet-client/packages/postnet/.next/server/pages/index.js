/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie */ \"react-cookie\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/dist/antd.css */ \"../../node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Home() {\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_1__.useCookies)([\n        'accessToken'\n    ]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    if (cookies.accessToken) {\n        router.push('/posts');\n    }\n    return cookies.accessToken ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n        style: {\n            minHeight: \"100vh\"\n        },\n        __source: {\n            fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\pages\\\\index.tsx\",\n            lineNumber: 17,\n            columnNumber: 9\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Space, {\n            size: 100,\n            direction: \"vertical\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\pages\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Layout.Header, {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\pages\\\\index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Layout.Content, {\n                    style: {\n                        marginLeft: 20\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\pages\\\\index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                            justify: \"center\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\pages\\\\index.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 21\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Typography.Title, {\n                                level: 2,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\pages\\\\index.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 25\n                                },\n                                __self: this,\n                                children: \"V\\xedtejte v PostNet\"\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                            justify: \"center\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\pages\\\\index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                type: \"primary\",\n                                onClick: ()=>router.push(\"/login\")\n                                ,\n                                style: {\n                                    marginTop: 20,\n                                    marginLeft: 10,\n                                    marginBottom: 20,\n                                    width: '200px'\n                                },\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\pages\\\\index.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 25\n                                },\n                                __self: this,\n                                children: \"Přihl\\xe1sit se\"\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                            justify: \"center\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\pages\\\\index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 21\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                type: \"primary\",\n                                onClick: ()=>router.push(\"/register\")\n                                ,\n                                style: {\n                                    width: '200px',\n                                    marginLeft: 10,\n                                    background: 'rgb(36,224,15)',\n                                    borderColor: 'rgb(36,224,15)'\n                                },\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\42072\\\\Desktop\\\\pia-sem\\\\pia-client\\\\packages\\\\pia\\\\pages\\\\index.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 25\n                                },\n                                __self: this,\n                                children: \"Vytvořit nov\\xfd \\xfačet\"\n                            })\n                        })\n                    ]\n                })\n            ]\n        })\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDRjtBQUMyQjtBQUV2QztBQUNFO1NBRWxCUSxJQUFJLEdBQUcsQ0FBQztJQUNiLEtBQUssRUFBRUMsT0FBTyxJQUFJVCx3REFBVSxDQUFDLENBQUM7UUFBQSxDQUFhO0lBQUEsQ0FBQztJQUM1QyxLQUFLLENBQUNVLE1BQU0sR0FBR1Qsc0RBQVM7SUFFeEIsRUFBRSxFQUFFUSxPQUFPLENBQUNFLFdBQVcsRUFBRSxDQUFDO1FBQ3RCRCxNQUFNLENBQUNFLElBQUksQ0FBQyxDQUFRO0lBQ3hCLENBQUM7SUFFRCxNQUFNLENBQUNILE9BQU8sQ0FBQ0UsV0FBVyxHQUFHLElBQUksd0VBQzVCUix3Q0FBTTtRQUFDVSxLQUFLLEVBQUUsQ0FBQ0M7WUFBQUEsU0FBUyxFQUFFLENBQU87UUFBQSxDQUFDOzs7Ozs7O3dGQUM5QlQsdUNBQUs7WUFBQ1UsSUFBSSxFQUFFLEdBQUc7WUFBRUMsU0FBUyxFQUFDLENBQVU7Ozs7Ozs7O3FGQUNqQ2IsK0NBQWE7Ozs7Ozs7O3NGQUViQSxnREFBYztvQkFBQ1UsS0FBSyxFQUFFLENBQUNNO3dCQUFBQSxVQUFVLEVBQUUsRUFBRTtvQkFBQSxDQUFDOzs7Ozs7Ozs2RkFDbENmLHFDQUFHOzRCQUFDZ0IsT0FBTyxFQUFDLENBQVE7Ozs7Ozs7MkdBQ2hCZCxrREFBZ0I7Z0NBQUNnQixLQUFLLEVBQUUsQ0FBQzs7Ozs7OzswQ0FBRSxDQUFpQjs7OzZGQUUvQ2xCLHFDQUFFOzRCQUFDZ0IsT0FBTyxFQUFDLENBQVE7Ozs7Ozs7MkdBQ2hCbEIsd0NBQU07Z0NBQUNxQixJQUFJLEVBQUMsQ0FBUztnQ0FDZEMsT0FBTyxNQUFRZCxNQUFNLENBQUNFLElBQUksQ0FBQyxDQUFROztnQ0FDbkNDLEtBQUssRUFBRSxDQUFDO29DQUNKWSxTQUFTLEVBQUUsRUFBRTtvQ0FBRU4sVUFBVSxFQUFFLEVBQUU7b0NBQzdCTyxZQUFZLEVBQUUsRUFBRTtvQ0FBRUMsS0FBSyxFQUFFLENBQU87Z0NBQ3BDLENBQUM7Ozs7Ozs7MENBQUUsQ0FFWDs7OzZGQUVIdkIscUNBQUc7NEJBQUNnQixPQUFPLEVBQUMsQ0FBUTs7Ozs7OzsyR0FDaEJsQix3Q0FBTTtnQ0FBQ3FCLElBQUksRUFBQyxDQUFTO2dDQUNkQyxPQUFPLE1BQVFkLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLENBQVc7O2dDQUN0Q0MsS0FBSyxFQUFFLENBQUM7b0NBQ0pjLEtBQUssRUFBRSxDQUFPO29DQUFFUixVQUFVLEVBQUUsRUFBRTtvQ0FDOUJTLFVBQVUsRUFBRSxDQUFnQjtvQ0FDNUJDLFdBQVcsRUFBRSxDQUFnQjtnQ0FDakMsQ0FBQzs7Ozs7OzswQ0FBRSxDQUVYOzs7Ozs7OztBQU94QixDQUFDO0FBRUQsaUVBQWVyQixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AaHJ1YnlqL3BpYS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQ29va2llc30gZnJvbSAncmVhY3QtY29va2llJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7QnV0dG9uLCBDb2wsIExheW91dCwgUm93LCBTcGFjZSwgVHlwb2dyYXBoeX0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ2FjY2Vzc1Rva2VuJ10pO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgaWYgKGNvb2tpZXMuYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL3Bvc3RzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvb2tpZXMuYWNjZXNzVG9rZW4gPyBudWxsIDogKFxyXG4gICAgICAgIDxMYXlvdXQgc3R5bGU9e3ttaW5IZWlnaHQ6IFwiMTAwdmhcIn19PlxyXG4gICAgICAgICAgICA8U3BhY2Ugc2l6ZT17MTAwfSBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgPExheW91dC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0LkNvbnRlbnQgc3R5bGU9e3ttYXJnaW5MZWZ0OiAyMH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeS5UaXRsZSBsZXZlbD17Mn0+VsOtdGVqdGUgdiBQb3N0TmV0PC9UeXBvZ3JhcGh5LlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9sb2dpblwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDIwLCBtYXJnaW5MZWZ0OiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAyMCwgd2lkdGg6ICcyMDBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFDFmWlobMOhc2l0IHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9yZWdpc3RlclwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzIwMHB4JywgbWFyZ2luTGVmdDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMzYsMjI0LDE1KScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiKDM2LDIyNCwxNSknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWeXR2b8WZaXQgbm92w70gw7rEjWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQuQ29udGVudD5cclxuICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJ1c2VDb29raWVzIiwidXNlUm91dGVyIiwiQnV0dG9uIiwiTGF5b3V0IiwiUm93IiwiU3BhY2UiLCJUeXBvZ3JhcGh5IiwiUmVhY3QiLCJIb21lIiwiY29va2llcyIsInJvdXRlciIsImFjY2Vzc1Rva2VuIiwicHVzaCIsInN0eWxlIiwibWluSGVpZ2h0Iiwic2l6ZSIsImRpcmVjdGlvbiIsIkhlYWRlciIsIkNvbnRlbnQiLCJtYXJnaW5MZWZ0IiwianVzdGlmeSIsIlRpdGxlIiwibGV2ZWwiLCJ0eXBlIiwib25DbGljayIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwiYmFja2dyb3VuZCIsImJvcmRlckNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "../../node_modules/antd/dist/antd.css":
/*!*********************************************!*\
  !*** ../../node_modules/antd/dist/antd.css ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-cookie");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();