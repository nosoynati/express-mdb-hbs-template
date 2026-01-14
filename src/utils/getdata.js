import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default async function getDocData(){
  const filepath = join(__dirname, '../data/data.json');
  const data = await fs.readFile(filepath, 'utf-8');
  return JSON.parse(data)
}
export async function getApiData(url){
  const response = await fetch(url);
  const data = await response.json();
  return data
}
