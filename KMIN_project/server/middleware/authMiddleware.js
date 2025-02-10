import jwt from "jsonwebtoken";

import dotenv from "dotenv";

dotenv.config();

// Sử dụng SECRET_KEY từ biến môi trường
const SECRET_KEY = process.env.SECRET_KEY;

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};

export default authMiddleware;