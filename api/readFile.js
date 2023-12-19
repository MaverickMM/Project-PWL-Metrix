// api/readFile.js
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const filePath = 'path/to/your/raw/file.raw';

  try {
    const byteArray = await fs.readFile(filePath);
    const base64Str = Buffer.from(byteArray).toString('base64');
    res.status(200).json({ base64Data: base64Str });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
