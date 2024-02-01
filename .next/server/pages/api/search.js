"use strict";
(() => {
var exports = {};
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ search)
});

;// CONCATENATED MODULE: external "cors"
const external_cors_namespaceObject = require("cors");
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_namespaceObject);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "pdf-parse"
const external_pdf_parse_namespaceObject = require("pdf-parse");
;// CONCATENATED MODULE: ./pages/api/search.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../utils/firebaseAdmin'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// pages/api/search.js




// Run the CORS middleware
const corsHandler = external_cors_default()({
    methods: [
        'GET',
        'HEAD'
    ]
});
async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }
    const searchText = req.query.text;
    try {
        await corsHandler(req, res);
        const pdfUrl = 'gs://falcondocs-bc034.appspot.com/AFCWI 36-3501 Cadet Standards and Duties 27 JAN 2023 (Final)[2305843009226311704] (1).pdf';
        const pdfBuffer = (await external_axios_default().get(pdfUrl, {
            responseType: 'arraybuffer'
        })).data;
        const pdfData = await (0,external_pdf_parse_namespaceObject.parse)(pdfBuffer);
        const occurrences = [
            ...pdfData.text.matchAll(new RegExp(searchText, 'g'))
        ].length;
        res.status(200).json({
            occurrences
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: 'An error occurred while searching the PDF.'
        });
    }
}
/* harmony default export */ const search = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(486));
module.exports = __webpack_exports__;

})();