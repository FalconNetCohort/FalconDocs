src="https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js"
src="https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js"
src="https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js"
src="https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js"
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getFirestore, query, collection, where, getDocs } from "firebase/firestore";
    import { getStorage, ref, getDownloadURL } from "firebase/storage";
    import { getAnalytics } from "firebase/analytics";

    // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEtpAQKrw8VU5BvCOXriyFGYsO8p1DoLo",
    authDomain: "falcondocs-bc034.firebaseapp.com",
    databaseURL: "https://falcondocs-bc034-default-rtdb.firebaseio.com",
    projectId: "falcondocs-bc034",
    storageBucket: "falcondocs-bc034.appspot.com",
    messagingSenderId: "823382637921",
    appId: "1:823382637921:web:e45472a220cf7794635920",
    measurementId: "G-QH8NR1WT1W"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);
    const storage = getStorage(app);
    const analytics = getAnalytics(app);

    async function searchDocuments() {
        const queryText = document.getElementById('searchQuery').value;
        const resultsDiv = document.getElementById('searchResults');
        resultsDiv.innerHTML = ''; // Clear previous results

        const q = query(collection(firestore, 'pdfs'), where('text', 'array-contains', queryText));
        const querySnapshot = await getDocs(q);
        
        querySnapshot.forEach((doc) => {
            // Assuming `filePath` is stored in Firestore documents
            const filePath = doc.data().filePath;
            // Get the download URL for each document
            getDownloadURL(ref(storage, filePath)).then((url) => {
                var link = document.createElement('a');
                link.href = url;
                link.textContent = `Download ${doc.id}`;
                link.target = '_blank'; // Open in new tab
                resultsDiv.appendChild(link);
                resultsDiv.appendChild(document.createElement('br'));
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        });
    }
