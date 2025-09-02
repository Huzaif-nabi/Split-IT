import User from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import generateToken from "../config/jwt.js";

dotenv.config();

// Sign Up
export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // create and save user
    const user = new User({ name, email, password });
    await user.save();

    // generate JWT with user's id
    const token = generateToken(user._id);

    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// Login
export const Login = async (req,res) =>{
   const {email, password} = req.body;

   const existingUser = User.findOne({email});

   if(!existingUser){
    res.status(400).json({
      message: "user does not exists"
    })
   }


}

export default signUp;
