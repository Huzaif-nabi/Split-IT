import express from "express";
import dotenv from "dotenv";
import http from "http";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import router from "./routes/auth.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

// Middleware
app.use(express.json());
app.use(cookieParser());



// Routes
app.use("/api/auth", router ); 
app.get("/", (req, res) => {
  console.log("Hello");
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;

connectDB();

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
