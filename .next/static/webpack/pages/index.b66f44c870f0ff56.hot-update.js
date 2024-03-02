/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Body/Trading.jsx":
/*!*************************************!*\
  !*** ./components/Body/Trading.jsx ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddNetwork: function() { return /* reexport safe */ _Body_AddNetwork__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; },\n/* harmony export */   AddTokenPair: function() { return /* reexport safe */ _Body_AddTokenPair__WEBPACK_IMPORTED_MODULE_18__[\"default\"]; },\n/* harmony export */   Footer: function() { return /* reexport safe */ _Global_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; },\n/* harmony export */   Header: function() { return /* reexport safe */ _Global_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; },\n/* harmony export */   Home: function() { return /* reexport safe */ _Body_Home__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; },\n/* harmony export */   Loader: function() { return /* reexport safe */ _Global_Loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; },\n/* harmony export */   Login: function() { return /* reexport safe */ _Global_Login__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; },\n/* harmony export */   MovingSubmenu: function() { return /* reexport safe */ _Global_MovingSubmenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; },\n/* harmony export */   Networks: function() { return /* reexport safe */ _Body_Networks__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; },\n/* harmony export */   Preloader: function() { return /* reexport safe */ _Global_Preloader__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; },\n/* harmony export */   Price: function() { return /* reexport safe */ _Body_Price__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; },\n/* harmony export */   Profile: function() { return /* reexport safe */ _Body_Profile__WEBPACK_IMPORTED_MODULE_16__[\"default\"]; },\n/* harmony export */   Search: function() { return /* reexport safe */ _Global_Search__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; },\n/* harmony export */   Setting: function() { return /* reexport safe */ _Body_Setting__WEBPACK_IMPORTED_MODULE_17__[\"default\"]; },\n/* harmony export */   SideBar: function() { return /* reexport safe */ _Global_SideBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; },\n/* harmony export */   Signup: function() { return /* reexport safe */ _Global_Signup__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; },\n/* harmony export */   TopExchangeTokens: function() { return /* reexport default from dynamic */ _Body_TopExchangeTokens__WEBPACK_IMPORTED_MODULE_12___default.a; },\n/* harmony export */   TradeTokens: function() { return /* reexport default from dynamic */ _Body_TradeTokens__WEBPACK_IMPORTED_MODULE_11___default.a; },\n/* harmony export */   Trading: function() { return /* reexport default from dynamic */ _Body_Trading__WEBPACK_IMPORTED_MODULE_19___default.a; }\n/* harmony export */ });\n/* harmony import */ var _Global_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Global/Header */ \"./components/Global/Header.jsx\");\n/* harmony import */ var _Global_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Global/Footer */ \"./components/Global/Footer.jsx\");\n/* harmony import */ var _Global_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Global/Loader */ \"./components/Global/Loader.jsx\");\n/* harmony import */ var _Global_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Global/Login */ \"./components/Global/Login.jsx\");\n/* harmony import */ var _Global_MovingSubmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Global/MovingSubmenu */ \"./components/Global/MovingSubmenu.jsx\");\n/* harmony import */ var _Global_Preloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Global/Preloader */ \"./components/Global/Preloader.jsx\");\n/* harmony import */ var _Global_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Global/Search */ \"./components/Global/Search.jsx\");\n/* harmony import */ var _Global_SideBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Global/SideBar */ \"./components/Global/SideBar.jsx\");\n/* harmony import */ var _Global_Signup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Global/Signup */ \"./components/Global/Signup.jsx\");\n/* harmony import */ var _Global_useTimeout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Global/useTimeout */ \"./components/Global/useTimeout.jsx\");\n/* harmony import */ var _Body_Home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Body/Home */ \"./components/Body/Home.jsx\");\n/* harmony import */ var _Body_TradeTokens__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Body/TradeTokens */ \"./components/Body/TradeTokens.jsx\");\n/* harmony import */ var _Body_TradeTokens__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Body_TradeTokens__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _Body_TopExchangeTokens__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Body/TopExchangeTokens */ \"./components/Body/TopExchangeTokens.jsx\");\n/* harmony import */ var _Body_TopExchangeTokens__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Body_TopExchangeTokens__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _Body_Networks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Body/Networks */ \"./components/Body/Networks.jsx\");\n/* harmony import */ var _Body_AddNetwork__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Body/AddNetwork */ \"./components/Body/AddNetwork.jsx\");\n/* harmony import */ var _Body_Price__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Body/Price */ \"./components/Body/Price.jsx\");\n/* harmony import */ var _Body_Profile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Body/Profile */ \"./components/Body/Profile.jsx\");\n/* harmony import */ var _Body_Setting__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Body/Setting */ \"./components/Body/Setting.jsx\");\n/* harmony import */ var _Body_AddTokenPair__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Body/AddTokenPair */ \"./components/Body/AddTokenPair.jsx\");\n/* harmony import */ var _Body_Trading__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Body/Trading */ \"./components/Body/Trading.jsx\");\n/* harmony import */ var _Body_Trading__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_Body_Trading__WEBPACK_IMPORTED_MODULE_19__);\n// Global components\n\n\n\n\n\n\n\n\n\n\n// Body components\n\n\n\n\n\n\n\n\n\n\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNnQjtBQUNBO0FBQ0E7QUFDRjtBQUNnQjtBQUNSO0FBQ047QUFDRTtBQUNGO0FBQ1E7QUFFNUMsa0JBQWtCO0FBQ1k7QUFDYztBQUNZO0FBQ2xCO0FBQ0k7QUFDVjtBQUNJO0FBQ0E7QUFDVTtBQUNWO0FBR2lEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5kZXguanM/NTBkMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbG9iYWwgY29tcG9uZW50c1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0dsb2JhbC9IZWFkZXJcIlxyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0dsb2JhbC9Gb290ZXJcIlxyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL0dsb2JhbC9Mb2FkZXJcIlxyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vR2xvYmFsL0xvZ2luXCJcclxuaW1wb3J0IE1vdmluZ1N1Ym1lbnUgZnJvbSBcIi4vR2xvYmFsL01vdmluZ1N1Ym1lbnVcIlxyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gXCIuL0dsb2JhbC9QcmVsb2FkZXJcIlxyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL0dsb2JhbC9TZWFyY2hcIlxyXG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi9HbG9iYWwvU2lkZUJhclwiXHJcbmltcG9ydCBTaWdudXAgZnJvbSBcIi4vR2xvYmFsL1NpZ251cFwiXHJcbmltcG9ydCB1c2VUaW1lb3V0IGZyb20gXCIuL0dsb2JhbC91c2VUaW1lb3V0XCJcclxuXHJcbi8vIEJvZHkgY29tcG9uZW50c1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Cb2R5L0hvbWVcIlxyXG5pbXBvcnQgVHJhZGVUb2tlbnMgZnJvbSBcIi4vQm9keS9UcmFkZVRva2Vuc1wiXHJcbmltcG9ydCBUb3BFeGNoYW5nZVRva2VucyBmcm9tIFwiLi9Cb2R5L1RvcEV4Y2hhbmdlVG9rZW5zXCJcclxuaW1wb3J0IE5ldHdvcmtzIGZyb20gXCIuL0JvZHkvTmV0d29ya3NcIlxyXG5pbXBvcnQgQWRkTmV0d29yayBmcm9tIFwiLi9Cb2R5L0FkZE5ldHdvcmtcIlxyXG5pbXBvcnQgUHJpY2UgZnJvbSBcIi4vQm9keS9QcmljZVwiXHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuL0JvZHkvUHJvZmlsZVwiXHJcbmltcG9ydCBTZXR0aW5nIGZyb20gXCIuL0JvZHkvU2V0dGluZ1wiXHJcbmltcG9ydCBBZGRUb2tlblBhaXIgZnJvbSBcIi4vQm9keS9BZGRUb2tlblBhaXJcIlxyXG5pbXBvcnQgVHJhZGluZyBmcm9tIFwiLi9Cb2R5L1RyYWRpbmdcIlxyXG5cclxuZXhwb3J0e0hlYWRlcixGb290ZXIsU2VhcmNoLE1vdmluZ1N1Ym1lbnUsUHJlbG9hZGVyLFNpZGVCYXIsSG9tZSxUcmFkZVRva2VucyxUb3BFeGNoYW5nZVRva2Vuc1xyXG4sTmV0d29ya3MsQWRkTmV0d29yayxQcmljZSxMb2dpbixTaWdudXAsUHJvZmlsZSxTZXR0aW5nLEFkZFRva2VuUGFpcixUcmFkaW5nLExvYWRlcix9XHJcblxyXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiRm9vdGVyIiwiTG9hZGVyIiwiTG9naW4iLCJNb3ZpbmdTdWJtZW51IiwiUHJlbG9hZGVyIiwiU2VhcmNoIiwiU2lkZUJhciIsIlNpZ251cCIsInVzZVRpbWVvdXQiLCJIb21lIiwiVHJhZGVUb2tlbnMiLCJUb3BFeGNoYW5nZVRva2VucyIsIk5ldHdvcmtzIiwiQWRkTmV0d29yayIsIlByaWNlIiwiUHJvZmlsZSIsIlNldHRpbmciLCJBZGRUb2tlblBhaXIiLCJUcmFkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/index.js\n"));

/***/ })

});