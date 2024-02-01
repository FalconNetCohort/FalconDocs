"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./pages/index.js

// pages/index.js

function Home() {
    const { 0: text , 1: setText  } = (0,external_react_.useState)('');
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const { 0: response , 1: setResponse  } = (0,external_react_.useState)(null);
    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        const res = await fetch(`/api/search?text=${encodeURIComponent(text)}`);
        if (res.ok) {
            const { occurrences  } = await res.json();
            setResponse(`Found ${occurrences} occurrences of "${text}" in the PDF.`);
        } else {
            setResponse('An error occurred while searching.');
        }
        setIsLoading(false);
    }
    return(/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("input", {
                        type: "text",
                        value: text,
                        onChange: (e)=>setText(e.target.value)
                        ,
                        required: true
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("button", {
                        type: "submit",
                        disabled: isLoading,
                        children: "Search"
                    })
                ]
            }),
            response && /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                children: response
            })
        ]
    }));
};


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(656));
module.exports = __webpack_exports__;

})();