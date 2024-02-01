import * as admin from 'firebase-admin';

const serviceAccount = require('./falcondocs-bc034-firebase-adminsdk-4ymhk-f2e8eab962.json');

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

export default admin;