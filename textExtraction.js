async function searchDocuments(queryText) {
  const resultsDiv = document.getElementById('searchResults');
  resultsDiv.innerHTML = ''; // Clear previous results

  const querySnapshot = await firebase.firestore().collection('pdfs')
      .where('extractedText', 'array-contains', queryText)
      .get();

  querySnapshot.forEach(doc => {
      const data = doc.data();
      const link = document.createElement('a');
      link.href = `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${encodeURIComponent(data.filePath)}?alt=media`;
      link.textContent = `Download PDF`;
      link.target = '_blank'; // Open in new tab
      resultsDiv.appendChild(link);
      resultsDiv.appendChild(document.createElement('br'));
  });

  if (querySnapshot.empty) {
      resultsDiv.textContent = 'No documents found.';
  }
}
