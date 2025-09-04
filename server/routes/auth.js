// routes/auth.router.js
import express from "express";
import {Login, signUp} from "../controllers/auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import passport from "passport";

const router = express.Router();


router.get("/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {

    res.redirect("/"); 
  }
);

router.post("/signup",authMiddleware, signUp);
router.post("/login",authMiddleware, Login);

export default router;
