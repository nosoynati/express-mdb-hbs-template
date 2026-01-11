import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({ override: true, quiet: true });
const URI = process.env.URI;

async function connectMongo(){
  try{
    await mongoose.connect(URI);
    console.info

  }catch(e){
    console.error("There was an error: " + e)
    process.exit(1)
  }
}

export default function connect(){
  return connectMongo();
}