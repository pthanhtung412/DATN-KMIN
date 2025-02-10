import express from "express";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import authMiddleware from './middleware/authMiddleware.js'
import userRouter from './routes/userRoutes.js'
import tagRouter from './routes/tagRouter.js'
import postRouter from './routes/postRouter.js'
import postTagRouter from './routes/postTagRouter.js'

// Cấu hình __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load các biến môi trường từ .env
dotenv.config();
console.log("SECRET_KEY:", process.env.SECRET_KEY); 
const app = express();

const uri =
  "mongodb+srv://pthanhtung412:Lycg6bl8YJea2enj@cluster0.k6z07.mongodb.net/C04?retryWrites=true&w=majority";

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

// Middleware để parse JSON
app.use(express.json());

// Middleware để parse dữ liệu URL-encoded (nếu cần)
app.use(express.urlencoded({ extended: true }));

// Route yêu cầu xác thực
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to the protected route!", user: req.user });
});

app.use(userRouter)
app.use(tagRouter)
app.use(postRouter)
app.use(postTagRouter)

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
