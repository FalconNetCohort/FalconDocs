const functions = require('firebase-functions');
const admin = require('firebase-admin');
const pdfParse = require('pdf-parse');

admin.initializeApp();
const db = admin.firestore();

// Function triggered on PDF upload to Storage
exports.extractPdfTextAndStoreInFirestore = functions.storage.object().onFinalize(async (object) => {
    // Check if the uploaded file is a PDF
    if (object.contentType === 'application/pdf') {
        const filePath = object.name; // The file path in Storage
        const bucket = admin.storage().bucket(object.bucket);
        const file = bucket.file(filePath);

        try {
            const [fileBuffer] = await file.download();
            const data = await pdfParse(fileBuffer);
            const text = data.text; // The extracted text content

            // Create a unique identifier for the document, could be the file name or a UUID
            const docId = filePath.replace(/\/.*\//, '').replace('.pdf', '');

            // Store extracted text or relevant metadata in Firestore
            const docRef = db.collection('pdfs').doc(docId);
            await docRef.set({
                filePath: filePath,
                extractedText: text.substring(0, 5000), // Firestore document size limit consideration
                uploadTime: admin.firestore.FieldValue.serverTimestamp()
            });

            console.log(`Extracted text from ${filePath} and stored in Firestore.`);
        } catch (error) {
            console.error("Error extracting text from PDF:", error);
        }
    }
});
