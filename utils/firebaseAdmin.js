// utils/firebaseAdmin.js
import * as admin from 'firebase-admin';
import * as serviceAccount from 'falcondocs-bc034-firebase-adminsdk-4ymhk-f2e8eab962.json';

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

export const { storage } = admin;
export const { bucket } = storage();