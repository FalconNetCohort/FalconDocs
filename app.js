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
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const storage = firebase.storage();

async function searchDocuments() {
  const queryText = document.getElementById('searchQuery').value;
  const resultsDiv = document.getElementById('searchResults');
  resultsDiv.innerHTML = ''; // Clear previous results

  const q = firebase.firestore().query(firebase.firestore().collection(firestore, 'pdfs'), firebase.firestore().where('text', 'array-contains', queryText));
  const querySnapshot = await firebase.firestore().getDocs(q);
  
  querySnapshot.forEach((doc) => {
    // Assuming `filePath` is stored in Firestore documents for PDFs
    const filePath = doc.data().filePath;
    // Get the download URL for each document
    firebase.storage().getDownloadURL(firebase.storage().ref(storage, filePath))
      .then((url) => {
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
