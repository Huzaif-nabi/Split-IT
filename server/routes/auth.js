// routes/auth.router.js
import express from "express";
import {Login, signUp} from "../controllers/auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup",authMiddleware, signUp);
router.post("/login",authMiddleware, Login);

export default router;
