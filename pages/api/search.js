import cors from 'cors';
import { parse } from 'pdf-parse';
import { firebaseAdmin } from '../../utils/firebaseAdmin';
const corsHandler = cors({ methods: ['GET', 'HEAD'] });

async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    const searchText = req.query.text;

    try {
        await corsHandler(req, res);

        const pdfUrl = 'gs://falcondocs-bc034.appspot.com/AFCWI 36-3501 Cadet Standards and Duties 27 JAN 2023 (Final)[2305843009226311704] (1).pdf';
        const pdfBuffer = await fetch(pdfUrl).then(res => res.arrayBuffer());

        const pdfData = await parse(pdfBuffer);

        const occurrences = [...pdfData.text.matchAll(new RegExp(searchText, 'g'))].length;

        res.status(200).json({ occurrences });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while searching the PDF.' });
    }
}

export default handler;