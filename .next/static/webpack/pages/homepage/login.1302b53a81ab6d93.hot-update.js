"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/homepage/login",{

/***/ "./components/auth/sign-with-google.js":
/*!*********************************************!*\
  !*** ./components/auth/sign-with-google.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignWithGoogle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_firebase_congig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/firebase-congig.js */ \"./hooks/firebase-congig.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _components_auth_auth_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/auth/auth.module.css */ \"./components/auth/auth.module.css\");\n/* harmony import */ var _components_auth_auth_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_auth_auth_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction SignWithGoogle() {\n    //   signInWithPopup(auth, provider)\n    //     .then((result) => {\n    //       // This gives you a Google Access Token. You can use it to access the Google API.\n    //       const credential = GoogleAuthProvider.credentialFromResult(result);\n    //       const token = credential.accessToken;\n    //       // The signed-in user info.\n    //       const user = result.user;\n    //       // IdP data available using getAdditionalUserInfo(result)\n    //       // ...\n    //     })\n    //     .catch((error) => {\n    //       // Handle Errors here.\n    //       const errorCode = error.code;\n    //       const errorMessage = error.message;\n    //       // The email of the user's account used.\n    //       const email = error.customData.email;\n    //       // The AuthCredential type that was used.\n    //       const credential = GoogleAuthProvider.credentialFromError(error);\n    //       // ...\n    //     });\n    const signInWithGoogle = async ()=>{\n        try {\n            const result = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_hooks_firebase_congig_js__WEBPACK_IMPORTED_MODULE_2__.auth, _hooks_firebase_congig_js__WEBPACK_IMPORTED_MODULE_2__.provider);\n            const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider.credentialFromResult(result);\n            const token = credential.accessToken;\n            const user = result.user;\n            // 在這裡處理登入後的使用者資訊\n            console.log(user);\n            localStorage.setItem(\"token\", user.accessToken);\n            localStorage.setItem(\"user\", JSON.stringify(user));\n        } catch (error) {\n            //   const errorCode = error.code;\n            const errorMessage = error.message;\n            console.log(errorMessage);\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: signInWithGoogle,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"\".concat((_components_auth_auth_module_css__WEBPACK_IMPORTED_MODULE_5___default().googleLogo)),\n                src: \"/images/Google_Logo.svg.png\",\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"/Users/shinyuliao/iSpan/chart/components/auth/sign-with-google.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/shinyuliao/iSpan/chart/components/auth/sign-with-google.js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = SignWithGoogle;\nvar _c;\n$RefreshReg$(_c, \"SignWithGoogle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F1dGgvc2lnbi13aXRoLWdvb2dsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0M7QUFDUTtBQUNiO0FBQ2Y7QUFFekIsU0FBU08saUJBQWlCO0lBQ3ZDLG9DQUFvQztJQUNwQywwQkFBMEI7SUFDMUIsMEZBQTBGO0lBQzFGLDRFQUE0RTtJQUM1RSw4Q0FBOEM7SUFDOUMsb0NBQW9DO0lBQ3BDLGtDQUFrQztJQUNsQyxrRUFBa0U7SUFDbEUsZUFBZTtJQUNmLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLHNDQUFzQztJQUN0Qyw0Q0FBNEM7SUFDNUMsaURBQWlEO0lBQ2pELDhDQUE4QztJQUM5QyxrREFBa0Q7SUFDbEQsMEVBQTBFO0lBQzFFLGVBQWU7SUFDZixVQUFVO0lBQ1YsTUFBTUMsbUJBQW1CLFVBQVk7UUFDbkMsSUFBSTtZQUNGLE1BQU1DLFNBQVMsTUFBTU4sOERBQWVBLENBQUNGLDJEQUFJQSxFQUFFQywrREFBUUE7WUFDbkQsTUFBTVEsYUFBYU4sa0ZBQXVDLENBQUNLO1lBQzNELE1BQU1HLFFBQVFGLFdBQVdHLFdBQVc7WUFDcEMsTUFBTUMsT0FBT0wsT0FBT0ssSUFBSTtZQUN4QixpQkFBaUI7WUFDakJDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWkcsYUFBYUMsT0FBTyxDQUFDLFNBQVNKLEtBQUtELFdBQVc7WUFDOUNJLGFBQWFDLE9BQU8sQ0FBQyxRQUFRQyxLQUFLQyxTQUFTLENBQUNOO1FBQzlDLEVBQUUsT0FBT08sT0FBTztZQUNkLGtDQUFrQztZQUNsQyxNQUFNQyxlQUFlRCxNQUFNRSxPQUFPO1lBQ2xDUixRQUFRQyxHQUFHLENBQUNNO1lBQ1pQLFFBQVFNLEtBQUssQ0FBQ0E7UUFDaEI7SUFDRjtJQUNBLHFCQUNFO2tCQUNFLDRFQUFDRztZQUFPQyxTQUFTakI7c0JBQ2YsNEVBQUNrQjtnQkFDQ0MsV0FBVyxHQUFxQixPQUFsQnRCLG9GQUFpQjtnQkFDL0J3QixLQUFJO2dCQUNKQyxLQUFJOzs7Ozs7Ozs7Ozs7QUFLZCxDQUFDO0tBakR1QnZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXV0aC9zaWduLXdpdGgtZ29vZ2xlLmpzPzVhZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYXV0aCwgcHJvdmlkZXIgfSBmcm9tIFwiQC9ob29rcy9maXJlYmFzZS1jb25naWcuanNcIjtcbmltcG9ydCB7IHNpZ25JbldpdGhQb3B1cCwgR29vZ2xlQXV0aFByb3ZpZGVyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvY29tcG9uZW50cy9hdXRoL2F1dGgubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25XaXRoR29vZ2xlKCkge1xuICAvLyAgIHNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcilcbiAgLy8gICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgLy8gICAgICAgLy8gVGhpcyBnaXZlcyB5b3UgYSBHb29nbGUgQWNjZXNzIFRva2VuLiBZb3UgY2FuIHVzZSBpdCB0byBhY2Nlc3MgdGhlIEdvb2dsZSBBUEkuXG4gIC8vICAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBHb29nbGVBdXRoUHJvdmlkZXIuY3JlZGVudGlhbEZyb21SZXN1bHQocmVzdWx0KTtcbiAgLy8gICAgICAgY29uc3QgdG9rZW4gPSBjcmVkZW50aWFsLmFjY2Vzc1Rva2VuO1xuICAvLyAgICAgICAvLyBUaGUgc2lnbmVkLWluIHVzZXIgaW5mby5cbiAgLy8gICAgICAgY29uc3QgdXNlciA9IHJlc3VsdC51c2VyO1xuICAvLyAgICAgICAvLyBJZFAgZGF0YSBhdmFpbGFibGUgdXNpbmcgZ2V0QWRkaXRpb25hbFVzZXJJbmZvKHJlc3VsdClcbiAgLy8gICAgICAgLy8gLi4uXG4gIC8vICAgICB9KVxuICAvLyAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAvLyAgICAgICAvLyBIYW5kbGUgRXJyb3JzIGhlcmUuXG4gIC8vICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XG4gIC8vICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gIC8vICAgICAgIC8vIFRoZSBlbWFpbCBvZiB0aGUgdXNlcidzIGFjY291bnQgdXNlZC5cbiAgLy8gICAgICAgY29uc3QgZW1haWwgPSBlcnJvci5jdXN0b21EYXRhLmVtYWlsO1xuICAvLyAgICAgICAvLyBUaGUgQXV0aENyZWRlbnRpYWwgdHlwZSB0aGF0IHdhcyB1c2VkLlxuICAvLyAgICAgICBjb25zdCBjcmVkZW50aWFsID0gR29vZ2xlQXV0aFByb3ZpZGVyLmNyZWRlbnRpYWxGcm9tRXJyb3IoZXJyb3IpO1xuICAvLyAgICAgICAvLyAuLi5cbiAgLy8gICAgIH0pO1xuICBjb25zdCBzaWduSW5XaXRoR29vZ2xlID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW5XaXRoUG9wdXAoYXV0aCwgcHJvdmlkZXIpO1xuICAgICAgY29uc3QgY3JlZGVudGlhbCA9IEdvb2dsZUF1dGhQcm92aWRlci5jcmVkZW50aWFsRnJvbVJlc3VsdChyZXN1bHQpO1xuICAgICAgY29uc3QgdG9rZW4gPSBjcmVkZW50aWFsLmFjY2Vzc1Rva2VuO1xuICAgICAgY29uc3QgdXNlciA9IHJlc3VsdC51c2VyO1xuICAgICAgLy8g5Zyo6YCZ6KOh6JmV55CG55m75YWl5b6M55qE5L2/55So6ICF6LOH6KiKXG4gICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdXNlci5hY2Nlc3NUb2tlbik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduSW5XaXRoR29vZ2xlfT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmdvb2dsZUxvZ299YH1cbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL0dvb2dsZV9Mb2dvLnN2Zy5wbmdcIlxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImF1dGgiLCJwcm92aWRlciIsInNpZ25JbldpdGhQb3B1cCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInN0eWxlcyIsInVzZVJvdXRlciIsIlNpZ25XaXRoR29vZ2xlIiwic2lnbkluV2l0aEdvb2dsZSIsInJlc3VsdCIsImNyZWRlbnRpYWwiLCJjcmVkZW50aWFsRnJvbVJlc3VsdCIsInRva2VuIiwiYWNjZXNzVG9rZW4iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiYnV0dG9uIiwib25DbGljayIsImltZyIsImNsYXNzTmFtZSIsImdvb2dsZUxvZ28iLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/auth/sign-with-google.js\n"));

/***/ })

});