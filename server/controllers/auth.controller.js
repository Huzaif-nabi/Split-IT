import express from "express";
import User from "../models/User.js";

const router = express.Router();

// signUp

router.post('/signUp', (req,res)=>{
    try {
        const {name, email, password} = req.body;

        if(email){
            res.send("User already exists");
        }else{
            
        }
    } catch (error) {
        
    }
})