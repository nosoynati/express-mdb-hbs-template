import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import {fileURLToPath} from 'url'

import session from  'express-session';
import cookieParser from 'cookie-parser';
import MongoStore from 'connect-mongo';

const app = express();

dotenv.config();
const PORT = process.env.PORT;
const SECRET = process.env.SECRET;

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

export const startServer = async () => {
  app.get("/", (req,res) => {
    res.json({ message: "ey o key!"})
  })


  app.listen(PORT, () => {
    console.log(`Started server at http://localhost:${PORT}`)
  })
}