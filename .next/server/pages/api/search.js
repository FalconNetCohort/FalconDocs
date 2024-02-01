"use strict";
(() => {
var exports = {};
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 194:
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
;// CONCATENATED MODULE: external "pdf-parse"
const external_pdf_parse_namespaceObject = require("pdf-parse");
;// CONCATENATED MODULE: external "firebase-admin"
const external_firebase_admin_namespaceObject = require("firebase-admin");
;// CONCATENATED MODULE: ./utils/firebaseAdmin.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'falcondocs-bc034-firebase-adminsdk-4ymhk-f2e8eab962.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// utils/firebaseAdmin.js


if (!external_firebase_admin_namespaceObject.apps.length) {
    external_firebase_admin_namespaceObject.initializeApp({
        credential: external_firebase_admin_namespaceObject.credential.cert(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'falcondocs-bc034-firebase-adminsdk-4ymhk-f2e8eab962.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    });
}
const { storage  } = external_firebase_admin_namespaceObject;
const { bucket  } = storage();

;// CONCATENATED MODULE: ./pages/api/search.js



const corsHandler = external_cors_default()({
    methods: [
        'GET',
        'HEAD'
    ]
});
async function handler(req, res1) {
    if (req.method !== 'GET') {
        return res1.status(405).end();
    }
    const searchText = req.query.text;
    try {
        await corsHandler(req, res1);
        const pdfUrl = 'gs://falcondocs-bc034.appspot.com/AFCWI 36-3501 Cadet Standards and Duties 27 JAN 2023 (Final)[2305843009226311704] (1).pdf';
        const pdfBuffer = await fetch(pdfUrl).then((res)=>res.arrayBuffer()
        );
        const pdfData = await (0,external_pdf_parse_namespaceObject.parse)(pdfBuffer);
        const occurrences = [
            ...pdfData.text.matchAll(new RegExp(searchText, 'g'))
        ].length;
        res1.status(200).json({
            occurrences
        });
    } catch (err) {
        console.error(err);
        res1.status(500).json({
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
var __webpack_exports__ = (__webpack_exec__(194));
module.exports = __webpack_exports__;

})();