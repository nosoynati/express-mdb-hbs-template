import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default async function getData(){
  const filepath = join(__dirname, '../data/data.json');
  const data = await fs.readFile(filepath, 'utf-8');
  return JSON.parse(data)
}
