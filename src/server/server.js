import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url'
import { engine } from 'express-handlebars';

import router from '../routes/home.router.js';
import logger from '../middleware/logger.js';

import session from 'express-session';
import cookieParser from 'cookie-parser';
import MongoStore from 'connect-mongo';


const app = express();

dotenv.config();
const PORT = process.env.PORT;
const SECRET = process.env.SECRET;

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, '../../public');

export const startServer = async () => {

  app.use(
    session({
      secret: SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 60 * 60 * 1000,
        httpOnly: true
      }
    })
  );
  app.use(express.json())
  app.use(express.static(path.join(__dirname, '../../public')))
  app.engine("handlebars", engine({
    defaultLayout: "main",
    layoutDir: path.join(__dirname, "../views/layouts")
  }));

  app.set("view engine", "handlebars");
  app.set("views", path.join(__dirname, "../views"))

  app.use(logger)
  app.use("/", router)

  app.listen(PORT, () => {
    console.log(`Started server at http://localhost:${PORT}`)
  })
}