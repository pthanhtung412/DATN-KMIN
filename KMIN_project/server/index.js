import express from "express";
import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from 'url';

// Cấu hình __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const uri =
  "mongodb+srv://pthanhtung412:Lycg6bl8YJea2enj@cluster0.k6z07.mongodb.net/demo_auth?retryWrites=true&w=majority";

async function connectToMongoDB() {
  try {
    await mongoose.connect(uri, {
    });
    console.log("Successfully connected to MongoDB using mongoose!");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
}

connectToMongoDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
