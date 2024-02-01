// utils/firebaseAdmin.js
import * as admin from 'firebase-admin';
import * as serviceAccount from 'firebase.js';

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

export const { storage } = admin;
export const { bucket } = storage();