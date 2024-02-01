import { useState } from 'react';

export default function Home() {
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        const res = await fetch(`/api/search?text=${encodeURIComponent(text)}`);

        if(res.ok) {
            const { occurrences } = await res.json();
            setResponse(`Found ${occurrences} occurrences of "${text}" in the PDF.`);
        } else {
            setResponse('An error occurred while searching.');
        }
        setIsLoading(false);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} required />
                <button type="submit" disabled={isLoading}>Search</button>
            </form>
            {response && <p>{response}</p>}
        </div>
    );
}