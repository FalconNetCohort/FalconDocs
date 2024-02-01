"use client"
import { useState } from "react";

export default function Home() {
    const [text, setText] = useState("");
    const [result, setResult] = useState("");

    const searchPdf = async () => {
        try {
            const response = await fetch('https://us-central1-falcondocs-bc034.cloudfunctions.net/searchPdf', {
                method: 'POST',
                mode: 'cors', // <--- Add this line
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    searchTerm: text,
                    fileUrl: 'gs://falcondocs-bc034.appspot.com/AFCWI 36-3501 Cadet Standards and Duties 27 JAN 2023 (Final)[2305843009226311704] (1).pdf'
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setResult(`Occurrences: ${data.occurrences}`);
        } catch (error) {
            console.error('Error searching PDF', error);
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#fafafa" }}>
            <h1 style={{ marginBottom: "1rem" }}>PDF Search</h1>
            <input
                style={{ marginBottom: "1rem", padding: "0.5rem", width: "60%", borderRadius: "4px", border: "1px solid #ccc" }}
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
            />
            <button
                style={{ marginBottom: "1rem", padding: "0.5rem 1rem", backgroundColor: "#0070f3", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
                onClick={searchPdf}
            >
                Search
            </button>
            <p style={{ width: "60%", whiteSpace: "pre-wrap" }}>{result}</p>
        </div>
    );
}