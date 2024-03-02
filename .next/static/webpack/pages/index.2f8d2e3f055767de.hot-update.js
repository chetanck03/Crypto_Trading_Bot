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

/***/ "./components/Body/Profile.jsx":
/*!*************************************!*\
  !*** ./components/Body/Profile.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/index */ \"./utils/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./components/index.js\");\n\nvar _s = $RefreshSig$();\n\n//INTERNAL IMPORT\n\n\nconst Profile = (param)=>{\n    let { setActiveComponent, notifyError, notifySuccess } = param;\n    _s();\n    const [userDetails, setUserDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const user = JSON.parse(localStorage.getItem(\"userProfile\"));\n        setUserDetails(user);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"techwave_fn_content\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"techwave_fn_page\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"techwave_fn_user_profile_page\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"techwave_fn_pagetitle\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"title\",\n                                children: \"User Profile\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container small\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"techwave_fn_user_profile\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"user__profile\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"user_avatar\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    className: \"invert\",\n                                                    src: (userDetails === null || userDetails === void 0 ? void 0 : userDetails.image) || \"img/crypto.png\",\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                    lineNumber: 28,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                lineNumber: 27,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"user_details\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"item\",\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                                        className: \"subtitle\",\n                                                                        children: \"Name\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                                        lineNumber: 36,\n                                                                        columnNumber: 25\n                                                                    }, undefined),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                                        className: \"title\",\n                                                                        children: (userDetails === null || userDetails === void 0 ? void 0 : userDetails.name) || \"Update\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                                        lineNumber: 37,\n                                                                        columnNumber: 25\n                                                                    }, undefined)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                                lineNumber: 35,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                            lineNumber: 34,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"item\",\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                                        className: \"subtitle\",\n                                                                        children: \"Username\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                                        lineNumber: 43,\n                                                                        columnNumber: 25\n                                                                    }, undefined),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                                        className: \"title\",\n                                                                        children: (userDetails === null || userDetails === void 0 ? void 0 : userDetails.userName) || \"Update\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                                        lineNumber: 44,\n                                                                        columnNumber: 25\n                                                                    }, undefined)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                                lineNumber: 42,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                            lineNumber: 41,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"item\",\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                                        className: \"subtitle\",\n                                                                        children: \"Address\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                                        lineNumber: 50,\n                                                                        columnNumber: 25\n                                                                    }, undefined),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                                        className: \"title\",\n                                                                        children: (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.shortenAddress)(userDetails === null || userDetails === void 0 ? void 0 : userDetails.walletAddress) || \"Update\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                                        lineNumber: 51,\n                                                                        columnNumber: 25\n                                                                    }, undefined)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                                lineNumber: 49,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                            lineNumber: 48,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                    lineNumber: 33,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                lineNumber: 32,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                onClick: ()=>setActiveComponent(\"Setting\"),\n                                                className: \"user_edit fn__icon_button\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"img/lighticon/light-4.png\",\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"user__plan\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"plan_left\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                    className: \"subtitle\",\n                                                    children: \"Your key\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"info\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            children: \"Private Key : \"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                            lineNumber: 69,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        \"\",\n                                                        (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.shortenAddress)(userDetails === null || userDetails === void 0 ? void 0 : userDetails.praviteKey) || \"update\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"user__interests\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"title\",\n                                                children: \"Your Biography\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: (userDetails === null || userDetails === void 0 ? void 0 : userDetails.biography) || \"Update\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.Footer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Karanbir\\\\Desktop\\\\Crypto_Trading_Bot\\\\components\\\\Body\\\\Profile.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Profile, \"vMVsi9Sdx2y3/WOxDLAZ0/pCYGs=\");\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qm9keS9Qcm9maWxlLmpzeD8zODQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH1mcm9tICdyZWFjdCdcclxuXHJcbi8vSU5URVJOQUwgSU1QT1JUXHJcbmltcG9ydCB7c2hvcnRlbkFkZHJlc3N9IGZyb20gXCIuLi8uLi91dGlscy9pbmRleFwiO1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9pbmRleCc7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKHsgc2V0QWN0aXZlQ29tcG9uZW50LCBub3RpZnlFcnJvciwgbm90aWZ5U3VjY2VzcyB9KSA9PiB7XHJcbiAgY29uc3QgWyB1c2VyRGV0YWlscywgc2V0VXNlckRldGFpbHMgXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbVxyXG4gICAgICAgIChcInVzZXJQcm9maWxlXCIpKTtcclxuICAgICAgICBzZXRVc2VyRGV0YWlscyh1c2VyKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaHdhdmVfZm5fY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2h3YXZlX2ZuX3BhZ2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2h3YXZlX2ZuX3VzZXJfcHJvZmlsZV9wYWdlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2h3YXZlX2ZuX3BhZ2V0aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5Vc2VyIFByb2ZpbGU8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc21hbGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNod2F2ZV9mbl91c2VyX3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJfX3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcl9hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ludmVydCcgc3JjPXt1c2VyRGV0YWlscz8uaW1hZ2UgfHxcclxuICAgICAgICAgICAgICAgICAgXCJpbWcvY3J5cHRvLnBuZ1wifSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJfZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPk5hbWU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57dXNlckRldGFpbHM/Lm5hbWUgfHwgXCJVcGRhdGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlVzZXJuYW1lPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e3VzZXJEZXRhaWxzPy51c2VyTmFtZSB8fCBcIlVwZGF0ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+QWRkcmVzczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPntzaG9ydGVuQWRkcmVzcyh1c2VyRGV0YWlscz8ud2FsbGV0QWRkcmVzcykgfHwgXCJVcGRhdGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKT0+IHNldEFjdGl2ZUNvbXBvbmVudChcIlNldHRpbmdcIil9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyX2VkaXQgZm5fX2ljb25fYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvbGlnaHRpY29uL2xpZ2h0LTQucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyX19wbGFuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYW5fbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5Zb3VyIGtleTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Qcml2YXRlIEtleSA6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICB7c2hvcnRlbkFkZHJlc3ModXNlckRldGFpbHM/LnByYXZpdGVLZXkpIHx8IFwidXBkYXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyX19pbnRlcmVzdHNcIj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPllvdXIgQmlvZ3JhcGh5PC9oND5cclxuICAgICAgICAgICAgICAgIDxwPnt1c2VyRGV0YWlscz8uYmlvZ3JhcGh5IHx8IFwiVXBkYXRlXCJ9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3Rlci8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic2hvcnRlbkFkZHJlc3MiLCJGb290ZXIiLCJQcm9maWxlIiwic2V0QWN0aXZlQ29tcG9uZW50Iiwibm90aWZ5RXJyb3IiLCJub3RpZnlTdWNjZXNzIiwidXNlckRldGFpbHMiLCJzZXRVc2VyRGV0YWlscyIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInVsIiwibGkiLCJoNCIsImgzIiwibmFtZSIsInVzZXJOYW1lIiwid2FsbGV0QWRkcmVzcyIsImEiLCJvbkNsaWNrIiwicCIsInNwYW4iLCJwcmF2aXRlS2V5IiwiYmlvZ3JhcGh5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Body/Profile.jsx\n"));

/***/ })

});